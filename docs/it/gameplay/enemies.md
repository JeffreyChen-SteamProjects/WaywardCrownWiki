---
title: "Nemici"
---

I nemici appaiono naturalmente nelle aree selvagge della mappa, minacciando i tuoi avventurieri e il castello.

---

## Tipi di nemici

| Nemico | HP | ATK | DEF | Velocità | XP | Oro | Gittata d'attacco | Visione | Terreno di comparsa | Livello di pericolo |
|--------|-----|-----|-----|----------|-----|------|-------------------|---------|---------------------|---------------------|
| **Slime** | 60 | 3 | 2 | 0,6 | 10 | 5 | 3 | 12 | Foresta | 1 |
| **Goblin** | 110 | 6 | 4 | 1,0 | 25 | 12 | 3 | 20 | Montagna | 2 |
| **Scheletro** | 160 | 9 | 6 | 0,9 | 40 | 20 | 3 | 22 | Montagna | 3 |
| **Zombie** | 260 | 12 | 10 | 0,6 | 60 | 30 | 3 | 16 | Foresta | 4 |
| **Drago** | 550 | 20 | 18 | 1,4 | 150 | 80 | 16 | 32 | Montagna | 5 |
| **Lupo crudele** | 90 | 8 | 3 | 1,6 | 28 | 10 | 3 | 26 | Foresta | 2 |
| **Bruto orchesco** | 320 | 15 | 12 | 0,8 | 70 | 35 | 3 | 18 | Montagna | 4 |
| **Arciere goblin** | 85 | 9 | 3 | 1,0 | 35 | 15 | 10 | 24 | Montagna | 3 |
| **Spettro delle sabbie** | 140 | 10 | 5 | 1,0 | 38 | 22 | 3 | 13 | Deserto | 3 |
| **Cultista oscuro** | 80 | 14 | 2 | 0,8 | 42 | 25 | 11 | 16 | Foresta | 3 |
| **Troll** | 620 | 22 | 12 | 0,7 | 160 | 90 | 3 | 12 | Montagna | 5 |
| **Ragno gigante** | 75 | 7 | 3 | 1,3 | 24 | 9 | 3 | 11 | Foresta | 2 |
| **Ratto gigante** | 45 | 4 | 1 | 1,4 | 12 | 4 | 3 | 10 | Prateria | 1 |
| **Bandito** | 100 | 7 | 4 | 1,1 | 26 | 16 | 3 | 12 | Prateria | 2 |
| **Arpia** | 95 | 11 | 3 | 1,8 | 36 | 18 | 3 | 14 | Prateria | 3 |

Il Drago, l'Arciere goblin e il Cultista oscuro scagliano proiettili (palle di fuoco, frecce e palle di fuoco); gli altri colpiscono fino a 3 caselle di distanza.

Un nemico fa un passo ogni 3 ÷ velocità tick, arrotondato per difetto (almeno 1): a ogni tick da velocità 1,6 in su, ogni 2 tick tra 1,1 e 1,4, ogni 3 tra 0,8 e 1,0, ogni 4 per il Troll e ogni 5 a 0,6.

### Gradi

Man mano che la tua gilda cresce (avventurieri più Mercati), alcuni mostri appaiono con un grado che moltiplica le loro statistiche e ricompense. Al massimo un quarto dei mostri vivi ha un grado, tranne durante una Rivolta dei mostri, quando ogni mostro che appare è almeno veterano.

| Grado | Da una dimensione della gilda di | Probabilità | HP | ATK | DEF | XP | Oro | Visione |
|-------|----------------------------------|-------------|----|-----|-----|----|-----|---------|
| **Veterano** | 8 | 16% | ×1,5 | ×1,25 | ×1,2 | ×1,6 | ×1,8 | +2 |
| **Élite** | 22 | 8% | ×2,5 | ×1,6 | ×1,5 | ×2,5 | ×3 | +4 |
| **Campione** | 45 | 3% | ×4,5 | ×2,2 | ×2 | ×4 | ×6 | +6 |

