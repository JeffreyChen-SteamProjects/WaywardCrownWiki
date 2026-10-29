---
title: "Random Events"
---

The game triggers random events at regular intervals, adding unpredictability to gameplay. Event intensity scales dynamically based on your number of adventurers. The built-in tutorial never rolls an earthquake or an event that puts a new structure on the map.

Loan cards carry a sealed-letter icon; a new invitation sounds once, quietly, at the effects volume setting. The Records panel's Kingdom events tab shows invitations and outstanding loans without pausing the game. Loan cards state the upfront principal, deadline, repayments and maximum loss; declining or ignoring an invitation is free. The map and campaign editors save event pool choices: level settings override campaign settings, then map settings, and inheriting differs from disabling every pool. Each pool adds its own random events (see Event Pools below); a level with no pool gets only the usual events. Loan cards wrap within a narrow sidebar and scroll vertically when needed, keeping every term readable.

When a loan is outstanding, the next-level preview separates current treasury, principal returned without interest, and projected carried gold. The destination’s treasury rule applies; previewing makes no payment.

---

## Event Trigger Rules

| Setting | Value |
|---------|-------|
| Opening Grace Period | 1500 ticks (~5 minutes) |
| Check Interval | Every 300 ticks |
| Trigger Chance | 60% |
| Event Cooldown | 600 ticks (~2 minutes) |

---

## Threat Events

These apply pressure on the player for their duration and require an active response.

| Event | Duration | Weight | Effect |
|-------|----------|--------|--------|
| **Monster Invasion** | 250 | 2 | Enemies swarm toward the castle! |
| **Plague** | 200 | 0 | All adventurers take periodic damage |
| **Blood Moon** | 350 | 2 | Enemies become stronger and more aggressive |
| **Undead Assault** | 300 | 2 | Skeletons and zombies spawn near the castle |
| **Goblin Raid** | 250 | 2 | Goblins attack shops and steal gold |
| **Dragon Nest Awakening** | 450 | 1 | A dragon nest appears and spawns dragons. Destroy it! |
| **Cursed Night** | 300 | 2 | Enemies move faster, but kill XP is doubled |
| **Earthquake** | Instant | 1 | Buildings and the castle take heavy damage, and roads are destroyed |
| **Traitor** | Instant | 1 | A random adventurer betrays the guild and becomes an enemy! The turncoat is marked as an Elite on the map. |
| **Rebel Guild** | 400 | 2 | A hostile guild appears and spawns enemies. Destroy it! |
| **Inflation** | 350 | 1 | Potion and equipment prices increase by 50% |
| **Mana Seal** | 250 | 1 | Mages lose all attack power |
| **Sandstorm** | 300 | 2 | Move speed and ranged damage halved |
| **Dense Fog** | 250 | 1 | Fog of war re-covers the map, vision reduced |
| **Spy Infiltration** | 350 | 2 | Waves of enemies disguised as adventurers rush the castle |
| **Corrosive Rain** | 300 | 2 | Buildings lose HP each tick (about half their max HP over the whole rain), repair speed halved |
| **Soul Curse** | 300 | 1 | Fallen adventurers rise again as zombies! |
| **Equipment Decay** | Instant | 1 | All adventurers lose 1 equipment tier |
| **Memory Wipe** | Instant | 1 | All adventurers lose 2 levels! |
| **Desertion** | Instant | 1 | A fifth of the adventurers (at least one) abandon the guild! |
| **Cursed Arms** | 120 | 2 | Adventurers take 30% self-damage when attacking |
| **Champion's Challenge** | Instant | 2 | A champion monster stalks your lands. Dangerous — and worth a fortune |
| **Monster Uprising** | 350 | 2 | Every monster that appears now is a veteran or worse |

---

## Buff Events

These grant the player benefits or power-ups.

