# Curie.css

Mini-marco de CSS y JS con estética victoriana / vintage — cuaderno de
laboratorio de 1898, papel envejecido, tinta ferrogálica y un acento
fosforescente de radio. Sin dependencias, sin build.

## Demo

👉 https://TU-USUARIO.github.io/curie-css/

## Uso

```html
<link rel="stylesheet" href="curie.css">
<script src="curie.js" defer></script>

<body class="cu-pagina">
  ...
</body>
```

Todas las clases llevan el prefijo `cu-`, y los estilos base solo se
aplican dentro de `.cu-pagina`, así que puede convivir con otros
frameworks o envolver solo una sección de una página existente.

## Componentes incluidos

Tipografía (títulos, capitulares, citas, ornamentos), botones, fichas,
tablas, formularios, avisos, sellos, pestañas, pliegues (acordeón),
modal y toasts (`CurieUI.avisar('mensaje')`).

## Personalizar

Todo sale de variables CSS en `:root` dentro de `curie.css`
(`--cu-papel`, `--cu-tinta`, `--cu-granate`, `--cu-radio`, etc.).
Redefínelas para cambiar de paleta o de época.

## Licencia

MIT
