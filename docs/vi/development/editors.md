---
title: "Trình chỉnh sửa bản đồ và chiến dịch"
---

Wayward Crown tích hợp sẵn trình chỉnh sửa bản đồ và chiến dịch, cho phép bạn tạo các màn chơi và kịch bản tùy chỉnh.

---

## Trình chỉnh sửa bản đồ

Nút **Trình chỉnh sửa bản đồ** ở menu chính mở trình chỉnh sửa với một bản đồ mới. Các bản đồ đã lưu được liệt kê, chơi, chỉnh sửa, nhập và xuất ở thẻ **Bản đồ** của trình quản lý bản đồ, được mở bằng nút **Chiến dịch** ở menu chính.

### Tính năng

- **Vẽ địa hình** — Chọn loại địa hình và vẽ lên bản đồ bằng cọ (kích thước 1 – 20), hoặc tô đầy một vùng
- **Đặt công trình** — Đặt công trình của người chơi, Căn cứ kẻ thù và rương kho báu, di chuyển Lâu đài, hoặc xóa
- **Ngẫu nhiên** — Tạo một bản đồ ngẫu nhiên để bắt đầu
- **Hoàn tác / Làm lại** — Tối đa 30 bước (Ctrl+Z / Ctrl+Y)
- **Cài đặt bản đồ** — Kích thước (100 – 1000 ô mỗi cạnh), tên, tác giả và các thông tin khác, số vàng khởi đầu và một điều kiện chiến thắng
- **Lưu/Tải** — Lưu bản đồ vào thư mục `maps/`; Đóng, Esc và Mới sẽ hỏi trước khi bỏ các thay đổi chưa lưu (Lưu / Bỏ / Hủy), và bỏ một chiến dịch chưa từng lưu sẽ xóa luôn thư mục của nó

Bản đồ không chứa đơn vị nào: nhà phiêu lưu được tuyển mộ và kẻ thù xuất hiện khi trò chơi bắt đầu chạy.

### Các loại địa hình

- Đồng cỏ, Rừng, Núi, Nước, Sa mạc, Đường, Bùn, Đầm lầy, Tuyết, Đồi, Đất cằn, Đồng hoa

### Định dạng lưu

Bản đồ được lưu ở định dạng JSON trong thư mục `maps/` và bao gồm:

- Dữ liệu địa hình (một mảng NumPy được nén)
- Dữ liệu độ cao
- Công trình, Căn cứ kẻ thù và rương kho báu
- Vị trí Lâu đài
- Thông tin bản đồ, số vàng khởi đầu và điều kiện chiến thắng

---

## Trình chỉnh sửa chiến dịch

Chiến dịch được tạo, mở, nhập và xuất ở thẻ **Chiến dịch** của trình quản lý bản đồ (nút **Chiến dịch** ở menu chính). Mở một chiến dịch sẽ khởi động trình chỉnh sửa bản đồ cùng một bảng chiến dịch, nên bạn chỉnh sửa bản đồ và thiết lập của từng màn ở cùng một nơi.

### Tính năng

- **Sắp xếp màn chơi** — Di chuyển màn lên hoặc xuống bằng các nút mũi tên
- **Điều kiện chiến thắng** — Đặt điều kiện chiến thắng cho từng màn, bao gồm loại căn cứ cho `destroy_building`
- **Văn bản câu chuyện** — Đặt văn bản mở đầu và kết thúc
- **Tài nguyên khởi đầu** — Đặt số vàng ban đầu cho từng màn
- **Chuyển tiếp** — Giữ lại vàng, nhà phiêu lưu và nghiên cứu từ màn trước
- **Giới hạn công trình** — Giới hạn loại công trình mà người chơi có thể sử dụng
- **Kích hoạt** — Tin nhắn kịch bản và mở khóa công trình cho một màn (chỉ màn chiến dịch)
- **Trường vương quốc** — Cấp lâu đài khởi đầu của màn, giới hạn thời gian, lời khuyên trong tóm tắt và tối đa hai phát hiện tùy chọn
- **Mục tiêu bổ sung và điều kiện thua** — Thêm điều kiện thắng, bắt buộc hoặc tùy chọn, và thêm cách thua (anh hùng ngã xuống, công trình hoặc đoàn buôn bị mất), trong hai bảng có Thêm và Gỡ
- **Nguồn của mục tiêu** — Dưới mục tiêu chiến thắng: trùm được đặt trên bản đồ hay do trigger khởi động, loại thành trì là của trò chơi hay của plugin và có bao nhiêu trên bản đồ; mục tiêu của mục tiêu bổ sung cho biết điều tương tự trong chú thích

### Tùy chọn điều kiện chiến thắng

| Loại | Mô tả |
|------|-------|
| `free` | Chế độ tự do, không có điều kiện chiến thắng |
| `destroy_enemy_buildings` | Phá hủy tất cả tiền đồn kẻ thù |
| `survive_ticks` | Sống sót trong khoảng thời gian quy định |
| `reach_gold` | Tích lũy đủ số vàng quy định |
| `destroy_building` | Phá hủy một loại tiền đồn cụ thể |
| `defend` | Bảo vệ Lâu đài trong khoảng thời gian quy định |
| `collect_chests` | Thu thập tất cả rương kho báu |

### Cấu trúc lưu trữ

```
campaigns/my_campaign/
├── campaign.json         # Campaign metadata
├── level1.json           # Level 1 map
├── level2.json           # Level 2 map
└── level3.json           # Level 3 map
```

---

## Chia sẻ nội dung tùy chỉnh

- Thư mục bản đồ và chiến dịch có thể được chia sẻ bằng cách sao chép đơn giản, hoặc bằng chức năng xuất và nhập của trình quản lý bản đồ
- Đặt bản đồ nhận được vào `maps/` để tải từ menu chính
- Đặt chiến dịch nhận được vào `campaigns/` để thấy trong menu chính
- Khi chạy trò chơi qua Steam, nút **Đăng lên Workshop** của trình quản lý bản đồ đưa bản đồ hoặc chiến dịch của bạn lên Steam Workshop, còn những mục bạn đăng ký sẽ hiện trong danh sách với dấu [Workshop]. Steam tự cập nhật chúng nên không thể sửa, đổi tên hay xóa; **Nhân bản** để có bản đồ của riêng bạn
