---
title: "Adventurers"
---

Adventurers are the heart of the game. They have free will and make decisions based on their personality, needs, and current state.

---

## Class Overview

| Class | Primary Stat | Attack Scales With | Attack Range | Recruitment Building | Traits |
|-------|-------------|-------------------|-------------|---------------------|--------|
| **Warrior** | STR | Strength | 3 | Barracks | High HP, high attack, fights up close |
| **Mage** | INT | Intelligence | 12 | Mage Tower | Ranged magic attacks, low HP |
| **Ranger** | AGI | Agility | 11 | Ranger Lodge | Ranged bow attacks, high curiosity |
| **Guard** | STR | Strength | 3 | Guard Post | Patrols buildings, never leaves post |
| **Builder** | AGI | — | 3 | Builder's Guild | Repairs buildings, pacifist (does not fight) |
| **Thief** | AGI | Agility | 3 | Thieves' Guild | Greedy and evasive, low HP |

:::note[Attack range]
The Ranger (arrows), the Mage (fireballs), the Pathfinder (javelins), the Roadwarden (crossbow bolts) and the Adept (shards of light) attack with projectiles, each with a kind of its own. The other classes that fight do so in melee: they strike from up to 3 tiles away and deal double damage.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Every hero class in the game, written from its data: the six that any kingdom recruits, then the classes that a castle path's own buildings recruit.

| Class | Castle path | Recruited at | Health | Attack | Attack range | Skills |
|---|---|---|---|---|---|---|
| **Warrior** | — | Barracks | 70–150 | STR | 3 | Power Strike, Shield Wall, Berserker, Warlord, War Cry |
| **Mage** | — | Mage Tower | 25–65 | INT | 12 | Fire Bolt, Mana Shield, Chain Lightning, Archmage, Fire Tornado |
| **Ranger** | — | Ranger Lodge | 45–100 | AGI | 11 | Precise Shot, Evasion, Multi Shot, Eagle Eye, Wind Break |
| **Guard** | — | Guard Post | 50–120 | STR | 3 | Vigilance, Fortify, Taunt, Bastion |
| **Builder** | — | Builder's Guild | 30–70 | — | 3 | Quick Repair, Reinforce, Master Craft, Architect |
| **Thief** | — | Thieves' Guild | 35–80 | AGI | 3 | Backstab, Evasion, Cutpurse, Shadow Dance |
| **Shield Knight** | Guardian | Bastion | 90–170 | STR | 3 | Vigilance, Shield Wall, Taunt, Bastion, Oath Shield, Sworn Stand-in, To the Rescue |
| **Hospitaller** | Guardian | Sanctuary | 50–100 | INT | 3 | Vigilance, Mana Shield, Fortify, Bastion, Mending Prayer |
| **Pathfinder** | Wilds | Wild Camp | 50–105 | AGI | 11 | Precise Shot, Evasion, Multi Shot, Eagle Eye, Hunter's Mark |
| **Beast Warden** | Wilds | Beast Lodge | 65–135 | STR | 3 | Power Strike, Evasion, Berserker, Eagle Eye, Hawk Strike, Trail Tracking, Beast Companion, Companion Cover, Herbal First Aid |
| **Grave Knight** | Undead | Ossuary | 95–175 | STR | 3 | Power Strike, Shield Wall, Berserker, Warlord, Bone Armor |
| **Necromancer** | Undead | Crypt | 40–90 | INT | 3 | Fire Bolt, Mana Shield, Chain Lightning, Archmage, Withering Seal, Bone Guard, Soul Debt |
| **Marshal** | Order | Constabulary | 80–155 | STR | 3 | Vigilance, Shield Wall, Taunt, Warlord, Lockdown, Muster Order, Alarm Round |
| **Roadwarden** | Order | Toll Post | 55–115 | AGI | 10 | Precise Shot, Evasion, Multi Shot, Eagle Eye, Convoy Guard |
| **Oathsworn** | Valor | War Hall | 85–165 | STR | 3 | Power Strike, Evasion, Berserker, Warlord, Sundering Blow, Storm the Walls, Blood Frenzy |
| **Bannerman** | Valor | Quartermaster | 70–140 | STR | 3 | Power Strike, Shield Wall, Taunt, Warlord, Unyielding Roar |
| **Spellblade** | Arcane | Academy | 60–125 | INT | 3 | Fire Bolt, Evasion, Chain Lightning, Archmage, Rending Light, Phase Step, Rune Riposte |
| **Adept** | Arcane | Spire | 40–88 | INT | 11 | Fire Bolt, Mana Shield, Chain Lightning, Archmage, Rune Ward |
| **Escort** | Commerce | Trade Guild | 80–150 | STR | 3 | Vigilance, Shield Wall, Taunt, Bastion, Guard the Goods, Forced March, Convoy Duty |
| **Caravaneer** | Commerce | Depot | 55–115 | AGI | 3 | Precise Shot, Evasion, Multi Shot, Eagle Eye, Route Mark |
| **Inquisitor** | Tyranny | Tribunal | 65–130 | INT | 3 | Fire Bolt, Mana Shield, Taunt, Archmage, Dread Brand, Iron Oath |
| **Enforcer** | Tyranny | Levy Office | 90–170 | STR | 3 | Power Strike, Shield Wall, Berserker, Warlord, Chain Verdict |
<!-- hero-classes:end -->

