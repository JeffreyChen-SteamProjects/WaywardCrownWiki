---
title: "Wrogowie"
---

Wrogowie pojawiają się naturalnie na dzikich obszarach mapy, zagrażając twoim poszukiwaczom przygód i zamkowi.

---

## Typy wrogów

| Wróg | HP | ATK | DEF | Szybkość | XP | Złoto | Zasięg ataku | Wizja | Teren pojawienia | Poziom zagrożenia |
|------|-----|-----|-----|----------|-----|-------|-------------|-------|-----------------|-------------------|
| **Szlam** | 60 | 3 | 2 | 0,6 | 10 | 5 | 3 | 12 | Las | 1 |
| **Goblin** | 110 | 6 | 4 | 1,0 | 25 | 12 | 3 | 20 | Góry | 2 |
| **Szkielet** | 160 | 9 | 6 | 0,9 | 40 | 20 | 3 | 22 | Góry | 3 |
| **Zombie** | 260 | 12 | 10 | 0,6 | 60 | 30 | 3 | 16 | Las | 4 |
| **Smok** | 550 | 20 | 18 | 1,4 | 150 | 80 | 16 | 32 | Góry | 5 |
| **Wilkor** | 90 | 8 | 3 | 1,6 | 28 | 10 | 3 | 26 | Las | 2 |
| **Ork siłacz** | 320 | 15 | 12 | 0,8 | 70 | 35 | 3 | 18 | Góry | 4 |
| **Goblin łucznik** | 85 | 9 | 3 | 1,0 | 35 | 15 | 10 | 24 | Góry | 3 |
| **Piaskowa zjawa** | 140 | 10 | 5 | 1,0 | 38 | 22 | 3 | 13 | Pustynia | 3 |
| **Mroczny kultysta** | 80 | 14 | 2 | 0,8 | 42 | 25 | 11 | 16 | Las | 3 |
| **Troll** | 620 | 22 | 12 | 0,7 | 160 | 90 | 3 | 12 | Góry | 5 |
| **Olbrzymi pająk** | 75 | 7 | 3 | 1,3 | 24 | 9 | 3 | 11 | Las | 2 |
| **Olbrzymi szczur** | 45 | 4 | 1 | 1,4 | 12 | 4 | 3 | 10 | Łąka | 1 |
| **Bandyta** | 100 | 7 | 4 | 1,1 | 26 | 16 | 3 | 12 | Łąka | 2 |
| **Harpia** | 95 | 11 | 3 | 1,8 | 36 | 18 | 3 | 14 | Łąka | 3 |

Smok, Goblin łucznik i Mroczny kultysta wystrzeliwują pociski (odpowiednio strugi ognia, prymitywne strzały i mroczne kule); pozostali uderzają z odległości do 3 kafelków.

Wróg robi krok co 3 ÷ szybkość taktów, w zaokrągleniu w dół (co najmniej 1): w każdym takcie przy szybkości od 1,6, co 2 takty przy 1,1–1,4, co 3 przy 0,8–1,0, co 4 Troll i co 5 przy 0,6.

### Rangi

Wraz z rozwojem twojej gildii (poszukiwacze przygód plus Targi) niektóre potwory pojawiają się z rangą, która mnoży ich statystyki i nagrody. Rangę może mieć najwyżej ćwierć żyjących potworów, z wyjątkiem wydarzenia Powstanie potworów, podczas którego każdy nowy potwór jest co najmniej Weteranem.

| Ranga | Od wielkości gildii | Szansa | HP | ATK | DEF | XP | Złoto | Wizja |
|-------|--------------------|--------|----|-----|-----|----|-------|-------|
| **Weteran** | 8 | 16% | ×1,5 | ×1,25 | ×1,2 | ×1,6 | ×1,8 | +2 |
| **Elitarny** | 22 | 8% | ×2,5 | ×1,6 | ×1,5 | ×2,5 | ×3 | +4 |
| **Czempion** | 45 | 3% | ×4,5 | ×2,2 | ×2 | ×4 | ×6 | +6 |

---

## Zachowanie wrogów

### Wędrowanie

