---
title: "Ersteller-Tutorial"
---

Jede Vorlage beginnt in **Creator & Steam Workshop** (Hauptmenü, Kartenverwaltung oder Pluginverwaltung) und führt auf demselben Weg von **Neues Projekt** zu einem privaten Workshop-Artikel. Nur der letzte Schritt braucht Steam.

## Die gemeinsamen Schritte

1. **Neues Projekt**: Wähle eine Vorlage, einen Namen und einen Ordner. Der Dialog zeigt, wohin das Projekt kommt, bevor er etwas schreibt.
2. **Projekt bearbeiten**: Ein Plugin öffnet sich im Plugin-Editor; eine Karte oder Kampagne öffnet sich mit **Gelände-/Kampagneneditor öffnen** in einem eigenen Prozess, der nur lädt, was das Projekt benötigt. Speichere vor dem nächsten Schritt: Prüfungen, Testspiele und Veröffentlichung nutzen die gespeicherten Dateien.
3. **Inhalt validieren**: Jedes Problem sagt, wo es liegt; ein Doppelklick öffnet den Editor dort.
4. **Spieltest**: ein eigenes Spiel nur mit diesem Projekt und dem, was es benötigt. Sein Bericht nennt, was geladen wurde, und während es läuft Tickzeit, Speicher und Sprite-Atlas, eingestuft von in Ordnung bis zu hoch.
5. **Exportieren…**: ein ZIP oder Ordner mit derselben Projekt-ID, zum Aufbewahren oder Teilen.
6. **Im Workshop veröffentlichen**: Wähle bei laufendem Steam für einen ersten Test **Privat**, dann **Prüfen und durchsehen** und **Veröffentlichung einreichen**. Das Veröffentlichen testet das Laden nicht: Finde den Artikel unter **Workshop durchsuchen**, nutze **Abonnieren** und beobachte ihn unter **Abonnements**, bis er verfügbar ist.

## Karte

Die Vorlage ist eine 32×32-Karte mit einer Burg, einer Truhe mit 100 Gold zwei Felder östlich davon, 500 Startgold und einem Sieg durch das Einsammeln der Truhen.

1. Male im Gelände-Editor das Gelände, setze Gebäude, Festungen und Truhen und speichere.
2. **Inhalt validieren** warnt vor einer Festung, Truhe oder einem Boss, den Helden von der Burg aus nicht erreichen.
3. Version: Erhöhe **Projektversion** bei jeder veröffentlichten Änderung. Spielstände mit der alten Version behalten eine aufbewahrte Kopie davon.

## Kampagne

Die Vorlage sind zwei Level, jedes mit einer eigenen Karte mit derselben Burg und Truhe; die Kampagnendatei ordnet sie und gibt jedem einen Titel, Story-Text und Startgold.

1. Öffne im Gelände-Editor das Kampagnenpanel, um Reihenfolge, Siege, Story-Text, Übernahmen und Auslöser festzulegen.
2. **Spieltest** kann bei jedem Level beginnen.
3. Abhängigkeiten: Nutzt ein Level die Einheiten eines Plugins, füge dessen Projekt unter **Abhängigkeiten** mit einem Versionsbereich wie `>=1.0.0, <2.0.0` hinzu.

## Plugin

Die Vorlage enthält eine Heldenklasse, einen Gegner, ein Gebäude, das die Klasse anwirbt, eine Festung, die den Gegner schickt, eine Fähigkeit, eine Forschung, ein Ereignis, einen benannten Boss, einen Gelände-Skin und eine englische Sprachdatei, alles im eigenen Namensraum des Projekts.

