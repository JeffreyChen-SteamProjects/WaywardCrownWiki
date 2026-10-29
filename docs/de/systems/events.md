---
title: "Zufallsereignisse"
---

Das Spiel löst in regelmäßigen Abständen Zufallsereignisse aus, die dem Spielverlauf Unvorhersehbarkeit verleihen. Die Intensität der Ereignisse skaliert dynamisch mit der Anzahl deiner Abenteurer. Das eingebaute Tutorial würfelt nie ein Erdbeben und kein Ereignis, das ein neues Bauwerk auf die Karte setzt.

Kreditkarten zeigen einen versiegelten Brief; eine neue Einladung erklingt einmal leise mit der eingestellten Effektlautstärke. Der Reiter „Ereignisse im Königreich“ im Aufzeichnungsbereich zeigt Einladungen und offene Darlehen, ohne das Spiel anzuhalten. Darlehenskarten nennen den sofort zu zahlenden Betrag, die Frist, Rückzahlungen und den maximalen Verlust; Ablehnen oder Ignorieren ist kostenlos. Karten- und Kampagneneditoren speichern die Ereignisgruppen: Level-Einstellungen haben Vorrang vor der Kampagne und danach der Karte, und Übernehmen unterscheidet sich vom Abschalten aller Gruppen. Jede Gruppe bringt eigene Zufallsereignisse mit (siehe „Ereignisgruppen“ weiter unten); ein Level ohne Gruppe bekommt nur die üblichen Ereignisse. Kreditkarten brechen in schmalen Seitenleisten um und lassen sich bei Bedarf vertikal scrollen, sodass alle Bedingungen lesbar bleiben.

Bei einem offenen Kredit trennt die Vorschau des nächsten Levels den aktuellen Staatsschatz, die zinsfrei zurückgezahlte Summe und das voraussichtlich übertragene Gold. Es gilt die Goldregel des Ziellevels; die Vorschau zahlt nichts aus.

---

## Auslöseregeln

| Einstellung | Wert |
|-------------|------|
| Schonfrist zu Beginn | 1500 Ticks (~5 Minuten) |
| Prüfintervall | Alle 300 Ticks |
| Auslösewahrscheinlichkeit | 60% |
| Ereignis-Abklingzeit | 600 Ticks (~2 Minuten) |

---

## Bedrohungsereignisse

Diese setzen den Spieler für ihre Dauer unter Druck und erfordern eine aktive Reaktion.

| Ereignis | Dauer | Gewicht | Effekt |
|----------|-------|---------|--------|
| **Monsterinvasion** | 250 | 2 | Feinde stürmen auf die Burg zu! |
| **Seuche** | 200 | 0 | Alle Helden nehmen regelmäßig Schaden |
| **Blutmond** | 350 | 2 | Feinde werden stärker und aggressiver |
| **Untoten-Angriff** | 300 | 2 | Skelette und Zombies erscheinen nahe der Burg |
| **Goblin-Überfall** | 250 | 2 | Goblins überfallen Läden und stehlen Gold |
| **Erwachen des Drachennests** | 450 | 1 | Ein Drachennest erscheint und gebiert Drachen. Zerstöre es! |
| **Verfluchte Nacht** | 300 | 2 | Schnellere Feinde, aber doppelte Tötungs-EP |
| **Erdbeben** | Sofort | 1 | Gebäude und die Burg nehmen schweren Schaden, Straßen werden zerstört |
| **Verräter** | Sofort | 1 | Ein zufälliger Held verrät die Gilde und wird zum Feind! Der Verräter wird auf der Karte als Elite gekennzeichnet. |
| **Rebellengilde** | 400 | 2 | Eine feindliche Gilde erscheint und gebiert Feinde. Zerstöre sie! |
| **Inflation** | 350 | 1 | Trank- und Ausrüstungspreise steigen um 50% |
| **Mana-Siegel** | 250 | 1 | Magier verlieren ihre gesamte Angriffskraft |
| **Sandsturm** | 300 | 2 | Bewegungstempo und Fernkampfschaden halbiert |
| **Dichter Nebel** | 250 | 1 | Der Kriegsnebel überzieht die Karte erneut, Sichtweite reduziert |
| **Spioninfiltration** | 350 | 2 | Wellen von als Helden getarnten Feinden stürmen die Burg |
| **Ätzender Regen** | 300 | 2 | Gebäude verlieren jeden Tick HP (über den ganzen Regen etwa die Hälfte ihrer max. HP), Reparaturgeschwindigkeit halbiert |
| **Seelenfluch** | 300 | 1 | Gefallene Helden erheben sich erneut als Zombies! |
| **Ausrüstungsverfall** | Sofort | 1 | Alle Helden verlieren eine Ausrüstungsstufe |
| **Gedächtnislöschung** | Sofort | 1 | Alle Helden verlieren 2 Stufen! |
| **Desertion** | Sofort | 1 | Ein Fünftel der Helden (mindestens einer) verlässt die Gilde! |
| **Verfluchte Waffen** | 120 | 2 | Helden nehmen 30% Selbstschaden beim Angriff |
| **Herausforderung des Champions** | Sofort | 2 | Ein Champion-Monster streift durch Euer Land. Gefährlich – und lohnend |
| **Monsteraufstand** | 350 | 2 | Jedes erscheinende Monster ist mindestens ein Veteran |

---

## Buff-Ereignisse

Diese gewähren dem Spieler Vorteile oder Verstärkungen.

