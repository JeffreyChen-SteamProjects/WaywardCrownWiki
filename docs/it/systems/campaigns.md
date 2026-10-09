---
title: "Modalità campagna"
---

La modalità campagna offre scenari a più livelli, ciascuno con condizioni di vittoria specifiche e un contesto narrativo.

---

## Campagne integrate

Il gioco include una **Campagna tutorial** integrata (5 livelli) che guida i nuovi giocatori attraverso le varie meccaniche di gioco. Ha un pulsante tutto suo, il primo del menu principale.

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
| `carry_over` | Cosa si conserva dal livello precedente: `gold`, `adventurers`, `research`, `path` (la via del castello e la sua specialità) (ciascuno true/false). Ciò che un livello elenca in `carry_over` viene preso da un altro livello della stessa campagna quando il giocatore prosegue direttamente e annotato in quel momento; ogni nuovo tentativo del livello riparte da quell'annotazione. Un livello avviato dall'elenco delle missioni non porta con sé nulla, e ciò che un livello non elenca (nemmeno la ricerca e la via del castello) non sopravvive alla mappa. |
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

La missione 1 comincia accanto alle rovine della bottega di un fabbro e di un mercato: la squadra della corona le ricostruisce senza costi, prima la bottega del fabbro, e ciò che piazzi, anche la tua prima gilda, aspetta il suo turno dopo di loro a meno che tu non lo segni come prioritario. Nella missione 1 i messaggi guidano dalla prima gilda al primo eroe, al mercato e all'esattore. Dopo circa 48 secondi la corona pone a proprie spese una taglia «Esplora» vicino all'accampamento; quando un eroe l'ha completata, ti viene chiesto di porre una taglia «Uccidi» sull'accampamento. Nella missione 2 la corona fa esplorare entrambi i siti per la stazione commerciale, i banditi tendono un'imboscata sulla strada sud una volta (annunciata 20 secondi prima) e il primo edificio perduto porta 400 oro di aiuto. Nella missione 3 un'incursione arriva dalla strada est al tick 1000 e un'altra dalla strada nord al tick 2500 e il Capo Zannastridente al tick 4300, ciascuno annunciato 100 tick prima; radere al suolo la sua fortezza è una spedizione che vale il bottino, ma solo la sua sconfitta dà la vittoria. Le missioni 1 e 2 includono una Gilda dei costruttori per le riparazioni; nella missione 3 il castello, già al livello 2, può prendere subito la sua via, e una fortezza rasa al suolo non manda più le sue incursioni. Le missioni 2 e 3 conservano la ricerca della missione precedente quando prosegui direttamente; ogni nuovo tentativo riparte come il primo, e una missione scelta dall'elenco comincia senza.

Le sfide (`campaigns/demo_challenges/`, `"linear": false`) vengono scritte allo stesso modo. *Oro scarso* si apre dopo la missione 2: 600 oro, un castello di livello 2, una piccola città con un emporio sulla strada a sud e 15 minuti (`time_limit`) per radere al suolo un accampamento goblin e un covo di banditi che assale la strada; i banditi tentano la strada due volte prima che inizino le incursioni del covo. *Tieni la strada* si apre dopo la missione 3: la stazione commerciale è già aperta, i banditi arrivano dalla strada sud ogni 500 tick, ogni volta un po' più forti, e 10 giri di carovana devono andare a buon fine entro 14 minuti e 20 secondi. Un regno libero (il Regno libero della demo o la Sandbox del gioco completo) non ha obiettivo; la finestra d'avvio permette di chiedere che il Capo Zannastridente venga una volta, 20 minuti dopo l'inizio (`game/systems/free_kingdom.py`). In *Tieni la strada* ogni incursione marcia sulla stazione commerciale: una stazione che nessuno difende viene rasa al suolo e la sua carovana sparisce con essa, quindi non fare nulla fa perdere la sfida.

## Una missione di regno, passo dopo passo

1. In Creator / Workshop scegli **Nuovo progetto**, poi **Missione di regno**, e una nuova cartella. Ottieni un livello giocabile: una città, un accampamento goblin a est, le taglie «Esplora», «Uccidi» e «Difendi» della corona, due ondate annunciate e il capo come boss con un nome.
2. Aprilo nell'editor delle campagne. Il modulo del livello ha la storia (intro), il consiglio del briefing, l'oro iniziale e la vittoria; sotto, il livello iniziale del castello, il limite di tempo e fino a due scoperte facoltative con le loro caselle.
3. Dipingi la mappa: sposta la città, il covo e le strade. Un luogo deve essere raggiungibile dal castello, altrimenti ciò che vi si trova viene omesso all'inizio del livello. Un edificio nel file della mappa può avere `"ruin"` (da 1 a 99): comincia come cantiere con quella percentuale di lavoro già fatta, e la squadra della corona lo finisce senza costi.
4. Apri i trigger per cambiare i messaggi, le taglie della corona (`post_bounty`), le ondate (`spawn_enemies`) e quando arriva il boss (`spawn_boss`). La condizione `enemy_building_seen` aspetta che un covo sia in vista.
5. In `campaign.json`, `roster` indica i mostri che vagano sulla mappa e `blocked_events` gli eventi casuali mai tirati.
6. Convalida: i controlli indicano per campo un livello del castello, un limite di tempo, una scoperta facoltativa, una voce dell'elenco o un evento sbagliati. Poi gioca il livello dall'area di lavoro; la difficoltà scelta lì dimensiona incursioni, ondate e oro iniziale.
7. Pubblicalo prima in privato e rendilo pubblico quando si gioca come intendi.
