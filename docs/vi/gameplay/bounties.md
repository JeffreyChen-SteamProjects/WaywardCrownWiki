---
title: "Hệ thống truy nã"
---

Lệnh truy nã là phương tiện chính để bạn điều hướng hành động của nhà phiêu lưu. Đặt cờ truy nã trên bản đồ và thiết lập phần thưởng để thu hút nhà phiêu lưu đến một vị trí cụ thể.

---

## Các loại truy nã

| Loại | Phần thưởng mặc định | Nguy hiểm | Danh tiếng | Hiệu ứng |
|------|----------------------|-----------|------------|----------|
| **Khám phá** | 200g | 0.2 | 0.3 | Nhà phiêu lưu di chuyển đến vị trí mục tiêu, mở sương mù chiến tranh dọc đường; cờ phải đặt ở chỗ họ đi bộ tới được |
| **Tiêu diệt** | 200g | 0.8 | 0.9 | Loại bỏ mục tiêu được chỉ định (kẻ thù hoặc Căn cứ kẻ thù) |
| **Phòng thủ** | 200g | 0.5 | 0.6 | Tuần tra xung quanh công trình mục tiêu cho đến khi hết thời gian |
| **Cảnh báo** | Phí 50g | — | — | Đánh dấu một điểm là vùng cấm: không bao giờ được nhận hay trả thưởng; anh hùng dưới cấp 8 tránh xa mọi thứ trong phạm vi 25 ô quanh nó |

### Đặt, tăng thưởng và hủy

- Truy nã Tiêu diệt phải được đặt lên một kẻ thù hoặc một Căn cứ kẻ thù, còn Truy nã Phòng thủ phải đặt lên một công trình của bạn hoặc Lâu đài
- Phần thưởng của lệnh truy nã đã đăng có thể tăng thêm +100g hoặc +500g
- Hủy lệnh truy nã sẽ hoàn lại phần thưởng, trừ Truy nã Phòng thủ đã bắt đầu ca gác

---

## Cách nhà phiêu lưu chọn lệnh truy nã

Nhà phiêu lưu tính toán mức độ hấp dẫn dựa trên **tính cách** của họ và **thuộc tính của lệnh truy nã**:

```
Attractiveness = Reward × Greed
               + Fame × Glory
               - Danger × Safety
               + Exploration Bonus × Curiosity
               - Distance Penalty
               - Low HP Penalty
```

Phần thưởng và khoảng cách được điều chỉnh theo cấp của nhà phiêu lưu, và một số lệnh truy nã bị từ chối ngay (phần thưởng dưới cấp × 20 vàng, dấu Cảnh báo, hoặc lệnh truy nã nằm trong vùng cảnh báo đối với anh hùng dưới cấp 8). Công thức đầy đủ nằm ở trang [Nhà phiêu lưu](adventurers.md).

:::tip[Mẹo thực tế]
- **Xạ thủ** có tính tò mò cao và phù hợp nhất với Truy nã Khám phá
- **Chiến binh** có tính vinh quang cao và phù hợp nhất với Truy nã Tiêu diệt
- **Vệ binh** không bao giờ nhận truy nã: họ tuần tra quanh công trình của bạn và lao tới công trình nào bị tấn công
- Tăng phần thưởng có thể thuyết phục những nhà phiêu lưu do dự chấp nhận lệnh truy nã
:::

---

## Cơ chế Truy nã Phòng thủ

Truy nã Phòng thủ yêu cầu nhà phiêu lưu **tuần tra liên tục** gần mục tiêu:

| Thiết lập | Giá trị |
|-----------|---------|
| Thời gian tuần tra yêu cầu | 60 tick |
| Khoảng thời gian tính lại đường đi | Mỗi 12 tick |

Sau khi chấp nhận Truy nã Phòng thủ, nhà phiêu lưu tuần tra qua lại gần mục tiêu. Khi đã tích lũy đủ thời gian tuần tra, lệnh truy nã hoàn thành: các anh hùng đang ở vị trí gác chia nhau phần thưởng, và mỗi người nhận 25 XP nếu có kẻ địch lọt vào tầm nhìn trong ca gác.

---

## Cơ chế Truy nã Tiêu diệt

Truy nã Tiêu diệt chỉ định một **mục tiêu cụ thể**:

- Có thể là một kẻ thù cụ thể
- Có thể là một Căn cứ kẻ thù

Khi mục tiêu bị loại bỏ, lệnh truy nã tự động hoàn thành. Nhà phiêu lưu đã chấp nhận lệnh truy nã sẽ ưu tiên di chuyển đến vị trí của mục tiêu.

- Phần thưởng được chia đều cho các anh hùng đang giữ lệnh truy nã trong phạm vi 20 ô quanh mục tiêu, và mỗi người trong số họ nhận 30 XP; không đặc điểm nào làm tăng phần thưởng
- Khi đánh Căn cứ kẻ thù, nhà phiêu lưu trước tiên tập hợp cách đó khoảng 22 ô về phía Lâu đài và cùng tấn công khi đã có 2–5 người đến (tùy kích thước căn cứ), hoặc 120 tick sau khi nhà phiêu lưu đầu tiên nhận tiền thưởng

---

## Mẹo chiến thuật

1. **Bắt đầu với Truy nã Khám phá sớm** — bạn cần mở sương mù chiến tranh để xác định vị trí kẻ thù và tài nguyên
2. **Đặt Truy nã Tiêu diệt gần Căn cứ kẻ thù** — hướng dẫn nhà phiêu lưu phá hủy mối đe dọa
3. **Đặt Truy nã Phòng thủ gần các công trình quan trọng** — những nhà thám hiểm khác sẽ nhận; Vệ binh vẫn tuần tra ở đó dù không có truy nã
4. **Điều chỉnh phần thưởng dựa trên tính cách nhà phiêu lưu** — bạn không cần trả quá nhiều cho mỗi lệnh truy nã

