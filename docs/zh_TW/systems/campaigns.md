---
title: "戰役模式"
---

戰役模式提供多關卡劇本，每關有特定的勝利條件和故事背景。

---

## 內建戰役

遊戲內建一套**教學戰役**（5 關），引導新手學習各項遊戲機制。它在主選單最上面有自己的按鈕。

---

## 勝利條件

每個戰役關卡可以設定以下勝利條件之一：

| `victory` | 條件 | 說明 |
|---|------|------|
| `free` | **自由模式** | 無特定勝利條件，自由遊玩 |
| `destroy_enemy_buildings` | **摧毀所有據點** | 消滅地圖上所有敵方據點 |
| `survive_ticks` | **存活指定時間** | 城堡存活超過指定 tick 數 |
| `reach_gold` | **累積指定金幣** | 玩家金庫達到目標金額 |
| `destroy_building` | **摧毀指定據點** | 摧毀特定類型的敵方據點 |
| `defend` | **防禦城堡** | 城堡在指定時間內不被摧毀 |
| `collect_chests` | **收集所有寶箱** | 開啟地圖上所有寶箱 |
| `secure_trade` | **確保商路** | 商隊完成 `victory_value` 趟往返，且地圖上所有敵營都被摧毀 |

---

## 戰役結構

戰役以資料夾形式存放在 `campaigns/` 目錄下：

```
campaigns/
└── tutorial/
    ├── campaign.json     # 戰役元資料與關卡列表
    ├── level1.json       # 第一關地圖
    ├── level2.json       # 第二關地圖
    └── ...
```

### campaign.json 格式

