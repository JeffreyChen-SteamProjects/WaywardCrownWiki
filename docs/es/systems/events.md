---
title: "Eventos Aleatorios"
---

El juego activa eventos aleatorios a intervalos regulares, añadiendo imprevisibilidad a la partida. La intensidad de los eventos escala dinámicamente según el número de aventureros. El tutorial integrado nunca lanza un terremoto ni un evento que ponga una estructura nueva en el mapa.

Las tarjetas de préstamo muestran una carta sellada; cada invitación nueva emite una sola señal suave, según el volumen de efectos. La pestaña Sucesos del reino del panel de registros muestra invitaciones y préstamos pendientes sin pausar el juego. Las tarjetas de préstamo indican el capital que se paga de inmediato, el plazo, los reembolsos y la pérdida máxima; rechazar o ignorar una invitación es gratis. Los editores de mapas y campañas guardan los grupos de sucesos: los ajustes del nivel tienen prioridad sobre los de la campaña y después los del mapa, y heredar no equivale a desactivar todos los grupos. Cada grupo añade sus propios sucesos aleatorios (consulta Grupos de sucesos más abajo); un nivel sin ningún grupo solo tiene los sucesos de siempre. Las tarjetas de préstamo se ajustan al ancho de la barra lateral y permiten desplazarse verticalmente para leer todas las condiciones.

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

## Grupos de sucesos

Un mapa, una campaña o un nivel pueden activar en el editor cualquiera de los cinco grupos de sucesos. Cada grupo suma los sucesos de abajo a los de siempre, con la misma tirada y al mismo ritmo, y rechazar o ignorar una oferta nunca cuesta nada. Pasa el cursor sobre un grupo en el editor para ver sus sucesos.

## Grupo «Economía y servicios»

### Solicitud de préstamo real

Con el grupo «Economía y servicios» activado, la corte real de un reino vecino puede pedirte prestado de tu tesoro, pero solo mientras tengas al menos 400 de oro. La cantidad queda fijada cuando llega la petición: la mitad de tu tesoro, redondeada hacia abajo a un múltiplo de 50, entre 200 y 1000 de oro. Tienes 30 segundos para decidir. Si prestas, el oro sale al momento y vuelve 120 segundos después con un 10 % de interés. ¿Lo necesitas antes? Cóbralo antes de tiempo y recuperas el 90 %, así que como mucho pierdes una décima parte. Si dejas el nivel antes del vencimiento, recuperas la cantidad sin intereses. Rechazar la petición o dejar que caduque no cuesta nada, y una vez que has prestado, el préstamo no impide que lleguen otros sucesos. Su tarjeta en Sucesos del reino muestra las cantidades exactas y los segundos que quedan.

### Pedido extranjero

Con el grupo «Economía y servicios» activado, un comprador extranjero puede hacer un pedido a través de tu mercado, siempre que tengas un mercado terminado y una caravana trabajando en una ruta comercial conectada a él. Tienes 30 segundos para aceptar. Aceptar cuesta 150 de oro por adelantado. Después, tus caravanas cumplen el pedido en sus viajes de siempre: cada viaje cargado que sale lleva un cargamento y gasta 50 de ese dinero, y un cargamento cuenta cuando se ha descargado del todo. Entrega tres cargamentos en 180 segundos y te pagan 450 de oro. Si destruyen una caravana que lleva un cargamento, cae el mercado, se pierde la ruta o se acaba el tiempo, el pedido fracasa y recuperas lo que no se haya gastado. Puedes retirarte en cualquier momento con las mismas condiciones. Rechazarlo es gratis, y los ingresos de las caravanas y los impuestos de siempre siguen como antes. Su tarjeta en Sucesos del reino muestra el mercado, la ruta y cuántos cargamentos han salido y llegado.

### Clínica itinerante

