---
title: "Modalità campagna"
---

La modalità campagna offre scenari a più livelli, ciascuno con condizioni di vittoria specifiche e un contesto narrativo.

---

## Campagne integrate

Il gioco include una **Campagna tutorial** integrata (5 livelli) che guida i nuovi giocatori attraverso le varie meccaniche di gioco. Ha un pulsante tutto suo, il primo del menu principale.

---

## Spedizioni

Una spedizione è un percorso di mappe in cui scegli ogni tappa strada facendo. Si apre dal pulsante **Spedizione** del menu principale.

**La spedizione di frontiera** ha sei mappe e quattro percorsi, ognuno di quattro mappe:

| Tappa | Mappa | Cosa chiede |
|---|---|---|
| Partenza | **Campo di frontiera** | Costruisci una città e radi al suolo l'accampamento goblin a est. Il vecchio faro a sud-ovest è facoltativo: riparalo oppure smantellalo per recuperarne i materiali. |
| Prima | **Scorta sulla via commerciale** | Apri una stazione commerciale in fondo alla strada a sud e fai pagare due giri di carovana. L'accampamento dei banditi può restare in piedi. Dà 300 oro alla mappa successiva. |
| Prima | **Stazione perduta** | Porta a termine il lavoro della stazione: ricostruiscila, oppure riporta a casa il suo sopravvissuto. Dà 150 oro alla mappa successiva. |
| Seconda | **Tomba sigillata** | Porta a termine il lavoro della tomba: sigillala, studiala o saccheggiala. |
| Seconda | **Confine nemico** | Taglia la linea di rifornimento goblin (uccidi un trasportatore prima che consegni il carico, oppure radi al suolo l'accampamento che li manda) e radi al suolo l'avamposto goblin. Il vecchio faro è facoltativo. |
| Arrivo | **Passo della Corona** | Resisti a due incursioni, poi radi al suolo la fortezza goblin. |

Il percorso è disegnato su una mappa di pergamena della marca. Ogni mappa è un sigillo, cerchiato secondo ciò che è per la tua spedizione: vinta, dove ti trovi e le vie aperte, il resto ancora chiuso. Scegli la via successiva dal suo sigillo o dall'elenco accanto alla mappa; un doppio clic o Invio parte.

La fortezza del passo manda una terza ondata di rinforzi, a meno che la tua partita non abbia spezzato il confine nemico. Anche un percorso che passa per la tomba può vincere; deve solo affrontare un'ondata in più. Nella stazione e nella tomba il lavoro della rovina è l'obiettivo, quindi non puoi lasciarlo perdere. Un lavoro fallito o da cui ti ritiri viene proposto di nuovo, e la mappa si perde solo se si perde il luogo della rovina.

**Tra una mappa e l'altra** la schermata della spedizione mostra il percorso fatto finora e le strade che proseguono, ognuna con il suo briefing e con ciò che cambia alla fine del percorso:

- Scegli il gruppo: fino a **sei** eroi proseguono, gli altri aspettano nelle retrovie. La riserva ne tiene al massimo **dodici**; rimanda qualcuno a casa per fare spazio. Gli eroi tornano con la salute piena. I caduti restano caduti.
- Il tesoro della mappa successiva è il suo budget, più la **metà** dell'oro rimasto nella mappa precedente (al massimo **1000**), più la ricompensa della mappa precedente. La schermata fa il conto per te prima della partenza.
- La ricerca e la via del castello restano per tutta la partita. Gli edifici restano indietro.

Una mappa persa si rigioca dalla stessa partenza: stessi eroi, stesso oro, stessa mappa. Una partita resta in attesa tra una mappa e l'altra finché non la riprendi dal menu principale. **Abbandona la partita** vi rinuncia, e **Concludi** chiude una partita arrivata alla fine. Ogni percorso che completi resta nel tuo registro, con il tuo tempo migliore.

### La mappa della demo

I cinque livelli della demo sono disegnati anche su un'unica mappa di pergamena, la **mappa della spedizione**. Si comincia da *La prima corona*; apre insieme *Ombre sulla via commerciale*, *Oro scarso* e *Tieni la strada*, da giocare nell'ordine che preferisci. Due delle tre aprono *La notte di Zannastridente*, e la terza resta aperta finché la fine non è vinta: saltarla non è mai una sconfitta.

| Strada | La sua ricompensa per il livello seguente |
|---|---|
| **Ombre sulla via commerciale** | 300 d'oro nel tesoro |
| **Oro scarso** | Edifici scontati di un quarto, fino a 400 d'oro risparmiati |
| **Tieni la strada** | Tutti gli eroi iniziano con le pozioni piene e si distribuiscono 200 d'oro di rifornimenti |

La ricompensa si usa nel livello seguente e poi sparisce; rigiocare quel livello la ridà. La compagnia, metà del tesoro (al massimo 1000), la ricerca e la via del castello passano come nella Spedizione di frontiera.

Seleziona un sigillo per leggere il suo livello a destra: storia e obiettivi, durata indicativa, tesoro iniziale e ricompensa. Un anello tratteggiato è un livello non ancora aperto (il pannello dice quante strade attende ancora), un anello dorato uno verso cui partire, un anello doppio uno vinto in questa spedizione. **Parti** lo avvia; **Allenamento** gioca da solo un livello già vinto, senza toccare la spedizione. I livelli vinti prima che esistesse la mappa mostrano il loro sigillo. Trascina per spostare, rotella per lo zoom, frecce per passare da un sigillo all'altro, Invio per partire e Home per vedere tutta la mappa.

### Creare una mappa

Il `map_route.json` di una campagna mette i suoi livelli su una mappa. Si crea nella scheda **Mappa** dell'editor delle campagne: ogni nodo è un livello alle coordinate `x`, `y` (da 0 a 1 dall'angolo in alto a sinistra), con i nodi che attende (`after`) e quanti ne vanno vinti (`need`, tutti se omesso); `minutes` è la stima del briefing e `reward` una ricompensa unica (`trade_subsidy`, `build_discount` o `escort_supply`, con un `amount`). `links` sono le linee d'inchiostro, `end` l'ultimo nodo e `art` l'immagine: `demo_frontier`, o un PNG o JPG nella cartella della campagna (al massimo 8192 pixel per lato e 16 milioni in tutto; altrimenti pergamena semplice). **Verifica percorso** disegna un'anteprima. L'unico nodo senza `after` è l'inizio; la mappa deve essere giocabile fino alla fine in qualche ordine, e il Workshop richiede che ogni nodo sia un livello della stessa campagna o di una campagna inclusa nel gioco.

