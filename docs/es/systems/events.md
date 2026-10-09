---
title: "Eventos Aleatorios"
---

El juego activa eventos aleatorios a intervalos regulares, añadiendo imprevisibilidad a la partida. La intensidad de los eventos escala dinámicamente según el número de aventureros. El tutorial integrado nunca lanza un terremoto ni un evento que ponga una estructura nueva en el mapa.

---

## Reglas de Activación de Eventos

| Ajuste | Valor |
|--------|-------|
| Período de gracia inicial | 1500 ticks (~5 minutos) |
| Intervalo de comprobación | Cada 300 ticks |
| Probabilidad de activación | 60% |
| Tiempo de espera entre eventos | 600 ticks (~2 minutos) |

---

## Eventos de Amenaza

Estos ejercen presión sobre el jugador durante su duración y requieren una respuesta activa.

| Evento | Duración | Peso | Efecto |
|--------|----------|------|--------|
| **Invasión de monstruos** | 250 | 2 | ¡Los enemigos avanzan en masa hacia el castillo! |
| **Peste** | 200 | 0 | Todos los héroes reciben daño periódico |
| **Luna de sangre** | 350 | 2 | Los enemigos se vuelven más fuertes y agresivos |
| **Asalto de los no muertos** | 300 | 2 | Esqueletos y zombis aparecen cerca del castillo |
| **Incursión goblin** | 250 | 2 | Los goblins atacan tiendas y roban oro |
| **Despertar del nido de dragones** | 450 | 1 | Aparece un nido de dragones que engendra dragones. ¡Destrúyelo! |
| **Noche maldita** | 300 | 2 | Enemigos más rápidos, pero el doble de EXP por matar |
| **Terremoto** | Instantáneo | 1 | Los edificios y el castillo reciben mucho daño y los caminos se destruyen |
| **Traidor** | Instantáneo | 1 | ¡Un héroe aleatorio traiciona al gremio y se vuelve enemigo! El traidor queda marcado como de élite en el mapa. |
| **Gremio rebelde** | 400 | 2 | Aparece un gremio hostil que engendra enemigos. ¡Destrúyelo! |
| **Inflación** | 350 | 1 | El precio de pociones y equipo sube un 50% |
| **Sello de maná** | 250 | 1 | Los magos pierden todo su poder de ataque |
| **Tormenta de arena** | 300 | 2 | Velocidad de movimiento y daño a distancia reducidos a la mitad |
| **Niebla densa** | 250 | 1 | La niebla de guerra vuelve a cubrir el mapa, visión reducida |
| **Infiltración de espías** | 350 | 2 | Oleadas de enemigos disfrazados de héroes corren al castillo |
| **Lluvia corrosiva** | 300 | 2 | Los edificios pierden PV cada tick (cerca de la mitad de sus PV máximos durante toda la lluvia), velocidad de reparación a la mitad |
| **Maldición de las almas** | 300 | 1 | ¡Los héroes caídos se levantan como zombis! |
| **Deterioro del equipo** | Instantáneo | 1 | Todos los héroes pierden 1 nivel de equipo |
| **Borrado de memoria** | Instantáneo | 1 | ¡Todos los héroes pierden 2 niveles! |
| **Deserción** | Instantáneo | 1 | ¡Una quinta parte de los héroes (al menos uno) abandona el gremio! |
| **Armas malditas** | 120 | 2 | Los héroes reciben un 30% de daño propio al atacar |
| **Desafío del campeón** | Instantáneo | 2 | Un monstruo campeón acecha tus tierras. Peligroso, y muy lucrativo |
| **Alzamiento monstruoso** | 350 | 2 | Todo monstruo que aparezca ahora es veterano o peor |

---

## Eventos de Beneficio

Estos otorgan al jugador beneficios o mejoras.

