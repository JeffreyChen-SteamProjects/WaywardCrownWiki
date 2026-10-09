---
title: "Samouczek twórcy"
---

Każdy szablon zaczyna się w **Twórca i warsztat Steam** (menu główne, menedżer map lub menedżer wtyczek) i przechodzi tę samą drogę od **Nowy projekt** do prywatnego elementu Warsztatu. Tylko ostatni krok wymaga Steam.

## Wspólne kroki

1. **Nowy projekt**: wybierz szablon, nazwę i folder. Okno pokazuje, gdzie trafi projekt, zanim cokolwiek zapisze.
2. **Edytuj projekt**: wtyczka otwiera się w edytorze wtyczek; mapa lub kampania otwiera się przez **Otwórz edytor terenu / kampanii**, w osobnym procesie, który ładuje tylko to, czego projekt wymaga. Zapisz przed następnym krokiem: sprawdzanie, testy i publikacja używają zapisanych plików.
3. **Zweryfikuj zawartość**: każdy problem mówi, gdzie jest; dwuklik otwiera edytor w tym miejscu.
4. **Test gry**: osobna gra tylko z tym projektem i tym, czego wymaga. Jej raport wymienia, co się wczytało, a w trakcie czas ticka, pamięć i atlas sprite'ów z oceną od „w porządku” do „za ciężko”.
5. **Eksportuj…**: ZIP lub folder z tym samym ID projektu, do zachowania lub udostępnienia.
6. **Opublikuj w Warsztacie**: przy działającym Steam wybierz na pierwszy test **Prywatny**, potem **Sprawdź i przejrzyj** i **Prześlij publikację**. Publikacja nie sprawdza wczytywania: znajdź element w **Przeglądaj warsztaty**, użyj **Subskrybuj** i obserwuj go w **Subskrypcje**, aż będzie dostępny.

## Mapa

Szablon to mapa 32×32 z zamkiem, skrzynią ze 100 złota dwa pola na wschód, 500 złota na start i zwycięstwem za zebranie skrzyń.

1. Maluj teren i rozstawiaj budynki, twierdze i skrzynie w edytorze terenu, potem zapisz.
2. **Zweryfikuj zawartość** ostrzega przed twierdzą, skrzynią lub bossem, do których bohaterowie nie dojdą od zamku.
3. Wersja: podnoś **Wersja projektu** przy każdej opublikowanej zmianie. Zapisy zrobione starą wersją zachowują jej kopię.

## Kampania

Szablon to dwa poziomy, każdy z własną mapą z tym samym zamkiem i skrzynią; plik kampanii ustala ich kolejność i daje każdemu tytuł, tekst fabuły i złoto na start.

1. Otwórz panel kampanii w edytorze terenu, aby ustalić kolejność poziomów, zwycięstwa, tekst fabuły, przenoszenie i wyzwalacze.
2. **Test gry** może zacząć się od dowolnego poziomu.
3. Zależności: gdy poziom używa jednostek wtyczki, dodaj projekt tej wtyczki w **Zależności** z zakresem wersji, np. `>=1.0.0, <2.0.0`.

## Wtyczka

Szablon zawiera klasę bohatera, wroga, budynek rekrutujący tę klasę, twierdzę wysyłającą tego wroga, umiejętność, badanie, wydarzenie, nazwanego bossa, wygląd pola i angielski plik językowy, wszystko we własnej przestrzeni nazw projektu.

1. Edytuj na karcie **Obiekty**. Pasek wybiera rodzaj; każda definicja jest wymieniona pod nazwą i z obrazem, jakie nadałaby jej gra, a wybrana jest pokazana w podglądzie (chodząca jednostka idzie). **Nowy…** dodaje definicję według tego, na czym się opiera, i jej nazwy; obraz i dźwięk wybiera się lub importuje w jej własnych wierszach; formularz właściwości wyszarza wartości wzięte z definicji bazowej i od razu oznacza wartość spoza granic gry. **Zaawansowane** pokazuje wiersz dodawania po ID i JSON definicji.
2. Zasoby: karta **Zasoby** przyjmuje upuszczone pliki obrazów i porównuje każdy z limitami rozmiaru i pamięci. Wygląd pola w szablonie używa `preview.png` jako przykładowego obrazu; podmień go tam.
3. Nadpisania: **Kopiuj z gry…** dodaje pełną kopię postaci z gry pod twoim własnym ID, która zastępuje oryginał tam, gdzie jest używany. Definicja z wbudowanym ID (np. `SLIME` z bazą `SLIME`) zmienia szlam samej gry, dopóki wtyczka jest włączona; **Profile treści** pokazuje, czyje nadpisanie wygrywa.
4. Wersje: **Wersja projektu** to wersja samego projektu; **Obsługiwane wersje gier** to zakres wersji gry, które przyjmuje (`*` dla każdej; kompilacja deweloperska przyjmuje tylko `*`).

## Samouczek bossów (wtyczka + kampania z dwoma poziomami)

Szablon to folder z wtyczką i dwupoziomową kampanią, która jej wymaga; drugi poziom wygrywa się, pokonując nazwanego bossa z wtyczki.

1. **Zależności** kampanii podają projekt i wersję wtyczki, więc test zabiera wtyczkę ze sobą.
2. Najpierw opublikuj wtyczkę, potem kampanię: okno publikacji zaproponuje element Warsztatu wtyczki jako wymagany.
3. Podnoś **Wersja projektu** wtyczki przy każdej zmianie; zakres kampanii trzymaj na tyle szeroki, by ją przyjmował.

## Misja królestwa (jeden poziom: odprawa, zlecenia, fale, boss)

Szablon to jeden poziom królestwa z odprawą, miastem, legowiskiem, flagami korony Zwiad, Zabij i Broń, dwiema zapowiedzianymi falami, nazwanym bossem i opcjonalnym znaleziskiem. Rozbierz go poziom po poziomie w panelu kampanii, potem przejdź wspólne kroki.

## Przykład Frostfang (gotowy pakiet zawartości i jego mapa)

Szablon to gotowy przykład do rozebrania na części: pakiet zawartości z klasą bohatera (Strażnik Mrozu), potworem (Szronowy Yeti), halą, która rekrutuje tę klasę, legowiskiem, z którego wychodzi potwór, dwiema umiejętnościami, badaniem i nazwanym bossem, każde z własnym obrazem i dźwiękiem, oraz mapa, która wymaga pakietu i którą wygrywa się, pokonując bossa.

1. Otwórz mapę w edytorze terenu i naciśnij **Obiekty…**, aby zobaczyć, na czym z gry opiera się każda definicja; zmień liczbę lub nazwę, zapisz i postaw wynik na mapie.
2. Naciśnij **Test**, aby zagrać na mapie z pakietem i niczym więcej z twoich rzeczy.
3. Najpierw opublikuj pakiet, potem mapę: okno publikacji zaproponuje element Warsztatu pakietu jako wymagany.

## Czego szablony nigdy nie zawierają

Szablon nie zawiera prawdziwego ID elementu Warsztatu, konta Steam ani ścieżki bezwzględnej: ID projektów powstają od nowa na twoim komputerze, a każdy plik jest nazwany względem projektu.
