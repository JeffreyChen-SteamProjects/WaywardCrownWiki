---
title: "Feinde"
---

Feinde erscheinen natürlich in Wildnisgebieten auf der gesamten Karte und bedrohen deine Abenteurer und die Burg.

---

## Feindtypen

| Feind | HP | ATK | DEF | Geschwindigkeit | XP | Gold | Angriffsreichweite | Sicht | Erscheinungsgelände | Gefahrenstufe |
|-------|-----|-----|-----|----------------|-----|------|-------------------|-------|-------------------|--------------|
| **Schleim** | 60 | 3 | 2 | 0,6 | 10 | 5 | 3 | 12 | Wald | 1 |
| **Goblin** | 110 | 6 | 4 | 1,0 | 25 | 12 | 3 | 20 | Gebirge | 2 |
| **Skelett** | 160 | 9 | 6 | 0,9 | 40 | 20 | 3 | 22 | Gebirge | 3 |
| **Zombie** | 260 | 12 | 10 | 0,6 | 60 | 30 | 3 | 16 | Wald | 4 |
| **Drache** | 550 | 20 | 18 | 1,4 | 150 | 80 | 16 | 32 | Gebirge | 5 |
| **Schattenwolf** | 90 | 8 | 3 | 1,6 | 28 | 10 | 3 | 26 | Wald | 2 |
| **Ork-Schläger** | 320 | 15 | 12 | 0,8 | 70 | 35 | 3 | 18 | Gebirge | 4 |
| **Goblin-Bogenschütze** | 85 | 9 | 3 | 1,0 | 35 | 15 | 10 | 24 | Gebirge | 3 |
| **Sandgeist** | 140 | 10 | 5 | 1,0 | 38 | 22 | 3 | 13 | Wüste | 3 |
| **Dunkler Kultist** | 80 | 14 | 2 | 0,8 | 42 | 25 | 11 | 16 | Wald | 3 |
| **Troll** | 620 | 22 | 12 | 0,7 | 160 | 90 | 3 | 12 | Gebirge | 5 |
| **Riesenspinne** | 75 | 7 | 3 | 1,3 | 24 | 9 | 3 | 11 | Wald | 2 |
| **Riesenratte** | 45 | 4 | 1 | 1,4 | 12 | 4 | 3 | 10 | Grasland | 1 |
| **Bandit** | 100 | 7 | 4 | 1,1 | 26 | 16 | 3 | 12 | Grasland | 2 |
| **Harpyie** | 95 | 11 | 3 | 1,8 | 36 | 18 | 3 | 14 | Grasland | 3 |

Drache, Goblin-Bogenschütze und Dunkler Kultist feuern Projektile (Feuerbälle, Pfeile bzw. Feuerbälle); die übrigen schlagen aus bis zu 3 Feldern Entfernung zu.

Ein Gegner macht alle 3 ÷ Geschwindigkeit Ticks einen Schritt, abgerundet (mindestens 1): jeden Tick ab Geschwindigkeit 1,6, alle 2 Ticks bei 1,1–1,4, alle 3 bei 0,8–1,0, alle 4 beim Troll und alle 5 bei 0,6.

### Ränge

Wenn deine Gilde wächst (Abenteurer plus Märkte), erscheinen manche Monster mit einem Rang, der ihre Werte und Belohnungen vervielfacht. Höchstens ein Viertel der lebenden Monster hat einen Rang, außer während eines Monsteraufstands, bei dem jedes erscheinende Monster mindestens ein Veteran ist.

| Rang | Ab einer Gildengröße von | Chance | HP | ATK | DEF | XP | Gold | Sicht |
|------|-------------------------|--------|----|-----|-----|----|------|-------|
| **Veteran** | 8 | 16% | ×1,5 | ×1,25 | ×1,2 | ×1,6 | ×1,8 | +2 |
| **Elite** | 22 | 8% | ×2,5 | ×1,6 | ×1,5 | ×2,5 | ×3 | +4 |
| **Champion** | 45 | 3% | ×4,5 | ×2,2 | ×2 | ×4 | ×6 | +6 |

---

## Feindverhalten

### Umherwandern

