---
title: "Görev Sistemi"
---

Görevler, maceraperest eylemlerini yönlendirmenin temel aracıdır. Haritaya görev bayrakları yerleştirin ve maceraperestleri belirli bir konuma çekmek için bir ödül belirleyin.

---

## Görev Türleri

| Tür | Varsayılan Ödül | Tehlike | Şan | Etki |
|-----|-----------------|---------|-----|------|
| **Keşif** | 200a | 0.2 | 0.3 | Maceraperestler hedef konuma gider, yol boyunca savaş sisini dağıtır; bayrak yürüyerek ulaşılabilen bir yere konmalıdır |
| **Öldürme** | 200a | 0.8 | 0.9 | Belirlenmiş bir hedefi (düşman veya Düşman Kalesi) yok eder |
| **Savunma** | 200a | 0.5 | 0.6 | Zamanlayıcı dolana kadar hedef binanın çevresinde devriye gezer |
| **Uyarı** | 50a ücret | — | — | Bir noktayı yasak bölge olarak işaretler: hiç kabul edilmez ve ödeme yapılmaz; 8. seviyenin altındaki kahramanlar çevresindeki 25 karo içindeki her şeyden uzak durur |

### Yerleştirme, artırma ve iptal

- Öldürme görevi bir düşmana veya bir Düşman Kalesine, Savunma görevi ise binalarınızdan birine veya Kaleye yerleştirilmelidir
- Verilmiş bir görevin ödülü +100a veya +500a artırılabilir
- İptal etmek ödülü iade eder; nöbeti başlamış bir Savunma görevi hariç

---

## Maceraperestler Görevleri Nasıl Seçer

Maceraperestler **kişiliklerine** ve **görev özelliklerine** göre çekicilik hesaplar:

```
Çekicilik = Ödül × Açgözlülük
          + Şan × Şeref
          - Tehlike × Güvenlik
          + Keşif Bonusu × Merak
          - Mesafe Cezası
          - Düşük HP Cezası
```

Ödüller ve mesafe maceraperestin seviyesine göre ölçeklenir ve bazı görevler doğrudan reddedilir (seviye × 20 altından düşük bir ödül, bir Uyarı işareti veya 8. seviyenin altındaki kahramanlar için bir uyarı bölgesi içindeki görev). Formülün tamamı [Maceraperestler](adventurers.md) sayfasındadır.

:::tip[Pratik İpuçları]
- **Kolcular** yüksek meraka sahiptir ve Keşif Görevleri için en uygunudur
- **Savaşçılar** yüksek şerefe sahiptir ve Öldürme Görevleri için en uygunudur
- **Muhafızlar** asla görev almaz: binalarınızın çevresinde devriye gezer ve saldırıya uğrayan binaya koşarlar
- Ödülü artırmak isteksiz maceraperestleri bir görevi kabul etmeye ikna edebilir
:::

---

## Savunma Görevi Mekanikleri

Savunma Görevleri, maceraperestlerin hedefin yakınında **sürekli devriye gezmesini** gerektirir:

| Ayar | Değer |
|------|-------|
| Gerekli devriye süresi | 60 tick |
| Yol yeniden hesaplama aralığı | Her 12 tick |

Bir Savunma Görevini kabul ettikten sonra maceraperest hedefin yakınında ileri geri devriye gezer. Yeterli devriye süresi biriktiğinde görev tamamlanır: nöbet yerindeki kahramanlar ödülü paylaşır ve nöbet sırasında bir düşman görüş alanına girdiyse her biri 25 XP kazanır.

---

## Öldürme Görevi Mekanikleri

Öldürme Görevleri **belirli bir hedef** belirler:

- Belirli bir düşman olabilir
- Bir Düşman Kalesi olabilir

Hedef yok edildiğinde görev otomatik olarak tamamlanır. Görevi kabul eden maceraperestler hedefin konumuna gitmeyi öncelikli olarak hedefler.

- Ödül, hedefin 20 karo çevresindeki, görevi üstlenmiş kahramanlar arasında eşit olarak bölünür ve her biri 30 XP kazanır; hiçbir özellik ödülü artırmaz
- Bir Düşman Kalesine karşı maceraperestler önce Kale tarafında yaklaşık 22 karo uzakta toplanır ve (kalenin büyüklüğüne göre) 2–5 tanesi vardığında ya da ilk maceraperest ödülü aldıktan 120 tick sonra birlikte saldırır

---

## Strateji İpuçları

1. **Oyunun başlarında Keşif Görevleri ile başlayın** — düşmanları ve kaynakları bulmak için savaş sisini dağıtmanız gerekir
2. **Düşman Kaleleri yakınına Öldürme Görevleri yerleştirin** — maceraperestleri tehditleri yok etmeye yönlendirin
3. **Önemli binaların yakınına Savunma Görevleri yerleştirin** — bunları diğer maceracılar alır; Muhafızlar zaten orada devriye gezer
4. **Ödülleri maceraperest kişiliğine göre ayarlayın** — her görev için fazla ödeme yapmanız gerekmez

