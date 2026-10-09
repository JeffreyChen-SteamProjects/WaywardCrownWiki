---
title: "Eklenti Geliştirme"
---

## Oluşturma ve deneme

Ana menü, harita veya eklenti yöneticisinden Creator / Workshop'u açın. Tek harita, iki aşamalı kampanya, eklenti veya bağlı eklentili patron öğreticisi oluşturun; çevrimdışı düzenleyin, kaydedin, doğrulayın ve deneyin. Yerel projeler, abonelikler, yayınlar, arama ve görevler yönetilir. «Krallık görevi» şablonu brifingi, ödülleri, dalgaları ve adı olan bir boss'u bulunan tek seviyelik bir kingdom seferi oluşturur. Bir ZIP'i, harita dosyasını ya da proje klasörünü «İçeriği içe aktar» düğmesiyle ya da çalışma alanına bırakarak içe aktarın; «Dışa aktar…» bir ZIP ya da klasör yazar, «Klasörü aç» bir projenin dosyalarını gösterir. İkisi de bir klasör sorar (sonuncusu yeniden önerilir), orada kullanılan bir ad ad-2, ad-3… olur ve Steam'in indirdiği içeriğe hiçbir şey yazılmaz. Her proje önizlemesi, türü, sürümü, yazarı, bu oyunun onu yükleyip yükleyemeyeceği ve son doğrulamasının sonucuyla listelenir; her listede arama ve tür filtresi vardır ve boşsa nedenini söyler, seçili projenin ayrıntıları lisansını, oyun sürümlerini, gereksinimlerini ve klasörünü verir. «Yeni proje» şablonları her birinin ne oluşturduğuyla listeler ve bir şey yazılmadan önce projenin nereye gideceğini gösterir. Doğrulama, kahramanların şatodan yürüyerek ulaşamadığı kaleler, sandıklar ve yerleştirilmiş boss'lar için uyarır (zafer onlara bağlıysa hata verir) ve bir haritayı 64 kale, 256 sandık ve 32 yerleştirilmiş boss ile sınırlar; haritadaki bir karede bulunan soruna çift tıklamak editörü orada açar. Arazi ve sefer editörü, yalnızca projenin bağımlılıklarını yükleyen ayrı bir süreçte açılır; böylece oyuncunun kurduğu içerik ne görünür ne de engel olur; doğrudan projeye kaydeder. Projenin çalışma alanından açılan bir editörde kaydedilmemiş değişiklikleri varken doğrulama, dışa aktarma, deneme ve yayın bekler: kaydedilmiş dosyaları kullanırlar. Eklenti editöründe bir boss'un evreleri bir tablodur (her birinin başladığı can, yetenekleri) ve bir yeteneğin sayısı, sınırı ve uyarı süresinin kendi alanları vardır. Eklenti editörü her düzenlemeden kısa süre sonra kaydedilmemiş çalışmanın bir taslağını ayarların yanında, projenin dışında tutar; çökmeden sonra proje yeniden açılınca geri yüklemeyi önerir. Eklenti editöründe «Çoğalt» bir tanımı yeni bir kimlikle kopyalar, başka bir tanımın andığı tanım o kullanım kalkana kadar silinemez ve «Oyundan kopyala…» oyunun bir aktörünün kendi kimliğiyle tam kopyasını ekler; bu kopya kullanıldığı her yerde aslının yerini alır ama oyunun dosyalarına dokunmaz. Sınıflar, düşmanlar, binalar, kaleler ve araştırmaların bir özellik formu var (özellik aralıkları ve gelişim, düşürülen altın, fiyatlar, binanın topladığı sınıf, kalenin gönderdikleri, araştırmanın uygulandığı şeyler); temel tanımdan gelen değerler gri görünür, oyunun sınırları dışındaki ya da bilinmeyen bir kimliği anan değer hemen işaretlenir; bağımlılıklar bir tabloda düzenlenir. Varlıklar sekmesi bırakılan dosyaları alır, her görüntünün görünen alanını oyunun boyut ve bellek sınırlarıyla birlikte gösterir, onu arazi ya da simge olarak önizler, bir kaynak ve emeği geçen satırı tutar, onu kullanan tanımları listeler ve atar; bir dosyayı tüm kullanımlarıyla yeniden adlandırır, hâlâ kullanılan bir dosyayı kaldırmaz ve olmayan bir dosyayı anan alanları var olan bir dosyaya yönlendirir. Bir deneme oyunu, yüklediklerinin listesiyle açılır (yükleme sırasıyla her eklenti ve eklediği ya da yerine geçtiği tanımlar, atlanan eklentiler ve nedenleri); çalışma alanı aynı listeyi gösterir ve denenen eklentinin atlanan bir tanımını sorun listesine koyar; bir tanım tablosundaki sorunu açmak eklenti editöründe o tanıma götürür.

