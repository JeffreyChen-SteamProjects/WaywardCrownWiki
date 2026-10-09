---
title: "Plugin-Entwicklung"
---

## Erstellen und testen

Creator / Workshop öffnet sich im Hauptmenü sowie Karten- und Plugin-Manager. Erstelle eine Karte, eine Kampagne mit zwei Leveln, ein Plugin oder das Boss-Tutorial mit zugehörigem Plugin; bearbeite, speichere, prüfe und teste offline. Der Arbeitsbereich verwaltet lokale Projekte, Abos, Veröffentlichungen, Suche und Aufgaben. Die Vorlage „Königreichsmission“ erstellt eine kingdom-Kampagne mit einem Level, mit Besprechung, Aufträgen, Wellen und einem benannten Boss. Importiere eine ZIP, eine Kartendatei oder einen Projektordner über „Inhalte importieren“ oder per Ablegen im Arbeitsbereich; „Exportieren…“ schreibt eine ZIP oder einen Ordner, und „Ordner öffnen“ zeigt die Dateien eines Projekts. Beide fragen nach einem Ordner (der letzte wird wieder angeboten), ein dort schon vergebener Name wird zu name-2, name-3…, und in von Steam heruntergeladene Inhalte wird nie geschrieben. Jedes Projekt erscheint mit Vorschau, Typ, Version, Autor, ob dieses Spiel es laden kann und wie seine letzte Prüfung ausging; jede Liste hat eine Suche und einen Typfilter und sagt, warum sie leer ist, und die Details des gewählten Projekts nennen Lizenz, Spielversionen, Abhängigkeiten und Ordner. „Neues Projekt“ listet die Vorlagen mit dem, was jede anlegt, und zeigt den Ablageort, bevor etwas geschrieben wird. Die Prüfung warnt vor Festungen, Truhen und platzierten Bossen, die Helden von der Burg aus nicht erreichen (ein Fehler, wenn der Sieg sie braucht), und begrenzt eine Karte auf 64 Festungen, 256 Truhen und 32 platzierte Bosse; ein Doppelklick auf ein Problem auf einem Kartenfeld öffnet den Editor dort. Der Gelände- und Kampagneneditor öffnet sich in einem eigenen Prozess, der nur die Abhängigkeiten des Projekts lädt, sodass vom Spieler installierte Inhalte weder auftauchen noch stören; er speichert direkt ins Projekt. Prüfung, Export, Probespiel und Veröffentlichung warten, solange das Projekt ungespeicherte Änderungen in einem vom Arbeitsbereich geöffneten Editor hat: Sie verwenden die gespeicherten Dateien. Im Plugin-Editor sind die Phasen eines Bosses eine Tabelle (die Lebenspunkte, bei denen jede beginnt, ihre Fähigkeiten), und Anzahl, Grenze und Vorwarnung einer Fähigkeit haben eigene Felder. Der Plugin-Editor legt kurz nach jeder Änderung einen Entwurf der ungespeicherten Arbeit neben den Einstellungen und außerhalb des Projekts ab; wird das Projekt nach einem Absturz wieder geöffnet, bietet er ihn an. Im Plugin-Editor kopiert „Duplizieren“ eine Definition unter einer neuen ID, eine Definition, die eine andere nennt, lässt sich erst löschen, wenn diese Verwendung weg ist, und „Spielinhalt kopieren…“ fügt eine vollständige Kopie eines Akteurs des Spiels unter dessen eigener ID hinzu, die das Original überall ersetzt, ohne die Dateien des Spiels zu ändern. Klassen, Gegner, Gebäude, Festungen und Forschungen haben ein Eigenschaftsformular (Wertebereiche und Wachstum, fallengelassenes Gold, Preise, die Klasse, die ein Gebäude rekrutiert, wen eine Festung aussendet, worauf eine Forschung wirkt), das von der Basisdefinition übernommene Werte grau zeigt und Werte außerhalb der Grenzen des Spiels oder mit unbekannter ID sofort markiert; Abhängigkeiten werden in einer Tabelle bearbeitet. Der Reiter „Assets“ nimmt hineingezogene Dateien auf, zeigt den sichtbaren Bereich jedes Bilds neben den Größen- und Speichergrenzen des Spiels, zeigt es als Gelände oder Symbol, speichert eine Quellen- und Nennungszeile, listet und setzt, welche Definitionen es nutzen, benennt eine Datei samt allen Verwendungen um, verweigert das Entfernen einer noch genutzten Datei und lenkt Felder um, die eine fehlende Datei nennen. Ein Testspiel beginnt mit einer Liste dessen, was es geladen hat (jedes Plugin in Ladereihenfolge mit den Definitionen, die es hinzufügt oder ersetzt, und übersprungene Plugins mit Grund); der Arbeitsbereich zeigt dieselbe Liste und führt eine übersprungene Definition des getesteten Plugins unter den Problemen, wo das Öffnen eines Problems in einer Definitionstabelle zu dieser Definition im Plugin-Editor führt.