| Ereignis | Dauer | Gewicht | Effekt |
|----------|-------|---------|--------|
| **Schatzregen** | 150 | 1 | Bonus-Schatztruhen erscheinen über die ganze Karte verteilt |
| **Steuererhöhung** | 350 | 1 | Steuersatz auf 30% erhöht |
| **Bau-Rausch** | 300 | 1 | Baukosten halbiert, Reparaturgeschwindigkeit verdoppelt |
| **Tempelsegen** | 300 | 1 | Alle Helden heilen sich überall langsam |
| **Doppelte EP** | 350 | 1 | Sämtliche EP-Gewinne werden verdoppelt |
| **Rekrutierungswelle** | 300 | 1 | Rekrutierungstempo verdoppelt, Gebäudekapazität +1 |
| **Aufstieg des Kriegsgottes** | 300 | 1 | Alle Helden erhalten +50% ANG |
| **Eiserne Mauer** | 300 | 1 | Gebäude und Burg nehmen halben Schaden |
| **Marschbefehl** | 250 | 1 | Alle Helden bewegen sich schneller |
| **Glückssterne** | 300 | 1 | Gold- und EP-Beute von Feinden verdoppelt |
| **Schwarzmarkt** | 300 | 1 | Keine Steuereinnahmen, dafür Ausrüstungspreise um 30% gesenkt |
| **Verbündete Verstärkung** | 350 | 1 | Vorübergehend treten hochstufige Verbündete dem Kampf bei |
| **Schmiedesegen** | 300 | 1 | Die Ausrüstung aller Helden steigt um eine Stufe |
| **Heilige Barriere** | 300 | 0 | Feinde werden von der Burg fortgestoßen |
| **Geteilte Weisheit** | 300 | 1 | 30% der gewonnenen EP werden mit allen Helden geteilt |
| **Zeitverzerrung** | 300 | 1 | Alle Timer laufen doppelt so schnell — auch Feindspawns! |

---

## Sofortereignisse

Treten sofort in Kraft, ohne Dauer.

| Ereignis | Gewicht | Effekt |
|----------|---------|--------|
| **Elite-Mutation** | 1 | Ein zufälliger Feind mutiert zu einem mächtigen Eliteexemplar! Er wird auf der Karte als Elite gekennzeichnet. |
| **Verirrter Held** | 1 | Ein hochstufiger Held kommt aus der Wildnis hinzu |
| **Glücksrad** | 1 | Ein zufälliges Ereignis wird ausgelöst! |
| **Heldenerwachen** | 1 | Ein zufälliger Held erwacht dauerhaft als wahrer Held! |
| **Schatzkarte** | 1 | Enthüllt einen verborgenen Bereich und lässt wertvolle Truhen erscheinen |
| **Schicksalsverknüpfung** | 1 | Zwei zufällige Helden tauschen all ihre Werte |
| **Göttliches Arsenal** | 1 | Mehrere Helden erhalten Ausrüstung der höchsten Stufe |
| **Goldenes Zeitalter** | 1 | Erhalte Gold basierend auf der Anzahl der Gebäude |
| **Zerstreuung** | 1 | Alle Helden werden an zufällige Orte teleportiert |
| **Befestigung** | 1 | Alle Gebäude vollständig geheilt, max. HP +20% |
| **Lebensquell** | 1 | Alle Helden vollständig geheilt, max. HP +10% |
| **Werte-Roulette** | 1 | Die Werte jedes Helden werden zufällig gemischt |
| **Stufen-Shuffle** | 1 | Alle Heldenstufen werden zufällig neu verteilt |
| **Klon** | 1 | Ein zufälliger Held wird verdoppelt! |
| **Heldenempfang** | 1 | Fahrende Barden besingen Eure Gilde – ein Ansehensschub |

---

## Strukturereignisse

Erzeugen dauerhafte Kartenstrukturen.

| Ereignis | Dauer | Effekt |
|----------|-------|--------|
| **Erwachen des Drachennests** | 450 | Ein Drachennest erscheint und gebiert Drachen. Zerstöre es! |
| **Rebellengilde** | 400 | Eine feindliche Gilde erscheint und gebiert Feinde. Zerstöre sie! |
| **Antike Ruinen** | 450 | Ruinen erscheinen auf der Karte. Wer zuerst da ist, kassiert Belohnungen! |
| **Dimensionsriss** | 300 | Portale erscheinen und teleportieren Helden zufällig |

---

## Ereignisgruppen

Eine Karte, eine Kampagne oder ein Level kann im Editor jede der fünf Ereignisgruppen einschalten. Jede Gruppe fügt den üblichen Ereignissen die unten genannten hinzu, über denselben Wurf und im selben Takt, und ein Angebot, das du ablehnst oder übergehst, kostet nie etwas. Zeige im Editor auf eine Gruppe, um ihre Ereignisse zu sehen.

## Gruppe „Wirtschaft und öffentliche Dienste“

### Königliche Kreditanfrage

Ist die Gruppe „Wirtschaft und öffentliche Dienste“ an, kann ein benachbarter Königshof dich um ein Darlehen aus deiner Staatskasse bitten, aber nur, solange du mindestens 400 Gold hast. Die Summe steht fest, sobald die Anfrage eintrifft: die Hälfte deiner Staatskasse, abgerundet auf ein Vielfaches von 50, zwischen 200 und 1.000 Gold. Du hast 30 Sekunden zum Entscheiden. Verleihst du, geht das Gold sofort weg und kommt 120 Sekunden später mit 10% Zinsen zurück. Brauchst du es früher? Fordere es vorzeitig zurück, dann bekommst du 90%; mehr als ein Zehntel kannst du also nicht verlieren. Verlässt du das Level vor der Fälligkeit, bekommst du die Summe ohne Zinsen zurück. Ablehnen oder die Anfrage verfallen lassen kostet nichts, und ein laufendes Darlehen hält keine anderen Ereignisse auf. Seine Karte unter „Ereignisse im Königreich“ zeigt die genauen Beträge und die verbleibenden Sekunden.

### Ausländischer Auftrag

Ist die Gruppe „Wirtschaft und öffentliche Dienste“ an, kann ein ausländischer Käufer über deinen Markt eine Bestellung aufgeben, sofern du einen fertigen Markt hast und eine Karawane auf einer Handelsroute fährt, die an ihn angeschlossen ist. Du hast 30 Sekunden zum Annehmen. Annehmen kostet 150 Gold im Voraus. Deine Karawanen erledigen die Bestellung dann auf ihren normalen Runden: Jede beladene Fahrt, die aufbricht, nimmt eine Lieferung mit und verbraucht 50 von diesem Geld, und eine Lieferung zählt, sobald sie vollständig entladen ist. Kommen innerhalb von 180 Sekunden drei Lieferungen an, bekommst du 450 Gold. Wird eine Karawane mit einer Lieferung zerstört, fällt der Markt, geht die Route verloren oder läuft die Zeit ab, scheitert der Auftrag, und du bekommst zurück, was noch nicht ausgegeben ist. Zu denselben Bedingungen kannst du jederzeit abbrechen. Ablehnen ist kostenlos, und deine üblichen Karawaneneinnahmen und Steuern laufen weiter wie bisher. Seine Karte unter „Ereignisse im Königreich“ zeigt den Markt, die Route und wie viele Lieferungen losgeschickt und angekommen sind.

