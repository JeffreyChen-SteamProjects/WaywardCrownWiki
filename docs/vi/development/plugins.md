---
title: "Phát triển Plugin"
---

## Tạo và chơi thử

Mở Creator / Workshop từ menu chính hoặc trình quản lý bản đồ/plugin. Tạo bản đồ, chiến dịch hai màn, plugin hoặc hướng dẫn boss cùng plugin liên kết; chỉnh sửa, lưu, kiểm tra và chơi thử ngoại tuyến. Quản lý dự án cục bộ, đăng ký, tác phẩm đã đăng, tìm kiếm và tác vụ. Mẫu «Nhiệm vụ vương quốc» tạo một chiến dịch kingdom một màn có tóm tắt, lệnh treo thưởng, các đợt và một trùm có tên. Nhập tệp ZIP, tệp bản đồ hoặc thư mục dự án bằng nút «Nhập nội dung» hoặc thả vào không gian làm việc; «Xuất…» ghi ra ZIP hoặc thư mục, còn «Mở thư mục» cho thấy các tệp của dự án. Cả hai đều hỏi thư mục (thư mục lần trước được đề xuất lại), tên đã có ở đó sẽ thành name-2, name-3…, và không bao giờ ghi vào nội dung Steam tải về. Mỗi dự án được liệt kê kèm ảnh xem trước, loại, phiên bản, tác giả, việc trò chơi này có tải được hay không và kết quả lần kiểm tra cuối; mỗi danh sách có ô tìm kiếm và bộ lọc loại, cho biết vì sao danh sách trống, còn phần chi tiết của dự án được chọn nêu giấy phép, phiên bản trò chơi, yêu cầu và thư mục. «Dự án mới» liệt kê các mẫu cùng thứ mỗi mẫu tạo ra và cho thấy dự án sẽ nằm ở đâu trước khi ghi bất cứ thứ gì. Bước kiểm tra cảnh báo các thành trì, rương và trùm đặt sẵn mà anh hùng không thể đi tới từ lâu đài (là lỗi khi điều kiện thắng cần chúng) và giới hạn một bản đồ ở 64 thành trì, 256 rương và 32 trùm đặt sẵn; nhấp đúp vào một vấn đề nằm trên ô bản đồ sẽ mở trình biên tập tại đó. Trình biên tập địa hình và chiến dịch mở trong một tiến trình riêng chỉ tải các phụ thuộc của dự án, nên nội dung người chơi đã cài không xuất hiện cũng không gây cản trở; nó lưu thẳng vào dự án. Kiểm tra, xuất, chơi thử và đăng sẽ chờ khi dự án còn thay đổi chưa lưu trong một trình biên tập mở từ không gian làm việc: chúng dùng các tệp đã lưu. Trong trình biên tập plugin, các giai đoạn của trùm là một bảng (lượng máu khi mỗi giai đoạn bắt đầu, kỹ năng của nó), và số lượng, giới hạn, cảnh báo của kỹ năng có ô riêng. Trình biên tập plugin giữ một bản nháp phần việc chưa lưu ngay sau mỗi lần sửa, đặt cạnh tệp cài đặt và bên ngoài dự án; mở lại dự án sau sự cố sẽ đề nghị khôi phục. Trong trình biên tập plugin, «Nhân bản» sao chép một định nghĩa với ID mới, định nghĩa được định nghĩa khác nhắc tới không xóa được cho tới khi gỡ chỗ dùng đó, và «Sao chép từ trò chơi…» thêm một bản sao đầy đủ của một nhân vật trong trò chơi với chính ID của nó, thay thế bản gốc ở nơi được dùng mà không đụng tới tệp của trò chơi. Lớp nhân vật, kẻ địch, công trình, thành lũy và nghiên cứu có biểu mẫu thuộc tính (khoảng chỉ số và mức tăng, vàng rơi, giá, lớp mà công trình chiêu mộ, kẻ mà thành lũy phái ra, đối tượng của nghiên cứu); giá trị lấy từ định nghĩa gốc hiện màu xám, giá trị vượt giới hạn của trò chơi hoặc nêu ID không tồn tại được đánh dấu ngay; phụ thuộc được sửa trong một bảng. Thẻ Tài nguyên nhận tệp được thả vào, cho thấy vùng nhìn thấy của mỗi hình so với giới hạn kích thước và bộ nhớ của trò chơi, xem trước dạng địa hình hoặc biểu tượng, lưu một dòng nguồn và ghi công, liệt kê và chỉ định định nghĩa nào dùng nó, đổi tên tệp cùng mọi chỗ dùng, không gỡ tệp còn được dùng và trỏ lại các trường nhắc tới tệp không tồn tại. Một lượt chơi thử mở đầu bằng danh sách những gì đã nạp (từng plugin theo thứ tự nạp cùng các định nghĩa thêm hoặc thay thế, và plugin bị bỏ qua kèm lý do); không gian làm việc hiện cùng danh sách và đưa định nghĩa bị bỏ qua của plugin đang thử vào danh sách vấn đề, nơi mở một vấn đề trong bảng định nghĩa sẽ dẫn tới định nghĩa đó trong trình biên tập plugin.