Klasör/ZIP içe aktarma ve düzenlenebilir kopyalar yeni proje kimliği alır ve kendi ad alanı referansları değiştirilir. Yazar, kaynak ve lisans korunur; uzaktan güncelleme bağlantısı aktarılmaz. Steam asılları salt okunurdur. Göreli yollar, sınırlar, diziler ve tetikleyici döngüleri denetlenir. Boş lisans yeniden dağıtım izni değildir. Bir kopya yayımlanırken inceleme, kaynağını (orijinalin projesi, sürümü, yazarı ve öğe sayfası) ve orijinal yazarın koşullarını gösterir; atfı koruduğunuzu ve koşullara uyduğunuzu ya da orijinal lisans vermiyorsa yazarından izin aldığınızı onaylamadan gönderilmez. Belirtilmemiş bir lisans her zaman paylaşma izni yok olarak görünür. Kopya ayrıntılarında orijinalini adlandırır ve abone olunan orijinal güncellendiğinde bunu söyler; Yerel düzenlenebilir kopya oluştur, Dışa aktar… ve Abonelikten çık ipuçları her birinin ne yaptığını açıklar.

Yayınlamak Steam gerektirir: sayfa ve görseli hazırlayın, değişmez dosya/özet görüntüsünü inceleyin ve açıkça gönderin. Pencere kapanınca görevler sürer; hazırlık iptal edilebilir. Gönderilmiş/bilinmeyen sonuçlarda tekrar denemeden önce durum veya yeniden eşitleme gerekir. Bağlantılar hesap, uygulama ve projeye özeldir. Önizleme 1 MiB altında; testler sahte Steam kullanır. Önce gerekli eklentileri yayınlayın ve harita/kampanya incelemesinde aynı uygulamadaki öğe kimliklerini doğrulayın. Yayın sihirbazı her dilin sayfa metnini ve JSON meta verilerini kaydeder, ana görseli kareye kırpar ve en fazla sekiz ek görüntüyü sıralayıp kaldırır. Mevcut yayınlar içerik yeniden gönderilmeden yalnızca sayfa/bağımlılık güncellemesi yapabilir; görseller incelenen anlık görüntüye dahildir. Sihirbaz ana önizlemeyi projenin kendisinden oluşturabilir (bir haritanın arazisi ile şatosu, kaleleri ve sandıkları, bir seferin ilk bölümleri, bir eklentinin kendi görüntüleri; her biri başlığıyla), önizlemeyi yükleneceği hâliyle ve boyutuyla gösterir, her ekran görüntüsünün altına isteğe bağlı bir altyazı çizer ve bir taslağın andığı görüntülerden hangilerinin kaybolduğunu söyler. Üç adımı (sayfa, bağımlılıklar ve sürümler, inceleme) Geri ve İleri (Alt+Sol, Alt+Sağ) ile dolaşılır; bir sorun sizi adımına götürür ve alan düzenlenene dek çerçeveler, inceleme ise son yayından beri eklenen, değişen ve kaldırılan dosyaları sayar. Başarısız bir görev ne tür bir sorunla karşılaştığını (izin, Atölye sözleşmesi, yer, meşgul Steam, zaman aşımı, çevrim dışı Steam, denetimler, bilinmeyen sonuç, kesinti), sonra ne yapılacağını ve hesap, öğe ya da dosya adı içermeyen WS-PERM-R15 gibi bir kod söyler. Yayınlarım altında kendi öğelerinizden birini seçmek görünürlüğünü, sürümünü, oluşturma ve güncelleme zamanlarını, boyutunu, bağlı yerel projeyi ve o projeden yapılacak güncellemenin neyi değiştireceğini (sayfa alanları, dosyalar, gerekli öğeler) tek listede gösterir. Tarayıcıda bir öğe seçildiğinde açıklaması (ya da Steam'in açıklama vermediği) ve birbirinden ayrı iki bölüm gösterilir: Steam'in bildirdikleri (tür, gerekli öğeler, yazarın izin verdiği oyun dalları, yayında kaydedilen sürüm, güncelleme zamanı, boyut, oylar) ve Steam kurduktan sonra öğenin kendi manifestinin söyledikleri (proje ve sürüm, bu derlemenin istenen oyun sürümlerini çalıştırıp çalıştıramayacağı, gereken projeler, neleri değiştirebileceği). Steam'in vermediği bilgi uydurulmaz. Abone olunan bir öğe ancak Steam onu kurduktan ve bir denetimden geçtikten sonra kullanılır: manifesti bu oyun tarafından okunabilir ve gerektirdiği her proje kabul edilen bir sürümde, döngü olmadan kuruludur (aynı projeyi iki öğe veriyorsa kendi eklentiniz, yoksa en eski öğe geçerlidir). Steam'in güncellediği bir öğe, kurulu sürümüyle kullanılmaya devam eder. Abonelikler sekmesi, abone olunan her öğenin durumunu (Steam bekleniyor, bayt sayısıyla iniyor, denetim bekliyor, kullanılabilir, gerektirdiği eksik ya da başarısız ve nedeni) listeler; tarayıcı da seçili öğe için aynısını söyler. Steam'in tamamlayamadığı bir indirme, örneğin disk doluyken, siz İndirmeyi yeniden dene'ye basana kadar yeniden istenmez. Bir kayıt yüklenmeden önce oyun, kaydın yapıldığı içeriği denetler: kullanılan bir proje güncellendi, kapatıldı, aboneliği bırakıldı ya da kullanılamıyorsa veya başka içerik açıksa her birini söyler ve sorduktan sonra kaydı saklanan kopyasından yükler ya da neden yükleyemediğini (kullanılabilir kopya yok, bir oyun güncellemesi, başka bir Steam hesabı ya da uygulaması, Steam çalışmıyor) ve nasıl düzeltileceğini söyler; kayıt dosyası ve süren oyun olduğu gibi kalır. Abonelikler sekmesindeki Saklanan içerik… bu kopyaları ve onlara bağlı kayıtları listeler, denetler ve kullanılmayanları kaldırır; bir kaydın bağlı olduğu kopya yalnızca kayıtların adını veren bir onaydan sonra, çalışan oyunun kullandığı ise hiçbir zaman kaldırılmaz. Öğe ve proje ayrıntıları bu oyunun sürümünü (bir geliştirme derlemesinde ayarlanmaz; o zaman belirli bir oyun sürümü isteyen içerik yüklenmez) ve Steam dalını da gösterir; Abonelikler sekmesindeki Öğe sayfasını aç kullanılamayan bir öğeyi gösterir. Oyun çalışırken Steam onu başka bir dala geçirirse bir bildirim bunu söyler ve hiçbir şey kendiliğinden yeniden başlamaz. Bir sayfanın etiketleri türü ile Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art arasından seçilenlerdir; sayfa adımı sayfası yazılan dilleri gösterir (başka her Steam dili varsayılan sayfayı görür) ve zaten yayımlanmış bir öğe için Sayfayı Steam'den al…, Steam'deki sayfayı taslakla alan alan karşılaştırır ve yalnızca işaretlenen alanları alır. Steam olmadan abone olunan öğeler yüklenmez ve saklanan kopyalar kullanılmaz; ikisi de bir Steam hesabına ve uygulamasına aittir (demo ve tam oyun ayrı uygulamalardır, her birinin kendi öğeleri, taslakları ve içerik profilleri vardır). Bunlara ihtiyaç duyan bir kayıt bunu söyler; kendi projelerinizi oluşturmak, denetlemek, denemek, dışa ve içe aktarmak çevrimdışı çalışır. Deneme çalışırken tik süresini, belleği ve sprite atlasını ölçer; çalışma alanı bunları deneme raporuna iyi, izlenmeli ya da çok ağır diye derecelendirip ne işe yarayacağıyla ekler. İçerik ya da kota yüzünden başarısız olan bir yüklemenin açıklaması Steam sınırlarını söyler; biten bir yükleme ise yayımlamak bunu sınamadığı için abone olup yüklendiğini denetlemeyi hatırlatır. Bir yükleme ancak beş dakika ilerlemezse bırakılır, tamamlanan ya da iptal edilen görevler bir hafta sonra listeden çıkar; çalışan hiçbir oyunun kullanmadığı test oturumları yenileri başlarken silinir, yerel bir projede Enter düzenleyicisini açar ve bu pencereler her dilde 1280 × 720 ekrana sığar.

## Tanımlar ve bağımlılıklar

Sürümlü eklentiler yerleşik davranış şablonlarıyla bağımsız ad alanlı sınıflar, düşmanlar, binalar ve karakollar; ayrıca beceriler, araştırmalar, olaylar, adlandırılmış patronlar, varlıklar ve diller ekler. Yeni kimlikler `namespace:name` biçimindedir; yerleşik kimlikler mevcut içeriği değiştirir. Çekirdek dosyalar salt okunurdur. Görünüm paketleri oyun değerlerini değiştirmeden karakter veya arazi resimlerini değiştirir. Bir oyuncu yapısı bir etki taşıyabilir: belirli bir seviyeye ulaşınca menzildeki düşmanlara ya da kahramanlara sabit aralıklarla kullandığı bir saldırı, iyileştirme, kalkan ya da durum yeteneği. Yetenekleri yalnızca assets ve languages olan bir paket yalnızca görünümler (skins) ve diller içerebilir; oyunun kullanamadığı bir görsel ya da ses yerleşik olanı yerinde bırakır.

Ortak manifest proje kimliği, yazar, sürüm, uyumluluk, varlık ve bağımlılıkları kaydeder. Yükleme sırası belirlenir; eksik, uyumsuz veya döngüsel bağımlılıklar yüklemeyi engeller. Eski biçim ve sıra korunur. Profiller değişiklikleri önizler ve sonraki oyuna uygulanır. İçerik profilleri seçili eklentileri yükleme sırasıyla listeler; her birinin kaynağını ve kurulu, çalışan oyunda kullanılan ve sonraki için seçilen sürümünü gösterir. Yukarı ve Aşağı sırayı yalnızca bağımlılıkların izin verdiği yerde değiştirir ve sıra aynı Steam hesabı ve uygulamasındaki bir sonraki yüklemeye uygulanır. Hiçbir şey değişmeden önce profil, uygulamanın neyi açıp kapatacağını ve kapanan bir eklentiyi kullanan haritaları, kampanyaları, eklentileri ve kayıtları listeler; bir soruna çift tıklamak eklentisini bulur, bir harita ya da kampanya gereken eklentileri önerebilir ve sunulmayan bir abone öğesi (kendi eklentinizin bir kopyası gibi) nedenini söyler.

## Örnekler

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

## Varlıklar ve sınırlar

| JSON | Varlıklar ve sınırlar |
|---|---|
| skills | attack, heal, shield, status, summon |
| buildings.effect | attack, heal, shield ya da status yeteneği (summon asla), yapı seviyesi 1–3'ten itibaren her 10–3600 tikte bir; durumlar üst üste binmez |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; yalnızca görünüm |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (opak çizilir); karakter görünümleri: hedefleri gibi; geri kalanı ve karakterler dışındaki layout kullanılmaz, uyarı verilir |
| plugin art and sounds | tüm etkin paketler için 256 MiB çözülmüş görsel (genişlik × yükseklik × 4), bir dosya bir kez sayılır, aşılırsa yerleşik görsel kalır; bellekte 64 MiB eklenti sesi |
| capabilities: assets, languages only | yalnızca görünümler (skins) ve diller; diğer tanımlar reddedilir |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 bölüm haritası |
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

## Oyun sürümü uyumluluğu

`game_version`, çalışan oyunun yayımlanmış sürümüne ilişkin koşulu belirtir. Eski projeler dahil `"*"` kabul edilir. Belirli bir aralık yalnızca derleme, bu aralığa uyan bilinen bir anlamsal oyun sürümü bildiriyorsa kabul edilir; aksi halde doğrulama, yükleme ve yayımlama reddedilir. Bu depoda `game.build_info.GAME_VERSION` şu anda bilinmiyor: yayın derlemesi onaylanmış bir sürüm sağlayana kadar `"*"` kullanın. Projenin `version` alanı ve Steam dal adları oyun sürümünü belirtmez.