### Wanderklinik

Ist die Gruppe „Wirtschaft und öffentliche Dienste“ an, kann eine Wanderklinik anbieten, sich bei einem deiner Dorfhäuser niederzulassen, solange du einen verwundeten Helden hast, der sie erreichen kann. Du hast 30 Sekunden zum Wählen. Förderst du sie für 120 Gold, zahlt die Krone sechs Behandlungen; danach zahlen die Helden selbst. Oder du lässt sie mit Selbstzahlung öffnen, was dich nichts kostet: Jeder Held zahlt 20 Gold aus seinem eigenen Beutel. Sie behandelt zwei Helden auf einmal. Verletzte Helden gehen von selbst hin, wenn sie nichts anderes festhält (ein Kampf, eine Flagge, eine Nacht im Gasthaus), und jede Behandlung dauert 5 Sekunden und stellt bis zu 60 LP wieder her. Wer während der Behandlung getroffen wird oder geht, bekommt die Gebühr zurück. Die Klinik nimmt 180 Sekunden lang Patienten auf und hat danach bis zu 10 Sekunden zum Abschließen; übrig gebliebenes Geld der Krone kommt zurück. Ablehnen ist kostenlos. Ihre Karte unter „Ereignisse im Königreich“ listet die Patienten auf, und „Zeigen“ bringt dich hin, sobald du den Ort gesehen hast.

### Erntemarkt

Ist die Gruppe „Wirtschaft und öffentliche Dienste“ an, kann ein Erntemarkt zu einem deiner Dorfhäuser kommen. Du erfährst es 20 Sekunden vorher, und er bleibt 120 Sekunden offen. Schicken musst du niemanden: Verletzte Helden, Helden mit zu wenig Tränken oder mit Lust auf einen freien Abend gehen von selbst hin, solange sie nichts anderes festhält (ein Kampf, eine Flagge, eine Gruppe, auf die sie warten). Bedient werden vier auf einmal. Jeder Gast ruht sich 5 Sekunden aus, bekommt 40 LP gratis zurück, kauft fehlende Tränke zum üblichen Preis (der Markt bringt für seine ganze Zeit 24 mit) und bezahlt einen freien Abend, wenn er will. Wer früher geht, zahlt nichts. Solange der Markt offen ist, kannst du ihn einmal für 150 Gold 60 Sekunden länger offen halten; Tränke kommen nicht nach. Seine Karte unter „Ereignisse im Königreich“ zeigt, wann er öffnet und schließt, wer an den Ständen steht und wie viele Tränke übrig sind, und „Zeigen“ bringt dich hin, sobald du den Ort gesehen hast.

## Gruppe „Abenteurergeschichten“

### Besuchende Konkurrenzgilde

Ist die Gruppe „Abenteurergeschichten“ an, kann eine kleine Gilde aus dem Ausland fragen, ob sie am Kartenrand, mehr als 60 Felder von deiner Burg entfernt, ein Lager aufschlagen und sich an eine erkundete Truhe oder einen feindlichen Unterschlupf machen darf, der kein Missionsziel ist und auf dem kein Auftrag von dir liegt. Du hast 30 Sekunden für die Antwort. Es kommen drei Helden der Stufe 1, ein Krieger, ein Waldläufer und ein Magier, mit einem Budget von 600 Gold, aus dem sie schon bezahlt sind; sie werben nie weitere an und bleiben 240 Sekunden. „Unabhängige Einreise“ ist kostenlos, und sie behalten, was sie erbeuten. „Kooperieren“ kostet 150 Gold, die an ihre Gilde gehen und nie erstattet werden: Die Beute dieses Ziels wird dann nach Arbeit geteilt, ein Punkt für jeden LP, der dem Ziel oder seinen Wachen abgenommen wird, und für jede erbeutete Münze, und der Anteil deiner Helden geht in deine Staatskasse. „Ablehnen“ hält sie draußen; schweigst du, kommen sie unabhängig herein. Ist ihre Zeit um, fällt ihr Lager oder werden sie feindlich, gehen sie zur Grenze zurück. Die Karte unter „Ereignisse im Königreich“ zeigt die Anteile.

### Ein alter Freund

Ist die Gruppe „Abenteurergeschichten“ an, kann einer deiner Helden fragen, ob er einen alten Freund derselben Klasse holen darf, um gemeinsam einen erkundeten feindlichen Unterschlupf anzugehen, der kein Missionsziel ist und auf dem kein Auftrag liegt. Du hast 30 Sekunden für die Antwort. „Fördern“ hält 200 Gold für die Aufgabe zurück. Der Freund kommt an der Grenze herein und geht dorthin, wo dein Held stand; sobald die beiden sich treffen, kommt auf den Unterschlupf ein Auftrag „Töten“ über 200 Gold, den nur die beiden annehmen können. Ab deiner Zahlung haben sie 180 Sekunden und entscheiden selbst, ob sie losziehen. Fällt der Unterschlupf, wird jeder aus den 200 bezahlt, für Schaden an Mauern und Wachen und für Heilung, die dem anderen wirklich geholfen hat; haben sich beide einen Anteil verdient, bekommt deine Staatskasse 100. Danach kannst du den Freund 30 Sekunden lang zum Beitritt einladen, wenn eine Gilde seiner Klasse Platz hat; sonst geht er nach Hause. Nicht ausgezahltes Geld kommt zurück, wenn er geht oder beitritt. Ablehnen kostet nichts. Die Karte findest du unter „Ereignisse im Königreich“.

