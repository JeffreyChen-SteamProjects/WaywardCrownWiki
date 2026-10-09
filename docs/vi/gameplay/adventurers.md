---
title: "Nhà phiêu lưu"
---

Nhà phiêu lưu là trung tâm của trò chơi. Họ có ý chí tự do và đưa ra quyết định dựa trên tính cách, nhu cầu và trạng thái hiện tại.

---

## Tổng quan lớp nhân vật

| Lớp | Chỉ số chính | Tấn công theo | Tầm tấn công | Công trình tuyển dụng | Đặc điểm |
|-----|-------------|--------------|--------------|----------------------|----------|
| **Chiến binh** | STR | Sức mạnh | 3 | Doanh trại | HP cao, tấn công cao, đánh ở cự ly gần |
| **Pháp sư** | INT | Trí tuệ | 12 | Tháp Pháp sư | Tấn công phép từ xa, HP thấp |
| **Xạ thủ** | AGI | Nhanh nhẹn | 11 | Nhà Xạ thủ | Tấn công cung từ xa, ham khám phá |
| **Vệ binh** | STR | Sức mạnh | 3 | Trạm gác | Tuần tra công trình, không rời vị trí |
| **Thợ xây** | AGI | — | 3 | Phường hội Thợ xây | Sửa chữa công trình, hòa bình (không chiến đấu) |
| **Kẻ trộm** | AGI | Nhanh nhẹn | 3 | Hội đạo tặc | Tham lam và giỏi né tránh, HP thấp |

:::note[Tầm tấn công]
Xạ thủ (mũi tên), Pháp sư (cầu lửa), Người dẫn đường (lao), Người gác đường (tên nỏ) và Thuật sĩ Cộng hưởng (mảnh ánh sáng) tấn công bằng đạn, mỗi lớp một loại riêng. Các lớp chiến đấu còn lại đánh cận chiến: đánh từ xa tối đa 3 ô và gây sát thương gấp đôi.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Mọi lớp anh hùng trong trò chơi, viết từ dữ liệu của nó: sáu lớp mà vương quốc nào cũng chiêu mộ, và các lớp do công trình riêng của một con đường lâu đài chiêu mộ.