Con el grupo «Economía y servicios» activado, una clínica itinerante puede ofrecerse a instalarse junto a una de tus casas de aldea mientras tengas un héroe herido que pueda llegar hasta ella. Tienes 30 segundos para elegir. Patrocínala por 120 de oro y la corona paga seis curas; después, cada héroe paga lo suyo. O deja que abra con pago personal, que no te cuesta nada: cada héroe paga 20 de oro de su propia bolsa. Atiende a dos héroes a la vez. Los héroes heridos van por su cuenta cuando nada más los retiene (una pelea, una bandera, una noche en la posada), y cada cura tarda 5 segundos y devuelve hasta 60 PV. Al héroe que recibe un golpe o se va a mitad de la cura se le devuelve lo que pagó. La clínica acepta pacientes durante 180 segundos, luego tiene hasta 10 segundos para terminar, y el dinero de la corona que sobre vuelve a ti. Rechazarla es gratis. Su tarjeta en Sucesos del reino enumera a los pacientes, y Mostrar te lleva allí cuando ya has visto el sitio.

### Feria de la cosecha

Con el grupo «Economía y servicios» activado, una feria de la cosecha puede llegar a una de tus casas de aldea. Te avisan 20 segundos antes y se queda abierta 120 segundos. No hace falta mandar a nadie: los héroes heridos, cortos de pociones o con ganas de una noche libre van por su cuenta, siempre que nada más los retenga (una pelea, una bandera, un grupo al que esperan). Atiende a cuatro a la vez. Cada cliente descansa 5 segundos y recupera 40 PV gratis, compra las pociones que le faltan al precio de siempre (la feria trae 24 para toda su estancia) y paga una noche libre si le apetece. El héroe que se va antes no paga nada. Mientras está abierta, puedes alargarla una vez 60 segundos por 150 de oro; las pociones no se reponen. Su tarjeta en Sucesos del reino muestra cuándo abre y cierra, quién está en los puestos y cuántas pociones quedan, y Mostrar te lleva allí cuando ya has visto el sitio.

## Grupo «Historias de aventureros»

### Gremio rival visitante

Con el grupo «Historias de aventureros» activado, un pequeño gremio extranjero puede pedir acampar en el borde del mapa, a más de 60 casillas de tu castillo, para ir a por un cofre explorado o una guarida hostil que no sea objetivo de la misión y no tenga ninguna recompensa tuya. Tienes 30 segundos para responder. Vienen tres héroes de nivel 1, un guerrero, un explorador y un mago, con un presupuesto de 600 de oro que ya cubre lo que cuestan; nunca reclutan a nadie más y se quedan 240 segundos. «Permitir entrada independiente» es gratis, y se quedan con lo que consigan. «Cooperar» cuesta 150 de oro, que se pagan a su gremio y nunca se devuelven: entonces el botín de ese objetivo se reparte según el trabajo, un punto por cada PV quitado al objetivo o a sus guardias y por cada moneda recogida, y la parte de tus héroes va a tu tesoro. Rechazar los deja fuera; si no contestas, entran por su cuenta. Cuando se les acaba el tiempo, cae su campamento o se vuelven hostiles, regresan caminando a la frontera. Su tarjeta en Sucesos del reino muestra el reparto.

### Un viejo amigo

Con el grupo «Historias de aventureros» activado, uno de tus héroes puede pedir traer a un viejo amigo de su misma clase para atacar juntos una guarida hostil explorada que no sea objetivo de la misión y no tenga recompensa. Tienes 30 segundos para responder. «Patrocinar» reserva 200 de oro para el trabajo. El amigo entra por la frontera y camina hasta donde estaba tu héroe; cuando se encuentran, aparece sobre la guarida una recompensa de caza de 200 de oro que solo ellos dos pueden aceptar. Tienen 180 segundos desde que pagas y deciden ellos mismos si van. Cuando cae la guarida, a cada uno se le paga de esos 200 por el daño a los muros y a los guardias y por las curas que de verdad ayudaron al otro; si los dos se ganaron su parte, tu tesoro recibe 100. Después, durante 30 segundos, puedes invitar al amigo a quedarse si un gremio de su clase tiene sitio; si no, vuelve a casa. El dinero sin pagar vuelve cuando se va o se une. Rechazar no cuesta nada. La tarjeta está en Sucesos del reino.

### Visita de aprendices

