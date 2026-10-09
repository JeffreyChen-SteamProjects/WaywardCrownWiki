---
title: "Plugin Development"
---

## Create and test

Open Creator / Workshop from the main menu, Map Manager or Plugin Manager. Create a single map, two-level campaign, plugin or linked boss tutorial; edit, save, validate and test offline. The workspace includes local projects, subscriptions, your publications, the browser and tasks. The Kingdom mission template creates a one-level kingdom campaign with a briefing, flags, waves and a named boss. Import a ZIP, a map file or a project folder with Import content or by dropping it on the workspace; Export… writes a ZIP or a folder, and Open folder shows a project's files. Both ask for a folder (the last one is offered again), a name already used there becomes name-2, name-3…, and nothing is written into content Steam downloaded. Each project is listed with its preview, kind, version, author, whether this game can load it and how its last check went; every list has a search and a kind filter and says why it is empty, and the selected project's details give its licence, game versions, requirements and folder. New project lists the templates with what each creates and shows where the project will go before anything is written. Validation warns about strongholds, chests and placed bosses heroes cannot walk to from the castle (an error when the victory needs them) and keeps a map to 64 strongholds, 256 chests and 32 placed bosses; double-clicking a problem on a map tile opens the editor there. The terrain and campaign editor opens in a process of its own that loads only the project's dependencies, so content the player has installed neither shows up in it nor gets in the way; it saves to the project itself. Validation, export, playtest and publishing wait while the project has unsaved changes in an editor the workspace opened: they use the saved files. In the plugin editor a boss's phases are a table (the health at which each begins, its skills), and a skill's count, limit and telegraph have fields of their own. The plugin editor keeps a draft of unsaved work a moment after each edit, beside the settings and outside the project; opening the project again after a crash offers it back. In the plugin editor, Duplicate copies a definition under a new ID, a definition another one names cannot be deleted until that use is gone, and Copy built-in… adds a complete copy of one of the game's actors under its own ID, which replaces the original where it is used without touching the game's files. Classes, enemies, buildings, strongholds and research have a properties form (stat ranges and growth, gold dropped, prices, the class a building recruits, who a stronghold sends, what a research applies to) that greys values taken from the base definition and marks one out of the game's bounds or naming an unknown ID at once; dependencies are edited in a table. The Assets tab takes files dropped on it, shows each image's visible area against the game's size and memory limits, previews it as terrain or icons, keeps a source and credit line, lists and sets which definitions use it, renames a file with all its uses, refuses to remove one still in use, and re-points fields that name a missing file. A playtest opens with a list of what it loaded (each plugin in load order with the definitions it added or replaced, and any plugin skipped with why); the workspace shows the same list and puts a skipped definition of the tested plugin in its problem list, where opening a problem in a definition table takes you to that definition in the plugin editor.

