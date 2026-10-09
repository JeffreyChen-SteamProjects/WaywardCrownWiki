---
title: "Tworzenie pluginów"
---

## Tworzenie i testowanie

Otwórz Creator / Workshop z menu głównego albo menedżera map/wtyczek. Utwórz mapę, kampanię z dwoma poziomami, wtyczkę lub samouczek bossa z powiązaną wtyczką; edytuj, zapisuj, sprawdzaj i testuj offline. Zarządzaj projektami lokalnymi, subskrypcjami, publikacjami, wyszukiwaniem i zadaniami. Szablon „Misja królestwa” tworzy jednopoziomową kampanię kingdom z odprawą, zleceniami, falami i nazwanym bossem. Zaimportuj ZIP, plik mapy lub folder projektu przyciskiem „Importuj zawartość” albo upuszczając go na obszar roboczy; „Eksportuj…” zapisuje ZIP lub folder, a „Otwórz folder” pokazuje pliki projektu. Oba pytają o folder (ostatni jest proponowany ponownie), zajęta tam nazwa zmienia się na nazwa-2, nazwa-3…, a nic nie trafia do zawartości pobranej przez Steam. Każdy projekt ma podgląd, rodzaj, wersję, autora, informację, czy ta gra go wczyta, i wynik ostatniej weryfikacji; każda lista ma wyszukiwanie i filtr rodzaju oraz mówi, dlaczego jest pusta, a szczegóły wybranego projektu podają licencję, wersje gry, zależności i folder. „Nowy projekt” wymienia szablony z tym, co każdy tworzy, i pokazuje, gdzie trafi projekt, zanim cokolwiek zostanie zapisane. Weryfikacja ostrzega przed twierdzami, skrzyniami i rozstawionymi bossami, do których bohaterowie nie dojdą z zamku (błąd, gdy zwycięstwo ich wymaga), i ogranicza mapę do 64 twierdz, 256 skrzyń i 32 rozstawionych bossów; dwukrotne kliknięcie problemu na polu mapy otwiera tam edytor. Edytor terenu i kampanii otwiera się we własnym procesie, który wczytuje tylko zależności projektu, więc zawartość zainstalowana przez gracza ani się w nim nie pojawia, ani nie przeszkadza; zapisuje prosto do projektu. Weryfikacja, eksport, test i publikacja czekają, dopóki projekt ma niezapisane zmiany w edytorze otwartym z obszaru roboczego: używają zapisanych plików. W edytorze wtyczek fazy bossa to tabela (zdrowie, przy którym zaczyna się każda, jej umiejętności), a liczba, limit i zapowiedź umiejętności mają własne pola. Edytor wtyczek chwilę po każdej zmianie zapisuje szkic niezapisanej pracy obok ustawień i poza projektem; ponowne otwarcie projektu po awarii proponuje jego przywrócenie. W edytorze wtyczek „Powiel” kopiuje definicję pod nowym ID, definicji wskazywanej przez inną nie można usunąć, dopóki to użycie istnieje, a „Kopiuj z gry…” dodaje pełną kopię aktora z gry pod jego własnym ID, która zastępuje oryginał tam, gdzie jest używany, nie ruszając plików gry. Klasy, wrogowie, budynki, twierdze i badania mają formularz właściwości (zakresy i przyrost cech, upuszczane złoto, ceny, klasa rekrutowana przez budynek, kogo wysyła twierdza, czego dotyczy badanie), który wyszarza wartości przejęte z definicji bazowej i od razu oznacza wartość spoza granic gry lub nieznane ID; zależności edytuje się w tabeli. Karta Zasoby przyjmuje upuszczone pliki, pokazuje widoczny obszar każdego obrazu wobec limitów rozmiaru i pamięci gry, podgląda go jako teren lub ikonę, przechowuje wiersz źródła i autorstwa, wylicza i ustawia definicje, które go używają, zmienia nazwę pliku razem ze wszystkimi użyciami, nie usuwa pliku wciąż używanego i przekierowuje pola wskazujące brakujący plik. Test zaczyna się od listy tego, co wczytano (każda wtyczka w kolejności wczytania z dodanymi lub zastąpionymi definicjami oraz pominięte wtyczki z powodem); obszar roboczy pokazuje tę samą listę i umieszcza pominiętą definicję testowanej wtyczki na liście problemów, gdzie otwarcie problemu z tabeli definicji prowadzi do tej definicji w edytorze wtyczek.

