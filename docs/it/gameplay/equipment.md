---
title: "Equipaggiamento e negozi"
---

Gli avventurieri acquistano automaticamente equipaggiamento e consumabili nei negozi vicino al Castello.

---

## Sistema di equipaggiamento

Gli avventurieri possono comprare armi e armature dal **Fabbro**:

| Equipaggiamento | Effetto per livello | Formula del prezzo | Livello max |
|-----------------|--------------------|--------------------|-------------|
| **Arma** | +3 ATK / livello | 100g × livello | 3 (richiede un Fabbro dello stesso livello) |
| **Armatura** | +2 DEF / livello | 100g × livello | 3 (richiede un Fabbro dello stesso livello) |

:::note[Requisito di livello del Fabbro]
Un Fabbro Lv.1 può vendere solo equipaggiamento Lv.1. Per dare ai tuoi avventurieri equipaggiamento migliore, devi potenziare il Fabbro.
:::

### Statistiche cumulative dell'equipaggiamento

| Livello | ATK Arma | DEF Armatura | Prezzo Arma | Prezzo Armatura |
|---------|----------|-------------|-------------|-----------------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Consumabili

### Pozioni

| Oggetto | Prezzo | Effetto |
|---------|--------|---------|
| **Pozione curativa** | 100g | Ripristina 40 HP |

- Gli avventurieri possono portare fino a **3** pozioni
- Rifornite automaticamente nei negozi
- Usate quando gli HP scendono sotto il 50%

### Pozione di velocità

| Oggetto | Prezzo | Effetto |
|---------|--------|---------|
| **Pozione di velocità** | 200g | Aumenta la velocità di movimento per 60 tick |

In vendita solo quando un Mercato raggiunge il Lv.2; un avventuriero ne porta al massimo 2.

### Anello antimorte

| Oggetto | Prezzo | Effetto |
|---------|--------|---------|
| **Anello antimorte** | 500g | Blocca un colpo letale |

In vendita solo quando un Mercato raggiunge il Lv.3.

---

## Comportamento d'acquisto

Gli avventurieri fanno acquisti automaticamente quando si fermano entro 7 caselle da un **Mercato** o **Fabbro**.

Al Mercato, in quest'ordine:

1. Bevono subito una pozione curativa se sono feriti
2. Comprano un Anello antimorte (Mercato Lv.3)
3. Riforniscono le pozioni che portano con sé (fino a 3)
4. Comprano Pozioni di velocità (Mercato Lv.2, fino a 2)

Al Fabbro comprano il livello di arma **successivo** e il livello di armatura successivo che possono permettersi, un livello per visita, fino al livello del Fabbro.

