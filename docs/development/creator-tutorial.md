---
title: "Creator Tutorial"
---

Every template starts in **Creator & Steam Workshop** (main menu, Map Manager or Plugin Manager) and goes the same way from **New project** to a private Workshop item. Only the last step needs Steam.

## The common steps

1. **New project**: pick a template, a name and a folder. The dialog shows where the project will go before it writes anything.
2. **Edit project**: a plugin opens the plugin editor; a map or campaign opens with **Open terrain / campaign editor**, in a process of its own that loads only what the project requires. Save before the next step: checks, playtests and publishing use the saved files.
3. **Validate content**: each problem says where it is; double-clicking one opens the editor there.
4. **Playtest**: a separate game with only this project and what it requires. Its report lists what loaded and, while it runs, its tick time, memory and sprite atlas, graded from fine to too heavy.
5. **Export…**: a ZIP or a folder with the same project ID, to keep or to share.
6. **Publish to Workshop**: with Steam running, choose **Private** for a first test, then **Check and review** and **Submit publication**. Publishing does not test loading: find the item under **Browse Workshop**, use **Subscribe**, and watch it in **Subscriptions** until it is available.

## Map

The template is a 32×32 map with a castle, a chest of 100 gold two tiles east, 500 starting gold, and a victory for collecting the chests.

1. Paint terrain and place buildings, strongholds and chests in the terrain editor, then save.
2. **Validate content** warns about a stronghold, chest or boss heroes cannot reach from the castle.
3. Version: raise **Project version** whenever you publish a change. Saves made with the old version keep a retained copy of it.

## Campaign

The template is two levels, each its own map with the same castle and chest; the campaign file orders them and gives each a title, story text and starting gold.

1. Open the campaign panel in the terrain editor to order levels, set victories, story text, carry-over and triggers.
2. **Playtest** can start at any level.
3. Dependencies: when a level uses a plugin's units, add that plugin's project under **Dependencies** with a version range such as `>=1.0.0, <2.0.0`.

## Plugin

The template holds a hero class, an enemy, a building that recruits the class, a stronghold that sends the enemy, a skill, a research, an event, a named boss, a tile skin and an English language file, all under the project's own namespace.

1. Edit in the **Objects** tab. The bar picks a kind; each definition is listed under the name and with the picture the game would give it, and the selected one is previewed (a walker walks). **New…** adds one by what it builds on and its name; its art and sound are chosen or imported in its own rows; the properties form greys values taken from the base definition and marks a value out of the game's bounds at once. **Advanced** shows the by-ID row and the definition's JSON. A name is given in each of the plugin's languages, in the rows under it (**Add language** gives the plugin another); a castle path has tables for its effects and its specialities, and rows for its other texts.
2. Assets: the **Assets** tab takes image files dropped on it and shows each against the size and memory limits. The template's tile skin uses `preview.png` as an example sprite; replace it there.
3. Overrides: **Copy built-in…** adds a full copy of one of the game's actors under your own ID, which replaces the original where it is used. A definition with a built-in ID (for example `SLIME` with base `SLIME`) changes the game's own slime while the plugin is on; **Content profiles** shows which plugin's override wins.
4. Versions: **Project version** is the project's own version; **Supported game versions** is the range of game versions it accepts (`*` for any; a development build accepts only `*`).

## Boss tutorial (plugin + two-level campaign)

The template is a folder with a plugin and a two-level campaign that requires it; the second level is won by defeating the plugin's named boss.

1. The campaign's **Dependencies** name the plugin's project and version, so a playtest takes the plugin along.
2. Publish the plugin first, then the campaign: the publish window suggests the plugin's Workshop item as a required item.
3. Raise the plugin's **Project version** with each change; keep the campaign's range wide enough to accept it.

## Kingdom mission (one level: briefing, flags, waves, a boss)

The template is one kingdom level with a briefing, a town, a lair, the crown's Explore, Kill and Defend flags, two announced waves, a named boss and an optional find. Take it apart level by level in the campaign panel, then follow the common steps.

## Frostfang sample (a finished content pack and its map)

The template is a finished example to take apart: a content pack with a hero class (the Frost Warden), a monster (the Rime Yeti), the hall that recruits the class, the den the monster comes from, two skills, a research and a named boss, each with its own art and sound, and a map that requires the pack and is won by defeating the boss. The same window offers a finished example for other Workshop categories too, each as **Sample: <category>** (a map, a campaign, a story, a set of challenges, and packs of research, of events and of a language among them): it is copied as a project of your own, to play, take apart and change.

