---
title: "外掛開發"
---

## 創作與試玩

從主選單、地圖管理器或外掛管理器開啟「創作／工作坊」。建立單關地圖、兩關戰役、外掛或連結外掛的 BOSS 教學，離線編輯、儲存、驗證與試玩。工作區包含本機作品、訂閱內容、我的發布、瀏覽器與任務。「王國任務」範本會建立一個單關的 kingdom 戰役，含簡報、旗標、敵波與具名 BOSS。用「匯入內容」或把 ZIP、地圖檔、作品資料夾拖到工作區即可匯入；「匯出…」可輸出 ZIP 或資料夾，「開啟資料夾」會打開作品的檔案。兩者都會詢問資料夾（預設是上次用的），該處已有同名時改用 name-2、name-3…，也不會寫進 Steam 下載的內容。每個作品都會列出預覽圖、種類、版本、作者、這個遊戲能否載入，以及最後一次驗證的結果；每個清單都有搜尋與種類篩選，清單是空的時候會說明原因，選中作品的詳情會列出授權、支援的遊戲版本、需求與資料夾。「新增專案」會列出各範本與它們建立的內容，並在寫入任何檔案前顯示作品會放在哪裡。驗證會對英雄從城堡走不到的據點、寶箱與擺放的 BOSS 發出警告（勝利條件需要它們時則是錯誤），並把一張地圖限制在 64 個據點、256 個寶箱與 32 個擺放的 BOSS 以內；雙擊位在地圖格上的問題，就會在那裡開啟編輯器。地形與戰役編輯器會在獨立的行程中開啟，只載入作品的相依內容，玩家另外安裝的內容既不會出現也不會干擾；它直接存回作品本身。作品在工作區開啟的編輯器裡還有未存檔的修改時，驗證、匯出、試玩與發布都會先等待：它們使用已儲存的檔案。外掛編輯器中，BOSS 的階段以表格編輯（每個階段開始時的生命值與技能），技能的數量、上限與預警時間也有各自的欄位。外掛編輯器會在每次修改後不久保存未存檔內容的草稿，放在設定檔旁、作品之外；當機後再次開啟作品時會詢問是否還原。外掛編輯器中，「複製」會以新 ID 複製定義；被其他定義引用的定義在移除引用前無法刪除；「複製內建內容…」會以原 ID 加入遊戲角色的完整副本，在用到原定義的地方取代它，但不會更動遊戲本身的檔案。職業、敵人、建築、據點與研究有屬性表單（屬性範圍與成長、掉落金幣、價格、建築招募的職業、據點派出的敵人、研究作用的對象），沿用自所依據定義的值會顯示為灰色，超出遊戲上下限或指向不存在 ID 的值會立刻標出；相依項目改用表格編輯。素材分頁可直接拖放檔案匯入，顯示每張圖片的可見範圍與遊戲尺寸／記憶體上限的對照，可預覽成地形或圖示，保存來源與署名，列出並指定使用它的定義；更名時會一併改寫所有引用，仍被使用的檔案無法移除，指向不存在檔案的欄位可以改指到現有檔案。試玩開始時會列出載入的內容（依載入順序列出每個外掛新增或取代的定義，以及被略過的外掛與原因）；工作區也會顯示同一份清單，並把被測外掛中被略過的定義放進問題清單，開啟定義表中的問題會直接跳到外掛編輯器裡的該定義。

資料夾／ZIP 匯入與可編輯副本會建立新專案 ID，重新設定自身具命名空間的引用，保留作者、來源與授權，不繼承遠端更新綁定。Steam 原作保持唯讀。驗證相對路徑、檔案預算、陣列與觸發循環；空白授權不代表可任意再發布。發布副本時，審閱會列出它的來源（原作品、版本、作者與作品頁）和原作者的授權條件，要等你確認保留署名並遵守條件，或在原作品沒有授權時確認已取得原作者同意，才能送出；沒有提供的授權一律顯示為未允許分享。副本的詳情會寫出原作品，並在訂閱中的原作品更新時說明；「建立本機可編輯副本」、「匯出…」與「取消訂閱」的提示會說明各自的作用。