---

## Ödül kuralları

Ödül, asıldığı andan itibaren ilanın içinde durur:

- **Süre**: bir ödül 1, 3 veya 5 dakikalık süreyle asılabilir. Süre dolunca ödenmemiş ödül hazineye döner.
- **İadeler**: iptal etmek ödülü geri verir; nöbeti başlamış bir savunma ödülü hariç. Hedefi ortadan kalkan ve ödenecek kimsesi olmayan ödül de geri döner. Bir bayrak haritadaki sağ tık menüsünden ya da seçildiğinde kendi panelindeki düğmeyle kaldırılır; ikisi de neyin geri geldiğini söyler. İptal edilen bir ödüle kahramanlar zaten yürüyorsa, geri gelenin onda biri yol parası olarak onlara eşit paylarla gider.
- **Kime ödenir**: keşif ödülü oraya varan kahramana ödenir; av ödülü, öldürme yerinin yakınındaki üstlenenler arasında eşit paylaşılır; savunma ödülü, nöbet yerindeki üstlenenler arasında paylaşılır. Ölü bir kahramana asla ödeme yapılmaz. İşin yakınında olup son 30 saniyede bir başkasını iyileştiren, koruyan ya da onun yerine duran kahraman da onlarla birlikte pay alır.
- **İtibar emek ister**: altın her zaman ödenir, ama itibar ve deneyim yalnızca asıldığında keşfedilmemiş olan arazi, bir öldürme ya da bir düşmanın görüş alanına girdiği nöbet için verilir.
- **Yoldaşlık**: kahramanlar birinin zaten üstlendiği keşif ödülünü bırakır, paylaşılan ödülü kendi payı olarak sayar ve başkaları katıldıkça bir kaleyi daha az korkutucu bulur.
- **Seferler**: bir kaleye asılan av ödülü, ekibi önce şato tarafındaki toplanma noktasında toplar. Yeterli kahraman gelince ya da 120 tick sonra yola çıkar; yalnız kalan gönüllü kaleye tek başına girmeyi göze alırsa devam eder, yoksa ödülden vazgeçer; toplanma sayısından bir fazla kahraman alır, daha fazlasını almaz; iksiri az olan kahraman alabiliyorsa önce satın alır; tamamı düşen ya da eve dönen ekip yeniden toplanır. Ödül paneli kimlerin toplandığını, diğerlerinin ne kadar bekleneceğini ve tahmini şansı gösterir.
- **Tehlike**: av ödülleri, görülmüş bir kalenin yanındaki keşif ödülleri ve ücretsiz bir kale yürüyüşü, her kahramanın hazırlığına (saldırı, can, iksirler, zırh, ödülü zaten almış kahramanlar ve işin bir handan ya da şatodan ne kadar uzak olduğu) göre tartılır. Cesur kahramanlar temkinlilerden daha kötü şansları kabul eder ve hiçbir ödül tehlikeli bir işi daha güvenli yapmaz. Çekinen bir kahraman fikrini neyin değiştireceğini söyler (alabileceği ya da bulamadığı iksirler, işe daha yakın bir han, ödülde bir kahraman daha) ve bu olunca gider. Ödülü olan bir kahraman ona ulaşan her şeyle savaşır, ama başka bir şeyin peşine düşmeden önce ödüle döner ve şansı çöken tehlikeli işten vazgeçer.
- **Kurtarma**: kurtarma ödülü bir vergi tahsildarına ya da kervana asılır ve onu izler. Ödülü alan kahramanlar yanına yürür ve yanında kalır; refakatçisi varken canavarlardan kaçmayı bırakır ve onlar savaşırken işine devam eder. Yolda 20 tick boyunca eşlik edildikten sonra şatoda (kervan: ya da ticaret karakolunda) durduğunda ve 8 kare içinde canavar yoksa, ödül yanındaki sahipleri arasında eşit paylaşılır; henüz yola çıkmamış birinin yanında beklemek sayılmaz. Yalnızca yaralıysa ya da bir canavar görüş alanına girdiyse itibar ve deneyim kazandırır; kaybedilirse ödül geri döner. Bir vergi tahsildarına ya da kervana çift tıklamak bu ödülü asar.
- **Asma paneli**: hazinenin şimdi ne ödediğini ve haritayı işaret ederken ödülün neyi hedefleyeceğini gösterir. Bir tıklamanın birkaç şeyi kastedebileceği yerde (öldürme ödülü için bir noktaya üşüşmüş canavarlar, kurtarma ödülü için taşıyıcılar, bir kahramana yönelen büyü için imlecin altındaki birkaç yaralı kahraman) bunların listesi çıkar ve ödül ya da büyü seçilene gider.
- **Bahşedilen ödüller**: bir harita veya sefer, `post_bounty` tetikleyici eylemiyle ödül asabilir; hazineye maliyeti yoktur ve hiçbir şey geri dönmez.
