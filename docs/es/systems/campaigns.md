---
title: "Modo Campaña"
---

El modo campaña ofrece escenarios de múltiples niveles, cada uno con condiciones de victoria específicas y un trasfondo narrativo.

---

## Campañas Integradas

El juego incluye una **Campaña Tutorial** integrada (5 niveles) que guía a los nuevos jugadores a través de las distintas mecánicas del juego. Tiene su propio botón, el primero del menú principal.

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
| `carry_over` | Lo que se conserva del nivel anterior: `gold`, `adventurers`, `research`, `path` (la senda del castillo y su especialidad) (cada uno true/false). Lo que un nivel indica en `carry_over` se toma de otro nivel de la misma campaña cuando el jugador pasa directamente y queda anotado en ese momento; cada reintento del nivel empieza desde esa anotación. Un nivel iniciado desde la lista de misiones no conserva nada, y lo que un nivel no indica (tampoco la investigación ni la senda del castillo) no sobrevive al mapa. |
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

La misión 1 empieza junto a las ruinas de una herrería y de un mercado: la cuadrilla de la corona las reconstruye sin coste, primero la herrería, y lo que coloques, también tu primer gremio, espera su turno tras ellas salvo que lo marques como prioritario. En la misión 1, los mensajes llevan del primer gremio al primer héroe, al mercado y al recaudador. A los 48 segundos aproximadamente, la corona coloca a su costa una misión «Explorar» cerca del campamento; cuando un héroe la completa, se te pide colocar una misión «Matar» sobre el campamento. En la misión 2 la corona hace explorar los dos sitios para el puesto comercial, los bandidos emboscan el camino del sur una vez (anunciado 20 segundos antes) y el primer edificio perdido trae 400 de oro de ayuda. En la misión 3 llega una incursión por el camino del este en el tick 1000 y otra por el camino del norte en el 2500 y el Jefe Colmillo Rechinante en el tick 4300, cada uno anunciado 100 ticks antes; arrasar su fortaleza es una expedición que vale su botín, pero solo su derrota da la victoria. Las misiones 1 y 2 incluyen un Gremio de Constructores para las reparaciones; en la misión 3 el castillo, ya de nivel 2, puede tomar su senda de inmediato, y una fortaleza arrasada deja de enviar sus propias incursiones. Las misiones 2 y 3 conservan la investigación de la misión anterior cuando pasas directamente; cada reintento empieza como el primero, y una misión elegida en la lista empieza sin ella.

Los desafíos (`campaigns/demo_challenges/`, `"linear": false`) se escriben del mismo modo. *Oro escaso* se abre tras la misión 2: 600 de oro, un castillo de nivel 2, un pueblo pequeño con un puesto comercial en el camino del sur y 15 minutos (`time_limit`) para arrasar un campamento goblin y un campamento de bandidos que asalta el camino; los bandidos prueban el camino dos veces antes de que empiecen las incursiones del campamento. *Defiende el camino* se abre tras la misión 3: el puesto comercial ya está abierto, los bandidos llegan por el camino del sur cada 500 ticks, cada vez un poco más fuertes, y hay que conseguir 10 viajes de caravana completos en 14 minutos y 20 segundos. Un reino libre (el Reino libre de la demo o el Modo libre del juego completo) no tiene objetivo; su diálogo de inicio permite pedir que el Jefe Colmillo Rechinante venga una vez, a los 20 minutos de empezar (`game/systems/free_kingdom.py`). En *Defiende el camino*, cada incursión marcha hacia el puesto comercial: un puesto que nadie defiende es arrasado y su caravana desaparece con él, así que no hacer nada pierde el desafío.

## Una misión de reino, paso a paso

1. En Creator / Workshop elige **Nuevo proyecto**, luego **Misión de reino**, y una carpeta nueva. Obtienes un nivel jugable: un pueblo, un campamento goblin al este, las misiones «Explorar», «Matar» y «Defender» de la corona, dos oleadas anunciadas y el jefe como jefe con nombre.
2. Ábrelo en el editor de campañas. El formulario del nivel tiene la historia (intro), el consejo del informe, el oro inicial y la victoria; debajo, el nivel de castillo inicial, el límite de tiempo y hasta dos hallazgos opcionales con sus casillas.
3. Pinta el mapa: mueve el pueblo, la guarida y los caminos. Un lugar debe ser accesible desde el castillo; si no, lo que hay en él se omite al empezar el nivel. Un edificio del archivo de mapa puede llevar `"ruin"` (de 1 a 99): empieza como obra con ese porcentaje de trabajo hecho, y la cuadrilla de la corona lo termina sin coste.
4. Abre los disparadores para cambiar los mensajes, las misiones de la corona (`post_bounty`), las oleadas (`spawn_enemies`) y cuándo llega el jefe (`spawn_boss`). La condición `enemy_building_seen` espera a que una guarida esté a la vista.
5. En `campaign.json`, `roster` nombra los monstruos que vagan por el mapa y `blocked_events` los eventos aleatorios que nunca se lanzan.
6. Valida: las comprobaciones señalan por su campo un nivel de castillo, un límite de tiempo, un hallazgo opcional, una entrada del elenco o un evento incorrectos. Luego juega el nivel desde el espacio de trabajo; la dificultad elegida allí fija las incursiones, las oleadas y el oro inicial.
7. Publícalo primero en privado y hazlo público cuando se juegue como quieres.