發布需要 Steam：設定作品頁與預覽，審閱不可變檔案／雜湊快照後明確送出。關閉視窗後任務仍繼續；準備階段可取消，已送出或結果未知時須先查看任務或重新同步再重試。更新綁定依帳號、App 與專案 ID 區分。預覽圖須小於 1 MiB；自動測試使用假的 Steam 後端。 先發布必要外掛，再於地圖／戰役審閱頁確認其同 App 項目 ID。 發布精靈儲存各語言的作品頁文字與 JSON 中繼資料，可將主預覽裁成正方形，並排序或刪除最多八張附加截圖。既有發布可只更新作品頁／相依而不重傳內容；預覽也納入審閱快照。精靈可直接由作品產生主預覽圖（地圖的地形與城堡、據點、寶箱，戰役的前幾關，外掛自己的圖片，並附上標題），顯示實際上傳的預覽圖與大小，可在每張截圖底部加上標註，並提示草稿引用但已不存在的圖片。精靈分成三步（作品頁、相依與版本、審閱），可用「上一步」「下一步」（Alt+←、Alt+→）切換；發現問題時會跳到所在步驟並框出該欄位直到修改，審閱會列出自上次發布以來新增、變更與移除的檔案數。失敗的任務會說明遇到哪一類問題（權限、Workshop 協議、空間、Steam 忙碌、逾時、Steam 離線、檢查未通過、結果未知、中斷）、下一步該怎麼做，並附上像 WS-PERM-R15 這樣不含帳號、項目或檔名的代碼。在「我的發布」選取自己的項目時，會顯示其可見度、版本、建立與更新時間、大小、連結的本機作品，以及由該作品更新時會變更的內容清單：作品頁欄位、檔案與必要項目。在瀏覽器選取作品時，會顯示作品簡介（Steam 未提供時會註明），並把兩部分分開列出：Steam 提供的資料（類型、必要項目、作者允許的遊戲分支、發布時記錄的版本、更新時間、大小、評價），以及 Steam 安裝後作品本身清單檔的內容（作品與版本、這個版本能否執行它要求的遊戲版本、需要的作品、可能變更的內容）。Steam 沒有提供的資訊不會自行補上。訂閱的作品要等 Steam 安裝完成並通過檢查才會使用：本遊戲讀得懂它的清單檔，而且它需要的每個作品都已安裝、版本在允許範圍內、沒有循環相依（兩個項目提供同一個作品時，以你自己的外掛為準，否則以最早的項目為準）。Steam 正在更新的作品，在新版本裝好之前仍使用已安裝的版本。「訂閱」分頁列出每個訂閱項目目前的狀態（等待 Steam、下載中與已下載的位元組、等待檢查、可用、缺少需要的作品，或失敗及原因），瀏覽器也會對選取的項目顯示同樣的狀態；Steam 沒能完成的下載（例如磁碟已滿）要等你按下「重試下載」才會再次要求。載入存檔前，遊戲會核對它當時使用的內容：如果用到的作品已更新、停用、取消訂閱或無法使用，或目前啟用了別的內容，會逐一列出，經你同意後改用存檔保留的副本載入；無法載入時（沒有可用的副本、遊戲更新、不同的 Steam 帳號或 App、Steam 未執行）會說明原因與處理方式，存檔檔案與進行中的遊戲都保持原樣。「訂閱」分頁的「保留的內容…」會列出這些副本與依賴它們的存檔，可檢查並移除未使用的副本；有存檔依賴的副本要在列出存檔名稱的確認後才會移除，目前遊戲使用中的副本則不會被移除。作品與專案詳情也會列出本遊戲的版本（開發版未設定，這時要求特定遊戲版本的內容無法載入）與 Steam 分支，「訂閱」分頁的「開啟項目頁面」可查看無法使用的項目；遊戲執行中若 Steam 切換到其他分支，只會顯示提示，不會自行重新啟動。作品頁的標籤是作品類型，再加上 Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art 中的任意幾個；作品頁步驟會列出已撰寫頁面的語言（其他 Steam 語言會看到預設頁面），已發布的項目可用「從 Steam 匯入作品頁…」逐欄比對 Steam 上的作品頁與你的草稿，只取用你勾選的欄位。沒有 Steam 時不會載入訂閱的項目，也不會使用保留的副本，因為兩者都屬於某個 Steam 帳號與 App（試玩版與正式版是不同的 App，各有自己的項目、草稿與內容設定檔）；需要它們的存檔會說明原因，而你自己作品的建立、檢查、試玩、匯出與匯入都能離線進行。試玩執行時會量測 tick 時間、記憶體與精靈圖集，工作區會把它們加進試玩報告，分成正常、值得留意與過重，並說明怎麼改善；上傳因內容或配額失敗時，說明會列出 Steam 的限制，上傳完成後則提醒你自己訂閱並確認能載入，因為發布本身不會檢查這一點。 上傳要連續五分鐘沒有進展才會放棄，已完成或已取消的任務一週後從清單移除；開始新的試玩時，會移除沒有遊戲在用的舊試玩工作階段；在本機作品上按 Enter 會開啟編輯器，這些視窗在每種語言下都能放進 1280 × 720 的螢幕。