| Evento | Duración | Peso | Efecto |
|--------|----------|------|--------|
| **Lluvia de tesoros** | 150 | 1 | Aparecen cofres extra por todo el mapa |
| **Subida de impuestos** | 350 | 1 | Tasa de impuestos aumentada al 30% |
| **Frenesí constructor** | 300 | 1 | Coste de construcción a la mitad, velocidad de reparación duplicada |
| **Bendición del templo** | 300 | 1 | Todos los héroes se curan lentamente en cualquier lugar |
| **EXP doble** | 350 | 1 | Toda la EXP ganada se duplica |
| **Oleada de reclutamiento** | 300 | 1 | Velocidad de reclutamiento duplicada, capacidad de edificios +1 |
| **Descenso del Dios de la guerra** | 300 | 1 | Todos los héroes ganan +50% de ATQ |
| **Muro de hierro** | 300 | 1 | Edificios y castillo reciben la mitad del daño |
| **Orden de marcha** | 250 | 1 | Todos los héroes se mueven más rápido |
| **Estrellas de la suerte** | 300 | 1 | El oro y la EXP de los enemigos se duplican |
| **Mercado negro** | 300 | 1 | Sin ingresos por impuestos, pero el precio del equipo baja un 30% |
| **Refuerzos aliados** | 350 | 1 | Aliados de alto nivel se unen temporalmente al combate |
| **Bendición de la forja** | 300 | 1 | El equipo de todos los héroes sube un nivel |
| **Barrera sagrada** | 300 | 0 | Los enemigos son repelidos del castillo |
| **Sabiduría compartida** | 300 | 1 | El 30% de la EXP ganada se comparte con todos los héroes |
| **Distorsión del tiempo** | 300 | 1 | ¡Todos los temporizadores corren al doble de velocidad, incluidos los enemigos! |

---

## Eventos Instantáneos

Surten efecto inmediatamente sin duración.

| Evento | Peso | Efecto |
|--------|------|--------|
| **Mutación de élite** | 1 | ¡Un enemigo aleatorio muta en una poderosa élite! Queda marcado como de élite en el mapa. |
| **Aventurero perdido** | 1 | Un héroe de alto nivel llega desde tierras salvajes |
| **Rueda de la fortuna** | 1 | ¡Se desencadena un evento aleatorio! |
| **Despertar heroico** | 1 | ¡Un héroe aleatorio despierta permanentemente como héroe verdadero! |
| **Mapa del tesoro** | 1 | Revela una zona oculta y genera valiosos cofres |
| **Destinos entrelazados** | 1 | Dos héroes aleatorios intercambian todos sus atributos |
| **Arsenal divino** | 1 | Varios héroes reciben equipo del nivel máximo |
| **Edad de oro** | 1 | Recibe oro según el número de edificios |
| **Dispersión** | 1 | Todos los héroes son teletransportados a lugares aleatorios |
| **Fortificación** | 1 | Todos los edificios se curan por completo, PV máx. +20% |
| **Fuente de la vida** | 1 | Todos los héroes se curan por completo, PV máx. +10% |
| **Ruleta de atributos** | 1 | Los atributos de cada héroe se barajan al azar |
| **Mezcla de niveles** | 1 | Los niveles de todos los héroes se redistribuyen al azar |
| **Clonación** | 1 | ¡Un héroe aleatorio se duplica! |
| **Bienvenida de héroes** | 1 | Los bardos cantan sobre tu gremio: un golpe de renombre |

---

## Eventos de Estructura

Generan estructuras persistentes en el mapa.

| Evento | Duración | Efecto |
|--------|----------|--------|
| **Despertar del nido de dragones** | 450 | Aparece un nido de dragones que engendra dragones. ¡Destrúyelo! |
| **Gremio rebelde** | 400 | Aparece un gremio hostil que engendra enemigos. ¡Destrúyelo! |
| **Ruinas antiguas** | 450 | ¡Aparecen ruinas en el mapa. El primero en llegar se lleva la recompensa! |
| **Grieta dimensional** | 300 | Aparecen portales que teletransportan a los héroes al azar |

---

## Estrategias de Afrontamiento

:::tip[Eventos de Amenaza]
- Mantén una defensa permanente de Guardias y Torres de arqueros en todo momento
- Durante eventos de invasión, asegúrate de tener suficiente poder de combate alrededor del Castillo
- Envía expediciones de recompensa para destruir Nidos de Dragones y Gremios rebeldes lo antes posible
:::

:::tip[Aprovechamiento de Beneficios]
- Durante EXP doble, haz que tus aventureros luchen tanto como sea posible para subir de nivel
- Durante Frenesí constructor, aprovecha la oportunidad para expandirte
- Durante Oleada de Reclutamiento, asegúrate de tener suficientes edificios de reclutamiento disponibles
:::