### La mappa dei livelli di una campagna

Ogni campagna si sceglie su pergamena. Il suo `level_map.json` posiziona i livelli; si crea nella scheda **Mappa dei livelli** dell'editor delle campagne. `places` dà a ogni livello, per il suo `id` stabile, le coordinate `x`, `y` (da 0 a 1 dall'angolo in alto a sinistra); `links` sono le linee d'inchiostro tra due livelli; `art` è l'immagine (una del gioco, o un PNG o JPG nella cartella della campagna, con gli stessi limiti di una mappa di spedizione). Senza il file, o quando lascia fuori un livello, i livelli stanno lungo una strada su pergamena semplice, uniti dai loro `requires`, o uno dopo l'altro in una campagna giocata in ordine. Se un livello è aperto lo decidono ancora i suoi `requires`. Un percorso di spedizione (`expedition.json`) posiziona le sue mappe allo stesso modo: un `art` e la `x` e la `y` di ogni nodo; un percorso senza di esse è disposto secondo i suoi passi.

### Creare un percorso

Una campagna diventa una spedizione con un file `expedition.json` accanto al suo `campaign.json`. Costruiscilo nella scheda **Percorso della spedizione** dell'editor delle campagne: assegna a ogni nodo un livello della campagna e l'oro che concede al nodo successivo (da 0 a 2000), elenca le strade che proseguono, poi scegli partenza e arrivo. **Verifica percorso** ti dice quanti percorsi ne escono. I controlli del Workshop richiedono che ogni nodo punti a un livello della stessa campagna o di una campagna inclusa nel gioco. Una prova di gioco può giocare il percorso dalla sua partenza.

```json
{
  "version": 1, "id": "frontier", "start": "camp", "end": "pass", "length": 4,
  "nodes": [{"id": "trade", "campaign": "expedition.frontier", "level": "trade", "grants": {"gold": 300}}, "..."],
  "edges": [["camp", "trade"], ["trade", "tomb"], "..."]
}
```

