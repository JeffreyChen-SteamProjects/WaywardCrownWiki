---
title: "Editor di mappe e campagne"
---

Wayward Crown include editor di mappe e campagne integrati che permettono di creare livelli e scenari personalizzati.

---

## Editor di mappe

Il pulsante **Editor mappe** del menu principale apre l'editor su una nuova mappa. Le mappe salvate si elencano, giocano, modificano, importano ed esportano nella scheda Mappe del gestore mappe, che si apre con il pulsante **Campagne** del menu principale.

### Funzionalità

- **Pittura del terreno** — Seleziona un tipo di terreno e dipingilo sulla mappa con un pennello (dimensione 1 – 20), oppure riempi un'area
- **Posizionamento edifici** — Posiziona edifici del giocatore, Roccaforti nemiche e forzieri del tesoro, sposta il Castello o cancella
- **Casualizza** — Genera una mappa casuale da cui partire
- **Annulla / Ripeti** — Fino a 30 passi (Ctrl+Z / Ctrl+Y)
- **Impostazioni mappa** — Dimensione (100 – 1000 caselle per lato), nome, autore e altri dettagli, oro iniziale e una condizione di vittoria
- **Salva/Carica** — Salva le mappe nella directory `maps/`; Chiudi, Esc e Nuovo chiedono prima di scartare le modifiche non salvate (Salva / Scarta / Annulla), e scartare una campagna mai salvata ne rimuove la cartella
- **Oggetti…** — Modifica nell'editor di oggetti le classi di eroe, i mostri, gli edifici, le roccaforti e i boss creati per la mappa. La prima volta crea il pacchetto di contenuti della mappa (un tuo plugin che la mappa richiede); salvando il pacchetto i contenuti vengono ricaricati, così ciò che definisce si può piazzare subito
- **Prova** — Avvia la mappa salvata, o la campagna al livello che stai modificando, in una partita a sé, con il suo pacchetto di contenuti e nient'altro di tuo
- **Pannelli** — I pennelli e le regole della mappa (o la campagna) sono pannelli a schede accanto alla mappa: trascinane uno dall'altra parte o fuori dalla finestra, chiudilo e richiamalo con **Pannelli**. Terreni, edifici, roccaforti e boss si scelgono dalla loro immagine, e l'editor e le finestre che apre (l'editor di oggetti, l'editor dei trigger, i dettagli della mappa) si possono ingrandire a tutto schermo

Le mappe non contengono unità: gli avventurieri vengono reclutati e i nemici appaiono una volta avviata la partita.

### Tipi di terreno

- Prateria, Foresta, Montagna, Acqua, Deserto, Strada, Fango, Palude, Neve, Colline, Calanchi, Prato fiorito

### Formato di salvataggio

Le mappe sono salvate in formato JSON nella directory `maps/` e includono:

- Dati del terreno (un array NumPy compresso)
- Dati di altitudine
- Edifici, Roccaforti nemiche e forzieri del tesoro
- Posizione del Castello
- Dettagli della mappa, oro iniziale e condizione di vittoria

---

## Editor di campagne

Le campagne si creano, aprono, importano ed esportano nella scheda Campagne del gestore mappe (il pulsante **Campagne** del menu principale). Aprire una campagna avvia l'editor di mappe con un pannello della campagna, così modifichi la mappa di ogni livello e le sue impostazioni in un unico posto.

### Funzionalità

- **Ordine dei livelli** — Sposta i livelli su e giù con i pulsanti freccia
- **Condizioni di vittoria** — Imposta le condizioni di vittoria per ogni livello, incluso il tipo di roccaforte per `destroy_building`
- **Testo narrativo** — Imposta il testo introduttivo e di completamento
- **Risorse iniziali** — Imposta l'oro iniziale per ogni livello
- **Continuità** — Mantieni oro, avventurieri e ricerche del livello precedente
- **Restrizioni sugli edifici** — Limita i tipi di edifici utilizzabili dal giocatore
- **Trigger** — Messaggi scriptati e sblocchi di edifici per un livello (solo livelli di campagna)
- **Campi del regno** — Il livello iniziale del castello, il limite di tempo, il consiglio del briefing e fino a due scoperte facoltative
- **Obiettivi aggiuntivi e sconfitte** — Altre condizioni di vittoria, richieste o facoltative, e altri modi di perdere (eroi caduti, edifici o carovane perduti), in due tabelle con Aggiungi e Rimuovi
- **Origine del bersaglio** — Sotto un bersaglio di vittoria: se il boss è piazzato sulla mappa o avviato da un trigger, e se il tipo di roccaforte è del gioco o di un plugin e quante ne stanno sulla mappa; il bersaglio di un obiettivo aggiuntivo dice lo stesso nel suggerimento

### Opzioni per le condizioni di vittoria

Gli editor le elencano per nome, nella tua lingua; il tipo in tabella è ciò che salva il file di una mappa o di una campagna.

| Tipo | Descrizione |
|------|-------------|
| `free` | Modalità libera, nessuna condizione di vittoria |
| `destroy_enemy_buildings` | Distruggi tutte le roccaforti nemiche |
| `survive_ticks` | Sopravvivi per una durata specificata |
| `reach_gold` | Accumula una quantità specificata di oro |
| `destroy_building` | Distruggi un tipo specifico di roccaforte |
| `defend` | Difendi il Castello per una durata specificata |
| `collect_chests` | Raccogli tutti i forzieri del tesoro |
| `defeat_boss` | Sconfiggi un boss con nome, piazzato sulla mappa o avviato da un trigger |
| `secure_trade` | Porta a termine un numero di giri di carovana e distruggi tutte le roccaforti nemiche |

### Struttura di salvataggio

```
campaigns/my_campaign/
├── campaign.json         # Metadati della campagna
├── level1.json           # Mappa del livello 1
├── level2.json           # Mappa del livello 2
└── level3.json           # Mappa del livello 3
```

---

## Condivisione dei contenuti personalizzati

- Le cartelle di mappe e campagne possono essere condivise semplicemente copiandole, oppure con le funzioni di esportazione e importazione del gestore mappe
- Posiziona le mappe ricevute in `maps/` per caricarle dal menu principale
- Posiziona le campagne ricevute in `campaigns/` per visualizzarle nel menu principale
- Se il gioco è avviato da Steam, **Pubblica nel Workshop** del gestore mappe mette una tua mappa o campagna nello Steam Workshop, e quelle a cui sei iscritto compaiono nei suoi elenchi contrassegnate con [Workshop]. Steam le mantiene aggiornate, quindi non si possono modificare, rinominare né eliminare; **Duplica** crea una mappa tua
- Una mappa o una campagna con un pacchetto di contenuti richiede quel plugin: condividi il pacchetto insieme a essa e pubblica prima il pacchetto (la finestra di pubblicazione propone poi l'elemento Workshop del pacchetto come elemento richiesto)
