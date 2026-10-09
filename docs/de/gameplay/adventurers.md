---
title: "Abenteurer"
---

Abenteurer sind das Herzstück des Spiels. Sie haben einen freien Willen und treffen Entscheidungen basierend auf ihrer Persönlichkeit, ihren Bedürfnissen und ihrem aktuellen Zustand.

---

## Klassenübersicht

| Klasse | Primärwert | Angriff skaliert mit | Angriffsreichweite | Rekrutierungsgebäude | Eigenschaften |
|--------|-----------|---------------------|-------------------|---------------------|--------------|
| **Krieger** | STR | Stärke | 3 | Kaserne | Hohe HP, hoher Angriff, kämpft aus nächster Nähe |
| **Magier** | INT | Intelligenz | 12 | Magierturm | Magische Fernkampfangriffe, niedrige HP |
| **Waldläufer** | AGI | Geschicklichkeit | 11 | Waldläuferhütte | Bogen-Fernkampfangriffe, hohe Neugier |
| **Wache** | STR | Stärke | 3 | Wachposten | Patrouilliert Gebäude, verlässt niemals den Posten |
| **Baumeister** | AGI | — | 3 | Baumeistergilde | Repariert Gebäude, Pazifist (kämpft nicht) |
| **Dieb** | AGI | Geschicklichkeit | 3 | Diebesgilde | Gierig und ausweichend, niedrige HP |

:::note[Angriffsreichweite]
Der Waldläufer (Pfeile), der Magier (Feuerbälle), der Pfadfinder (Wurfspeere), der Straßenwächter (Armbrustbolzen) und der Adept (Lichtsplitter) greifen mit Projektilen an, jeder mit seiner eigenen Art. Die übrigen kämpfenden Klassen kämpfen im Nahkampf: Sie schlagen aus bis zu 3 Feldern Entfernung zu und verursachen doppelten Schaden.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Jede Heldenklasse des Spiels, aus seinen Daten geschrieben: die sechs, die jedes Königreich anwirbt, und die Klassen, die die eigenen Gebäude eines Burgwegs anwerben.