| Lớp | Con đường lâu đài | Chiêu mộ tại | Máu | Tấn công | Tầm tấn công | Kỹ năng |
|---|---|---|---|---|---|---|
| **Chiến binh** | — | Doanh trại | 70–150 | SỨC | 3 | Đánh mạnh, Tường khiên, Cuồng chiến, Lãnh chúa, Tiếng Thét Chiến Trận |
| **Pháp sư** | — | Tháp Pháp sư | 25–65 | TRÍ | 12 | Tia lửa, Khiên mana, Sét liên hoàn, Đại pháp sư, Lốc Lửa |
| **Xạ thủ** | — | Nhà Xạ thủ | 45–100 | NHẸ | 11 | Bắn chính xác, Né tránh, Bắn loạt, Mắt đại bàng, Phá Phong |
| **Vệ binh** | — | Trạm gác | 50–120 | SỨC | 3 | Cảnh giác, Gia cố, Khiêu khích, Pháo đài |
| **Thợ xây** | — | Phường hội Thợ xây | 30–70 | — | 3 | Sửa nhanh, Tăng cường, Bậc thầy chế tạo, Kiến trúc sư |
| **Kẻ trộm** | — | Hội đạo tặc | 35–80 | NHẸ | 3 | Đâm lén, Né tránh, Móc túi, Vũ điệu bóng tối |
| **Kỵ sĩ Khiên** | Thủ hộ | Pháo đài | 90–170 | SỨC | 3 | Cảnh giác, Tường khiên, Khiêu khích, Pháo đài, Khiên Thệ ước, Lời thề Thế thân, Xông tới Cứu viện |
| **Tu sĩ Cứu thương** | Thủ hộ | Thánh đường | 50–100 | TRÍ | 3 | Cảnh giác, Khiên mana, Gia cố, Pháo đài, Lời nguyện Chữa lành |
| **Người dẫn đường** | Hoang dã | Trại hoang | 50–105 | NHẸ | 11 | Bắn chính xác, Né tránh, Bắn loạt, Mắt đại bàng, Dấu ấn Thợ săn |
| **Người giữ thú** | Hoang dã | Trại thú | 65–135 | SỨC | 3 | Đánh mạnh, Né tránh, Cuồng chiến, Mắt đại bàng, Chim ưng Tập kích, Lần theo Dấu vết, Bạn đồng hành Thú, Bạn đồng hành Yểm trợ, Sơ cứu Thảo dược |
| **Kỵ sĩ Mộ phần** | Bất tử | Nhà hài cốt | 95–175 | SỨC | 3 | Đánh mạnh, Tường khiên, Cuồng chiến, Lãnh chúa, Giáp Xương |
| **Tử linh sư** | Bất tử | Hầm mộ | 40–90 | TRÍ | 3 | Tia lửa, Khiên mana, Sét liên hoàn, Đại pháp sư, Ấn Tàn úa, Vệ binh Hài cốt, Món nợ Linh hồn |
| **Chấp pháp quan** | Trật tự | Sở Tuần luật | 80–155 | SỨC | 3 | Cảnh giác, Tường khiên, Khiêu khích, Lãnh chúa, Phong tỏa, Lệnh Tập hợp, Tuần tra Báo động |
| **Người gác đường** | Trật tự | Trạm thu thuế | 55–115 | NHẸ | 10 | Bắn chính xác, Né tránh, Bắn loạt, Mắt đại bàng, Hộ tống |
| **Chiến binh Thệ nguyện** | Dũng cảm | Chiến đường | 85–165 | SỨC | 3 | Đánh mạnh, Né tránh, Cuồng chiến, Lãnh chúa, Đòn Phá trận, Công phá Tường thành, Cuồng huyết |
| **Người cầm cờ** | Dũng cảm | Kho quân nhu | 70–140 | SỨC | 3 | Đánh mạnh, Tường khiên, Khiêu khích, Lãnh chúa, Tiếng gầm Bất khuất |
| **Ma kiếm sĩ** | Bí thuật | Học viện | 60–125 | TRÍ | 3 | Tia lửa, Né tránh, Sét liên hoàn, Đại pháp sư, Trảm Quang, Bước lùi Pha, Phản kích Cổ tự |
| **Thuật sĩ Cộng hưởng** | Bí thuật | Tháp Cộng hưởng | 40–88 | TRÍ | 11 | Tia lửa, Khiên mana, Sét liên hoàn, Đại pháp sư, Bùa hộ Cổ tự |
| **Hộ vệ Khế ước** | Thương mại | Thương hội | 80–150 | SỨC | 3 | Cảnh giác, Tường khiên, Khiêu khích, Pháo đài, Thế Hộ hàng, Hành quân Thần tốc, Nhiệm vụ Hộ tống |
| **Trưởng đoàn buôn** | Thương mại | Kho hàng | 55–115 | NHẸ | 3 | Bắn chính xác, Né tránh, Bắn loạt, Mắt đại bàng, Dấu Thương lộ |
| **Thẩm phán Hắc thệ** | Bạo chúa | Tòa Hắc thệ | 65–130 | TRÍ | 3 | Tia lửa, Khiên mana, Khiêu khích, Đại pháp sư, Ấn Kinh hãi, Thiết thệ Hộ vệ |
| **Người cưỡng chế** | Bạo chúa | Sở Trưng thu | 90–170 | SỨC | 3 | Đánh mạnh, Tường khiên, Cuồng chiến, Lãnh chúa, Phán quyết Xiềng xích |
<!-- hero-classes:end -->

---

## Chỉ số chi tiết

### Chiến binh

| Chỉ số | Phạm vi |
|--------|---------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Xu hướng tính cách**: Vinh quang cao (0.5–1.0), Tham lam trung bình (0.2–0.8), Ham khám phá thấp (0.0–0.2)

**Cây kỹ năng**:

| Cấp | Kỹ năng | Hiệu ứng |
|-----|---------|----------|
| 3 | Đánh mạnh | Tấn công ×1.15 |
| 6 | Tường khiên | Phòng thủ +5 |
| 10 | Cuồng chiến | Tấn công ×1.3, HP ×0.9 |
| 15 | Lãnh chúa | Tấn công ×1.5, Phòng thủ +8 |

### Pháp sư

| Chỉ số | Phạm vi |
|--------|---------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Xu hướng tính cách**: An toàn cao (0.3–0.9), Ham khám phá trung bình (0.1–0.3)

**Cây kỹ năng**:

