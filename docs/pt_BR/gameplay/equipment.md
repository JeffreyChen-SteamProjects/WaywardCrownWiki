---
title: "Equipamentos e Lojas"
---

Os aventureiros compram automaticamente equipamentos e consumíveis nas lojas perto do Castelo.

---

## Sistema de Equipamentos

Os aventureiros podem comprar armas e armaduras na **Ferraria**:

| Equipamento | Efeito por Nível | Fórmula de Preço | Nível Máx |
|-------------|------------------|-------------------|-----------|
| **Arma** | +3 ATK / nível | 100g × nível | 3 (requer Ferraria do mesmo nível) |
| **Armadura** | +2 DEF / nível | 100g × nível | 3 (requer Ferraria do mesmo nível) |

:::note[Requisito de Nível da Ferraria]
Uma Ferraria Nv.1 só pode vender equipamentos Nv.1. Para dar equipamentos melhores aos seus aventureiros, você precisa melhorar a Ferraria.
:::

### Estatísticas Cumulativas de Equipamentos

| Nível | ATK da Arma | DEF da Armadura | Preço da Arma | Preço da Armadura |
|-------|------------|-----------------|---------------|-------------------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Consumíveis

### Poções

| Item | Preço | Efeito |
|------|-------|--------|
| **Poção de Cura** | 100g | Restaura 40 HP |

- Os aventureiros podem carregar até **3** poções
- Reabastecidas automaticamente nas lojas
- Usadas quando o HP cai abaixo de 50%

### Poção de Velocidade

| Item | Preço | Efeito |
|------|-------|--------|
| **Poção de Velocidade** | 200g | Aumenta a velocidade de movimento por 60 ticks |

Vendida apenas quando um Mercado chega ao Nv.2; um aventureiro carrega no máximo 2.

### Proteção contra a Morte

| Item | Preço | Efeito |
|------|-------|--------|
| **Anel de Proteção Mortal** | 500g | Bloqueia um golpe letal |

Vendido apenas quando um Mercado chega ao Nv.3.

---

## Comportamento de Compra

Os aventureiros compram automaticamente quando param a até 7 tiles de um **Mercado** ou **Ferraria**.

Em um Mercado, nesta ordem:

1. Beber uma poção de cura na hora, se estiverem feridos
2. Comprar um Anel de Proteção Mortal (Mercado Nv.3)
3. Reabastecer as poções carregadas (até 3)
4. Comprar Poções de Velocidade (Mercado Nv.2, até 2)

Em uma Ferraria, compram o **próximo** nível de arma e o próximo nível de armadura que puderem pagar, um nível por visita, até o nível da Ferraria.

**Só as lojas vendem.** O castelo, as guildas e as estalagens não vendem nada: um herói que precisa de equipamento ou poções caminha até uma Ferraria ou um Mercado (veja *O ouro do reino* abaixo).

:::note[Receita de Impostos]
Sempre que os aventureiros gastam ouro (equipamentos, poções, estudo) ou o ganham (abates, baús), **20%** do valor é o imposto do tesouro: 30% durante um Aumento de Impostos, nada durante um Mercado Negro. Ele espera no caixa da construção onde o ouro foi gasto até que um coletor de impostos o leve ao castelo.
:::

---

## O ouro do reino

Cada moeda é contabilizada:

- **O dinheiro vai para a loja**: os heróis só compram na própria construção (o castelo não vende nada). O que pagam é o faturamento dessa construção, e o tesouro fica com sua parte de imposto: 20%, 30% durante um aumento de impostos e nada durante um mercado negro.
- **Caixas**: a parte do tesouro não chega sozinha. Ela espera no caixa da construção onde o ouro foi gasto (a parte do saque de um herói espera na guilda dele, e a renda periódica de um mercado no próprio caixa). Um caixa guarda 600 de ouro; o que não cabe se perde, e uma construção que cai perde seu caixa.
- **Coletor de impostos**: o castelo tem um coletor que caminha até o caixa mais cheio com 40 de ouro ou mais, carrega até 400 e leva para casa, onde vira ouro do tesouro. Ele foge de monstros e nunca luta; se for morto, o que carregava fica ali como um baú, e um novo coletor sai do castelo 300 ticks depois. Os painéis das construções, do castelo e do coletor mostram o que espera e o que está sendo carregado. Um castelo de nível 2 mantém dois coletores e um de nível 3, três; cada um vai a um caixa diferente. Um coletor sem nada para buscar descansa dentro do castelo, fora do mapa, onde nada o alcança. Ele sai pela frente do castelo quando um caixa vale a viagem, fica um momento diante da frente daquele edifício para esvaziar o caixa e volta a entrar ao chegar em casa; depois de fugir de um monstro, fica lá dentro por um tempo. O castelo mantém seu número de coletores, substituindo cada um que perde, e seu painel tem uma linha para eles que diz onde cada um está. Uma **Coletoria** (280 de ouro; quantas quiser, cada uma mais cara que a anterior) mantém mais um coletor, só dela: ele mora lá, sai pela porta dela, leva para lá o que arrecada, que vira ouro do tesouro na hora, e é substituído lá 60 segundos depois de ser perdido.
- **Ajustes de impostos**: o painel de um prédio pode tirar o seu caixa das rondas dos coletores (ele então enche e o excesso se perde) ou pedir ao próximo coletor livre que o esvazie primeiro, por menos que tenha; o resumo do reino define o quanto um caixa precisa ter antes que um coletor vá até ele (20, 40 ou 150 de ouro). Os coletores continuam escolhendo o próprio caminho, deixam para depois um caixa com um monstro por perto e fogem do perigo. A dica do ouro e o resumo dividem o ouro do reino entre o que pode ser gasto, o que espera nos caixas, o que os coletores carregam e o que está nas recompensas abertas; o resumo também avisa quando os heróis querem equipamento ou poções que nenhum prédio vende, e o painel de um prédio diz a que distância ele fica do castelo. O resumo também define quão cautelosos são os carregadores da coroa: coletores, caravanas e operários da equipe fogem de um monstro a 9, 6 ou 4 casas; os cautelosos se perdem menos e trazem menos. A dica do rótulo de ouro acrescenta o que as caravanas na volta ainda vão pagar e o que os heróis carregam. Uma política fiscal ajusta as duas coisas de uma vez: Segura (só caixas cheios, os carregadores fogem cedo), Constante (as rondas de sempre) ou Ávida (caixas pequenos também, os carregadores aguentam firme).
- **Entreposto e caravana**: um reino pode construir quantos entrepostos pagar, cada um mais caro que o anterior, a pelo menos 45 casas do castelo, em terreno que se alcance a pé a partir dele. Sua caravana, uma mula de carga, caminha até o castelo, descarrega e volta; uma viagem que chegou ao castelo rende 0,6 de ouro por casa entre o entreposto e o castelo ao caixa do entreposto, então um entreposto mais distante paga mais e deixa a caravana mais tempo fora. Ela anda uma casa a cada 2 ticks, a cada tick sobre uma estrada. Um monstro à vista a manda para a ponta mais próxima da estrada até ele sumir, um ao lado dela a fere, e você é avisado de onde; uma caravana perdida é reposta após 400 ticks. Ele precisa de um castelo de nível 2.
- **Recompensas são transferências**: uma recompensa paga exatamente o que contém. Os multiplicadores de ouro da dificuldade e dos traços valem só para saque e baús.
- **Comprado uma vez, reposto até um limite**: cada nível de equipamento, o anel e cada estudo da biblioteca são comprados uma vez; poções são repostas até 3 e poções de velocidade até 2.
- **Rações**: um herói em descanso sem poção e sem ouro para comprar uma recebe uma poção da guilda, no máximo uma vez a cada 600 ticks.
- **Lojas como serviços**: um mercado vende de acordo com o próprio nível (poções de velocidade a partir do nível 2, o anel a partir do nível 3), uma ferraria forja equipamento até o seu nível, uma biblioteca ensina um estudo por nível e uma estalagem hospeda tantos heróis quantos quartos tem. Um herói só vai a uma loja que tem algo novo para ele e escolhe a mais próxima, contando a que tem um monstro a até 8 casas como 40 casas mais longe. O painel de uma loja mostra quanto os heróis gastaram ali, quem está a caminho e os últimos seis clientes. Nada é pago antes de o herói estar no balcão, então uma loja que cai, lota ou é melhorada no caminho não deixa nenhuma troca pela metade.
- **Livro-razão**: o jogo mantém um total para cada fluxo (recompensas publicadas, construção, pesquisa, ressurreição, roubo; impostos, comércio, reembolsos, demolição, ganhos inesperados; recompensas pagas, saque, baús, pilhagem; equipamento, suprimentos, estudo, lazer) com os últimos lançamentos e o faturamento de cada construção, salvo com o jogo. O tesouro, as recompensas e as lojas precisam fechar cada um por si.
- **Visão geral do reino**: há uma aba «Reino» atrás do painel Detalhes. Ela mostra o tesouro, suas receitas e despesas por tipo, o que aguarda nos caixas e com os coletores, o que os heróis ganharam e gastaram, as viagens e perdas de caravanas, a clientela de cada loja, os últimos lançamentos do livro-razão e o que requer atenção (um castelo que pode ser ampliado, nenhum coletor fora, uma caravana perdida, uma loja com um monstro por perto, um caixa cheio). Os nomes são links que selecionam a construção ou o castelo e movem o mapa até lá. Em *Ouro parado* ela indica onde o ouro está ocioso, cada item com um link para o lugar: o caixa mais cheio que os coletores devem deixar, os caixas que guardam cada um menos do que faz um coletor caminhar e a maior recompensa que nenhum herói aceitou em dois minutos.
- **Registros**: uma aba Registros (tecla L) lista cada herói, guilda, obra e a renda de cada construção do reino, uma linha para cada, com uma caixa de busca. Os heróis podem ser reduzidos aos ociosos, aos que estão em uma recompensa, aos feridos, aos que pensam em partir e aos sem guilda; as guildas às com vaga, às cheias e às com monstros por perto; as obras, na ordem em que a equipe da coroa as pega, às construções em andamento, em melhoria, danificadas e às obras paradas; a renda aos caixas com ouro, aos caixas fora da ronda dos coletores e às lojas com monstros por perto. Um clique em uma linha a mostra no mapa e um clique duplo abre os detalhes. Os registros não dão ordens e não listam nada do inimigo.
- **Camadas do mapa**: o botão Camadas na barra superior (tecla M) põe sobre o mapa o que o reino sabe. Abastecimento circula cada loja, estalagem, templo e biblioteca com o alcance em que um monstro afasta os clientes. Ouro a caminho escreve o que espera em cada caixa e desenha o trajeto de cada coletor e a estrada de cada caravana. Obras numera os trabalhos da equipe na ordem em que ela os pega. Ameaças conhecidas circula os covis que o reino viu, com uma linha até o castelo a partir do que reúne um ataque. Alcance dos feitiços mostra onde os feitiços da coroa podem ser lançados e a rede de pináculos do caminho arcano. Verde vai bem, âmbar pede uma olhada, vermelho é problema. Um covil que ninguém viu não está em nenhuma camada, e as camadas ligadas são lembradas.
- **Instruções e crônica**: a tela da missão dá as instruções antes de começar: a história, o que faz vencer e perder, o que pode ser construído e o conselho da fase. Uma aba Crônica guarda essas instruções e o que foi anunciado desde então, o mais recente primeiro: conselhos do roteiro, um covil avistado, uma recompensa que nenhum herói aceita (com o motivo e a recompensa que bastaria), uma caravana em apuros, um coletor de impostos ou uma construção perdida, um chefe que muda de tática ou cai. Cada registro tem sua hora e um link que move o mapa; uma repetição sobre o mesmo assunto é contada no registro em vez de ser dita de novo, e uma crônica cheia (60 registros) perde o mais antigo dos menos importantes. Os registros novos surgem de dois em dois sem pausar o jogo. Uma opção impede que conselhos e notícias menores surjam: perdas e chefes continuam aparecendo, e tudo continua anotado. A crônica pode ser mantida em um assunto (ameaças, heróis, ouro, ou coroa e conselhos); a escolha é lembrada.
- **Resultados**: quando um jogo termina, vencido ou perdido, uma tela de resultados diz por quê e lista o objetivo e cada inimigo com nome com seu desfecho, os heróis contratados, perdidos e ainda de pé, as receitas e despesas do tesouro por tipo, as perdas de caravanas e coletores de impostos, os monstros abatidos, os covis arrasados, as recompensas, as construções e o tempo de jogo. Ela lembra até três heróis: o que mais subiu, o que mais matou e o melhor entre os que caíram. Uma fase vencida é avaliada com três marcas, cada uma uma frase simples com seus números (objetivo cumprido; não mais de um herói em cada quatro perdido; nenhuma construção perdida); nenhuma trata de velocidade. Dali: a próxima fase, a mesma fase de novo, o menu ou, após uma derrota, uma olhada no mapa. O resumo pode ser salvo como arquivo de texto em uma pasta `recaps` ao lado das configurações. Terminar a história da Demo acrescenta o que está aberto agora e o que está planejado para o jogo completo.
- **Achados opcionais**: uma fase pode esconder até duas coisas que vale a pena achar; nenhuma é necessária para vencer. Um comboio de suprimentos cercado por monstros aguenta seis minutos depois de achado; um herói que chega a ele com os sitiantes mortos leva 300 de ouro em suprimentos ao tesouro. Um esconderijo tem um guardião duas vezes mais resistente que os do seu tipo: a coroa coloca uma recompensa «Matar» nele, e o baú de 400 de ouro é dos heróis. Há um tesouro sob um covil que não envia ataques: arrasá-lo deixa um baú de 500 de ouro. Eles não dizem nada até que seu lugar seja visto; então a crônica os anuncia, uma lista «Opcional» na aba Crônica os acompanha com links, e a tela de resultados diz como terminaram. As três missões da Demo trazem um, um e dois.
- **Dificuldade e recuperação**: fácil e difícil mudam números, nunca a vida dos inimigos: cada ataque de covil tem um saqueador a menos ou dois a mais, uma onda do roteiro tem 75% ou 125% do seu tamanho, e uma fase começa com 125% ou 85% do seu ouro; a tela da missão informa. As fases da Demo nomeiam um elenco (slime, rato gigante, goblin, arqueiro goblin, lobo atroz, bandido, bruto orc, troll) para o que vaga por seus mapas, e nunca sorteiam os eventos aleatórios que trazem uma força própria, pois seus ataques são anunciados. Um reino sem guildas e sem ouro para uma recebe a diferença da coroa, no máximo uma vez a cada cinco minutos, e uma fase pode ser reiniciada a qualquer momento pelo menu Esc.
- **A vida da cidade, vista e ouvida**: um pequeno ícone sobe sobre o lugar onde um herói compra poções ou armas, paga por uma cama ou uma lição, um coletor de impostos esvazia um caixa ou entrega os impostos, uma caravana é paga, um recruta se alista, um nível é ganho, um edifício é melhorado ou consertado, um baú é aberto ou algo é descoberto. Cada um tem um som curto próprio: mais baixo quanto mais longe da vista, no máximo três ao mesmo tempo e nunca o mesmo em seguida. Um covil que reúne um ataque traz no mapa um anel vermelho pulsante e uma trompa, e no minimapa uma moldura piscando, até o ataque partir; a trompa, os tambores de guerra e um chefe são ouvidos de qualquer lugar. Com o volume dos efeitos em zero, os ícones ainda dizem tudo. Os sons são sintetizados por `tools/soundgen.py` e os ícones são renderizados pelo gerador de arte; nada é gravado nem amostrado.
- **Os heróis respondem**: selecionar um herói toca uma resposta curta na voz da sua classe e mostra o que ele diz no topo do painel. A resposta segue a situação dele: gravemente ferido ou fugindo para casa, lutando, a caminho de uma recompensa, descansando sob um teto, consertando um muro, com poucos suprimentos ou pouco sono, ou pronto, quando cada classe tem sua própria saudação. Há no máximo uma resposta a cada 1,5 segundo, e a linha continua lá sem som.
- **Toda unidade tem voz**: um monstro, um coletor de impostos, uma caravana e um aldeão respondem a um clique com o som da sua espécie, como um herói responde conforme o seu ânimo, e tudo o que anda pelo mapa é ouvido ao cair. Um herói e o resto do povo da coroa (coletores de impostos, caravanas, os operários da coroa, os aldeões de uma casa derrubada) são ouvidos onde quer que a vista esteja; um monstro fica mais baixo com a distância da vista, a mesma espécie é ouvida no máximo uma vez a cada dois segundos e no máximo dois desses sons se sobrepõem. Nenhum som de unidade dura menos de um segundo.
- **Música**: o menu e o jogo têm cada um as suas faixas, em ordem aleatória: qualquer uma pode abrir, e cada faixa toca uma vez antes que alguma se repita. Enquanto um chefe com nome está em campo, toca a música dele, e a do jogo volta quando ele cai; um castelo caído também tem a sua.
- **Visível no mapa**: a carroça de um comboio de suprimentos encalhado, com uma roda solta e a carga meio descarregada, fica no local desde que ele é explorado até o comboio ser alcançado ou perdido; um chefe exibe um emblema de caveira com chifres acima do nome e da barra de vida. Os dois aparecem iguais nos dois caminhos de renderização. O Chefe Presa-Rangente tem uma aparência própria: elmo com chifres, escudo vermelho, machado de dois gumes e o estandarte do seu bando nas costas.