## 定義與相依

有版本的外掛可透過內建行為範本新增具命名空間的獨立職業、敵人、建築與據點，以及技能、研究、事件、具名 BOSS、素材與語言。新 ID 使用 `namespace:name`；保留內建 ID 會覆寫既有內容。核心檔案保持唯讀。 僅變更外觀的素材包可替換角色或地形圖像，維持遊戲數值。玩家建築可以帶有效果：一個攻擊、治療、護盾或狀態技能，建築達到指定等級後按固定間隔對範圍內的敵人或英雄施放。 只宣告 assets 與 languages 能力的素材包只能包含外觀定義（skins）與語言；遊戲用不了的圖像或音效會沿用內建的。

共用作品清單記錄專案 ID、作者、版本、相容範圍、素材與相依。新格式按相依關係確定載入順序；缺項、衝突與循環會阻止載入。舊作品保留原有格式與順序。啟用組合可預覽覆寫，於下一場遊戲套用。內容設定檔依載入順序列出選用的外掛，並標示每個外掛的來源，以及已安裝、目前遊戲使用中與下次選用的版本；「上移」「下移」只會在相依關係允許時改變順序，順序套用於同一個 Steam 帳號與 App 的下次載入。套用前會列出將啟用或停用的外掛，以及會用到被停用外掛的地圖、戰役、外掛與存檔；按兩下問題可找到對應的外掛，也可以依地圖或戰役建議它需要的外掛，沒有出現的訂閱項目（例如你自己外掛的副本）會說明原因。

## 範例

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

## 素材與預算

| JSON | 素材與預算 |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | 職業的技能樹（被動技能）：`{"id", "level", "effect", "requires": [ids]}` 的清單，數量不限、同一等級可以有好幾個；或舊式的表 `{"<等級>": {"id", "effect"}}`，視為一條鏈。id 在職業內不可重複，`requires` 只能指同一職業的技能，不可成環 |
| adventurer_classes.active_skill, tree_skills | 職業自己的主動技能，同一棵樹上的節點：`active_skill` 是第一個（樹根）的 ID，`tree_skills` 是從樹上長出來的其他技能，最多 12 個 ID。每個都是 `skills` 裡的技能（不可召喚），到了它的 `level`、而且英雄已學會 `requires` 列出的每個技能（最多 8 個本職業技能的 ID，被動或主動皆可；第一個不可有）時學會，各自依自己的 `cooldown` 等待。沒有 `active_skill` 的職業沿用基底職業的第一個技能 |
| buildings.effect | 攻擊、治療、護盾或狀態類的技能（不可召喚），建築達到 1–3 級後每 10–3600 tick 施放一次；狀態不會疊加 |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; 僅變更外觀 |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (不透明繪製); 角色外觀：同其目標; 其他欄位，以及角色以外的 layout，不會使用並會提出警告 |
| plugin art and sounds | 所有啟用的素材包共用 256 MiB 解碼後圖像（寬 × 高 × 4），同一檔案只計一次，超過就用內建圖；外掛音效在記憶體保留 64 MiB |
| capabilities: assets, languages only | 只能有外觀（skins）與語言，其他定義會被拒絕 |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 張關卡地圖 |
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

## 遊戲版本相容性

`game_version` 限制正在執行的遊戲發行版本。`"*"` 可被接受，舊格式專案也使用此值。指定範圍只有在建置宣告了已知、符合範圍的語意化遊戲版本時才可通過；否則驗證、載入及發布都會被拒絕。本儲存庫目前未宣告 `game.build_info.GAME_VERSION`，請使用 `"*"`，直到發行建置提供已核准的版本。專案的 `version` 與 Steam 分支名稱不能代替遊戲版本。