| Cấp | Kỹ năng | Hiệu ứng |
|-----|---------|----------|
| 3 | Tia lửa | Tấn công +5 |
| 6 | Khiên mana | Phòng thủ +4 |
| 10 | Sét liên hoàn | Tấn công ×1.4 |
| 15 | Đại pháp sư | Tấn công ×1.6, Tấn công +8 |

### Xạ thủ

| Chỉ số | Phạm vi |
|--------|---------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Xu hướng tính cách**: Ham khám phá rất cao (0.7–1.0), An toàn thấp (0.0–0.4)

**Cây kỹ năng**:

| Cấp | Kỹ năng | Hiệu ứng |
|-----|---------|----------|
| 3 | Bắn chính xác | Tấn công +4 |
| 6 | Né tránh | Tỷ lệ né +15% |
| 10 | Bắn loạt | Tấn công ×1.35 |
| 15 | Mắt đại bàng | Tấn công ×1.5, Tỷ lệ chí mạng +20% |

### Vệ binh

| Chỉ số | Phạm vi |
|--------|---------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Xu hướng tính cách**: An toàn rất cao (0.5–1.0), không Ham khám phá

**Hành vi đặc biệt**: Tự động được phân công tuần tra công trình; sẽ không rời vị trí để đuổi kẻ thù ở xa.

**Cây kỹ năng**:

| Cấp | Kỹ năng | Hiệu ứng |
|-----|---------|----------|
| 3 | Cảnh giác | Phòng thủ +3 |
| 6 | Gia cố | HP ×1.2 |
| 10 | Khiêu khích | Phòng thủ +6, Tấn công +3 |
| 15 | Pháo đài | HP ×1.4, Phòng thủ +10 |

### Thợ xây

| Chỉ số | Phạm vi |
|--------|---------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Xu hướng tính cách**: An toàn rất cao (0.8–1.0), không Ham khám phá, không Vinh quang

**Hành vi đặc biệt**: Hòa bình — sẽ không bao giờ tham chiến. Tự động di chuyển đến công trình hư hại để sửa chữa.

**Cây kỹ năng**:

| Cấp | Kỹ năng | Hiệu ứng |
|-----|---------|----------|
| 3 | Sửa nhanh | Tốc độ sửa ×1.3 |
| 6 | Tăng cường | Tốc độ sửa ×1.5 |
| 10 | Bậc thầy chế tạo | Tốc độ sửa ×2.0 |
| 15 | Kiến trúc sư | Tốc độ sửa ×2.5, HP ×1.3 |

### Kẻ trộm

| Chỉ số | Phạm vi |
|--------|---------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Xu hướng tính cách**: Tham lam rất cao (0.75–1.0), An toàn cao (0.5–1.0), Ham khám phá trung bình (0.3–0.7), Vinh quang thấp (0.0–0.3)

**Hành vi đặc biệt**: Lớp này phòng thủ bằng né tránh (10% + 1% mỗi điểm AGI) chứ không bằng HP, và lòng tham kéo nó về phía các lệnh truy nã trả thưởng cao nhất.

**Cây kỹ năng**:

| Cấp | Kỹ năng | Hiệu ứng |
|-----|---------|----------|
| 3 | Đâm lén | Tỷ lệ chí mạng +12% |
| 6 | Né tránh | Tỷ lệ né +10% |
| 10 | Móc túi | Tỷ lệ chí mạng +20%, Tấn công ×1.15 |
| 15 | Vũ điệu bóng tối | Tỷ lệ né +18%, Tấn công ×1.35 |

---

## Hệ thống trạng thái

Nhà phiêu lưu chuyển đổi giữa các trạng thái sau:

```
IDLE
  ├─→ MOVING_TO_BOUNTY
  ├─→ EXPLORING
  ├─→ PATROLLING
  ├─→ REPAIRING — Builder only
  └─→ FIGHTING
        └─→ RETURNING
              └─→ LODGING
                    └─→ IDLE
```

---

## Hệ thống trọ

- Khi HP thấp, nhà thám hiểm đi nghỉ và hồi phục ở nơi gần nhất còn chỗ: hội của chính mình, quán trọ, trại hoang hoặc lâu đài. Giữa những nơi gần ngang nhau, hội của mình được chọn trước (tính như gần hơn 8 ô) và lâu đài sau cùng (tính như xa hơn 8 ô); người đang chạy giữ mạng thì vào nơi gần nhất
- Nhà phiêu lưu đang nghỉ vào trạng thái **LODGING**: biến mất khỏi bản đồ và trở nên bất tử
- Mỗi công trình có thể chứa tối đa **3** người trọ
- Nếu công trình bị phá hủy, tất cả người trọ bên trong lập tức được thả ra
- Nhà phiêu lưu tự động rời trọ khi HP hồi đầy

