---
title: "Inimigos"
---

Os inimigos surgem naturalmente em áreas selvagens pelo mapa, ameaçando seus aventureiros e seu castelo.

---

## Tipos de Inimigos

| Inimigo | HP | ATK | DEF | Velocidade | XP | Ouro | Alcance de Ataque | Visão | Terreno de Surgimento | Nível de Perigo |
|---------|-----|-----|-----|------------|-----|------|-------------------|-------|----------------------|-----------------|
| **Slime** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Floresta | 1 |
| **Goblin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Montanha | 2 |
| **Esqueleto** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Montanha | 3 |
| **Zumbi** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Floresta | 4 |
| **Dragão** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Montanha | 5 |
| **Lobo atroz** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Floresta | 2 |
| **Bruto orc** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Montanha | 4 |
| **Arqueiro goblin** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Montanha | 3 |
| **Espectro da areia** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Deserto | 3 |
| **Cultista sombrio** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Floresta | 3 |
| **Troll** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Montanha | 5 |
| **Aranha gigante** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Floresta | 2 |
| **Rato gigante** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Planície | 1 |
| **Bandido** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Planície | 2 |
| **Harpia** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Planície | 3 |

O Dragão, o Arqueiro goblin e o Cultista sombrio disparam projéteis (jatos de chamas, flechas toscas e orbes sombrios); os demais atacam a até 3 tiles de distância.

Um inimigo dá um passo a cada 3 ÷ velocidade ticks, arredondado para baixo (no mínimo 1): a cada tick com velocidade 1.6 ou mais, a cada 2 ticks com 1.1–1.4, a cada 3 com 0.8–1.0, a cada 4 o Troll e a cada 5 com 0.6.

### Patentes

Conforme sua guilda cresce (aventureiros mais Mercados), alguns monstros surgem com uma patente que multiplica seus atributos e recompensas. No máximo um quarto dos monstros vivos tem patente, exceto durante uma Revolta dos monstros, quando todo monstro que surge é pelo menos Veterano.

| Patente | A partir de um tamanho de guilda de | Chance | HP | ATK | DEF | XP | Ouro | Visão |
|---------|-------------------------------------|--------|----|-----|-----|----|------|-------|
| **Veterano** | 8 | 16% | ×1.5 | ×1.25 | ×1.2 | ×1.6 | ×1.8 | +2 |
| **Elite** | 22 | 8% | ×2.5 | ×1.6 | ×1.5 | ×2.5 | ×3 | +4 |
| **Campeão** | 45 | 3% | ×4.5 | ×2.2 | ×2 | ×4 | ×6 | +6 |

---

## Comportamento Inimigo

### Perambulação

- Os inimigos vagam perto de seu ponto de surgimento
- Eles têm um alcance de visão e perseguirão ativamente aventureiros que detectarem
- A cada tick, um quarto dos inimigos (em grupos que se alternam) executa sua lógica de perambulação, então cada um se atualiza no máximo a cada 4 ticks

### Prioridade de Alvos

Os inimigos atacam alvos na seguinte ordem:

1. **Aventureiros prontos para combate** (não pacifistas)
2. **Construtores** (aventureiros pacifistas)
3. **Torres de flechas** (construções ameaçadoras)
4. **Castelo**
5. **Outras construções**

### Rota de Invasão

Quando um evento de invasão é acionado, os inimigos seguem direto para o castelo do jogador pelo caminho mais curto.

---

## Surgimento de Inimigos

| Configuração | Valor |
|--------------|-------|
| Intervalo de surgimento | 35 segundos de tempo de jogo, 1 segundo a menos por aventureiro ou Mercado, no mínimo 5 segundos (pela metade nos níveis de campanha de Defesa) |
| Quantidade máxima | `(adventurers + Markets) × 2` (ajustável nas configurações de dificuldade), diminuindo conforme Fortalezas Inimigas são destruídas, até apenas 25% |
| Mínimo base | Pelo menos 6 inimigos |

Os inimigos surgem com base no **tipo de terreno**:

- **Floresta** — Slimes, Zumbis, Lobos atrozes, Cultistas sombrios, Aranhas gigantes
- **Montanha** — Goblins, Esqueletos, Dragões, Brutos orcs, Arqueiros goblins, Trolls
- **Planície** — Ratos gigantes, Bandidos, Harpias
- **Deserto** — Espectros da areia

:::note[Dragões]
Os dragões e os trolls são os inimigos mais perigosos (nível de perigo 5). Com alcance de ataque de 16, 550 HP e jatos de chamas como projéteis, a melhor forma de enfrentar os dragões é com aventureiros de longo alcance e torres de flechas; o Troll tem mais HP e ataque, mas precisa se aproximar.
:::

---

## Mecânicas Especiais do Dragão

- **Ataque à Distância**: Alcance de ataque de 16, cospe jatos de chamas
- **Alta Mobilidade**: Velocidade de 1.4, um passo a cada 2 ticks: tão rápido quanto Ratos gigantes, Aranhas gigantes e Bandidos; só Harpias e Lobos atrozes (um passo por tick) são mais rápidos
- **Visão Ampla**: Alcance de visão de 32 tiles, capaz de detectar aventureiros a grande distância
- **Evasão**: Todos os inimigos têm uma taxa de esquiva base de 5%

**Pressões**: três ameaças nascem de como o reino é mantido, não de um covil. Cada uma é anunciada um minuto antes na crônica e no resumo, envia um bando de 3 (nunca mais de 6 de seus monstros vivos, seja qual for a sua força) e é cancelada quando sua causa é corrigida. *Imundície*: uma cidade de 16 prédios sem fonte nem jardim atrai ratos gigantes; cada fonte ou jardim responde por 6 prédios. *Os mortos sem descanso*: 3 heróis mortos sem templo se erguem como esqueletos onde o último caiu; um templo, ou revivê-los, os mantém no chão, e um reino no caminho dos Mortos-vivos com um Ossuário os toma como guardas. *O ermo*: um prédio a mais de 60 casas do castelo sem torre de flechas nem posto de guarda a até 12 atrai lobos atrozes; entrepostos não contam, nem os acampamentos de um reino Selvagem. Nada pressiona um reino em seus primeiros 5 minutos, nem em uma fase que não permite o prédio que responde a isso. Acampamentos de guerra orcs atacam o que está sendo construído: a obra ou melhoria em andamento mais próxima.