Con el grupo «Historias de aventureros» activado, a un héroe de nivel 4 o superior le pueden pedir que acoja a dos aprendices, si hay dos camas libres en el castillo o en una posada y dos cofres explorados a menos de 24 casillas del mentor. Tienes 30 segundos para responder. Paga 100 de oro por el alojamiento, que se devuelven si ningún aprendiz llega nunca a la cama, y dos aprendices de nivel 1 de la clase del mentor llegan desde la frontera. Durante los 180 segundos de prueba eligen su propio trabajo: cada uno de esos cofres da a quien lo abra 15 XP y lo que contenga. Quedarse junto al mentor no enseña nada, y el mentor sigue con lo suyo. Al acabar la prueba tienes 30 segundos para «Admitir aprendices aptos»: los que abrieron un cofre, aún quieren quedarse y encuentran sitio en un gremio de su clase. Los demás vuelven a casa, antes de tiempo si el mentor muere o se pierde el alojamiento. Rechazar o ignorar no cuesta nada. La tarjeta en Sucesos del reino muestra los trabajos y la XP de cada aprendiz.

### Visita al hogar

Con el grupo «Historias de aventureros» activado, un héroe con casa en tu reino puede pedir visitar a su familia, siempre que al menos cuatro héroes tengan casa y no haya más de una cuarta parte fuera a la vez. Tienes 30 segundos para responder. «Permitir visita» da 20 segundos de aviso y luego hasta 180 segundos para llegar caminando a la frontera; las peleas, las banderas y las curas van primero, y no sale con menos del 80 % de salud. Si no consigue salir, la visita se anula sin coste. Está fuera 120 segundos: conserva su equipo y su oro, pero no gana nada ni sube de nivel, y vuelve por el mismo paso o por otro que sea seguro. «Ofrecer 150 de oro para quedarse» se puede hacer una vez; el oro va a su bolsa solo si acepta, y si se niega no se cobra nada y aún puedes permitir o rechazar la visita. Rechazar, o no responder, lo mantiene en casa gratis. La tarjeta en Sucesos del reino lo sigue mientras está fuera.

### Torneo de aventureros

Con el grupo «Historias de aventureros» activado, de dos a cuatro de tus héroes (libres, con el 75 % de salud o más y con ganas del premio) pueden proponer un torneo en un claro explorado junto a una casa de aldea. Tienes 30 segundos para responder. Patrocinarlo cuesta 300 de oro: 100 para el recinto, que no vuelven, y 200 reservados para premios. En los 30 segundos después de pagar se apuntan por parejas, dos combates como mucho, y van hacia allí; el torneo entero dura 120 segundos. Cada combate dura 30 segundos. Sus golpes no bajan a nadie de 1 PV ni dan XP de combate: gana quien deja a su rival en 1 PV; si no, gana quien conserva más salud, y si quedan igual es empate. Cada ganador recibe 100 de oro en su propia bolsa al final, y el premio que nadie gane vuelve a ti. Un ataque de verdad desde fuera lo termina al instante. Rechazar no cuesta nada. La tarjeta en Sucesos del reino enumera los combates y el dinero.

### El encargo del bardo

Con el grupo «Historias de aventureros» activado, un bardo puede ofrecerse a componer una canción sobre una hazaña de hasta tres héroes nombrados en la tarjeta: destruir una estructura hostil que hayas explorado, a la que uno de ellos debe hacer daño; que una caravana de una ruta comercial activa salga después de que aceptes y descargue del todo; o una bandera de rescate en la que uno de ellos haga un trabajo de escolta nuevo y esté presente cuando se pague. Tienes 30 segundos para responder. «Financiar encargo» cuesta 150 de oro, que se gastan al momento y nunca se devuelven, y abre un plazo de 180 segundos. Nadie recibe órdenes: los héroes eligen su trabajo, y una recompensa de asedio cuesta aparte. Si la hazaña se cumple y todos los héroes nombrados siguen vivos, tu renombre sube 10, una sola vez, y la canción entra en tu crónica con sus nombres. Si uno muere, se pierde el objetivo o se acaba el tiempo, no hay renombre. «Retirar encargo» lo termina antes, igualmente sin reembolso. Rechazar no cuesta nada. La tarjeta está en Sucesos del reino.

## Grupo «Asuntos fronterizos»

### Migración de monstruos

