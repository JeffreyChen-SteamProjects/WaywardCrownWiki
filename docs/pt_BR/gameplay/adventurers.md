---
title: "Aventureiros"
---

Os aventureiros são o coração do jogo. Eles têm vontade própria e tomam decisões com base em sua personalidade, necessidades e estado atual.

---

## Visão Geral das Classes

| Classe | Stat Principal | Ataque Escala Com | Alcance de Ataque | Construção de Recrutamento | Características |
|--------|---------------|-------------------|-------------------|---------------------------|-----------------|
| **Guerreiro** | STR | Força | 3 | Quartel | Alto HP, alto ataque, luta de perto |
| **Mago** | INT | Inteligência | 12 | Torre do Mago | Ataques mágicos à distância, baixo HP |
| **Patrulheiro** | AGI | Agilidade | 11 | Abrigo do Patrulheiro | Ataques com arco à distância, alta curiosidade |
| **Guarda** | STR | Força | 3 | Posto de Guarda | Patrulha as construções da cidade, nunca sai da cidade |
| **Construtor** | AGI | — | 3 | Guilda dos Construtores | Repara construções; só luta contra o monstro que o ataca |
| **Ladrão** | AGI | Agilidade | 3 | Guilda dos ladrões | Ganancioso e evasivo, baixo HP |

:::note[Alcance de ataque]
O Patrulheiro (flechas), o Mago (bolas de fogo), o Batedor (azagaias), o Guarda das Estradas (virotes de besta) e o Adepto (estilhaços de luz) atacam com projéteis, cada um com o seu. As demais classes que lutam combatem corpo a corpo: golpeiam a até 3 tiles de distância e causam o dobro de dano.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Todas as classes de herói do jogo, escritas a partir dos seus dados: as seis que qualquer reino recruta e as que os edifícios próprios de um caminho do castelo recrutam.

