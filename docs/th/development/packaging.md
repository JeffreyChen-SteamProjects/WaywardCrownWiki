---
title: "การแพ็กเกจและการแจกจ่าย"
---

Wayward Crown มีวิธีการแพ็กเกจสองแบบเพื่อคอมไพล์เกมเป็นไฟล์ปฏิบัติการที่แจกจ่ายได้โดยตรง

---

## การเปรียบเทียบวิธีการ

| รายการ | PyInstaller | Nuitka |
|--------|-------------|--------|
| ความเร็วในการบิลด์ | เร็ว (วินาทีถึงนาที) | ช้า (5–15 นาที) |
| ความเร็วขณะรัน | เท่ากับ Python | เร็วขึ้นเล็กน้อย (+5%–30%) |
| การป้องกันซอร์สโค้ด | `.pyc` สามารถดีคอมไพล์ได้ | คอมไพล์เป็น C ยากมากในการย้อนกลับ |
| ขนาดไฟล์แจกจ่าย | เล็กกว่า | ใหญ่กว่า |
| ต้องการคอมไพเลอร์ C | ไม่ | ใช่ |
| **แนะนำสำหรับ** | **การพัฒนาและทดสอบ** | **การเผยแพร่เวอร์ชันจริง** |

---

## ข้อกำหนดเบื้องต้น

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # สร้าง game/_ccore.*.pyd
```

ต้องคอมไพล์ส่วนขยาย C ก่อน มิฉะนั้นเกมจะถอยกลับไปใช้เส้นทาง Python ล้วน (ประสิทธิภาพต่ำกว่า)

---

## PyInstaller

### การติดตั้ง

```bash
pip install pyinstaller
```

### คำสั่งบิลด์

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

### ผลลัพธ์

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

### การติดตั้ง

```bash
pip install nuitka zstandard ordered-set
```

ต้องมีคอมไพเลอร์ C (Visual Studio Build Tools หรือ MinGW64)

### คำสั่งบิลด์

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

สร้างไปที่ `output/main.dist/` (`WaywardCrown.exe` และทุกอย่างที่ต้องใช้) โดยลบงานสร้างครั้งก่อนออกก่อน `--jobs N` (ค่าเริ่มต้น 2 และเมื่อใช้ LTO แต่ละงานต้องใช้หน่วยความจำหลาย GB), `--no-lto` (สร้างเพื่อทดสอบได้เร็วขึ้น) และ `--dry-run` (แสดงคำสั่ง Nuitka) อธิบายไว้ใน `nuitka.md` ที่รากของรีโพซิทอรี งานสร้างจะบันทึกเวอร์ชันไว้ใน `output/main.dist/edition.json` โดยค่าเริ่มต้นคือเดโม และเป็นเกมเต็มเมื่อใช้ `--edition full`

---

## ไฟล์ที่จำเป็น

| ประเภท | เส้นทาง | คำอธิบาย |
|--------|---------|----------|
| ส่วนขยาย C | `game/_ccore.cp3XX-*.pyd` | การเร่งความเร็วหลักสำหรับการค้นหาเส้นทาง A*, spatial hashing ฯลฯ |
| เนื้อหาเกม | `game/content/*.json` | นิยามคลาส ศัตรู และอาคาร |
| ชุดภาษา | `game/lang/*.json` | คำแปล 15 ภาษา |
| แอสเซทกราฟิก | `assets/` | รูปภาพ เพลง และเอฟเฟกต์เสียงทั้งหมด |
| แคมเปญ | `campaigns/` | แคมเปญบทเรียนในตัว |
| ปลั๊กอิน | `plugins/` | ส่วนขยายของบุคคลที่สาม |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| สัญญาอนุญาต | `THIRD_PARTY_LICENSES.md` ฯลฯ | เอกสารการปฏิบัติตาม LGPLv3 |

:::caution[เวอร์ชัน Python]
ชื่อไฟล์ `.pyd` รวมเวอร์ชัน Python (เช่น `cp314`) หลังจากเปลี่ยนเวอร์ชัน Python คุณต้องคอมไพล์ส่วนขยาย C ใหม่และอัปเดตชื่อไฟล์ในคำสั่งบิลด์
:::