---
title: "Enemy Strongholds"
---

Enemy Strongholds are enemy bases scattered across the map. They keep guards of their own and most of them raid your town (see *Lair Raids* below).

---

## Stronghold Types

| Stronghold | Spawned Enemies | Size | Restriction |
|------------|----------------|------|-------------|
| **Slime Pool** | Slime | 11 tiles | -- |
| **Goblin Tent** | Goblin / Dire Wolf / Goblin Archer | 11 tiles | -- |
| **Goblin Fortress** | Goblin / Orc Brute / Goblin Archer / Troll | 23 tiles | One per map |
| **Graveyard** | Skeleton / Zombie | 11 tiles | -- |
| **Undead Castle** | Zombie / Skeleton / Dark Cultist | 23 tiles | One per map |
| **Dragon Nest** | Dragon / Harpy | 16 tiles | -- |
| **Spider Nest** | Giant Spider / Giant Rat | 11 tiles | -- |
| **Bandit Camp** | Bandit / Dire Wolf | 11 tiles | -- |
| **Sand Tomb** | Sand Wraith / Skeleton | 13 tiles | -- |
| **Wolf Den** | Dire Wolf | 11 tiles | -- |
| **Orc War Camp** | Orc Brute / Goblin | 13 tiles | -- |
| **Goblin Watchtower** | Goblin Archer / Goblin | 9 tiles | -- |
| **Dark Shrine** | Dark Cultist / Skeleton | 11 tiles | -- |
| **Troll Cave** | Troll | 13 tiles | -- |
| **Rat Warren** | Giant Rat | 9 tiles | -- |
| **Harpy Roost** | Harpy | 11 tiles | -- |
| **Rebel Guild** | Bandit | 9 tiles | Event only |

:::note[One Per Map]
The Goblin Fortress and Undead Castle can each appear at most once on the entire map.
:::

---

## Stronghold Stats

| Stat | Value |
|------|-------|
| HP | 2,500 |
| Max Guards | 3 |
| Guard Refill | One every 150 ticks (~30 seconds) up to the maximum |
| Gold Theft | 5g × (1 + luck ÷ 10) |
| Attack Damage | 8 + ATK/4 |
| Theft Cooldown | 45 ticks |

---

## Stronghold Spawn Rules

| Rule | Value |
|------|-------|
| Minimum Distance from Castle | 60 tiles |
| Minimum Distance Between Strongholds | 30 tiles |
| Default Count | 3 (adjustable in difficulty settings) |

---

## Attacking Strongholds

### Attack Sequence

1. Adventurers reach the vicinity of the stronghold
2. They first engage the **guard enemies** (up to 3)
3. While near the stronghold, they can **steal gold**
4. Once the gold is depleted, they can **attack the walls**
5. When wall HP reaches zero, the stronghold is destroyed

### Strategy Tips

:::tip[How to Destroy Strongholds Effectively]
1. Place a **bounty quest** (with a high reward) near the stronghold
2. Make sure you have enough ranged adventurers (Mages / Rangers)
3. Mages (attack range 12) and Rangers (attack range 11) can fire from a safe distance
4. Bring Guards along to protect your ranged units
5. Have Builders ready to repair any damaged buildings
:::

:::caution[Note]
Attacking stronghold walls **does not grant experience**. Only killing guard enemies yields experience. Razing a stronghold gives +25 renown and pays any bounty on it; nothing drops.
:::

---

## Faction Groups

Strongholds are grouped by faction. In sandbox mode, you can select specific factions:

| Faction | Included Strongholds |
|---------|---------------------|
| **Slime** | Slime Pool |
| **Goblin** | Goblin Tent, Goblin Fortress, Goblin Watchtower, Orc War Camp |
| **Undead** | Graveyard, Undead Castle, Dark Shrine |
| **Dragon** | Dragon Nest |
| **Beast** | Spider Nest, Wolf Den, Rat Warren, Troll Cave, Harpy Roost |
| **Bandit** | Bandit Camp |
| **Desert** | Sand Tomb |

---

## Lair Raids

Each stronghold raids by its kind:

| Lair | First raid | Then every | Raiders | Target |
|------|------|------|------|------|
| **Slime Pool** | — | — | none | — |
| **Goblin Tent** | 8:00 | 5:00 | 3, one more each raid, 6 at most | the town |
| **Bandit Camp** | 6:00 | 4:00 | 2, one more each raid, 5 at most | the trade road (the nearest Trading Post), else the town |
| **Goblin Fortress** | 11:00 | 6:00 | 4, one more each raid, 8 at most | the town |
| **Orc War Camp** | 10:00 | 6:00 | 2, one more each raid, 5 at most | the town |
| **Goblin Watchtower** | 8:00 | 5:00 | 3, one more each raid, 6 at most | the town |
| **Dark Shrine** | 11:00 | 7:00 | 2, one more each raid, 4 at most | the town |
| **Troll Cave** | 14:00 | 10:00 | 1 | the town |
| **Harpy Roost** | 9:00 | 6:00 | 2, one more each raid, 4 at most | the town |

- Every raid is announced 30 seconds ahead in the chronicle, with the lair's place once your heroes have seen it; an unseen lair is announced without one, so scouting pays.
- A raid sets out as one party from beside the lair. Easy sends one raider fewer, hard two more.
- Each lair keeps up to 3 guards of its own kind, one new guard every 30 seconds.
- Razing a lair ends its raids and brings the crown half of what is left of its hoard; what heroes plundered before is theirs.
- Selecting a lair shows who lives there and what answers them, when the next raid sets out and what razing it would recover.
- Other lairs raid the town like the default (first after 10:00, then every 6:40, 3 to 6 raiders); a Spider Nest, a Wolf Den and a Rat Warren send none.