---

## Hệ thống lên cấp

| Mục | Mô tả |
|-----|-------|
| Cấp tối đa | 20 |
| XP cơ bản | 40 XP (để đạt Lv. 2) |
| Công thức XP | `40 × 1.6^(level-1)` |
| XP tiêu diệt | Khác nhau theo loại kẻ thù (10 – 160 XP) |
| XP nhỏ giọt | Mỗi đòn đánh nhận 1/5 XP tiêu diệt |
| Chia phần hạ gục | Vàng và XP của một lần hạ gục được chia mà không thêm gì: anh hùng ra đòn cuối giữ 60% khi có người cùng chia, phần còn lại chia đều cho tối đa 3 anh hùng đang chiến đấu trong vòng 6 ô hoặc, trong vòng 10 ô, đã chăm sóc một anh hùng khác trong 30 giây vừa qua |
| XP truy nã | Khám phá 15 XP, Phòng thủ 25 XP, Tiêu diệt 30 XP |

Khi lên cấp, chỉ số chính và phụ tăng cùng với HP.

**Cây kỹ năng**: kỹ năng của một lớp là một cái cây, không phải một số ô cố định: mỗi kỹ năng có cấp độ để học và có thể đòi các kỹ năng khác trước, và cây lớn đúng bằng số kỹ năng lớp đó có. Anh hùng học mọi kỹ năng mà cấp độ và những gì đã học cho phép. Bảng của anh hùng hiển thị cái cây: kỹ năng đã có in đậm, kỹ năng sắp tới màu xám kèm cấp độ sẽ có, mỗi kỹ năng nằm dưới kỹ năng nó đòi. Kỹ năng ghi (chủ động) là kỹ năng anh hùng tự dùng; các kỹ năng khác thay đổi chỉ số của anh hùng vĩnh viễn.

---

## Hệ thống tính cách

Mỗi nhà phiêu lưu có bốn giá trị tính cách (0.0 – 1.0) ảnh hưởng đến việc họ có nhận lệnh truy nã hay không:

| Đặc điểm | Hiệu ứng |
|-----------|----------|
| **Tham lam (gold)** | Giá trị cao nghĩa là nhà phiêu lưu quan tâm nhiều hơn đến phần thưởng |
| **An toàn (safety)** | Giá trị cao nghĩa là nhà phiêu lưu tránh nguy hiểm |
| **Vinh quang (glory)** | Giá trị cao nghĩa là nhà phiêu lưu thích nhiệm vụ chiến đấu |
| **Ham khám phá (curiosity)** | Giá trị cao nghĩa là nhà phiêu lưu thích khám phá |

**Công thức sức hút lệnh truy nã**:

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- Dấu **Cảnh báo** không bao giờ được nhận
- Phần thưởng dưới **cấp × 20** vàng bị từ chối ngay
- Vệ binh không bao giờ nhận truy nã: thay vào đó họ tuần tra thành
- Anh hùng dưới cấp 8 từ chối các lệnh truy nã nằm trong vùng cảnh báo
- Nhà phiêu lưu nhận lệnh truy nã có điểm cao nhất, nếu điểm đó trên 0.1

---

## Cuộc sống riêng của các anh hùng

Một anh hùng không có việc gì làm sẽ cân nhắc mọi lựa chọn và chọn điều tốt nhất: một lệnh truy nã, một việc trong thị trấn, hoặc đi khám phá.

