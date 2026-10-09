---
title: "Roccaforti nemiche"
---

Le roccaforti nemiche sono basi nemiche sparse per la mappa. Mantengono guardie proprie e la maggior parte di esse fa incursioni contro la tua città (vedi *Incursioni dei covi* più sotto).

---

## Tipi di roccaforti

| Roccaforte | Nemici generati | Dimensione | Restrizione |
|------------|----------------|------------|-------------|
| **Pozza di slime** | Slime | 11 caselle | -- |
| **Accampamento goblin** | Goblin / Lupo crudele / Arciere goblin | 11 caselle | -- |
| **Fortezza goblin** | Goblin / Bruto orchesco / Arciere goblin / Troll | 23 caselle | Una per mappa |
| **Cimitero** | Scheletro / Zombie | 11 caselle | -- |
| **Castello dei non-morti** | Zombie / Scheletro / Cultista oscuro | 23 caselle | Una per mappa |
| **Nido di draghi** | Drago / Arpia | 16 caselle | -- |
| **Nido di ragni** | Ragno gigante / Ratto gigante | 11 caselle | -- |
| **Accampamento dei banditi** | Bandito / Lupo crudele | 11 caselle | -- |
| **Tomba delle sabbie** | Spettro delle sabbie / Scheletro | 13 caselle | -- |
| **Tana dei lupi** | Lupo crudele | 11 caselle | -- |
| **Accampamento di guerra orchesco** | Bruto orchesco / Goblin | 13 caselle | -- |
| **Torre di guardia goblin** | Arciere goblin / Goblin | 9 caselle | -- |
| **Santuario oscuro** | Cultista oscuro / Scheletro | 11 caselle | -- |
| **Caverna del troll** | Troll | 13 caselle | -- |
| **Tana dei ratti** | Ratto gigante | 9 caselle | -- |
| **Nido delle arpie** | Arpia | 11 caselle | -- |
| **Gilda ribelle** | Bandito | 9 caselle | Solo tramite evento |

:::note[Una per mappa]
La Fortezza goblin e il Castello dei non-morti possono apparire al massimo una volta sull'intera mappa.
:::

---

## Statistiche delle roccaforti

| Statistica | Valore |
|------------|--------|
| PV | 2.500 |
| Guardie massime | 3 |
| Rinforzo guardie | Una ogni 150 tick (~30 secondi) fino al massimo |
| Furto d'oro | 5g × (1 + luck ÷ 10) |
| Danno d'attacco | 8 + ATK/4 |
| Cooldown del furto | 45 tick |

---

## Regole di generazione delle roccaforti

| Regola | Valore |
|--------|--------|
| Distanza minima dal Castello | 60 caselle |
| Distanza minima tra roccaforti | 30 caselle |
| Quantità predefinita | 3 (regolabile nelle impostazioni di difficoltà) |

---

## Attaccare le roccaforti

### Sequenza d'attacco

1. Gli avventurieri raggiungono le vicinanze della roccaforte
2. Prima affrontano le **guardie nemiche** (fino a 3)
3. Mentre si trovano vicino alla roccaforte, possono **rubare oro**
4. Una volta esaurito l'oro, possono **attaccare le mura**
5. Quando i PV delle mura raggiungono zero, la roccaforte viene distrutta

### Consigli strategici

:::tip[Come distruggere le roccaforti efficacemente]
1. Posiziona una **taglia** (con una ricompensa alta) vicino alla roccaforte
2. Assicurati di avere abbastanza avventurieri a distanza (Maghi / Ranger)
3. I Maghi (raggio d'attacco 12) e i Ranger (raggio d'attacco 11) possono colpire da distanza di sicurezza
4. Porta delle Guardie per proteggere le tue unità a distanza
5. Tieni pronti dei Costruttori per riparare gli edifici danneggiati
:::

:::caution[Nota]
Attaccare le mura della roccaforte **non concede esperienza**. Solo uccidere le guardie nemiche fornisce esperienza. Radere al suolo una roccaforte dà +25 di fama e paga l'eventuale taglia; non rilascia bottino.
:::

---

## Gruppi di fazione

Le roccaforti sono raggruppate per fazione. Nella modalità sandbox puoi selezionare fazioni specifiche:

| Fazione | Roccaforti incluse |
|---------|-------------------|
| **Slime** | Pozza di slime |
| **Goblin** | Accampamento goblin, Fortezza goblin, Torre di guardia goblin, Accampamento di guerra orchesco |
| **Non-morti** | Cimitero, Castello dei non-morti, Santuario oscuro |
| **Drago** | Nido di draghi |
| **Bestie** | Nido di ragni, Tana dei lupi, Tana dei ratti, Caverna del troll, Nido delle arpie |
| **Banditi** | Accampamento dei banditi |
| **Deserto** | Tomba delle sabbie |

---

## Incursioni dei covi

Ogni roccaforte fa incursioni secondo il suo tipo:

| Covo | Prima incursione | Poi ogni | Predoni | Bersaglio |
|------|------|------|------|------|
| **Pozza di slime** | — | — | nessuno | — |
| **Accampamento goblin** | 8:00 | 5:00 | 3, uno in più a ogni incursione, 6 al massimo | la città |
| **Accampamento dei banditi** | 6:00 | 4:00 | 2, uno in più a ogni incursione, 5 al massimo | la strada commerciale (la Stazione commerciale più vicina), altrimenti la città |
| **Fortezza goblin** | 11:00 | 6:00 | 4, uno in più a ogni incursione, 8 al massimo | la città |
| **Accampamento di guerra orchesco** | 10:00 | 6:00 | 2, uno in più a ogni incursione, 5 al massimo | la città |
| **Torre di guardia goblin** | 8:00 | 5:00 | 3, uno in più a ogni incursione, 6 al massimo | la città |
| **Santuario oscuro** | 11:00 | 7:00 | 2, uno in più a ogni incursione, 4 al massimo | la città |
| **Caverna del troll** | 14:00 | 10:00 | 1 | la città |
| **Nido delle arpie** | 9:00 | 6:00 | 2, uno in più a ogni incursione, 4 al massimo | la città |

- Ogni incursione è annunciata 30 secondi prima nella cronaca, con la posizione del covo quando i tuoi eroi l'hanno visto; un covo mai visto è annunciato senza posizione, quindi esplorare paga.
- Un'incursione parte come un'unica squadra da accanto al covo. A facile un predone in meno, a difficile due in più.
- Ogni covo mantiene fino a 3 guardie del suo tipo, una nuova ogni 30 secondi.
- Radere al suolo un covo pone fine alle sue incursioni e dà alla corona metà di ciò che resta del suo tesoro; ciò che gli eroi hanno saccheggiato prima è loro.
- Selezionare un covo mostra chi ci vive e cosa gli tiene testa, quando parte la prossima incursione e quanto si recupererebbe radendolo al suolo.
- Gli altri covi attaccano la città con il profilo predefinito (la prima dopo 10:00, poi ogni 6:40, da 3 a 6 predoni); un Nido di ragni, una Tana dei lupi e una Tana dei ratti non ne mandano.
