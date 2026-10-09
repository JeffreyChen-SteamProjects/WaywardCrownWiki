---
title: "패키징 및 배포"
---

웨이워드 크라운은 게임을 바로 배포 가능한 실행 파일로 컴파일하는 두 가지 패키징 방법을 제공합니다.

---

## 방법 비교

| 항목 | PyInstaller | Nuitka |
|------|-------------|--------|
| 빌드 속도 | 빠름 (수초~수분) | 느림 (5~15분) |
| 실행 속도 | Python과 동일 | 약간 더 빠름 (+5%~30%) |
| 소스 코드 보호 | `.pyc` 디컴파일 가능 | C로 컴파일, 역공학 매우 어려움 |
| 배포 크기 | 작음 | 큼 |
| C 컴파일러 필요 | 아니오 | 예 |
| **권장 용도** | **개발 및 테스트** | **프로덕션 릴리스** |

---

## 사전 준비

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # game/_ccore.*.pyd 생성
```

C 확장을 먼저 컴파일해야 합니다. 그렇지 않으면 게임이 순수 Python 경로로 대체되어 성능이 저하됩니다.

---

## PyInstaller

### 설치

```bash
pip install pyinstaller
```

### 빌드 명령

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

### 출력

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

### 설치

```bash
pip install nuitka zstandard ordered-set
```

C 컴파일러(Visual Studio Build Tools 또는 MinGW64)가 필요합니다.

### 빌드 명령

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

`output/main.dist/`(`WaywardCrown.exe`와 필요한 모든 것)에 빌드하며, 이전 빌드는 먼저 지웁니다. `--jobs N`(기본 2, LTO에서는 작업 하나에 수 GB 필요), `--no-lto`(더 빠른 테스트 빌드), `--dry-run`(Nuitka 명령 출력)은 저장소 루트의 `nuitka.md`를 참고하세요. 빌드는 에디션을 `output/main.dist/edition.json`에 기록합니다. 기본은 데모이고, `--edition full`을 주면 정식 버전입니다.

---

## 필수 파일

| 유형 | 경로 | 설명 |
|------|------|-------------|
| C 확장 | `game/_ccore.cp3XX-*.pyd` | A* 경로 탐색, 공간 해싱 등의 핵심 가속 모듈 |
| 게임 콘텐츠 | `game/content/*.json` | 클래스, 적, 건물 정의 |
| 언어 팩 | `game/lang/*.json` | 15개 언어 번역 |
| 아트 에셋 | `assets/` | 모든 이미지, 음악, 효과음 |
| 캠페인 | `campaigns/` | 내장 튜토리얼 캠페인 |
| 플러그인 | `plugins/` | 서드파티 확장 |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| 라이선스 | `THIRD_PARTY_LICENSES.md` 등 | LGPLv3 준수 문서 |

:::caution[Python 버전]
`.pyd` 파일명에는 Python 버전이 포함되어 있습니다(예: `cp314`). Python 버전을 변경한 후에는 C 확장을 다시 컴파일하고 빌드 명령의 파일명을 업데이트해야 합니다.
:::