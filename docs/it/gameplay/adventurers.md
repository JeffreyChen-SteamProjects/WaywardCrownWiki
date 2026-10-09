---
title: "Avventurieri"
---

Gli avventurieri sono il cuore del gioco. Hanno libero arbitrio e prendono decisioni in base alla loro personalità, ai bisogni e allo stato attuale.

---

## Panoramica delle classi

| Classe | Stat primaria | L'attacco scala con | Gittata d'attacco | Edificio di reclutamento | Caratteristiche |
|--------|--------------|--------------------|--------------------|--------------------------|-----------------|
| **Guerriero** | STR | Forza | 3 | Caserma | HP alti, attacco alto, combatte da vicino |
| **Mago** | INT | Intelligenza | 12 | Torre del mago | Attacchi magici a distanza, HP bassi |
| **Ranger** | AGI | Agilità | 11 | Capanna del ranger | Attacchi con arco a distanza, alta curiosità |
| **Guardia** | STR | Forza | 3 | Posto di guardia | Pattuglia gli edifici, non abbandona mai il posto |
| **Costruttore** | AGI | — | 3 | Gilda dei costruttori | Ripara gli edifici, pacifista (non combatte) |
| **Ladro** | AGI | Agilità | 3 | Gilda dei ladri | Avido ed elusivo, HP bassi |

