---
title: "Đóng gói và phân phối"
---

Wayward Crown cung cấp hai phương pháp đóng gói để biên dịch trò chơi thành tệp thực thi có thể phân phối trực tiếp.

---

## So sánh phương pháp

| Mục | PyInstaller | Nuitka |
|-----|-------------|--------|
| Tốc độ biên dịch | Nhanh (vài giây đến vài phút) | Chậm (5-15 phút) |
| Tốc độ chạy | Giống Python | Nhanh hơn một chút (+5%-30%) |
| Bảo vệ mã nguồn | `.pyc` có thể bị dịch ngược | Biên dịch sang C, cực kỳ khó dịch ngược |
| Kích thước phân phối | Nhỏ hơn | Lớn hơn |
| Yêu cầu trình biên dịch C | Không | Có |
| **Khuyến nghị sử dụng** | **Phát triển và thử nghiệm** | **Phát hành chính thức** |

---

## Điều kiện tiên quyết

```bash
pip install -r requirements.txt
python setup_ext.py build_ext --inplace   # Tạo game/_ccore.*.pyd
```

Phần mở rộng C phải được biên dịch trước; nếu không trò chơi sẽ chuyển sang đường dẫn Python thuần (hiệu suất thấp hơn).

---

## PyInstaller

### Cài đặt

```bash
pip install pyinstaller
```

### Lệnh biên dịch

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

### Đầu ra

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

### Cài đặt

```bash
pip install nuitka zstandard ordered-set
```

Yêu cầu trình biên dịch C (Visual Studio Build Tools hoặc MinGW64).

### Lệnh biên dịch

```bat
.venv\Scripts\python.exe tools/build_exe.py
```

Biên dịch vào `output/main.dist/` (`WaywardCrown.exe` và mọi thứ nó cần), xóa bản dựng trước đó trước. `--jobs N` (mặc định 2; với LTO mỗi tác vụ cần vài GB), `--no-lto` (bản dựng thử nhanh hơn) và `--dry-run` (in lệnh Nuitka) được giải thích trong `nuitka.md` ở thư mục gốc của kho mã. Bản dựng ghi phiên bản của nó vào `output/main.dist/edition.json`: mặc định là Demo, còn `--edition full` là bản đầy đủ.

---

## Các tệp cần thiết

| Loại | Đường dẫn | Mô tả |
|------|-----------|-------|
| Phần mở rộng C | `game/_ccore.cp3XX-*.pyd` | Tăng tốc lõi cho tìm đường A*, băm không gian, v.v. |
| Nội dung trò chơi | `game/content/*.json` | Định nghĩa lớp nhân vật, kẻ thù và công trình |
| Gói ngôn ngữ | `game/lang/*.json` | Bản dịch 15 ngôn ngữ |
| Tài nguyên đồ họa | `assets/` | Tất cả hình ảnh, nhạc và hiệu ứng âm thanh |
| Chiến dịch | `campaigns/` | Chiến dịch hướng dẫn tích hợp |
| Plugin | `plugins/` | Tiện ích mở rộng bên thứ ba |
| Steam SDK | `steam_sdk/` | Steamworks DLL |
| Giấy phép | `THIRD_PARTY_LICENSES.md` v.v. | Tài liệu tuân thủ LGPLv3 |

:::caution[Phiên bản Python]
Tên tệp `.pyd` bao gồm phiên bản Python (ví dụ: `cp314`). Sau khi chuyển đổi phiên bản Python, bạn phải biên dịch lại phần mở rộng C và cập nhật tên tệp trong lệnh biên dịch.
:::