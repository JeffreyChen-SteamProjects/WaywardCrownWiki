---
title: "Binalar"
---

Binalar, maceraperest davranışını etkilemenin temel aracıdır. Farklı binalar farklı amaçlara hizmet eder: sınıf işe alma, teçhizat satışı, dinlenme sağlama, otomatik savunma ve daha fazlası.

---

## Bina Genel Bakışı

### İşe Alma Binaları

| Bina | Maliyet | HP | İşe Alınan Sınıf | Açıklama |
|------|---------|-----|-------------------|----------|
| **Kışla** | 150a | 900 | Savaşçı | Ön cephe yakın dövüşçüleri — önce inşa edilmesi önerilir |
| **Büyücü Kulesi** | 200a | 750 | Büyücü | Uzun menzilli büyü saldırıları |
| **Kolcu Kulübesi** | 150a | 750 | Kolcu | Uzun menzilli ok saldırıları, yüksek keşif dürtüsü |
| **Muhafız Mevzisi** | 120a | 1050 | Muhafız | Devriye gezer ve binaları korur |
| **İnşaatçılar Loncası** | 100a | 600 | İnşaatçı | Hasarlı binaları tamir eder |
| **Hırsızlar Loncası** | 140a | 650 | Hırsız | Açgözlü, kaçamak hırsızlar; Sv.3'e kadar yükseltilebilir (220a → 340a) |

:::tip[İşe Alma Mekanikleri]
Her işe alma binası en fazla **3** maceraperest barındırabilir. Daha fazla işe almak için aynı binanın ek kopyalarını inşa edin. Bir yer boşaldıktan 50 tick (~10 saniye) sonra yerine yeni biri işe alınır. Bir loncanın paneli, kahramanlarından kaçının orada yaşadığını ve sıradakinin ne zaman geleceğini ya da dolu olduğunu söyler.
:::

### Ticari Binalar

| Bina | Maliyet | HP | Maks Seviye | Yükseltme Maliyeti | Açıklama |
|------|---------|-----|-------------|---------------------|----------|
| **Pazar** | 300a | 600 | 3 | 400a → 600a | Her 72 saniye oyun süresinde 30a × seviyesi öder |
| **Demirci** | 200a | 900 | 3 | 300a → 500a | Maceraperestler burada silah ve zırh satın alır |
| **Kütüphane** | 250a | 750 | 3 | 400a → 600a | Maceraperestleri güçlendiren yetenekleri araştırır |
| **Han** | 120a | 600 | 3 | 200a → 350a | Ek dinlenme alanları sağlar |
| **Tapınak** | 220a | 750 | 3 | 300a → 450a | Yakındaki yaralı maceraperestleri iyileştirir, seviye başına daha fazla |
| **Ambar** | 260a | 700 | 3 | 350a → 500a | Yeni binaları seviye başına %5 ucuzlatır, en fazla %30 |
| **Köy Evi** | 100a | 500 | 1 | — | Köylüleri barındırır; her köylü maceraperestlerin toplaması için bir şifalı ot eker |
| **Ticaret Karakolu** | 320a | 500 | 1 | — | İstenildiği kadar, her biri öncekinden pahalı, şatodan en az 45 kare uzakta: kervanı şatoya gidip döner ve her tur kasasına karakol ile şato arasındaki her kare için 0,6a getirir. 2. seviye bir şato gerektirir |
| **Vergi Dairesi** | 280a | 650 | 1 | — | Kendi vergi tahsildarını barındırır: burada yaşar ve topladığını buraya getirir. Düşerse 60sn sonra yenisi göreve başlar |

### Savunma Binaları

| Bina | Maliyet | HP | Maks Seviye | Yükseltme Maliyeti | Açıklama |
|------|---------|-----|-------------|---------------------|----------|
| **Ok Kulesi** | 250a | 150 | 3 | 300a → 500a | 20 karo menzil içindeki düşmanlara otomatik saldırır; menzil 1'in üstündeki her seviye için 2 artar (hasar 16 + 8 × (Sv − 1)) |
| **Sur** | 90a | 1400 | 2 | 140a | Sur parçası: ucuz ve çok dayanıklı. Parçalar ve kapılar sıra hâlinde bitişik durur, her parça aynı fiyattadır |
| **Kapı** | 160a | 1000 | 2 | 220a | Surdan geçit: tacın insanları içinden geçer, canavarlar geçemez |