Folder/ZIP import and editable copies create new project identities, rebase their own namespaced references, retain author/source/license and inherit no remote update binding. Steam originals stay read-only. Relative paths, file budgets, arrays and trigger cycles are checked; an empty license grants no redistribution permission. Publishing a copy shows in its review where it came from (the original's project, version, author and item page) and the original author's terms, and it is submitted only once you confirm that you keep that attribution and follow those terms or, when the original gives no license, that you have its author's permission; a license that was not given always reads as no permission to share. A copy names its original in its details and says when the subscribed original has moved on, and the tooltips of Create local editable copy, Export… and Unsubscribe say what each one does.

Publishing requires Steam: prepare the page and preview, review an immutable file/hash snapshot, then explicitly submit. Tasks continue when the view closes; preparation can be cancelled, while submitted/unknown results need task status or resynchronization before retry. Bindings are scoped to account, app and project ID. Preview images must be smaller than 1 MiB; automated tests use fake Steam backends. The publishing wizard saves separate page text for each language and JSON metadata, can crop the main preview to a square, and manages up to eight additional screenshots with ordering/removal. Existing publications support page/dependency-only updates without resending content; previews are included in the reviewed snapshot. Publish required plugins first and confirm their same-app item IDs in the map/campaign review. The wizard can make the main preview from the project itself (a map's terrain with its castle, strongholds and chests, a campaign's first levels, a plugin's own pictures, each with the title), shows the preview as it will be uploaded with its size, draws an optional caption along the bottom of each screenshot, and says which images a draft named are gone. Its three steps (page, dependencies and versions, review) are walked with Back and Next (Alt+Left, Alt+Right); a problem takes you to its step and outlines the field until it is edited, and the review counts the files added, changed and removed since the last publication. A failed task says what kind of trouble it hit (permission, the Workshop agreement, space, a busy Steam, a timeout, Steam offline, the checks, an unknown result, an interruption), what to do next, and a code such as WS-PERM-R15 that names no account, item or file. Selecting one of your items under My publications shows its visibility, version, creation and update times and size, the local project linked to it, and one list of what an update from that project would change: page fields, files and required items. Selecting an item in the browser shows its description (or that Steam gave none) and two parts kept apart: what Steam says (kind, required items, the game branches the author allows, the version its publication recorded, update time, size, votes) and, once Steam has installed it, what its own manifest says (project and version, whether this build can run its game versions, the projects it requires, what it may change). Nothing Steam did not give is filled in. A subscribed item is used only after Steam has installed it and it passes a check: its manifest reads for this game, and every project it requires is installed at an accepted version without a cycle (a project two items give is kept by your own plugin, else by the oldest item). An item Steam is updating stays in use at its installed version. The Subscriptions tab lists every subscribed item with where it stands (waiting for Steam, downloading with its bytes, waiting to be checked, available, missing what it requires, or failed and why), and the browser says the same for the selected item; a download Steam could not finish, such as on a full disk, is not asked for again until you press Retry download. Before a save loads, the game checks the content it was made with: when a project it used was updated, turned off, unsubscribed or cannot be used, or other content is enabled, it names each one and, after asking, loads the save from its retained copy, or says why it cannot load (no usable copy, a game update, another Steam account or app, Steam not running) and where to put it right; the save file and the game in progress stay as they were. Retained content… in the Subscriptions tab lists those copies with the saves that rely on them, checks them and removes the unused ones; a copy a save relies on goes only after a confirmation naming the saves, and the one the running game uses never. Item and project details also name this game's own version (not set in a development build, where content that asks for a particular game version cannot load) and its Steam branch, and Open item page in the Subscriptions tab shows an item that cannot be used; when Steam switches the game to another branch while it runs, a notice says so and nothing restarts on its own. A page's tags are its kind plus any of Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; the page step lists the languages you wrote pages for (any other Steam language shows the default page), and for an item you already published, Import page from Steam… compares Steam's page with your draft field by field and takes only the fields you tick. Without Steam, subscribed items are not loaded and retained copies are not used, since both belong to a Steam account and app (the Demo and the full game are separate apps, each with its own items, drafts and content profiles); a save that needs them says so, and making, checking, playtesting, exporting and importing your own projects all work offline. While a playtest runs it measures its tick time, memory and sprite atlas, and the workspace adds them to the playtest report graded as fine, worth watching or too heavy, with what helps; a failed upload's explanation names Steam's limits when the content or the quota is the trouble, and a finished one reminds you to subscribe and check that it loads, since publishing does not test that. An upload is given up only after five minutes without progress, and finished or cancelled tasks leave the list a week later; playtest sessions no running game uses are removed as new ones start, Enter on a local project opens its editor, and these windows fit a 1280 × 720 screen in every language.

## Definitions and dependencies

Versioned plugins add independent namespaced classes, enemies, buildings and strongholds using built-in behavior templates, plus skills, research, events, named bosses, assets and languages. New IDs use `namespace:name`; retaining a built-in ID overrides existing content. Core files remain read-only. Appearance-only skins replace actor or terrain art while keeping gameplay values unchanged. A player building can carry an effect: one attack, heal, shield or status skill that it casts on the enemies or heroes in range on a fixed schedule once it reaches a set level. A pack whose capabilities are only assets and languages may hold only skins and languages, and art or a sound the game cannot use leaves the built-in one in place.

The common manifest records project ID, author, version, compatibility, assets and dependencies. Versioned content loads in deterministic dependency order; missing/conflicting dependencies and cycles block loading. Legacy projects retain their established format and order. Profiles preview overrides and apply to the next game. Content profiles list the selected plugins in load order, each with where it comes from and which version is installed, used by the running game and selected next; Move up and Move down change the order only where dependencies allow, and the order applies to the next load in the same Steam account and app. Before anything changes the profile lists what applying would enable or disable, with the maps, campaigns, plugins and saves that use a plugin being disabled; double-clicking a problem finds its plugin, a map or campaign can suggest the plugins it needs, and a subscribed item that is not offered, such as a copy of one of your own plugins, says why.

## Examples

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

## Assets and budgets

| JSON | Assets and budgets |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | a class's skill tree (passive skills): a list of `{"id", "level", "effect", "requires": [ids]}`, any number and several at a level, or the older table `{"<level>": {"id", "effect"}}`, read as a chain; ids are unique in the class, `requires` names skills of the same class, and no ring |
| adventurer_classes.active_skill, tree_skills | the class's own active skills, nodes of the same tree: `active_skill` is the ID of its first (a root), `tree_skills` up to 12 IDs of those that grow from the tree. Each is a skill of `skills` (never summon), learnt at its `level` once the hero has every skill its `requires` lists (up to 8 IDs of the class's skills, passive or active; none for the first), and each waits on its own `cooldown`. Without `active_skill` the class keeps the first skill of its base class |
| buildings.effect | a skill with attack, heal, shield or status (never summon), cast every 10–3600 ticks from building level 1–3; statuses do not stack |
| research | stat_modifier |
| castle_branches | a castle path: `id`, `playable`, `buildings` (ids of buildings, the game's or the plugin's own), `effects` and `level3` (numbers by effect name, the names the game's own paths use), `specialities` (none, or two or more `{"id", "effects"}`). A definition with a built-in path's id replaces that path whole; a `namespace:name` id adds a path, listed after the game's and offered wherever paths are. Its texts are the language keys `branch_<id>`, `branch_<id>_desc`, `branch_<id>_price`, `branch_<id>_level3`, `branch_<id>_heroes` and `speciality_<id>_<speciality>`. A kingdom whose path is no longer loaded plays as one that has taken none, and its save keeps the choice |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; appearance only |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (drawn opaque); actor skins: as their target; anything else, and layout outside actors, is unused and warned about |
| plugin art and sounds | 256 MiB of decoded images (width × height × 4) for all enabled packs, a file counted once, past it the built-in art; 64 MiB of plugin sounds kept in memory |
| capabilities: assets, languages only | skins and languages only; other definitions are refused |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 level maps |
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

## Game version compatibility

`game_version` constrains the running game’s release version. `"*"` is accepted, including legacy projects. A specific range is accepted only when the build declares a known semantic game version that matches it; otherwise validation, loading and publication are refused. This repository currently leaves `game.build_info.GAME_VERSION` unknown, so use `"*"` until the release build supplies an approved version. A project’s `version` and Steam branch names do not supply the game version.