| Klasse | Burgweg | Angeworben in | Lebenspunkte | Angriff | Angriffsreichweite | Fertigkeiten |
|---|---|---|---|---|---|---|
| **Krieger** | — | Kaserne | 70–150 | STR | 3 | Kraftvoller Schlag, Schildwall, Berserker, Kriegsherr, Kriegsschrei |
| **Magier** | — | Magierturm | 25–65 | INT | 12 | Feuerblitz, Mana-Schild, Kettenblitz, Erzmagier, Feuertornado |
| **Waldläufer** | — | Waldläuferhütte | 45–100 | GES | 11 | Präziser Schuss, Ausweichmanöver, Mehrfachschuss, Adlerauge, Windbruch |
| **Wache** | — | Wachposten | 50–120 | STR | 3 | Wachsamkeit, Befestigen, Provozieren, Bastion |
| **Baumeister** | — | Baumeistergilde | 30–70 | — | 3 | Schnellreparatur, Verstärken, Meisterhandwerk, Architekt |
| **Dieb** | — | Diebesgilde | 35–80 | GES | 3 | Meucheln, Ausweichmanöver, Taschendieb, Schattentanz |
| **Schildritter** | Wächter | Bastion | 90–170 | STR | 3 | Wachsamkeit, Schildwall, Provozieren, Bastion, Eidschild, Eid des Stellvertreters, Zur Rettung |
| **Hospitaliter** | Wächter | Heiligtum | 50–100 | INT | 3 | Wachsamkeit, Mana-Schild, Befestigen, Bastion, Heilgebet |
| **Pfadfinder** | Wildnis | Wildlager | 50–105 | GES | 11 | Präziser Schuss, Ausweichmanöver, Mehrfachschuss, Adlerauge, Jägermal |
| **Tierhüter** | Wildnis | Bestienhütte | 65–135 | STR | 3 | Kraftvoller Schlag, Ausweichmanöver, Berserker, Adlerauge, Falkenstoß, Fährtenlesen, Tiergefährte, Deckung des Gefährten, Kräuterhilfe |
| **Grabritter** | Untot | Beinhaus | 95–175 | STR | 3 | Kraftvoller Schlag, Schildwall, Berserker, Kriegsherr, Knochenrüstung |
| **Nekromant** | Untot | Gruft | 40–90 | INT | 3 | Feuerblitz, Mana-Schild, Kettenblitz, Erzmagier, Siegel des Welkens, Knochenwache, Seelenschuld |
| **Marschall** | Ordnung | Wachthaus | 80–155 | STR | 3 | Wachsamkeit, Schildwall, Provozieren, Kriegsherr, Abriegelung, Sammelbefehl, Alarmrunde |
| **Straßenwächter** | Ordnung | Zollposten | 55–115 | GES | 10 | Präziser Schuss, Ausweichmanöver, Mehrfachschuss, Adlerauge, Geleitschutz |
| **Eidkrieger** | Tapferkeit | Kriegshalle | 85–165 | STR | 3 | Kraftvoller Schlag, Ausweichmanöver, Berserker, Kriegsherr, Spaltender Hieb, Sturm auf die Mauern, Blutrausch |
| **Bannerträger** | Tapferkeit | Quartiermeisterei | 70–140 | STR | 3 | Kraftvoller Schlag, Schildwall, Provozieren, Kriegsherr, Unbeugsamer Schrei |
| **Zauberklinge** | Arkanes | Akademie | 60–125 | INT | 3 | Feuerblitz, Ausweichmanöver, Kettenblitz, Erzmagier, Reißendes Licht, Phasenschritt, Runenriposte |
| **Adept** | Arkanes | Resonanzturm | 40–88 | INT | 11 | Feuerblitz, Mana-Schild, Kettenblitz, Erzmagier, Runenschutz |
| **Geleitwache** | Handel | Handelsgilde | 80–150 | STR | 3 | Wachsamkeit, Schildwall, Provozieren, Bastion, Warenschutz, Eilmarsch, Geleitdienst |
| **Karawanenführer** | Handel | Warenlager | 55–115 | GES | 3 | Präziser Schuss, Ausweichmanöver, Mehrfachschuss, Adlerauge, Wegmarke |
| **Inquisitor** | Tyrannei | Tribunal | 65–130 | INT | 3 | Feuerblitz, Mana-Schild, Provozieren, Erzmagier, Schreckensmal, Eiserner Eid |
| **Vollstrecker** | Tyrannei | Abgabenamt | 90–170 | STR | 3 | Kraftvoller Schlag, Schildwall, Berserker, Kriegsherr, Kettenurteil |
<!-- hero-classes:end -->

---

## Detaillierte Werte

### Krieger

| Wert | Bereich |
|------|---------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Persönlichkeitstendenzen**: Hoher Ruhm (0,5–1,0), moderate Gier (0,2–0,8), niedrige Neugier (0,0–0,2)

**Fähigkeitenbaum**:

| Stufe | Fähigkeit | Effekt |
|-------|-----------|--------|
| 3 | Kraftvoller Schlag | Angriff ×1,15 |
| 6 | Schildwall | Verteidigung +5 |
| 10 | Berserker | Angriff ×1,3, HP ×0,9 |
| 15 | Kriegsherr | Angriff ×1,5, Verteidigung +8 |

### Magier

| Wert | Bereich |
|------|---------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Persönlichkeitstendenzen**: Hohe Sicherheit (0,3–0,9), moderate Neugier (0,1–0,3)

**Fähigkeitenbaum**:

| Stufe | Fähigkeit | Effekt |
|-------|-----------|--------|
| 3 | Feuerblitz | Angriff +5 |
| 6 | Mana-Schild | Verteidigung +4 |
| 10 | Kettenblitz | Angriff ×1,4 |
| 15 | Erzmagier | Angriff ×1,6, Angriff +8 |

### Waldläufer

| Wert | Bereich |
|------|---------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Persönlichkeitstendenzen**: Sehr hohe Neugier (0,7–1,0), niedrige Sicherheit (0,0–0,4)

