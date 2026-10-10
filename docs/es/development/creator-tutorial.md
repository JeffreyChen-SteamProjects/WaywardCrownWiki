---
title: "Tutorial del creador"
---

Cada plantilla empieza en **Creador y Taller de Steam** (menú principal, gestor de mapas o gestor de plugins) y sigue el mismo camino de **Nuevo proyecto** a un elemento privado del Workshop. Solo el último paso necesita Steam.

## Los pasos comunes

1. **Nuevo proyecto**: elige una plantilla, un nombre y una carpeta. El diálogo muestra dónde irá el proyecto antes de escribir nada.
2. **Editar proyecto**: un plugin se abre en el editor de plugins; un mapa o una campaña se abre con **Abrir el editor de terreno / campaña**, en un proceso propio que solo carga lo que el proyecto requiere. Guarda antes del siguiente paso: las comprobaciones, las pruebas y la publicación usan los archivos guardados.
3. **Validar contenido**: cada problema dice dónde está; un doble clic abre el editor ahí.
4. **Prueba de juego**: una partida aparte solo con este proyecto y lo que requiere. Su informe lista lo que se cargó y, mientras se ejecuta, el tiempo de tick, la memoria y el atlas de sprites, calificados de bien a demasiado alto.
5. **Exportar…**: un ZIP o una carpeta con el mismo ID de proyecto, para guardarlo o compartirlo.
6. **Publicar en Workshop**: con Steam abierto, elige **Privado** para una primera prueba y luego **Verificar y revisar** y **Presentar publicación**. Publicar no prueba la carga: busca el elemento en **Explorar el taller**, usa **Suscríbete** y síguelo en **Suscripciones** hasta que esté disponible.

## Mapa

La plantilla es un mapa de 32×32 con un castillo, un cofre de 100 de oro dos casillas al este, 500 de oro inicial y una victoria al recoger los cofres.

1. Pinta el terreno y coloca edificios, fortalezas y cofres en el editor de terreno, y guarda.
2. **Validar contenido** avisa de una fortaleza, un cofre o un jefe al que los héroes no llegan desde el castillo.
3. Versión: sube **Versión del proyecto** cada vez que publiques un cambio. Las partidas guardadas con la versión anterior conservan una copia de ella.

## Campaña

La plantilla son dos niveles, cada uno con su propio mapa con el mismo castillo y cofre; el archivo de campaña los ordena y da a cada uno un título, texto de historia y oro inicial.

1. Abre el panel de campaña en el editor de terreno para ordenar niveles y fijar victorias, texto de historia, lo que se conserva y los disparadores.
2. **Prueba de juego** puede empezar en cualquier nivel.
3. Dependencias: si un nivel usa las unidades de un plugin, añade el proyecto de ese plugin en **Dependencias** con un rango de versiones como `>=1.0.0, <2.0.0`.

## Complemento

La plantilla tiene una clase de héroe, un enemigo, un edificio que recluta la clase, una fortaleza que envía al enemigo, una habilidad, una investigación, un evento, un jefe con nombre, una apariencia de casilla y un archivo de idioma inglés, todo bajo el espacio de nombres del propio proyecto.

1. Edita en la pestaña **Objetos**. La barra elige un tipo; cada definición aparece con el nombre y la imagen que le daría el juego, y la seleccionada se muestra en vista previa (un caminante camina). **Nuevo…** agrega una según aquello en que se basa y su nombre; su imagen y su sonido se eligen o se importan en sus propias filas; el formulario de propiedades muestra en gris los valores tomados de la definición base y marca al instante un valor fuera de los límites del juego. **Avanzado** muestra la fila que agrega por ID y el JSON de la definición. El nombre se da en cada idioma del plugin, en las filas de debajo (**Añadir idioma** le da otro al plugin); una senda del castillo tiene tablas para sus efectos y sus especialidades, y filas para sus demás textos.
2. Recursos: la pestaña **Recursos** acepta archivos de imagen soltados en ella y muestra cada uno frente a los límites de tamaño y memoria. La apariencia de casilla de la plantilla usa `preview.png` como imagen de ejemplo; cámbiala ahí.
3. Sustituciones: **Copiar del juego…** añade una copia completa de un personaje del juego con tu propio ID, que sustituye al original donde se usa. Una definición con un ID integrado (por ejemplo `SLIME` con base `SLIME`) cambia el limo del propio juego mientras el plugin está activo; **Perfiles de contenido** muestra qué sustitución gana.
4. Versiones: **Versión del proyecto** es la versión propia del proyecto; **Versiones de juegos compatibles** es el rango de versiones del juego que acepta (`*` para cualquiera; una versión de desarrollo solo acepta `*`).

## Tutorial de jefes (complemento + campaña de dos niveles)

La plantilla es una carpeta con un plugin y una campaña de dos niveles que lo requiere; el segundo nivel se gana derrotando al jefe con nombre del plugin.

1. Las **Dependencias** de la campaña nombran el proyecto y la versión del plugin, así que una prueba lleva el plugin consigo.
2. Publica primero el plugin y luego la campaña: la ventana de publicación sugiere el elemento del Workshop del plugin como elemento necesario.
3. Sube la **Versión del proyecto** del plugin con cada cambio; deja el rango de la campaña lo bastante amplio para aceptarla.

## Misión de reino (un nivel: informe, misiones, oleadas, un jefe)

La plantilla es un nivel de reino con un informe, una ciudad, una guarida, las banderas de Explorar, Matar y Defender de la corona, dos oleadas anunciadas, un jefe con nombre y un hallazgo opcional. Desmóntala nivel a nivel en el panel de campaña y luego sigue los pasos comunes.

## Ejemplo Frostfang (un paquete de contenido terminado y su mapa)

La plantilla es un ejemplo terminado para desmontar: un paquete de contenido con una clase de héroe (el Guardián de la Escarcha), un monstruo (el Yeti de Escarcha), el salón que recluta la clase, la guarida de la que sale el monstruo, dos habilidades, una investigación y un jefe con nombre, cada uno con su propia imagen y sonido, y un mapa que requiere el paquete y se gana derrotando al jefe. La misma ventana ofrece también un ejemplo terminado para otras categorías del Workshop, cada uno como **Ejemplo: <categoría>** (entre ellos un mapa, una campaña, una historia, un conjunto de desafíos y paquetes de investigación, de eventos y de un idioma): se copia como proyecto tuyo, para jugarlo, desmontarlo y cambiarlo.

1. Abre el mapa en el editor de terreno y pulsa **Objetos…** para ver cómo cada definición se basa en una del juego; cambia un número o un nombre, guarda y coloca el resultado en el mapa.
2. Pulsa **Probar** para jugar el mapa con el paquete y nada más de lo tuyo.
3. Publica primero el paquete y luego el mapa: la ventana de publicación sugiere el elemento de Workshop del paquete como elemento requerido.

## Lo que una plantilla nunca tiene

Una plantilla no tiene ningún ID real de elemento del Workshop, ninguna cuenta de Steam ni ninguna ruta absoluta: los ID de proyecto se crean nuevos en tu ordenador y cada archivo se nombra en relación con el proyecto.
