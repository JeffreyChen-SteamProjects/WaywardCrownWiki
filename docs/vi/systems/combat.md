---
title: "Hệ thống chiến đấu"
---

Chiến đấu hoàn toàn tự động. Nhà phiêu lưu và kẻ thù giao chiến bất cứ khi nào họ ở trong tầm tấn công của nhau.

---

## Luồng chiến đấu

1. **Phát hiện** — Nhà phiêu lưu phát hiện kẻ thù trong tầm nhìn (kiểm tra mỗi 2 tick)
2. **Tiếp cận** — Nếu kẻ thù trong tầm nhìn nhưng ngoài tầm tấn công, nhà phiêu lưu truy đuổi
3. **Tấn công** — Khi ở trong tầm tấn công, cả hai bên bắt đầu chiến đấu
4. **Giải quyết** — Sát thương được tính mỗi 5 tick

---

## Tính toán sát thương

### Nhà phiêu lưu tấn công kẻ thù

| Loại | Công thức sát thương |
|------|---------------------|
| Cận chiến | `TẤN CÔNG x 2` (hệ số sát thương toàn cục) |
| Tầm xa | `TẤN CÔNG` (sát thương đạn, không áp dụng hệ số) |

### Kẻ thù tấn công nhà phiêu lưu

```
Sát thương = (TẤN CÔNG kẻ thù + ngẫu nhiên(0~2)) x 2
```

### Phòng thủ

```
Sát thương thực tế = max(1, Sát thương - PHÒNG THỦ)
```

### Né tránh

| Nguồn | Tỷ lệ né |
|-------|----------|
| Né tránh cơ bản của nhà phiêu lưu | 10% + 1% × AGI (≤ 70%) |
| Né tránh cơ bản kẻ thù | 5% |
| Kỹ năng "Né tránh" Xạ thủ | +15% |
| Kẻ trộm: Né tránh | +10% |
| Kẻ trộm: Vũ điệu bóng tối | +18% |
| Xạ thủ: Phá Phong | +25% |

---

## Hệ thống đạn

Mỗi đơn vị chiến đấu từ xa bắn một loại đạn riêng, nên nhìn vật đang bay là biết ai bắn. Các lớp còn lại đánh cận chiến dù với tới 3 ô:

| Lớp | Loại đạn |
|-----|---------|
| Xạ thủ | Mũi tên (arrow) |
| Người dẫn đường | Lao (javelin) |
| Người gác đường | Tên nỏ (bolt) |
| Pháp sư | Cầu lửa (fireball) |
| Thuật sĩ Cộng hưởng | Mảnh ánh sáng (light_shard) |
| Cung thủ Goblin (kẻ thù) | Mũi tên thô (goblin_arrow) |
| Giáo đồ bóng tối (kẻ thù) | Cầu bóng tối (dark_orb) |
| Rồng (kẻ thù) | Luồng lửa (dragon_flame) |

Đạn bay về phía mục tiêu mỗi tick sau khi được bắn ra và gây sát thương khi trúng. Mỗi loại được vẽ theo hướng nó bay: viên bay lên phía trên bản đồ được nhìn từ phía sau, viên bay ngang được nhìn từ bên cạnh.

---

## Tháp bắn tên

Tháp bắn tên là công trình phòng thủ tự động:

| Thuộc tính | Giá trị |
|------------|---------|
| Tầm tấn công | 20 ô |
| Sát thương cơ bản | 16 + 8 × (Lv − 1) |
| Tăng theo cấp | Tăng theo cấp độ |

Tháp bắn tên tự động tấn công kẻ thù gần nhất trong tầm.

---

## Phần thưởng kinh nghiệm

| Nguồn | XP |
|-------|-----|
| Mỗi đòn đánh (Nhỏ giọt) | 1/5 XP tiêu diệt |
| Tiêu diệt Slime | 10 XP |
| Tiêu diệt Goblin | 25 XP |
| Tiêu diệt Bộ xương | 40 XP |
| Tiêu diệt Zombie | 60 XP |
| Tiêu diệt Rồng | 150 XP |

:::note[XP nhỏ giọt]
Mỗi lần nhà phiêu lưu đánh trúng kẻ thù — dù bằng cận chiến hay đạn — họ nhận được 1/5 XP tiêu diệt của kẻ thù đó. Điều này đảm bảo nhà phiêu lưu kiếm được kinh nghiệm ngay cả khi không giết được mục tiêu.
:::

---

## AI chiến đấu

### Điều kiện bỏ chạy của nhà phiêu lưu

- HP < 30% (HP_CRITICAL)
- Xác suất bỏ chạy bị ảnh hưởng bởi đặc điểm tính cách An toàn

### Sử dụng thuốc

| Điều kiện | Hành vi |
|-----------|---------|
| HP < 30% | Sử dụng thuốc khẩn cấp |
| HP < 50% | Sử dụng thuốc |

### Ưu tiên mục tiêu của kẻ thù

1. Nhà phiêu lưu đang chiến đấu (không hòa bình)
2. Thợ xây (hòa bình)
3. Công trình đe dọa như Tháp bắn tên
4. Lâu đài
5. Các công trình khác
