---
title: "Sviluppo plugin"
---

## Creare e provare

Apri Creator / Workshop dal menu principale o dai gestori di mappe e plugin. Crea una mappa, una campagna a due livelli, un plugin o il tutorial del boss con il plugin associato; modifica, salva, convalida e prova offline. Gestisci progetti locali, abbonamenti, pubblicazioni, ricerca e attività. Il modello «Missione di regno» crea una campagna kingdom di un livello con briefing, taglie, ondate e un boss con un nome. Importa uno ZIP, un file di mappa o una cartella di progetto con «Importare contenuto» o trascinandolo sull'area di lavoro; «Esporta…» scrive uno ZIP o una cartella e «Apri cartella» mostra i file di un progetto. Entrambi chiedono una cartella (viene riproposta l'ultima), un nome già usato diventa nome-2, nome-3… e non si scrive mai nei contenuti scaricati da Steam. Ogni progetto compare con anteprima, tipo, versione, autore, se questo gioco può caricarlo e com'è andata l'ultima verifica; ogni elenco ha una ricerca e un filtro per tipo e dice perché è vuoto, e i dettagli del progetto selezionato riportano licenza, versioni del gioco, requisiti e cartella. «Nuovo progetto» elenca i modelli con ciò che crea ciascuno e mostra dove andrà il progetto prima di scrivere qualsiasi cosa. La convalida avvisa di roccaforti, forzieri e boss piazzati che gli eroi non possono raggiungere dal castello (un errore quando la vittoria ne ha bisogno) e limita una mappa a 64 roccaforti, 256 forzieri e 32 boss piazzati; un doppio clic su un problema in una casella apre lì l'editor. L'editor di terreno e campagne si apre in un processo a sé che carica solo le dipendenze del progetto, così i contenuti installati dal giocatore non compaiono né interferiscono; salva direttamente nel progetto. Verifica, esportazione, prova e pubblicazione attendono finché il progetto ha modifiche non salvate in un editor aperto dall'area di lavoro: usano i file salvati. Nell'editor dei plugin le fasi di un boss sono una tabella (la salute a cui inizia ciascuna, le sue abilità), e numero, limite e preavviso di un'abilità hanno campi propri. L'editor dei plugin conserva una bozza del lavoro non salvato poco dopo ogni modifica, accanto alle impostazioni e fuori dal progetto; riaprendo il progetto dopo un crash la ripropone. Nell'editor dei plugin «Duplica» copia una definizione con un nuovo ID, una definizione citata da un'altra non si può eliminare finché quell'uso esiste, e «Copia dal gioco…» aggiunge una copia completa di un attore del gioco con il suo stesso ID, che sostituisce l'originale dove è usato senza toccare i file del gioco. Classi, nemici, edifici, roccaforti e ricerche hanno un modulo delle proprietà (intervalli e crescita delle statistiche, oro lasciato, prezzi, la classe che un edificio recluta, chi invia una roccaforte, a cosa si applica una ricerca) che mostra in grigio i valori presi dalla definizione di base e segnala subito un valore fuori dai limiti del gioco o un ID sconosciuto; le dipendenze si modificano in una tabella. La scheda Risorse accetta i file trascinati, mostra l'area visibile di ogni immagine rispetto ai limiti di dimensione e memoria del gioco, la mostra come terreno o icona, conserva una riga di fonte e crediti, elenca e imposta le definizioni che la usano, rinomina un file con tutti i suoi usi, rifiuta di rimuoverne uno ancora usato e reindirizza i campi che citano un file mancante. Una prova si apre con l'elenco di ciò che ha caricato (ogni plugin in ordine di caricamento con le definizioni aggiunte o sostituite, e i plugin saltati con il motivo); l'area di lavoro mostra lo stesso elenco e mette una definizione saltata del plugin in prova nell'elenco dei problemi, dove aprire un problema di una tabella di definizioni porta a quella definizione nell'editor dei plugin.

