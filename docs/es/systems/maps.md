---
title: "Mapas y Terreno"
---

El mapa del juego se renderiza usando una proyección isométrica 2:1 y soporta múltiples tipos de terreno.

---

## Especificaciones del Mapa

| Propiedad | Valor |
|-----------|-------|
| Tamaño predeterminado | 1000 x 1000 casillas |
| Rango ajustable | 250 ~ 1000 casillas |
| Tamaño de casilla | 256 píxeles |
| Proyección | Isométrica 2:1 (diamante) |

---

## Tipos de Terreno

| Terreno | Transitable | Coste de Movimiento | Altura Base | Generación de Enemigos |
|---------|-------------|---------------------|-------------|------------------------|
| **Pradera** | Sí | 1 | 0 | Rata gigante, Bandido, Arpía |
| **Bosque** | Sí | 2 | 0,5 | Limo, Zombi, Lobo huargo, Araña gigante, Cultista oscuro |
| **Montaña** | Sí | 3 | 5,0 | Goblin, Esqueleto, Dragón, Bruto orco, Arquero goblin, Trol |
| **Agua** | No | -- | -1,0 | -- |
| **Pueblo** | Sí | 1 | 0 | -- |
| **Camino** | Sí | 1 | 0 | -- |
| **Pantano** | Sí | 3 | -0,3 | -- |
| **Desierto** | Sí | 2 | 0,2 | Espectro de arena |
| **Barro** | Sí | 2 | -0,1 | -- |
| **Nieve** | Sí | 1 | 0,2 | Rata gigante, Bandido, Arpía |
| **Colinas** | Sí | 1 | 1,6 | Rata gigante, Bandido, Arpía |
| **Tierras baldías** | Sí | 2 | 0,3 | Espectro de arena |
| **Prado florido** | Sí | 1 | 0 | Rata gigante, Bandido, Arpía |

:::tip[Coste de Movimiento]
Los números más bajos significan movimiento más rápido. Camino y Pueblo tienen el menor coste de movimiento (1), mientras que Montaña y Pantano tienen el mayor (3). Hacer buen uso de los caminos puede mejorar enormemente la eficiencia de desplazamiento de los aventureros.
:::

---

## Niebla de Guerra

El mapa tiene tres capas de visibilidad:

| Estado | Brillo | Descripción |
|--------|--------|-------------|
| **Inexplorado** | 0 (totalmente oscuro) | Nunca visto por ningún aventurero o edificio |
| **Explorado** | 115 (gris oscuro) | Visto anteriormente pero no actualmente en línea de visión |
| **Visible** | 255 (totalmente iluminado) | Actualmente dentro de la línea de visión de un aventurero o edificio |

**Qué se dibuja y dónde.** Lo tuyo se dibuja siempre: edificios, héroes, aldeanos, recaudadores, caravanas y banderas de recompensa, también en terreno que nadie ve. Una guarida o unas ruinas antiguas se dibujan en cuanto se ha visto cualquier parte de ellas, y se quedan dibujadas. Desde entonces los héroes también conocen la guarida y pueden ir a por ella por su cuenta. Los monstruos solo se dibujan mientras un héroe los ve. Los portales de una grieta dimensional se dibujan como anillos de luz violeta en cuanto se ha visto su terreno.

### Fuentes de Visión

| Fuente | Rango de Visión |
|--------|-----------------|
| Castillo | 30 casillas |
| Aventurero (base) | 8 casillas |
| Mago (a distancia) | 12 casillas |
| Explorador (a distancia) | 11 casillas |
| Edificio defensivo (Torre de arqueros) | 16 casillas |
| Edificio regular | 7 casillas |
| Estructura de fortaleza enemiga | 10 casillas |

:::note[Visión de Aventureros a Distancia]
Los Magos y Exploradores ven exactamente hasta donde alcanzan sus ataques (12 y 11 casillas), para que los jugadores vean los objetivos que están atacando.
:::

---

## Generación de Mapas

Los mapas del modo libre se generan aleatoriamente usando el algoritmo **Value Noise**:

1. Generar ruido de terreno -> determinar tipos de terreno
2. Generar ruido de altura -> determinar variación de elevación
3. Colocar el Castillo -> establecer un área de Pueblo en un punto aleatorio de la mitad central del mapa
4. Dispersar cofres del tesoro -> max(10, 250 × W × H ÷ 1000²) cofres distribuidos por la naturaleza
5. Generar fortalezas enemigas -> colocadas lejos del Castillo

---

## Cofres del Tesoro

| Propiedad | Valor |
|-----------|-------|
| Cantidad inicial | max(10, 250 × W × H ÷ 1000²) |
| Rango de oro | 20 ~ 55o |
| Ubicación | Áreas transitables fuera de los Pueblos |

Los aventureros recogen automáticamente los cofres del tesoro al pasar sobre ellos. Con la habilidad de investigación "Sentido del tesoro", el oro se incrementa en un +50%. Un cofre abierto se queda donde estaba, con la tapa echada hacia atrás, durante dos minutos de juego y luego desaparece. No impide construir, y el edificio que se coloca encima lo retira.
