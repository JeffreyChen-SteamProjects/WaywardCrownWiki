---
title: "Yapımcı eğitimi"
---

Her şablon **Yaratıcı ve Steam Atölyesi** içinde (ana menü, harita yöneticisi ya da eklenti yöneticisi) başlar ve **Yeni proje** adımından özel bir Atölye öğesine aynı yoldan gider. Yalnızca son adım Steam ister.

## Ortak adımlar

1. **Yeni proje**: bir şablon, bir ad ve bir klasör seçin. Pencere bir şey yazmadan önce projenin nereye gideceğini gösterir.
2. **Projeyi düzenle**: bir eklenti eklenti düzenleyicisinde açılır; bir harita ya da kampanya **Arazi / kampanya düzenleyicisini aç** ile, yalnızca projenin gerektirdiklerini yükleyen ayrı bir süreçte açılır. Sonraki adımdan önce kaydedin: denetimler, denemeler ve yayımlama kaydedilmiş dosyaları kullanır.
3. **İçeriği doğrulama**: her sorun nerede olduğunu söyler; çift tıklamak düzenleyiciyi orada açar.
4. **Oyun testi**: yalnızca bu proje ve gerektirdikleriyle ayrı bir oyun. Raporu neyin yüklendiğini ve çalışırken tik süresini, belleği ve sprite atlasını iyiden çok ağıra derecelendirerek listeler.
5. **Dışa aktar…**: aynı proje kimliğiyle bir ZIP ya da klasör; saklamak ya da paylaşmak için.
6. **Atölyede yayınla**: Steam açıkken ilk deneme için **Gizli** seçin, ardından **Kontrol et ve gözden geçir** ve **Yayını gönder**. Yayımlamak yüklemeyi sınamaz: öğeyi **Atölyeye Göz Atın** içinde bulun, **Abone ol** kullanın ve kullanılabilir olana dek **Abonelikler** içinde izleyin.

## Harita

Şablon; bir kalesi, iki kare doğusunda 100 altınlık bir sandığı, 500 başlangıç altını olan ve sandıkları toplayınca kazanılan 32×32 bir haritadır.

1. Arazi düzenleyicisinde araziyi boyayın, yapıları, kaleleri ve sandıkları yerleştirin, sonra kaydedin.
2. **İçeriği doğrulama**, kahramanların kaleden ulaşamadığı bir kale, sandık ya da patron için uyarır.
3. Sürüm: yayımladığınız her değişiklikte **Proje versiyonu** değerini yükseltin. Eski sürümle yapılan kayıtlar onun bir kopyasını saklar.

## Kampanya

Şablon, her biri aynı kale ve sandıkla kendi haritasına sahip iki bölümdür; kampanya dosyası onları sıralar ve her birine bir başlık, hikâye metni ve başlangıç altını verir.

1. Bölüm sırasını, zaferleri, hikâye metnini, aktarılanları ve tetikleyicileri ayarlamak için arazi düzenleyicisinde kampanya panelini açın.
2. **Oyun testi** herhangi bir bölümden başlayabilir.
3. Bağımlılıklar: bir bölüm bir eklentinin birimlerini kullanıyorsa, o eklentinin projesini **Bağımlılıklar** içine `>=1.0.0, <2.0.0` gibi bir sürüm aralığıyla ekleyin.

## Eklenti

Şablonda bir kahraman sınıfı, bir düşman, sınıfı toplayan bir yapı, düşmanı gönderen bir kale, bir yetenek, bir araştırma, bir olay, adı olan bir patron, bir kare görünümü ve bir İngilizce dil dosyası vardır; hepsi projenin kendi ad alanındadır.

