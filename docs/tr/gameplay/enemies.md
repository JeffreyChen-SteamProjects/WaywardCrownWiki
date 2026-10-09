---
title: "Düşmanlar"
---

Düşmanlar harita genelindeki vahşi bölgelerde doğal olarak ortaya çıkar ve maceraperestlerinizi ve kalenizi tehdit eder.

---

## Düşman Türleri

| Düşman | HP | ATK | DEF | Hız | XP | Altın | Saldırı Menzili | Görüş | Doğma Arazisi | Tehlike Seviyesi |
|--------|-----|-----|-----|-----|-----|-------|-----------------|-------|---------------|-----------------|
| **Slime** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Orman | 1 |
| **Goblin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Dağ | 2 |
| **İskelet** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Dağ | 3 |
| **Zombi** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Orman | 4 |
| **Ejderha** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Dağ | 5 |
| **Dev Kurt** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Orman | 2 |
| **Ork Kabadayı** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Dağ | 4 |
| **Goblin Okçu** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Dağ | 3 |
| **Kum Hortlağı** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Çöl | 3 |
| **Karanlık Tarikatçı** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Orman | 3 |
| **Trol** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Dağ | 5 |
| **Dev Örümcek** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Orman | 2 |
| **Dev Sıçan** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Çayırlık | 1 |
| **Haydut** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Çayırlık | 2 |
| **Harpi** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Çayırlık | 3 |

Ejderha, Goblin Okçu ve Karanlık Tarikatçı mermi fırlatır (sırasıyla alev püskürtüsü, kaba ok ve karanlık küre); diğerleri en fazla 3 karo uzaktan vurur.

Bir düşman her 3 ÷ hız tikte bir adım atar, aşağı yuvarlanır (en az 1): 1.6 ve üzeri hızda her tik, 1.1–1.4'te her 2 tik, 0.8–1.0'da her 3 tik, Trol'de her 4 tik ve 0.6'da her 5 tik.

### Rütbeler

Loncanız büyüdükçe (maceraperestler artı Pazarlar), bazı canavarlar statlarını ve ödüllerini katlayan bir rütbeyle doğar. Yaşayan canavarların en fazla dörtte biri rütbelidir; bunun istisnası Canavar Ayaklanması'dır, bu sırada doğan her canavar en az Kıdemli olur.

| Rütbe | Şu lonca büyüklüğünden itibaren | Şans | HP | ATK | DEF | XP | Altın | Görüş |
|-------|--------------------------------|------|----|-----|-----|----|-------|-------|
| **Kıdemli** | 8 | %16 | ×1.5 | ×1.25 | ×1.2 | ×1.6 | ×1.8 | +2 |
| **Seçkin** | 22 | %8 | ×2.5 | ×1.6 | ×1.5 | ×2.5 | ×3 | +4 |
| **Şampiyon** | 45 | %3 | ×4.5 | ×2.2 | ×2 | ×4 | ×6 | +6 |

---

## Düşman Davranışı

### Dolaşma

- Düşmanlar doğma noktalarının yakınında dolaşır
- Görüş menzilleri vardır ve fark ettikleri maceraperestleri aktif olarak kovalar
- Her tick'te düşmanların dörtte biri (dönüşümlü gruplar halinde) dolaşma mantığını çalıştırır; böylece her düşman en fazla 4 tick'te bir güncellenir

### Hedef Önceliği

Düşmanlar hedeflere şu sırayla saldırır:

1. **Savaşa hazır maceraperestler** (pasifist olmayanlar)
2. **İnşaatçılar** (pasifist maceraperestler)
3. **Ok kuleleri** (tehdit oluşturan binalar)
4. **Kale**
5. **Diğer binalar**

### İstila Yolu

Bir istila olayı tetiklendiğinde düşmanlar en kısa yoldan doğruca oyuncunun kalesine yönelir.

---

## Düşman Doğması

| Ayar | Değer |
|------|-------|
| Doğma aralığı | 35 saniye oyun süresi; her maceraperest veya Pazar için 1 saniye daha az, en az 5 saniye (Savunma kampanya bölümlerinde yarıya iner) |
| Maksimum sayı | `(maceraperestler + Pazarlar) × 2` (zorluk ayarlarında düzenlenebilir); Düşman Kaleleri yıkıldıkça en düşük %25'e kadar azalır |
| Temel minimum | En az 6 düşman |

Düşmanlar **arazi türüne** göre doğar:

- **Orman** — Slime'lar, Zombiler, Dev Kurtlar, Karanlık Tarikatçılar, Dev Örümcekler
- **Dağ** — Goblinler, İskeletler, Ejderhalar, Ork Kabadayılar, Goblin Okçular, Troller
- **Çayırlık** — Dev Sıçanlar, Haydutlar, Harpiler
- **Çöl** — Kum Hortlakları

:::note[Ejderhalar]
Ejderhalar ve Troller en tehlikeli düşmanlardır (tehlike seviyesi 5). 16 saldırı menzili, 550 HP ve alev püskürtüleriyle Ejderhalarla en iyi şekilde uzun menzilli maceraperestler ve ok kuleleri ile mücadele edilir; Trolün HP'si ve saldırısı daha yüksektir ama yakına gelmek zorundadır.
:::

---

## Ejderha Özel Mekanikleri

- **Uzun Menzilli Saldırı**: 16 saldırı menzili, alev püskürtür
- **Yüksek Hareketlilik**: 1.4 hız, her 2 tikte bir adım: Dev Sıçanlar, Dev Örümcekler ve Haydutlar kadar hızlıdır; yalnızca Harpiler ve Dev Kurtlar (her tikte bir adım) daha hızlıdır
- **Geniş Görüş**: 32 karo görüş menzili, maceraperestleri çok uzaktan fark edebilir
- **Kaçınma**: Tüm düşmanların temel %5 kaçınma oranı vardır

**Baskılar**: üç tehdit bir inden değil, krallığın nasıl yönetildiğinden doğar. Her biri vakayinamede ve genel bakışta bir dakika önceden duyurulur, 3'lük bir sürü gönderir (canavarlarından aynı anda en fazla 6'sı yaşar, gücünüz ne olursa olsun aynıdır) ve sebebi giderilince iptal edilir. *Pislik*: çeşmesi ya da bahçesi olmayan 16 binalık bir kasaba dev fareleri çeker; her çeşme ya da bahçe 6 binaya bakar. *Huzursuz ölüler*: tapınak olmadan ölü yatan 3 kahraman, sonuncunun düştüğü yerde iskelet olarak kalkar; bir tapınak ya da onları diriltmek onları yerde tutar, Kemikliği olan Ölümsüzler yolundaki bir krallık ise onları muhafız olarak alır. *Yaban*: şatodan 60 kareden uzak olup 12 kare içinde ok kulesi ya da muhafız mevzisi bulunmayan bina ulu kurtları çeker; ticaret karakolları ve Yaban krallığının kampları sayılmaz. İlk 5 dakikada ve buna yanıt veren binaya izin vermeyen bir bölümde krallığa hiçbir şey baskı yapmaz. Ork savaş kampları inşa edilene saldırır: en yakın şantiyeye ya da süren yükseltmeye.
