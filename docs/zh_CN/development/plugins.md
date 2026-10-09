---
title: "插件开发"
---

## 创作与试玩

从主菜单、地图管理器或插件管理器打开「创作／创意工坊」。创建单关地图、两关战役、插件或关联插件的 BOSS 教程，离线编辑、保存、验证和试玩。工作区包含本地作品、订阅内容、我的发布、浏览器和任务。「王国任务」模板会创建一个单关的 kingdom 战役，含简报、旗标、敌波与具名 BOSS。用“导入内容”或把 ZIP、地图文件、作品文件夹拖到工作区即可导入；“导出…”可输出 ZIP 或文件夹，“打开文件夹”会打开作品的文件。两者都会询问文件夹（默认是上次用的），该处已有同名时改用 name-2、name-3…，也不会写进 Steam 下载的内容。每个作品都会列出预览图、种类、版本、作者、这个游戏能否加载，以及最后一次验证的结果；每个列表都有搜索与种类筛选，列表为空时会说明原因，选中作品的详情会列出授权、支持的游戏版本、需求与文件夹。“新增项目”会列出各模板与它们创建的内容，并在写入任何文件前显示作品会放在哪里。验证会对英雄从城堡走不到的据点、宝箱与摆放的 BOSS 发出警告（胜利条件需要它们时则是错误），并把一张地图限制在 64 个据点、256 个宝箱与 32 个摆放的 BOSS 以内；双击位于地图格上的问题，就会在那里打开编辑器。地形与战役编辑器会在独立的进程中打开，只加载作品的依赖内容，玩家另外安装的内容既不会出现也不会干扰；它直接保存回作品本身。作品在工作区打开的编辑器里还有未保存的修改时，验证、导出、试玩与发布都会先等待：它们使用已保存的文件。插件编辑器中，BOSS 的阶段以表格编辑（每个阶段开始时的生命值与技能），技能的数量、上限与预警时间也有各自的字段。插件编辑器会在每次修改后不久保存未保存内容的草稿，放在设置文件旁、作品之外；崩溃后再次打开作品时会询问是否还原。插件编辑器中，“复制”会以新 ID 复制定义；被其他定义引用的定义在移除引用前无法删除；“复制内置内容…”会以原 ID 加入游戏角色的完整副本，在用到原定义的地方取代它，但不会更动游戏本身的文件。职业、敌人、建筑、据点与研究有属性表单（属性范围与成长、掉落金币、价格、建筑招募的职业、据点派出的敌人、研究作用的对象），沿用自所依据定义的值会显示为灰色，超出游戏上下限或指向不存在 ID 的值会立刻标出；依赖项改用表格编辑。素材页可直接拖放文件导入，显示每张图片的可见范围与游戏尺寸／内存上限的对照，可预览成地形或图标，保存来源与署名，列出并指定使用它的定义；重命名时会一并改写所有引用，仍被使用的文件无法移除，指向不存在文件的字段可以改指到现有文件。试玩开始时会列出加载的内容（按加载顺序列出每个插件新增或取代的定义，以及被略过的插件与原因）；工作区也会显示同一份清单，并把被测插件中被略过的定义放进问题清单，打开定义表中的问题会直接跳到插件编辑器里的该定义。

文件夹／ZIP 导入和可编辑副本会创建新项目 ID，重新设置自身命名空间引用，保留作者、来源和许可，不继承远程更新绑定。Steam 原作保持只读。验证相对路径、文件预算、数组和触发循环；空白许可不代表可任意再发布。发布副本时，审阅会列出它的来源（原作品、版本、作者与作品页）和原作者的授权条件，要等你确认保留署名并遵守条件，或在原作品没有授权时确认已征得原作者同意，才能提交；没有提供的授权一律显示为不允许分享。副本的详情会写出原作品，并在订阅中的原作品更新时说明；“建立本机可编辑副本”、“导出…”与“取消订阅”的提示会说明各自的作用。

