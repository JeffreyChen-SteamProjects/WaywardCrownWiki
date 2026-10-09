---
title: "Aventureros"
---

Los aventureros son el corazón del juego. Tienen voluntad propia y toman decisiones basadas en su personalidad, necesidades y estado actual.

---

## Resumen de Clases

| Clase | Stat Principal | Ataque Escala Con | Rango de Ataque | Edificio de Reclutamiento | Rasgos |
|-------|---------------|-------------------|-----------------|---------------------------|--------|
| **Guerrero** | STR | Fuerza | 3 | Cuartel | Alto HP, alto ataque, lucha de cerca |
| **Mago** | INT | Inteligencia | 12 | Torre del mago | Ataques mágicos a distancia, bajo HP |
| **Explorador** | AGI | Agilidad | 11 | Refugio del explorador | Ataques con arco a distancia, alta curiosidad |
| **Guardia** | STR | Fuerza | 3 | Puesto de guardia | Patrulla edificios, nunca abandona su puesto |
| **Constructor** | AGI | — | 3 | Gremio de Constructores | Repara edificios, pacifista (no lucha) |
| **Ladrón** | AGI | Agilidad | 3 | Gremio de ladrones | Codicioso y evasivo, bajo HP |

:::note[Rango de ataque]
El Explorador (flechas), el Mago (bolas de fuego), el Batidor (jabalinas), el Guardacaminos (virotes de ballesta) y el Adepto (esquirlas de luz) atacan con proyectiles, cada uno con el suyo. Las demás clases que luchan combaten cuerpo a cuerpo: golpean desde hasta 3 casillas de distancia y hacen el doble de daño.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Todas las clases de héroe del juego, escritas a partir de sus datos: las seis que recluta cualquier reino y las que reclutan los edificios propios de una senda del castillo.

| Clase | Senda del castillo | Se recluta en | Salud | Ataque | Alcance de ataque | Habilidades |
|---|---|---|---|---|---|---|
| **Guerrero** | — | Cuartel | 70–150 | FUE | 3 | Golpe poderoso, Muro de escudos, Berserker, Señor de la guerra, Grito de guerra |
| **Mago** | — | Torre del mago | 25–65 | INT | 12 | Dardo de fuego, Escudo de maná, Rayo encadenado, Archimago, Tornado de fuego |
| **Explorador** | — | Refugio del explorador | 45–100 | AGI | 11 | Disparo preciso, Evasión, Disparo múltiple, Ojo de águila, Ruptura de viento |
| **Guardia** | — | Puesto de guardia | 50–120 | FUE | 3 | Vigilancia, Fortificar, Provocar, Bastión |
| **Constructor** | — | Gremio de Constructores | 30–70 | — | 3 | Reparación rápida, Reforzar, Maestría artesana, Arquitecto |
| **Ladrón** | — | Gremio de ladrones | 35–80 | AGI | 3 | Puñalada trapera, Evasión, Carterista, Danza de sombras |
| **Caballero del Escudo** | Guardián | Bastión | 90–170 | FUE | 3 | Vigilancia, Muro de escudos, Provocar, Bastión, Escudo del Juramento, Juramento del Sustituto, Al Rescate |
| **Hospitalario** | Guardián | Santuario | 50–100 | INT | 3 | Vigilancia, Escudo de maná, Fortificar, Bastión, Plegaria Sanadora |
| **Batidor** | Tierras salvajes | Campamento salvaje | 50–105 | AGI | 11 | Disparo preciso, Evasión, Disparo múltiple, Ojo de águila, Marca del Cazador |
| **Guardián de Bestias** | Tierras salvajes | Refugio de Bestias | 65–135 | FUE | 3 | Golpe poderoso, Evasión, Berserker, Ojo de águila, Ataque del Halcón, Rastreo de Senda, Compañero Bestia, Cobertura del Compañero, Auxilio Herbal |
| **Caballero Sepulcral** | No muerto | Osario | 95–175 | FUE | 3 | Golpe poderoso, Muro de escudos, Berserker, Señor de la guerra, Armadura de Hueso |
| **Nigromante** | No muerto | Cripta | 40–90 | INT | 3 | Dardo de fuego, Escudo de maná, Rayo encadenado, Archimago, Sello Marchito, Guardia de Huesos, Deuda del Alma |
| **Alguacil** | Orden | Alguacilazgo | 80–155 | FUE | 3 | Vigilancia, Muro de escudos, Provocar, Señor de la guerra, Cerco, Orden de Formar, Ronda de Alarma |
| **Guardacaminos** | Orden | Puesto de Peaje | 55–115 | AGI | 10 | Disparo preciso, Evasión, Disparo múltiple, Ojo de águila, Escolta de Convoy |
| **Juramentado** | Valor | Salón de Guerra | 85–165 | FUE | 3 | Golpe poderoso, Evasión, Berserker, Señor de la guerra, Golpe Desgarrador, Asalto a los Muros, Frenesí de Sangre |
| **Abanderado** | Valor | Intendencia | 70–140 | FUE | 3 | Golpe poderoso, Muro de escudos, Provocar, Señor de la guerra, Rugido Indomable |
| **Espadachín Arcano** | Arcano | Academia | 60–125 | INT | 3 | Dardo de fuego, Evasión, Rayo encadenado, Archimago, Luz Desgarradora, Paso de Fase, Réplica Rúnica |
| **Adepto** | Arcano | Aguja | 40–88 | INT | 11 | Dardo de fuego, Escudo de maná, Rayo encadenado, Archimago, Guarda Rúnica |
| **Escolta** | Comercio | Gremio Mercantil | 80–150 | FUE | 3 | Vigilancia, Muro de escudos, Provocar, Bastión, Guardia de la Carga, Marcha Forzada, Servicio de Escolta |
| **Caravanero** | Comercio | Depósito | 55–115 | AGI | 3 | Disparo preciso, Evasión, Disparo múltiple, Ojo de águila, Marca de Ruta |
| **Inquisidor** | Tiranía | Tribunal | 65–130 | INT | 3 | Dardo de fuego, Escudo de maná, Provocar, Archimago, Marca del Terror, Juramento de Hierro |
| **Ejecutor** | Tiranía | Oficina de Tributos | 90–170 | FUE | 3 | Golpe poderoso, Muro de escudos, Berserker, Señor de la guerra, Veredicto de Cadenas |
<!-- hero-classes:end -->