| Event | Duration | Weight | Effect |
|-------|----------|--------|--------|
| **Treasure Rain** | 150 | 1 | Bonus treasure chests appear across the map |
| **Tax Boost** | 350 | 1 | Tax rate increased to 30% |
| **Building Frenzy** | 300 | 1 | Building costs halved, repair speed doubled |
| **Temple Blessing** | 300 | 1 | All adventurers slowly heal everywhere |
| **Double XP** | 350 | 1 | All XP gains are doubled |
| **Recruitment Wave** | 300 | 1 | Recruit speed doubled, building capacity +1 |
| **War God's Descent** | 300 | 1 | All adventurers gain +50% ATK |
| **Iron Wall** | 300 | 1 | Buildings and castle take half damage |
| **March Order** | 250 | 1 | All adventurers move faster |
| **Lucky Stars** | 300 | 1 | Enemy gold and XP drops doubled |
| **Black Market** | 300 | 1 | No tax income, but equipment prices reduced by 30% |
| **Allied Reinforcements** | 350 | 1 | Temporary high-level allies join the fight |
| **Forge Blessing** | 300 | 1 | All adventurers' equipment tier +1 |
| **Holy Barrier** | 300 | 0 | Enemies are pushed away from the castle |
| **Shared Wisdom** | 300 | 1 | 30% of XP gained is shared with all adventurers |
| **Time Warp** | 300 | 1 | All timers run at 2x speed — including enemy spawns! |

---

## Instant Events

Take effect immediately with no duration.

| Event | Weight | Effect |
|-------|--------|--------|
| **Elite Mutation** | 1 | A random enemy mutates into a powerful elite! It is marked as an Elite on the map. |
| **Lost Adventurer** | 1 | A high-level adventurer joins from the wilds |
| **Wheel of Fortune** | 1 | A random event is triggered! |
| **Hero Awakening** | 1 | A random adventurer permanently awakens as a hero! |
| **Treasure Map** | 1 | Reveals a hidden area and spawns valuable chests |
| **Fate Intertwine** | 1 | Two random adventurers swap all their stats |
| **Divine Arsenal** | 1 | Several adventurers receive max-tier equipment |
| **Golden Age** | 1 | Receive gold based on the number of buildings |
| **Scatter** | 1 | All adventurers are teleported to random locations |
| **Fortification** | 1 | All buildings fully healed, max HP +20% |
| **Fountain of Life** | 1 | All adventurers fully healed, max HP +10% |
| **Stat Roulette** | 1 | Each adventurer's stats are randomly shuffled |
| **Level Shuffle** | 1 | All adventurer levels are randomly redistributed |
| **Clone** | 1 | A random adventurer is duplicated! |
| **Heroes' Welcome** | 1 | Travelling bards sing of your guild — a windfall of renown |

---

## Structure Events

Spawn persistent map structures.

| Event | Duration | Effect |
|-------|----------|--------|
| **Dragon Nest Awakening** | 450 | A dragon nest appears and spawns dragons. Destroy it! |
| **Rebel Guild** | 400 | A hostile guild appears and spawns enemies. Destroy it! |
| **Ancient Ruins** | 450 | Ruins appear on the map. First to arrive gets rewards! |
| **Dimensional Rift** | 300 | Portals appear and randomly teleport adventurers |

---

## Event Pools

A map, campaign or level can switch on any of five event pools in the editor. Each pool adds the events below to the usual ones, through the same roll and at the same pace, and an offer you turn down or ignore never costs anything. Point at a pool in the editor to see its events.

## Economy and Services Pool

### Royal Loan Invitation

With the Economy and services pool on, a neighbouring royal court can ask to borrow from your treasury, but only while you hold at least 400 gold. The sum is fixed when the request arrives: half your treasury, rounded down to a multiple of 50, between 200 and 1,000 gold. You have 30 seconds to decide. If you lend, the gold leaves at once and comes back 120 seconds later with 10% interest. Need it sooner? Recall it early and you get 90% back, so the most you can lose is a tenth. If you leave the level before it's due, you get the sum back without interest. Turning the request down or letting it lapse costs nothing, and once you've lent, the loan doesn't stop other events from coming. Its card under Kingdom events shows the exact sums and the seconds left.

### Foreign Order