Import folderów/ZIP i edytowalne kopie otrzymują nowe ID i zmienione własne odwołania przestrzeni nazw. Autor, źródło i licencja pozostają; powiązania aktualizacji nie są dziedziczone. Oryginały Steam są tylko do odczytu. Sprawdzane są ścieżki względne, limity, tablice i cykle. Pusta licencja nie zezwala na redystrybucję. Przy publikowaniu kopii przegląd pokazuje jej pochodzenie (projekt, wersję, autora i stronę oryginału) oraz warunki autora oryginału, a wysłać ją można dopiero po potwierdzeniu, że zachowujesz uznanie autorstwa i przestrzegasz warunków albo, gdy oryginał nie podaje licencji, że masz zgodę autora; niepodana licencja zawsze oznacza brak zgody na udostępnianie. Kopia podaje w szczegółach swój oryginał i informuje, gdy subskrybowany oryginał się zmienił, a podpowiedzi przycisków Utwórz lokalną, edytowalną kopię, Eksportuj… i Anuluj subskrypcję mówią, co każdy z nich robi.

Publikacja wymaga Steam: przygotuj stronę i podgląd, sprawdź niezmienną migawkę plików/skrótów i potwierdź wysłanie. Zadania trwają po zamknięciu okna; przygotowanie można anulować. Wyniki wysłane lub nieznane wymagają sprawdzenia/synchronizacji przed ponowieniem. Powiązania rozróżniają konto, aplikację i projekt. Podgląd poniżej 1 MiB; testy z symulowanym Steam. Najpierw opublikuj wymagane wtyczki i potwierdź ID tej samej aplikacji podczas przeglądu mapy/kampanii. Kreator zapisuje teksty strony dla każdego języka i metadane JSON, przycina główny podgląd do kwadratu i porządkuje/usuwa do ośmiu dodatkowych zrzutów. Istniejące publikacje mogą aktualizować tylko stronę i zależności bez ponownego wysyłania zawartości; obrazy są częścią sprawdzanej migawki. Kreator może utworzyć główny podgląd z samego projektu (teren mapy z zamkiem, twierdzami i skrzyniami, pierwsze poziomy kampanii, własne obrazy wtyczki, każdy z tytułem), pokazuje podgląd tak, jak zostanie wysłany, wraz z rozmiarem, rysuje opcjonalny podpis na dole każdego zrzutu i informuje, których obrazów wskazanych w szkicu już nie ma. Jego trzy kroki (strona, zależności i wersje, sprawdzenie) przechodzi się przyciskami Wstecz i Dalej (Alt+←, Alt+→); problem przenosi do swojego kroku i obrysowuje pole do czasu edycji, a sprawdzenie liczy pliki dodane, zmienione i usunięte od ostatniej publikacji. Nieudane zadanie mówi, jaki to rodzaj problemu (uprawnienia, umowa Warsztatu, miejsce, zajęty Steam, przekroczony czas, Steam offline, kontrole, nieznany wynik, przerwanie), co zrobić dalej, i podaje kod jak WS-PERM-R15 bez konta, elementu i nazw plików. Wybranie własnego elementu w Moich publikacjach pokazuje jego widoczność, wersję, czas utworzenia i aktualizacji, rozmiar, powiązany projekt lokalny oraz listę tego, co zmieniłaby aktualizacja z tego projektu: pola strony, pliki i wymagane elementy. Wybranie elementu w przeglądarce pokazuje jego opis (albo informację, że Steam go nie podał) i dwie oddzielne części: co podaje Steam (rodzaj, wymagane elementy, gałęzie gry dozwolone przez autora, wersję zapisaną przy publikacji, czas aktualizacji, rozmiar, głosy) oraz, gdy Steam już go zainstalował, co mówi jego własny manifest (projekt i wersja, czy ta kompilacja uruchomi wymagane wersje gry, wymagane projekty, co może zmienić). Niczego, czego Steam nie podał, nie dopisujemy. Subskrybowany element jest używany dopiero, gdy Steam go zainstaluje i przejdzie on sprawdzenie: jego manifest da się odczytać w tej grze, a każdy wymagany projekt jest zainstalowany w dozwolonej wersji, bez cyklu (gdy ten sam projekt dają dwa elementy, liczy się twoja własna wtyczka, a w przeciwnym razie najstarszy element). Element aktualizowany przez Steam pozostaje w użyciu w zainstalowanej wersji. Karta Subskrypcje pokazuje, na jakim etapie jest każdy subskrybowany element (czeka na Steam, pobiera się z liczbą bajtów, czeka na sprawdzenie, dostępny, brakuje tego, czego wymaga, albo niepowodzenie i jego powód), a przeglądarka mówi to samo o wybranym elemencie; pobierania, którego Steam nie ukończył, na przykład przy pełnym dysku, nie ponawiamy, dopóki nie naciśniesz Ponów pobieranie. Przed wczytaniem zapisu gra sprawdza treść, z którą go zrobiono: gdy użyty projekt zaktualizowano, wyłączono, przestano subskrybować lub nie da się go użyć, albo włączona jest inna treść, wymienia każdy przypadek i po zapytaniu wczytuje zapis z jego zachowanej kopii albo mówi, dlaczego nie da się go wczytać (brak użytecznej kopii, aktualizacja gry, inne konto lub aplikacja Steam, Steam nie działa) i jak to naprawić; plik zapisu i trwająca gra pozostają bez zmian. „Zachowana treść…” na karcie Subskrypcje pokazuje te kopie i zapisy, które od nich zależą, sprawdza je i usuwa nieużywane; kopia, od której zależy zapis, znika dopiero po potwierdzeniu z nazwami zapisów, a ta, której używa działająca gra, nigdy. Szczegóły elementów i projektów podają też wersję tej gry (nieustawioną w kompilacji deweloperskiej, gdy treść wymagająca konkretnej wersji gry się nie wczyta) i jej gałąź Steam, a Otwórz stronę przedmiotu na karcie Subskrypcje pokazuje element, którego nie da się użyć; gdy Steam przełączy grę na inną gałąź w trakcie gry, pojawia się powiadomienie i nic nie uruchamia się ponownie samo. Tagi strony to jej rodzaj plus dowolne z Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art; krok strony pokazuje języki, w których napisano strony (każdy inny język Steam pokazuje stronę domyślną), a dla już opublikowanego elementu „Pobierz stronę ze Steam…” porównuje stronę na Steam ze szkicem pole po polu i bierze tylko zaznaczone pola. Bez Steam subskrybowane elementy nie są ładowane, a zachowane kopie nie są używane, bo jedne i drugie należą do konta i aplikacji Steam (demo i pełna wersja to osobne aplikacje, każda z własnymi elementami, szkicami i profilami treści); zapis, który ich potrzebuje, mówi o tym, a tworzenie, sprawdzanie, testowanie, eksport i import własnych projektów działa offline. Podczas testu gra mierzy czas ticka, pamięć i atlas sprite'ów, a obszar roboczy dodaje je do raportu z oceną w porządku, warto obserwować lub za ciężko oraz podpowiedzią, co pomaga; gdy wysyłanie nie uda się przez treść lub limit, wyjaśnienie podaje limity Steam, a po udanym przypomina, by zasubskrybować i sprawdzić wczytywanie, bo publikacja tego nie sprawdza. Przesyłanie jest przerywane dopiero po pięciu minutach bez postępu, a zakończone lub anulowane zadania znikają z listy po tygodniu; sesje testowe, których nie używa żadna uruchomiona gra, są usuwane przy starcie nowych, Enter na lokalnym projekcie otwiera jego edytor, a te okna mieszczą się na ekranie 1280 × 720 w każdym języku.

