---
title: "Fortalezas Inimigas"
---

As Fortalezas Inimigas são bases inimigas espalhadas pelo mapa. Elas mantêm guardas próprios e a maioria delas ataca a sua cidade (veja *Ataques dos covis* abaixo).

---

## Tipos de Fortalezas

| Fortaleza | Inimigos Gerados | Tamanho | Restrição |
|-----------|------------------|---------|-----------|
| **Poça de Slime** | Slime / Limo físsil | 11 tiles | -- |
| **Acampamento Goblin** | Goblin / Lobo atroz / Arqueiro goblin | 11 tiles | -- |
| **Fortaleza Goblin** | Goblin / Bruto orc / Arqueiro goblin / Troll / Piqueiro / Porta-escudo / Sapador / Besta de cerco / Xamã goblin | 23 tiles | Uma por mapa |
| **Cemitério** | Esqueleto / Zumbi | 11 tiles | -- |
| **Castelo dos Mortos-Vivos** | Esqueleto / Zumbi / Cultista sombrio / Necromante inimigo / Caçador espectral / Morcego vampiro | 23 tiles | Uma por mapa |
| **Ninho de Dragão** | Dragão / Harpia | 16 tiles | -- |
| **Ninho de Aranhas** | Aranha gigante / Rato gigante / Cuspidor de veneno | 11 tiles | -- |
| **Acampamento de Bandidos** | Bandido / Lobo atroz / Sabotador bandido | 11 tiles | -- |
| **Tumba de Areia** | Espectro da areia / Esqueleto / Escorpião venenoso / Guardião de arenito | 13 tiles | -- |
| **Covil de Lobos** | Lobo atroz | 11 tiles | -- |
| **Acampamento de Guerra Orc** | Bruto orc / Goblin / Piqueiro / Porta-escudo / Sapador / Besta de cerco | 13 tiles | -- |
| **Torre de Vigia Goblin** | Arqueiro goblin / Goblin | 9 tiles | -- |
| **Santuário Sombrio** | Cultista sombrio / Esqueleto / Vinculador de maldições | 11 tiles | -- |
| **Caverna do Troll** | Troll | 13 tiles | -- |
| **Toca de Ratos** | Rato gigante | 9 tiles | -- |
| **Ninho de Harpias** | Harpia | 11 tiles | -- |
| **Quartel blindado** | Porta-escudo / Piqueiro / Arqueiro goblin / Xamã goblin | 13 tiles | -- |
| **Incubadora de praga** | Limo físsil / Cuspidor de veneno / Vinculador de maldições / Morcego vampiro | 11 tiles | -- |
| **Acampamento de cerco** | Besta de cerco / Sapador / Arqueiro goblin / Porta-escudo | 15 tiles | -- |
| **Cabana do Xamã** | Xamã goblin / Goblin / Arqueiro goblin | 9 tiles | -- |
| **Esconderijo do Sabotador** | Sabotador bandido / Bandido | 9 tiles | -- |
| **Toca de Escorpiões** | Escorpião venenoso | 11 tiles | -- |
| **Santuário Soterrado** | Guardião de arenito / Esqueleto | 13 tiles | -- |
| **Cripta do Necromante** | Necromante inimigo / Esqueleto / Zumbi | 11 tiles | -- |
| **Túmulo Espectral** | Caçador espectral / Esqueleto | 11 tiles | -- |
| **Pântano dos Cuspidores** | Cuspidor de veneno / Slime | 11 tiles | -- |
| **Círculo de Maldições** | Vinculador de maldições / Cultista sombrio | 11 tiles | -- |
| **Caverna de Morcegos** | Morcego vampiro | 11 tiles | -- |
| **Guilda Rebelde** | Bandido | 9 tiles | Somente por evento |

:::note[Uma por Mapa]
A Fortaleza Goblin e o Castelo dos Mortos-Vivos podem aparecer no máximo uma vez em todo o mapa.
:::

---

