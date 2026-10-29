---
title: "Eventi casuali"
---

Il gioco attiva eventi casuali a intervalli regolari, aggiungendo imprevedibilità al gameplay. L'intensità degli eventi scala dinamicamente in base al numero di avventurieri. Il tutorial integrato non estrae mai un terremoto né un evento che metta una nuova struttura sulla mappa.

Le schede dei prestiti mostrano una lettera sigillata; ogni nuovo invito emette un solo suono discreto, al volume degli effetti. La scheda Eventi del regno nel pannello dei registri mostra inviti e prestiti in corso senza mettere in pausa il gioco. Le carte dei prestiti indicano il capitale da versare subito, la scadenza, i rimborsi e la perdita massima; rifiutare o ignorare un invito è gratuito. Gli editor di mappe e campagne salvano i gruppi di eventi: le impostazioni del livello hanno precedenza su quelle della campagna e poi della mappa, ed ereditare è diverso dal disattivare tutti i gruppi. Ogni gruppo aggiunge i propri eventi casuali (vedi Gruppi di eventi più sotto); un livello senza gruppi ha solo gli eventi di sempre. Le schede dei prestiti adattano il testo alla larghezza della barra laterale e scorrono verticalmente per rendere leggibili tutte le condizioni.

Con un prestito in corso, l’anteprima del livello successivo distingue tesoro attuale, capitale restituito senza interessi e oro previsto da trasferire. Vale la regola del livello di destinazione; l’anteprima non effettua pagamenti.

---

## Regole di attivazione degli eventi

| Impostazione | Valore |
|--------------|--------|
| Periodo di grazia iniziale | 1500 tick (~5 minuti) |
| Intervallo di verifica | Ogni 300 tick |
| Probabilità di attivazione | 60% |
| Cooldown degli eventi | 600 tick (~2 minuti) |

---

## Eventi di minaccia

Esercitano pressione sul giocatore per la loro durata e richiedono una risposta attiva.

| Evento | Durata | Peso | Effetto |
|--------|--------|------|---------|
| **Invasione di mostri** | 250 | 2 | I nemici avanzano verso il castello! |
| **Peste** | 200 | 0 | Tutti gli avventurieri subiscono danni periodici |
| **Luna di sangue** | 350 | 2 | I nemici diventano più forti e aggressivi |
| **Assalto dei non-morti** | 300 | 2 | Scheletri e zombie appaiono vicino al castello |
| **Razzia goblin** | 250 | 2 | I goblin attaccano i negozi e rubano oro |
| **Risveglio del nido di draghi** | 450 | 1 | Appare un nido di draghi che genera draghi. Distruggilo! |
| **Notte maledetta** | 300 | 2 | Nemici più veloci, ma 2x XP per uccisione |
| **Terremoto** | Istantaneo | 1 | Gli edifici e il castello subiscono gravi danni e le strade vengono distrutte |
| **Traditore** | Istantaneo | 1 | Un avventuriero casuale tradisce la gilda e diventa un nemico! Sulla mappa il traditore è contrassegnato come d'élite. |
| **Gilda ribelle** | 400 | 2 | Appare una gilda ostile che genera nemici. Distruggila! |
| **Inflazione** | 350 | 1 | Prezzi di pozioni ed equipaggiamento aumentati del 50% |
| **Sigillo del mana** | 250 | 1 | I maghi perdono tutta la potenza d'attacco |
| **Tempesta di sabbia** | 300 | 2 | Velocità e danni a distanza dimezzati |
| **Nebbia densa** | 250 | 1 | La nebbia di guerra ricopre la mappa, visione ridotta |
| **Infiltrazione di spie** | 350 | 2 | Ondate di nemici travestiti da avventurieri assaltano il castello |
| **Pioggia corrosiva** | 300 | 2 | Gli edifici perdono PV ogni tick (circa metà dei PV massimi per tutta la pioggia), riparazioni dimezzate |
| **Maledizione delle anime** | 300 | 1 | Gli avventurieri caduti si rialzano come zombie! |
| **Decadimento equipaggiamento** | Istantaneo | 1 | Tutti gli avventurieri perdono 1 livello di equipaggiamento |
| **Cancellazione della memoria** | Istantaneo | 1 | Tutti gli avventurieri perdono 2 livelli! |
| **Diserzione** | Istantaneo | 1 | Un quinto degli avventurieri (almeno uno) abbandona la gilda! |
| **Armi maledette** | 120 | 2 | Gli avventurieri subiscono il 30% di autodanno quando attaccano |
| **Sfida del campione** | Istantaneo | 2 | Un mostro campione si aggira nelle tue terre. Pericoloso e assai redditizio |
| **Rivolta dei mostri** | 350 | 2 | Ogni mostro che appare ora è veterano o peggio |

---

## Eventi positivi

Concedono al giocatore benefici o potenziamenti.

