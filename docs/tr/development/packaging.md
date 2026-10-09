---
title: "Paketleme ve Dağıtım"
---

Wayward Crown, oyunu doğrudan dağıtılabilir çalıştırılabilir dosyalara derlemek için iki paketleme yöntemi sunar.

---

## Yöntem Karşılaştırması

| Öğe | PyInstaller | Nuitka |
|-----|-------------|--------|
| Derleme hızı | Hızlı (saniyeler ila dakikalar) | Yavaş (5-15 dakika) |
| Çalışma hızı | Python ile aynı | Biraz daha hızlı (+%5-%30) |
| Kaynak kodu koruması | `.pyc` decompile edilebilir | C'ye derlenir, tersine mühendislik çok zor |
| Dağıtım boyutu | Daha küçük | Daha büyük |
| C derleyicisi gerekli | Hayır | Evet |
| **Önerilen kullanım** | **Geliştirme ve test** | **Üretim sürümleri** |

---

## Ön Koşullar

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # game/_ccore.*.pyd dosyasını üretir
```

C uzantısı önce derlenmelidir; aksi takdirde oyun saf Python yoluna geri döner (daha düşük performans).

---

## PyInstaller

### Kurulum

```bash
pip install pyinstaller
```

### Derleme Komutu

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

### Çıktı

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

### Kurulum

```bash
pip install nuitka zstandard ordered-set
```

Bir C derleyicisi gerektirir (Visual Studio Build Tools veya MinGW64).

### Derleme Komutu

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

`output/main.dist/` içine derler (`WaywardCrown.exe` ve ihtiyaç duyduğu her şey), önce önceki derlemeyi siler. `--jobs N` (varsayılan 2; LTO ile her iş birkaç GB ister), `--no-lto` (daha hızlı deneme derlemeleri) ve `--dry-run` (Nuitka komutunu yazdırır) depo kökündeki `nuitka.md` dosyasında anlatılır. Derleme, sürümünü `output/main.dist/edition.json` dosyasına yazar: varsayılan Demo'dur, `--edition full` ile tam sürüm olur.

---

## Gerekli Dosyalar

| Tür | Yol | Açıklama |
|-----|-----|----------|
| C uzantısı | `game/_ccore.cp3XX-*.pyd` | A* yol bulma, mekansal hashing vb. için çekirdek hızlandırma |
| Oyun içeriği | `game/content/*.json` | Sınıf, düşman ve bina tanımları |
| Dil paketleri | `game/lang/*.json` | 15 dil çevirisi |
| Görsel varlıklar | `assets/` | Tüm görseller, müzikler ve ses efektleri |
| Kampanyalar | `campaigns/` | Yerleşik eğitim kampanyası |
| Eklentiler | `plugins/` | Üçüncü taraf uzantılar |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| Lisanslar | `THIRD_PARTY_LICENSES.md` vb. | LGPLv3 uyumluluk belgeleri |

:::caution[Python Sürümü]
`.pyd` dosya adı Python sürümünü içerir (örn. `cp314`). Python sürümünü değiştirdikten sonra C uzantısını yeniden derlemeniz ve derleme komutundaki dosya adını güncellemeniz gerekir.
:::