| Classe | Caminho do castelo | Recrutada em | Vida | Ataque | Alcance de ataque | Habilidades |
|---|---|---|---|---|---|---|
| **Guerreiro** | — | Quartel | 70–150 | FOR | 3 | Golpe Poderoso, Muro de Escudos, Berserker, Senhor da Guerra, Grito de guerra |
| **Mago** | — | Torre do Mago | 25–65 | INT | 12 | Projétil de Fogo, Escudo de Mana, Relâmpago em Cadeia, Arquimago, Tornado de fogo |
| **Patrulheiro** | — | Abrigo do Patrulheiro | 45–100 | AGI | 11 | Tiro Preciso, Evasão, Tiro Múltiplo, Olho de Águia, Quebra-vento |
| **Guarda** | — | Posto de Guarda | 50–120 | FOR | 3 | Vigilância, Fortificar, Provocar, Bastião, Guarda próxima |
| **Construtor** | — | Guilda dos Construtores | 30–70 | — | 3 | Reparo Rápido, Reforçar, Mestre Artesão, Arquiteto, Reparo de emergência |
| **Ladrão** | — | Guilda dos ladrões | 35–80 | AGI | 3 | Punhalada nas costas, Evasão, Batedor de carteiras, Dança das sombras, Escapulir |
| **Cavaleiro do Escudo** | Guardião | Bastião | 90–170 | FOR | 3 | Vigilância, Muro de Escudos, Provocar, Bastião, Escudo do Juramento, Juramento do Substituto, Ao Resgate |
| **Hospitalário** | Guardião | Santuário | 50–100 | INT | 3 | Vigilância, Escudo de Mana, Fortificar, Bastião, Prece Curativa |
| **Batedor** | Ermos | Acampamento selvagem | 50–105 | AGI | 11 | Tiro Preciso, Evasão, Tiro Múltiplo, Olho de Águia, Marca do Caçador |
| **Guardião das Feras** | Ermos | Abrigo das Feras | 65–135 | FOR | 3 | Golpe Poderoso, Evasão, Berserker, Olho de Águia, Ataque do Falcão, Rastreio de Trilha, Companheiro Animal, Cobertura do Companheiro, Socorro Herbal |
| **Cavaleiro Sepulcral** | Morto-vivo | Ossuário | 95–175 | FOR | 3 | Golpe Poderoso, Muro de Escudos, Berserker, Senhor da Guerra, Armadura de Ossos |
| **Necromante** | Morto-vivo | Cripta | 40–90 | INT | 3 | Projétil de Fogo, Escudo de Mana, Relâmpago em Cadeia, Arquimago, Selo do Definhamento, Guarda de Ossos, Dívida da Alma |
| **Marechal** | Ordem | Chefatura | 80–155 | FOR | 3 | Vigilância, Muro de Escudos, Provocar, Senhor da Guerra, Bloqueio, Ordem de Formar, Ronda de Alarme |
| **Guarda das Estradas** | Ordem | Posto de Pedágio | 55–115 | AGI | 10 | Tiro Preciso, Evasão, Tiro Múltiplo, Olho de Águia, Guarda do Comboio |
| **Juramentado** | Bravura | Salão de Guerra | 85–165 | FOR | 3 | Golpe Poderoso, Evasão, Berserker, Senhor da Guerra, Golpe Fendente, Assalto às Muralhas, Frenesi de Sangue |
| **Porta-estandarte** | Bravura | Intendência | 70–140 | FOR | 3 | Golpe Poderoso, Muro de Escudos, Provocar, Senhor da Guerra, Rugido Inabalável |
| **Lâmina Arcana** | Arcano | Academia | 60–125 | INT | 3 | Projétil de Fogo, Evasão, Relâmpago em Cadeia, Arquimago, Luz Dilacerante, Passo de Fase, Réplica Rúnica |
| **Adepto** | Arcano | Pináculo | 40–88 | INT | 11 | Projétil de Fogo, Escudo de Mana, Relâmpago em Cadeia, Arquimago, Guarda Rúnica |
| **Escolta** | Comércio | Guilda Mercantil | 80–150 | FOR | 3 | Vigilância, Muro de Escudos, Provocar, Bastião, Guarda da Carga, Marcha Forçada, Serviço de Escolta |
| **Caravaneiro** | Comércio | Depósito | 55–115 | AGI | 3 | Tiro Preciso, Evasão, Tiro Múltiplo, Olho de Águia, Marca de Rota |
| **Inquisidor** | Tirania | Tribunal | 65–130 | INT | 3 | Projétil de Fogo, Escudo de Mana, Provocar, Arquimago, Marca do Pavor, Juramento de Ferro |
| **Executor** | Tirania | Escritório de Tributos | 90–170 | FOR | 3 | Golpe Poderoso, Muro de Escudos, Berserker, Senhor da Guerra, Veredito das Correntes |
| **Alquimista** | — | Guilda de alquimia | 45–85 | INT | 8 | Agulhas precisas, Avental de campo, Mistura precisa, Mestre destilador, Alquimia de campo |
<!-- hero-classes:end -->

---

## Estatísticas Detalhadas

### Guerreiro

| Stat | Faixa |
|------|-------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Tendências de Personalidade**: Alta Glória (0.5–1.0), Ganância moderada (0.2–0.8), baixa Curiosidade (0.0–0.2)

**Árvore de Habilidades**:

| Nível | Habilidade | Efeito |
|-------|------------|--------|
| 3 | Golpe Poderoso | Ataque ×1.15 |
| 6 | Muro de Escudos | Defesa +5 |
| 10 | Berserker | Ataque ×1.3, HP ×0.9 |
| 15 | Senhor da Guerra | Ataque ×1.5, Defesa +8 |

### Mago

| Stat | Faixa |
|------|-------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Tendências de Personalidade**: Alta Segurança (0.3–0.9), Curiosidade moderada (0.1–0.3)

**Árvore de Habilidades**:

| Nível | Habilidade | Efeito |
|-------|------------|--------|
| 3 | Projétil de Fogo | Ataque +5 |
| 6 | Escudo de Mana | Defesa +4 |
| 10 | Relâmpago em Cadeia | Ataque ×1.4 |
| 15 | Arquimago | Ataque ×1.6, Ataque +8 |

### Patrulheiro

| Stat | Faixa |
|------|-------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Tendências de Personalidade**: Curiosidade muito alta (0.7–1.0), baixa Segurança (0.0–0.4)

**Árvore de Habilidades**:

| Nível | Habilidade | Efeito |
|-------|------------|--------|
| 3 | Tiro Preciso | Ataque +4 |
| 6 | Evasão | Taxa de esquiva +15% |
| 10 | Tiro Múltiplo | Ataque ×1.35 |
| 15 | Olho de Águia | Ataque ×1.5, Taxa de crítico +20% |

### Guarda

| Stat | Faixa |
|------|-------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Tendências de Personalidade**: Segurança muito alta (0.5–1.0), sem Curiosidade

**Comportamento Especial**: Automaticamente designado para patrulhar construções; não abandonará seu posto para perseguir inimigos distantes.

**Árvore de Habilidades**:

| Nível | Habilidade | Efeito |
|-------|------------|--------|
| 3 | Vigilância | Defesa +3 |
| 6 | Fortificar | HP ×1.2 |
| 10 | Provocar | Defesa +6, Ataque +3 |
| 15 | Bastião | HP ×1.4, Defesa +10 |

### Construtor

| Stat | Faixa |
|------|-------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Tendências de Personalidade**: Segurança muito alta (0.8–1.0), sem Curiosidade, sem Glória

**Comportamento Especial**: Nunca luta por conta própria, só contra o monstro que o ataca. Viaja automaticamente até construções danificadas para repará-las.

**Árvore de Habilidades**:

| Nível | Habilidade | Efeito |
|-------|------------|--------|
| 3 | Reparo Rápido | Velocidade de reparo ×1.3 |
| 6 | Reforçar | Velocidade de reparo ×1.5 |
| 10 | Mestre Artesão | Velocidade de reparo ×2.0 |
| 15 | Arquiteto | Velocidade de reparo ×2.5, HP ×1.3 |

### Ladrão

| Stat | Faixa |
|------|-------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Tendências de Personalidade**: Ganância muito alta (0.75–1.0), alta Segurança (0.5–1.0), Curiosidade moderada (0.3–0.7), baixa Glória (0.0–0.3)

**Comportamento Especial**: A esquiva (10% + 1% por AGI) é sua defesa, em vez do HP, e sua ganância o atrai para as recompensas mais bem pagas.

**Árvore de Habilidades**:

| Nível | Habilidade | Efeito |
|-------|------------|--------|
| 3 | Punhalada nas costas | Taxa de crítico +12% |
| 6 | Evasão | Taxa de esquiva +10% |
| 10 | Batedor de carteiras | Taxa de crítico +20%, Ataque ×1.15 |
| 15 | Dança das sombras | Taxa de esquiva +18%, Ataque ×1.35 |

---

## Sistema de Estados

Os aventureiros transitam entre os seguintes estados:

```
IDLE
  ├─→ MOVING_TO_BOUNTY
  ├─→ EXPLORING
  ├─→ PATROLLING
  ├─→ REPAIRING — Apenas Construtor
  └─→ FIGHTING
        └─→ RETURNING
              └─→ LODGING
                    └─→ IDLE
```

---

## Sistema de Hospedagem

- Com pouca vida, os aventureiros vão descansar e se curar no lugar mais próximo com vaga: a própria guilda (a que os recrutou ou a para onde se mudaram), uma estalagem ou um acampamento selvagem. O castelo só abriga um herói sem guilda; quem tem a guilda cheia espera lá por uma cama. Entre lugares quase tão próximos, a própria guilda vem primeiro (conta 8 casas mais perto); quem foge para salvar a vida pega o mais próximo
- Aventureiros hospedados entram no estado **LODGING**: desaparecem do mapa e ficam invulneráveis
- Cada construção pode hospedar até **3** hóspedes
- Se uma construção for destruída, todos os hóspedes dentro dela são liberados imediatamente
- Os aventureiros saem da hospedagem automaticamente quando seu HP é totalmente restaurado