| Evento | Durata | Peso | Effetto |
|--------|--------|------|---------|
| **Pioggia di tesori** | 150 | 1 | Forzieri extra appaiono sulla mappa |
| **Aumento delle tasse** | 350 | 1 | Aliquota fiscale aumentata al 30% |
| **Frenesia edilizia** | 300 | 1 | Costi di costruzione dimezzati, riparazioni raddoppiate |
| **Benedizione del tempio** | 300 | 1 | Tutti gli avventurieri si curano lentamente ovunque |
| **XP doppia** | 350 | 1 | Tutti i guadagni di XP sono raddoppiati |
| **Ondata di reclutamento** | 300 | 1 | Velocità di reclutamento raddoppiata, capacità +1 |
| **Discesa del dio della guerra** | 300 | 1 | Tutti gli avventurieri guadagnano +50% ATT |
| **Muraglia di ferro** | 300 | 1 | Edifici e castello subiscono metà dei danni |
| **Ordine di marcia** | 250 | 1 | Tutti gli avventurieri si muovono più velocemente |
| **Stelle fortunate** | 300 | 1 | Oro e XP dai nemici raddoppiati |
| **Mercato nero** | 300 | 1 | Nessun reddito dalle tasse, ma equipaggiamento -30% |
| **Rinforzi alleati** | 350 | 1 | Alleati temporanei di alto livello si uniscono alla lotta |
| **Benedizione della forgia** | 300 | 1 | Equipaggiamento di tutti gli avventurieri +1 livello |
| **Barriera sacra** | 300 | 0 | I nemici vengono respinti lontano dal castello |
| **Saggezza condivisa** | 300 | 1 | Il 30% dell'XP guadagnata è condivisa con tutti |
| **Distorsione temporale** | 300 | 1 | Tutti i timer vanno a 2x — inclusi gli spawn nemici! |

---

## Eventi istantanei

Hanno effetto immediato senza durata.

| Evento | Peso | Effetto |
|--------|------|---------|
| **Mutazione élite** | 1 | Un nemico casuale muta in una potente élite! Sulla mappa è contrassegnato come d'élite. |
| **Avventuriero smarrito** | 1 | Un avventuriero di alto livello arriva dalle terre selvagge |
| **Ruota della fortuna** | 1 | Viene attivato un evento casuale! |
| **Risveglio dell'eroe** | 1 | Un avventuriero casuale si risveglia permanentemente come eroe! |
| **Mappa del tesoro** | 1 | Rivela un'area nascosta e genera forzieri preziosi |
| **Destini intrecciati** | 1 | Due avventurieri casuali si scambiano tutte le statistiche |
| **Arsenale divino** | 1 | Diversi avventurieri ricevono equipaggiamento di livello massimo |
| **Età dell'oro** | 1 | Ricevi oro in base al numero di edifici |
| **Dispersione** | 1 | Tutti gli avventurieri vengono teletrasportati in luoghi casuali |
| **Fortificazione** | 1 | Tutti gli edifici curati del tutto, PV max +20% |
| **Fontana della vita** | 1 | Tutti gli avventurieri curati del tutto, PV max +10% |
| **Roulette delle statistiche** | 1 | Le statistiche di ogni avventuriero vengono mescolate |
| **Mescolamento livelli** | 1 | I livelli degli avventurieri vengono ridistribuiti casualmente |
| **Clone** | 1 | Un avventuriero casuale viene duplicato! |
| **Accoglienza degli eroi** | 1 | I bardi cantano della tua gilda: un'ondata di fama |

---

## Eventi strutturali

Generano strutture persistenti sulla mappa.

| Evento | Durata | Effetto |
|--------|--------|---------|
| **Risveglio del nido di draghi** | 450 | Appare un nido di draghi che genera draghi. Distruggilo! |
| **Gilda ribelle** | 400 | Appare una gilda ostile che genera nemici. Distruggila! |
| **Rovine antiche** | 450 | Appaiono rovine sulla mappa. Chi arriva per primo ottiene ricompense! |
| **Squarcio dimensionale** | 300 | Appaiono portali che teletrasportano gli avventurieri a caso |

---

## Gruppi di eventi

Una mappa, una campagna o un livello può attivare uno qualsiasi dei cinque gruppi di eventi nell'editor. Ogni gruppo aggiunge gli eventi qui sotto a quelli di sempre, con la stessa estrazione e allo stesso ritmo, e un'offerta che rifiuti o ignori non costa mai niente. Passa il cursore su un gruppo nell'editor per vederne gli eventi.

## Gruppo Economia e servizi

### Richiesta di prestito reale

Con il gruppo «Economia e servizi» attivo, la corte reale di un regno vicino può chiederti un prestito dal tesoro, ma solo se hai almeno 400 oro. La somma viene fissata quando arriva la richiesta: metà del tuo tesoro, arrotondata per difetto a un multiplo di 50, tra 200 e 1.000 oro. Hai 30 secondi per decidere. Se presti, l'oro parte subito e torna 120 secondi dopo con il 10% di interessi. Ti serve prima? Richiamalo in anticipo e riavrai il 90%, quindi al massimo perdi un decimo. Se lasci il livello prima della scadenza, riavrai la somma senza interessi. Rifiutare o lasciar scadere la richiesta non costa nulla, e un prestito in corso non impedisce ad altri eventi di arrivare. La sua scheda in Eventi del regno mostra le somme esatte e i secondi che restano.

