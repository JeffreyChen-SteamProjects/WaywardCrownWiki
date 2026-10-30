---
title: "Campaign Mode"
---

Campaign mode offers multi-level scenarios, each with specific victory conditions and a story backdrop.

---

## Built-in Campaigns

The game includes a built-in **Tutorial Campaign** (5 levels) that guides new players through the various game mechanics. It has a plaque of its own, the first on the main menu.

---

## Expeditions

An expedition is a route of maps you choose one step at a time. Open it from the main menu's **Expedition** plaque.

The **Frontier Expedition** has six maps and four routes, four maps on each:

| Step | Map | What it asks |
|---|---|---|
| Start | **Frontier Camp** | Raise a town and raze the goblin tent to the east. The old beacon to the southwest is optional: repair it or salvage it. |
| First | **Trade Road Escort** | Open a trading post at the end of the south road and see two caravan round trips paid. The bandit camp may stand. Grants the next map 300 gold. |
| First | **Lost Station** | Finish the station's work: rebuild it, or bring its survivor home. Grants the next map 150 gold. |
| Second | **Sealed Vault** | Finish the tomb's work: seal it, study it or loot it. |
| Second | **Enemy Border** | Cut the goblin supply line (kill a courier before it delivers, or raze the camp that sends them) and raze the goblin outpost. The old beacon is optional. |
| End | **Crown Pass** | Hold off two raids, then raze the goblin fortress. |

The route is drawn on a parchment map of the marches. Each map is a seal, ringed by what it is to your run: won, where you stand and the ways on open, the rest still closed. Select the way on by its seal or from the list beside the map; a double click or Enter sets out.

The pass's fortress sends a third wave of reinforcements, unless your run broke the enemy border. A route through the vault can still win; it just fights one wave more. On the station and the vault the ruin's work is the goal, so leaving it is not offered. Work that fails or is withdrawn is offered again, and only losing the ruin's site loses the map.

**Between maps** the expedition screen shows the route so far and the ways on, each with its briefing and what it changes at the end of the route:

- Pick the party: up to **six** heroes go on, and the rest wait behind. The reserve holds at most **twelve**; send someone home to make room. Heroes come back to full health. The fallen stay fallen.
- The next map's treasury is its own budget, plus **half** the gold the last map left (**1000** at most), plus the last map's reward. The screen adds it up for you before you set out.
- Research and the castle path are kept for the whole run. Buildings stay behind.

A lost map is played again from the same start: the same heroes, gold and map. A run waits between maps until you continue it from the main menu. **Abandon run** gives it up, and **Finish** closes a run that reached the end. Each route you finish is kept in your record, with your best time.

### The Demo's map

The Demo's five levels are also drawn on one parchment map, the **Expedition map**. *The First Crown* comes first; it opens *Shadows on the Trade Road*, *Thin Gold* and *Hold the Road* at once, to be played in any order. Any two of the three open *Night of Gnashfang*, and the third stays open until the end is won — skipping it is never a failure.

| Road | Its reward for the next level |
|---|---|
| **Shadows on the Trade Road** | 300 gold in the treasury |
| **Thin Gold** | Buildings a quarter cheaper, until 400 gold is saved |
| **Hold the Road** | Every hero starts with full potions, and 200 gold is shared out for supplies |

A reward is used on the next level and then gone; a retry of that level gets it again. The party, half the treasury (1000 at most), research and the castle path carry on as on the Frontier Expedition.

Select a seal to read its level on the right: its story and goals, about how long it takes, the treasury it starts with and its reward. A dashed ring is a level not open yet (the panel says how many roads it still waits on), a gold ring one you can set out for, a double ring one done in this run. **Set out** starts it; **Practice** plays a level already cleared on its own, without touching the run. Levels cleared before the map existed show their stamp. Drag to pan, scroll to zoom, the arrow keys move between seals, Enter sets out and Home shows the whole map.

### Making a map

