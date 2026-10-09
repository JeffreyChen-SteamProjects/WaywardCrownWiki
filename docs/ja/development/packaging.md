---
title: "パッケージングと配布"
---

ウェイワード・クラウンでは、ゲームを直接配布可能な実行ファイルにコンパイルする2つの方法を提供しています。

---

## 方法の比較

| 項目 | PyInstaller | Nuitka |
|------|-------------|--------|
| ビルド速度 | 高速（数秒～数分） | 低速（5～15分） |
| 実行速度 | Pythonと同等 | やや高速（+5%～30%） |
| ソースコード保護 | `.pyc` は逆コンパイル可能 | Cにコンパイルされるため、リバース極めて困難 |
| 配布サイズ | 小さい | 大きい |
| Cコンパイラ必要 | 不要 | 必要 |
| **推奨用途** | **開発・テスト** | **本番リリース** |

---

## 前提条件

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # game/_ccore.*.pyd を生成
```

C拡張を先にコンパイルする必要があります。コンパイルしない場合、ゲームはPure Pythonパスにフォールバックします（パフォーマンス低下）。

---

## PyInstaller

### インストール

```bash
pip install pyinstaller
```

### ビルドコマンド

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

### 出力

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

### インストール

```bash
pip install nuitka zstandard ordered-set
```

Cコンパイラ（Visual Studio Build ToolsまたはMinGW64）が必要です。

### ビルドコマンド

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

`output/main.dist/`（`WaywardCrown.exe` と必要なものすべて）にビルドし、前回のビルドは先に削除します。`--jobs N`（既定 2。LTO では 1 ジョブに数 GB 必要）、`--no-lto`（速いテスト用ビルド）、`--dry-run`（Nuitka のコマンドを表示）はリポジトリ直下の `nuitka.md` を参照してください。ビルドはエディションを `output/main.dist/edition.json` に記録します。既定はデモ版で、`--edition full` を付けると製品版になります。

---

## 必要なファイル

| タイプ | パス | 説明 |
|------|------|-------------|
| C拡張 | `game/_ccore.cp3XX-*.pyd` | A*パスファインディング、空間ハッシュ等のコア高速化 |
| ゲームコンテンツ | `game/content/*.json` | クラス、敵、建物の定義 |
| 言語パック | `game/lang/*.json` | 15言語の翻訳 |
| アートアセット | `assets/` | すべての画像、音楽、効果音 |
| キャンペーン | `campaigns/` | 内蔵チュートリアルキャンペーン |
| プラグイン | `plugins/` | サードパーティ拡張 |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| ライセンス | `THIRD_PARTY_LICENSES.md` 等 | LGPLv3準拠文書 |

:::caution[Pythonバージョン]
`.pyd` ファイル名にはPythonバージョン（例：`cp314`）が含まれます。Pythonバージョンを変更した後は、C拡張を再コンパイルし、ビルドコマンドのファイル名を更新する必要があります。
:::