---

## Sistema de Nivelamento

| Item | Descrição |
|------|-----------|
| Nível máximo | 20 |
| XP base | 40 XP (para alcançar Nv. 2) |
| Fórmula de XP | `40 × 1.6^(level-1)` |
| XP por eliminação | Varia por tipo de inimigo (10 – 160 XP) |
| XP por golpe | Cada golpe concede 1/5 da XP de eliminação |
| Abate compartilhado | O ouro e o XP de um abate são divididos sem nada a mais: o herói que deu o último golpe fica com 60% quando outros participam, e o resto vai em partes iguais para até 3 heróis que lutam a até 6 casas ou que, a até 10 casas, cuidaram de outro herói nos últimos 30 segundos |
| XP de recompensa | Exploração 15 XP, Defesa 25 XP, Eliminação 30 XP |

Ao subir de nível, as estatísticas primárias e secundárias aumentam junto com o HP.

**Árvore de habilidades**: as habilidades de uma classe são uma árvore, não um número fixo de espaços: cada habilidade tem o nível em que é aprendida e pode exigir outras antes, e uma árvore é tão grande quanto as habilidades que sua classe tem. Um herói aprende toda habilidade que seu nível e o que já aprendeu permitem. Seu painel mostra a árvore: em negrito o que ele tem, em cinza o que ainda vem, com o nível em que chega, cada uma sob a habilidade que exige. Uma habilidade marcada (ativa) é lançada pelo próprio herói; as outras mudam seus números para sempre.

---

## Sistema de Personalidade

Cada aventureiro tem quatro valores de personalidade (0.0 – 1.0) que influenciam se aceitam recompensas:

| Traço | Efeito |
|-------|--------|
| **Ganância (gold)** | Valores mais altos significam que o aventureiro se importa mais com a recompensa |
| **Segurança (safety)** | Valores mais altos significam que o aventureiro evita perigo |
| **Glória (glory)** | Valores mais altos significam que o aventureiro prefere missões de combate |
| **Curiosidade (curiosity)** | Valores mais altos significam que o aventureiro prefere exploração |

Os detalhes de um herói mostram cada valor em uma palavra: **baixa** abaixo de 0,35, **moderada** até 0,7 e **alta** a partir de 0,7.

**Fórmula de Atração de Recompensa**:

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- Um marcador de **Aviso** nunca é aceito
- Uma recompensa abaixo de **nível × 20** de ouro é recusada de imediato
- Os Guardas nunca aceitam recompensas: patrulham a cidade em vez disso
- Heróis abaixo do nível 8 recusam recompensas dentro de uma zona de aviso
- Um aventureiro aceita a recompensa de maior pontuação, se ela pontuar acima de 0.1

---

## A vida própria dos heróis

Um herói sem nada para fazer compara tudo o que está ao seu alcance e escolhe o melhor: uma recompensa, uma tarefa na cidade ou explorar.

