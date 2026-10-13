---
title: "Nemici"
---

I nemici appaiono naturalmente nelle aree selvagge della mappa, minacciando i tuoi avventurieri e il castello.

---

## Tipi di nemici

| Nemico | HP | ATK | DEF | Velocità | XP | Oro | Gittata d'attacco | Visione | Terreno di comparsa | Livello di pericolo |
|--------|-----|-----|-----|----------|-----|------|-------------------|---------|---------------------|---------------------|
| **Slime** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Foresta | 1 |
| **Goblin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Montagna | 2 |
| **Scheletro** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Montagna | 3 |
| **Zombie** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Foresta | 4 |
| **Drago** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Montagna | 5 |
| **Lupo crudele** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Foresta | 2 |
| **Bruto orchesco** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Montagna | 4 |
| **Arciere goblin** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Montagna | 3 |
| **Spettro delle sabbie** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Deserto | 3 |
| **Cultista oscuro** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Foresta | 3 |
| **Troll** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Montagna | 5 |
| **Ragno gigante** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Foresta | 2 |
| **Ratto gigante** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Prateria | 1 |
| **Bandito** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Prateria | 2 |
| **Arpia** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Prateria | 3 |
| **Picchiere** | 150 | 9 | 6 | 0.9 | 34 | 18 | 3 | 12 | Montagna | 3 |
| **Portascudo** | 220 | 7 | 10 | 0.8 | 40 | 20 | 3 | 12 | Montagna | 4 |
| **Guastatore** | 90 | 5 | 3 | 1.0 | 36 | 22 | 3 | 12 | Foresta | 4 |
| **Bestia d'assedio** | 520 | 16 | 9 | 0.5 | 110 | 55 | 3 | 12 | Montagna | 5 |
| **Sciamano goblin** | 100 | 4 | 2 | 0.8 | 26 | 15 | 3 | 12 | Foresta | 2 |
| **Sabotatore bandito** | 140 | 5 | 3 | 1.0 | 32 | 20 | 3 | 16 | Foresta | 3 |
| **Scorpione velenoso** | 130 | 6 | 5 | 0.9 | 34 | 18 | 3 | 14 | Deserto | 3 |
| **Guardiano di arenaria** | 360 | 11 | 15 | 0.5 | 82 | 42 | 3 | 14 | Deserto | 4 |
| **Trasportatore goblin** | 110 | 4 | 3 | 1.0 | 15 | 12 | 3 | 12 | — | 2 |
| **Necromante nemico** | 180 | 7 | 4 | 0.7 | 55 | 30 | 3 | 16 | Montagna | 4 |
| **Cacciatore spettrale** | 125 | 14 | 3 | 1.5 | 50 | 26 | 3 | 18 | Montagna | 4 |
| **Sputatore di veleno** | 150 | 6 | 4 | 0.65 | 48 | 28 | 8 | 16 | Palude | 4 |
| **Vincolatore di malefici** | 110 | 8 | 3 | 0.8 | 52 | 32 | 9 | 16 | Foresta | 4 |
| **Pipistrello vampiro** | 80 | 10 | 2 | 1.8 | 30 | 16 | 3 | 16 | Montagna | 3 |
| **Melma fissile** | 240 | 10 | 5 | 0.6 | 58 | 28 | 3 | 12 | Palude | 3 |

**L'armata**: quattro nemici combattono come linea e come truppa d'assedio. Il colpo di un Picchiere trattiene per un momento l'eroe che lo riceve. Un Portascudo alza ogni tanto uno scudo su di sé e sui mostri accanto. Un Guastatore piazza una carica segnata sul terreno prima di esplodere (non esplode mai se cade prima) e colpisce gli edifici tre volte più forte. Una Bestia d'assedio è lenta, dura da abbattere e colpisce gli edifici quattro volte più forte.

Il Drago, l'Arciere goblin e il Cultista oscuro scagliano proiettili (vampate di fuoco, frecce rozze e globi oscuri); gli altri colpiscono fino a 3 caselle di distanza.

Un nemico ha il suo turno una volta ogni 4 tick. La sua velocità gli dà un passo ogni 3 ÷ velocità turni, arrotondato per difetto (almeno 1), e ogni nemico cammina poi tre decimi più in fretta: quell'attesa è divisa per 1,3, la frazione passa ai passi successivi e non scende mai sotto un turno. Così c'è un passo a ogni turno da velocità 1,6 in su, circa due passi in 3 turni tra 1,1 e 1,4, circa tre in 7 tra 0,8 e 1,0, circa uno ogni 3 turni per il Troll e uno ogni 4 o 5 tra 0,5 e 0,6.

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

- **Foresta** — Slime, Zombie, Lupi crudeli, Cultisti oscuri, Ragni giganti, Guastatori
- **Montagna** — Goblin, Scheletri, Draghi, Bruti orcheschi, Arcieri goblin, Troll, Picchieri, Portascudi, Bestie d'assedio
- **Prateria** — Ratti giganti, Banditi, Arpie
- **Deserto** — Spettri delle sabbie

