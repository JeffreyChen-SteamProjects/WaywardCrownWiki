---
title: "Bản đồ và địa hình"
---

Bản đồ trò chơi được hiển thị bằng phép chiếu đẳng cự 2:1 và hỗ trợ nhiều loại địa hình.

---

## Thông số bản đồ

| Thuộc tính | Giá trị |
|------------|---------|
| Kích thước mặc định | 1000 x 1000 ô |
| Phạm vi điều chỉnh | 250 ~ 1000 ô |
| Kích thước ô | 256 pixel |
| Phép chiếu | Đẳng cự 2:1 (hình thoi) |

---

## Các loại địa hình

| Địa hình | Đi qua được | Chi phí di chuyển | Độ cao cơ bản | Kẻ thù sinh ra |
|----------|-------------|-------------------|---------------|----------------|
| **Đồng cỏ** | Có | 1 | 0 | Chuột khổng lồ, Thổ phỉ, Harpy |
| **Rừng** | Có | 2 | 0.5 | Slime, Zombie, Sói dữ, Nhện khổng lồ, Giáo đồ bóng tối |
| **Núi** | Có | 3 | 5.0 | Goblin, Bộ xương, Rồng, Orc lực lưỡng, Cung thủ Goblin, Troll |
| **Nước** | Không | -- | -1.0 | -- |
| **Thị trấn** | Có | 1 | 0 | -- |
| **Đường** | Có | 1 | 0 | -- |
| **Đầm lầy** | Có | 3 | -0.3 | -- |
| **Sa mạc** | Có | 2 | 0.2 | Oan hồn cát |
| **Bùn** | Có | 2 | -0.1 | -- |
| **Tuyết** | Có | 1 | 0.2 | Chuột khổng lồ, Thổ phỉ, Harpy |
| **Đồi** | Có | 1 | 1.6 | Chuột khổng lồ, Thổ phỉ, Harpy |
| **Đất cằn** | Có | 2 | 0.3 | Oan hồn cát |
| **Đồng hoa** | Có | 1 | 0 | Chuột khổng lồ, Thổ phỉ, Harpy |

:::tip[Chi phí di chuyển]
Số thấp hơn có nghĩa là di chuyển nhanh hơn. Đường và Thị trấn có chi phí di chuyển thấp nhất (1), trong khi Núi và Đầm lầy có chi phí cao nhất (3). Sử dụng đường đi tốt có thể cải thiện đáng kể hiệu quả di chuyển của nhà phiêu lưu.
:::

---

## Sương mù chiến tranh

Bản đồ có ba lớp khả kiến:

| Trạng thái | Độ sáng | Mô tả |
|------------|---------|-------|
| **Chưa khám phá** | 0 (tối hoàn toàn) | Chưa từng được nhà phiêu lưu hay công trình nào nhìn thấy |
| **Đã khám phá** | 115 (xám đen) | Đã nhìn thấy trước đó nhưng hiện không nằm trong tầm nhìn |
| **Đang nhìn thấy** | 255 (sáng hoàn toàn) | Hiện đang nằm trong tầm nhìn của nhà phiêu lưu hoặc công trình |

**Cái gì được vẽ ở đâu.** Những gì của bạn luôn được vẽ: công trình, anh hùng, dân làng, người thu thuế, đoàn buôn và cờ treo thưởng, kể cả trên vùng đất không ai nhìn thấy. Một hang ổ hay phế tích cổ được vẽ ngay khi bất kỳ phần nào của nó đã được nhìn thấy, và cứ thế ở lại. Từ đó các anh hùng cũng biết đến hang ổ ấy và có thể tự mình tấn công nó. Quái vật chỉ được vẽ khi có anh hùng nhìn thấy chúng. Các cổng của một khe nứt chiều không được vẽ thành những vòng sáng tím ngay khi vùng đất của chúng đã được nhìn thấy.

### Nguồn tầm nhìn

| Nguồn | Tầm nhìn |
|-------|----------|
| Lâu đài | 30 ô |
| Nhà phiêu lưu (cơ bản) | 8 ô |
| Pháp sư (tầm xa) | 12 ô |
| Xạ thủ (tầm xa) | 11 ô |
| Công trình phòng thủ (Tháp bắn tên) | 16 ô |
| Công trình thường | 7 ô |
| Căn cứ kẻ thù | 10 ô |

:::note[Tầm nhìn nhà phiêu lưu tầm xa]
Pháp sư và Xạ thủ nhìn xa đúng bằng tầm tấn công của mình (12 và 11 ô), nhờ đó người chơi thấy được mục tiêu đang bị tấn công.
:::

---

## Tạo bản đồ

Bản đồ Chế độ tự do được tạo ngẫu nhiên bằng thuật toán **Value Noise**:

1. Tạo nhiễu địa hình -> xác định loại địa hình
2. Tạo nhiễu độ cao -> xác định biến đổi độ cao
3. Đặt Lâu đài -> thiết lập khu vực Thị trấn tại một điểm ngẫu nhiên trong nửa trung tâm bản đồ
4. Rải rương kho báu -> max(10, 250 × W × H ÷ 1000²) rương phân bố khắp vùng hoang dã
5. Tạo Căn cứ kẻ thù -> đặt xa Lâu đài

---

## Rương kho báu

| Thuộc tính | Giá trị |
|------------|---------|
| Số lượng ban đầu | max(10, 250 × W × H ÷ 1000²) |
| Phạm vi vàng | 20 ~ 55g |
| Vị trí | Khu vực đi qua được bên ngoài Thị trấn |

Nhà phiêu lưu tự động nhặt rương kho báu khi đi qua. Với kỹ năng nghiên cứu "Giác quan kho báu", số vàng được tăng thêm +50%. Rương đã mở vẫn nằm tại chỗ với nắp bật ra sau trong hai phút thời gian trò chơi, rồi biến mất. Nó không cản việc xây dựng, và công trình đặt đè lên sẽ dọn nó đi.