A campaign's `map_route.json` places its levels on a map. Make it in the campaign editor's **Map** tab: each node is a level at map coordinates `x`, `y` (0 to 1 from the top left), with the nodes it waits on (`after`) and how many of them must be won (`need`, all when left out); `minutes` is the briefing's estimate and `reward` a one-time reward (`trade_subsidy`, `build_discount` or `escort_supply`, with an `amount`). `links` are the ink lines, `end` the last node, and `art` the sheet: `demo_frontier`, or a PNG or JPG inside the campaign folder (8192 pixels a side and 16 million in all at most; plain parchment otherwise). **Check route** draws a preview. The one node with no `after` is the start; the map must be playable to its end in some order, and the Workshop holds every node to a level of the same campaign or of one the game ships.

### A campaign's level map

Every campaign is chosen on parchment. Its `level_map.json` places its levels; make it in the campaign editor's **Level map** tab. `places` gives each level, by its stable `id`, map coordinates `x`, `y` (0 to 1 from the top left); `links` are the ink lines between two levels; `art` is the sheet (a sheet of the game's, or a PNG or JPG inside the campaign folder, with the same limits as an expedition map's). Without the file, or when it leaves a level out, the levels stand along a road on plain parchment, joined by what each `requires`, or one after another in a campaign played in order. Whether a level is open is still what it `requires`. An expedition route (`expedition.json`) places its maps the same way: an `art`, and each node's `x` and `y`; a route without them is laid out by its steps.

### Making a route

A campaign becomes an expedition with an `expedition.json` file beside its `campaign.json`. Build it in the campaign editor's **Expedition route** tab: give each node a level of the campaign and the gold it grants the next node (0 to 2000), list the ways on, then choose the start and the end. **Check route** says how many routes it makes. The Workshop's checks hold every node to a level of the same campaign or of one the game ships. A playtest can play the route from its start.

```json
{
  "version": 1, "id": "frontier", "start": "camp", "end": "pass", "length": 4,
  "nodes": [{"id": "trade", "campaign": "expedition.frontier", "level": "trade", "grants": {"gold": 300}}, "..."],
  "edges": [["camp", "trade"], ["trade", "tomb"], "..."]
}
```

