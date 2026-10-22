---
title: "Modo Campaña"
---

El modo campaña ofrece escenarios de múltiples niveles, cada uno con condiciones de victoria específicas y un trasfondo narrativo.

---

## Campañas Integradas

El juego incluye una **Campaña Tutorial** integrada (5 niveles) que guía a los nuevos jugadores a través de las distintas mecánicas del juego. Tiene su propio botón, el primero del menú principal.

---

## Expediciones

Una expedición es una ruta de mapas en la que eliges cada paso sobre la marcha. Se abre desde el botón **Expedición** del menú principal.

**La expedición fronteriza** tiene seis mapas y cuatro rutas, con cuatro mapas cada una:

| Paso | Mapa | Qué pide |
|---|---|---|
| Inicio | **Campamento fronterizo** | Levanta un pueblo y arrasa el campamento goblin del este. El viejo faro del suroeste es opcional: puedes repararlo o desmantelarlo. |
| Primero | **Escolta en la ruta comercial** | Abre un puesto comercial al final del camino del sur y consigue que se paguen dos viajes de caravana. El campamento bandido puede quedar en pie. Da 300 de oro al mapa siguiente. |
| Primero | **Puesto perdido** | Termina el trabajo del puesto: reconstrúyelo o lleva a su superviviente a casa. Da 150 de oro al mapa siguiente. |
| Segundo | **Tumba sellada** | Termina el trabajo de la tumba: séllala, estúdiala o saquéala. |
| Segundo | **Frontera enemiga** | Corta la línea de suministros goblin (mata a un transportista antes de que entregue su carga, o arrasa el campamento que los envía) y arrasa el puesto avanzado goblin. El viejo faro es opcional. |
| Final | **Paso de la Corona** | Resiste dos incursiones y luego arrasa la fortaleza goblin. |

La ruta está dibujada en un mapa de pergamino de la frontera. Cada mapa es un sello, rodeado según lo que es para tu partida: ganado, donde estás y los caminos abiertos, el resto aún cerrado. Elige el siguiente paso por su sello o en la lista junto al mapa; un doble clic o Intro parte.

La fortaleza del paso envía una tercera oleada de refuerzos, salvo que tu partida haya roto la frontera enemiga. Una ruta que pase por la tumba también puede ganar; solo tiene que aguantar una oleada más. En el puesto y en la tumba el trabajo de la ruina es el objetivo, así que no se ofrece dejarlo de lado. Un trabajo que fracasa o del que te retiras se vuelve a ofrecer, y el mapa solo se pierde si se pierde el lugar de la ruina.

**Entre mapas**, la pantalla de expedición muestra la ruta recorrida hasta ahora y los caminos que siguen, cada uno con su informe y con lo que cambia al final de la ruta:

- Elige el grupo: hasta **seis** héroes siguen adelante y el resto espera atrás. La reserva admite como mucho **doce**; manda a alguien a casa para hacer sitio. Los héroes vuelven con la salud completa. Los caídos siguen caídos.
- El tesoro del mapa siguiente es su propio presupuesto, más la **mitad** del oro que dejó el mapa anterior (**1000** como máximo), más la recompensa del mapa anterior. La pantalla te hace la cuenta antes de partir.
- La investigación y la senda del castillo se conservan durante toda la partida. Los edificios se quedan atrás.

Un mapa perdido se vuelve a jugar desde el mismo inicio: con los mismos héroes, el mismo oro y el mismo mapa. Una partida queda en espera entre mapas hasta que la continúes desde el menú principal. **Abandonar la partida** la da por perdida, y **Terminar** cierra una partida que llegó al final. Cada ruta que completas queda en tu historial, con tu mejor tiempo.

### El mapa de la demo

Los cinco niveles de la demo también están dibujados en un solo mapa de pergamino, el **mapa de la expedición**. Primero va *La primera corona*; abre a la vez *Sombras en la ruta comercial*, *Oro escaso* y *Defiende el camino*, en el orden que quieras. Dos de los tres abren *La noche de Colmillo Rechinante*, y el tercero sigue abierto hasta ganar el final: saltarlo nunca es una derrota.

