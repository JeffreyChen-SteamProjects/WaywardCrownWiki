---
title: "System zleceń"
---

Zlecenia to twój główny sposób kierowania działaniami poszukiwaczy przygód. Umieszczaj flagi zleceń na mapie i ustalaj nagrodę, aby przyciągnąć poszukiwaczy przygód do określonej lokalizacji.

---

## Typy zleceń

| Typ | Domyślna nagroda | Niebezpieczeństwo | Sława | Efekt |
|-----|-----------------|-------------------|-------|-------|
| **Eksploracja** | 200g | 0,2 | 0,3 | Poszukiwacze przygód podróżują do lokalizacji celu, odsłaniając mgłę wojny po drodze; flaga musi stać w miejscu, do którego da się dojść |
| **Eliminacja** | 200g | 0,8 | 0,9 | Wyeliminuj wyznaczony cel (wroga lub Twierdzę wrogów) |
| **Obrona** | 200g | 0,5 | 0,6 | Patroluj wokół docelowego budynku do wygaśnięcia timera |
| **Ostrzeżenie** | opłata 50g | — | — | Oznacza miejsce jako zakazane: nigdy nie jest podejmowane ani wypłacane; bohaterowie poniżej 8. poziomu trzymają się z dala od wszystkiego w promieniu 25 pól od niego |

### Umieszczanie, podnoszenie i anulowanie

- Zlecenie eliminacyjne trzeba umieścić na wrogu lub Twierdzy wrogów, a zlecenie obronne na jednym z twoich budynków lub na Zamku
- Nagrodę za wystawione zlecenie można podnieść o +100g lub +500g
- Anulowanie zwraca nagrodę, z wyjątkiem zlecenia obronnego, którego warta już się zaczęła

---

## Jak poszukiwacze przygód wybierają zlecenia

Poszukiwacze przygód obliczają atrakcyjność na podstawie swojej **osobowości** i **atrybutów zlecenia**:

```
Atrakcyjność = Nagroda × Chciwość
             + Sława × Chwała
             - Niebezpieczeństwo × Bezpieczeństwo
             + Bonus eksploracji × Ciekawość
             - Kara za odległość
             - Kara za niskie HP
```

Nagroda i odległość są skalowane poziomem poszukiwacza przygód, a niektóre zlecenia są od razu odrzucane (nagroda poniżej poziom × 20 złota, znacznik Ostrzeżenie lub zlecenie w strefie ostrzeżenia dla bohaterów poniżej 8. poziomu). Pełna formuła znajduje się na stronie [Poszukiwacze przygód](adventurers.md).

:::tip[Praktyczne wskazówki]
- **Łowcy** mają wysoką ciekawość i najlepiej nadają się do zleceń eksploracyjnych
- **Wojownicy** mają wysoką chwałę i najlepiej nadają się do zleceń eliminacyjnych
- **Strażnicy** nigdy nie podejmują zleceń: patrolują twoje budynki i biegną do każdego, który zostanie zaatakowany
- Zwiększenie nagrody może przekonać niechętnych poszukiwaczy przygód do przyjęcia zlecenia
:::

---

## Mechanika zlecenia obronnego

Zlecenia obronne wymagają od poszukiwaczy przygód **ciągłego patrolowania** w pobliżu celu:

| Ustawienie | Wartość |
|-----------|---------|
| Wymagany czas patrolowania | 60 ticków |
| Interwał przeliczania ścieżki | Co 12 ticków |

Po przyjęciu zlecenia obronnego poszukiwacz przygód patroluje w tę i z powrotem w pobliżu celu. Po nagromadzeniu wystarczającej ilości czasu patrolowania zlecenie zostaje ukończone: bohaterowie na posterunku dzielą się nagrodą, a każdy z nich otrzymuje 25 XP, jeśli podczas warty wróg pojawił się w zasięgu wzroku.

---

## Mechanika zlecenia eliminacyjnego

Zlecenia eliminacyjne wyznaczają **konkretny cel**:

- Może to być konkretny wróg
- Może to być Twierdza wrogów

Po wyeliminowaniu celu zlecenie zostaje automatycznie ukończone. Poszukiwacze przygód, którzy przyjęli zlecenie, priorytetowo podróżują do lokalizacji celu.

- Nagroda jest dzielona po równo między bohaterów, którzy przyjęli zlecenie i są w promieniu 20 pól od celu, a każdy z nich otrzymuje 30 XP; żadna cecha jej nie zwiększa
- Przeciwko Twierdzy wrogów poszukiwacze przygód najpierw zbierają się około 22 pól od niej po stronie Zamku i atakują razem, gdy dotrze ich 2–5 (zależnie od wielkości twierdzy) lub 120 ticków po tym, jak pierwszy poszukiwacz przygód przyjmie nagrodę

---

## Wskazówki strategiczne

1. **Na początku stawiaj zlecenia eksploracyjne** — musisz odsłonić mgłę wojny, aby zlokalizować wrogów i zasoby
2. **Umieszczaj zlecenia eliminacyjne w pobliżu Twierdz wrogów** — kieruj poszukiwaczy przygód do niszczenia zagrożeń
3. **Umieszczaj zlecenia obronne w pobliżu ważnych budynków** — podejmują je inni poszukiwacze przygód; Strażnicy i tak tam patrolują
4. **Dostosowuj nagrody do osobowości poszukiwaczy przygód** — nie musisz przepłacać za każde zlecenie

