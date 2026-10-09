---
title: "Empaquetado y Distribución"
---

Wayward Crown ofrece dos métodos de empaquetado para compilar el juego en ejecutables directamente distribuibles.

---

## Comparación de Métodos

| Elemento | PyInstaller | Nuitka |
|----------|-------------|--------|
| Velocidad de compilación | Rápida (segundos a minutos) | Lenta (5–15 minutos) |
| Velocidad de ejecución | Igual que Python | Ligeramente más rápida (+5%–30%) |
| Protección del código fuente | `.pyc` puede descompilarse | Compilado a C, extremadamente difícil de revertir |
| Tamaño de distribución | Menor | Mayor |
| Requiere compilador C | No | Sí |
| **Uso recomendado** | **Desarrollo y pruebas** | **Versiones de producción** |

---

## Requisitos Previos

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Genera game/_ccore.*.pyd
```

La extensión C debe compilarse primero; de lo contrario, el juego recurrirá a una ruta de Python puro (menor rendimiento).

---

## PyInstaller

### Instalación

```bash
pip install pyinstaller
```

### Comando de Compilación

```bat
pyinstaller --noconfirm --clean --name WaywardCrown ^
    --noconsole ^
    --icon "assets/Icons/WaywardCrown.ico" ^
    --add-data "assets;assets" ^
    --add-data "game/content;game/content" ^
    --add-data "game/lang;game/lang" ^
    --add-data "plugins;plugins" ^
    --add-data "campaigns;campaigns" ^
    --add-data "steam_sdk;steam_sdk" ^
    --add-data "THIRD_PARTY_LICENSES.md;." ^
    --add-data "LGPL-3.0.txt;." ^
    --add-data "GPL-3.0.txt;." ^
    --add-binary "game/_ccore.cp314-win_amd64.pyd;game" ^
    --hidden-import PySide6.QtWidgets ^
    --hidden-import PySide6.QtCore ^
    --hidden-import PySide6.QtGui ^
    --hidden-import PySide6.QtOpenGLWidgets ^
    --hidden-import PySide6.QtMultimedia ^
    --hidden-import OpenGL.GL ^
    main.py
```

### Resultado

```
dist/WaywardCrown/
├── WaywardCrown.exe
└── _internal/
    ├── assets/
    ├── game/
    │   ├── _ccore.cp314-win_amd64.pyd
    │   ├── content/
    │   └── lang/
    ├── campaigns/
    └── plugins/
```

---

## Nuitka

### Instalación

```bash
pip install nuitka zstandard ordered-set
```

Requiere un compilador C (Visual Studio Build Tools o MinGW64).

### Comando de Compilación

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Compila en `output/main.dist/` (`WaywardCrown.exe` y todo lo que necesita), borrando antes la compilación anterior. `--jobs N` (2 por defecto; cada tarea necesita varios GB con LTO), `--no-lto` (compilaciones de prueba más rápidas) y `--dry-run` (muestra el comando de Nuitka) se explican en `nuitka.md`, en la raíz del repositorio. La compilación registra su edición en `output/main.dist/edition.json`: la Demo por defecto, el juego completo con `--edition full`.

---

## Archivos Necesarios

| Tipo | Ruta | Descripción |
|------|------|-------------|
| Extensión C | `game/_ccore.cp3XX-*.pyd` | Aceleración principal para pathfinding A*, hashing espacial, etc. |
| Contenido del juego | `game/content/*.json` | Definiciones de clases, enemigos y edificios |
| Paquetes de idioma | `game/lang/*.json` | Traducciones de 15 idiomas |
| Recursos artísticos | `assets/` | Todas las imágenes, música y efectos de sonido |
| Campañas | `campaigns/` | Campaña tutorial integrada |
| Plugins | `plugins/` | Extensiones de terceros |
| Steam SDK | `steam_sdk/` | DLL de Steamworks |
| Licencias | `THIRD_PARTY_LICENSES.md` etc. | Documentos de cumplimiento LGPLv3 |

:::caution[Versión de Python]
El nombre del archivo `.pyd` incluye la versión de Python (por ejemplo, `cp314`). Después de cambiar de versión de Python, debes recompilar la extensión C y actualizar el nombre del archivo en el comando de compilación.
:::