| Camino | Su recompensa para el siguiente nivel |
|---|---|
| **Sombras en la ruta comercial** | 300 de oro en el tesoro |
| **Oro escaso** | Edificios un 25 % más baratos, hasta ahorrar 400 de oro |
| **Defiende el camino** | Todos los héroes empiezan con las pociones llenas y se reparten 200 de oro en suministros |

La recompensa se usa en el siguiente nivel y desaparece; repetir ese nivel la vuelve a dar. La compañía, la mitad del tesoro (1000 como máximo), la investigación y la ruta del castillo pasan como en La expedición fronteriza.

Selecciona un sello para leer su nivel a la derecha: historia y objetivos, cuánto dura más o menos, el tesoro inicial y la recompensa. Un anillo discontinuo es un nivel aún cerrado (el panel dice cuántos caminos le faltan), uno dorado es un nivel al que puedes partir y uno doble es uno ganado en esta expedición. **Partir** lo empieza; **Practicar** juega solo un nivel ya superado, sin tocar la expedición. Los niveles superados antes de que existiera el mapa llevan su sello. Arrastra para mover, usa la rueda para el zoom, las flechas para pasar de un sello a otro, Intro para partir e Inicio para ver todo el mapa.

### Crear un mapa

El `map_route.json` de una campaña coloca sus niveles en un mapa. Se hace en la pestaña **Mapa** del editor de campañas: cada nodo es un nivel en las coordenadas `x`, `y` (de 0 a 1 desde arriba a la izquierda), con los nodos que espera (`after`) y cuántos de ellos hay que ganar (`need`, todos si se omite); `minutes` es la estimación de la sesión informativa y `reward` una recompensa única (`trade_subsidy`, `build_discount` o `escort_supply`, con un `amount`). `links` son las líneas de tinta, `end` el último nodo y `art` la imagen: `demo_frontier`, o un PNG o JPG dentro de la carpeta de la campaña (8192 píxeles por lado y 16 millones en total como máximo; si no, pergamino liso). **Comprobar ruta** dibuja una vista previa. El único nodo sin `after` es el inicio; el mapa debe poder jugarse hasta el final en algún orden, y el Workshop exige que cada nodo sea un nivel de la misma campaña o de una que trae el juego.

### El mapa de niveles de una campaña

Cada campaña se elige sobre pergamino. Su `level_map.json` coloca sus niveles; se hace en la pestaña **Mapa de niveles** del editor de campañas. `places` da a cada nivel, por su `id` fijo, las coordenadas `x`, `y` (de 0 a 1 desde arriba a la izquierda); `links` son las líneas de tinta entre dos niveles; `art` es la imagen (una del juego, o un PNG o JPG dentro de la carpeta de la campaña, con los mismos límites que un mapa de expedición). Sin el archivo, o cuando deja fuera un nivel, los niveles quedan a lo largo de un camino en pergamino liso, unidos por sus `requires`, o uno tras otro en una campaña que se juega en orden. Que un nivel esté abierto sigue dependiendo de sus `requires`. Una ruta de expedición (`expedition.json`) coloca sus mapas igual: un `art` y la `x` y la `y` de cada nodo; una ruta sin ellas se ordena por sus pasos.

### Crear una ruta

Una campaña se convierte en expedición con un archivo `expedition.json` junto a su `campaign.json`. Créala en la pestaña **Ruta de expedición** del editor de campañas: asigna a cada nodo un nivel de la campaña y el oro que da al nodo siguiente (de 0 a 2000), enumera los caminos que siguen y elige el inicio y el final. **Comprobar ruta** te dice cuántas rutas salen. Las comprobaciones del Workshop exigen que cada nodo apunte a un nivel de la misma campaña o de una que trae el juego. Una prueba de juego puede jugar la ruta desde su inicio.

```json
{
  "version": 1, "id": "frontier", "start": "camp", "end": "pass", "length": 4,
  "nodes": [{"id": "trade", "campaign": "expedition.frontier", "level": "trade", "grants": {"gold": 300}}, "..."],
  "edges": [["camp", "trade"], ["trade", "tomb"], "..."]
}
```

