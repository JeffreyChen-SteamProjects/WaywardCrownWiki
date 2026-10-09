---
title: "战役模式"
---

战役模式提供多关卡剧本，每关有特定的胜利条件和故事背景。

---

## 内建战役

游戏内建一套**教学战役**（5 关），引导新手学习各项游戏机制。它在主菜单最上面有自己的按钮。

---

## 胜利条件

每个战役关卡可以设定以下胜利条件之一：

| `victory` | 条件 | 说明 |
|---|------|------|
| `free` | **自由模式** | 无特定胜利条件，自由游玩 |
| `destroy_enemy_buildings` | **摧毁所有据点** | 消灭地图上所有敌方据点 |
| `survive_ticks` | **存活指定时间** | 城堡存活超过指定 tick 数 |
| `reach_gold` | **累积指定金币** | 玩家金库达到目标金额 |
| `destroy_building` | **摧毁指定据点** | 摧毁特定类型的敌方据点 |
| `defend` | **防御城堡** | 城堡在指定时间内不被摧毁 |
| `collect_chests` | **收集所有宝箱** | 开启地图上所有宝箱 |
| `secure_trade` | **确保商路** | 商队完成 `victory_value` 趟往返，且地图上所有敌营都被摧毁 |

---

## 战役结构

战役以文件夹形式存放在 `campaigns/` 目录下：

```
campaigns/
└── tutorial/
    ├── campaign.json     # 战役元数据与关卡列表
    ├── level1.json       # 第一关地图
    ├── level2.json       # 第二关地图
    └── ...
```

### campaign.json 格式

