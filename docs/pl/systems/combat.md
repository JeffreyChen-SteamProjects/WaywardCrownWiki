---
title: "System walki"
---

Walka jest w pełni automatyczna. Poszukiwacze przygód i wrogowie wchodzą w starcie, gdy znajdują się w zasięgu ataku siebie nawzajem.

---

## Przebieg walki

1. **Wykrycie** — Poszukiwacz przygód dostrzega wroga w swoim polu widzenia (sprawdzane co 2 tick)
2. **Zbliżanie** — Jeśli wróg jest widoczny, ale poza zasięgiem ataku, poszukiwacz przygód go ściga
3. **Atak** — Gdy znajdą się w zasięgu ataku, obie strony zaczynają walczyć
4. **Rozstrzygnięcie** — Obrażenia są rozstrzygane co 5 tick

---

## Obliczanie obrażeń

### Poszukiwacz przygód atakujący wroga

| Typ | Formuła obrażeń |
|-----|-----------------|
| Walka wręcz | `ATK × 2` (globalny mnożnik obrażeń) |
| Dystansowy | `ATK` (obrażenia od pocisku, bez mnożnika) |

### Wróg atakujący poszukiwacza przygód

```
Obrażenia = (ATK wroga + random(0~2)) × 2
```

### Obrona

```
Rzeczywiste obrażenia = max(1, Obrażenia - DEF)
```

### Unik

| Źródło | Szansa na unik |
|--------|---------------|
| Bazowy unik poszukiwaczy | 10% + 1% × AGI (≤ 70%) |
| Bazowy unik wroga | 5% |
| Łowca: Uniki | +15% |
| Złodziej: Uniki | +10% |
| Złodziej: Taniec cieni | +18% |
| Łowca: Przełamanie wiatru | +25% |

---

## System pocisków

Każda jednostka walcząca na dystans wystrzeliwuje własny pocisk, więc strzał rozpoznaje się po tym, co leci. Pozostałe klasy walczą wręcz, choć sięgają na 3 kafelki:

| Klasa | Typ pocisku |
|-------|------------|
| Łowca | Strzała (arrow) |
| Tropiciel | Oszczep (javelin) |
| Strażnik Traktów | Bełt kuszy (bolt) |
| Mag | Kula ognia (fireball) |
| Adept | Odłamek światła (light_shard) |
| Goblin łucznik (wróg) | Prymitywna strzała (goblin_arrow) |
| Mroczny kultysta (wróg) | Mroczna kula (dark_orb) |
| Smok (wróg) | Struga ognia (dragon_flame) |

Pociski lecą w kierunku celu co tick po wystrzeleniu i zadają obrażenia przy trafieniu. Każdy jest rysowany zgodnie z kierunkiem lotu: ten, który leci w górę mapy, widać od tyłu, a ten, który leci w poprzek, z boku.

---

## Wieża strzelnicza

Wieża strzelnicza to zautomatyzowany budynek obronny:

| Właściwość | Wartość |
|-----------|---------|
| Zasięg ataku | 20 kafelków |
| Bazowe obrażenia | 16 + 8 × (Lv − 1) |
| Skalowanie ulepszenia | Wzrasta z poziomem |

Wieże strzelnicze automatycznie atakują najbliższego wroga w zasięgu.

---

## Nagrody doświadczenia

| Źródło | XP |
|--------|-----|
| Za trafienie (kroplowe) | 1/5 XP za zabójstwo |
| Zabicie Szlama | 10 XP |
| Zabicie Goblina | 25 XP |
| Zabicie Szkieleta | 40 XP |
| Zabicie Zombie | 60 XP |
| Zabicie Smoka | 150 XP |

:::note[Kroplowe XP]
Za każdym razem, gdy poszukiwacz przygód trafia wroga — czy to wręcz, czy pociskiem — otrzymuje 1/5 XP za zabójstwo tego wroga. Dzięki temu poszukiwacze przygód zdobywają doświadczenie nawet bez zadania ostatecznego ciosu.
:::

---

## AI walki

### Warunki ucieczki poszukiwacza przygód

- HP < 30% (HP_CRITICAL)
- Prawdopodobieństwo ucieczki zależy od cechy osobowości Bezpieczeństwo

### Użycie mikstur

| Warunek | Zachowanie |
|---------|-----------|
| HP < 30% | Użyj mikstury pilnie |
| HP < 50% | Użyj mikstury |

### Priorytet celów wroga

1. Poszukiwacze przygód w walce (nie-pacyfiści)
2. Budowniczowie (pacyfiści)
3. Groźne budynki, takie jak Wieże strzelnicze
4. Zamek
5. Inne budynki

Trucizna zachowuje w zapisie pozostały czas, termin następnych obrażeń i przypisanie zabójstwa. Truciznę złodzieja usuwa oczyszczenie przy ołtarzu lub w łaźni, pozostawiając tarcze. Po bazowej odporności bossa powtarzane kontrole w stałym oknie 10 sekund trwają 100%, 50% i 25%; dalsze próby są nieskuteczne do końca okna. Krótsze ponowne nałożenie nie skraca istniejącej kontroli, a próby nie opóźniają resetu. Zwykli wrogowie nie zyskują tej odporności.

Misje mogą mieć osiem kolejnych etapów z celami obowiązkowymi i dodatkowymi. Ukończone etapy i wyniki dodatkowe są zapisywane; porażka dodatkowego celu nie blokuje podstawowego zwycięstwa. Nazwani wrogowie i twierdze muszą rzeczywiście paść: usunięcie żywego celu nie wystarcza. Ochrona śledzi oryginalną sojuszniczą jednostkę lub budynek do końca misji, bez zamienników. Autorzy mogą używać sławy, skończonych fal i list celów; brakujące odwołania są odrzucane przed grą.

**Alchemik · Gildia alchemików** — 230 Złoto, HP 750, Lv.2 → 320, Lv.3 → 480. Zasięg 8 pól. Najpierw usuwa tylko truciznę z sojuszników. Trucizna w promieniu 2 trafia do 8 wrogów przez 5s po 4 PŻ/s. Do 6 fiolek, każda za 30 złota na rynku lub w gildii. Trucizna na bossach ma limit; bez zapasu rzuca igłami.
