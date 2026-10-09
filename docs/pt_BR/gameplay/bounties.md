---
title: "Sistema de Recompensas"
---

As recompensas são seu principal meio de direcionar as ações dos aventureiros. Coloque bandeiras de recompensa no mapa e defina uma recompensa para atrair aventureiros a um local específico.

---

## Tipos de Recompensa

| Tipo | Recompensa Padrão | Perigo | Fama | Efeito |
|------|-------------------|--------|------|--------|
| **Exploração** | 200g | 0.2 | 0.3 | Os aventureiros viajam ao local alvo, revelando a névoa de guerra no caminho; a bandeira precisa estar num lugar a que eles consigam chegar a pé |
| **Eliminação** | 200g | 0.8 | 0.9 | Eliminar um alvo designado (inimigo ou Fortaleza Inimiga) |
| **Defesa** | 200g | 0.5 | 0.6 | Patrulhar ao redor da construção alvo até o temporizador expirar |
| **Aviso** | taxa de 50g | — | — | Marca um local como proibido: nunca é aceito nem pago; heróis abaixo do nível 8 ficam longe de tudo num raio de 25 tiles dele |

### Colocar, aumentar e cancelar

- Uma Recompensa de Eliminação deve ser colocada em um inimigo ou em uma Fortaleza Inimiga, e uma Recompensa de Defesa em uma de suas construções ou no Castelo
- O valor de uma recompensa publicada pode ser aumentado em +100g ou +500g
- Cancelar reembolsa o valor, exceto em uma Recompensa de Defesa cuja vigia já começou

---

## Como os Aventureiros Escolhem Recompensas

Os aventureiros calculam a atratividade com base em sua **personalidade** e nos **atributos da recompensa**:

```
Atratividade = Recompensa × Ganância
             + Fama × Glória
             - Perigo × Segurança
             + Bônus de Exploração × Curiosidade
             - Penalidade por Distância
             - Penalidade por HP Baixo
```

O valor e a distância são escalonados pelo nível do aventureiro, e algumas recompensas são recusadas de imediato (um valor abaixo de nível × 20 de ouro, um marcador de Aviso, ou uma recompensa dentro de uma zona de aviso para heróis abaixo do nível 8). A fórmula completa está na página [Aventureiros](adventurers.md).

:::tip[Dicas Práticas]
- Os **Patrulheiros** têm alta curiosidade e são os mais adequados para Recompensas de Exploração
- Os **Guerreiros** têm alta glória e são os mais adequados para Recompensas de Eliminação
- Os **Guardas** nunca aceitam recompensas: patrulham suas construções e correm para qualquer uma que seja atacada
- Aumentar a recompensa pode persuadir aventureiros relutantes a aceitá-la
:::

---

## Mecânicas de Recompensa de Defesa

As Recompensas de Defesa exigem que os aventureiros **patrulhem continuamente** perto do alvo:

| Configuração | Valor |
|--------------|-------|
| Tempo de patrulha necessário | 60 ticks |
| Intervalo de recálculo de rota | A cada 12 ticks |

Após aceitar uma Recompensa de Defesa, o aventureiro patrulha de ida e volta perto do alvo. Uma vez acumulado tempo de patrulha suficiente, a recompensa é concluída: os heróis que estão no posto dividem o valor, e cada um ganha 25 XP se um inimigo chegou à vista durante a vigia.

---

## Mecânicas de Recompensa de Eliminação

As Recompensas de Eliminação designam um **alvo específico**:

- Pode ser um inimigo em particular
- Pode ser uma Fortaleza Inimiga

Uma vez que o alvo é eliminado, a recompensa é automaticamente concluída. Os aventureiros que aceitaram a recompensa priorizarão viajar até a localização do alvo.

- O valor é dividido igualmente entre os heróis que detêm a recompensa num raio de 20 tiles do alvo, e cada um deles ganha 30 XP; nenhum traço o aumenta
- Contra uma Fortaleza Inimiga, os aventureiros primeiro se reúnem a cerca de 22 tiles de distância, do lado do Castelo, e atacam juntos quando 2–5 deles (conforme o tamanho da fortaleza) tiverem chegado, ou 120 ticks depois que o primeiro aventureiro aceitar a recompensa

---

## Dicas Estratégicas