### Ordine estero

Con il gruppo «Economia e servizi» attivo, un compratore straniero può fare un ordine tramite il tuo mercato, purché tu abbia un mercato completato e una carovana in servizio su una via commerciale collegata a quel mercato. Hai 30 secondi per accettare. Accettare costa 150 oro anticipati. Le tue carovane evadono poi l'ordine durante i loro giri normali: ogni viaggio carico che parte porta una spedizione e usa 50 di quei soldi, e una spedizione conta solo quando è stata scaricata del tutto. Fai consegnare tre spedizioni entro 180 secondi e ricevi 450 oro. Se una carovana con una spedizione viene distrutta, il mercato cade, la via va perduta o il tempo scade, l'ordine fallisce e riavrai quello che non è stato speso. Puoi ritirarti alle stesse condizioni in qualsiasi momento. Rifiutare è gratis, e le solite entrate delle carovane e le tasse continuano come prima. La sua scheda in Eventi del regno mostra il mercato, la via e quante spedizioni sono partite e arrivate.

### Clinica itinerante

Con il gruppo «Economia e servizi» attivo, una clinica itinerante può offrirsi di sistemarsi presso una delle tue case del villaggio quando hai un eroe ferito in grado di raggiungerla. Hai 30 secondi per scegliere. Finanziala con 120 oro e la corona paga sei cure; dopo, gli eroi pagano da sé. Oppure lasciala aprire a pagamento, il che non ti costa niente: ogni eroe paga 20 oro di tasca propria. Cura due eroi alla volta. Gli eroi feriti ci vanno da soli quando nient'altro li trattiene (uno scontro, una bandiera, una notte alla locanda), e ogni cura dura 5 secondi e restituisce fino a 60 PS. Un eroe colpito o che se ne va a metà cura riavrà quanto ha pagato. La clinica accetta pazienti per 180 secondi, poi ha fino a 10 secondi per finire, e i soldi della corona avanzati tornano indietro. Rifiutare è gratis. La sua scheda in Eventi del regno elenca i pazienti, e Mostra ti porta lì dopo che hai visto il posto.

### Fiera del raccolto

Con il gruppo «Economia e servizi» attivo, una fiera del raccolto può arrivare in una delle tue case del villaggio. Lo sai 20 secondi prima e resta aperta 120 secondi. Non devi mandare nessuno: gli eroi feriti, a corto di pozioni o con voglia di una serata libera ci vanno da soli, purché nient'altro li trattenga (uno scontro, una bandiera, un gruppo che aspettano). Serve quattro eroi alla volta. Ogni cliente riposa 5 secondi e recupera 40 PS gratis, compra le pozioni che gli mancano al solito prezzo (la fiera ne porta 24 per tutta la permanenza) e paga una serata libera se ne ha voglia. Chi se ne va prima non paga niente. Finché è aperta puoi tenerla aperta 60 secondi in più, una volta sola, per 150 oro; le pozioni non vengono rifornite. La sua scheda in Eventi del regno mostra quando apre e chiude, chi c'è alle bancarelle e quante pozioni restano, e Mostra ti porta lì dopo che hai visto il posto.

## Gruppo Storie di avventurieri

### Gilda rivale in visita

Con il gruppo «Storie di avventurieri» attivo, una piccola gilda straniera può chiedere di accamparsi al margine della mappa, a più di 60 caselle dal tuo castello, per puntare a un forziere esplorato o a una tana ostile che non sia un obiettivo di missione e su cui non hai messo taglie. Hai 30 secondi per rispondere. Arrivano tre eroi di livello 1, un guerriero, un ranger e un mago, con un budget di 600 oro che li paga già; non reclutano mai nessun altro e restano 240 secondi. Consentire l'ingresso indipendente è gratis, e tengono quello che prendono. Cooperare costa 150 oro, pagati alla loro gilda e mai rimborsati: il bottino di quel bersaglio viene allora diviso in base al lavoro, un punto per ogni PS tolto al bersaglio o alle sue guardie e per ogni moneta presa, e la parte dei tuoi eroi va nel tuo tesoro. Rifiutare li tiene fuori; se non rispondi, entrano per conto loro. Quando il loro tempo finisce, il loro campo cade o diventano ostili, tornano a piedi verso il confine. La sua scheda in Eventi del regno mostra le quote.

### Un vecchio amico

