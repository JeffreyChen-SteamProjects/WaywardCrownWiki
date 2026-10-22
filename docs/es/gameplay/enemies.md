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
| **Piquero** | 150 | 9 | 6 | 0.9 | 34 | 18 | 3 | 12 | Montaña | 3 |
| **Portaescudo** | 220 | 7 | 10 | 0.8 | 40 | 20 | 3 | 12 | Montaña | 4 |
| **Zapador** | 90 | 5 | 3 | 1.0 | 36 | 22 | 3 | 12 | Bosque | 4 |
| **Bestia de asedio** | 520 | 16 | 9 | 0.5 | 110 | 55 | 3 | 12 | Montaña | 5 |
| **Chamán goblin** | 100 | 4 | 2 | 0.8 | 26 | 15 | 3 | 12 | Bosque | 2 |
| **Saboteador bandido** | 140 | 5 | 3 | 1.0 | 32 | 20 | 3 | 16 | Bosque | 3 |
| **Escorpión venenoso** | 130 | 6 | 5 | 0.9 | 34 | 18 | 3 | 14 | Desierto | 3 |
| **Guardián de arenisca** | 360 | 11 | 15 | 0.5 | 82 | 42 | 3 | 14 | Desierto | 4 |
| **Transportista de suministros goblin** | 110 | 4 | 3 | 1.0 | 15 | 12 | 3 | 12 | — | 2 |
| **Nigromante enemigo** | 180 | 7 | 4 | 0.7 | 55 | 30 | 3 | 16 | Montaña | 4 |
| **Cazador espectral** | 125 | 14 | 3 | 1.5 | 50 | 26 | 3 | 18 | Montaña | 4 |
| **Escupidor de veneno** | 150 | 6 | 4 | 0.65 | 48 | 28 | 8 | 16 | Pantano | 4 |
| **Ligador de maleficios** | 110 | 8 | 3 | 0.8 | 52 | 32 | 9 | 16 | Bosque | 4 |
| **Murciélago vampiro** | 80 | 10 | 2 | 1.8 | 30 | 16 | 3 | 16 | Montaña | 3 |
| **Limo fisible** | 240 | 10 | 5 | 0.6 | 58 | 28 | 3 | 12 | Pantano | 3 |

**La hueste**: cuatro enemigos luchan como línea y como tropa de asedio. El golpe de un Piquero frena un momento al héroe que lo recibe. Un Portaescudo levanta de vez en cuando un escudo sobre sí mismo y los monstruos a su lado. Un Zapador coloca una carga que se marca en el suelo antes de estallar (nunca estalla si cae antes) y golpea los edificios tres veces más fuerte. Una Bestia de asedio es lenta, difícil de abatir y golpea los edificios cuatro veces más fuerte.

Dragón, Arquero goblin, Cultista oscuro, Escupidor de veneno, Ligador de maleficios — disparan sus propios proyectiles; las otras clases comunes golpean a 3 casillas o menos.

A un enemigo le toca su turno una vez cada 4 ticks. Su velocidad le da un paso cada 3 ÷ velocidad turnos, redondeado hacia abajo (al menos 1), y todos los enemigos caminan además tres décimas más rápido: esa espera se divide entre 1.3, la fracción pasa a los pasos siguientes y nunca baja de un turno. Así, hay un paso cada turno con velocidad 1.6 o más, unos dos pasos en 3 turnos con 1.1–1.4, unos tres en 7 con 0.8–1.0, más o menos uno cada 3 turnos para el Trol y uno cada 4 o 5 con 0.5–0.6.

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

- **Bosque** — Limo, Zombi, Lobo huargo, Cultista oscuro, Araña gigante, Zapador, Chamán goblin, Saboteador bandido, Ligador de maleficios
- **Montaña** — Goblin, Esqueleto, Dragón, Bruto orco, Arquero goblin, Trol, Piquero, Portaescudo, Bestia de asedio, Nigromante enemigo, Cazador espectral, Murciélago vampiro
- **Pradera** — Rata gigante, Bandido, Arpía
- **Desierto** — Espectro de arena, Escorpión venenoso, Guardián de arenisca
- **Pantano** — Escupidor de veneno, Limo fisible

:::note[Dragones]
Los dragones y los troles son los enemigos más peligrosos (nivel de peligro 5). Con un rango de ataque de 16, 550 HP y llamaradas como proyectiles, lo mejor es enfrentar a los dragones con aventureros a distancia y torres de arqueros; el Trol tiene más HP y ataque, pero debe acercarse.
:::

---

## Mecánicas Especiales del Dragón