Una ruta debe llegar del inicio al final, sin bucles, con cada nodo en alguna ruta y con todas las rutas tan largas como `length`. `requires` enumera las capacidades que la ruta necesita además de `expeditions` (por ejemplo `relics` o `lair_expansion`). Una ruta cuyo nivel no está instalado, o cuya edición carece de una capacidad que requiere, sigue apareciendo en la pantalla de expedición con el motivo, pero no se puede empezar. Un nivel puede depender de lo que pasó en la partida con las condiciones de disparador `expedition_won` y `expedition_lacks` (`{"node": "<id>"}`), y los objetivos `complete_relic` (terminado el trabajo de una reliquia) e `intercept_supply` (N transportistas de suministros enemigos muertos antes de entregar, o arrasados todos los campamentos que los envían) dan una meta a un nodo.

---

## Condiciones de Victoria

Cada nivel de campaña puede tener una de las siguientes condiciones de victoria:

| `victory` | Condición | Descripción |
|---|-----------|-------------|
| `free` | **Juego Libre** | Sin condición de victoria específica; juega libremente |
| `destroy_enemy_buildings` | **Destruir Todas las Fortalezas** | Eliminar todas las Fortalezas Enemigas del mapa |
| `survive_ticks` | **Sobrevivir un Tiempo Determinado** | Mantener el Castillo con vida más allá de un número determinado de ticks |
| `reach_gold` | **Acumular Oro** | Alcanzar una cantidad objetivo de oro en tu tesoro |
| `destroy_building` | **Destruir Fortaleza Específica** | Destruir un tipo específico de Fortaleza Enemiga |
| `defend` | **Defender el Castillo** | Evitar que el Castillo sea destruido dentro de un tiempo establecido |
| `collect_chests` | **Recoger Todos los Cofres** | Abrir todos los cofres del tesoro en el mapa |
| `secure_trade` | **Asegurar la ruta comercial** | Se pagan `victory_value` viajes de caravana y todas las fortalezas enemigas del mapa quedan destruidas |

---

## Estructura de la Campaña

Las campañas se almacenan como carpetas en el directorio `campaigns/`:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Metadatos de la campaña y lista de niveles
    ├── level1.json       # Mapa del nivel 1
    ├── level2.json       # Mapa del nivel 2
    └── ...