1. **Nesneler** sekmesinde düzenleyin. Çubuk bir tür seçer; her tanım, oyunun ona vereceği ad ve resimle listelenir ve seçili olan önizlenir (yürüyen birim yürür). **Yeni…** bir tanımı neyi temel aldığına ve adına göre ekler; resmi ve sesi kendi satırlarında seçilir ya da içe aktarılır; özellik formu temel tanımdan alınan değerleri gri gösterir ve oyunun sınırları dışındaki bir değeri hemen işaretler. **Gelişmiş**, ID ile ekleme satırını ve tanımın JSON'unu gösterir. Ad, eklentinin her dilinde ayrı verilir; altındaki satırlarda (**Dil ekle** eklentiye bir dil daha verir). Bir şato yolunun etkileri ve uzmanlıkları için tabloları, öteki metinleri için satırları vardır.
2. Varlıklar: **Varlıklar** sekmesi üzerine bırakılan resim dosyalarını alır ve her birini boyut ve bellek sınırlarıyla karşılaştırır. Şablonun kare görünümü örnek resim olarak `preview.png` kullanır; onu orada değiştirin.
3. Geçersiz kılmalar: **Oyundan kopyala…**, oyunun bir karakterinin tam kopyasını kendi kimliğinizle ekler; kopya, kullanıldığı yerde aslının yerini alır. Yerleşik bir kimlikli tanım (örneğin tabanı `SLIME` olan `SLIME`) eklenti açıkken oyunun kendi balçığını değiştirir; hangi eklentinin geçersiz kılmasının kazandığını **İçerik profilleri** gösterir.
4. Sürümler: **Proje versiyonu** projenin kendi sürümüdür; **Desteklenen oyun versiyonları** kabul ettiği oyun sürümleri aralığıdır (`*` hepsi için; bir geliştirme derlemesi yalnızca `*` kabul eder).

## Baş düşman eğitimi (eklenti + iki bölümlü sefer)

Şablon, bir eklenti ve onu gerektiren iki bölümlük bir kampanya içeren bir klasördür; ikinci bölüm eklentinin adı olan patronunu yenerek kazanılır.

1. Kampanyanın **Bağımlılıklar** alanı eklentinin projesini ve sürümünü verir, bu yüzden deneme eklentiyi de yanında götürür.
2. Önce eklentiyi, sonra kampanyayı yayımlayın: yayımlama penceresi eklentinin Atölye öğesini gerekli öğe olarak önerir.
3. Her değişiklikte eklentinin **Proje versiyonu** değerini yükseltin; kampanyanın aralığını onu kabul edecek genişlikte tutun.

## Krallık görevi (tek seviye: brifing, ödüller, dalgalar, bir boss)

Şablon; brifing, kasaba, in, tacın Keşfet, Öldür ve Savun bayrakları, duyurulan iki dalga, adı olan bir patron ve isteğe bağlı bir buluntu içeren tek bir krallık bölümüdür. Kampanya panelinde bölüm bölüm parçalarına ayırın, sonra ortak adımları izleyin.

## Frostfang örneği (bitmiş bir içerik paketi ve haritası)

Şablon, söküp incelenecek bitmiş bir örnektir: bir kahraman sınıfı (Ayaz Muhafızı), bir canavar (Kırağı Yetisi), sınıfı toplayan salon, canavarın geldiği in, iki yetenek, bir araştırma ve adlı bir boss içeren, her birinin kendi resmi ve sesi olan bir içerik paketi ile bu paketi gerektiren ve boss yenilerek kazanılan bir harita. Aynı pencere, diğer Atölye kategorileri için de bitmiş birer örnek sunar; her biri **Örnek: <kategori>** adıyla yer alır (aralarında bir harita, bir kampanya, bir hikâye, bir dizi meydan okuma ve araştırma, etkinlik ve dil paketleri vardır): oynamak, incelemek ve değiştirmek için kendi projeniz olarak kopyalanır.

1. Haritayı arazi editöründe açın ve **Nesneler…** düğmesine basarak her tanımın oyundaki hangi şeyi temel aldığını görün; bir sayıyı ya da adı değiştirin, kaydedin ve sonucu haritaya yerleştirin.
2. **Deneme oyunu** düğmesine basarak haritayı yalnızca bu paketle oynayın.
3. Önce paketi, sonra haritayı yayımlayın: yayımlama penceresi paketin Atölye öğesini gerekli öğe olarak önerir.

## Şablonlarda asla bulunmayanlar

Bir şablonda gerçek bir Atölye öğe kimliği, bir Steam hesabı ya da mutlak bir yol bulunmaz: proje kimlikleri bilgisayarınızda yeniden oluşturulur ve her dosya projeye göre adlandırılır.

## İsteğe bağlı harabe verileri

Haritalar ve sefer bölümleri, `relics` yeteneğiyle en fazla iki `relics` girdisi kabul eder. Her girdinin benzersiz bir `id` değeri, `ancient_beacon`, `sealed_tomb` veya `lost_station` türü ve mevcut bir binanın `objective_id` değeriyle eşleşen `target` değeri vardır. Sabit seçenekler en fazla iki karara izin verir; keyfi betikler ve döngülü dallar reddedilir. Keşif tek başına ücret almaz veya süre başlatmaz. Kayıtlar kabul edilen seçimleri, masrafları, iadeleri ve tek seferlik ödülleri korur.

Prototip alanı `type: BEACON` gerektirir.

## İsteğe bağlı goblin ikmali

