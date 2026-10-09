---
title: "Pacchettizzazione e distribuzione"
---

Wayward Crown offre due metodi di pacchettizzazione per compilare il gioco in eseguibili direttamente distribuibili.

---

## Confronto dei metodi

| Voce | PyInstaller | Nuitka |
|------|-------------|--------|
| Velocità di build | Veloce (secondi o minuti) | Lenta (5–15 minuti) |
| Velocità di esecuzione | Uguale a Python | Leggermente più veloce (+5%–30%) |
| Protezione del codice sorgente | `.pyc` decompilabile | Compilato in C, estremamente difficile da decompilare |
| Dimensione della distribuzione | Più piccola | Più grande |
| Compilatore C richiesto | No | Sì |
| **Uso consigliato** | **Sviluppo e test** | **Release di produzione** |

---

## Prerequisiti

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Produce game/_ccore.*.pyd
```

L'estensione C deve essere compilata prima; altrimenti il gioco ricadrà sul percorso Python puro (prestazioni inferiori).

---

## PyInstaller

### Installazione

```bash
pip install pyinstaller
```

### Comando di build

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

### Installazione

```bash
pip install nuitka zstandard ordered-set
```

Richiede un compilatore C (Visual Studio Build Tools o MinGW64).

### Comando di build

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Compila in `output/main.dist/` (`WaywardCrown.exe` e tutto ciò che gli serve), eliminando prima la compilazione precedente. `--jobs N` (predefinito 2; con LTO ogni processo richiede diversi GB), `--no-lto` (compilazioni di prova più rapide) e `--dry-run` (stampa il comando Nuitka) sono spiegati in `nuitka.md`, nella radice del repository. La compilazione registra la propria edizione in `output/main.dist/edition.json`: la Demo per impostazione predefinita, il gioco completo con `--edition full`.

---

## File necessari

| Tipo | Percorso | Descrizione |
|------|----------|-------------|
| Estensione C | `game/_ccore.cp3XX-*.pyd` | Accelerazione principale per pathfinding A*, hashing spaziale, ecc. |
| Contenuti di gioco | `game/content/*.json` | Definizioni di classi, nemici ed edifici |
| Pacchetti lingua | `game/lang/*.json` | Traduzioni in 15 lingue |
| Risorse grafiche | `assets/` | Tutte le immagini, musiche ed effetti sonori |
| Campagne | `campaigns/` | Campagna tutorial integrata |
| Plugin | `plugins/` | Estensioni di terze parti |
| Steam SDK | `steam_sdk/` | DLL di Steamworks |
| Licenze | `THIRD_PARTY_LICENSES.md` ecc. | Documenti di conformità LGPLv3 |

:::caution[Versione di Python]
Il nome del file `.pyd` include la versione di Python (es. `cp314`). Dopo aver cambiato versione di Python, è necessario ricompilare l'estensione C e aggiornare il nome del file nel comando di build.
:::