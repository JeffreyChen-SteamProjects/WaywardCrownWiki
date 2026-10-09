---
title: "Sistema di taglie"
---

Le taglie sono il tuo principale mezzo per dirigere le azioni degli avventurieri. Piazza bandiere di taglia sulla mappa e imposta una ricompensa per attirare gli avventurieri in una posizione specifica.

---

## Tipi di taglie

| Tipo | Ricompensa predefinita | Pericolo | Fama | Effetto |
|------|----------------------|----------|------|---------|
| **Esplorazione** | 200g | 0,2 | 0,3 | Gli avventurieri viaggiano verso la posizione obiettivo, rivelando la nebbia di guerra lungo il percorso; la bandiera deve trovarsi in un punto raggiungibile a piedi |
| **Eliminazione** | 200g | 0,8 | 0,9 | Elimina un bersaglio designato (nemico o Roccaforte nemica) |
| **Difesa** | 200g | 0,5 | 0,6 | Pattuglia intorno all'edificio obiettivo fino allo scadere del timer |
| **Avviso** | Costo di 50g | — | — | Segna un punto come zona vietata: non viene mai accettato né pagato; gli eroi sotto il livello 8 si tengono lontani da tutto ciò che si trova entro 25 caselle |

### Piazzare, aumentare e annullare

- Una taglia di eliminazione va piazzata su un nemico o su una Roccaforte nemica, e una taglia di difesa su uno dei tuoi edifici o sul Castello
- La ricompensa di una taglia già pubblicata può essere aumentata di +100g o +500g
- L'annullamento rimborsa la ricompensa, tranne per una taglia di difesa la cui guardia è iniziata

---

## Come gli avventurieri scelgono le taglie

Gli avventurieri calcolano l'attrattiva in base alla loro **personalità** e agli **attributi della taglia**:

```
Attrattiva = Ricompensa × Avidità
           + Fama × Gloria
           - Pericolo × Sicurezza
           + Bonus esplorazione × Curiosità
           - Penalità distanza
           - Penalità HP bassi
```

Ricompense e distanza sono scalate in base al livello dell'avventuriero, e alcune taglie vengono rifiutate subito (una ricompensa inferiore a livello × 20 oro, un segnalino Avviso o una taglia all'interno di una zona di avviso per gli eroi sotto il livello 8). La formula completa si trova nella pagina [Avventurieri](adventurers.md).

:::tip[Consigli pratici]
- I **Ranger** hanno alta curiosità e sono i più adatti per le taglie di esplorazione
- I **Guerrieri** hanno alta gloria e sono i più adatti per le taglie di eliminazione
- Le **Guardie** non accettano mai taglie: pattugliano i tuoi edifici e accorrono verso quello attaccato
- Aumentare la ricompensa può persuadere gli avventurieri riluttanti ad accettare una taglia
:::

---

## Meccaniche della taglia di difesa

Le taglie di difesa richiedono agli avventurieri di **pattugliare continuamente** vicino al bersaglio:

| Impostazione | Valore |
|-------------|--------|
| Tempo di pattuglia richiesto | 60 tick |
| Intervallo di ricalcolo del percorso | Ogni 12 tick |

Dopo aver accettato una taglia di difesa, l'avventuriero pattuglia avanti e indietro vicino al bersaglio. Una volta accumulato abbastanza tempo di pattuglia, la taglia viene completata: gli eroi al loro posto si dividono la ricompensa, e ciascuno guadagna 25 XP se durante la guardia un nemico è arrivato a vista.

---

## Meccaniche della taglia di eliminazione

Le taglie di eliminazione designano un **bersaglio specifico**:

- Può essere un nemico specifico
- Può essere una Roccaforte nemica

Una volta eliminato il bersaglio, la taglia viene completata automaticamente. Gli avventurieri che hanno accettato la taglia daranno priorità al viaggio verso la posizione del bersaglio.

- La ricompensa viene divisa equamente tra gli eroi che detengono la taglia entro 20 caselle dal bersaglio, e ciascuno di loro guadagna 30 XP; nessun tratto la aumenta
- Contro una Roccaforte nemica, gli avventurieri si radunano prima a circa 22 caselle di distanza sul lato del Castello e attaccano insieme quando ne sono arrivati 2–5 (in base alla dimensione della roccaforte), oppure 120 tick dopo che il primo avventuriero ha accettato la taglia

---

## Consigli strategici

1. **Inizia con le taglie di esplorazione** — devi dissipare la nebbia di guerra per localizzare nemici e risorse
2. **Piazza taglie di eliminazione vicino alle Roccaforti nemiche** — guida gli avventurieri a distruggere le minacce
3. **Piazza taglie di difesa vicino agli edifici importanti** — le accettano gli altri avventurieri; le Guardie vi pattugliano già senza taglia
4. **Regola le ricompense in base alla personalità degli avventurieri** — non devi pagare troppo per ogni taglia

