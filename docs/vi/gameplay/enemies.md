---
title: "Kẻ thù"
---

Kẻ thù xuất hiện tự nhiên trong các vùng hoang dã trên bản đồ, đe dọa nhà phiêu lưu và lâu đài của bạn.

---

## Các loại kẻ thù

| Kẻ thù | HP | ATK | DEF | Tốc độ | XP | Vàng | Tầm tấn công | Tầm nhìn | Địa hình sinh | Mức nguy hiểm |
|---------|-----|-----|-----|--------|-----|------|-------------|---------|--------------|--------------|
| **Slime** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Rừng | 1 |
| **Goblin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Núi | 2 |
| **Bộ xương** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Núi | 3 |
| **Zombie** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Rừng | 4 |
| **Rồng** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Núi | 5 |
| **Sói dữ** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Rừng | 2 |
| **Orc lực lưỡng** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Núi | 4 |
| **Cung thủ Goblin** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Núi | 3 |
| **Oan hồn cát** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Sa mạc | 3 |
| **Giáo đồ bóng tối** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Rừng | 3 |
| **Troll** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Núi | 5 |
| **Nhện khổng lồ** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Rừng | 2 |
| **Chuột khổng lồ** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Đồng cỏ | 1 |
| **Thổ phỉ** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Đồng cỏ | 2 |
| **Harpy** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Đồng cỏ | 3 |

Rồng, Cung thủ Goblin và Giáo đồ bóng tối bắn đạn (lần lượt là luồng lửa, mũi tên thô và cầu bóng tối); các loại còn lại tấn công từ khoảng cách tối đa 3 ô.

Kẻ địch đến lượt một lần sau mỗi 4 tick. Tốc độ cho nó một bước sau mỗi 3 ÷ tốc độ lượt, làm tròn xuống (ít nhất 1), rồi mọi kẻ địch còn đi nhanh thêm một nửa: số lượt chờ được chia cho 1.5, phần lẻ dồn sang các bước sau và không bao giờ ít hơn một lượt. Vì vậy tốc độ từ 1.6 trở lên đi một bước mỗi lượt, ở 1.1–1.4 đi ba bước trong 4 lượt, ở 0.8–1.0 mỗi 2 lượt một bước, Troll đi ba bước trong 8 lượt và ở 0.6 đi ba bước trong 10 lượt.

### Cấp bậc

Khi phường hội của bạn lớn lên (số nhà phiêu lưu cộng số Chợ), một số quái vật xuất hiện với cấp bậc nhân chỉ số và phần thưởng của chúng. Tối đa một phần tư số quái vật đang sống có cấp bậc, trừ khi đang có sự kiện Quái vật nổi dậy, lúc đó mọi quái vật sinh ra đều ít nhất là Lão luyện.

| Cấp bậc | Từ quy mô phường hội | Tỷ lệ | HP | ATK | DEF | XP | Vàng | Tầm nhìn |
|---------|----------------------|-------|----|-----|-----|----|------|----------|
| **Lão luyện** | 8 | 16% | ×1.5 | ×1.25 | ×1.2 | ×1.6 | ×1.8 | +2 |
| **Tinh nhuệ** | 22 | 8% | ×2.5 | ×1.6 | ×1.5 | ×2.5 | ×3 | +4 |
| **Quán quân** | 45 | 3% | ×4.5 | ×2.2 | ×2 | ×4 | ×6 | +6 |

---

## Hành vi kẻ thù

### Lang thang

- Kẻ thù đi lang thang gần điểm sinh của chúng
- Chúng có tầm nhìn và sẽ chủ động đuổi theo nhà phiêu lưu khi phát hiện
- Mỗi tick, một phần tư số kẻ thù (theo nhóm luân phiên) chạy logic lang thang, nên mỗi con cập nhật tối đa mỗi 4 tick một lần

### Ưu tiên mục tiêu

Kẻ thù tấn công mục tiêu theo thứ tự sau:

