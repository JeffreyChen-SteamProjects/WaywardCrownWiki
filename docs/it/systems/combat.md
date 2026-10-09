---
title: "Sistema di combattimento"
---

Il combattimento è completamente automatico. Avventurieri e nemici si scontrano ogni volta che si trovano nel raggio d'attacco reciproco.

---

## Flusso del combattimento

1. **Rilevamento** — Un avventuriero avvista un nemico nel suo campo visivo (controllato ogni 2 tick)
2. **Avvicinamento** — Se il nemico è visibile ma fuori dal raggio d'attacco, l'avventuriero lo insegue
3. **Attacco** — Una volta nel raggio d'attacco, entrambe le parti iniziano a combattere
4. **Risoluzione** — I danni vengono risolti ogni 5 tick

---

## Calcolo dei danni

### Avventuriero che attacca il nemico

| Tipo | Formula del danno |
|------|-------------------|
| Mischia | `ATK × 2` (moltiplicatore di danno globale) |
| A distanza | `ATK` (danno da proiettile, nessun moltiplicatore applicato) |

### Nemico che attacca l'avventuriero

```
Danno = (ATK nemico + random(0~2)) × 2
```

### Difesa

```
Danno effettivo = max(1, Danno - DEF)
```

### Evasione

| Fonte | Tasso di evasione |
|-------|-------------------|
| Schivata base degli avventurieri | 10% + 1% × AGI (≤ 70%) |
| Evasione base dei nemici | 5% |
| Abilità "Evasione" del Ranger | +15% |
| Ladro: Evasione | +10% |
| Ladro: Danza delle ombre | +18% |
| Ranger: Rompivento | +25% |

---

## Sistema di proiettili

Ogni unità che combatte a distanza scaglia un proiettile tutto suo, così un colpo si riconosce da ciò che vola. Le altre classi combattono in mischia anche se arrivano a 3 caselle:

| Classe | Tipo di proiettile |
|--------|-------------------|
| Ranger | Freccia (arrow) |
| Battistrada | Giavellotto (javelin) |
| Guardia delle Strade | Dardo di balestra (bolt) |
| Mago | Palla di fuoco (fireball) |
| Adepto | Scheggia di luce (light_shard) |
| Arciere goblin (nemico) | Freccia rozza (goblin_arrow) |
| Cultista oscuro (nemico) | Globo oscuro (dark_orb) |
| Drago (nemico) | Vampata di fuoco (dragon_flame) |

I proiettili viaggiano verso il bersaglio ogni tick dopo essere stati lanciati e infliggono danni all'impatto. Ognuno è disegnato secondo la direzione in cui vola: quello che risale la mappa si vede da dietro, quello che la attraversa si vede di lato.

---

## Torre di frecce

La Torre di frecce è un edificio difensivo automatizzato:

| Proprietà | Valore |
|-----------|--------|
| Raggio d'attacco | 20 caselle |
| Danno base | 16 + 8 × (Lv − 1) |
| Scalatura del potenziamento | Aumenta con il livello |

Le Torri di frecce attaccano automaticamente il nemico più vicino nel raggio d'azione.

---

## Ricompense in esperienza

| Fonte | XP |
|-------|-----|
| Per colpo (a goccia) | 1/5 degli XP per uccisione |
| Uccisione Slime | 10 XP |
| Uccisione Goblin | 25 XP |
| Uccisione Scheletro | 40 XP |
| Uccisione Zombie | 60 XP |
| Uccisione Drago | 150 XP |

:::note[XP a goccia]
Ogni volta che un avventuriero colpisce un nemico — sia in mischia che con un proiettile — riceve 1/5 degli XP per uccisione di quel nemico. Questo garantisce che gli avventurieri guadagnino esperienza anche senza sferrare il colpo finale.
:::

---

## IA di combattimento

### Condizioni di fuga dell'avventuriero

- HP < 30% (HP_CRITICAL)
- La probabilità di fuga è influenzata dal tratto di personalità Sicurezza

### Uso delle pozioni

| Condizione | Comportamento |
|-----------|---------------|
| HP < 30% | Usa la pozione urgentemente |
| HP < 50% | Usa la pozione |

### Priorità dei bersagli nemici

1. Avventurieri in combattimento (non pacifisti)
2. Costruttori (pacifisti)
3. Edifici minacciosi come le Torri di frecce
4. Castello
5. Altri edifici
