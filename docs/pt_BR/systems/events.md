---
title: "Eventos Aleatórios"
---

O jogo aciona eventos aleatórios em intervalos regulares, adicionando imprevisibilidade à jogabilidade. A intensidade dos eventos escala dinamicamente com base no número de aventureiros. O tutorial embutido nunca sorteia um terremoto nem um evento que coloque uma estrutura nova no mapa.

Os cartões de empréstimo mostram uma carta selada; cada novo convite emite um único som suave, conforme o volume dos efeitos. A aba Eventos do reino no painel de registros mostra convites e empréstimos pendentes sem pausar o jogo. As cartas de empréstimo indicam o capital pago imediatamente, o prazo, as devoluções e a perda máxima; recusar ou ignorar um convite é gratuito. Os editores de mapas e campanhas salvam os grupos de eventos: as configurações do nível têm prioridade sobre as da campanha e depois as do mapa, e herdar é diferente de desativar todos os grupos. Cada grupo acrescenta seus próprios eventos aleatórios (veja Grupos de eventos abaixo); um nível sem nenhum grupo recebe só os eventos de sempre. Os cartões de empréstimo ajustam o texto à largura da barra lateral e permitem rolagem vertical para ler todas as condições.

Com um empréstimo pendente, a prévia do próximo nível separa o tesouro atual, o capital devolvido sem juros e o ouro previsto para transferência. Vale a regra do nível de destino; a prévia não faz pagamentos.

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

## Grupos de eventos

Um mapa, uma campanha ou um nível pode ligar no editor qualquer um dos cinco grupos de eventos. Cada grupo soma os eventos abaixo aos de sempre, pela mesma rolagem e no mesmo ritmo, e recusar ou ignorar uma oferta nunca custa nada. Passe o cursor sobre um grupo no editor para ver os eventos dele.

## Grupo “Economia e serviços”

### Pedido de empréstimo real

Com o grupo “Economia e serviços” ligado, a corte real de um reino vizinho pode pedir um empréstimo do seu tesouro, mas só enquanto você tiver pelo menos 400 de ouro. O valor é fixado quando o pedido chega: metade do seu tesouro, arredondada para baixo até um múltiplo de 50, entre 200 e 1.000 de ouro. Você tem 30 segundos para decidir. Se emprestar, o ouro sai na hora e volta 120 segundos depois com 10% de juros. Precisa dele antes? Cobre antes do prazo e você recebe 90% de volta, então o máximo que dá para perder é um décimo. Se você sair do nível antes do vencimento, recebe o valor de volta sem juros. Recusar o pedido ou deixar que expire não custa nada, e depois que você empresta, o empréstimo não impede que outros eventos apareçam. O cartão dele em Eventos do reino mostra os valores exatos e os segundos que faltam.

### Pedido estrangeiro

Com o grupo “Economia e serviços” ligado, um comprador estrangeiro pode fazer um pedido pelo seu mercado, desde que você tenha um mercado pronto e uma caravana rodando numa rota comercial ligada a ele. Você tem 30 segundos para aceitar. Aceitar custa 150 de ouro adiantados. Depois, suas caravanas atendem o pedido nas viagens de sempre: cada viagem carregada que sai leva uma remessa e gasta 50 desse dinheiro, e uma remessa só conta quando é descarregada por inteiro. Entregue três remessas em 180 segundos e você recebe 450 de ouro. Se uma caravana com uma remessa for destruída, o mercado cair, a rota se perder ou o tempo acabar, o pedido fracassa e você recebe de volta o que não foi gasto. Dá para desistir a qualquer momento nas mesmas condições. Recusar é de graça, e a renda das caravanas e os impostos de sempre continuam como antes. O cartão dele em Eventos do reino mostra o mercado, a rota e quantas remessas já saíram e chegaram.

### Clínica itinerante

Com o grupo “Economia e serviços” ligado, uma clínica itinerante pode se oferecer para se instalar ao lado de uma das suas casas de vila enquanto você tiver um herói ferido que consiga chegar até ela. Você tem 30 segundos para escolher. Patrocine por 120 de ouro e a coroa paga seis atendimentos; depois disso, cada herói paga o seu. Ou deixe abrir com pagamento pessoal, que não custa nada para você: cada herói paga 20 de ouro do próprio bolso. Ela atende dois heróis de cada vez. Heróis feridos vão por conta própria quando nada mais os prende (uma luta, uma bandeira, uma noite na estalagem), e cada atendimento leva 5 segundos e recupera até 60 de vida. Herói que é atingido ou sai no meio do atendimento recebe o pagamento de volta. A clínica recebe pacientes por 180 segundos, depois tem até 10 segundos para terminar, e o dinheiro da coroa que sobrar volta para você. Recusar é de graça. O cartão dela em Eventos do reino lista os pacientes, e Mostrar leva você até lá depois que você já viu o lugar.

