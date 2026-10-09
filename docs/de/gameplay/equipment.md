---
title: "Ausrüstung und Läden"
---

Abenteurer kaufen automatisch Ausrüstung und Verbrauchsgüter in Läden nahe der Burg.

---

## Ausrüstungssystem

Abenteurer können Waffen und Rüstungen in der **Schmiede** kaufen:

| Ausrüstung | Effekt pro Stufe | Preisformel | Max. Stufe |
|------------|-----------------|-------------|-----------|
| **Waffe** | +3 ATK / Stufe | 100g × Stufe | 3 (erfordert Schmiede der gleichen Stufe) |
| **Rüstung** | +2 DEF / Stufe | 100g × Stufe | 3 (erfordert Schmiede der gleichen Stufe) |

:::note[Schmiede-Stufenanforderung]
Eine Stufe-1-Schmiede kann nur Stufe-1-Ausrüstung verkaufen. Um deinen Abenteurern bessere Ausrüstung zu geben, musst du die Schmiede aufwerten.
:::

### Kumulative Ausrüstungswerte

| Stufe | Waffen-ATK | Rüstungs-DEF | Waffenpreis | Rüstungspreis |
|-------|-----------|-------------|------------|--------------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Verbrauchsgüter

### Tränke

| Gegenstand | Preis | Effekt |
|------------|-------|--------|
| **Heiltrank** | 100g | Stellt 40 HP wieder her |

- Abenteurer können bis zu **3** Tränke tragen
- Automatisch in Läden aufgefüllt
- Wird verwendet, wenn HP unter 50% fallen

### Geschwindigkeitstrank

| Gegenstand | Preis | Effekt |
|------------|-------|--------|
| **Geschwindigkeitstrank** | 200g | Erhöht die Bewegungsgeschwindigkeit für 60 ticks |

Wird erst verkauft, sobald ein Markt Stufe 2 erreicht; ein Abenteurer trägt höchstens 2.

### Todesschutz

| Gegenstand | Preis | Effekt |
|------------|-------|--------|
| **Todesschutzring** | 500g | Blockiert einen tödlichen Treffer |

Wird erst verkauft, sobald ein Markt Stufe 3 erreicht.

---

## Einkaufsverhalten

Abenteurer kaufen automatisch ein, wenn sie innerhalb von 7 Feldern um einen **Markt** oder eine **Schmiede** anhalten.

Am Markt, in dieser Reihenfolge:

1. Bei Verletzung sofort vor Ort einen Heiltrank trinken
2. Einen Todesschutzring kaufen (Markt Stufe 3)
3. Mitgeführte Tränke auffüllen (bis zu 3)
4. Geschwindigkeitstränke kaufen (Markt Stufe 2, bis zu 2)

In der Schmiede kaufen sie die **nächste** Waffenstufe und die nächste Rüstungsstufe, die sie sich leisten können, eine Stufe pro Besuch, bis zur Stufe der Schmiede.

**Nur Läden verkaufen.** Burg, Gilden und Gasthäuser verkaufen nichts: Ein Held, der Ausrüstung oder Tränke braucht, geht zu einer Schmiede oder einem Markt (siehe *Das Gold des Königreichs* unten).

:::note[Steuereinnahmen]
Immer wenn Abenteurer Gold ausgeben (Ausrüstung, Tränke, Studium) oder verdienen (Tötungen, Truhen), sind **20%** des Betrags die Steuer der Schatzkammer: 30% während einer Steuererhöhung, nichts während eines Schwarzmarkts. Sie wartet in der Kasse des Gebäudes, in dem das Gold ausgegeben wurde, bis ein Steuereintreiber sie zur Burg trägt.
:::

---

## Das Gold des Königreichs

Jede Münze ist nachvollziehbar:

