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

1. Edit in the **Objects** tab. The bar picks a kind; each definition is listed under the name and with the picture the game would give it, and the selected one is previewed (a walker walks). **New…** adds one by what it builds on and its name; its art and sound are chosen or imported in its own rows; the properties form greys values taken from the base definition and marks a value out of the game's bounds at once. **Advanced** shows the by-ID row and the definition's JSON.
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

## What templates never hold

A template holds no real Workshop item ID, no Steam account and no absolute path: project IDs are made fresh on your computer and every file is named relative to the project.
