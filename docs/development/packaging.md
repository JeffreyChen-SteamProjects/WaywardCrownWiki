---
title: "Packaging and Distribution"
---

Wayward Crown offers two packaging methods to compile the game into directly distributable executables.

---

## Method Comparison

| Item | PyInstaller | Nuitka |
|------|-------------|--------|
| Build speed | Fast (seconds to minutes) | Slow (5–15 minutes) |
| Runtime speed | Same as Python | Slightly faster (+5%–30%) |
| Source code protection | `.pyc` can be decompiled | Compiled to C, extremely hard to reverse |
| Distribution size | Smaller | Larger |
| C compiler required | No | Yes |
| **Recommended use** | **Development and testing** | **Production releases** |

---

## Prerequisites

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Produces game/_ccore.*.pyd
```

The C extension must be compiled first; otherwise the game will fall back to a pure Python path (lower performance).

---

## PyInstaller

### Installation

```bash
pip install pyinstaller
```

### Build Command

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

### Output

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

### Installation

```bash
pip install nuitka zstandard ordered-set
```

Requires a C compiler (Visual Studio Build Tools or MinGW64).

### Build Command

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Builds into `output/main.dist/` (`WaywardCrown.exe` and everything it needs), clearing the previous build first. `--jobs N` (default 2; each job needs several GB with LTO), `--no-lto` (quicker test builds) and `--dry-run` (prints the Nuitka command) are covered in `nuitka.md` at the repository root. The build records its edition in `output/main.dist/edition.json`: the Demo by default, the full game with `--edition full`.

---

## Required Files

| Type | Path | Description |
|------|------|-------------|
| C extension | `game/_ccore.cp3XX-*.pyd` | Core acceleration for A* pathfinding, spatial hashing, etc. |
| Game content | `game/content/*.json` | Class, enemy, and building definitions |
| Language packs | `game/lang/*.json` | 15 language translations |
| Art assets | `assets/` | All images, music, and sound effects |
| Campaigns | `campaigns/` | Built-in tutorial campaign |
| Plugins | `plugins/` | Third-party extensions |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| Licenses | `THIRD_PARTY_LICENSES.md` etc. | LGPLv3 compliance documents |

:::caution[Python Version]
The `.pyd` filename includes the Python version (e.g., `cp314`). After switching Python versions, you must recompile the C extension and update the filename in the build command.
:::