**Fähigkeitenbaum**:

| Stufe | Fähigkeit | Effekt |
|-------|-----------|--------|
| 3 | Präziser Schuss | Angriff +4 |
| 6 | Ausweichmanöver | Ausweichrate +15% |
| 10 | Mehrfachschuss | Angriff ×1,35 |
| 15 | Adlerauge | Angriff ×1,5, Kritische Trefferrate +20% |

### Wache

| Wert | Bereich |
|------|---------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Persönlichkeitstendenzen**: Sehr hohe Sicherheit (0,5–1,0), keine Neugier

**Besonderes Verhalten**: Automatisch zum Patrouillieren von Gebäuden eingeteilt; verlässt den Posten nicht, um entfernte Feinde zu verfolgen.

**Fähigkeitenbaum**:

| Stufe | Fähigkeit | Effekt |
|-------|-----------|--------|
| 3 | Wachsamkeit | Verteidigung +3 |
| 6 | Befestigen | HP ×1,2 |
| 10 | Provozieren | Verteidigung +6, Angriff +3 |
| 15 | Bastion | HP ×1,4, Verteidigung +10 |

### Baumeister

| Wert | Bereich |
|------|---------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Persönlichkeitstendenzen**: Sehr hohe Sicherheit (0,8–1,0), keine Neugier, kein Ruhm

**Besonderes Verhalten**: Pazifist — wird niemals kämpfen. Reist automatisch zu beschädigten Gebäuden, um sie zu reparieren.

**Fähigkeitenbaum**:

| Stufe | Fähigkeit | Effekt |
|-------|-----------|--------|
| 3 | Schnellreparatur | Reparaturgeschwindigkeit ×1,3 |
| 6 | Verstärken | Reparaturgeschwindigkeit ×1,5 |
| 10 | Meisterhandwerk | Reparaturgeschwindigkeit ×2,0 |
| 15 | Architekt | Reparaturgeschwindigkeit ×2,5, HP ×1,3 |

### Dieb

| Wert | Bereich |
|------|---------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Persönlichkeitstendenzen**: Sehr hohe Gier (0,75–1,0), hohe Sicherheit (0,5–1,0), moderate Neugier (0,3–0,7), niedriger Ruhm (0,0–0,3)

**Besonderes Verhalten**: Seine Verteidigung ist das Ausweichen (10% + 1% pro AGI) statt der HP, und seine Gier zieht ihn zu den am besten bezahlten Aufträgen.

**Fähigkeitenbaum**:

| Stufe | Fähigkeit | Effekt |
|-------|-----------|--------|
| 3 | Meucheln | Kritische Trefferrate +12% |
| 6 | Ausweichmanöver | Ausweichrate +10% |
| 10 | Taschendieb | Kritische Trefferrate +20%, Angriff ×1,15 |
| 15 | Schattentanz | Ausweichrate +18%, Angriff ×1,35 |

---

## Zustandssystem

Abenteurer wechseln zwischen folgenden Zuständen:

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

## Unterkunftssystem

- Abenteurer gehen bei niedrigen HP rasten und heilen, am nächsten Ort mit Platz: die eigene Gilde, ein Gasthaus, ein Wildlager oder die Burg. Von etwa gleich nahen Orten kommt die eigene Gilde zuerst (sie zählt 8 Felder näher) und die Burg zuletzt (8 Felder weiter); wer um sein Leben rennt, nimmt, was am nächsten liegt
- Untergebrachte Abenteurer wechseln in den **LODGING**-Zustand: Sie verschwinden von der Karte und werden unverwundbar
- Jedes Gebäude kann bis zu **3** Gäste beherbergen
- Wenn ein Gebäude zerstört wird, werden alle Gäste darin sofort freigelassen
- Abenteurer verlassen die Unterkunft automatisch, sobald ihre HP vollständig wiederhergestellt sind

---

## Stufensystem