- **Tarefas**: comprar equipamento melhor na ferraria, repor poções no mercado, estudar na biblioteca, passar uma noite na estalagem (15 de ouro; uma fonte ou um jardim é grátis) ou voltar para casa quando ferido ou cansado. Cada uma exige a construção, o ouro e uma necessidade real, e o herói caminha até essa construção para fazê-la. Enquanto houver um monstro à vista ou um covil conhecido de pé, um herói sadio não tira a noite de folga: vai atrás do mais próximo que ousa enfrentar (um covil em qualquer nível, inclusive o 1, se o gosto pela glória vencer a cautela) ou explora. Onde um monstro foi visto há pouco, a caça continua por três minutos, até a coroa ver o lugar vazio; o herói que não marcha sobre um covil conhecido caça ao redor dele, fora do próprio alcance do muro.
- **Compromisso**: um herói termina a viagem que começou. Só uma exploração é abandonada, depois de 150 ticks, por algo claramente melhor. O perigo continua em primeiro lugar: um herói gravemente ferido segue para o local de descanso mais próximo.
- **Fortalezas**: em qualquer nível, inclusive o 1, heróis ousados marcham por conta própria contra fortalezas inimigas conhecidas quando têm coragem de enfrentar uma sozinhos; qualquer herói pode roubá-las, o ladrão mais que todos.
- **Apoio**: um herói cuja classe cuida dos outros (cura, protege, anima ou os cobre) e que não tem trabalho próprio caminha com um grupo: o herói mais próximo em até 30 casas a caminho do trabalho de uma recompensa ou de uma marcha, ou em combate, cujo trabalho ele ousa enfrentar com esse grupo. Ele o segue quando se move e o deixa quando o grupo morre, para ou volta para casa, quando ele mesmo está ferido ou após 2 minutos.
- **Memória**: um herói guarda algumas coisas que lhe aconteceram, cada uma por alguns minutos. Aquele cuja guilda foi atacada valoriza recompensas de defesa 30% a mais; aquele que outro herói ajudou quando estava gravemente ferido, ou que foi pago por uma recompensa ao lado de outro, valoriza mais uma recompensa que esse herói detém; aquele que voltou para casa gravemente ferido, ou viu um herói assim cair, quer chances melhores a até 12 casas do lugar. O painel do herói mostra o que ele lembra.
- **Uma guilda perdida**: um herói cuja guilda é destruída ou demolida não se perde. Ele se muda por conta própria para o edifício mais próximo que recruta sua classe e tem lugar, inclusive uma guilda reconstruída. Até lá o castelo o abriga: 3 heróis por nível do castelo por 5 minutos, os demais por 100 segundos. Um herói cujo tempo acaba deixa o reino com o que carrega; o registro e a crônica avisam antes, e seu painel conta os segundos.
- **O que um herói mostra**: um herói se encolhe quando é atingido, ergue a mão quando sua habilidade dispara, comemora quando sobe de nível e desaba onde cai antes que a poeira o leve. Com “reduzir movimento” (Configurações), ele não faz nada disso.
- **Inclinações de classe**: cada classe tem seus hábitos. Guerreiros lutam até ficarem gravemente feridos e gostam de atacar fortalezas; magos ficam perto da cidade, recuam cedo e gostam de estudar; patrulheiros viajam para longe e preferem recompensas de exploração; ladrões vão atrás da recompensa mais bem paga e roubam fortalezas; guardas e construtores ficam na cidade. A cautela e a curiosidade de cada herói mudam isso um pouco, e o painel dele lista suas inclinações. O alcance de cada herói também é próprio: quanto mais ousado e curioso, mais ele se afasta do castelo, de modo que dois heróis da mesma classe não ficam no mesmo terreno. O herói procura primeiro a terra desconhecida dentro do seu alcance; quando não resta nenhuma, vai um pouco mais longe e atravessa até o outro lado do seu alcance em vez de ficar rodeando a vila.
- **Revidar**: quando um monstro atacou um herói nos últimos dois segundos, mais ou menos (uma mordida, um golpe, uma flecha ou uma habilidade; um golpe desviado também conta), o herói revida: vai primeiro atrás daquele monstro, antes de qualquer outra coisa (a viagem, um roubo, uma tarefa), onde quer que ele esteja; se o monstro atira de fora da visão do herói, ele caminha até lá, e o enfrenta quando o tem ao alcance. Toda classe faz isso, inclusive o Construtor, que fora isso nunca luta e só enfrenta o monstro que o atacou. O revide dura enquanto aquele monstro estiver vivo e ainda puder ser encontrado: à vista do herói, ou ainda visível no mapa por ter atacado um herói. Ele acaba quando o monstro cai ou some de vista, ou quando o herói perde a coragem e decide fugir; então o herói larga a perseguição e decide de novo. Um herói a caminho de casa ou do descanso não revida. O monstro que atacou um herói aparece no mapa por 10 segundos, onde quer que esteja, para que o atacante seja visto na hora.
- **Fugir de uma luta**: abaixo da metade do HP, um herói em combate pensa em fugir aos 50%, 40%, 30%, 20% e 10% do HP, uma vez em cada degrau, e quanto mais baixo ele está, mais provável é que fuja. A disposição para fugir vem da cautela da classe e da vontade de segurança do próprio herói; as classes que lutam até a morte (Cavaleiro Sepulcral, Juramentado, Executor, Cavaleiro do Escudo) fogem com um décimo da disposição da mais cautelosa. Chance de já ter fugido quando a luta deixa o herói com 10% do HP: Mago, cerca de 92%; Patrulheiro, 68%; Guerreiro, 55%; Juramentado, 19%. Um herói que leva o troco do monstro que atacou decide do mesmo jeito. Quando não sobra nenhum monstro por perto, o herói abaixo do ponto de retirada da classe vai se curar.
- **Lendo um herói**: o painel de um herói diz o que ele está fazendo e por quê, para onde vai, do que precisa e como está em relação a cada recompensa aberta: a caminho, ocupado ou o motivo da recusa, com a recompensa que o faria mudar de ideia. O painel de uma recompensa agrupa os heróis por esses motivos, os mais fáceis de convencer primeiro. O painel termina com o histórico do herói, seus últimos oito feitos com a hora de jogo de cada um: o equipamento que comprou e o que estudou, as recompensas que aceitou e o que o decidiu (o pagamento, outros que já estavam nela ou o que ele lembra), quanto recebeu e ao lado de quem, quem veio em seu socorro quando estava gravemente ferido e quando voltou para casa.

