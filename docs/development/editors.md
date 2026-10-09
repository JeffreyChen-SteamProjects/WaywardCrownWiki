---
title: "Map and Campaign Editors"
---

Wayward Crown includes built-in map and campaign editors that let you create custom levels and scenarios.

---

## Map Editor

The main menu's **Map Editor** button opens the editor on a new map. Saved maps are listed, played, edited, imported and exported on the Maps tab of the map manager, which the main menu's **Campaigns** button opens.

### Features

- **Terrain Painting** — Select a terrain type and paint it onto the map with a brush (size 1 – 20), or flood-fill a region
- **Building Placement** — Place player buildings, Enemy Strongholds and treasure chests, move the Castle, or erase
- **Randomize** — Generate a random map to start from
- **Undo / Redo** — Up to 30 steps (Ctrl+Z / Ctrl+Y)
- **Map Settings** — Size (100 – 1000 tiles per side), name, author and other details, starting gold and a victory condition
- **Save/Load** — Save maps to the `maps/` directory; Close, Esc and New ask before dropping unsaved changes (Save / Discard / Cancel), and discarding a campaign that was never saved removes its folder again

Maps hold no units: adventurers are recruited and enemies spawn once the game runs.

### Terrain Types

- Grassland, Forest, Mountain, Water, Desert, Road, Mud, Swamp, Snow, Hills, Badlands, Meadow

### Save Format

Maps are stored in JSON format in the `maps/` directory and include:

- Terrain data (a compressed NumPy array)
- Height data
- Buildings, Enemy Strongholds and treasure chests
- Castle position
- Map details, starting gold and victory condition

---

## Campaign Editor

Campaigns are created, opened, imported and exported on the Campaigns tab of the map manager (the main menu's **Campaigns** button). Opening a campaign starts the map editor with a campaign panel, so you edit each level's map and its settings in one place.

### Features

- **Level Ordering** — Move levels up and down with the arrow buttons
- **Victory Conditions** — Set victory conditions for each level, including the stronghold type for `destroy_building`
- **Story Text** — Set intro and completion text
- **Starting Resources** — Set the initial gold for each level
- **Carry-over** — Keep gold, adventurers and research from the previous level
- **Building Restrictions** — Restrict which building types the player can use
- **Triggers** — Script messages and building unlocks for a level (campaign levels only)
- **Kingdom fields** — The level's starting castle level, time limit, the briefing's advice and up to two optional finds
- **Further objectives and defeats** — More victory conditions, each required or optional, and more ways to lose (heroes fallen, buildings or caravans lost), in two tables with Add and Remove
- **Target source** — Under a victory target, whether the boss is placed on the map or started by a trigger, and whether the stronghold type is the game's or a plugin's and how many stand on the map; an objective's target says the same in its tooltip

### Victory Condition Options

| Type | Description |
|------|-------------|
| `free` | Free mode, no victory condition |
| `destroy_enemy_buildings` | Destroy all enemy outposts |
| `survive_ticks` | Survive for a specified duration |
| `reach_gold` | Accumulate a specified amount of gold |
| `destroy_building` | Destroy a specific type of outpost |
| `defend` | Defend the Castle for a specified duration |
| `collect_chests` | Collect all treasure chests |

### Save Structure

```
campaigns/my_campaign/
├── campaign.json         # Campaign metadata
├── level1.json           # Level 1 map
├── level2.json           # Level 2 map
└── level3.json           # Level 3 map
```

---

## Sharing Custom Content

- Map and campaign folders can be shared by simply copying them, or with the map manager's export and import
- Place received maps into `maps/` to load them from the main menu
- Place received campaigns into `campaigns/` to see them in the main menu
- When the game runs through Steam, the map manager's **Publish to Workshop** puts one of your maps or campaigns on the Steam Workshop, and the ones you subscribe to appear in its lists marked [Workshop]. Steam keeps those up to date, so they cannot be edited, renamed or deleted; **Duplicate** makes a map of your own