---

## Zasady zleceń

Nagroda leży w zleceniu od chwili wywieszenia:

- **Termin**: zlecenie można wywiesić z terminem 1, 3 lub 5 minut. Gdy minie, niewypłacona nagroda wraca do skarbca.
- **Zwroty**: anulowanie zwraca nagrodę, z wyjątkiem zlecenia obrony, którego warta już się zaczęła. Zlecenie, którego cel zniknął i nie ma komu zapłacić, też zwraca nagrodę. Flagę usuwa się z jej menu prawego przycisku na mapie albo, gdy jest zaznaczona, przyciskiem w jej panelu; oba mówią, co wraca. Gdy bohaterowie są już w drodze do anulowanej nagrody, dziesiąta część zwrotu trafia do nich za fatygę, w równych częściach.
- **Kto dostaje zapłatę**: zlecenie eksploracji płaci bohaterowi, który dotrze; zlecenie zabójstwa dzieli się po równo między przyjmujących będących blisko miejsca zabicia; zlecenie obrony między przyjmujących na posterunku. Martwy bohater nigdy nie dostaje zapłaty. Bohater w pobliżu pracy, który w ciągu ostatnich 30 sekund opatrzył, osłonił lub zastąpił innego, dostaje część obok nich.
- **Renoma wymaga pracy**: złoto jest wypłacane zawsze, ale renomę i doświadczenie daje tylko teren niezbadany w chwili wywieszenia, zabicie celu albo warta, podczas której wróg pojawił się w zasięgu wzroku.
- **Towarzystwo**: bohaterowie zostawiają zlecenie eksploracji, które ktoś już wziął, dzieloną nagrodę liczą jako swoją część, a twierdza wydaje im się mniej groźna, gdy zgłosili się inni.
- **Wyprawy**: zlecenie zabójstwa na twierdzę najpierw zbiera drużynę w punkcie zbiórki po stronie zamku. Wyrusza, gdy dotrze dość bohaterów albo po 120 tikach; ochotnik, który został sam, idzie dalej tylko wtedy, gdy odważy się sam na twierdzę, a w przeciwnym razie rezygnuje ze zlecenia; przyjmuje o jednego bohatera więcej niż wynosi zbiórka i nikogo ponad to; bohater z małym zapasem mikstur najpierw je kupuje, jeśli może; a drużyna, która poległa lub wróciła do domu, zbiera się od nowa. Panel zlecenia pokazuje, kto się zebrał, jak długo czeka się na resztę, oraz szacowane szanse.
- **Niebezpieczeństwo**: zlecenia zabójstwa, zlecenia zwiadu obok wypatrzonej twierdzy i nieopłacony marsz na twierdzę są ważone względem gotowości każdego bohatera (atak, zdrowie, mikstury, pancerz, bohaterowie, którzy już wzięli zlecenie, i odległość pracy od karczmy lub zamku). Odważni bohaterowie przyjmują gorsze szanse niż ostrożni, a żadna nagroda nie czyni niebezpiecznej roboty bezpieczniejszą. Bohater, który się waha, mówi, co zmieniłoby jego zdanie (mikstury, które może kupić albo których nie zdobędzie, karczma bliżej pracy, drugi bohater przy zleceniu), i idzie, gdy to ma. Bohater ze zleceniem walczy z tym, co go dopadnie, ale wraca do zlecenia, zanim zacznie gonić coś innego, i porzuca niebezpieczną robotę, gdy jego szanse się załamią.
- **Ratunek**: zlecenie ratunku wystawia się na poborcę podatków albo karawanę i podąża ono za nim. Bohaterowie, którzy je przyjmą, idą do niego i trzymają się obok; z eskortą przestaje uciekać przed potworami i kontynuuje swoją trasę, gdy oni walczą. Gdy był eskortowany w drodze przez 20 tików i stoi przy zamku (karawana: albo przy swojej faktorii), a w promieniu 8 pól nie ma potwora, zlecenie jest dzielone po równo między posiadaczy stojących obok; czekanie przy takim, który jeszcze nie wyruszył, się nie liczy. Renomę i doświadczenie daje tylko wtedy, gdy był ranny albo potwór pojawił się w zasięgu wzroku, a nagroda wraca, jeśli zostanie utracony. Dwuklik na poborcy podatków albo karawanie wystawia takie zlecenie.
- **Panel wywieszania**: pokazuje, ile skarbiec płaci teraz, a po wskazaniu mapy — co byłoby celem zlecenia. Gdy kliknięcie mogłoby oznaczać kilka rzeczy (stłoczone potwory przy zleceniu zabicia, tragarze przy zleceniu ratunku, kilku rannych bohaterów pod wskaźnikiem przy zaklęciu wymierzonym w bohatera), pojawia się ich lista, a zlecenie lub zaklęcie trafia do wybranego.
- **Nadane zlecenia**: mapa lub kampania może wywiesić zlecenie akcją wyzwalacza `post_bounty`; nic nie kosztuje skarbca i nic nie zwraca.