Ordner-/ZIP-Importe und bearbeitbare Kopien erzeugen neue Projekt-IDs und ändern eigene Namensraumverweise. Autor, Quelle und Lizenz bleiben erhalten, Aktualisierungsbindungen werden nicht übernommen. Steam-Originale bleiben schreibgeschützt. Relative Pfade, Budgets, Arrays und Triggerzyklen werden geprüft. Eine leere Lizenz erlaubt keine Weiterverteilung. Beim Veröffentlichen einer Kopie zeigt die Prüfung ihre Herkunft (Projekt, Version, Autor und Artikelseite des Originals) und die Bedingungen des ursprünglichen Autors; abgeschickt wird erst, wenn du bestätigst, dass du die Namensnennung beibehältst und die Bedingungen einhältst oder, falls das Original keine Lizenz nennt, die Erlaubnis seines Autors hast. Eine nicht angegebene Lizenz steht immer für keine Erlaubnis zum Teilen. Eine Kopie nennt in ihren Details ihr Original und meldet, wenn das abonnierte Original weitergegangen ist; die Tooltips von „Erstellen Sie eine lokal bearbeitbare Kopie“, „Exportieren…“ und „Abmelden“ sagen, was jede Aktion tut.

Veröffentlichen benötigt Steam: Seite und Vorschau vorbereiten, unveränderlichen Datei-/Hash-Schnappschuss prüfen und ausdrücklich senden. Aufgaben laufen nach dem Schließen weiter; Vorbereitung kann abgebrochen werden. Gesendete oder unklare Ergebnisse müssen vor erneutem Versuch geprüft/synchronisiert werden. Bindungen gelten je Konto, App und Projekt. Vorschau kleiner als 1 MiB; Tests nutzen simuliertes Steam. Veröffentliche benötigte Plugins zuerst und bestätige ihre IDs derselben App bei der Karten-/Kampagnenprüfung. Der Assistent speichert Seitentexte je Sprache und JSON-Metadaten, schneidet die Hauptvorschau quadratisch zu und verwaltet Reihenfolge und Entfernung von bis zu acht Zusatzbildern. Bestehende Veröffentlichungen erlauben Seiten-/Abhängigkeitsupdates ohne erneute Inhaltsübertragung; Vorschauen gehören zum geprüften Schnappschuss. Der Assistent kann die Hauptvorschau aus dem Projekt selbst erstellen (das Gelände einer Karte mit Burg, Festungen und Truhen, die ersten Level einer Kampagne, die eigenen Bilder eines Plugins, jeweils mit Titel), zeigt die Vorschau so, wie sie hochgeladen wird, samt Größe, zeichnet auf Wunsch eine Bildunterschrift unten in jedes Bildschirmfoto und meldet, welche Bilder eines Entwurfs fehlen. Seine drei Schritte (Seite, Abhängigkeiten und Versionen, Prüfung) werden mit Zurück und Weiter (Alt+Links, Alt+Rechts) durchlaufen; ein Problem führt zu seinem Schritt und umrandet das Feld, bis es bearbeitet wird, und die Prüfung zählt die seit der letzten Veröffentlichung neuen, geänderten und entfernten Dateien. Eine fehlgeschlagene Aufgabe nennt die Art des Problems (Berechtigung, Workshop-Vereinbarung, Platz, ausgelastetes Steam, Zeitüberschreitung, Steam offline, Prüfungen, unbekanntes Ergebnis, Unterbrechung), den nächsten Schritt und einen Code wie WS-PERM-R15, der kein Konto, keinen Eintrag und keine Datei nennt. Wählst du unter „Meine Veröffentlichungen“ einen eigenen Eintrag, zeigt der Arbeitsbereich Sichtbarkeit, Version, Erstellungs- und Aktualisierungszeit, Größe, das verknüpfte lokale Projekt und eine Liste dessen, was ein Update aus diesem Projekt ändern würde: Seitenfelder, Dateien und benötigte Einträge. Wählst du im Browser einen Eintrag, zeigt er seine Beschreibung (oder dass Steam keine geliefert hat) und zwei getrennte Teile: was Steam angibt (Art, benötigte Einträge, die vom Autor erlaubten Spielzweige, die bei der Veröffentlichung festgehaltene Version, Aktualisierungszeit, Größe, Bewertungen) und, sobald Steam ihn installiert hat, was sein eigenes Manifest angibt (Projekt und Version, ob dieser Build die verlangten Spielversionen ausführen kann, benötigte Projekte, was er ändern darf). Was Steam nicht liefert, wird nicht ergänzt. Ein abonnierter Eintrag wird erst verwendet, wenn Steam ihn installiert hat und er die Prüfung besteht: Sein Manifest ist für dieses Spiel lesbar, und jedes benötigte Projekt ist in einer erlaubten Version installiert, ohne Zyklus (geben zwei Einträge dasselbe Projekt, gilt dein eigenes Plugin, sonst der älteste Eintrag). Ein Eintrag, den Steam gerade aktualisiert, bleibt in der installierten Version in Gebrauch. Der Tab Abonnements zeigt für jeden abonnierten Eintrag, wo er steht (wartet auf Steam, wird mit Bytezahl heruntergeladen, wartet auf die Prüfung, verfügbar, es fehlt etwas Benötigtes, oder fehlgeschlagen und warum), und der Browser sagt dasselbe für den gewählten Eintrag; ein Download, den Steam nicht abschließen konnte, etwa bei voller Festplatte, wird erst wieder angefordert, wenn du „Download erneut versuchen“ drückst. Bevor ein Spielstand lädt, prüft das Spiel die Inhalte, mit denen er entstand: Wurde ein genutztes Projekt aktualisiert, ausgeschaltet, nicht mehr abonniert oder ist es unbrauchbar, oder sind andere Inhalte aktiv, nennt es jedes davon und lädt den Spielstand nach Rückfrage aus seiner aufbewahrten Kopie, oder es sagt, warum er nicht laden kann (keine nutzbare Kopie, ein Spielupdate, ein anderes Steam-Konto oder eine andere App, Steam läuft nicht) und wie es sich beheben lässt; die Spielstanddatei und das laufende Spiel bleiben unverändert. „Aufbewahrte Inhalte…“ im Tab Abonnements listet diese Kopien mit den Spielständen, die auf sie angewiesen sind, prüft sie und entfernt ungenutzte; eine Kopie, auf die ein Spielstand angewiesen ist, geht erst nach einer Rückfrage mit den Spielstandnamen, die vom laufenden Spiel genutzte nie. Artikel- und Projektdetails nennen auch die Version dieses Spiels (in einem Entwicklungs-Build nicht gesetzt, dann laden Inhalte nicht, die eine bestimmte Spielversion verlangen) und seinen Steam-Zweig, und „Seite des Inhalts öffnen“ im Tab Abonnements zeigt einen unbrauchbaren Artikel; schaltet Steam das Spiel während des Spielens auf einen anderen Zweig um, sagt ein Hinweis das, und nichts startet von selbst neu. Die Tags einer Seite sind ihre Art plus beliebige aus Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; der Seitenschritt nennt die Sprachen, für die du Seiten geschrieben hast (jede andere Steam-Sprache zeigt die Standardseite), und für einen schon veröffentlichten Artikel vergleicht „Seite aus Steam übernehmen…“ die Seite auf Steam Feld für Feld mit deinem Entwurf und übernimmt nur die angehakten Felder. Ohne Steam werden abonnierte Artikel nicht geladen und aufbewahrte Kopien nicht genutzt, denn beide gehören zu einem Steam-Konto und einer App (Demo und Vollversion sind getrennte Apps mit eigenen Artikeln, Entwürfen und Inhaltsprofilen); ein Spielstand, der sie braucht, sagt das, und eigene Projekte anlegen, prüfen, testspielen, exportieren und importieren geht offline. Während ein Testspiel läuft, misst es Tickzeit, Speicher und Sprite-Atlas, und der Arbeitsbereich fügt sie dem Testbericht hinzu, eingestuft als in Ordnung, beobachten oder zu hoch, samt dem, was hilft; scheitert ein Upload an Inhalt oder Kontingent, nennt die Erklärung die Grenzen von Steam, und ein fertiger erinnert daran, ihn zu abonnieren und das Laden zu prüfen, da das Veröffentlichen das nicht testet. Ein Upload wird erst nach fünf Minuten ohne Fortschritt aufgegeben, und erledigte oder abgebrochene Aufgaben verschwinden eine Woche später aus der Liste; Testsitzungen, die kein laufendes Spiel nutzt, werden beim Start neuer entfernt, Enter auf einem lokalen Projekt öffnet seinen Editor, und diese Fenster passen in jeder Sprache auf einen 1280 × 720-Bildschirm.

