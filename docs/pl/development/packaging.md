---
title: "Pakowanie i dystrybucja"
---

Wayward Crown oferuje dwie metody pakowania, umożliwiające kompilację gry do bezpośrednio dystrybuowalnych plików wykonywalnych.

---

## Porównanie metod

| Pozycja | PyInstaller | Nuitka |
|---------|-------------|--------|
| Szybkość kompilacji | Szybka (sekundy do minut) | Wolna (5–15 minut) |
| Szybkość działania | Taka sama jak Python | Nieco szybsza (+5%–30%) |
| Ochrona kodu źródłowego | `.pyc` można zdekompilować | Kompilacja do C, ekstremalnie trudna do odtworzenia |
| Rozmiar dystrybucji | Mniejszy | Większy |
| Wymagany kompilator C | Nie | Tak |
| **Zalecane zastosowanie** | **Rozwój i testowanie** | **Wydania produkcyjne** |

---

## Wymagania wstępne

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Tworzy game/_ccore.*.pyd
```

Rozszerzenie C musi być skompilowane jako pierwsze; w przeciwnym razie gra przełączy się na ścieżkę czysto pythonową (niższa wydajność).

---

## PyInstaller

### Instalacja

```bash
pip install pyinstaller
```

### Polecenie kompilacji

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

### Wynik

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

### Instalacja

```bash
pip install nuitka zstandard ordered-set
```

Wymaga kompilatora C (Visual Studio Build Tools lub MinGW64).

### Polecenie kompilacji

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Buduje do `output/main.dist/` (`WaywardCrown.exe` i wszystko, czego potrzebuje), najpierw usuwając poprzednią kompilację. `--jobs N` (domyślnie 2; z LTO każde zadanie potrzebuje kilku GB), `--no-lto` (szybsze kompilacje testowe) i `--dry-run` (wypisuje polecenie Nuitki) opisuje `nuitka.md` w katalogu głównym repozytorium. Kompilacja zapisuje swoją edycję w `output/main.dist/edition.json`: domyślnie Demo, a z `--edition full` pełną wersję.

---

## Wymagane pliki

| Typ | Ścieżka | Opis |
|-----|---------|------|
| Rozszerzenie C | `game/_ccore.cp3XX-*.pyd` | Rdzeń przyspieszenia dla wyszukiwania ścieżek A*, hashowania przestrzennego itp. |
| Zawartość gry | `game/content/*.json` | Definicje klas, wrogów i budynków |
| Pakiety językowe | `game/lang/*.json` | Tłumaczenia na 15 języków |
| Zasoby graficzne | `assets/` | Wszystkie obrazy, muzyka i efekty dźwiękowe |
| Kampanie | `campaigns/` | Wbudowana kampania samouczka |
| Pluginy | `plugins/` | Rozszerzenia stron trzecich |
| Steam SDK | `steam_sdk/` | Biblioteka DLL Steamworks |
| Licencje | `THIRD_PARTY_LICENSES.md` itp. | Dokumenty zgodności z LGPLv3 |

:::caution[Wersja Pythona]
Nazwa pliku `.pyd` zawiera wersję Pythona (np. `cp314`). Po zmianie wersji Pythona należy ponownie skompilować rozszerzenie C i zaktualizować nazwę pliku w poleceniu kompilacji.
:::