---

## Estadísticas Detalladas

### Guerrero

| Stat | Rango |
|------|-------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Tendencias de Personalidad**: Alta Gloria (0.5–1.0), Codicia moderada (0.2–0.8), baja Curiosidad (0.0–0.2)

**Árbol de Habilidades**:

| Nivel | Habilidad | Efecto |
|-------|-----------|--------|
| 3 | Golpe poderoso | Ataque ×1.15 |
| 6 | Muro de escudos | Defensa +5 |
| 10 | Berserker | Ataque ×1.3, HP ×0.9 |
| 15 | Señor de la guerra | Ataque ×1.5, Defensa +8 |

### Mago

| Stat | Rango |
|------|-------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Tendencias de Personalidad**: Alta Seguridad (0.3–0.9), Curiosidad moderada (0.1–0.3)

**Árbol de Habilidades**:

| Nivel | Habilidad | Efecto |
|-------|-----------|--------|
| 3 | Dardo de fuego | Ataque +5 |
| 6 | Escudo de Maná | Defensa +4 |
| 10 | Rayo encadenado | Ataque ×1.4 |
| 15 | Archimago | Ataque ×1.6, Ataque +8 |

### Explorador

| Stat | Rango |
|------|-------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Tendencias de Personalidad**: Curiosidad muy alta (0.7–1.0), baja Seguridad (0.0–0.4)

**Árbol de Habilidades**:

| Nivel | Habilidad | Efecto |
|-------|-----------|--------|
| 3 | Disparo preciso | Ataque +4 |
| 6 | Evasión | Tasa de esquiva +15% |
| 10 | Disparo múltiple | Ataque ×1.35 |
| 15 | Ojo de águila | Ataque ×1.5, Tasa de crítico +20% |

### Guardia

| Stat | Rango |
|------|-------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Tendencias de Personalidad**: Seguridad muy alta (0.5–1.0), sin Curiosidad

**Comportamiento Especial**: Asignado automáticamente a patrullar edificios; no abandonará su puesto para perseguir enemigos lejanos.

**Árbol de Habilidades**:

| Nivel | Habilidad | Efecto |
|-------|-----------|--------|
| 3 | Vigilancia | Defensa +3 |
| 6 | Fortificar | HP ×1.2 |
| 10 | Provocar | Defensa +6, Ataque +3 |
| 15 | Bastión | HP ×1.4, Defensa +10 |

### Constructor

| Stat | Rango |
|------|-------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Tendencias de Personalidad**: Seguridad muy alta (0.8–1.0), sin Curiosidad, sin Gloria