发布需要 Steam：设置作品页和预览，审阅不可变文件／哈希快照后明确提交。关闭窗口后任务仍继续；准备阶段可取消，已提交或结果未知时须先查看任务或重新同步再重试。更新绑定区分账号、App 和项目 ID。预览图须小于 1 MiB；自动测试使用模拟 Steam 后端。 先发布必要插件，再于地图／战役审阅页确认其同 App 项目 ID。 发布向导保存各语言的作品页文字和 JSON 元数据，可将主预览裁成正方形，并排序或删除最多八张附加截图。现有发布可仅更新作品页／依赖而不重传内容；预览也纳入审阅快照。向导可直接由作品生成主预览图（地图的地形与城堡、据点、宝箱，战役的前几关，插件自己的图片，并附上标题），显示实际上传的预览图与大小，可在每张截图底部加上标注，并提示草稿引用但已不存在的图片。向导分成三步（作品页、依赖与版本、审阅），可用“上一步”“下一步”（Alt+←、Alt+→）切换；发现问题时会跳到所在步骤并框出该字段直到修改，审阅会列出自上次发布以来新增、变更与移除的文件数。失败的任务会说明遇到哪一类问题（权限、Workshop 协议、空间、Steam 忙碌、超时、Steam 离线、检查未通过、结果未知、中断）、下一步该怎么做，并附上像 WS-PERM-R15 这样不含账号、项目或文件名的代码。在“我的发布”选中自己的项目时，会显示其可见度、版本、创建与更新时间、大小、链接的本机作品，以及由该作品更新时会变更的内容清单：作品页字段、文件与必要项目。在浏览器选中作品时，会显示作品简介（Steam 未提供时会注明），并把两部分分开列出：Steam 提供的资料（类型、必要项目、作者允许的游戏分支、发布时记录的版本、更新时间、大小、评价），以及 Steam 安装后作品本身清单文件的内容（作品与版本、这个版本能否运行它要求的游戏版本、需要的作品、可能变更的内容）。Steam 没有提供的信息不会自行补上。订阅的作品要等 Steam 安装完成并通过检查才会使用：本游戏能读取它的清单文件，而且它需要的每个作品都已安装、版本在允许范围内、没有循环依赖（两个项目提供同一个作品时，以你自己的插件为准，否则以最早的项目为准）。Steam 正在更新的作品，在新版本装好之前仍使用已安装的版本。“订阅”标签页列出每个订阅项目当前的状态（等待 Steam、下载中与已下载的字节、等待检查、可用、缺少需要的作品，或失败及原因），浏览器也会对选中的项目显示同样的状态；Steam 没能完成的下载（例如磁盘已满）要等你按下“重试下载”才会再次请求。加载存档前，游戏会核对它当时使用的内容：如果用到的作品已更新、停用、取消订阅或无法使用，或当前启用了别的内容，会逐一列出，经你同意后改用存档保留的副本加载；无法加载时（没有可用的副本、游戏更新、不同的 Steam 账号或 App、Steam 未运行）会说明原因与处理方法，存档文件与进行中的游戏都保持原样。“订阅”标签页的“保留的内容…”会列出这些副本与依赖它们的存档，可检查并移除未使用的副本；有存档依赖的副本要在列出存档名称的确认后才会移除，当前游戏使用中的副本则不会被移除。作品与项目详情也会列出本游戏的版本（开发版未设置，这时要求特定游戏版本的内容无法加载）与 Steam 分支，“订阅”标签页的“打开物品页面”可查看无法使用的项目；游戏运行中若 Steam 切换到其他分支，只会显示提示，不会自行重新启动。作品页的标签是作品类型，再加上 Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art 中的任意几个；作品页步骤会列出已撰写页面的语言（其他 Steam 语言会看到默认页面），已发布的项目可用“从 Steam 导入作品页…”逐个字段比对 Steam 上的作品页与你的草稿，只取用你勾选的字段。没有 Steam 时不会加载订阅的项目，也不会使用保留的副本，因为两者都属于某个 Steam 账号与 App（试玩版与正式版是不同的 App，各有自己的项目、草稿与内容配置）；需要它们的存档会说明原因，而你自己作品的创建、检查、试玩、导出与导入都能离线进行。试玩运行时会测量 tick 时间、内存与精灵图集，工作区会把它们加进试玩报告，分成正常、值得留意与过重，并说明怎么改善；上传因内容或配额失败时，说明会列出 Steam 的限制，上传完成后则提醒你自己订阅并确认能加载，因为发布本身不会检查这一点。 上传要连续五分钟没有进展才会放弃，已完成或已取消的任务一周后从列表移除；开始新的试玩时，会移除没有游戏在用的旧试玩会话；在本机作品上按 Enter 会打开编辑器，这些窗口在每种语言下都能放进 1280 × 720 的屏幕。