**Surlar ve kapılar**: Sur parçaları ve kapılar, eksenlerden birinde 9 kare arayla birbirine bitişik durur; böylece bir sıra hiç geçit bırakmaz. Diğer her bina kendi boşluğunu korur ve kaç tane dikilmiş olursa olsun her parça aynı fiyattadır. Biri eldeyken haritada sürükleyerek bir sıra döşenir (tek tık bir parça koyar; her parça krallığın sur ızgarasına oturur, böylece parçalar hep hizalıdır ve ayrı yerlerde başlanan surlar birleşir); önizleme, sırayı duracağı gibi birleşik gösterir, hazinenin yetmediği yerden sonrası kırmızıdır ve sıranın fiyatı yazılır; araç elde kalır. Bir kapının geçidi, surunu enine kesen üç kare genişliğindedir ve tacın insanları içindir: canavarlar orayı sur sayarak yol arar ve içeri girmek için bir parçayı yıkmak zorundadır. Bir parça birleştiği kenarlara göre düz sur olarak çizilir; yalnızca surun bittiği, döndüğü ya da başka bir surla buluştuğu yerde bir direk bulunur. Bir kapı ise surunun yönüne göre çizilir. Sur parçası muhafız çekmez; kapı çeker. Ayakta duran bir sur parçasının üzerine istenen kapı onun yerini alır: parça her yapı gibi yıkılır, bedelinin bir kısmı geri gelir ve kapı onun yerine kurulur.

### Dekoratif Binalar

| Bina | Maliyet | HP | Açıklama |
|------|---------|-----|----------|
| **Çeşme** | 80a | 300 | Dekorasyon |
| **Bahçe** | 60a | 300 | Dekorasyon |
| **Çan Kulesi** | 70a | 300 | Dekorasyon |
| **Yol** | 0a | — | Sürüklenerek zemine çizilir; hareket maliyeti 1, çayırlıkla aynı |

---

## Bina Yükseltmeleri

Bazı binalar **Sv.3**'e kadar yükseltilebilir:

- **Pazar** — Geliri artırır
- **Demirci** — Daha yüksek seviye teçhizat sunar
- **Kütüphane** — Daha gelişmiş araştırma yeteneklerinin kilidini açar
- **Kışla**, **Büyücü Kulesi**, **Kolcu Kulübesi**, **Muhafız Mevzisi** (Seviye 3), **İnşaatçılar Loncası** (Seviye 2) — Her seviye loncanın sonraki araştırmalarını açar
- **Han** — Seviyeye göre 3 / 4 / 5 konuk için yer; konuklar ×1 / ×1,2 / ×1,5 hızla iyileşir (şato ve sınıf binaları 3 kişiyi temel hızda barındırır)
- **Ok Kulesi** — Saldırı gücünü artırır
- **Tapınak**, **Ambar** — Daha güçlü etki; **Hırsızlar Loncası** — Sv.2, Zehirli Bıçaklar araştırmasını açar (300a): bir hırsızın vuruşu 5 sn boyunca saniyede azami HP'nin %1'i kadar zehirler, üst üste binmez; **Köy Evi** — Yükseltilemez; **Sur** — en fazla Sv.2

Her seviye, binanın temel HP'sinin %50'si kadar HP ekler. Yükseltme binanın sağlık oranını korur (önce yarı CP ise sonra da yarı), yani onarım sayılmaz.

:::note[İnşa maliyeti]
Zaten sahip olduğunuz türden her yeni bina taban fiyatın %50'si kadar daha pahalıdır (ikincisi 1,5×, üçüncüsü 2×; dekorasyonlar hariç); ardından Ambarların indirimi uygulanır.
:::

---

## Bina Yerleştirme Kuralları

- **Su** üzerine veya keşfedilmemiş zemine yerleştirilemez
- Kenarı ile diğer her bina arasında en az 3 karo bırakmalıdır
- **Kale**'nin 14 karo yakınına yerleştirilemez
- **Hazine sandıkları**, maceraperestler, düşmanlar veya Düşman Kaleleri ile çakışamaz
- Yerleştirirken bir plan önizlemesi gösterilir (mavi = inşa edilebilir, kırmızı = inşa edilemez)

---

## Bina Hasarı ve Tamiri

