---
title: "Equipment and Shops"
---

Adventurers automatically purchase equipment and consumables at shops near the Castle.

---

## Equipment System

Adventurers can buy weapons and armor at the **Blacksmith**:

| Equipment | Effect per Level | Price Formula | Max Level |
|-----------|-----------------|---------------|-----------|
| **Weapon** | +3 ATK / level | 100g × level | 3 (requires Blacksmith of the same level) |
| **Armor** | +2 DEF / level | 100g × level | 3 (requires Blacksmith of the same level) |

:::note[Blacksmith Level Requirement]
A Lv.1 Blacksmith can only sell Lv.1 equipment. To give your adventurers better gear, you need to upgrade the Blacksmith.
:::

### Cumulative Equipment Stats

| Level | Weapon ATK | Armor DEF | Weapon Price | Armor Price |
|-------|-----------|-----------|-------------|-------------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Consumables

### Potions

| Item | Price | Effect |
|------|-------|--------|
| **Healing Potion** | 100g | Restores 40 HP |

- Adventurers can carry up to **3** potions
- Automatically restocked at shops
- Used when HP drops below 50%

### Speed Potion

| Item | Price | Effect |
|------|-------|--------|
| **Speed Potion** | 200g | Increases movement speed for 60 ticks |

Sold only once a Market reaches Lv.2; an adventurer carries at most 2.

### Death Ward

| Item | Price | Effect |
|------|-------|--------|
| **Death Ward Ring** | 500g | Blocks one lethal hit |

Sold only once a Market reaches Lv.3.

---

## Shopping Behavior

Adventurers automatically shop when they stop within 7 tiles of a **Market** or **Blacksmith**.

At a Market, in this order:

1. Drink a healing potion on the spot if hurt
2. Buy a Death Ward Ring (Market Lv.3)
3. Restock carried potions (up to 3)
4. Buy Speed Potions (Market Lv.2, up to 2)

At a Blacksmith, they buy the **next** weapon tier and the next armor tier they can afford, one tier per visit, up to the Blacksmith's level.

