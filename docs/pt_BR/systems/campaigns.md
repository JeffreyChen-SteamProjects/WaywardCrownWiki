---
title: "Modo Campanha"
---

O modo campanha oferece cenários de múltiplos níveis, cada um com condições de vitória específicas e um pano de fundo narrativo.

---

## Campanhas Integradas

O jogo inclui uma campanha **Tutorial** integrada (5 níveis) que guia novos jogadores pelas diversas mecânicas do jogo. Ela tem um botão próprio, o primeiro do menu principal.

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
| `carry_over` | O que é mantido do nível anterior: `gold`, `adventurers`, `research`, `path` (o caminho do castelo e sua especialidade) (cada um true/false). O que um nível lista em `carry_over` é trazido de outro nível da mesma campanha quando o jogador segue direto, e anotado nesse momento; cada nova tentativa do nível começa dessa anotação. Um nível iniciado pela lista de missões não traz nada, e o que um nível não lista (nem a pesquisa nem o caminho do castelo) não sobrevive ao mapa. |
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

A missão 1 começa ao lado das ruínas de uma ferraria e de um mercado: a equipe da coroa as reconstrói sem custo, a ferraria primeiro, e o que você colocar, sua primeira guilda também, espera a vez atrás delas, a menos que você marque como prioritário. Na missão 1, mensagens conduzem da primeira guilda ao primeiro herói, ao mercado e ao coletor de impostos. Com cerca de 48 segundos, a coroa coloca por conta própria uma recompensa «Explorar» perto do acampamento; quando um herói a conclui, você é convidado a colocar uma recompensa «Matar» no acampamento. Na missão 2 a coroa manda explorar os dois locais do entreposto, saqueadores emboscam a estrada sul uma vez (anunciado 20 segundos antes) e a primeira construção perdida traz 400 de ouro de ajuda. Na missão 3, um ataque chega pela estrada leste no tick 1000 e outro pela estrada norte no tick 2500 e o Chefe Presa-Rangente no tick 4300, cada um anunciado 100 ticks antes; arrasar a fortaleza dele é uma expedição que vale o saque, mas só a derrota dele dá a vitória. As missões 1 e 2 incluem uma Guilda dos Construtores para os consertos; na missão 3 o castelo, já no nível 2, pode seguir seu caminho de imediato, e uma fortaleza arrasada deixa de enviar seus próprios ataques. As missões 2 e 3 mantêm a pesquisa da missão anterior quando você segue direto; cada nova tentativa começa como a primeira, e uma missão escolhida na lista começa sem ela.

Os desafios (`campaigns/demo_challenges/`, `"linear": false`) são escritos da mesma forma. *Ouro escasso* abre após a missão 2: 600 de ouro, um castelo de nível 2, uma cidade pequena com um entreposto na estrada sul e 15 minutos (`time_limit`) para arrasar um acampamento goblin e um acampamento de bandidos que ataca a estrada; bandidos testam a estrada duas vezes antes de começarem os ataques do próprio acampamento. *Segure a estrada* abre após a missão 3: o entreposto já está aberto, saqueadores chegam pela estrada sul a cada 500 ticks, um pouco mais fortes a cada vez, e 10 viagens de caravana precisam ser concluídas em 14 minutos e 20 segundos. Um reino livre (o Reino Livre da Demo ou o Sandbox do jogo completo) não tem objetivo; sua janela inicial permite pedir que o Chefe Presa-Rangente venha uma vez, 20 minutos após o início (`game/systems/free_kingdom.py`). Em *Segure a estrada*, cada ataque marcha sobre o entreposto: um entreposto que ninguém defende é arrasado e sua caravana some com ele; não fazer nada é perder o desafio.

## Uma missão de reino, passo a passo

1. Em Creator / Workshop escolha **Novo projeto**, depois **Missão de reino**, e uma pasta nova. Você recebe uma fase jogável: uma cidade, um acampamento goblin a leste, as recompensas «Explorar», «Matar» e «Defender» da coroa, duas ondas anunciadas e o chefe como chefe com nome.
2. Abra-a no editor de campanhas. O formulário da fase tem a história (intro), o conselho das instruções, o ouro inicial e a vitória; abaixo, o nível inicial do castelo, o limite de tempo e até dois achados opcionais com suas casas.
3. Pinte o mapa: mova a cidade, o covil e as estradas. Um local precisa ser alcançável a partir do castelo; senão, o que está nele é deixado de fora quando a fase começa. Uma construção no arquivo do mapa pode ter `"ruin"` (de 1 a 99): ela começa como obra com essa porcentagem do trabalho feita, e a equipe da coroa a termina sem custo.
4. Abra os gatilhos para mudar as mensagens, as recompensas da coroa (`post_bounty`), as ondas (`spawn_enemies`) e quando o chefe chega (`spawn_boss`). A condição `enemy_building_seen` espera até que um covil esteja à vista.
5. Em `campaign.json`, `roster` nomeia os monstros que vagam pelo mapa e `blocked_events` os eventos aleatórios nunca sorteados.
6. Valide: as verificações apontam pelo campo um nível de castelo, um limite de tempo, um achado opcional, uma entrada do elenco ou um evento errados. Depois jogue a fase pela área de trabalho; a dificuldade escolhida ali define os ataques, as ondas e o ouro inicial.
7. Publique primeiro em privado e torne público quando jogar do jeito que você quer.
