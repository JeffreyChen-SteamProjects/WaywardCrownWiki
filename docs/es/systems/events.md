---
title: "Eventos Aleatorios"
---

El juego activa eventos aleatorios a intervalos regulares, añadiendo imprevisibilidad a la partida. La intensidad de los eventos escala dinámicamente según el número de aventureros. El tutorial integrado nunca lanza un terremoto ni un evento que ponga una estructura nueva en el mapa.

Las tarjetas de préstamo muestran una carta sellada; cada invitación nueva emite una sola señal suave, según el volumen de efectos. La pestaña Sucesos del reino del panel de registros muestra invitaciones y préstamos pendientes sin pausar el juego. Las tarjetas de préstamo indican el capital que se paga de inmediato, el plazo, los reembolsos y la pérdida máxima; rechazar o ignorar una invitación es gratis. Los editores de mapas y campañas guardan los grupos de sucesos: los ajustes del nivel tienen prioridad sobre los de la campaña y después los del mapa, y heredar no equivale a desactivar todos los grupos. Por ahora solo el grupo «Economía y servicios» añade un suceso aleatorio, la feria de la cosecha; los demás grupos todavía no añaden ninguno. Las tarjetas de préstamo se ajustan al ancho de la barra lateral y permiten desplazarse verticalmente para leer todas las condiciones.

Si hay un préstamo pendiente, la vista previa del siguiente nivel separa el tesoro actual, el capital devuelto sin intereses y el oro previsto para transferir. Se aplica la regla del nivel de destino; la vista previa no realiza pagos.

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

## Feria de la cosecha

Con el grupo «Economía y servicios» activado, una feria de la cosecha puede llegar a una de tus casas de aldea. Te avisan 20 segundos antes y se queda abierta 120 segundos. No hace falta mandar a nadie: los héroes heridos, cortos de pociones o con ganas de una noche libre van por su cuenta, siempre que nada más los retenga (una pelea, una bandera, un grupo al que esperan). Atiende a cuatro a la vez. Cada cliente descansa 5 segundos y recupera 40 PV gratis, compra las pociones que le faltan al precio de siempre (la feria trae 24 para toda su estancia) y paga una noche libre si le apetece. El héroe que se va antes no paga nada. Mientras está abierta, puedes alargarla una vez 60 segundos por 150 de oro; las pociones no se reponen. Su tarjeta en Sucesos del reino muestra cuándo abre y cierra, quién está en los puestos y cuántas pociones quedan, y Mostrar te lleva allí cuando ya has visto el sitio.

---

## Día, noche y clima

Una partida libre puede empezar con el día en marcha, con clima o con ambos; cada uno se marca por separado y ninguno es un evento: no hay nada que responder.

- **Un día** dura 8, 12 o 16 minutos de juego, a elegir: amanecer, día, atardecer y noche. La barra superior indica el día, su parte y el clima, y su descripción dice qué viene después y cuándo. El pronóstico siempre se cumple.
- **La lluvia y las tormentas** detienen a quien camina fuera de los caminos, héroe o monstruo, un turno de cada diez como mucho. En los caminos se anda en seco.
- **La neblina y la noche** acortan lo que ven héroes y edificios en una cuarta parte como mucho. Cerca del castillo y de los edificios del reino las ventanas están encendidas y la noche no quita nada; un arquero nunca ve menos de lo que alcanza a disparar.
- **El viento** quita una décima parte del daño de flechas, virotes y jabalinas. A los hechizos no los mueve el viento.
- **Una tormenta de arena o una niebla densa** ocupan el lugar del clima donde mandan sobre lo mismo: nunca se suman.
- **Los monstruos tienen sus horas.** Esqueletos, zombis, espectros, cultistas, arañas y ratas van lentos de día; goblins, orcos, bandidos, arpías y la infantería de la legión, de noche. Trolls, lobos y el dragón no tienen horas.
- **Visto por última vez.** Un monstruo que sale de la vista de tu reino deja un signo de interrogación que se desvanece donde se le vio por última vez. Es una marca, no el monstruo: desaparece cuando se le vuelve a ver o se mira el lugar.

## Estrategias de Afrontamiento

:::tip[Eventos de Amenaza]
- Mantén una defensa permanente de Guardias y Torres de arqueros en todo momento
- Durante eventos de invasión, asegúrate de tener suficiente poder de combate alrededor del Castillo
- Envía expediciones de recompensa para destruir Nidos de Dragones y Gremios rebeldes lo antes posible
- Ambos aparecen marcados en el mapa en cuanto surgen: haz clic en uno para ver su vida y ponle una misión «Matar» para enviar héroes a arrasarlo
:::

:::tip[Aprovechamiento de Beneficios]
- Durante EXP doble, haz que tus aventureros luchen tanto como sea posible para subir de nivel
- Durante Frenesí constructor, aprovecha la oportunidad para expandirte
- Durante Oleada de Reclutamiento, asegúrate de tener suficientes edificios de reclutamiento disponibles
:::