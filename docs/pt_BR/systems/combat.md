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
