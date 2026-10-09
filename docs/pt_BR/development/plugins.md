---
title: "Desenvolvimento de Plugins"
---

## Criar e testar

Abra Creator / Workshop no menu principal ou nos gerenciadores de mapas e plugins. Crie um mapa, campanha de duas fases, plugin ou tutorial de chefe com seu plugin associado; edite, salve, valide e teste offline. Gerencie projetos locais, inscrições, publicações, pesquisa e tarefas. O modelo «Missão de reino» cria uma campanha kingdom de uma fase com instruções, recompensas, ondas e um chefe com nome. Importe um ZIP, um arquivo de mapa ou uma pasta de projeto com «Importar conteúdo» ou soltando-o na área de trabalho; «Exportar…» grava um ZIP ou uma pasta, e «Abrir pasta» mostra os arquivos de um projeto. Ambos pedem uma pasta (a última é oferecida de novo), um nome já usado ali vira nome-2, nome-3…, e nada é gravado no conteúdo que o Steam baixa. Cada projeto aparece com prévia, tipo, versão, autor, se este jogo consegue carregá-lo e como foi a última validação; toda lista tem busca e filtro de tipo e diz por que está vazia, e os detalhes do projeto selecionado trazem licença, versões do jogo, dependências e pasta. «Novo projeto» lista os modelos com o que cada um cria e mostra onde o projeto ficará antes de gravar qualquer coisa. A validação avisa sobre fortalezas, baús e chefes posicionados que os heróis não alcançam a partir do castelo (um erro quando a vitória precisa deles) e limita um mapa a 64 fortalezas, 256 baús e 32 chefes posicionados; um clique duplo num problema em uma casa abre o editor ali. O editor de terreno e campanhas abre num processo próprio que carrega só as dependências do projeto, então o conteúdo que o jogador instalou nem aparece nem atrapalha; ele salva direto no projeto. Validação, exportação, teste e publicação esperam enquanto o projeto tiver mudanças não salvas num editor aberto pela área de trabalho: eles usam os arquivos salvos. No editor de plugins, as fases de um chefe são uma tabela (a vida em que cada uma começa, suas habilidades), e a quantidade, o limite e o aviso de uma habilidade têm campos próprios. O editor de plugins guarda um rascunho do trabalho não salvo logo após cada edição, ao lado das configurações e fora do projeto; reabrir o projeto após uma falha o oferece de volta. No editor de plugins, «Duplicar» copia uma definição com um ID novo, uma definição citada por outra não pode ser excluída até esse uso sair, e «Copiar do jogo…» adiciona uma cópia completa de um ator do jogo com o próprio ID, que substitui o original onde é usado sem mexer nos arquivos do jogo. Classes, inimigos, edifícios, fortalezas e pesquisas têm um formulário de propriedades (faixas e crescimento de atributos, ouro deixado, preços, a classe que um edifício recruta, quem uma fortaleza envia, a que uma pesquisa se aplica) que mostra em cinza os valores herdados da definição base e marca na hora um valor fora dos limites do jogo ou um ID desconhecido; as dependências são editadas em uma tabela. A aba Recursos aceita arquivos soltados, mostra a área visível de cada imagem diante dos limites de tamanho e memória do jogo, a visualiza como terreno ou ícone, guarda uma linha de fonte e créditos, lista e define quais definições a usam, renomeia um arquivo com todos os seus usos, recusa remover um ainda em uso e redireciona campos que citam um arquivo ausente. Um teste abre com a lista do que carregou (cada plugin na ordem de carga com as definições que adiciona ou substitui, e os plugins ignorados com o motivo); a área de trabalho mostra a mesma lista e põe uma definição ignorada do plugin testado na lista de problemas, onde abrir um problema de uma tabela de definições leva a essa definição no editor de plugins.

Importar pastas/ZIP ou criar cópias editáveis gera novos IDs e altera referências do próprio namespace. Autor, origem e licença são preservados, sem herdar vínculo de atualização. Originais Steam são somente leitura. Caminhos relativos, limites, matrizes e ciclos são verificados. Licença vazia não autoriza redistribuição. Ao publicar uma cópia, a revisão mostra a origem (projeto, versão, autor e página do original) e os termos do autor original, e ela só é enviada depois que você confirma que mantém essa atribuição e segue esses termos ou, quando o original não dá licença, que tem a permissão do autor; uma licença não informada sempre aparece como sem permissão para compartilhar. A cópia mostra o original nos detalhes e avisa quando o original assinado mudou, e as dicas de Criar cópia local editável, Exportar… e Cancelar inscrição dizem o que cada uma faz.

