---
title: "Bounty System"
---

Bounties are your primary means of directing adventurer actions. Place bounty flags on the map and set a reward to attract adventurers to a specific location.

---

## Bounty Types

| Type | Default Reward | Danger | Fame | Effect |
|------|---------------|--------|------|--------|
| **Explore** | 200g | 0.2 | 0.3 | Adventurers travel to the target location, revealing fog of war along the way; the flag must be on ground they can walk to |
| **Kill** | 200g | 0.8 | 0.9 | Eliminate a designated target (enemy or Enemy Stronghold) |
| **Defend** | 200g | 0.5 | 0.6 | Patrol around the target building until the timer expires |
| **Warn** | 50g fee | — | — | Marks a spot as off-limits: never taken or paid out; heroes below level 8 keep clear of everything within 25 tiles of it |

### Placing, raising and cancelling

- A Kill bounty must be placed on an enemy or an Enemy Stronghold, and a Defend bounty on one of your buildings or the Castle
- A posted bounty's reward can be raised by +100g or +500g
- Cancelling refunds the reward, except for a Defend bounty whose watch has begun

---

## How Adventurers Choose Bounties

Adventurers calculate attractiveness based on their **personality** and the **bounty's attributes**:

```
Attractiveness = Reward × Greed
               + Fame × Glory
               - Danger × Safety
               + Exploration Bonus × Curiosity
               - Distance Penalty
               - Low HP Penalty
```

Rewards and distance are scaled by the adventurer's level, and some bounties are refused outright (a reward below level × 20 gold, a Warn marker, or a bounty inside a warning zone for heroes below level 8). The full formula is on the [Adventurers](adventurers.md) page.

:::tip[Practical Tips]
- **Rangers** have high curiosity and are best suited for Explore Bounties
- **Warriors** have high glory and are best suited for Kill Bounties
- **Guards** never take bounties: they patrol your buildings and rush to any that comes under attack
- Increasing the reward can persuade reluctant adventurers to accept a bounty
:::

---

## Defend Bounty Mechanics

Defend Bounties require adventurers to **continuously patrol** near the target:

| Setting | Value |
|---------|-------|
| Required patrol time | 60 ticks |
| Path recalculation interval | Every 12 ticks |

After accepting a Defend Bounty, the adventurer patrols back and forth near the target. Once enough patrol time has been accumulated, the bounty is completed: the heroes on station split the reward, and each gains 25 XP if an enemy came within sight during the watch.

---

## Kill Bounty Mechanics

Kill Bounties designate a **specific target**:

- Can be a particular enemy
- Can be an Enemy Stronghold

Once the target is eliminated, the bounty is automatically completed. Adventurers who accepted the bounty will prioritize traveling to the target's location.

- The reward is split evenly among the heroes holding the bounty within 20 tiles of the target, and each of them gains 30 XP; no trait raises it
- Against an Enemy Stronghold, adventurers first gather about 22 tiles out on the Castle side and attack together once 2–5 of them (by the stronghold's size) have arrived, or 120 ticks after the first adventurer takes the bounty

---

## Strategy Tips

1. **Start with Explore Bounties early on** — you need to clear the fog of war to locate enemies and resources
2. **Place Kill Bounties near Enemy Strongholds** — guide adventurers to destroy threats
3. **Place Defend Bounties near important buildings** — other adventurers take them; Guards already patrol there without one
4. **Adjust rewards based on adventurer personality** — you don't need to overpay for every bounty

---

## Bounty Rules

The reward sits in the bounty from the moment it is posted:

- **Deadline**: a bounty can be posted with a deadline of 1, 3 or 5 minutes. When it passes, the unpaid reward returns to the treasury.
- **Refunds**: cancelling returns the reward, except for a Defend bounty whose watch has begun. A bounty whose target is gone with nobody to pay returns its reward too. A flag is removed from its right-click menu on the map, or with the button in its own panel once it is selected; both say what comes back. When heroes are already walking to a cancelled bounty, a tenth of what comes back goes to them for the walk, in equal parts.
- **Who is paid**: an Explore bounty pays the hero who reaches it; a Kill bounty is split evenly among the holders near the kill; a Defend bounty among the holders on station. A dead hero is never paid. A hero near the work that tended, shielded or stood in for another within the last 30 seconds is paid a part beside them.
- **Renown takes work**: gold is always paid, but renown and experience come only for ground that was unexplored when the bounty was posted, a kill, or a watch during which an enemy came within sight.
- **Company**: heroes leave an Explore bounty somebody already holds, count a split reward as their share, and find a stronghold less daunting once others have signed up.
- **Expeditions**: a Kill bounty on a stronghold gathers a party at a rally point on the castle side. It moves out when enough heroes have arrived or after 120 ticks; a volunteer left alone then goes on only if it dares the stronghold alone, and otherwise gives the bounty up; it takes one hero more than its muster and no others; a hero short of potions buys some first when it can; and a party that has all fallen or gone home musters again. The bounty's panel shows who has gathered, how long the rest are waited for, and the estimated odds.
- **Danger**: Kill bounties, Explore bounties beside a stronghold you have seen, and marching on a stronghold unpaid are weighed against each hero's readiness (attack, health, potions, armour, the heroes already on the bounty, and how far the work lies from an inn or the castle). Brave heroes accept worse odds than cautious ones, and no reward makes dangerous work safer. A hero that holds back says what would change its mind (potions it can buy or cannot get, an inn nearer the work, another hero on the bounty) and goes once it has it. A hero on a bounty fights whatever reaches it but heads back to the bounty before chasing anything else, and gives up dangerous work when its odds collapse.
- **Rescue**: a Rescue bounty is posted on a tax collector or a caravan and follows it. The heroes who take it walk to it and stay beside it; with an escort it stops running from monsters and goes on with its errand while they fight. Once it has been escorted on the road for 20 ticks and stands at the castle (a caravan: or at its trading post) with no monster within 8 tiles, the bounty pays the holders beside it, split evenly; waiting beside one that has not set out does not count. It earns renown and experience only if the carrier was hurt or a monster came within sight, and returns its reward if the carrier is lost. Double-clicking a tax collector or caravan posts one.
- **Posting panel**: shows what the treasury pays now and, while you point at the map, what the bounty would target. Where a click could mean several things (monsters crowded on a spot for a Kill bounty, carriers for a Rescue bounty, several hurt heroes under the pointer for a spell aimed at a hero), a list of them comes up and the bounty or the spell goes to the one chosen.
- **Granted bounties**: a map or campaign can post a bounty with the `post_bounty` trigger action; it costs the treasury nothing and returns nothing.
