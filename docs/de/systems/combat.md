---
title: "Kampfsystem"
---

Der Kampf läuft vollständig automatisch ab. Abenteurer und Feinde kämpfen, sobald sie sich in Angriffsreichweite befinden.

---

## Kampfablauf

1. **Erkennung** — Ein Abenteurer entdeckt einen Feind in seinem Sichtfeld (wird alle 2 Ticks geprüft)
2. **Annäherung** — Ist der Feind sichtbar, aber außerhalb der Angriffsreichweite, verfolgt der Abenteurer ihn
3. **Angriff** — Sobald beide in Angriffsreichweite sind, beginnt der Kampf
4. **Auswertung** — Der Schaden wird alle 5 Ticks verrechnet

---

## Schadensberechnung

### Abenteurer greift Feind an

| Typ | Schadensformel |
|-----|---------------|
| Nahkampf | `ATK × 2` (globaler Schadensmultiplikator) |
| Fernkampf | `ATK` (Projektilschaden, kein Multiplikator) |

### Feind greift Abenteurer an

```
Schaden = (Feind-ATK + Zufall(0~2)) × 2
```

### Verteidigung

```
Tatsächlicher Schaden = max(1, Schaden - DEF)
```

### Ausweichen

| Quelle | Ausweichrate |
|--------|-------------|
| Grundausweichen der Abenteurer | 10% + 1% × AGI (≤ 70%) |
| Basis-Ausweichrate von Feinden | 5% |
| Waldläufer-Fähigkeit „Ausweichmanöver“ | +15% |
| Dieb: Ausweichmanöver | +10% |
| Dieb: Schattentanz | +18% |
| Waldläufer: Windbruch | +25% |

---

## Projektilsystem

Jede Einheit, die aus der Ferne kämpft, verschießt ein eigenes Projektil, sodass man einen Schuss an dem erkennt, was fliegt. Die übrigen Klassen kämpfen im Nahkampf, auch wenn sie 3 Felder weit reichen:

| Klasse | Projektiltyp |
|--------|-------------|
| Waldläufer | Pfeil (arrow) |
| Pfadfinder | Wurfspeer (javelin) |
| Straßenwächter | Armbrustbolzen (bolt) |
| Magier | Feuerball (fireball) |
| Adept | Lichtsplitter (light_shard) |
| Goblin-Bogenschütze (Feind) | Grober Pfeil (goblin_arrow) |
| Dunkler Kultist (Feind) | Dunkle Kugel (dark_orb) |
| Drache (Feind) | Flammenstoß (dragon_flame) |

Projektile bewegen sich nach dem Abfeuern jeden Tick auf das Ziel zu und verursachen beim Treffer Schaden. Jedes wird in der Richtung gezeichnet, in die es fliegt: Eines, das die Karte hinauffliegt, sieht man von hinten, eines, das quer fliegt, von der Seite.

---

## Pfeilturm

Der Pfeilturm ist ein automatisiertes Verteidigungsgebäude:

| Eigenschaft | Wert |
|-------------|------|
| Angriffsreichweite | 20 Felder |
| Basisschaden | 16 + 8 × (Lv − 1) |
| Upgrade-Skalierung | Steigt mit dem Level |

Pfeiltürme greifen automatisch den nächsten Feind in Reichweite an.

---

## Erfahrungsbelohnungen

| Quelle | XP |
|--------|-----|
| Pro Treffer (Tropf-XP) | 1/5 der Kill-XP |
| Schleim besiegen | 10 XP |
| Goblin besiegen | 25 XP |
| Skelett besiegen | 40 XP |
| Zombie besiegen | 60 XP |
| Drache besiegen | 150 XP |

:::note[Tropf-XP]
Jedes Mal, wenn ein Abenteurer einen Feind trifft — ob im Nahkampf oder mit einem Projektil — erhält er 1/5 der Kill-XP dieses Feindes. So verdienen Abenteurer auch ohne den letzten Schlag Erfahrung.
:::

---

## Kampf-KI

### Fluchtbedingungen für Abenteurer

- LP < 30% (LP_KRITISCH)
- Die Fluchtwahrscheinlichkeit wird durch die Persönlichkeitseigenschaft Sicherheit beeinflusst

### Trankverwendung

| Bedingung | Verhalten |
|-----------|----------|
| LP < 30% | Trank dringend verwenden |
| LP < 50% | Trank verwenden |

### Zielpriorität der Feinde

1. Abenteurer im Kampf (Nicht-Pazifisten)
2. Baumeister (Pazifisten)
3. Bedrohliche Gebäude wie Pfeiltürme
4. Burg
5. Andere Gebäude

Gift behält beim Speichern seine Restdauer, den nächsten Schaden und die Zuordnung des Sieges. Die Reinigung am Altar oder im Badehaus entfernt auch Diebesgift, aber keine Schilde. Nach dem Grundwiderstand des Bosses dauern wiederholte Kontrolleffekte in einem festen Zehnsekundenfenster 100 %, 50 % und 25 %; weitere Versuche wirken bis zum Ende des Fensters nicht. Kürzere erneute Anwendungen verkürzen vorhandene Kontrolle nicht, und Versuche verschieben die Rücksetzung nicht. Normale Gegner erhalten diese Immunität nicht.

Missionen erlauben bis zu acht geordnete Phasen mit Pflicht- und Zusatzzielen. Abgeschlossene Phasen und Zusatzergebnisse werden gespeichert; ein gescheitertes Zusatzziel verhindert den Grundsieg nicht. Benannte Gegner und Festungen müssen wirklich fallen: das Entfernen lebender Ziele zählt nicht. Schutz verfolgt die ursprüngliche verbündete Einheit oder das Gebäude bis zum Missionsende, ohne Ersatz anzunehmen. Autoren können Ruhmschwellen, endliche Wellen und Ziellisten nutzen; fehlende Verweise werden vor Spielbeginn abgewiesen.