- **Ataque a Distancia**: Rango de ataque de 16, escupe llamaradas
- **Alta Movilidad**: Velocidad de 1.4, unos dos pasos cada 3 turnos: tan rápido como las Ratas gigantes, las Arañas gigantes y los Bandidos; solo las Arpías y los Lobos huargos (un paso por turno) son más rápidos
- **Visión Amplia**: Rango de visión de 32 casillas, capaz de detectar aventureros desde gran distancia
- **Evasión**: Todos los enemigos tienen una tasa de esquiva base del 5%

**Presiones**: tres amenazas nacen de cómo se lleva el reino, no de una guarida. Cada una se anuncia un minuto antes en la crónica y en el resumen, envía una manada de 3 (nunca más de 6 de sus monstruos vivos, sea cual sea vuestra fuerza) y se cancela cuando se corrige su causa. *Suciedad*: un pueblo de 16 edificios sin fuente ni jardín atrae ratas gigantes; cada fuente o jardín responde por 6 edificios. *Los muertos sin reposo*: 3 héroes muertos sin templo se alzan como esqueletos donde cayó el último; un templo, o revivirlos, los mantiene en tierra, y un reino de la senda de los No muertos con un Osario los toma como guardias. *Lo salvaje*: un edificio a más de 60 casillas del castillo sin torre de flechas ni puesto de guardia a 12 atrae lobos terribles; los puestos comerciales no cuentan, ni los campamentos de un reino Salvaje. Nada presiona a un reino en sus primeros 5 minutos, ni en un nivel que no permite el edificio que lo remedia. Los campamentos de guerra orcos atacan lo que se construye: la obra o mejora en curso más cercana.

**Chamán goblin** — Cura 18 PV a hasta cuatro aliados heridos en 4 casillas cada 20s, como máximo seis veces en su vida. Elimina al apoyo primero o agota sus remedios.

**Saboteador bandido** — Prioriza edificios cercanos y causa 2,5× daño normal a estructuras. Responde al héroe que lo intercepta; su armadura ligera permite detenerlo.

**Escorpión venenoso** — Un aguijonazo acertado deja veneno de 3 PV/s durante 5s, sin acumular. Antídotos y purificación lo eliminan; escolta héroes frágiles en terreno de escorpiones.

**Guardián de arenisca** — Lento y muy blindado. A media vida obtiene una sola vez un escudo propio de 80 PV durante 10s. Usa desgaste a distancia o veneno contra su frente duro.

**Nigromante enemigo** — Invoca dos esqueletos normales cada 30s al ver un héroe hostil: cuatro por vida y como máximo 32 invocados vivos en el mundo. Un anillo verde de huesos marca el hechizo. Mata pronto al invocador frágil; los esqueletos existentes permanecen y no invocan.

**Cazador espectral** — Cazador cuerpo a cuerpo rápido y frágil que persigue primero a héroes visibles de alcance, sanación o mando. Intercepta con la primera línea o ralentiza. Los guardias respetan su radio; el espectro usa caminos terrestres y no cruza agua.

**Refuerzos tácticos en incursiones**: Fortaleza Goblin → Chamán goblin; Campamento Bandido → Saboteador bandido; Tumba de Arena → Escorpión venenoso, Guardián de arenisca; Castillo No-muerto → Nigromante enemigo, Cazador espectral.

Las incursiones de campaña respetan su lista de enemigos; los reinos libres usan todas las tropas de la guarida.

**Escupidor de veneno** — Avisa 3s antes de envenenar una zona de radio 2 desde hasta 8 casillas: 4 PV/s por 5s, cada 18s. Mata al frágil escupidor antes del impacto, sal del aviso o prepara antídotos y purificación.

**Ligador de maleficios** — Marca radio 2 desde hasta 9 casillas, avisa 2s y aumenta el daño recibido un 25% por 4s, cada 20s. No se acumula y se purifica. Prioriza al ligador o apoya la primera línea.

**Murciélago vampiro** — Rápido y frágil. La pérdida real de PV por su golpe cuerpo a cuerpo lo cura hasta 4 PV por golpe y 60 por vida, sin superar el máximo. Los escudos impiden la cura. Sus alas usan caminos terrestres; concentración a distancia y ralentización lo contrarrestan.

**Limo fisible** — Al morir se divide una vez en hasta dos limos normales, cada uno con 35% de PV máximos y la mitad del ataque y defensa de la madre, incluido rango. No se dividen ni dan oro o XP de muerte. Máximo 64 hijos vivos en el mundo. Usa daño de área y espera otra primera línea.

Eliminar una oleada nombrada incluye sus esqueletos invocados y limos hijos; matar solo la fuente no completa la oleada.

**Piquero** — Un golpe de pica ralentiza al objetivo 3s. Protege héroes frágiles tras la primera línea; purificar elimina la lentitud.

**Portaescudo** — Escudo de 40 PV por 8s en radio 2, hasta cuatro aliados por lanzamiento y seis lanzamientos por vida, cada 24s. El rango no lo multiplica. Mantiene escudos más fuertes. Prioriza al portador o usa veneno.

