---
title: "Losowe wydarzenia"
---

Gra uruchamia losowe wydarzenia w regularnych odstępach czasu, dodając nieprzewidywalności do rozgrywki. Intensywność wydarzeń skaluje się dynamicznie w zależności od liczby poszukiwaczy przygód. Wbudowany samouczek nigdy nie losuje trzęsienia ziemi ani zdarzenia, które stawia na mapie nową budowlę.

---

## Zasady wyzwalania wydarzeń

| Ustawienie | Wartość |
|------------|---------|
| Początkowy okres ochronny | 1500 taktów (~5 minut) |
| Interwał sprawdzania | Co 300 taktów |
| Szansa na wyzwolenie | 60% |
| Czas odnowienia wydarzenia | 600 taktów (~2 minuty) |

---

## Wydarzenia zagrożenia

Wywierają presję na gracza przez czas trwania i wymagają aktywnej reakcji.

| Wydarzenie | Czas trwania | Waga | Efekt |
|------------|--------------|------|-------|
| **Inwazja potworów** | 250 | 2 | Wrogowie napierają na zamek! |
| **Zaraza** | 200 | 0 | Wszyscy poszukiwacze przygód otrzymują okresowe obrażenia |
| **Krwawy księżyc** | 350 | 2 | Wrogowie stają się silniejsi i bardziej agresywni |
| **Szturm nieumarłych** | 300 | 2 | Szkielety i zombie pojawiają się przy zamku |
| **Najazd goblinów** | 250 | 2 | Gobliny atakują sklepy i kradną złoto |
| **Przebudzenie smoczego gniazda** | 450 | 1 | Pojawia się smocze gniazdo tworzące smoki. Zniszcz je! |
| **Przeklęta noc** | 300 | 2 | Szybsi wrogowie, ale 2x PD za zabicie |
| **Trzęsienie ziemi** | Natychmiast | 1 | Budynki i zamek otrzymują ciężkie obrażenia, a drogi są niszczone |
| **Zdrajca** | Natychmiast | 1 | Losowy bohater zdradza gildię i staje się wrogiem! Na mapie zdrajca jest oznaczony jako elitarny. |
| **Zbuntowana gildia** | 400 | 2 | Pojawia się wroga gildia tworząca wrogów. Zniszcz ją! |
| **Inflacja** | 350 | 1 | Ceny mikstur i ekwipunku wzrastają o 50% |
| **Pieczęć many** | 250 | 1 | Magowie tracą całą moc ataku |
| **Burza piaskowa** | 300 | 2 | Prędkość i obrażenia dystansowe o połowę mniejsze |
| **Gęsta mgła** | 250 | 1 | Mgła wojny ponownie pokrywa mapę, zasięg wzroku zmniejszony |
| **Infiltracja szpiegów** | 350 | 2 | Fale wrogów przebranych za bohaterów atakują zamek |
| **Kwaśny deszcz** | 300 | 2 | Budynki tracą PŻ co tick (przez cały deszcz około połowy maks. PŻ), naprawa o połowę mniejsza |
| **Klątwa dusz** | 300 | 1 | Polegli bohaterowie powstają jako zombie! |
| **Rozkład ekwipunku** | Natychmiast | 1 | Wszyscy bohaterowie tracą 1 poziom ekwipunku |
| **Wymazanie pamięci** | Natychmiast | 1 | Wszyscy bohaterowie tracą 2 poziomy! |
| **Dezercja** | Natychmiast | 1 | Jedna piąta bohaterów (co najmniej jeden) opuszcza gildię! |
| **Przeklęta broń** | 120 | 2 | Bohaterowie otrzymują 30% obrażeń od siebie przy ataku |
| **Wyzwanie czempiona** | Natychmiast | 2 | Po twoich ziemiach grasuje czempion. Groźny — i wart fortunę |
| **Powstanie potworów** | 350 | 2 | Każdy pojawiający się potwór jest co najmniej weteranem |

---

## Wydarzenia wzmocnień

Zapewniają graczowi korzyści lub ulepszenia.