Con il gruppo «Storie di avventurieri» attivo, uno dei tuoi eroi può chiedere di far venire un vecchio amico della stessa classe per affrontare una tana ostile esplorata che non sia un obiettivo di missione e non abbia taglie. Hai 30 secondi per rispondere. Sostenerli tiene da parte 200 oro per l'impresa. L'amico entra dal confine e cammina fino al punto in cui si trovava il tuo eroe; quando si incontrano, sulla tana compare una taglia «Uccidi» da 200 oro che solo loro due possono prendere. Hanno 180 secondi dal tuo pagamento e decidono da soli se andare. Quando la tana cade, ciascuno viene pagato con quei 200 oro per i danni a mura e guardie e per le cure che hanno davvero aiutato l'altro; se tutti e due hanno guadagnato una quota, il tuo tesoro riceve 100 oro. Poi, per 30 secondi, puoi invitare l'amico a unirsi se una gilda della sua classe ha posto; altrimenti torna a casa. I soldi non pagati tornano quando se ne va o si unisce. Rifiutare non costa nulla. La scheda è in Eventi del regno.

### Visita degli apprendisti

Con il gruppo «Storie di avventurieri» attivo, a un eroe di livello 4 o superiore si può chiedere di prendere con sé due apprendisti, se ci sono due letti liberi al castello o in una locanda e due forzieri esplorati entro 24 caselle dal mentore. Hai 30 secondi per rispondere. Paga 100 oro per l'alloggio, mai rimborsati, e due apprendisti di livello 1 della classe del mentore arrivano dal confine. Durante i 180 secondi di prova scelgono da soli cosa fare: ognuno di quei forzieri dà 15 XP e il suo contenuto a chi lo apre. Stare accanto al mentore non insegna niente, e il mentore continua come sempre. Alla fine della prova hai 30 secondi per ammettere gli apprendisti idonei («Ammetti apprendisti idonei»): quelli che hanno aperto un forziere, vogliono ancora restare e trovano posto in una gilda della loro classe. Tutti gli altri tornano a casa, anche prima se il mentore muore o l'alloggio va perduto. Rifiutare o ignorare non costa nulla. La scheda in Eventi del regno mostra i lavori e gli XP di ogni apprendista.

### Visita a casa

Con il gruppo «Storie di avventurieri» attivo, un eroe che ha una casa nel tuo regno può chiedere di andare a trovare la famiglia, purché almeno quattro eroi abbiano una casa e non più di un quarto sia via nello stesso momento. Hai 30 secondi per rispondere. «Consenti visita» gli dà 20 secondi di preavviso, poi fino a 180 secondi per raggiungere il confine; scontri, bandiere e cure vengono prima, e non parte se ha meno dell'80% di salute. Se non riesce a uscire, la visita salta senza costi. Resta via 120 secondi, tiene equipaggiamento e oro ma non guadagna niente e non sale di livello, e torna dallo stesso passaggio o da un altro sicuro. «Offri 150 oro per restare» si può fare una volta sola; l'oro va nella sua borsa solo se accetta, e se rifiuta non paghi niente e puoi ancora consentire o rifiutare la visita. Rifiutare, o non rispondere, lo tiene a casa gratis. La scheda in Eventi del regno lo segue mentre è via.

### Torneo degli avventurieri

Con il gruppo «Storie di avventurieri» attivo, da due a quattro dei tuoi eroi (liberi, con almeno il 75% di salute e interessati al premio) possono proporre un torneo in una radura esplorata accanto a una casa del villaggio. Hai 30 secondi per rispondere. Finanziarlo costa 300 oro: 100 per il luogo, che non tornano, e 200 tenuti da parte per i premi. Nei 30 secondi dopo il tuo pagamento si iscrivono a coppie, al massimo due incontri, e si avviano; il torneo intero ha 120 secondi. Ogni incontro dura 30 secondi. I colpi non possono portare nessuno sotto 1 PS e non danno XP di combattimento: chi porta l'avversario a 1 PS vince, altrimenti vince chi ha più salute, e a parità è pareggio. Ogni vincitore riceve 100 oro nella propria borsa alla chiusura, e i premi che nessuno ha vinto tornano a te. Un vero attacco dall'esterno lo interrompe subito. Rifiutare non costa nulla. La scheda in Eventi del regno elenca gli incontri e i soldi.

### L'incarico del bardo

Con il gruppo «Storie di avventurieri» attivo, un bardo può offrirsi di comporre una canzone su un'impresa di al massimo tre eroi indicati nella scheda: distruggere una struttura ostile che hai esplorato, a cui uno di loro deve fare danni; una carovana su una via commerciale attiva che parte dopo che hai accettato e scarica del tutto; oppure una bandiera di soccorso in cui uno di loro fa un nuovo lavoro di scorta ed è presente al pagamento. Hai 30 secondi per rispondere. «Finanzia l'incarico» costa 150 oro, spesi subito e mai rimborsati, e apre una finestra di 180 secondi. Nessuno riceve ordini: gli eroi scelgono da soli cosa fare, e una taglia d'assedio costa a parte. Se l'impresa riesce e tutti gli eroi indicati sono vivi, la tua fama sale di 10, una volta sola, e la canzone entra nella tua cronaca con i loro nomi. Se uno muore, il bersaglio va perduto o il tempo scade, niente fama. «Ritira l'incarico» lo chiude prima, sempre senza rimborso. Rifiutare non costa nulla. La scheda è in Eventi del regno.

