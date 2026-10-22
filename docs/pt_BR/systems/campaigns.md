---
title: "Modo Campanha"
---

O modo campanha oferece cenários de múltiplos níveis, cada um com condições de vitória específicas e um pano de fundo narrativo.

---

## Campanhas Integradas

O jogo inclui uma campanha **Tutorial** integrada (5 níveis) que guia novos jogadores pelas diversas mecânicas do jogo. Ela tem um botão próprio, o primeiro do menu principal.

---

## Expedições

Uma expedição é uma rota de mapas em que você escolhe cada passo pelo caminho. Ela é aberta pelo botão **Expedição** do menu principal.

**A expedição da fronteira** tem seis mapas e quatro rotas, com quatro mapas em cada uma:

| Etapa | Mapa | O que pede |
|---|---|---|
| Início | **Acampamento da Fronteira** | Erga uma cidade e arrase o acampamento goblin a leste. O velho farol a sudoeste é opcional: conserte-o ou desmonte-o para aproveitar o material. |
| Primeira | **Escolta na rota comercial** | Abra um entreposto comercial no fim da estrada do sul e faça duas viagens de caravana serem pagas. O acampamento de bandidos pode ficar de pé. Dá 300 de ouro ao mapa seguinte. |
| Primeira | **Estação perdida** | Conclua o trabalho da estação: reconstrua-a ou leve o sobrevivente dela para casa. Dá 150 de ouro ao mapa seguinte. |
| Segunda | **Tumba selada** | Conclua o trabalho da tumba: sele-a, estude-a ou saqueie-a. |
| Segunda | **Fronteira inimiga** | Corte a linha de suprimentos goblin (mate um transportador antes que ele entregue a carga, ou arrase o acampamento que os envia) e arrase o posto avançado goblin. O velho farol é opcional. |
| Fim | **Passo da Coroa** | Resista a dois ataques e depois arrase a fortaleza goblin. |

A rota é desenhada num mapa de pergaminho da fronteira. Cada mapa é um selo, contornado conforme o que ele é para a sua expedição: vencido, onde você está e os caminhos abertos, o resto ainda fechado. Escolha o próximo passo pelo selo ou na lista ao lado do mapa; um clique duplo ou Enter parte.

A fortaleza do passo manda uma terceira onda de reforços, a menos que sua jornada tenha rompido a fronteira inimiga. Uma rota pela tumba ainda pode vencer; ela só enfrenta uma onda a mais. Na estação e na tumba, o trabalho da ruína é o objetivo, então não há a opção de deixá-lo de lado. Um trabalho que fracassa ou do qual você se retira é oferecido de novo, e só perder o local da ruína faz perder o mapa.

**Entre os mapas**, a tela da expedição mostra a rota percorrida até ali e os caminhos à frente, cada um com suas instruções e o que ele muda no fim da rota:

- Escolha o grupo: até **seis** heróis seguem em frente, e o resto espera na retaguarda. A reserva comporta no máximo **doze**; mande alguém para casa para abrir espaço. Os heróis voltam com a vida cheia. Quem caiu continua caído.
- O tesouro do mapa seguinte é o orçamento dele, mais **metade** do ouro que sobrou no mapa anterior (no máximo **1000**), mais a recompensa do mapa anterior. A tela faz a conta para você antes de partir.
- A pesquisa e o caminho do castelo são mantidos durante toda a jornada. Os edifícios ficam para trás.

Um mapa perdido é jogado de novo a partir do mesmo início: os mesmos heróis, o mesmo ouro e o mesmo mapa. Uma jornada fica esperando entre os mapas até você continuá-la pelo menu principal. **Abandonar a jornada** desiste dela, e **Concluir** encerra uma jornada que chegou ao fim. Cada rota que você termina fica no seu histórico, com o seu melhor tempo.

### O mapa da demo

As cinco fases da demo também estão desenhadas num só mapa de pergaminho, o **mapa da expedição**. Primeiro vem *A primeira coroa*; ela abre ao mesmo tempo *Sombras na rota comercial*, *Ouro escasso* e *Segure a estrada*, na ordem que você quiser. Dois dos três abrem *A noite de Presa-Rangente*, e o terceiro fica aberto até o final ser vencido — pular ele nunca é derrota.