### Feira da colheita

Com o grupo “Economia e serviços” ligado, uma feira da colheita pode chegar a uma das suas casas de vila. Você fica sabendo 20 segundos antes, e ela fica aberta por 120 segundos. Não precisa mandar ninguém: heróis feridos, com poucas poções ou a fim de uma noite de folga vão por conta própria, desde que nada mais os prenda (uma luta, uma bandeira, um grupo que estão esperando). Ela atende quatro de cada vez. Cada cliente descansa 5 segundos e recupera 40 de vida de graça, compra as poções que faltam pelo preço de sempre (a feira traz 24 para toda a estadia) e paga uma noite de folga se quiser. Herói que sai antes não paga nada. Enquanto ela está aberta, dá para estender uma vez por 60 segundos, por 150 de ouro; as poções não são repostas. O cartão dela em Eventos do reino mostra quando abre e fecha, quem está nas barracas e quantas poções sobram, e Mostrar leva você até lá depois que você já viu o lugar.

## Grupo “Histórias de aventureiros”

### Guilda rival visitante

Com o grupo “Histórias de aventureiros” ligado, uma pequena guilda estrangeira pode pedir para acampar na borda do mapa, a mais de 60 casas do seu castelo, e ir atrás de um baú explorado ou de um covil hostil que não seja objetivo da missão e não tenha recompensa sua. Você tem 30 segundos para responder. Vêm três heróis de nível 1, um guerreiro, um patrulheiro e um mago, com um orçamento de 600 de ouro que já cobre o custo deles; nunca recrutam mais ninguém e ficam 240 segundos. “Permitir entrada independente” é de graça, e eles ficam com o que pegarem. “Cooperar” custa 150 de ouro, pagos à guilda deles e nunca devolvidos: aí o saque desse alvo é dividido pelo trabalho, um ponto por ponto de vida tirado dele ou dos guardas e por moeda pega, e a parte dos seus heróis vai para o seu tesouro. Recusar os mantém fora; ficar calado deixa eles entrarem por conta própria. Quando o tempo deles acaba, o acampamento cai ou eles se tornam hostis, voltam a pé para a fronteira. O cartão em Eventos do reino mostra a divisão.

### Um velho amigo

Com o grupo “Histórias de aventureiros” ligado, um dos seus heróis pode pedir para trazer um velho amigo da mesma classe para enfrentar um covil hostil explorado que não seja objetivo da missão e não tenha recompensa. Você tem 30 segundos para responder. “Patrocinar” reserva 200 de ouro para o serviço. O amigo entra pela fronteira e caminha até onde seu herói estava; quando os dois se encontram, aparece no covil uma recompensa de caça de 200 de ouro que só eles dois podem pegar. Eles têm 180 segundos a partir do seu pagamento e decidem sozinhos se vão. Quando o covil cai, cada um recebe dos 200 pelo dano às muralhas e aos guardas e pelas curas que realmente ajudaram o outro; se os dois fizeram por merecer, seu tesouro ganha 100. Depois, por 30 segundos, você pode convidar o amigo a ficar se uma guilda da classe dele tiver vaga; senão, ele volta para casa. O dinheiro não pago volta quando ele vai embora ou entra. Recusar não custa nada. O cartão fica em Eventos do reino.

### Visita de aprendizes

Com o grupo “Histórias de aventureiros” ligado, um herói de nível 4 ou mais pode ser convidado a receber dois aprendizes, se houver duas camas livres no castelo ou numa estalagem e dois baús explorados a até 24 casas do mentor. Você tem 30 segundos para responder. Pague 100 de ouro de hospedagem, que nunca voltam, e dois aprendizes de nível 1 da classe do mentor chegam pela fronteira. Durante os 180 segundos de estágio, eles escolhem o próprio trabalho: cada um desses baús dá a quem o abrir 15 XP e o que houver dentro. Ficar ao lado do mentor não ensina nada, e o mentor segue a vida normalmente. Quando o estágio acaba, você tem 30 segundos para “Admitir aprendizes aptos”: os que abriram um baú, ainda querem ficar e acham vaga numa guilda da sua classe. Os outros voltam para casa, mais cedo se o mentor morrer ou a hospedagem se perder. Recusar ou ignorar não custa nada. O cartão em Eventos do reino mostra os trabalhos e o XP de cada aprendiz.

