---
title: "Enemies"
---

Enemies spawn naturally in wilderness areas across the map, threatening your adventurers and castle.

---

## Enemy Types

| Enemy | HP | ATK | DEF | Speed | XP | Gold | Attack Range | Vision | Spawn Terrain | Danger Level |
|-------|-----|-----|-----|-------|-----|------|-------------|--------|--------------|-------------|
| **Slime** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Forest | 1 |
| **Goblin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Mountain | 2 |
| **Skeleton** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Mountain | 3 |
| **Zombie** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Forest | 4 |
| **Dragon** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Mountain | 5 |
| **Dire Wolf** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Forest | 2 |
| **Orc Brute** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Mountain | 4 |
| **Goblin Archer** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Mountain | 3 |
| **Sand Wraith** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Desert | 3 |
| **Dark Cultist** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Forest | 3 |
| **Troll** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Mountain | 5 |
| **Giant Spider** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Forest | 2 |
| **Giant Rat** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Grass | 1 |
| **Bandit** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Grass | 2 |
| **Harpy** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Grass | 3 |

The Dragon, Goblin Archer and Dark Cultist fire projectiles (gouts of flame, crude arrows and dark orbs); the others strike from up to 3 tiles away.

An enemy steps once every 3 ÷ speed ticks, rounded down (at least 1): every tick at speed 1.6 and above, every 2 ticks at 1.1–1.4, every 3 at 0.8–1.0, every 4 for the Troll and every 5 at 0.6.

### Ranks

As your guild grows (adventurers plus Markets), some monsters spawn with a rank that multiplies their stats and rewards. At most a quarter of the living monsters are ranked, except during a Monster Uprising, when every spawn is at least a Veteran.

| Rank | From a guild size of | Chance | HP | ATK | DEF | XP | Gold | Vision |
|------|---------------------|--------|----|-----|-----|----|------|--------|
| **Veteran** | 8 | 16% | ×1.5 | ×1.25 | ×1.2 | ×1.6 | ×1.8 | +2 |
| **Elite** | 22 | 8% | ×2.5 | ×1.6 | ×1.5 | ×2.5 | ×3 | +4 |
| **Champion** | 45 | 3% | ×4.5 | ×2.2 | ×2 | ×4 | ×6 | +6 |

---

## Enemy Behavior

### Roaming

- Enemies wander near their spawn point
- They have a vision range and will actively chase adventurers they detect
- Each tick a quarter of the enemies (in rotating groups) run their roaming logic, so each one updates at most every 4 ticks

### Target Priority

Enemies attack targets in the following order:

1. **Combat-ready adventurers** (non-pacifists)
2. **Builders** (pacifist adventurers)
3. **Arrow towers** (threatening buildings)
4. **Castle**
5. **Other buildings**

### Invasion Pathing

When an invasion event triggers, enemies head straight for the player's castle along the shortest path.

---

## Enemy Spawning

| Setting | Value |
|---------|-------|
| Spawn interval | 35 seconds of game time, 1 second less per adventurer or Market, at least 5 seconds (halved in Defend campaign levels) |
| Maximum count | `(adventurers + Markets) × 2` (adjustable in difficulty settings), shrinking as Enemy Strongholds are razed to as little as 25% |
| Base minimum | At least 6 enemies |

Enemies spawn based on **terrain type**:

- **Forest** — Slimes, Zombies, Dire Wolves, Dark Cultists, Giant Spiders
- **Mountain** — Goblins, Skeletons, Dragons, Orc Brutes, Goblin Archers, Trolls
- **Grass** — Giant Rats, Bandits, Harpies
- **Desert** — Sand Wraiths

:::note[Dragons]
Dragons and Trolls are the most dangerous enemies (danger level 5). With an attack range of 16, 550 HP, and gouts of flame for projectiles, Dragons are best dealt with using ranged adventurers and arrow towers; the Troll has more HP and attack but must close in.
:::

---

## Dragon Special Mechanics

- **Ranged Attack**: Attack range of 16, breathes gouts of flame
- **High Mobility**: Speed of 1.4, a step every 2 ticks: as fast as Giant Rats, Giant Spiders and Bandits; only Harpies and Dire Wolves (a step every tick) are faster
- **Wide Vision**: 32-tile vision range, able to spot adventurers from a great distance
- **Evasion**: All enemies have a base 5% dodge rate

**Pressures**: three threats come of how the kingdom is kept, not of a lair. Each is announced a minute ahead in the chronicle and the overview, sends a pack of 3 (never more than 6 of its monsters alive, the same whatever your strength), and is called off when its cause is put right. *Squalor*: a town of 16 buildings with no fountain or garden draws giant rats; each fountain or garden answers for 6 buildings. *The restless dead*: 3 heroes lying dead with no temple rise as skeletons where the last fell; a temple, or reviving them, keeps them down, and a kingdom on the Undead path with an Ossuary takes them as guards instead. *The wilds*: a building more than 60 tiles from the castle with no arrow tower or guard post within 12 draws dire wolves; trading posts do not count, nor a Wilds kingdom's camps. Nothing presses a kingdom in its first 5 minutes, or in a level that does not allow the building that answers it. Orc Warcamps raid what is being built: the nearest site or upgrade under way.
