---
title: "Kampanya Modu"
---

Kampanya modu, her biri belirli zafer koşulları ve bir hikaye arka planına sahip çok seviyeli senaryolar sunar.

---

## Yerleşik Kampanyalar

Oyun, yeni oyuncuları çeşitli oyun mekanikleri hakkında yönlendiren yerleşik **Öğretici** kampanyasını (5 seviye) içerir. Ana menünün ilk düğmesi olan kendi düğmesi vardır.

---

## Zafer Koşulları

Her kampanya seviyesi aşağıdaki zafer koşullarından birine sahip olabilir:

| `victory` | Koşul | Açıklama |
|---|-------|----------|
| `free` | **Serbest Oyun** | Belirli bir zafer koşulu yok; özgürce oynayın |
| `destroy_enemy_buildings` | **Tüm Kaleleri Yok Et** | Haritadaki tüm Düşman Kalelerini yok edin |
| `survive_ticks` | **Belirli Süre Hayatta Kal** | Kaleyi belirli sayıda tikten fazla ayakta tutun |
| `reach_gold` | **Altın Biriktir** | Hazinenizdeki altın miktarını hedef tutara ulaştırın |
| `destroy_building` | **Belirli Kaleyi Yok Et** | Belirli bir türdeki Düşman Kalesini yok edin |
| `defend` | **Kaleyi Savun** | Kalenin belirli süre içinde yıkılmasını önleyin |
| `collect_chests` | **Tüm Sandıkları Topla** | Haritadaki her hazine sandığını açın |
| `secure_trade` | **Ticaret yolunu güvenceye al** | `victory_value` kervan turu ödenir ve haritadaki tüm düşman kaleleri yok edilir |

---

## Kampanya Yapısı

Kampanyalar `campaigns/` dizininde klasörler olarak saklanır:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Kampanya meta verileri ve seviye listesi
    ├── level1.json       # Seviye 1 haritası
    ├── level2.json       # Seviye 2 haritası
    └── ...