Un percorso deve portare dalla partenza all'arrivo, senza cicli; ogni nodo deve stare su qualche percorso e ogni percorso deve essere lungo quanto `length`. `requires` elenca le capacità di cui il percorso ha bisogno oltre a `expeditions` (per esempio `relics` o `lair_expansion`). Un percorso il cui livello non è installato, o la cui edizione non ha una capacità che richiede, resta comunque elencato nella schermata della spedizione con il motivo, ma non si può avviare. Un livello può regolarsi sulla partita con le condizioni dei trigger `expedition_won` ed `expedition_lacks` (`{"node": "<id>"}`), e gli obiettivi `complete_relic` (il lavoro di una reliquia portato a termine) e `intercept_supply` (N trasportatori di rifornimenti nemici uccisi prima che consegnino, oppure rasi al suolo tutti gli accampamenti che li mandano) danno uno scopo a un nodo.

---

## Condizioni di vittoria

Ogni livello di campagna può avere una delle seguenti condizioni di vittoria:

| `victory` | Condizione | Descrizione |
|---|------------|-------------|
| `free` | **Gioco libero** | Nessuna condizione di vittoria specifica; gioca liberamente |
| `destroy_enemy_buildings` | **Distruggi tutte le roccaforti** | Elimina tutte le roccaforti nemiche sulla mappa |
| `survive_ticks` | **Sopravvivi per un tempo stabilito** | Mantieni il Castello in vita oltre un numero specificato di tick |
| `reach_gold` | **Accumula oro** | Raggiungi una quantità obiettivo di oro nel tuo tesoro |
| `destroy_building` | **Distruggi roccaforte specifica** | Distruggi un tipo specifico di roccaforte nemica |
| `defend` | **Difendi il Castello** | Impedisci che il Castello venga distrutto entro un tempo stabilito |
| `collect_chests` | **Raccogli tutti i forzieri** | Apri tutti i forzieri del tesoro sulla mappa |
| `secure_trade` | **Mettere in sicurezza la via commerciale** | Vengono pagati `victory_value` giri di carovana e tutte le roccaforti nemiche della mappa sono distrutte |

---

## Struttura della campagna

Le campagne sono salvate come cartelle nella directory `campaigns/`:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Metadati della campagna e lista dei livelli
    ├── level1.json       # Mappa del livello 1
    ├── level2.json       # Mappa del livello 2
    └── ...