### Visita à terra natal

Com o grupo “Histórias de aventureiros” ligado, um herói que tem casa no seu reino pode pedir para visitar a família, desde que pelo menos quatro heróis tenham casa e não mais de um quarto deles esteja fora ao mesmo tempo. Você tem 30 segundos para responder. “Permitir visita” dá 20 segundos de aviso e depois até 180 segundos para ele chegar a pé à fronteira; lutas, bandeiras e curas vêm primeiro, e ele não sai com menos de 80% de vida. Se não conseguir sair, a visita é cancelada de graça. Ele fica fora 120 segundos, mantém equipamento e ouro, mas não ganha nada nem sobe de nível, e volta pela mesma passagem ou por outra segura. “Oferecer 150 de ouro para ficar” pode ser usado uma vez; o ouro só vai para a bolsa dele se ele topar, e se recusar nada é cobrado e você ainda pode permitir ou recusar a visita. Recusar, ou não responder, mantém o herói em casa de graça. O cartão em Eventos do reino acompanha o herói enquanto ele está fora.

### Torneio de aventureiros

Com o grupo “Histórias de aventureiros” ligado, de dois a quatro dos seus heróis (livres, com 75% de vida ou mais e de olho no prêmio) podem propor um torneio numa clareira explorada ao lado de uma casa de vila. Você tem 30 segundos para responder. Patrocinar custa 300 de ouro: 100 pelo local, que não voltam, e 200 reservados para os prêmios. Nos 30 segundos depois que você paga, eles se inscrevem em duplas, no máximo duas lutas, e vão até lá; o torneio inteiro tem 120 segundos. Cada luta dura 30 segundos. Os golpes não deixam ninguém abaixo de 1 de vida e não dão XP de combate: quem deixa o adversário com 1 de vida vence; senão, vence quem tiver mais vida, e se ficar igual é empate. Cada vencedor recebe 100 de ouro na própria bolsa no encerramento, e o prêmio que ninguém ganhou volta para você. Um ataque de verdade vindo de fora encerra tudo na hora. Recusar não custa nada. O cartão em Eventos do reino lista as lutas e o dinheiro.

### A encomenda do bardo

Com o grupo “Histórias de aventureiros” ligado, um bardo pode se oferecer para fazer uma canção sobre um feito de até três heróis citados no cartão: destruir uma estrutura hostil que você explorou, na qual um deles tem que causar dano; uma caravana de uma rota comercial em funcionamento que saia depois que você aceitar e descarregue por inteiro; ou uma bandeira de resgate em que um deles faça um novo trabalho de escolta e esteja lá na hora do pagamento. Você tem 30 segundos para responder. “Financiar encomenda” custa 150 de ouro, gastos na hora e nunca devolvidos, e abre um prazo de 180 segundos. Ninguém recebe ordens: os heróis escolhem o próprio trabalho, e uma recompensa de cerco custa à parte. Se o feito acontecer e todos os heróis citados estiverem vivos, seu renome sobe 10, uma vez só, e a canção entra na sua crônica com os nomes deles. Se um morrer, o alvo se perder ou o tempo acabar, não tem renome. “Retirar encomenda” encerra antes, também sem reembolso. Recusar não custa nada. O cartão fica em Eventos do reino.

## Grupo “Assuntos de fronteira”

### Migração de monstros

Com o grupo “Assuntos de fronteira” ligado, uma manada de oito lobos atrozes pode atravessar um canto do seu mapa, entrando por uma borda e saindo pela seguinte, bem longe do seu castelo, das suas cidades e dos seus edifícios. É uma mudança natural: não há nada para aceitar nem recusar. Você fica sabendo 30 segundos antes; depois a manada tem 180 segundos para atravessar. Os lobos não são hostis: deixam seu castelo em paz, suas torres não atiram neles e seus heróis os deixam passar. Para caçá-los, coloque uma recompensa de caça num lobo visível. Só os heróis que a aceitarem podem atacar primeiro, e cada lobo deixa no máximo 20 de ouro. Um lobo atingido chama a manada num raio de 12 casas. Se algo bloquear o caminho, a manada espera 20 segundos e procura outra rota, no máximo duas vezes. Quando o tempo acaba, eles voltam por onde vieram. Recompensas não pagas são devolvidas depois que eles vão embora. O cartão em Eventos do reino mostra a rota e os lobos que você consegue ver.