- **Việc vặt**: mua trang bị tốt hơn ở lò rèn, bổ sung thuốc ở chợ, học ở thư viện, nghỉ một buổi tối ở quán trọ (15 vàng; đài phun nước hoặc vườn thì miễn phí), hoặc về nhà khi bị thương hay mệt. Mỗi việc cần có công trình, vàng và nhu cầu thật sự, và anh hùng sẽ đi bộ đến công trình đó để làm.
- **Cam kết**: anh hùng đi hết chuyến đã bắt đầu. Chỉ chuyến khám phá mới bị bỏ dở, sau 150 tick, khi có lựa chọn rõ ràng tốt hơn. Nguy hiểm vẫn được ưu tiên: anh hùng bị thương nặng sẽ tới nơi nghỉ gần nhất.
- **Cứ điểm**: từ cấp 3, những anh hùng gan dạ tự tiến đánh các cứ điểm địch đã biết khi dám một mình đối đầu; kẻ trộm thì lẻn vào lấy cắp.
- **Hỗ trợ**: một anh hùng thuộc lớp chăm sóc người khác (chữa trị, che chắn, cổ vũ hoặc đỡ đòn thay) và không có việc riêng sẽ đi cùng một nhóm: anh hùng gần nhất trong vòng 30 ô đang trên đường tới việc treo thưởng hay một cuộc hành quân, hoặc đang chiến đấu, mà nó dám cùng nhóm đó đảm nhận. Nó đi theo khi nhóm di chuyển và rời đi khi nhóm chết, dừng lại hoặc về nhà, khi chính nó bị thương, hoặc sau 2 phút.
- **Ký ức**: một anh hùng giữ lại vài điều đã xảy ra với mình, mỗi điều trong vài phút. Người có bang hội bị tấn công coi treo thưởng phòng thủ đáng giá hơn 30%; người được anh hùng khác giúp khi bị thương nặng, hoặc được trả thưởng bên cạnh người khác, coi trọng hơn treo thưởng mà anh hùng đó đang nhận; người phải quay về vì bị thương nặng, hoặc thấy một anh hùng như thế ngã xuống, muốn cơ hội tốt hơn trong vòng 12 ô quanh nơi đó. Bảng anh hùng liệt kê những gì nó nhớ.
- **Bang hội đã mất**: anh hùng có bang hội bị phá hủy hoặc bị dỡ bỏ không bị mất. Nó tự chuyển đến công trình gần nhất tuyển lớp của mình và còn chỗ, kể cả bang hội được xây lại. Cho đến lúc đó lâu đài che chở nó: 3 anh hùng cho mỗi cấp lâu đài trong 5 phút, số còn lại trong 100 giây. Anh hùng hết thời gian sẽ rời vương quốc cùng những gì nó mang; nhật ký và biên niên sử báo trước, và bảng của nó đếm giây.
- **Những gì anh hùng thể hiện**: anh hùng giật mình khi bị đánh trúng, giơ tay khi kỹ năng kích hoạt, reo mừng khi lên cấp và khuỵu xuống nơi mình ngã trước khi bụi phủ lấy. Khi bật “Giảm chuyển động” (Cài đặt), anh hùng không làm những điều này.
- **Thiên hướng theo lớp**: mỗi lớp có thói quen riêng. Chiến binh đánh đến khi bị thương nặng và thích tấn công cứ điểm; pháp sư ở gần thị trấn, rút lui sớm và thích học tập; xạ thủ đi xa và ưa lệnh truy nã khám phá; kẻ trộm chọn lệnh truy nã trả cao nhất và trộm ở cứ điểm; vệ binh và thợ xây ở lại thị trấn. Sự thận trọng và tò mò của từng anh hùng làm thay đổi đôi chút, và bảng thông tin anh hùng liệt kê thiên hướng của họ. Tầm hoạt động của mỗi anh hùng cũng khác nhau: càng gan dạ và tò mò thì càng đi xa lâu đài, nên hai anh hùng cùng lớp không ở mãi cùng một vùng. Anh hùng trước hết tìm đến vùng đất chưa biết trong tầm của mình; khi không còn nữa, anh ta đi xa hơn một chút và băng sang phía bên kia tầm của mình thay vì quanh quẩn quanh thị trấn.
- **Đọc hiểu anh hùng**: bảng thông tin anh hùng cho biết họ đang làm gì và vì sao, đang đi đâu, cần gì, và thái độ với từng lệnh truy nã đang mở: đang trên đường, đang bận, hoặc lý do từ chối cùng mức thưởng sẽ khiến họ đổi ý. Bảng thông tin lệnh truy nã nhóm các anh hùng theo những lý do đó, người dễ thuyết phục nhất xếp trước. Cuối bảng là lịch sử của anh hùng, tám việc gần nhất kèm giờ trong trò chơi: trang bị đã mua và những gì đã học, các lệnh truy nã đã nhận và điều khiến nó quyết định (tiền công, đã có người khác nhận, hoặc những gì nó nhớ), được trả bao nhiêu và cùng với ai, ai đã tới giúp khi nó bị thương nặng, và khi nào nó quay về nhà.