## 定义与依赖

有版本的插件可通过内置行为模板新增带命名空间的独立职业、敌人、建筑与据点，以及技能、研究、事件、具名 BOSS、素材和语言。新 ID 使用 `namespace:name`；保留内置 ID 会覆盖现有内容。核心文件保持只读。 仅修改外观的素材包可替换角色或地形图像，保持游戏数值。玩家建筑可以带有效果：一个攻击、治疗、护盾或状态技能，建筑达到指定等级后按固定间隔对范围内的敌人或英雄施放。 只声明 assets 与 languages 能力的素材包只能包含外观定义（skins）与语言；游戏用不了的图像或音效会沿用内置的。

共用作品清单记录项目 ID、作者、版本、兼容范围、素材和依赖。新格式按依赖确定加载顺序；缺项、冲突和循环会阻止加载。旧作品保留原格式和顺序。启用组合可预览覆盖结果，于下一场游戏应用。内容配置按加载顺序列出选用的插件，并标示每个插件的来源，以及已安装、当前游戏使用中与下次选用的版本；“上移”“下移”只会在依赖关系允许时改变顺序，顺序应用于同一个 Steam 账号与 App 的下次加载。应用前会列出将启用或停用的插件，以及会用到被停用插件的地图、战役、插件与存档；双击问题可找到对应的插件，也可以按地图或战役建议它需要的插件，没有出现的订阅项目（例如你自己插件的副本）会说明原因。

## 示例

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

## 素材与预算

| JSON | 素材与预算 |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | 职业的技能树（被动技能）：`{"id", "level", "effect", "requires": [ids]}` 的列表，数量不限、同一等级可以有多个；或旧式的表 `{"<等级>": {"id", "effect"}}`，视为一条链。id 在职业内不可重复，`requires` 只能指同一职业的技能，不可成环 |
| adventurer_classes.active_skill, tree_skills | 职业自己的主动技能，同一棵树上的节点：`active_skill` 是第一个（树根）的 ID，`tree_skills` 是从树上长出来的其他技能，最多 12 个 ID。每个都是 `skills` 里的技能（不可召唤），到了它的 `level`、并且英雄已学会 `requires` 列出的每个技能（最多 8 个本职业技能的 ID，被动或主动皆可；第一个不可有）时学会，各自按自己的 `cooldown` 等待。没有 `active_skill` 的职业沿用基础职业的第一个技能 |
| buildings.effect | 攻击、治疗、护盾或状态类的技能（不可召唤），建筑达到 1–3 级后每 10–3600 tick 施放一次；状态不会叠加 |
| research | stat_modifier |
| castle_branches | 城堡路线：`id`、`playable`、`buildings`（建筑的 ID，游戏内置或插件自己的）、`effects` 与 `level3`（以效果名称为键的数字，名称与游戏内置路线用的相同）、`specialities`（没有，或两个以上的 `{"id", "effects"}`）。ID 与内置路线相同的定义会整个取代那条路线；`namespace:name` 形式的 ID 则新增一条路线，排在游戏的路线之后，有路线的地方都会提供。它的文字是语言键 `branch_<id>`, `branch_<id>_desc`, `branch_<id>_price`, `branch_<id>_level3`, `branch_<id>_heroes` 与 `speciality_<id>_<speciality>`。路线已不再加载的王国，会当成还没选路线来玩，存档仍保留原本的选择 |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; 仅修改外观 |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (不透明绘制); 角色外观：同其目标; 其他字段，以及角色以外的 layout，不会使用并会给出警告 |
| plugin art and sounds | 所有启用的素材包共用 256 MiB 解码后图像（宽 × 高 × 4），同一文件只计一次，超过就用内置图；插件音效在内存保留 64 MiB |
| capabilities: assets, languages only | 只能有外观（skins）与语言，其他定义会被拒绝 |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 张关卡地图 |
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

## 游戏版本兼容性

`game_version` 约束正在运行的游戏发行版本。`"*"` 可被接受，旧格式项目也使用此值。指定范围只有在构建声明了已知、符合范围的语义化游戏版本时才可通过；否则验证、加载及发布都会被拒绝。本仓库目前未声明 `game.build_info.GAME_VERSION`，请使用 `"*"`，直到发行构建提供已核准的版本。项目的 `version` 与 Steam 分支名称不能代替游戏版本。