## Aventureiros e facções

Rebeldes, traidores e espiões humanos usam as mesmas classes, habilidades aprendidas, equipamentos e poções dos aventureiros recrutados. Lutam e ajudam conforme as relações entre facções, gastam o dinheiro e os suprimentos limitados da própria guilda e se recuperam em um acampamento que ainda exista. Traidores mantêm nome e histórico; a facção de um espião não revelado aparece como desconhecida. Heróis externos não compartilham pesquisas nem vagas de recrutamento da Coroa. O pincel de heróis do editor permite colocar aventureiros da Coroa, aliados, neutros ou hostis.

**Urso pardo · Falcão de caça** — Chama um cão. Do nível 8 em diante, escolhe um falcão ágil contra inimigos à distância, um urso resistente contra armadura pesada ou grupos de três, e um cão nos demais casos. Compartilham o limite de 12 invocações no mapa, seguem o dono em terreno transitável, não custam manutenção nem dão saque e ficam para trás na próxima missão.

### Companheiros duradouros

Contribuições reais em combates conjuntos perigosos criam camaradagem mútua. Cura efetiva, escudos que absorvem dano ou dano recebido por um herói em estado crítico podem deixar uma dívida de resgate em quem foi ajudado; cooperação complementar repetida pode formar uma parceria mútua. Cada herói mantém até três companheiros importantes nos jogos salvos e nas fases de campanha que transportam heróis. Laços fracos diminuem sem interação; morte ou partida definitiva remove os vínculos envolvidos. Apenas dividir saques, ficar por perto, ajuda ineficaz e cancelar bandeiras não fortalecem relações. Trabalhos conjuntos concluídos ficam no histórico do herói; relações não concedem bônus permanentes de ataque ou armadura.

### Convites entre companheiros

Um herói que se oferece para uma recompensa contra uma fortaleza pode convidar até três companheiros próximos e livres. Cada um decide com base na saúde atual, provisões, perigo, trajeto e parcela prevista da recompensa, podendo escolher outro trabalho. Convites pendentes reservam vagas limitadas de reunião e deixam espaço para outros voluntários. Eles expiram e têm intervalo entre convites, sem reiniciar a reunião nem interromper descanso, resgate, combate ou outras tarefas. Aceitar ou recusar não muda a força do vínculo. A partida salva conserva os convites atuais; o próximo mapa da campanha limpa convites e intervalos, mas mantém as identidades.

