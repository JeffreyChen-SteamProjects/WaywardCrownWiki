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
| **Giant Rat** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Grassland | 1 |
| **Bandit** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Grassland | 2 |
| **Harpy** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Grassland | 3 |
| **Pikeman** | 150 | 9 | 6 | 0.9 | 34 | 18 | 3 | 12 | Mountain | 3 |
| **Shieldbearer** | 220 | 7 | 10 | 0.8 | 40 | 20 | 3 | 12 | Mountain | 4 |
| **Sapper** | 90 | 5 | 3 | 1.0 | 36 | 22 | 3 | 12 | Forest | 4 |
| **Siege Beast** | 520 | 16 | 9 | 0.5 | 110 | 55 | 3 | 12 | Mountain | 5 |
| **Goblin Shaman** | 100 | 4 | 2 | 0.8 | 26 | 15 | 3 | 12 | Forest | 2 |
| **Bandit Saboteur** | 140 | 5 | 3 | 1.0 | 32 | 20 | 3 | 16 | Forest | 3 |
| **Venom Scorpion** | 130 | 6 | 5 | 0.9 | 34 | 18 | 3 | 14 | Desert | 3 |
| **Sand Guardian** | 360 | 11 | 15 | 0.5 | 82 | 42 | 3 | 14 | Desert | 4 |
| **Goblin Supply Courier** | 110 | 4 | 3 | 1.0 | 15 | 12 | 3 | 12 | — | 2 |
| **Enemy Necromancer** | 180 | 7 | 4 | 0.7 | 55 | 30 | 3 | 16 | Mountain | 4 |
| **Wraith Hunter** | 125 | 14 | 3 | 1.5 | 50 | 26 | 3 | 18 | Mountain | 4 |
| **Venom Spitter** | 150 | 6 | 4 | 0.65 | 48 | 28 | 8 | 16 | Swamp | 4 |
| **Hex Binder** | 110 | 8 | 3 | 0.8 | 52 | 32 | 9 | 16 | Forest | 4 |
| **Vampire Bat** | 80 | 10 | 2 | 1.8 | 30 | 16 | 3 | 16 | Mountain | 3 |
| **Fission Slime** | 240 | 10 | 5 | 0.6 | 58 | 28 | 3 | 12 | Swamp | 3 |

**The host**: four enemies fight as a line and its siege. A Pikeman's blow holds the hero it lands on back for a moment. A Shieldbearer now and then raises a shield over itself and the monsters beside it. A Sapper lays a charge that is marked on the ground before it goes off (it never does if the Sapper falls first) and hits buildings three times as hard. A Siege Beast is slow, hard to bring down, and hits buildings four times as hard.

Dragon, Goblin Archer, Dark Cultist, Venom Spitter, Hex Binder — fire their own ranged projectiles; every other ordinary kind strikes within 3 tiles.

An enemy takes its turn once every 4 ticks. Its speed gives it a step every 3 ÷ speed turns, rounded down (at least 1), and every enemy then walks three tenths faster: that wait is divided by 1.3, the fraction carried over to its next steps, and is never under one turn. So a step comes every turn at speed 1.6 and above, about two steps in 3 turns at 1.1–1.4, about three in 7 at 0.8–1.0, about one in 3 for the Troll and one in 4 or 5 at 0.5–0.6.

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

- **Forest** — Slime, Zombie, Dire Wolf, Dark Cultist, Giant Spider, Sapper, Goblin Shaman, Bandit Saboteur, Hex Binder
- **Mountain** — Goblin, Skeleton, Dragon, Orc Brute, Goblin Archer, Troll, Pikeman, Shieldbearer, Siege Beast, Enemy Necromancer, Wraith Hunter, Vampire Bat
- **Grassland** — Giant Rat, Bandit, Harpy
- **Desert** — Sand Wraith, Venom Scorpion, Sand Guardian
- **Swamp** — Venom Spitter, Fission Slime

