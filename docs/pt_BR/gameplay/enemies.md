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
| **Piqueiro** | 150 | 9 | 6 | 0.9 | 34 | 18 | 3 | 12 | Montanha | 3 |
| **Porta-escudo** | 220 | 7 | 10 | 0.8 | 40 | 20 | 3 | 12 | Montanha | 4 |
| **Sapador** | 90 | 5 | 3 | 1.0 | 36 | 22 | 3 | 12 | Floresta | 4 |
| **Besta de cerco** | 520 | 16 | 9 | 0.5 | 110 | 55 | 3 | 12 | Montanha | 5 |
| **Xamã goblin** | 100 | 4 | 2 | 0.8 | 26 | 15 | 3 | 12 | Floresta | 2 |
| **Sabotador bandido** | 140 | 5 | 3 | 1.0 | 32 | 20 | 3 | 16 | Floresta | 3 |
| **Escorpião venenoso** | 130 | 6 | 5 | 0.9 | 34 | 18 | 3 | 14 | Deserto | 3 |
| **Guardião de arenito** | 360 | 11 | 15 | 0.5 | 82 | 42 | 3 | 14 | Deserto | 4 |
| **Transportador goblin** | 110 | 4 | 3 | 1.0 | 15 | 12 | 3 | 12 | — | 2 |
| **Necromante inimigo** | 180 | 7 | 4 | 0.7 | 55 | 30 | 3 | 16 | Montanha | 4 |
| **Caçador espectral** | 125 | 14 | 3 | 1.5 | 50 | 26 | 3 | 18 | Montanha | 4 |
| **Cuspidor de veneno** | 150 | 6 | 4 | 0.65 | 48 | 28 | 8 | 16 | Pântano | 4 |
| **Vinculador de maldições** | 110 | 8 | 3 | 0.8 | 52 | 32 | 9 | 16 | Floresta | 4 |
| **Morcego vampiro** | 80 | 10 | 2 | 1.8 | 30 | 16 | 3 | 16 | Montanha | 3 |
| **Limo físsil** | 240 | 10 | 5 | 0.6 | 58 | 28 | 3 | 12 | Pântano | 3 |

**A hoste**: quatro inimigos lutam como linha e como tropa de cerco. O golpe de um Piqueiro segura por um momento o herói atingido. Um Porta-escudo ergue de vez em quando um escudo sobre si e os monstros ao lado. Um Sapador planta uma carga que é marcada no chão antes de explodir (nunca explode se ele cair antes) e atinge construções três vezes mais forte. Uma Besta de cerco é lenta, difícil de derrubar e atinge construções quatro vezes mais forte.

Dragão, Arqueiro goblin, Cultista sombrio, Cuspidor de veneno, Vinculador de maldições — disparam projéteis próprios; os outros tipos comuns lutam a até 3 casas.

Um inimigo tem a sua vez uma vez a cada 4 ticks. A velocidade lhe dá um passo a cada 3 ÷ velocidade turnos, arredondado para baixo (no mínimo 1), e todo inimigo anda ainda três décimos mais rápido: essa espera é dividida por 1.3, a fração passa para os passos seguintes e nunca fica abaixo de um turno. Assim, há um passo por turno com velocidade 1.6 ou mais, cerca de dois passos em 3 turnos com 1.1–1.4, cerca de três em 7 com 0.8–1.0, mais ou menos um a cada 3 turnos para o Troll e um a cada 4 ou 5 com 0.5–0.6.

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

- **Floresta** — Slime, Zumbi, Lobo atroz, Cultista sombrio, Aranha gigante, Sapador, Xamã goblin, Sabotador bandido, Vinculador de maldições
- **Montanha** — Goblin, Esqueleto, Dragão, Bruto orc, Arqueiro goblin, Troll, Piqueiro, Porta-escudo, Besta de cerco, Necromante inimigo, Caçador espectral, Morcego vampiro
- **Planície** — Rato gigante, Bandido, Harpia
- **Deserto** — Espectro da areia, Escorpião venenoso, Guardião de arenito
- **Pântano** — Cuspidor de veneno, Limo físsil

:::note[Dragões]
Os dragões e os trolls são os inimigos mais perigosos (nível de perigo 5). Com alcance de ataque de 16, 550 HP e jatos de chamas como projéteis, a melhor forma de enfrentar os dragões é com aventureiros de longo alcance e torres de flechas; o Troll tem mais HP e ataque, mas precisa se aproximar.
:::

---

## Mecânicas Especiais do Dragão

- **Ataque à Distância**: Alcance de ataque de 16, cospe jatos de chamas
- **Alta Mobilidade**: Velocidade de 1.4, cerca de dois passos a cada 3 turnos: tão rápido quanto Ratos gigantes, Aranhas gigantes e Bandidos; só Harpias e Lobos atrozes (um passo por turno) são mais rápidos
- **Visão Ampla**: Alcance de visão de 32 tiles, capaz de detectar aventureiros a grande distância
- **Evasão**: Todos os inimigos têm uma taxa de esquiva base de 5%