With the Economy and services pool on, a foreign buyer can place an order through your market, as long as you have a finished market and a caravan working a trade route that connects to it. You have 30 seconds to accept. Accepting costs 150 gold up front. Your caravans then fill the order on their normal rounds: each loaded trip that sets out carries one shipment and uses 50 of that money, and a shipment counts once it's fully unloaded. Get three shipments delivered within 180 seconds and you're paid 450 gold. If a caravan carrying a shipment is destroyed, the market falls, the route is lost or time runs out, the order fails and you get back whatever hasn't been spent. You can withdraw on the same terms at any time. Declining is free, and your usual caravan income and taxes carry on as before. Its card under Kingdom events shows the market, the route, and how many shipments have gone out and arrived.

### Travelling Clinic

With the Economy and services pool on, a travelling clinic can offer to set up by one of your village houses while you have a wounded hero who can reach it. You have 30 seconds to choose. Sponsor it for 120 gold and the crown pays for six treatments; after those, heroes pay their own way. Or let it open self-paid, which costs you nothing: each hero pays 20 gold from their own purse. It treats two heroes at a time. Hurt heroes walk over on their own when nothing else holds them (a fight, a flag, a night at the inn), and each treatment takes 5 seconds and restores up to 60 HP. A hero who's hit or leaves mid-treatment gets the fee back. The clinic takes patients for 180 seconds, then has up to 10 seconds to finish, and any crown money left over comes back. Declining is free. Its card under Kingdom events lists the patients, and Show takes you there once you've seen the spot.

### Harvest Fair

With the Economy and services pool on, a harvest fair can come to one of your village houses. You hear about it 20 seconds ahead, and it stays open for 120 seconds. You don't send anyone: heroes who are hurt, short of potions or after an evening off walk over on their own, as long as nothing else holds them (a fight, a flag, a party they're waiting for). It serves four at a time. Each guest rests for 5 seconds and gets 40 HP back for free, buys the potions it's missing at the usual price (the fair brings 24 for its whole stay) and pays for an evening off if it wants one. A hero that leaves early pays nothing. While the fair is open, you can keep it open 60 seconds longer once, for 150 gold; the potions aren't restocked. Its card under Kingdom events shows when it opens and closes, who's at the stalls and how many potions are left, and Show takes you there once you've seen the spot.

## Adventurer Stories Pool

### Visiting Rival Guild

With the Adventurer stories pool on, a small guild from abroad can ask to camp at the edge of the map, more than 60 tiles from your castle, and go after one explored chest or hostile lair that isn't a mission goal and has no bounty of yours. You have 30 seconds to answer. Three level-one heroes come, a warrior, a ranger and a mage, on a 600-gold budget that already pays for them; they never recruit more, and they stay 240 seconds. Allow independent entry is free, and they keep what they take. Cooperate costs 150 gold, paid to their guild and never refunded: that target's loot is then split by work, a point per HP taken off it or its guards and per coin taken, and your heroes' part goes to your treasury. Decline keeps them out; silence lets them in independently. When their time is up, their camp falls or they turn hostile, they walk back to the border. Its card under Kingdom events shows the shares.

### An Old Friend

With the Adventurer stories pool on, one of your heroes can ask to bring in an old friend of the same class to take on an explored hostile lair that isn't a mission goal and has no bounty on it. You have 30 seconds to answer. Sponsor holds 200 gold for the job. The friend comes in at the border and walks to where your hero stood; once they meet, a 200-gold kill flag only those two can take goes up on the lair. They have 180 seconds from your payment and choose for themselves whether to go. When the lair falls, each is paid from the 200 for wall and guard damage and for healing that really helped the other; if both earned a share, your treasury gets 100. Then, for 30 seconds, you can invite the friend to join if a guild of their class has room; otherwise they walk home. Unpaid money returns when they leave or join. Declining costs nothing. The card is under Kingdom events.

### Apprentice Visit

With the Adventurer stories pool on, a hero of level 4 or higher can be asked to take on two apprentices, if two beds are free at the castle or an inn and two explored chests lie within 24 tiles of the mentor. You have 30 seconds to answer. Pay 100 gold for lodging, never refunded, and two level-one trainees of the mentor's class come in from the border. During the 180-second trial they pick their own work: each of those chests gives whoever opens it 15 XP and its contents. Standing beside the mentor teaches nothing, and the mentor goes on as usual. When the trial ends, you get 30 seconds to Admit eligible trainees: those who opened a chest, still want to stay and find room in a guild of their class. Everyone else walks home, early if the mentor dies or the lodging is lost. Declining or ignoring costs nothing. The card under Kingdom events shows each trainee's jobs and XP.

