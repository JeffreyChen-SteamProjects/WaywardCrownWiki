---
title: "Eventos Aleatórios"
---

O jogo aciona eventos aleatórios em intervalos regulares, adicionando imprevisibilidade à jogabilidade. A intensidade dos eventos escala dinamicamente com base no número de aventureiros. O tutorial embutido nunca sorteia um terremoto nem um evento que coloque uma estrutura nova no mapa.

---

## Regras de Acionamento de Eventos

| Configuração | Valor |
|--------------|-------|
| Período de graça inicial | 1500 ticks (~5 minutos) |
| Intervalo de verificação | A cada 300 ticks |
| Chance de acionamento | 60% |
| Intervalo entre eventos | 600 ticks (~2 minutos) |

---

## Eventos de Ameaça

Estes exercem pressão sobre o jogador durante sua duração e exigem uma resposta ativa.

| Evento | Duração | Peso | Efeito |
|--------|---------|------|--------|
| **Invasão de Monstros** | 250 | 2 | Inimigos avançam em direção ao castelo! |
| **Praga** | 200 | 0 | Todos os aventureiros sofrem dano periódico |
| **Lua de Sangue** | 350 | 2 | Inimigos ficam mais fortes e agressivos |
| **Assalto dos Mortos-Vivos** | 300 | 2 | Esqueletos e zumbis surgem perto do castelo |
| **Ataque Goblin** | 250 | 2 | Goblins atacam lojas e roubam ouro |
| **Despertar do Ninho do Dragão** | 450 | 1 | Um ninho de dragão surge e gera dragões. Destrua-o! |
| **Noite Amaldiçoada** | 300 | 2 | Inimigos mais rápidos, mas 2x EXP por abate |
| **Terremoto** | Instantâneo | 1 | Construções e o castelo sofrem dano pesado e estradas são destruídas |
| **Traidor** | Instantâneo | 1 | Um aventureiro aleatório trai a guilda e vira inimigo! O traidor fica marcado como de elite no mapa. |
| **Guilda Rebelde** | 400 | 2 | Uma guilda hostil aparece e gera inimigos. Destrua-a! |
| **Inflação** | 350 | 1 | Preços de poções e equipamentos sobem 50% |
| **Selo de Mana** | 250 | 1 | Magos perdem todo o poder de ataque |
| **Tempestade de Areia** | 300 | 2 | Velocidade e dano à distância reduzidos pela metade |
| **Névoa Densa** | 250 | 1 | A névoa de guerra reaparece no mapa; visão reduzida |
| **Infiltração de Espiões** | 350 | 2 | Ondas de inimigos disfarçados de aventureiros atacam o castelo |
| **Chuva Corrosiva** | 300 | 2 | Construções perdem PV a cada tick (cerca de metade do PV máximo ao longo da chuva), reparo pela metade |
| **Maldição das Almas** | 300 | 1 | Aventureiros caídos se erguem novamente como zumbis! |
| **Deterioração de Equipamentos** | Instantâneo | 1 | Todos os aventureiros perdem 1 nível de equipamento |
| **Apagar Memória** | Instantâneo | 1 | Todos os aventureiros perdem 2 níveis! |
| **Deserção** | Instantâneo | 1 | Um quinto dos aventureiros (ao menos um) abandona a guilda! |
| **Armas Amaldiçoadas** | 120 | 2 | Aventureiros sofrem 30% de auto-dano ao atacar |
| **Desafio do campeão** | Instantâneo | 2 | Um monstro campeão ronda suas terras. Perigoso — e muito lucrativo |
| **Revolta dos monstros** | 350 | 2 | Todo monstro que surgir agora é veterano ou pior |

---

## Eventos de Benefício

Estes concedem ao jogador benefícios ou melhorias.

