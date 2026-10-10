---
title: "Harita ve Kampanya Editörleri"
---

Wayward Crown, özel seviyeler ve senaryolar oluşturmanıza olanak tanıyan yerleşik harita ve kampanya editörleri içerir.

---

## Harita Editörü

Ana menüdeki **Editör Araç Seti** düğmesi editörü yeni bir haritayla açar. Kaydedilen haritalar, ana menüdeki **Kampanyalar** düğmesinin açtığı harita yöneticisinin **Haritalar** sekmesinde listelenir, oynanır, düzenlenir, içe ve dışa aktarılır.

### Özellikler

- **Arazi Boyama** — Bir arazi türü seçip fırça ile haritaya boyayın (boyut 1 – 20) veya bir bölgeyi doldurun
- **Binalar ve birimler** — Oyuncu binaları, tacın kahramanları, Düşman Kaleleri, canavarlar ve hazine sandıkları yerleştirin, Kale'yi taşıyın veya silin. Editör yalnızca boş zemin ister: bir krallığın önce şato seviyesine, şato yoluna ya da bölümün iznine ihtiyaç duyacağı şeyler serbestçe yerleştirilir. Yol bir bina değil, arazilerden biridir
- **Rastgele Oluştur** — Başlangıç için rastgele bir harita oluşturun
- **Geri Al / Yinele** — En fazla 30 adım (Ctrl+Z / Ctrl+Y)
- **Harita Ayarları** — Boyut (kenar başına 100 – 1000 karo), ad, yazar ve diğer ayrıntılar, başlangıç altını ve bir zafer koşulu
- **Kaydet/Yükle** — Haritaları `maps/` dizinine kaydedin; Kapat, Esc ve Yeni kaydedilmemiş değişiklikleri atmadan önce sorar (Kaydet / At / İptal) ve hiç kaydedilmemiş bir seferi atmak klasörünü de siler
- **Nesneler…** — Kahraman sınıflarını, canavarları, binaları, kaleleri ve bossları nesne editöründe kendi içerik paketinizde düzenleyin. Düğme paketlerinizi ve **Yeni içerik paketi…** seçeneğini listeler; kaydedilmiş bir harita gerekmez. Paket kendi başına duran bir eklentidir; kaydetmek içeriği yeniden yükler, böylece tanımladıkları hemen yerleştirilebilir. Bir harita ya da kampanya bir paketi ancak üzerinde o paketten bir şeyle kaydedildiğinde gerekli kılar
- **Deneme oyunu** — Kaydedilmiş haritayı ya da düzenlenen bölümdeki kampanyayı, gerekli kıldığı içerik paketleriyle ve başka hiçbir içeriğiniz olmadan ayrı bir oyunda başlatır
- **Paneller** — Fırçalar ve haritanın kuralları (ya da kampanya), haritanın yanındaki sekmeli panellerdir: birini öbür tarafa ya da pencerenin dışına sürükleyin, kapatın ve **Paneller** ile geri getirin. Araziler, binalar, kaleler ve bosslar resimlerinden seçilir; editör ve açtığı pencereler (nesne editörü, tetikleyici editörü, harita ayrıntıları) ekranı kaplayacak şekilde büyütülebilir

Harita, yerleştirdiğiniz kahramanları ve canavarları saklar: oyun başladığında orada dururlar. Oyun sürerken başka kahramanlar işe alınır ve başka canavarlar doğar.

### Arazi Türleri

- Çayırlık, Orman, Dağ, Su, Çöl, Yol, Çamur, Bataklık, Kar, Tepeler, Çorak arazi, Çiçekli çayır

### Kayıt Formatı

Haritalar `maps/` dizininde JSON formatında saklanır ve şunları içerir:

- Arazi verileri (sıkıştırılmış bir NumPy dizisi)
- Yükseklik verileri
- Binalar, Düşman Kaleleri, hazine sandıkları ve yerleştirilen kahramanlar ile canavarlar
- Kale konumu
- Harita ayrıntıları, başlangıç altını ve zafer koşulu

---

## Kampanya Editörü

Kampanyalar, harita yöneticisinin **Kampanyalar** sekmesinde (ana menüdeki **Kampanyalar** düğmesi) oluşturulur, açılır, içe ve dışa aktarılır. Bir kampanyayı açmak harita editörünü bir kampanya paneliyle başlatır; böylece her seviyenin haritasını ve ayarlarını tek bir yerde düzenlersiniz.

