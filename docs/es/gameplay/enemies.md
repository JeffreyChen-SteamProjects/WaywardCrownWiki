---
title: "Enemigos"
---

Los enemigos aparecen naturalmente en las zonas salvajes del mapa, amenazando a tus aventureros y tu castillo.

---

## Tipos de Enemigos

| Enemigo | HP | ATK | DEF | Velocidad | XP | Oro | Rango de Ataque | Visión | Terreno de Aparición | Nivel de Peligro |
|---------|-----|-----|-----|-----------|-----|------|-----------------|--------|---------------------|-----------------|
| **Limo** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Bosque | 1 |
| **Goblin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Montaña | 2 |
| **Esqueleto** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Montaña | 3 |
| **Zombi** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Bosque | 4 |
| **Dragón** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Montaña | 5 |
| **Lobo huargo** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Bosque | 2 |
| **Bruto orco** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Montaña | 4 |
| **Arquero goblin** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Montaña | 3 |
| **Espectro de arena** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Desierto | 3 |
| **Cultista oscuro** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Bosque | 3 |
| **Trol** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Montaña | 5 |
| **Araña gigante** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Bosque | 2 |
| **Rata gigante** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Pradera | 1 |
| **Bandido** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Pradera | 2 |
| **Arpía** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Pradera | 3 |

El Dragón, el Arquero goblin y el Cultista oscuro disparan proyectiles (llamaradas, flechas toscas y orbes oscuros); los demás golpean desde un máximo de 3 casillas.

A un enemigo le toca su turno una vez cada 4 ticks. Su velocidad le da un paso cada 3 ÷ velocidad turnos, redondeado hacia abajo (al menos 1), y todos los enemigos caminan además la mitad más rápido: esa espera se divide entre 1.5, la fracción pasa a los pasos siguientes y nunca baja de un turno. Así, hay un paso cada turno con velocidad 1.6 o más, tres pasos en 4 turnos con 1.1–1.4, uno cada 2 turnos con 0.8–1.0, tres en 8 turnos para el Trol y tres en 10 con 0.6.

### Rangos

A medida que crece tu gremio (aventureros más Mercados), algunos monstruos aparecen con un rango que multiplica sus estadísticas y recompensas. Como máximo una cuarta parte de los monstruos vivos tiene rango, salvo durante un Alzamiento monstruoso, en el que todos los que aparecen son al menos veteranos.

| Rango | Desde un tamaño de gremio de | Probabilidad | HP | ATK | DEF | XP | Oro | Visión |
|-------|------------------------------|--------------|----|-----|-----|----|-----|--------|
| **Veterano** | 8 | 16% | ×1.5 | ×1.25 | ×1.2 | ×1.6 | ×1.8 | +2 |
| **De élite** | 22 | 8% | ×2.5 | ×1.6 | ×1.5 | ×2.5 | ×3 | +4 |
| **Campeón** | 45 | 3% | ×4.5 | ×2.2 | ×2 | ×4 | ×6 | +6 |

---

## Comportamiento Enemigo

### Merodeo

- Los enemigos deambulan cerca de su punto de aparición
- Tienen un rango de visión y perseguirán activamente a los aventureros que detecten
- En cada tick una cuarta parte de los enemigos (en grupos rotativos) ejecuta su lógica de merodeo, así que cada uno se actualiza como mucho cada 4 ticks

### Prioridad de Objetivos

Los enemigos atacan objetivos en el siguiente orden:

1. **Aventureros listos para combate** (no pacifistas)
2. **Constructores** (aventureros pacifistas)
3. **Torres de arqueros** (edificios amenazantes)
4. **Castillo**
5. **Otros edificios**

### Ruta de Invasión

Cuando se activa un evento de invasión, los enemigos se dirigen directamente al castillo del jugador por el camino más corto.

---

## Aparición de Enemigos

| Ajuste | Valor |
|--------|-------|
| Intervalo de aparición | 35 segundos de tiempo de juego, 1 segundo menos por cada aventurero o Mercado, como mínimo 5 segundos (la mitad en los niveles de campaña de Defensa) |
| Cantidad máxima | `(adventurers + Markets) × 2` (ajustable en configuración de dificultad), que se reduce a medida que se arrasan Fortalezas Enemigas, hasta un mínimo del 25% |
| Mínimo base | Al menos 6 enemigos |

Los enemigos aparecen según el **tipo de terreno**:

- **Bosque** — Limos, Zombis, Lobos huargos, Cultistas oscuros, Arañas gigantes
- **Montaña** — Goblins, Esqueletos, Dragones, Brutos orcos, Arqueros goblin, Troles
- **Pradera** — Ratas gigantes, Bandidos, Arpías
- **Desierto** — Espectros de arena

:::note[Dragones]
Los dragones y los troles son los enemigos más peligrosos (nivel de peligro 5). Con un rango de ataque de 16, 550 HP y llamaradas como proyectiles, lo mejor es enfrentar a los dragones con aventureros a distancia y torres de arqueros; el Trol tiene más HP y ataque, pero debe acercarse.
:::

---

## Mecánicas Especiales del Dragón

- **Ataque a Distancia**: Rango de ataque de 16, escupe llamaradas
- **Alta Movilidad**: Velocidad de 1.4, tres pasos cada 4 turnos: tan rápido como las Ratas gigantes, las Arañas gigantes y los Bandidos; solo las Arpías y los Lobos huargos (un paso por turno) son más rápidos
- **Visión Amplia**: Rango de visión de 32 casillas, capaz de detectar aventureros desde gran distancia
- **Evasión**: Todos los enemigos tienen una tasa de esquiva base del 5%

**Presiones**: tres amenazas nacen de cómo se lleva el reino, no de una guarida. Cada una se anuncia un minuto antes en la crónica y en el resumen, envía una manada de 3 (nunca más de 6 de sus monstruos vivos, sea cual sea vuestra fuerza) y se cancela cuando se corrige su causa. *Suciedad*: un pueblo de 16 edificios sin fuente ni jardín atrae ratas gigantes; cada fuente o jardín responde por 6 edificios. *Los muertos sin reposo*: 3 héroes muertos sin templo se alzan como esqueletos donde cayó el último; un templo, o revivirlos, los mantiene en tierra, y un reino de la senda de los No muertos con un Osario los toma como guardias. *Lo salvaje*: un edificio a más de 60 casillas del castillo sin torre de flechas ni puesto de guardia a 12 atrae lobos terribles; los puestos comerciales no cuentan, ni los campamentos de un reino Salvaje. Nada presiona a un reino en sus primeros 5 minutos, ni en un nivel que no permite el edificio que lo remedia. Los campamentos de guerra orcos atacan lo que se construye: la obra o mejora en curso más cercana.
