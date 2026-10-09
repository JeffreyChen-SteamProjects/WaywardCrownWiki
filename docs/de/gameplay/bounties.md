---
title: "Auftragssystem"
---

Aufträge sind dein wichtigstes Mittel, um die Aktionen der Abenteurer zu lenken. Platziere Auftragsflaggen auf der Karte und setze eine Belohnung, um Abenteurer an einen bestimmten Ort zu locken.

---

## Auftragstypen

| Typ | Standardbelohnung | Gefahr | Ruhm | Effekt |
|-----|-------------------|--------|------|--------|
| **Erkunden** | 200g | 0,2 | 0,3 | Abenteurer reisen zum Zielort und enthüllen dabei den Nebel des Krieges; die Flagge muss auf Boden stehen, den sie zu Fuß erreichen |
| **Töten** | 200g | 0,8 | 0,9 | Eliminiere ein bestimmtes Ziel (Feind oder feindliche Festung) |
| **Verteidigen** | 200g | 0,5 | 0,6 | Patrouilliere um das Zielgebäude, bis der Timer abläuft |
| **Warnung** | 50g Gebühr | — | — | Markiert eine Stelle als Sperrgebiet: wird nie angenommen oder ausgezahlt; Helden unter Stufe 8 halten sich von allem im Umkreis von 25 Feldern fern |

### Platzieren, Erhöhen und Abbrechen

- Ein Tötungsauftrag muss auf einen Feind oder eine feindliche Festung gesetzt werden, ein Verteidigungsauftrag auf eines deiner Gebäude oder die Burg
- Die Belohnung eines ausgeschriebenen Auftrags kann um +100g oder +500g erhöht werden
- Beim Abbrechen wird die Belohnung erstattet, außer bei einem Verteidigungsauftrag, dessen Wache begonnen hat

---

## Wie Abenteurer Aufträge wählen

Abenteurer berechnen die Attraktivität basierend auf ihrer **Persönlichkeit** und den **Auftragsattributen**:

```
Attractiveness = Reward × Greed
               + Fame × Glory
               - Danger × Safety
               + Exploration Bonus × Curiosity
               - Distance Penalty
               - Low HP Penalty
```

Belohnung und Entfernung werden mit der Stufe des Abenteurers skaliert, und manche Aufträge werden von vornherein abgelehnt (eine Belohnung unter Stufe × 20 Gold, eine Warnung-Markierung oder ein Auftrag in einer Warnzone für Helden unter Stufe 8). Die vollständige Formel steht auf der Seite [Abenteurer](adventurers.md).

:::tip[Praktische Tipps]
- **Waldläufer** haben hohe Neugier und eignen sich am besten für Erkundungsaufträge
- **Krieger** haben hohen Ruhm und eignen sich am besten für Tötungsaufträge
- **Wachen** nehmen nie Aufträge an: Sie patrouillieren an deinen Gebäuden und eilen zu jedem, das angegriffen wird
- Das Erhöhen der Belohnung kann zögerliche Abenteurer überzeugen, einen Auftrag anzunehmen
:::

---

## Verteidigungsauftrag-Mechanik

Verteidigungsaufträge erfordern, dass Abenteurer **kontinuierlich** in der Nähe des Ziels patrouillieren:

| Einstellung | Wert |
|-------------|------|
| Erforderliche Patrouillenzeit | 60 ticks |
| Pfad-Neuberechnungsintervall | Alle 12 ticks |

Nach der Annahme eines Verteidigungsauftrags patrouilliert der Abenteurer in der Nähe des Ziels hin und her. Sobald genügend Patrouillenzeit angesammelt wurde, ist der Auftrag abgeschlossen: Die Helden auf Posten teilen sich die Belohnung, und jeder erhält 25 XP, wenn während der Wache ein Feind in Sicht kam.

---

## Tötungsauftrag-Mechanik

Tötungsaufträge bestimmen ein **bestimmtes Ziel**:

- Kann ein bestimmter Feind sein
- Kann eine feindliche Festung sein

Sobald das Ziel eliminiert ist, wird der Auftrag automatisch abgeschlossen. Abenteurer, die den Auftrag angenommen haben, priorisieren die Reise zum Standort des Ziels.

- Die Belohnung wird gleichmäßig unter den Helden aufgeteilt, die den Auftrag haben und im Umkreis von 20 Feldern um das Ziel stehen, und jeder von ihnen erhält 30 XP; keine Eigenschaft erhöht sie
- Gegen eine feindliche Festung sammeln sich die Abenteurer zuerst etwa 22 Felder entfernt auf der Seite der Burg und greifen gemeinsam an, sobald 2–5 von ihnen (je nach Größe der Festung) eingetroffen sind, oder 120 Ticks, nachdem der erste Abenteurer das Kopfgeld angenommen hat

---

## Strategietipps

1. **Beginne früh mit Erkundungsaufträgen** — du musst den Nebel des Krieges lichten, um Feinde und Ressourcen zu finden
2. **Platziere Tötungsaufträge nahe feindlicher Festungen** — leite Abenteurer zur Zerstörung von Bedrohungen
3. **Platziere Verteidigungsaufträge nahe wichtiger Gebäude** — andere Abenteurer nehmen sie an; Wachen patrouillieren dort ohnehin
4. **Passe Belohnungen an die Abenteurerpersönlichkeit an** — du musst nicht für jeden Auftrag zu viel bezahlen

---

## Auftragsregeln

