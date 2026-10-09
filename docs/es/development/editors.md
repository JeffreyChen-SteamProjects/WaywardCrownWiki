---
title: "Editores de Mapas y Campañas"
---

Wayward Crown incluye editores integrados de mapas y campañas que te permiten crear niveles y escenarios personalizados.

---

## Editor de Mapas

El botón **Editor de mapas** del menú principal abre el editor con un mapa nuevo. Los mapas guardados se listan, juegan, editan, importan y exportan en la pestaña **Mapas** del gestor de mapas, que se abre con el botón **Campañas** del menú principal.

### Funciones

- **Pintura de Terreno** — Selecciona un tipo de terreno y píntalo sobre el mapa con un pincel (tamaño 1 – 20), o rellena una región
- **Colocación de Edificios** — Coloca edificios del jugador, Fortalezas Enemigas y cofres del tesoro, mueve el Castillo o borra
- **Aleatorizar** — Genera un mapa aleatorio como punto de partida
- **Deshacer / Rehacer** — Hasta 30 pasos (Ctrl+Z / Ctrl+Y)
- **Ajustes del Mapa** — Tamaño (100 – 1000 casillas por lado), nombre, autor y otros detalles, oro inicial y una condición de victoria
- **Guardar/Cargar** — Guarda mapas en el directorio `maps/`; Cerrar, Esc y Nuevo preguntan antes de descartar cambios sin guardar (Guardar / Descartar / Cancelar), y descartar una campaña nunca guardada elimina de nuevo su carpeta
- **Objetos…** — Edita en el editor de objetos las clases de héroe, monstruos, edificios, fortalezas y jefes hechos para el mapa. La primera vez crea el paquete de contenido del mapa (un plugin tuyo que el mapa requiere); al guardar el paquete se vuelve a cargar el contenido, así que lo que define se puede colocar enseguida
- **Probar** — Inicia el mapa guardado, o la campaña en el nivel que se está editando, en una partida propia, con su paquete de contenido y nada más de lo tuyo

Los mapas no contienen unidades: los aventureros se reclutan y los enemigos aparecen una vez que la partida está en marcha.

### Tipos de Terreno

- Pradera, Bosque, Montaña, Agua, Desierto, Camino, Barro, Pantano, Nieve, Colinas, Tierras baldías, Prado florido

### Formato de Guardado

Los mapas se almacenan en formato JSON en el directorio `maps/` e incluyen:

- Datos de terreno (un array NumPy comprimido)
- Datos de altura
- Edificios, Fortalezas Enemigas y cofres del tesoro
- Posición del Castillo
- Detalles del mapa, oro inicial y condición de victoria

---

## Editor de Campañas

Las campañas se crean, abren, importan y exportan en la pestaña **Campañas** del gestor de mapas (el botón **Campañas** del menú principal). Al abrir una campaña se inicia el editor de mapas con un panel de campaña, de modo que editas el mapa de cada nivel y sus ajustes en un solo lugar.

### Funciones

- **Orden de Niveles** — Sube y baja los niveles con los botones de flecha
- **Condiciones de Victoria** — Establece condiciones de victoria para cada nivel, incluido el tipo de fortaleza para `destroy_building`
- **Texto Narrativo** — Establece texto de introducción y finalización
- **Recursos Iniciales** — Establece el oro inicial para cada nivel
- **Arrastre** — Conserva el oro, los aventureros y la investigación del nivel anterior
- **Restricciones de Edificios** — Restringe qué tipos de edificios puede usar el jugador
- **Disparadores** — Mensajes de script y desbloqueos de edificios para un nivel (solo en niveles de campaña)
- **Campos de reino** — El nivel de castillo con el que empieza el nivel, el límite de tiempo, el consejo del informe y hasta dos hallazgos opcionales
- **Objetivos adicionales y derrotas** — Más condiciones de victoria, requeridas u opcionales, y más formas de perder (héroes caídos, edificios o caravanas perdidos), en dos tablas con Añadir y Quitar
- **Origen del objetivo** — Bajo un objetivo de victoria: si el jefe está colocado en el mapa o lo inicia un disparador, y si el tipo de fortaleza es del juego o de un plugin y cuántas hay en el mapa; el objetivo de un objetivo adicional dice lo mismo en su descripción emergente

### Opciones de Condiciones de Victoria

| Tipo | Descripción |
|------|-------------|
| `free` | Modo libre, sin condición de victoria |
| `destroy_enemy_buildings` | Destruir todas las fortalezas enemigas |
| `survive_ticks` | Sobrevivir durante un tiempo determinado |
| `reach_gold` | Acumular una cantidad específica de oro |
| `destroy_building` | Destruir un tipo específico de fortaleza |
| `defend` | Defender el Castillo durante un tiempo determinado |
| `collect_chests` | Recoger todos los cofres del tesoro |

### Estructura de Guardado

```
campaigns/my_campaign/
├── campaign.json         # Metadatos de la campaña
├── level1.json           # Mapa del nivel 1
├── level2.json           # Mapa del nivel 2
└── level3.json           # Mapa del nivel 3
```

---

## Compartir Contenido Personalizado

- Las carpetas de mapas y campañas se pueden compartir simplemente copiándolas, o con la exportación e importación del gestor de mapas
- Coloca los mapas recibidos en `maps/` para cargarlos desde el menú principal
- Coloca las campañas recibidas en `campaigns/` para verlas en el menú principal
- Si el juego se ejecuta desde Steam, **Publicar en Workshop** del gestor de mapas sube uno de tus mapas o campañas a Steam Workshop, y los que suscribas aparecen en sus listas marcados con [Workshop]. Steam los mantiene actualizados, así que no se pueden editar, renombrar ni eliminar; **Duplicar** crea un mapa propio
- Un mapa o una campaña con paquete de contenido requiere ese plugin: compártelo junto con el mapa y publica primero el paquete (la ventana de publicación sugiere entonces el elemento de Workshop del paquete como elemento requerido)