## Gruppo Affari di confine

### Migrazione di mostri

Con il gruppo «Affari di confine» attivo, un branco di otto lupi crudeli può attraversare un angolo della tua mappa, entrando da un bordo e uscendo da quello accanto, ben lontano dal tuo castello, dalle città e dagli edifici. È un cambiamento naturale: niente da accettare o rifiutare. Lo sai 30 secondi prima; poi il branco ha 180 secondi per attraversare. I lupi non sono ostili: lasciano in pace il castello, le tue torri non gli sparano e i tuoi eroi li lasciano passare. Per cacciarli, metti una taglia «Uccidi» su un lupo visibile. Solo gli eroi che la prendono possono colpire per primi, e ogni lupo lascia al massimo 20 oro. Un lupo colpito richiama il branco entro 12 caselle. Se qualcosa blocca la strada, il branco aspetta 20 secondi e cerca un altro percorso, al massimo due volte. Allo scadere del tempo, se ne tornano da dove sono venuti. Le taglie non pagate vengono rimborsate quando se ne sono andati. La sua scheda in Eventi del regno mostra il percorso e i lupi che vedi.

### Contesa fra tane

Con il gruppo «Affari di confine» attivo, due tane rivali di tipo diverso possono contendersi il terreno che le separa, fuori dalle 60 caselle intorno al tuo castello. È un cambiamento naturale: niente da accettare. Lo sai 30 secondi prima; poi ogni tana manda sei dei suoi mostri verso un punto segnato. Non sono mostri in più: i sei di ogni tana vengono tolti dalla sua prossima incursione, e nessuno rimpiazza i caduti. Lo scontro dura fino a 180 secondi. Finisce prima se una parte resta senza combattenti, una tana cade o la strada è bloccata. Poi i sopravvissuti hanno fino a 120 secondi per tornare a casa e rimettersi di guardia. I mostri che si uccidono a vicenda non ti fruttano niente, e aspettare non dà ricompense. Puoi comunque mettere le solite taglie per attaccare una tana o difendere le tue strade. La sua scheda in Eventi del regno conta i combattenti che vedi da ciascuna parte, e i suoi pulsanti mostrano le due tane, il punto conteso e i combattenti dopo che li hai visti.

### Prigionieri fuggiti

Con il gruppo «Affari di confine» attivo, due prigionieri fuggiti possono raggiungere il bordo della tua mappa e chiedere asilo, con quattro inseguitori alle calcagna. Hai 30 secondi per rispondere. Accoglierli costa 200 oro: due bandiere di soccorso da 100 oro, una su ciascun prigioniero. Gli eroi prendono le bandiere da soli e scortano i prigionieri alla tua locanda o al castello, che deve avere due letti liberi, entro 150 secondi. Ogni prigioniero che arriva sano e salvo ottiene un letto e, come ogni bandiera, vale 5 di fama se la scorta ha avuto un vero lavoro da fare. Un prigioniero che scappa dal pericolo senza scorta non conta. Finito il tempo della scorta, i prigionieri salvati che lo desiderano possono prendere un posto libero nelle tue gilde: hai 30 secondi per invitarli o lasciarli andare. Tutti gli altri tornano verso il confine. I soldi delle bandiere non usati tornano, meno la solita penale di annullamento. Rifiutare o aspettare non costa nulla e non manda inseguitori. La sua scheda in Eventi del regno segue ogni prigioniero.

### Disertore nemico

Con il gruppo «Affari di confine» attivo, un predone di una gilda rivale a te ostile può chiedere asilo. Hai 30 secondi per rispondere. Concederlo tiene da parte 100 oro, spesi solo se il disertore raggiunge un letto libero nella tua locanda o nel castello mentre fino a due suoi ex compagni di gilda lo inseguono. La protezione dura 120 secondi. Dire di sì ti dà anche un rapporto sulla posizione del campo della sua gilda. Il rapporto non vale più dopo 120 secondi o appena il campo sparisce, e non dirada la nebbia. Alla fine della protezione, un disertore contento che trova un posto libero in una delle tue gilde può essere invitato a unirsi, tenendo il suo equipaggiamento. Hai 30 secondi per invitarlo o lasciarlo andare. Altrimenti se ne va verso la sua uscita, e l'oro non speso torna. Rifiutare non costa nulla e non porta vendette. La sua scheda in Eventi del regno mostra l'oro tenuto da parte e quello speso, e il rapporto.

### Bestie in nidificazione

