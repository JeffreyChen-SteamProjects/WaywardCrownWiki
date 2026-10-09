---
title: "Desarrollo de Plugins"
---

## Crear y probar

Abre Creator / Workshop desde el menú principal o los administradores de mapas y plugins. Crea un mapa, una campaña de dos niveles, un plugin o el tutorial de jefe con su plugin asociado; edita, guarda, valida y prueba sin conexión. Gestiona proyectos locales, suscripciones, publicaciones, búsqueda y tareas. La plantilla «Misión de reino» crea una campaña kingdom de un nivel con informe, misiones, oleadas y un jefe con nombre. Importa un ZIP, un archivo de mapa o una carpeta de proyecto con «Importar contenido» o soltándolo en el espacio de trabajo; «Exportar…» escribe un ZIP o una carpeta, y «Abrir carpeta» muestra los archivos de un proyecto. Ambos piden una carpeta (se vuelve a ofrecer la última), un nombre ya usado allí pasa a ser nombre-2, nombre-3…, y nunca se escribe en el contenido que descarga Steam. Cada proyecto aparece con su vista previa, tipo, versión, autor, si este juego puede cargarlo y cómo fue su última validación; cada lista tiene búsqueda y filtro de tipo y dice por qué está vacía, y los detalles del proyecto seleccionado dan su licencia, versiones del juego, dependencias y carpeta. «Nuevo proyecto» lista las plantillas con lo que crea cada una y muestra dónde irá el proyecto antes de escribir nada. La validación avisa de fortalezas, cofres y jefes colocados a los que los héroes no pueden llegar desde el castillo (un error cuando la victoria los necesita) y limita un mapa a 64 fortalezas, 256 cofres y 32 jefes colocados; un doble clic en un problema de una casilla abre el editor allí. El editor de terreno y campañas se abre en un proceso propio que solo carga las dependencias del proyecto, así que el contenido que el jugador instaló ni aparece ni estorba; guarda directamente en el proyecto. La validación, la exportación, la prueba y la publicación esperan mientras el proyecto tenga cambios sin guardar en un editor abierto desde el espacio de trabajo: usan los archivos guardados. En el editor de plugins, las fases de un jefe son una tabla (la salud con que empieza cada una, sus habilidades), y la cantidad, el límite y el aviso de una habilidad tienen campos propios. El editor de plugins guarda un borrador del trabajo sin guardar poco después de cada cambio, junto a los ajustes y fuera del proyecto; al volver a abrir el proyecto tras un fallo lo ofrece de nuevo. En el editor de plugins, «Duplicar» copia una definición con un ID nuevo, una definición que otra nombra no puede borrarse hasta quitar ese uso, y «Copiar del juego…» añade una copia completa de un actor del juego con su propio ID, que sustituye al original donde se use sin tocar los archivos del juego. Clases, enemigos, edificios, fortalezas e investigaciones tienen un formulario de propiedades (rangos y crecimiento de atributos, oro que sueltan, precios, la clase que recluta un edificio, a quién envía una fortaleza, a qué se aplica una investigación) que muestra en gris los valores tomados de la definición base y marca al instante un valor fuera de los límites del juego o un ID desconocido; las dependencias se editan en una tabla. La pestaña Recursos acepta archivos soltados, muestra el área visible de cada imagen frente a los límites de tamaño y memoria del juego, la previsualiza como terreno o icono, guarda una línea de fuente y créditos, lista y fija qué definiciones la usan, renombra un archivo con todos sus usos, no quita uno que siga en uso y redirige los campos que nombran un archivo ausente. Una prueba se abre con la lista de lo que cargó (cada plugin en orden de carga con las definiciones que añade o sustituye, y los plugins omitidos con el motivo); el espacio de trabajo muestra la misma lista y pone una definición omitida del plugin probado en su lista de problemas, donde abrir un problema de una tabla de definiciones lleva a esa definición en el editor de plugins.

Importar carpetas/ZIP o crear copias editables genera nuevos ID y cambia las referencias de su propio espacio de nombres. Conserva autor, origen y licencia, sin heredar vínculos de actualización. Los originales de Steam son de solo lectura. Se verifican rutas relativas, límites, matrices y ciclos de disparadores. Una licencia vacía no autoriza redistribuir. Al publicar una copia, la revisión muestra su procedencia (proyecto, versión, autor y página del original) y las condiciones del autor original, y solo se envía cuando confirmas que mantienes esa atribución y sigues esas condiciones o, si el original no da licencia, que tienes el permiso de su autor; una licencia no indicada siempre se muestra como sin permiso para compartir. Una copia nombra su original en sus detalles y avisa cuando el original suscrito ha cambiado, y las descripciones emergentes de Crear copia editable local, Exportar… y Cancelar suscripción dicen qué hace cada una.

