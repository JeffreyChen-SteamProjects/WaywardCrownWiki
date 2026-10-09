---
title: "Equipamiento y Tiendas"
---

Los aventureros compran automáticamente equipamiento y consumibles en las tiendas cerca del Castillo.

---

## Sistema de Equipamiento

Los aventureros pueden comprar armas y armaduras en la **Herrería**:

| Equipamiento | Efecto por Nivel | Fórmula de Precio | Nivel Máx |
|--------------|------------------|--------------------|-----------|
| **Arma** | +3 ATK / nivel | 100g × nivel | 3 (requiere Herrería del mismo nivel) |
| **Armadura** | +2 DEF / nivel | 100g × nivel | 3 (requiere Herrería del mismo nivel) |

:::note[Requisito de Nivel de Herrería]
Una Herrería Nv.1 solo puede vender equipamiento Nv.1. Para dar mejor equipamiento a tus aventureros, necesitas mejorar la Herrería.
:::

### Estadísticas Acumulativas de Equipamiento

| Nivel | ATK del Arma | DEF de la Armadura | Precio del Arma | Precio de la Armadura |
|-------|-------------|-------------------|-----------------|----------------------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Consumibles

### Pociones

| Objeto | Precio | Efecto |
|--------|--------|--------|
| **Poción de Curación** | 100g | Restaura 40 HP |

- Los aventureros pueden llevar hasta **3** pociones
- Se reabastecen automáticamente en las tiendas
- Se usan cuando el HP cae por debajo del 50%

### Poción de Velocidad

| Objeto | Precio | Efecto |
|--------|--------|--------|
| **Poción de Velocidad** | 200g | Aumenta la velocidad de movimiento durante 60 ticks |

Solo se vende cuando un Mercado alcanza Nv.2; un aventurero lleva como máximo 2.

### Protección contra la Muerte

| Objeto | Precio | Efecto |
|--------|--------|--------|
| **Anillo de Protección Mortal** | 500g | Bloquea un golpe letal |

Solo se vende cuando un Mercado alcanza Nv.3.

---

## Comportamiento de Compra

Los aventureros compran automáticamente cuando se detienen a menos de 7 casillas de un **Mercado** o una **Herrería**.

En un Mercado, en este orden:

1. Beber una poción de curación en el acto si están heridos
2. Comprar un Anillo de Protección Mortal (Mercado Nv.3)
3. Reabastecer las pociones que llevan (hasta 3)
4. Comprar Pociones de Velocidad (Mercado Nv.2, hasta 2)

En una Herrería, compran el **siguiente** nivel de arma y el siguiente nivel de armadura que puedan permitirse, un nivel por visita, hasta el nivel de la Herrería.

**Solo las tiendas venden.** El castillo, los gremios y las posadas no venden nada: un héroe que necesita equipo o pociones camina hasta una Herrería o un Mercado (véase *El oro del reino* más abajo).

:::note[Ingresos por Impuestos]
Siempre que los aventureros gastan oro (equipamiento, pociones, estudio) o lo ganan (eliminaciones, cofres), el **20%** de la cantidad es el impuesto del tesoro: el 30% durante una Subida de impuestos y nada durante un Mercado negro. Espera en la caja del edificio donde se gastó hasta que un recaudador lo lleva al castillo.
:::

---

## El oro del reino

Cada moneda queda registrada:

- **El dinero va a la tienda**: los héroes solo compran en el propio edificio (el castillo no vende nada). Lo que pagan es la facturación de ese edificio, y el tesoro se queda con su parte de impuestos: 20 %, 30 % durante una subida de impuestos y nada durante un mercado negro.
- **Cajas**: la parte del tesoro no llega sola. Espera en la caja del edificio donde se gastó el oro (la parte del botín de un héroe espera en su gremio, y los ingresos periódicos de un mercado en su propia caja). Una caja guarda 600 de oro; lo que no cabe se pierde, y un edificio que cae pierde su caja.
- **Recaudador**: el castillo tiene un recaudador que camina hasta la caja más llena con 40 de oro o más, carga hasta 400 y lo lleva a casa, donde se convierte en oro del tesoro. Huye de los monstruos y nunca lucha; si lo matan, lo que llevaba queda allí como un cofre, y un nuevo recaudador sale del castillo 300 ticks después. Los paneles de los edificios, del castillo y del recaudador muestran lo que espera y lo que se transporta. Un castillo de nivel 2 mantiene dos recaudadores y uno de nivel 3, tres; cada uno va a una caja distinta. Un recaudador sin nada que recoger descansa dentro del castillo, fuera del mapa, donde nada lo alcanza. Sale por el frente del castillo cuando una caja merece el viaje, se detiene un momento ante el frente de ese edificio para vaciarla y vuelve a entrar al llegar a casa; tras huir de un monstruo se queda dentro un rato. El castillo mantiene su número de recaudadores, reemplazando a cada uno que pierde, y su panel tiene una fila para ellos que dice dónde está cada uno. Una **Oficina de Impuestos** (280 de oro; las que se quiera, cada una más cara que la anterior) mantiene un recaudador propio más: vive allí, sale por su puerta, lleva allí lo que recauda, donde pasa al tesoro al instante, y es reemplazado allí 60 segundos después de perderse. Cuando descansa más de un recaudador, los que viven a 40 casillas o menos de una caja se turnan para ir a por ella, y sale primero el que lleva más tiempo en casa (el de una oficina recién dotada nunca ha salido, así que le toca el siguiente viaje); una caja lejos del castillo se deja a la oficina que tiene cerca. El panel de la oficina dice qué está haciendo su recaudador.
- **Ajustes de impuestos**: el panel de un edificio puede sacar su caja de las rondas de los recaudadores (entonces se llena y lo que sobra se pierde) o pedir al próximo recaudador libre que la vacíe primero, por poco que tenga; el resumen del reino fija lo llena que debe estar una caja antes de que vaya un recaudador (20, 40 o 150 de oro). Los recaudadores siguen eligiendo su camino, dejan para después una caja con un monstruo cerca y huyen del peligro. La ayuda del oro y el resumen reparten el oro del reino entre lo que se puede gastar, lo que espera en cajas, lo que llevan los recaudadores y lo que tienen las misiones abiertas; el resumen avisa también cuando los héroes quieren equipo o pociones que ningún edificio vende, y el panel de un edificio dice a qué distancia está del castillo. El resumen también fija lo prudentes que son los portadores de la corona: recaudadores, caravanas y obreros de la cuadrilla huyen de un monstruo a 9, 6 o 4 casillas; los prudentes se pierden menos y traen menos. La ayuda de la etiqueta de oro añade lo que deben las caravanas que vuelven y lo que llevan los héroes. Una política fiscal ajusta las dos cosas a la vez: Segura (solo cajas llenas, los portadores huyen pronto), Constante (las rondas de siempre) o Ávida (también cajas pequeñas, los portadores aguantan).
- **Puesto comercial y caravana**: un reino puede construir tantos puestos comerciales como pague, cada uno más caro que el anterior, al menos a 45 casillas del castillo y en terreno al que se pueda llegar a pie desde él. Su caravana, una mula de carga, camina hasta el castillo, descarga y regresa; un viaje que llegó al castillo deja 0,6 de oro por cada casilla entre el puesto y el castillo en la caja del puesto, así que un puesto más lejano paga más y deja a la caravana más tiempo fuera. Avanza una casilla cada 2 ticks, cada tick sobre un camino. Un monstruo a la vista la envía al extremo más cercano del camino hasta que se va, uno a su lado la hiere, y se te avisa dónde; una caravana perdida se repone tras 400 ticks. Necesita un castillo de nivel 2.
- **Las recompensas son transferencias**: una misión paga exactamente lo que contiene. Los multiplicadores de oro de la dificultad y de los rasgos solo se aplican al botín y a los cofres.
- **Se compra una vez y se repone hasta un límite**: cada nivel de equipo, el anillo y cada estudio de la biblioteca se compran una vez; las pociones se reponen hasta 3 y las de velocidad hasta 2.
- **Raciones**: un héroe en reposo sin poción y sin oro para comprarla recibe una de su gremio, como mucho una vez cada 600 ticks.
- **Las tiendas como servicios**: un mercado vende según su propio nivel (pociones de velocidad desde el nivel 2, el anillo desde el nivel 3), una herrería forja equipo hasta su nivel, una biblioteca enseña un estudio por nivel y una posada aloja a tantos héroes como habitaciones tiene. Un héroe solo va a una tienda que tiene algo nuevo para él y elige la más cercana, contando la que tiene un monstruo a 8 casillas como 40 casillas más lejos. El panel de una tienda muestra lo que los héroes han gastado allí, quién está en camino y sus últimos seis clientes. No se paga nada antes de que el héroe esté en el mostrador, así que una tienda que cae, se llena o se mejora por el camino no deja ningún trato a medias.
- **Libro mayor**: el juego lleva un total de cada flujo (misiones, construcción, investigación, resurrección, robo; impuestos, comercio, reembolsos, demolición, ganancias inesperadas; recompensas, botín, cofres, saqueo; equipo, suministros, estudio, ocio) con los últimos apuntes y la facturación de cada edificio, guardado con la partida. El tesoro, las misiones y las tiendas deben cuadrar por separado.
- **Resumen del reino**: hay una pestaña «Reino» detrás del panel Detalles. Muestra el tesoro, sus ingresos y gastos por tipo, lo que espera en las cajas y en los recaudadores, lo que los héroes ganaron y gastaron, los viajes y las pérdidas de caravanas, la clientela de cada tienda, los últimos apuntes del libro mayor y lo que requiere atención (un castillo que puede ampliarse, ningún recaudador fuera, una caravana perdida, una tienda con un monstruo cerca, una caja llena). Los nombres son enlaces que seleccionan el edificio o el castillo y mueven el mapa hasta allí. Bajo *Oro retenido* nombra dónde hay oro parado, cada uno con un enlace al lugar: la caja más llena que los recaudadores deben dejar, las cajas que por separado guardan menos de lo que hace caminar a un recaudador y la mayor recompensa que ningún héroe ha aceptado en dos minutos.
- **Registros**: una pestaña Registros (tecla L) enumera cada héroe, gremio, obra e ingreso de cada edificio del reino, una fila cada uno, con un cuadro de búsqueda. Los héroes pueden reducirse a los inactivos, los que tienen una misión, los heridos, los que piensan en irse y los que no tienen gremio; los gremios, a los que tienen sitio, los llenos y los que tienen monstruos cerca; las obras, en el orden en que las toma la cuadrilla de la corona, a edificios en construcción, en mejora, dañados y obras detenidas; los ingresos, a cajas con oro, cajas fuera de la ronda de recaudadores y tiendas con monstruos cerca. Un clic en una fila la muestra en el mapa y un doble clic abre sus detalles. Los registros no dan órdenes y no enumeran nada del enemigo.
- **Capas del mapa**: el botón Capas de la barra superior (tecla M) pone sobre el mapa lo que el reino sabe. Abastecimiento rodea cada tienda, posada, templo y biblioteca con el alcance al que un monstruo ahuyenta a los clientes. Oro en camino escribe lo que espera en cada caja y dibuja el recorrido de cada recaudador y la ruta de cada caravana. Obras numera los trabajos de la cuadrilla en el orden en que los toma. Amenazas conocidas rodea las guaridas que el reino ha visto, con una línea hasta el castillo desde la que reúne una incursión. Alcance de hechizos muestra dónde pueden lanzarse los hechizos de la corona y la red de agujas de la senda arcana. Verde va bien, ámbar pide una mirada, rojo es un problema. Una guarida que nadie ha visto no está en ninguna capa, y las capas activadas se recuerdan.
- **Informe y crónica**: la pantalla de misión da un informe antes de empezar: la historia, qué hace ganar y perder, qué se puede construir y el consejo del nivel. Una pestaña Crónica conserva ese informe y lo anunciado desde entonces, lo más reciente primero: consejos del guion, una guarida avistada, una misión que ningún héroe acepta (con el motivo y la recompensa que bastaría), una caravana en apuros, un recaudador o un edificio perdido, un jefe que cambia de táctica o cae. Cada entrada tiene su hora y un enlace que mueve el mapa; una repetición sobre lo mismo se cuenta en su entrada en lugar de decirse otra vez, y una crónica llena (60 entradas) pierde la más antigua de las menos importantes. Las entradas nuevas emergen de dos en dos sin pausar el juego. Un ajuste impide que emerjan los consejos y las noticias menores: las pérdidas y los jefes siguen apareciendo, y todo queda anotado. La crónica puede mantenerse en un tema (amenazas, héroes, oro, o corona y consejos); la elección se recuerda.
- **Resultados**: cuando una partida termina, ganada o perdida, una pantalla de resultados dice por qué y enumera el objetivo y cada enemigo con nombre con su desenlace, los héroes contratados, perdidos y aún en pie, los ingresos y gastos del tesoro por tipo, las pérdidas de caravanas y recaudadores, los monstruos abatidos, las guaridas arrasadas, las misiones, los edificios y el tiempo de juego. Recuerda hasta tres héroes: el que más subió, el que más mató y el mejor de los caídos. Un nivel ganado se valora con tres marcas, cada una una frase sencilla con sus números (objetivo cumplido; no más de un héroe de cada cuatro perdido; ningún edificio perdido); ninguna trata de la velocidad. Desde ahí: el nivel siguiente, el mismo nivel otra vez, el menú o, tras una derrota, un vistazo al mapa. El resumen se puede guardar como archivo de texto en una carpeta `recaps` junto a los ajustes. Terminar la historia de la demo añade lo que está abierto ahora y lo que está previsto para el juego completo.
- **Hallazgos opcionales**: un nivel puede esconder hasta dos cosas que merece la pena encontrar; ninguna es necesaria para ganar. Un convoy de suministros cercado por monstruos resiste seis minutos una vez hallado; un héroe que llega a él con los sitiadores muertos lleva 300 de oro en suministros al tesoro. Un alijo tiene un guardián el doble de resistente que los de su tipo: la corona coloca una misión «Matar» sobre él, y el cofre de 400 de oro es de los héroes. Hay un tesoro bajo una guarida que no envía incursiones: arrasarla deja un cofre de 500 de oro. No dicen nada hasta que se ve su lugar; entonces la crónica los anuncia, una lista «Opcional» en la pestaña Crónica los sigue con enlaces, y la pantalla de resultados dice cómo acabaron. Las tres misiones de la demo llevan uno, uno y dos.
- **Dificultad y recuperación**: fácil y difícil cambian números, nunca la salud de los enemigos: cada incursión de guarida tiene un asaltante menos o dos más, una oleada del guion tiene el 75% o el 125% de su tamaño, y un nivel empieza con el 125% o el 85% de su oro; la pantalla de misión lo indica. Los niveles de la demo nombran un elenco (slime, rata gigante, goblin, arquero goblin, lobo terrible, bandido, bruto orco, trol) para lo que vaga por sus mapas, y nunca lanzan los eventos aleatorios que traen una fuerza propia, porque sus incursiones se anuncian. Un reino sin gremios y sin oro para uno recibe la diferencia de la corona, como mucho una vez cada cinco minutos, y un nivel se puede reiniciar en cualquier momento desde el menú Esc.
- **La vida de la ciudad, vista y oída**: un pequeño icono se eleva sobre el lugar donde un héroe compra pociones o armas, paga una cama o una lección, un recaudador vacía una caja o entrega los impuestos, se paga una caravana, se alista un recluta, se gana un nivel, se mejora o repara un edificio, se abre un cofre o se descubre algo. Cada uno tiene su propio sonido breve: más bajo cuanto más lejos está de la vista, tres como mucho a la vez y nunca el mismo dos veces seguidas. Una guarida que reúne una incursión lleva en el mapa un anillo rojo que late y un cuerno, y en el minimapa un marco parpadeante, hasta que la incursión parte; el cuerno, los tambores de guerra y un jefe se oyen desde cualquier sitio. Con el volumen de sonido a cero, los iconos siguen contándolo todo. Los sonidos los sintetiza `tools/soundgen.py` y los iconos los genera el generador de arte; nada está grabado ni muestreado.
- **Los héroes responden**: al seleccionar un héroe suena una respuesta breve con la voz de su clase y lo que dice aparece en la parte superior de su panel. La respuesta sigue su situación: malherido o huyendo a casa, en combate, de camino a una misión, descansando bajo techo, reparando un muro, escaso de suministros o de sueño, o listo, cuando cada clase tiene su propio saludo. Hay una respuesta como mucho cada 1,5 segundos, y la línea sigue ahí sin sonido.
- **Cada unidad tiene voz**: un monstruo, un recaudador, una caravana y un aldeano responden a un clic con el sonido de su especie, igual que un héroe responde según su ánimo, y todo lo que camina por el mapa se oye al caer. Un héroe y el resto de la gente de la corona (recaudadores, caravanas, los obreros de la corona, los aldeanos de una casa derribada) se oyen esté donde esté la vista; un monstruo se atenúa con la distancia a la vista, la misma especie se oye como mucho una vez cada dos segundos y como mucho se solapan dos de esos sonidos. Ningún sonido de unidad dura menos de un segundo.
- **Música**: el menú y la partida tienen cada uno sus propias pistas, en orden aleatorio: cualquiera puede abrir, y cada pista suena una vez antes de que alguna se repita. Mientras un jefe con nombre está en el campo suena su propia música, y la de la partida vuelve cuando cae; un castillo caído también tiene la suya.
- **Visible en el mapa**: el carro de un convoy de suministros varado, con una rueda suelta y la carga a medio descargar, está en su lugar desde que este se explora hasta que el convoy es alcanzado o se pierde; un jefe lleva una insignia de calavera con cuernos sobre su nombre y su barra de vida. Ambos se ven igual en las dos rutas de dibujo. El Jefe Colmillo Rechinante tiene un aspecto propio: yelmo con cuernos, escudo rojo, hacha de doble filo y el estandarte de su banda a la espalda.