Con il gruppo «Affari di confine» attivo, un branco di lupi può tentare di stabilirsi su un terreno selvaggio aperto appena oltre le 60 caselle intorno al tuo castello. È un cambiamento naturale: niente da accettare. Lo sai 30 secondi prima; poi arrivano due lupi. Almeno 30 secondi dopo, se uno è ancora sul posto, ne arrivano altri tre e cominciano a scavare una tana. Scavare richiede 40 secondi di lavoro di un lupo che resta tranquillo lì vicino, quindi i combattimenti lo rallentano. Uccidi il branco e la storia finisce: mai più di cinque lupi e una tana, e i morti non vengono rimpiazzati. Ogni lupo lascia al massimo 20 oro e una tana finita ne contiene 20, 120 oro in tutto. Se li lasci fare, la tana viene finita ma non manda mai altri lupi; puoi attaccarla come qualunque altra tana. Tutto finisce 280 secondi dopo l'avviso, e una tana scavata a metà sparisce. Se il posto viene occupato, il branco si sposta, al massimo due volte. La sua scheda in Eventi del regno mostra la fase, lo scavo e il tempo che resta.

### Emissario del duello

Con il gruppo «Affari di confine» attivo, un eroe in salute di una gilda rivale a te ostile può venire sotto tregua a sfidare uno dei tuoi, in un punto accanto a una delle tue case del villaggio. Hai 30 secondi per rispondere. Finanziare il duello costa 100 oro, tenuti da parte come premio. Poi uno dei tuoi eroi liberi può iscriversi entro 30 secondi. Non scegli tu: ogni eroe mette sulla bilancia premio e gloria contro il livello e l'equipaggiamento dell'emissario. C'è un solo incontro di massimo 30 secondi e nessuno muore. I danni si fermano a 1 PS, e chi ci porta l'altro vince. Altrimenti, allo scadere del tempo vince chi è più in salute. Il vincitore si prende i 100 oro, da qualunque parte stia. Se nessuno si iscrive, l'incontro finisce in pareggio o un attacco esterno lo interrompe, l'oro torna. Il duello non dà esperienza di combattimento. Poi l'emissario torna a casa. Rifiutare non costa nulla e non scatena nessuna guerra. La sua scheda in Eventi del regno mostra lo sfidante, l'incontro e i soldi.

## Gruppo Esplorazione e ambiente

### Piena del fiume

Con il gruppo «Esplorazione e ambiente» attivo, un fiume può salire su un tratto della sua riva. È un cambiamento naturale: hai 30 secondi di preavviso, e la riva (fino a 12 caselle) viene tratteggiata in ambra sulla mappa. L'acqua non cade mai addosso a nessuno. Chi si trova lì, eroe o mostro, si sposta prima, e l'acqua aspetta che la riva sia vuota. Resta fino a 120 secondi dopo l'avviso, poi si ritira da sola; se la riva non si svuota mai, il fiume non sale. Nessuno può camminare sulle caselle allagate, ma le piene arrivano solo dove c'è un modo per girarci intorno, lontano dal castello e dagli edifici. Prima che finisca l'avviso puoi pagare 150 oro, una volta sola, per tenere all'asciutto 4 di quelle caselle (prima le strade, poi quelle più vicine al castello), senza rimborso anche se l'acqua non sale mai. Se lo ignori, l'acqua viene e se ne va, e basta. La sua scheda in Eventi del regno mostra il conto alla rovescia e passa in rassegna le caselle della riva e quelle protette che hai visto.

### Fioritura delle erbe

Con il gruppo «Esplorazione e ambiente» attivo, possono fiorire erbe selvatiche vicino alle tue case del villaggio. È un cambiamento naturale: lo sai 20 secondi prima, e la fioritura dura 120 secondi. Servono un abitante libero e un eroe con spazio per le erbe. Spuntano fino a 12 piante, tra 8 e 16 caselle da una casa del villaggio e lontano dal castello, ciascuna un fascio di 2 erbe (24 al massimo). Gli eroi non possono raccoglierle sul posto. Gli abitanti senza lavoro ci vanno da soli, raccolgono per 5 secondi e portano il fascio a casa, dove gli eroi di passaggio prendono le erbe. Se si avvicina un mostro, l'abitante lascia cadere il fascio dove si trova, e lì resta. Non c'è niente da pagare né da scegliere: tieni i mostri lontani dai loro sentieri con le tue solite difese. Allo scadere del tempo le piante non raccolte appassiscono, ma le erbe raccolte restano. La sua scheda in Eventi del regno elenca le zone che hai visto e quanto è arrivato, e «Mostra la prossima zona nota» le passa in rassegna.

### Sorgente curativa

Con il gruppo «Esplorazione e ambiente» attivo, una sorgente curativa può sgorgare nelle terre selvagge quando uno dei tuoi eroi è ferito. È un cambiamento naturale: lo sai 20 secondi prima, poi scorre per 150 secondi e offre 6 usi. Compare tra 16 e 24 caselle da un eroe ferito, e non sai dove finché un eroe non arriva entro 8 caselle; allora lo senti, e la scheda mostra il punto. Non devi mandare nessuno: gli eroi feriti ci vanno da soli, uno alla volta. Ognuno riposa lì 5 secondi e recupera fino a 60 PS, gratis. Un eroe che viene colpito, combatte o ha un mostro vicino se ne va prima senza consumare un turno; gli eroi in piena salute non ci vanno. Ignorarla non costa nulla. Si prosciuga quando finiscono il tempo o gli usi. La sua scheda in Eventi del regno fa il conto alla rovescia, dice chi ci sta riposando, e «Mostra la sorgente scoperta» ti porta lì una volta trovata.

