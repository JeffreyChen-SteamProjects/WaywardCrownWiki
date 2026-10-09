---
title: "Sistema de Recompensas"
---

Las recompensas son tu principal medio para dirigir las acciones de los aventureros. Coloca banderas de recompensa en el mapa y establece una recompensa para atraer aventureros a una ubicación específica.

---

## Tipos de Recompensa

| Tipo | Recompensa por Defecto | Peligro | Fama | Efecto |
|------|------------------------|---------|------|--------|
| **Exploración** | 200g | 0.2 | 0.3 | Los aventureros viajan a la ubicación objetivo, revelando la niebla de guerra en el camino; la bandera debe estar en un lugar al que puedan llegar a pie |
| **Eliminación** | 200g | 0.8 | 0.9 | Eliminar un objetivo designado (enemigo o Fortaleza Enemiga) |
| **Defensa** | 200g | 0.5 | 0.6 | Patrullar alrededor del edificio objetivo hasta que expire el temporizador |
| **Advertencia** | 50g de tarifa | — | — | Marca un punto como zona vedada: nunca se acepta ni se paga; los héroes por debajo del nivel 8 se mantienen alejados de todo lo que esté a menos de 25 casillas de él |

### Colocar, aumentar y cancelar

- Una recompensa de Eliminación debe colocarse sobre un enemigo o una Fortaleza Enemiga, y una de Defensa sobre uno de tus edificios o el Castillo
- La recompensa de una misión publicada puede aumentarse en +100g o +500g
- Al cancelar se reembolsa la recompensa, excepto en una recompensa de Defensa cuya guardia ya empezó

---

## Cómo Eligen los Aventureros las Recompensas

Los aventureros calculan el atractivo basándose en su **personalidad** y los **atributos de la recompensa**:

```
Atractivo = Recompensa × Codicia
          + Fama × Gloria
          - Peligro × Seguridad
          + Bonus de Exploración × Curiosidad
          - Penalización por Distancia
          - Penalización por HP Bajo
```

Las recompensas y la distancia se escalan según el nivel del aventurero, y algunas recompensas se rechazan de entrada (una recompensa inferior a nivel × 20 de oro, un marcador de Advertencia o una recompensa dentro de una zona de advertencia para héroes por debajo del nivel 8). La fórmula completa está en la página de [Aventureros](adventurers.md).

:::tip[Consejos Prácticos]
- Los **Exploradores** tienen alta curiosidad y son los más adecuados para Recompensas de Exploración
- Los **Guerreros** tienen alta gloria y son los más adecuados para Recompensas de Eliminación
- Los **Guardias** nunca aceptan recompensas: patrullan tus edificios y acuden a cualquiera que sea atacado
- Aumentar la recompensa puede persuadir a aventureros reacios a aceptarla
:::

---

## Mecánicas de Recompensa de Defensa

Las Recompensas de Defensa requieren que los aventureros **patrullen continuamente** cerca del objetivo:

| Ajuste | Valor |
|--------|-------|
| Tiempo de patrulla requerido | 60 ticks |
| Intervalo de recálculo de ruta | Cada 12 ticks |

Después de aceptar una Recompensa de Defensa, el aventurero patrulla de ida y vuelta cerca del objetivo. Una vez acumulado suficiente tiempo de patrulla, la recompensa se completa: los héroes que están en su puesto se la reparten, y cada uno gana 25 XP si un enemigo llegó a la vista durante la guardia.

---

## Mecánicas de Recompensa de Eliminación

Las Recompensas de Eliminación designan un **objetivo específico**:

- Puede ser un enemigo en particular
- Puede ser una Fortaleza Enemiga

Una vez que el objetivo es eliminado, la recompensa se completa automáticamente. Los aventureros que aceptaron la recompensa priorizarán viajar a la ubicación del objetivo.

- La recompensa se reparte a partes iguales entre los héroes que la aceptaron y están a menos de 20 casillas del objetivo, y cada uno de ellos gana 30 XP; ningún rasgo la aumenta
- Contra una Fortaleza Enemiga, los aventureros se reúnen primero a unas 22 casillas, del lado del Castillo, y atacan juntos cuando han llegado entre 2 y 5 de ellos (según el tamaño de la fortaleza), o 120 ticks después de que el primer aventurero acepte la recompensa

---

## Consejos Estratégicos