Publicar exige Steam: prepare página e imagem, revise o snapshot imutável de arquivos/hashes e confirme o envio. Tarefas continuam com a janela fechada; a preparação pode ser cancelada. Envios/resultados desconhecidos exigem consultar ou sincronizar antes de tentar novamente. Vínculos distinguem conta, app e projeto. Imagem menor que 1 MiB; testes usam Steam simulado. Publique primeiro os plugins necessários e confirme seus IDs da mesma app na revisão do mapa/campanha. O assistente salva textos por idioma e metadados JSON, recorta a imagem principal em quadrado e ordena/remove até oito capturas adicionais. Publicações existentes podem atualizar apenas a página e as dependências sem reenviar conteúdo; as imagens fazem parte do snapshot revisado. O assistente pode criar a prévia principal a partir do próprio projeto (o terreno de um mapa com castelo, fortalezas e baús, os primeiros níveis de uma campanha, as imagens próprias de um plugin, cada um com o título), mostra a prévia como será enviada com seu tamanho, desenha uma legenda opcional na parte de baixo de cada captura e avisa quais imagens citadas por um rascunho sumiram. Suas três etapas (página, dependências e versões, revisão) são percorridas com Voltar e Próximo (Alt+Esquerda, Alt+Direita); um problema leva à sua etapa e destaca o campo até ser editado, e a revisão conta os arquivos adicionados, alterados e removidos desde a última publicação. Uma tarefa que falhou diz que tipo de problema encontrou (permissão, acordo da Oficina, espaço, Steam ocupada, tempo esgotado, Steam offline, verificações, resultado desconhecido, interrupção), o que fazer a seguir e um código como WS-PERM-R15 que não cita conta, item nem arquivo. Ao escolher um dos seus itens em Minhas publicações, aparecem a visibilidade, a versão, as datas de criação e atualização, o tamanho, o projeto local vinculado e uma lista do que uma atualização a partir desse projeto mudaria: campos da página, arquivos e itens necessários. Ao escolher um item no navegador, aparecem a descrição (ou o aviso de que a Steam não informou nenhuma) e duas partes separadas: o que a Steam informa (tipo, itens necessários, os ramos do jogo que o autor permite, a versão registrada na publicação, data de atualização, tamanho, votos) e, depois que a Steam o instala, o que o próprio manifesto diz (projeto e versão, se esta versão do jogo consegue rodar as versões pedidas, os projetos que exige e o que pode alterar). O que a Steam não informa não é preenchido. Um item assinado só é usado depois que a Steam o instala e ele passa por uma verificação: o manifesto pode ser lido por este jogo e cada projeto exigido está instalado numa versão aceita, sem ciclo (se dois itens fornecem o mesmo projeto, vale o seu próprio plugin; senão, o item mais antigo). Um item que a Steam está atualizando continua em uso na versão instalada. A aba Assinaturas mostra em que ponto está cada item assinado (aguardando a Steam, baixando com os bytes, aguardando verificação, disponível, falta o que ele exige, ou falhou e por quê), e o navegador diz o mesmo do item escolhido; um download que a Steam não conseguiu terminar, como com o disco cheio, só é pedido de novo quando você clica em Tentar baixar de novo. Antes de carregar um save, o jogo confere o conteúdo com que ele foi feito: se um projeto usado foi atualizado, desligado, deixou de ser assinado ou não pode ser usado, ou se outro conteúdo está ligado, ele cita cada um e, depois de perguntar, carrega o save a partir da cópia guardada, ou diz por que não pode carregar (sem cópia utilizável, uma atualização do jogo, outra conta ou app da Steam, Steam fechada) e como resolver; o arquivo do save e a partida em andamento ficam como estavam. “Conteúdo guardado…” na aba Assinaturas lista essas cópias com os saves que dependem delas, verifica-as e remove as não usadas; uma cópia da qual um save depende só sai após uma confirmação que cita os saves, e a usada pela partida em andamento nunca. Os detalhes de itens e projetos também mostram a versão deste jogo (não definida numa versão de desenvolvimento, quando o conteúdo que pede uma versão específica do jogo não carrega) e o ramo da Steam, e Abrir a página do item na aba Assinaturas mostra um item que não pode ser usado; se a Steam muda o jogo para outro ramo durante a partida, um aviso diz isso e nada reinicia sozinho. As tags de uma página são o tipo dela mais qualquer uma de Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; a etapa da página lista os idiomas com página escrita (qualquer outro idioma da Steam mostra a página padrão), e para um item já publicado, “Importar página da Steam…” compara a página da Steam com o seu rascunho campo a campo e traz só os campos marcados. Sem a Steam, itens assinados não são carregados e cópias guardadas não são usadas, pois ambos pertencem a uma conta e um app da Steam (a demo e o jogo completo são apps separados, cada um com seus itens, rascunhos e perfis de conteúdo); um save que precisa deles diz isso, e criar, verificar, testar, exportar e importar seus próprios projetos funciona offline. Enquanto um teste roda, ele mede o tempo de tick, a memória e o atlas de sprites, e o espaço de trabalho os junta ao relatório do teste classificados como ok, vale observar ou pesado demais, com o que ajuda; se um envio falha por conteúdo ou cota, a explicação cita os limites da Steam, e um envio concluído lembra de assinar e conferir se carrega, pois publicar não testa isso. Um envio só é abandonado após cinco minutos sem progresso, e tarefas concluídas ou canceladas saem da lista uma semana depois; sessões de teste que nenhum jogo em execução usa são removidas quando outras começam, Enter em um projeto local abre seu editor, e essas janelas cabem em uma tela de 1280 × 720 em todos os idiomas.

