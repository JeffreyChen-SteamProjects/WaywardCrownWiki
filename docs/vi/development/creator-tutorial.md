---
title: "Hướng dẫn cho người sáng tạo"
---

Mọi mẫu đều bắt đầu ở **Creator & Steam Workshop** (menu chính, trình quản lý bản đồ hoặc trình quản lý plugin) và đi cùng một con đường từ **Dự án mới** tới một vật phẩm Workshop riêng tư. Chỉ bước cuối cần Steam.

## Các bước chung

1. **Dự án mới**: chọn mẫu, tên và thư mục. Hộp thoại cho thấy dự án sẽ nằm ở đâu trước khi ghi bất cứ gì.
2. **Chỉnh sửa dự án**: plugin mở trong trình sửa plugin; bản đồ hoặc chiến dịch mở bằng **Mở trình sửa địa hình / chiến dịch**, trong một tiến trình riêng chỉ tải những gì dự án cần. Hãy lưu trước bước tiếp theo: kiểm tra, chơi thử và xuất bản dùng các tệp đã lưu.
3. **Xác thực nội dung**: mỗi vấn đề cho biết nó ở đâu; nhấp đúp sẽ mở trình sửa tại đó.
4. **Chơi thử**: một ván riêng chỉ có dự án này và những gì nó cần. Báo cáo liệt kê những gì đã tải và, trong lúc chạy, thời gian tick, bộ nhớ và atlas sprite, xếp mức từ ổn tới quá nặng.
5. **Xuất…**: một tệp ZIP hoặc thư mục giữ nguyên ID dự án, để cất giữ hoặc chia sẻ.
6. **Đăng lên Workshop**: khi Steam đang chạy, chọn **Riêng tư** cho lần thử đầu, rồi **Kiểm tra và xem xét** và **Gửi bản xuất bản**. Xuất bản không kiểm tra việc tải: hãy tìm vật phẩm trong **Duyệt Workshop**, dùng **Đăng ký** và theo dõi nó ở **Đăng ký** cho tới khi dùng được.

## Bản đồ

Mẫu là một bản đồ 32×32 có lâu đài, một rương 100 vàng cách hai ô về phía đông, 500 vàng khởi đầu và chiến thắng khi nhặt hết rương.

1. Vẽ địa hình và đặt công trình, thành trì và rương trong trình sửa địa hình, rồi lưu.
2. **Xác thực nội dung** cảnh báo thành trì, rương hoặc trùm mà anh hùng không đi tới được từ lâu đài.
3. Phiên bản: tăng **Phiên bản dự án** mỗi khi xuất bản thay đổi. Các bản lưu tạo bằng phiên bản cũ giữ một bản sao của nó.

## Chiến dịch

Mẫu gồm hai màn, mỗi màn có bản đồ riêng với cùng lâu đài và rương; tệp chiến dịch sắp xếp chúng và đặt cho mỗi màn một tiêu đề, lời dẫn truyện và vàng khởi đầu.

1. Mở bảng chiến dịch trong trình sửa địa hình để sắp thứ tự màn, đặt điều kiện thắng, lời dẫn truyện, phần mang sang và các bộ kích hoạt.
2. **Chơi thử** có thể bắt đầu ở bất kỳ màn nào.
3. Phụ thuộc: khi một màn dùng đơn vị của một plugin, thêm dự án của plugin đó vào **Phụ thuộc** với một khoảng phiên bản như `>=1.0.0, <2.0.0`.

## Plugin

Mẫu có một lớp anh hùng, một kẻ địch, một công trình tuyển lớp đó, một thành trì gửi kẻ địch đó, một kỹ năng, một nghiên cứu, một sự kiện, một trùm có tên, một diện mạo ô đất và một tệp ngôn ngữ tiếng Anh, tất cả dưới không gian tên của chính dự án.

1. Sửa mỗi loại trong bảng của nó; biểu mẫu thuộc tính làm mờ các giá trị lấy từ định nghĩa gốc và đánh dấu ngay giá trị vượt giới hạn của game.
2. Tài nguyên: thẻ **Tài nguyên** nhận các tệp ảnh được thả vào và so mỗi tệp với giới hạn kích thước và bộ nhớ. Diện mạo ô đất của mẫu dùng `preview.png` làm ảnh ví dụ; hãy thay nó ở đó.
3. Ghi đè: **Sao chép từ trò chơi…** thêm một bản sao đầy đủ của một nhân vật trong game dưới ID của bạn, thay cho bản gốc ở nơi nó được dùng. Một định nghĩa dùng ID có sẵn (ví dụ `SLIME` với gốc `SLIME`) thay đổi slime của chính game khi plugin đang bật; **Hồ sơ nội dung** cho biết ghi đè của plugin nào thắng.
4. Phiên bản: **Phiên bản dự án** là phiên bản của chính dự án; **Phiên bản trò chơi được hỗ trợ** là khoảng phiên bản game mà nó chấp nhận (`*` cho mọi phiên bản; bản dựng phát triển chỉ chấp nhận `*`).

## Hướng dẫn tạo trùm (plugin + chiến dịch hai màn)

Mẫu là một thư mục có một plugin và một chiến dịch hai màn cần plugin đó; màn thứ hai thắng khi hạ trùm có tên của plugin.

1. **Phụ thuộc** của chiến dịch ghi dự án và phiên bản của plugin, nên khi chơi thử plugin được mang theo.
2. Xuất bản plugin trước, rồi tới chiến dịch: cửa sổ xuất bản sẽ gợi ý vật phẩm Workshop của plugin làm vật phẩm bắt buộc.
3. Tăng **Phiên bản dự án** của plugin mỗi lần sửa; giữ khoảng của chiến dịch đủ rộng để chấp nhận nó.

## Nhiệm vụ vương quốc (một màn: tóm tắt, lệnh treo thưởng, các đợt, một trùm)

Mẫu là một màn vương quốc với lời giao nhiệm vụ, một thị trấn, một hang ổ, các cờ Khám phá, Tiêu diệt và Phòng thủ của hoàng gia, hai đợt tấn công được báo trước, một trùm có tên và một vật tìm thấy tùy chọn. Hãy tháo rời từng màn trong bảng chiến dịch, rồi theo các bước chung.

## Những gì mẫu không bao giờ có

Mẫu không có ID vật phẩm Workshop thật, tài khoản Steam hay đường dẫn tuyệt đối nào: ID dự án được tạo mới trên máy của bạn và mọi tệp được đặt tên tương đối theo dự án.