### Home Visit

With the Adventurer stories pool on, a hero with a home in your kingdom can ask to visit family, as long as at least four heroes have homes and no more than a quarter are away at once. You have 30 seconds to answer. Allow visit gives 20 seconds' notice, then up to 180 seconds to walk to the border; fights, flags and healing come first, and they won't set off below 80% health. If they don't make it out, the visit is called off for free. They're away 120 seconds, keeping gear and gold but earning nothing and gaining no levels, and return through the same crossing or another safe one. Offer 150 gold to stay can be made once; the gold goes into their purse only if they agree, and if they refuse nothing is charged and you can still allow or decline. Declining, or not answering, keeps them home for free. The card under Kingdom events follows them while they're away.

### Adventurer Tournament

With the Adventurer stories pool on, two to four of your heroes (free, at 75% health or more, and keen on the prize) can offer to hold a tournament on an explored clearing beside a village house. You have 30 seconds to answer. Sponsor costs 300 gold: 100 for the venue, kept, and 200 held for prizes. In the 30 seconds after you pay, they sign up in pairs, at most two matches, and walk over; the whole tournament has 120 seconds. Each match lasts 30 seconds. Its blows can't take anyone below 1 HP and give no combat XP: knocking your opponent to 1 HP wins, otherwise more health left wins, and a tie is a draw. Each winner gets 100 gold in their own purse at the close, and prize money nobody won comes back to you. A real attack from outside ends it at once. Declining costs nothing. The card under Kingdom events lists the matches and the money.

### Bard’s Commission

With the Adventurer stories pool on, a bard can offer to make a song of a deed by up to three heroes named on the card: destroying a hostile structure you've explored, which one of them must damage; a caravan on a working trade route setting out after you accept and fully unloading; or a rescue flag where one of them does new escort work and is there when it pays. You have 30 seconds to answer. Fund commission costs 150 gold, spent at once and never refunded, and opens a 180-second window. Nobody gets orders: heroes choose their own work, and a siege bounty costs extra. If the deed is done and every named hero is alive, your renown rises by 10, once, and the song goes into your chronicle with their names. If one dies, the target is lost or time runs out, there's no renown. Withdraw commission ends it early, still without refund. Declining costs nothing. The card is under Kingdom events.

## Border Affairs Pool

### Monster Migration

With the Border affairs pool on, a herd of eight dire wolves can cut across a corner of your map, in on one edge and out by the next, well away from your castle, towns and buildings. It's a natural change: nothing to accept or decline. You hear about it 30 seconds ahead; then the herd has 180 seconds to cross. The wolves aren't hostile: they leave your castle alone, your towers don't shoot them and your heroes let them pass. To hunt them, put a Kill bounty on a visible wolf. Only the heroes who take it may strike first, and each wolf drops at most 20 gold. A wolf that's hit calls in its herd within 12 tiles. If something blocks the way, the herd waits 20 seconds and looks for another route, twice at most. When time's up, they walk back the way they came. Unpaid bounties are refunded once they're gone. Its card under Kingdom events shows the route and the wolves you can see.

### Lair Dispute

With the Border affairs pool on, two rival lairs of different kinds can fight over ground between them, outside the 60 tiles around your castle. It's a natural change: nothing to accept. You hear about it 30 seconds ahead; then each lair sends six of its monsters to a marked spot. They aren't extra monsters: each lair's six come out of its next raid, and nobody replaces the fallen. The fight lasts up to 180 seconds. It stops sooner if one side runs out of fighters, a lair falls or the way is blocked. Then the survivors take up to 120 seconds to walk home and go back to guarding. Monsters killing each other earns you nothing, and waiting gets you no reward. You can still post ordinary bounties to attack a lair or guard your roads. Its card under Kingdom events counts the fighters you can see on each side, and its buttons show both lairs, the contest spot and the fighters once you've seen them.

### Escaped Captives

