---
title: "Mapas e Terreno"
---

O mapa do jogo é renderizado usando uma projeção isométrica 2:1 e suporta múltiplos tipos de terreno.

---

## Especificações do Mapa

| Propriedade | Valor |
|-------------|-------|
| Tamanho padrão | 1000 x 1000 tiles |
| Faixa ajustável | 250 ~ 1000 tiles |
| Tamanho do tile | 256 pixels |
| Projeção | Isométrica 2:1 (diamante) |

---

## Tipos de Terreno

| Terreno | Transitável | Custo de Movimento | Altura Base | Geração de Inimigos |
|---------|-------------|-------------------|-------------|---------------------|
| **Planície** | Sim | 1 | 0 | Rato gigante, Bandido, Harpia |
| **Floresta** | Sim | 2 | 0,5 | Slime, Zumbi, Lobo atroz, Aranha gigante, Cultista sombrio |
| **Montanha** | Sim | 3 | 5,0 | Goblin, Esqueleto, Dragão, Bruto orc, Arqueiro goblin, Troll |
| **Água** | Não | -- | -1,0 | -- |
| **Cidade** | Sim | 1 | 0 | -- |
| **Estrada** | Sim | 1 | 0 | -- |
| **Pântano** | Sim | 3 | -0,3 | -- |
| **Deserto** | Sim | 2 | 0,2 | Espectro da areia |
| **Lama** | Sim | 2 | -0,1 | -- |
| **Neve** | Sim | 1 | 0,2 | Rato gigante, Bandido, Harpia |
| **Colinas** | Sim | 1 | 1,6 | Rato gigante, Bandido, Harpia |
| **Terras áridas** | Sim | 2 | 0,3 | Espectro da areia |
| **Prado florido** | Sim | 1 | 0 | Rato gigante, Bandido, Harpia |

:::tip[Custo de Movimento]
Números menores significam movimento mais rápido. Estrada e Cidade têm o menor custo de movimento (1), enquanto Montanha e Pântano têm o maior (3). Fazer bom uso das estradas pode melhorar significativamente a eficiência de deslocamento dos aventureiros.
:::

---

## Névoa de Guerra

O mapa possui três camadas de visibilidade:

| Estado | Brilho | Descrição |
|--------|--------|-----------|
| **Inexplorado** | 0 (totalmente escuro) | Nunca visto por nenhum aventureiro ou construção |
| **Explorado** | 115 (cinza escuro) | Visto anteriormente, mas não está atualmente na linha de visão |
| **Visível** | 255 (totalmente iluminado) | Atualmente dentro da linha de visão de um aventureiro ou construção |

**O que é desenhado, e onde.** O que é seu é sempre desenhado: construções, heróis, aldeões, coletores, caravanas e bandeiras de recompensa, também em terreno que ninguém vê. Um covil ou uma ruína antiga é desenhado assim que qualquer parte dele foi vista, e continua desenhado. A partir daí os heróis também conhecem o covil e podem atacá-lo por conta própria. Monstros só são desenhados enquanto um herói os vê. Os portais de uma fenda dimensional são desenhados como anéis de luz violeta assim que seu terreno foi visto.

### Fontes de Visão

| Fonte | Alcance de Visão |
|-------|-----------------|
| Castelo | 30 tiles |
| Aventureiro (base) | 8 tiles |
| Mago (à distância) | 12 tiles |
| Patrulheiro (à distância) | 11 tiles |
| Construção defensiva (Torre de Flechas) | 16 tiles |
| Construção regular | 7 tiles |
| Fortaleza Inimiga | 10 tiles |

:::note[Visão de Aventureiros à Distância]
Magos e Patrulheiros enxergam exatamente até onde alcançam seus ataques (12 e 11 tiles), para que os jogadores vejam os alvos que estão atacando.
:::

---

## Geração de Mapas

Os mapas do modo sandbox são gerados aleatoriamente usando o algoritmo **Value Noise**:

1. Gerar ruído de terreno - determinar tipos de terreno
2. Gerar ruído de elevação - determinar variação de altitude
3. Posicionar o Castelo - estabelecer uma área de Cidade em um ponto aleatório da metade central do mapa
4. Espalhar baús de tesouro - max(10, 250 × W × H ÷ 1000²) baús distribuídos pela região selvagem
5. Gerar Fortalezas Inimigas - posicionados longe do Castelo

---

## Baús de Tesouro

| Propriedade | Valor |
|-------------|-------|
| Quantidade inicial | max(10, 250 × W × H ÷ 1000²) |
| Faixa de ouro | 20 ~ 55g |
| Localização | Áreas transitáveis fora das Cidades |

Os aventureiros coletam automaticamente os baús de tesouro ao passar por eles. Com a habilidade de pesquisa "Sentido para Tesouros", o ouro é aumentado em +50%. Um baú aberto fica onde estava, com a tampa jogada para trás, por dois minutos de jogo e depois some. Ele não impede a construção, e o edifício colocado sobre ele o remove.