### Lehrlinge zu Besuch

Ist die Gruppe „Abenteurergeschichten“ an, kann ein Held ab Stufe 4 gebeten werden, zwei Lehrlinge aufzunehmen, wenn in der Burg oder einem Gasthaus zwei Betten frei sind und zwei erkundete Truhen höchstens 24 Felder von ihm, dem Mentor, entfernt liegen. Du hast 30 Sekunden für die Antwort. Zahlst du 100 Gold für die Unterkunft, die du zurückbekommst, falls nie ein Lehrling das Bett erreicht, kommen zwei Lehrlinge der Stufe 1 aus der Klasse des Mentors von der Grenze herein. Während der 180 Sekunden langen Probezeit suchen sie sich ihre Arbeit selbst: Jede dieser Truhen gibt dem, der sie öffnet, 15 EP und ihren Inhalt. Neben dem Mentor zu stehen bringt nichts bei, und der Mentor macht weiter wie gewohnt. Endet die Probezeit, hast du 30 Sekunden, um mit „Geeignete Lehrlinge aufnehmen“ diejenigen aufzunehmen, die eine Truhe geöffnet haben, noch bleiben wollen und in einer Gilde ihrer Klasse Platz finden. Alle anderen gehen zu Fuß nach Hause, früher, wenn der Mentor stirbt oder die Unterkunft verloren geht. Ablehnen oder Ignorieren kostet nichts. Die Karte unter „Ereignisse im Königreich“ zeigt Aufgaben und EP jedes Lehrlings.

### Heimatbesuch

Ist die Gruppe „Abenteurergeschichten“ an, kann ein Held, der in deinem Königreich ein Zuhause hat, darum bitten, seine Familie zu besuchen, sofern mindestens vier Helden ein Zuhause haben und höchstens ein Viertel gleichzeitig fort ist. Du hast 30 Sekunden für die Antwort. „Besuch erlauben“ kündigt die Reise 20 Sekunden vorher an, danach hat der Held bis zu 180 Sekunden, um zur Grenze zu gehen; Kämpfe, Flaggen und Heilung gehen vor, und unter 80% Gesundheit bricht er nicht auf. Schafft er es nicht hinaus, wird der Besuch kostenlos abgesagt. Er ist 120 Sekunden fort, behält Ausrüstung und Gold, verdient aber nichts und steigt nicht auf, und kommt über denselben oder einen anderen sicheren Übergang zurück. „150 Gold fürs Bleiben anbieten“ geht einmal; das Gold landet nur in seinem Beutel, wenn er zustimmt, und lehnt er ab, wird nichts berechnet, und du kannst immer noch erlauben oder ablehnen. Ablehnen oder nicht antworten hält ihn kostenlos zu Hause. Die Karte unter „Ereignisse im Königreich“ begleitet ihn, solange er fort ist.

### Abenteurerturnier

Ist die Gruppe „Abenteurergeschichten“ an, können zwei bis vier deiner Helden (frei, mit mindestens 75% Gesundheit und scharf auf den Preis) anbieten, auf einer erkundeten Lichtung neben einem Dorfhaus ein Turnier abzuhalten. Du hast 30 Sekunden für die Antwort. „Fördern“ kostet 300 Gold: 100 für den Austragungsort, die einbehalten werden, und 200, die für Preise zurückgelegt werden. In den 30 Sekunden nach deiner Zahlung melden sie sich paarweise an, für höchstens zwei Kämpfe, und gehen hin; das ganze Turnier hat 120 Sekunden. Jeder Kampf dauert 30 Sekunden. Seine Schläge bringen niemanden unter 1 LP und geben keine Kampf-EP: Wer den Gegner auf 1 LP bringt, gewinnt, sonst gewinnt, wer mehr Gesundheit übrig hat, und bei Gleichstand ist es unentschieden. Jeder Sieger bekommt am Ende 100 Gold in seinen eigenen Beutel, und Preisgeld, das niemand gewonnen hat, kommt an dich zurück. Hat sich nach diesen 30 Sekunden niemand angemeldet, kommen die 200 Gold gleich an dich zurück; ein Monster nahe der Lichtung hält die Anmeldung vorher nur auf. Ein echter Angriff von außen beendet das Turnier sofort. Ablehnen kostet nichts. Die Karte unter „Ereignisse im Königreich“ listet die Kämpfe und das Geld auf.

### Auftrag des Barden

Ist die Gruppe „Abenteurergeschichten“ an, kann ein Barde anbieten, ein Lied über eine Tat von bis zu drei Helden zu dichten, die auf der Karte genannt werden: die Zerstörung eines feindlichen Bauwerks, das du erkundet hast und dem einer von ihnen Schaden zufügen muss; eine Karawane auf einer laufenden Handelsroute, die nach deiner Zusage aufbricht und vollständig entladen wird; oder ein Auftrag „Retten“, bei dem einer von ihnen neue Geleitarbeit leistet und dabei ist, wenn er ausgezahlt wird. Du hast 30 Sekunden für die Antwort. „Auftrag finanzieren“ kostet 150 Gold, die sofort ausgegeben und nie erstattet werden, und öffnet ein Zeitfenster von 180 Sekunden. Niemand bekommt Befehle: Helden wählen ihre Arbeit selbst, und ein Belagerungsauftrag kostet extra. Wird die Tat vollbracht und lebt jeder genannte Held, steigt dein Ansehen einmalig um 10, und das Lied kommt mit ihren Namen in deine Chronik. Stirbt einer, geht das Ziel verloren oder läuft die Zeit ab, gibt es kein Ansehen. „Auftrag zurückziehen“ beendet das Ganze früher, ebenfalls ohne Erstattung. Ablehnen kostet nichts. Die Karte findest du unter „Ereignisse im Königreich“.

## Gruppe „Grenzangelegenheiten“

### Monsterwanderung