## Definicje i zależności

Wersjonowane wtyczki dodają niezależne klasy, wrogów, budynki i placówki z wbudowanych szablonów, a także umiejętności, badania, wydarzenia, nazwanych bossów, zasoby i języki. Nowe ID mają postać `namespace:name`; wbudowane ID nadpisują istniejącą zawartość. Pliki podstawowe pozostają tylko do odczytu. Wyglądy zastępują grafiki postaci lub terenu bez zmiany wartości gry. Budynek gracza może mieć efekt: jedną umiejętność ataku, leczenia, tarczy lub stanu, którą od ustalonego poziomu rzuca w stałych odstępach na wrogów lub bohaterów w zasięgu. Pakiet, którego możliwości to tylko assets i languages, może zawierać tylko skórki i języki, a obraz lub dźwięk, którego gra nie może użyć, zostawia wbudowany.

Wspólny manifest zapisuje ID projektu, autora, wersję, zgodność, zasoby i zależności. Kolejność jest deterministyczna; brakujące, niezgodne lub cykliczne zależności blokują ładowanie. Starsze formaty zachowują kolejność. Profile pokazują nadpisania i dotyczą następnej gry. Profile treści pokazują wybrane wtyczki w kolejności ładowania, każdą z pochodzeniem oraz wersją zainstalowaną, używaną przez działającą grę i wybraną na następny raz; W górę i W dół zmieniają kolejność tylko tam, gdzie pozwalają zależności, a kolejność obowiązuje przy następnym ładowaniu na tym samym koncie i w tej samej aplikacji Steam. Zanim cokolwiek się zmieni, profil pokazuje, co zastosowanie włączy lub wyłączy, wraz z mapami, kampaniami, wtyczkami i zapisami korzystającymi z wyłączanej wtyczki; dwuklik na problemie znajduje jego wtyczkę, mapa lub kampania może zaproponować potrzebne wtyczki, a subskrybowany element, którego tu nie ma (na przykład kopia twojej własnej wtyczki), mówi dlaczego.

