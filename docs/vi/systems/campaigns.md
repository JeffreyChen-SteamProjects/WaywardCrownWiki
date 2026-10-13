---
title: "Chế độ chiến dịch"
---

Chế độ chiến dịch cung cấp các kịch bản nhiều màn, mỗi màn có điều kiện chiến thắng cụ thể và bối cảnh câu chuyện.

---

## Chiến dịch tích hợp

Trò chơi bao gồm một **Chiến dịch hướng dẫn** tích hợp (5 màn) giúp người chơi mới làm quen với các cơ chế trò chơi. Nó có nút riêng, nút đầu tiên của menu chính.

---

## Điều kiện chiến thắng

Mỗi màn chiến dịch có thể có một trong các điều kiện chiến thắng sau:

| `victory` | Điều kiện | Mô tả |
|---|-----------|-------|
| `free` | **Chơi tự do** | Không có điều kiện chiến thắng cụ thể; chơi tự do |
| `destroy_enemy_buildings` | **Phá hủy tất cả căn cứ** | Loại bỏ tất cả Căn cứ kẻ thù trên bản đồ |
| `survive_ticks` | **Sống sót theo thời gian** | Giữ Lâu đài tồn tại vượt qua số tick quy định |
| `reach_gold` | **Tích lũy vàng** | Đạt đến số vàng mục tiêu trong ngân khố |
| `destroy_building` | **Phá hủy căn cứ cụ thể** | Phá hủy một loại Căn cứ kẻ thù cụ thể |
| `defend` | **Bảo vệ Lâu đài** | Ngăn Lâu đài bị phá hủy trong thời gian quy định |
| `collect_chests` | **Thu thập tất cả rương** | Mở tất cả rương kho báu trên bản đồ |
| `secure_trade` | **Giữ vững đường buôn** | `victory_value` chuyến khứ hồi của đoàn buôn được trả tiền và mọi cứ điểm kẻ thù trên bản đồ bị phá hủy |

---

## Cấu trúc chiến dịch

Chiến dịch được lưu dưới dạng thư mục trong thư mục `campaigns/`:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Siêu dữ liệu chiến dịch và danh sách màn
    ├── level1.json       # Bản đồ màn 1
    ├── level2.json       # Bản đồ màn 2
    └── ...