**Solo i negozi vendono.** Il castello, le gilde e le locande non vendono nulla: un eroe che ha bisogno di equipaggiamento o pozioni va a piedi da un Fabbro o a un Mercato (vedi *L'oro del regno* più sotto).

:::note[Entrate fiscali]
Ogni volta che gli avventurieri spendono oro (equipaggiamento, pozioni, studio) o lo guadagnano (uccisioni, forzieri), il **20%** dell'importo è la tassa del tesoro: il 30% durante un Aumento delle tasse, niente durante un Mercato nero. Attende nella cassa dell'edificio in cui l'oro è stato speso finché un esattore non la porta al castello.
:::

---

## L'oro del regno

Ogni moneta è registrata:

- **Il denaro va al negozio**: gli eroi comprano solo presso l'edificio stesso (il castello non vende nulla). Ciò che pagano è l'incasso di quell'edificio, e il tesoro trattiene la sua quota di tasse: 20%, 30% durante un aumento delle tasse, nulla durante un mercato nero.
- **Casse**: la quota del tesoro non arriva da sola. Attende nella cassa dell'edificio in cui l'oro è stato speso (la quota del bottino di un eroe attende alla sua gilda, e le entrate periodiche di un mercato nella sua cassa). Una cassa contiene 600 oro; ciò che non entra va perso, e un edificio che cade perde la sua cassa.
- **Esattore**: il castello ha un esattore che raggiunge la cassa più piena con almeno 40 oro, ne trasporta fino a 400 e li porta a casa, dove diventano oro del tesoro. Fugge dai mostri e non combatte mai; se viene ucciso, ciò che portava resta lì in un forziere, e un nuovo esattore lascia il castello 300 tick dopo. I pannelli degli edifici, del castello e dell'esattore mostrano ciò che attende e ciò che viene trasportato. Un castello di livello 2 tiene due esattori, uno di livello 3 ne tiene tre; ognuno va a una cassa diversa. Un esattore senza nulla da ritirare riposa dentro il castello, fuori dalla mappa, dove niente può raggiungerlo. Esce dal fronte del castello quando una cassa vale il viaggio, si ferma un momento davanti a quell'edificio per svuotarla e rientra una volta a casa; dopo essere fuggito da un mostro resta dentro per un po'. Il castello mantiene il suo numero di esattori, sostituendo ognuno che perde, e il suo pannello ha una riga per loro che dice dove si trova ciascuno. Un **Ufficio delle Imposte** (280 oro; quanti se ne vuole, ognuno più caro del precedente) mantiene un esattore in più, tutto suo: vive lì, esce dalla sua porta, porta lì ciò che riscuote, che diventa subito oro del tesoro, e viene sostituito lì 60 secondi dopo essere stato perso.
- **Impostazioni delle tasse**: il pannello di un edificio può togliere la sua cassa dai giri degli esattori (allora si riempie e l'eccesso va perso) o chiedere al prossimo esattore libero di svuotarla per prima, per quanto poco contenga; la panoramica del regno stabilisce quanto deve essere piena una cassa prima che un esattore si muova (20, 40 o 150 oro). Gli esattori scelgono ancora la propria strada, lasciano a dopo una cassa con un mostro vicino e fuggono dal pericolo. Il suggerimento dell'oro e la panoramica dividono l'oro del regno tra quanto si può spendere, quanto aspetta nelle casse, quanto portano gli esattori e quanto è nelle taglie aperte; la panoramica segnala anche quando gli eroi vogliono equipaggiamento o pozioni che nessun edificio vende, e il pannello di un edificio dice quanto dista dal castello. La panoramica imposta anche quanto sono prudenti i portatori della corona: esattori, carovane e operai della squadra fuggono da un mostro a 9, 6 o 4 caselle; i prudenti si perdono meno spesso e portano meno. Il suggerimento dell'oro aggiunge quanto devono le carovane sulla via del ritorno e quanto portano gli eroi. Una politica fiscale imposta entrambe le cose insieme: Sicura (solo casse piene, i portatori fuggono presto), Costante (i soliti giri) o Avida (anche casse piccole, i portatori tengono duro).
- **Stazione commerciale e carovana**: un regno può costruire quante stazioni commerciali riesce a pagare, ognuna più cara della precedente, ad almeno 45 caselle dal castello su un terreno raggiungibile a piedi da esso. La sua carovana, un mulo da soma, cammina fino al castello, scarica e torna indietro; un giro che ha raggiunto il castello versa 0,6 oro per ogni casella tra la stazione e il castello nella cassa della stazione, quindi una stazione più lontana rende di più e lascia la carovana fuori più a lungo. Avanza di una casella ogni 2 tick, a ogni tick su una strada. Un mostro in vista la manda all'estremità più vicina della strada finché non se ne va, uno accanto a lei la ferisce, e ti viene detto dove; una carovana perduta viene rimpiazzata dopo 400 tick. Richiede un castello di livello 2.
- **Le ricompense sono trasferimenti**: una taglia paga esattamente ciò che contiene. I moltiplicatori d'oro della difficoltà e dei tratti valgono solo per bottino e forzieri.
- **Comprato una volta, rifornito fino a un limite**: ogni livello di equipaggiamento, l'anello e ogni studio della biblioteca si comprano una volta; le pozioni si riforniscono fino a 3 e quelle di velocità fino a 2.
- **Razioni**: un eroe a riposo senza pozioni e senza oro per comprarne una riceve una pozione dalla sua gilda, al massimo una volta ogni 600 tick.
- **I negozi come servizi**: un mercato vende in base al proprio livello (pozioni di velocità dal livello 2, l'anello dal livello 3), un fabbro forgia equipaggiamento fino al proprio livello, una biblioteca insegna uno studio per livello e una locanda ospita tanti eroi quante sono le sue stanze. Un eroe va solo in un negozio che ha qualcosa di nuovo per lui e sceglie il più vicino, contando quello con un mostro entro 8 caselle come 40 caselle più lontano. Il pannello di un negozio mostra quanto gli eroi vi hanno speso, chi è in arrivo e gli ultimi sei clienti. Nulla viene pagato prima che l'eroe sia al banco, quindi un negozio che cade, si riempie o viene potenziato lungo la strada non lascia nessuno scambio a metà.
- **Libro mastro**: il gioco tiene un totale per ogni flusso (taglie, costruzione, ricerca, resurrezione, furto; tasse, commercio, rimborsi, demolizione, entrate inattese; ricompense, bottino, forzieri, saccheggio; equipaggiamento, scorte, studio, svago) con le ultime voci e l'incasso di ogni edificio, salvato con la partita. Tesoro, taglie e negozi devono quadrare ciascuno per conto proprio.
- **Panoramica del regno**: c'è una scheda «Regno» dietro il pannello Dettagli. Mostra il tesoro, le sue entrate e uscite per tipo, ciò che attende nelle casse e sugli esattori, quanto gli eroi hanno guadagnato e speso, i giri e le perdite delle carovane, la clientela di ogni negozio, le ultime registrazioni del libro mastro e ciò che richiede attenzione (un castello ampliabile, nessun esattore fuori, una carovana perduta, un negozio con un mostro vicino, una cassa piena). I nomi sono collegamenti che selezionano l'edificio o il castello e spostano lì la mappa. Sotto *Oro fermo* indica dove l'oro resta inattivo, ogni voce con un collegamento al luogo: la cassa più piena che gli esattori devono lasciare stare, le casse che singolarmente tengono meno di quanto fa muovere un esattore e la ricompensa più grande che nessun eroe ha accettato da due minuti.
- **Registri**: una scheda Registri (tasto L) elenca ogni eroe, gilda, lavoro e l'incasso di ogni edificio del regno, una riga ciascuno, con una casella di ricerca. Gli eroi si possono ridurre agli inattivi, a quelli su una taglia, ai feriti, a quelli che pensano di andarsene e a quelli senza gilda; le gilde a quelle con posto, alle piene e a quelle con mostri vicini; i lavori, nell'ordine in cui li prende la squadra della corona, agli edifici in costruzione, in potenziamento, danneggiati e ai lavori fermi; le entrate alle casse con oro, alle casse fuori dal giro degli esattori e ai negozi con mostri vicini. Un clic su una riga la mostra sulla mappa e un doppio clic ne apre i dettagli. I registri non danno ordini e non elencano nulla del nemico.
- **Livelli della mappa**: il pulsante Livelli nella barra in alto (tasto M) mette sulla mappa ciò che il regno sa. Rifornimenti cerchia ogni negozio, locanda, tempio e biblioteca con la distanza a cui un mostro allontana i clienti. Oro in viaggio scrive ciò che aspetta in ogni cassa e disegna il cammino di ogni esattore e la strada di ogni carovana. Lavori numera gli incarichi della squadra nell'ordine in cui li prende. Minacce note cerchia le tane che il regno ha visto, con una linea verso il castello da quella che raduna un'incursione. Portata degli incantesimi mostra dove si possono lanciare gli incantesimi della corona e la rete di guglie della via arcana. Verde va bene, ambra merita un'occhiata, rosso sono guai. Una tana che nessuno ha visto non è su nessun livello, e i livelli attivati vengono ricordati.
- **Briefing e cronaca**: la schermata della missione dà un briefing prima di iniziare: la storia, cosa fa vincere e perdere, cosa si può costruire e il consiglio del livello. Una scheda Cronaca conserva quel briefing e ciò che è stato annunciato da allora, il più recente per primo: consigli dello script, un covo avvistato, una taglia che nessun eroe accetta (con il motivo e la ricompensa che basterebbe), una carovana in difficoltà, un esattore o un edificio perduto, un boss che cambia tattica o cade. Ogni voce ha la sua ora e un collegamento che sposta la mappa; una ripetizione sullo stesso argomento viene contata sulla sua voce invece di essere ridetta, e una cronaca piena (60 voci) perde la più vecchia delle meno importanti. Le nuove voci compaiono due alla volta senza mettere in pausa il gioco. Un'impostazione impedisce a consigli e notizie minori di comparire: perdite e boss appaiono comunque, e tutto resta annotato. La cronaca si può tenere su un argomento (minacce, eroi, oro, oppure corona e consigli); la scelta viene ricordata.
- **Risultati**: quando una partita finisce, vinta o persa, una schermata dei risultati dice perché ed elenca l'obiettivo e ogni nemico con un nome con il suo esito, gli eroi ingaggiati, perduti e ancora in piedi, entrate e uscite del tesoro per tipo, le perdite di carovane ed esattori, i mostri abbattuti, i covi rasi al suolo, le taglie, gli edifici e il tempo di gioco. Ricorda fino a tre eroi: quello salito più in alto, quello che ha ucciso di più, il migliore tra i caduti. Un livello vinto è valutato con tre segni, ciascuno una frase semplice con i suoi numeri (obiettivo raggiunto; non più di un eroe su quattro perduto; nessun edificio perduto); nessuno riguarda la velocità. Da lì: il livello successivo, lo stesso livello di nuovo, il menu o, dopo una sconfitta, uno sguardo alla mappa. Il resoconto si può salvare come file di testo in una cartella `recaps` accanto alle impostazioni. Finire la storia della demo aggiunge ciò che è aperto ora e ciò che è previsto per il gioco completo.
- **Scoperte facoltative**: un livello può nascondere fino a due cose che vale la pena trovare; nessuna serve per vincere. Un convoglio di rifornimenti accerchiato dai mostri resiste sei minuti una volta trovato; un eroe che lo raggiunge con gli assedianti morti porta 300 oro di rifornimenti al tesoro. Un nascondiglio ha un custode due volte più resistente della sua specie: la corona pone una taglia «Uccidi» su di lui, e il forziere da 400 oro è degli eroi. Un tesoro sta sotto un covo che non manda incursioni: raderlo al suolo lascia un forziere da 500 oro. Non dicono nulla finché il loro luogo non viene visto; poi la cronaca le segnala, un elenco «Facoltativo» nella scheda Cronaca le segue con collegamenti, e la schermata dei risultati dice come sono finite. Le tre missioni della demo ne hanno una, una e due.
- **Difficoltà e ripresa**: facile e difficile cambiano numeri, mai la salute dei nemici: ogni incursione di un covo ha un predone in meno o due in più, un'ondata dello script ha il 75% o il 125% della sua dimensione, e un livello inizia con il 125% o l'85% del suo oro; la schermata della missione lo indica. I livelli della demo nominano un elenco (slime, ratto gigante, goblin, arciere goblin, lupo feroce, bandito, bruto orco, troll) per ciò che vaga sulle loro mappe, e non tirano mai gli eventi casuali che portano una forza propria, perché le loro incursioni sono annunciate. Un regno senza gilde e senza oro per una riceve la differenza dalla corona, al massimo una volta ogni cinque minuti, e un livello si può ricominciare in qualsiasi momento dal menu Esc.
- **La vita della città, vista e sentita**: una piccola icona sale sopra il punto in cui un eroe compra pozioni o armi, paga un letto o una lezione, un esattore svuota una cassa o consegna le tasse, una carovana viene pagata, una recluta si arruola, si guadagna un livello, un edificio viene potenziato o riparato, si apre un forziere o si scopre qualcosa. Ognuna ha un suo breve suono: più basso quanto più è lontana dalla vista, tre al massimo insieme e mai lo stesso due volte di fila. Un covo che raduna un'incursione porta sulla mappa un anello rosso pulsante e un corno, e sulla minimappa una cornice lampeggiante, finché l'incursione non parte; il corno, i tamburi di guerra e un boss si sentono da ovunque. Con il volume effetti a zero le icone dicono comunque tutto. I suoni sono sintetizzati da `tools/soundgen.py` e le icone sono generate dal generatore grafico; nulla è registrato o campionato.
- **Gli eroi rispondono**: selezionando un eroe si sente una breve risposta con la voce della sua classe e ciò che dice compare in cima al suo pannello. La risposta segue la sua situazione: ferito gravemente o in fuga verso casa, in combattimento, in cammino verso una taglia, a riposo al chiuso, intento a riparare un muro, a corto di provviste o di sonno, oppure pronto, quando ogni classe ha il proprio saluto. Arriva al massimo una risposta ogni 1,5 secondi, e la riga resta anche senza audio.
- **Ogni unità ha una voce**: un mostro, un esattore, una carovana e un abitante rispondono a un clic con il suono della propria specie, come un eroe risponde secondo il suo umore, e tutto ciò che cammina sulla mappa si sente quando cade. Un eroe e l'altra gente della corona (esattori, carovane, gli operai della corona, gli abitanti di una casa abbattuta) si sentono ovunque sia la visuale; un mostro si attenua con la distanza dalla visuale, la stessa specie si sente al massimo una volta ogni due secondi e al massimo due di questi suoni si sovrappongono. Nessun suono di un'unità dura meno di un secondo.
- **Musica**: il menu e la partita hanno ciascuno i propri brani, in ordine casuale: uno qualsiasi può aprire, e ogni brano suona una volta prima che uno si ripeta. Finché un boss con un nome è in campo suona la sua musica, e quella della partita torna quando cade; anche un castello caduto ha la sua.
- **Visibile sulla mappa**: il carro di un convoglio di rifornimenti bloccato, una ruota staccata e il carico mezzo scaricato, sta nel suo luogo da quando questo è esplorato finché il convoglio non è raggiunto o perso; un boss porta uno stemma a teschio cornuto sopra il nome e la barra della vita. Entrambi appaiono uguali su tutti e due i percorsi di disegno. Il Capo Zannastridente ha un aspetto tutto suo: elmo cornuto, scudo rosso, ascia bipenne e lo stendardo della sua banda sulla schiena.
