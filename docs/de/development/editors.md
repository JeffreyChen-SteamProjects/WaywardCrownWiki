---
title: "Karten- und Kampagnen-Editor"
---

Wayward Crown enthält integrierte Karten- und Kampagnen-Editoren, mit denen du eigene Level und Szenarien erstellen kannst.

---

## Karteneditor

Die Schaltfläche **Editor-Toolkit** im Hauptmenü öffnet den Editor mit einer neuen Karte. Gespeicherte Karten werden im Tab „Karten“ der Kartenverwaltung aufgelistet, gespielt, bearbeitet, importiert und exportiert; die Kartenverwaltung öffnet die Schaltfläche **Kampagnen** im Hauptmenü.

### Funktionen

- **Geländemalerei** — Wähle einen Geländetyp und male ihn mit einem Pinsel (Größe 1 – 20) auf die Karte, oder fülle einen Bereich mit der Füllfunktion
- **Gebäude platzieren** — Platziere Spielergebäude, feindliche Festungen und Schatztruhen, verschiebe die Burg oder radiere
- **Zufallskarte** — Erzeuge eine zufällige Karte als Ausgangspunkt
- **Rückgängig / Wiederholen** — Bis zu 30 Schritte (Ctrl+Z / Ctrl+Y)
- **Karteneinstellungen** — Größe (100 – 1000 Felder pro Seite), Name, Autor und weitere Angaben, Startgold und eine Siegbedingung
- **Speichern/Laden** — Speichere Karten im Verzeichnis `maps/`; Schließen, Esc und Neu fragen vor dem Verwerfen ungespeicherter Änderungen (Speichern / Verwerfen / Abbrechen), und das Verwerfen einer nie gespeicherten Kampagne entfernt ihren Ordner wieder
- **Objekte…** — Bearbeite im Objekteditor Heldenklassen, Monster, Gebäude, Festungen und Bosse in einem eigenen Inhaltspaket. Die Schaltfläche listet deine Pakete und **Neues Inhaltspaket…** auf und braucht keine gespeicherte Karte. Ein Paket ist ein eigenständiges Plugin; beim Speichern wird der Inhalt neu geladen, sodass sich das Definierte sofort platzieren lässt. Eine Karte oder Kampagne setzt ein Paket erst voraus, wenn sie mit etwas aus diesem Paket darauf gespeichert wird
- **Testspiel** — Startet die gespeicherte Karte oder die Kampagne am gerade bearbeiteten Level in einem eigenen Spiel, mit den Inhaltspaketen, die sie voraussetzt, und sonst nichts von dir
- **Bereiche** — Die Pinsel und die Regeln der Karte (oder die Kampagne) sind Bereiche mit Reitern neben der Karte: Ziehe einen auf die andere Seite oder aus dem Fenster, schließe ihn und hole ihn mit **Bereiche** zurück. Gelände, Gebäude, Festungen und Bosse wählst du nach ihrem Bild, und der Editor und die Fenster, die er öffnet (der Objekteditor, der Trigger-Editor, die Kartendetails), lassen sich maximieren

Karten enthalten keine Einheiten: Abenteurer werden rekrutiert und Feinde erscheinen, sobald das Spiel läuft.

### Geländetypen

- Grasland, Wald, Gebirge, Wasser, Wüste, Straße, Schlamm, Sumpf, Schnee, Hügel, Ödland, Blumenwiese

### Speicherformat

Karten werden im JSON-Format im Verzeichnis `maps/` gespeichert und enthalten:

- Geländedaten (ein komprimiertes NumPy-Array)
- Höhendaten
- Gebäude, feindliche Festungen und Schatztruhen
- Position der Burg
- Kartenangaben, Startgold und Siegbedingung

---

## Kampagnen-Editor

Kampagnen werden im Tab „Kampagnen“ der Kartenverwaltung (Schaltfläche **Kampagnen** im Hauptmenü) erstellt, geöffnet, importiert und exportiert. Beim Öffnen einer Kampagne startet der Karteneditor mit einem Kampagnenbereich, sodass du die Karte und die Einstellungen jedes Levels an einem Ort bearbeitest.