Ist die Gruppe „Grenzangelegenheiten“ an, kann eine Herde von acht Schattenwölfen eine Ecke deiner Karte durchqueren, an einem Rand herein und am nächsten wieder hinaus, weit weg von deiner Burg, deinen Städten und Gebäuden. Das ist eine natürliche Veränderung: Es gibt nichts anzunehmen oder abzulehnen. Du erfährst es 30 Sekunden vorher; dann hat die Herde 180 Sekunden, um durchzuziehen. Die Wölfe sind nicht feindlich: Sie lassen deine Burg in Ruhe, deine Türme schießen nicht auf sie, und deine Helden lassen sie vorbei. Willst du sie jagen, setze einen Auftrag „Töten“ auf einen sichtbaren Wolf. Nur die Helden, die ihn annehmen, dürfen zuerst zuschlagen, und jeder Wolf lässt höchstens 20 Gold fallen. Ein getroffener Wolf ruft seine Herde im Umkreis von 12 Feldern herbei. Versperrt etwas den Weg, wartet die Herde 20 Sekunden und sucht sich eine andere Route, höchstens zweimal. Ist die Zeit um, gehen die Wölfe den Weg zurück, den sie gekommen sind; eine Herde, die etwa 390 Sekunden nach der Vorwarnung noch eingeschlossen ist, bleibt als gewöhnliche Schattenwölfe in der Wildnis. Nicht ausgezahlte Aufträge werden erstattet, sobald sie fort sind. Die Karte unter „Ereignisse im Königreich“ zeigt die Route und die Wölfe, die du sehen kannst.

### Revierstreit

Ist die Gruppe „Grenzangelegenheiten“ an, können zwei rivalisierende Unterschlüpfe verschiedener Art um das Gelände zwischen sich kämpfen, außerhalb der 60 Felder um deine Burg. Das ist eine natürliche Veränderung: Es gibt nichts anzunehmen. Du erfährst es 30 Sekunden vorher; dann schickt jeder Unterschlupf sechs seiner Monster zu einem markierten Ort. Das sind keine zusätzlichen Monster: Die sechs jedes Unterschlupfs fehlen bei seinem nächsten Raubzug, und niemand ersetzt die Gefallenen. Der Kampf dauert bis zu 180 Sekunden. Er endet früher, wenn einer Seite die Kämpfer ausgehen, ein Unterschlupf fällt oder der Weg versperrt ist. Danach haben die Überlebenden bis zu 120 Sekunden, um heimzukehren, und bewachen dann wieder ihren Unterschlupf. Bringen sich Monster gegenseitig um, bekommst du nichts dafür, und Abwarten bringt keine Belohnung. Du kannst trotzdem gewöhnliche Aufträge setzen, um einen Unterschlupf anzugreifen oder deine Straßen zu schützen. Die Karte unter „Ereignisse im Königreich“ zählt die Kämpfer, die du auf jeder Seite sehen kannst, und ihre Schaltflächen zeigen beide Unterschlüpfe, den Streitort und die Kämpfer, sobald du sie gesehen hast.

### Entflohene Gefangene

Ist die Gruppe „Grenzangelegenheiten“ an, können zwei entflohene Gefangene den Rand deiner Karte erreichen und um Schutz bitten, vier Verfolger auf den Fersen. Du hast 30 Sekunden für die Antwort. Sie aufzunehmen kostet 200 Gold: zwei Aufträge „Retten“ über je 100 Gold, einer auf jedem Gefangenen. Helden nehmen die Aufträge von selbst an und geleiten die Gefangenen innerhalb von 150 Sekunden zu deinem Gasthaus oder deiner Burg, wo zwei Betten frei sein müssen. Jeder Gefangene, der sicher ankommt, bekommt ein Bett, und wie jeder Auftrag bringt das 5 Ansehen, wenn das Geleit echte Arbeit zu leisten hatte. Ein Gefangener, der ohne Geleit vor einer Gefahr davonläuft, zählt nicht. Endet die Geleitzeit, können gerettete Gefangene, die wollen, einen freien Platz in deinen Gilden einnehmen: Du hast 30 Sekunden, um sie einzuladen oder ziehen zu lassen. Alle anderen gehen wieder hinaus zur Grenze. Nicht verbrauchtes Auftragsgeld kommt zurück, abzüglich der üblichen Stornogebühr. Ablehnen oder Abwarten kostet nichts und schickt keine Verfolger. Die Karte unter „Ereignisse im Königreich“ verfolgt jeden Gefangenen.

### Feindlicher Deserteur

Ist die Gruppe „Grenzangelegenheiten“ an, kann ein Plünderer aus einer rivalisierenden Gilde, die dir feindlich gesinnt ist, um Asyl bitten. Du hast 30 Sekunden für die Antwort. Gewährst du es, werden 100 Gold zurückgelegt, die nur ausgegeben werden, wenn der Deserteur ein freies Bett in deinem Gasthaus oder deiner Burg erreicht, während ihn bis zu zwei alte Gildenkameraden jagen. Der Schutz dauert 120 Sekunden. Mit deinem Ja bekommst du außerdem einen Bericht darüber, wo das Lager seiner Gilde steht. Er veraltet nach 120 Sekunden oder sobald das Lager weg ist und hebt den Nebel nicht auf. Endet der Schutz, kannst du einen zufriedenen Deserteur, der auf einen freien Platz in einer deiner Gilden passt, zum Beitritt einladen; er behält seine Ausrüstung. Du hast 30 Sekunden, um ihn einzuladen oder gehen zu lassen. Sonst zieht er zu seinem Ausgang ab, und nicht ausgegebenes Gold kommt zurück. Ablehnen kostet nichts und zieht keine Rache nach sich. Die Karte unter „Ereignisse im Königreich“ zeigt das zurückgelegte und das ausgegebene Gold sowie den Bericht.

### Bestien bauen ein Nest