A route must reach the end from the start, with no loop, every node on some route, and every route as long as `length`. `requires` lists the capabilities the route needs besides `expeditions` (for example `relics` or `lair_expansion`). A route whose level is not installed, or whose edition lacks a capability it requires, is still listed on the expedition screen, with the reason, but cannot be started. A level waits on the run with the trigger conditions `expedition_won` and `expedition_lacks` (`{"node": "<id>"}`), and the objectives `complete_relic` (a relic's work finished) and `intercept_supply` (N enemy supply couriers killed before they deliver, or every camp that sends them razed) give a node a goal.

---

## Victory Conditions

Each campaign level can have one of the following victory conditions:

| `victory` | Condition | Description |
|---|-----------|-------------|
| `free` | **Free Play** | No specific victory condition; play freely |
| `destroy_enemy_buildings` | **Destroy All Strongholds** | Eliminate all Enemy Strongholds on the map |
| `survive_ticks` | **Survive for a Set Time** | Keep the Castle alive beyond a specified number of ticks |
| `reach_gold` | **Accumulate Gold** | Reach a target amount of gold in your treasury |
| `destroy_building` | **Destroy Specific Stronghold** | Destroy a specific type of Enemy Stronghold |
| `defend` | **Defend the Castle** | Prevent the Castle from being destroyed within a set time |
| `collect_chests` | **Collect All Chests** | Open every treasure chest on the map |
| `secure_trade` | **Secure the Trade Road** | `victory_value` caravan round trips are paid and every Enemy Stronghold on the map is destroyed |

---

## Campaign Structure

Campaigns are stored as folders in the `campaigns/` directory:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Campaign metadata and level list
    ├── level1.json       # Level 1 map
    ├── level2.json       # Level 2 map
    └── ...
```

### campaign.json Format

```json
{
  "name": "Tutorial Campaign",
  "description": "Learn the basic game mechanics",
  "levels": [
    {
      "map": "level1.json",
      "title": "A New Beginning",
      "intro": "Welcome to Wayward Crown...",
      "outro": "Congratulations on clearing this level!",
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

### Level Settings

| Field | Description |
|-------|-------------|
| `map` | Map file path (relative to the campaign folder) |
| `title` | Level title |
| `intro` | Opening text |
| `outro` | Completion text |
| `starting_gold` | Starting gold (0 – 10⁷) |
| `victory` | Victory condition type |
| `victory_value` | Victory condition value (e.g., survival tick count, target gold amount, etc.) (0 – 10⁹) |
| `unlocked_buildings` | Available buildings whitelist (restricts the player's building options). An empty list allows every building; `unlock_building` adds to a non-empty list. |
| `victory_target` | Stronghold type for `destroy_building` (e.g. `DRAGON_NEST`); ignored otherwise |
| `carry_over` | What survives from the previous level: `gold`, `adventurers`, `research`, `path` (the castle path and its speciality) (each true/false). What a level lists in `carry_over` is taken from another level of the same campaign as the player goes straight on and written down then; every retry of the level starts from that record. A level started from the campaign's map carries nothing, and what a level does not list (research and the castle path too) does not outlast the map. |
| `triggers` | Scripted events: `condition` + `params`, `action` + `action_params`, optional `id`, `after` (wait for that trigger) and `once`. Conditions: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Actions: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. A trigger that is not an object or has a field of the wrong kind is left out and reported on the console. `chests_opened`, `enemy_killed_count` and `bounties_completed` count from the start of the level. A repeating trigger (`once: false`) acts on every tick its condition holds, so the checks refuse one that spawns, pays, posts a flag or starts an event; a boss encounter starts once and never only after its own defeat. A `spawn_enemies` wave may carry `march` (`castle` or `road`): it then marches on the castle, or on the nearest trading post, instead of wandering where it lands. `reveal` (`x`, `y`, `radius` of 1 to 40) shows the player a place: the ground within that many tiles is explored. `ticks_after_step` counts its `value` from the tick the trigger named in `after` fired. A `show_message` param written as `i18n:<key>` is translated before it goes into the text, so a message can name a panel or a building in the game's own words. |
| `id` | Stable name of the level for progress and `requires` (letters, digits, `.`, `-`, `_`); `level<n>` by position when left out |
| `requires` | Levels that must be finished first: a level `id` of this campaign, or `<campaign id>/<level id>` |
| `ruleset` | Only `kingdom`, and it may be left out: every level plays the kingdom rules. A level or map that names `classic`, or none, plays as a kingdom; an unknown name is refused |
| `castle_level` | The castle level the level starts at (1–3); when left out, a keep |
| `time_limit` | Ticks the level may take; when they are up and it is not won, it is lost. 0 or left out: no limit |
| `advice` | What the briefing suggests; like the other texts it may be an `i18n:` key |
| `side_quests` | Up to two optional finds on the level, each `{"kind", "x", "y"}` with a kind of `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` or `lair` may name who is there |
| `objectives` | Up to 8 further victory conditions, each `{"victory", "value", "target", "required"}` with any victory but `free`. The level is won when its main victory (unless `free`) and every required one are met; optional ones are counted on the objective line and listed in the results |
| `defeats` | Up to 4 more ways to lose, each `{"kind", "value"}`: `heroes_lost`, `buildings_lost` or `caravans_lost` reaching the value since the level began |
| `hero_bonds_disabled` | `true`: heroes form no new bonds and invite no companions on this level (their earlier bonds stay); left out: bonds as usual |

The campaign itself may carry an `id` (the name its progress is recorded under) and `"linear": false` (independent challenges: winning one does not lead into the next). It may also list `blocked_events`: names of random events its levels never roll (for example `DRAGON_NEST`). And a `roster`: the enemy types (names such as `GOBLIN`) that wander and invade on its levels; left out, every type does.

:::tip[Localization Support]
Campaign text can use `i18n:KEY` tags, which will automatically display the corresponding translation based on the player's language.
:::

---

## The Demo Campaign

The Demo's story campaign (`campaigns/demo_kingdom/`) is opened from the main menu. `game/systems/demo_campaign.py` writes it, as `game/systems/tutorial_campaign.py` writes the tutorial.

| Mission | Goal | You lose when | Start |
|---|---|---|---|
| 1. The First Crown | Find the goblin camp east of the keep and have it destroyed | The keep falls | 1600 gold and a short list of buildings, plus a ruined blacksmith and a ruined market |
| 2. Shadows on the Trade Road | See three caravan round trips paid and destroy the raiders' camp | The castle falls | 2400 gold, a castle of level 2, a small town and two paved roads |
| 3. Night of Gnashfang | Defeat Chief Gnashfang | The castle falls | 3000 gold, a castle of level 2 and a town of six buildings |

Mission 1 starts beside a ruined blacksmith and a ruined market: the crown's crew rebuilds them at no cost, the blacksmith first, and whatever you place, your first guild too, waits its turn behind them unless you mark it to be built first. In mission 1, messages lead from the first guild to the first hero, the market and the tax collector. About 48 seconds in, the crown posts an Explore bounty near the camp at its own cost; once a hero has done it you are asked to post a Kill bounty on the camp. In mission 2 the crown has both trading post sites explored, raiders ambush the south road once (announced 20 seconds ahead), and the first building lost brings 400 gold of relief. In mission 3 one raid comes down the east road at tick 1000 and one down the north road at tick 2500 and Chief Gnashfang at tick 4300, each announced 100 ticks ahead; razing his fortress is an expedition worth its plunder, but only his defeat wins. Missions 1 and 2 add a Builder's Guild to the build list for repairs; in mission 3 the castle, already level 2, can take its path at once, and a razed fortress stops the raids it sends itself. Missions 2 and 3 keep the research of the mission before when you go straight on; every retry starts as the first try did, and a mission picked on the map starts without it.

The challenges (`campaigns/demo_challenges/`, `"linear": false`) are written the same way. *Thin Gold* opens after mission 2: 600 gold, a castle of level 2, a small town with a trading post on the south road, and 15 minutes (`time_limit`) to raze a goblin tent and a bandit camp that raids the road; bandits try the road twice before the camp's own raids begin. *Hold the Road* opens after mission 3: the trading post is already open, raiders come down the south road every 500 ticks, each raid a little stronger, and 9 caravan round trips must be paid within 14 minutes 20 seconds. A free kingdom (the Demo's Free Kingdom or the full game's Sandbox) has no objective; its start dialog can ask for Chief Gnashfang to come once, 20 minutes in (`game/systems/free_kingdom.py`). In *Hold the Road* every raid marches on the trading post: a post nobody defends is razed and its caravan is gone with it, so doing nothing loses the challenge.

**Boss challenges** are chosen from the main menu on a parchment map of their own. Each of the three named bosses — Chief Gnashfang, the Dune Scorpion and the Ash Tyrant — is fought on its own. The buildings and studies are already paid for out of 14000 gold, and the heroes are the ones your guilds take on: the boss comes after ten minutes, counted down on the objective line, and a message warns of it a minute before. Defeating the boss wins. Holding the outpost, and razing the cultist shrine that sends the Ash Tyrant's guards, are optional goals: missing them never loses the challenge. On Hard each boss uses its enhanced moves, at the same health thresholds.

## A Kingdom Mission, Step by Step

1. In Creator / Workshop choose **New project**, then **Kingdom mission**, and a new folder. You get one playable level: a town, a goblin tent to the east, the crown's Explore, Kill and Defend flags, two announced waves and the chief as a named boss.
2. Open it in the campaign editor. The level form has the story (intro), the advice the briefing shows, the starting gold and the victory; below them the starting castle level, the time limit and up to two optional finds with their tiles.
3. Paint the map: move the town, the lair and the roads. A site has to be reachable from the castle, or what stands on it is left out when the level starts. A building in the map file may carry `"ruin"` (1 to 99): it starts as a site with that percent of its work done, and the crown's crew finishes it at no cost.
4. Open the triggers to change the messages, the flags the crown grants (`post_bounty`), the waves (`spawn_enemies`) and when the boss comes (`spawn_boss`). The condition `enemy_building_seen` waits until a lair is in sight.
5. In `campaign.json`, the campaign's `roster` names the monsters that wander the map and `blocked_events` the random events it never rolls.
6. Validate: the checks name a wrong castle level, time limit, optional find, roster entry or event by its field. Then play the level from the workspace; the difficulty chosen there sizes the raids, the waves and the starting gold.
7. Publish it privately first, and make it public when it plays the way you mean it to.

<!-- gameplay-preparation:start -->

Heroes compare reachable shops, prices and genuine lodging capacity. Retreating heroes recover before returning to dangerous work; expedition details show preparation and reachable rest. Custom levels may offer up to three complete victory plans, with common requirements still enforced. Legacy levels with a single victory condition still win when the goal is achieved on the final allowed tick; alternative victory plans retain defeat priority.

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

Expedition details link to reachable potion shops and rest, and count learnt healing and ally shields. Shops record total arrivals, average journey time and attacks. Results name one primary victory plan and any simultaneous feats, with one basic settlement.

<!-- gameplay-preparation:end -->

## Ancient beacon

On maps with an ancient beacon, select its discovered site to see costs, the deadline and choices in the details panel. Repair requires a crew or builder on site and pauses halfway for extra funding or withdrawal. Completion warns about discovered enemies within 20 tiles. Salvage needs a hero to accept the explore flag, arrive and work; the crown and worker are paid once. Ignoring the offer starts no deadline. Withdrawal refunds only unspent funds. The relic gives no recruitment or flag bonus. Leaving the level abandons accepted relic work and returns its unspent funds, as a withdrawal would; a relic's effects stay with its map, and only what the campaign carries over (gold, heroes, research) goes on to the next level.

## Optional Goblin logistics

Authored maps and campaign levels may enable `lair_expansion` with that capability and up to four plans. Each plan names an existing Goblin Tent by its unique `objective_id`; `id` and `target` are required. Supply couriers physically travel before funding an outpost, and a living worker must build it. Convoys, escorts, defenders and raids share a finite unit budget: at most four cycles and 64 new units per source. A lost outpost delays and weakens an unissued raid; destroying the main lair stops new production but leaves living units and optional outposts. Outposts do not add mandatory main-lair victory targets. No plans preserves the old schedule. Supply couriers now carry distinctive crates and have their own animations and sounds; they appear only in assigned convoys. After scouting, post a kill bounty on the moving courier. Killing it cancels that cargo and delays production, while surviving escorts remain in combat. Cargo and bounty rewards settle once; cancellation uses the usual refund rules. Outposts have distinct open scaffolding, completed supply-canopy and destroyed-debris appearances. A living worker must build the attackable site; unfinished sites have no new defenders. Destroying an outpost delays unissued attacks and moves their muster back to the main lair. Destroying the main stops production but preserves living units and orphaned outposts. Each source retains at most one decorative ruin, which adds no guards or victory targets.

The map and campaign editors share a Lair expansion form: choose up to four existing Goblin Tents, set protection, preparation, delivery, construction, muster and cooldown times, cycle and shared unit budgets, escorts, and up to eight forbidden rectangles per source. Times use game seconds in 0.2-second increments. Applying changes keeps an author draft; cancellation preserves it and clearing map sources disables expansion. A campaign can explicitly disable expansion on that level, taking priority over its map. Without that override, an empty level list inherits the map. Duplicate or missing sources and rectangles outside the map are rejected before saving.

The shared map outpost limit is adjustable from one to four. A convoy funding a new site reserves its slot before departure; other sources wait at capacity without issuing units or accumulating raids. A living orphaned outpost keeps its slot until destroyed.

Enemy supply intelligence is a map layer of observed waypoints and sites. Main-lair production, health, hoard and defenders, outpost stage/progress and convoy positions keep separate observation times. Outside crown sight they stay at the last observed value; hidden construction or demolition does not change the known image. Scouting the site again refreshes it. Routes remember at most sixteen observed waypoints. Discovery notices are deduplicated across saves, and the briefing explains interception, outpost destruction, main-lair destruction and holding against a finite budget.

Free play offers an optional finite Goblin Tent expansion switch, on by default. Mixed or goblin-only games reserve one of the chosen lair slots for a Goblin Tent and bind at most four existing tents; the total lair count stays unchanged. Other races have no synthetic source. Campaigns use their authored settings instead of this preference.

Logistics sites show distinct scaffolding, depot and ruin silhouettes with moving cloth; reduced motion holds the cloth still. The courier hammers only while real construction advances. Convoy discovery and observed construction, completion and ruin have their own icons and sounds; hidden changes stay silent, and loading does not repeat an observed notice. Author forms scroll at small sizes, and the intelligence panel supports keyboard scrolling.

Couriers wait up to 10 seconds for moving units to clear a new outpost's footprint, never past the delivery deadline; then they deliver anyway and whoever still stands there is moved to the nearest free tile. Couriers and escorts stop outside the planned site.

After salvaging an ancient beacon, crews cannot restore it for free; salvage and repair remain mutually exclusive.

Monsters leave a relic's site alone, its own guards included: they neither attack it nor go for it as a mark. Only your people work it.

A relic is not a single choice. Withdraw accepted work at any time and what is unspent comes back; then, as when the work fails, the site is offered again, fresh, while it stands, so you can choose the same branch or another until one is done. *Leave* only means not now.

Default tomb and station terms are below. Select a discovered site to see its actual authored costs, remaining original deadline and results; the controls keep the game running.

The chronicle’s Optional section tracks discovered relics, their chosen branch, progress, blockers, original remaining deadline and actual results. Show locates the original site without accepting a choice or spending gold. A relic coming into sight is news, and so is accepted work that stops halfway, fails or is done; a withdrawal you make is a line of the log. A site shows where it stands: a ruin until work is accepted, scaffolding and stacked materials while the crown works there, what the finished choice leaves (a lit beacon or a stripped one, a sealed tomb or an opened one, a rebuilt station), or rubble when the work failed. What holds work up is said precisely: no hero to take it, the heroes' own reason for turning it down, monsters near the site, the crew's other work first (and the site's place in the order), or water, cliffs or buildings closing the site in.

Optional relic sites: 0 disables generation. Place up to two different relics on reachable open ground outside the castle safe zone, preserving roads and routes. Choices remain unfunded until accepted. Sites are 21–80 tiles from the castle and must pass an ordinary crew route check.

Map rules and campaign levels share a relic editor for up to two original sites, fixed option subsets and bounded fees, rewards, work and deadlines. Cancel retains the draft; Apply validates sources before accepting it and runs no gameplay. Empty level overrides inherit the map; `relics_disabled: true` explicitly disables that inheritance. Clearing standalone map relics removes their templates on save.

**Sealed tomb**

- Strengthen the seal: After extra funding, suppress only 2 scheduled raids from Graveyard / Undead Castle. Guards, ambient enemies and other sources remain ordinary. The original source must survive.
- Fund research: One eligible Arcane Affinity unlock, or 80 gold if unavailable or already known. Ordinary Mage Tower and research prerequisites apply. Work pauses halfway for extra funding or withdrawal.
- Open the tomb: One treasure of 240 gold after real exploration and defeating 3 Skeleton guards. Funding opens the tomb; surviving guards remain after withdrawal or expiry.

**Lost station**

- Rebuild supplies: Restore 6 shared paid level-one supply purchases: healing, potions or alchemy reagents at ordinary prices. No periodic income or upgrades. Rebuilding excludes rescue.
- Escort the survivor: Volunteers must escort the original survivor to the safe castle. Joining chance 75%, fixed when funded: one Ranger only with permitted class, path and a finished Ranger Lodge vacancy at arrival. The crown reward is 120 gold regardless of joining; no waiting recruit. Rescue excludes rebuilding.

## Shared expansions in this release

Both the Demo and the full game have these four, each switched on only where a map, a level or a setting asks for it; old saves, maps and plugins are not switched on by themselves.

- **Lair expansion**: a Goblin Tent's supply couriers, outposts and limited offensives. A map or level's `lair_expansion` (off with `lair_expansion_disabled`); in free play, *Finite Goblin supply expansion* (on by default).
- **Hero bonds**: relationships, invitations, travelling together and parting, the roster and the reasons panel. On unless a level sets `hero_bonds_disabled`; in free play, *Hero bonds* (on by default).
- **Relics**: the ancient beacon, the sealed tomb and the lost station, each with two main choices. A map or level's `relics` (off with `relics_disabled`); in free play, *Optional relic sites* (0 by default).
- **Expeditions**: rounds, routes, a roster carried from map to map, retries, and the six-map, four-route *Frontier Expedition*. A template lists the capabilities it `requires`; one missing a level or a capability says which, and its route is not offered half made.

Not part of this release: other enemy races' expansion (only the Goblin Tent expands), more relic templates and relic buildings beyond the beacon, longer expeditions, more expedition templates and random routes, and the relic chains' prices, durations and fights set by real play (they are the measured values for now).
