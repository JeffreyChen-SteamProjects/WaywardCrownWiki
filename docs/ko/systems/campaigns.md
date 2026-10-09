---
title: "캠페인 모드"
---

캠페인 모드는 각각 특정 승리 조건과 스토리 배경을 가진 다단계 시나리오를 제공합니다.

---

## 내장 캠페인

게임에는 다양한 게임 메카닉을 안내하는 내장 **튜토리얼 캠페인** (5레벨)이 포함되어 있습니다. 메인 메뉴 맨 위에 전용 버튼이 있습니다.

---

## 승리 조건

각 캠페인 레벨에는 다음 승리 조건 중 하나를 설정할 수 있습니다:

| `victory` | 조건 | 설명 |
|---|-----------|-------------|
| `free` | **자유 플레이** | 특정 승리 조건 없이 자유롭게 플레이 |
| `destroy_enemy_buildings` | **모든 거점 파괴** | 맵의 모든 적 거점을 제거 |
| `survive_ticks` | **일정 시간 생존** | 지정된 틱 수 동안 성을 유지 |
| `reach_gold` | **골드 축적** | 금고에 목표 골드량 달성 |
| `destroy_building` | **특정 거점 파괴** | 특정 유형의 적 거점 파괴 |
| `defend` | **성 방어** | 일정 시간 내에 성이 파괴되지 않도록 방어 |
| `collect_chests` | **모든 상자 수집** | 맵의 모든 보물 상자 열기 |
| `secure_trade` | **교역로 확보** | 상단 왕복이 `victory_value`회 정산되고 맵의 모든 적 거점이 파괴됨 |

---

## 캠페인 구조

캠페인은 `campaigns/` 디렉토리에 폴더로 저장됩니다:

```
campaigns/
└── tutorial/
    ├── campaign.json     # 캠페인 메타데이터 및 레벨 목록
    ├── level1.json       # 레벨 1 맵
    ├── level2.json       # 레벨 2 맵
    └── ...
```

### campaign.json 형식

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

### 레벨 설정

| 필드 | 설명 |
|-------|-------------|
| `map` | 맵 파일 경로 (캠페인 폴더 기준 상대 경로) |
| `title` | 레벨 제목 |
| `intro` | 시작 텍스트 |
| `outro` | 완료 텍스트 |
| `starting_gold` | 시작 골드 (0 – 10⁷) |
| `victory` | 승리 조건 유형 |
| `victory_value` | 승리 조건 값 (예: 생존 틱 수, 목표 골드량 등) (0 – 10⁹) |
| `unlocked_buildings` | 사용 가능한 건물 화이트리스트 (플레이어의 건물 선택을 제한). 빈 목록은 모든 건물을 허용하며, `unlock_building`은 비어 있지 않은 목록에 추가합니다. |
| `victory_target` | `destroy_building`의 대상 거점 종류(예: `DRAGON_NEST`). 다른 조건에서는 무시됩니다 |
| `carry_over` | 이전 레벨에서 이어받는 것: `gold`, `adventurers`, `research`, `path`(성의 길과 그 전문 분야)(각각 true/false). 레벨이 `carry_over`에 적은 것은 플레이어가 바로 이어 갈 때 같은 캠페인의 다른 레벨에서 가져오며, 그 순간에 기록됩니다. 그 레벨을 다시 시도할 때마다 이 기록에서 시작합니다. 임무 목록에서 시작한 레벨은 아무것도 가져오지 않으며, 적지 않은 것(연구와 성의 노선 포함)은 지도가 바뀌면 남지 않습니다. |
| `triggers` | 스크립트 이벤트: `condition` + `params`, `action` + `action_params`, 선택 항목 `id`, `after`(해당 트리거 발동을 기다림), `once`. 조건: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. 동작: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. 객체가 아니거나 값의 종류가 잘못된 필드가 있는 트리거는 제외되고 콘솔에 보고됩니다. `chests_opened`, `enemy_killed_count`, `bounties_completed`는 레벨이 시작된 때부터 셉니다.반복 트리거(`once: false`)는 조건이 성립하는 매 틱마다 실행되므로, 적 생성·골드 지급·현상금 게시·이벤트 시작을 하는 것은 검사에서 거부됩니다. 보스 조우는 한 번만 시작되며, 자신이 쓰러진 뒤에야 시작되게 할 수 없습니다. `spawn_enemies` 웨이브에는 `march`(`castle` 또는 `road`)를 줄 수 있습니다. 그러면 나타난 자리를 배회하지 않고 성 또는 가장 가까운 교역소로 진군합니다. `reveal`(`x`, `y`, 1~40의 `radius`)은 플레이어에게 장소를 보여 줍니다. 그 반경 안의 땅이 탐험된 상태가 됩니다. `ticks_after_step`은 `after`에 적힌 트리거가 발동한 틱부터 `value`를 셉니다. `show_message`의 매개변수를 `i18n:<key>`로 쓰면 본문에 들어가기 전에 번역되므로, 메시지에서 패널이나 건물을 게임의 표기 그대로 부를 수 있습니다. |
| `id` | 진행 상황과 `requires`에 쓰는 레벨의 고정 이름(영문자, 숫자, `.`, `-`, `_`). 생략하면 위치에 따라 `level<n>` |
| `requires` | 먼저 완료해야 하는 레벨: 이 캠페인의 레벨 `id`, 또는 `<캠페인 id>/<레벨 id>` |
| `ruleset` | `kingdom`만 가능하며 생략할 수 있음. 모든 레벨은 왕국 규칙으로 플레이됩니다. `classic`을 지정했거나 아무것도 지정하지 않은 레벨이나 맵은 왕국으로 플레이되며, 알 수 없는 이름은 거부됩니다 |
| `castle_level` | 레벨이 시작될 때의 성 레벨(1–3). 생략하면 요새 |
| `time_limit` | 레벨에 쓸 수 있는 틱 수. 다 됐을 때 이기지 못했으면 패배. 0이거나 생략하면 제한 없음 |
| `advice` | 브리핑의 조언. 다른 텍스트처럼 `i18n:` 키일 수 있음 |
| `side_quests` | 레벨의 선택 목표. 최대 두 개. 각각 `{"kind", "x", "y"}`이며 kind는 `supply_party`, `guarded_cache`, `lair_treasure`. `enemy`나 `lair`로 그곳에 누가 있는지 지정할 수 있음 |
| `objectives` | 추가 승리 조건 최대 8개. 각각 `{"victory", "value", "target", "required"}`이며 victory는 `free`를 뺀 어느 조건이든 됩니다. 주 승리(`free`가 아니면)와 모든 필수 조건이 함께 충족되면 클리어. 선택 조건은 목표 줄에 집계되고 결과에 나열됩니다 |
| `defeats` | 추가 패배 조건 최대 4개. 각각 `{"kind", "value"}`: 레벨 시작부터 `heroes_lost`(쓰러진 영웅), `buildings_lost`(잃은 건물), `caravans_lost`(잃은 상단)가 그 값에 이르면 패배 |