---

## Quy tắc lệnh truy nã

Phần thưởng nằm trong lệnh truy nã từ lúc treo:

- **Thời hạn**: có thể treo lệnh truy nã với thời hạn 1, 3 hoặc 5 phút. Khi hết hạn, phần thưởng chưa trả sẽ về ngân khố.
- **Hoàn tiền**: hủy sẽ hoàn lại phần thưởng, trừ lệnh phòng thủ đã bắt đầu ca gác. Lệnh có mục tiêu đã biến mất mà không còn ai để trả cũng hoàn lại phần thưởng. Gỡ cờ bằng menu chuột phải trên bản đồ, hoặc bằng nút trong bảng của chính lá cờ khi đã chọn nó; cả hai đều cho biết được hoàn lại gì. Khi đã có anh hùng đang trên đường tới một treo thưởng bị hủy, một phần mười số tiền hoàn lại được chia đều cho họ làm công đi đường.
- **Ai được trả**: lệnh khám phá trả cho anh hùng tới nơi; lệnh tiêu diệt chia đều cho những người nhận ở gần nơi hạ mục tiêu; lệnh phòng thủ chia cho những người nhận đang ở vị trí gác. Anh hùng đã chết không bao giờ được trả. Anh hùng ở gần nơi làm việc đã chữa trị, che chắn hoặc đỡ đòn thay cho người khác trong 30 giây vừa qua cũng được chia một phần cùng họ.
- **Danh tiếng cần công sức**: vàng luôn được trả, nhưng danh tiếng và kinh nghiệm chỉ có khi vùng đất chưa được khám phá lúc treo lệnh, khi hạ mục tiêu, hoặc khi có kẻ địch lọt vào tầm nhìn trong ca gác.
- **Đồng đội**: anh hùng bỏ qua lệnh khám phá đã có người nhận, tính phần thưởng phải chia theo phần của mình, và thấy cứ điểm bớt đáng sợ khi đã có người khác tham gia.
- **Viễn chinh**: lệnh tiêu diệt treo trên một cứ điểm sẽ tập hợp nhóm tại điểm tập hợp phía lâu đài trước. Nhóm xuất phát khi đủ anh hùng đến nơi hoặc sau 120 tick; người tình nguyện còn lại một mình chỉ đi tiếp nếu dám một mình đánh cứ điểm, nếu không sẽ bỏ lệnh; nhóm chỉ nhận nhiều hơn quân số tập hợp một người; anh hùng thiếu thuốc sẽ mua trước nếu có thể; và nhóm đã ngã hết hoặc đã về nhà sẽ tập hợp lại. Bảng thông tin lệnh truy nã cho biết ai đã tập hợp, còn chờ những người khác bao lâu và ước tính cơ hội.
- **Nguy hiểm**: lệnh tiêu diệt, lệnh thám hiểm cạnh một cứ điểm đã thấy và việc tự hành quân đánh cứ điểm không công đều được cân nhắc với sự sẵn sàng của từng anh hùng (tấn công, máu, thuốc, giáp, những anh hùng đã nhận lệnh đó và khoảng cách từ nơi làm việc đến quán trọ hoặc lâu đài). Anh hùng gan dạ chấp nhận cơ hội tệ hơn anh hùng thận trọng, và không phần thưởng nào khiến việc nguy hiểm an toàn hơn. Anh hùng còn chần chừ sẽ nói điều gì khiến nó đổi ý (thuốc mua được hoặc không kiếm được, quán trọ gần nơi làm việc hơn, thêm một anh hùng nhận lệnh) và đi ngay khi có điều đó. Anh hùng đang nhận lệnh sẽ đánh những gì đến gần, nhưng quay lại với lệnh trước khi đuổi theo thứ khác, và bỏ việc nguy hiểm khi cơ hội sụp đổ.
- **Giải cứu**: lệnh giải cứu được đặt lên người thu thuế hoặc đoàn buôn và đi theo đối tượng. Các anh hùng nhận lệnh đi tới và ở bên cạnh nó; khi có người hộ tống, nó thôi chạy trốn quái vật và tiếp tục công việc trong lúc họ chiến đấu. Khi đã được hộ tống trên đường đủ 20 tick và đứng ở lâu đài (đoàn buôn: hoặc ở trạm giao thương của nó) mà không có quái vật trong 8 ô, phần thưởng được chia đều cho những người giữ lệnh đang ở bên cạnh; chờ bên một đối tượng chưa lên đường thì không tính. Chỉ thêm danh tiếng và kinh nghiệm nếu đối tượng đã bị thương hoặc có quái vật lọt vào tầm nhìn, và phần thưởng được hoàn lại nếu đối tượng bị mất. Nhấp đúp vào người thu thuế hoặc đoàn buôn để đặt lệnh.
- **Bảng treo lệnh**: hiển thị ngân khố trả bao nhiêu ngay lúc này và, khi chỉ vào bản đồ, lệnh sẽ nhắm vào đâu. Khi một cú bấm có thể chỉ nhiều thứ (quái vật chen chúc cho lệnh tiêu diệt, người vận chuyển cho lệnh giải cứu, nhiều anh hùng bị thương dưới con trỏ cho phép nhắm vào anh hùng), một danh sách hiện ra và lệnh truy nã hoặc phép sẽ dành cho mục tiêu được chọn.
- **Lệnh được ban**: bản đồ hoặc chiến dịch có thể treo lệnh bằng hành động kích hoạt `post_bounty`; ngân khố không tốn gì và cũng không được hoàn lại gì.