```json
{
  "name": "教學戰役",
  "description": "學習基本遊戲機制",
  "levels": [
    {
      "map": "level1.json",
      "title": "新的開始",
      "intro": "歡迎來到不馴之冠...",
      "outro": "恭喜過關！",
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

### 關卡設定

| 欄位 | 說明 |
|------|------|
| `map` | 地圖檔路徑（相對於戰役資料夾） |
| `title` | 關卡標題 |
| `intro` | 開場文字 |
| `outro` | 過關文字 |
| `starting_gold` | 初始金幣 (0 – 10⁷) |
| `victory` | 勝利條件類型 |
| `victory_value` | 勝利條件數值（如存活 tick 數、目標金額等） (0 – 10⁹) |
| `unlocked_buildings` | 可用建築白名單（限制玩家的建造選項）。空清單表示允許所有建築；`unlock_building` 只會往非空清單裡加入。 |
| `victory_target` | `destroy_building` 要摧毀的據點類型（例如 `DRAGON_NEST`），其他條件會忽略 |
| `carry_over` | 從上一關保留的內容：`gold`、`adventurers`、`research`、`path`（城堡路線與它的專精）（各為 true/false）。關卡在 `carry_over` 列出的內容，是玩家直接接著玩時從同一戰役的另一關帶過來的，並在那一刻記錄下來；這一關每次重試都從這份記錄開始。從任務清單開始的關卡什麼都不帶，關卡沒有列出的內容（研究與城堡路線也一樣）不會跟著換地圖留下來。 |
| `triggers` | 腳本事件：`condition` + `params`、`action` + `action_params`，可選 `id`、`after`（等該觸發器觸發後才檢查）與 `once`。條件：`always`、`tick_reached`、`tick_after_fire`、`gold_at_least`、`adventurer_count_at_least`、`building_built`、`building_count_at_least`、`any_building_damaged`、`enemy_buildings_destroyed`、`enemy_building_seen`、`chests_opened`、`enemy_killed_count`、`bounties_completed`、`buildings_lost`、`caravan_rounds`、`caravans_lost`、`ticks_after_step`、`site_count_at_least`、`bounty_posted`、`taxes_collected`、`branch_chosen`、`spell_cast`、`hero_geared`。動作：`show_message`、`unlock_building`、`spawn_boss`、`start_event`、`spawn_enemies`、`post_bounty`、`grant_gold`、`reveal`。不是物件或有欄位值種類不對的觸發器會被略過，並在主控台回報。`chests_opened`、`enemy_killed_count` 與 `bounties_completed` 從關卡開始時計數。重複的觸發器（`once: false`）在條件成立的每個 tick 都會執行，所以檢查會拒絕會生怪、給錢、插旗或啟動事件的重複觸發器；BOSS 遭遇只會啟動一次，也不能要等它自己被打倒才啟動。`spawn_enemies` 的敵群可以帶 `march`（`castle` 或 `road`）：這樣它會往城堡或最近的交易站進軍，而不是在出現的地方遊蕩。`reveal`（`x`、`y`、1 到 40 的 `radius`）讓玩家看到一個地方：這個半徑內的地面視為已探索。`ticks_after_step` 從 `after` 所指的觸發器觸發的那一 tick 起算 `value`。`show_message` 的參數寫成 `i18n:<key>` 時，會先翻譯再放進文字裡，所以訊息可以用遊戲自己的稱呼來指面板或建築。 |
| `id` | 關卡的固定名稱，用於進度與 `requires`（英數字、`.`、`-`、`_`）；省略時依位置為 `level<n>` |
| `requires` | 必須先完成的關卡：本戰役的關卡 `id`，或 `<戰役 id>/<關卡 id>` |
| `ruleset` | 只能是 `kingdom`，也可以省略：每個關卡都採用王國規則。寫了 `classic` 或什麼都沒寫的關卡與地圖，都當成王國來玩；不認得的名稱會被拒絕 |
| `castle_level` | 關卡開始時的城堡等級（1–3）；省略時為主堡 |
| `time_limit` | 關卡可用的 tick 數；時間到還沒贏就算輸。0 或省略表示不限時 |
| `advice` | 簡報裡的建議；和其他文字一樣可以是 `i18n:` 鍵 |
| `side_quests` | 關卡的可選目標，最多兩個，每個是 `{"kind", "x", "y"}`，kind 為 `supply_party`, `guarded_cache`, `lair_treasure`；可用 `enemy` 或 `lair` 指定那裡是誰 |
| `objectives` | 最多 8 個附加勝利條件，每個是 `{"victory", "value", "target", "required"}`，victory 可用 `free` 以外的任何條件。主要勝利（若不是 `free`）與所有必做條件同時達成才算過關；選做條件會在目標列計數並列在結算畫面 |
| `defeats` | 最多 4 個額外的失敗條件，每個是 `{"kind", "value"}`：自關卡開始起 `heroes_lost`（倒下的英雄）、`buildings_lost`（失去的建築）或 `caravans_lost`（失去的商隊）達到該值即失敗 |

戰役本身可以帶 `id`（記錄進度時用的名稱）與 `"linear": false`（互相獨立的挑戰：贏了一關不會接到下一關）。也可以列出 `blocked_events`：這個戰役的關卡不會擲出的隨機事件名稱（例如 `DRAGON_NEST`）。還可以列出 `roster`：會在這個戰役的關卡遊蕩與入侵的敵人種類（例如 `GOBLIN`）；不列就是全部種類。

:::tip[多語系支援]
戰役文字可以使用 `i18n:KEY` 標記，會自動根據玩家語言顯示對應翻譯。
:::

---

## 試玩戰役

試玩版的劇情戰役（`campaigns/demo_kingdom/`）從主選單進入。它和教學一樣由 `game/systems/demo_campaign.py` 寫出。

| 任務 | 目標 | 失敗條件 | 開局 |
|---|---|---|---|
| 1. 第一頂王冠 | 找出主堡東邊的哥布林營地並讓人摧毀它 | 主堡陷落 | 1600 金幣與一份精簡的建築清單，外加鐵匠鋪與市場的廢墟 |
| 2. 商路上的陰影 | 讓商隊完成三趟往返並摧毀強盜營地 | 城堡陷落 | 2400 金幣、2 級城堡、一座小鎮與兩條鋪好的路 |
| 3. 裂牙之夜 | 擊敗裂牙酋長 | 城堡陷落 | 3000 金幣、2 級城堡與六座建築的城鎮 |

任務 1 從鐵匠鋪與市場的廢墟旁開始：王室工班免費把它們重建起來，先蓋鐵匠鋪；你放下的建築（包括第一座公會）要排在它們後面等工班，除非你把它標記為優先。任務一的訊息會從第一座公會帶到第一位英雄、市場與稅務員。開始約 48 秒後，王室自費在營地附近張貼一張探索懸賞；有英雄完成後，會請你對營地張貼討伐懸賞。任務二中，王室會先讓人探查兩處交易站地點，強盜會襲擊南路一次（提前 20 秒預告），第一次失去建築時會收到 400 金幣的援助。任務三中，第一波襲擊在第 1000 tick 從東邊的路到來，第二波在第 2500 tick 從北邊的路到來，裂牙酋長在第 4300 tick 到，每次都提前 100 tick 預告；攻下他的要塞是一趟值得掠奪的遠征，但只有擊敗他才算過關。任務一與任務二可以蓋工人公會來修理；任務三的城堡一開始就是 2 級，可以馬上選路線，攻下的要塞也不會再派出它自己的襲擊。任務 2 與任務 3 在直接接著玩時保留上一關的研究；每次重試都和第一次嘗試一樣開始，從清單選的任務則不帶研究。

挑戰（`campaigns/demo_challenges/`，`"linear": false`）用同樣的方式寫出。《薄金遠征》在任務二過關後開放：600 金幣、二級城堡、南路上有交易站的小鎮，要在 15 分鐘內（`time_limit`）摧毀哥布林帳篷與襲擊商路的強盜營地；營地自己的襲擊開始前，強盜會先試探商路兩次。《守住商路》在任務三過關後開放：交易站已經開張，強盜每 500 tick 從南路來一次、一次比一次強，要在 14 分 20 秒內讓商隊完成 10 趟往返。自由王國（試玩版的「自由王國」或正式版的沙盒模式）沒有目標；開局對話框可以選擇讓裂牙酋長在開局 20 分鐘後來襲一次（`game/systems/free_kingdom.py`）。在《守住商路》裡，每一波襲擊都往交易站進軍：沒人防守的交易站會被拆掉，商隊也跟著消失，所以什麼都不做就會輸掉這個挑戰。

## 一步步做一個王國任務

1. 在「創作／工作坊」選 **新增專案**，再選 **王國任務**，並指定一個新資料夾。你會得到一個可以直接玩的關卡：一座城鎮、東邊的哥布林帳篷、王室授予的探索／討伐／防守旗標、兩波有預告的敵人，以及作為具名 BOSS 的酋長。
2. 用戰役編輯器開啟它。關卡表單有故事（前言）、簡報顯示的建議、起始金幣與勝利條件；下面是起始城堡等級、時限，以及最多兩個可選目標和它們的位置。
3. 畫地圖：移動城鎮、怪巢與道路。地點必須是城堡走得到的，否則開局時那裡的東西會被略過。地圖檔裡的建築可以帶 `"ruin"`（1 到 99）：它以已完成該百分比工作的工地開始，由王室工班免費蓋完。
4. 開啟觸發器來改訊息、王室授予的旗標（`post_bounty`）、敵波（`spawn_enemies`）與 BOSS 出現的時間（`spawn_boss`）。條件 `enemy_building_seen` 會等到有怪巢進入視野。
5. 在 `campaign.json` 裡，戰役的 `roster` 列出會在地圖上遊蕩的怪物，`blocked_events` 列出不會擲出的隨機事件。
6. 驗證：檢查會依欄位指出寫錯的城堡等級、時限、可選目標、陣容或事件名稱。接著從工作區試玩這一關；在那裡選的難度會決定襲擊、敵波與起始金幣的大小。
7. 先以私人方式發布，玩起來符合你的想法之後再公開。