1. Open the map in the terrain editor and press **Objects…** to see how each definition builds on one of the game's own; change a number or a name, save, and place the result on the map.
2. Press **Test play** to play the map with the pack and nothing else of yours.
3. Publish the pack first, then the map: the publish window suggests the pack's Workshop item as a required item.

## What templates never hold

A template holds no real Workshop item ID, no Steam account and no absolute path: project IDs are made fresh on your computer and every file is named relative to the project.

## Optional relic author data

Map files and campaign levels accept an optional `relics` list of at most two entries with the `relics` capability. Each entry has a unique `id`, one of `ancient_beacon`, `sealed_tomb` or `lost_station`, and a `target` matching an existing building’s `objective_id`. Fixed options permit at most two decisions; arbitrary scripts and cyclic branches are rejected. Discovery alone charges nothing and starts no deadline. Saves preserve accepted choices, costs, refunds and one-time rewards.

Prototype sources require `type: BEACON`.

## Optional Goblin logistics

Authored maps and campaign levels may enable `lair_expansion` with that capability and up to four plans. Each plan names an existing Goblin Tent by its unique `objective_id`; `id` and `target` are required. Supply couriers physically travel before funding an outpost, and a living worker must build it. Convoys, escorts, defenders and raids share a finite unit budget: at most four cycles and 64 new units per source. A lost outpost delays and weakens an unissued raid; destroying the main lair stops new production but leaves living units and optional outposts. Outposts do not add mandatory main-lair victory targets. No plans preserves the old schedule. Supply couriers now carry distinctive crates and have their own animations and sounds; they appear only in assigned convoys. After scouting, post a kill bounty on the moving courier. Killing it cancels that cargo and delays production, while surviving escorts remain in combat. Cargo and bounty rewards settle once; cancellation uses the usual refund rules. Outposts have distinct open scaffolding, completed supply-canopy and destroyed-debris appearances. A living worker must build the attackable site; unfinished sites have no new defenders. Destroying an outpost delays unissued attacks and moves their muster back to the main lair. Destroying the main stops production but preserves living units and orphaned outposts. Each source retains at most one decorative ruin, which adds no guards or victory targets.

The map and campaign editors share a Lair expansion form: choose up to four existing Goblin Tents, set protection, preparation, delivery, construction, muster and cooldown times, cycle and shared unit budgets, escorts, and up to eight forbidden rectangles per source. Times use game seconds in 0.2-second increments. Applying changes keeps an author draft; cancellation preserves it and clearing map sources disables expansion. A campaign can explicitly disable expansion on that level, taking priority over its map. Without that override, an empty level list inherits the map. Duplicate or missing sources and rectangles outside the map are rejected before saving.

The shared map outpost limit is adjustable from one to four. A convoy funding a new site reserves its slot before departure; other sources wait at capacity without issuing units or accumulating raids. A living orphaned outpost keeps its slot until destroyed.

For warned monster and boss skills, optional cast_range (1–32 tiles) selects the target; radius remains the impact area. A fallen caster cancels its warning.

Enemy supply intelligence is a map layer of observed waypoints and sites. Main-lair production, health, hoard and defenders, outpost stage/progress and convoy positions keep separate observation times. Outside crown sight they stay at the last observed value; hidden construction or demolition does not change the known image. Scouting the site again refreshes it. Routes remember at most sixteen observed waypoints. Discovery notices are deduplicated across saves, and the briefing explains interception, outpost destruction, main-lair destruction and holding against a finite budget.

Free play offers an optional finite Goblin Tent expansion switch, off by default. Mixed or goblin-only games reserve one of the chosen lair slots for a Goblin Tent and bind at most four existing tents; the total lair count stays unchanged. Other races have no synthetic source. Campaigns use their authored settings instead of this preference.

Logistics sites show distinct scaffolding, depot and ruin silhouettes with moving cloth; reduced motion holds the cloth still. The courier hammers only while real construction advances. Convoy discovery and observed construction, completion and ruin have their own icons and sounds; hidden changes stay silent, and loading does not repeat an observed notice. Author forms scroll at small sizes, and the intelligence panel supports keyboard scrolling.