## Definições e dependências

Plugins versionados adicionam classes, inimigos, construções e fortalezas independentes usando modelos integrados, além de habilidades, pesquisas, eventos, chefes nomeados, recursos e idiomas. Novos IDs usam `namespace:name`; um ID integrado sobrescreve o conteúdo existente. Os arquivos centrais ficam somente para leitura. As aparências substituem imagens de atores ou terreno sem alterar valores de jogo. Uma construção do jogador pode ter um efeito: uma habilidade de ataque, cura, escudo ou estado que ela lança em intervalos fixos nos inimigos ou heróis ao alcance a partir de um nível definido. Um pacote cujas capacidades são só assets e languages pode conter apenas skins e idiomas, e uma imagem ou um som que o jogo não consegue usar mantém o original no lugar.

O manifesto comum registra ID do projeto, autor, versão, compatibilidade, recursos e dependências. A ordem é determinística; dependências ausentes, incompatíveis ou cíclicas impedem o carregamento. Projetos antigos mantêm formato e ordem. Perfis mostram sobrescritas e se aplicam à próxima partida. Os perfis de conteúdo listam os plugins escolhidos na ordem de carregamento, cada um com a origem e a versão instalada, a usada pelo jogo em andamento e a escolhida para a próxima vez; Subir e Descer mudam a ordem só onde as dependências permitem, e a ordem vale para o próximo carregamento na mesma conta e app da Steam. Antes de qualquer mudança, o perfil lista o que aplicar ativaria ou desativaria, com os mapas, campanhas, plugins e saves que usam um plugin desativado; clicar duas vezes num problema encontra o plugin, um mapa ou campanha pode sugerir os plugins de que precisa e um item assinado que não é oferecido, como a cópia de um plugin seu, diz por quê.

## Exemplos

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Recursos e limites

| JSON | Recursos e limites |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | a árvore de habilidades de uma classe (habilidades passivas): uma lista de `{"id", "level", "effect", "requires": [ids]}`, quantas quiser e várias por nível, ou a tabela antiga `{"<nível>": {"id", "effect"}}`, lida como uma corrente; os ids são únicos na classe, `requires` nomeia habilidades da mesma classe, sem ciclos |
| adventurer_classes.active_skill, tree_skills | as habilidades ativas próprias da classe, nós da mesma árvore: `active_skill` é o ID da primeira (uma raiz), `tree_skills` até 12 IDs das que crescem da árvore. Cada uma é uma habilidade de `skills` (nunca summon), aprendida no seu `level` quando o herói tem todas as que `requires` lista (até 8 IDs de habilidades da classe, passivas ou ativas; nenhuma para a primeira), e cada uma espera o próprio `cooldown`. Sem `active_skill` a classe mantém a primeira habilidade da classe base |
| buildings.effect | uma habilidade attack, heal, shield ou status (nunca summon), lançada a cada 10–3600 ticks a partir do nível 1–3 da construção; estados não se acumulam |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; somente aparência |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (desenhado opaco); skins de personagens: como o alvo; o resto, e layout fora dos personagens, não é usado e gera aviso |
| plugin art and sounds | 256 MiB de imagens decodificadas (largura × altura × 4) para todos os pacotes ativos, cada arquivo conta uma vez, acima disso fica a arte original; 64 MiB de sons de plugins em memória |
| capabilities: assets, languages only | apenas skins e idiomas; outras definições são recusadas |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 mapas de fase |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Compatibilidade com a versão do jogo

`game_version` define uma restrição à versão publicada do jogo em execução. `"*"` é aceito, inclusive para projetos antigos. Um intervalo específico só é aceito quando a compilação declara uma versão semântica conhecida que o atende; caso contrário, validação, carregamento e publicação são recusados. Neste repositório, `game.build_info.GAME_VERSION` ainda é desconhecida: use `"*"` até que a compilação de distribuição forneça uma versão aprovada. A `version` do projeto e os nomes dos ramos do Steam não fornecem a versão do jogo.