Harita ve bölümler `lair_expansion` yeteneğini ve aynı adlı en fazla dört planlık listeyi belirtebilir. Her plan `id` ve mevcut goblin çadırını benzersiz `objective_id` ile gösteren `target` gerektirir. Taşıyıcı gerçekten gelmeli ve yaşayan işçi yerinde inşa etmelidir. Konvoy, refakatçiler, savunucular ve baskınlar sonlu bütçeyi paylaşır: kaynak başına en fazla dört tur ve 64 yeni birim. Karakol kaybı çıkmamış baskını geciktirip zayıflatır; ana üs yıkılırsa yeni üretim durur ama yaşayan birimler ve isteğe bağlı karakollar kalır. Karakollar zafer için gereken ana üsleri artırmaz. Plansız eski takvim sürer. Taşıyıcılar özel sandıklar, animasyonlar ve sesler kullanır; yalnızca atanmış konvoylarda görünür. Keşiften sonra hareket eden taşıyıcıya ödül konabilir. Ölümü o yükü iptal eder ve üretimi geciktirir; sağ kalan muhafızlar savaşta kalır. Yük ve ödül birer kez sonuçlandırılır; iptalde normal iade kuralları uygulanır. Karakolların iskele, tamamlanmış ikmal sundurması ve yıkıntı görselleri ayrıdır. Yaşayan işçi saldırılabilir alanı inşa eder; tamamlanmadan yeni savunucu üretilmez. Karakolun yıkılması çıkmamış saldırıları geciktirir ve toplanmayı ana yuvaya taşır. Ana yuvanın yıkılması üretimi durdurur ama sağ kalan birlikler ve sahipsiz karakollar kalır. Her kaynak en fazla bir dekoratif yıkıntı tutar; savunucu veya zafer hedefi eklemez.

Yuva genişlemesi formu harita ve kampanyalarda ortaktır: dört Goblin Çadırına kadar kaynak, koruma, hazırlık, teslim, inşaat, toplanma ve bekleme süreleri, döngüler, ortak bütçe, muhafızlar ve kaynak başına sekiz yasak dikdörtgen. Süreler 0,2 adımlı oyun saniyesidir. Uygula taslağı günceller; iptal değerleri korur. Harita kaynaklarını boşaltmak genişlemeyi kapatır. Seviyedeki açık kapatma haritadan önceliklidir; aksi halde boş seviye listesi harita ayarlarını devralır. Yinelenen veya eksik kaynaklar ile harita dışı bölgeler kaydetmeden önce reddedilir.

Ortak harita karakol sınırı birden dörde ayarlanır. Yeni alanı finanse eden konvoy çıkmadan yer ayırır; sınır dolunca diğer kaynaklar birlik çıkarmadan veya baskın biriktirmeden bekler. Yaşayan sahipsiz karakol yıkılana kadar yerini tutar.

Uyarılı canavar ve BOSS becerilerinde isteğe bağlı cast_range (1–32 kare) hedefi seçer; radius isabet alanıdır. Büyücü ölürse uyarı iptal edilir.

Düşman ikmal istihbaratı yalnızca gözlenen noktaları ve alanları gösterir. Ana yuvanın üretim, sağlık, hazine ve savunucuları, karakol aşaması/ilerlemesi ve konvoy konumları ayrı gözlem saatleri tutar. Görüş dışında son değer kalır; gizli inşaat veya yıkım bilinen görüntüyü değiştirmez. Yeniden keşif günceller. Rota en fazla on altı gözlenmiş nokta tutar. Yükleme sonrası bildirim tekrarlanmaz; brifing sonlu bütçeye karşı dört stratejiyi açıklar.

Serbest oyunda sonlu goblin çadırı genişlemesi isteğe bağlıdır ve başlangıçta kapalıdır. Karma veya goblin oyunları seçilen yuva sayısından bir yeri çadıra ayırır ve en fazla dört mevcut çadırı bağlar; toplam artmaz. Diğer ırklara yeni kaynak eklenmez. Seferler yazar ayarlarını kullanır.

İskele, depo ve harabe ayrı siluetler ve hareketli kumaş taşır; azaltılmış hareket kumaşı durdurur. Kurye yalnızca gerçek çalışma ilerlerken çekiç kullanır. Konvoy keşfi ve gözlenen inşaat, tamamlanma ve harabe kendi simge ve seslerine sahiptir. Gizli değişimler ve yükleme bildirimleri tekrarlamaz. Küçük yazar formları ve istihbarat kaydırılabilir; bilgi paneli klavyeyle de kaydırılır.
