---
title: "Сборка и распространение"
---

Wayward Crown предлагает два метода сборки для компиляции игры в готовые к распространению исполняемые файлы.

---

## Сравнение методов

| Параметр | PyInstaller | Nuitka |
|----------|-------------|--------|
| Скорость сборки | Быстрая (секунды — минуты) | Медленная (5–15 минут) |
| Скорость выполнения | Как у Python | Немного быстрее (+5%–30%) |
| Защита исходного кода | `.pyc` можно декомпилировать | Компилируется в C, крайне сложно декомпилировать |
| Размер дистрибутива | Меньше | Больше |
| Требуется C-компилятор | Нет | Да |
| **Рекомендуется для** | **Разработки и тестирования** | **Релизных сборок** |

---

## Предварительные требования

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Создаёт game/_ccore.*.pyd
```

C-расширение должно быть скомпилировано заранее, иначе игра будет использовать чистый Python-путь (более низкая производительность).

---

## PyInstaller

### Установка

```bash
pip install pyinstaller
```

### Команда сборки

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

### Результат

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

### Установка

```bash
pip install nuitka zstandard ordered-set
```

Требуется C-компилятор (Visual Studio Build Tools или MinGW64).

### Команда сборки

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Собирает в `output/main.dist/` (`WaywardCrown.exe` и всё, что ему нужно), предварительно удалив прошлую сборку. `--jobs N` (по умолчанию 2; с LTO каждому заданию нужно несколько ГБ), `--no-lto` (более быстрые тестовые сборки) и `--dry-run` (выводит команду Nuitka) описаны в `nuitka.md` в корне репозитория. Сборка записывает свою редакцию в `output/main.dist/edition.json`: по умолчанию демо, с `--edition full` — полная версия.

---

## Необходимые файлы

| Тип | Путь | Описание |
|-----|------|----------|
| C-расширение | `game/_ccore.cp3XX-*.pyd` | Ускорение ядра: A*-поиск пути, пространственное хеширование и т.д. |
| Контент игры | `game/content/*.json` | Определения классов, врагов и зданий |
| Языковые пакеты | `game/lang/*.json` | Переводы на 15 языков |
| Графические ресурсы | `assets/` | Все изображения, музыка и звуковые эффекты |
| Кампании | `campaigns/` | Встроенная обучающая кампания |
| Плагины | `plugins/` | Сторонние расширения |
| Steam SDK | `steam_sdk/` | DLL-библиотека Steamworks |
| Лицензии | `THIRD_PARTY_LICENSES.md` и т.д. | Документы соответствия LGPLv3 |

:::caution[Версия Python]
Имя файла `.pyd` включает версию Python (например, `cp314`). После смены версии Python необходимо перекомпилировать C-расширение и обновить имя файла в команде сборки.
:::