With the Border affairs pool on, two escaped captives can reach the edge of your map and ask for asylum, with four pursuers behind them. You have 30 seconds to answer. Taking them in costs 200 gold: two 100-gold rescue flags, one on each captive. Heroes take the flags on their own and escort the captives to your inn or castle, which needs two free beds, within 150 seconds. Each captive who arrives safely gets a bed, and like any flag it's worth 5 renown if the escort had real work to do. A captive who runs from danger without an escort doesn't count. When the escort time ends, rescued captives who are willing can take a free place in your guilds: you have 30 seconds to invite them or let them leave. Everyone else walks back out to the border. Unused flag money comes back, less the usual cancellation fee. Declining or waiting costs nothing and sends no pursuers. Its card under Kingdom events tracks each captive.

### Enemy Deserter

With the Border affairs pool on, a raider from a rival guild that's hostile to you can ask for asylum. You have 30 seconds to answer. Granting it holds 100 gold, spent only if the deserter reaches a free bed at your inn or castle while up to two old guild-mates chase it. Protection lasts 120 seconds. Saying yes also gets you one report on where its guild's camp stands. It goes stale after 120 seconds or once the camp is gone, and doesn't lift the fog. When the protection ends, a deserter who's content and fits a free place in one of your guilds can be asked to join, keeping its gear. You have 30 seconds to invite it or let it go. Otherwise it walks off to its exit, and any unspent gold comes back. Declining costs nothing and brings no revenge. Its card under Kingdom events shows the gold held and spent, and the report.

### Beasts Nesting

With the Border affairs pool on, a wolf pack can try to settle on open wild ground just past the 60 tiles around your castle. It's a natural change: nothing to accept. You hear about it 30 seconds ahead; then two wolves arrive. At least 30 seconds later, if one is still at the site, three more come and start digging a den. Digging takes 40 seconds of work from a wolf standing quietly nearby, so fighting holds it up. Kill the pack and it's over: never more than five wolves and one den, and the dead aren't replaced. Each wolf drops at most 20 gold and a finished den holds 20, 120 gold in all. Left alone, the den gets finished but never sends out more wolves; you can attack it like any lair. Everything ends 280 seconds after the warning, and a half-dug den disappears. If the site gets taken, the pack moves, twice at most. Its card under Kingdom events shows the stage, digging and time left.

### Duel Envoy

With the Border affairs pool on, a healthy hero from a rival guild that's hostile to you can come under truce to challenge one of yours, at a spot beside one of your village houses. You have 30 seconds to answer. Sponsoring costs 100 gold, held as the prize. Then one of your free heroes may sign up within 30 seconds. You don't pick: each hero weighs prize and glory against the envoy's level and gear. There's one bout of up to 30 seconds and nobody dies. Damage stops at 1 HP, and whoever brings the other down to it wins. Otherwise the healthier fighter wins when time runs out. The winner takes the 100 gold, whichever side it's on. If nobody signs up, the bout is a draw or an outside attack breaks it up, the gold comes back. It gives no combat experience. Then the envoy walks home. Declining costs nothing and starts no war. Its card under Kingdom events shows the challenger, the bout and the money.

## Exploration and Environment Pool

### River Flood

With the Exploration and environment pool on, a river can rise over a stretch of its bank. It's a natural change: you get 30 seconds' warning, and the bank (up to 12 tiles) is hatched in amber on the map. The water never lands on anyone. Whoever stands there, hero or monster, walks off first, and the water waits until the bank is empty. It stays until 120 seconds after the warning, then goes down by itself; if the bank never empties, the river doesn't rise. Nobody can walk on flooded tiles, but floods only come where there's a way around, away from your castle and buildings. Before the warning ends, you can pay 150 gold once to keep 4 of those tiles dry (roads first, then the ones nearest the castle), with no refund even if the water never rises. Ignore it and the water just comes and goes. Its card under Kingdom events shows the countdown and steps through the bank and protected tiles you've seen.

### Herb Bloom