---

## Regole delle taglie

La ricompensa resta nella taglia dal momento dell'affissione:

- **Scadenza**: una taglia può essere affissa con una scadenza di 1, 3 o 5 minuti. Quando passa, la ricompensa non pagata torna al tesoro.
- **Rimborsi**: annullare restituisce la ricompensa, tranne per una taglia di difesa la cui guardia è iniziata. Anche una taglia il cui bersaglio non c'è più e senza nessuno da pagare la restituisce. Una bandiera si rimuove dal suo menu del clic destro sulla mappa o, una volta selezionata, con il pulsante del suo pannello; entrambi dicono che cosa torna indietro. Se degli eroi sono già in cammino verso una taglia annullata, un decimo di ciò che torna va a loro per la strada fatta, in parti uguali.
- **Chi viene pagato**: una taglia di esplorazione paga l'eroe che la raggiunge; una di caccia è divisa in parti uguali tra chi l'ha accettata ed è vicino all'uccisione; una di difesa tra chi è al suo posto. Un eroe morto non viene mai pagato. Un eroe vicino al lavoro che negli ultimi 30 secondi ha curato, protetto o coperto un altro riceve una parte accanto a loro.
- **La fama richiede lavoro**: l'oro viene sempre pagato, ma fama ed esperienza arrivano solo per un terreno inesplorato al momento dell'affissione, un'uccisione o una guardia durante la quale un nemico è arrivato a vista.
- **Compagnia**: gli eroi lasciano una taglia di esplorazione che qualcuno ha già preso, contano una ricompensa divisa come la loro parte e trovano una roccaforte meno temibile quando altri si sono già fatti avanti.
- **Spedizioni**: una taglia di caccia su una roccaforte raduna prima il gruppo in un punto di raduno dal lato del castello. Parte quando sono arrivati abbastanza eroi o dopo 120 tick; un volontario rimasto solo prosegue solo se osa affrontare la roccaforte da solo, altrimenti rinuncia alla taglia; accetta un eroe in più rispetto al raduno e nessun altro; un eroe a corto di pozioni ne compra prima, se può; e un gruppo caduto o tornato a casa si raduna di nuovo. Il pannello della taglia mostra chi si è radunato, quanto si aspettano gli altri e le probabilità stimate.
- **Pericolo**: le taglie di caccia, le taglie di esplorazione vicino a una roccaforte avvistata e una marcia non pagata su una roccaforte vengono valutate rispetto alla preparazione di ciascun eroe (attacco, salute, pozioni, armatura, gli eroi già sulla taglia e quanto il lavoro dista da una locanda o dal castello). Gli eroi coraggiosi accettano probabilità peggiori di quelli prudenti, e nessuna ricompensa rende più sicuro un lavoro pericoloso. Un eroe che si trattiene dice cosa gli farebbe cambiare idea (pozioni che può comprare o non può procurarsi, una locanda più vicina al lavoro, un altro eroe sulla taglia) e parte appena ce l'ha. Un eroe con una taglia combatte ciò che lo raggiunge, ma torna alla taglia prima di inseguire altro, e rinuncia a un lavoro pericoloso quando le sue probabilità crollano.
- **Soccorso**: una taglia di soccorso si pone su un esattore o una carovana e lo segue. Gli eroi che la accettano lo raggiungono e gli restano accanto; con una scorta smette di fuggire dai mostri e prosegue il suo giro mentre loro combattono. Quando è stato scortato per 20 tick lungo la strada e si trova al castello (una carovana: o alla sua stazione commerciale) senza mostri entro 8 caselle, la taglia viene divisa in parti uguali tra chi la detiene e gli sta accanto; aspettare accanto a uno che non è partito non conta. Dà fama ed esperienza solo se era ferito o se un mostro è arrivato a vista, e restituisce la ricompensa se viene perduto. Un doppio clic su un esattore o una carovana ne pone una.
- **Pannello di affissione**: mostra quanto paga ora il tesoro e, puntando la mappa, quale sarebbe il bersaglio della taglia. Quando un clic potrebbe indicare più cose (mostri ammassati per una taglia di uccisione, portatori per una di soccorso, più eroi feriti sotto il puntatore per un incantesimo rivolto a un eroe), compare un elenco e la taglia o l'incantesimo va a quello scelto.
- **Taglie concesse**: una mappa o una campagna può affiggere una taglia con l'azione di trigger `post_bounty`; non costa nulla al tesoro e non restituisce nulla.