:::note[Dragons]
Dragons and Trolls are the most dangerous enemies (danger level 5). With an attack range of 16, 550 HP, and gouts of flame for projectiles, Dragons are best dealt with using ranged adventurers and arrow towers; the Troll has more HP and attack but must close in.
:::

---

## Dragon Special Mechanics

- **Ranged Attack**: Attack range of 16, breathes gouts of flame
- **High Mobility**: Speed of 1.4, about two steps every 3 turns: as fast as Giant Rats, Giant Spiders and Bandits; only Harpies and Dire Wolves (a step every turn) are faster
- **Wide Vision**: 32-tile vision range, able to spot adventurers from a great distance
- **Evasion**: All enemies have a base 5% dodge rate

**Pressures**: three threats come of how the kingdom is kept, not of a lair. Each is announced a minute ahead in the chronicle and the overview, sends a pack of 3 (never more than 6 of its monsters alive, the same whatever your strength), and is called off when its cause is put right. *Squalor*: a town of 16 buildings with no fountain or garden draws giant rats; each fountain or garden answers for 6 buildings. *The restless dead*: 3 heroes lying dead with no temple rise as skeletons where the last fell; a temple, or reviving them, keeps them down, and a kingdom on the Undead path with an Ossuary takes them as guards instead. *The wilds*: a building more than 60 tiles from the castle with no arrow tower or guard post within 12 draws dire wolves; trading posts do not count, nor a Wilds kingdom's camps. Nothing presses a kingdom in its first 5 minutes, or in a level that does not allow the building that answers it. Orc Warcamps raid what is being built: the nearest site or upgrade under way.

**Goblin Shaman** — Heals up to four wounded allies within 4 tiles for 18 HP, every 20s, at most six times in its life. Kill the support first or outlast its remedies.

**Bandit Saboteur** — Prioritizes nearby buildings and deals 2.5× normal damage to structures. Still fights an intercepting hero; its light armor makes interception effective.

**Venom Scorpion** — A landed sting leaves one poison dose: 3 HP/s for 5s, without stacking. Antidotes and cleansing remove it; escort fragile heroes through scorpion ground.

**Sand Guardian** — Slow and heavily armored. At half health, gains an 80-HP shield for 10s once in its life, only on itself. Use ranged attrition or poison rather than repeated frontal blows.

**Enemy Necromancer** — Calls two ordinary skeletons every 30s while a hostile hero is visible: four per life, at most 32 living called skeletons worldwide. A green bone ring marks the cast. Kill the fragile caller early; its existing skeletons remain and cannot call more.

**Wraith Hunter** — Fast, fragile melee hunter that chases visible ranged and medical or command heroes first. Intercept it with a front line or slow it. Guards keep their leash; the spectral body uses ground paths and cannot cross water.

**Tactical reinforcements in raids**: Goblin Fortress → Goblin Shaman; Bandit Camp → Bandit Saboteur; Sand Tomb → Venom Scorpion, Sand Guardian; Undead Castle → Enemy Necromancer, Wraith Hunter.

Campaign raids obey the campaign enemy list; free kingdoms use the full lair troop pool.

**Venom Spitter** — Warns for 3s before poisoning a 2-tile zone from up to 8 tiles away: 4 HP/s for 5s, every 18s. Kill the fragile spitter before impact, leave the warning, or provide antidotes and cleansing.

**Hex Binder** — Marks a 2-tile zone from up to 9 tiles away, warns for 2s, then causes 25% extra incoming damage for 4s, every 20s. It does not stack and can be cleansed. Prioritize the binder or keep support near the front.

**Vampire Bat** — Fast and fragile. Actual melee HP loss heals it by at most 4 HP per hit and 60 HP over its life, never above maximum HP. Shields deny healing. Its winged appearance still uses ground paths; ranged focus and slows counter it.

**Fission Slime** — On death splits once into at most two ordinary slimes, each with 35% of its maximum HP and half its attack and defense, including rank. Children cannot split and drop no gold or kill XP. At most 64 living children globally. Use area damage and expect a second front.