### Disputa entre covis

Com o grupo “Assuntos de fronteira” ligado, dois covis rivais de tipos diferentes podem brigar pelo terreno entre eles, fora das 60 casas em volta do seu castelo. É uma mudança natural: não há nada para aceitar. Você fica sabendo 30 segundos antes; depois cada covil manda seis dos seus monstros para um ponto marcado. Não são monstros a mais: os seis de cada covil saem do próximo ataque dele, e ninguém repõe os que caem. A briga dura até 180 segundos. Termina antes se um lado ficar sem combatentes, um covil cair ou o caminho for bloqueado. Depois, os sobreviventes levam até 120 segundos para voltar para casa e retomar a guarda. Monstros se matando não rendem nada para você, e esperar não traz recompensa. Você ainda pode colocar recompensas comuns para atacar um covil ou proteger suas estradas. O cartão em Eventos do reino conta os combatentes que você vê de cada lado, e os botões dele mostram os dois covis, o ponto da disputa e os combatentes depois que você os viu.

### Cativos fugitivos

Com o grupo “Assuntos de fronteira” ligado, dois cativos fugitivos podem chegar à borda do seu mapa e pedir asilo, com quatro perseguidores no encalço. Você tem 30 segundos para responder. Acolhê-los custa 200 de ouro: duas bandeiras de resgate de 100 de ouro, uma em cada cativo. Os heróis pegam as bandeiras por conta própria e escoltam os cativos até sua estalagem ou seu castelo, que precisa de duas camas livres, em 150 segundos. Cada cativo que chega em segurança ganha uma cama e, como qualquer bandeira, vale 5 de renome se a escolta teve trabalho de verdade. Cativo que foge do perigo sem escolta não conta. Quando acaba o tempo de escolta, os cativos resgatados que quiserem podem ocupar uma vaga livre nas suas guildas: você tem 30 segundos para convidá-los ou deixá-los ir. Os outros voltam a pé para a fronteira. O dinheiro das bandeiras que não foi usado volta, menos a taxa de cancelamento de sempre. Recusar ou esperar não custa nada e não traz perseguidores. O cartão em Eventos do reino acompanha cada cativo.

### Desertor inimigo

Com o grupo “Assuntos de fronteira” ligado, um saqueador de uma guilda rival hostil a você pode pedir asilo. Você tem 30 segundos para responder. Conceder o asilo reserva 100 de ouro, gastos só se o desertor chegar a uma cama livre na sua estalagem ou no seu castelo enquanto até dois antigos colegas de guilda o perseguem. A proteção dura 120 segundos. Dizer sim também rende um relatório sobre onde fica o acampamento da guilda dele. O relatório perde a validade depois de 120 segundos ou quando o acampamento some, e não tira a névoa. Quando a proteção acaba, um desertor satisfeito que caiba numa vaga livre de uma das suas guildas pode ser convidado a entrar, ficando com o equipamento. Você tem 30 segundos para convidá-lo ou deixá-lo ir. Senão, ele segue a pé até a saída, e o ouro não gasto volta. Recusar não custa nada e não traz vingança. O cartão em Eventos do reino mostra o ouro reservado e gasto, e o relatório.

### Feras fazendo ninho

Com o grupo “Assuntos de fronteira” ligado, uma alcateia pode tentar se instalar em terreno selvagem aberto, logo depois das 60 casas em volta do seu castelo. É uma mudança natural: não há nada para aceitar. Você fica sabendo 30 segundos antes; depois chegam dois lobos. Pelo menos 30 segundos mais tarde, se algum ainda estiver no local, chegam mais três e começam a cavar um covil. Cavar leva 40 segundos de trabalho de um lobo parado ali perto, então lutar atrasa a obra. Mate a alcateia e acabou: nunca mais de cinco lobos e um covil, e os mortos não são repostos. Cada lobo deixa no máximo 20 de ouro e um covil pronto guarda 20, 120 de ouro no total. Se ninguém mexer com eles, o covil fica pronto mas nunca solta mais lobos; dá para atacá-lo como qualquer covil. Tudo termina 280 segundos depois do aviso, e um covil cavado pela metade desaparece. Se o local for ocupado, a alcateia muda de lugar, no máximo duas vezes. O cartão em Eventos do reino mostra a fase, a escavação e o tempo que falta.