| Evento | Duração | Peso | Efeito |
|--------|---------|------|--------|
| **Chuva de Tesouros** | 150 | 1 | Baús extras aparecem pelo mapa |
| **Aumento de Impostos** | 350 | 1 | Taxa de impostos aumentada para 30% |
| **Frenesi de Construção** | 300 | 1 | Custos de construção pela metade, reparo duplicado |
| **Bênção do Templo** | 300 | 1 | Todos os aventureiros se curam lentamente em qualquer lugar |
| **EXP em Dobro** | 350 | 1 | Todos os ganhos de EXP são dobrados |
| **Onda de Recrutamento** | 300 | 1 | Velocidade de recrutamento duplicada, capacidade +1 |
| **Descida do Deus da Guerra** | 300 | 1 | Todos os aventureiros ganham +50% de ATQ |
| **Muralha de Ferro** | 300 | 1 | Construções e castelo sofrem metade do dano |
| **Ordem de Marcha** | 250 | 1 | Todos os aventureiros se movem mais rápido |
| **Estrelas da Sorte** | 300 | 1 | Ouro e EXP dos inimigos dobrados |
| **Mercado Negro** | 300 | 1 | Sem renda de impostos, mas equipamentos 30% mais baratos |
| **Reforços Aliados** | 350 | 1 | Aliados temporários de alto nível entram na luta |
| **Bênção da Forja** | 300 | 1 | Equipamentos de todos os aventureiros +1 nível |
| **Barreira Sagrada** | 300 | 0 | Inimigos são empurrados para longe do castelo |
| **Sabedoria Compartilhada** | 300 | 1 | 30% da EXP ganha é compartilhada com todos |
| **Distorção Temporal** | 300 | 1 | Todos os temporizadores rodam em 2x — inclusive spawns de inimigos! |

---

## Eventos Instantâneos

Surtem efeito imediatamente sem duração.

| Evento | Peso | Efeito |
|--------|------|--------|
| **Mutação de Elite** | 1 | Um inimigo aleatório evolui para uma elite poderosa! Ele fica marcado como de elite no mapa. |
| **Aventureiro Perdido** | 1 | Um aventureiro de alto nível chega das terras selvagens |
| **Roda da Fortuna** | 1 | Um evento aleatório é acionado! |
| **Despertar do Herói** | 1 | Um aventureiro aleatório desperta permanentemente como herói! |
| **Mapa do Tesouro** | 1 | Revela uma área oculta e gera baús valiosos |
| **Destinos Entrelaçados** | 1 | Dois aventureiros aleatórios trocam todos os atributos |
| **Arsenal Divino** | 1 | Vários aventureiros recebem equipamentos de nível máximo |
| **Era de Ouro** | 1 | Receba ouro com base no número de construções |
| **Dispersão** | 1 | Todos os aventureiros são teleportados para lugares aleatórios |
| **Fortificação** | 1 | Todas as construções totalmente curadas, PV máx +20% |
| **Fonte da Vida** | 1 | Todos os aventureiros totalmente curados, PV máx +10% |
| **Roleta de Atributos** | 1 | Os atributos de cada aventureiro são embaralhados |
| **Embaralhar Níveis** | 1 | Os níveis dos aventureiros são redistribuídos aleatoriamente |
| **Clone** | 1 | Um aventureiro aleatório é duplicado! |
| **Recepção de heróis** | 1 | Bardos cantam sobre sua guilda — uma onda de renome |

---

## Eventos de Estrutura

Geram estruturas persistentes no mapa.

| Evento | Duração | Efeito |
|--------|---------|--------|
| **Despertar do Ninho do Dragão** | 450 | Um ninho de dragão surge e gera dragões. Destrua-o! |
| **Guilda Rebelde** | 400 | Uma guilda hostil aparece e gera inimigos. Destrua-a! |
| **Ruínas Antigas** | 450 | Ruínas aparecem no mapa. Quem chegar primeiro ganha recompensas! |
| **Fenda Dimensional** | 300 | Portais aparecem e teleportam aventureiros aleatoriamente |

---

## Estratégias de Enfrentamento

:::tip[Eventos de Ameaça]
- Mantenha uma defesa permanente de Guardas e Torres de Flechas em todos os momentos
- Durante eventos de invasão, certifique-se de ter poder de combate suficiente ao redor do Castelo
- Envie expedições de recompensa para destruir Ninhos de Dragão e Guildas Rebeldes o mais rápido possível
- Ambos são marcados no mapa assim que aparecem: clique em um para ver sua vida e ponha uma recompensa «Matar» nele para enviar heróis para arrasá-lo
:::

:::tip[Aproveitamento de Benefícios]
- Durante EXP em Dobro, faça seus aventureiros lutarem o máximo possível para subir de nível
- Durante Frenesi de Construção, aproveite a oportunidade para expandir
- Durante Onda de Recrutamento, certifique-se de ter construções de recrutamento suficientes disponíveis
:::