With the Exploration and environment pool on, wild herbs can bloom near your village houses. It's a natural change: you hear about it 20 seconds ahead, and the bloom lasts 120 seconds. It needs a free villager and a hero with room for herbs. Up to 12 plants come up, 8 to 16 tiles from a village house and away from the castle, each a bundle of 2 herbs (24 at most). Heroes can't pick them in the field. Idle villagers go out on their own, gather for 5 seconds and carry the bundle home, where passing heroes take the herbs. If a monster comes near, a villager drops the bundle where they stand, and it stays there. There's nothing to pay or choose: keep monsters off their paths with your usual defences. When time runs out, unpicked plants wither, but gathered herbs stay. Its card under Kingdom events lists the plots you've seen and how much has come in, and Show steps through them.

### Healing Spring

With the Exploration and environment pool on, a healing spring can come up in the wild while one of your heroes is hurt. It's a natural change: you're warned 20 seconds ahead, then it flows for 150 seconds and holds 6 uses. It turns up 16 to 24 tiles from a wounded hero, and you aren't told where until a hero comes within 8 tiles of it; then you hear it, and the card shows the spot. You don't send anyone: hurt heroes walk over on their own, one at a time. Each rests there for 5 seconds and gets up to 60 HP back, for free. A hero who gets hit, fights or has a monster close leaves early without using a turn; heroes at full health don't go. Ignoring it costs nothing. It dries up when the time or the uses run out. Its card under Kingdom events counts down, names who's resting there, and Show takes you to the spring once found.

### Knocks Underground

With the Exploration and environment pool on, your people can hear knocking under explored open ground 16 to 24 tiles from one of your heroes. You have 30 seconds; declining or letting it pass is free. Investigate for 100 gold and an explore flag goes up there: the hero who takes it works 5 seconds there with no monster within 6 tiles, and is paid the 100. If nobody finishes within 120 seconds, the 100 comes back. Then the card says what's below, and you choose before those 120 seconds end. A trapped survivor: fund a 100-gold rescue flag, and heroes have 120 seconds to walk them to the castle, for 5 renown. An old passage: explore for free; after 5 seconds of a hero's work, three tiles become road. A guarded chamber: pay 200 gold, beat its four skeletons (no loot), work there 5 seconds, and the treasury gets 300. Or seal it for free. Withdraw returns gold still held. Its card under Kingdom events tracks each step.

### Drifting Letter

With the Exploration and environment pool on, a letter can wash up on an explored riverbank near your castle, asking for help. You have 30 seconds to reply, and everything must be over within 180 seconds of its arrival; accepting late adds no time. Declining or ignoring it is free. Accepting costs 150 gold: 50 for the search, 100 held for two 50-gold rescue flags. Then a hero has to get within 3 tiles of the bank, usually through an explore flag you post there (that costs extra). Two survivors turn up, with two dire wolves 6 tiles off, and each gets a rescue flag. Heroes who walk a survivor to the castle are paid, and each safe return earns 5 renown. Sometimes they're hurt and need a herb each first, which an escort gives or fetches nearby. If no hero reaches the bank in time, the 100 comes back; Withdraw also returns what isn't spent. Its card under Kingdom events shows the clue, the time left and who's safe.

## Guild Stories Pool

### A Veteran’s Last Expedition

With the Guild stories pool on, a hero of level 6 or higher who has already helped bring down a dangerous foe or lair while the pool was on can ask for one last expedition against a lair they can reach. You have 30 seconds to decide. Sponsoring costs 250 gold and puts a flag on that lair; other heroes may join and wait for the veteran before setting out. They have 180 seconds. If the lair falls in time and the veteran survives and struck it, the surviving members share the 250 gold by how much of the lair each knocked down, and the rest comes back. Whatever happens, a veteran who accepts retires once safely back at their guild; withdraw before they set out and you get your money back, but they still retire. A veteran who wins and retires gives their guild's next recruit one 20-second lesson worth 30 XP. One who dies is remembered, with no lesson. Declining, deferring or ignoring costs nothing and the hero stays. Its card under Kingdom events tracks every step.

### Lost Family Crest

