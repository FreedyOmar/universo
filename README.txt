# Un universo llamado nosotros

Proyecto web romántico en HTML, CSS y JavaScript. Listo para abrir localmente o desplegar en Vercel.

## Qué hay de nuevo
- Cada planeta se abre: al tocarlo, una esfera del color del planeta se expande hasta cubrir la pantalla y de ahí surge la tarjeta del recuerdo.
- Los planetas orbitan de verdad y se frenan suavemente cuando te acercas o abres un recuerdo.
- Cada planeta tiene su propia textura (bandas, cráteres, nubes, continentes, mancha) que gira sobre sí misma.
- Fondo vivo: estrellas que titilan, estrellas fugaces, nebulosas que flotan y parallax con el movimiento del cursor.
- Texto del recuerdo con efecto de escritura, foto con zoom lento y color de acento distinto en cada tarjeta.
- Los planetas aparecen de uno en uno: al cerrar un recuerdo aparece el siguiente. El progreso NO se guarda; cada vez que se abre la página empieza solo con el primer planeta.
- Los botones Anterior y Continuar (y las flechas del teclado) solo aparecen cuando ya aparecieron los 24 planetas. Antes, la tarjeta solo se cierra para descubrir el siguiente.
- Contador de planetas descubiertos. Al descubrir los 24, el botón de la sorpresa final brilla.
- Mensaje final con corazones y estrellas que suben, y chispas.
- Respeta la opción "reducir movimiento" del sistema.

## Archivos
- `index.html`: estructura de la experiencia.
- `style.css`: diseño, estrellas, órbitas, planetas, texturas y animaciones.
- `script.js`: interacciones y contenido de los 24 recuerdos.
- `fotos/`: aquí van las fotografías y la música.

## Añadir tus fotografías
Coloca 24 imágenes dentro de la carpeta `fotos` y nómbralas así:
`recuerdo-01`, `recuerdo-02`, ... `recuerdo-24` (con su extensión, por ejemplo `recuerdo-01.png`).

El formato puede ser cualquiera: la página prueba automáticamente .jpg, .jpeg, .png, .webp, .avif y .gif (también en mayúsculas, como .JPG). Solo importa que el nombre sea `recuerdo-01`, `recuerdo-02`, etc. No hace falta tocar `script.js`.

Recomendación: usa fotos horizontales o cuadradas, con buena resolución. La página adapta el recorte automáticamente.

## Personalizar los textos
Abre `script.js`. Al principio encontrarás el arreglo `memories`. Cada elemento contiene:
- `title`: título del recuerdo.
- `text`: dedicatoria breve.
- `date`: etiqueta que aparece sobre el título.
- `photo`: nombre del archivo de imagen.
- `orbit`: órbita (1 a 4).
- `color`: color del planeta.

Justo debajo está `ORBITS`, donde puedes cambiar la velocidad de cada órbita (grados por segundo; el signo cambia el sentido) y el tamaño de los planetas.

Edita también el texto final en `index.html`, dentro de `#finalText`.

## Música
Opcionalmente, coloca un archivo llamado `musica.mp3` dentro de `fotos/`. El navegador no permite iniciar audio automáticamente en muchos teléfonos, por eso hay un botón SONIDO para activarlo.

## Probar
Abre `index.html` en tu navegador. Para una prueba local más fiable, usa la extensión Live Server de VS Code.

## Publicar en Vercel
Sube el contenido de esta carpeta a un repositorio de GitHub y luego impórtalo desde Vercel. No requiere compilación ni comandos de build: es un sitio estático.