- Binalar düşmanlardan hasar alır ve HP sıfıra ulaştığında yıkılır
- Hasarlı binalar bir sağlık çubuğu gösterir
- **İnşaatçılar** hasarlı binaları tamir etmek için otomatik olarak hareket eder
- Binalar kendi kendine yenilenmez
- **İnşaat**: yerleştirdiğin bina, iş bitene kadar bir şantiyedir. Parası ödendiği andan itibaren ayaktadır; saldırıya uğrayabilir, savunulabilir ve onarılabilir, ama bitene kadar kimseye hizmet vermez, asker toplamaz ve ateş etmez. Tacın ekibi şantiyeleri teker teker bitirir (orada bulunan her işçi için tick başına 4 can), *Önce bunu inşa et* işaretli olanı en eskisinden önce; inşaatçılar şantiyelerde de hasarlı bir binada çalıştıkları gibi çalışır ve önce öncelikli şantiyeye gider. Yakında canavar varken kimse çalışmaz, bir canavar gelince inşaatçı eve döner. Bir şantiyeyi iptal etmek fiyatının %75'ini geri verir; canavarların yıktığı şantiye hiçbir şey vermez. Yollar, süslemeler ve haritanın yerleştirdiği binalar hemen tamamdır; fiyatlar ve tek ticaret karakolu kuralı şantiyeleri de sayar. Ekip iş başında görülür: tacın mavisini giymiş işçileri şatodan o şantiyeye yürür, binanın ön yüzünde çekiç sallar ve iş bitince eve döner; iş ancak biri vardığında ilerler, bu yüzden uzak bir şantiye o yürüyüşü bekler. İş yokken işçiler şatonun içinde dinlenir. İşçi bir canavardan eve kaçar ve asla savaşmaz; yanındaki bir canavar onu öldürebilir ve şato 300 tik sonra yenisini alır, ta ki ekip yeniden tam kadro olana kadar. Şatonun panelinde ekip için her işçinin nerede olduğunu söyleyen bir satır vardır. Şato iki işçi tutar ve birinciden yüksek her seviyesi için bir işçi daha; hepsi aynı anda tek bir işi şu sırayla yapar: önce işaretlenen şantiye; canı %30'un altına düşmüş bitmiş bir bina; en eski şantiye; süren en eski yükseltme; hasarlı herhangi bir bina, en kötüsü önce. Yükseltme de bir iştir: sipariş verilince ödenir, bina bu sırada mevcut seviyesinde hizmet verir ve ekip binanın temel canının yarısı kadar iş yapınca seviye yükselir. Bir işçi tick başına 2 can onarır ve yolda iki kat hızlı yürür. Krallık özeti, ekibin işlerini hangi sırayla ele alacağını belirler: önce yeni binalar (olağan), önce onarımlar ya da önce yükseltmeler; önce yapılsın diye işaretlenen şantiye ve ağır hasarlı bina hepsinden önce gelir.

:::caution[Sakin Güvenliği]
Bir bina yıkıldığında, içinde dinlenen tüm maceraperestler anında haritaya bırakılır. Kilit binaları korumak için yeterli Muhafız ve Ok Kulesi'ne sahip olduğunuzdan emin olun.
:::

---

## Kale

Kale, yerleşiminizin merkezidir:

| Özellik | Değer |
|---------|-------|
| HP | 3000 |
| Taban yarıçapı | 10 karo |
| Görüş menzili | Başlangıçta 30 karo, sonra 5 |
| Konaklama kapasitesi | 3 |

**Kale yıkılırsa oyun biter.**

---

## Şato seviyeleri

Şatonun bir seviyesi vardır. Seviye, şatonun kaç vergi tahsildarı tutacağını ve neleri açacağını belirler; ne kahramanları (her lonca kendi kapasitesine kadar kahraman alır) ne de bina seviyelerini (her bina kendi türünün en yüksek seviyesine kadar yükseltilebilir) sınırlar:

| Seviye | Vergi tahsildarları | Açtıkları | Ulaşmak için |
|---|---|---|---|
| 1 Hisar | 1 | — | Başlangıç |
| 2 Şato | 2 | Ticaret karakolu, şatonun yolunun seçimi, keşif büyüsü | 1200 altın; ayakta duran 4 lonca ve dükkân, hayatta 3 kahraman, eve getirilen 1500 altın vergi |
| 3 Kraliyet Sarayı | 3 | Yolun sonraki adımı | 3000 altın; ayakta duran 8 lonca ve dükkân, 8. seviyeye ulaşmış bir kahraman, yıkılmış 1 kale |

Sonraki seviyenin koşullarını ve her birinden ne kadarına sahip olduğunu görmek için şatoyu seç; koşullar sağlanınca düğmeyle yükselt. Sonradan binalar yıkılsa da seviye asla kaybedilmez.

## Kraliyet büyüleri

Tacın hazineden ödenen iki kendi büyüsü vardır, kendilerine ait Kraliyet büyüleri panelinde (diğerleri gibi taşınabilir, ayrılabilir ya da kapatılabilir). Birini seç, sonra haritaya tıkla: uygun olmayan hedef gerekçesiyle reddedilir ve bir şeye mal olmaz. Kahramanlar kendi akıllarıyla davranır; büyü kimseye emir vermez. Keşif hazırken harita ulaştığı yeri aydınlatır; Q ve W iki büyüyü klavyeden hazırlar. Bir şato yolu seçmiş krallığın o yola özgü büyüleri de vardır; her biri yolun binalarından biriyle açılır (şato yolları tablosunda listelenir). E, R ve T paneldeki üçüncü, dördüncü ve beşinci büyüyü hazırlar. Bütün krallığa yapılan bir büyü hedef gerektirmez: düğmesi ya da tuşu onu hemen yapar.

| Büyü | Açan | Hedef | Etki | Bedel | Yeniden hazır |
|---|---|---|---|---|---|
| Acil iyileştirme | Bitmiş bir tapınak | Şatonun gördüğü yaralı bir kahraman (içeride dinlenen değil) | Canının %60'ı hemen geri gelir | 250 altın | 900 tick (3 dakika) |
| Keşif | 2. seviye şato | Şatodan 70, bir okçu kulesinden 30 karo içindeki bilinmeyen arazi | 8 karo içindeki arazi açığa çıkar | 150 altın | 600 tick (2 dakika) |