---

## Detailed Stats

### Warrior

| Stat | Range |
|------|-------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Personality Tendencies**: High Glory (0.5–1.0), moderate Greed (0.2–0.8), low Curiosity (0.0–0.2)

**Skill Tree**:

| Level | Skill | Effect |
|-------|-------|--------|
| 3 | Power Strike | Attack ×1.15 |
| 6 | Shield Wall | Defense +5 |
| 10 | Berserker | Attack ×1.3, HP ×0.9 |
| 15 | Warlord | Attack ×1.5, Defense +8 |

### Mage

| Stat | Range |
|------|-------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Personality Tendencies**: High Safety (0.3–0.9), moderate Curiosity (0.1–0.3)

**Skill Tree**:

| Level | Skill | Effect |
|-------|-------|--------|
| 3 | Fire Bolt | Attack +5 |
| 6 | Mana Shield | Defense +4 |
| 10 | Chain Lightning | Attack ×1.4 |
| 15 | Archmage | Attack ×1.6, Attack +8 |

### Ranger

| Stat | Range |
|------|-------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Personality Tendencies**: Very high Curiosity (0.7–1.0), low Safety (0.0–0.4)

**Skill Tree**:

| Level | Skill | Effect |
|-------|-------|--------|
| 3 | Precise Shot | Attack +4 |
| 6 | Evasion | Dodge rate +15% |
| 10 | Multi Shot | Attack ×1.35 |
| 15 | Eagle Eye | Attack ×1.5, Crit rate +20% |

### Guard

| Stat | Range |
|------|-------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Personality Tendencies**: Very high Safety (0.5–1.0), no Curiosity

**Special Behavior**: Automatically assigned to patrol buildings; will not leave their post to chase distant enemies.

**Skill Tree**:

| Level | Skill | Effect |
|-------|-------|--------|
| 3 | Vigilance | Defense +3 |
| 6 | Fortify | HP ×1.2 |
| 10 | Taunt | Defense +6, Attack +3 |
| 15 | Bastion | HP ×1.4, Defense +10 |

### Builder

| Stat | Range |
|------|-------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Personality Tendencies**: Very high Safety (0.8–1.0), no Curiosity, no Glory

**Special Behavior**: Pacifist — will never enter combat. Automatically travels to damaged buildings to repair them.

**Skill Tree**:

| Level | Skill | Effect |
|-------|-------|--------|
| 3 | Quick Repair | Repair speed ×1.3 |
| 6 | Reinforce | Repair speed ×1.5 |
| 10 | Master Craft | Repair speed ×2.0 |
| 15 | Architect | Repair speed ×2.5, HP ×1.3 |

### Thief

| Stat | Range |
|------|-------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Personality Tendencies**: Very high Greed (0.75–1.0), high Safety (0.5–1.0), moderate Curiosity (0.3–0.7), low Glory (0.0–0.3)

**Special Behavior**: Dodge (10% + 1% per AGI) is its defence rather than HP, and its greed pulls it toward the best-paid bounties.

**Skill Tree**:

| Level | Skill | Effect |
|-------|-------|--------|
| 3 | Backstab | Crit rate +12% |
| 6 | Evasion | Dodge rate +10% |
| 10 | Cutpurse | Crit rate +20%, Attack ×1.15 |
| 15 | Shadow Dance | Dodge rate +18%, Attack ×1.35 |

---

## State System

Adventurers transition between the following states:

```
IDLE
  ├─→ MOVING_TO_BOUNTY
  ├─→ EXPLORING
  ├─→ PATROLLING
  ├─→ REPAIRING — Builder only
  └─→ FIGHTING
        └─→ RETURNING
              └─→ LODGING
                    └─→ IDLE
```

---

## Lodging System

- Adventurers go to rest and heal when HP is low, at the nearest place with room: their own guild, an inn, a wild camp or the castle. Of places about as near, their own guild comes first (it counts 8 tiles nearer) and the castle last (8 tiles further); one running for its life takes whatever is nearest
- Lodging adventurers enter the **LODGING** state: they disappear from the map and become invulnerable
- Each building can house up to **3** lodgers
- If a building is destroyed, all lodgers inside are immediately released
- Adventurers leave lodging automatically once their HP is fully restored

---

## Leveling System

