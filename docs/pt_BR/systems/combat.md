---
title: "Sistema de Combate"
---

O combate é totalmente automático. Aventureiros e inimigos se enfrentam sempre que estão dentro do alcance de ataque um do outro.

---

## Fluxo de Combate

1. **Detecção** — Um aventureiro detecta um inimigo dentro de sua visão (verificado a cada 2 ticks)
2. **Aproximação** — Se o inimigo é visível mas está fora do alcance de ataque, o aventureiro o persegue
3. **Ataque** — Uma vez dentro do alcance de ataque, ambos os lados começam a lutar
4. **Resolução** — O dano é resolvido uma vez a cada 5 ticks

---

## Cálculo de Dano

### Aventureiro Atacando Inimigo

| Tipo | Fórmula de Dano |
|------|-----------------|
| Corpo a corpo | `ATK × 2` (multiplicador de dano global) |
| À distância | `ATK` (dano de projétil, sem multiplicador aplicado) |

### Inimigo Atacando Aventureiro

```
Dano = (ATK do Inimigo + aleatório(0~2)) × 2
```

### Defesa

```
Dano Real = max(1, Dano - DEF)
```

### Evasão

| Fonte | Taxa de Evasão |
|-------|----------------|
| Esquiva base dos aventureiros | 10% + 1% × AGI (≤ 70%) |
| Evasão base inimiga | 5% |
| Habilidade "Evasão" do Patrulheiro | +15% |
| Ladrão: Evasão | +10% |
| Ladrão: Dança das sombras | +18% |
| Patrulheiro: Quebra-vento | +25% |

---

## Sistema de Projéteis

Cada unidade que luta à distância dispara um projétil próprio, de modo que um disparo é reconhecido pelo que voa. As outras classes lutam corpo a corpo mesmo alcançando 3 tiles:

| Classe | Tipo de Projétil |
|--------|------------------|
| Patrulheiro | Flecha (arrow) |
| Batedor | Azagaia (javelin) |
| Guarda das Estradas | Virote de besta (bolt) |
| Mago | Bola de fogo (fireball) |
| Adepto | Estilhaço de luz (light_shard) |
| Arqueiro goblin (inimigo) | Flecha tosca (goblin_arrow) |
| Cultista sombrio (inimigo) | Orbe sombrio (dark_orb) |
| Dragão (inimigo) | Jato de chamas (dragon_flame) |

Os projéteis viajam em direção ao alvo a cada tick após serem disparados e causam dano ao impactar. Cada um é desenhado conforme o rumo em que voa: o que sobe pelo mapa é visto por trás, e o que o cruza, de lado.

---

## Torre de Flechas

A Torre de Flechas é uma construção defensiva automatizada:

| Propriedade | Valor |
|-------------|-------|
| Alcance de ataque | 20 tiles |
| Dano base | 16 + 8 × (Lv − 1) |
| Escala por melhoria | Aumenta com o nível |

As Torres de Flechas atacam automaticamente o inimigo mais próximo dentro de seu alcance.

---

## Recompensas de Experiência

| Fonte | XP |
|-------|-----|
| Por golpe (gotejamento) | 1/5 da XP de eliminação |
| Eliminar Slime | 10 XP |
| Eliminar Goblin | 25 XP |
| Eliminar Esqueleto | 40 XP |
| Eliminar Zumbi | 60 XP |
| Eliminar Dragão | 150 XP |

:::note[XP por Gotejamento]
Cada vez que um aventureiro acerta um inimigo — seja corpo a corpo ou com projétil — ele recebe 1/5 da XP de eliminação daquele inimigo. Isso garante que os aventureiros ganhem experiência mesmo sem desferir o golpe final.
:::

---

## IA de Combate

### Condições de Fuga do Aventureiro

- HP < 30% (HP_CRITICAL)
- A probabilidade de fuga é influenciada pelo traço de personalidade Segurança

### Uso de Poções

| Condição | Comportamento |
|----------|---------------|
| HP < 30% | Usar poção urgentemente |
| HP < 50% | Usar poção |

### Prioridade de Alvos do Inimigo

1. Aventureiros em combate (não pacifistas)
2. Construtores (pacifistas)
3. Construções ameaçadoras como Torres de Flechas
4. Castelo
5. Outras construções

O veneno mantém a duração restante, o próximo dano e o crédito da morte ao salvar. O veneno do ladrão é removido pelo altar ou pelos banhos sem retirar escudos. Após a resistência básica do chefe, controles repetidos em uma janela fixa de 10 segundos duram 100%, 50% e 25%; tentativas posteriores não têm efeito até o fim da janela. Uma reaplicação mais curta não encurta o controle existente, e tentativas não adiam a reinicialização. Inimigos comuns não ganham essa imunidade.

Missões permitem até oito etapas ordenadas com objetivos obrigatórios e opcionais. Etapas concluídas e resultados opcionais são salvos; falhar em um extra não impede a vitória básica. Inimigos e fortalezas designados precisam morrer de verdade: remover um alvo vivo não conclui a meta. A proteção acompanha a unidade ou prédio aliado original até o fim, sem aceitar substitutos. Criadores podem usar renome, ondas finitas e listas de alvos; referências ausentes são rejeitadas antes de jogar.

**Alquimista · Guilda de alquimia** — 230 Ouro, HP 750, Lv.2 → 320, Lv.3 → 480. Alcance de 8 casas. Prioriza remover somente veneno dos aliados. Veneno em raio 2, até 8 inimigos por 5s a 4 PV/s. Até 6 frascos, 30 de ouro cada no mercado ou guilda. Veneno em chefes tem limite; sem estoque ainda lança agulhas.