```

### Formato de campaign.json

```json
{
  "name": "Campaña Tutorial",
  "description": "Aprende las mecánicas básicas del juego",
  "levels": [
    {
      "map": "level1.json",
      "title": "Un Nuevo Comienzo",
      "intro": "Bienvenido a Wayward Crown...",
      "outro": "¡Felicidades por superar este nivel!",
      "starting_gold": 500,
      "victory": "destroy_enemy_buildings",
      "victory_value": 0,
      "victory_target": "",
      "unlocked_buildings": [],
      "carry_over": {"gold": true, "adventurers": true},
      "triggers": [
        {"id": "welcome", "condition": "tick_reached", "params": {"value": 2},
         "action": "show_message", "action_params": {"text_key": "tut_welcome"}}
      ]
    }
  ]
}
```

### Configuración de Niveles

| Campo | Descripción |
|-------|-------------|
| `map` | Ruta del archivo de mapa (relativa a la carpeta de la campaña) |
| `title` | Título del nivel |
| `intro` | Texto de apertura |
| `outro` | Texto de finalización |
| `starting_gold` | Oro inicial (0 – 10⁷) |
| `victory` | Tipo de condición de victoria |
| `victory_value` | Valor de la condición de victoria (por ejemplo, cantidad de ticks de supervivencia, cantidad de oro objetivo, etc.) (0 – 10⁹) |
| `unlocked_buildings` | Lista blanca de edificios disponibles (restringe las opciones de construcción del jugador). Una lista vacía permite todos los edificios; `unlock_building` amplía una lista no vacía. |
| `victory_target` | Tipo de fortaleza para `destroy_building` (p. ej. `DRAGON_NEST`); se ignora en los demás casos |
| `carry_over` | Lo que se conserva del nivel anterior: `gold`, `adventurers`, `research`, `path` (la senda del castillo y su especialidad) (cada uno true/false). Lo que un nivel indica en `carry_over` se toma de otro nivel de la misma campaña cuando el jugador pasa directamente y queda anotado en ese momento; cada reintento del nivel empieza desde esa anotación. Un nivel iniciado desde el mapa de la campaña no conserva nada, y lo que un nivel no indica (tampoco la investigación ni la senda del castillo) no sobrevive al mapa. |
| `triggers` | Eventos programados: `condition` + `params`, `action` + `action_params`, y opcionalmente `id`, `after` (esperar a ese disparador) y `once`. Condiciones: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Acciones: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Un disparador que no es un objeto o tiene un campo con un tipo de valor incorrecto se omite y se informa en la consola. `chests_opened`, `enemy_killed_count` y `bounties_completed` cuentan desde el inicio del nivel. Un disparador que se repite (`once: false`) actúa en cada tick en que se cumple su condición, así que la validación rechaza el que genera enemigos, paga, publica una misión o inicia un evento; un encuentro con jefe empieza una vez y nunca solo después de su propia derrota. Una oleada `spawn_enemies` puede llevar `march` (`castle` o `road`): entonces marcha hacia el castillo o hacia el puesto comercial más cercano en lugar de vagar donde aparece. `reveal` (`x`, `y`, `radius` de 1 a 40) muestra un lugar al jugador: el terreno dentro de ese radio queda explorado. `ticks_after_step` cuenta su `value` desde el tick en que se disparó el disparador nombrado en `after`. Un parámetro de `show_message` escrito como `i18n:<key>` se traduce antes de entrar en el texto, de modo que un mensaje puede nombrar un panel o un edificio con las palabras del propio juego. |
| `id` | Nombre estable del nivel para el progreso y `requires` (letras, dígitos, `.`, `-`, `_`); si se omite, `level<n>` según su posición |
| `requires` | Niveles que hay que completar antes: un `id` de nivel de esta campaña, o `<id de campaña>/<id de nivel>` |
| `ruleset` | Solo `kingdom`, y puede omitirse: todos los niveles se juegan con las reglas kingdom. Un nivel o mapa que indica `classic`, o ninguno, se juega como un reino; un nombre desconocido se rechaza |
| `castle_level` | El nivel del castillo con el que empieza el nivel (1–3); si se omite, un torreón |
| `time_limit` | Ticks que puede durar el nivel; si se agotan sin haber ganado, se pierde. 0 u omitido: sin límite |
| `advice` | Lo que aconseja el informe; como los demás textos, puede ser una clave `i18n:` |
| `side_quests` | Hasta dos hallazgos opcionales en el nivel, cada uno `{"kind", "x", "y"}` con un kind de `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` o `lair` puede nombrar quién está allí |
| `objectives` | Hasta 8 condiciones de victoria adicionales, cada una `{"victory", "value", "target", "required"}` con cualquier victoria salvo `free`. El nivel se gana cuando su victoria principal (salvo `free`) y todas las requeridas se cumplen; las opcionales se cuentan en la línea de objetivo y se listan en los resultados |
| `defeats` | Hasta 4 formas más de perder, cada una `{"kind", "value"}`: `heroes_lost`, `buildings_lost` o `caravans_lost` alcanza el valor desde el inicio del nivel |
| `hero_bonds_disabled` | `true`: en este nivel los héroes no forman vínculos nuevos ni invitan a compañeros (conservan los que ya tenían); si se omite: vínculos como de costumbre |

La propia campaña puede llevar un `id` (el nombre con el que se guarda su progreso) y `"linear": false` (desafíos independientes: ganar uno no lleva al siguiente). También puede listar `blocked_events`: nombres de eventos aleatorios que sus niveles nunca sacan (por ejemplo `DRAGON_NEST`). Y un `roster`: los tipos de enemigo (nombres como `GOBLIN`) que vagan e invaden en sus niveles; si se omite, todos.

:::tip[Soporte de Localización]
El texto de la campaña puede usar etiquetas `i18n:CLAVE`, que mostrarán automáticamente la traducción correspondiente según el idioma del jugador.
:::

---

## La campaña de la demo

La campaña de historia de la demo (`campaigns/demo_kingdom/`) se abre desde el menú principal. Igual que el tutorial, la escribe `game/systems/demo_campaign.py`.

| Misión | Objetivo | Pierdes si | Inicio |
|---|---|---|---|
| 1. La primera corona | Encontrar el campamento goblin al este del torreón y hacer que lo destruyan | Cae el torreón | 1600 de oro y una lista corta de edificios, más las ruinas de una herrería y de un mercado |
| 2. Sombras en la ruta comercial | Conseguir tres viajes de caravana completos y destruir el campamento de los bandidos | Cae el castillo | 2400 de oro, un castillo de nivel 2, un pueblo pequeño y dos caminos pavimentados |
| 3. La noche de Colmillo Rechinante | Derrotar al Jefe Colmillo Rechinante | Cae el castillo | 3000 de oro, un castillo de nivel 2 y un pueblo de seis edificios |

La misión 1 empieza junto a las ruinas de una herrería y de un mercado: la cuadrilla de la corona las reconstruye sin coste, primero la herrería, y lo que coloques, también tu primer gremio, espera su turno tras ellas salvo que lo marques como prioritario. En la misión 1, los mensajes llevan del primer gremio al primer héroe, al mercado y al recaudador. A los 48 segundos aproximadamente, la corona coloca a su costa una misión «Explorar» cerca del campamento; cuando un héroe la completa, se te pide colocar una misión «Matar» sobre el campamento. En la misión 2 la corona hace explorar los dos sitios para el puesto comercial, los bandidos emboscan el camino del sur una vez (anunciado 20 segundos antes) y el primer edificio perdido trae 400 de oro de ayuda. En la misión 3 llega una incursión por el camino del este en el tick 1000 y otra por el camino del norte en el 2500 y el Jefe Colmillo Rechinante en el tick 4300, cada uno anunciado 100 ticks antes; arrasar su fortaleza es una expedición que vale su botín, pero solo su derrota da la victoria. Las misiones 1 y 2 incluyen un Gremio de Constructores para las reparaciones; en la misión 3 el castillo, ya de nivel 2, puede tomar su senda de inmediato, y una fortaleza arrasada deja de enviar sus propias incursiones. Las misiones 2 y 3 conservan la investigación de la misión anterior cuando pasas directamente; cada reintento empieza como el primero, y una misión elegida en el mapa empieza sin ella.

Los desafíos (`campaigns/demo_challenges/`, `"linear": false`) se escriben del mismo modo. *Oro escaso* se abre tras la misión 2: 600 de oro, un castillo de nivel 2, un pueblo pequeño con un puesto comercial en el camino del sur y 15 minutos (`time_limit`) para arrasar un campamento goblin y un campamento de bandidos que asalta el camino; los bandidos prueban el camino dos veces antes de que empiecen las incursiones del campamento. *Defiende el camino* se abre tras la misión 3: el puesto comercial ya está abierto, los bandidos llegan por el camino del sur cada 500 ticks, cada vez un poco más fuertes, y hay que conseguir 10 viajes de caravana completos en 14 minutos y 20 segundos. Un reino libre (el Reino libre de la demo o el Modo libre del juego completo) no tiene objetivo; su diálogo de inicio permite pedir que el Jefe Colmillo Rechinante venga una vez, a los 20 minutos de empezar (`game/systems/free_kingdom.py`). En *Defiende el camino*, cada incursión marcha hacia el puesto comercial: un puesto que nadie defiende es arrasado y su caravana desaparece con él, así que no hacer nada pierde el desafío.

Los **desafíos de jefe** se eligen en el menú principal, sobre su propio mapa de pergamino. Cada uno de los tres jefes con nombre —el jefe Colmillo Rechinante, el escorpión de las dunas y el tirano de ceniza— se combate por separado. Los edificios y las investigaciones ya se pagaron con 14000 de oro, y los héroes son los que reclutan tus gremios: el jefe llega a los diez minutos, con la cuenta atrás en la línea del objetivo, y un aviso te lo anuncia un minuto antes. Derrotar al jefe da la victoria. Mantener el puesto avanzado y arrasar el santuario sectario que envía a los guardias del tirano son objetivos opcionales: no cumplirlos nunca hace perder. En Difícil cada jefe usa sus ataques reforzados con los mismos umbrales de salud.

## Una misión de reino, paso a paso

1. En Creator / Workshop elige **Nuevo proyecto**, luego **Misión de reino**, y una carpeta nueva. Obtienes un nivel jugable: un pueblo, un campamento goblin al este, las misiones «Explorar», «Matar» y «Defender» de la corona, dos oleadas anunciadas y el jefe como jefe con nombre.
2. Ábrelo en el editor de campañas. El formulario del nivel tiene la historia (intro), el consejo del informe, el oro inicial y la victoria; debajo, el nivel de castillo inicial, el límite de tiempo y hasta dos hallazgos opcionales con sus casillas.
3. Pinta el mapa: mueve el pueblo, la guarida y los caminos. Un lugar debe ser accesible desde el castillo; si no, lo que hay en él se omite al empezar el nivel. Un edificio del archivo de mapa puede llevar `"ruin"` (de 1 a 99): empieza como obra con ese porcentaje de trabajo hecho, y la cuadrilla de la corona lo termina sin coste.
4. Abre los disparadores para cambiar los mensajes, las misiones de la corona (`post_bounty`), las oleadas (`spawn_enemies`) y cuándo llega el jefe (`spawn_boss`). La condición `enemy_building_seen` espera a que una guarida esté a la vista.
5. En `campaign.json`, `roster` nombra los monstruos que vagan por el mapa y `blocked_events` los eventos aleatorios que nunca se lanzan.
6. Valida: las comprobaciones señalan por su campo un nivel de castillo, un límite de tiempo, un hallazgo opcional, una entrada del elenco o un evento incorrectos. Luego juega el nivel desde el espacio de trabajo; la dificultad elegida allí fija las incursiones, las oleadas y el oro inicial.
7. Publícalo primero en privado y hazlo público cuando se juegue como quieres.

<!-- gameplay-preparation:start -->

Los héroes comparan tiendas accesibles, precios y plazas reales de alojamiento. Tras retirarse, se recuperan antes de volver a trabajos peligrosos; los detalles de expedición muestran la preparación y los descansos accesibles. Los niveles personalizados pueden ofrecer hasta tres planes completos de victoria y mantienen los requisitos comunes. Los niveles clásicos con una sola condición ganan si alcanzan la meta en el último tick permitido; los planes alternativos mantienen la prioridad de derrota.

```json
{
  "victory": "free",
  "objectives": [
    {
      "victory": "protect_building",
      "target": "trade-post"
    }
  ],
  "victory_plans": [
    {
      "id": "commerce",
      "title": "i18n:victory_kind_caravan_rounds",
      "objectives": [
        {
          "victory": "caravan_rounds",
          "value": 2
        }
      ]
    },
    {
      "id": "assault",
      "title": "i18n:victory_kind_destroy_building",
      "objectives": [
        {
          "victory": "destroy_building",
          "target": "GOBLIN_TENT"
        }
      ]
    }
  ]
}
```

```json
{"type": "TRADING_POST", "x": 100, "y": 80, "objective_id": "trade-post"}
```

Los detalles de expedición enlazan tiendas de pociones y descansos accesibles e indican la curación y los escudos aliados aprendidos. Las tiendas registran visitas totales, trayecto medio y ataques. Los resultados muestran un plan principal y hazañas simultáneas, con una sola liquidación básica.

<!-- gameplay-preparation:end -->

## Faro antiguo

En mapas con un faro antiguo, selecciona el lugar descubierto para ver costes, plazo y opciones en los detalles. Reparar requiere una cuadrilla o constructor allí y se pausa a mitad para financiar más o retirarse. Al terminar avisa de enemigos descubiertos a 20 casillas. Recuperar tesoro requiere que un héroe acepte la bandera de exploración, llegue y trabaje; el tesoro real y el trabajador cobran una vez. Ignorar no inicia plazo; retirarse devuelve solo fondos sin usar. La ruina no recluta ni mejora banderas. Salir del nivel abandona el trabajo aceptado en una reliquia y devuelve los fondos sin gastar, como una retirada; los efectos de una reliquia se quedan en su mapa y solo lo que la campaña conserva (oro, héroes, investigación) pasa al nivel siguiente.

## Logística goblin opcional

Mapas y niveles pueden declarar la capacidad `lair_expansion` y hasta cuatro planes en su lista homónima. Cada plan requiere `id` y `target`, que identifica una tienda goblin existente por su `objective_id` único. El transportista debe llegar y un trabajador vivo construir el puesto. Convoyes, escoltas, defensores e incursiones comparten presupuesto: cuatro ciclos y 64 unidades nuevas por origen como máximo. Perder el puesto retrasa y debilita ataques sin salir; destruir la base detiene nueva producción pero deja unidades vivas y puestos opcionales. Los puestos no añaden objetivos obligatorios de bases. Sin planes se conserva el calendario antiguo. Los transportistas llevan cajas distintivas, animaciones y sonidos propios, y solo aparecen en convoyes asignados. Tras explorarlos puedes ofrecer una recompensa por el transportista en movimiento. Matarlo pierde esa carga y retrasa la producción; los escoltas supervivientes permanecen en combate. Carga y recompensa se liquidan una sola vez; cancelar aplica las reglas habituales de reembolso. Los puestos muestran andamios, un cobertizo de suministros terminado y escombros propios. Un trabajador vivo construye el sitio atacable; sin terminar no genera defensores. Destruirlo retrasa ataques sin salir y devuelve la reunión a la base principal. Destruir la base detiene la producción pero conserva supervivientes y puestos aislados. Cada origen guarda un solo escombro decorativo, sin defensores ni objetivos de victoria adicionales.

El formulario Expansión de guaridas sirve para mapas y campañas: elige hasta cuatro tiendas goblin, tiempos de protección, preparación, entrega, construcción, reunión y espera, ciclos, presupuesto compartido, escoltas y ocho rectángulos prohibidos por origen. Tiempos en segundos de juego, en pasos de 0,2. Aplicar actualiza el borrador; cancelar conserva los valores. Vaciar los orígenes del mapa desactiva la expansión. Desactivarla expresamente en el nivel prevalece sobre el mapa; en otro caso una lista vacía hereda sus ajustes. Orígenes duplicados o ausentes y zonas fuera del mapa se rechazan antes de guardar.

El límite compartido de puestos del mapa se ajusta de uno a cuatro. Un convoy para un sitio nuevo reserva su plaza antes de salir; al llenarse, otros orígenes esperan sin emitir unidades ni acumular incursiones. Un puesto huérfano vivo ocupa su plaza hasta ser destruido.

La capa de inteligencia de suministro enemigo muestra solo puntos y sitios observados. Producción, salud, tesoro y defensores de la base, etapa/progreso del puesto y posiciones del convoy guardan tiempos separados. Fuera de la vista conservan el último valor; obras o demoliciones ocultas no cambian la imagen conocida. Otro reconocimiento actualiza los datos. La ruta recuerda dieciséis puntos observados como máximo. Avisos sin duplicados tras cargar y briefing con las cuatro estrategias de presupuesto finito.

El juego libre permite activar la expansión finita de tiendas goblin; está activada por defecto. Las partidas mixtas o goblin reservan una de las guaridas elegidas para una tienda y vinculan hasta cuatro existentes, sin aumentar el total. Otras razas no reciben fuentes nuevas. Las campañas usan la configuración del autor.

Andamio, depósito y ruina tienen siluetas distintas y tela animada, inmóvil con movimiento reducido. El mensajero martilla solo durante trabajo real. Descubrir convoyes y observar obras, finalización o ruinas tiene iconos y sonidos propios; cambios ocultos y cargar no repiten avisos. Formularios compactos y panel de inteligencia permiten desplazamiento, también por teclado en el panel.

Los mensajeros esperan hasta 10 segundos a que las unidades móviles despejen el terreno del nuevo puesto, nunca más allá del plazo de entrega; después entregan igualmente y quien siga allí pasa a la casilla libre más cercana. Los mensajeros y sus escoltas se detienen fuera del terreno previsto.

Tras recuperar materiales de una antigua almenara, las cuadrillas no la restauran gratis; la recuperación y la reparación son opciones excluyentes.

Estas son las condiciones predeterminadas de tumba y puesto. Selecciona un lugar descubierto para ver sus costes reales, el plazo original restante y resultados; el juego sigue durante los controles.

La sección opcional de la crónica sigue las reliquias descubiertas, la rama elegida, el progreso, los bloqueos, el plazo original restante y los resultados reales. Mostrar localiza el lugar original sin aceptar una opción ni gastar oro. Una reliquia que aparece a la vista es noticia, y también el trabajo aceptado que se detiene a medias, fracasa o termina; una retirada que elijas queda como una línea del registro. Un lugar muestra cómo está: una ruina hasta que se acepta un trabajo, andamios y material apilado mientras la corona trabaja allí, lo que deja la opción terminada (un faro encendido o desmantelado, una tumba sellada o abierta, una posta reconstruida) o escombros si el trabajo fracasó. Lo que detiene el trabajo se dice con precisión: ningún héroe que lo acepte, el motivo propio de los héroes para rechazarlo, monstruos cerca del lugar, otro trabajo de la cuadrilla primero (y el puesto del lugar en el orden) o agua, acantilados o edificios que lo encierran.

Sitios de reliquias opcionales: 0 desactiva la generación. Hasta dos reliquias distintas en terreno abierto accesible fuera de la zona segura del castillo, conservando caminos y rutas. No se paga ni trabaja antes de aceptar. Los sitios están a 21–80 casillas del castillo y deben permitir una ruta normal de obreros.

Las reglas de mapa y los niveles comparten un editor para hasta dos sitios originales, opciones fijas y costes, recompensas, trabajo y plazos limitados. Cancelar conserva el borrador; Aplicar valida fuentes sin ejecutar el juego. Una lista de nivel vacía hereda el mapa; `relics_disabled: true` desactiva esa herencia. Vaciar las reliquias de un mapa independiente elimina sus plantillas al guardar.

**Tumba sellada**

- Reforzar el sello: Tras financiación extra, suprime solo 2 incursiones previstas de Cementerio / Castillo No-muerto. Guardias, enemigos ambientales y otras fuentes siguen igual. La fuente original debe sobrevivir.
- Financiar investigación: Un desbloqueo válido de Afinidad arcana, o 80 de oro si no está disponible o ya se conoce. Se aplican los requisitos normales de torre de magos e investigación. Pausa a mitad: aportar más o retirarse.
- Abrir la tumba: Un tesoro de 240 de oro tras explorar realmente y derrotar a 3 guardias esqueleto. Financiar abre la tumba; los guardias vivos permanecen tras retirarse o vencer el plazo.

**Puesto perdido**

- Reconstruir suministros: Restaura 6 compras pagadas compartidas de nivel 1: curación, pociones o reactivos a precios normales. Sin ingresos periódicos ni mejoras. Reconstrucción y rescate se excluyen.
- Escoltar al superviviente: Voluntarios deben escoltar al superviviente original al castillo seguro. Probabilidad de unión 75%, fijada al financiar: un explorador solo con clase y senda permitidas y una plaza en un refugio terminado al llegar. La corona recibe 120 de oro con o sin unión; no hay reclutamiento pendiente. Rescate y reconstrucción se excluyen.

## Ampliaciones compartidas de esta versión

La Demo y el juego completo tienen las cuatro, y cada una se activa solo donde un mapa, un nivel o un ajuste la pide; las partidas, mapas y plugins antiguos no la activan por sí solos.

- **Expansión de guaridas**: los mensajeros de suministro, puestos avanzados y ofensivas limitadas de una tienda goblin. `lair_expansion` de un mapa o nivel (se desactiva con `lair_expansion_disabled`); en partida libre, *Expansión goblin de suministro finito* (activada por defecto).
- **Vínculos de héroes**: relaciones, invitaciones, viajar juntos y separarse, la lista y el panel de motivos. Activos salvo que el nivel ponga `hero_bonds_disabled`; en partida libre, *Vínculos de héroes* (activados por defecto).
- **Ruinas**: la baliza antigua, la tumba sellada y la estación perdida, cada una con dos decisiones principales. `relics` de un mapa o nivel (se desactiva con `relics_disabled`); en partida libre, *Sitios de reliquias opcionales* (0 por defecto).
- **Expediciones**: rondas, rutas, una lista que pasa de mapa en mapa, reintentos y la *Expedición fronteriza* de seis mapas y cuatro rutas. Una plantilla indica las capacidades que `requires`; si le falta un nivel o una capacidad lo dice, y no ofrece rutas a medias.

No forman parte de esta versión: la expansión de otras razas enemigas (solo se expande la tienda goblin), más plantillas de ruinas y edificios de ruina además de la baliza, expediciones más largas, más plantillas de expedición y rutas al azar, y los precios, plazos y combates de las cadenas de ruinas fijados jugando de verdad (por ahora son valores medidos).
