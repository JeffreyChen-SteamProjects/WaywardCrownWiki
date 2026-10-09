---
title: "Buildings"
---

Buildings are your primary means of influencing adventurer behavior. Different buildings serve different purposes: recruiting classes, selling equipment, providing rest, automated defense, and more.

---

## Building Overview

### Recruitment Buildings

| Building | Cost | HP | Recruited Class | Description |
|----------|------|-----|-----------------|-------------|
| **Barracks** | 150g | 900 | Warrior | Frontline melee fighters — recommended to build first |
| **Mage Tower** | 200g | 750 | Mage | Ranged magic attacks |
| **Ranger Lodge** | 150g | 750 | Ranger | Ranged bow attacks, high exploration drive |
| **Guard Post** | 120g | 1050 | Guard | Patrols and protects buildings |
| **Builder's Guild** | 100g | 600 | Builder | Repairs damaged buildings |
| **Thieves' Guild** | 140g | 650 | Thief | Greedy, evasive thieves; upgradable to Lv.3 (220g → 340g) |

:::tip[Recruitment Mechanics]
Each recruitment building can house up to **3** adventurers. Build additional copies of the same building to recruit more. A replacement is recruited 50 ticks (~10 seconds) after a place frees up. A guild's panel says how many of its heroes live there and when the next arrives, or that it is full.
:::

### Commercial Buildings

| Building | Cost | HP | Max Level | Upgrade Cost | Description |
|----------|------|-----|-----------|--------------|-------------|
| **Market** | 300g | 600 | 3 | 400g → 600g | Pays 30g × its level every 72 seconds of game time |
| **Blacksmith** | 200g | 900 | 3 | 300g → 500g | Adventurers purchase weapons and armor here |
| **Library** | 250g | 750 | 3 | 400g → 600g | Researches skills that enhance adventurers |
| **Inn** | 120g | 600 | 3 | 200g → 350g | Provides additional resting quarters |
| **Temple** | 220g | 750 | 3 | 300g → 450g | Heals wounded adventurers nearby, more per level |
| **Warehouse** | 260g | 700 | 3 | 350g → 500g | Makes new buildings 5% cheaper per level, up to 30% |
| **Village House** | 100g | 500 | 1 | — | Houses villagers, who each plant one herb for adventurers to gather. A villager works the ground with a hoe to sow; the herb shows as a sprout until it has grown, and only a grown herb is gathered. |
| **Trading Post** | 320g | 500 | 1 | — | Any number, each dearer than the last, at least 45 tiles from the castle: its caravan walks to the castle and back, and each round trip pays 0.6g for each tile between the post and the castle into its till. It needs a castle of level 2 |
| **Tax Office** | 280g | 650 | 1 | — | Keeps a tax collector of its own: it lives here and brings what it collects here. If it falls, another takes its post after 60s |

### Defensive Buildings

| Building | Cost | HP | Max Level | Upgrade Cost | Description |
|----------|------|-----|-----------|--------------|-------------|
| **Arrow Tower** | 250g | 150 | 3 | 300g → 500g | Automatically attacks enemies within 20 tiles, 2 more for each level above 1 (damage 16 + 8 × (Lv − 1)) |
| **Rampart** | 90g | 1400 | 2 | 140g | Wall piece: cheap and very tough. Pieces and gates stand flush in rows, and every piece costs the same |
| **Gate** | 160g | 1000 | 2 | 220g | The way through a wall: the crown's own people walk through its passage, monsters do not. A gate stands in a straight run of wall, never at a corner. The crown's people find it from anywhere: they are led out by it even when it is on the far side of the town, and walk round a walled town that lies in their way. |
| **Royal Magic Tower** | 240g | 700 | 1 | — | Carries the crown's royal spells: they may be cast within 40 tiles of it, as within 60 tiles of the castle |

