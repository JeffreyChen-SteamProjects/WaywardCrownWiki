---
title: "Empacotamento e Distribuição"
---

Wayward Crown oferece dois métodos de empacotamento para compilar o jogo em executáveis diretamente distribuíveis.

---

## Comparação de Métodos

| Item | PyInstaller | Nuitka |
|------|-------------|--------|
| Velocidade de build | Rápido (segundos a minutos) | Lento (5-15 minutos) |
| Velocidade de execução | Igual ao Python | Ligeiramente mais rápido (+5%-30%) |
| Proteção do código-fonte | `.pyc` pode ser descompilado | Compilado para C, extremamente difícil de reverter |
| Tamanho da distribuição | Menor | Maior |
| Compilador C necessário | Não | Sim |
| **Uso recomendado** | **Desenvolvimento e testes** | **Versões de produção** |

---

## Pré-requisitos

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Produz game/_ccore.*.pyd
```

A extensão C deve ser compilada primeiro; caso contrário, o jogo utilizará o caminho Python puro (menor desempenho).

---

## PyInstaller

### Instalação

```bash
pip install pyinstaller
```

### Comando de Build

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

### Saída

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

### Instalação

```bash
pip install nuitka zstandard ordered-set
```

Requer um compilador C (Visual Studio Build Tools ou MinGW64).

### Comando de Build

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Compila em `output/main.dist/` (`WaywardCrown.exe` e tudo de que ele precisa), apagando antes o build anterior. `--jobs N` (padrão 2; com LTO cada tarefa precisa de vários GB), `--no-lto` (builds de teste mais rápidos) e `--dry-run` (mostra o comando do Nuitka) estão explicados em `nuitka.md`, na raiz do repositório. O build registra sua edição em `output/main.dist/edition.json`: a Demo por padrão, o jogo completo com `--edition full`.

---

## Arquivos Necessários

| Tipo | Caminho | Descrição |
|------|---------|-----------|
| Extensão C | `game/_ccore.cp3XX-*.pyd` | Aceleração central para pathfinding A*, hashing espacial, etc. |
| Conteúdo do jogo | `game/content/*.json` | Definições de classes, inimigos e construções |
| Pacotes de idioma | `game/lang/*.json` | Traduções para 15 idiomas |
| Recursos visuais | `assets/` | Todas as imagens, músicas e efeitos sonoros |
| Campanhas | `campaigns/` | Campanha tutorial integrada |
| Plugins | `plugins/` | Extensões de terceiros |
| Steam SDK | `steam_sdk/` | DLL do Steamworks |
| Licenças | `THIRD_PARTY_LICENSES.md` etc. | Documentos de conformidade LGPLv3 |

:::caution[Versão do Python]
O nome do arquivo `.pyd` inclui a versão do Python (ex.: `cp314`). Após trocar a versão do Python, você deve recompilar a extensão C e atualizar o nome do arquivo no comando de build.
:::