| Caminho | Sua recompensa para a fase seguinte |
|---|---|
| **Sombras na rota comercial** | 300 de ouro no tesouro |
| **Ouro escasso** | Construções 25% mais baratas, até economizar 400 de ouro |
| **Segure a estrada** | Todos os heróis começam com poções cheias, e 200 de ouro são distribuídos em suprimentos |

A recompensa é usada na fase seguinte e some; repetir essa fase dá ela de novo. O grupo, metade do tesouro (no máximo 1000), a pesquisa e o caminho do castelo seguem como na Expedição da fronteira.

Selecione um selo para ler a fase dele à direita: história e objetivos, quanto tempo leva mais ou menos, o tesouro inicial e a recompensa. Um anel tracejado é uma fase ainda fechada (o painel diz quantos caminhos ainda faltam), um anel dourado uma fase para onde dá para partir, um anel duplo uma fase vencida nesta expedição. **Partir** começa; **Praticar** joga sozinha uma fase já vencida, sem mexer na expedição. As fases vencidas antes do mapa existir mostram o selo. Arraste para mover, use a roda para o zoom, as setas para passar de um selo a outro, Enter para partir e Home para ver o mapa todo.

### Criando um mapa

O `map_route.json` de uma campanha põe as fases dela num mapa. Ele é feito na aba **Mapa** do editor de campanhas: cada nó é uma fase nas coordenadas `x`, `y` (de 0 a 1 a partir do canto superior esquerdo), com os nós que ela espera (`after`) e quantos deles precisam ser vencidos (`need`, todos se omitido); `minutes` é a estimativa do briefing e `reward` uma recompensa única (`trade_subsidy`, `build_discount` ou `escort_supply`, com um `amount`). `links` são as linhas de tinta, `end` o último nó e `art` a imagem: `demo_frontier`, ou um PNG ou JPG dentro da pasta da campanha (no máximo 8192 pixels por lado e 16 milhões no total; senão, pergaminho liso). **Verificar rota** desenha uma prévia. O único nó sem `after` é o início; o mapa precisa ser jogável até o fim em alguma ordem, e a Oficina exige que cada nó seja uma fase da mesma campanha ou de uma que vem com o jogo.

### O mapa das fases de uma campanha

Toda campanha é escolhida num pergaminho. O `level_map.json` dela põe as fases; ele é feito na aba **Mapa das fases** do editor de campanhas. `places` dá a cada fase, pelo seu `id` fixo, as coordenadas `x`, `y` (de 0 a 1 a partir do canto superior esquerdo); `links` são as linhas de tinta entre duas fases; `art` é a imagem (uma do jogo, ou um PNG ou JPG dentro da pasta da campanha, com os mesmos limites de um mapa de expedição). Sem o arquivo, ou quando ele deixa uma fase de fora, as fases ficam ao longo de uma estrada em pergaminho liso, ligadas pelos seus `requires`, ou uma depois da outra numa campanha jogada em ordem. Se uma fase está aberta continua dependendo dos seus `requires`. Uma rota de expedição (`expedition.json`) põe seus mapas do mesmo jeito: um `art` e o `x` e o `y` de cada nó; uma rota sem eles é disposta pelos seus passos.

### Criando uma rota

Uma campanha vira expedição com um arquivo `expedition.json` ao lado do seu `campaign.json`. Monte-o na aba **Rota da expedição** do editor de campanhas: dê a cada nó uma fase da campanha e o ouro que ele concede ao nó seguinte (de 0 a 2000), liste os caminhos à frente e depois escolha o início e o fim. **Verificar rota** diz quantas rotas isso forma. As verificações da Oficina exigem que cada nó aponte para uma fase da mesma campanha ou de uma que vem com o jogo. Um teste de jogo pode jogar a rota desde o início.

```json
{
  "version": 1, "id": "frontier", "start": "camp", "end": "pass", "length": 4,
  "nodes": [{"id": "trade", "campaign": "expedition.frontier", "level": "trade", "grants": {"gold": 300}}, "..."],
  "edges": [["camp", "trade"], ["trade", "tomb"], "..."]
}
```

