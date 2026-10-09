---
title: "Paketierung und Distribution"
---

Wayward Crown bietet zwei Paketierungsmethoden, um das Spiel zu direkt verteilbaren Programmen zu kompilieren.

---

## Methodenvergleich

| Eigenschaft | PyInstaller | Nuitka |
|-------------|-------------|--------|
| Build-Geschwindigkeit | Schnell (Sekunden bis Minuten) | Langsam (5–15 Minuten) |
| Laufzeitgeschwindigkeit | Wie Python | Etwas schneller (+5%–30%) |
| Quellcodeschutz | `.pyc` kann dekompiliert werden | Wird zu C kompiliert, extrem schwer zu rekonstruieren |
| Distributionsgröße | Kleiner | Größer |
| C-Compiler erforderlich | Nein | Ja |
| **Empfohlener Einsatz** | **Entwicklung und Tests** | **Produktions-Releases** |

---

## Voraussetzungen

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Erzeugt game/_ccore.*.pyd
```

Die C-Erweiterung muss zuerst kompiliert werden; andernfalls greift das Spiel auf den reinen Python-Pfad zurück (geringere Leistung).

---

## PyInstaller

### Installation

```bash
pip install pyinstaller
```

### Build-Befehl

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

### Ausgabe

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

Erfordert einen C-Compiler (Visual Studio Build Tools oder MinGW64).

### Build-Befehl

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Baut nach `output/main.dist/` (`WaywardCrown.exe` und alles, was es braucht) und entfernt vorher den alten Build. `--jobs N` (Standard 2; jeder Job braucht mit LTO mehrere GB), `--no-lto` (schnellere Test-Builds) und `--dry-run` (gibt den Nuitka-Befehl aus) beschreibt `nuitka.md` im Projektordner. Der Build hält seine Edition in `output/main.dist/edition.json` fest: standardmäßig die Demo, mit `--edition full` die Vollversion.

---

## Erforderliche Dateien

| Typ | Pfad | Beschreibung |
|-----|------|-------------|
| C-Erweiterung | `game/_ccore.cp3XX-*.pyd` | Kernbeschleunigung für A*-Pfadfindung, Spatial Hashing usw. |
| Spielinhalte | `game/content/*.json` | Klassen-, Feind- und Gebäudedefinitionen |
| Sprachpakete | `game/lang/*.json` | 15 Sprachübersetzungen |
| Grafik-Assets | `assets/` | Alle Bilder, Musik und Soundeffekte |
| Kampagnen | `campaigns/` | Integrierte Tutorial-Kampagne |
| Plugins | `plugins/` | Erweiterungen von Drittanbietern |
| Steam SDK | `steam_sdk/` | Steamworks-DLL |
| Lizenzen | `THIRD_PARTY_LICENSES.md` usw. | LGPLv3-Konformitätsdokumente |

:::caution[Python-Version]
Der `.pyd`-Dateiname enthält die Python-Version (z.B. `cp314`). Nach einem Python-Versionswechsel muss die C-Erweiterung neu kompiliert und der Dateiname im Build-Befehl aktualisiert werden.
:::