Ist die Gruppe „Grenzangelegenheiten“ an, kann ein Wolfsrudel versuchen, sich auf offenem, wildem Gelände gleich jenseits der 60 Felder um deine Burg niederzulassen. Das ist eine natürliche Veränderung: Es gibt nichts anzunehmen. Du erfährst es 30 Sekunden vorher; dann kommen zwei Wölfe. Frühestens 30 Sekunden später kommen drei weitere, wenn noch einer am Platz ist, und beginnen, einen Bau zu graben. Das Graben braucht 40 Sekunden Arbeit eines Wolfs, der ruhig in der Nähe steht, also hält Kämpfen es auf. Töte das Rudel, und es ist vorbei: nie mehr als fünf Wölfe und ein Bau, und die Toten werden nicht ersetzt. Jeder Wolf lässt höchstens 20 Gold fallen, und ein fertiger Bau enthält 20, insgesamt 120 Gold. Lässt du sie in Ruhe, wird der Bau fertig, schickt aber nie weitere Wölfe aus; du kannst ihn angreifen wie jeden Unterschlupf. Alles endet 280 Sekunden nach der Warnung, und ein halb gegrabener Bau verschwindet. Wird der Platz besetzt, zieht das Rudel weiter, höchstens zweimal. Die Karte unter „Ereignisse im Königreich“ zeigt die Phase, den Grabfortschritt und die verbleibende Zeit.

### Duellgesandter

Ist die Gruppe „Grenzangelegenheiten“ an, kann ein gesunder Held aus einer rivalisierenden Gilde, die dir feindlich gesinnt ist, unter Waffenruhe kommen und einen deiner Helden herausfordern, an einem Ort neben einem deiner Dorfhäuser. Du hast 30 Sekunden für die Antwort. Fördern kostet 100 Gold, die als Preis zurückgelegt werden. Danach kann sich innerhalb von 30 Sekunden einer deiner freien Helden melden. Du wählst nicht aus: Jeder Held wägt Preis und Ruhm gegen Stufe und Ausrüstung des Gesandten ab. Es gibt einen Kampf von bis zu 30 Sekunden, und niemand stirbt. Der Schaden hört bei 1 LP auf, und wer den anderen dorthin bringt, gewinnt. Sonst gewinnt bei Ablauf der Zeit, wer gesünder ist. Der Sieger bekommt die 100 Gold, egal auf welcher Seite er steht. Meldet sich niemand, endet der Kampf unentschieden oder unterbricht ihn ein Angriff von außen, kommt das Gold zurück. Der Kampf bringt keine Kampferfahrung. Danach geht der Gesandte nach Hause. Ablehnen kostet nichts und löst keinen Krieg aus. Die Karte unter „Ereignisse im Königreich“ zeigt den Herausforderer, den Kampf und das Geld.

## Gruppe „Erkundung und Umwelt“

### Flusshochwasser

Ist die Gruppe „Erkundung und Umwelt“ an, kann ein Fluss über ein Stück seines Ufers treten. Das ist eine natürliche Veränderung: Du bekommst 30 Sekunden Vorwarnung, und das Ufer (bis zu 12 Felder) wird auf der Karte bernsteinfarben schraffiert. Das Wasser kommt nie über jemanden. Wer dort steht, ob Held oder Monster, geht zuerst weg, und das Wasser wartet, bis das Ufer leer ist. Es bleibt bis 120 Sekunden nach der Warnung und geht dann von selbst zurück; wird das Ufer nie leer, steigt der Fluss nicht. Überflutete Felder kann niemand betreten, aber Hochwasser gibt es nur dort, wo ein Weg drumherum führt, fern von deiner Burg und deinen Gebäuden. Bevor die Warnzeit abläuft, kannst du einmal 150 Gold zahlen, um 4 dieser Felder trocken zu halten (zuerst Straßen, dann die der Burg nächsten), ohne Erstattung, auch wenn das Wasser nie steigt. Ignorierst du es, kommt und geht das Wasser einfach. Die Karte unter „Ereignisse im Königreich“ zeigt den Countdown und springt durch die Ufer- und Schutzfelder, die du gesehen hast.

### Kräuterblüte

Ist die Gruppe „Erkundung und Umwelt“ an, können wilde Kräuter in der Nähe deiner Dorfhäuser blühen. Das ist eine natürliche Veränderung: Du erfährst es 20 Sekunden vorher, und die Blüte dauert 120 Sekunden. Sie braucht einen freien Dorfbewohner und einen Helden mit Platz für Kräuter. Bis zu 12 Pflanzen sprießen, 8 bis 16 Felder von einem Dorfhaus entfernt und fern der Burg, jede ein Bündel aus 2 Kräutern (höchstens 24). Helden können sie nicht im Gelände pflücken. Untätige Dorfbewohner gehen von selbst hinaus, sammeln 5 Sekunden lang und tragen das Bündel nach Hause, wo vorbeikommende Helden die Kräuter mitnehmen. Kommt ein Monster nahe, lässt ein Dorfbewohner das Bündel fallen, wo er steht, und dort bleibt es liegen. Es gibt nichts zu zahlen oder zu wählen: Halte die Monster mit deiner üblichen Verteidigung von ihren Wegen fern. Läuft die Zeit ab, welken ungepflückte Pflanzen, aber gesammelte Kräuter bleiben. Die Karte unter „Ereignisse im Königreich“ listet die Stellen auf, die du gesehen hast, und wie viel hereingekommen ist, und „Zeigen“ springt von einer zur nächsten.

### Heilquelle

Ist die Gruppe „Erkundung und Umwelt“ an, kann in der Wildnis eine Heilquelle entspringen, während einer deiner Helden verletzt ist. Das ist eine natürliche Veränderung: Du wirst 20 Sekunden vorher gewarnt, dann fließt sie 150 Sekunden lang und reicht für 6 Anwendungen. Sie taucht 16 bis 24 Felder von einem verwundeten Helden entfernt auf, und wo, erfährst du erst, wenn ein Held auf 8 Felder herankommt; dann hörst du davon, und die Karte zeigt den Ort. Schicken musst du niemanden: Verletzte Helden gehen von selbst hin, einer nach dem anderen. Jeder ruht dort 5 Sekunden und bekommt bis zu 60 LP zurück, kostenlos. Ein Held, der getroffen wird, kämpft oder ein Monster in der Nähe hat, geht früher, ohne eine Anwendung zu verbrauchen; Helden mit voller Gesundheit gehen nicht hin. Ignorieren kostet nichts. Sie versiegt, wenn die Zeit oder die Anwendungen aufgebraucht sind. Die Karte unter „Ereignisse im Königreich“ zählt herunter und nennt, wer dort ruht, und „Zeigen“ bringt dich zur Quelle, sobald sie gefunden ist.