Clearing a named wave also requires defeating its called skeletons and slime children; killing their source alone does not clear the wave.

**Pikeman** — A landed pike blow slows its target for 3s. Protect fragile heroes behind a front line; cleansing removes the slow.

**Shieldbearer** — A 40-HP shield for 8s within 2 tiles, at most four allies per cast and six casts per life, every 24s. Rank does not multiply it. Stronger shields remain. Focus the bearer or use poison.

**Sapper** — Frail demolition support: warns 3s before a 40-damage blast in radius 2, aiming from 3 tiles, every 18s. Killing it cancels the warning. Building blows use its already ranked attack, then ×3 once.

**Siege Beast** — Slow heavy that hits structures at ×4 of its already ranked half attack. Intercept with a front line and focus it from range; its high defense makes an unsupported melee rush costly.

Gnashfang calls one pikeman and one shieldbearer per call, four over his life. They follow his guard center and survive his death. His cleave warns for 2.4s, aims within 4 tiles and hits radius 2; the final two archers remain a separate finite call.

**Armored Barracks** — Armored front, archers and finite healing support. Kill the healer first or use ranged damage and poison. 3200 HP. Garrison: Shieldbearer, Goblin Archer, Goblin Shaman. Raid cycle: Shieldbearer, Pikeman, Goblin Archer, Goblin Shaman, Pikeman, Goblin Archer. Native terrain: Forest, Mountain. First raid 9:00; then every 6:00; 4 troops initially, growing by one up to 8. Razing stops new guards and raids; living troops remain.

**Plague Hatchery** — A splitting front with warned venom and hex support. Evade zones, cleanse and prepare for the finite children. 2200 HP. Garrison: Fission Slime, Venom Spitter, Hex Binder. Raid cycle: Fission Slime, Venom Spitter, Hex Binder, Vampire Bat, Venom Spitter, Fission Slime. Native terrain: Forest, Swamp. First raid 8:00; then every 5:30; 3 troops initially, growing by one up to 7. Razing stops new guards and raids; living troops remain.

**Siege Camp** — A siege beast, archers and shields guard the camp; sappers join raids against construction, or the castle while no work is underway. Intercept and destroy the source. 3800 HP. Garrison: Siege Beast, Goblin Archer, Shieldbearer. Raid cycle: Siege Beast, Sapper, Goblin Archer, Shieldbearer, Sapper, Goblin Archer. Native terrain: Desert, Grassland. First raid 12:00; then every 8:00; 3 troops initially, growing by one up to 6. Razing stops new guards and raids; living troops remain.

**Shaman Hut** — A goblin shaman keeps the hut's band on its feet, mending its wounded six times at most; goblins and archers march with its raids. Kill the shaman first.

**Saboteur Hideout** — Saboteurs raid whatever is being built, and the castle when nothing is: they wreck walls fast but wear light armour. Guard a far site or meet them on the way.

**Scorpion Burrow** — Venom scorpions hunt close to their burrow and leave the town alone. Their stings poison: bring antidotes, or a cleansing altar, before clearing it.

**Sunken Sanctum** — Sand guardians wake in the sanctum and march slowly on the town. Each shields itself once at half health: wear them down from range or with poison.

**Necromancer's Crypt** — Necromancers raise skeletons while heroes are in sight, so their raids grow as they march. Kill the caller first; its skeletons cannot raise more.

**Wraith Barrow** — Wraith hunters run past the front line for archers, mages and healers. Keep the fragile behind a wall of shields, or slow the hunters down.

**Spitter Bog** — Venom spitters foul the ground from afar, three seconds after the warning shows. Step out of the mark, carry antidotes, and kill the spitters first.

**Hex Circle** — Hex binders mark heroes to take more damage for a moment, and cultists march beside them. A cleanse washes the hex off; strike the binders before it lands.

**Bat Cave** — Vampire bats pour out fast and heal on what they bite. Shields deny them their meal; archers and towers bring them down.