---

## Comportamento dei nemici

### Vagabondaggio

- I nemici vagano vicino al loro punto di comparsa
- Hanno un raggio visivo e inseguono attivamente gli avventurieri che rilevano
- A ogni tick un quarto dei nemici (a gruppi a rotazione) esegue la logica di vagabondaggio, quindi ognuno si aggiorna al massimo ogni 4 tick

### Priorità dei bersagli

I nemici attaccano i bersagli nel seguente ordine:

1. **Avventurieri pronti al combattimento** (non pacifisti)
2. **Costruttori** (avventurieri pacifisti)
3. **Torri di frecce** (edifici minacciosi)
4. **Castello**
5. **Altri edifici**

### Percorso di invasione

Quando si attiva un evento di invasione, i nemici si dirigono direttamente verso il castello del giocatore lungo il percorso più breve.

---

## Comparsa dei nemici

| Impostazione | Valore |
|-------------|--------|
| Intervallo di comparsa | 35 secondi di tempo di gioco, 1 secondo in meno per ogni avventuriero o Mercato, almeno 5 secondi (dimezzato nei livelli di campagna Difendi il Castello) |
| Conteggio massimo | `(adventurers + Markets) × 2` (regolabile nelle impostazioni di difficoltà), che si riduce fino al 25% man mano che le Roccaforti nemiche vengono rase al suolo |
| Minimo base | Almeno 6 nemici |

I nemici appaiono in base al **tipo di terreno**:

- **Foresta** — Slime, Zombie, Lupi crudeli, Cultisti oscuri, Ragni giganti
- **Montagna** — Goblin, Scheletri, Draghi, Bruti orcheschi, Arcieri goblin, Troll
- **Prateria** — Ratti giganti, Banditi, Arpie
- **Deserto** — Spettri delle sabbie

:::note[Draghi]
Draghi e Troll sono i nemici più pericolosi (livello di pericolo 5). Con una gittata d'attacco di 16, 550 HP e proiettili palle di fuoco, è meglio affrontare i Draghi con avventurieri a distanza e torri di frecce; il Troll ha più HP e attacco, ma deve avvicinarsi.
:::

---

## Meccaniche speciali del drago

- **Attacco a distanza**: Gittata d'attacco di 16, lancia proiettili palle di fuoco
- **Alta mobilità**: Velocità di 1,4, un passo ogni 2 tick: veloce quanto Ratti giganti, Ragni giganti e Banditi; solo Arpie e Lupi crudeli (un passo a ogni tick) sono più veloci
- **Visione ampia**: Raggio visivo di 32 caselle, in grado di avvistare avventurieri a grande distanza
- **Evasione**: Tutti i nemici hanno un tasso base di schivata del 5%

**Pressioni**: tre minacce nascono da come è tenuto il regno, non da una tana. Ognuna è annunciata un minuto prima nella cronaca e nella panoramica, manda un branco di 3 (mai più di 6 dei suoi mostri vivi, qualunque sia la vostra forza) ed è annullata quando la sua causa è rimossa. *Sporcizia*: una città di 16 edifici senza fontana né giardino attira ratti giganti; ogni fontana o giardino risponde di 6 edifici. *I morti senza pace*: 3 eroi che giacciono morti senza tempio si levano come scheletri dove è caduto l'ultimo; un tempio, o rianimarli, li tiene a terra, e un regno sulla via dei Non morti con un Ossario li prende come guardie. *La natura selvaggia*: un edificio a più di 60 caselle dal castello senza torre di frecce né posto di guardia entro 12 attira lupi feroci; gli empori non contano, né gli accampamenti di un regno Selvaggio. Nulla preme su un regno nei suoi primi 5 minuti, né in un livello che non consente l'edificio che vi rimedia. Gli accampamenti da guerra degli orchi colpiscono ciò che si costruisce: il cantiere o il miglioramento in corso più vicino.