Publicar requiere Steam: prepara página e imagen, revisa la instantánea inmutable de archivos y hashes y confirma el envío. Las tareas continúan al cerrar la ventana; la preparación puede cancelarse. Un envío o resultado desconocido exige consultar el estado o resincronizar antes de reintentar. Los vínculos distinguen cuenta, app e ID. La imagen debe ser menor de 1 MiB; las pruebas usan Steam simulado. Publica primero los plugins requeridos y confirma los ID de la misma app al revisar el mapa/campaña. El asistente guarda textos por idioma y metadatos JSON, recorta la imagen principal a un cuadrado y ordena/elimina hasta ocho capturas adicionales. Las publicaciones existentes pueden actualizar solo la página y las dependencias sin reenviar contenido; las imágenes se incluyen en la instantánea revisada. El asistente puede crear la vista previa principal a partir del propio proyecto (el terreno de un mapa con su castillo, fortalezas y cofres, los primeros niveles de una campaña, las imágenes propias de un plugin, cada uno con el título), muestra la vista previa tal como se subirá con su tamaño, dibuja un pie opcional en la parte inferior de cada captura e indica qué imágenes nombradas por un borrador faltan. Sus tres pasos (página, dependencias y versiones, revisión) se recorren con Atrás y Siguiente (Alt+Izquierda, Alt+Derecha); un problema lleva a su paso y remarca el campo hasta que se edita, y la revisión cuenta los archivos añadidos, cambiados y quitados desde la última publicación. Una tarea fallida indica qué tipo de problema tuvo (permiso, acuerdo del Workshop, espacio, Steam ocupado, tiempo agotado, Steam sin conexión, comprobaciones, resultado desconocido, interrupción), qué hacer después y un código como WS-PERM-R15 que no nombra cuenta, elemento ni archivo. Al elegir uno de tus elementos en Mis publicaciones se muestran su visibilidad, versión, fechas de creación y actualización, tamaño, el proyecto local vinculado y una lista de lo que cambiaría una actualización desde ese proyecto: campos de la página, archivos y elementos necesarios. Al elegir un elemento en el explorador se muestra su descripción (o que Steam no dio ninguna) y dos partes separadas: lo que dice Steam (tipo, elementos necesarios, las ramas del juego que permite el autor, la versión que registró su publicación, fecha de actualización, tamaño, votos) y, cuando Steam ya lo instaló, lo que dice su propio manifiesto (proyecto y versión, si esta compilación puede ejecutar las versiones del juego que pide, los proyectos que requiere y lo que puede cambiar). Lo que Steam no da no se rellena. Un elemento suscrito solo se usa cuando Steam lo ha instalado y pasa una comprobación: su manifiesto se puede leer en este juego y cada proyecto que requiere está instalado en una versión aceptada, sin ciclos (si dos elementos dan el mismo proyecto, se queda tu propio plugin; si no, el elemento más antiguo). Un elemento que Steam está actualizando sigue en uso con la versión instalada. La pestaña Suscripciones muestra en qué punto está cada elemento suscrito (esperando a Steam, descargando con sus bytes, esperando la comprobación, disponible, falta lo que requiere, o con error y por qué), y el explorador dice lo mismo del elemento elegido; una descarga que Steam no pudo terminar, por ejemplo con el disco lleno, no se vuelve a pedir hasta que pulses Reintentar descarga. Antes de cargar una partida, el juego revisa el contenido con que se hizo: si un proyecto que usó se actualizó, se desactivó, se dejó de seguir o no se puede usar, o hay otro contenido activado, nombra cada uno y, tras preguntar, carga la partida desde su copia conservada, o dice por qué no puede cargarla (sin copia utilizable, una actualización del juego, otra cuenta o app de Steam, Steam cerrado) y cómo arreglarlo; el archivo de la partida y la partida en curso quedan como estaban. «Contenido conservado…» en la pestaña Suscripciones lista esas copias con las partidas que dependen de ellas, las comprueba y quita las no usadas; una copia de la que depende una partida solo se quita tras una confirmación que nombra las partidas, y la que usa la partida en curso nunca. Los detalles de artículos y proyectos también indican la versión de este juego (sin definir en una versión de desarrollo, donde no carga el contenido que pide una versión concreta) y su rama de Steam, y Abrir la página del elemento en la pestaña Suscripciones muestra un artículo que no se puede usar; si Steam cambia el juego a otra rama mientras se juega, un aviso lo dice y nada se reinicia solo. Las etiquetas de una página son su tipo más cualquiera de Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; el paso de página lista los idiomas con página escrita (cualquier otro idioma de Steam muestra la predeterminada), y para un elemento ya publicado, «Importar página desde Steam…» compara la página de Steam con tu borrador campo por campo y toma solo los campos que marques. Sin Steam no se cargan los elementos suscritos ni se usan las copias conservadas, porque ambos pertenecen a una cuenta y una app de Steam (la demo y el juego completo son apps distintas, cada una con sus elementos, borradores y perfiles de contenido); una partida que los necesita lo dice, y crear, comprobar, probar, exportar e importar tus propios proyectos funciona sin conexión. Mientras se ejecuta una prueba mide el tiempo de tick, la memoria y el atlas de sprites, y el espacio de trabajo los añade al informe de la prueba calificados como bien, a vigilar o demasiado alto, con lo que ayuda; si una subida falla por el contenido o la cuota, la explicación nombra los límites de Steam, y al terminar recuerda suscribirte y comprobar que carga, porque publicar no lo prueba. Una subida solo se abandona tras cinco minutos sin avanzar, y las tareas terminadas o canceladas salen de la lista una semana después; las sesiones de prueba que ningún juego en marcha usa se eliminan al empezar otras, Intro sobre un proyecto local abre su editor y estas ventanas caben en una pantalla de 1280 × 720 en todos los idiomas.

