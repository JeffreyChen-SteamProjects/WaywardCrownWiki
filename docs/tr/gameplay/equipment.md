---
title: "Teçhizat ve Dükkanlar"
---

Maceraperestler, Kale yakınındaki dükkanlarda otomatik olarak teçhizat ve sarf malzeme satın alır.

---

## Teçhizat Sistemi

Maceraperestler **Demirci**'de silah ve zırh satın alabilir:

| Teçhizat | Seviye Başına Etki | Fiyat Formülü | Maks Seviye |
|----------|--------------------|---------------|-------------|
| **Silah** | +3 ATK / seviye | 100a × seviye | 3 (aynı seviyede Demirci gerektirir) |
| **Zırh** | +2 DEF / seviye | 100a × seviye | 3 (aynı seviyede Demirci gerektirir) |

:::note[Demirci Seviye Gereksinimi]
Sv.1 Demirci yalnızca Sv.1 teçhizat satabilir. Maceraperestlerinize daha iyi teçhizat vermek için Demirci'yi yükseltmeniz gerekir.
:::

### Kümülatif Teçhizat İstatistikleri

| Seviye | Silah ATK | Zırh DEF | Silah Fiyatı | Zırh Fiyatı |
|--------|-----------|----------|--------------|-------------|
| 1 | +3 | +2 | 100a | 100a |
| 2 | +6 | +4 | 200a | 200a |
| 3 | +9 | +6 | 300a | 300a |

---

## Sarf Malzemeler

### İksirler

| Öğe | Fiyat | Etki |
|-----|-------|------|
| **Şifa İksiri** | 100a | 40 HP yeniler |

- Maceraperestler en fazla **3** iksir taşıyabilir
- Dükkanlarda otomatik olarak yenilenir
- HP %50'nin altına düştüğünde kullanılır

### Hız İksiri

| Öğe | Fiyat | Etki |
|-----|-------|------|
| **Hız İksiri** | 200a | 60 tick boyunca hareket hızını artırır |

Yalnızca bir Pazar Sv.2'ye ulaştığında satılır; bir maceraperest en fazla 2 tane taşır.

### Ölüm Koruyucusu

| Öğe | Fiyat | Etki |
|-----|-------|------|
| **Ölüm Koruyucu Yüzük** | 500a | Bir ölümcül darbeyi engeller |

Yalnızca bir Pazar Sv.3'e ulaştığında satılır.

---

## Alışveriş Davranışı

Maceraperestler bir **Pazar** veya **Demirci**'nin 7 karo yakınında durduklarında otomatik olarak alışveriş yapar.

Pazarda, şu sırayla:

1. Yaralıysa yerinde bir şifa iksiri içer
2. Ölüm Koruyucu Yüzük satın alır (Pazar Sv.3)
3. Taşıdığı iksirleri yeniler (en fazla 3)
4. Hız İksiri satın alır (Pazar Sv.2, en fazla 2)

Demircide, karşılayabildikleri **bir sonraki** silah kademesini ve bir sonraki zırh kademesini satın alırlar; her ziyarette bir kademe, Demirci'nin seviyesine kadar.

**Yalnızca dükkânlar satar.** Şato, loncalar ve hanlar hiçbir şey satmaz: teçhizata ya da iksire ihtiyacı olan bir kahraman bir Demirciye ya da bir Pazara yürür (aşağıdaki *Krallığın altını* bölümüne bakın).

:::note[Vergi Geliri]
Maceraperestler altın harcadığında (teçhizat, iksir, eğitim) veya kazandığında (öldürmeler, sandıklar), miktarın **%20**'si hazinenin vergisidir: Vergi Artışı sırasında %30, Karaborsa sırasında hiç. Bu vergi, bir vergi tahsildarı şatoya taşıyana kadar altının harcandığı binanın kasasında bekler.
:::

---

## Krallığın altını

Her altının hesabı tutulur:

- **Para dükkâna gider**: kahramanlar yalnızca binanın kendisinde alışveriş yapar (şato hiçbir şey satmaz). Ödedikleri o binanın cirosudur ve hazine vergi payını alır: %20, vergi artışı sırasında %30, karaborsa sırasında hiç.
- **Kasalar**: hazinenin payı kendiliğinden gelmez. Altının harcandığı binanın kasasında bekler (bir kahramanın ganimetinin payı loncasında, bir pazarın dönemsel geliri kendi kasasında bekler). Bir kasa 600 altın alır; sığmayan kaybolur ve yıkılan bina kasasını kaybeder.
- **Vergi tahsildarı**: şatonun bir tahsildarı vardır; en az 40 altın bulunan en dolu kasaya yürür, 400'e kadar taşır ve şatoya getirir; orada hazine altını olur. Canavarlardan kaçar ve asla savaşmaz; öldürülürse taşıdığı altın orada bir sandık olarak kalır ve 300 tick sonra şatodan yeni bir tahsildar çıkar. Binaların, şatonun ve tahsildarın panelleri bekleyen ve taşınan miktarı gösterir. 2. seviye şato iki, 3. seviye şato üç tahsildar tutar; her biri ayrı bir kasaya gider. Alacak bir şeyi olmayan tahsildar şatonun içinde dinlenir; haritada görünmez ve hiçbir şey ona ulaşamaz. Gitmeye değer bir kasa olduğunda şatonun ön tarafından çıkar, kasayı boşaltmak için o binanın önünde bir süre durur ve eve dönünce yeniden içeri girer; bir canavardan kaçtıktan sonra bir süre içeride kalır. Şato tahsildar sayısını korur, kaybettiği her tahsildarın yerine yenisini alır ve şatonun panelinde her birinin nerede olduğunu söyleyen bir satır vardır. Bir **Vergi Dairesi** (280 altın; istenildiği kadar, her biri öncekinden pahalı) kendine ait bir tahsildar daha barındırır: orada yaşar, onun kapısından çıkar, topladığını oraya getirir (hemen hazineye geçer) ve kaybedildikten 60 saniye sonra orada yerine yenisi gelir.
- **Vergi ayarları**: bir binanın panelinden kasası tahsildarların turundan çıkarılabilir (o zaman dolar ve taşan kaybolur) ya da sıradaki boş tahsildardan, ne kadar az olursa olsun, önce onu boşaltması istenebilir; krallık özeti bir tahsildarın gitmesi için kasada en az ne kadar olması gerektiğini belirler (20, 40 ya da 150 altın). Tahsildarlar yollarını yine kendileri seçer, yanında canavar olan kasayı sonraya bırakır ve tehlikeden kaçar. Altın göstergesinin ipucu ve özet, krallığın altınını harcanabilir, kasalarda bekleyen, tahsildarların taşıdığı ve açık ödüllerde duran diye ayırır; özet ayrıca kahramanlar hiçbir binanın satmadığı teçhizat ya da iksir istediğinde haber verir, bir binanın paneli de şatoya uzaklığını gösterir. Genel bakış, tacın taşıyıcılarının ne kadar temkinli olduğunu da belirler: vergi tahsildarları, kervanlar ve ekibin işçileri bir canavardan 9, 6 ya da 4 karede kaçar; temkinliler daha az kaybedilir ve daha az getirir. Altın etiketinin ipucu, dönüş yolundaki kervanlardan beklenen tutarı ve kahramanların taşıdığını da gösterir. Vergi politikası ikisini birden ayarlar: Güvenli (yalnızca dolu kasalar, taşıyıcılar erken kaçar), Dengeli (olağan turlar) ya da Hırslı (küçük kasalar da, taşıyıcılar soğukkanlı kalır).
- **Ticaret karakolu ve kervan**: bir krallık parasını ödediği kadar ticaret karakolu kurabilir, her biri öncekinden pahalıdır; şatodan en az 45 kare uzakta ve şatodan yürünerek ulaşılabilen bir yerde olmalıdır. Kervanı, bir yük katırı, şatoya yürür, yükünü boşaltır ve geri döner; şatoya ulaşmış bir tur karakolun kasasına karakol ile şato arasındaki her kare için 0,6 altın getirir, yani uzaktaki karakol daha çok kazandırır ve kervanı daha uzun süre dışarıda bırakır. 2 tick'te bir kare, yol üzerinde her tick'te bir kare ilerler. Görüş alanındaki bir canavar onu yolun yakın ucuna gönderir ve canavar gidene kadar orada kalır, yanındaki canavar onu yaralar ve yeri size bildirilir; kaybedilen kervan 400 tick sonra yenilenir. 2. seviye bir şato gerektirir.
- **Ödüller aktarımdır**: bir ödül tam olarak içindekini öder. Zorluğun ve özelliklerin altın çarpanları yalnızca ganimet ve sandıklara uygulanır.
- **Bir kez alınır, sınıra kadar tazelenir**: her ekipman kademesi, yüzük ve kütüphanedeki her çalışma bir kez alınır; iksirler 3'e, hız iksirleri 2'ye kadar tazelenir.
- **Tayınlar**: iksiri olmayan ve almaya altını yetmeyen, dinlenen bir kahramana loncası bir iksir verir; en çok 600 tick'te bir.
- **Hizmet olarak dükkânlar**: pazar kendi seviyesine göre satış yapar (2. seviyeden itibaren hız iksirleri, 3. seviyeden itibaren yüzük), demirci kendi seviyesine kadar ekipman döver, kütüphane her seviye için bir eğitim verir ve han oda sayısı kadar kahraman ağırlar. Bir kahraman yalnızca kendisi için yeni bir şeyi olan dükkâna gider ve en yakınını seçer; 8 kare içinde canavar bulunan dükkânı 40 kare daha uzakmış gibi sayar. Dükkân paneli kahramanların orada ne kadar harcadığını, kimin yolda olduğunu ve son altı müşteriyi gösterir. Kahraman tezgâhın önüne gelmeden hiçbir şey ödenmez; bu yüzden yolda yıkılan, dolan ya da yükseltilen bir dükkân yarım kalmış bir alışveriş bırakmaz.
- **Defter**: oyun her akışın toplamını (ödüller, inşaat, araştırma, diriltme, hırsızlık; vergiler, ticaret, iadeler, yıkım, beklenmedik kazançlar; ödemeler, ganimet, sandıklar, yağma; ekipman, erzak, çalışma, boş zaman) son kayıtlar ve her binanın cirosuyla birlikte tutar ve oyunla kaydeder. Hazine, ödüller ve dükkânlar ayrı ayrı denk gelmelidir.
- **Krallık özeti**: Detaylar panelinin arkasında bir «Krallık» sekmesi bulunur. Hazineyi, türlerine göre gelir ve giderlerini, kasalarda ve tahsildarlarda bekleyeni, kahramanların kazandığını ve harcadığını, kervan turlarını ve kayıplarını, her dükkânın cirosunu, defterin son kayıtlarını ve dikkat gerektirenleri (yükseltilebilecek bir şato, dışarıda tahsildar olmaması, kaybedilmiş bir kervan, yakınında canavar olan bir dükkân, dolu bir kasa) gösterir. İçindeki adlar bağlantıdır; binayı ya da şatoyu seçer ve haritayı oraya taşır. *Bekleyen altın* başlığı altında altının nerede boş durduğunu, her biri o yere bağlantıyla söyler: tahsildarların dokunmaması söylenen en dolu kasa, her biri bir tahsildarın yola çıkacağından azını tutan kasalar ve iki dakikadır hiçbir kahramanın üstlenmediği en büyük ödül.
- **Kayıtlar**: Kayıtlar sekmesi (L tuşu) krallığın her kahramanını, loncasını, işini ve her binasının gelirini birer satırda, bir arama kutusuyla listeler. Kahramanlar boşta olanlara, ödül peşindekilere, yaralılara, ayrılmayı düşünenlere ve loncasızlara; loncalar yeri olanlara, dolu olanlara ve yakınında canavar olanlara; işler, tacın ekibinin ele aldığı sırayla, yapılan, yükseltilen, hasarlı binalara ve duran işlere; gelir, altın bulunan kasalara, tahsildarların turu dışındaki kasalara ve yakınında canavar olan dükkânlara daraltılabilir. Bir satıra tıklamak onu haritada gösterir, çift tıklamak ayrıntılarını açar. Kayıtlar emir vermez ve düşmana ait hiçbir şeyi listelemez.
- **Harita katmanları**: üst çubuktaki Katmanlar düğmesi (M tuşu) krallığın bildiklerini haritanın üstüne serer. İkmal, her dükkânı, hanı, tapınağı ve kütüphaneyi bir canavarın müşterileri kaçırdığı erimle çevreler. Yoldaki altın, her kasada bekleyeni yazar ve her tahsildarın yürüyüşünü, her kervanın yolunu çizer. İşler, ekibin işlerini ele aldığı sırayla numaralar. Bilinen tehditler, krallığın gördüğü inleri çevreler; baskın toplayan inden kaleye bir çizgi çeker. Büyü erimi, tacın büyülerinin nereden yapılabildiğini ve gizem yolunun kule ağını gösterir. Yeşil iyi, kehribar bakmaya değer, kırmızı dert demektir. Kimsenin görmediği bir in hiçbir katmanda yoktur ve açık bırakılan katmanlar hatırlanır.
- **Brifing ve kronik**: görev ekranı başlamadan önce brifing verir: hikâye, neyin kazandırıp neyin kaybettirdiği, nelerin inşa edilebileceği ve seviyenin önerisi. Kronik sekmesi bu brifingi ve sonrasında bildirilenleri en yeniden eskiye saklar: senaryo önerileri, görülen bir in, hiçbir kahramanın almadığı bir ödül (nedeni ve yetecek ödülle), başı dertte bir kervan, kaybedilen bir vergi tahsildarı ya da bina, taktik değiştiren ya da düşen bir boss. Her kaydın zamanı ve haritayı oraya götüren bir bağlantısı vardır; aynı şeyin tekrarı yeniden söylenmez, kendi kaydında sayılır ve dolu bir kronik (60 kayıt) en önemsizlerin en eskisini bırakır. Yeni kayıtlar oyunu duraklatmadan ikişer ikişer açılır. Bir ayar, önerilerin ve küçük haberlerin açılmasını kapatır: kayıplar ve bosslar yine görünür ve her şey yine yazılır. Vakayiname tek bir konuda tutulabilir (tehditler, kahramanlar, altın ya da taç ve öğütler); seçim hatırlanır.
- **Sonuçlar**: bir oyun kazanılarak ya da kaybedilerek bittiğinde, sonuç ekranı nedenini söyler ve hedefi, adı olan her düşmanı akıbetiyle, işe alınan, kaybedilen ve hâlâ ayakta olan kahramanları, hazinenin türlere göre gelir ve giderini, kervan ve vergi tahsildarı kayıplarını, öldürülen canavarları, yıkılan inleri, ödülleri, binaları ve oyun süresini sıralar. En fazla üç kahramanı hatırlar: en çok yükseleni, en çok öldüreni ve düşenlerin en iyisini. Kazanılan bir seviye üç işaretle değerlendirilir; her biri sayılarıyla yalın bir cümledir (hedefe ulaşıldı; dört kahramandan en fazla biri kaybedildi; hiçbir bina kaybedilmedi); hiçbiri hızla ilgili değildir. Oradan: sonraki seviye, aynı seviye yeniden, menü ya da yenilgiden sonra haritaya bir bakış. Özet, ayarların yanındaki `recaps` klasörüne metin dosyası olarak kaydedilebilir. Demonun hikâyesini bitirmek, şu an açık olanları ve tam oyun için planlananları da ekler.
- **İsteğe bağlı buluntular**: bir seviye bulunmaya değer en çok iki şey saklayabilir; hiçbiri kazanmak için gerekli değildir. Canavarlarca kuşatılmış bir ikmal kolu bulunduktan sonra altı dakika dayanır; kuşatanlar ölmüşken ona ulaşan bir kahraman hazineye 300 altınlık erzak getirir. Bir zulanın kendi türünden iki kat dayanıklı bir bekçisi vardır: taç ona bir «Öldür» ödülü asar ve 400 altınlık sandık kahramanlarındır. Baskın göndermeyen bir inin altında hazine yatar: ini yıkmak 500 altınlık bir sandık bırakır. Yerleri görülene kadar hiçbir şey söylemezler; sonra kronik onları bildirir, Kronik sekmesindeki «İsteğe bağlı» listesi bağlantılarla izler ve sonuç ekranı nasıl bittiklerini söyler. Demonun üç görevinde bir, bir ve iki tane vardır.
- **Zorluk ve toparlanma**: kolay ve zor sayıları değiştirir, düşmanların canını asla değiştirmez: her in baskınında bir akıncı az ya da iki fazla olur, bir senaryo dalgası boyutunun %75'i ya da %125'i kadardır ve bir seviye altınının %125'i ya da %85'i ile başlar; görev ekranı bunları yazar. Demonun seviyeleri haritalarında dolaşanlar için bir kadro belirler (balçık, dev sıçan, goblin, goblin okçu, ulu kurt, haydut, ork zorbası, trol) ve kendi kuvvetini getiren rastgele olayları hiç çekmez, çünkü baskınları duyurulur. Loncası kalmayan ve yenisi için altını olmayan bir krallığa taç aradaki farkı verir, en çok beş dakikada bir; bir seviye de Esc menüsünden her an yeniden başlatılabilir.
- **Görülen ve duyulan şehir yaşamı**: bir kahramanın iksir ya da silah aldığı, yatak ya da ders için ödeme yaptığı, bir vergi tahsildarının kasayı boşalttığı ya da vergileri teslim ettiği, bir kervanın ödeme aldığı, bir acemi katıldığı, seviye kazanıldığı, bir binanın yükseltildiği ya da onarıldığı, bir sandığın açıldığı ya da bir şeyin bulunduğu yerin üzerinde küçük bir simge yükselir. Her birinin kendi kısa sesi vardır: görünümden uzaklaştıkça kısılır, aynı anda en çok üç tane çalar ve aynı ses art arda çalmaz. Baskın toplayan bir in, baskın yola çıkana kadar haritada atan kırmızı bir halka ve bir boru, mini haritada yanıp sönen bir çerçeve taşır; boru, savaş davulları ve boss her yerden duyulur. Efekt ses seviyesi sıfırken simgeler yine her şeyi anlatır. Sesleri `tools/soundgen.py` sentezler, simgeleri grafik üreteci çizer; hiçbir şey kaydedilmiş ya da örneklenmiş değildir.
- **Kahramanlar yanıt verir**: bir kahramanı seçmek, sınıfının sesiyle kısa bir yanıt çalar ve söylediğini panelinin en üstüne yazar. Yanıt kahramanın durumuna göre değişir: ağır yaralı ya da eve kaçıyor, savaşıyor, bir ödüle gidiyor, içeride dinleniyor, duvar onarıyor, erzağı ya da uykusu az, ya da hazır; hazırken her sınıfın kendi selamı vardır. En çok 1,5 saniyede bir yanıt gelir ve ses kapalıyken de satır oradadır.
- **Her birimin bir sesi var**: bir kahraman haline göre yanıt verdiği gibi, bir canavar, bir vergi tahsildarı, bir kervan ve bir köylü de tıklamaya kendi türünün sesiyle yanıt verir ve haritada yürüyen her şey düştüğünde duyulur. Bir kahraman ve tacın diğer insanları (vergi tahsildarları, kervanlar, tacın işçileri, yıkılan bir evin köylüleri) görüş nerede olursa olsun duyulur; bir canavar görüşten uzaklaştıkça kısılır, aynı tür en fazla iki saniyede bir duyulur ve bu seslerden en fazla ikisi üst üste biner. Hiçbir birim sesi bir saniyeden kısa değildir.
- **Müzik**: menünün ve oyunun kendi parçaları vardır ve karışık sırayla çalınır: herhangi biri ilk parça olabilir ve her parça, biri tekrarlanmadan önce bir kez çalar. Adı olan bir boss sahadayken onun müziği çalar, boss düşünce oyunun müziği geri gelir; düşen kalenin de kendi müziği vardır.
- **Haritada görünür**: mahsur kalmış bir ikmal kolunun arabası, bir tekerleği çıkmış ve yükü yarı boşaltılmış hâlde, yeri keşfedildiği andan kola ulaşılana ya da kol kaybedilene kadar orada durur; boss'un adının ve can çubuğunun üstünde boynuzlu kafatası nişanı vardır. İkisi de her iki çizim yolunda aynı görünür. Reis Gıcırdiş'in kendine özgü bir görünümü var: boynuzlu miğfer, kırmızı kalkan, çift ağızlı balta ve sırtında savaş çetesinin sancağı.