### Emissário do duelo

Com o grupo “Assuntos de fronteira” ligado, um herói saudável de uma guilda rival hostil a você pode vir sob trégua desafiar um dos seus, num ponto ao lado de uma das suas casas de vila. Você tem 30 segundos para responder. Patrocinar custa 100 de ouro, reservados como prêmio. Depois, um dos seus heróis livres pode se inscrever em 30 segundos. Não é você quem escolhe: cada herói pesa prêmio e glória contra o nível e o equipamento do emissário. É uma luta só, de até 30 segundos, e ninguém morre. O dano para em 1 de vida, e quem deixar o outro assim vence. Senão, quando o tempo acaba, vence quem estiver com mais vida. O vencedor leva os 100 de ouro, seja de que lado for. Se ninguém se inscrever, a luta empatar ou um ataque de fora a interromper, o ouro volta. Não dá experiência de combate. Depois, o emissário volta para casa. Recusar não custa nada e não começa guerra nenhuma. O cartão em Eventos do reino mostra o desafiante, a luta e o dinheiro.

## Grupo “Exploração e ambiente”

### Cheia do rio

Com o grupo “Exploração e ambiente” ligado, um rio pode subir sobre um trecho da margem. É uma mudança natural: você tem 30 segundos de aviso, e a margem (até 12 casas) aparece hachurada em âmbar no mapa. A água nunca cai em cima de ninguém. Quem estiver ali, herói ou monstro, sai primeiro, e a água espera a margem ficar vazia. Ela fica até 120 segundos depois do aviso e depois baixa sozinha; se a margem nunca esvaziar, o rio não sobe. Ninguém consegue andar nas casas alagadas, mas as cheias só vêm onde dá para contornar, longe do seu castelo e dos seus edifícios. Antes do fim do aviso, você pode pagar 150 de ouro uma vez para manter secas 4 dessas casas (primeiro as estradas, depois as mais perto do castelo), sem reembolso mesmo que a água nunca suba. Se ignorar, a água simplesmente vem e vai. O cartão em Eventos do reino mostra a contagem regressiva e percorre a margem e as casas protegidas que você já viu.

### Floração de ervas

Com o grupo “Exploração e ambiente” ligado, ervas silvestres podem florescer perto das suas casas de vila. É uma mudança natural: você fica sabendo 20 segundos antes, e a floração dura 120 segundos. Precisa haver um aldeão livre e um herói com espaço para ervas. Brotam até 12 plantas, a uma distância de 8 a 16 casas de uma casa de vila e longe do castelo, cada uma um feixe de 2 ervas (24 no máximo). Os heróis não podem colhê-las no campo. Aldeões à toa saem por conta própria, colhem por 5 segundos e levam o feixe para casa, onde os heróis que passam pegam as ervas. Se um monstro chegar perto, o aldeão larga o feixe onde estiver, e ele fica ali. Não há nada para pagar nem escolher: mantenha os monstros longe dos caminhos deles com suas defesas de sempre. Quando o tempo acaba, as plantas não colhidas murcham, mas as ervas colhidas ficam. O cartão em Eventos do reino lista os canteiros que você já viu e quanto já chegou, e Mostrar passa por eles um a um.

### Fonte curativa

Com o grupo “Exploração e ambiente” ligado, uma fonte curativa pode brotar na natureza enquanto um dos seus heróis está ferido. É uma mudança natural: você é avisado 20 segundos antes, depois ela corre por 150 segundos e rende 6 usos. Ela surge a uma distância de 16 a 24 casas de um herói ferido, e você não sabe onde até um herói chegar a 8 casas dela; aí você fica sabendo, e o cartão mostra o local. Não precisa mandar ninguém: heróis feridos vão por conta própria, um de cada vez. Cada um descansa ali 5 segundos e recupera até 60 de vida, de graça. Herói que é atingido, luta ou tem um monstro por perto sai antes sem gastar a vez; heróis com a vida cheia não vão. Ignorar não custa nada. Ela seca quando acaba o tempo ou acabam os usos. O cartão em Eventos do reino faz a contagem regressiva, diz quem está descansando ali, e Mostrar leva você até a fonte depois que ela for encontrada.