## Definiciones y dependencias

Los plugins versionados añaden clases, enemigos, edificios y fortalezas independientes mediante plantillas integradas, además de habilidades, investigación, eventos, jefes con nombre, recursos e idiomas. Los nuevos ID usan `namespace:name`; un ID integrado sobrescribe contenido existente. Los archivos centrales son de solo lectura. Las apariencias sustituyen gráficos de actores o terreno sin cambiar sus valores de juego. Un edificio del jugador puede llevar un efecto: una habilidad de ataque, curación, escudo o estado que lanza a intervalos fijos sobre los enemigos o héroes a su alcance desde un nivel dado. Un paquete cuyas capacidades son solo assets y languages solo puede contener skins e idiomas, y una imagen o un sonido que el juego no puede usar deja el integrado en su lugar.

El manifiesto común registra ID del proyecto, autor, versión, compatibilidad, recursos y dependencias. El orden es determinista; las dependencias ausentes, incompatibles o cíclicas impiden cargar. Los proyectos antiguos conservan formato y orden. Los perfiles muestran las sobrescrituras y se aplican a la próxima partida. Los perfiles de contenido listan los plugins elegidos en orden de carga, cada uno con su procedencia y la versión instalada, la que usa la partida en curso y la elegida para después; Subir y Bajar cambian el orden solo donde las dependencias lo permiten, y el orden se aplica a la próxima carga en la misma cuenta y app de Steam. Antes de cambiar nada, el perfil lista lo que aplicar activaría o desactivaría, con los mapas, campañas, plugins y partidas guardadas que usan un plugin que se desactiva; un doble clic en un problema encuentra su plugin, un mapa o campaña puede sugerir los plugins que necesita y un elemento suscrito que no se ofrece, como la copia de un plugin propio, dice por qué.

## Ejemplos

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Recursos y límites

| JSON | Recursos y límites |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | el árbol de habilidades de una clase (habilidades pasivas): una lista de `{"id", "level", "effect", "requires": [ids]}`, tantas como se quiera y varias por nivel, o la tabla antigua `{"<nivel>": {"id", "effect"}}`, leída como una cadena; los id son únicos en la clase, `requires` nombra habilidades de la misma clase, sin ciclos |
| adventurer_classes.active_skill, tree_skills | las habilidades activas propias de la clase, nodos del mismo árbol: `active_skill` es el ID de la primera (una raíz), `tree_skills` hasta 12 ID de las que crecen del árbol. Cada una es una habilidad de `skills` (nunca summon), aprendida en su `level` cuando el héroe tiene todas las que nombra su `requires` (hasta 8 ID de habilidades de la clase, pasivas o activas; ninguna para la primera), y cada una espera su propio `cooldown`. Sin `active_skill` la clase conserva la primera habilidad de su clase base |
| buildings.effect | una habilidad attack, heal, shield o status (nunca summon), lanzada cada 10–3600 ticks desde el nivel 1–3 del edificio; los estados no se acumulan |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; solo apariencia |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (dibujado opaco); skins de personajes: como su objetivo; lo demás, y layout fuera de los personajes, no se usa y se avisa |
| plugin art and sounds | 256 MiB de imágenes decodificadas (ancho × alto × 4) para todos los paquetes activos, cada archivo cuenta una vez, por encima queda el arte integrado; 64 MiB de sonidos de plugins en memoria |
| capabilities: assets, languages only | solo skins e idiomas; otras definiciones se rechazan |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 mapas de nivel |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Compatibilidad con la versión del juego

`game_version` limita la versión publicada del juego en ejecución. `"*"` se acepta, también para proyectos antiguos. Un intervalo específico solo se acepta si la compilación declara una versión semántica conocida que lo cumple; de lo contrario, se rechazan la validación, la carga y la publicación. En este repositorio, `game.build_info.GAME_VERSION` aún es desconocida: usa `"*"` hasta que la compilación de distribución proporcione una versión aprobada. La `version` del proyecto y los nombres de ramas de Steam no indican la versión del juego.
