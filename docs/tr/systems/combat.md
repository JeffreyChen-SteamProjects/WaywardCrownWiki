---
title: "Savaş Sistemi"
---

Savaş tamamen otomatiktir. Maceraperestler ve düşmanlar birbirlerinin saldırı menzilinde olduklarında çatışmaya girerler.

---

## Savaş Akışı

1. **Tespit** — Bir maceraperest görüş alanındaki bir düşmanı fark eder (her 2 tick'te kontrol edilir)
2. **Yaklaşma** — Düşman görünürde ama saldırı menzili dışındaysa, maceraperest takip eder
3. **Saldırı** — Saldırı menzili içine girildiğinde her iki taraf da savaşmaya başlar
4. **Çözüm** — Hasar her 5 tick'te bir hesaplanır

---

## Hasar Hesaplama

### Maceraperest Düşmana Saldırıyor

| Tür | Hasar Formülü |
|-----|---------------|
| Yakın dövüş | `ATK × 2` (genel hasar çarpanı) |
| Uzun menzil | `ATK` (mermi hasarı, çarpan uygulanmaz) |

### Düşman Macerapereste Saldırıyor

```
Hasar = (Düşman ATK + random(0~2)) × 2
```

### Savunma

```
Gerçek Hasar = max(1, Hasar - DEF)
```

### Kaçınma

| Kaynak | Kaçınma Oranı |
|--------|---------------|
| Maceraperest temel kaçınma | %10 + %1 × AGI (≤ %70) |
| Düşman temel kaçınması | %5 |
| Kolcu "Kaçınma" yeteneği | +%15 |
| Hırsız: Kaçınma | +%10 |
| Hırsız: Gölge Dansı | +%18 |
| Kolcu: Rüzgar Kıran | +%25 |

---

## Mermi Sistemi

Mermi saldırısını yalnızca Büyücüler ve Kolcular kullanır. Diğer sınıflar menzilleri 3 karo olsa da yakın dövüşte savaşır:

| Sınıf | Mermi Türü |
|-------|------------|
| Büyücü | Ateş Topu (fireball) |
| Kolcu | Ok (arrow) |
| Ejderha (düşman) | Ateş Topu (fireball) |

Mermiler ateşlendikten sonra her tick'te hedefe doğru ilerler ve isabet ettiğinde hasar verirler.

---

## Ok Kulesi

Ok Kulesi otomatik bir savunma binasıdır:

| Özellik | Değer |
|---------|-------|
| Saldırı menzili | 20 karo |
| Temel hasar | 16 + 8 × (Lv − 1) |
| Yükseltme ölçeklemesi | Seviye ile artar |

Ok Kuleleri menzil içindeki en yakın düşmana otomatik olarak saldırır.

---

## Deneyim Ödülleri

| Kaynak | XP |
|--------|-----|
| Vuruş başına (Damlama) | Öldürme XP'sinin 1/5'i |
| Slime Öldürme | 10 XP |
| Goblin Öldürme | 25 XP |
| İskelet Öldürme | 40 XP |
| Zombi Öldürme | 60 XP |
| Ejderha Öldürme | 150 XP |

:::note[Damlama XP]
Bir maceraperest her düşmana vurduğunda — yakın dövüş veya mermiyle — o düşmanın öldürme XP'sinin 1/5'ini alır. Bu, son darbeyi vurmasa bile maceraperestlerin deneyim kazanmasını sağlar.
:::

---

## Savaş Yapay Zekası

### Maceraperest Kaçış Koşulları

- HP < %30 (HP_CRITICAL)
- Kaçış olasılığı Güvenlik kişilik özelliğinden etkilenir

### İksir Kullanımı

| Koşul | Davranış |
|-------|----------|
| HP < %30 | Acil iksir kullanımı |
| HP < %50 | İksir kullanımı |

### Düşman Hedef Önceliği

1. Savaştaki maceraperestler (pasifist olmayanlar)
2. İnşaatçılar (pasifistler)
3. Ok Kuleleri gibi tehdit oluşturan binalar
4. Kale
5. Diğer binalar