**Pressões**: três ameaças nascem de como o reino é mantido, não de um covil. Cada uma é anunciada um minuto antes na crônica e no resumo, envia um bando de 3 (nunca mais de 6 de seus monstros vivos, seja qual for a sua força) e é cancelada quando sua causa é corrigida. *Imundície*: uma cidade de 16 prédios sem fonte nem jardim atrai ratos gigantes; cada fonte ou jardim responde por 6 prédios. *Os mortos sem descanso*: 3 heróis mortos sem templo se erguem como esqueletos onde o último caiu; um templo, ou revivê-los, os mantém no chão, e um reino no caminho dos Mortos-vivos com um Ossuário os toma como guardas. *O ermo*: um prédio a mais de 60 casas do castelo sem torre de flechas nem posto de guarda a até 12 atrai lobos atrozes; entrepostos não contam, nem os acampamentos de um reino Selvagem. Nada pressiona um reino em seus primeiros 5 minutos, nem em uma fase que não permite o prédio que responde a isso. Acampamentos de guerra orcs atacam o que está sendo construído: a obra ou melhoria em andamento mais próxima.

**Xamã goblin** — Cura 18 PV de até quatro aliados feridos em 4 casas a cada 20s, no máximo seis vezes durante sua vida. Elimine o apoio primeiro ou esgote os remédios.

**Sabotador bandido** — Prioriza construções próximas e causa 2,5× dano normal às estruturas. Revida contra um herói que o intercepta; a armadura leve facilita a interceptação.

**Escorpião venenoso** — Uma ferroada acertada deixa veneno de 3 PV/s por 5s, sem acumular. Antídotos e purificação o removem; escolte heróis frágeis em áreas de escorpiões.

**Guardião de arenito** — Lento e bem blindado. Com metade da vida recebe uma única vez um escudo próprio de 80 PV por 10s. Use desgaste à distância ou veneno contra a frente resistente.

**Necromante inimigo** — Invoca dois esqueletos comuns a cada 30s ao ver um herói hostil: quatro por vida, no máximo 32 invocados vivos no mundo. Um anel verde de ossos marca a magia. Mate cedo o invocador frágil; os esqueletos existentes ficam e não invocam mais.

**Caçador espectral** — Caçador corpo a corpo rápido e frágil que persegue primeiro heróis visíveis de alcance, cura ou comando. Intercepte com a frente ou desacelere. Guardas mantêm o raio; o espectro usa caminhos terrestres e não cruza água.

**Reforços táticos em ataques**: Fortaleza Goblin → Xamã goblin; Acampamento de Bandidos → Sabotador bandido; Tumba de Areia → Escorpião venenoso, Guardião de arenito; Castelo dos Mortos-Vivos → Necromante inimigo, Caçador espectral.

Ataques de campanha respeitam sua lista de inimigos; reinos livres usam todas as tropas do covil.

**Cuspidor de veneno** — Avisa por 3s antes de envenenar raio de 2 casas a até 8 casas: 4 PV/s por 5s, a cada 18s. Mate o frágil cuspidor antes do impacto, saia do aviso ou prepare antídotos e purificação.

**Vinculador de maldições** — Marca raio de 2 a até 9 casas, avisa por 2s e aumenta dano recebido em 25% por 4s, a cada 20s. Não acumula e pode ser purificado. Priorize o vinculador ou apoie a frente.

**Morcego vampiro** — Rápido e frágil. A perda real de PV por seu golpe corpo a corpo cura no máximo 4 PV por golpe e 60 por vida, sem passar do máximo. Escudos negam a cura. As asas ainda usam caminhos terrestres; foco à distância e lentidão ajudam.

**Limo físsil** — Na morte divide uma vez em até dois limos comuns, cada um com 35% dos PV máximos e metade do ataque e defesa da mãe, incluindo patente. Filhos não dividem nem dão ouro ou XP por morte. Até 64 filhos vivos no mundo. Use dano em área e espere uma segunda frente.

Limpar uma onda nomeada também exige derrotar seus esqueletos invocados e limos filhos; matar só a fonte não basta.

**Piqueiro** — Um golpe de lança acertado desacelera o alvo por 3s. Proteja heróis frágeis atrás da frente; purificação remove a lentidão.

**Porta-escudo** — Escudo de 40 PV por 8s em raio 2, no máximo quatro aliados por magia e seis magias por vida, a cada 24s. A patente não o multiplica. Escudos mais fortes ficam. Foque o portador ou use veneno.

**Sapador** — Apoio explosivo frágil: mira até 3 casas, avisa 3s e causa 40 de dano em raio 2, a cada 18s. Sua morte cancela o aviso. Golpes em edifícios usam ataque já ajustado pela patente e ×3 uma vez.

**Besta de cerco** — Pesado lento que atinge estruturas a ×4 do meio ataque já ajustado pela patente. Intercepte com a frente e foque à distância; a defesa pune ataques corpo a corpo sem apoio.

Gnashfang chama um lanceiro e um escudeiro por vez, quatro por vida. Seguem seu centro de guarda e sobrevivem à sua morte. O golpe avisa 2,4s, mira a até 4 casas e atinge raio 2; os dois últimos arqueiros são outro chamado limitado.