:::note[Draghi]
Draghi e Troll sono i nemici più pericolosi (livello di pericolo 5). Con una gittata d'attacco di 16, 550 HP e vampate di fuoco come proiettili, è meglio affrontare i Draghi con avventurieri a distanza e torri di frecce; il Troll ha più HP e attacco, ma deve avvicinarsi.
:::

---

## Meccaniche speciali del drago

- **Attacco a distanza**: Gittata d'attacco di 16, sputa vampate di fuoco
- **Alta mobilità**: Velocità di 1,4, circa due passi ogni 3 turni: veloce quanto Ratti giganti, Ragni giganti e Banditi; solo Arpie e Lupi crudeli (un passo a ogni turno) sono più veloci
- **Visione ampia**: Raggio visivo di 32 caselle, in grado di avvistare avventurieri a grande distanza
- **Evasione**: Tutti i nemici hanno un tasso base di schivata del 5%

**Pressioni**: tre minacce nascono da come è tenuto il regno, non da una tana. Ognuna è annunciata un minuto prima nella cronaca e nella panoramica, manda un branco di 3 (mai più di 6 dei suoi mostri vivi, qualunque sia la vostra forza) ed è annullata quando la sua causa è rimossa. *Sporcizia*: una città di 16 edifici senza fontana né giardino attira ratti giganti; ogni fontana o giardino risponde di 6 edifici. *I morti senza pace*: 3 eroi che giacciono morti senza tempio si levano come scheletri dove è caduto l'ultimo; un tempio, o rianimarli, li tiene a terra, e un regno sulla via dei Non morti con un Ossario li prende come guardie. *La natura selvaggia*: un edificio a più di 60 caselle dal castello senza torre di frecce né posto di guardia entro 12 attira lupi feroci; gli empori non contano, né gli accampamenti di un regno Selvaggio. Nulla preme su un regno nei suoi primi 5 minuti, né in un livello che non consente l'edificio che vi rimedia. Gli accampamenti da guerra degli orchi colpiscono ciò che si costruisce: il cantiere o il miglioramento in corso più vicino.

**Sciamano goblin** — Ogni 20s cura 18 PV a fino a quattro alleati feriti entro 4 caselle, per massimo sei volte nella vita. Elimina prima il supporto o esaurisci i rimedi.

**Sabotatore bandito** — Dà priorità agli edifici vicini e infligge alle strutture 2,5× danni normali. Reagisce agli eroi che lo intercettano; l’armatura leggera favorisce l’intercettazione.

**Scorpione velenoso** — Un colpo del pungiglione lascia veleno di 3 PV/s per 5s, senza accumulo. Antidoti e purificazione lo rimuovono; scorta gli eroi fragili nelle zone degli scorpioni.

**Guardiano di arenaria** — Lento e corazzato. A metà salute ottiene una volta nella vita uno scudo personale di 80 PV per 10s. Usa logoramento a distanza o veleno.

**Necromante nemico** — Evoca due scheletri ordinari ogni 30s quando vede un eroe ostile: quattro per vita, al massimo 32 evocati vivi nel mondo. Un anello verde di ossa segnala il lancio. Uccidi presto il fragile evocatore; gli scheletri restano e non evocano altri.

**Cacciatore spettrale** — Cacciatore da mischia rapido e fragile che insegue prima eroi visibili a distanza, di cura o comando. Intercettalo con la prima linea o rallentalo. Le guardie rispettano il raggio; lo spettro segue percorsi terrestri e non attraversa acqua.

**Rinforzi tattici nelle incursioni**: Fortezza goblin → Sciamano goblin; Accampamento dei banditi → Sabotatore bandito; Tomba delle sabbie → Scorpione velenoso, Guardiano di arenaria; Castello dei non-morti → Necromante nemico, Cacciatore spettrale.

Le incursioni della campagna seguono il suo elenco di nemici; i regni liberi usano tutte le truppe del covo.

**Sputatore di veleno** — Avvisa per 3s prima di avvelenare raggio 2 da massimo 8 caselle: 4 PV/s per 5s, ogni 18s. Uccidi il fragile sputatore prima dell’impatto, esci dall’avviso o prepara antidoti e purificazione.

**Vincolatore di malefici** — Marca raggio 2 da massimo 9 caselle, avvisa 2s e aumenta i danni subiti del 25% per 4s, ogni 20s. Non si accumula e si purifica. Dai priorità al vincolatore o sostieni il fronte.

**Pipistrello vampiro** — Rapido e fragile. Cura dalla perdita reale di PV dei colpi in mischia, massimo 4 PV per colpo e 60 per vita, mai oltre il massimo. Gli scudi negano la cura. Le ali seguono percorsi terrestri; fuoco concentrato e rallentamento aiutano.

**Melma fissile** — Alla morte si divide una volta in massimo due melme normali, ciascuna con 35% dei PV massimi e metà attacco e difesa della madre, rango incluso. Non si dividono né danno oro o XP di uccisione. Massimo 64 figli vivi nel mondo. Usa danni ad area e prepara un secondo fronte.

Eliminare un’ondata nominata richiede anche scheletri evocati e melme figlie; uccidere solo la fonte non basta.
