---
title: "打包发布"
---

不驯之冠提供两种打包方式，将游戏编译为可直接分发的可执行文件。

---

## 方案比较

| 项目 | PyInstaller | Nuitka |
|------|-------------|--------|
| 打包速度 | 快（秒～分钟） | 慢（5～15 分钟） |
| 执行速度 | 与 Python 相同 | 略快（+5%～30%） |
| 源代码保护 | `.pyc` 可反编译 | 编译为 C，极难还原 |
| 发布大小 | 较小 | 较大 |
| C 编译器需求 | 不需要 | 需要 |
| **推荐用途** | **开发测试** | **正式发布** |

---

## 前置准备

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # 生成 game/_ccore.*.pyd
```

C 扩展必须先编译好，否则游戏会退回纯 Python 路径（性能较差）。

---

## PyInstaller

### 安装

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

### 产出

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

### 安装

```bash
pip install nuitka zstandard ordered-set
```

需要 C 编译器（Visual Studio Build Tools 或 MinGW64）。

### 打包指令

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

构建到 `output/main.dist/`（`WaywardCrown.exe` 和它需要的一切），会先删除上一次的构建。`--jobs N`（默认 2；启用 LTO 时每个任务需要数 GB 内存）、`--no-lto`（更快的测试构建）、`--dry-run`（打印 Nuitka 命令）见仓库根目录的 `nuitka.md`。构建会把版本记在 `output/main.dist/edition.json`：默认是试玩版，加上 `--edition full` 则是正式版。

---

## 必须包含的文件

| 类型 | 路径 | 说明 |
|------|------|------|
| C 扩展 | `game/_ccore.cp3XX-*.pyd` | A* 寻路、空间哈希等核心加速 |
| 游戏内容 | `game/content/*.json` | 职业、敌人、建筑定义 |
| 语言包 | `game/lang/*.json` | 15 种语言翻译 |
| 美术资源 | `assets/` | 所有图片、音乐、音效 |
| 战役 | `campaigns/` | 内建教学战役 |
| 插件 | `plugins/` | 第三方扩展 |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| 授权 | `THIRD_PARTY_LICENSES.md` 等 | LGPLv3 合规文件 |

:::caution[Python 版本]
`.pyd` 文件名包含 Python 版本（如 `cp314`）。更换 Python 版本后必须重新编译 C 扩展并更新打包指令中的文件名。
:::