## Definitionen und Abhängigkeiten

Versionierte Plugins ergänzen eigenständige Klassen, Gegner, Gebäude und Stützpunkte mit integrierten Verhaltensvorlagen sowie Fähigkeiten, Forschung, Ereignisse, benannte Bosse, Ressourcen und Sprachen. Neue IDs nutzen `namespace:name`; integrierte IDs überschreiben bestehende Inhalte. Kerndateien bleiben schreibgeschützt. Darstellungspakete ersetzen Figuren- oder Geländebilder ohne Änderung der Spielwerte. Ein Spielergebäude kann eine Wirkung tragen: eine Angriffs-, Heil-, Schild- oder Zustandsfähigkeit, die es ab einer festgelegten Stufe in festen Abständen auf Gegner oder Helden in Reichweite wirkt. Ein Paket, dessen Fähigkeiten nur assets und languages sind, darf nur Skins und Sprachen enthalten; Bilder oder Klänge, die das Spiel nicht verwenden kann, lassen die eingebauten an ihrem Platz.

Das gemeinsame Manifest enthält Projekt-ID, Autor, Version, Kompatibilität, Ressourcen und Abhängigkeiten. Die Ladefolge ist deterministisch; fehlende, unpassende oder zyklische Abhängigkeiten verhindern das Laden. Alte Formate und Reihenfolgen bleiben erhalten. Profile zeigen Überschreibungen und gelten für das nächste Spiel. Inhaltsprofile listen die gewählten Plugins in Ladereihenfolge, jedes mit seiner Herkunft und der installierten, im laufenden Spiel genutzten und als Nächstes gewählten Version; „Nach oben“ und „Nach unten“ ändern die Reihenfolge nur, wo Abhängigkeiten es erlauben, und sie gilt für das nächste Laden im selben Steam-Konto und derselben App. Bevor sich etwas ändert, listet das Profil, was Anwenden aktiviert oder deaktiviert, samt den Karten, Kampagnen, Plugins und Spielständen, die ein deaktiviertes Plugin nutzen; ein Doppelklick auf ein Problem findet sein Plugin, eine Karte oder Kampagne kann die Plugins vorschlagen, die sie braucht, und ein abonnierter Artikel, der nicht angeboten wird, etwa eine Kopie eines eigenen Plugins, sagt warum.