### Batidas no subsolo

Com o grupo “Exploração e ambiente” ligado, seu povo pode ouvir batidas debaixo de um terreno aberto e explorado, a uma distância de 16 a 24 casas de um dos seus heróis. Você tem 30 segundos; recusar ou deixar passar é de graça. Investigue por 100 de ouro e aparece ali uma bandeira de exploração: o herói que a pegar trabalha 5 segundos no local sem nenhum monstro a menos de 6 casas e recebe os 100. Se ninguém terminar em 120 segundos, os 100 voltam. Feita a investigação, o cartão diz o que há lá embaixo, e você escolhe antes que esses 120 segundos acabem. Um sobrevivente preso: financie uma bandeira de resgate de 100 de ouro, e os heróis têm 120 segundos para levá-lo até o castelo, em troca de 5 de renome. Uma passagem antiga: explore de graça; depois de 5 segundos de trabalho de um herói, três casas viram estrada. Uma câmara guardada: pague 200 de ouro, derrote os quatro esqueletos dela (sem saque), trabalhe ali 5 segundos e o tesouro ganha 300. Ou sele tudo de graça. Desistir devolve o ouro ainda reservado. O cartão em Eventos do reino acompanha cada etapa.

### Carta à deriva

Com o grupo “Exploração e ambiente” ligado, uma carta pode chegar boiando a uma margem de rio explorada perto do seu castelo, pedindo ajuda. Você tem 30 segundos para responder, e tudo precisa terminar em 180 segundos desde que ela chega; aceitar tarde não acrescenta tempo. Recusar ou ignorar é de graça. Aceitar custa 150 de ouro: 50 para a busca e 100 reservados para duas bandeiras de resgate de 50 de ouro. Depois, um herói precisa chegar a 3 casas da margem, normalmente por meio de uma bandeira de exploração que você coloca ali (essa custa à parte). Aparecem dois sobreviventes, com dois lobos atrozes a 6 casas, e cada um ganha uma bandeira de resgate. Os heróis que levam um sobrevivente até o castelo recebem, e cada retorno em segurança rende 5 de renome. Às vezes eles estão feridos e antes precisam de uma erva cada, que a escolta dá ou busca ali perto. Se nenhum herói chegar à margem a tempo, os 100 voltam; “Desistir do resgate” também devolve o que não foi gasto. O cartão em Eventos do reino mostra a pista, o tempo que falta e quem está a salvo.

## Grupo “Histórias de guildas”

### A última expedição de um veterano

Com o grupo “Histórias de guildas” ligado, um herói de nível 6 ou mais que, com o grupo ligado, já tenha ajudado a derrubar um inimigo ou covil perigoso pode pedir uma última expedição contra um covil que consiga alcançar. Você tem 30 segundos para decidir. Patrocinar custa 250 de ouro e põe uma bandeira nesse covil; outros heróis podem se juntar e esperar o veterano antes de partir. Eles têm 180 segundos. Se o covil cair a tempo e o veterano sobreviver e tiver atacado o covil, os membros sobreviventes dividem os 250 de ouro conforme quanto do covil cada um derrubou, e o resto volta. Aconteça o que acontecer, o veterano que aceita se aposenta assim que volta em segurança à guilda; se você desistir antes de ele partir, recebe o dinheiro de volta, mas ele se aposenta mesmo assim. O veterano que vence e se aposenta dá ao próximo recruta da guilda uma aula de 20 segundos que vale 30 XP. O que morre é lembrado, sem aula. Recusar, adiar ou ignorar não custa nada e o herói fica. O cartão em Eventos do reino acompanha cada etapa.

### Brasão de família perdido