### Companheiros em viagem

Heróis mantêm suas rotas e decisões de recuo. Em uma marcha segura contra uma fortaleza podem esperar uma vez por um companheiro próximo atrasado, por no máximo oito segundos. Apoios preferem companheiros alcançáveis com segurança, param de seguir quando o trabalho muda ou fica perigoso e não ultrapassam seu alcance normal. Uma perda deixa cautela local breve e limitada e um registro histórico, sem aumentar o descontentamento. Salvar mantém o prazo original; o próximo mapa limpa a espera.

### Entender os companheiros

Os detalhes do herói mostram até três companheiros, a origem do vínculo e se trabalham juntos, estão em outro lugar do reino ou na reserva. A recompensa mostra respostas, motivos de recusa e o prazo original restante. Nomes de companheiros vivos permitem localizá-los. Resgates, cooperação e perdas importantes entram na crônica e nas histórias finais; notícias repetidas são agrupadas e morte e partida permanente são distintas.

<!-- BEGIN COMBAT PAIRINGS -->
### Combinações de combate

Cada prova independente começa com oito heróis de nível 8. O capital total de 7000 ouro inclui edifícios, melhorias necessárias, pesquisas, uma poção por herói, reagentes ou suprimentos finitos e 200 ouro por herói. O restante fica no tesouro. Heróis decidem seus movimentos e habilidades; guie-os com edifícios e recompensas. Todo inimigo é veterano ou mais forte e marcha sobre o castelo de longe, sem ser visto; uma prova dura até 20 minutos.

Ambas as variantes venceram com sementes 17 e 73. Os tempos descrevem o encontro inicial, não uma campanha inteira. Defensores vivos permanecem após a queda do posto.

#### Sustentação com escudos

Escudos e cura precisam de atacantes contra armaduras.

| # | Heróis | Edifícios | Pesquisa | Capital | Tempo (s) | Vivos | Dano/s | Cura / absorção dos escudos |
|---|---|---|---|---|---|---|---|---|
| 1 | Cavaleiro do Escudo ×2, Hospitalário ×2, Patrulheiro ×2, Mago ×2 | Bastião, Santuário, Torre do Mago | Trama protetora, Disciplina curativa | 7000 | 143.6–319 | 8 | 12.9–26.28 | 0 / 3, 222 / 140 |
| 2 | Guerreiro ×2, Mago ×2, Patrulheiro ×4 | Quartel, Torre do Mago, Abrigo do Patrulheiro | Táticas de Batalha, Afinidade Arcana | 7000 | 124.6–198.6 | 8 | 19.5–28.37 | 0 / 0, 0 / 0 |

#### Controle venenoso

Veneno exige reagentes pagos e perde valor contra purificação e alvos dispersos.

| # | Heróis | Edifícios | Pesquisa | Capital | Tempo (s) | Vivos | Dano/s | Cura / absorção dos escudos |
|---|---|---|---|---|---|---|---|---|
| 1 | Alquimista ×2, Cavaleiro do Escudo ×2, Hospitalário ×2, Patrulheiro ×2 | Guilda de alquimia, Bastião, Santuário, Altar de purificação | Reagentes cáusticos, Trama protetora, Alcance purificador | 7000 | 118.6–140.6 | 8 | 19.76–21.5 | 201 / 0, 30 / 0 |
| 2 | Mago ×3, Patrulheiro ×3, Guerreiro ×2 | Torre do Mago, Abrigo do Patrulheiro, Altar de purificação | Afinidade Arcana, Olhos Aguçados, Alcance purificador | 7000 | 91.6–106.6 | 8 | 25.98–27.67 | 0 / 0, 0 / 0 |

#### Torres a distância

