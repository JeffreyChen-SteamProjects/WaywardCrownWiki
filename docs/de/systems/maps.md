---
title: "Karten und Gelände"
---

Die Spielkarte wird mit einer isometrischen 2:1-Projektion gerendert und unterstützt mehrere Geländetypen.

---

## Kartenspezifikationen

| Eigenschaft | Wert |
|-------------|------|
| Standardgröße | 1000 × 1000 Felder |
| Einstellbarer Bereich | 250 ~ 1000 Felder |
| Feldgröße | 256 Pixel |
| Projektion | Isometrisch 2:1 (Raute) |

---

## Geländetypen

| Gelände | Begehbar | Bewegungskosten | Basishöhe | Feind-Spawns |
|---------|----------|-----------------|-----------|--------------|
| **Grasland** | Ja | 1 | 0 | Riesenratte, Bandit, Harpyie |
| **Wald** | Ja | 2 | 0,5 | Schleim, Zombie, Schattenwolf, Riesenspinne, Dunkler Kultist |
| **Gebirge** | Ja | 3 | 5,0 | Goblin, Skelett, Drache, Ork-Schläger, Goblin-Bogenschütze, Troll |
| **Wasser** | Nein | — | -1,0 | — |
| **Stadt** | Ja | 1 | 0 | — |
| **Straße** | Ja | 1 | 0 | — |
| **Sumpf** | Ja | 3 | -0,3 | — |
| **Wüste** | Ja | 2 | 0,2 | Sandgeist |
| **Schlamm** | Ja | 2 | -0,1 | — |
| **Schnee** | Ja | 1 | 0,2 | Riesenratte, Bandit, Harpyie |
| **Hügel** | Ja | 1 | 1,6 | Riesenratte, Bandit, Harpyie |
| **Ödland** | Ja | 2 | 0,3 | Sandgeist |
| **Blumenwiese** | Ja | 1 | 0 | Riesenratte, Bandit, Harpyie |

:::tip[Bewegungskosten]
Niedrigere Werte bedeuten schnellere Bewegung. Straße und Stadt haben die niedrigsten Bewegungskosten (1), während Gebirge und Sumpf die höchsten haben (3). Guter Einsatz von Straßen kann die Reiseeffizienz der Abenteurer erheblich verbessern.
:::

---

## Kriegsnebel

Die Karte hat drei Sichtbarkeitsstufen:

| Zustand | Helligkeit | Beschreibung |
|---------|------------|-------------|
| **Unerforscht** | 0 (vollständig dunkel) | Wurde noch nie von einem Abenteurer oder Gebäude gesehen |
| **Erforscht** | 115 (dunkelgrau) | Wurde zuvor gesehen, aber befindet sich nicht in aktueller Sichtlinie |
| **Sichtbar** | 255 (vollständig beleuchtet) | Befindet sich aktuell in der Sichtlinie eines Abenteurers oder Gebäudes |

**Was wo gezeichnet wird.** Das Eigene wird immer gezeichnet: Gebäude, Helden, Dorfbewohner, Steuereintreiber, Karawanen und Kopfgeldflaggen, auch auf Boden, den niemand sieht. Ein Unterschlupf oder eine alte Ruine wird gezeichnet, sobald ein Teil davon gesehen wurde, und bleibt es. Von da an kennen auch die Helden den Unterschlupf und können ihn von sich aus angreifen. Monster werden nur gezeichnet, solange ein Held sie sieht. Die Portale eines Dimensionsrisses werden als Ringe aus violettem Licht gezeichnet, sobald ihr Boden gesehen wurde.

### Sichtquellen

| Quelle | Sichtweite |
|--------|------------|
| Burg | 30 Felder |
| Abenteurer (Basis) | 8 Felder |
| Magier (Fernkampf) | 12 Felder |
| Waldläufer (Fernkampf) | 11 Felder |
| Verteidigungsgebäude (Pfeilturm) | 16 Felder |
| Reguläres Gebäude | 7 Felder |
| Feindliche Festungsstruktur | 10 Felder |

:::note[Sichtweite von Fernkämpfern]
Magier und Waldläufer sehen genau so weit, wie sie angreifen können (12 und 11 Felder), damit Spieler die Ziele sehen, die sie angreifen.
:::

---

## Kartengenerierung

Karten im Sandkasten-Modus werden zufällig mit dem **Value-Noise**-Algorithmus generiert:

1. Gelände-Rauschen erzeugen → Geländetypen bestimmen
2. Höhen-Rauschen erzeugen → Höhenunterschiede bestimmen
3. Burg platzieren → Stadtgebiet an einer zufälligen Stelle in der mittleren Hälfte der Karte anlegen
4. Schatztruhen verteilen → max(10, 250 × W × H ÷ 1000²) Truhen über die Wildnis verstreuen
5. Feindliche Festungen generieren → weit von der Burg entfernt platzieren

---

## Schatztruhen

| Eigenschaft | Wert |
|-------------|------|
| Anfangsanzahl | max(10, 250 × W × H ÷ 1000²) |
| Goldbereich | 20 ~ 55g |
| Standort | Begehbare Bereiche außerhalb von Städten |

Abenteurer sammeln Schatztruhen automatisch ein, wenn sie darüber laufen. Mit der Forschungsfähigkeit „Schatzgespür" wird das Gold um +50% erhöht. Eine geöffnete Truhe bleibt mit zurückgeklapptem Deckel zwei Minuten Spielzeit stehen und verschwindet dann. Sie blockiert keinen Bauplatz, und ein Gebäude, das über ihr errichtet wird, räumt sie weg.