Nhập thư mục/ZIP và bản sao chỉnh sửa được tạo ID mới, cập nhật tham chiếu không gian tên riêng. Giữ tác giả, nguồn và giấy phép, không kế thừa liên kết cập nhật từ xa. Bản gốc Steam chỉ đọc. Kiểm tra đường dẫn tương đối, giới hạn, mảng và vòng lặp kích hoạt. Giấy phép trống không cho phép phân phối lại. Khi xuất bản một bản sao, phần xem lại cho thấy nguồn gốc (dự án, phiên bản, tác giả và trang vật phẩm của bản gốc) cùng điều kiện của tác giả gốc, và chỉ gửi được sau khi bạn xác nhận giữ ghi công và tuân theo điều kiện, hoặc khi bản gốc không có giấy phép, rằng bạn đã được tác giả cho phép; giấy phép không được nêu luôn được hiểu là không cho phép chia sẻ. Bản sao ghi rõ bản gốc trong phần chi tiết và báo khi bản gốc đã đăng ký được cập nhật, còn chú thích của Tạo bản sao có thể chỉnh sửa cục bộ, Xuất… và Hủy đăng ký cho biết mỗi nút làm gì.

Đăng tải cần Steam: chuẩn bị trang và ảnh, xem ảnh chụp tệp/mã băm bất biến rồi xác nhận gửi. Tác vụ tiếp tục khi đóng cửa sổ; có thể hủy bước chuẩn bị. Kết quả đã gửi/không rõ cần kiểm tra hoặc đồng bộ lại trước khi thử lại. Liên kết phân biệt tài khoản, ứng dụng và dự án. Ảnh nhỏ hơn 1 MiB; kiểm thử dùng Steam mô phỏng. Đăng plugin cần thiết trước rồi xác nhận ID tác phẩm cùng ứng dụng khi xem lại bản đồ/chiến dịch. Trình đăng lưu nội dung trang theo từng ngôn ngữ và siêu dữ liệu JSON, cắt ảnh chính thành hình vuông, sắp xếp/xóa tối đa tám ảnh bổ sung. Tác phẩm đã đăng có thể chỉ cập nhật trang và phụ thuộc mà không gửi lại nội dung; ảnh cũng nằm trong ảnh chụp được duyệt. Trình hướng dẫn có thể tạo ảnh xem trước chính từ chính dự án (địa hình bản đồ cùng lâu đài, thành lũy và rương, các màn đầu của chiến dịch, hình ảnh riêng của plugin, kèm tiêu đề), cho thấy ảnh xem trước đúng như khi tải lên cùng kích thước, vẽ chú thích tùy chọn ở cuối mỗi ảnh chụp và báo những hình bản nháp nhắc tới đã mất. Ba bước (trang, phụ thuộc và phiên bản, duyệt) được đi qua bằng Quay lại và Tiếp (Alt+Trái, Alt+Phải); khi có vấn đề, trình hướng dẫn đưa tới bước đó và viền ô cho tới khi được sửa, còn phần duyệt đếm số tệp thêm, đổi và gỡ kể từ lần đăng trước. Một tác vụ thất bại cho biết loại sự cố (quyền, thỏa thuận Workshop, dung lượng, Steam bận, hết thời gian, Steam ngoại tuyến, kiểm tra, không rõ kết quả, gián đoạn), bước tiếp theo và một mã như WS-PERM-R15 không chứa tài khoản, mục hay tên tệp. Chọn một mục của bạn trong Bài đăng của tôi sẽ hiện chế độ hiển thị, phiên bản, thời điểm tạo và cập nhật, kích thước, dự án cục bộ được liên kết và một danh sách những gì bản cập nhật từ dự án đó sẽ thay đổi: trường của trang, tệp và mục bắt buộc. Chọn một mục trong trình duyệt sẽ hiện mô tả của nó (hoặc cho biết Steam không cung cấp) và hai phần tách riêng: những gì Steam cho biết (loại, mục bắt buộc, các nhánh game tác giả cho phép, phiên bản được ghi lúc xuất bản, thời điểm cập nhật, kích thước, lượt bình chọn) và, sau khi Steam cài đặt, những gì manifest của chính mục đó cho biết (dự án và phiên bản, bản dựng này có chạy được các phiên bản game được yêu cầu không, các dự án cần có, những gì nó có thể thay đổi). Thông tin Steam không cung cấp sẽ không được tự điền. Một mục đã đăng ký chỉ được dùng sau khi Steam cài đặt xong và nó vượt qua kiểm tra: game này đọc được manifest của nó và mọi dự án nó cần đều được cài ở phiên bản được chấp nhận, không có vòng phụ thuộc (nếu hai mục cùng cung cấp một dự án thì plugin của bạn được giữ, nếu không thì mục cũ nhất). Mục Steam đang cập nhật vẫn được dùng ở phiên bản đã cài. Thẻ Đăng ký liệt kê trạng thái của mọi mục đã đăng ký (chờ Steam, đang tải kèm số byte, chờ kiểm tra, dùng được, thiếu thứ nó cần, hoặc thất bại và lý do), và trình duyệt cũng hiện như vậy cho mục đang chọn; lần tải Steam không hoàn tất được, chẳng hạn khi đĩa đầy, sẽ không được yêu cầu lại cho đến khi bạn bấm Thử tải lại. Trước khi tải một bản lưu, game kiểm tra nội dung lúc lưu: nếu một dự án đã dùng được cập nhật, bị tắt, bị hủy đăng ký hoặc không dùng được, hay có nội dung khác đang bật, game nêu từng cái và sau khi hỏi sẽ tải bản lưu từ bản sao được giữ lại, hoặc cho biết vì sao không tải được (không có bản sao dùng được, bản cập nhật game, tài khoản hoặc ứng dụng Steam khác, Steam không chạy) và cách khắc phục; tệp lưu và ván đang chơi giữ nguyên. Nút Nội dung được giữ lại… trong thẻ Đăng ký liệt kê các bản sao đó cùng các bản lưu dựa vào chúng, kiểm tra và xóa các bản không dùng; bản sao có bản lưu dựa vào chỉ bị xóa sau khi xác nhận có nêu tên các bản lưu, còn bản ván đang chơi dùng thì không bao giờ bị xóa. Phần chi tiết của vật phẩm và dự án cũng nêu phiên bản của game này (không đặt trong bản dựng phát triển, khi đó nội dung đòi phiên bản game cụ thể sẽ không tải được) và nhánh Steam của nó, còn nút Mở trang vật phẩm trong thẻ Đăng ký cho xem vật phẩm không dùng được; khi Steam chuyển game sang nhánh khác lúc đang chạy, một thông báo cho biết và không có gì tự khởi động lại. Thẻ của một trang là loại của nó cộng bất kỳ thẻ nào trong Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; bước trang liệt kê các ngôn ngữ đã viết trang (ngôn ngữ Steam khác sẽ thấy trang mặc định), và với vật phẩm đã xuất bản, Nhập trang từ Steam… so sánh trang trên Steam với bản nháp từng ô và chỉ lấy các ô bạn đánh dấu. Khi không có Steam, các mục đã đăng ký không được tải và bản sao được giữ lại không được dùng, vì cả hai thuộc về một tài khoản và ứng dụng Steam (bản Demo và bản đầy đủ là hai ứng dụng, mỗi bên có mục, bản nháp và hồ sơ nội dung riêng); bản lưu cần chúng sẽ cho biết, còn việc tạo, kiểm tra, chơi thử, xuất và nhập dự án của bạn đều làm được ngoại tuyến. Khi chạy thử, game đo thời gian tick, bộ nhớ và atlas sprite, rồi không gian làm việc thêm chúng vào báo cáo chạy thử với mức ổn, nên theo dõi hoặc quá nặng kèm cách cải thiện; khi tải lên thất bại vì nội dung hoặc hạn mức, phần giải thích nêu giới hạn của Steam, còn khi hoàn tất sẽ nhắc bạn đăng ký và kiểm tra nó tải được, vì xuất bản không kiểm tra điều đó. Một lượt tải lên chỉ bị bỏ khi năm phút không có tiến triển, còn tác vụ đã xong hoặc đã hủy sẽ rời danh sách sau một tuần; các phiên chơi thử không trò chơi nào đang dùng sẽ bị xóa khi phiên mới bắt đầu, nhấn Enter trên một dự án cục bộ sẽ mở trình chỉnh sửa, và các cửa sổ này vừa màn hình 1280 × 720 ở mọi ngôn ngữ.