**Comportamiento Especial**: Pacifista — nunca entrará en combate. Viaja automáticamente a edificios dañados para repararlos.

**Árbol de Habilidades**:

| Nivel | Habilidad | Efecto |
|-------|-----------|--------|
| 3 | Reparación rápida | Velocidad de reparación ×1.3 |
| 6 | Reforzar | Velocidad de reparación ×1.5 |
| 10 | Maestría artesana | Velocidad de reparación ×2.0 |
| 15 | Arquitecto | Velocidad de reparación ×2.5, HP ×1.3 |

### Ladrón

| Stat | Rango |
|------|-------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Tendencias de Personalidad**: Codicia muy alta (0.75–1.0), alta Seguridad (0.5–1.0), Curiosidad moderada (0.3–0.7), baja Gloria (0.0–0.3)

**Comportamiento Especial**: Su defensa es la esquiva (10% + 1% por AGI) más que el HP, y su codicia lo empuja hacia las recompensas mejor pagadas.

**Árbol de Habilidades**:

| Nivel | Habilidad | Efecto |
|-------|-----------|--------|
| 3 | Puñalada trapera | Tasa de crítico +12% |
| 6 | Evasión | Tasa de esquiva +10% |
| 10 | Carterista | Tasa de crítico +20%, Ataque ×1.15 |
| 15 | Danza de sombras | Tasa de esquiva +18%, Ataque ×1.35 |

---

## Sistema de Estados

Los aventureros transitan entre los siguientes estados:

```
IDLE
  ├─→ MOVING_TO_BOUNTY
  ├─→ EXPLORING
  ├─→ PATROLLING
  ├─→ REPAIRING — Solo Constructor
  └─→ FIGHTING
        └─→ RETURNING
              └─→ LODGING
                    └─→ IDLE
```

---

## Sistema de Alojamiento

- Los aventureros van a descansar y curarse cuando tienen pocos PV, al lugar más cercano con sitio: su propio gremio, una posada, un campamento salvaje o el castillo. Entre lugares casi igual de cercanos, su gremio va primero (cuenta 8 casillas más cerca) y el castillo al final (8 casillas más lejos); quien huye para salvar la vida toma lo que tenga más cerca
- Los aventureros alojados entran en el estado **LODGING**: desaparecen del mapa y se vuelven invulnerables
- Cada edificio puede alojar hasta **3** huéspedes
- Si un edificio es destruido, todos los huéspedes en su interior son liberados inmediatamente
- Los aventureros abandonan el alojamiento automáticamente una vez que su HP se restaura por completo

---

## Sistema de Nivelación

| Elemento | Descripción |
|----------|-------------|
| Nivel máximo | 20 |
| XP base | 40 XP (para alcanzar Nv. 2) |
| Fórmula de XP | `40 × 1.6^(level-1)` |
| XP por eliminación | Varía según el tipo de enemigo (10 – 160 XP) |
| XP por golpe | Cada golpe otorga 1/5 de la XP de eliminación |
| Baja compartida | El oro y la XP de una baja se reparten sin añadir nada: el héroe que dio el último golpe se queda con el 60 % cuando otros participan, y el resto va a partes iguales a un máximo de 3 héroes que luchan en 6 casillas o que, en 10 casillas, atendieron a otro héroe en los últimos 30 segundos |
| XP de recompensa | Exploración 15 XP, Defensa 25 XP, Eliminación 30 XP |

Al subir de nivel, las estadísticas primarias y secundarias aumentan junto con el HP.

**Árbol de habilidades**: las habilidades de una clase son un árbol, no un número fijo de huecos: cada habilidad tiene el nivel en que se aprende y puede requerir otras antes, y un árbol es tan grande como habilidades tenga su clase. Un héroe aprende toda habilidad que su nivel y lo ya aprendido permitan. Su panel muestra el árbol: en negrita lo que tiene, en gris lo que está por venir con el nivel en que llega, cada una bajo la habilidad que requiere. Una habilidad marcada (activa) la lanza el héroe por sí mismo; las demás cambian sus números para siempre.

---

## Sistema de Personalidad

Cada aventurero tiene cuatro valores de personalidad (0.0 – 1.0) que influyen en si aceptan recompensas:

| Rasgo | Efecto |
|-------|--------|
| **Codicia (gold)** | Valores más altos significan que el aventurero se preocupa más por la recompensa |
| **Seguridad (safety)** | Valores más altos significan que el aventurero evita el peligro |
| **Gloria (glory)** | Valores más altos significan que el aventurero prefiere misiones de combate |
| **Curiosidad (curiosity)** | Valores más altos significan que el aventurero prefiere la exploración |