## Atributos das Fortalezas

| Atributo | Valor |
|----------|-------|
| HP | 2.500 |
| Guardas Máximos | 3 |
| Reposição de guardas | Um a cada 150 ticks (~30 segundos) até o máximo |
| Roubo de Ouro | 5g × (1 + luck ÷ 10) |
| Dano de Ataque | 8 + ATK/4 |
| Intervalo de Roubo | 45 ticks |

---

## Regras de Geração de Fortalezas

| Regra | Valor |
|-------|-------|
| Distância Mínima do Castelo | 60 tiles |
| Distância Mínima entre Fortalezas | 30 tiles |
| Quantidade Padrão | 3 (ajustável nas configurações de dificuldade) |

## A Volta dos Monstros

Quando nenhuma fortaleza do mapa continua de pé, os monstros voltam para reconstruir uma:

| Etapa | O que acontece |
|------|-------------|
| Espera | Cerca de 3 minutos depois que a última fortaleza cai |
| Grupo | Cinco monstros de um dos tipos de fortaleza do mapa entram pela borda do mapa mais próxima |
| Local | Um dos antigos locais de fortaleza, longe do castelo e afastado das suas construções |
| Canteiro de obras | Quando três chegam: a fortaleza com cerca de um terço das muralhas; não gera nada e não envia ataques |
| Concluída | Depois de 2 minutos, fica inteira como uma fortaleza comum |
| Interrompida | Mate o grupo no caminho ou arrase o canteiro de obras; a próxima tentativa vem 5 minutos depois |

Um mapa nunca recupera mais fortalezas do que tinha no começo, e um mapa que começou sem nenhuma nunca ganha uma.

---

## Atacando Fortalezas

### Sequência de Ataque

1. Os aventureiros chegam às proximidades da fortaleza
2. Primeiro enfrentam os **inimigos guardiões** (até 3)
3. Enquanto estão perto da fortaleza, podem **roubar ouro**
4. Quando o ouro se esgota, podem **atacar as muralhas**
5. Quando o HP das muralhas chega a zero, a fortaleza é destruída

### Dicas Estratégicas

:::tip[Como Destruir Fortalezas de Forma Eficaz]
1. Coloque uma **recompensa** (com uma recompensa alta) perto da fortaleza
2. Certifique-se de ter aventureiros à distância suficientes (Magos / Patrulheiros)
3. Magos (alcance de ataque 12) e Patrulheiros (alcance de ataque 11) podem atacar a uma distância segura
4. Leve Guardas junto para proteger suas unidades à distância
5. Tenha Construtores prontos para reparar construções danificadas
:::

:::caution[Observação]
Atacar as muralhas da fortaleza **não concede experiência**. Apenas derrotar inimigos guardiões concede experiência. Arrasar uma fortaleza concede +25 de renome e paga a recompensa colocada nela; nada é deixado cair.
:::

---

## Grupos de Facção

As fortalezas são agrupadas por facção. No modo sandbox, você pode selecionar facções específicas:

| Facção | Fortalezas Incluídas |
|--------|---------------------|
| **Slime** | Poça de Slime, Incubadora de praga, Pântano dos Cuspidores |
| **Goblin** | Acampamento Goblin, Fortaleza Goblin, Torre de Vigia Goblin, Acampamento de Guerra Orc, Cabana do Xamã |
| **Mortos-Vivos** | Cemitério, Castelo dos Mortos-Vivos, Santuário Sombrio, Cripta do Necromante, Túmulo Espectral, Círculo de Maldições |
| **Dragão** | Ninho de Dragão |
| **Fera** | Ninho de Aranhas, Covil de Lobos, Toca de Ratos, Caverna do Troll, Ninho de Harpias, Caverna de Morcegos |
| **Bandido** | Acampamento de Bandidos, Esconderijo do Sabotador |
| **Deserto** | Tumba de Areia, Toca de Escorpiões, Santuário Soterrado |
| **Legião** | Quartel blindado, Acampamento de cerco |

