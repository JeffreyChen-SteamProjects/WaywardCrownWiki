---
title: "Tutorial do criador"
---

Todo modelo começa em **Criador e Workshop Steam** (menu principal, gerenciador de mapas ou gerenciador de plugins) e segue o mesmo caminho de **Novo projeto** até um item privado da Oficina. Só o último passo precisa da Steam.

## Os passos comuns

1. **Novo projeto**: escolha um modelo, um nome e uma pasta. A janela mostra onde o projeto vai ficar antes de gravar qualquer coisa.
2. **Editar projeto**: um plugin abre no editor de plugins; um mapa ou campanha abre com **Abrir o editor de terreno / campanha**, num processo próprio que só carrega o que o projeto exige. Salve antes do próximo passo: verificações, testes e publicação usam os arquivos salvos.
3. **Validar conteúdo**: cada problema diz onde está; clicar duas vezes abre o editor ali.
4. **Teste de jogo**: uma partida separada só com este projeto e o que ele exige. O relatório lista o que carregou e, enquanto roda, o tempo de tick, a memória e o atlas de sprites, classificados de ok a pesado demais.
5. **Exportar…**: um ZIP ou uma pasta com o mesmo ID de projeto, para guardar ou compartilhar.
6. **Publicar na Oficina**: com a Steam aberta, escolha **Privado** num primeiro teste e depois **Verificar e revisar** e **Enviar publicação**. Publicar não testa o carregamento: encontre o item em **Navegar pela Oficina**, use **Inscrever-se** e acompanhe-o em **Assinaturas** até ficar disponível.

## Mapa

O modelo é um mapa de 32×32 com um castelo, um baú de 100 de ouro duas casas a leste, 500 de ouro inicial e vitória ao coletar os baús.

1. Pinte o terreno e coloque construções, fortalezas e baús no editor de terreno, depois salve.
2. **Validar conteúdo** avisa de uma fortaleza, baú ou chefe que os heróis não alcançam a partir do castelo.
3. Versão: aumente **Versão do projeto** sempre que publicar uma mudança. Saves feitos com a versão antiga guardam uma cópia dela.

## Campanha

O modelo tem duas fases, cada uma com o próprio mapa com o mesmo castelo e baú; o arquivo da campanha as ordena e dá a cada uma um título, texto de história e ouro inicial.

1. Abra o painel da campanha no editor de terreno para ordenar as fases e definir vitórias, texto de história, o que passa adiante e gatilhos.
2. **Teste de jogo** pode começar em qualquer fase.
3. Dependências: quando uma fase usa unidades de um plugin, adicione o projeto desse plugin em **Dependências** com uma faixa de versões como `>=1.0.0, <2.0.0`.

## Plug-in

O modelo tem uma classe de herói, um inimigo, uma construção que recruta a classe, uma fortaleza que envia o inimigo, uma habilidade, uma pesquisa, um evento, um chefe com nome, uma aparência de tile e um arquivo de idioma inglês, tudo no espaço de nomes do próprio projeto.

1. Edite na aba **Objetos**. A barra escolhe um tipo; cada definição aparece com o nome e a imagem que o jogo lhe daria, e a selecionada é pré-visualizada (um andarilho anda). **Novo…** adiciona uma pelo que ela se baseia e pelo nome; a imagem e o som são escolhidos ou importados nas próprias linhas dela; o formulário de propriedades deixa em cinza os valores vindos da definição base e marca na hora um valor fora dos limites do jogo. **Avançado** mostra a linha que adiciona por ID e o JSON da definição. O nome é dado em cada idioma do plugin, nas linhas abaixo dele (**Adicionar idioma** dá outro ao plugin); um caminho do castelo tem tabelas para seus efeitos e suas especialidades, e linhas para seus outros textos.
2. Recursos: a aba **Recursos** aceita arquivos de imagem soltos nela e compara cada um com os limites de tamanho e memória. A aparência de tile do modelo usa `preview.png` como imagem de exemplo; troque-a ali.
3. Substituições: **Copiar do jogo…** adiciona uma cópia completa de um personagem do jogo com o seu próprio ID, que substitui o original onde ele é usado. Uma definição com um ID embutido (por exemplo `SLIME` com base `SLIME`) muda o slime do próprio jogo enquanto o plugin está ligado; **Perfis de conteúdo** mostra qual substituição vale.
4. Versões: **Versão do projeto** é a versão do próprio projeto; **Versões de jogos suportadas** é a faixa de versões do jogo que ele aceita (`*` para qualquer uma; uma versão de desenvolvimento só aceita `*`).

## Tutorial de chefes (plugin + campanha de duas fases)

O modelo é uma pasta com um plugin e uma campanha de duas fases que o exige; a segunda fase é vencida derrotando o chefe com nome do plugin.

1. As **Dependências** da campanha citam o projeto e a versão do plugin, então um teste leva o plugin junto.
2. Publique primeiro o plugin e depois a campanha: a janela de publicação sugere o item da Oficina do plugin como item necessário.
3. Aumente a **Versão do projeto** do plugin a cada mudança; mantenha a faixa da campanha larga o bastante para aceitá-la.

## Missão de reino (uma fase: instruções, recompensas, ondas, um chefe)

O modelo é uma fase de reino com um briefing, uma cidade, um covil, as bandeiras de Explorar, Matar e Defender da coroa, duas ondas anunciadas, um chefe com nome e um achado opcional. Desmonte-o fase por fase no painel da campanha e depois siga os passos comuns.

## Exemplo Frostfang (um pacote de conteúdo pronto e seu mapa)

O modelo é um exemplo pronto para desmontar: um pacote de conteúdo com uma classe de herói (o Guardião da Geada), um monstro (o Yeti da Geada), o salão que recruta a classe, o covil de onde vem o monstro, duas habilidades, uma pesquisa e um chefe nomeado, cada um com imagem e som próprios, e um mapa que exige o pacote e é vencido ao derrotar o chefe.

1. Abra o mapa no editor de terreno e pressione **Objetos…** para ver como cada definição se baseia em uma do jogo; mude um número ou um nome, salve e coloque o resultado no mapa.
2. Pressione **Testar** para jogar o mapa com o pacote e nada mais seu.
3. Publique primeiro o pacote e depois o mapa: a janela de publicação sugere o item da Oficina do pacote como item necessário.

## O que um modelo nunca tem

Um modelo não tem nenhum ID real de item da Oficina, nenhuma conta da Steam e nenhum caminho absoluto: os IDs de projeto são criados novos no seu computador e cada arquivo é nomeado em relação ao projeto.
