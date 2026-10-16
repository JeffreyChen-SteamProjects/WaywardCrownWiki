---
title: "Kampagnenmodus"
---

Der Kampagnenmodus bietet mehrstufige Szenarien mit jeweils spezifischen Siegbedingungen und einer Hintergrundgeschichte.

---

## Integrierte Kampagnen

Das Spiel enthält eine integrierte **Tutorial-Kampagne** (5 Level), die neue Spieler durch die verschiedenen Spielmechaniken führt. Sie hat eine eigene Schaltfläche, die erste im Hauptmenü.

---

## Siegbedingungen

Jedes Kampagnen-Level kann eine der folgenden Siegbedingungen haben:

| `victory` | Bedingung | Beschreibung |
|---|-----------|-------------|
| `free` | **Freies Spiel** | Keine spezifische Siegbedingung; frei spielen |
| `destroy_enemy_buildings` | **Alle Festungen zerstören** | Alle feindlichen Festungen auf der Karte vernichten |
| `survive_ticks` | **Bestimmte Zeit überleben** | Die Burg über eine festgelegte Anzahl von Ticks am Leben halten |
| `reach_gold` | **Gold ansammeln** | Einen Zielbetrag an Gold in der Schatzkammer erreichen |
| `destroy_building` | **Bestimmte Festung zerstören** | Einen bestimmten Festungstyp zerstören |
| `defend` | **Burg verteidigen** | Verhindern, dass die Burg innerhalb einer bestimmten Zeit zerstört wird |
| `collect_chests` | **Alle Truhen einsammeln** | Jede Schatztruhe auf der Karte öffnen |
| `secure_trade` | **Handelsweg sichern** | `victory_value` Karawanenrunden wurden bezahlt und jede feindliche Festung der Karte ist zerstört |

---

## Kampagnenstruktur

Kampagnen werden als Ordner im Verzeichnis `campaigns/` gespeichert:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Kampagnen-Metadaten und Level-Liste
    ├── level1.json       # Level-1-Karte
    ├── level2.json       # Level-2-Karte
    └── ...
