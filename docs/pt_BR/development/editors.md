---
title: "Editores de Mapas e Campanhas"
---

Wayward Crown inclui editores integrados de mapas e campanhas que permitem criar níveis e cenários personalizados.

---

## Editor de Mapas

O botão **Editor de Mapas** do menu principal abre o editor em um mapa novo. Os mapas salvos são listados, jogados, editados, importados e exportados na aba **Mapas** do gerenciador de mapas, que o botão **Campanhas** do menu principal abre.

### Funcionalidades

- **Pintura de Terreno** — Selecione um tipo de terreno e pinte-o no mapa com um pincel (tamanho 1 – 20), ou preencha uma região inteira
- **Posicionamento de Construções** — Posicione construções do jogador, Fortalezas Inimigas e baús de tesouro, mova o Castelo ou apague
- **Aleatorizar** — Gere um mapa aleatório como ponto de partida
- **Desfazer / Refazer** — Até 30 passos (Ctrl+Z / Ctrl+Y)
- **Configurações do Mapa** — Tamanho (100 – 1000 tiles por lado), nome, autor e outros detalhes, ouro inicial e uma condição de vitória
- **Salvar/Carregar** — Salve mapas no diretório `maps/`; Fechar, Esc e Novo perguntam antes de descartar alterações não salvas (Salvar / Descartar / Cancelar), e descartar uma campanha nunca salva remove a pasta dela
- **Objetos…** — Edite no editor de objetos as classes de herói, monstros, construções, fortalezas e chefes feitos para o mapa. Na primeira vez, ele cria o pacote de conteúdo do mapa (um plugin seu que o mapa exige); salvar o pacote recarrega o conteúdo, então o que ele define já pode ser colocado
- **Testar** — Inicia o mapa salvo, ou a campanha na fase que está sendo editada, em um jogo próprio, com o pacote de conteúdo dele e nada mais seu

Os mapas não contêm unidades: os aventureiros são recrutados e os inimigos surgem quando o jogo está rodando.

### Tipos de Terreno

- Planície, Floresta, Montanha, Água, Deserto, Estrada, Lama, Pântano, Neve, Colinas, Terras áridas, Prado florido

### Formato de Salvamento

Os mapas são armazenados em formato JSON no diretório `maps/` e incluem:

- Dados de terreno (um array NumPy comprimido)
- Dados de elevação
- Construções, Fortalezas Inimigas e baús de tesouro
- Posição do Castelo
- Detalhes do mapa, ouro inicial e condição de vitória

---

## Editor de Campanhas

As campanhas são criadas, abertas, importadas e exportadas na aba **Campanhas** do gerenciador de mapas (o botão **Campanhas** do menu principal). Abrir uma campanha inicia o editor de mapas com um painel de campanha, para que você edite o mapa de cada nível e suas configurações em um só lugar.

### Funcionalidades

- **Ordenação de Níveis** — Mova os níveis para cima e para baixo com os botões de seta
- **Condições de Vitória** — Defina condições de vitória para cada nível, incluindo o tipo de fortaleza para `destroy_building`
- **Texto da História** — Defina textos de introdução e conclusão
- **Recursos Iniciais** — Defina o ouro inicial para cada nível
- **Transferência** — Mantenha ouro, aventureiros e pesquisas do nível anterior
- **Restrições de Construções** — Restrinja quais tipos de construções o jogador pode usar
- **Gatilhos** — Mensagens por script e desbloqueios de construções para um nível (apenas níveis de campanha)
- **Campos de reino** — O nível inicial do castelo da fase, o limite de tempo, o conselho das instruções e até dois achados opcionais
- **Objetivos adicionais e derrotas** — Mais condições de vitória, obrigatórias ou opcionais, e mais formas de perder (heróis caídos, edifícios ou caravanas perdidos), em duas tabelas com Adicionar e Remover
- **Origem do alvo** — Abaixo de um alvo de vitória: se o chefe está posicionado no mapa ou é iniciado por um gatilho, e se o tipo de fortaleza é do jogo ou de um plugin e quantas há no mapa; o alvo de um objetivo adicional diz o mesmo na dica

### Opções de Condições de Vitória

Os editores as listam pelo nome, no seu idioma; o tipo da tabela é o que o arquivo de um mapa ou de uma campanha guarda.

| Tipo | Descrição |
|------|-----------|
| `free` | Modo livre, sem condição de vitória |
| `destroy_enemy_buildings` | Destruir todas as fortalezas inimigas |
| `survive_ticks` | Sobreviver por uma duração especificada |
| `reach_gold` | Acumular uma quantidade especificada de ouro |
| `destroy_building` | Destruir um tipo específico de fortaleza |
| `defend` | Defender o Castelo por uma duração especificada |
| `collect_chests` | Coletar todos os baús de tesouro |
| `defeat_boss` | Derrotar um chefe nomeado, colocado no mapa ou iniciado por um gatilho |
| `secure_trade` | Concluir um número de viagens de caravana e destruir todas as fortalezas inimigas |

### Estrutura de Salvamento

```
campaigns/my_campaign/
├── campaign.json         # Metadados da campanha
├── level1.json           # Mapa do Nível 1
├── level2.json           # Mapa do Nível 2
└── level3.json           # Mapa do Nível 3
```

---

## Compartilhando Conteúdo Personalizado

- Pastas de mapas e campanhas podem ser compartilhadas simplesmente copiando-as, ou com a exportação e importação do gerenciador de mapas
- Coloque os mapas recebidos em `maps/` para carregá-los pelo menu principal
- Coloque as campanhas recebidas em `campaigns/` para vê-las no menu principal
- Com o jogo rodando pelo Steam, **Publicar na Oficina** no gerenciador de mapas envia um mapa ou campanha seu para a Oficina Steam, e os que você assina aparecem nas listas marcados com [Oficina]. O Steam os mantém atualizados, então não podem ser editados, renomeados nem excluídos; **Duplicar** cria um mapa seu
- Um mapa ou uma campanha com pacote de conteúdo exige esse plugin: compartilhe o pacote junto e publique o pacote primeiro (a janela de publicação então sugere o item da Oficina do pacote como item necessário)