1. **Comece com Recompensas de Exploração no início** — você precisa limpar a névoa de guerra para localizar inimigos e recursos
2. **Coloque Recompensas de Eliminação perto de Fortalezas Inimigas** — guie os aventureiros para destruir ameaças
3. **Coloque Recompensas de Defesa perto de construções importantes** — outros aventureiros as aceitam; os Guardas já patrulham ali sem elas
4. **Ajuste as recompensas com base na personalidade dos aventureiros** — você não precisa pagar demais por cada recompensa

---

## Regras das recompensas

O valor fica na recompensa desde a publicação:

- **Prazo**: uma recompensa pode ser publicada com prazo de 1, 3 ou 5 minutos. Quando ele passa, o valor não pago volta ao tesouro.
- **Reembolsos**: cancelar devolve o valor, exceto em uma recompensa de defesa cuja vigia já começou. Uma recompensa cujo alvo sumiu sem ninguém para pagar também devolve o valor. Uma bandeira é removida pelo menu de clique direito no mapa ou, depois de selecionada, pelo botão do próprio painel; os dois dizem o que volta. Quando heróis já estão a caminho de uma recompensa cancelada, um décimo do que volta vai para eles pela caminhada, em partes iguais.
- **Quem recebe**: uma recompensa de exploração paga o herói que chega; uma de caça é dividida igualmente entre quem a aceitou e está perto da morte do alvo; uma de defesa entre quem está no posto. Um herói morto nunca recebe. Um herói perto do trabalho que nos últimos 30 segundos tenha tratado, protegido ou coberto outro recebe uma parte ao lado deles.
- **Renome exige trabalho**: o ouro sempre é pago, mas renome e experiência só vêm por terreno inexplorado no momento da publicação, por uma morte ou por uma vigia durante a qual um inimigo chegou à vista.
- **Companhia**: os heróis deixam uma recompensa de exploração que alguém já pegou, contam um valor dividido como a sua parte e acham uma fortaleza menos assustadora quando outros já se alistaram.
- **Expedições**: uma recompensa de caça contra uma fortaleza reúne primeiro o grupo em um ponto de encontro do lado do castelo. Ele parte quando heróis suficientes chegaram ou após 120 ticks; um voluntário que ficou sozinho só segue se tiver coragem de enfrentar a fortaleza sozinho e, senão, desiste da recompensa; aceita um herói a mais que o tamanho da reunião e nenhum outro; um herói com poucas poções compra antes, se puder; e um grupo que caiu ou voltou para casa se reúne de novo. O painel da recompensa mostra quem se reuniu, quanto tempo os demais são esperados e as chances estimadas.
- **Perigo**: recompensas de caça, recompensas de exploração ao lado de uma fortaleza já vista e marchar sem pagamento contra uma fortaleza são pesados contra o preparo de cada herói (ataque, vida, poções, armadura, os heróis que já estão na recompensa e a distância do trabalho até uma estalagem ou o castelo). Heróis corajosos aceitam chances piores que os cautelosos, e nenhuma recompensa torna um trabalho perigoso mais seguro. Um herói que hesita diz o que o faria mudar de ideia (poções que pode comprar ou não consegue obter, uma estalagem mais perto do trabalho, outro herói na recompensa) e vai assim que tem isso. Um herói com uma recompensa luta com o que o alcança, mas volta para a recompensa antes de perseguir outra coisa, e desiste de um trabalho perigoso quando suas chances desabam.
- **Resgate**: uma recompensa de resgate é colocada sobre um coletor de impostos ou uma caravana e o acompanha. Os heróis que a aceitam vão até ele e ficam ao seu lado; com escolta ele para de fugir dos monstros e segue sua tarefa enquanto eles lutam. Depois de escoltado por 20 ticks na estrada e estando no castelo (uma caravana: ou no seu entreposto) sem monstros a até 8 casas, a recompensa é dividida igualmente entre os que a detêm e estão ao seu lado; esperar ao lado de um que não partiu não conta. Só dá renome e experiência se ele estava ferido ou se um monstro chegou a ser visto, e devolve o valor se ele for perdido. Um clique duplo em um coletor de impostos ou caravana coloca uma.
- **Painel de publicação**: mostra o que o tesouro paga agora e, ao apontar para o mapa, qual seria o alvo da recompensa. Quando um clique poderia significar várias coisas (monstros amontoados para uma recompensa de matar, carregadores para uma de resgate, vários heróis feridos sob o ponteiro para um feitiço voltado a um herói), aparece uma lista e a recompensa ou o feitiço vai para o escolhido.
- **Recompensas concedidas**: um mapa ou campanha pode publicar uma recompensa com a ação de gatilho `post_bounty`; ela não custa nada ao tesouro e não devolve nada.
