---
title: "Empaquetage et distribution"
---

Wayward Crown propose deux méthodes d'empaquetage pour compiler le jeu en exécutables directement distribuables.

---

## Comparaison des méthodes

| Élément | PyInstaller | Nuitka |
|---------|-------------|--------|
| Vitesse de compilation | Rapide (secondes à minutes) | Lente (5 à 15 minutes) |
| Vitesse d'exécution | Identique à Python | Légèrement plus rapide (+5 % à 30 %) |
| Protection du code source | `.pyc` peut être décompilé | Compilé en C, extrêmement difficile à rétro-ingénierer |
| Taille de la distribution | Plus petite | Plus grande |
| Compilateur C requis | Non | Oui |
| **Utilisation recommandée** | **Développement et tests** | **Versions de production** |

---

## Prérequis

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Produit game/_ccore.*.pyd
```

L'extension C doit être compilée en premier ; sinon le jeu utilisera un chemin Python pur (performances réduites).

---

## PyInstaller

### Installation

```bash
pip install pyinstaller
```

### Commande de compilation

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

### Sortie

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

Nécessite un compilateur C (Visual Studio Build Tools ou MinGW64).

### Commande de compilation

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Compile vers `output/main.dist/` (`WaywardCrown.exe` et tout ce dont il a besoin), après avoir supprimé la compilation précédente. `--jobs N` (2 par défaut ; chaque tâche demande plusieurs Go avec LTO), `--no-lto` (compilations de test plus rapides) et `--dry-run` (affiche la commande Nuitka) sont décrits dans `nuitka.md`, à la racine du dépôt. Le build consigne son édition dans `output/main.dist/edition.json` : la Démo par défaut, le jeu complet avec `--edition full`.

---

## Fichiers requis

| Type | Chemin | Description |
|------|--------|-------------|
| Extension C | `game/_ccore.cp3XX-*.pyd` | Accélération de base pour le pathfinding A*, le hachage spatial, etc. |
| Contenu du jeu | `game/content/*.json` | Définitions des classes, ennemis et bâtiments |
| Packs de langue | `game/lang/*.json` | Traductions en 15 langues |
| Ressources graphiques | `assets/` | Toutes les images, musiques et effets sonores |
| Campagnes | `campaigns/` | Campagne tutoriel intégrée |
| Plugins | `plugins/` | Extensions tierces |
| SDK Steam | `steam_sdk/` | DLL Steamworks |
| Licences | `THIRD_PARTY_LICENSES.md` etc. | Documents de conformité LGPLv3 |

:::caution[Version de Python]
Le nom du fichier `.pyd` inclut la version de Python (ex. `cp314`). Après un changement de version de Python, vous devez recompiler l'extension C et mettre à jour le nom du fichier dans la commande de compilation.
:::