### Klopfen unter der Erde

Ist die Gruppe „Erkundung und Umwelt“ an, können deine Leute unter erkundetem offenem Gelände 16 bis 24 Felder von einem deiner Helden entfernt ein Klopfen hören. Du hast 30 Sekunden; Ablehnen oder Verstreichenlassen ist kostenlos. „Untersuchen“ für 100 Gold setzt dort einen Auftrag „Erkunden“: Der Held, der ihn annimmt, arbeitet dort 5 Sekunden, ohne dass ein Monster innerhalb von 6 Feldern ist, und bekommt die 100. Schließt niemand innerhalb von 120 Sekunden ab, kommen die 100 zurück. Dann sagt die Karte, was unten liegt, und du entscheidest, bevor diese 120 Sekunden um sind. Ein eingeschlossener Überlebender: Finanziere einen Auftrag „Retten“ über 100 Gold, und die Helden haben 120 Sekunden, ihn zur Burg zu bringen, für 5 Ansehen. Ein alter Durchgang: Erkunde ihn kostenlos; nach 5 Sekunden Arbeit eines Helden werden drei Felder zur Straße. Eine bewachte Kammer: Zahl 200 Gold, besiege ihre vier Skelette (keine Beute), arbeite dort 5 Sekunden, und die Staatskasse bekommt 300. Oder du versiegelst den Ort kostenlos. Abbrechen gibt Gold zurück, das noch zurückgelegt ist. Die Karte unter „Ereignisse im Königreich“ verfolgt jeden Schritt.

### Treibender Brief

Ist die Gruppe „Erkundung und Umwelt“ an, kann an einem erkundeten Flussufer nahe deiner Burg ein Brief angeschwemmt werden, der um Hilfe bittet. Du hast 30 Sekunden zum Antworten, und alles muss innerhalb von 180 Sekunden nach seiner Ankunft vorbei sein; spätes Annehmen bringt keine zusätzliche Zeit. Ablehnen oder Ignorieren ist kostenlos. Annehmen kostet 150 Gold: 50 für die Suche und 100, die für zwei Aufträge „Retten“ über je 50 Gold zurückgelegt werden. Dann muss ein Held auf 3 Felder an das Ufer herankommen, meist über einen Auftrag „Erkunden“, den du dort setzt (das kostet extra). Zwei Überlebende tauchen auf, zwei Schattenwölfe 6 Felder entfernt, und jeder Überlebende bekommt einen Auftrag „Retten“. Helden, die einen Überlebenden zur Burg bringen, werden bezahlt, und jede sichere Rückkehr bringt 5 Ansehen. Manchmal sind sie verletzt und brauchen zuerst je ein Kraut, das ein Begleiter mitgibt oder in der Nähe holt. Erreicht kein Held rechtzeitig das Ufer, kommen die 100 zurück; „Rettung zurückziehen“ gibt ebenfalls zurück, was nicht ausgegeben ist. Die Karte unter „Ereignisse im Königreich“ zeigt den Hinweis, die verbleibende Zeit und wer in Sicherheit ist.

## Gruppe „Gildengeschichten“

### Der letzte Feldzug eines Veteranen

Ist die Gruppe „Gildengeschichten“ an, kann ein Held ab Stufe 6, der bei eingeschalteter Gruppe schon geholfen hat, einen gefährlichen Gegner oder Unterschlupf zu Fall zu bringen, um einen letzten Feldzug gegen einen Unterschlupf bitten, den er erreichen kann. Du hast 30 Sekunden zum Entscheiden. Fördern kostet 250 Gold und setzt eine Flagge auf diesen Unterschlupf; andere Helden können sich anschließen und vor dem Aufbruch auf den Veteranen warten. Sie haben 180 Sekunden. Fällt der Unterschlupf rechtzeitig, überlebt der Veteran und hat selbst zugeschlagen, teilen die überlebenden Mitglieder die 250 Gold danach, wie viel vom Unterschlupf jeder niedergerissen hat, und der Rest kommt zurück. Was auch geschieht: Ein Veteran, der zusagt, setzt sich zur Ruhe, sobald er sicher in seiner Gilde zurück ist (oder dort, wo er gerade steht, wenn das Level vorher endet); ziehst du vor dem Aufbruch zurück, bekommst du dein Geld wieder, aber er geht trotzdem in den Ruhestand. Ein Veteran, der siegt und sich zur Ruhe setzt, gibt dem nächsten Rekruten seiner Gilde eine Lektion von 20 Sekunden, die 30 EP wert ist. Wer stirbt, bleibt in Erinnerung, ohne Lektion. Ablehnen, Vertagen oder Ignorieren kostet nichts, und der Held bleibt. Die Karte unter „Ereignisse im Königreich“ verfolgt jeden Schritt.

### Verlorenes Familienwappen

Ist die Gruppe „Gildengeschichten“ an, kann ein Held dich bitten, sein verlorenes Familienwappen an einem Ort in der Wildnis zu finden, den er erreichen kann. Du hast 30 Sekunden, um für 100 Gold eine Untersuchung zu finanzieren: Dort kommt eine Flagge hin, und der Held, der 5 Sekunden am Ort arbeitet, bekommt diese 100. Bevor die Uhr von 120 Sekunden abläuft, kannst du für 150 Gold die Bergung finanzieren. Vier Skelettwächter erscheinen, und 50 gehen sofort für Vorräte drauf; sind die Wächter tot, bringen weitere 5 Sekunden Arbeit das Wappen zutage und zahlen dem, der gearbeitet hat, 100. Dann trägt innerhalb von 120 Sekunden ein freier Held es zur Burg, wo sein Besitzer ihn treffen muss. Der Besitzer bekommt eine Tat für seine Geschichte, und 120 Sekunden lang schwindet sein Groll etwas schneller. Stirbt der Träger, fällt das Wappen dort zu Boden, wo er gefallen ist. Stirbt der Besitzer, kannst du zum Gedenken weitermachen, ohne Belohnung, oder abbrechen. Abbrechen oder Ablaufen der Zeit gibt nicht ausgegebenes Geld zurück; Ablehnen oder Vertagen ist kostenlos. Die Karte unter „Ereignisse im Königreich“ zeigt jeden Schritt.