```

### Formato di campaign.json

```json
{
  "name": "Tutorial Campaign",
  "description": "Learn the basic game mechanics",
  "levels": [
    {
      "map": "level1.json",
      "title": "A New Beginning",
      "intro": "Welcome to Wayward Crown...",
      "outro": "Congratulations on clearing this level!",
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

### Impostazioni del livello

| Campo | Descrizione |
|-------|-------------|
| `map` | Percorso del file mappa (relativo alla cartella della campagna) |
| `title` | Titolo del livello |
| `intro` | Testo introduttivo |
| `outro` | Testo di completamento |
| `starting_gold` | Oro iniziale (0 – 10⁷) |
| `victory` | Tipo di condizione di vittoria |
| `victory_value` | Valore della condizione di vittoria (es. conteggio tick di sopravvivenza, quantità di oro obiettivo, ecc.) (0 – 10⁹) |
| `unlocked_buildings` | Lista degli edifici disponibili (limita le opzioni di costruzione del giocatore). Una lista vuota consente tutti gli edifici; `unlock_building` amplia una lista non vuota. |
| `victory_target` | Tipo di roccaforte per `destroy_building` (es. `DRAGON_NEST`); ignorato negli altri casi |
| `carry_over` | Cosa si conserva dal livello precedente: `gold`, `adventurers`, `research`, `path` (la via del castello e la sua specialità) (ciascuno true/false). Ciò che un livello elenca in `carry_over` viene preso da un altro livello della stessa campagna quando il giocatore prosegue direttamente e annotato in quel momento; ogni nuovo tentativo del livello riparte da quell'annotazione. Un livello avviato dalla mappa della campagna non porta con sé nulla, e ciò che un livello non elenca (nemmeno la ricerca e la via del castello) non sopravvive alla mappa. |
| `triggers` | Eventi programmati: `condition` + `params`, `action` + `action_params`, e facoltativi `id`, `after` (attende quell'attivatore) e `once`. Condizioni: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Azioni: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Un trigger che non è un oggetto o ha un campo con il tipo di valore sbagliato viene escluso e segnalato nella console. `chests_opened`, `enemy_killed_count` e `bounties_completed` contano dall'inizio del livello. Un trigger ripetuto (`once: false`) agisce a ogni tick in cui vale la sua condizione, quindi la convalida rifiuta quello che genera nemici, paga, pubblica una taglia o avvia un evento; un incontro con un boss inizia una volta e mai solo dopo la propria sconfitta. Un'ondata `spawn_enemies` può avere `march` (`castle` o `road`): allora marcia sul castello o sulla stazione commerciale più vicina invece di vagare dove compare. `reveal` (`x`, `y`, `radius` da 1 a 40) mostra un luogo al giocatore: il terreno entro quel raggio risulta esplorato. `ticks_after_step` conta il suo `value` dal tick in cui è scattato il trigger indicato in `after`. Un parametro di `show_message` scritto come `i18n:<key>` viene tradotto prima di entrare nel testo, così un messaggio può nominare un pannello o un edificio con le parole del gioco. |
| `id` | Nome stabile del livello per i progressi e `requires` (lettere, cifre, `.`, `-`, `_`); se omesso, `level<n>` in base alla posizione |
| `requires` | Livelli da completare prima: un `id` di livello di questa campagna, oppure `<id campagna>/<id livello>` |
| `ruleset` | Solo `kingdom`, e si può omettere: ogni livello si gioca con le regole del regno. Un livello o una mappa che indica `classic`, o non indica nulla, si gioca come un regno; un nome sconosciuto viene rifiutato |
| `castle_level` | Il livello del castello con cui inizia il livello (1–3); se omesso, un mastio |
| `time_limit` | Tick a disposizione del livello; se finiscono senza vittoria, è perso. 0 o omesso: nessun limite |
| `advice` | Ciò che il briefing consiglia; come gli altri testi può essere una chiave `i18n:` |
| `side_quests` | Fino a due scoperte facoltative nel livello, ciascuna `{"kind", "x", "y"}` con un kind tra `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` o `lair` può indicare chi c'è |
| `objectives` | Fino a 8 condizioni di vittoria aggiuntive, ciascuna `{"victory", "value", "target", "required"}` con qualsiasi vittoria tranne `free`. Il livello è vinto quando la vittoria principale (salvo `free`) e tutte quelle richieste sono soddisfatte; quelle facoltative sono contate nella riga dell'obiettivo ed elencate nei risultati |
| `defeats` | Fino a 4 altri modi di perdere, ciascuno `{"kind", "value"}`: `heroes_lost`, `buildings_lost` o `caravans_lost` raggiunge il valore dall'inizio del livello |
| `hero_bonds_disabled` | `true`: in questo livello gli eroi non stringono nuovi legami e non invitano compagni (i legami già stretti restano); se omesso: legami come di consueto |

La campagna stessa può avere un `id` (il nome con cui vengono registrati i suoi progressi) e `"linear": false` (sfide indipendenti: vincerne una non porta alla successiva). Può anche elencare `blocked_events`: i nomi degli eventi casuali che i suoi livelli non estraggono mai (per esempio `DRAGON_NEST`). E un `roster`: i tipi di nemico (nomi come `GOBLIN`) che vagano e invadono nei suoi livelli; se omesso, tutti.

:::tip[Supporto alla localizzazione]
Il testo delle campagne può usare i tag `i18n:KEY`, che mostreranno automaticamente la traduzione corrispondente in base alla lingua del giocatore.
:::

---

## La campagna demo

La campagna narrativa della demo (`campaigns/demo_kingdom/`) si apre dal menu principale. Come il tutorial, la scrive `game/systems/demo_campaign.py`.

| Missione | Obiettivo | Perdi se | Inizio |
|---|---|---|---|
| 1. La prima corona | Trovare l'accampamento goblin a est del mastio e farlo distruggere | Il mastio cade | 1600 oro e una breve lista di edifici, più le rovine della bottega di un fabbro e di un mercato |
| 2. Ombre sulla via commerciale | Portare a termine tre giri di carovana e distruggere l'accampamento dei banditi | Il castello cade | 2400 oro, un castello di livello 2, una piccola città e due strade lastricate |
| 3. La notte di Zannastridente | Sconfiggere il Capo Zannastridente | Il castello cade | 3000 oro, un castello di livello 2 e una città di sei edifici |

La missione 1 comincia accanto alle rovine della bottega di un fabbro e di un mercato: la squadra della corona le ricostruisce senza costi, prima la bottega del fabbro, e ciò che piazzi, anche la tua prima gilda, aspetta il suo turno dopo di loro a meno che tu non lo segni come prioritario. Nella missione 1 i messaggi guidano dalla prima gilda al primo eroe, al mercato e all'esattore. Dopo circa 48 secondi la corona pone a proprie spese una taglia «Esplora» vicino all'accampamento; quando un eroe l'ha completata, ti viene chiesto di porre una taglia «Uccidi» sull'accampamento. Nella missione 2 la corona fa esplorare entrambi i siti per la stazione commerciale, i banditi tendono un'imboscata sulla strada sud una volta (annunciata 20 secondi prima) e il primo edificio perduto porta 400 oro di aiuto. Nella missione 3 un'incursione arriva dalla strada est al tick 1000 e un'altra dalla strada nord al tick 2500 e il Capo Zannastridente al tick 4300, ciascuno annunciato 100 tick prima; radere al suolo la sua fortezza è una spedizione che vale il bottino, ma solo la sua sconfitta dà la vittoria. Le missioni 1 e 2 includono una Gilda dei costruttori per le riparazioni; nella missione 3 il castello, già al livello 2, può prendere subito la sua via, e una fortezza rasa al suolo non manda più le sue incursioni. Le missioni 2 e 3 conservano la ricerca della missione precedente quando prosegui direttamente; ogni nuovo tentativo riparte come il primo, e una missione scelta sulla mappa comincia senza.

Le sfide (`campaigns/demo_challenges/`, `"linear": false`) vengono scritte allo stesso modo. *Oro scarso* si apre dopo la missione 2: 600 oro, un castello di livello 2, una piccola città con un emporio sulla strada a sud e 15 minuti (`time_limit`) per radere al suolo un accampamento goblin e un covo di banditi che assale la strada; i banditi tentano la strada due volte prima che inizino le incursioni del covo. *Tieni la strada* si apre dopo la missione 3: la stazione commerciale è già aperta, i banditi arrivano dalla strada sud ogni 500 tick, ogni volta un po' più forti, e 9 giri di carovana devono andare a buon fine entro 14 minuti e 20 secondi. Un regno libero (il Regno libero della demo o la Sandbox del gioco completo) non ha obiettivo; la finestra d'avvio permette di chiedere che il Capo Zannastridente venga una volta, 20 minuti dopo l'inizio (`game/systems/free_kingdom.py`). In *Tieni la strada* ogni incursione marcia sulla stazione commerciale: una stazione che nessuno difende viene rasa al suolo e la sua carovana sparisce con essa, quindi non fare nulla fa perdere la sfida.

Le **sfide dei boss** si scelgono dal menu principale, su una mappa di pergamena tutta loro. Ognuno dei tre boss con nome — il capo Zannastridente, lo scorpione delle dune e il tiranno di cenere — si affronta da solo. Gli edifici e le ricerche sono già pagati con 14000 oro, e gli eroi sono quelli che arruolano le tue gilde: il boss arriva dopo dieci minuti, con il conto alla rovescia nella riga dell'obiettivo, e un messaggio ti avverte un minuto prima. Sconfiggere il boss fa vincere. Tenere l'avamposto e radere il santuario dei cultisti che manda le guardie del tiranno sono obiettivi facoltativi: mancarli non fa mai perdere. A Difficile ogni boss usa le sue mosse potenziate alle stesse soglie di salute.

## Una missione di regno, passo dopo passo

1. In Creator / Workshop scegli **Nuovo progetto**, poi **Missione di regno**, e una nuova cartella. Ottieni un livello giocabile: una città, un accampamento goblin a est, le taglie «Esplora», «Uccidi» e «Difendi» della corona, due ondate annunciate e il capo come boss con un nome.
2. Aprilo nell'editor delle campagne. Il modulo del livello ha la storia (intro), il consiglio del briefing, l'oro iniziale e la vittoria; sotto, il livello iniziale del castello, il limite di tempo e fino a due scoperte facoltative con le loro caselle.
3. Dipingi la mappa: sposta la città, il covo e le strade. Un luogo deve essere raggiungibile dal castello, altrimenti ciò che vi si trova viene omesso all'inizio del livello. Un edificio nel file della mappa può avere `"ruin"` (da 1 a 99): comincia come cantiere con quella percentuale di lavoro già fatta, e la squadra della corona lo finisce senza costi.
4. Apri i trigger per cambiare i messaggi, le taglie della corona (`post_bounty`), le ondate (`spawn_enemies`) e quando arriva il boss (`spawn_boss`). La condizione `enemy_building_seen` aspetta che un covo sia in vista.
5. In `campaign.json`, `roster` indica i mostri che vagano sulla mappa e `blocked_events` gli eventi casuali mai tirati.
6. Convalida: i controlli indicano per campo un livello del castello, un limite di tempo, una scoperta facoltativa, una voce dell'elenco o un evento sbagliati. Poi gioca il livello dall'area di lavoro; la difficoltà scelta lì dimensiona incursioni, ondate e oro iniziale.
7. Pubblicalo prima in privato e rendilo pubblico quando si gioca come intendi.

<!-- gameplay-preparation:start -->

Gli eroi confrontano negozi raggiungibili, prezzi e capacità reale degli alloggi. Dopo la ritirata recuperano prima di riprendere lavori pericolosi; i dettagli delle spedizioni mostrano preparativi e riposi raggiungibili. I livelli personalizzati possono offrire fino a tre piani di vittoria completi, mantenendo i requisiti comuni. I livelli classici con una sola condizione vincono se raggiungono il traguardo nell’ultimo tick consentito; i piani alternativi mantengono la precedenza della sconfitta.

```json
{
  "victory": "free",
  "objectives": [
    {
      "victory": "protect_building",
      "target": "trade-post"
    }
  ],
  "victory_plans": [
    {
      "id": "commerce",
      "title": "i18n:victory_kind_caravan_rounds",
      "objectives": [
        {
          "victory": "caravan_rounds",
          "value": 2
        }
      ]
    },
    {
      "id": "assault",
      "title": "i18n:victory_kind_destroy_building",
      "objectives": [
        {
          "victory": "destroy_building",
          "target": "GOBLIN_TENT"
        }
      ]
    }
  ]
}
```

```json
{"type": "TRADING_POST", "x": 100, "y": 80, "objective_id": "trade-post"}
```

I dettagli della spedizione collegano negozi di pozioni e riposi raggiungibili e contano cure e scudi alleati appresi. I negozi registrano arrivi totali, viaggio medio e attacchi. I risultati indicano un piano di vittoria principale e imprese simultanee, con un solo saldo di base.

<!-- gameplay-preparation:end -->

## Faro antico

Nelle mappe con un faro antico, seleziona il luogo scoperto per vedere costi, scadenza e scelte nei dettagli. Riparare richiede una squadra o costruttore sul posto e si ferma a metà per finanziare ancora o ritirarsi. Il completamento avvisa di nemici scoperti entro 20 caselle. Recuperare tesoro richiede che un eroe accetti la bandiera di esplorazione, arrivi e lavori; tesoro reale e lavoratore sono pagati una volta. Ignorare non avvia scadenze; ritirarsi restituisce solo fondi inutilizzati. La rovina non recluta né potenzia bandiere. Lasciare il livello abbandona il lavoro accettato su una reliquia e restituisce i fondi non spesi, come un ritiro; gli effetti di una reliquia restano sulla sua mappa e solo ciò che la campagna conserva (oro, eroi, ricerca) passa al livello successivo.

## Logistica goblin facoltativa

Mappe e livelli possono dichiarare la capacità `lair_expansion` e una lista omonima di massimo quattro piani. Ogni piano richiede `id` e `target`, che indica una tenda goblin esistente tramite il suo `objective_id` univoco. Il trasportatore deve arrivare e un lavoratore vivo costruire sul posto. Convogli, scorte, difensori e incursioni condividono un budget finito: massimo quattro cicli e 64 nuove unità per origine. Perdere l’avamposto ritarda e indebolisce le incursioni non partite; distruggere la base ferma la produzione ma lascia superstiti e avamposti facoltativi. Gli avamposti non aggiungono basi obbligatorie alla vittoria. Senza piani resta il calendario precedente. I trasportatori portano casse riconoscibili, con animazioni e suoni propri, e compaiono solo nei convogli assegnati. Dopo la ricognizione puoi mettere una taglia sul trasportatore in movimento. Ucciderlo annulla quel carico e ritarda la produzione; le scorte superstiti restano in battaglia. Carico e taglia si liquidano una sola volta; annullare segue le normali regole di rimborso. Gli avamposti mostrano impalcature, tettoie di rifornimento complete e macerie proprie. Un lavoratore vivo costruisce il sito attaccabile; prima del completamento non genera difensori. Distruggerlo ritarda gli attacchi non partiti e riporta il raduno alla base. Distruggere la base ferma la produzione ma conserva superstiti e avamposti isolati. Ogni origine mantiene al massimo una rovina decorativa, senza difensori né obiettivi di vittoria aggiunti.

Il modulo Espansione delle tane è condiviso da mappe e campagne: fino a quattro tende goblin, tempi di protezione, preparazione, consegna, costruzione, raduno e attesa, cicli, budget condiviso, scorte e otto rettangoli vietati per origine. Tempi in secondi di gioco, a passi di 0,2. Applicare aggiorna la bozza; annullare conserva i valori. Svuotare le origini della mappa disattiva l’espansione. La disattivazione esplicita del livello prevale sulla mappa; altrimenti una lista vuota ne eredita le impostazioni. Origini duplicate o mancanti e zone fuori mappa sono respinte prima del salvataggio.

Il limite condiviso degli avamposti va da uno a quattro per mappa. Un convoglio per un nuovo sito prenota il posto prima di partire; al limite, le altre origini attendono senza emettere unità o accumulare incursioni. Un avamposto orfano vivo mantiene il posto fino alla distruzione.

Il livello dei rifornimenti nemici mostra solo punti e siti osservati. Produzione, salute, tesoro e difensori della base, fase/progresso del posto e posizioni del convoglio hanno tempi separati. Fuori vista resta l’ultimo valore; costruzione o demolizione nascosta non cambia l’immagine nota. Un’altra ricognizione aggiorna i dati. La rotta conserva al massimo sedici punti osservati. Avvisi unici dopo il caricamento; briefing sulle quattro strategie contro il budget finito.

Il gioco libero offre un’espansione finita delle tende goblin, attivata inizialmente. Le partite miste o goblin riservano uno dei posti scelti a una tenda e collegano fino a quattro tende esistenti, senza aumentare i covi totali. Altre razze non ricevono fonti aggiunte. Le campagne usano le impostazioni dell’autore.

Impalcatura, deposito e rovina hanno sagome distinte e stoffa animata, ferma con movimento ridotto. Il corriere martella solo durante lavoro reale. Avvistamento di convoglio e osservazione di cantiere, completamento e rovina hanno icone e suoni propri; cambiamenti nascosti e caricamento non ripetono avvisi. Moduli compatti e informazioni scorrono, il pannello anche da tastiera.

I corrieri attendono fino a 10 secondi che le unità mobili liberino l’area del nuovo avamposto, mai oltre la scadenza di consegna; poi consegnano comunque e chi è ancora lì viene spostato sulla casella libera più vicina. Corrieri e scorte si fermano fuori dall’area prevista.

Dopo il recupero dei materiali da un antico faro, le squadre non lo restaurano gratuitamente; recupero e riparazione sono scelte alternative.

Queste sono le condizioni predefinite di tomba e stazione. Seleziona un sito scoperto per costi reali, scadenza originale restante e risultati; il gioco continua durante la scelta.

La sezione facoltativa della cronaca segue le reliquie scoperte, il ramo scelto, i progressi, gli ostacoli, la scadenza originale restante e i risultati reali. Mostra individua il luogo originale senza accettare scelte né spendere oro. Una reliquia che entra in vista è una notizia, come il lavoro accettato che si ferma a metà, fallisce o finisce; un ritiro che scegli è una riga del registro. Un luogo mostra a che punto è: una rovina finché non si accetta un lavoro, impalcature e materiale accatastato mentre la corona vi lavora, ciò che lascia la scelta compiuta (un faro acceso o smantellato, una tomba sigillata o aperta, una stazione ricostruita) oppure macerie se il lavoro è fallito. Ciò che ferma il lavoro è detto con precisione: nessun eroe che lo prenda, il motivo degli eroi per rifiutarlo, mostri vicino al luogo, un altro lavoro della squadra prima (con il posto del luogo nell’ordine) oppure acqua, scogliere o edifici che lo chiudono.

Siti di reliquie facoltativi: 0 disattiva la generazione. Fino a due reliquie diverse su terreno aperto raggiungibile fuori dalla zona sicura del castello, senza bloccare strade e percorsi. Nessun pagamento o lavoro prima di accettare. I siti distano 21–80 caselle dal castello e devono superare la verifica del normale percorso degli operai.

Regole della mappa e livelli condividono un editor per due siti originali al massimo, opzioni fisse e costi, ricompense, lavoro e scadenze limitati. Annulla conserva la bozza; Applica verifica le fonti senza avviare il gioco. Una lista vuota eredita la mappa; `relics_disabled: true` disattiva tale eredità. Svuotare le reliquie di una mappa singola ne elimina i modelli al salvataggio.

**Tomba sigillata**

- Rafforzare il sigillo: Dopo il finanziamento extra sopprime solo 2 incursioni previste di Cimitero / Castello dei non-morti. Guardie, nemici ambientali e altre fonti restano normali. La fonte originale deve sopravvivere.
- Finanziare la ricerca: Uno sblocco idoneo di Affinità arcana, oppure 80 oro se non disponibile o già noto. Valgono i requisiti ordinari della torre dei maghi e della ricerca. Pausa a metà: finanziare ancora o ritirarsi.
- Aprire la tomba: Un tesoro di 240 oro dopo vera esplorazione e la sconfitta di 3 guardie scheletro. Finanziare apre la tomba; le guardie vive restano dopo ritiro o scadenza.

**Stazione perduta**

- Ricostruire i rifornimenti: Ripristina 6 acquisti condivisi a pagamento di livello 1: cure, pozioni o reagenti ai prezzi ordinari. Nessun reddito periodico o potenziamento. Ricostruzione e soccorso si escludono.
- Scortare il superstite: Volontari devono scortare il superstite originale al castello sicuro. Probabilità di adesione 75%, fissata al finanziamento: un ranger solo con classe e via consentite e posto in un rifugio completato all'arrivo. Il tesoro riceve 120 oro con o senza adesione; nessun reclutamento in attesa. Soccorso e ricostruzione si escludono.

## Espansioni condivise di questa versione

La Demo e il gioco completo hanno tutte e quattro, e ognuna si attiva solo dove una mappa, un livello o un'impostazione la chiede; salvataggi, mappe e plugin vecchi non la attivano da soli.

- **Espansione delle tane**: i corrieri di rifornimento, gli avamposti e le offensive limitate di una tenda goblin. Nel gioco libero, *Espansione goblin con rifornimenti finiti* (accesa di base).
- **Legami tra eroi**: relazioni, inviti, viaggi insieme e separazioni, l'elenco e il pannello dei motivi. Nel gioco libero, *Legami tra eroi* (accesi di base).
- **Rovine**: il faro antico, la tomba sigillata e la stazione perduta, ognuna con due scelte principali. Nel gioco libero, *Siti di reliquie facoltativi* (0 di base).
- **Spedizioni**: turni, percorsi, un elenco che passa di mappa in mappa, nuovi tentativi e la *Spedizione di frontiera* di sei mappe e quattro percorsi; se manca qualcosa la spedizione dice cosa e non offre percorsi a metà.

Non in questa versione: l'espansione di altre razze nemiche, altre rovine, spedizioni più lunghe e percorsi casuali, e i prezzi e gli scontri delle rovine fissati giocando davvero.