```json
{
  "name": "教学战役",
  "description": "学习基本游戏机制",
  "levels": [
    {
      "map": "level1.json",
      "title": "新的开始",
      "intro": "欢迎来到不驯之冠...",
      "outro": "恭喜过关！",
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

### 关卡设定

| 字段 | 说明 |
|------|------|
| `map` | 地图文件路径（相对于战役文件夹） |
| `title` | 关卡标题 |
| `intro` | 开场文字 |
| `outro` | 过关文字 |
| `starting_gold` | 初始金币 (0 – 10⁷) |
| `victory` | 胜利条件类型 |
| `victory_value` | 胜利条件数值（如存活 tick 数、目标金额等） (0 – 10⁹) |
| `unlocked_buildings` | 可用建筑白名单（限制玩家的建造选项）。空列表表示允许所有建筑；`unlock_building` 只会往非空列表里添加。 |
| `victory_target` | `destroy_building` 要摧毁的据点类型（例如 `DRAGON_NEST`），其他条件会忽略 |
| `carry_over` | 从上一关保留的内容：`gold`、`adventurers`、`research`、`path`（城堡路线与它的专精）（各为 true/false）。关卡在 `carry_over` 列出的内容，是玩家直接接着玩时从同一战役的另一关带过来的，并在那一刻记录下来；这一关每次重试都从这份记录开始。从任务列表开始的关卡什么都不带，关卡没有列出的内容（研究与城堡路线也一样）不会跟着换地图留下来。 |
| `triggers` | 脚本事件：`condition` + `params`、`action` + `action_params`，可选 `id`、`after`（等该触发器触发后才检查）与 `once`。条件：`always`、`tick_reached`、`tick_after_fire`、`gold_at_least`、`adventurer_count_at_least`、`building_built`、`building_count_at_least`、`any_building_damaged`、`enemy_buildings_destroyed`、`enemy_building_seen`、`chests_opened`、`enemy_killed_count`、`bounties_completed`、`buildings_lost`、`caravan_rounds`、`caravans_lost`、`ticks_after_step`、`site_count_at_least`、`bounty_posted`、`taxes_collected`、`branch_chosen`、`spell_cast`、`hero_geared`。动作：`show_message`、`unlock_building`、`spawn_boss`、`start_event`、`spawn_enemies`、`post_bounty`、`grant_gold`、`reveal`。不是对象或有字段值类型不对的触发器会被略过，并在控制台报告。`chests_opened`、`enemy_killed_count` 与 `bounties_completed` 从关卡开始时计数。重复的触发器（`once: false`）在条件成立的每个 tick 都会执行，所以检查会拒绝会刷怪、给钱、插旗或启动事件的重复触发器；BOSS 遭遇只会启动一次，也不能要等它自己被打倒才启动。`spawn_enemies` 的敌群可以带 `march`（`castle` 或 `road`）：这样它会往城堡或最近的交易站进军，而不是在出现的地方游荡。`reveal`（`x`、`y`、1 到 40 的 `radius`）让玩家看到一个地方：这个半径内的地面视为已探索。`ticks_after_step` 从 `after` 所指的触发器触发的那一 tick 起算 `value`。`show_message` 的参数写成 `i18n:<key>` 时，会先翻译再放进文字里，所以讯息可以用游戏自己的称呼来指面板或建筑。 |
| `id` | 关卡的固定名称，用于进度与 `requires`（字母、数字、`.`、`-`、`_`）；省略时按位置为 `level<n>` |
| `requires` | 必须先完成的关卡：本战役的关卡 `id`，或 `<战役 id>/<关卡 id>` |
| `ruleset` | 只能是 `kingdom`，也可以省略：每一关都采用王国规则。写了 `classic` 或什么都没写的关卡或地图会当作王国来玩；不认识的名称会被拒绝 |
| `castle_level` | 关卡开始时的城堡等级（1–3）；省略时为主堡 |
| `time_limit` | 关卡可用的 tick 数；时间到还没赢就算输。0 或省略表示不限时 |
| `advice` | 简报里的建议；和其他文字一样可以是 `i18n:` 键 |
| `side_quests` | 关卡的可选目标，最多两个，每个是 `{"kind", "x", "y"}`，kind 为 `supply_party`, `guarded_cache`, `lair_treasure`；可用 `enemy` 或 `lair` 指定那里是谁 |
| `objectives` | 最多 8 个附加胜利条件，每个是 `{"victory", "value", "target", "required"}`，victory 可用 `free` 以外的任何条件。主要胜利（若不是 `free`）与所有必做条件同时达成才算过关；选做条件会在目标栏计数并列在结算画面 |
| `defeats` | 最多 4 个额外的失败条件，每个是 `{"kind", "value"}`：自关卡开始起 `heroes_lost`（倒下的英雄）、`buildings_lost`（失去的建筑）或 `caravans_lost`（失去的商队）达到该值即失败 |

战役本身可以带 `id`（记录进度时用的名称）与 `"linear": false`（互相独立的挑战：赢下一关不会接到下一关）。也可以列出 `blocked_events`：这个战役的关卡不会掷出的随机事件名称（例如 `DRAGON_NEST`）。还可以列出 `roster`：会在这个战役的关卡游荡与入侵的敌人种类（例如 `GOBLIN`）；不列就是全部种类。

:::tip[多语言支持]
战役文字可以使用 `i18n:KEY` 标记，会自动根据玩家语言显示对应翻译。
:::

---

## 试玩战役

试玩版的剧情战役（`campaigns/demo_kingdom/`）从主菜单进入。它和教学一样由 `game/systems/demo_campaign.py` 写出。

| 任务 | 目标 | 失败条件 | 开局 |
|---|---|---|---|
| 1. 第一顶王冠 | 找出主堡东边的哥布林营地并让人摧毁它 | 主堡陷落 | 1600 金币与一份精简的建筑清单，外加铁匠铺与市场的废墟 |
| 2. 商路上的阴影 | 让商队完成三趟往返并摧毁强盗营地 | 城堡陷落 | 2400 金币、2 级城堡、一座小镇与两条铺好的路 |
| 3. 裂牙之夜 | 击败裂牙酋长 | 城堡陷落 | 3000 金币、2 级城堡与六座建筑的城镇 |

任务 1 从铁匠铺与市场的废墟旁开始：王室工班免费把它们重建起来，先盖铁匠铺；你放下的建筑（包括第一座公会）要排在它们后面等工班，除非你把它标记为优先。任务一的消息会从第一座公会带到第一位英雄、市场与税务员。开始约 48 秒后，王室自费在营地附近张贴一张探索悬赏；有英雄完成后，会请你对营地张贴讨伐悬赏。任务二中，王室会先让人探查两处交易站地点，强盗会袭击南路一次（提前 20 秒预告），第一次失去建筑时会收到 400 金币的援助。任务三中，第一波袭击在第 1000 tick 从东边的路到来，第二波在第 2500 tick 从北边的路到来，裂牙酋长在第 4300 tick 到，每次都提前 100 tick 预告；攻下他的要塞是一趟值得掠夺的远征，但只有击败他才算过关。任务一与任务二可以盖工人公会来修理；任务三的城堡一开始就是 2 级，可以马上选路线，攻下的要塞也不会再派出它自己的袭击。任务 2 与任务 3 在直接接着玩时保留上一关的研究；每次重试都和第一次尝试一样开始，从列表选的任务则不带研究。

挑战（`campaigns/demo_challenges/`，`"linear": false`）用同样的方式写出。《薄金远征》在任务二过关后开放：600 金币、二级城堡、南路上有交易站的小镇，要在 15 分钟内（`time_limit`）摧毁哥布林帐篷与袭击商路的强盗营地；营地自己的袭击开始前，强盗会先试探商路两次。《守住商路》在任务三过关后开放：交易站已经开张，强盗每 500 tick 从南路来一次、一次比一次强，要在 14 分 20 秒内让商队完成 10 趟往返。自由王国（试玩版的“自由王国”或正式版的沙盒模式）没有目标；开局对话框可以选择让裂牙酋长在开局 20 分钟后来袭一次（`game/systems/free_kingdom.py`）。在《守住商路》里，每一波袭击都往交易站进军：没人防守的交易站会被拆掉，商队也跟着消失，所以什么都不做就会输掉这个挑战。

## 一步步做一个王国任务

1. 在「创作／创意工坊」选 **新增项目**，再选 **王国任务**，并指定一个新文件夹。你会得到一个可以直接玩的关卡：一座城镇、东边的哥布林帐篷、王室授予的探索／讨伐／防守旗标、两波有预告的敌人，以及作为具名 BOSS 的酋长。
2. 用战役编辑器打开它。关卡表单有故事（前言）、简报显示的建议、起始金币与胜利条件；下面是起始城堡等级、时限，以及最多两个可选目标和它们的位置。
3. 画地图：移动城镇、怪巢与道路。地点必须是城堡走得到的，否则开局时那里的东西会被略过。地图文件里的建筑可以带 `"ruin"`（1 到 99）：它以已完成该百分比工作的工地开始，由王室工班免费盖完。
4. 打开触发器来改消息、王室授予的旗标（`post_bounty`）、敌波（`spawn_enemies`）与 BOSS 出现的时间（`spawn_boss`）。条件 `enemy_building_seen` 会等到有怪巢进入视野。
5. 在 `campaign.json` 里，战役的 `roster` 列出会在地图上游荡的怪物，`blocked_events` 列出不会掷出的随机事件。
6. 验证：检查会按字段指出写错的城堡等级、时限、可选目标、阵容或事件名称。接着从工作区试玩这一关；在那里选的难度会决定袭击、敌波与起始金币的大小。
7. 先以私人方式发布，玩起来符合你的想法之后再公开。