**Only shops sell.** The castle, guilds and inns sell nothing: a hero who needs gear or potions walks to a Blacksmith or a Market (see *The Kingdom's Gold* below).

:::note[Tax Revenue]
Whenever adventurers spend gold (equipment, potions, study) or earn it (kills, chests), **20%** of the amount is the treasury's tax: 30% during a Tax Boost, nothing during a Black Market. It waits in the till of the building where it was spent until a tax collector carries it to the castle.
:::

---

## The Kingdom's Gold

Every coin is accounted for:

- **Shops take the money**: heroes shop only at the building itself (the castle sells nothing). What they pay is that building's revenue, and the treasury takes its tax share: 20%, 30% during a Tax Boost, nothing during a Black Market.
- **Tills**: the treasury's share does not arrive by itself. It waits in the till of the building where the gold was spent (the share of a hero's loot waits at its guild, and a market's periodic income in the market's own till). A till holds 600 gold; what does not fit is lost, and a building that falls loses its till.
- **Tax collector**: the castle keeps a tax collector who walks to the fullest till that holds 40 gold or more, carries up to 400 and brings it home, where it becomes treasury gold. The collector flees from monsters and never fights; if it is killed, what it carried lies there as a chest, and a new collector leaves the castle 300 ticks later. The panels of buildings, the castle and the collector show what waits and what is being carried. A castle of level 2 keeps two collectors and one of level 3 three; each goes to a till of its own. A collector with nothing to fetch rests inside the castle, off the map, where nothing can reach it. It comes out at the castle's front when a till is worth the walk, stands at that building's front a moment to take the till, and goes back inside once it is home; after fleeing from a monster it stays in a while. The castle keeps its number of collectors, replacing every one it loses, and its panel has a row for them that says where each one is. A **Tax Office** (280 gold; any number, each dearer than the last) keeps one more collector of its own: it lives there, comes out at its door, brings what it collects there, where it is treasury gold at once, and is replaced there 60 seconds after it is lost. With more than one collector resting, those that live within 40 tiles of a till take turns for it, the one that has been home longest going first (a newly staffed office's collector has never been out, so the next walk is its own); a till far from the castle is left to the office that stands near it. The office's panel says what its own collector is doing.
- **Tax settings**: a building's panel can take its till off the collectors' rounds (it then fills up and spills) or ask the next free collector to empty it first, however little it holds; the kingdom overview sets how full a till must be before a collector bothers (20, 40 or 150 gold). Collectors still choose their own road, leave a till with a monster near it for later, and run from danger. The gold label's tooltip and the overview split the kingdom's gold into what can be spent, what waits in tills, what collectors carry and what open bounties hold; the overview also says when heroes want gear or potions that no building sells, and a building's panel says how far it is from the castle. The overview also sets how wary the crown's carriers are: tax collectors, caravans and the crew's hands run from a monster at 9, 6 or 4 tiles; careful ones are lost less often and bring less in. The gold label's tooltip adds what caravans on their way back are due and what the heroes carry. A tax policy sets both at once: Safe (full tills only, carriers run early), Steady (the usual rounds) or Eager (small tills too, carriers hold their nerve).
- **Trading post and caravan**: a kingdom may build as many trading posts as it pays for, each dearer than the last, at least 45 tiles from the castle on ground a walker can reach from it. Its caravan, a pack mule, walks to the castle, unloads and walks back; a round that reached the castle pays 0.6 gold for each tile between the post and the castle into the post's till, so a post built further out pays more and leaves the caravan out for longer. It takes a tile every 2 ticks, every tick on a road. A monster in sight sends it to the nearer end of the road until the monster is gone, one beside it hurts it, and you are told where; a lost caravan is replaced after 400 ticks. It needs a castle of level 2.
- **Rewards are transfers**: a bounty pays exactly what is in it. The difficulty's and a trait's gold multipliers apply to loot and chests only.
- **Bought once, restocked to a limit**: each gear tier, the ring and each library study are bought once; potions are restocked up to 3 and speed potions up to 2.
- **Rations**: a resting hero with no potion and no gold for one is handed a potion by its guild, at most once every 600 ticks.
- **Shops as services**: a market sells by its own level (speed potions from level 2, the ring from level 3), a blacksmith forges tiers up to its level, a library teaches one study per level and an inn lodges as many heroes as it has rooms. A hero only walks to a shop that has something new for it and takes the nearest, treating one with a monster within 8 tiles as 40 tiles further away. A shop's panel shows what heroes have spent there, who is on the way and its last six customers. Nothing is paid before the hero stands at the counter, so a shop that falls, fills up or is upgraded on the way leaves no trade half done.
- **Ledger**: the game keeps a total for every flow (bounties, construction, research, revival, theft; taxes, trade, refunds, demolition, windfalls; rewards, loot, chests, plunder; gear, supplies, study, leisure) with the latest entries and each building's revenue, saved with the game. The treasury, the bounties and the shops must each reconcile.
- **Kingdom overview**: a Kingdom tab sits behind the Details panel. It shows the treasury, its income and spending by kind, what waits in the tills and on the collectors, what heroes earned and spent, caravan rounds and losses, each shop's custom, the ledger's latest entries, and what needs attention (a castle that can be raised, no collector out, a lost caravan, a shop with a monster near it, a full till). Names in it are links that select the building or the castle and move the map there. Under *Gold held up* it names where gold sits idle, each a link to the place: the fullest till the collectors are told to skip, tills that each hold less than a collector walks for, and the largest reward no hero has taken up for two minutes.
- **Rolls**: a Rolls tab (key L) lists every hero, guild, work and building's custom of the kingdom, a row each, with a search box. Heroes can be narrowed to the idle, those on a flag, the hurt, those thinking of leaving and those without a guild; guilds to those with room, the full and those with monsters near; works, in the order the crown's crew takes them, to buildings going up, being upgraded, damaged, and work that has stopped; income to tills holding gold, tills off the collectors' rounds and shops with monsters near. A click on a row shows it on the map and a double click opens its details. The rolls give no orders and list nothing of the enemy.
- **Map layers**: the Layers button on the top bar (key M) lays over the map what the kingdom knows. Supply rings every shop, inn, temple and library with the reach at which a monster puts customers off. Gold on its way writes what waits in each till and draws each collector's walk and each caravan's road. Works numbers the crew's jobs in the order it takes them. Known threats rings the lairs the kingdom has seen, with a line to the castle from one gathering a raid. Spell reach shows where the crown's spells can be cast and the arcane's net of spires. Green is well, amber wants a look, red is trouble. A lair nobody has seen is on no layer, and the layers switched on are remembered.
- **Briefing and chronicle**: a mission's screen briefs it before it starts: the story, what wins and loses it, what may be built and the level's advice. A Chronicle tab keeps that briefing and what has been told since, newest first: scripted advice, a lair come into sight, a flag no hero will take (with the reason and the reward that would do), a caravan in trouble, a tax collector or a building lost, a boss changing tactics or falling. Each entry has its time and a link that moves the map there; a repeat about the same thing is counted on its entry instead of being said again, and a full chronicle (60 entries) drops the oldest of the least important. Fresh entries pop up two at a time without pausing the game. A setting keeps advice and lesser news from popping up: losses and bosses still appear, and everything is still written down. The chronicle can be kept on one subject (threats, heroes, gold, or crown and advice); the choice is remembered.
- **Results**: when a game ends, won or lost, a results screen says why and lists the objective and any named enemy with how it ended, heroes hired, lost and still standing, the treasury's income and spending by kind, caravan and tax collector losses, kills, lairs razed, bounties, buildings and the time played. It remembers up to three heroes: the one who rose highest, the one who killed most, the best who fell. A won level is rated with three marks, each a plain statement with its numbers (the objective met; no more than one hero in four lost; no building lost); none is about speed. From there: the next level, the same level again, the menu, or after a defeat a look at the map. The recap can be saved as a text file in a `recaps` folder beside the settings. Finishing the Demo's story adds what is open now and what is planned for the full game.
- **Optional finds**: a level may hide up to two things worth finding, none of them needed to win. A supply party besieged by monsters holds out six minutes once found; a hero reaching it with the besiegers dead brings 300 gold of supplies to the treasury. A cache has a keeper twice as tough as its kind: the crown posts a Kill bounty on the keeper, and the 400-gold chest is the heroes'. A treasure lies under a lair that sends no raids: razing it leaves a 500-gold chest. They say nothing until their site is seen; then the chronicle reports them, an Optional list in the Chronicle tab tracks them with links, and the results screen says how they ended. The Demo's three missions carry one, one and two.
- **Difficulty and recovery**: easy and hard change numbers, never enemy health: every lair raid has one raider fewer or two more, a scripted wave is 75% or 125% of its size, and a level starts with 125% or 85% of its gold; the mission screen states them. The Demo's levels name a roster (slime, giant rat, goblin, goblin archer, dire wolf, bandit, orc brute, troll) for what wanders their maps, and never roll the random events that bring a force of their own, since their raids are announced. A kingdom with no guild left and no gold for one is given the difference by the crown, at most once every five minutes, and a level can be started over from the Esc menu at any time.
- **City life, shown and heard**: a small icon rises over the place where a hero buys potions or arms, pays for a bed or a lesson, a tax collector empties a till or hands the taxes over, a caravan is paid, a recruit signs on, a level is gained, a building is upgraded or mended, a chest is opened or something is found. Each has a short sound of its own, quieter the farther it is from the view, at most three at once and never the same one in quick succession. A lair gathering a raid wears a pulsing red ring and a horn on the map and a flashing frame on the minimap until the raid sets out; the horn, the war drums and a boss are heard from anywhere. With the sound volume at zero the icons still tell it all. The sounds are synthesized by `tools/soundgen.py` and the icons rendered by the art generator; nothing is recorded or sampled.
- **Gold and answers, shown where they happen**: where gold changes hands (a purchase, a till emptied, taxes handed over, a caravan paid) the icon carries the amount, `+120`. When a hero makes up its mind about a bounty flag, a flag icon rises over it: a gold flag with a green tick when it takes the flag, a grey flag with a red cross when it has looked the flag over and turned it down (a hero that only chose a better flag, or found this one taken, shows nothing). The answer is drawn larger than the other icons, over the hero's head, and goes with the hero as it walks on.
- **Heroes answer**: selecting a hero plays a short answer in its class's voice and prints what it says at the top of its panel. The answer follows how the hero stands: badly hurt or running home, fighting, on its way to a flag, resting indoors, mending a wall, short of supplies or sleep, or ready, when each class has its own greeting. An answer comes at most every 1.5 seconds, and the line is there with the sound off.
- **Every unit has a voice**: a monster, a tax collector, a caravan and a villager answer a click with their own kind's sound, as a hero answers with its mood, and everything that walks the map is heard when it falls. A hero and the crown's other people (tax collectors, caravans, the crown's hands, the villagers of a house brought down) are heard wherever the view is; a monster fades with its distance from the view, the same kind is heard at most once every two seconds, and at most two such sounds overlap. No unit's sound is shorter than a second.
- **Music**: the menu and the game each have their own tracks, shuffled: any of them may open, and every track plays once before one repeats. While a named boss is in the field its own music plays, and the game's returns when it falls; a fallen castle has its music too.
- **Seen on the map**: a stranded supply party's wagon, a wheel off and its load half unpacked, stands at its site from the moment the site is explored until the party is reached or lost, and a boss wears a horned-skull badge over its name and its health bar. Both look the same on either render path. Chief Gnashfang has a look of his own: a horned helm, a red shield, a two-bladed axe and his war band's standard on his back.