- **Das Geld geht an den Laden**: Helden kaufen nur am Gebäude selbst (die Burg verkauft nichts). Was sie zahlen, ist der Umsatz dieses Gebäudes, und die Schatzkammer nimmt ihren Steueranteil: 20 %, bei einer Steuererhöhung 30 %, bei einem Schwarzmarkt nichts.
- **Kassen**: Der Anteil der Schatzkammer kommt nicht von selbst an. Er wartet in der Kasse des Gebäudes, in dem das Gold ausgegeben wurde (der Anteil an der Beute eines Helden bei seiner Gilde, die regelmäßigen Einnahmen eines Marktes in dessen eigener Kasse). Eine Kasse fasst 600 Gold; was nicht hineinpasst, geht verloren, und ein Gebäude, das fällt, verliert seine Kasse.
- **Steuereintreiber**: Die Burg hat einen Steuereintreiber, der zur vollsten Kasse mit mindestens 40 Gold geht, bis zu 400 trägt und es heimbringt, wo es zu Gold der Schatzkammer wird. Er flieht vor Monstern und kämpft nie; wird er getötet, bleibt seine Last als Truhe liegen, und 300 Ticks später verlässt ein neuer Eintreiber die Burg. Die Panels der Gebäude, der Burg und des Eintreibers zeigen, was wartet und was getragen wird. Eine Burg der Stufe 2 hält zwei Eintreiber, eine der Stufe 3 drei; jeder geht zu einer eigenen Kasse. Ein Eintreiber ohne Auftrag ruht in der Burg, nicht auf der Karte, wo ihn nichts erreicht. Er tritt an der Vorderseite der Burg heraus, sobald eine Kasse den Weg lohnt, steht einen Moment an der Vorderseite jenes Gebäudes, um die Kasse zu leeren, und geht zu Hause wieder hinein; nach einer Flucht vor einem Monster bleibt er eine Weile drinnen. Die Burg hält ihre Zahl an Eintreibern und ersetzt jeden verlorenen, und ihr Feld hat eine eigene Zeile, die sagt, wo jeder gerade ist. Ein **Steueramt** (280 Gold; beliebig viele, jedes teurer als das letzte) hält einen weiteren, eigenen Steuereintreiber: Er wohnt dort, kommt an dessen Tür heraus, bringt dorthin, was er einsammelt (es ist sofort Gold der Schatzkammer), und wird dort 60 Sekunden nach seinem Verlust ersetzt.
- **Steuereinstellungen**: Im Fenster eines Gebäudes lässt sich seine Kasse aus den Runden der Eintreiber nehmen (sie läuft dann voll, der Rest geht verloren) oder der nächste freie Eintreiber bitten, sie zuerst zu leeren, so wenig darin auch ist; die Königreichsübersicht legt fest, wie voll eine Kasse sein muss, bevor ein Eintreiber hingeht (20, 40 oder 150 Gold). Eintreiber wählen ihren Weg weiterhin selbst, lassen eine Kasse mit einem Monster daneben bis später liegen und fliehen vor Gefahr. Der Tooltip der Goldanzeige und die Übersicht teilen das Gold des Königreichs in Verfügbares, Gold in Kassen, Gold bei Eintreibern und Gold in offenen Aufträgen; die Übersicht meldet auch, wenn Helden Ausrüstung oder Tränke wollen, die kein Gebäude verkauft, und das Fenster eines Gebäudes nennt seine Entfernung zur Burg. Die Übersicht legt auch fest, wie vorsichtig die Träger der Krone sind: Steuereintreiber, Karawanen und die Arbeiter des Bautrupps fliehen vor einem Monster ab 9, 6 oder 4 Feldern; vorsichtige gehen seltener verloren und bringen weniger ein. Der Tooltip der Goldanzeige nennt zusätzlich, was heimkehrende Karawanen noch einbringen und was die Helden bei sich tragen. Eine Steuerpolitik stellt beides auf einmal ein: Sicher (nur volle Kassen, Träger fliehen früh), Stetig (die üblichen Runden) oder Eifrig (auch kleine Kassen, Träger behalten die Nerven).
- **Handelsposten und Karawane**: Ein Königreich kann so viele Handelsposten bauen, wie es bezahlt, jeder teurer als der letzte, mindestens 45 Felder von der Burg auf Boden, den man von ihr aus zu Fuß erreicht. Seine Karawane, ein Packmaultier, zieht zur Burg, lädt ab und kehrt zurück; eine Runde, die die Burg erreicht hat, bringt 0,6 Gold je Feld zwischen Posten und Burg in die Kasse des Postens, sodass ein weiter entfernter Posten mehr einbringt und die Karawane länger draußen lässt. Sie geht alle 2 Ticks ein Feld, auf einer Straße jeden Tick. Ein Monster in Sicht schickt sie ans nähere Ende des Weges, bis es fort ist, eines neben ihr verletzt sie, und du erfährst, wo; eine verlorene Karawane wird nach 400 Ticks ersetzt. Er braucht eine Burg der Stufe 2.
- **Belohnungen sind Überträge**: Ein Auftrag zahlt genau, was in ihm liegt. Die Goldmultiplikatoren von Schwierigkeit und Eigenschaften gelten nur für Beute und Truhen.
- **Einmal gekauft, bis zur Grenze aufgefüllt**: Jede Ausrüstungsstufe, der Ring und jedes Studium der Bibliothek werden einmal gekauft; Tränke werden bis 3, Tempotränke bis 2 aufgefüllt.
- **Rationen**: Ein rastender Held ohne Trank und ohne Gold für einen erhält von seiner Gilde einen Trank, höchstens einmal alle 600 Ticks.
- **Läden als Dienste**: Ein Markt verkauft nach seiner eigenen Stufe (Tempotränke ab Stufe 2, den Ring ab Stufe 3), eine Schmiede fertigt Ausrüstung bis zu ihrer Stufe, eine Bibliothek lehrt ein Studium pro Stufe und ein Gasthaus beherbergt so viele Helden, wie es Zimmer hat. Ein Held geht nur zu einem Laden, der ihm etwas Neues bietet, und nimmt den nächsten; einen Laden mit einem Monster im Umkreis von 8 Feldern behandelt er, als läge er 40 Felder weiter weg. Das Panel eines Ladens zeigt, was Helden dort ausgegeben haben, wer unterwegs ist und die letzten sechs Kunden. Nichts wird bezahlt, bevor der Held am Tresen steht; ein Laden, der unterwegs fällt, voll wird oder ausgebaut wird, hinterlässt also keinen halben Handel.
- **Hauptbuch**: Das Spiel führt für jeden Geldfluss eine Summe (Aufträge, Bau, Forschung, Wiederbelebung, Diebstahl; Steuern, Handel, Rückzahlungen, Abriss, Glücksfälle; Belohnungen, Beute, Truhen, Plünderung; Ausrüstung, Vorräte, Studium, Freizeit) samt der letzten Einträge und des Umsatzes jedes Gebäudes, gespeichert mit dem Spielstand. Schatzkammer, Aufträge und Läden müssen jeweils aufgehen.
- **Königreichsübersicht**: Hinter dem Details-Panel liegt ein Reiter „Königreich“. Er zeigt die Schatzkammer, ihre Einnahmen und Ausgaben nach Art, was in den Kassen und bei den Eintreibern wartet, was Helden verdient und ausgegeben haben, Karawanenrunden und -verluste, den Umsatz jedes Ladens, die letzten Einträge des Hauptbuchs und was Aufmerksamkeit braucht (eine ausbaubare Burg, kein Eintreiber unterwegs, eine verlorene Karawane, ein Laden mit einem Monster in der Nähe, eine volle Kasse). Namen darin sind Links, die das Gebäude oder die Burg auswählen und die Karte dorthin bewegen. Unter *Gebundenes Gold* nennt sie, wo Gold ungenutzt liegt, jeweils mit einem Link zum Ort: die vollste Kasse, die die Eintreiber auslassen sollen, Kassen, die einzeln weniger halten, als ein Eintreiber holt, und die größte Belohnung, die seit zwei Minuten kein Held angenommen hat.
- **Verzeichnisse**: Ein Reiter „Verzeichnisse“ (Taste L) führt jeden Helden, jede Gilde, jede Arbeit und die Einnahmen jedes Gebäudes des Königreichs auf, je eine Zeile, mit Suchfeld. Helden lassen sich auf Untätige, solche mit Auftrag, Verwundete, solche, die ans Gehen denken, und solche ohne Gilde eingrenzen; Gilden auf solche mit freiem Platz, volle und solche mit Monstern in der Nähe; Arbeiten, in der Reihenfolge des Bautrupps der Krone, auf Gebäude im Bau, im Ausbau, beschädigte und ruhende Arbeit; Einnahmen auf Kassen mit Gold, Kassen außerhalb der Runde der Eintreiber und Läden mit Monstern in der Nähe. Ein Klick auf eine Zeile zeigt sie auf der Karte, ein Doppelklick öffnet ihre Details. Die Verzeichnisse geben keine Befehle und führen nichts vom Feind auf.
- **Kartenebenen**: Die Schaltfläche „Ebenen“ in der oberen Leiste (Taste M) legt über die Karte, was das Königreich weiß. Versorgung umringt jeden Laden, jedes Gasthaus, jeden Tempel und jede Bibliothek mit der Reichweite, in der ein Monster die Kundschaft vertreibt. Gold unterwegs schreibt, was in jeder Kasse wartet, und zeichnet den Weg jedes Eintreibers und die Straße jeder Karawane. Arbeiten nummeriert die Aufgaben des Bautrupps in seiner Reihenfolge. Bekannte Bedrohungen umringt die gesichteten Unterschlüpfe, mit einer Linie zur Burg von einem, der einen Überfall sammelt. Zauberreichweite zeigt, wo die Zauber der Krone gewirkt werden können, und das Netz der Türme des arkanen Pfads. Grün ist gut, Gelb verdient einen Blick, Rot bedeutet Ärger. Ein Unterschlupf, den niemand gesehen hat, steht auf keiner Ebene, und die eingeschalteten Ebenen werden gemerkt.
- **Einsatzbesprechung und Chronik**: Der Missionsbildschirm gibt vor dem Start eine Besprechung: die Geschichte, was gewinnt und was verliert, was gebaut werden darf und den Rat des Levels. Ein Reiter „Chronik“ bewahrt diese Besprechung und alles, was seither gemeldet wurde, das Neueste zuerst: Ratschläge des Skripts, ein gesichteter Unterschlupf, ein Auftrag, den kein Held annimmt (mit dem Grund und der Belohnung, die genügen würde), eine Karawane in Not, ein verlorener Steuereintreiber oder ein verlorenes Gebäude, ein Boss, der die Taktik ändert oder fällt. Jeder Eintrag hat seine Zeit und einen Link, der die Karte dorthin bewegt; eine Wiederholung zur selben Sache wird am Eintrag gezählt statt erneut gemeldet, und eine volle Chronik (60 Einträge) verliert den ältesten der unwichtigsten. Neue Einträge erscheinen zu zweit als Pop-ups, ohne das Spiel anzuhalten. Eine Einstellung schaltet Pop-ups für Ratschläge und kleinere Nachrichten ab: Verluste und Bosse erscheinen weiterhin, und alles wird weiterhin verzeichnet. Die Chronik lässt sich auf ein Thema beschränken (Bedrohungen, Helden, Gold oder Krone und Rat); die Wahl wird gemerkt.
- **Ergebnis**: Wenn ein Spiel endet, gewonnen oder verloren, nennt ein Ergebnisbildschirm den Grund und listet das Ziel und jeden benannten Gegner mit seinem Ausgang, angeworbene, verlorene und noch stehende Helden, Einnahmen und Ausgaben der Schatzkammer nach Art, Verluste an Karawanen und Steuereintreibern, getötete Monster, zerstörte Unterschlüpfe, Aufträge, Gebäude und die Spielzeit. Er erinnert an bis zu drei Helden: den am höchsten gestiegenen, den mit den meisten Tötungen, den besten Gefallenen. Ein gewonnenes Level wird mit drei Punkten bewertet, jeder eine schlichte Aussage mit ihren Zahlen (Ziel erreicht; höchstens einer von vier Helden verloren; kein Gebäude verloren); keiner betrifft das Tempo. Von dort: das nächste Level, dasselbe Level noch einmal, das Menü oder nach einer Niederlage ein Blick auf die Karte. Der Rückblick lässt sich als Textdatei im Ordner `recaps` neben den Einstellungen speichern. Wer die Story der Demo beendet, sieht außerdem, was jetzt offen ist und was für das vollständige Spiel geplant ist.
- **Optionale Funde**: Ein Level kann bis zu zwei lohnende Funde verbergen; keiner ist zum Sieg nötig. Ein von Monstern eingeschlossener Versorgungstrupp hält nach seiner Entdeckung sechs Minuten durch; erreicht ihn ein Held, wenn die Belagerer tot sind, kommen Vorräte im Wert von 300 Gold in die Schatzkammer. Ein Versteck hat einen Wächter, doppelt so zäh wie seine Art: Die Krone setzt einen Auftrag „Töten“ auf ihn aus, und die Truhe mit 400 Gold gehört den Helden. Ein Schatz liegt unter einem Unterschlupf, der keine Raubzüge schickt: Seine Zerstörung hinterlässt eine Truhe mit 500 Gold. Sie melden sich erst, wenn ihr Ort gesehen wurde; dann berichtet die Chronik, eine Liste „Optional“ im Reiter „Chronik“ verfolgt sie mit Links, und der Ergebnisbildschirm zeigt, wie sie ausgingen. Die drei Missionen der Demo enthalten einen, einen und zwei.
- **Schwierigkeit und Erholung**: Leicht und Schwer ändern Zahlen, nie die Lebenspunkte der Feinde: Jeder Raubzug eines Unterschlupfs hat einen Angreifer weniger oder zwei mehr, eine geskriptete Welle hat 75% oder 125% ihrer Größe, und ein Level beginnt mit 125% oder 85% seines Goldes; der Missionsbildschirm nennt die Zahlen. Die Level der Demo benennen eine Besetzung (Schleim, Riesenratte, Goblin, Goblin-Bogenschütze, Schreckenswolf, Bandit, Ork-Schläger, Troll) für das, was über ihre Karten streift, und würfeln nie die Zufallsereignisse, die eine eigene Streitmacht mitbringen, denn ihre Raubzüge werden angekündigt. Ein Königreich ohne Gilde und ohne Gold für eine neue bekommt die Differenz von der Krone, höchstens einmal alle fünf Minuten, und ein Level lässt sich jederzeit über das Esc-Menü neu starten.
- **Stadtleben, sichtbar und hörbar**: Ein kleines Symbol steigt über dem Ort auf, an dem ein Held Tränke oder Ausrüstung kauft, für ein Bett oder eine Lektion zahlt, ein Steuereintreiber eine Kasse leert oder die Steuern abliefert, eine Karawane bezahlt wird, ein Rekrut dazustößt, eine Stufe erreicht wird, ein Gebäude ausgebaut oder repariert, eine Truhe geöffnet oder etwas entdeckt wird. Jedes hat einen eigenen kurzen Klang: leiser, je weiter es vom Bildausschnitt entfernt ist, höchstens drei zugleich und nie derselbe kurz hintereinander. Ein Unterschlupf, der einen Raubzug sammelt, trägt auf der Karte einen pulsierenden roten Ring und ein Horn und auf der Minikarte einen blinkenden Rahmen, bis der Raubzug aufbricht; Horn, Kriegstrommeln und ein Boss sind von überall zu hören. Bei Soundlautstärke null sagen die Symbole weiterhin alles. Die Klänge erzeugt `tools/soundgen.py`, die Symbole rendert der Grafikgenerator; nichts ist aufgenommen oder gesampelt.
- **Helden antworten**: Wer einen Helden auswählt, hört eine kurze Antwort in der Stimme seiner Klasse und liest oben im Panel, was er sagt. Die Antwort richtet sich nach seiner Lage: schwer verletzt oder auf der Flucht nach Hause, im Kampf, unterwegs zu einem Auftrag, drinnen bei der Rast, beim Flicken einer Mauer, knapp an Vorräten oder Schlaf oder bereit, wobei jede Klasse ihren eigenen Gruß hat. Eine Antwort kommt höchstens alle 1,5 Sekunden, und die Zeile steht auch bei abgeschaltetem Ton da.
- **Jede Einheit hat eine Stimme**: Ein Monster, ein Steuereintreiber, eine Karawane und ein Dorfbewohner antworten auf einen Klick mit dem Laut ihrer Art, so wie ein Held mit seiner Stimmung antwortet, und alles, was über die Karte läuft, ist zu hören, wenn es fällt. Ein Held und die übrigen Leute der Krone (Steuereintreiber, Karawanen, die Arbeiter der Krone, die Dorfbewohner eines zerstörten Hauses) sind überall zu hören; ein Monster wird mit dem Abstand zum Bildausschnitt leiser, dieselbe Art ist höchstens alle zwei Sekunden zu hören, und höchstens zwei solche Laute überlagern sich. Kein Laut einer Einheit ist kürzer als eine Sekunde.
- **Musik**: Menü und Spiel haben je eigene Stücke in gemischter Reihenfolge: jedes kann den Anfang machen, und jedes läuft einmal, bevor sich eines wiederholt. Solange ein benannter Boss im Feld steht, spielt dessen eigene Musik, und die des Spiels kehrt zurück, wenn er fällt; auch eine gefallene Burg hat ihre Musik.
- **Auf der Karte zu sehen**: Der Wagen eines gestrandeten Versorgungstrupps, ein Rad ab und die Ladung halb abgeladen, steht an seinem Ort, sobald dieser erkundet ist, bis der Trupp erreicht oder verloren ist; ein Boss trägt über Namen und Lebensleiste ein gehörntes Schädelabzeichen. Beides sieht auf beiden Renderpfaden gleich aus. Häuptling Knirschzahn hat ein eigenes Aussehen: gehörnter Helm, roter Schild, doppelschneidige Axt und die Standarte seiner Kriegsschar auf dem Rücken.
