---
title: "Combat System"
---

Combat is fully automatic. Adventurers and enemies engage whenever they are within attack range of each other.

---

## Combat Flow

1. **Detection** — An adventurer spots an enemy within their vision (checked every 2 ticks)
2. **Approach** — If the enemy is visible but out of attack range, the adventurer pursues
3. **Attack** — Once within attack range, both sides begin fighting
4. **Resolution** — Damage is resolved once every 5 ticks

---

## Damage Calculation

### Adventurer Attacking Enemy

| Type | Damage Formula |
|------|---------------|
| Melee | `ATK × 2` (global damage multiplier) |
| Ranged | `ATK` (projectile damage, no multiplier applied) |

### Enemy Attacking Adventurer

```
Damage = (Enemy ATK + random(0~2)) × 2
```

### Defense

```
Actual Damage = max(1, Damage - DEF)
```

### Evasion

| Source | Evasion Rate |
|--------|-------------|
| Adventurer base evasion | 10% + 1% × AGI (≤ 70%) |
| Enemy base evasion | 5% |
| Ranger "Evasion" skill | +15% |
| Thief: Evasion | +10% |
| Thief: Shadow Dance | +18% |
| Ranger: Wind Break | +25% |

---

## Projectile System

Every unit that fights from a distance shoots a projectile of its own, so a shot is told by what flies. The other classes fight in melee even though they reach 3 tiles:

| Class | Projectile Type |
|-------|----------------|
| Ranger | Arrow (arrow) |
| Pathfinder | Javelin (javelin) |
| Roadwarden | Crossbow bolt (bolt) |
| Mage | Fireball (fireball) |
| Adept | Shard of light (light_shard) |
| Goblin Archer (enemy) | Crude arrow (goblin_arrow) |
| Dark Cultist (enemy) | Dark orb (dark_orb) |
| Dragon (enemy) | Gout of flame (dragon_flame) |

Projectiles travel toward the target each tick after being fired and deal damage on hit. Each is drawn along the heading it flies: one that flies up the map is seen from behind, one that flies across from the side.

---

## Arrow Tower

The Arrow Tower is an automated defensive building:

| Property | Value |
|----------|-------|
| Attack range | 20 tiles |
| Base damage | 16 + 8 × (Lv − 1) |
| Upgrade scaling | Increases with level |

Arrow Towers automatically attack the nearest enemy within range.

---

## Experience Rewards

| Source | XP |
|--------|-----|
| Per hit (Drip) | 1/5 of kill XP |
| Kill Slime | 10 XP |
| Kill Goblin | 25 XP |
| Kill Skeleton | 40 XP |
| Kill Zombie | 60 XP |
| Kill Dragon | 150 XP |

:::note[Drip XP]
Every time an adventurer hits an enemy — whether by melee or projectile — they receive 1/5 of that enemy's kill XP. This ensures adventurers earn experience even without landing the killing blow.
:::

---

## Combat AI

### Adventurer Flee Conditions

- HP < 30% (HP_CRITICAL)
- Flee probability is influenced by the Safety personality trait

### Potion Usage

| Condition | Behavior |
|-----------|----------|
| HP < 30% | Use potion urgently |
| HP < 50% | Use potion |

### Enemy Target Priority

1. Adventurers in combat (non-pacifists)
2. Builders (pacifists)
3. Threatening buildings such as Arrow Towers
4. Castle
5. Other buildings