Com o grupo “Histórias de guildas” ligado, um herói pode pedir que você encontre o brasão perdido da família dele num ponto da natureza que ele consiga alcançar. Você tem 30 segundos para financiar uma investigação por 100 de ouro: aparece uma bandeira ali, e o herói que trabalhar no local por 5 segundos recebe esses 100. Antes que o relógio de 120 segundos acabe, você pode financiar a recuperação por 150 de ouro. Surgem quatro esqueletos de guarda e 50 vão na hora para suprimentos; quando os guardas morrem, mais 5 segundos de trabalho desenterram o brasão e pagam 100 a quem trabalhou. Depois, em até 120 segundos, um herói livre o leva até o castelo, onde o dono precisa encontrá-lo. O dono ganha um feito para a sua história, e por 120 segundos as mágoas dele passam um pouco mais rápido. Se o portador morrer, o brasão cai onde ele caiu. Se o dono morrer, você pode seguir em homenagem, sem recompensa, ou desistir. Desistir ou deixar o tempo acabar devolve o dinheiro não gasto; recusar ou adiar é de graça. O cartão em Eventos do reino mostra cada etapa.

### Disputa de ideais da guilda

Com o grupo “Histórias de guildas” ligado, uma guilda pode rachar sobre o que fazer: até três heróis cautelosos querem defender, até três mais ousados querem atacar um covil. Você tem 30 segundos para apoiar um lado por 150 de ouro. Apoiar a defesa põe uma bandeira de defesa na guilda (ou no castelo) para o time cauteloso. Apoiar a expedição põe uma bandeira de ataque no covil para o time ousado. Só esse time pode pegar a bandeira, e ela não paga ouro. Em vez disso, o dinheiro compra poções: até seis, a 25 de ouro cada, que os membros do time com poucas poções buscam na guilda. O time tem 120 segundos, e uma expedição acaba antes se o covil cair. Lutar ou curar de verdade rende 2 de renome por herói e por inimigo, até 10 de renome no total. Só ficar de guarda não rende nada. O dinheiro não usado volta. Ficar neutro, recusar ou ignorar não custa nada, e o outro lado continua leal. O cartão em Eventos do reino mostra os dois times e o alvo.

### Mestre visitante

Com o grupo “Histórias de guildas” ligado, um mestre aposentado pode se oferecer para visitar quando um dos seus heróis ainda tem uma habilidade de classe para aprender. O mestre se instala ao lado de uma casa de vila ou logo do lado de fora do castelo. Você tem 30 segundos para escolher: financiar três aulas por 150 de ouro ou deixar os heróis pagarem do próprio bolso, o que não custa nada para você. O mestre chega a pé pela fronteira, e as aulas vão até 180 segundos depois da sua escolha. Heróis da classe do mestre e de nível abaixo do dele aparecem se quiserem, dois de cada vez, uma aula cada por visita. Uma aula leva 20 segundos e dá 25 XP fixos que bônus de XP não aumentam. Custa 50 de ouro da bolsa do herói, a não ser que o seu financiamento cubra. Herói ferido no meio da aula recebe de volta a parte não usada do pagamento e pode voltar para terminar. Nenhuma habilidade é ensinada: elas continuam vindo de graça no nível de sempre. Depois, as aulas em andamento ganham mais 20 segundos, o mestre vai embora e o financiamento não usado volta. Recusar é de graça.

---

## Dia, noite e clima

Um jogo livre pode começar com o dia girando, com clima, ou com os dois; cada um é marcado separadamente, e nenhum é um evento: não há nada a responder.

- **Um dia** dura 8, 12 ou 16 minutos de jogo, à escolha: amanhecer, dia, entardecer e noite. A barra superior mostra o dia, a parte dele e o clima, e a dica diz o que vem depois e quando. A previsão é sempre o que acontece.
- **Chuva e tempestade** seguram quem caminha fora das estradas, herói ou monstro, um turno em dez no máximo. Nas estradas anda-se no seco.
- **Névoa e noite** encurtam o que heróis e construções veem em um quarto no máximo. Perto do castelo e das construções do reino as janelas ficam acesas e a noite não tira nada; um arqueiro nunca vê menos longe do que atira.
- **O vento** tira um décimo do dano de flechas, virotes e dardos. Feitiços não são levados pelo vento.
- **Uma tempestade de areia ou uma névoa densa** toma o lugar do clima onde manda na mesma coisa: os dois nunca se somam.
- **Os monstros têm os seus horários.** Esqueletos, zumbis, espectros, cultistas, aranhas e ratos ficam lentos de dia; goblins, orcs, bandidos, harpias e a infantaria da legião, à noite. Trolls, lobos e o dragão não têm horário.
- **Visto por último.** Um monstro que sai da vista do seu reino deixa um ponto de interrogação que some aos poucos onde foi visto pela última vez. É uma marca, não o monstro: some quando ele é visto de novo ou quando o lugar é observado.

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