---

## Ataques dos covis

Cada fortaleza ataca conforme o seu tipo:

| Covil | Primeiro ataque | Depois a cada | Saqueadores | Alvo |
|------|------|------|------|------|
| **Poça de Slime** | — | — | nenhum | — |
| **Acampamento Goblin** | 8:00 | 5:00 | 3, mais um a cada ataque, 6 no máximo | a cidade |
| **Acampamento de Bandidos** | 6:00 | 4:00 | 2, mais um a cada ataque, 5 no máximo | a estrada comercial (o Entreposto comercial mais próximo); senão, a cidade |
| **Fortaleza Goblin** | 11:00 | 6:00 | 4, mais um a cada ataque, 8 no máximo | a cidade |
| **Acampamento de Guerra Orc** | 10:00 | 6:00 | 2, mais um a cada ataque, 5 no máximo | o que está em construção, senão o castelo |
| **Torre de Vigia Goblin** | 8:00 | 5:00 | 3, mais um a cada ataque, 6 no máximo | a cidade |
| **Santuário Sombrio** | 11:00 | 7:00 | 2, mais um a cada ataque, 4 no máximo | a cidade |
| **Caverna do Troll** | 14:00 | 10:00 | 1 | a cidade |
| **Ninho de Harpias** | 9:00 | 6:00 | 2, mais um a cada ataque, 4 no máximo | a cidade |
| **Quartel blindado** | 9:00 | 6:00 | 4, mais um a cada ataque, 8 no máximo | a cidade |
| **Incubadora de praga** | 8:00 | 5:30 | 3, mais um a cada ataque, 7 no máximo | a cidade |
| **Acampamento de cerco** | 12:00 | 8:00 | 3, mais um a cada ataque, 6 no máximo | o que está em construção, senão o castelo |
| **Cabana do Xamã** | 9:00 | 6:00 | 2, mais um a cada ataque, 5 no máximo | a cidade |
| **Esconderijo do Sabotador** | 8:00 | 5:00 | 2, mais um a cada ataque, 4 no máximo | o que está em construção, senão o castelo |
| **Toca de Escorpiões** | — | — | nenhum | — |
| **Santuário Soterrado** | 12:00 | 8:00 | 2, mais um a cada ataque, 4 no máximo | a cidade |
| **Cripta do Necromante** | 11:00 | 7:00 | 2, mais um a cada ataque, 5 no máximo | a cidade |
| **Túmulo Espectral** | 10:00 | 6:30 | 2, mais um a cada ataque, 4 no máximo | a cidade |
| **Pântano dos Cuspidores** | 9:00 | 6:00 | 2, mais um a cada ataque, 4 no máximo | a cidade |
| **Círculo de Maldições** | 11:00 | 7:00 | 2, mais um a cada ataque, 4 no máximo | a cidade |
| **Caverna de Morcegos** | 8:00 | 5:00 | 3, mais um a cada ataque, 6 no máximo | a cidade |

- Cada ataque é anunciado 30 segundos antes na crônica, com o lugar do covil quando seus heróis já o viram; um covil nunca visto é anunciado sem lugar, então explorar compensa.
- Um ataque parte como um único grupo de junto ao covil. No fácil, um saqueador a menos; no difícil, dois a mais.
- Cada covil mantém até 3 guardas do seu tipo, um novo a cada 30 segundos.
- Arrasar um covil encerra seus ataques e dá à coroa metade do que resta do seu tesouro; o que os heróis saquearam antes é deles.
- Selecionar um covil mostra quem vive ali e o que lhe faz frente, quando parte o próximo ataque e quanto se recuperaria ao arrasá-lo.
- Os outros covis atacam a cidade com o perfil padrão (o primeiro após 10:00, depois a cada 6:40, de 3 a 6 saqueadores); um Ninho de Aranhas, um Covil de Lobos e uma Toca de Ratos não enviam nenhum.