| Element | Beschreibung |
|---------|-------------|
| Maximale Stufe | 20 |
| Basis-XP | 40 XP (um Stufe 2 zu erreichen) |
| XP-Formel | `40 × 1.6^(level-1)` |
| Tötungs-XP | Variiert je nach Feindtyp (10 – 160 XP) |
| Kampf-XP | Jeder Treffer gewährt 1/5 der Tötungs-XP |
| Geteilter Sieg | Gold und EP eines Siegs werden geteilt, ohne dass etwas hinzukommt: Der Held mit dem letzten Schlag behält 60 %, wenn andere teilhaben, und der Rest geht zu gleichen Teilen an bis zu 3 Helden, die im Umkreis von 6 Feldern kämpfen oder im Umkreis von 10 Feldern in den letzten 30 Sekunden einen anderen versorgt haben |
| Auftrags-XP | Erkunden 15 XP, Verteidigen 25 XP, Töten 30 XP |

Beim Stufenaufstieg steigen primäre und sekundäre Werte zusammen mit HP.

**Fähigkeitenbaum**: Die Fähigkeiten einer Klasse sind ein Baum, keine feste Zahl von Plätzen: Jede Fähigkeit hat die Stufe, auf der sie erlernt wird, und kann andere Fähigkeiten voraussetzen, und ein Baum ist so groß, wie seine Klasse Fähigkeiten hat. Ein Held erlernt jede Fähigkeit, die seine Stufe und das bereits Erlernte erlauben. Sein Panel zeigt den Baum: Erlerntes fett, Kommendes grau mit der Stufe, auf der es kommt, jeweils unter der Fähigkeit, die es voraussetzt. Eine mit (aktiv) markierte Fähigkeit setzt der Held selbst ein; die anderen ändern seine Werte dauerhaft.

---

## Persönlichkeitssystem

Jeder Abenteurer hat vier Persönlichkeitswerte (0,0 – 1,0), die beeinflussen, ob er Aufträge annimmt:

| Eigenschaft | Effekt |
|-------------|--------|
| **Gier (gold)** | Höhere Werte bedeuten, dass der Abenteurer mehr Wert auf die Belohnung legt |
| **Sicherheit (safety)** | Höhere Werte bedeuten, dass der Abenteurer Gefahren meidet |
| **Ruhm (glory)** | Höhere Werte bedeuten, dass der Abenteurer Kampfmissionen bevorzugt |
| **Neugier (curiosity)** | Höhere Werte bedeuten, dass der Abenteurer Erkundung bevorzugt |

**Auftragsanziehungsformel**:

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- Eine **Warnung**-Markierung wird nie angenommen
- Eine Belohnung unter **Stufe × 20** Gold wird von vornherein abgelehnt
- Wachen nehmen nie Aufträge an, sie patrouillieren stattdessen in der Stadt
- Helden unter Stufe 8 lehnen Aufträge innerhalb einer Warnzone ab
- Ein Abenteurer nimmt den Auftrag mit dem höchsten Wert an, sofern dieser über 0,1 liegt

---

## Das eigene Leben der Helden

Ein Held ohne Aufgabe wägt alles ab, was ihm offensteht, und nimmt das Beste: einen Auftrag, eine Besorgung in der Stadt oder eine Erkundung.