1. Bearbeite im Reiter **Objekte**. Die Leiste wählt eine Art; jede Definition steht unter dem Namen und mit dem Bild, das ihr das Spiel geben würde, und die gewählte wird in der Vorschau gezeigt (ein Läufer läuft). **Neu…** fügt eine nach dem hinzu, worauf sie aufbaut, und nach ihrem Namen; Bild und Ton werden in ihren eigenen Zeilen gewählt oder importiert; das Eigenschaftsformular graut Werte aus, die aus der Basisdefinition stammen, und markiert sofort Werte außerhalb der Grenzen des Spiels. **Erweitert** zeigt die Zeile zum Hinzufügen per ID und das JSON der Definition. Der Name wird in jeder Sprache des Plugins vergeben, in den Zeilen darunter (**Sprache hinzufügen** gibt dem Plugin eine weitere); ein Weg der Burg hat Tabellen für seine Wirkungen und Spezialisierungen und Zeilen für seine übrigen Texte.
2. Assets: Der Tab **Assets** nimmt hineingezogene Bilddateien an und zeigt jede gegenüber den Größen- und Speichergrenzen. Der Gelände-Skin der Vorlage nutzt `preview.png` als Beispielbild; ersetze es dort.
3. Überschreibungen: **Spielinhalt kopieren…** fügt eine vollständige Kopie einer Figur des Spiels unter deiner eigenen ID hinzu, die das Original dort ersetzt, wo es genutzt wird. Eine Definition mit einer eingebauten ID (etwa `SLIME` mit Basis `SLIME`) ändert den Schleim des Spiels, solange das Plugin aktiv ist; **Inhaltsprofile** zeigt, wessen Überschreibung gewinnt.
4. Versionen: **Projektversion** ist die eigene Version des Projekts; **Unterstützte Spielversionen** ist der Bereich der Spielversionen, die es annimmt (`*` für jede; ein Entwicklungs-Build nimmt nur `*` an).

## Boss-Tutorial (Plugin + Kampagne mit zwei Levels)

Die Vorlage ist ein Ordner mit einem Plugin und einer zweistufigen Kampagne, die es benötigt; das zweite Level gewinnt man, indem man den benannten Boss des Plugins besiegt.

1. Die **Abhängigkeiten** der Kampagne nennen Projekt und Version des Plugins, daher nimmt ein Testspiel das Plugin mit.
2. Veröffentliche zuerst das Plugin, dann die Kampagne: Das Veröffentlichungsfenster schlägt den Workshop-Artikel des Plugins als benötigten Artikel vor.
3. Erhöhe die **Projektversion** des Plugins bei jeder Änderung; halte den Bereich der Kampagne weit genug, um sie anzunehmen.

## Königreichsmission (ein Level: Besprechung, Aufträge, Wellen, ein Boss)

Die Vorlage ist ein Königreichslevel mit Einsatzbesprechung, Stadt, Bau, den Erkunden-, Töten- und Verteidigen-Flaggen der Krone, zwei angekündigten Wellen, einem benannten Boss und einem optionalen Fund. Zerlege sie Level für Level im Kampagnenpanel und folge dann den gemeinsamen Schritten.

## Frostfang-Beispiel (ein fertiges Inhaltspaket und seine Karte)

Die Vorlage ist ein fertiges Beispiel zum Auseinandernehmen: ein Inhaltspaket mit einer Heldenklasse (dem Frostwächter), einem Monster (dem Raureif-Yeti), der Halle, die die Klasse rekrutiert, dem Bau, aus dem das Monster kommt, zwei Fähigkeiten, einer Forschung und einem benannten Boss, jeweils mit eigenem Bild und Ton, und eine Karte, die das Paket voraussetzt und durch den Sieg über den Boss gewonnen wird. Dasselbe Fenster bietet auch für andere Workshop-Kategorien ein fertiges Beispiel an, jeweils als **Beispiel: <Kategorie>** (darunter eine Karte, eine Kampagne, eine Geschichte, eine Reihe von Herausforderungen sowie Pakete mit Forschung, Ereignissen und einer Sprache): Es wird als eigenes Projekt kopiert, zum Spielen, Auseinandernehmen und Ändern.

1. Öffne die Karte im Geländeeditor und drücke **Objekte…**, um zu sehen, wie jede Definition auf einer des Spiels aufbaut; ändere eine Zahl oder einen Namen, speichere und platziere das Ergebnis auf der Karte.
2. Drücke **Testspiel**, um die Karte mit dem Paket und sonst nichts von dir zu spielen.
3. Veröffentliche zuerst das Paket, dann die Karte: Das Veröffentlichungsfenster schlägt das Workshop-Objekt des Pakets als erforderliches Objekt vor.

## Was Vorlagen nie enthalten

Eine Vorlage enthält keine echte Workshop-Artikel-ID, kein Steam-Konto und keinen absoluten Pfad: Projekt-IDs entstehen neu auf deinem Computer, und jede Datei wird relativ zum Projekt benannt.