1. **Nhà phiêu lưu sẵn sàng chiến đấu** (không phải hòa bình)
2. **Thợ xây** (nhà phiêu lưu hòa bình)
3. **Tháp bắn tên** (công trình đe dọa)
4. **Lâu đài**
5. **Công trình khác**

### Đường xâm lăng

Khi sự kiện xâm lăng kích hoạt, kẻ thù đi thẳng đến lâu đài của người chơi theo đường ngắn nhất.

---

## Sinh kẻ thù

| Cài đặt | Giá trị |
|---------|---------|
| Khoảng cách sinh | 35 giây thời gian trong game, bớt 1 giây cho mỗi nhà phiêu lưu hoặc Chợ, tối thiểu 5 giây (giảm một nửa ở các màn chiến dịch Phòng thủ) |
| Số lượng tối đa | `(adventurers + Markets) × 2` (điều chỉnh trong cài đặt độ khó), giảm dần khi các Căn cứ kẻ thù bị san bằng, xuống thấp nhất 25% |
| Tối thiểu cơ bản | Ít nhất 6 con |

Kẻ thù sinh dựa trên **loại địa hình**:

- **Rừng** — Slime, Zombie, Sói dữ, Giáo đồ bóng tối, Nhện khổng lồ
- **Núi** — Goblin, Bộ xương, Rồng, Orc lực lưỡng, Cung thủ Goblin, Troll
- **Đồng cỏ** — Chuột khổng lồ, Thổ phỉ, Harpy
- **Sa mạc** — Oan hồn cát

:::note[Rồng]
Rồng và Troll là những kẻ thù nguy hiểm nhất (mức nguy hiểm 5). Với tầm tấn công 16, 550 HP và luồng lửa làm đạn, cách tốt nhất để đối phó với Rồng là dùng nhà phiêu lưu tầm xa và tháp bắn tên; Troll có nhiều HP và sức tấn công hơn nhưng phải áp sát mới đánh được.
:::

---

## Cơ chế đặc biệt của Rồng

- **Tấn công tầm xa**: Tầm tấn công 16, phun luồng lửa
- **Cơ động cao**: Tốc độ 1.4, đi ba bước trong 4 lượt: nhanh bằng Chuột khổng lồ, Nhện khổng lồ và Thổ phỉ; chỉ Harpy và Sói dữ (mỗi lượt một bước) là nhanh hơn
- **Tầm nhìn rộng**: Tầm nhìn 32 ô, có thể phát hiện nhà phiêu lưu từ rất xa
- **Né tránh**: Tất cả kẻ thù có tỷ lệ né cơ bản 5%

**Áp lực**: ba mối đe dọa sinh ra từ cách cai quản vương quốc chứ không phải từ hang ổ. Mỗi mối được báo trước một phút trong biên niên sử và tổng quan, gửi một bầy 3 con (không bao giờ quá 6 quái vật của nó còn sống, như nhau dù bạn mạnh đến đâu), và bị hủy khi nguyên nhân được khắc phục. *Bẩn thỉu*: thị trấn 16 công trình không có đài phun nước hay khu vườn sẽ kéo chuột khổng lồ tới; mỗi đài phun nước hoặc khu vườn lo được 6 công trình. *Người chết không yên*: 3 anh hùng nằm chết mà không có đền thờ sẽ trỗi dậy thành bộ xương nơi người cuối cùng ngã xuống; đền thờ hoặc việc hồi sinh họ sẽ giữ chúng nằm yên, còn vương quốc theo con đường Xác sống có Nhà Hài Cốt sẽ nhận chúng làm lính gác. *Hoang dã*: công trình cách lâu đài hơn 60 ô mà không có tháp tên hay trạm gác trong vòng 12 ô sẽ kéo sói dữ tới; trạm giao thương không tính, trại của vương quốc Hoang dã cũng không. Không gì gây áp lực trong 5 phút đầu, hay trong màn chơi không cho xây công trình đối phó. Trại chiến orc cướp phá những gì đang xây: công trường hoặc lần nâng cấp đang làm gần nhất.
