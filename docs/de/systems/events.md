---
title: "Zufallsereignisse"
---

Das Spiel löst in regelmäßigen Abständen Zufallsereignisse aus, die dem Spielverlauf Unvorhersehbarkeit verleihen. Die Intensität der Ereignisse skaliert dynamisch mit der Anzahl deiner Abenteurer. Das eingebaute Tutorial würfelt nie ein Erdbeben und kein Ereignis, das ein neues Bauwerk auf die Karte setzt.

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
| **Verräter** | Sofort | 1 | Ein zufälliger Held verrät die Gilde und wird zum Feind! |
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
| **Elite-Mutation** | 1 | Ein zufälliger Feind mutiert zu einem mächtigen Eliteexemplar! |
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

## Bewältigungsstrategien

:::tip[Bedrohungsereignisse]
- Halte stets eine stehende Verteidigung aus Wachen und Pfeiltürmen bereit
- Während Invasionsereignissen sollte genügend Kampfkraft rund um die Burg vorhanden sein
- Sende Auftragsexpeditionen, um Drachennester und Rebellengilden so schnell wie möglich zu zerstören
:::

:::tip[Buffs nutzen]
- Während Doppelte EP sollten deine Abenteurer so viel wie möglich kämpfen, um aufzusteigen
- Während Bau-Rausch die Gelegenheit nutzen und expandieren
- Während Rekrutierungswelle sicherstellen, dass genügend Rekrutierungsgebäude vorhanden sind
:::