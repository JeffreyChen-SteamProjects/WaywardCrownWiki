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