1. **Comienza con Recompensas de Exploración al principio** — necesitas despejar la niebla de guerra para localizar enemigos y recursos
2. **Coloca Recompensas de Eliminación cerca de Fortalezas Enemigas** — guía a los aventureros para destruir amenazas
3. **Coloca Recompensas de Defensa cerca de edificios importantes** — las aceptan otros aventureros; los Guardias ya patrullan allí sin ellas
4. **Ajusta las recompensas según la personalidad de los aventureros** — no necesitas pagar de más por cada recompensa

---

## Reglas de las misiones

La recompensa queda en la misión desde que se publica:

- **Plazo**: una misión puede publicarse con un plazo de 1, 3 o 5 minutos. Cuando vence, la recompensa sin pagar vuelve al tesoro.
- **Reembolsos**: cancelar devuelve la recompensa, salvo en una misión de defensa cuya guardia ya empezó. Una misión cuyo objetivo ya no está y sin nadie a quien pagar también la devuelve. Una bandera se quita desde su menú de clic derecho en el mapa o, una vez seleccionada, con el botón de su propio panel; ambos dicen qué se devuelve. Si ya hay héroes de camino a una recompensa cancelada, una décima parte de lo devuelto va a ellos por la caminata, a partes iguales.
- **Quién cobra**: una misión de exploración paga al héroe que llega; una de caza se reparte a partes iguales entre quienes la aceptaron y están cerca de la muerte; una de defensa entre quienes están en su puesto. Un héroe muerto nunca cobra. Un héroe cercano al trabajo que en los últimos 30 segundos haya atendido, protegido o cubierto a otro recibe una parte junto a ellos.
- **El renombre exige trabajo**: el oro siempre se paga, pero el renombre y la experiencia solo llegan por terreno que estaba sin explorar al publicarla, una muerte, o una guardia durante la cual un enemigo llegó a la vista.
- **Compañía**: los héroes dejan una misión de exploración que alguien ya tiene, cuentan una recompensa repartida como su parte y ven una fortaleza menos temible cuando otros ya se han apuntado.
- **Expediciones**: una misión de caza contra una fortaleza reúne primero al grupo en un punto de reunión del lado del castillo. Parte cuando han llegado suficientes héroes o tras 120 ticks; un voluntario que se queda solo sigue solo si se atreve con la fortaleza por su cuenta, y si no abandona la misión; admite un héroe más que su tamaño de reunión y ninguno más; un héroe con pocas pociones compra primero si puede; y un grupo que ha caído o vuelto a casa se reúne de nuevo. El panel de la misión muestra quién se ha reunido, cuánto se espera a los demás y las probabilidades estimadas.
- **Peligro**: las misiones de caza, las de exploración junto a una fortaleza vista y marchar sin paga contra una fortaleza se sopesan frente a la preparación de cada héroe (ataque, salud, pociones, armadura, los héroes que ya la tienen y lo lejos que queda el trabajo de una posada o del castillo). Los héroes valientes aceptan peores probabilidades que los prudentes, y ninguna recompensa hace más seguro un trabajo peligroso. Un héroe que se contiene dice qué le haría cambiar de idea (pociones que puede comprar o no puede conseguir, una posada más cerca del trabajo, otro héroe en la misión) y va en cuanto lo tiene. Un héroe con una misión lucha contra lo que lo alcanza, pero vuelve a la misión antes de perseguir otra cosa, y abandona un trabajo peligroso cuando sus probabilidades se hunden.
- **Rescate**: una misión de rescate se coloca sobre un recaudador o una caravana y lo sigue. Los héroes que la aceptan caminan hasta él y permanecen a su lado; con escolta deja de huir de los monstruos y continúa su recorrido mientras ellos luchan. Cuando ha sido escoltado 20 ticks en el camino y está en el castillo (una caravana: o en su puesto comercial) sin monstruos a 8 casillas, la misión se reparte a partes iguales entre quienes la tienen y están a su lado; esperar junto a uno que no ha salido no cuenta. Solo da renombre y experiencia si estaba herido o si un monstruo llegó a verse, y devuelve la recompensa si se pierde. Un doble clic sobre un recaudador o una caravana coloca una.
- **Panel de publicación**: muestra lo que el tesoro paga ahora y, al señalar el mapa, cuál sería el objetivo de la misión. Cuando un clic podría referirse a varias cosas (monstruos amontonados para una misión de matar, portadores para una de rescate, varios héroes heridos bajo el puntero para un hechizo dirigido a un héroe), aparece una lista y la misión o el hechizo va al elegido.
- **Misiones otorgadas**: un mapa o campaña puede publicar una misión con la acción de disparador `post_bounty`; no cuesta nada al tesoro ni devuelve nada.