Con el grupo «Asuntos fronterizos» activado, una manada de ocho lobos huargos puede cruzar una esquina de tu mapa, entrando por un borde y saliendo por el siguiente, bien lejos de tu castillo, tus pueblos y tus edificios. Es un cambio natural: no hay nada que aceptar ni rechazar. Te avisan 30 segundos antes; luego la manada tiene 180 segundos para cruzar. Los lobos no son hostiles: dejan en paz tu castillo, tus torres no les disparan y tus héroes los dejan pasar. Para cazarlos, pon una recompensa de caza sobre un lobo visible. Solo los héroes que la acepten pueden atacar primero, y cada lobo suelta como mucho 20 de oro. Un lobo herido llama a su manada en 12 casillas a la redonda. Si algo bloquea el camino, la manada espera 20 segundos y busca otra ruta, dos veces como mucho. Cuando se acaba el tiempo, vuelven por donde vinieron; una manada que siga encerrada unos 390 segundos después del aviso se queda en la naturaleza como lobos huargos normales. Las recompensas sin cobrar se devuelven cuando se han ido. Su tarjeta en Sucesos del reino muestra la ruta y los lobos que puedes ver.

### Disputa entre guaridas

Con el grupo «Asuntos fronterizos» activado, dos guaridas rivales de distinto tipo pueden pelearse por el terreno que hay entre ellas, fuera de las 60 casillas alrededor de tu castillo. Es un cambio natural: no hay nada que aceptar. Te avisan 30 segundos antes; luego cada guarida manda seis de sus monstruos a un punto marcado. No son monstruos de más: los seis de cada guarida salen de su próxima incursión, y nadie sustituye a los caídos. La pelea dura hasta 180 segundos. Termina antes si un bando se queda sin luchadores, cae una guarida o se bloquea el camino. Después, los supervivientes tardan hasta 120 segundos en volver a casa y vuelven a montar guardia. Que los monstruos se maten entre ellos no te da nada, y esperar no tiene recompensa. Puedes seguir poniendo recompensas normales para atacar una guarida o vigilar tus caminos. Su tarjeta en Sucesos del reino cuenta los luchadores que ves de cada bando, y sus botones muestran las dos guaridas, el lugar de la disputa y los luchadores cuando ya los has visto.

### Cautivos fugados

Con el grupo «Asuntos fronterizos» activado, dos cautivos fugados pueden llegar al borde de tu mapa y pedir asilo, con cuatro perseguidores pisándoles los talones. Tienes 30 segundos para responder. Acogerlos cuesta 200 de oro: dos banderas de rescate de 100 de oro, una sobre cada cautivo. Los héroes aceptan las banderas por su cuenta y escoltan a los cautivos hasta tu posada o tu castillo, que necesita dos camas libres, en 150 segundos. Cada cautivo que llega a salvo recibe una cama y, como cualquier bandera, vale 5 de renombre si la escolta tuvo trabajo de verdad. Un cautivo que huye del peligro sin escolta no cuenta. Al terminar el tiempo de escolta, los cautivos rescatados que quieran pueden ocupar una plaza libre en tus gremios: tienes 30 segundos para invitarlos o dejar que se vayan. Los demás vuelven caminando a la frontera. El dinero de las banderas sin usar vuelve, menos la tasa de cancelación de siempre. Rechazar o esperar no cuesta nada y no trae perseguidores. Su tarjeta en Sucesos del reino sigue a cada cautivo.

### Desertor enemigo

Con el grupo «Asuntos fronterizos» activado, un saqueador de un gremio rival que te es hostil puede pedir asilo. Tienes 30 segundos para responder. Concederlo reserva 100 de oro, que solo se gastan si el desertor llega a una cama libre en tu posada o tu castillo mientras lo persiguen hasta dos de sus antiguos compañeros de gremio. La protección dura 120 segundos. Decir que sí también te da un informe de dónde está el campamento de su gremio. Deja de valer a los 120 segundos o cuando el campamento desaparece, y no despeja la niebla. Al terminar la protección, si el desertor está contento y cabe en una plaza libre de uno de tus gremios, puedes pedirle que se una, y conserva su equipo. Tienes 30 segundos para invitarlo o dejarlo marchar. Si no, se va caminando hacia su salida, y el oro sin gastar vuelve. Rechazar no cuesta nada ni trae represalias. Su tarjeta en Sucesos del reino muestra el oro reservado y gastado, y el informe.