```

### campaign.json Formatı

```json
{
  "name": "Eğitim Kampanyası",
  "description": "Temel oyun mekaniklerini öğrenin",
  "levels": [
    {
      "map": "level1.json",
      "title": "Yeni Bir Başlangıç",
      "intro": "Wayward Crown'a hoş geldiniz...",
      "outro": "Bu seviyeyi tamamladığınız için tebrikler!",
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

### Seviye Ayarları

| Alan | Açıklama |
|------|----------|
| `map` | Harita dosya yolu (kampanya klasörüne göre) |
| `title` | Seviye başlığı |
| `intro` | Açılış metni |
| `outro` | Tamamlama metni |
| `starting_gold` | Başlangıç altını (0 – 10⁷) |
| `victory` | Zafer koşulu türü |
| `victory_value` | Zafer koşulu değeri (örn. hayatta kalma tik sayısı, hedef altın miktarı vb.) (0 – 10⁹) |
| `unlocked_buildings` | Kullanılabilir binalar beyaz listesi (oyuncunun bina seçeneklerini kısıtlar). Boş liste tüm binalara izin verir; `unlock_building` boş olmayan listeye ekler. |
| `victory_target` | `destroy_building` için kale türü (ör. `DRAGON_NEST`); diğer koşullarda yok sayılır |
| `carry_over` | Önceki bölümden aktarılanlar: `gold`, `adventurers`, `research`, `path` (şato yolu ve uzmanlığı) (her biri true/false). Bir bölümün `carry_over` içinde saydıkları, oyuncu doğrudan devam ettiğinde aynı seferin başka bir bölümünden alınır ve o anda kaydedilir; bölümün her yeniden denemesi bu kayıttan başlar. Görev listesinden başlatılan bir bölüm hiçbir şey taşımaz ve bölümün saymadıkları (araştırma ve kale yolu da) haritadan sonraya kalmaz. |
| `triggers` | Betik olayları: `condition` + `params`, `action` + `action_params`, isteğe bağlı `id`, `after` (o tetikleyiciyi bekler) ve `once`. Koşullar: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Eylemler: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Nesne olmayan ya da bir alanında yanlış türde değer bulunan tetikleyici dışarıda bırakılır ve konsolda bildirilir. `chests_opened`, `enemy_killed_count` ve `bounties_completed` seviyenin başından itibaren sayar. Tekrarlayan bir tetikleyici (`once: false`) koşulunun geçerli olduğu her tick'te çalışır; bu yüzden doğrulama düşman çıkaran, para veren, ödül asan ya da olay başlatan birini reddeder; bir boss karşılaşması bir kez başlar ve asla yalnızca kendi yenilgisinden sonra başlamaz. Bir `spawn_enemies` dalgası `march` (`castle` veya `road`) taşıyabilir: o zaman indiği yerde dolaşmak yerine kaleye ya da en yakın ticaret karakoluna yürür. `reveal` (`x`, `y`, 1 ile 40 arası `radius`) oyuncuya bir yeri gösterir: o yarıçaptaki arazi keşfedilmiş olur. `ticks_after_step`, `value` değerini `after` ile adı verilen tetikleyicinin ateşlendiği tikten itibaren sayar. `i18n:<key>` biçiminde yazılan bir `show_message` parametresi metne girmeden önce çevrilir; böylece bir mesaj bir paneli ya da binayı oyunun kendi sözleriyle anabilir. |
| `id` | İlerleme ve `requires` için seviyenin sabit adı (harf, rakam, `.`, `-`, `_`); verilmezse konuma göre `level<n>` |
| `requires` | Önce bitirilmesi gereken seviyeler: bu kampanyanın bir seviye `id`'si veya `<kampanya id>/<seviye id>` |
| `ruleset` | Yalnızca `kingdom` olabilir ve verilmeyebilir: her seviye krallık kurallarıyla oynanır. `classic` yazan ya da hiçbir ad vermeyen bir seviye veya harita krallık olarak oynanır; bilinmeyen bir ad reddedilir |
| `castle_level` | Seviyenin başladığı şato seviyesi (1–3); belirtilmezse hisar |
| `time_limit` | Seviyenin sürebileceği tick sayısı; dolduğunda kazanılmamışsa kaybedilir. 0 ya da belirtilmemişse sınır yok |
| `advice` | Brifingin önerdiği şey; diğer metinler gibi bir `i18n:` anahtarı olabilir |
| `side_quests` | Seviyede en çok iki isteğe bağlı buluntu; her biri `{"kind", "x", "y"}`, kind şunlardan biri: `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` ya da `lair` orada kimin olduğunu belirtebilir |
| `objectives` | En çok 8 ek zafer koşulu; her biri `{"victory", "value", "target", "required"}`, victory `free` dışında herhangi biri olabilir. Ana zafer (`free` değilse) ve tüm zorunlu koşullar sağlandığında seviye kazanılır; isteğe bağlı olanlar hedef satırında sayılır ve sonuçlarda listelenir |
| `defeats` | En çok 4 ek kaybetme yolu; her biri `{"kind", "value"}`: seviye başından beri `heroes_lost`, `buildings_lost` ya da `caravans_lost` değere ulaşırsa kaybedilir |

Kampanyanın kendisi de bir `id` (ilerlemesinin kaydedildiği ad) ve `"linear": false` (bağımsız meydan okumalar: birini kazanmak bir sonrakine geçirmez) taşıyabilir. Ayrıca `blocked_events` listeleyebilir: seviyelerinde hiç çıkmayan rastgele olayların adları (örneğin `DRAGON_NEST`). Bir de `roster`: seviyelerinde dolaşan ve istila eden düşman türleri (`GOBLIN` gibi adlar); verilmezse hepsi.

:::tip[Yerelleştirme Desteği]
Kampanya metinleri `i18n:KEY` etiketlerini kullanabilir; bu etiketler oyuncunun diline göre otomatik olarak ilgili çeviriyi gösterir.
:::

---

## Demo Kampanyası

Demonun hikâye kampanyası (`campaigns/demo_kingdom/`) ana menüden açılır. Öğretici gibi onu da `game/systems/demo_campaign.py` yazar.

| Görev | Hedef | Şu olursa kaybedersin | Başlangıç |
|---|---|---|---|
| 1. İlk taç | Hisarın doğusundaki goblin kampını bulmak ve yok ettirmek | Hisar düşerse | 1600 altın ve kısa bir bina listesi, ayrıca bir demircinin ve bir pazarın yıkıntıları |
| 2. Ticaret yolundaki gölgeler | Üç kervan turunu tamamlatmak ve haydut kampını yok etmek | Şato düşerse | 2400 altın, 2. seviye şato, küçük bir kasaba ve iki döşeli yol |
| 3. Gıcırdiş'in gecesi | Reis Gıcırdiş'i yenmek | Şato düşerse | 3000 altın, 2. seviye şato ve altı binalı bir kasaba |

Görev 1, bir demircinin ve bir pazarın yıkıntılarının yanında başlar: tacın ekibi onları bedelsiz yeniden kurar, önce demirciyi; yerleştirdiğin her şey, ilk loncan da, önce yapılsın diye işaretlemediğin sürece onların ardında sırasını bekler. 1. görevde mesajlar ilk loncadan ilk kahramana, pazara ve vergi tahsildarına götürür. Yaklaşık 48 saniye sonra taç, kendi kesesinden kampın yakınına bir «Keşfet» ödülü asar; bir kahraman bunu tamamlayınca kampa bir «Öldür» ödülü asman istenir. 2. görevde taç iki karakol yerini de keşfettirir, haydutlar güney yoluna bir kez pusu kurar (20 saniye önceden duyurulur) ve kaybedilen ilk bina 400 altın yardım getirir. 3. görevde ilk baskın 1000. tick'te doğu yolundan, ikincisi 2500. tick'te kuzey yolundan gelir, Reis Gıcırdiş ise 4300. tick'te; her biri 100 tick önceden duyurulur. Kalesini yıkmak ganimetine değen bir seferdir, ama zaferi yalnızca onun yenilmesi getirir. 1. ve 2. görevlerde onarım için İnşaatçılar Loncası kurulabilir; 3. görevde şato zaten 2. seviyede olduğundan yolunu hemen seçebilir, yıkılan kale de kendi baskınlarını göndermez. Görev 2 ve 3, doğrudan devam ettiğinde önceki görevin araştırmasını korur; her yeniden deneme ilk deneme gibi başlar ve listeden seçilen görev araştırma olmadan başlar.

Meydan okumalar (`campaigns/demo_challenges/`, `"linear": false`) aynı şekilde yazılır. *İnce altın* 2. görevden sonra açılır: 600 altın, 2. seviye bir şato, güney yolunda ticaret karakolu olan küçük bir kasaba ve bir goblin kampı ile yola baskın yapan bir haydut kampını yok etmek için 15 dakika (`time_limit`); kampın kendi baskınları başlamadan önce haydutlar yolu iki kez yoklar. *Yolu tut* 3. görevden sonra açılır: ticaret karakolu zaten açıktır, haydutlar her 500 tick'te güney yolundan, her seferinde biraz daha güçlü gelir ve 14 dakika 20 saniye içinde 10 kervan turunun tamamlanması gerekir. Serbest krallığın (Demonun Serbest Krallığı ya da tam oyunun Sandbox modu) bir hedefi yoktur; başlangıç penceresinde Reis Gıcırdiş'in başlangıçtan 20 dakika sonra bir kez gelmesi istenebilir (`game/systems/free_kingdom.py`). *Yolu tut* içinde her baskın ticaret karakoluna yürür: kimsenin savunmadığı karakol yıkılır ve kervanı da onunla birlikte yok olur; hiçbir şey yapmamak meydan okumayı kaybettirir.

## Adım adım bir krallık görevi

1. Creator / Workshop'ta **Yeni proje**, ardından **Krallık görevi** ve yeni bir klasör seç. Oynanabilir bir seviye elde edersin: bir kasaba, doğuda bir goblin kampı, tacın «Keşfet», «Öldür» ve «Savun» ödülleri, duyurulan iki dalga ve adı olan boss olarak reis.
2. Onu sefer düzenleyicisinde aç. Seviye formunda hikâye (giriş), brifingin gösterdiği öneri, başlangıç altını ve zafer vardır; altlarında başlangıç şato seviyesi, süre sınırı ve kareleriyle en çok iki isteğe bağlı buluntu bulunur.
3. Haritayı boya: kasabayı, ini ve yolları taşı. Bir yer şatodan ulaşılabilir olmalıdır; yoksa seviye başlarken orada duran şey atlanır. Harita dosyasındaki bir bina `"ruin"` (1 ile 99 arası) taşıyabilir: işinin o yüzdesi yapılmış bir şantiye olarak başlar ve tacın ekibi onu bedelsiz bitirir.
4. Mesajları, tacın verdiği ödülleri (`post_bounty`), dalgaları (`spawn_enemies`) ve boss'un geliş zamanını (`spawn_boss`) değiştirmek için tetikleyicileri aç. `enemy_building_seen` koşulu bir in görünene kadar bekler.
5. `campaign.json` içinde `roster` haritada dolaşan canavarları, `blocked_events` hiç çekilmeyen rastgele olayları belirtir.
6. Doğrula: denetimler yanlış şato seviyesini, süre sınırını, isteğe bağlı buluntuyu, kadro girdisini ya da olayı alanıyla gösterir. Sonra seviyeyi çalışma alanından oyna; orada seçilen zorluk baskınların, dalgaların ve başlangıç altınının büyüklüğünü belirler.
7. Önce özel olarak yayımla, istediğin gibi oynandığında herkese aç.