## Beispiele

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Ressourcen und Grenzen

| JSON | Ressourcen und Grenzen |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | der Fähigkeitenbaum einer Klasse (passive Fähigkeiten): eine Liste von `{"id", "level", "effect", "requires": [ids]}`, beliebig viele und mehrere pro Stufe, oder die ältere Tabelle `{"<Stufe>": {"id", "effect"}}`, als Kette gelesen; ids sind in der Klasse eindeutig, `requires` nennt Fähigkeiten derselben Klasse, kein Ring |
| adventurer_classes.active_skill, tree_skills | die eigenen aktiven Fähigkeiten der Klasse, Knoten desselben Baums: `active_skill` ist die ID der ersten (eine Wurzel), `tree_skills` bis zu 12 IDs derer, die aus dem Baum wachsen. Jede ist eine Fähigkeit aus `skills` (nie summon), gelernt auf ihrem `level`, sobald der Held jede in `requires` genannte Fähigkeit hat (bis zu 8 IDs von Fähigkeiten der Klasse, passiv oder aktiv; keine bei der ersten), und jede wartet ihre eigene `cooldown` ab. Ohne `active_skill` behält die Klasse die erste Fähigkeit ihrer Basisklasse |
| buildings.effect | eine Fähigkeit mit attack, heal, shield oder status (nie summon), alle 10–3600 Ticks ab Gebäudestufe 1–3 gewirkt; Zustände stapeln sich nicht |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; nur Darstellung |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (deckend gezeichnet); Figuren-Skins: wie ihr Ziel; alles andere sowie layout außerhalb von Figuren bleibt ungenutzt und wird gemeldet |
| plugin art and sounds | 256 MiB dekodierte Bilder (Breite × Höhe × 4) für alle aktiven Pakete, eine Datei zählt einmal, darüber bleibt die eingebaute Grafik; 64 MiB Plugin-Klänge im Speicher |
| capabilities: assets, languages only | nur Skins und Sprachen; andere Definitionen werden abgelehnt |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 Levelkarten |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Kompatibilität mit der Spielversion

`game_version` legt die unterstützte Veröffentlichungsversion des laufenden Spiels fest. `"*"` wird auch für ältere Projekte akzeptiert. Ein bestimmter Bereich wird nur akzeptiert, wenn der Build eine bekannte, passende semantische Spielversion angibt; andernfalls werden Validierung, Laden und Veröffentlichung verweigert. In diesem Repository ist `game.build_info.GAME_VERSION` derzeit unbekannt: Verwende `"*"`, bis der Release-Build eine freigegebene Version liefert. Die Projektangabe `version` und Steam-Zweignamen bestimmen die Spielversion nicht.