```

### Định dạng campaign.json

```json
{
  "name": "Tutorial Campaign",
  "description": "Learn the basic game mechanics",
  "levels": [
    {
      "map": "level1.json",
      "title": "A New Beginning",
      "intro": "Welcome to Wayward Crown...",
      "outro": "Congratulations on clearing this level!",
      "starting_gold": 500,
      "victory": "destroy_enemy_buildings",
      "victory_value": 0,
      "victory_target": "",
      "unlocked_buildings": [],
      "carry_over": {"gold": true, "adventurers": true},
      "triggers": [
        {"id": "welcome", "condition": "tick_reached", "params": {"value": 2},
         "action": "show_message", "action_params": {"text_key": "tut_welcome"}}
      ]
    }
  ]
}
```

### Cài đặt màn chơi

| Trường | Mô tả |
|--------|-------|
| `map` | Đường dẫn tệp bản đồ (tương đối so với thư mục chiến dịch) |
| `title` | Tiêu đề màn chơi |
| `intro` | Văn bản mở đầu |
| `outro` | Văn bản kết thúc |
| `starting_gold` | Vàng khởi đầu (0 – 10⁷) |
| `victory` | Loại điều kiện chiến thắng |
| `victory_value` | Giá trị điều kiện chiến thắng (ví dụ: số tick sống sót, số vàng mục tiêu, v.v.) (0 – 10⁹) |
| `unlocked_buildings` | Danh sách trắng công trình khả dụng (giới hạn tùy chọn xây dựng của người chơi). Danh sách rỗng cho phép mọi công trình; `unlock_building` bổ sung vào danh sách không rỗng. |
| `victory_target` | Loại căn cứ cho `destroy_building` (ví dụ `DRAGON_NEST`); các điều kiện khác bỏ qua |
| `carry_over` | Những gì giữ lại từ màn trước: `gold`, `adventurers`, `research`, `path` (con đường lâu đài và chuyên môn của nó) (mỗi mục true/false). Những gì một màn liệt kê trong `carry_over` được lấy từ một màn khác của cùng chiến dịch khi người chơi đi thẳng tiếp, và được ghi lại ngay lúc đó; mỗi lần thử lại màn đều bắt đầu từ bản ghi ấy. Một màn bắt đầu từ danh sách nhiệm vụ không mang theo gì, và những gì màn không liệt kê (kể cả nghiên cứu và con đường của lâu đài) không còn sau khi đổi bản đồ. |
| `triggers` | Sự kiện theo kịch bản: `condition` + `params`, `action` + `action_params`, tùy chọn `id`, `after` (chờ trình kích hoạt đó) và `once`. Điều kiện: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Hành động: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Trigger không phải là đối tượng hoặc có trường mang sai loại giá trị sẽ bị bỏ ra và được báo trên console. `chests_opened`, `enemy_killed_count` và `bounties_completed` đếm từ lúc bắt đầu màn chơi. Trigger lặp lại (`once: false`) hành động ở mọi tick mà điều kiện còn đúng, nên bước kiểm tra từ chối trigger gọi quái, trả vàng, treo thưởng hay bắt đầu sự kiện; một cuộc chạm trán trùm chỉ bắt đầu một lần và không bao giờ chỉ sau khi chính nó bị đánh bại. Một đợt `spawn_enemies` có thể mang `march` (`castle` hoặc `road`): khi đó nó tiến đánh lâu đài hoặc trạm giao thương gần nhất thay vì lang thang ở nơi xuất hiện. `reveal` (`x`, `y`, `radius` từ 1 đến 40) cho người chơi thấy một nơi: vùng đất trong bán kính đó được coi là đã khám phá. `ticks_after_step` đếm `value` của nó từ tick mà trigger nêu trong `after` đã kích hoạt. Tham số của `show_message` viết dưới dạng `i18n:<key>` được dịch trước khi đưa vào văn bản, nên thông điệp có thể gọi tên một bảng hay một công trình đúng như trò chơi gọi. |
| `id` | Tên cố định của màn dùng cho tiến trình và `requires` (chữ cái, chữ số, `.`, `-`, `_`); nếu bỏ trống là `level<n>` theo vị trí |
| `requires` | Các màn phải hoàn thành trước: `id` của một màn trong chiến dịch này, hoặc `<id chiến dịch>/<id màn>` |
| `ruleset` | Chỉ có `kingdom`, và có thể bỏ trống: mọi màn đều chơi theo luật vương quốc. Màn hoặc bản đồ ghi `classic`, hoặc không ghi gì, sẽ chơi như một vương quốc; tên lạ sẽ bị từ chối |
| `castle_level` | Cấp lâu đài khi màn chơi bắt đầu (1–3); nếu bỏ qua là pháo đài |
| `time_limit` | Số tick màn chơi được phép kéo dài; hết mà chưa thắng thì thua. 0 hoặc bỏ qua: không giới hạn |
| `advice` | Điều bản tóm tắt khuyên; như các văn bản khác, có thể là khóa `i18n:` |
| `side_quests` | Tối đa hai phát hiện tùy chọn trên màn chơi, mỗi cái là `{"kind", "x", "y"}` với kind thuộc `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` hoặc `lair` có thể chỉ rõ ai ở đó |
| `objectives` | Tối đa 8 điều kiện thắng bổ sung, mỗi điều kiện `{"victory", "value", "target", "required"}` với bất kỳ loại thắng nào trừ `free`. Màn được thắng khi điều kiện chính (nếu không phải `free`) và mọi điều kiện bắt buộc đều đạt; điều kiện tùy chọn được đếm trên dòng mục tiêu và liệt kê trong kết quả |
| `defeats` | Tối đa 4 cách thua thêm, mỗi cách `{"kind", "value"}`: thua khi `heroes_lost`, `buildings_lost` hoặc `caravans_lost` đạt giá trị đó kể từ đầu màn |

Bản thân chiến dịch có thể có `id` (tên dùng để ghi tiến trình) và `"linear": false` (các thử thách độc lập: thắng một màn không dẫn sang màn kế tiếp). Nó cũng có thể liệt kê `blocked_events`: tên các sự kiện ngẫu nhiên mà các màn của nó không bao giờ gieo ra (ví dụ `DRAGON_NEST`). Và một `roster`: các loại kẻ thù (tên như `GOBLIN`) lang thang và xâm lược trong các màn của nó; nếu bỏ qua thì là mọi loại.

:::tip[Hỗ trợ bản địa hóa]
Văn bản chiến dịch có thể sử dụng thẻ `i18n:KEY`, sẽ tự động hiển thị bản dịch tương ứng dựa trên ngôn ngữ của người chơi.
:::

---

## Chiến dịch Demo

Chiến dịch cốt truyện của Demo (`campaigns/demo_kingdom/`) được mở từ menu chính. Giống phần hướng dẫn, nó do `game/systems/demo_campaign.py` ghi ra.

| Nhiệm vụ | Mục tiêu | Thua khi | Khởi đầu |
|---|---|---|---|
| 1. Vương miện đầu tiên | Tìm trại goblin ở phía đông pháo đài và khiến nó bị phá hủy | Pháo đài thất thủ | 1600 vàng và một danh sách công trình ngắn, cùng tàn tích của một lò rèn và một khu chợ |
| 2. Bóng tối trên đường buôn | Để đoàn buôn hoàn thành ba chuyến khứ hồi và phá hủy trại cướp | Lâu đài thất thủ | 2400 vàng, lâu đài cấp 2, một thị trấn nhỏ và hai con đường lát |
| 3. Đêm của Nanh Nghiến | Đánh bại Tù trưởng Nanh Nghiến | Lâu đài thất thủ | 3000 vàng, lâu đài cấp 2 và một thị trấn sáu công trình |

Nhiệm vụ 1 bắt đầu bên tàn tích của một lò rèn và một khu chợ: đội thợ của triều đình dựng lại chúng miễn phí, lò rèn trước, và thứ bạn đặt xuống, kể cả hội đầu tiên, phải chờ sau chúng trừ khi bạn đánh dấu ưu tiên. Trong nhiệm vụ 1, các thông báo dẫn từ hội đầu tiên tới anh hùng đầu tiên, chợ và người thu thuế. Sau khoảng 48 giây, vương triều tự bỏ tiền đặt một lệnh «Khám phá» gần trại; khi một anh hùng hoàn thành, bạn được đề nghị đặt lệnh «Tiêu diệt» lên trại. Trong nhiệm vụ 2, vương triều cho trinh sát cả hai địa điểm đặt trạm giao thương, bọn cướp phục kích đường phía nam một lần (báo trước 20 giây), và công trình đầu tiên bị mất sẽ đem về 400 vàng cứu trợ. Trong nhiệm vụ 3, đợt cướp phá đầu tới bằng đường phía đông ở tick 1000 và đợt thứ hai bằng đường phía bắc ở tick 2500, còn Tù trưởng Nanh Nghiến tới ở tick 4300, mỗi lần đều được báo trước 100 tick; san phẳng pháo đài của hắn là một chuyến viễn chinh đáng với chiến lợi phẩm, nhưng chỉ khi đánh bại hắn mới thắng. Nhiệm vụ 1 và 2 có Phường hội Thợ xây để sửa chữa; ở nhiệm vụ 3 lâu đài đã ở cấp 2 nên có thể chọn con đường ngay, và pháo đài bị san phẳng không còn gửi các đợt cướp của riêng nó. Nhiệm vụ 2 và 3 giữ nghiên cứu của nhiệm vụ trước khi bạn đi thẳng tiếp; mỗi lần thử lại bắt đầu như lần đầu, và nhiệm vụ chọn từ danh sách bắt đầu mà không có nghiên cứu đó.

Các thử thách (`campaigns/demo_challenges/`, `"linear": false`) được ghi theo cùng cách. *Vàng mỏng* mở sau nhiệm vụ 2: 600 vàng, lâu đài cấp 2, một thị trấn nhỏ có trạm giao thương trên đường phía nam và 15 phút (`time_limit`) để phá hủy một trại goblin và một trại cướp chuyên đánh con đường; bọn cướp thử con đường hai lần trước khi trại bắt đầu các đợt đột kích của riêng nó. *Giữ lấy con đường* mở sau nhiệm vụ 3: trạm giao thương đã mở sẵn, bọn cướp tới bằng đường phía nam mỗi 500 tick, mỗi lần mạnh hơn một chút, và phải có 10 chuyến khứ hồi của đoàn buôn hoàn thành trong 14 phút 20 giây. Một vương quốc tự do (Vương quốc tự do của bản Demo hoặc Chế độ tự do của bản đầy đủ) không có mục tiêu; hộp thoại bắt đầu cho phép yêu cầu Tù trưởng Nanh Nghiến tới một lần, 20 phút sau khi bắt đầu (`game/systems/free_kingdom.py`). Trong *Giữ lấy con đường*, mọi đợt cướp đều kéo tới trạm giao thương: trạm không ai phòng thủ sẽ bị phá và đoàn buôn cũng mất theo, nên không làm gì là thua thử thách.

## Làm một nhiệm vụ vương quốc, từng bước

1. Trong Creator / Workshop chọn **Dự án mới**, rồi **Nhiệm vụ vương quốc**, và một thư mục mới. Bạn có một màn chơi được ngay: một thị trấn, một trại goblin ở phía đông, các lệnh «Khám phá», «Tiêu diệt» và «Phòng thủ» của hoàng gia, hai đợt được báo trước và tù trưởng là trùm có tên.
2. Mở nó trong trình biên tập chiến dịch. Biểu mẫu màn có câu chuyện (mở đầu), lời khuyên hiện trong bản tóm tắt, vàng khởi đầu và điều kiện thắng; bên dưới là cấp lâu đài khởi đầu, giới hạn thời gian và tối đa hai phát hiện tùy chọn cùng ô của chúng.
3. Vẽ bản đồ: di chuyển thị trấn, sào huyệt và đường. Một địa điểm phải đi tới được từ lâu đài, nếu không thứ đứng ở đó sẽ bị bỏ qua khi màn bắt đầu. Một công trình trong tệp bản đồ có thể mang `"ruin"` (từ 1 đến 99): nó bắt đầu là công trường đã xong chừng ấy phần trăm công việc, và đội thợ của triều đình hoàn thành nó miễn phí.
4. Mở các trigger để đổi thông điệp, các lệnh hoàng gia ban (`post_bounty`), các đợt (`spawn_enemies`) và lúc trùm tới (`spawn_boss`). Điều kiện `enemy_building_seen` chờ tới khi một sào huyệt nằm trong tầm nhìn.
5. Trong `campaign.json`, `roster` nêu các quái vật lang thang trên bản đồ và `blocked_events` nêu các sự kiện ngẫu nhiên không bao giờ gieo.
6. Kiểm tra: các phép kiểm chỉ ra theo trường một cấp lâu đài, giới hạn thời gian, phát hiện tùy chọn, mục đội hình hay sự kiện sai. Sau đó chơi màn từ không gian làm việc; độ khó chọn ở đó quyết định độ lớn của các đợt cướp, các đợt theo kịch bản và vàng khởi đầu.
7. Hãy đăng ở chế độ riêng tư trước, rồi công khai khi nó chơi đúng như ý bạn.

<!-- gameplay-preparation:start -->

Anh hùng so sánh cửa hàng có thể tới, giá cả và sức chứa lưu trú thực tế. Sau khi rút lui, họ hồi phục trước khi trở lại việc nguy hiểm; chi tiết viễn chinh cho biết chuẩn bị và chỗ nghỉ có thể tới. Màn chơi tùy chỉnh có thể có tối đa ba phương án thắng hoàn chỉnh và vẫn yêu cầu điều kiện chung. Màn cũ có một điều kiện thắng vẫn thắng khi đạt mục tiêu ở tick cuối cho phép; các phương án thắng thay thế vẫn ưu tiên thất bại.

```json
{
  "victory": "free",
  "objectives": [
    {
      "victory": "protect_building",
      "target": "trade-post"
    }
  ],
  "victory_plans": [
    {
      "id": "commerce",
      "title": "i18n:victory_kind_caravan_rounds",
      "objectives": [
        {
          "victory": "caravan_rounds",
          "value": 2
        }
      ]
    },
    {
      "id": "assault",
      "title": "i18n:victory_kind_destroy_building",
      "objectives": [
        {
          "victory": "destroy_building",
          "target": "GOBLIN_TENT"
        }
      ]
    }
  ]
}
```

```json
{"type": "TRADING_POST", "x": 100, "y": 80, "objective_id": "trade-post"}
```

Chi tiết viễn chinh dẫn đến tiệm thuốc và nơi nghỉ có thể tới, đồng thời đếm kỹ năng hồi máu và khiên đồng đội đã học. Tiệm ghi tổng lượt đến, thời gian đi trung bình và các cuộc tấn công. Kết quả nêu một kế hoạch thắng chính cùng thành tích đồng thời, chỉ quyết toán cơ bản một lần.

<!-- gameplay-preparation:end -->

## Đài hiệu lửa cổ

Ở bản đồ có đài hiệu lửa cổ, chọn địa điểm đã khám phá để xem chi phí, thời hạn và lựa chọn trong bảng chi tiết. Sửa chữa cần đội thợ hoặc thợ xây thật sự đến nơi và dừng ở nửa tiến độ để chờ tài trợ thêm hay rút lui. Hoàn thành cảnh báo kẻ địch đã khám phá trong 20 ô. Lấy kho báu cần anh hùng tự nhận cờ khám phá, đến nơi và làm việc; ngân khố và người làm nhận thưởng một lần. Bỏ qua không bắt đầu thời hạn; rút lui chỉ hoàn tiền chưa dùng. Di tích không tuyển người hay tăng sức mạnh cờ.

## Tiếp tế goblin tùy chọn

Bản đồ và màn có thể khai báo khả năng `lair_expansion` cùng danh sách tối đa bốn kế hoạch. Mỗi kế hoạch cần `id` và `target` trỏ đến lều goblin hiện có bằng `objective_id` duy nhất. Người vận chuyển phải thật sự đến nơi và người làm còn sống phải xây tại chỗ. Đoàn hàng, hộ vệ, quân thủ và tập kích dùng chung ngân sách hữu hạn: tối đa bốn lượt và 64 quân mới mỗi nguồn. Mất tiền đồn trì hoãn và làm yếu cuộc tập kích chưa xuất phát; phá căn cứ dừng sản xuất mới nhưng giữ quân còn sống và tiền đồn tùy chọn. Tiền đồn không tăng căn cứ bắt buộc cho chiến thắng. Không có kế hoạch thì dùng lịch cũ. Người vận chuyển mang thùng hàng riêng, có hoạt ảnh và âm thanh riêng, chỉ xuất hiện trong đoàn được giao. Sau khi trinh sát, có thể treo thưởng người vận chuyển đang di chuyển. Hạ gục sẽ hủy lô hàng đó và trì hoãn sản xuất; hộ vệ sống sót vẫn ở chiến trường. Hàng và thưởng được quyết toán một lần; hủy áp dụng quy tắc hoàn tiền thông thường. Tiền đồn có hình giàn giáo, mái kho tiếp tế hoàn thành và đống đổ nát riêng. Công nhân sống phải xây địa điểm có thể bị tấn công; chưa xong thì không tạo quân phòng thủ mới. Phá tiền đồn trì hoãn đợt tấn công chưa xuất phát và đưa tập kết về sào huyệt chính. Phá sào huyệt dừng sản xuất nhưng giữ đơn vị sống và tiền đồn mồ côi. Mỗi nguồn giữ tối đa một đống đổ nát trang trí, không tạo phòng thủ hay thêm mục tiêu chiến thắng.

Biểu mẫu Mở rộng sào huyệt dùng chung cho bản đồ và chiến dịch: tối đa bốn lều yêu tinh, thời gian bảo vệ, chuẩn bị, giao hàng, xây dựng, tập kết và chờ, vòng, ngân sách chung, hộ vệ và tám vùng chữ nhật cấm mỗi nguồn. Thời gian là giây trong trò chơi, bước 0,2. Áp dụng cập nhật bản nháp; hủy giữ nguyên. Xóa nguồn bản đồ sẽ tắt mở rộng. Tắt rõ ràng ở màn sẽ ưu tiên hơn bản đồ; nếu không, danh sách màn trống kế thừa bản đồ. Nguồn trùng hoặc thiếu và vùng ngoài bản đồ bị từ chối trước khi lưu.

Giới hạn tiền đồn chung của bản đồ từ một đến bốn. Đoàn tiếp tế cho địa điểm mới giữ chỗ trước khi xuất phát; khi đầy, nguồn khác chờ mà không tạo đơn vị hay tích đợt tập kích. Tiền đồn mồ côi còn sống giữ chỗ đến khi bị phá.

Lớp tình báo tiếp tế địch chỉ hiện điểm đường và địa điểm đã quan sát. Sản xuất, máu, kho và phòng thủ sào huyệt, giai đoạn/tiến độ tiền đồn và vị trí đoàn có thời gian quan sát riêng. Ngoài tầm nhìn giữ giá trị cuối; xây hoặc phá ẩn không đổi hình đã biết. Trinh sát lại sẽ cập nhật. Tuyến nhớ tối đa mười sáu điểm. Thông báo không lặp sau tải; bản hướng dẫn giải thích bốn chiến lược đối phó ngân sách hữu hạn.

Chơi tự do có tùy chọn mở rộng lều goblin hữu hạn, mặc định tắt. Trò chơi hỗn hợp hoặc chỉ goblin dành một vị trí trong số sào huyệt đã chọn cho lều và liên kết tối đa bốn lều có sẵn, không tăng tổng số. Chủng tộc khác không nhận nguồn mới. Chiến dịch dùng cấu hình của tác giả.

Giàn giáo, kho và phế tích có hình dáng riêng cùng vải chuyển động; giảm chuyển động giữ vải đứng yên. Người vận chuyển chỉ gõ búa khi xây dựng thực sự tiến triển. Phát hiện đoàn và quan sát công trình, hoàn tất, phế tích có biểu tượng và âm thanh riêng. Thay đổi ẩn và tải không lặp thông báo. Biểu mẫu nhỏ và thông tin có thể cuộn, bảng thông tin cũng cuộn bằng bàn phím.