### Funktionen

- **Level-Reihenfolge** — Level mit den Pfeilschaltflächen nach oben und unten verschieben
- **Siegbedingungen** — Siegbedingungen für jedes Level festlegen, einschließlich des Festungstyps für `destroy_building`
- **Handlungstext** — Einleitungs- und Abschlusstext festlegen
- **Startressourcen** — Das Anfangsgold für jedes Level festlegen
- **Übernahme** — Gold, Abenteurer und Forschung aus dem vorherigen Level behalten
- **Gebäudebeschränkungen** — Einschränken, welche Gebäudetypen der Spieler nutzen darf
- **Auslöser** — Skriptnachrichten und Gebäudefreischaltungen für ein Level (nur Kampagnenlevel)
- **Königreichsfelder** — Burgstufe des Levels zu Beginn, Zeitlimit, der Rat der Besprechung und bis zu zwei optionale Funde
- **Weitere Ziele und Niederlagen** — Mehr Siegbedingungen, jede erforderlich oder optional, und mehr Arten zu verlieren (gefallene Helden, verlorene Gebäude oder Karawanen), in zwei Tabellen mit Hinzufügen und Entfernen
- **Herkunft des Ziels** — Unter einem Siegziel steht, ob der Boss auf der Karte platziert oder von einem Auslöser gestartet wird und ob der Festungstyp vom Spiel oder einem Plugin stammt und wie viele auf der Karte stehen; das Ziel eines weiteren Ziels sagt dasselbe im Tooltip

### Siegbedingungsoptionen

Die Editoren führen sie mit ihrem Namen in deiner Sprache auf; der Typ in der Tabelle ist das, was die Datei einer Karte oder Kampagne speichert.

| Typ | Beschreibung |
|-----|-------------|
| `free` | Freier Modus, keine Siegbedingung |
| `destroy_enemy_buildings` | Alle feindlichen Festungen zerstören |
| `survive_ticks` | Eine bestimmte Zeitspanne überleben |
| `reach_gold` | Eine bestimmte Menge Gold ansammeln |
| `destroy_building` | Einen bestimmten Festungstyp zerstören |
| `defend` | Die Burg für eine bestimmte Zeitspanne verteidigen |
| `collect_chests` | Alle Schatztruhen einsammeln |
| `defeat_boss` | Einen benannten Boss besiegen, der auf der Karte steht oder von einem Auslöser gestartet wird |
| `secure_trade` | Eine Anzahl Karawanenrunden gelingen lassen und alle feindlichen Festungen zerstören |

### Speicherstruktur

```
campaigns/my_campaign/
├── campaign.json         # Campaign metadata
├── level1.json           # Level 1 map
├── level2.json           # Level 2 map
└── level3.json           # Level 3 map
```

---

## Eigene Inhalte teilen

- Karten- und Kampagnenordner können einfach durch Kopieren oder über Export und Import der Kartenverwaltung geteilt werden
- Erhaltene Karten in `maps/` ablegen, um sie im Hauptmenü laden zu können
- Erhaltene Kampagnen in `campaigns/` ablegen, um sie im Hauptmenü anzuzeigen
- Läuft das Spiel über Steam, stellt **Im Workshop veröffentlichen** in der Kartenverwaltung eine eigene Karte oder Kampagne in den Steam Workshop, und abonnierte erscheinen in ihren Listen mit der Markierung [Workshop]. Steam hält sie aktuell, deshalb lassen sie sich nicht bearbeiten, umbenennen oder löschen; **Duplizieren** erstellt eine eigene Karte
- Ein Inhaltspaket wird für sich allein installiert: Veröffentliche es oder gib sein ZIP einzeln weiter, und wer es installiert, findet seine Klassen, Monster, Gebäude und Festungen in den eigenen Spielen, ganz ohne Karte. Eine Karte oder Kampagne, die etwas aus einem Paket platziert, setzt dieses Plugin voraus: Veröffentliche das Paket zuerst (das Veröffentlichungsfenster schlägt dann das Workshop-Objekt des Pakets als erforderliches Objekt vor)