| Item | Description |
|------|-------------|
| Max level | 20 |
| Base XP | 40 XP (to reach Lv. 2) |
| XP formula | `40 × 1.6^(level-1)` |
| Kill XP | Varies by enemy type (10 – 160 XP) |
| Combat drip | Each hit grants 1/5 of the kill XP |
| Shared kill | A kill's gold and XP are shared without anything being added: the hero that struck last keeps 60% when others share, and the rest goes in equal parts to up to 3 heroes fighting within 6 tiles of it or, within 10 tiles, that tended another hero in the last 30 seconds |
| Bounty XP | Explore 15 XP, Defend 25 XP, Kill 30 XP |

On level up, primary and secondary stats increase along with HP.

**Skill tree**: a class's skills are a tree, not a fixed number of slots: each skill has the level it is learnt at and may require other skills first, and a tree is as large as its class has skills for. A hero learns every skill its level and what it has already learnt allow. Its panel shows the tree: a skill it has in bold, one still to come greyed with the level it comes at, each under the skill it requires. A skill marked (active) is one the hero casts by itself; the others change its numbers for good.

---

## Personality System

Each adventurer has four personality values (0.0 – 1.0) that influence whether they accept bounties:

| Trait | Effect |
|-------|--------|
| **Greed (gold)** | Higher values mean the adventurer cares more about the reward |
| **Safety (safety)** | Higher values mean the adventurer avoids danger |
| **Glory (glory)** | Higher values mean the adventurer prefers combat missions |
| **Curiosity (curiosity)** | Higher values mean the adventurer prefers exploration |

**Bounty Attraction Formula**:

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- A **Warn** marker is never taken
- A reward below **level × 20** gold is refused outright
- Guards never take bounties: they patrol the town instead
- Heroes below level 8 refuse bounties inside a warning zone
- An adventurer takes the highest-scoring bounty, if it scores above 0.1

---

## Heroes' Own Lives

A hero with nothing to do weighs everything open to it and takes the best: a bounty, an errand in town, or exploring.

- **Errands**: buy better gear at a blacksmith, restock potions at a market, study at a library, take an evening off at an inn (15 gold; a fountain or garden is free), or go home when wounded or tired. Each needs the building, the gold and a real need, and the hero walks to that building to do it.
- **Commitment**: a hero finishes the trip it started. Only an exploring trip is given up, after 150 ticks, for something clearly better. Danger still comes first: a badly hurt hero heads for the nearest place to rest.
- **Strongholds**: from level 3, bold heroes march on known enemy strongholds by themselves when they dare one alone; thieves rob them.
- **Support**: a hero whose class tends others (heals, shields, cheers or stands in) and that has no work of its own walks with a party: the nearest hero within 30 tiles on its way to a bounty's work or a march, or in a fight, whose work it dares with that party. It turns after the party as it moves, and leaves when the party dies, stops or goes home, when it is hurt itself, or after 2 minutes.
- **Memory**: a hero keeps a few things that happened to it, each for some minutes. One whose guild was attacked values defend bounties 30% more; one that another hero helped when badly hurt, or that was paid a bounty's work beside another, values a bounty that hero holds more; one that turned for home badly hurt, or saw such a hero fall, wants better odds within 12 tiles of the place. The hero's panel lists what it remembers.
- **A lost guild**: a hero whose guild is destroyed or torn down is not lost. It moves by itself into the nearest building that recruits its class and has room, a rebuilt guild among them. Until then the castle shelters it: 3 heroes for each castle level for 5 minutes, any more for 100 seconds. A hero whose time runs out leaves the kingdom with what it carries; the log and the chronicle say so beforehand, and its panel counts the seconds.
- **What a hero shows**: a hero flinches when it is hit, raises a hand when its skill goes off, cheers when it gains a level, and slumps where it falls before the dust takes it. With reduced motion (Settings) it does none of these.
- **Class leanings**: every class has habits of its own. Warriors fight on until badly hurt and like storming strongholds; mages stay near town, retreat early and like studying; rangers travel far and favour explore bounties; thieves go for the best-paid bounty and rob strongholds; guards and builders stay in town. A hero's own caution and curiosity shift this a little, and its panel lists its leanings. How far a hero roams is its own as well: the bolder and more curious it is, the further from the castle it ranges, so two heroes of one class do not keep to the same ground. A hero makes for unknown land within its range first; when none is left it goes a little further out and walks across to the far side of its range rather than circling the town.
- **Reading a hero**: a hero's panel says what it is doing and why, where it is going, what it needs, and where it stands on each open bounty: on the way, busy, or the reason it turned the bounty down, with the reward that would change its mind. A bounty's panel lists the heroes by those reasons, the cheapest to win over first. The panel ends with the hero's history, its last eight deeds with the game time of each: the gear it bought and what it studied, the bounties it took and what tipped it (the pay, others already on it, or what it remembers), what it was paid and beside whom, who came to its aid when it was badly hurt, and when it turned for home.