**Walls and gates**: Wall pieces and gates stand flush against each other, 9 tiles apart on either axis, so a row leaves no way through; every other building keeps its gap, and every piece costs the same however many stand. With one in hand, drag on the map to lay a row (a click lays one piece; every piece goes onto the kingdom's wall grid, so pieces always line up and walls begun apart still meet); the ghosts show the row joined as it will stand, in red past what the treasury reaches, with the row's price, and the tool stays in hand. A gate's passage, three tiles wide across its wall, is for the crown's own walkers: monsters path as if it were wall and must break a piece down to get in. A piece is drawn as plain wall by the sides it is joined on, with a post only where the wall ends, turns or meets another, and a gate by the way its wall runs. A wall piece draws no guard over; a gate does. A gate asked for on a standing wall piece takes its place: the piece is torn down as any building is, part of its price coming back, and the gate goes up on its spot.

### Decorative Buildings

| Building | Cost | HP | Description |
|----------|------|-----|-------------|
| **Fountain** | 80g | 300 | Decoration |
| **Garden** | 60g | 300 | Decoration |
| **Belfry** | 70g | 300 | Decoration |
| **Road** | 0g | — | Painted onto the ground by dragging; movement cost 1, the same as grassland |

---

## Building Upgrades

Some buildings can be upgraded up to **Lv.3**:

- **Market** — Increases income
- **Blacksmith** — Offers higher-tier equipment
- **Library** — Unlocks more advanced research skills
- **Barracks**, **Mage Tower**, **Ranger Lodge**, **Guard Post** (Level 3), **Builder's Guild** (Level 2) — Each level unlocks the guild's later research
- **Inn** — Room for 3 / 4 / 5 lodgers by level, and they heal ×1 / ×1.2 / ×1.5 as fast (the castle and class buildings lodge 3 at the base rate)
- **Arrow Tower** — Increases attack power
- **Temple**, **Warehouse** — Stronger effect; **Thieves' Guild** — Lv.2 unlocks the Poisoned Blades research (300g): a thief's hit poisons for 5 s, 1% of max HP a second, without stacking; **Village House** — Cannot be upgraded; **Rampart** — up to Lv.2

Each level adds 50% of the building's base HP. An upgrade keeps the building's share of health (at half HP before, at half HP after), so it is no repair.

:::note[Construction cost]
Each building of a type you already have adds 50% of the base price (the second costs 1.5×, the third 2×; decorations excepted), and Warehouses then take their discount.
:::

---

## Building Placement Rules

- Cannot be placed on **water** or on unexplored ground
- Must leave at least 3 tiles between its edge and any other building
- Cannot be placed within 14 tiles of the **Castle**
- Cannot overlap with **treasure chests**, adventurers, enemies or Enemy Strongholds
- A blueprint preview is shown when placing (blue = buildable, red = not buildable)

---

## Building Damage and Repair

- Buildings take damage from enemies and are destroyed when HP reaches 0
- Damaged buildings display a health bar
- **Builders** will automatically travel to damaged buildings to repair them
- Buildings do not regenerate on their own
- **Building work**: a building you place is a site until its work is done. It stands from the moment it is paid for and can be attacked, defended and repaired, but serves nobody, recruits nobody and does not shoot until it is finished. The crown's crew finishes one site at a time (4 health a tick for each hand at it), the one marked *Build this first* before the oldest, and builders work on sites as on any damaged building, a priority site drawing them first; neither works with monsters near, and a builder turns for home when one comes. Cancelling a site returns 75% of its price; a site destroyed by monsters returns nothing. Roads, decorations and buildings a map places are finished at once, and prices and the one-trading-post rule count sites. The crew is seen at work: its hands in the crown's blue walk from the castle to that site, hammer at its front and walk home when it is done; the site is worked only once one of them has reached it, so a far site waits for the walk. The hands rest inside the castle while there is no work. A hand runs home from a monster and never fights; a monster beside it can kill it, and the castle takes on another 300 ticks later, until the crew has its number again. The castle's panel has a row for the crew that says where each hand is. The castle keeps two hands and one more for each of its levels above the first, and all of them do one job at a time, in this order: the site marked first; a finished building under 30% of its health; the oldest site; the oldest upgrade under way; any damaged building, the worst first. An upgrade is work too: it is paid for when ordered, the building serves at its present level meanwhile, and the level rises once the crew has done half the building's base health in work. A hand repairs 2 health a tick, and walks a road twice as fast. The kingdom overview sets the order the crew takes its works in: new buildings first (the usual), repairs first or upgrades first; a site marked to be built first and a building badly hurt come before any of them. On the map a site carries an amber bar that fills as it is built, and a building being upgraded a blue one that fills as the works go on (above its health bar when it is also damaged).

:::caution[Resident Safety]
When a building is destroyed, any adventurers resting inside are immediately released onto the map. Make sure you have enough Guards and Arrow Towers to protect key buildings.
:::

---

## Castle

The Castle is the core of your settlement:

| Property | Value |
|----------|-------|
| HP | 3000 |
| Footprint radius | 10 tiles |
| Vision range | 30 tiles at the start, then 5 |
| Lodging capacity | 3 |

**If the Castle is destroyed, the game is over.**

---

## Castle Levels

The castle has a level. It sets how many tax collectors the castle keeps and what it unlocks; it limits neither the heroes (each guild recruits up to its own capacity) nor building levels (any building can be upgraded to its type's top level):

| Level | Tax collectors | Unlocks | To reach it |
|---|---|---|---|
| 1 Keep | 1 | — | Start |
| 2 Castle | 2 | The trading post, the choice of the castle's path, the scouting spell | 1200 gold; 4 guilds and shops standing, 3 living heroes, 1500 gold of taxes brought home |
| 3 Royal Palace | 3 | The path's next step | 3000 gold; 8 guilds and shops standing, a hero that has reached level 8, 1 stronghold razed |

Select the castle to see the next level's requirements with what you have of each, and raise it with the button once they are met. A level is never lost when buildings fall afterwards.

## Royal Spells

The crown has two spells of its own, paid from the treasury, in a Royal spells panel of their own (it can be moved, floated or closed like any other). Arm one, then click the map: a target that does not fit is refused with the reason and costs nothing. Heroes keep their own minds; a spell never orders anybody. While scouting is armed the map lights up where it reaches, and Q and W arm the two spells from the keyboard. A kingdom that has taken a castle path has that path's own spells as well, each unlocked by one of the path's buildings (the castle paths table lists them); E, R and T arm the third to the fifth in the panel. A spell laid on the whole kingdom needs no target: its button, or its key, casts it at once.

| Spell | Unlocked by | Target | Effect | Cost | Ready again after |
|---|---|---|---|---|---|
| Emergency healing | A finished temple | A spot in reach: every hurt hero within 3 tiles of it that the castle can see (not one resting indoors) | Each gets 60% of its health back at once | 250 gold | 900 ticks (3 minutes) |
| Scouting | A castle of level 2 | Unknown ground within 70 tiles of the castle or 30 of an arrow tower | The ground within 8 tiles is revealed | 150 gold | 600 ticks (2 minutes) |

Inns, potions and the temple stay the cheaper way to heal, and an Explore bounty the cheaper way to map ground nobody needs at once. The wait runs with the game's speed, stops while paused and is kept in a save. A cast shows on the map where it lands: a crown of light over the healed hero, a beacon and spreading rings of light over the scouted ground. Every spell is cast on a spot and works on the area round it, which the map shows under the pointer while the spell waits. A spell is cast within 60 tiles of the castle, or where its own rule says, and within 40 tiles of each finished Royal Magic Tower, a building any kingdom may raise from the start (240 gold): the map lights that reach, and the area under the pointer turns red outside it.

## Castle Paths

Once the castle is level 2, select it to choose the kingdom's path. The choice is for good: the first click on a path asks again, the second takes it, and a path is never dropped for another. A path changes what heroes care for and what things cost, unlocks buildings, heroes, skills and research of its own and goes a step further at castle level 3. There the path also takes a speciality, one of the few it offers and for good, with the same two clicks: each gives something and has its price, and the lines below say both. The Demo plays three paths; Order, Valor, Arcane, Commerce, Tyranny are named in the castle panel as the full game's. **Compare paths…** in the castle panel opens a window with every path side by side: its building with its cost and health, what heroes do differently, its price, its level-3 step and whether it can be taken now; looking costs nothing, and taking a path there is the same two clicks. The window stays open while the game runs, whatever is selected, and can be dragged larger or maximised. A card also lists the path's hero skills (free, with the level, the wait between casts and what each does), the buildings where heroes spend their own gold, and its research and royal spells with their price to the treasury and what each does.

A path's buildings are built only on that path, as many as the treasury pays for: like any other building, each costs half its base price more for every one of its kind that stands; a level's build list does not hide them. A summoned guard is no hero: it takes no recruiting place, opens no chest and its kills pay nobody, and it crumbles when its time is up, its Ossuary (or the Necromancer that raised it) falls or the treasury cannot pay. A Beast Warden's hound is its companion and no hero either: it costs the treasury nothing and stays while its warden lives, and the warden calls another a while after one falls. A treasury that cannot pay the guards' next upkeep says so a payment ahead, in the chronicle and the kingdom overview.

<!-- castle-paths-content:begin (written by tools/path_docs.py from the game's data; do not edit) -->
- **Guardian** — Holds the town: the Bastion sells potions for less and shields defenders near it. Heroes stay closer to home and care more for defend bounties. *Heroes*: Explore 20% less far from the castle and care 30% more for defend bounties. *Price*: Expeditions wait longer for their party, and far bounties ask for more gold. *At castle level 3*: The castle and the arrow towers take a quarter less from every hit. *Specialities (one, at castle level 3)*: **Mercy** — Gives: Healing at inns and the temple +30% · Heroes' healing at rest +25%. Price: Shop prices +15%. **The Line** — Gives: Damage the castle takes -25% → -40% · Damage arrow towers take -25% → -40% · Care for defend bounties +30% → +60%. Price: How far heroes explore -20% → -35% · Care for kill bounties -20%.
- **Wilds** — Lives in the field: the Wild Camp, built away from town, sells potions and lets heroes rest. Heroes range further and care more for explore bounties. *Heroes*: Explore 25% further and care 30% more for explore bounties. *Price*: The town's inns and temple heal more slowly, and shops cost 10% more. *At castle level 3*: Heroes range 50% further from the castle. *Specialities (one, at castle level 3)*: **Far Trails** — Gives: How far heroes explore +50% → +90% · Care for explore bounties +30% → +60%. Price: Healing at inns and the temple -30% → -45%. **Camp Hearth** — Gives: Heroes' healing at rest +25% · Shop prices +10% → 0%. Price: How far heroes explore +50% → +25%. **The Pack** — Gives: A companion's health +40%. Price: The wait for a new companion +50%.
- **Undead** — Raises the dead: the Ossuary keeps up to three skeleton guards that patrol and fight near it for a while. *Heroes*: Behave as before. The guards are no heroes: no gold, no bounties, no place in a guild. *Price*: Each guard costs upkeep from the treasury and crumbles when it is not paid; living heroes heal more slowly at rest. *At castle level 3*: Up to five guards, each lasting half as long again. *Specialities (one, at castle level 3)*: **The Host** — Gives: Guards each Ossuary keeps 5 → 7. Price: Heroes' healing at rest -25% → -40%. **The Long Vigil** — Gives: How long a guard lasts +50% → +150%. Price: The treasury's share of taxes -10%.
- **Order** — Keeps the law and the books: the treasury's share of every tax is 15% larger, the Toll Post takes a toll for the buildings round it, and Marshals and Roadwardens hold the town. *Heroes*: Care 20% more for defend bounties and 20% less for explore bounties. *Price*: Heroes care less for explore bounties. *At castle level 3*: The treasury's share is 25% larger. *Specialities (one, at castle level 3)*: **The Ledger** — Gives: The treasury's share of taxes +25% → +40%. Price: Shop prices +10%. **The Watch** — Gives: Care for defend bounties +20% → +50% · Damage the castle takes -15% · Damage arrow towers take -15%. Price: Care for explore bounties -20% → -40%.
- **Valor** — Lives for the fight: heroes care more for kill bounties and expeditions set out sooner, the War Hall drills the heroes near it and the Quartermaster sells potions. *Heroes*: Care 30% more for kill bounties; expeditions wait a quarter less for their party. *Price*: The treasury's share of every tax is 10% smaller. *At castle level 3*: Heroes care 50% more for kill bounties. *Specialities (one, at castle level 3)*: **Glory** — Gives: Care for kill bounties +50% → +80% · What a far bounty asks -20%. Price: The treasury's share of taxes -10% → -20%. **The Vanguard** — Gives: An expedition's wait for its party -25% → -50% · Heroes' healing at rest +20%. Price: Care for defend bounties -20%.
- **Arcane** — Bends the kingdom to magic: royal spells are ready again a quarter sooner, the Spire strikes the monsters near it, and Spellblades and Adepts fight with light. *Heroes*: Behave as before. *Price*: The castle and the arrow towers take 15% more from every hit. *At castle level 3*: Royal spells are ready again 40% sooner. *Specialities (one, at castle level 3)*: **The Conclave** — Gives: Royal spells' wait -40% → -55%. Price: The treasury's share of taxes -10%. **The Wards** — Gives: Damage the castle takes +15% → -5% · Damage arrow towers take +15% → -5%. Price: Royal spells' wait -40% → -30%.
- **Commerce** — Lives by trade: a caravan's round trip pays 25% more, shops cost 10% less, and the Depot's Freight Contracts make a round pay more still. Escorts and Caravaneers keep the roads. *Heroes*: Behave as before. *Price*: Far bounties ask for more gold. *At castle level 3*: A caravan's round trip pays 50% more. *Specialities (one, at castle level 3)*: **The Caravans** — Gives: What a caravan's round trip pays +50% → +80%. Price: Shop prices -10% → 0%. **The Bazaar** — Gives: Shop prices -10% → -20% · The treasury's share of taxes +10%. Price: What a caravan's round trip pays +50% → +30%.
- **Tyranny** — Rules by fear: the treasury's share of every tax is 25% larger, the Levy Office seizes the tills near it without waiting for a tax collector, and Inquisitors and Enforcers keep the town in line. *Heroes*: Behave as before. *Price*: Heroes heal 15% slower at rest, and shops cost 10% more. The Edict and seized tills leave heroes with a grievance: one driven too hard gives notice and leaves. *At castle level 3*: The treasury's share is 40% larger. *Specialities (one, at castle level 3)*: **Extortion** — Gives: The treasury's share of taxes +40% → +60%. Price: Heroes' healing at rest -15% → -30%. **Iron Rule** — Gives: Care for defend bounties +30% · Damage the castle takes -15% · Damage arrow towers take -15%. Price: The treasury's share of taxes +40% → +30%.

A path's own content: its buildings stand only on that path, each recruits a hero class of its own with an active skill, and its research is bought at those buildings.

| Path | Its buildings | Their skills | Its research | Royal spells |
|---|---|---|---|---|
| **Guardian** | Bastion: 380 gold, 1400 health. Sells potions at 80% of the price; heroes defending the town within 10 tiles of it take 80% of a hit · Recruits Shield Knight (max 3)<br>Sanctuary: 320 gold, 800 health. Heals wounded heroes within 9 tiles by 8% of their health every 10s · Recruits Hospitaller (max 3) | Shield Knight — Oath Shield, Sworn Stand-in, To the Rescue<br>Hospitaller — Mending Prayer | Tower Shields — Shield Knight: +4 defence.<br>Bulwark Drill — The Bastion shields defenders 5 tiles further out.<br>Field Surgery — The Sanctuary and Mending Prayer heal 50% more.<br>Healer's Oath — Hospitaller: +3 defence. | Hand of Mercy (400g) [Sanctuary] — Arm it, then click ground you have seen: every wounded hero within 5 tiles gets back 35% of its health.<br>Sheltering Ward (350g) [Bastion] — Arm it, then click ground you have seen: for 30 seconds heroes within 5 tiles of it take 40% less from every hit. |
| **Wilds** | Wild Camp: 260 gold, 600 health. Sells potions and lets heroes rest here, away from town · Recruits Pathfinder (max 3)<br>Beast Lodge: 280 gold, 700 health. Recruits Beast Warden (max 3) | Pathfinder — Hunter's Mark<br>Beast Warden — Hawk Strike, Trail Tracking, Beast Companion, Companion Cover, Herbal First Aid | True Flight — Pathfinder: +4 attack.<br>Trail Lore — Heroes explore 15% further from the castle.<br>Herbal Remedies — The town's inns and temple heal at their full rate again.<br>Beast Hides — Beast Warden: +3 defence. | Forest Eye (200g) [Wild Camp] — Arm it, then click a spot within reach of the castle (100 tiles) or a wild camp (60): the ground within 10 tiles is revealed and stays in sight for 80 seconds, monsters and all.<br>Bramble Barrier (300g) [Beast Lodge] — Arm it, then click ground you have seen: for 40 seconds monsters within 5 tiles of it move at half speed. |
| **Undead** | Ossuary: 350 gold, 900 health. Raises a skeleton guard every 60s up to 3; each costs 6g every 20s · Recruits Grave Knight (max 3)<br>Crypt: 300 gold, 750 health. Recruits Necromancer (max 3) | Grave Knight — Bone Armor<br>Necromancer — Withering Seal, Bone Guard, Soul Debt | Deathless Plate — Grave Knight: +4 defence.<br>Grave Pact — A summoned guard's upkeep is halved.<br>Marrow Binding — Each Ossuary keeps one more guard.<br>Forbidden Tomes — Necromancer: +5 attack. | Call the Dead (300g) [Ossuary] — Arm it, then click your ossuary: it raises 2 guards at once, over the number it keeps, for 120 seconds. They cost upkeep like its others. Cast on a spot: it works on every one within 3 tiles of it.<br>Nether Veil (300g) [Crypt] — Arm it, then click ground you have seen: every hero and summoned guard within 5 tiles gets a shield worth 30% of its health for 24 seconds.<br>Death Pact (150g) [Crypt] — Arm it, then click a hero you can see: for 120 seconds a blow that would fell it leaves it standing at 30% of its health instead, once. The treasury pays 300 gold more when that happens; if it cannot, the hero falls. Cast on a spot: it works on every one within 3 tiles of it. |
| **Order** | Constabulary: 320 gold, 950 health. Recruits Marshal (max 3)<br>Toll Post: 260 gold, 600 health. Takes a toll of 3g for every building within 14 tiles into its till every 60s · Tax collectors hand their purse over here instead of carrying it to the castle · Recruits Roadwarden (max 3) | Marshal — Lockdown, Muster Order, Alarm Round<br>Roadwarden — Convoy Guard | Tax Rolls — A building's till holds 50% more.<br>Road Patrols — A tax collector carries 50% more.<br>Standing Orders — Marshal: +3 attack.<br>Crossbow Drill — Roadwarden: +4 attack. | Seal of Protection (300g) [Constabulary] — Arm it, then click one of your buildings: for 40 seconds it takes 60% less damage from monsters' attacks. Cast on a spot: it works on every one within 3 tiles of it.<br>Watch Net (250g) [Toll Post] — Arm it, then click a spot within reach of the castle (80 tiles) or a toll post (40): the ground within 8 tiles is revealed and stays in sight for 60 seconds, and monsters within 5 tiles of the spot take 25% more damage. |
| **Valor** | War Hall: 340 gold, 1000 health. Drills the heroes within 8 tiles: 8 experience each every 60s · Recruits Oathsworn (max 3)<br>Quartermaster: 280 gold, 700 health. Sells potions · Sells assault supplies for 60g: a hero's next 20 blows at a stronghold's wall hit 2 times as hard · Recruits Bannerman (max 3) | Oathsworn — Sundering Blow, Storm the Walls, Blood Frenzy<br>Bannerman — Unyielding Roar | War Drills — A kill gives its hero 20% more experience.<br>Trophy Hall — A kill pays 15% more gold.<br>Blood Oath — Oathsworn: +5 attack.<br>Banner Guard — Bannerman: +3 defence. | Warlord's Blessing (350g) [War Hall] — Arm it, then click ground you have seen: for 30 seconds heroes within 5 tiles of it strike 30% harder.<br>Siege Brand (300g) [Quartermaster] — Arm it, then click an enemy stronghold you have seen: for 40 seconds heroes' attacks on it do 50% more damage. Cast on a spot: it works on every one within 3 tiles of it. |
| **Arcane** | Academy: 360 gold, 850 health. Recruits Spellblade (max 3)<br>Spire: 300 gold, 650 health. Strikes the nearest monster within 9 tiles for 14 every 8s · Carries the Thunder Seal while it is linked: within 45 tiles of the castle or of a linked spire. Each linked spire past the first adds 15% to the seal's price · Recruits Adept (max 3) | Spellblade — Rending Light, Phase Step, Rune Riposte<br>Adept — Rune Ward | Ley Attunement — Royal spells cost 20% less.<br>Runic Binding — Heroes' active skills are ready again 15% sooner.<br>Runed Edge — Spellblade: +4 attack.<br>Focus Crystal — Adept: +5 attack. | Star Chart (300g) [Academy] — Arm it, then click anywhere on the map, known ground or not: the ground within 12 tiles of the spot is revealed.<br>Thunder Seal (350g) [Spire] — Arm it, then click ground you have seen within 30 tiles of a spire: every monster within 3 tiles of the spot loses 30% of its full health (10% for a named boss), 200 at most. It never kills: the last blow is a hero's.<br>Arcane Veil (200g) [Academy] — Arm it, then click a hero you can see: it gets a shield worth 50% of its health for 30 seconds. Cast on a spot: it works on every one within 3 tiles of it. |
| **Commerce** | Trade Guild: 360 gold, 900 health. Recruits Escort (max 3)<br>Depot: 280 gold, 750 health. Freight Contracts are researched here: a caravan's round pays 20% more · Caravans unload here when it is nearer their post than the castle: the round pays for the tiles hauled, into this till · Sells potions · Recruits Caravaneer (max 3) | Escort — Guard the Goods, Forced March, Convoy Duty<br>Caravaneer — Route Mark | Trade Charters — A caravan's round trip pays 20% more.<br>Bulk Buying — Buildings cost 10% less.<br>Hired Steel — Escort: +3 defence.<br>Road-Hardened — Caravaneer: +3 defence.<br>Freight Contracts — A caravan's round trip pays 20% more again. | Golden Bond (200g) [Trade Guild] — Press it, no target needed: for 60 seconds your tax collectors, caravans and royal workmen take 75% less harm from a monster's blow.<br>Emergency Transfer (150g) [Depot] — Press it, no target needed: every tax collector on the road hands what it carries to the treasury at once and goes on with its round. It costs its price however little they carry. |
| **Tyranny** | Tribunal: 360 gold, 1000 health. Recruits Inquisitor (max 3)<br>Levy Office: 300 gold, 800 health. Seizes the tills of the buildings within 12 tiles every 60s: the treasury gets 85% of them · Recruits Enforcer (max 3) | Inquisitor — Dread Brand, Iron Oath<br>Enforcer — Chain Verdict | Iron Levy — The Levy Office loses none of what it seizes.<br>Reign of Fear — The castle and the arrow towers take 15% less from every hit.<br>Writ of Zeal — Inquisitor: +4 attack.<br>Heavy Mail — Enforcer: +4 defence. | Tyrant's Edict (300g) [Tribunal] — Press it, no target needed: for 40 seconds the castle and every building of yours take 40% less harm from monsters' attacks. For that time resting heroes heal at 50% of their pace: nobody rests while the edict stands.<br>War Levy (100g) [Levy Office] — Press it, no target needed: everything in your buildings' tills goes to the treasury at once, whole. For 120 seconds afterwards the treasury's share of what heroes spend and loot is only 50% of what it would be.<br>Silencing Brand (250g) [Tribunal] — Arm it, then click ground you have seen: for 30 seconds the monsters within 2 tiles of the spot do 50% less harm with their blows on your people, and a named boss among them uses no skill (a boss shakes the brand off sooner). |
<!-- castle-paths-content:end -->