### Colpi dal sottosuolo

Con il gruppo «Esplorazione e ambiente» attivo, la tua gente può sentire bussare sotto un terreno aperto esplorato, tra 16 e 24 caselle da uno dei tuoi eroi. Hai 30 secondi; rifiutare o lasciar perdere è gratis. Indaga per 100 oro e lì compare una bandiera di esplorazione: l'eroe che la prende lavora sul posto 5 secondi senza mostri entro 6 caselle, e riceve i 100 oro. Se nessuno finisce entro 120 secondi, i 100 oro tornano. Poi la scheda dice cosa c'è sotto, e scegli prima che finiscano quei 120 secondi. Un sopravvissuto intrappolato: finanzia una bandiera di soccorso da 100 oro, e gli eroi hanno 120 secondi per portarlo al castello, per 5 di fama. Un vecchio passaggio: esploralo gratis; dopo 5 secondi di lavoro di un eroe, tre caselle diventano strada. Una camera sorvegliata: paga 200 oro, sconfiggi i suoi quattro scheletri (niente bottino), lavoraci 5 secondi, e il tesoro riceve 300 oro. Oppure sigilla il posto gratis. «Abbandona il lavoro incompleto» restituisce l'oro ancora tenuto da parte. La sua scheda in Eventi del regno segue ogni passo.

### Lettera alla deriva

Con il gruppo «Esplorazione e ambiente» attivo, una lettera può arenarsi su una riva esplorata vicino al tuo castello, con una richiesta d'aiuto. Hai 30 secondi per rispondere, e tutto deve finire entro 180 secondi dal suo arrivo; accettare tardi non aggiunge tempo. Rifiutarla o ignorarla è gratis. Accettare costa 150 oro: 50 per la ricerca, 100 tenuti da parte per due bandiere di soccorso da 50 oro. Poi un eroe deve arrivare entro 3 caselle dalla riva, di solito grazie a una bandiera di esplorazione che metti lì (che costa a parte). Compaiono due sopravvissuti, con due lupi crudeli a 6 caselle, e ognuno riceve una bandiera di soccorso. Gli eroi che accompagnano un sopravvissuto al castello vengono pagati, e ogni ritorno sano e salvo vale 5 di fama. A volte i sopravvissuti sono feriti e prima hanno bisogno di un'erba ciascuno, che la scorta dà o va a prendere lì vicino. Se nessun eroe raggiunge la riva in tempo, i 100 oro tornano; anche «Ritira soccorso» restituisce ciò che non è stato speso. La sua scheda in Eventi del regno mostra l'indizio, il tempo che resta e chi è al sicuro.

## Gruppo Storie di gilde

### L’ultima spedizione di un veterano

Con il gruppo «Storie di gilde» attivo, un eroe di livello 6 o superiore che ha già aiutato ad abbattere un nemico o una tana pericolosi mentre il gruppo era attivo può chiedere un'ultima spedizione contro una tana che riesce a raggiungere. Hai 30 secondi per decidere. Finanziarla costa 250 oro e mette una bandiera su quella tana; altri eroi possono unirsi e aspettare il veterano prima di partire. Hanno 180 secondi. Se la tana cade in tempo e il veterano sopravvive dopo averla colpita, i membri sopravvissuti si dividono i 250 oro in base a quanto della tana ha abbattuto ciascuno, e il resto torna indietro. Comunque vada, un veterano che accetta si ritira appena è tornato sano e salvo alla sua gilda; se ti ritiri prima che partano riavrai i soldi, ma lui si ritira lo stesso. Un veterano che vince e si ritira dà alla prossima recluta della sua gilda una lezione di 20 secondi che vale 30 XP. Chi muore viene ricordato, senza lezione. Rifiutare, rimandare o ignorare non costa nulla, e l'eroe resta. La sua scheda in Eventi del regno segue ogni passo.

### Stemma di famiglia perduto

Con il gruppo «Storie di gilde» attivo, un eroe può chiederti di ritrovare lo stemma perduto della sua famiglia, in un punto delle terre selvagge che può raggiungere. Hai 30 secondi per finanziare un'indagine da 100 oro: lì compare una bandiera, e l'eroe che lavora sul posto per 5 secondi riceve quei 100 oro. Prima che scadano i 120 secondi, puoi finanziare il recupero per 150 oro. Compaiono quattro scheletri di guardia e 50 oro vanno subito in provviste; una volta morte le guardie, altri 5 secondi di lavoro portano alla luce lo stemma e pagano 100 oro a chi ha lavorato. Poi, entro 120 secondi, un eroe libero lo porta al castello, dove il proprietario deve andargli incontro. Il proprietario ottiene un'impresa per la sua storia, e per 120 secondi i suoi rancori si placano un po' più in fretta. Se chi lo porta muore, lo stemma cade dove è caduto. Se muore il proprietario, puoi proseguire per commemorarlo, senza ricompensa, oppure ritirarti. Ritirarti o lasciar scadere il tempo restituisce i soldi non spesi; rifiutare o rimandare è gratis. La sua scheda in Eventi del regno mostra ogni passo.