- **Besorgungen**: bessere Ausrüstung in der Schmiede kaufen, Tränke auf dem Markt auffüllen, in der Bibliothek lernen, einen Abend im Gasthaus verbringen (15 Gold; Brunnen und Garten sind kostenlos) oder verwundet bzw. müde heimkehren. Jede braucht das Gebäude, das Gold und einen echten Bedarf, und der Held geht dafür zu diesem Gebäude.
- **Verbindlichkeit**: Ein Held beendet den Weg, den er begonnen hat. Nur eine Erkundung wird nach 150 Ticks für etwas deutlich Besseres aufgegeben. Gefahr geht weiterhin vor: Ein schwer verletzter Held sucht den nächsten Rastplatz auf.
- **Festungen**: Ab Stufe 3 ziehen mutige Helden von sich aus gegen bekannte feindliche Festungen, wenn sie sich eine allein zutrauen; Diebe rauben sie aus.
- **Unterstützung**: Ein Held, dessen Klasse andere versorgt (heilt, beschirmt, anfeuert oder für sie einsteht) und der keine eigene Arbeit hat, geht mit einem Trupp: dem nächsten Helden im Umkreis von 30 Feldern, der zu einer Kopfgeldarbeit oder einem Marsch unterwegs ist oder kämpft und dessen Arbeit er mit diesem Trupp wagt. Er folgt dem Trupp, wenn dieser weiterzieht, und verlässt ihn, wenn der Trupp fällt, anhält oder heimgeht, wenn er selbst verwundet ist oder nach 2 Minuten.
- **Erinnerung**: Ein Held behält einige Dinge, die ihm widerfahren sind, jeweils für einige Minuten. Wessen Gilde angegriffen wurde, dem sind Verteidigungsaufträge 30 % mehr wert; wem ein anderer Held in schwerer Not half oder wer neben einem anderen für einen Auftrag bezahlt wurde, dem ist ein Auftrag mehr wert, den dieser Held hält; wer schwer verwundet heimkehrte oder einen solchen Helden fallen sah, verlangt im Umkreis von 12 Feldern um den Ort bessere Aussichten. Die Heldenansicht zeigt, woran er sich erinnert.
- **Eine verlorene Gilde**: Ein Held, dessen Gilde zerstört oder abgerissen wird, ist nicht verloren. Er zieht von selbst in das nächste Gebäude, das seine Klasse rekrutiert und Platz hat, auch in eine wiederaufgebaute Gilde. Bis dahin gewährt ihm die Burg Obdach: 3 Helden je Burgstufe für 5 Minuten, weitere für 100 Sekunden. Läuft die Zeit ab, verlässt der Held das Königreich mit allem, was er trägt; Protokoll und Chronik melden es vorher, und seine Ansicht zählt die Sekunden.
- **Was ein Held zeigt**: Ein Held zuckt zusammen, wenn er getroffen wird, hebt eine Hand, wenn seine Fähigkeit auslöst, jubelt, wenn er eine Stufe aufsteigt, und sackt dort zusammen, wo er fällt, bevor der Staub ihn nimmt. Mit „Bewegung verringern“ (Einstellungen) tut er nichts davon.
- **Neigungen der Klassen**: Jede Klasse hat ihre Gewohnheiten. Krieger kämpfen, bis sie schwer verletzt sind, und stürmen gern Festungen; Magier bleiben in Stadtnähe, ziehen sich früh zurück und lernen gern; Waldläufer reisen weit und bevorzugen Erkundungsaufträge; Diebe nehmen den bestbezahlten Auftrag und plündern Festungen; Wachen und Baumeister bleiben in der Stadt. Die eigene Vorsicht und Neugier eines Helden verschieben das ein wenig, und sein Panel nennt seine Neigungen. Auch der Aktionsradius ist bei jedem Helden anders: Je kühner und neugieriger er ist, desto weiter entfernt er sich von der Burg, sodass zwei Helden derselben Klasse nicht im selben Gebiet bleiben. Ein Held sucht zuerst unbekanntes Land in seinem Radius auf; ist keines mehr übrig, zieht er etwas weiter hinaus und wandert zur anderen Seite seines Radius, statt um die Stadt zu kreisen.
- **Einen Helden lesen**: Das Panel eines Helden sagt, was er gerade tut und warum, wohin er geht, was er braucht und wie er zu jedem offenen Auftrag steht: unterwegs, beschäftigt oder der Grund, aus dem er ablehnte, samt der Belohnung, die ihn umstimmen würde. Das Panel eines Auftrags listet die Helden nach diesen Gründen, die am leichtesten zu gewinnenden zuerst. Das Panel endet mit dem Werdegang des Helden, seinen letzten acht Taten samt Spielzeit: die gekaufte Ausrüstung und das Studium, die angenommenen Aufträge und was den Ausschlag gab (der Lohn, andere, die schon dabei waren, oder seine Erinnerungen), was er erhielt und an wessen Seite, wer ihm schwer verwundet zu Hilfe kam und wann er umkehrte.