Uma rota precisa chegar do início ao fim, sem laços; todo nó precisa estar em alguma rota, e toda rota precisa ter o comprimento de `length`. `requires` lista as capacidades de que a rota precisa além de `expeditions` (por exemplo `relics` ou `lair_expansion`). Uma rota cuja fase não está instalada, ou cuja edição não tem uma capacidade que ela exige, continua listada na tela da expedição, com o motivo, mas não pode ser iniciada. Uma fase pode depender do que aconteceu na jornada com as condições de gatilho `expedition_won` e `expedition_lacks` (`{"node": "<id>"}`), e os objetivos `complete_relic` (o trabalho de uma relíquia concluído) e `intercept_supply` (N transportadores de suprimentos inimigos mortos antes de entregarem, ou todos os acampamentos que os enviam arrasados) dão uma meta a um nó.

---

## Condições de Vitória

Cada nível de campanha pode ter uma das seguintes condições de vitória:

| `victory` | Condição | Descrição |
|---|----------|-----------|
| `free` | **Modo Livre** | Sem condição de vitória específica; jogue livremente |
| `destroy_enemy_buildings` | **Destruir Todas as Fortalezas** | Elimine todas as Fortalezas Inimigas no mapa |
| `survive_ticks` | **Sobreviver por um Tempo Determinado** | Mantenha o Castelo vivo além de um número especificado de ticks |
| `reach_gold` | **Acumular Ouro** | Alcance uma quantidade alvo de ouro no seu tesouro |
| `destroy_building` | **Destruir Fortaleza Específica** | Destrua um tipo específico de Fortaleza Inimiga |
| `defend` | **Defender o Castelo** | Impeça que o Castelo seja destruído dentro de um tempo determinado |
| `collect_chests` | **Coletar Todos os Baús** | Abra todos os baús de tesouro no mapa |
| `secure_trade` | **Garantir a rota comercial** | `victory_value` viagens de caravana são pagas e todas as fortalezas inimigas do mapa são destruídas |

---

## Estrutura da Campanha

As campanhas são armazenadas como pastas no diretório `campaigns/`:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Metadados e lista de níveis da campanha
    ├── level1.json       # Mapa do Nível 1
    ├── level2.json       # Mapa do Nível 2
    └── ...