### Disputa sugli ideali della gilda

Con il gruppo «Storie di gilde» attivo, una gilda può dividersi sul da farsi: fino a tre eroi prudenti vogliono difendere, fino a tre più audaci vogliono attaccare una tana. Hai 30 secondi per sostenere una delle due parti con 150 oro. Sostenere la difesa mette una bandiera di difesa alla gilda (o al castello) per la squadra prudente. Sostenere la spedizione mette una bandiera d'attacco sulla tana per la squadra audace. Solo quella squadra può prendere la bandiera, e non paga oro. I soldi comprano invece pozioni: fino a sei, a 25 oro l'una, che i membri della squadra a corto di scorte ritirano alla gilda. La squadra ha 120 secondi, e una spedizione finisce prima quando la tana cade. Combattere o curare davvero vale 2 di fama per ogni eroe e nemico, fino a 10 di fama in tutto. Stare solo di guardia non dà niente. I soldi non usati tornano. Restare neutrale, rifiutare o ignorare non costa nulla, e l'altra parte resta fedele. La sua scheda in Eventi del regno indica le due squadre e il bersaglio.

### Maestro in visita

Con il gruppo «Storie di gilde» attivo, un maestro in pensione può offrirsi di venire in visita quando uno dei tuoi eroi ha ancora un'abilità di classe da imparare. Il maestro si sistema presso una casa del villaggio o appena fuori dal castello. Hai 30 secondi per scegliere: finanziare tre lezioni per 150 oro, oppure lasciare che gli eroi paghino da sé, il che non ti costa nulla. Il maestro arriva a piedi dal confine, e le lezioni continuano fino a 180 secondi dopo la tua scelta. Gli eroi della classe del maestro e di livello inferiore al suo vengono se vogliono, due alla volta, una lezione a testa per visita. Una lezione dura 20 secondi e dà 25 XP fissi, che i bonus agli XP non aumentano. Costa 50 oro dalla borsa dell'eroe, a meno che non la copra il tuo finanziamento. Un eroe ferito a metà lezione riavrà la parte non usata della quota e può tornare a finirla. Non si insegnano abilità: quelle arrivano sempre gratis al solito livello. Poi le lezioni in corso hanno altri 20 secondi, il maestro se ne va e il finanziamento non usato torna. Rifiutare è gratis.

---

## Giorno, notte e meteo

Una partita libera può iniziare con il giorno che scorre, con il meteo o con entrambi; ciascuno si spunta a parte e nessuno è un evento: non c'è nulla a cui rispondere.

- **Un giorno** dura 8, 12 o 16 minuti di gioco, a scelta: alba, giorno, tramonto e notte. La barra in alto indica il giorno, la sua parte e il meteo, e il suggerimento dice che cosa viene dopo e quando. La previsione è sempre ciò che arriva.
- **Pioggia e temporali** fermano chi cammina fuori dalle strade, eroe o mostro, un turno su dieci al massimo. Sulle strade si cammina all'asciutto.
- **Foschia e notte** accorciano di un quarto al massimo ciò che vedono eroi ed edifici. Vicino al castello e agli edifici del regno le finestre sono accese e la notte non toglie nulla; un arciere non vede mai meno lontano di quanto tiri.
- **Il vento** toglie un decimo del danno di frecce, dardi e giavellotti. Gli incantesimi non vengono spostati.
- **Una tempesta di sabbia o una nebbia fitta** prende il posto del meteo dove regola la stessa cosa: le due non si sommano mai.
- **I mostri hanno i loro orari.** Scheletri, zombi, spettri, cultisti, ragni e ratti sono lenti di giorno; goblin, orchi, banditi, arpie e la fanteria della legione di notte. Troll, lupi e il drago non ne hanno.
- **Visto l'ultima volta.** Un mostro che esce dalla vista del tuo regno lascia un punto interrogativo che svanisce dove è stato visto l'ultima volta. È un segno, non il mostro: sparisce quando lo si rivede o si guarda quel punto.

## Strategie di risposta

:::tip[Eventi di minaccia]
- Mantieni sempre una difesa permanente di Guardie e Torri di frecce
- Durante gli eventi di invasione, assicurati che ci sia abbastanza potenza di combattimento attorno al Castello
- Invia spedizioni con taglie per distruggere i Nidi di draghi e le Gilde ribelli il prima possibile
- Entrambi sono segnati sulla mappa appena compaiono: fai clic su uno per vederne la salute e mettici una taglia «Uccidi» per mandare gli eroi a raderlo al suolo
:::

:::tip[Sfruttare i potenziamenti]
- Durante XP doppia, fai combattere i tuoi avventurieri il più possibile per salire di livello
- Durante Frenesia edilizia, cogli l'occasione per espanderti
- Durante Ondata di reclutamento, assicurati di avere abbastanza edifici di reclutamento attivi
:::