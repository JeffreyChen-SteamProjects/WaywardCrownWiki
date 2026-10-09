---
title: "打包發布"
---

不馴之冠提供兩種打包方式，將遊戲編譯為可直接分發的執行檔。

---

## 方案比較

| 項目 | PyInstaller | Nuitka |
|------|-------------|--------|
| 打包速度 | 快（秒～分鐘） | 慢（5～15 分鐘） |
| 執行速度 | 與 Python 相同 | 略快（+5%～30%） |
| 原始碼保護 | `.pyc` 可反編譯 | 編譯為 C，極難還原 |
| 發布大小 | 較小 | 較大 |
| C 編譯器需求 | 不需要 | 需要 |
| **推薦用途** | **開發測試** | **正式發布** |

---

## 前置準備

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # 產生 game/_ccore.*.pyd
```

C 擴展必須先編譯好，否則遊戲會退回純 Python 路徑（效能較差）。

---

## PyInstaller

### 安裝

```bash
pip install pyinstaller
```

### 打包指令

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

### 產出

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

### 安裝

```bash
pip install nuitka zstandard ordered-set
```

需要 C 編譯器（Visual Studio Build Tools 或 MinGW64）。

### 打包指令

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

建置到 `output/main.dist/`（`WaywardCrown.exe` 和它需要的一切），會先刪掉上一次的建置。`--jobs N`（預設 2；開啟 LTO 時每個工作需要數 GB 記憶體）、`--no-lto`（較快的測試建置）、`--dry-run`（印出 Nuitka 指令）見 repo 根目錄的 `nuitka.md`。建置會把版本記在 `output/main.dist/edition.json`：預設是試玩版，加上 `--edition full` 則是正式版。

---

## 必須包含的檔案

| 類型 | 路徑 | 說明 |
|------|------|------|
| C 擴展 | `game/_ccore.cp3XX-*.pyd` | A* 尋路、空間雜湊等核心加速 |
| 遊戲內容 | `game/content/*.json` | 職業、敵人、建築定義 |
| 語言包 | `game/lang/*.json` | 15 種語言翻譯 |
| 美術資源 | `assets/` | 所有圖片、音樂、音效 |
| 戰役 | `campaigns/` | 內建教學戰役 |
| 外掛 | `plugins/` | 第三方擴充 |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| 授權 | `THIRD_PARTY_LICENSES.md` 等 | LGPLv3 合規文件 |

:::caution[Python 版本]
`.pyd` 檔名包含 Python 版本（如 `cp314`）。更換 Python 版本後必須重新編譯 C 擴展並更新打包指令中的檔名。
:::