## Định nghĩa và phụ thuộc

Plugin có phiên bản thêm lớp, kẻ địch, công trình và cứ điểm độc lập theo không gian tên bằng mẫu hành vi tích hợp, cùng kỹ năng, nghiên cứu, sự kiện, boss có tên, tài nguyên và ngôn ngữ. ID mới dùng `namespace:name`; giữ ID tích hợp sẽ ghi đè nội dung cũ. Tệp lõi chỉ đọc. Gói ngoại hình thay hình nhân vật hoặc địa hình mà không đổi giá trị trò chơi. Công trình của người chơi có thể mang một hiệu ứng: một kỹ năng tấn công, hồi máu, khiên hoặc trạng thái mà nó dùng theo chu kỳ cố định lên kẻ địch hoặc anh hùng trong tầm khi đạt một cấp nhất định. Gói chỉ khai báo năng lực assets và languages chỉ được chứa skin và ngôn ngữ, còn hình ảnh hay âm thanh mà trò chơi không dùng được sẽ giữ nguyên bản có sẵn.

Manifest chung ghi ID dự án, tác giả, phiên bản, tương thích, tài nguyên và phụ thuộc. Thứ tự tải xác định; phụ thuộc thiếu, không tương thích hoặc có vòng lặp sẽ chặn tải. Định dạng cũ giữ thứ tự cũ. Hồ sơ cho xem trước ghi đè và áp dụng ở trò chơi tiếp theo. Hồ sơ nội dung liệt kê các plugin đã chọn theo thứ tự tải, mỗi plugin kèm nguồn và phiên bản đã cài, phiên bản ván đang chơi dùng và phiên bản chọn cho lần tới; Lên và Xuống chỉ đổi thứ tự khi phụ thuộc cho phép, và thứ tự áp dụng cho lần tải tới trong cùng tài khoản và ứng dụng Steam. Trước khi thay đổi bất cứ gì, hồ sơ liệt kê những gì áp dụng sẽ bật hoặc tắt, cùng các bản đồ, chiến dịch, plugin và bản lưu dùng plugin bị tắt; nhấp đúp vào một vấn đề sẽ tìm plugin của nó, bản đồ hoặc chiến dịch có thể gợi ý plugin cần thiết, và mục đã đăng ký không có ở đây (như bản sao plugin của bạn) cho biết lý do.