```

### Formato do campaign.json

```json
{
  "name": "Campanha Tutorial",
  "description": "Aprenda as mecânicas básicas do jogo",
  "levels": [
    {
      "map": "level1.json",
      "title": "Um Novo Começo",
      "intro": "Bem-vindo à Wayward Crown...",
      "outro": "Parabéns por completar este nível!",
      "starting_gold": 500,
      "victory": "destroy_enemy_buildings",
      "victory_value": 0,
      "victory_target": "",
      "unlocked_buildings": [],
      "carry_over": {"gold": true, "adventurers": true},
      "triggers": [
        {"id": "welcome", "condition": "tick_reached", "params": {"value": 2},
         "action": "show_message", "action_params": {"text_key": "tut_welcome"}}
      ]
    }
  ]
}
```

### Configurações de Nível

| Campo | Descrição |
|-------|-----------|
| `map` | Caminho do arquivo de mapa (relativo à pasta da campanha) |
| `title` | Título do nível |
| `intro` | Texto de abertura |
| `outro` | Texto de conclusão |
| `starting_gold` | Ouro inicial (0 – 10⁷) |
| `victory` | Tipo de condição de vitória |
| `victory_value` | Valor da condição de vitória (ex.: contagem de ticks de sobrevivência, quantidade alvo de ouro, etc.) (0 – 10⁹) |
| `unlocked_buildings` | Lista de construções disponíveis (restringe as opções de construção do jogador). Uma lista vazia permite todas as construções; `unlock_building` amplia uma lista não vazia. |
| `victory_target` | Tipo de fortaleza para `destroy_building` (ex.: `DRAGON_NEST`); ignorado nos outros casos |
| `carry_over` | O que é mantido do nível anterior: `gold`, `adventurers`, `research`, `path` (o caminho do castelo e sua especialidade) (cada um true/false). O que um nível lista em `carry_over` é trazido de outro nível da mesma campanha quando o jogador segue direto, e anotado nesse momento; cada nova tentativa do nível começa dessa anotação. Um nível iniciado pelo mapa da campanha não traz nada, e o que um nível não lista (nem a pesquisa nem o caminho do castelo) não sobrevive ao mapa. |
| `triggers` | Eventos programados: `condition` + `params`, `action` + `action_params` e, opcionalmente, `id`, `after` (espera esse gatilho) e `once`. Condições: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Ações: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Um gatilho que não é um objeto ou tem um campo com o tipo de valor errado é deixado de fora e informado no console. `chests_opened`, `enemy_killed_count` e `bounties_completed` contam a partir do início do nível. Um gatilho repetido (`once: false`) age em cada tick em que sua condição vale, então a validação recusa o que gera inimigos, paga, publica uma recompensa ou inicia um evento; um encontro com chefe começa uma vez e nunca só depois da própria derrota. Uma onda `spawn_enemies` pode levar `march` (`castle` ou `road`): ela então marcha sobre o castelo ou sobre o entreposto mais próximo em vez de vagar onde aparece. `reveal` (`x`, `y`, `radius` de 1 a 40) mostra um lugar ao jogador: o terreno dentro desse raio fica explorado. `ticks_after_step` conta seu `value` a partir do tick em que o gatilho indicado em `after` disparou. Um parâmetro de `show_message` escrito como `i18n:<key>` é traduzido antes de entrar no texto, de modo que uma mensagem pode nomear um painel ou um edifício com as palavras do próprio jogo. |
| `id` | Nome estável do nível para o progresso e `requires` (letras, dígitos, `.`, `-`, `_`); se omitido, `level<n>` pela posição |
| `requires` | Níveis que precisam ser concluídos antes: um `id` de nível desta campanha, ou `<id da campanha>/<id do nível>` |
| `ruleset` | Só `kingdom`, e pode ser omitido: toda fase é jogada com as regras do reino. Uma fase ou um mapa que indique `classic`, ou nenhum, é jogado como um reino; um nome desconhecido é recusado |
| `castle_level` | O nível do castelo com que a fase começa (1–3); se omitido, uma torre de menagem |
| `time_limit` | Ticks que a fase pode durar; se acabarem sem vitória, ela é perdida. 0 ou omitido: sem limite |
| `advice` | O que as instruções aconselham; como os outros textos, pode ser uma chave `i18n:` |
| `side_quests` | Até dois achados opcionais na fase, cada um `{"kind", "x", "y"}` com um kind entre `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` ou `lair` pode nomear quem está lá |
| `objectives` | Até 8 condições de vitória adicionais, cada uma `{"victory", "value", "target", "required"}` com qualquer vitória exceto `free`. A fase é vencida quando a vitória principal (exceto `free`) e todas as obrigatórias são cumpridas; as opcionais são contadas na linha de objetivo e listadas nos resultados |
| `defeats` | Até 4 outras formas de perder, cada uma `{"kind", "value"}`: `heroes_lost`, `buildings_lost` ou `caravans_lost` atinge o valor desde o início da fase |
| `hero_bonds_disabled` | `true`: nesta fase os heróis não criam laços novos nem convidam companheiros (os laços anteriores continuam); omitido: laços como de costume |

A própria campanha pode ter um `id` (o nome sob o qual seu progresso é registrado) e `"linear": false` (desafios independentes: vencer um não leva ao próximo). Ela também pode listar `blocked_events`: nomes de eventos aleatórios que suas fases nunca sorteiam (por exemplo `DRAGON_NEST`). E um `roster`: os tipos de inimigo (nomes como `GOBLIN`) que vagam e invadem em suas fases; se omitido, todos.

:::tip[Suporte a Localização]
O texto das campanhas pode usar tags `i18n:KEY`, que exibirão automaticamente a tradução correspondente com base no idioma do jogador.
:::

---

## A Campanha da Demo

A campanha de história da Demo (`campaigns/demo_kingdom/`) é aberta pelo menu principal. Assim como o tutorial, ela é escrita por `game/systems/demo_campaign.py`.

| Missão | Objetivo | Você perde se | Início |
|---|---|---|---|
| 1. A primeira coroa | Encontrar o acampamento goblin a leste da torre e fazer com que seja destruído | A torre cair | 1600 de ouro e uma lista curta de construções, mais as ruínas de uma ferraria e de um mercado |
| 2. Sombras na rota comercial | Concluir três viagens de caravana e destruir o acampamento dos saqueadores | O castelo cair | 2400 de ouro, um castelo de nível 2, uma pequena cidade e duas estradas pavimentadas |
| 3. A noite de Presa-Rangente | Derrotar o Chefe Presa-Rangente | O castelo cair | 3000 de ouro, um castelo de nível 2 e uma cidade de seis construções |

A missão 1 começa ao lado das ruínas de uma ferraria e de um mercado: a equipe da coroa as reconstrói sem custo, a ferraria primeiro, e o que você colocar, sua primeira guilda também, espera a vez atrás delas, a menos que você marque como prioritário. Na missão 1, mensagens conduzem da primeira guilda ao primeiro herói, ao mercado e ao coletor de impostos. Com cerca de 48 segundos, a coroa coloca por conta própria uma recompensa «Explorar» perto do acampamento; quando um herói a conclui, você é convidado a colocar uma recompensa «Matar» no acampamento. Na missão 2 a coroa manda explorar os dois locais do entreposto, saqueadores emboscam a estrada sul uma vez (anunciado 20 segundos antes) e a primeira construção perdida traz 400 de ouro de ajuda. Na missão 3, um ataque chega pela estrada leste no tick 1000 e outro pela estrada norte no tick 2500 e o Chefe Presa-Rangente no tick 4300, cada um anunciado 100 ticks antes; arrasar a fortaleza dele é uma expedição que vale o saque, mas só a derrota dele dá a vitória. As missões 1 e 2 incluem uma Guilda dos Construtores para os consertos; na missão 3 o castelo, já no nível 2, pode seguir seu caminho de imediato, e uma fortaleza arrasada deixa de enviar seus próprios ataques. As missões 2 e 3 mantêm a pesquisa da missão anterior quando você segue direto; cada nova tentativa começa como a primeira, e uma missão escolhida no mapa começa sem ela.

Os desafios (`campaigns/demo_challenges/`, `"linear": false`) são escritos da mesma forma. *Ouro escasso* abre após a missão 2: 600 de ouro, um castelo de nível 2, uma cidade pequena com um entreposto na estrada sul e 15 minutos (`time_limit`) para arrasar um acampamento goblin e um acampamento de bandidos que ataca a estrada; bandidos testam a estrada duas vezes antes de começarem os ataques do próprio acampamento. *Segure a estrada* abre após a missão 3: o entreposto já está aberto, saqueadores chegam pela estrada sul a cada 500 ticks, um pouco mais fortes a cada vez, e 10 viagens de caravana precisam ser concluídas em 14 minutos e 20 segundos. Um reino livre (o Reino Livre da Demo ou o Sandbox do jogo completo) não tem objetivo; sua janela inicial permite pedir que o Chefe Presa-Rangente venha uma vez, 20 minutos após o início (`game/systems/free_kingdom.py`). Em *Segure a estrada*, cada ataque marcha sobre o entreposto: um entreposto que ninguém defende é arrasado e sua caravana some com ele; não fazer nada é perder o desafio.

Os **desafios de chefe** são escolhidos no menu principal, num mapa de pergaminho próprio. Cada um dos três chefes nomeados — o chefe Presa-Rangente, o escorpião das dunas e o tirano das cinzas — é enfrentado sozinho. Os edifícios e as pesquisas já foram pagos com 14000 de ouro, e os heróis são os que suas guildas recrutam: o chefe chega depois de dez minutos, com a contagem regressiva na linha do objetivo, e uma mensagem avisa um minuto antes. Derrotar o chefe vence. Manter o posto avançado e arrasar o santuário sectário que envia os guardas do tirano são objetivos opcionais: falhar neles nunca faz perder. No Difícil, cada chefe usa seus golpes reforçados nos mesmos limiares de vida.

## Uma missão de reino, passo a passo

1. Em Creator / Workshop escolha **Novo projeto**, depois **Missão de reino**, e uma pasta nova. Você recebe uma fase jogável: uma cidade, um acampamento goblin a leste, as recompensas «Explorar», «Matar» e «Defender» da coroa, duas ondas anunciadas e o chefe como chefe com nome.
2. Abra-a no editor de campanhas. O formulário da fase tem a história (intro), o conselho das instruções, o ouro inicial e a vitória; abaixo, o nível inicial do castelo, o limite de tempo e até dois achados opcionais com suas casas.
3. Pinte o mapa: mova a cidade, o covil e as estradas. Um local precisa ser alcançável a partir do castelo; senão, o que está nele é deixado de fora quando a fase começa. Uma construção no arquivo do mapa pode ter `"ruin"` (de 1 a 99): ela começa como obra com essa porcentagem do trabalho feita, e a equipe da coroa a termina sem custo.
4. Abra os gatilhos para mudar as mensagens, as recompensas da coroa (`post_bounty`), as ondas (`spawn_enemies`) e quando o chefe chega (`spawn_boss`). A condição `enemy_building_seen` espera até que um covil esteja à vista.
5. Em `campaign.json`, `roster` nomeia os monstros que vagam pelo mapa e `blocked_events` os eventos aleatórios nunca sorteados.
6. Valide: as verificações apontam pelo campo um nível de castelo, um limite de tempo, um achado opcional, uma entrada do elenco ou um evento errados. Depois jogue a fase pela área de trabalho; a dificuldade escolhida ali define os ataques, as ondas e o ouro inicial.
7. Publique primeiro em privado e torne público quando jogar do jeito que você quer.

<!-- gameplay-preparation:start -->

Os heróis comparam lojas acessíveis, preços e vagas reais de hospedagem. Após recuar, recuperam-se antes de voltar ao trabalho perigoso; os detalhes da expedição mostram a preparação e os descansos acessíveis. Fases personalizadas podem oferecer até três planos completos de vitória, mantendo os requisitos comuns. Fases antigas com uma única condição vencem ao alcançar o objetivo no último tick permitido; planos alternativos mantêm a prioridade da derrota.

```json
{
  "victory": "free",
  "objectives": [
    {
      "victory": "protect_building",
      "target": "trade-post"
    }
  ],
  "victory_plans": [
    {
      "id": "commerce",
      "title": "i18n:victory_kind_caravan_rounds",
      "objectives": [
        {
          "victory": "caravan_rounds",
          "value": 2
        }
      ]
    },
    {
      "id": "assault",
      "title": "i18n:victory_kind_destroy_building",
      "objectives": [
        {
          "victory": "destroy_building",
          "target": "GOBLIN_TENT"
        }
      ]
    }
  ]
}
```

```json
{"type": "TRADING_POST", "x": 100, "y": 80, "objective_id": "trade-post"}
```

Os detalhes da expedição indicam lojas de poções e descansos acessíveis, além da cura e dos escudos aliados aprendidos. As lojas registram visitas totais, trajeto médio e ataques. Os resultados mostram um plano principal e feitos simultâneos, com uma única liquidação básica.

<!-- gameplay-preparation:end -->

## Farol antigo

Em mapas com um farol antigo, selecione o local descoberto para ver custos, prazo e escolhas nos detalhes. Reparar exige equipe ou construtor no local e pausa na metade para financiar mais ou retirar-se. A conclusão avisa sobre inimigos descobertos em 20 casas. Recuperar tesouro exige que um herói aceite a bandeira de exploração, chegue e trabalhe; tesouro real e trabalhador recebem uma vez. Ignorar não inicia prazo; retirar-se devolve só fundos não usados. A ruína não recruta nem melhora bandeiras. Sair do nível abandona o trabalho aceito numa relíquia e devolve os fundos não gastos, como uma retirada; os efeitos de uma relíquia ficam no seu mapa, e só o que a campanha carrega (ouro, heróis, pesquisa) passa para o próximo nível.

## Logística goblin opcional

Mapas e níveis podem declarar a capacidade `lair_expansion` e uma lista com até quatro planos. Cada plano exige `id` e `target`, que aponta para uma tenda goblin existente por seu `objective_id` exclusivo. O transportador precisa chegar e um trabalhador vivo construir no local. Comboios, escoltas, defensores e ataques dividem orçamento finito: no máximo quatro ciclos e 64 novas unidades por origem. Perder o posto atrasa e enfraquece ataques que ainda não saíram; destruir a base interrompe a produção sem apagar sobreviventes nem postos opcionais. Postos não acrescentam bases obrigatórias à vitória. Sem planos, o calendário antigo continua. Transportadores carregam caixas próprias, com animações e sons exclusivos, e só aparecem em comboios designados. Após reconhecimento, ofereça recompensa pelo transportador em movimento. Matá-lo cancela essa carga e atrasa a produção; escoltas sobreviventes ficam no combate. Carga e recompensa são liquidadas uma vez; cancelar segue as regras normais de reembolso. Os postos têm andaimes, coberturas de suprimentos concluídas e destroços próprios. Um trabalhador vivo constrói o local atacável; inacabado, ele não gera novos defensores. Destruí-lo atrasa ataques não iniciados e leva a reunião à base principal. Destruir a base para a produção, mas preserva sobreviventes e postos isolados. Cada origem conserva no máximo uma ruína decorativa, sem defensores ou objetivos de vitória adicionais.

O formulário Expansão de covis serve para mapas e campanhas: escolha até quatro tendas goblin, tempos de proteção, preparação, entrega, construção, reunião e espera, ciclos, orçamento compartilhado, escoltas e oito retângulos proibidos por origem. Tempos em segundos de jogo, em passos de 0,2. Aplicar atualiza o rascunho; cancelar preserva os valores. Esvaziar as origens do mapa desativa a expansão. Desativar explicitamente no nível prevalece sobre o mapa; caso contrário uma lista vazia herda seus ajustes. Origens duplicadas ou ausentes e áreas fora do mapa são rejeitadas antes de salvar.

O limite compartilhado de postos do mapa vai de um a quatro. Um comboio para um novo local reserva a vaga antes de sair; ao atingir o limite, outras origens esperam sem emitir unidades ou acumular ataques. Um posto órfão vivo ocupa sua vaga até ser destruído.

A camada de informações de suprimentos inimigos só mostra pontos e locais observados. Produção, vida, tesouro e defensores da base, etapa/progresso do posto e posições do comboio guardam horários separados. Fora da visão mantêm o último valor; construção ou destruição oculta não muda a imagem conhecida. Reconhecer novamente atualiza os dados. A rota guarda até dezesseis pontos observados. Avisos não duplicam após carregar e o briefing explica quatro estratégias contra orçamento finito.

O jogo livre oferece expansão finita das tendas goblins, ligada por padrão. Partidas mistas ou de goblins reservam uma das vagas escolhidas para uma tenda e vinculam até quatro tendas existentes, sem aumentar o total de covis. Outras raças não recebem fontes extras. Campanhas usam a configuração do autor.

Andaime, depósito e ruína têm silhuetas distintas e tecido animado, parado com movimento reduzido. O mensageiro martela apenas durante trabalho real. Descoberta de comboio e observação de obra, conclusão e ruína têm ícones e sons próprios; mudanças ocultas e carregar não repetem avisos. Formulários compactos e painel de informações permitem rolagem, também pelo teclado no painel.

Os mensageiros esperam até 10 segundos que as unidades móveis deixem a área do novo posto, nunca além do prazo de entrega; depois entregam mesmo assim e quem ainda estiver lá vai para a casa livre mais próxima. Mensageiros e escoltas param fora da área planejada.

Depois de recuperar materiais de um farol antigo, as equipes não o restauram de graça; recuperação e reparo são escolhas mutuamente exclusivas.

Estes são os termos padrão da tumba e estação. Selecione um local descoberto para ver custos reais, prazo original restante e resultados; o jogo continua durante as escolhas.

A seção opcional da crônica acompanha relíquias descobertas, a opção escolhida, o progresso, os obstáculos, o prazo original restante e os resultados reais. Mostrar localiza o lugar original sem aceitar uma opção ou gastar ouro. Uma relíquia que entra no campo de visão vira notícia, assim como o trabalho aceito que para na metade, fracassa ou termina; uma retirada que você escolhe vira uma linha do registro. Um local mostra como está: uma ruína até que um trabalho seja aceito, andaimes e material empilhado enquanto a coroa trabalha ali, o que a escolha concluída deixa (um farol aceso ou desmontado, uma tumba selada ou aberta, uma estação reconstruída) ou escombros se o trabalho fracassou. O que segura o trabalho é dito com precisão: nenhum herói para aceitá-lo, o motivo dos heróis para recusá-lo, monstros perto do local, outra obra da equipe primeiro (com a posição do local na ordem) ou água, penhascos ou construções que o cercam.

Locais de relíquias opcionais: 0 desativa a geração. Até duas relíquias diferentes em terreno aberto acessível fora da zona segura do castelo, preservando estradas e rotas. Nenhum pagamento ou trabalho antes de aceitar. Os locais ficam a 21–80 casas do castelo e precisam permitir uma rota normal da equipe de obras.

Regras de mapa e fases compartilham um editor para até dois locais originais, opções fixas e custos, recompensas, trabalho e prazos limitados. Cancelar mantém o rascunho; Aplicar valida fontes sem executar o jogo. Uma lista de fase vazia herda o mapa; `relics_disabled: true` desativa a herança. Esvaziar as relíquias de um mapa independente remove seus modelos ao salvar.

**Tumba selada**

- Reforçar o selo: Após financiamento extra, suprime apenas 2 incursões previstas de Cemitério / Castelo dos Mortos-Vivos. Guardas, inimigos ambientais e outras fontes seguem normais. A fonte original deve sobreviver.
- Financiar pesquisa: Um desbloqueio elegível de Afinidade Arcana, ou 80 ouro se indisponível ou já conhecido. Valem os requisitos normais da torre de magos e da pesquisa. Pausa na metade: financiar mais ou desistir.
- Abrir a tumba: Um tesouro de 240 ouro após exploração real e derrotar 3 guardas esqueletos. Financiar abre a tumba; guardas vivos permanecem após desistência ou vencimento.

**Estação perdida**

- Reconstruir suprimentos: Restaura 6 compras pagas compartilhadas de nível 1: cura, poções ou reagentes a preços normais. Sem renda periódica ou melhorias. Reconstrução e resgate são exclusivos.
- Escoltar o sobrevivente: Voluntários devem escoltar o sobrevivente original ao castelo seguro. Chance de ingresso 75%, fixada ao financiar: um patrulheiro somente com classe e caminho permitidos e vaga em alojamento concluído na chegada. O tesouro recebe 120 ouro com ou sem ingresso; sem recrutamento em espera. Resgate e reconstrução são exclusivos.

## Expansões compartilhadas desta versão

A Demo e o jogo completo têm as quatro, e cada uma só se liga onde um mapa, uma fase ou uma configuração pede; saves, mapas e plugins antigos não as ligam sozinhos.

- **Expansão de covis**: os mensageiros de suprimento, postos avançados e ofensivas limitadas de uma tenda goblin. `lair_expansion` de um mapa ou fase (desligada com `lair_expansion_disabled`); no jogo livre, *Expansão goblin com suprimentos finitos* (ligada por padrão).
- **Laços dos heróis**: relações, convites, viajar juntos e se separar, a lista e o painel de motivos. Ligados a menos que a fase defina `hero_bonds_disabled`; no jogo livre, *Laços dos heróis* (ligados por padrão).
- **Ruínas**: o farol antigo, a tumba selada e a estação perdida, cada uma com duas escolhas principais. `relics` de um mapa ou fase (desligadas com `relics_disabled`); no jogo livre, *Locais de relíquias opcionais* (0 por padrão).
- **Expedições**: rodadas, rotas, uma lista levada de mapa em mapa, novas tentativas e a *Expedição da fronteira* de seis mapas e quatro rotas. Um modelo lista as capacidades que `requires`; se faltar uma fase ou capacidade, ele diz qual, e não oferece rotas pela metade.

Fora desta versão: a expansão de outras raças inimigas (só a tenda goblin se expande), mais modelos de ruínas e construções de ruína além do farol, expedições mais longas, mais modelos de expedição e rotas aleatórias, e os preços, prazos e combates das cadeias de ruínas definidos jogando de verdade (por ora são valores medidos).