캠페인 자체에도 `id`(진행 상황을 기록하는 이름)와 `"linear": false`(독립된 도전 모음: 한 레벨을 이겨도 다음 레벨로 이어지지 않음)를 지정할 수 있습니다. `blocked_events`를 적을 수도 있습니다. 그 캠페인의 레벨에서는 나오지 않는 랜덤 이벤트의 이름입니다(예: `DRAGON_NEST`). `roster`도 지정할 수 있습니다. 그 캠페인의 레벨에서 떠돌고 침공하는 적 종류(`GOBLIN` 등)이며, 생략하면 모든 종류입니다.

:::tip[현지화 지원]
캠페인 텍스트에 `i18n:KEY` 태그를 사용하면 플레이어의 언어에 맞는 번역이 자동으로 표시됩니다.
:::

---

## 데모 캠페인

데모의 스토리 캠페인(`campaigns/demo_kingdom/`)은 메인 메뉴에서 엽니다. 튜토리얼처럼 `game/systems/demo_campaign.py`가 만들어 냅니다.

| 미션 | 목표 | 패배 조건 | 시작 |
|---|---|---|---|
| 1. 첫 번째 왕관 | 요새 동쪽의 고블린 야영지를 찾아 파괴하게 한다 | 요새가 무너짐 | 1600골드와 간추린 건물 목록, 그리고 대장간과 시장의 폐허 |
| 2. 교역로의 그림자 | 상단이 3회 왕복을 마치게 하고 도적 야영지를 파괴한다 | 성이 무너짐 | 2400골드, 레벨 2 성, 작은 마을, 포장된 길 두 개 |
| 3. 내시팽의 밤 | 족장 내시팽을 쓰러뜨린다 | 성이 무너짐 | 3000골드, 레벨 2 성, 건물 여섯 채의 마을 |