## Przykłady

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Zasoby i limity

| JSON | Zasoby i limity |
|---|---|
| skills | attack, heal, shield, status, summon |
| buildings.effect | umiejętność attack, heal, shield lub status (nigdy summon), rzucana co 10–3600 ticków od poziomu budynku 1–3; stany się nie kumulują |
| research | stat_modifier |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; tylko wygląd |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (rysowany jako nieprzezroczysty); skórki postaci: jak ich cel; pozostałe pola oraz layout poza postaciami nie są używane i dają ostrzeżenie |
| plugin art and sounds | 256 MiB zdekodowanych obrazów (szerokość × wysokość × 4) dla wszystkich włączonych pakietów, plik liczony raz, ponad to zostaje wbudowana grafika; 64 MiB dźwięków wtyczek w pamięci |
| capabilities: assets, languages only | tylko skórki i języki; inne definicje są odrzucane |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 map poziomów |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Zgodność z wersją gry

`game_version` określa wymagania dotyczące wydanej wersji uruchomionej gry. `"*"` jest akceptowane również dla starszych projektów. Konkretny zakres jest akceptowany tylko wtedy, gdy kompilacja deklaruje znaną wersję semantyczną gry, która go spełnia; w przeciwnym razie walidacja, wczytywanie i publikacja są odrzucane. W tym repozytorium `game.build_info.GAME_VERSION` jest obecnie nieznane: używaj `"*"`, dopóki kompilacja wydania nie dostarczy zatwierdzonej wersji. Pole `version` projektu i nazwy gałęzi Steam nie określają wersji gry.