Hanlar, iksirler ve tapınak iyileşmenin daha ucuz yolu, keşif ödülü de acil olmayan araziyi haritalamanın daha ucuz yolu olarak kalır. Bekleme oyun hızıyla ilerler, duraklatınca durur ve kayda geçer. Yapılan büyü, haritada düştüğü yerde görünür: iyileştirilen kahramanın üzerinde ışıktan bir taç, keşfedilen arazinin üzerinde bir ışık sütunu ve yayılan ışık halkaları.

## Şatonun yolları

Şato 2. seviyeye gelince krallığın yolunu seçmek için şatoyu seçin. Seçim kalıcıdır: bir yola ilk tıklama yeniden sorar, ikincisi onu seçer ve bir yol asla başkasıyla değiştirilmez. Bir yol kahramanların neye önem verdiğini ve fiyatları değiştirir, kendi binalarını, kahramanlarını, yeteneklerini ve araştırmalarını açar ve şato 3. seviyede bir adım daha ileri gider. O zaman yol bir uzmanlık da seçer; sunduğu birkaç uzmanlıktan biri, kalıcı olarak ve aynı iki tıklamayla: her biri bir şey kazandırır ve bir bedeli vardır, aşağıdaki satırlar ikisini de söyler. Demo'da üç yol oynanır; Düzen, Yiğitlik, Gizem, Ticaret, Zorbalık şato panelinde tam oyunun yolları olarak yer alır. Şato panelindeki **Yolları karşılaştır…** tüm yolları yan yana gösteren bir pencere açar: binası, maliyeti ve dayanıklılığı, kahramanların farklı yaptığı, bedeli, 3. seviyedeki adımı ve şimdi seçilip seçilemeyeceği; bakmak bedavadır, orada yol seçmek de aynı iki tıklamadır. Pencere, ne seçilirse seçilsin oyun sürerken açık kalır ve büyütülebilir ya da ekranı kaplayacak şekilde açılabilir. Kart ayrıca yolun kahramanlarının yeteneklerini (ücretsiz; seviyesi, iki kullanım arasındaki bekleme süresi ve ne yaptığıyla), kahramanların kendi altınını harcadığı binaları ve yolun araştırmalarıyla kraliyet büyülerini, hazineye maliyeti ve ne yaptığıyla birlikte listeler.

Bir yolun binaları yalnızca o yolda kurulur, hazinenin ödeyebildiği kadar: diğer her bina gibi, her biri aynı türden ayakta duran her bina için temel fiyatının yarısı kadar daha pahalıdır. Bir bölümün bina listesi onları gizlemez. Çağrılmış bir muhafız kahraman değildir: alım yeri tutmaz, sandık açmaz ve öldürdükleri kimseye para kazandırmaz; süresi dolunca, Kemiklik yıkılınca (ya da onu çağıran Ölüm Büyücüsü düşünce) ya da hazine ödeyemeyince dağılır. Bir Hayvan Bekçisinin tazısı onun yoldaşıdır ve o da kahraman değildir: hazineye bir şeye mal olmaz ve bekçisi yaşadıkça yanında kalır; düşerse bekçi bir süre sonra bir yenisini çağırır. Muhafızların bir sonraki bakımını ödeyemeyecek hazine bunu bir ödeme önceden vakayinamede ve krallık özetinde söyler.

