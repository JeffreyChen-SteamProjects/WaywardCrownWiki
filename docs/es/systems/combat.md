---
title: "Sistema de Combate"
---

El combate es completamente automático. Los aventureros y enemigos se enfrentan cada vez que están dentro del rango de ataque del otro.

---

## Flujo de Combate

1. **Detección** — Un aventurero detecta un enemigo dentro de su visión (se comprueba cada 2 ticks)
2. **Aproximación** — Si el enemigo es visible pero está fuera del rango de ataque, el aventurero lo persigue
3. **Ataque** — Una vez dentro del rango de ataque, ambos lados comienzan a luchar
4. **Resolución** — El daño se resuelve una vez cada 5 ticks

---

## Cálculo de Daño

### Aventurero Atacando Enemigo

| Tipo | Fórmula de Daño |
|------|-----------------|
| Cuerpo a cuerpo | `ATK × 2` (multiplicador de daño global) |
| A distancia | `ATK` (daño de proyectil, sin multiplicador aplicado) |

### Enemigo Atacando Aventurero

```
Daño = (ATK del Enemigo + aleatorio(0~2)) × 2
```

### Defensa

```
Daño Real = max(1, Daño - DEF)
```

### Evasión

| Fuente | Tasa de Evasión |
|--------|-----------------|
| Evasión base de aventureros | 10% + 1% × AGI (≤ 70%) |
| Evasión base enemiga | 5% |
| Habilidad "Evasión" del Explorador | +15% |
| Ladrón: Evasión | +10% |
| Ladrón: Danza de sombras | +18% |
| Explorador: Ruptura de viento | +25% |

---

## Sistema de Proyectiles

Cada unidad que combate a distancia dispara un proyectil propio, de modo que un disparo se reconoce por lo que vuela. Las demás clases combaten cuerpo a cuerpo aunque alcancen 3 casillas:

| Clase | Tipo de Proyectil |
|-------|-------------------|
| Explorador | Flecha (arrow) |
| Batidor | Jabalina (javelin) |
| Guardacaminos | Virote de ballesta (bolt) |
| Mago | Bola de fuego (fireball) |
| Adepto | Esquirla de luz (light_shard) |
| Arquero goblin (enemigo) | Flecha tosca (goblin_arrow) |
| Cultista oscuro (enemigo) | Orbe oscuro (dark_orb) |
| Dragón (enemigo) | Llamarada (dragon_flame) |

Los proyectiles viajan hacia el objetivo cada tick después de ser disparados y causan daño al impactar. Cada uno se dibuja según el rumbo en que vuela: el que sube por el mapa se ve por detrás y el que lo cruza, de lado.

---

## Torre de arqueros

La Torre de arqueros es un edificio defensivo automatizado:

| Propiedad | Valor |
|-----------|-------|
| Rango de ataque | 20 casillas |
| Daño base | 16 + 8 × (Lv − 1) |
| Escalado por mejora | Aumenta con el nivel |

Las Torres de arqueros atacan automáticamente al enemigo más cercano dentro de su rango.

---

## Recompensas de Experiencia

| Fuente | XP |
|--------|-----|
| Por golpe (goteo) | 1/5 de la XP de eliminación |
| Eliminar Limo | 10 XP |
| Eliminar Goblin | 25 XP |
| Eliminar Esqueleto | 40 XP |
| Eliminar Zombi | 60 XP |
| Eliminar Dragón | 150 XP |

:::note[XP por Goteo]
Cada vez que un aventurero golpea a un enemigo — ya sea cuerpo a cuerpo o con proyectil — recibe 1/5 de la XP de eliminación de ese enemigo. Esto asegura que los aventureros ganen experiencia incluso sin asestar el golpe final.
:::

---

## IA de Combate

### Condiciones de Huida del Aventurero

- HP < 30% (HP_CRITICAL)
- La probabilidad de huida está influenciada por el rasgo de personalidad Seguridad

### Uso de Pociones

| Condición | Comportamiento |
|-----------|----------------|
| HP < 30% | Usar poción urgentemente |
| HP < 50% | Usar poción |

### Prioridad de Objetivos del Enemigo

1. Aventureros en combate (no pacifistas)
2. Constructores (pacifistas)
3. Edificios amenazantes como Torres de arqueros
4. Castillo
5. Otros edificios