Importazioni cartella/ZIP e copie modificabili ricevono nuovi ID con riferimenti del proprio namespace aggiornati. Autore, origine e licenza restano; i collegamenti di aggiornamento non vengono ereditati. Gli originali Steam sono in sola lettura. Si verificano percorsi relativi, limiti, array e cicli. Una licenza vuota non autorizza la redistribuzione. Pubblicando una copia, la revisione mostra la sua provenienza (progetto, versione, autore e pagina dell'originale) e le condizioni dell'autore originale, e viene inviata solo dopo che confermi di mantenere l'attribuzione e rispettare le condizioni o, se l'originale non indica una licenza, di avere il permesso del suo autore; una licenza non indicata vale sempre come nessun permesso di condividere. Una copia indica il suo originale nei dettagli e avvisa quando l'originale in abbonamento è cambiato, e i suggerimenti di Creare una copia modificabile locale, Esporta… e Annulla l'iscrizione dicono che cosa fa ciascuno.

Pubblicare richiede Steam: prepara pagina e anteprima, controlla l'istantanea immutabile di file/hash e conferma l'invio. Le attività continuano a finestra chiusa; la preparazione si può annullare. Risultati inviati o sconosciuti richiedono controllo o risincronizzazione prima di riprovare. I collegamenti distinguono account, app e progetto. Anteprima inferiore a 1 MiB; test con Steam simulato. Pubblica prima i plugin richiesti e conferma gli ID della stessa app nella revisione di mappa/campagna. La procedura salva testi per lingua e metadati JSON, ritaglia l’anteprima principale in un quadrato e ordina/elimina fino a otto immagini aggiuntive. Le pubblicazioni esistenti possono aggiornare solo pagina e dipendenze senza reinviare contenuti; le immagini sono incluse nell’istantanea verificata. La procedura può creare l'anteprima principale dal progetto stesso (il terreno di una mappa con castello, roccaforti e forzieri, i primi livelli di una campagna, le immagini proprie di un plugin, ognuno con il titolo), mostra l'anteprima come verrà caricata con la sua dimensione, disegna una didascalia facoltativa in fondo a ogni screenshot e segnala quali immagini citate da una bozza mancano. I suoi tre passi (pagina, dipendenze e versioni, verifica) si percorrono con Indietro e Avanti (Alt+Sinistra, Alt+Destra); un problema porta al suo passo e contorna il campo finché non viene modificato, e la verifica conta i file aggiunti, modificati e rimossi dall'ultima pubblicazione. Un'attività fallita dice che tipo di problema ha incontrato (permesso, accordo del Workshop, spazio, Steam occupato, tempo scaduto, Steam offline, controlli, esito sconosciuto, interruzione), cosa fare dopo e un codice come WS-PERM-R15 che non nomina account, elementi o file. Selezionando uno dei tuoi elementi in Le mie pubblicazioni si vedono visibilità, versione, date di creazione e aggiornamento, dimensione, il progetto locale collegato e un elenco di ciò che un aggiornamento da quel progetto cambierebbe: campi della pagina, file ed elementi richiesti. Selezionando un elemento nel browser si vedono la sua descrizione (o che Steam non ne ha fornita nessuna) e due parti separate: ciò che dice Steam (tipo, elementi richiesti, i rami del gioco consentiti dall'autore, la versione registrata dalla pubblicazione, data di aggiornamento, dimensione, voti) e, una volta installato da Steam, ciò che dice il suo manifesto (progetto e versione, se questa build può eseguire le versioni del gioco richieste, i progetti necessari, ciò che può modificare). Ciò che Steam non fornisce non viene inventato. Un elemento in abbonamento viene usato solo dopo che Steam lo ha installato e supera un controllo: il suo manifesto è leggibile da questo gioco e ogni progetto richiesto è installato in una versione accettata, senza cicli (se due elementi forniscono lo stesso progetto vale il tuo plugin, altrimenti l'elemento più vecchio). Un elemento che Steam sta aggiornando resta in uso nella versione installata. La scheda Abbonamenti mostra a che punto è ogni elemento in abbonamento (in attesa di Steam, in download con i byte, in attesa di controllo, disponibile, manca ciò che richiede, oppure non riuscito e perché), e il browser dice lo stesso per l'elemento selezionato; un download che Steam non ha potuto completare, ad esempio con il disco pieno, non viene richiesto di nuovo finché non premi Riprova il download. Prima di caricare un salvataggio, il gioco controlla i contenuti con cui è stato fatto: se un progetto usato è stato aggiornato, disattivato, tolto dagli abbonamenti o non è utilizzabile, o se sono attivi altri contenuti, li nomina uno per uno e, dopo aver chiesto, carica il salvataggio dalla sua copia conservata, oppure dice perché non può caricarlo (nessuna copia utilizzabile, un aggiornamento del gioco, un altro account o app di Steam, Steam non avviato) e come rimediare; il file del salvataggio e la partita in corso restano come erano. «Contenuti conservati…» nella scheda Abbonamenti elenca queste copie con i salvataggi che ne dipendono, le controlla e rimuove quelle inutilizzate; una copia da cui dipende un salvataggio va via solo dopo una conferma che nomina i salvataggi, quella della partita in corso mai. I dettagli di elementi e progetti indicano anche la versione di questo gioco (non impostata in una build di sviluppo, dove i contenuti che chiedono una versione precisa non si caricano) e il suo ramo Steam, e Apri la pagina dell'oggetto nella scheda Abbonamenti mostra un elemento non utilizzabile; se Steam passa il gioco a un altro ramo mentre è in corso, un avviso lo dice e niente si riavvia da solo. I tag di una pagina sono il suo tipo più uno qualsiasi tra Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; il passo della pagina elenca le lingue con una pagina scritta (ogni altra lingua di Steam mostra la pagina predefinita), e per un elemento già pubblicato «Importa la pagina da Steam…» confronta campo per campo la pagina su Steam con la bozza e prende solo i campi spuntati. Senza Steam gli elementi in abbonamento non si caricano e le copie conservate non si usano, perché appartengono a un account e a un'app di Steam (la demo e il gioco completo sono app separate, ciascuna con elementi, bozze e profili di contenuto propri); un salvataggio che ne ha bisogno lo dice, e creare, controllare, provare, esportare e importare i tuoi progetti funziona offline. Mentre una prova è in corso misura il tempo di tick, la memoria e l'atlante degli sprite, e l'area di lavoro li aggiunge al rapporto della prova valutati ok, da tenere d'occhio o troppo pesante, con ciò che aiuta; se un caricamento fallisce per i contenuti o la quota, la spiegazione cita i limiti di Steam, e uno completato ricorda di abbonarsi e controllare che si carichi, perché la pubblicazione non lo verifica. Un caricamento viene abbandonato solo dopo cinque minuti senza progressi, e le attività concluse o annullate escono dall'elenco una settimana dopo; le sessioni di prova che nessun gioco in corso usa vengono rimosse quando ne iniziano altre, Invio su un progetto locale apre il suo editor e queste finestre stanno su uno schermo 1280 × 720 in ogni lingua.

## Definizioni e dipendenze

I plugin con versione aggiungono classi, nemici, edifici e roccaforti indipendenti tramite modelli integrati, oltre ad abilità, ricerca, eventi, boss nominati, risorse e lingue. I nuovi ID usano `namespace:name`; un ID integrato sovrascrive il contenuto esistente. I file principali restano in sola lettura. Gli aspetti sostituiscono immagini di attori o terreno senza cambiare i valori di gioco. Un edificio del giocatore può avere un effetto: un'abilità di attacco, cura, scudo o stato che lancia a intervalli fissi su nemici o eroi a portata da un certo livello. Un pacchetto le cui capacità sono solo assets e languages può contenere solo skin e lingue, e un'immagine o un suono che il gioco non può usare lascia al suo posto quello integrato.

Il manifesto comune registra ID, autore, versione, compatibilità, risorse e dipendenze. Il caricamento è deterministico; dipendenze mancanti, incompatibili o cicliche lo bloccano. I vecchi formati mantengono l'ordine originale. I profili mostrano le sovrascritture e si applicano alla prossima partita. I profili di contenuto elencano i plugin scelti in ordine di caricamento, ciascuno con la provenienza e la versione installata, quella usata dalla partita in corso e quella scelta per la prossima volta; Su e Giù cambiano l'ordine solo dove le dipendenze lo consentono, e l'ordine vale per il prossimo caricamento nello stesso account e app di Steam. Prima di qualsiasi modifica il profilo elenca cosa attiverebbe o disattiverebbe l'applicazione, con mappe, campagne, plugin e salvataggi che usano un plugin disattivato; un doppio clic su un problema trova il suo plugin, una mappa o campagna può suggerire i plugin che le servono e un elemento in abbonamento non offerto, come la copia di un tuo plugin, dice perché.

## Esempi

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Risorse e limiti

| JSON | Risorse e limiti |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | l'albero delle abilità di una classe (abilità passive): un elenco di `{"id", "level", "effect", "requires": [ids]}`, quante se ne vogliono e più d'una per livello, oppure la vecchia tabella `{"<livello>": {"id", "effect"}}`, letta come una catena; gli id sono unici nella classe, `requires` nomina abilità della stessa classe, senza cicli |
| adventurer_classes.active_skill, tree_skills | le abilità attive proprie della classe, nodi dello stesso albero: `active_skill` è l'ID della prima (una radice), `tree_skills` fino a 12 ID di quelle che crescono dall'albero. Ciascuna è un'abilità di `skills` (mai summon), appresa al suo `level` quando l'eroe ha tutte quelle elencate in `requires` (fino a 8 ID di abilità della classe, passive o attive; nessuna per la prima), e ciascuna attende il proprio `cooldown`. Senza `active_skill` la classe mantiene la prima abilità della sua classe base |
| buildings.effect | un'abilità attack, heal, shield o status (mai summon), lanciata ogni 10–3600 tick dal livello 1–3 dell'edificio; gli stati non si sommano |
| research | stat_modifier |
| castle_branches | una via del castello: `id`, `playable`, `buildings` (ID di edifici, del gioco o del plugin stesso), `effects` e `level3` (numeri per nome d'effetto, i nomi usati dalle vie del gioco), `specialities` (nessuna, oppure due o più `{"id", "effects"}`). Una definizione con l'ID di una via integrata la sostituisce per intero; un ID `namespace:name` aggiunge una via, elencata dopo quelle del gioco e offerta ovunque ci siano vie. I suoi testi sono le chiavi di lingua `branch_<id>`, `branch_<id>_desc`, `branch_<id>_price`, `branch_<id>_level3`, `branch_<id>_heroes` e `speciality_<id>_<speciality>`. Un regno la cui via non è più caricata gioca come uno che non ne ha presa alcuna, e il salvataggio conserva la scelta |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; solo aspetto |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (disegnato opaco); skin dei personaggi: come il loro bersaglio; il resto, e layout fuori dai personaggi, non viene usato ed è segnalato |
| plugin art and sounds | 256 MiB di immagini decodificate (larghezza × altezza × 4) per tutti i pacchetti attivi, un file contato una volta, oltre resta la grafica integrata; 64 MiB di suoni dei plugin in memoria |
| capabilities: assets, languages only | solo skin e lingue; le altre definizioni sono rifiutate |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 mappe di livello |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Compatibilità con la versione del gioco

`game_version` limita la versione pubblicata del gioco in esecuzione. `"*"` è accettato anche per i progetti precedenti. Un intervallo specifico è accettato solo se la build dichiara una versione semantica nota che lo soddisfa; altrimenti vengono rifiutati validazione, caricamento e pubblicazione. In questo repository `game.build_info.GAME_VERSION` è attualmente sconosciuta: usa `"*"` finché la build di distribuzione non fornisce una versione approvata. La `version` del progetto e i nomi dei rami Steam non indicano la versione del gioco.