- Wrogowie wędrują w pobliżu swojego punktu pojawienia
- Mają zasięg widzenia i aktywnie gonią wykrytych poszukiwaczy przygód
- W każdym ticku logikę wędrowania wykonuje ćwierć wrogów (w rotujących grupach), więc każdy z nich aktualizuje się najwyżej co 4 ticki

### Priorytet celów

Wrogowie atakują cele w następującej kolejności:

1. **Poszukiwacze przygód gotowi do walki** (nie-pacyfiści)
2. **Budowniczowie** (pacyfistyczni poszukiwacze przygód)
3. **Wieże strzelnicze** (groźne budynki)
4. **Zamek**
5. **Inne budynki**

### Ścieżka inwazji

Gdy wydarzenie inwazji się uruchomi, wrogowie kierują się prosto do zamku gracza najkrótszą drogą.

---

## Pojawianie się wrogów

| Ustawienie | Wartość |
|-----------|---------|
| Interwał pojawiania | 35 sekund czasu gry, o 1 sekundę mniej na każdego poszukiwacza przygód lub Targ, co najmniej 5 sekund (o połowę krócej w poziomach kampanii typu Obrona) |
| Maksymalna liczba | `(adventurers + Markets) × 2` (regulowane w ustawieniach trudności), maleje wraz z niszczeniem Twierdz wrogów, nawet do 25% |
| Bazowe minimum | Co najmniej 6 wrogów |

Wrogowie pojawiają się na podstawie **typu terenu**:

- **Las** — Szlamy, Zombie, Wilkory, Mroczni kultyści, Olbrzymie pająki
- **Góry** — Gobliny, Szkielety, Smoki, Orkowie siłacze, Gobliny łucznicy, Trolle
- **Łąka** — Olbrzymie szczury, Bandyci, Harpie
- **Pustynia** — Piaskowe zjawy

:::note[Smoki]
Smoki i Trolle to najgroźniejsi wrogowie (poziom zagrożenia 5). Ze Smokami, które mają zasięg ataku 16, 550 HP i strugi ognia jako pociski, najlepiej radzić sobie za pomocą poszukiwaczy przygód dystansowych i wież strzelniczych; Troll ma więcej HP i ataku, ale musi podejść blisko.
:::

---

## Specjalne mechaniki smoka

- **Atak dystansowy**: Zasięg ataku 16, zionie strugami ognia
- **Wysoka mobilność**: Szybkość 1,4, krok co 2 takty: tak szybko jak Olbrzymie szczury, Olbrzymie pająki i Bandyci; szybsze są tylko Harpie i Wilkory (krok w każdym takcie)
- **Szeroka wizja**: Zasięg widzenia 32 kafelki, zdolny do wykrycia poszukiwaczy przygód z dużej odległości
- **Unik**: Wszyscy wrogowie mają bazową 5% szansę na unik

**Naciski**: trzy zagrożenia biorą się z tego, jak prowadzone jest królestwo, a nie z leża. Każde jest zapowiadane minutę wcześniej w kronice i przeglądzie, wysyła stado 3 (nigdy więcej niż 6 jego potworów naraz, niezależnie od waszej siły) i jest odwoływane, gdy usunie się jego przyczynę. *Brud*: miasto z 16 budynkami bez fontanny i ogrodu ściąga olbrzymie szczury; każda fontanna lub ogród dba o 6 budynków. *Niespokojni umarli*: 3 bohaterów leżących martwych bez świątyni powstaje jako szkielety tam, gdzie padł ostatni; świątynia albo ich wskrzeszenie zatrzyma ich w ziemi, a królestwo na drodze Nieumarłych z Ossuarium bierze ich na strażników. *Dzicz*: budynek dalej niż 60 pól od zamku bez wieży strzelniczej lub posterunku w promieniu 12 ściąga straszne wilki; faktorie się nie liczą, podobnie obozy królestwa Dziczy. Nic nie naciska na królestwo przez pierwsze 5 minut ani na poziomie, który nie pozwala na budynek będący odpowiedzią. Orcze obozy wojenne napadają na to, co się buduje: najbliższą budowę lub trwające ulepszenie.
