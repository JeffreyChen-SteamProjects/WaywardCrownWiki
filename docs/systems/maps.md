---
title: "Maps and Terrain"
---

The game map is rendered using an isometric 2:1 projection and supports multiple terrain types.

---

## Map Specifications

| Property | Value |
|----------|-------|
| Default size | 1000 × 1000 tiles |
| Adjustable range | 250 ~ 1000 tiles |
| Tile size | 256 pixels |
| Projection | Isometric 2:1 (diamond) |

---

## Terrain Types

| Terrain | Passable | Movement Cost | Base Height | Enemy Spawns |
|---------|----------|---------------|-------------|--------------|
| **Grassland** | Yes | 1 | 0 | Giant Rat, Bandit, Harpy |
| **Forest** | Yes | 2 | 0.5 | Slime, Zombie, Dire Wolf, Giant Spider, Dark Cultist |
| **Mountain** | Yes | 3 | 5.0 | Goblin, Skeleton, Dragon, Orc Brute, Goblin Archer, Troll |
| **Water** | No | — | -1.0 | — |
| **Town** | Yes | 1 | 0 | — |
| **Road** | Yes | 1 | 0 | — |
| **Swamp** | Yes | 3 | -0.3 | — |
| **Desert** | Yes | 2 | 0.2 | Sand Wraith |
| **Mud** | Yes | 2 | -0.1 | — |
| **Snow** | Yes | 1 | 0.2 | Giant Rat, Bandit, Harpy |
| **Hills** | Yes | 1 | 1.6 | Giant Rat, Bandit, Harpy |
| **Badlands** | Yes | 2 | 0.3 | Sand Wraith |
| **Meadow** | Yes | 1 | 0 | Giant Rat, Bandit, Harpy |

:::tip[Movement Cost]
Lower numbers mean faster movement. Road and Town have the lowest movement cost (1), while Mountain and Swamp have the highest (3). Making good use of roads can greatly improve adventurer travel efficiency.
:::

---

## Fog of War

The map has three visibility layers:

| State | Brightness | Description |
|-------|------------|-------------|
| **Unexplored** | 0 (fully dark) | Never seen by any adventurer or building |
| **Explored** | 115 (dark gray) | Previously seen but not currently in line of sight |
| **Visible** | 255 (fully lit) | Currently within an adventurer's or building's line of sight |

**What is drawn where.** Your own side is always drawn: buildings, heroes, villagers, tax collectors, caravans and bounty flags, on ground nobody sees too. A lair or an ancient ruin is drawn once any part of it has been seen, and stays drawn. From then on the heroes know of the lair too, and may go for it on their own. Monsters are drawn only while a hero sees them. The portals of a dimensional rift are drawn as rings of violet light, once their ground has been seen.

### Vision Sources

| Source | Vision Range |
|--------|--------------|
| Castle | 30 tiles |
| Adventurer (base) | 8 tiles |
| Mage (ranged) | 12 tiles |
| Ranger (ranged) | 11 tiles |
| Defensive building (Arrow Tower) | 16 tiles |
| Regular building | 7 tiles |
| Enemy outpost structure | 10 tiles |

:::note[Ranged Adventurer Vision]
Mages and Rangers see exactly as far as they can attack (12 and 11 tiles), so players can see the targets they are attacking.
:::

---

## Map Generation

Sandbox mode maps are randomly generated using the **Value Noise** algorithm:

1. Generate terrain noise → determine terrain types
2. Generate height noise → determine elevation variation
3. Place Castle → establish a Town area at a random spot in the central half of the map
4. Scatter treasure chests → max(10, 250 × W × H ÷ 1000²) chests distributed across the wilderness
5. Generate enemy outposts → placed far from the Castle

---

## Treasure Chests

| Property | Value |
|----------|-------|
| Initial count | max(10, 250 × W × H ÷ 1000²) |
| Gold range | 20 ~ 55g |
| Location | Passable areas outside of Towns |

Adventurers automatically pick up treasure chests when they walk over them. With the "Treasure Sense" research skill, gold is increased by +50%. An opened chest stays where it was, lid thrown back, for two minutes of game time, then disappears. It does not hold a building site back, and a building placed over it takes it away.