- Feinde wandern in der Nähe ihres Erscheinungspunkts umher
- Sie haben eine Sichtweite und verfolgen aktiv erkannte Abenteurer
- In jedem tick führt ein Viertel der Feinde (in wechselnden Gruppen) seine Wanderlogik aus, sodass jeder Feind höchstens alle 4 ticks aktualisiert wird

### Zielpriorität

Feinde greifen Ziele in folgender Reihenfolge an:

1. **Kampfbereite Abenteurer** (Nicht-Pazifisten)
2. **Baumeister** (pazifistische Abenteurer)
3. **Pfeiltürme** (bedrohliche Gebäude)
4. **Burg**
5. **Andere Gebäude**

### Invasionspfad

Wenn ein Invasionsereignis ausgelöst wird, marschieren Feinde auf dem kürzesten Weg direkt zur Burg des Spielers.

---

## Feinderscheinung

| Einstellung | Wert |
|-------------|------|
| Erscheinungsintervall | 35 Sekunden Spielzeit, 1 Sekunde weniger pro Abenteurer oder Markt, mindestens 5 Sekunden (halbiert in Verteidigungs-Kampagnenleveln) |
| Maximale Anzahl | `(adventurers + Markets) × 2` (in Schwierigkeitseinstellungen anpassbar), sinkt mit jeder zerstörten feindlichen Festung auf bis zu 25% |
| Basisminimum | Mindestens 6 Feinde |

Feinde erscheinen basierend auf dem **Geländetyp**:

- **Wald** — Schleime, Zombies, Schattenwölfe, Dunkle Kultisten, Riesenspinnen
- **Gebirge** — Goblins, Skelette, Drachen, Ork-Schläger, Goblin-Bogenschützen, Trolle
- **Grasland** — Riesenratten, Banditen, Harpyien
- **Wüste** — Sandgeister

:::note[Drachen]
Drachen und Trolle sind die gefährlichsten Feinde (Gefahrenstufe 5). Mit einer Angriffsreichweite von 16, 550 HP und Feuerball-Projektilen werden Drachen am besten mit Fernkampf-Abenteurern und Pfeiltürmen bekämpft; der Troll hat mehr HP und Angriff, muss aber nahe herankommen.
:::

---

## Spezielle Drachenmechaniken

- **Fernkampfangriff**: Angriffsreichweite von 16, feuert Feuerball-Projektile
- **Hohe Mobilität**: Geschwindigkeit von 1,4, ein Schritt alle 2 Ticks: so schnell wie Riesenratten, Riesenspinnen und Banditen; nur Harpyien und Schattenwölfe (ein Schritt pro Tick) sind schneller
- **Weite Sicht**: 32 Felder Sichtweite, kann Abenteurer aus großer Entfernung entdecken
- **Ausweichen**: Alle Feinde haben eine Basis-Ausweichrate von 5%

**Belastungen**: Drei Bedrohungen entstehen daraus, wie das Königreich geführt wird, nicht aus einem Lager. Jede wird eine Minute vorher in Chronik und Übersicht angekündigt, schickt ein Rudel von 3 (nie mehr als 6 ihrer Monster zugleich, gleich wie stark ihr seid) und wird abgesagt, sobald ihre Ursache behoben ist. *Verwahrlosung*: Eine Stadt mit 16 Gebäuden ohne Brunnen oder Garten lockt Riesenratten an; jeder Brunnen oder Garten sorgt für 6 Gebäude. *Die ruhelosen Toten*: 3 tot liegende Helden ohne Tempel erheben sich als Skelette, wo der letzte fiel; ein Tempel oder ihre Wiederbelebung hält sie unten, und ein Königreich auf dem Weg der Untoten mit einem Beinhaus nimmt sie stattdessen als Wachen. *Die Wildnis*: Ein Gebäude mehr als 60 Felder von der Burg ohne Pfeilturm oder Wachposten im Umkreis von 12 lockt Schreckenswölfe an; Handelsposten zählen nicht, ebenso wenig die Lager eines Wildnis-Königreichs. In den ersten 5 Minuten und in einem Level, das das abhelfende Gebäude nicht erlaubt, belastet nichts das Königreich. Ork-Kriegslager überfallen, was gebaut wird: die nächste Baustelle oder den nächsten laufenden Ausbau.