:::note[Gittata d'attacco]
Il Ranger (frecce), il Mago (palle di fuoco), il Battistrada (giavellotti), la Guardia delle Strade (dardi di balestra) e l'Adepto (schegge di luce) attaccano con proiettili, ciascuno con il proprio. Le altre classi che combattono lo fanno in mischia: colpiscono fino a 3 caselle di distanza e infliggono danno doppio.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Tutte le classi di eroi del gioco, scritte dai suoi dati: le sei che ogni regno recluta e quelle reclutate dagli edifici propri di una via del castello.

| Classe | Via del castello | Reclutata in | Salute | Attacco | Portata d'attacco | Abilità |
|---|---|---|---|---|---|---|
| **Guerriero** | — | Caserma | 70–150 | FOR | 3 | Colpo potente, Muro di scudi, Berserker, Signore della guerra, Grido di guerra |
| **Mago** | — | Torre del mago | 25–65 | INT | 12 | Dardo infuocato, Scudo di mana, Fulmine a catena, Arcimago, Tornado di fuoco |
| **Ranger** | — | Capanna del ranger | 45–100 | AGI | 11 | Tiro preciso, Evasione, Tiro multiplo, Occhio d'aquila, Rompivento |
| **Guardia** | — | Posto di guardia | 50–120 | FOR | 3 | Vigilanza, Fortifica, Provocazione, Bastione |
| **Costruttore** | — | Gilda dei costruttori | 30–70 | — | 3 | Riparazione rapida, Rinforzo, Maestria artigiana, Architetto |
| **Ladro** | — | Gilda dei ladri | 35–80 | AGI | 3 | Pugnalata alle spalle, Evasione, Borseggiatore, Danza delle ombre |
| **Cavaliere dello Scudo** | Guardiano | Bastione | 90–170 | FOR | 3 | Vigilanza, Muro di scudi, Provocazione, Bastione, Scudo del Giuramento, Giuramento del Sostituto, Alla Riscossa |
| **Ospitaliere** | Guardiano | Santuario | 50–100 | INT | 3 | Vigilanza, Scudo di mana, Fortifica, Bastione, Preghiera Risanatrice |
| **Battistrada** | Terre selvagge | Campo selvaggio | 50–105 | AGI | 11 | Tiro preciso, Evasione, Tiro multiplo, Occhio d'aquila, Marchio del Cacciatore |
| **Custode delle Bestie** | Terre selvagge | Rifugio delle Bestie | 65–135 | FOR | 3 | Colpo potente, Evasione, Berserker, Occhio d'aquila, Assalto del Falco, Seguire la Pista, Compagno Animale, Copertura del Compagno, Soccorso alle Erbe |
| **Cavaliere Sepolcrale** | Non morto | Ossario | 95–175 | FOR | 3 | Colpo potente, Muro di scudi, Berserker, Signore della guerra, Armatura d'Ossa |
| **Negromante** | Non morto | Cripta | 40–90 | INT | 3 | Dardo infuocato, Scudo di mana, Fulmine a catena, Arcimago, Sigillo dell'Avvizzimento, Guardia d'Ossa, Debito d'Anima |
| **Maresciallo** | Ordine | Gendarmeria | 80–155 | FOR | 3 | Vigilanza, Muro di scudi, Provocazione, Signore della guerra, Blocco, Ordine di Adunata, Ronda d'Allarme |
| **Guardia delle Strade** | Ordine | Posto di Pedaggio | 55–115 | AGI | 10 | Tiro preciso, Evasione, Tiro multiplo, Occhio d'aquila, Scorta del Convoglio |
| **Giurato** | Valore | Sala della Guerra | 85–165 | FOR | 3 | Colpo potente, Evasione, Berserker, Signore della guerra, Colpo Squarciante, Assalto alle Mura, Frenesia di Sangue |
| **Alfiere** | Valore | Intendenza | 70–140 | FOR | 3 | Colpo potente, Muro di scudi, Provocazione, Signore della guerra, Ruggito Indomito |
| **Lama Arcana** | Arcano | Accademia | 60–125 | INT | 3 | Dardo infuocato, Evasione, Fulmine a catena, Arcimago, Luce Lacerante, Passo di Fase, Risposta Runica |
| **Adepto** | Arcano | Guglia | 40–88 | INT | 11 | Dardo infuocato, Scudo di mana, Fulmine a catena, Arcimago, Custodia Runica |
| **Scorta** | Commercio | Gilda Mercantile | 80–150 | FOR | 3 | Vigilanza, Muro di scudi, Provocazione, Bastione, Guardia del Carico, Marcia Forzata, Servizio di Scorta |
| **Carovaniere** | Commercio | Deposito | 55–115 | AGI | 3 | Tiro preciso, Evasione, Tiro multiplo, Occhio d'aquila, Segno di Rotta |
| **Inquisitore** | Tirannia | Tribunale | 65–130 | INT | 3 | Dardo infuocato, Scudo di mana, Provocazione, Arcimago, Marchio del Terrore, Giuramento di Ferro |
| **Esattore di Ferro** | Tirannia | Ufficio dei Tributi | 90–170 | FOR | 3 | Colpo potente, Muro di scudi, Berserker, Signore della guerra, Verdetto delle Catene |
<!-- hero-classes:end -->

---

## Statistiche dettagliate

### Guerriero

| Stat | Intervallo |
|------|-----------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Tendenze della personalità**: Gloria alta (0,5–1,0), Avidità moderata (0,2–0,8), Curiosità bassa (0,0–0,2)

**Albero delle abilità**:

| Livello | Abilità | Effetto |
|---------|---------|---------|
| 3 | Colpo potente | Attacco ×1,15 |
| 6 | Muro di scudi | Difesa +5 |
| 10 | Berserker | Attacco ×1,3, HP ×0,9 |
| 15 | Signore della guerra | Attacco ×1,5, Difesa +8 |

### Mago

| Stat | Intervallo |
|------|-----------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Tendenze della personalità**: Sicurezza alta (0,3–0,9), Curiosità moderata (0,1–0,3)

**Albero delle abilità**:

| Livello | Abilità | Effetto |
|---------|---------|---------|
| 3 | Dardo infuocato | Attacco +5 |
| 6 | Scudo di mana | Difesa +4 |
| 10 | Fulmine a catena | Attacco ×1,4 |
| 15 | Arcimago | Attacco ×1,6, Attacco +8 |

### Ranger

| Stat | Intervallo |
|------|-----------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Tendenze della personalità**: Curiosità molto alta (0,7–1,0), Sicurezza bassa (0,0–0,4)

**Albero delle abilità**:

| Livello | Abilità | Effetto |
|---------|---------|---------|
| 3 | Tiro preciso | Attacco +4 |
| 6 | Evasione | Tasso di schivata +15% |
| 10 | Tiro multiplo | Attacco ×1,35 |
| 15 | Occhio d'aquila | Attacco ×1,5, Tasso critico +20% |

### Guardia

| Stat | Intervallo |
|------|-----------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Tendenze della personalità**: Sicurezza molto alta (0,5–1,0), nessuna Curiosità

**Comportamento speciale**: Assegnata automaticamente a pattugliare gli edifici; non abbandonerà il proprio posto per inseguire nemici distanti.

**Albero delle abilità**:

| Livello | Abilità | Effetto |
|---------|---------|---------|
| 3 | Vigilanza | Difesa +3 |
| 6 | Fortifica | HP ×1,2 |
| 10 | Provocazione | Difesa +6, Attacco +3 |
| 15 | Bastione | HP ×1,4, Difesa +10 |

### Costruttore

| Stat | Intervallo |
|------|-----------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Tendenze della personalità**: Sicurezza molto alta (0,8–1,0), nessuna Curiosità, nessuna Gloria

**Comportamento speciale**: Pacifista — non entrerà mai in combattimento. Si reca automaticamente agli edifici danneggiati per ripararli.

**Albero delle abilità**:

| Livello | Abilità | Effetto |
|---------|---------|---------|
| 3 | Riparazione rapida | Velocità di riparazione ×1,3 |
| 6 | Rinforzo | Velocità di riparazione ×1,5 |
| 10 | Maestria artigiana | Velocità di riparazione ×2,0 |
| 15 | Architetto | Velocità di riparazione ×2,5, HP ×1,3 |

### Ladro

| Stat | Intervallo |
|------|-----------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Tendenze della personalità**: Avidità molto alta (0,75–1,0), Sicurezza alta (0,5–1,0), Curiosità moderata (0,3–0,7), Gloria bassa (0,0–0,3)

**Comportamento speciale**: La sua difesa è la schivata (10% + 1% per punto di AGI) anziché gli HP, e la sua avidità lo spinge verso le taglie meglio pagate.

**Albero delle abilità**:

| Livello | Abilità | Effetto |
|---------|---------|---------|
| 3 | Pugnalata alle spalle | Tasso critico +12% |
| 6 | Evasione | Tasso di schivata +10% |
| 10 | Borseggiatore | Tasso critico +20%, Attacco ×1,15 |
| 15 | Danza delle ombre | Tasso di schivata +18%, Attacco ×1,35 |

---

## Sistema di stati

Gli avventurieri transitano tra i seguenti stati:

```
IDLE
  ├─→ MOVING_TO_BOUNTY
  ├─→ EXPLORING
  ├─→ PATROLLING
  ├─→ REPAIRING — Solo costruttore
  └─→ FIGHTING
        └─→ RETURNING
              └─→ LODGING
                    └─→ IDLE
```

---

## Sistema di alloggio

- Gli avventurieri vanno a riposare e curarsi quando hanno pochi PV, nel posto più vicino che ha spazio: la propria gilda, una locanda, un campo selvaggio o il castello. Tra posti più o meno ugualmente vicini, la propria gilda viene prima (conta 8 caselle più vicina) e il castello per ultimo (8 caselle più lontano); chi fugge per salvarsi prende ciò che è più vicino
- Gli avventurieri in alloggio entrano nello stato **LODGING**: scompaiono dalla mappa e diventano invulnerabili
- Ogni edificio può ospitare fino a **3** alloggiati
- Se un edificio viene distrutto, tutti gli alloggiati al suo interno vengono immediatamente rilasciati
- Gli avventurieri lasciano automaticamente l'alloggio una volta che i loro HP sono completamente ripristinati

---

## Sistema di livellamento

| Voce | Descrizione |
|------|-------------|
| Livello massimo | 20 |
| XP base | 40 XP (per raggiungere il Lv. 2) |
| Formula XP | `40 × 1.6^(level-1)` |
| XP per uccisione | Varia in base al tipo di nemico (10 – 160 XP) |
| XP a goccia | Ogni colpo concede 1/5 degli XP per uccisione |
| Uccisione condivisa | L'oro e i PE di un'uccisione si dividono senza aggiungere nulla: l'eroe che ha dato l'ultimo colpo tiene il 60% quando altri partecipano, e il resto va in parti uguali a non più di 3 eroi che combattono entro 6 caselle o che, entro 10 caselle, hanno soccorso un altro eroe negli ultimi 30 secondi |
| XP da taglia | Esplorazione 15 XP, Difesa 25 XP, Eliminazione 30 XP |

Al passaggio di livello, le statistiche primarie e secondarie aumentano insieme agli HP.

**Albero delle abilità**: le abilità di una classe sono un albero, non un numero fisso di caselle: ogni abilità ha il livello a cui si impara e può richiederne altre prima, e un albero è grande quanto le abilità della sua classe. Un eroe impara ogni abilità che il suo livello e ciò che ha già imparato permettono. Il suo pannello mostra l'albero: in grassetto ciò che ha, in grigio ciò che deve ancora venire con il livello a cui arriva, ognuna sotto l'abilità che richiede. Un'abilità segnata (attiva) è lanciata dall'eroe da sé; le altre cambiano i suoi numeri per sempre.

---

## Sistema di personalità

Ogni avventuriero ha quattro valori di personalità (0,0 – 1,0) che influenzano l'accettazione delle taglie:

| Tratto | Effetto |
|--------|---------|
| **Avidità (gold)** | Valori più alti significano che l'avventuriero si interessa di più alla ricompensa |
| **Sicurezza (safety)** | Valori più alti significano che l'avventuriero evita il pericolo |
| **Gloria (glory)** | Valori più alti significano che l'avventuriero preferisce missioni di combattimento |
| **Curiosità (curiosity)** | Valori più alti significano che l'avventuriero preferisce l'esplorazione |

**Formula di attrazione della taglia**:

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- Un segnalino **Avviso** non viene mai accettato
- Una ricompensa inferiore a **livello × 20** oro viene rifiutata subito
- Le Guardie non accettano mai taglie: pattugliano invece la città
- Gli eroi sotto il livello 8 rifiutano le taglie all'interno di una zona di avviso
- Un avventuriero accetta la taglia con il punteggio più alto, se supera 0,1

---

## La vita propria degli eroi

Un eroe senza nulla da fare valuta tutto ciò che può fare e sceglie il meglio: una taglia, una commissione in città o l'esplorazione.

- **Commissioni**: comprare equipaggiamento migliore dal fabbro, rifornirsi di pozioni al mercato, studiare in biblioteca, passare una serata alla locanda (15 oro; una fontana o un giardino sono gratuiti) o tornare a casa quando è ferito o stanco. Ognuna richiede l'edificio, l'oro e un bisogno reale, e l'eroe raggiunge a piedi quell'edificio per farla.
- **Impegno**: un eroe porta a termine il viaggio iniziato. Solo un'esplorazione viene abbandonata, dopo 150 tick, per qualcosa di nettamente migliore. Il pericolo viene comunque prima: un eroe gravemente ferito si dirige al luogo di riposo più vicino.
- **Roccaforti**: dal livello 3 gli eroi audaci marciano da soli contro le roccaforti nemiche conosciute quando osano affrontarne una da soli; i ladri le derubano.
- **Supporto**: un eroe la cui classe si prende cura degli altri (cura, protegge, incita o li copre) e che non ha un lavoro proprio cammina con un gruppo: l'eroe più vicino entro 30 caselle diretto al lavoro di una taglia o a una marcia, o in combattimento, il cui lavoro osa affrontare con quel gruppo. Lo segue quando si sposta e lo lascia quando il gruppo muore, si ferma o torna a casa, quando è ferito lui stesso o dopo 2 minuti.
- **Memoria**: un eroe conserva alcune cose che gli sono accadute, ciascuna per qualche minuto. Chi ha visto attaccare la propria gilda dà alle taglie di difesa il 30% di valore in più; chi è stato aiutato da un altro eroe quando era gravemente ferito, o è stato pagato per una taglia accanto a un altro, dà più valore a una taglia tenuta da quell'eroe; chi è tornato a casa gravemente ferito, o ha visto cadere un tale eroe, vuole probabilità migliori entro 12 caselle dal luogo. Il pannello dell'eroe mostra ciò che ricorda.
- **Una gilda perduta**: un eroe la cui gilda viene distrutta o demolita non è perduto. Si trasferisce da solo nell'edificio più vicino che recluta la sua classe e ha posto, compresa una gilda ricostruita. Fino ad allora il castello lo ospita: 3 eroi per ogni livello del castello per 5 minuti, gli altri per 100 secondi. Un eroe a cui scade il tempo lascia il regno con ciò che porta; il registro e la cronaca lo dicono prima, e il suo pannello conta i secondi.
- **Ciò che mostra un eroe**: un eroe sussulta quando viene colpito, alza una mano quando la sua abilità si attiva, esulta quando sale di livello e si accascia dove cade prima che la polvere lo porti via. Con «Riduci il movimento» (Impostazioni) non fa nulla di tutto questo.
- **Inclinazioni di classe**: ogni classe ha le sue abitudini. I guerrieri combattono finché non sono gravemente feriti e amano assaltare le roccaforti; i maghi restano vicino alla città, si ritirano presto e amano studiare; i ranger viaggiano lontano e preferiscono le taglie di esplorazione; i ladri puntano alla taglia meglio pagata e derubano le roccaforti; le guardie e i costruttori restano in città. La prudenza e la curiosità di ciascun eroe spostano un po' queste abitudini, e il suo pannello elenca le sue inclinazioni. Anche il raggio d'azione è proprio di ogni eroe: più è audace e curioso, più si allontana dal castello, così due eroi della stessa classe non restano sullo stesso terreno. Un eroe punta prima alle terre sconosciute nel suo raggio; quando non ne restano, si spinge un po' più in là e attraversa fino al lato opposto del suo raggio invece di girare intorno al villaggio.
- **Leggere un eroe**: il pannello di un eroe dice cosa sta facendo e perché, dove va, di cosa ha bisogno e come si pone verso ogni taglia aperta: in arrivo, occupato, oppure il motivo del rifiuto con la ricompensa che gli farebbe cambiare idea. Il pannello di una taglia raggruppa gli eroi per questi motivi, i più facili da convincere per primi. Il pannello termina con la storia dell'eroe, le sue ultime otto imprese con l'ora di gioco di ciascuna: l'equipaggiamento comprato e ciò che ha studiato, le taglie accettate e che cosa l'ha deciso (la paga, altri già impegnati o ciò che ricorda), quanto ha ricevuto e al fianco di chi, chi è venuto in suo aiuto quando era gravemente ferito e quando è tornato a casa.
