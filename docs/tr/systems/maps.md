---
title: "Haritalar ve Arazi"
---

Oyun haritası izometrik 2:1 projeksiyonla oluşturulur ve birden fazla arazi türünü destekler.

---

## Harita Özellikleri

| Özellik | Değer |
|---------|-------|
| Varsayılan boyut | 1000 x 1000 karo |
| Ayarlanabilir aralık | 250 ~ 1000 karo |
| Karo boyutu | 256 piksel |
| Projeksiyon | İzometrik 2:1 (elmas) |

---

## Arazi Türleri

| Arazi | Geçilebilir | Hareket Maliyeti | Temel Yükseklik | Düşman Oluşumu |
|-------|-------------|------------------|-----------------|----------------|
| **Çayırlık** | Evet | 1 | 0 | Dev Sıçan, Haydut, Harpi |
| **Orman** | Evet | 2 | 0,5 | Slime, Zombi, Dev Kurt, Dev Örümcek, Karanlık Tarikatçı |
| **Dağ** | Evet | 3 | 5,0 | Goblin, İskelet, Ejderha, Ork Kabadayı, Goblin Okçu, Trol |
| **Su** | Hayır | -- | -1,0 | -- |
| **Kasaba** | Evet | 1 | 0 | -- |
| **Yol** | Evet | 1 | 0 | -- |
| **Bataklık** | Evet | 3 | -0,3 | -- |
| **Çöl** | Evet | 2 | 0,2 | Kum Hortlağı |
| **Çamur** | Evet | 2 | -0,1 | -- |
| **Kar** | Evet | 1 | 0,2 | Dev Sıçan, Haydut, Harpi |
| **Tepeler** | Evet | 1 | 1,6 | Dev Sıçan, Haydut, Harpi |
| **Çorak arazi** | Evet | 2 | 0,3 | Kum Hortlağı |
| **Çiçekli çayır** | Evet | 1 | 0 | Dev Sıçan, Haydut, Harpi |

:::tip[Hareket Maliyeti]
Düşük sayılar daha hızlı hareket anlamına gelir. Yol ve Kasaba en düşük hareket maliyetine (1) sahipken, Dağ ve Bataklık en yüksek maliyete (3) sahiptir. Yolları iyi kullanmak maceraperest seyahat verimliliğini büyük ölçüde artırabilir.
:::

---

## Savaş Sisi

Harita üç görünürlük katmanına sahiptir:

| Durum | Parlaklık | Açıklama |
|-------|-----------|----------|
| **Keşfedilmemiş** | 0 (tamamen karanlık) | Hiçbir maceraperest veya bina tarafından görülmemiş |
| **Keşfedilmiş** | 115 (koyu gri) | Daha önce görülmüş ama şu anda görüş alanında değil |
| **Görünür** | 255 (tamamen aydınlık) | Şu anda bir maceraperestin veya binanın görüş alanında |

**Ne, nerede çizilir.** Sizin olan her zaman çizilir: binalar, kahramanlar, köylüler, vergi tahsildarları, kervanlar ve ödül bayrakları, kimsenin görmediği yerde de. Bir in ya da antik kalıntı, herhangi bir parçası görüldüğü anda çizilir ve çizili kalır. O andan sonra kahramanlar da ini bilir ve kendiliklerinden üzerine gidebilir. Canavarlar yalnızca bir kahraman onları görürken çizilir. Bir boyutsal yarığın portalları, zeminleri görüldüğü anda mor ışık halkaları olarak çizilir.

### Görüş Kaynakları

| Kaynak | Görüş Menzili |
|--------|---------------|
| Kale | 30 karo |
| Maceraperest (temel) | 8 karo |
| Büyücü (menzilli) | 12 karo |
| Kolcu (menzilli) | 11 karo |
| Savunma binası (Ok Kulesi) | 16 karo |
| Normal bina | 7 karo |
| Düşman kalesi yapısı | 10 karo |

:::note[Menzilli Maceraperest Görüşü]
Büyücüler ve Kolcular tam olarak saldırı menzilleri kadar uzağı görür (12 ve 11 karo), böylece oyuncular saldırılan hedefleri görebilir.
:::

---

## Harita Oluşturma

Sandbox modu haritaları **Değer Gürültüsü** (Value Noise) algoritması kullanılarak rastgele oluşturulur:

1. Arazi gürültüsü oluştur -> arazi türlerini belirle
2. Yükseklik gürültüsü oluştur -> yükseklik farklılıklarını belirle
3. Kaleyi yerleştir -> haritanın orta yarısında rastgele bir noktada bir Kasaba alanı oluştur
4. Hazine sandıklarını dağıt -> vahşi doğaya max(10, 250 × W × H ÷ 1000²) sandık dağıt
5. Düşman kalelerini oluştur -> Kaleden uzağa yerleştir

---

## Hazine Sandıkları

| Özellik | Değer |
|---------|-------|
| Başlangıç sayısı | max(10, 250 × W × H ÷ 1000²) |
| Altın aralığı | 20 ~ 55 altın |
| Konum | Kasaba dışındaki geçilebilir alanlar |

Maceraperestler hazine sandıklarının üzerinden geçtiklerinde otomatik olarak toplarlar. "Hazine Duyusu" araştırma yeteneği ile altın miktarı +%50 artar. Açılmış bir sandık, kapağı arkaya devrik hâlde oyun zamanıyla iki dakika yerinde kalır, sonra kaybolur. İnşaata engel olmaz ve üzerine konan bina onu kaldırır.