## Ví dụ

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Tài nguyên và giới hạn

| JSON | Tài nguyên và giới hạn |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | cây kỹ năng của một lớp (kỹ năng bị động): danh sách `{"id", "level", "effect", "requires": [ids]}`, bao nhiêu cũng được và nhiều kỹ năng cùng một cấp, hoặc bảng kiểu cũ `{"<cấp>": {"id", "effect"}}`, đọc như một chuỗi; id là duy nhất trong lớp, `requires` chỉ các kỹ năng của cùng lớp, không tạo vòng |
| adventurer_classes.active_skill, tree_skills | các kỹ năng chủ động riêng của lớp, là nút của cùng một cây: `active_skill` là ID của kỹ năng đầu tiên (gốc), `tree_skills` là tối đa 12 ID của những kỹ năng mọc từ cây. Mỗi cái là một kỹ năng trong `skills` (không bao giờ summon), học được ở `level` của nó khi anh hùng đã có mọi kỹ năng mà `requires` liệt kê (tối đa 8 ID kỹ năng của lớp, bị động hay chủ động; kỹ năng đầu tiên thì không có), và mỗi cái chờ `cooldown` riêng. Không có `active_skill` thì lớp giữ kỹ năng đầu tiên của lớp gốc |
| buildings.effect | một kỹ năng attack, heal, shield hoặc status (không bao giờ summon), dùng mỗi 10–3600 tick từ cấp công trình 1–3; trạng thái không cộng dồn |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; chỉ ngoại hình |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (vẽ đục); skin nhân vật: như mục tiêu; các trường khác và layout ngoài nhân vật không được dùng và có cảnh báo |
| plugin art and sounds | 256 MiB ảnh đã giải mã (rộng × cao × 4) cho mọi gói đang bật, mỗi tệp tính một lần, vượt quá thì giữ hình có sẵn; 64 MiB âm thanh plugin trong bộ nhớ |
| capabilities: assets, languages only | chỉ skin và ngôn ngữ; các định nghĩa khác bị từ chối |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 bản đồ màn chơi |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Tương thích với phiên bản trò chơi

`game_version` đặt điều kiện cho phiên bản phát hành của trò chơi đang chạy. `"*"` được chấp nhận, kể cả với dự án cũ. Một khoảng cụ thể chỉ được chấp nhận khi bản dựng khai báo phiên bản ngữ nghĩa đã biết và đáp ứng khoảng đó; nếu không, việc kiểm tra, tải và xuất bản sẽ bị từ chối. Trong kho mã này, `game.build_info.GAME_VERSION` hiện chưa xác định: hãy dùng `"*"` cho đến khi bản dựng phát hành cung cấp phiên bản được phê duyệt. Trường `version` của dự án và tên nhánh Steam không cung cấp phiên bản trò chơi.