### Bestias anidando

Con el grupo «Asuntos fronterizos» activado, una manada de lobos puede intentar asentarse en terreno salvaje abierto, justo pasadas las 60 casillas alrededor de tu castillo. Es un cambio natural: no hay nada que aceptar. Te avisan 30 segundos antes; luego llegan dos lobos. Al menos 30 segundos después, si alguno sigue en el lugar, llegan tres más y empiezan a cavar una guarida. Cavar requiere 40 segundos de trabajo de un lobo que esté tranquilo cerca, así que pelear lo retrasa. Mata a la manada y se acabó: nunca hay más de cinco lobos y una guarida, y los muertos no se reponen. Cada lobo suelta como mucho 20 de oro y una guarida terminada guarda 20, 120 de oro en total. Si la dejas en paz, la guarida se termina pero nunca suelta más lobos; puedes atacarla como a cualquier otra guarida. Todo termina 280 segundos después del aviso, y una guarida a medio cavar desaparece. Si alguien ocupa el lugar, la manada se mueve, dos veces como mucho. Su tarjeta en Sucesos del reino muestra la fase, la excavación y el tiempo que queda.

### Emisario del duelo

Con el grupo «Asuntos fronterizos» activado, un héroe sano de un gremio rival que te es hostil puede venir bajo tregua para desafiar a uno de los tuyos, en un sitio junto a una de tus casas de aldea. Tienes 30 segundos para responder. Patrocinarlo cuesta 100 de oro, que se reservan como premio. Después, uno de tus héroes libres puede apuntarse en 30 segundos. No eliges tú: cada héroe sopesa el premio y la gloria frente al nivel y el equipo del emisario. Hay un solo combate de hasta 30 segundos y nadie muere. El daño se detiene en 1 PV, y gana quien deje así al otro. Si no, al acabarse el tiempo gana el que tenga más salud. El ganador se lleva los 100 de oro, sea del bando que sea. Si nadie se apunta, el combate acaba en empate o un ataque de fuera lo interrumpe, el oro vuelve. No da experiencia de combate. Después, el emisario vuelve a casa. Rechazar no cuesta nada ni provoca una guerra. Su tarjeta en Sucesos del reino muestra al retador, el combate y el dinero.

## Grupo «Exploración y entorno»

### Crecida del río

Con el grupo «Exploración y entorno» activado, un río puede desbordarse sobre un tramo de su orilla. Es un cambio natural: tienes 30 segundos de aviso, y la orilla (hasta 12 casillas) aparece rayada en ámbar en el mapa. El agua nunca cae encima de nadie. Quien esté allí, héroe o monstruo, se aparta primero, y el agua espera a que la orilla quede vacía. Se queda hasta 120 segundos después del aviso y luego baja sola; si la orilla nunca se vacía, el río no crece. Nadie puede pisar las casillas inundadas, pero las crecidas solo llegan donde hay un rodeo, lejos de tu castillo y tus edificios. Antes de que acabe el aviso puedes pagar 150 de oro una vez para mantener secas 4 de esas casillas (primero los caminos, después las más cercanas al castillo), sin reembolso aunque el agua nunca suba. Si lo ignoras, el agua simplemente viene y se va. Su tarjeta en Sucesos del reino muestra la cuenta atrás y recorre la orilla y las casillas protegidas que has visto.

### Floración de hierbas

Con el grupo «Exploración y entorno» activado, pueden florecer hierbas silvestres cerca de tus casas de aldea. Es un cambio natural: te avisan 20 segundos antes, y la floración dura 120 segundos. Hace falta un aldeano libre y un héroe con sitio para hierbas. Brotan hasta 12 plantas, a entre 8 y 16 casillas de una casa de aldea y lejos del castillo, cada una un fardo de 2 hierbas (24 como mucho). Los héroes no pueden recogerlas en el campo. Los aldeanos ociosos salen por su cuenta, recolectan durante 5 segundos y llevan el fardo a casa, donde los héroes que pasan se llevan las hierbas. Si se acerca un monstruo, el aldeano suelta el fardo donde está, y allí se queda. No hay nada que pagar ni elegir: mantén a los monstruos lejos de sus caminos con tus defensas de siempre. Cuando se acaba el tiempo, las plantas sin recoger se marchitan, pero las hierbas recogidas se quedan. Su tarjeta en Sucesos del reino enumera las zonas que has visto y cuánto ha llegado, y Mostrar las recorre una a una.