**Fórmula de Atracción de Recompensa**:

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- Un marcador de **Advertencia** nunca se acepta
- Una recompensa inferior a **nivel × 20** de oro se rechaza de entrada
- Los Guardias nunca aceptan recompensas: patrullan la ciudad en su lugar
- Los héroes por debajo del nivel 8 rechazan las recompensas dentro de una zona de advertencia
- Un aventurero acepta la recompensa con mayor puntuación, si esta supera 0.1

---

## La vida propia de los héroes

Un héroe sin nada que hacer compara todo lo que tiene a su alcance y elige lo mejor: una misión, un recado en la ciudad o explorar.

- **Recados**: comprar mejor equipo en la herrería, reponer pociones en el mercado, estudiar en la biblioteca, pasar una velada en la posada (15 de oro; una fuente o un jardín es gratis) o volver a casa cuando está herido o cansado. Cada uno requiere el edificio, el oro y una necesidad real, y el héroe camina hasta ese edificio para hacerlo.
- **Compromiso**: un héroe termina el viaje que empezó. Solo abandona una exploración, pasados 150 ticks, por algo claramente mejor. El peligro sigue siendo lo primero: un héroe malherido va al lugar de descanso más cercano.
- **Fortalezas**: desde el nivel 3, los héroes audaces marchan por su cuenta contra las fortalezas enemigas conocidas cuando se atreven con una a solas; los ladrones las saquean.
- **Apoyo**: un héroe cuya clase atiende a otros (cura, protege, anima o los cubre) y que no tiene trabajo propio camina con un grupo: el héroe más cercano en 30 casillas que va hacia el trabajo de una recompensa o una marcha, o que está en combate, y cuyo trabajo se atreve a afrontar con ese grupo. Lo sigue cuando se mueve y lo deja cuando el grupo muere, se detiene o vuelve a casa, cuando él mismo está herido o tras 2 minutos.
- **Memoria**: un héroe guarda algunas cosas que le pasaron, cada una durante unos minutos. Aquel cuyo gremio fue atacado valora un 30 % más las recompensas de defensa; aquel a quien otro héroe ayudó estando malherido, o que cobró una recompensa junto a otro, valora más una recompensa que tenga ese héroe; aquel que volvió a casa malherido, o vio caer a un héroe así, quiere mejores probabilidades a 12 casillas del lugar. El panel del héroe muestra lo que recuerda.
- **Un gremio perdido**: un héroe cuyo gremio es destruido o demolido no se pierde. Se muda por sí mismo al edificio más cercano que reclute su clase y tenga sitio, incluido un gremio reconstruido. Hasta entonces el castillo lo cobija: 3 héroes por cada nivel del castillo durante 5 minutos, los demás durante 100 segundos. Si se le acaba el tiempo, deja el reino con lo que lleva; el registro y la crónica lo avisan antes, y su panel cuenta los segundos.
- **Inclinaciones de clase**: cada clase tiene sus costumbres. Los guerreros luchan hasta quedar malheridos y les gusta asaltar fortalezas; los magos se quedan cerca de la ciudad, se retiran pronto y les gusta estudiar; los exploradores viajan lejos y prefieren las misiones de exploración; los ladrones van a por la misión mejor pagada y roban en fortalezas; los guardias y los constructores se quedan en la ciudad. La cautela y la curiosidad de cada héroe lo matizan un poco, y su panel muestra sus inclinaciones. El radio de cada héroe también es propio: cuanto más audaz y curioso es, más se aleja del castillo, de modo que dos héroes de la misma clase no se quedan en el mismo terreno. El héroe busca primero la tierra desconocida dentro de su radio; cuando no queda ninguna, se aleja un poco más y cruza hasta el otro lado de su radio en lugar de dar vueltas alrededor del pueblo.
- **Leer a un héroe**: el panel de un héroe dice qué hace y por qué, adónde va, qué necesita y cuál es su postura ante cada misión abierta: en camino, ocupado o el motivo por el que la rechazó, con la recompensa que le haría cambiar de idea. El panel de una misión agrupa a los héroes por esos motivos, los más fáciles de convencer primero. El panel termina con el historial del héroe, sus ocho últimos hechos con la hora de juego de cada uno: el equipo que compró y lo que estudió, las misiones que aceptó y lo que lo decidió (la paga, otros que ya estaban en ella o lo que recuerda), lo que cobró y junto a quién, quién acudió en su ayuda cuando estaba malherido y cuándo volvió a casa.
