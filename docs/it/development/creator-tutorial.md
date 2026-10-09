---
title: "Tutorial del creatore"
---

Ogni modello parte da **Creatore e workshop su Steam** (menu principale, gestione mappe o gestione plugin) e segue lo stesso percorso da **Nuovo progetto** a un elemento privato del Workshop. Solo l'ultimo passo richiede Steam.

## I passi comuni

1. **Nuovo progetto**: scegli un modello, un nome e una cartella. La finestra mostra dove andrà il progetto prima di scrivere qualcosa.
2. **Modifica progetto**: un plugin si apre nell'editor dei plugin; una mappa o una campagna si apre con **Apri l'editor di terreno / campagna**, in un processo a sé che carica solo ciò che il progetto richiede. Salva prima del passo successivo: controlli, prove e pubblicazione usano i file salvati.
3. **Convalida contenuto**: ogni problema dice dove si trova; un doppio clic apre l'editor in quel punto.
4. **Prova di gioco**: una partita separata con solo questo progetto e ciò che richiede. Il suo rapporto elenca cosa si è caricato e, mentre è in corso, il tempo di tick, la memoria e l'atlante degli sprite, valutati da ok a troppo pesante.
5. **Esporta…**: uno ZIP o una cartella con lo stesso ID di progetto, da conservare o condividere.
6. **Pubblica nel Workshop**: con Steam avviato, scegli **Privato** per una prima prova, poi **Controlla e rivedi** e **Invia la pubblicazione**. La pubblicazione non verifica il caricamento: trova l'elemento in **Sfoglia Workshop**, usa **Iscriviti** e seguilo in **Abbonamenti** finché è disponibile.

## Mappa

Il modello è una mappa 32×32 con un castello, uno scrigno da 100 oro due caselle a est, 500 oro iniziali e la vittoria raccogliendo gli scrigni.

1. Dipingi il terreno e piazza edifici, roccaforti e scrigni nell'editor del terreno, poi salva.
2. **Convalida contenuto** avvisa di una roccaforte, di uno scrigno o di un boss che gli eroi non raggiungono dal castello.
3. Versione: alza **Versione del progetto** a ogni modifica pubblicata. I salvataggi fatti con la versione precedente ne conservano una copia.

## Campagna

Il modello ha due livelli, ciascuno con una propria mappa con lo stesso castello e scrigno; il file della campagna li ordina e dà a ognuno un titolo, un testo di storia e oro iniziale.

1. Apri il pannello della campagna nell'editor del terreno per ordinare i livelli e impostare vittorie, testo di storia, ciò che si porta avanti e gli inneschi.
2. **Prova di gioco** può partire da qualsiasi livello.
3. Dipendenze: quando un livello usa le unità di un plugin, aggiungi il progetto di quel plugin in **Dipendenze** con un intervallo di versioni come `>=1.0.0, <2.0.0`.

## Plugin

Il modello contiene una classe di eroe, un nemico, un edificio che recluta la classe, una roccaforte che manda il nemico, un'abilità, una ricerca, un evento, un boss con nome, un aspetto di casella e un file di lingua inglese, tutto nello spazio dei nomi del progetto.

1. Modifica ogni tipo nella sua tabella; il modulo delle proprietà rende grigi i valori presi dalla definizione di base e segnala subito un valore fuori dai limiti del gioco.
2. Risorse: la scheda **Risorse** accetta i file immagine trascinati e confronta ciascuno con i limiti di dimensione e memoria. L'aspetto di casella del modello usa `preview.png` come immagine d'esempio; sostituiscila lì.
3. Sostituzioni: **Copia dal gioco…** aggiunge una copia completa di un personaggio del gioco con il tuo ID, che sostituisce l'originale dove è usato. Una definizione con un ID integrato (per esempio `SLIME` con base `SLIME`) cambia lo slime del gioco finché il plugin è attivo; **Profili di contenuto** mostra quale sostituzione prevale.
4. Versioni: **Versione del progetto** è la versione del progetto; **Versioni di gioco supportate** è l'intervallo di versioni del gioco che accetta (`*` per tutte; una build di sviluppo accetta solo `*`).

## Tutorial dei boss (plugin + campagna con due livelli)

Il modello è una cartella con un plugin e una campagna di due livelli che lo richiede; il secondo livello si vince sconfiggendo il boss con nome del plugin.

1. Le **Dipendenze** della campagna nominano progetto e versione del plugin, quindi una prova porta con sé il plugin.
2. Pubblica prima il plugin, poi la campagna: la finestra di pubblicazione suggerisce l'elemento del Workshop del plugin come elemento richiesto.
3. Alza la **Versione del progetto** del plugin a ogni modifica; tieni l'intervallo della campagna abbastanza ampio da accettarla.

## Missione di regno (un livello: briefing, taglie, ondate, un boss)

Il modello è un livello del regno con un briefing, una città, una tana, le bandiere Esplora, Uccidi e Difendi della corona, due ondate annunciate, un boss con nome e un ritrovamento facoltativo. Smontalo livello per livello nel pannello della campagna, poi segui i passi comuni.

## Cosa un modello non contiene mai

Un modello non contiene nessun vero ID di elemento del Workshop, nessun account Steam e nessun percorso assoluto: gli ID di progetto nascono nuovi sul tuo computer e ogni file è indicato relativamente al progetto.