### Manantial curativo

Con el grupo «Exploración y entorno» activado, puede brotar un manantial curativo en la naturaleza mientras uno de tus héroes está herido. Es un cambio natural: te avisan 20 segundos antes, luego mana durante 150 segundos y da para 6 usos. Aparece a entre 16 y 24 casillas de un héroe herido, y no sabes dónde hasta que un héroe se acerca a 8 casillas de él; entonces te enteras, y la tarjeta muestra el sitio. No hace falta mandar a nadie: los héroes heridos van por su cuenta, de uno en uno. Cada uno descansa allí 5 segundos y recupera hasta 60 PV, gratis. El héroe que recibe un golpe, pelea o tiene un monstruo cerca se va antes sin gastar su turno; los héroes con la salud llena no van. Ignorarlo no cuesta nada. Se seca cuando se acaban el tiempo o los usos. Su tarjeta en Sucesos del reino lleva la cuenta atrás, dice quién descansa allí, y Mostrar te lleva al manantial una vez encontrado.

### Golpes bajo tierra

Con el grupo «Exploración y entorno» activado, tu gente puede oír golpes bajo un terreno abierto y explorado, a entre 16 y 24 casillas de uno de tus héroes. Tienes 30 segundos; rechazar o dejarlo pasar es gratis. Investiga por 100 de oro y aparece allí una bandera de exploración: el héroe que la acepte trabaja allí 5 segundos sin ningún monstruo a menos de 6 casillas, y cobra los 100. Si nadie termina en 120 segundos, los 100 vuelven. Hecha la investigación, la tarjeta dice qué hay debajo, y eliges antes de que acaben esos 120 segundos. Un superviviente atrapado: financia una bandera de rescate de 100 de oro, y los héroes tienen 120 segundos para llevarlo al castillo, a cambio de 5 de renombre. Un pasaje antiguo: explóralo gratis; tras 5 segundos de trabajo de un héroe, tres casillas se convierten en camino. Una cámara vigilada: paga 200 de oro, vence a sus cuatro esqueletos (sin botín), trabaja allí 5 segundos y el tesoro recibe 300. O séllalo todo gratis. Retirarte devuelve el oro que siga reservado. Su tarjeta en Sucesos del reino sigue cada paso.

### Carta a la deriva

Con el grupo «Exploración y entorno» activado, una carta puede llegar flotando a una orilla explorada cerca de tu castillo, pidiendo ayuda. Tienes 30 segundos para contestar, y todo tiene que acabar en 180 segundos desde que llega; aceptar tarde no añade tiempo. Rechazarla o ignorarla es gratis. Aceptar cuesta 150 de oro: 50 para la búsqueda y 100 reservados para dos banderas de rescate de 50 de oro. Luego un héroe tiene que llegar a 3 casillas de la orilla, normalmente gracias a una bandera de exploración que pongas allí (eso cuesta aparte). Aparecen dos supervivientes, con dos lobos huargos a 6 casillas, y cada uno recibe una bandera de rescate. Los héroes que llevan a un superviviente al castillo cobran, y cada regreso a salvo da 5 de renombre. A veces están heridos y antes necesitan una hierba cada uno, que la escolta les da o va a buscar cerca. Si ningún héroe llega a la orilla a tiempo, los 100 vuelven; «Retirar rescate» también devuelve lo que no se haya gastado. Su tarjeta en Sucesos del reino muestra la pista, el tiempo que queda y quién está a salvo.

## Grupo «Historias de gremios»

### La última expedición de un veterano