```

### Format von campaign.json

```json
{
  "name": "Tutorial-Kampagne",
  "description": "Lerne die grundlegenden Spielmechaniken",
  "levels": [
    {
      "map": "level1.json",
      "title": "Ein neuer Anfang",
      "intro": "Willkommen bei Wayward Crown...",
      "outro": "Herzlichen Glückwunsch zum Abschluss dieses Levels!",
      "starting_gold": 500,
      "victory": "destroy_enemy_buildings",
      "victory_value": 0,
      "victory_target": "",
      "unlocked_buildings": [],
      "carry_over": {"gold": true, "adventurers": true},
      "triggers": [
        {"id": "welcome", "condition": "tick_reached", "params": {"value": 2},
         "action": "show_message", "action_params": {"text_key": "tut_welcome"}}
      ]
    }
  ]
}
```

### Level-Einstellungen

| Feld | Beschreibung |
|------|-------------|
| `map` | Kartendateipfad (relativ zum Kampagnenordner) |
| `title` | Level-Titel |
| `intro` | Einleitungstext |
| `outro` | Abschlusstext |
| `starting_gold` | Anfangsgold (0 – 10⁷) |
| `victory` | Siegbedingungstyp |
| `victory_value` | Wert der Siegbedingung (z.B. Überlebens-Tickanzahl, Ziel-Goldbetrag usw.) (0 – 10⁹) |
| `unlocked_buildings` | Whitelist verfügbarer Gebäude (schränkt die Bauoptionen des Spielers ein). Eine leere Liste erlaubt alle Gebäude; `unlock_building` ergänzt eine nicht leere Liste. |
| `victory_target` | Festungstyp für `destroy_building` (z. B. `DRAGON_NEST`); sonst ignoriert |
| `carry_over` | Was aus dem vorigen Level übernommen wird: `gold`, `adventurers`, `research`, `path` (der Burgweg und seine Spezialisierung) (jeweils true/false). Was ein Level in `carry_over` aufführt, wird aus einem anderen Level derselben Kampagne übernommen, wenn der Spieler direkt weitergeht, und in diesem Moment festgehalten; jeder neue Versuch des Levels beginnt mit diesem Stand. Ein aus der Missionsliste gestartetes Level übernimmt nichts, und was ein Level nicht aufführt (auch Forschung und Burgpfad), überdauert die Karte nicht. |
| `triggers` | Skriptereignisse: `condition` + `params`, `action` + `action_params`, optional `id`, `after` (auf diesen Auslöser warten) und `once`. Bedingungen: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Aktionen: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Ein Trigger, der kein Objekt ist oder ein Feld mit der falschen Art von Wert hat, wird weggelassen und auf der Konsole gemeldet. `chests_opened`, `enemy_killed_count` und `bounties_completed` zählen ab dem Beginn des Levels. Ein wiederholender Auslöser (`once: false`) handelt in jedem Tick, in dem seine Bedingung gilt; die Prüfung lehnt daher einen ab, der Gegner erscheinen lässt, Gold zahlt, einen Auftrag aufstellt oder ein Ereignis startet; eine Boss-Begegnung startet einmal und nie erst nach ihrer eigenen Niederlage. Eine `spawn_enemies`-Welle kann `march` (`castle` oder `road`) tragen: Sie marschiert dann auf die Burg oder den nächsten Handelsposten, statt dort umherzuziehen, wo sie erscheint. `reveal` (`x`, `y`, `radius` von 1 bis 40) zeigt dem Spieler einen Ort: Das Gelände in diesem Umkreis gilt als erkundet. `ticks_after_step` zählt seinen `value` ab dem Tick, an dem der in `after` genannte Auslöser gefeuert hat. Ein `show_message`-Parameter in der Form `i18n:<key>` wird übersetzt, bevor er in den Text eingesetzt wird; so kann eine Nachricht ein Feld oder ein Gebäude mit den Worten des Spiels benennen. |
| `id` | Fester Name des Levels für Fortschritt und `requires` (Buchstaben, Ziffern, `.`, `-`, `_`); ohne Angabe `level<n>` nach Position |
| `requires` | Level, die zuerst abgeschlossen sein müssen: eine Level-`id` dieser Kampagne oder `<Kampagnen-id>/<Level-id>` |
| `ruleset` | Nur `kingdom`, und die Angabe darf fehlen: Jedes Level läuft nach den kingdom-Regeln. Ein Level oder eine Karte mit `classic` oder ohne Angabe läuft als Königreich; ein unbekannter Name wird abgelehnt |
| `castle_level` | Die Burgstufe, mit der das Level beginnt (1–3); ohne Angabe ein Bergfried |
| `time_limit` | Ticks, die das Level dauern darf; sind sie um und es ist nicht gewonnen, ist es verloren. 0 oder weggelassen: keine Grenze |
| `advice` | Was die Besprechung rät; wie die anderen Texte kann es ein `i18n:`-Schlüssel sein |
| `side_quests` | Bis zu zwei optionale Funde auf dem Level, jeder `{"kind", "x", "y"}` mit einem kind aus `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` oder `lair` kann benennen, wer dort ist |
| `objectives` | Bis zu 8 weitere Siegbedingungen, jede `{"victory", "value", "target", "required"}` mit jedem Sieg außer `free`. Gewonnen ist das Level, wenn sein Hauptsieg (außer `free`) und alle erforderlichen erfüllt sind; optionale werden in der Zielzeile gezählt und in den Ergebnissen aufgeführt |
| `defeats` | Bis zu 4 weitere Arten zu verlieren, jede `{"kind", "value"}`: `heroes_lost`, `buildings_lost` oder `caravans_lost` erreicht den Wert seit Levelbeginn |

Die Kampagne selbst kann eine `id` (der Name, unter dem ihr Fortschritt gespeichert wird) und `"linear": false` tragen (unabhängige Herausforderungen: Ein Sieg führt nicht ins nächste Level). Sie kann außerdem `blocked_events` auflisten: Namen von Zufallsereignissen, die in ihren Levels nie ausgewürfelt werden (zum Beispiel `DRAGON_NEST`). Dazu ein `roster`: die Gegnerarten (Namen wie `GOBLIN`), die in ihren Leveln umherstreifen und einfallen; ohne Angabe sind es alle.

:::tip[Lokalisierungsunterstützung]
Kampagnentexte können `i18n:KEY`-Tags verwenden, die automatisch die entsprechende Übersetzung basierend auf der Sprache des Spielers anzeigen.
:::

---

## Die Demo-Kampagne

Die Story-Kampagne der Demo (`campaigns/demo_kingdom/`) wird über das Hauptmenü geöffnet. Wie das Tutorial schreibt sie `game/systems/demo_campaign.py`.

| Mission | Ziel | Verloren, wenn | Start |
|---|---|---|---|
| 1. Die erste Krone | Das Goblinlager östlich des Bergfrieds finden und zerstören lassen | Der Bergfried fällt | 1600 Gold und eine kurze Gebäudeliste, dazu die Ruinen einer Schmiede und eines Markts |
| 2. Schatten auf dem Handelsweg | Drei Karawanenrunden gelingen lassen und das Räuberlager zerstören | Die Burg fällt | 2400 Gold, eine Burg der Stufe 2, eine kleine Stadt und zwei gepflasterte Straßen |
| 3. Die Nacht des Knirschzahn | Häuptling Knirschzahn besiegen | Die Burg fällt | 3000 Gold, eine Burg der Stufe 2 und eine Stadt mit sechs Gebäuden |

Mission 1 beginnt neben den Ruinen einer Schmiede und eines Markts: Der Bautrupp der Krone baut sie kostenlos wieder auf, die Schmiede zuerst, und alles, was du platzierst, auch deine erste Gilde, wartet dahinter, es sei denn, du markierst es als vorrangig. In Mission 1 führen Nachrichten von der ersten Gilde zum ersten Helden, zum Markt und zum Steuereintreiber. Nach etwa 48 Sekunden setzt die Krone auf eigene Kosten einen Erkundungsauftrag nahe dem Lager aus; sobald ein Held ihn erledigt hat, wirst du gebeten, einen Auftrag „Töten“ auf das Lager zu setzen. In Mission 2 lässt die Krone beide Plätze für den Handelsposten erkunden, Räuber überfallen die Südstraße einmal (20 Sekunden vorher angekündigt), und das erste verlorene Gebäude bringt 400 Gold Hilfe. In Mission 3 kommt bei Tick 1000 ein Überfall über die Oststraße und bei Tick 2500 einer über die Nordstraße und Häuptling Knirschzahn bei Tick 4300, jeweils 100 Ticks vorher angekündigt; seine Festung zu schleifen ist eine Expedition, die sich wegen der Beute lohnt, aber nur seine Niederlage gewinnt. Mission 1 und 2 haben eine Baumeistergilde für Reparaturen in der Bauliste; in Mission 3 kann die Burg, schon auf Stufe 2, sofort ihren Weg wählen, und eine geschleifte Festung schickt keine eigenen Überfälle mehr. Missionen 2 und 3 behalten die Forschung der vorigen Mission, wenn du direkt weitergehst; jeder neue Versuch beginnt wie der erste, und eine aus der Liste gewählte Mission beginnt ohne sie.

Die Herausforderungen (`campaigns/demo_challenges/`, `"linear": false`) werden auf dieselbe Weise geschrieben. *Dünnes Gold* öffnet sich nach Mission 2: 600 Gold, eine Burg der Stufe 2, eine kleine Stadt mit einem Handelsposten an der Südstraße und 15 Minuten (`time_limit`), um ein Goblinlager und ein Räuberlager zu zerstören, das die Straße überfällt; zweimal versuchen es Räuber an der Straße, bevor die eigenen Überfälle des Lagers beginnen. *Halte die Straße* öffnet sich nach Mission 3: Der Handelsposten ist bereits eröffnet, Räuber kommen alle 500 Ticks über die Südstraße, jedes Mal etwas stärker, und 10 Karawanenrunden müssen in 14 Minuten 20 Sekunden gelingen. Ein freies Königreich (das Freie Königreich der Demo oder der Sandkasten-Modus des Vollspiels) hat kein Ziel; im Startdialog kann man wählen, dass Häuptling Knirschzahn einmal kommt, 20 Minuten nach Beginn (`game/systems/free_kingdom.py`). In *Halte die Straße* zieht jeder Überfall zum Handelsposten: Ein unverteidigter Posten wird zerstört und mit ihm verschwindet die Karawane – wer nichts tut, verliert die Herausforderung.

## Eine Königreichsmission, Schritt für Schritt

1. Wähle in Creator / Workshop **Neues Projekt**, dann **Königreichsmission** und einen neuen Ordner. Du erhältst ein spielbares Level: eine Stadt, ein Goblinlager im Osten, die Aufträge der Krone zum Erkunden, Töten und Verteidigen, zwei angekündigte Wellen und den Häuptling als benannten Boss.
2. Öffne es im Kampagneneditor. Das Levelformular enthält die Geschichte (Intro), den Rat der Besprechung, das Startgold und den Sieg; darunter die Burgstufe zu Beginn, das Zeitlimit und bis zu zwei optionale Funde mit ihren Feldern.
3. Male die Karte: Verschiebe Stadt, Unterschlupf und Straßen. Ein Ort muss von der Burg aus erreichbar sein, sonst wird beim Levelstart ausgelassen, was dort steht. Ein Gebäude in der Kartendatei kann `"ruin"` (1 bis 99) tragen: Es beginnt als Baustelle mit diesem Prozentsatz erledigter Arbeit, und der Bautrupp der Krone stellt es kostenlos fertig.
4. Öffne die Auslöser, um die Meldungen, die Aufträge der Krone (`post_bounty`), die Wellen (`spawn_enemies`) und den Zeitpunkt des Bosses (`spawn_boss`) zu ändern. Die Bedingung `enemy_building_seen` wartet, bis ein Unterschlupf in Sicht ist.
5. In `campaign.json` nennt `roster` die Monster, die über die Karte streifen, und `blocked_events` die Zufallsereignisse, die nie gewürfelt werden.
6. Prüfe: Die Prüfungen benennen eine falsche Burgstufe, ein falsches Zeitlimit, einen falschen optionalen Fund, einen falschen Eintrag der Besetzung oder ein falsches Ereignis mit seinem Feld. Spiele das Level dann aus dem Arbeitsbereich; die dort gewählte Schwierigkeit bestimmt Raubzüge, Wellen und Startgold.
7. Veröffentliche es zuerst privat und mache es öffentlich, wenn es sich so spielt, wie du es meinst.

<!-- gameplay-preparation:start -->

Helden vergleichen erreichbare Läden, Preise und die tatsächliche Bettenzahl. Nach einem Rückzug erholen sie sich vor gefährlichen Aufträgen; Expeditionsdetails zeigen Vorbereitung und erreichbare Rastplätze. Eigene Level können bis zu drei vollständige Siegpläne anbieten, wobei gemeinsame Pflichtziele weiter gelten. Klassische Level mit einer Siegbedingung gewinnen auch beim Erreichen des Ziels im letzten erlaubten Tick; alternative Siegpläne behalten den Vorrang der Niederlage.

```json
{
  "victory": "free",
  "objectives": [
    {
      "victory": "protect_building",
      "target": "trade-post"
    }
  ],
  "victory_plans": [
    {
      "id": "commerce",
      "title": "i18n:victory_kind_caravan_rounds",
      "objectives": [
        {
          "victory": "caravan_rounds",
          "value": 2
        }
      ]
    },
    {
      "id": "assault",
      "title": "i18n:victory_kind_destroy_building",
      "objectives": [
        {
          "victory": "destroy_building",
          "target": "GOBLIN_TENT"
        }
      ]
    }
  ]
}
```

```json
{"type": "TRADING_POST", "x": 100, "y": 80, "objective_id": "trade-post"}
```

Expeditionsdetails verlinken erreichbare Trankläden und Ruheplätze und zählen erlernte Heilung und Verbündetenschilde. Läden erfassen Besuche, mittlere Reisezeit und Angriffe. Ergebnisse nennen einen Hauptsiegesplan und gleichzeitige Leistungen bei einmaliger Grundabrechnung.

<!-- gameplay-preparation:end -->

## Antikes Leuchtfeuer

Auf Karten mit einem antiken Leuchtfeuer zeigt die Auswahl des entdeckten Orts Kosten, Frist und Optionen in den Details. Eine Bautruppe oder ein Baumeister muss zur Reparatur vor Ort sein; auf halbem Weg wartet die Arbeit auf Zusatzmittel oder Rückzug. Der Abschluss warnt vor entdeckten Feinden innerhalb von 20 Feldern. Zur Bergung muss ein Held die Erkundungsflagge freiwillig annehmen, ankommen und arbeiten; Schatzkammer und Arbeiter werden einmal bezahlt. Ignorieren startet keine Frist; Rückzug erstattet nur ungenutzte Mittel. Die Ruine rekrutiert nicht und verbessert keine Flaggen. Wer die Stufe verlässt, gibt angenommene Arbeit an einem Relikt auf und erhält die nicht ausgegebenen Mittel zurück, wie bei einem Rückzug; die Wirkungen eines Relikts bleiben bei seiner Karte, und nur was der Feldzug mitnimmt (Gold, Helden, Forschung), geht zur nächsten Stufe über.

## Optionale Goblin-Versorgung

Karten und Kampagnenlevel können die Fähigkeit `lair_expansion` und eine gleichnamige Liste mit höchstens vier Plänen angeben. Jeder Plan braucht `id` und `target`, das ein vorhandenes Goblinzelt über dessen eindeutige `objective_id` benennt. Ein Transporteur muss ankommen und ein lebender Arbeiter den Außenposten vor Ort bauen. Konvois, Begleiter, Verteidiger und Überfälle teilen ein endliches Budget: höchstens vier Runden und 64 neue Einheiten je Quelle. Ein verlorener Außenposten verzögert und schwächt nicht gestartete Überfälle; das zerstörte Hauptlager stoppt die Produktion, lässt Überlebende und optionale Außenposten bestehen. Außenposten erhöhen die Pflichtziele für Hauptlager nicht. Ohne Pläne gilt der alte Zeitplan. Transporteure tragen eigene Kisten und haben eigene Animationen und Klänge; sie erscheinen nur in zugewiesenen Konvois. Nach der Erkundung lässt sich ein Kopfgeld auf den beweglichen Transporteur setzen. Sein Tod vernichtet diese Ladung und verzögert die Produktion; überlebende Begleiter bleiben im Kampf. Ladung und Kopfgeld werden jeweils einmal abgerechnet; beim Abbruch gelten die üblichen Erstattungen. Außenposten zeigen eigene Baugerüste, fertige Versorgungsvordächer und Trümmer. Ein lebender Arbeiter baut den angreifbaren Standort; unfertige Bauten erzeugen keine neuen Verteidiger. Die Zerstörung verzögert nicht gestartete Angriffe und verlegt ihre Sammlung zum Hauptlager. Dessen Zerstörung stoppt die Produktion, lässt Überlebende und verwaiste Außenposten bestehen. Jede Quelle behält höchstens eine dekorative Ruine ohne Verteidiger oder zusätzliche Siegziele.

Das Formular Lagererweiterung gilt für Karten und Kampagnen: bis zu vier Goblinzelte, Schutz-, Vorbereitungs-, Liefer-, Bau-, Sammel- und Wartezeiten, Runden, gemeinsames Einheitenbudget, Begleiter und acht Sperrrechtecke je Quelle. Zeiten sind Spielsekunden in Schritten von 0,2. Übernehmen ändert den Entwurf; Abbrechen behält die Werte. Leere Kartenquellen deaktivieren die Erweiterung. Die ausdrückliche Level-Deaktivierung überschreibt die Karte; sonst erbt eine leere Levelliste deren Einstellungen. Doppelte oder fehlende Quellen und Gebiete außerhalb der Karte werden vor dem Speichern abgewiesen.

Das gemeinsame Außenpostenlimit der Karte ist von eins bis vier einstellbar. Ein Konvoi für einen neuen Standort reserviert vor Abreise einen Platz; bei voller Belegung warten andere Quellen ohne neue Einheiten oder angesammelte Überfälle. Ein lebender verwaister Außenposten belegt seinen Platz bis zur Zerstörung.

Die feindlichen Versorgungsinformationen zeigen nur beobachtete Wegpunkte und Standorte. Produktion, Gesundheit, Schatz und Verteidiger des Hauptlagers, Baustufe/Fortschritt und Konvoipositionen haben getrennte Beobachtungszeiten. Außerhalb der Sicht bleibt der letzte Wert; verborgener Bau oder Abriss ändert das bekannte Bild nicht. Erneute Erkundung aktualisiert es. Wege speichern höchstens sechzehn beobachtete Punkte. Hinweise bleiben nach Laden einmalig; das Briefing erklärt die vier Strategien gegen ein endliches Budget.

Im freien Spiel ist eine endliche Goblinzelt-Erweiterung optional und zunächst ausgeschaltet. Gemischte oder Goblin-Spiele reservieren einen der gewählten Lagerplätze für ein Zelt und binden höchstens vier vorhandene Zelte ein; die Gesamtzahl bleibt gleich. Andere Völker erhalten keine künstliche Quelle. Kampagnen nutzen die Einstellungen des Autors.

Gerüst, Depot und Ruine haben eigene Silhouetten und bewegten Stoff; reduzierte Bewegung hält ihn still. Der Kurier hämmert nur bei tatsächlichem Baufortschritt. Sichtung von Konvoi, Baustelle, Fertigstellung und Ruine hat eigene Symbole und Töne. Verborgene Änderungen und Laden wiederholen keine Meldung. Kleine Autorenformulare und Informationen sind scrollbar, das Informationsfeld auch per Tastatur.

Transportboten warten, bis bewegliche Einheiten die Fläche eines neuen Außenpostens verlassen; die Lieferfrist verlängert sich dadurch nicht. Boten und Begleiter halten außerhalb der geplanten Fläche.

Nach der Bergung an einem alten Signalfeuer bauen Bautrupps es nicht kostenlos wieder auf; Bergung und Reparatur schließen einander aus.

Dies sind die Standardbedingungen für Gruft und Station. Ein entdeckter Ort zeigt seine tatsächlichen Autorenkosten, die verbleibende ursprüngliche Frist und Ergebnisse; das Spiel läuft während der Auswahl weiter.

Der optionale Abschnitt der Chronik zeigt entdeckte Relikte, den gewählten Zweig, Fortschritt, Hindernisse, die verbleibende ursprüngliche Frist und tatsächliche Ergebnisse. Anzeigen führt zum ursprünglichen Ort, ohne eine Wahl anzunehmen oder Gold auszugeben. Ein Relikt, das in Sicht kommt, ist eine Meldung, ebenso angenommene Arbeit, die auf halbem Weg stillsteht, scheitert oder fertig wird; ein Rückzug, den du wählst, steht als Zeile im Protokoll. Ein Ort zeigt, wie es um ihn steht: eine Ruine, bis Arbeit angenommen ist, Gerüst und gestapeltes Material, solange die Krone dort arbeitet, was die vollendete Wahl hinterlässt (ein brennendes oder ein abgetragenes Leuchtfeuer, ein versiegeltes oder ein geöffnetes Grab, eine wiederaufgebaute Station) oder Trümmer, wenn die Arbeit gescheitert ist. Was die Arbeit aufhält, wird genau genannt: kein Held, der sie übernimmt, der eigene Grund der Helden für ihre Ablehnung, Monster in der Nähe, andere Arbeit der Bautruppe zuerst (mit dem Platz des Ortes in der Reihenfolge) oder Wasser, Klippen oder Gebäude, die den Ort einschließen.

Optionale Reliktorte: 0 schaltet die Erzeugung aus. Bis zu zwei verschiedene Relikte auf erreichbarem freiem Boden außerhalb der sicheren Burgzone; Straßen und Wege bleiben frei. Ohne Annahme weder Zahlung noch Arbeit. Die Orte liegen 21–80 Felder von der Burg entfernt und müssen für die gewöhnliche Baukolonne erreichbar sein.

Kartenregeln und Kampagnenabschnitte teilen einen Relikteditor für höchstens zwei ursprüngliche Orte, feste Optionsauswahlen und begrenzte Kosten, Belohnungen, Arbeit und Fristen. Abbrechen erhält den Entwurf; Anwenden prüft Quellen, ohne das Spiel auszuführen. Leere Abschnittslisten erben die Karte; `relics_disabled: true` deaktiviert die Vererbung. Geleerte Relikte einer Einzelkarte verlieren beim Speichern ihre Vorlagen.

**Versiegelte Gruft**

- Siegel verstärken: Nach zusätzlicher Finanzierung werden nur 2 geplante Angriffe von Friedhof / Untotenborg unterdrückt. Wachen, gewöhnliche Gegner und andere Quellen bleiben normal. Die ursprüngliche Quelle muss bestehen.
- Forschung finanzieren: Ein zulässiger Freischaltversuch für Arkane Affinität, sonst 80 Gold bei fehlender Verfügbarkeit oder vorhandenem Wissen. Normale Magierturm- und Forschungsvoraussetzungen gelten. Halbzeitpause: zusätzlich finanzieren oder zurückziehen.
- Gruft öffnen: Ein Schatz von 240 Gold nach echter Erkundung und dem Sieg über 3 Skelettwachen. Finanzierung öffnet die Gruft; lebende Wachen bleiben nach Rückzug oder Fristablauf.

**Verlorene Station**

- Versorgung wiederaufbauen: Stellt 6 gemeinsame bezahlte Versorgungskäufe auf Stufe 1 wieder her: Heilung, Tränke oder Alchemiereagenzien zu normalen Preisen. Kein regelmäßiges Einkommen oder Ausbau. Aufbau und Rettung schließen sich aus.
- Überlebenden begleiten: Freiwillige müssen den ursprünglichen Überlebenden zum sicheren Schloss begleiten. Beitrittschance 75%, bei Finanzierung festgelegt: ein Waldläufer nur bei erlaubter Klasse und Ausrichtung sowie freiem Platz in einer fertigen Waldläuferhütte bei Ankunft. Die Schatzkammer erhält in jedem Fall 0 Gold; keine Warteliste. Rettung und Aufbau schließen sich aus.