**Zapador** — Apoyo explosivo frágil: apunta hasta 3 casillas, avisa 3s y causa 40 de daño en radio 2, cada 18s. Su muerte cancela el aviso. Los golpes a edificios usan el ataque ya ajustado por rango y ×3 una vez.

**Bestia de asedio** — Pesado lento que golpea estructuras a ×4 de su medio ataque ya ajustado por rango. Intercepta con la frente y concentra fuego a distancia; su defensa castiga el asalto cercano sin apoyo.

Gnashfang convoca en cada llamada a toda la legión —un piquero, un escudero, un arquero goblin, un chamán goblin, un zapador y una bestia de asedio—, doce por vida. Siguen su centro de guardia y sobreviven a su muerte. El tajo avisa 2,4s, elige hasta 4 casillas y alcanza radio 3; los dos últimos arqueros son otra llamada limitada.

El Escorpión de las dunas desentierra su prole en cada fase: cuatro escorpiones venenosos por llamada, doce por vida. Lleva antídotos y aleja a los tiradores de los agujeros.

**Cuartel acorazado** — Frente blindado, arqueros y curación limitada. Mata primero al sanador o usa alcance y veneno. 3200 HP. Guarnición: Portaescudo, Arquero goblin, Chamán goblin. Ciclo de incursión: Portaescudo, Piquero, Arquero goblin, Chamán goblin, Piquero, Arquero goblin. Terreno nativo: Bosque, Montaña. Primera incursión 9:00, luego cada 6:00; empieza con 4 tropas, aumenta una hasta 8. Arrasar detiene nuevos guardias y ataques; las tropas vivas permanecen.

**Criadero de peste** — Frente que se divide con zonas de veneno avisadas y maleficios. Evita zonas, purifica y prepárate para los hijos limitados. 2200 HP. Guarnición: Limo fisible, Escupidor de veneno, Ligador de maleficios. Ciclo de incursión: Limo fisible, Escupidor de veneno, Ligador de maleficios, Murciélago vampiro, Escupidor de veneno, Limo fisible. Terreno nativo: Bosque, Pantano. Primera incursión 8:00, luego cada 5:30; empieza con 3 tropas, aumenta una hasta 7. Arrasar detiene nuevos guardias y ataques; las tropas vivas permanecen.

**Campamento de asedio** — Bestia de asedio, arqueros y escudos protegen el campamento. Los zapadores se unen a ataques contra obras, o el castillo si no hay obras. Intercepta y destruye la fuente. 3800 HP. Guarnición: Bestia de asedio, Arquero goblin, Portaescudo. Ciclo de incursión: Bestia de asedio, Zapador, Arquero goblin, Portaescudo, Zapador, Arquero goblin. Terreno nativo: Desierto, Pradera. Primera incursión 12:00, luego cada 8:00; empieza con 3 tropas, aumenta una hasta 6. Arrasar detiene nuevos guardias y ataques; las tropas vivas permanecen.

**Choza del Chamán** — Un chamán goblin mantiene en pie a la banda de la choza y cura a sus heridos seis veces como mucho; goblins y arqueros marchan en sus incursiones. Mata primero al chamán.

**Escondite del Saboteador** — Los saboteadores atacan lo que se está construyendo, y el castillo cuando no hay obras: derriban muros deprisa pero llevan armadura ligera. Protege la obra lejana o sal a su encuentro.

**Madriguera de Escorpiones** — Los escorpiones venenosos cazan cerca de su madriguera y dejan en paz al pueblo. Su picadura envenena: lleva antídotos, o un altar de purificación, antes de limpiarla.

**Santuario Hundido** — Los guardianes de arenisca despiertan en el santuario y marchan despacio sobre el pueblo. Cada uno se escuda una vez a media vida: desgástalos a distancia o con veneno.

**Cripta del Nigromante** — Los nigromantes alzan esqueletos mientras ven héroes, así que sus incursiones crecen al marchar. Mata primero al invocador; sus esqueletos no alzan más.

**Túmulo Espectral** — Los cazadores espectrales rebasan la primera línea en busca de arqueros, magos y sanadores. Pon a los frágiles tras un muro de escudos o frena a los cazadores.

**Ciénaga del Escupidor** — Los escupidores de veneno contaminan el suelo desde lejos, tres segundos después del aviso. Sal de la marca, lleva antídotos y mata primero a los escupidores.

**Círculo de Maleficios** — Los ligadores de maleficios marcan a los héroes para que reciban más daño un momento, y los sectarios marchan con ellos. Una purificación quita el maleficio; golpea a los ligadores antes de que caiga.

**Cueva de Murciélagos** — Los murciélagos vampiro salen en tropel y se curan con lo que muerden. Los escudos les niegan el festín; arqueros y torres los derriban.