임무 1은 대장간과 시장의 폐허 곁에서 시작합니다. 왕실 작업반이 대장간부터 비용 없이 다시 세우며, 당신이 놓은 건물은 첫 길드를 포함해 먼저 지으라고 표시하지 않는 한 그 뒤에서 차례를 기다립니다. 미션 1에서는 메시지가 첫 길드에서 첫 영웅, 시장, 세금 징수원으로 이어집니다. 시작 후 약 48초가 지나면 왕실이 자기 돈으로 야영지 근처에 탐험 현상금을 걸고, 영웅이 그것을 완료하면 야영지에 처치 현상금을 걸라는 안내가 나옵니다. 미션 2에서는 왕실이 교역소 후보지 두 곳을 모두 탐험하게 하고, 도적이 남쪽 길을 한 번 습격하며(20초 전에 예고), 처음 건물을 잃으면 400골드의 지원이 옵니다. 미션 3에서는 1000틱에 동쪽 길로, 2500틱에 북쪽 길로 습격이 오고 4300틱에 족장 내시팽이 오며, 모두 100틱 전에 예고됩니다. 그의 요새를 무너뜨리는 것은 약탈할 가치가 있는 원정이지만, 승리는 그를 쓰러뜨려야만 얻습니다. 미션 1과 2에서는 수리를 위해 건축가 길드를 지을 수 있습니다. 미션 3에서는 성이 이미 레벨 2라 바로 길을 고를 수 있고, 무너진 요새는 자기 습격을 더 보내지 않습니다. 임무 2와 3은 바로 이어 갈 때 이전 임무의 연구를 가져옵니다. 다시 도전할 때마다 첫 도전과 같은 상태로 시작하며, 목록에서 고른 임무는 연구 없이 시작합니다.

도전(`campaigns/demo_challenges/`, `"linear": false`)도 같은 방식으로 만들어집니다. 「얇은 금고」는 미션 2 이후에 열립니다. 600골드, 레벨 2 성, 남쪽 길에 교역소가 있는 작은 마을로 15분(`time_limit`) 안에 고블린 캠프와 길을 습격하는 도적 소굴을 파괴합니다. 소굴의 습격이 시작되기 전에 도적이 두 번 길을 노립니다. 「길을 지켜라」는 미션 3 이후에 열립니다. 교역소는 이미 열려 있고, 도적이 500틱마다 조금씩 더 강해져 남쪽 길로 오며, 14분 20초 안에 상단이 10회 왕복을 마쳐야 합니다. 자유 왕국(데모의 자유 왕국 또는 정식판의 샌드박스)에는 목표가 없으며, 시작 대화상자에서 시작 20분 뒤 족장 내시팽이 한 번 오도록 선택할 수 있습니다(`game/systems/free_kingdom.py`). *길을 지켜라*에서는 모든 습격이 교역소로 진군합니다. 아무도 지키지 않는 교역소는 파괴되고 상단도 함께 사라지므로, 아무것도 하지 않으면 도전에 실패합니다.

## 왕국 미션을 한 단계씩

1. Creator / Workshop에서 **새 프로젝트**, 이어서 **왕국 미션**을 고르고 새 폴더를 지정합니다. 바로 플레이할 수 있는 레벨 하나가 만들어집니다. 마을, 동쪽의 고블린 캠프, 왕실이 거는 탐험·처치·방어 현상금, 예고된 두 번의 웨이브, 이름 있는 보스인 족장입니다.
2. 캠페인 편집기에서 엽니다. 레벨 양식에는 이야기(인트로), 브리핑에 나오는 조언, 시작 골드, 승리 조건이 있고, 그 아래에 시작 성 레벨, 제한 시간, 최대 두 개의 선택 목표와 그 타일이 있습니다.
3. 맵을 그립니다. 마을, 소굴, 길을 옮기십시오. 장소는 성에서 갈 수 있어야 하며, 그렇지 않으면 레벨이 시작될 때 그곳에 있는 것은 빠집니다. 지도 파일의 건물에는 `"ruin"`(1~99)을 붙일 수 있습니다. 그 비율만큼 공사가 끝난 공사장으로 시작하며, 왕실 작업반이 비용 없이 완성합니다.
4. 트리거를 열어 메시지, 왕실이 거는 현상금(`post_bounty`), 웨이브(`spawn_enemies`), 보스가 오는 때(`spawn_boss`)를 바꿉니다. 조건 `enemy_building_seen`은 소굴이 시야에 들어올 때까지 기다립니다.
5. `campaign.json`에서 캠페인의 `roster`는 맵을 떠도는 괴물을, `blocked_events`는 굴리지 않을 무작위 이벤트를 지정합니다.
6. 검증합니다. 검사는 잘못된 성 레벨, 제한 시간, 선택 목표, 구성, 이벤트 이름을 필드별로 알려 줍니다. 그다음 작업 공간에서 레벨을 플레이합니다. 거기서 고른 난이도가 습격, 웨이브, 시작 골드의 크기를 정합니다.
7. 먼저 비공개로 게시하고, 뜻대로 플레이되면 공개합니다.
