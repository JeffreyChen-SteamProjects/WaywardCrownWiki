---
title: "Eventi casuali"
---

Il gioco attiva eventi casuali a intervalli regolari, aggiungendo imprevedibilità al gameplay. L'intensità degli eventi scala dinamicamente in base al numero di avventurieri. Il tutorial integrato non estrae mai un terremoto né un evento che metta una nuova struttura sulla mappa.

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

## Giorno, notte e meteo

Una partita libera può iniziare con il giorno che scorre, con il meteo o con entrambi; ciascuno si spunta a parte e nessuno è un evento: non c'è nulla a cui rispondere.

- **Un giorno** dura 12, 24 o 48 minuti di gioco, a scelta: alba, giorno, tramonto e notte. La barra in alto indica il giorno, la sua parte e il meteo, e il suggerimento dice che cosa viene dopo e quando. La previsione è sempre ciò che arriva.
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