### Özellikler

- **Seviye Sıralama** — Seviyeleri ok düğmeleriyle yukarı ve aşağı taşıyın
- **Zafer Koşulları** — Her seviye için zafer koşulları belirleyin; `destroy_building` için kale türü de buna dahildir
- **Hikaye Metni** — Giriş ve tamamlama metinlerini ayarlayın
- **Başlangıç Kaynakları** — Her seviye için başlangıç altınını belirleyin
- **Aktarma** — Önceki seviyeden altını, maceraperestleri ve araştırmayı koruyun
- **Bina Kısıtlamaları** — Oyuncunun kullanabileceği bina türlerini kısıtlayın
- **Tetikleyiciler** — Bir seviye için mesajları ve bina kilit açmalarını betikleyin (yalnızca kampanya seviyeleri)
- **Krallık alanları** — Seviyenin başlangıç şato seviyesi, süre sınırı, brifingin önerisi ve en çok iki isteğe bağlı buluntu
- **Ek hedefler ve yenilgiler** — Zorunlu ya da isteğe bağlı daha fazla zafer koşulu ve daha fazla kaybetme yolu (düşen kahramanlar, kaybedilen binalar ya da kervanlar), Ekle ve Kaldır düğmeli iki tabloda
- **Hedefin kaynağı** — Bir zafer hedefinin altında: boss haritaya mı yerleştirildi yoksa bir tetikleyici mi başlatıyor, kale türü oyunun mu yoksa bir eklentinin mi ve haritada kaç tane var; ek hedefin hedefi aynısını ipucunda söyler

### Zafer Koşulu Seçenekleri

Düzenleyiciler bunları kendi dilinizde, adlarıyla listeler; tablodaki tür, bir harita ya da sefer dosyasının sakladığı değerdir.

| Tür | Açıklama |
|-----|----------|
| `free` | Serbest mod, zafer koşulu yok |
| `destroy_enemy_buildings` | Tüm düşman ileri karakollarını yok edin |
| `survive_ticks` | Belirli bir süre boyunca hayatta kalın |
| `reach_gold` | Belirli miktarda altın biriktirin |
| `destroy_building` | Belirli bir türdeki ileri karakolu yok edin |
| `defend` | Kale'yi belirli bir süre savunun |
| `collect_chests` | Tüm hazine sandıklarını toplayın |
| `defeat_boss` | Haritaya yerleştirilen ya da bir tetikleyiciyle başlatılan adı olan bir boss'u yenin |
| `secure_trade` | Belirli sayıda kervan turunu tamamlatın ve tüm düşman ileri karakollarını yok edin |

### Kayıt Yapısı

```
campaigns/my_campaign/
├── campaign.json         # Campaign metadata
├── level1.json           # Level 1 map
├── level2.json           # Level 2 map
└── level3.json           # Level 3 map
```

---

## Özel İçerik Paylaşımı

- Harita ve kampanya klasörleri basitçe kopyalanarak ya da harita yöneticisinin dışa ve içe aktarma özelliğiyle paylaşılabilir
- Alınan haritaları ana menüden yüklemek için `maps/` dizinine yerleştirin
- Alınan kampanyaları ana menüde görmek için `campaigns/` dizinine yerleştirin
- Oyun Steam üzerinden çalışırken harita yöneticisindeki **Atölyede yayınla** haritalarından veya kampanyalarından birini Steam Atölyesi'ne koyar; abone olduklarınız listelerinde [Atölye] işaretiyle görünür. Bunları Steam güncel tuttuğu için düzenlenemez, yeniden adlandırılamaz ve silinemezler; **Kopyala** kendi haritanı oluşturur
- İçerik paketi kendi başına kurulur: paketi yayımlayın ya da ZIP dosyasını ayrıca paylaşın; onu kuran kişi, hiçbir harita olmadan sınıflarını, canavarlarını, binalarını ve kalelerini kendi oyunlarında bulur. Bir paketten bir şey yerleştiren harita ya da kampanya o eklentiyi gerektirir: önce paketi yayımlayın (yayımlama penceresi o zaman paketin Atölye öğesini gerekli öğe olarak önerir)