Torres cobrem áreas fixas; caçadores e sapadores ameaçam a retaguarda exposta.

| # | Heróis | Edifícios | Pesquisa | Capital | Tempo (s) | Vivos | Dano/s | Cura / absorção dos escudos |
|---|---|---|---|---|---|---|---|---|
| 1 | Guarda ×2, Patrulheiro ×4, Guarda das Estradas ×2 | Posto de Guarda, Abrigo do Patrulheiro, Posto de Pedágio, Torre de Flechas, Torre de Flechas, Torre de geada, Farol de aviso | Grade de gelo, Lentes do farol, Olhos Aguçados | 7000 | 35.6–104.6 | 8 | 12.88–35.51 | 0 / 0, 0 / 0 |
| 2 | Guerreiro ×3, Mago ×2, Patrulheiro ×3 | Quartel, Torre do Mago, Torre de Flechas, Torre de geada | Táticas de Batalha, Grade de gelo | 7000 | 57.6–83.6 | 7 | 14.63–22.29 | 0 / 0, 0 / 0 |

#### Expedição animal

Animais dependem de guardiões vivos; frentes resistentes atrasam sua explosão.

| # | Heróis | Edifícios | Pesquisa | Capital | Tempo (s) | Vivos | Dano/s | Cura / absorção dos escudos |
|---|---|---|---|---|---|---|---|---|
| 1 | Guardião das Feras ×3, Batedor ×3, Patrulheiro ×2 | Abrigo das Feras, Acampamento selvagem, Abrigo do Patrulheiro | Treino da matilha, Guarda das feras, Voo certeiro | 7000 | 33.4–226.6 | 8 | 15.63–51.77 | 0 / 0, 0 / 0 |
| 2 | Guerreiro ×2, Patrulheiro ×3, Mago ×3 | Quartel, Abrigo do Patrulheiro, Torre do Mago | Olhos Aguçados, Táticas de Batalha | 7000 | 74.6–142.6 | 8 | 18.79–24.92 | 0 / 0, 0 / 0 |

#### Avanço corpo a corpo

Avanços corpo a corpo sofrem com zonas de veneno e fogo cruzado.

| # | Heróis | Edifícios | Pesquisa | Capital | Tempo (s) | Vivos | Dano/s | Cura / absorção dos escudos |
|---|---|---|---|---|---|---|---|---|
| 1 | Juramentado ×4, Porta-estandarte ×2, Patrulheiro ×2 | Salão de Guerra, Intendência, Abrigo do Patrulheiro | Juramento de sangue, Guarda do estandarte | 7000 | 60.6–63.6 | 7 | 20.28–25.3 | 0 / 0, 0 / 0 |
| 2 | Guerreiro ×4, Mago ×2, Patrulheiro ×2 | Quartel, Torre do Mago, Abrigo do Patrulheiro | Táticas de Batalha, Pele de Ferro | 7000 | 43.6–108.6 | 8 | 18.49–24.38 | 0 / 0, 0 / 0 |

#### Ruptura de cerco

Suprimentos de cerco são finitos. Proteja a rota e destrua o posto antes de novos guardas.

| # | Heróis | Edifícios | Pesquisa | Capital | Tempo (s) | Vivos | Dano/s | Cura / absorção dos escudos |
|---|---|---|---|---|---|---|---|---|
| 1 | Porta-estandarte ×2, Juramentado ×2, Patrulheiro ×4 | Intendência, Salão de Guerra, Abrigo do Patrulheiro | Provisão de cerco, Juramento de sangue | 7000 | 51.6–102 | 8 | 42.12–81.96 | 0 / 0, 0 / 0 |
| 2 | Patrulheiro ×4, Guerreiro ×2, Mago ×2 | Abrigo do Patrulheiro, Quartel, Torre do Mago | Olhos Aguçados, Táticas de Batalha | 7000 | 58.6–171 | 8 | 27.89–71.19 | 0 / 0, 0 / 0 |

<!-- END COMBAT PAIRINGS -->
