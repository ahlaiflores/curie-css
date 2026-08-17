/* ═══════════════════════════════════════════════════════════
   CURIE.JS — comportamiento mínimo del mini-marco Curie.css
   Sin dependencias. Se auto-inicializa con atributos data-cu.
   API pública: window.CurieUI.avisar('mensaje')
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Avisos flotantes (toast) ─────────────────────────── */
  function avisar(mensaje, duracion) {
    var t = document.createElement('div');
    t.className = 'cu-toast';
    t.setAttribute('role', 'status');
    t.textContent = mensaje;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, duracion || 3200);
  }

  /* ── Pestañas: <div data-cu="pestanas"> ───────────────── */
  function iniciarPestanas(raiz) {
    var botones = raiz.querySelectorAll('.cu-pestanas__btn');
    var paneles = raiz.querySelectorAll('.cu-pestanas__panel');
    botones.forEach(function (btn, i) {
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      if (paneles[i] && i !== 0) paneles[i].hidden = true;
      btn.addEventListener('click', function () {
        botones.forEach(function (b, j) {
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
          if (paneles[j]) paneles[j].hidden = (b !== btn);
        });
      });
    });
  }

  /* ── Modal: disparador [data-cu-abrir="#id"] ──────────── */
  function iniciarModales() {
    document.addEventListener('click', function (ev) {
      var disparador = ev.target.closest('[data-cu-abrir]');
      if (disparador) {
        var modal = document.querySelector(disparador.getAttribute('data-cu-abrir'));
        if (modal) { modal.classList.add('cu-abierto'); }
        return;
      }
      if (ev.target.closest('.cu-modal__cerrar') || ev.target.classList.contains('cu-modal__fondo')) {
        var abierto = ev.target.closest('.cu-modal');
        if (abierto) abierto.classList.remove('cu-abierto');
      }
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        document.querySelectorAll('.cu-modal.cu-abierto').forEach(function (m) {
          m.classList.remove('cu-abierto');
        });
      }
    });
  }

  /* ── Acordeón exclusivo: contenedor [data-cu-exclusivo] ─ */
  function iniciarPliegues() {
    document.querySelectorAll('[data-cu-exclusivo]').forEach(function (grupo) {
      grupo.addEventListener('toggle', function (ev) {
        if (ev.target.open) {
          grupo.querySelectorAll('details[open]').forEach(function (d) {
            if (d !== ev.target) d.open = false;
          });
        }
      }, true);
    });
  }

  /* ── Arranque ─────────────────────────────────────────── */
  function iniciar() {
    document.querySelectorAll('[data-cu="pestanas"]').forEach(iniciarPestanas);
    iniciarModales();
    iniciarPliegues();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }

  window.CurieUI = { avisar: avisar };
})();