<!-- castle-paths-content:begin (written by tools/path_docs.py from the game's data; do not edit) -->
- **Muhafız** — Kasabayı tutar: Burç iksirleri daha ucuza satar ve yakınındaki savunucuları korur. Kahramanlar eve daha yakın kalır ve savunma ödüllerine daha çok önem verir. *Kahramanlar*: Şatodan %20 daha yakını keşfeder ve savunma ödüllerine %30 daha çok önem verir. *Bedel*: Seferler ekiplerini daha uzun bekler, uzak ödüller daha çok altın ister. *Şato 3. seviyede*: Şato ve okçu kuleleri her darbeden dörtte bir daha az hasar alır. *Uzmanlıklar (biri, şato 3. seviyede)*: **Merhamet** — Kazanç: Hanların ve tapınağın iyileştirmesi +30% · Kahramanların dinlenirken iyileşmesi +25%. Bedel: Dükkân fiyatları +15%. **Savunma Hattı** — Kazanç: Şatonun aldığı hasar -25% → -40% · Okçu kulelerinin aldığı hasar -25% → -40% · Savunma ödüllerine ilgi +30% → +60%. Bedel: Kahramanların keşif menzili -20% → -35% · Av ödüllerine ilgi -20%.
- **Yaban** — Kırda yaşar: kasabadan uzağa kurulan Yaban kampı iksir satar ve kahramanları dinlendirir. Kahramanlar daha uzağa gider ve keşif ödüllerine daha çok önem verir. *Kahramanlar*: %25 daha uzağı keşfeder ve keşif ödüllerine %30 daha çok önem verir. *Bedel*: Kasabanın hanları ve tapınağı daha yavaş iyileştirir, dükkânlar %10 daha pahalıdır. *Şato 3. seviyede*: Kahramanlar şatodan %50 daha uzağa gider. *Uzmanlıklar (biri, şato 3. seviyede)*: **Uzak Patikalar** — Kazanç: Kahramanların keşif menzili +50% → +90% · Keşif ödüllerine ilgi +30% → +60%. Bedel: Hanların ve tapınağın iyileştirmesi -30% → -45%. **Kamp Ateşi** — Kazanç: Kahramanların dinlenirken iyileşmesi +25% · Dükkân fiyatları +10% → 0%. Bedel: Kahramanların keşif menzili +50% → +25%. **Sürü** — Kazanç: Bir yoldaşın canı +40%. Bedel: Yeni bir yoldaş için bekleme +50%.
- **Ölümsüz** — Ölüleri kaldırır: Kemiklik, bir süre yakınında devriye gezip savaşan en fazla üç iskelet muhafız tutar. *Kahramanlar*: Eskisi gibi davranır. Muhafızlar kahraman değildir: altın yok, ödül yok, loncada yer yok. *Bedel*: Her muhafız hazineye bakım masrafı çıkarır ve ödenmezse dağılır; yaşayan kahramanlar dinlenirken daha yavaş iyileşir. *Şato 3. seviyede*: En fazla beş muhafız, her biri yarı yarıya daha uzun dayanır. *Uzmanlıklar (biri, şato 3. seviyede)*: **Ölüler Ordusu** — Kazanç: Kemiklik başına muhafız 5 → 7. Bedel: Kahramanların dinlenirken iyileşmesi -25% → -40%. **Uzun Nöbet** — Kazanç: Bir muhafızın dayanma süresi +50% → +150%. Bedel: Hazinenin vergi payı -10%.
- **Düzen** — Yasayı ve defterleri korur: hazinenin her vergideki payı %15 daha büyüktür, Geçiş Karakolu çevresindeki binalar için geçiş parası toplar, mareşaller ve yol bekçileri kasabayı tutar. *Kahramanlar*: Savunma ödüllerine %20 daha çok, keşif ödüllerine %20 daha az önem verir. *Bedel*: Kahramanlar keşif ödüllerine daha az önem verir. *Şato 3. seviyede*: Hazinenin payı %25 daha büyük olur. *Uzmanlıklar (biri, şato 3. seviyede)*: **Ana Defter** — Kazanç: Hazinenin vergi payı +25% → +40%. Bedel: Dükkân fiyatları +10%. **Nöbet** — Kazanç: Savunma ödüllerine ilgi +20% → +50% · Şatonun aldığı hasar -15% · Okçu kulelerinin aldığı hasar -15%. Bedel: Keşif ödüllerine ilgi -20% → -40%.
- **Yiğitlik** — Savaş için yaşar: kahramanlar av ödüllerine daha çok önem verir ve seferler daha erken yola çıkar, Savaş Salonu yakınındaki kahramanları eğitir ve Levazım Deposu iksir satar. *Kahramanlar*: Av ödüllerine %30 daha çok önem verir; seferler grubunu dörtte bir daha az bekler. *Bedel*: Hazinenin her vergideki payı %10 daha küçüktür. *Şato 3. seviyede*: Kahramanlar av ödüllerine %50 daha çok önem verir. *Uzmanlıklar (biri, şato 3. seviyede)*: **Şan** — Kazanç: Av ödüllerine ilgi +50% → +80% · Uzak ödüllerin istediği altın -20%. Bedel: Hazinenin vergi payı -10% → -20%. **Öncü** — Kazanç: Seferlerin grubunu bekleme süresi -25% → -50% · Kahramanların dinlenirken iyileşmesi +20%. Bedel: Savunma ödüllerine ilgi -20%.
- **Gizem** — Krallığı büyüye adar: kraliyet büyüleri dörtte bir daha erken yeniden hazır olur, Tınlayan Kule yakınındaki canavarlara vurur, büyü kılıçları ve tılsım ustaları ışıkla savaşır. *Kahramanlar*: Eskisi gibi davranır. *Bedel*: Şato ve okçu kuleleri her darbeden %15 daha fazla hasar alır. *Şato 3. seviyede*: Kraliyet büyüleri %40 daha erken yeniden hazır olur. *Uzmanlıklar (biri, şato 3. seviyede)*: **Meclis** — Kazanç: Kraliyet büyülerinin bekleme süresi -40% → -55%. Bedel: Hazinenin vergi payı -10%. **Koruma Mühürleri** — Kazanç: Şatonun aldığı hasar +15% → -5% · Okçu kulelerinin aldığı hasar +15% → -5%. Bedel: Kraliyet büyülerinin bekleme süresi -40% → -30%.
- **Ticaret** — Ticaretle yaşar: bir kervanın gidiş dönüş seferi %25 daha fazla kazandırır, dükkânlar %10 daha ucuzdur ve Kervan Deposu'nun Navlun Sözleşmeleri seferi daha da kazançlı kılar. Refakatçiler ve kervancılar yolları tutar. *Kahramanlar*: Eskisi gibi davranır. *Bedel*: Uzak ödüller daha çok altın ister. *Şato 3. seviyede*: Bir kervanın gidiş dönüş seferi %50 daha fazla kazandırır. *Uzmanlıklar (biri, şato 3. seviyede)*: **Kervanlar** — Kazanç: Bir kervan seferinin kazancı +50% → +80%. Bedel: Dükkân fiyatları -10% → 0%. **Çarşı** — Kazanç: Dükkân fiyatları -10% → -20% · Hazinenin vergi payı +10%. Bedel: Bir kervan seferinin kazancı +50% → +30%.
- **Zorbalık** — Korkuyla yönetir: hazinenin her vergideki payı %25 daha büyüktür, Haraç Dairesi bir tahsildarı beklemeden yakındaki kasalara el koyar, engizitörler ve infazcılar kasabayı hizada tutar. *Kahramanlar*: Eskisi gibi davranır. *Bedel*: Kahramanlar dinlenirken %15 daha yavaş iyileşir, dükkânlar %10 daha pahalıdır. Ferman ve el konulan kasalar kahramanlarda hoşnutsuzluk bırakır: fazla zorlanan bildirimde bulunur ve ayrılır. *Şato 3. seviyede*: Hazinenin payı %40 daha büyük olur. *Uzmanlıklar (biri, şato 3. seviyede)*: **Haraç** — Kazanç: Hazinenin vergi payı +40% → +60%. Bedel: Kahramanların dinlenirken iyileşmesi -15% → -30%. **Demir Yumruk** — Kazanç: Savunma ödüllerine ilgi +30% · Şatonun aldığı hasar -15% · Okçu kulelerinin aldığı hasar -15%. Bedel: Hazinenin vergi payı +40% → +30%.

Bir yolun kendine özgü içeriği: binaları yalnızca o yolda kurulur, her biri etkin bir yeteneği olan kendi kahraman sınıfını toplar ve araştırmaları bu binalarda satın alınır.

| Yol | Binaları | Yetenekleri | Araştırmaları | Kraliyet büyüleri |
|---|---|---|---|---|
| **Muhafız** | Burç: 380 altın, 1400 dayanıklılık. İksirleri fiyatın %80'ine satar; 10 karo içinde kasabayı savunan kahramanlar her darbenin %80'ini alır · Kalkan Şövalyesi toplar (maks 3)<br>Sığınak Tapınağı: 320 altın, 800 dayanıklılık. 9 kare içindeki yaralı kahramanları her 10sn'de canlarının %8'i kadar iyileştirir · Hospitalye toplar (maks 3) | Kalkan Şövalyesi — Yemin Kalkanı, Vekil Yemini, İmdada Koşu<br>Hospitalye — Şifa Duası | Kule kalkanlar — Kalkan Şövalyesi: +4 savunma.<br>Siper Talimi — Burç: koruması 5 kare daha uzağa ulaşır.<br>Saha Cerrahisi — Sığınak Tapınağı ve Şifa Duası %50 daha fazla iyileştirir.<br>Şifacının yemini — Hospitalye: +3 savunma. | Merhamet Eli (400 altın) [Sığınak Tapınağı] — Seç, sonra daha önce gördüğün bir araziye tıkla: 5 karo içindeki her yaralı kahraman canının %35 kadarını geri kazanır.<br>Koruyucu Mühür (350 altın) [Burç] — Seç, sonra daha önce gördüğün bir araziye tıkla: 30 saniye boyunca 5 karo içindeki kahramanlar her vuruştan %40 daha az hasar alır. |
| **Yaban** | Yaban kampı: 260 altın, 600 dayanıklılık. İksir satar ve kahramanları kasabadan uzakta burada dinlendirir · İz Sürücü toplar (maks 3)<br>Hayvan Ocağı: 280 altın, 700 dayanıklılık. Hayvan Bekçisi toplar (maks 3) | İz Sürücü — Avcı İşareti<br>Hayvan Bekçisi — Şahin Vuruşu, İz Sürme, Yoldaş Hayvan, Yoldaş Siperi, Şifalı Ot Yardımı | İsabetli uçuş — İz Sürücü: +4 saldırı.<br>İz Bilgisi — Kahramanlar şatodan %15 daha uzağı keşfeder.<br>Şifalı Otlar — Kasabanın hanları ve tapınağı yeniden tam hızda iyileştirir.<br>Canavar postları — Hayvan Bekçisi: +3 savunma. | Ormanın Gözü (200 altın) [Yaban kampı] — Seç, sonra şatonun (100 karo) ya da bir yaban kampının (60) menzilindeki bir noktaya tıkla: 10 karo içindeki arazi açığa çıkar ve 80 saniye boyunca canavarlarıyla birlikte görüş altında kalır.<br>Diken Seti (300 altın) [Hayvan Ocağı] — Seç, sonra daha önce gördüğün bir araziye tıkla: 40 saniye boyunca 5 karo içindeki canavarlar yarı hızda hareket eder. |
| **Ölümsüz** | Kemiklik: 350 altın, 900 dayanıklılık. Her 60 sn'de bir iskelet muhafız kaldırır, en fazla 3; her biri her 20 sn'de 6 altın tutar · Mezar Şövalyesi toplar (maks 3)<br>Kripta: 300 altın, 750 dayanıklılık. Ölüm Büyücüsü toplar (maks 3) | Mezar Şövalyesi — Kemik Zırh<br>Ölüm Büyücüsü — Solduran Mühür, Kemik Muhafız, Ruh Borcu | Ölümsüz zırh — Mezar Şövalyesi: +4 savunma.<br>Mezar Antlaşması — Çağrılan bir muhafızın bakım masrafı yarıya iner.<br>İlik Bağı — Kemiklik: bir muhafız daha barındırır.<br>Yasak kitaplar — Ölüm Büyücüsü: +5 saldırı. | Ölülerin Çağrısı (300 altın) [Kemiklik] — Seç, sonra kemikliğine tıkla: tuttuğu sayının üstüne hemen 2 muhafız kaldırır, 120 saniyeliğine. Diğerleri gibi bakım masrafı isterler.<br>Öte Dünya Perdesi (300 altın) [Kripta] — Seç, sonra daha önce gördüğün bir araziye tıkla: 5 karo içindeki her kahraman ve çağrılmış muhafız, 24 saniyeliğine canının %30 kadarı değerinde bir kalkan alır.<br>Ölüm Antlaşması (150 altın) [Kripta] — Seç, sonra görebildiğin bir kahramana tıkla: 120 saniye boyunca onu devirecek bir darbe, bir kereliğine canının %30 kadarıyla ayakta bırakır. O an hazine 300 altın daha öder; ödeyemezse kahraman düşer. |
| **Düzen** | Zabıta Konağı: 320 altın, 950 dayanıklılık. Mareşal toplar (maks 3)<br>Geçiş Karakolu: 260 altın, 600 dayanıklılık. Her 60sn'de 14 kare içindeki her bina için kasasına 3a geçiş parası alır · Vergi tahsildarları keselerini şatoya taşımak yerine burada teslim eder · Yol Bekçisi toplar (maks 3) | Mareşal — Kuşatma Düzeni, Toplanma Emri, Alarm Devriyesi<br>Yol Bekçisi — Kervan Muhafızı | Vergi Defterleri — Bir binanın kasası %50 daha fazla alır.<br>Yol Devriyeleri — Bir tahsildar %50 daha fazla taşır.<br>Daimi emirler — Mareşal: +3 saldırı.<br>Arbalet talimi — Yol Bekçisi: +4 saldırı. | Koruma Mührü (300 altın) [Zabıta Konağı] — Seç, sonra binalarından birine tıkla: 40 saniye boyunca canavarların saldırılarından %60 daha az hasar alır.<br>Gözcü Ağı (250 altın) [Geçiş Karakolu] — Seç, sonra şatonun (80 karo) ya da bir geçiş karakolunun (40) menzilindeki bir noktaya tıkla: 8 karo içindeki arazi açığa çıkar ve 60 saniye boyunca görüş altında kalır; noktanın 5 karo yakınındaki canavarlar %25 daha fazla hasar alır. |
| **Yiğitlik** | Savaş Salonu: 340 altın, 1000 dayanıklılık. 8 kare içindeki kahramanları eğitir: her 60sn'de kişi başı 8 deneyim · Yeminli Savaşçı toplar (maks 3)<br>Levazım Deposu: 280 altın, 700 dayanıklılık. İksir satar · 60a karşılığında hücum ikmali satar: bir kahramanın bir kalenin surlarına vuracağı sonraki 20 darbe 2 kat güçlü olur · Sancaktar toplar (maks 3) | Yeminli Savaşçı — Yaran Darbe, Surlara Hücum, Kan Çılgınlığı<br>Sancaktar — Yılmaz Nara | Savaş Talimi — Her öldürme kahramana %20 daha fazla deneyim kazandırır.<br>Ganimet Salonu — Her öldürme %15 daha fazla altın kazandırır.<br>Kan yemini — Yeminli Savaşçı: +5 saldırı.<br>Sancak muhafızı — Sancaktar: +3 savunma. | Savaş Beyi'nin Kutsaması (350 altın) [Savaş Salonu] — Seç, sonra daha önce gördüğün bir araziye tıkla: 30 saniye boyunca 5 karo içindeki kahramanlar %30 daha sert vurur.<br>Kuşatma Damgası (300 altın) [Levazım Deposu] — Seç, sonra daha önce gördüğün bir düşman kalesine tıkla: 40 saniye boyunca kahramanların ona saldırıları %50 daha fazla hasar verir. |
| **Gizem** | Akademi: 360 altın, 850 dayanıklılık. Büyü Kılıcı toplar (maks 3)<br>Tınlayan Kule: 300 altın, 650 dayanıklılık. Her 8sn'de 9 kare içindeki en yakın canavara 14 hasar verir · Bağlıyken Gök Gürültüsü Mührü'nü taşır: şatonun ya da bağlı bir kulenin 45 karo yakınında. İlkinden sonraki her bağlı kule mührün fiyatını %15 artırır · Tılsım Ustası toplar (maks 3) | Büyü Kılıcı — Yaran Işık, Faz Adımı, Rün Karşılığı<br>Tılsım Ustası — Rün Koruması | Ley Uyumu — Kraliyet büyüleri %20 daha ucuza mal olur.<br>Rün Bağı — Kahramanların etkin yetenekleri %15 daha erken yeniden hazır olur.<br>Rünlü kılıç ağzı — Büyü Kılıcı: +4 saldırı.<br>Odak kristali — Tılsım Ustası: +5 saldırı. | Yıldız Haritası (300 altın) [Akademi] — Seç, sonra haritada bilinen ya da bilinmeyen herhangi bir yere tıkla: noktanın 12 karo yakınındaki arazi açığa çıkar.<br>Gök Gürültüsü Mührü (350 altın) [Tınlayan Kule] — Seç, sonra bir tınlayan kulenin 30 karo yakınındaki daha önce gördüğün bir araziye tıkla: noktanın 3 karo yakınındaki her canavar tam canının %30 kadarını (adlı bir boss %10), en çok 200 kaybeder. Asla öldürmez: son darbe bir kahramanındır.<br>Gizemli Perde (200 altın) [Akademi] — Seç, sonra görebildiğin bir kahramana tıkla: 30 saniyeliğine canının %50 kadarı değerinde bir kalkan alır. |
| **Ticaret** | Tüccar Loncası: 360 altın, 900 dayanıklılık. Refakatçi toplar (maks 3)<br>Kervan Deposu: 280 altın, 750 dayanıklılık. Navlun Sözleşmeleri burada araştırılır: bir kervanın seferi %20 daha fazla kazandırır · Burası karakollarına şatodan daha yakınsa kervanlar yükünü burada boşaltır: tur, taşınan kareler için bu kasaya öder · İksir satar · Kervancı toplar (maks 3) | Refakatçi — Yük Muhafızı, Cebri Yürüyüş, Kafile Görevi<br>Kervancı — Yol İşareti | Ticaret Beratları — Bir kervanın gidiş dönüş seferi %20 daha fazla kazandırır.<br>Toptan Alım — Binalar %10 daha ucuza mal olur.<br>Kiralık çelik — Refakatçi: +3 savunma.<br>Yolda pişmiş — Kervancı: +3 savunma.<br>Navlun Sözleşmeleri — Bir kervanın gidiş dönüş seferi %20 daha kazandırır. | Altın Sözleşme (200 altın) [Tüccar Loncası] — Bas, hedef gerekmez: 60 saniye boyunca tahsildarların, kervanların ve kraliyet işçilerin bir canavarın darbesinden %75 daha az hasar alır.<br>Acil Aktarım (150 altın) [Kervan Deposu] — Bas, hedef gerekmez: yoldaki her tahsildar taşıdığını hemen hazineye teslim eder ve turuna devam eder. Ne kadar az taşırlarsa taşısınlar bedeli aynıdır. |
| **Zorbalık** | Mahkeme: 360 altın, 1000 dayanıklılık. Engizitör toplar (maks 3)<br>Haraç Dairesi: 300 altın, 800 dayanıklılık. Her 60sn'de 12 kare içindeki binaların kasalarına el koyar: hazine %85'ini alır · İnfazcı toplar (maks 3) | Engizitör — Dehşet Damgası, Demir Yemin<br>İnfazcı — Zincir Hükmü | Demir Haraç — Haraç Dairesi: el koyduğundan hiçbir şey kaybetmez.<br>Korku Saltanatı — Şato ve okçu kuleleri her darbeden %15 daha az hasar alır.<br>Gayret fermanı — Engizitör: +4 saldırı.<br>Ağır zincir zırh — İnfazcı: +4 savunma. | Zorbanın Fermanı (300 altın) [Mahkeme] — Bas, hedef gerekmez: 40 saniye boyunca şato ve bütün binaların canavarların saldırılarından %40 daha az hasar alır. O süre içinde dinlenen kahramanlar hızlarının %50 kadarıyla iyileşir: ferman durdukça kimse dinlenmez.<br>Savaş Vergisi (100 altın) [Haraç Dairesi] — Bas, hedef gerekmez: binalarının kasalarındaki her şey hemen ve eksiksiz hazineye gider. Sonraki 120 saniye boyunca kahramanların harcadığı ve yağmaladığından hazinenin payı olağanın yalnızca %50 kadarıdır.<br>Susturma Damgası (250 altın) [Mahkeme] — Seç, sonra daha önce gördüğün bir araziye tıkla: 30 saniye boyunca noktanın 2 karo yakınındaki canavarlar adamlarına darbeleriyle %50 daha az hasar verir ve aralarındaki adlı bir boss hiçbir yetenek kullanamaz (bir boss damgadan daha çabuk kurtulur). |
<!-- castle-paths-content:end -->
