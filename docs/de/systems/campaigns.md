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
