---
title: "Campaign Mode"
---

Campaign mode offers multi-level scenarios, each with specific victory conditions and a story backdrop.

---

## Built-in Campaigns

The game includes a built-in **Tutorial Campaign** (5 levels) that guides new players through the various game mechanics. It has a plaque of its own, the first on the main menu.

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
| `carry_over` | What survives from the previous level: `gold`, `adventurers`, `research`, `path` (the castle path and its speciality) (each true/false). What a level lists in `carry_over` is taken from another level of the same campaign as the player goes straight on and written down then; every retry of the level starts from that record. A level started from the mission list carries nothing, and what a level does not list (research and the castle path too) does not outlast the map. |
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

Mission 1 starts beside a ruined blacksmith and a ruined market: the crown's crew rebuilds them at no cost, the blacksmith first, and whatever you place, your first guild too, waits its turn behind them unless you mark it to be built first. In mission 1, messages lead from the first guild to the first hero, the market and the tax collector. About 48 seconds in, the crown posts an Explore bounty near the camp at its own cost; once a hero has done it you are asked to post a Kill bounty on the camp. In mission 2 the crown has both trading post sites explored, raiders ambush the south road once (announced 20 seconds ahead), and the first building lost brings 400 gold of relief. In mission 3 one raid comes down the east road at tick 1000 and one down the north road at tick 2500 and Chief Gnashfang at tick 4300, each announced 100 ticks ahead; razing his fortress is an expedition worth its plunder, but only his defeat wins. Missions 1 and 2 add a Builder's Guild to the build list for repairs; in mission 3 the castle, already level 2, can take its path at once, and a razed fortress stops the raids it sends itself. Missions 2 and 3 keep the research of the mission before when you go straight on; every retry starts as the first try did, and a mission picked from the list starts without it.

The challenges (`campaigns/demo_challenges/`, `"linear": false`) are written the same way. *Thin Gold* opens after mission 2: 600 gold, a castle of level 2, a small town with a trading post on the south road, and 15 minutes (`time_limit`) to raze a goblin tent and a bandit camp that raids the road; bandits try the road twice before the camp's own raids begin. *Hold the Road* opens after mission 3: the trading post is already open, raiders come down the south road every 500 ticks, each raid a little stronger, and 10 caravan round trips must be paid within 14 minutes 20 seconds. A free kingdom (the Demo's Free Kingdom or the full game's Sandbox) has no objective; its start dialog can ask for Chief Gnashfang to come once, 20 minutes in (`game/systems/free_kingdom.py`). In *Hold the Road* every raid marches on the trading post: a post nobody defends is razed and its caravan is gone with it, so doing nothing loses the challenge.

## A Kingdom Mission, Step by Step

1. In Creator / Workshop choose **New project**, then **Kingdom mission**, and a new folder. You get one playable level: a town, a goblin tent to the east, the crown's Explore, Kill and Defend flags, two announced waves and the chief as a named boss.
2. Open it in the campaign editor. The level form has the story (intro), the advice the briefing shows, the starting gold and the victory; below them the starting castle level, the time limit and up to two optional finds with their tiles.
3. Paint the map: move the town, the lair and the roads. A site has to be reachable from the castle, or what stands on it is left out when the level starts. A building in the map file may carry `"ruin"` (1 to 99): it starts as a site with that percent of its work done, and the crown's crew finishes it at no cost.
4. Open the triggers to change the messages, the flags the crown grants (`post_bounty`), the waves (`spawn_enemies`) and when the boss comes (`spawn_boss`). The condition `enemy_building_seen` waits until a lair is in sight.
5. In `campaign.json`, the campaign's `roster` names the monsters that wander the map and `blocked_events` the random events it never rolls.
6. Validate: the checks name a wrong castle level, time limit, optional find, roster entry or event by its field. Then play the level from the workspace; the difficulty chosen there sizes the raids, the waves and the starting gold.
7. Publish it privately first, and make it public when it plays the way you mean it to.