Die Belohnung liegt vom Aushang an im Auftrag:

- **Frist**: Ein Auftrag kann mit einer Frist von 1, 3 oder 5 Minuten ausgehängt werden. Läuft sie ab, fließt die unbezahlte Belohnung in die Schatzkammer zurück.
- **Rückzahlung**: Abbrechen gibt die Belohnung zurück, außer bei einem Verteidigungsauftrag, dessen Wache begonnen hat. Auch ein Auftrag, dessen Ziel fort ist und für den niemand zu bezahlen ist, gibt sie zurück. Eine Flagge entfernt man über ihr Rechtsklickmenü auf der Karte oder, sobald sie ausgewählt ist, mit der Schaltfläche in ihrem eigenen Feld; beide nennen, was zurückkommt. Sind Helden bereits zu einem abgesagten Auftrag unterwegs, geht ein Zehntel der Rückzahlung zu gleichen Teilen als Wegegeld an sie.
- **Wer bezahlt wird**: Ein Erkundungsauftrag bezahlt den Helden, der ankommt; ein Tötungsauftrag wird gleichmäßig unter den Annehmern nahe dem Tötungsort geteilt, ein Verteidigungsauftrag unter den Annehmern auf Posten. Ein toter Held wird nie bezahlt. Ein Held in der Nähe der Arbeit, der in den letzten 30 Sekunden einen anderen versorgt, beschirmt oder gedeckt hat, erhält neben ihnen einen Anteil.
- **Ansehen kostet Arbeit**: Gold wird immer gezahlt, Ansehen und Erfahrung gibt es aber nur für Gebiet, das beim Aushang unerkundet war, für eine Tötung oder für eine Wache, während der ein Feind in Sicht kam.
- **Gesellschaft**: Helden lassen einen Erkundungsauftrag liegen, den schon jemand angenommen hat, rechnen eine geteilte Belohnung als ihren Anteil und finden eine Festung weniger bedrohlich, sobald sich andere gemeldet haben.
- **Expeditionen**: Ein Tötungsauftrag auf eine Festung sammelt den Trupp zuerst an einem Sammelpunkt auf der Burgseite. Er bricht auf, sobald genug Helden da sind oder nach 120 Ticks; ein allein gebliebener Freiwilliger zieht dann nur weiter, wenn er sich die Festung allein zutraut, und gibt den Auftrag sonst auf; er nimmt einen Helden mehr als die Sammelstärke und keinen weiteren; ein Held mit zu wenig Tränken kauft erst welche, wenn er kann; und ein Trupp, der gefallen oder heimgekehrt ist, sammelt sich neu. Das Panel des Auftrags zeigt, wer versammelt ist, wie lange auf die anderen gewartet wird, und die geschätzten Chancen.
- **Gefahr**: Tötungsaufträge, Erkundungsaufträge neben einer gesichteten Festung und ein unbezahlter Marsch auf eine Festung werden gegen die Bereitschaft jedes Helden abgewogen (Angriff, Gesundheit, Tränke, Rüstung, die Helden, die den Auftrag schon haben, und wie weit die Arbeit von einem Gasthaus oder der Burg entfernt ist). Mutige Helden nehmen schlechtere Aussichten in Kauf als vorsichtige, und keine Belohnung macht gefährliche Arbeit sicherer. Ein Held, der zögert, sagt, was ihn umstimmen würde (Tränke, die er kaufen kann oder nicht bekommt, ein Gasthaus näher am Auftrag, ein weiterer Held auf dem Auftrag), und geht, sobald es da ist. Ein Held mit einem Auftrag kämpft gegen alles, was ihn erreicht, kehrt aber zum Auftrag zurück, bevor er etwas anderes verfolgt, und gibt gefährliche Arbeit auf, wenn seine Aussichten einbrechen.
- **Rettung**: Ein Rettungsauftrag wird auf einen Steuereintreiber oder eine Karawane gesetzt und folgt ihm. Die Helden, die ihn annehmen, gehen zu ihm und bleiben an seiner Seite; mit Geleit flieht er nicht mehr vor Monstern, sondern setzt seinen Weg fort, während sie kämpfen. Wurde er 20 Ticks lang unterwegs begleitet und steht er an der Burg (eine Karawane: oder an ihrem Handelsposten) ohne Monster im Umkreis von 8 Feldern, wird der Auftrag gleichmäßig an die Inhaber an seiner Seite ausgezahlt; Warten neben einem, der noch nicht aufgebrochen ist, zählt nicht. Ansehen und Erfahrung gibt es nur, wenn er verletzt war oder ein Monster in Sicht kam; geht er verloren, kehrt die Belohnung zurück. Ein Doppelklick auf einen Steuereintreiber oder eine Karawane setzt einen solchen Auftrag.
- **Aushang-Panel**: zeigt, was die Schatzkammer jetzt zahlt, und beim Zeigen auf die Karte, worauf der Auftrag zielen würde. Wo ein Klick mehreres meinen könnte (dicht stehende Monster für einen Tötungsauftrag, Träger für einen Rettungsauftrag, mehrere verwundete Helden unter dem Zeiger für einen auf einen Helden gerichteten Zauber), erscheint eine Liste, und der Auftrag oder der Zauber gilt dem gewählten Ziel.
- **Gewährte Aufträge**: Eine Karte oder Kampagne kann mit der Trigger-Aktion `post_bounty` einen Auftrag aushängen; er kostet die Schatzkammer nichts und gibt nichts zurück.