| Wydarzenie | Czas trwania | Waga | Efekt |
|------------|--------------|------|-------|
| **Deszcz skarbów** | 150 | 1 | Dodatkowe skrzynie pojawiają się na mapie |
| **Podwyżka podatków** | 350 | 1 | Stawka podatkowa podniesiona do 30% |
| **Szał budowlany** | 300 | 1 | Koszty budowy o połowę mniejsze, naprawa podwojona |
| **Błogosławieństwo świątyni** | 300 | 1 | Wszyscy bohaterowie powoli leczą się wszędzie |
| **Podwójne PD** | 350 | 1 | Wszystkie zdobyte PD są podwojone |
| **Fala rekrutacji** | 300 | 1 | Szybkość rekrutacji podwojona, pojemność +1 |
| **Zstąpienie boga wojny** | 300 | 1 | Wszyscy bohaterowie zyskują +50% ATK |
| **Żelazna ściana** | 300 | 1 | Budynki i zamek otrzymują połowę obrażeń |
| **Rozkaz marszu** | 250 | 1 | Wszyscy bohaterowie poruszają się szybciej |
| **Szczęśliwe gwiazdy** | 300 | 1 | Złoto i PD od wrogów podwojone |
| **Czarny rynek** | 300 | 1 | Brak dochodów z podatków, ale ceny ekwipunku niższe o 30% |
| **Sojusznicze posiłki** | 350 | 1 | Tymczasowi sojusznicy wysokiego poziomu dołączają do walki |
| **Błogosławieństwo kuźni** | 300 | 1 | Ekwipunek wszystkich bohaterów +1 poziom |
| **Święta bariera** | 300 | 0 | Wrogowie są odpychani od zamku |
| **Wspólna mądrość** | 300 | 1 | 30% zdobytego PD jest dzielone ze wszystkimi |
| **Zakrzywienie czasu** | 300 | 1 | Wszystkie timery chodzą z 2x prędkością — także pojawianie wrogów! |

---

## Wydarzenia natychmiastowe

Działają natychmiast, bez czasu trwania.

| Wydarzenie | Waga | Efekt |
|------------|------|-------|
| **Mutacja elity** | 1 | Losowy wróg mutuje w potężną elitę! Na mapie jest oznaczony jako elitarny. |
| **Zagubiony bohater** | 1 | Bohater wysokiego poziomu dołącza z dziczy |
| **Koło fortuny** | 1 | Wywołane zostaje losowe wydarzenie! |
| **Przebudzenie bohatera** | 1 | Losowy bohater budzi się na stałe jako heros! |
| **Mapa skarbów** | 1 | Odkrywa ukryty obszar i tworzy cenne skrzynie |
| **Splecione losy** | 1 | Dwóch losowych bohaterów wymienia się statystykami |
| **Boski arsenał** | 1 | Kilku bohaterów otrzymuje ekwipunek maksymalnego poziomu |
| **Złoty wiek** | 1 | Otrzymujesz złoto zależnie od liczby budynków |
| **Rozproszenie** | 1 | Wszyscy bohaterowie są teleportowani w losowe miejsca |
| **Fortyfikacja** | 1 | Wszystkie budynki w pełni uleczone, maks PŻ +20% |
| **Fontanna życia** | 1 | Wszyscy bohaterowie w pełni uleczeni, maks PŻ +10% |
| **Ruletka statystyk** | 1 | Statystyki każdego bohatera zostają przetasowane |
| **Tasowanie poziomów** | 1 | Poziomy bohaterów są losowo redystrybuowane |
| **Klon** | 1 | Losowy bohater zostaje zduplikowany! |
| **Powitanie bohaterów** | 1 | Wędrowni bardowie śpiewają o twojej gildii — zastrzyk renomy |

---

## Wydarzenia strukturalne

Tworzą trwałe struktury na mapie.

| Wydarzenie | Czas trwania | Efekt |
|------------|--------------|-------|
| **Przebudzenie smoczego gniazda** | 450 | Pojawia się smocze gniazdo tworzące smoki. Zniszcz je! |
| **Zbuntowana gildia** | 400 | Pojawia się wroga gildia tworząca wrogów. Zniszcz ją! |
| **Starożytne ruiny** | 450 | Na mapie pojawiają się ruiny. Kto pierwszy dotrze, ten zdobędzie nagrody! |
| **Rozdarcie wymiarów** | 300 | Pojawiają się portale i losowo teleportują bohaterów |

---

## Strategie radzenia sobie

:::tip[Wydarzenia zagrożenia]
- Utrzymuj stałą obronę ze Strażników i Wież strzelniczych przez cały czas
- Podczas wydarzeń inwazji upewnij się, że wokół Zamku jest wystarczająca siła bojowa
- Wysyłaj ekspedycje ze zleceniami, aby jak najszybciej zniszczyć Gniazda smoka i Zbuntowane gildie
- Oba są zaznaczane na mapie od razu po pojawieniu się: kliknij jedno z nich, by zobaczyć jego zdrowie, i wyznacz na nie zlecenie „Zabij”, by wysłać bohaterów do jego zburzenia
:::

:::tip[Wykorzystanie wzmocnień]
- Podczas wydarzenia Podwójne PD pozwól swoim poszukiwaczom przygód walczyć jak najwięcej, aby awansować
- Podczas Szału budowlanego wykorzystaj okazję do rozbudowy
- Podczas Fali rekrutacji upewnij się, że masz wystarczającą liczbę budynków rekrutacyjnych
:::