### Streit um Gildenideale

Ist die Gruppe „Gildengeschichten“ an, kann sich eine Gilde über den richtigen Weg zerstreiten: Bis zu drei vorsichtige Helden wollen verteidigen, bis zu drei kühnere einen Unterschlupf angreifen. Du hast 30 Sekunden, um für 150 Gold eine Seite zu unterstützen. Unterstützt du die Verteidigung, kommt für das vorsichtige Team ein Auftrag „Verteidigen“ an die Gilde (oder an die Burg). Unterstützt du den Feldzug, kommt für das kühne Team eine Angriffsflagge auf den Unterschlupf. Nur dieses Team kann die Flagge annehmen, und sie zahlt kein Gold. Stattdessen kauft das Geld Tränke: bis zu sechs, zu je 25 Gold, die Teammitglieder mit knappem Vorrat in der Gilde abholen. Das Team hat 120 Sekunden, und ein Feldzug endet früher, wenn der Unterschlupf fällt. Echtes Kämpfen oder Heilen bringt 2 Ansehen pro Held und Gegner, insgesamt bis zu 10 Ansehen. Bloßes Wachestehen bringt nichts. Nicht verbrauchtes Geld kommt zurück. Neutral bleiben, Ablehnen oder Ignorieren kostet nichts, und die andere Seite bleibt treu. Die Karte unter „Ereignisse im Königreich“ nennt beide Teams und das Ziel.

### Lehrmeister zu Besuch

Ist die Gruppe „Gildengeschichten“ an, kann ein Meister im Ruhestand einen Besuch anbieten, wenn einer deiner Helden noch eine Klassenfähigkeit zu lernen hat. Der Lehrmeister lässt sich bei einem Dorfhaus oder direkt vor der Burg nieder. Du hast 30 Sekunden zum Wählen: drei Lektionen für 150 Gold fördern oder die Helden selbst zahlen lassen, was dich nichts kostet. Der Lehrmeister kommt von der Grenze herein, und der Unterricht läuft bis 180 Sekunden nach deiner Wahl. Helden seiner Klasse und unter seiner Stufe kommen freiwillig, zwei auf einmal, eine Lektion pro Besuch. Eine Lektion dauert 20 Sekunden und gibt feste 25 EP, die EP-Boni nicht erhöhen. Sie kostet 50 Gold aus dem Beutel des Helden, sofern deine Förderung sie nicht deckt. Ein Held, der während einer Lektion verletzt wird, bekommt den nicht genutzten Teil der Gebühr zurück und kann wiederkommen, um sie zu beenden. Fähigkeiten werden nicht gelehrt: Die bekommen Helden weiterhin kostenlos auf ihrer üblichen Stufe. Danach bekommen laufende Lektionen noch 20 Sekunden, der Lehrmeister reist ab, und nicht genutzte Förderung kommt zurück. Ablehnen ist kostenlos.

---

## Tag, Nacht und Wetter

Ein freies Spiel kann mit laufendem Tag, mit Wetter oder mit beidem begonnen werden; jedes wird einzeln angehakt, und keines ist ein Ereignis: Es gibt nichts zu beantworten.

- **Ein Tag** dauert nach Wahl 8, 12 oder 16 Spielminuten: Morgendämmerung, Tag, Abenddämmerung und Nacht. Die obere Leiste nennt den Tag, die Tageszeit und das Wetter, ihr Tooltip sagt, was als Nächstes kommt und wann. Die Vorhersage trifft immer ein.
- **Regen und Gewitter** halten jeden, der abseits der Straßen geht, Held wie Monster, höchstens jede zehnte Runde auf. Auf Straßen geht es trocken voran.
- **Nebel und Nacht** verkürzen die Sicht von Helden und Gebäuden um höchstens ein Viertel. Nahe der Burg und den Gebäuden des Reichs leuchten die Fenster, und die Nacht nimmt nichts; ein Schütze sieht nie weniger weit, als er schießt.
- **Wind** nimmt Pfeilen, Bolzen und Wurfspeeren ein Zehntel des Schadens. Zauber werden nicht verweht.
- **Ein Sandsturm oder dichter Nebel** tritt an die Stelle des Wetters, wo er dasselbe bestimmt: Beides wird nie addiert.
- **Monster haben ihre Zeiten.** Skelette, Zombies, Geister, Kultisten, Spinnen und Ratten sind am Tag träge; Goblins, Orks, Banditen, Harpyien und das Fußvolk der Legion in der Nacht. Trolle, Wölfe und der Drache kennen keine.
- **Zuletzt gesehen.** Ein Monster, das aus der Sicht deines Reichs läuft, hinterlässt ein verblassendes Fragezeichen dort, wo es zuletzt gesehen wurde. Es ist eine Markierung, nicht das Monster: Sie verschwindet, wenn es wieder gesehen oder die Stelle angesehen wird.

## Bewältigungsstrategien

:::tip[Bedrohungsereignisse]
- Halte stets eine stehende Verteidigung aus Wachen und Pfeiltürmen bereit
- Während Invasionsereignissen sollte genügend Kampfkraft rund um die Burg vorhanden sein
- Sende Auftragsexpeditionen, um Drachennester und Rebellengilden so schnell wie möglich zu zerstören
- Beide werden sofort bei ihrem Erscheinen auf der Karte markiert: Klicke eines an, um seine Lebenspunkte zu sehen, und setze einen Auftrag „Töten“ darauf aus, damit Helden es schleifen
:::

:::tip[Buffs nutzen]
- Während Doppelte EP sollten deine Abenteurer so viel wie möglich kämpfen, um aufzusteigen
- Während Bau-Rausch die Gelegenheit nutzen und expandieren
- Während Rekrutierungswelle sicherstellen, dass genügend Rekrutierungsgebäude vorhanden sind
:::