With the Guild stories pool on, a hero can ask you to find their lost family crest at a spot in the wild they can reach. You have 30 seconds to fund an investigation for 100 gold: a flag goes up there, and the hero who works the spot for 5 seconds is paid that 100. Before the 120-second clock runs out, you can fund the retrieval for 150 gold. Four skeleton guards appear and 50 goes on supplies at once; once the guards are dead, 5 more seconds of work turns up the crest and pays the worker 100. Then, within 120 seconds, a free hero carries it to the castle, where its owner has to meet them. The owner gets a deed for their story, and for 120 seconds their grievances fade a little faster. If the carrier dies, the crest drops where they fell. If the owner dies, you can go on as a memorial, with no reward, or withdraw. Withdrawing or running out of time returns unspent money; declining or deferring is free. Its card under Kingdom events shows each step.

### Guild Ideals in Dispute

With the Guild stories pool on, a guild can split over what to do: up to three cautious heroes want to defend, up to three bolder ones want to strike a lair. You have 30 seconds to back one side for 150 gold. Backing the defense puts a defend flag at the guild (or at the castle) for the cautious team. Backing the expedition puts an attack flag on the lair for the bold team. Only that team can take the flag, and it pays no gold. Instead, the money buys potions: up to six, at 25 gold each, collected at the guild by team members who are running low. The team has 120 seconds, and an expedition ends early when the lair falls. Real fighting or healing earns 2 renown for each hero and foe, up to 10 renown in all. Just standing guard earns nothing. Unused money comes back. Staying neutral, declining or ignoring costs nothing, and the other side stays loyal. Its card under Kingdom events names both teams and the target.

### Visiting Teacher

With the Guild stories pool on, a retired master can offer to visit when one of your heroes still has a class skill to learn. The teacher sets up by a village house or just outside the castle. You have 30 seconds to choose: fund three lessons for 150 gold, or let heroes pay their own way, which costs you nothing. The teacher walks in from the border, and lessons run until 180 seconds after your choice. Heroes of the teacher's class and below the teacher's level come over by choice, two at a time, one lesson each per visit. A lesson takes 20 seconds and gives a fixed 25 XP that XP bonuses don't raise. It costs 50 gold from the hero's purse unless your funding covers it. A hero hurt mid-lesson gets back the unused part of the fee and can come back to finish. No skills are taught: those still come free at their usual level. Then lessons under way get 20 more seconds, the teacher leaves and unused funding comes back. Declining is free.

---

## Day, Night and Weather

A free game may be started with a turning day, with weather, or with both; each is ticked by itself, and neither is an event: nothing has to be answered.

- **A day** lasts 8, 12 or 16 minutes of game time, as chosen: dawn, day, dusk and night. The top bar names the day, its part and the weather, and its tooltip says what comes next and when. The forecast is always what comes.
- **Rain and thunderstorms** hold anyone walking off the roads, hero or monster, one turn in ten at the most. Roads are dry going.
- **Mist and night** shorten what heroes and buildings see by a quarter at the most. Near the castle and the kingdom's buildings the windows are lit and the night takes nothing; an archer never sees less than it can shoot.
- **Wind** takes a tenth of the damage of arrows, bolts and javelins. Spells are not blown about.
- **A sandstorm or a dense fog** takes the weather's place where it rules the same thing: the two are never added together.
- **Monsters keep hours.** Skeletons, zombies, wraiths, cultists, spiders and rats are sluggish by day; goblins, orcs, bandits, harpies and the legion's foot by night. Trolls, wolves and the dragon keep none.
- **Last seen.** A monster that walks out of your kingdom's sight leaves a fading question mark where it was last seen. It is a mark, not the monster: it goes when the monster is seen again or the place is looked at.

## Coping Strategies

:::tip[Threat Events]
- Keep a standing defense of Guards and Arrow Towers at all times
- During invasion events, make sure there is enough fighting power around the Castle
- Send bounty expeditions to destroy Dragon Nests and Rebel Guilds as soon as possible
- Both are marked on the map the moment they appear: click one to see its health, and put a Kill bounty on it to send heroes to raze it
:::

:::tip[Making Use of Buffs]
- During Double EXP, have your adventurers fight as much as possible to level up
- During Building Frenzy, take the opportunity to expand
- During Recruitment Wave, make sure you have enough recruitment buildings in place
:::