Con el grupo «Historias de gremios» activado, un héroe de nivel 6 o superior que, con el grupo activado, ya haya ayudado a derribar a un enemigo o una guarida peligrosos puede pedir una última expedición contra una guarida a la que pueda llegar. Tienes 30 segundos para decidir. Patrocinarla cuesta 250 de oro y pone una bandera sobre esa guarida; otros héroes pueden unirse y esperar al veterano antes de partir. Tienen 180 segundos. Si la guarida cae a tiempo y el veterano sobrevive y llegó a golpearla, los miembros supervivientes se reparten los 250 de oro según cuánto de la guarida derribó cada uno, y el resto vuelve. Pase lo que pase, el veterano que acepta se retira en cuanto vuelve sano y salvo a su gremio (o allí donde esté, si el nivel termina antes); si te echas atrás antes de que salga, recuperas tu dinero, pero se retira igual. El veterano que gana y se retira da al siguiente recluta de su gremio una lección de 20 segundos que vale 30 XP. El que muere es recordado, sin lección. Rechazar, aplazar o ignorar no cuesta nada y el héroe se queda. Su tarjeta en Sucesos del reino sigue cada paso.

### Blasón familiar perdido

Con el grupo «Historias de gremios» activado, un héroe puede pedirte que encuentres el blasón perdido de su familia en un lugar de la naturaleza al que pueda llegar. Tienes 30 segundos para financiar una investigación por 100 de oro: aparece allí una bandera, y el héroe que trabaje el lugar durante 5 segundos cobra esos 100. Antes de que se acaben los 120 segundos del reloj, puedes financiar la recuperación por 150 de oro. Aparecen cuatro esqueletos de guardia y 50 se gastan en suministros al momento; una vez muertos los guardias, 5 segundos más de trabajo sacan el blasón a la luz y pagan 100 a quien trabaja. Después, en 120 segundos, un héroe libre lo lleva al castillo, donde su dueño tiene que reunirse con él. El dueño gana una hazaña para su historia, y durante 120 segundos sus agravios se olvidan un poco más rápido. Si el portador muere, el blasón cae donde murió. Si el dueño muere, puedes seguir como homenaje, sin recompensa, o retirarte. Retirarte o quedarte sin tiempo devuelve el dinero sin gastar; rechazar o aplazar es gratis. Su tarjeta en Sucesos del reino muestra cada paso.

### Disputa de ideales del gremio

Con el grupo «Historias de gremios» activado, un gremio puede dividirse sobre qué hacer: hasta tres héroes prudentes quieren defender y hasta tres más atrevidos quieren atacar una guarida. Tienes 30 segundos para apoyar a un bando por 150 de oro. Apoyar la defensa pone una bandera de defensa en el gremio (o en el castillo) para el equipo prudente. Apoyar la expedición pone una bandera de ataque sobre la guarida para el equipo atrevido. Solo ese equipo puede aceptar la bandera, y no paga oro. En su lugar, el dinero compra pociones: hasta seis, a 25 de oro cada una, que recogen en el gremio los miembros del equipo que andan escasos. El equipo tiene 120 segundos, y una expedición termina antes si cae la guarida. Pelear o curar de verdad da 2 de renombre por cada héroe y cada enemigo, hasta 10 de renombre en total. Solo montar guardia no da nada. El dinero sin usar vuelve. Mantenerte neutral, rechazar o ignorar no cuesta nada, y el otro bando sigue siendo leal. Su tarjeta en Sucesos del reino nombra a los dos equipos y el objetivo.

### Maestro visitante

Con el grupo «Historias de gremios» activado, un maestro retirado puede ofrecerse a venir cuando a uno de tus héroes aún le queda una habilidad de clase por aprender. El maestro se instala junto a una casa de aldea o justo fuera del castillo. Tienes 30 segundos para elegir: financiar tres lecciones por 150 de oro o dejar que los héroes paguen lo suyo, que no te cuesta nada. El maestro llega caminando desde la frontera, y las lecciones siguen hasta 180 segundos después de tu elección. Los héroes de la clase del maestro y de nivel inferior al suyo acuden si quieren, de dos en dos, una lección cada uno por visita. Una lección dura 20 segundos y da 25 XP fijos que las bonificaciones de XP no aumentan. Cuesta 50 de oro de la bolsa del héroe, salvo que tu financiación la cubra. El héroe herido a mitad de lección recupera la parte no usada de lo que pagó y puede volver a terminarla. No se enseñan habilidades: siguen llegando gratis a su nivel de siempre. Después, las lecciones en curso tienen 20 segundos más, el maestro se va y la financiación sin usar vuelve. Rechazar es gratis.

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