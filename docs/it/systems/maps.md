---
title: "Mappe e terreno"
---

La mappa di gioco è renderizzata utilizzando una proiezione isometrica 2:1 e supporta diversi tipi di terreno.

---

## Specifiche della mappa

| Proprietà | Valore |
|-----------|--------|
| Dimensione predefinita | 1000 × 1000 caselle |
| Intervallo regolabile | 250 ~ 1000 caselle |
| Dimensione casella | 256 pixel |
| Proiezione | Isometrica 2:1 (diamante) |

---

## Tipi di terreno

| Terreno | Percorribile | Costo di movimento | Altezza base | Generazione nemici |
|---------|--------------|--------------------|--------------|--------------------|
| **Prateria** | Sì | 1 | 0 | Ratto gigante, Bandito, Arpia |
| **Foresta** | Sì | 2 | 0,5 | Slime, Zombie, Lupo crudele, Ragno gigante, Cultista oscuro |
| **Montagna** | Sì | 3 | 5,0 | Goblin, Scheletro, Drago, Bruto orchesco, Arciere goblin, Troll |
| **Acqua** | No | — | -1,0 | — |
| **Città** | Sì | 1 | 0 | — |
| **Strada** | Sì | 1 | 0 | — |
| **Palude** | Sì | 3 | -0,3 | — |
| **Deserto** | Sì | 2 | 0,2 | Spettro delle sabbie |
| **Fango** | Sì | 2 | -0,1 | — |
| **Neve** | Sì | 1 | 0,2 | Ratto gigante, Bandito, Arpia |
| **Colline** | Sì | 1 | 1,6 | Ratto gigante, Bandito, Arpia |
| **Calanchi** | Sì | 2 | 0,3 | Spettro delle sabbie |
| **Prato fiorito** | Sì | 1 | 0 | Ratto gigante, Bandito, Arpia |

:::tip[Costo di movimento]
Numeri più bassi significano movimento più rapido. Strada e Città hanno il costo di movimento più basso (1), mentre Montagna e Palude hanno il più alto (3). Sfruttare bene le strade può migliorare notevolmente l'efficienza degli spostamenti degli avventurieri.
:::

---

## Nebbia di guerra

La mappa ha tre livelli di visibilità:

| Stato | Luminosità | Descrizione |
|-------|------------|-------------|
| **Inesplorato** | 0 (completamente scuro) | Mai visto da nessun avventuriero o edificio |
| **Esplorato** | 115 (grigio scuro) | Visto in precedenza ma non attualmente nel campo visivo |
| **Visibile** | 255 (completamente illuminato) | Attualmente nel campo visivo di un avventuriero o edificio |

**Che cosa viene disegnato, e dove.** Ciò che è tuo viene sempre disegnato: edifici, eroi, abitanti, esattori, carovane e bandiere delle taglie, anche su terreno che nessuno vede. Una tana o delle rovine antiche vengono disegnate non appena se ne è vista una parte, e restano disegnate. Da quel momento anche gli eroi conoscono la tana e possono attaccarla di loro iniziativa. I mostri vengono disegnati solo finché un eroe li vede. I portali di uno squarcio dimensionale vengono disegnati come anelli di luce viola non appena il loro terreno è stato visto.

### Fonti di visione

| Fonte | Raggio visivo |
|-------|---------------|
| Castello | 30 caselle |
| Avventuriero (base) | 8 caselle |
| Mago (a distanza) | 12 caselle |
| Ranger (a distanza) | 11 caselle |
| Edificio difensivo (Torre di frecce) | 16 caselle |
| Edificio normale | 7 caselle |
| Struttura roccaforte nemica | 10 caselle |

:::note[Visione degli avventurieri a distanza]
I Maghi e i Ranger vedono esattamente fin dove arriva il loro attacco (12 e 11 caselle), così i giocatori vedono i bersagli che stanno attaccando.
:::

---

## Generazione della mappa

Le mappe della modalità sandbox sono generate casualmente utilizzando l'algoritmo **Value Noise**:

1. Generazione del rumore del terreno → determinazione dei tipi di terreno
2. Generazione del rumore dell'altitudine → determinazione della variazione di elevazione
3. Posizionamento del Castello → creazione di un'area Città in un punto casuale della metà centrale della mappa
4. Distribuzione dei forzieri → max(10, 250 × W × H ÷ 1000²) forzieri sparsi per la natura selvaggia
5. Generazione delle roccaforti nemiche → posizionate lontano dal Castello

---

## Forzieri del tesoro

| Proprietà | Valore |
|-----------|--------|
| Quantità iniziale | max(10, 250 × W × H ÷ 1000²) |
| Intervallo d'oro | 20 ~ 55o |
| Posizione | Aree percorribili al di fuori delle Città |

Gli avventurieri raccolgono automaticamente i forzieri del tesoro quando ci camminano sopra. Con l'abilità di ricerca "Senso del tesoro", l'oro è aumentato del +50%. Un forziere aperto resta dov'era, col coperchio rovesciato, per due minuti di gioco, poi scompare. Non impedisce di costruire, e l'edificio che vi viene posto sopra lo toglie.
