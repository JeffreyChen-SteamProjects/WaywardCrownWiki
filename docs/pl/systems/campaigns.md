---
title: "Tryb kampanii"
---

Tryb kampanii oferuje wielopoziomowe scenariusze, każdy z określonymi warunkami zwycięstwa i tłem fabularnym.

---

## Wbudowane kampanie

Gra zawiera wbudowaną **Kampanię samouczka** (5 poziomów), która prowadzi nowych graczy przez różne mechaniki gry. Ma własny przycisk, pierwszy w menu głównym.

---

## Wyprawy

Wyprawa to trasa złożona z map, na której każdy kolejny krok wybierasz sam. Otwiera się ją przyciskiem **Wyprawa** w menu głównym.

**Wyprawa na rubieże** ma sześć map i cztery trasy, po cztery mapy na każdej:

| Etap | Mapa | Czego wymaga |
|---|---|---|
| Start | **Obóz graniczny** | Wznieś miasto i zburz obóz goblinów na wschodzie. Stara latarnia na południowym zachodzie jest opcjonalna: napraw ją albo rozbierz na materiały. |
| Pierwszy | **Eskorta na szlaku handlowym** | Otwórz faktorię na końcu południowej drogi i doprowadź do opłacenia dwóch kursów karawany. Obóz bandytów może zostać. Daje następnej mapie 300 złota. |
| Pierwszy | **Opuszczona stacja** | Dokończ prace przy stacji: odbuduj ją albo sprowadź jej ocalałego do domu. Daje następnej mapie 150 złota. |
| Drugi | **Zapieczętowany grobowiec** | Dokończ prace przy grobowcu: zapieczętuj go, zbadaj albo ograb. |
| Drugi | **Wroga granica** | Przetnij linię zaopatrzenia goblinów (zabij kuriera, zanim dostarczy ładunek, albo zburz obóz, który ich wysyła) i zburz gobliński posterunek. Stara latarnia jest opcjonalna. |
| Koniec | **Przełęcz Korony** | Odeprzyj dwa najazdy, a potem zburz fortecę goblinów. |

Trasa jest narysowana na pergaminowej mapie pogranicza. Każda mapa to pieczęć obwiedziona według tego, czym jest dla twojej wyprawy: wygrana, miejsce, w którym stoisz, i otwarte dalsze drogi, reszta jeszcze zamknięta. Następny krok wybierasz pieczęcią albo z listy obok mapy; podwójne kliknięcie lub Enter wyrusza.

Forteca na przełęczy wysyła trzecią falę posiłków, chyba że twoje podejście przełamało wrogą granicę. Trasa przez grobowiec też może wygrać; po prostu walczy z jedną falą więcej. Na stacji i w grobowcu celem są prace przy ruinie, więc nie ma opcji, by je zostawić. Nieudane prace albo prace, z których się wycofasz, są proponowane ponownie, a mapę przegrywa się tylko wtedy, gdy straci się miejsce ruiny.

**Między mapami** ekran wyprawy pokazuje przebytą dotąd trasę i drogi dalej, każdą z odprawą i z tym, co zmienia na końcu trasy:

- Wybierz drużynę: dalej rusza do **sześciu** bohaterów, reszta czeka z tyłu. Rezerwa mieści najwyżej **dwunastu**; odeślij kogoś do domu, by zrobić miejsce. Bohaterowie wracają w pełni zdrowia. Polegli pozostają polegli.
- Skarbiec następnej mapy to jej własny budżet plus **połowa** złota, które zostało z poprzedniej mapy (najwyżej **1000**), plus nagroda za poprzednią mapę. Ekran sumuje to za ciebie przed wymarszem.
- Badania i droga zamku zostają na całe podejście. Budynki zostają na miejscu.

Przegraną mapę gra się od nowa z tego samego startu: z tymi samymi bohaterami, złotem i mapą. Podejście czeka między mapami, aż wznowisz je z menu głównego. **Porzuć podejście** rezygnuje z niego, a **Zakończ** zamyka podejście, które dotarło do końca. Każda ukończona trasa trafia do twoich rekordów wraz z najlepszym czasem.

### Mapa wersji demonstracyjnej

Pięć poziomów wersji demonstracyjnej narysowano też na jednej pergaminowej mapie, **mapie wyprawy**. Najpierw jest *Pierwsza korona*; otwiera naraz *Cienie na szlaku handlowym*, *Cienkie złoto* i *Utrzymaj drogę*, w dowolnej kolejności. Dwie z trzech otwierają *Noc Zgrzytokła*, a trzecia zostaje otwarta aż do zwycięstwa w finale – pominięcie jej nigdy nie jest porażką.

| Droga | Jej nagroda na następny poziom |
|---|---|
| **Cienie na szlaku handlowym** | 300 złota w skarbcu |
| **Cienkie złoto** | Budynki o jedną czwartą tańsze, aż do 400 złota oszczędności |
| **Utrzymaj drogę** | Wszyscy bohaterowie zaczynają z pełnymi miksturami, a 200 złota idzie na zaopatrzenie |

Nagroda przydaje się na następnym poziomie i znika; powtórka tego poziomu daje ją znowu. Drużyna, połowa skarbca (najwyżej 1000), badania i ścieżka zamku przechodzą dalej jak w Wyprawie na rubieże.

Wybierz pieczęć, by po prawej przeczytać jej poziom: fabułę i cele, przybliżony czas, skarbiec na start i nagrodę. Przerywany pierścień to poziom jeszcze zamknięty (panel mówi, na ile dróg jeszcze czeka), złoty – poziom, na który można wyruszyć, podwójny – poziom wygrany w tej wyprawie. **Wyrusz** go zaczyna; **Trening** gra osobno poziom już wygrany, nie ruszając wyprawy. Poziomy wygrane przed powstaniem mapy mają swoją pieczęć. Przeciąganie przesuwa, kółko przybliża, strzałki przechodzą między pieczęciami, Enter wyrusza, a Home pokazuje całą mapę.

### Tworzenie mapy

Plik `map_route.json` kampanii kładzie jej poziomy na mapie. Tworzy się go w zakładce **Mapa** edytora kampanii: każdy węzeł to poziom we współrzędnych `x`, `y` (od 0 do 1 od lewego górnego rogu), z węzłami, na które czeka (`after`), i liczbą tych, które trzeba wygrać (`need`, wszystkie, gdy pominięte); `minutes` to szacunek z odprawy, a `reward` jednorazowa nagroda (`trade_subsidy`, `build_discount` lub `escort_supply`, z `amount`). `links` to linie atramentu, `end` ostatni węzeł, a `art` obraz: `demo_frontier` albo plik PNG lub JPG w folderze kampanii (najwyżej 8192 piksele na bok i 16 milionów łącznie; inaczej gładki pergamin). **Sprawdź trasę** rysuje podgląd. Jedyny węzeł bez `after` to start; mapę musi dać się przejść do końca w jakiejś kolejności, a Warsztat wymaga, by każdy węzeł był poziomem tej samej kampanii albo kampanii dołączonej do gry.

### Mapa poziomów kampanii

Każdą kampanię wybiera się na pergaminie. Jej `level_map.json` rozmieszcza poziomy; tworzy się go w zakładce **Mapa poziomów** edytora kampanii. `places` daje każdemu poziomowi, według jego stałego `id`, współrzędne `x`, `y` (od 0 do 1 od lewego górnego rogu); `links` to linie atramentu między dwoma poziomami; `art` to obraz (jeden z gry albo PNG lub JPG w folderze kampanii, z tymi samymi limitami co mapa wyprawy). Bez pliku, albo gdy pomija jakiś poziom, poziomy stoją wzdłuż drogi na gładkim pergaminie, połączone według `requires` albo po kolei w kampanii granej w kolejności. O tym, czy poziom jest otwarty, nadal decydują jego `requires`. Trasa wyprawy (`expedition.json`) rozmieszcza mapy tak samo: `art` oraz `x` i `y` każdego węzła; trasa bez nich jest układana według kroków.

### Tworzenie trasy

Kampania staje się wyprawą, gdy obok jej `campaign.json` leży plik `expedition.json`. Zbuduj go w zakładce **Trasa wyprawy** edytora kampanii: przypisz każdemu węzłowi poziom kampanii i złoto, które daje następnemu węzłowi (od 0 do 2000), wypisz drogi dalej, a potem wybierz start i koniec. **Sprawdź trasę** mówi, ile tras z tego wychodzi. Kontrole Warsztatu wymagają, by każdy węzeł wskazywał poziom tej samej kampanii albo kampanii dołączonej do gry. Test gry może zagrać trasę od jej startu.

```json
{
  "version": 1, "id": "frontier", "start": "camp", "end": "pass", "length": 4,
  "nodes": [{"id": "trade", "campaign": "expedition.frontier", "level": "trade", "grants": {"gold": 300}}, "..."],
  "edges": [["camp", "trade"], ["trade", "tomb"], "..."]
}
```

Trasa musi prowadzić od startu do końca, bez pętli; każdy węzeł musi leżeć na jakiejś trasie, a każda trasa musi być tak długa jak `length`. `requires` wymienia funkcje, których trasa potrzebuje poza `expeditions` (na przykład `relics` albo `lair_expansion`). Trasa, której poziom nie jest zainstalowany albo której wydaniu brakuje wymaganej funkcji, nadal widnieje na ekranie wyprawy wraz z powodem, ale nie da się jej rozpocząć. Poziom może zależeć od przebiegu podejścia dzięki warunkom wyzwalaczy `expedition_won` i `expedition_lacks` (`{"node": "<id>"}`), a cele `complete_relic` (ukończone prace przy relikcie) i `intercept_supply` (N wrogich kurierów z zaopatrzeniem zabitych, zanim dostarczą ładunek, albo zburzone wszystkie obozy, które ich wysyłają) dają węzłowi zadanie.

---

## Warunki zwycięstwa

Każdy poziom kampanii może mieć jeden z następujących warunków zwycięstwa:

| `victory` | Warunek | Opis |
|---|---------|------|
| `free` | **Tryb swobodny** | Brak określonego warunku zwycięstwa; graj dowolnie |
| `destroy_enemy_buildings` | **Zniszcz wszystkie twierdze** | Wyeliminuj wszystkie twierdze wrogów na mapie |
| `survive_ticks` | **Przetrwaj określony czas** | Utrzymaj Zamek przy życiu przez określoną liczbę taktów |
| `reach_gold` | **Zgromadź złoto** | Osiągnij docelową ilość złota w skarbcu |
| `destroy_building` | **Zniszcz konkretną twierdzę** | Zniszcz konkretny typ twierdzy wrogów |
| `defend` | **Broń Zamku** | Nie dopuść do zniszczenia Zamku w określonym czasie |
| `collect_chests` | **Zbierz wszystkie skrzynie** | Otwórz każdą skrzynię ze skarbami na mapie |
| `secure_trade` | **Zabezpiecz szlak handlowy** | Opłacono `victory_value` kursów karawany i zniszczono wszystkie twierdze wroga na mapie |

---

## Struktura kampanii

Kampanie są przechowywane jako foldery w katalogu `campaigns/`:

```
campaigns/
└── tutorial/
    ├── campaign.json     # Metadane kampanii i lista poziomów
    ├── level1.json       # Mapa poziomu 1
    ├── level2.json       # Mapa poziomu 2
    └── ...
```

### Format campaign.json

```json
{
  "name": "Tutorial Campaign",
  "description": "Learn the basic game mechanics",
  "levels": [
    {
      "map": "level1.json",
      "title": "A New Beginning",
      "intro": "Welcome to Wayward Crown...",
      "outro": "Congratulations on clearing this level!",
      "starting_gold": 500,
      "victory": "destroy_enemy_buildings",
      "victory_value": 0,
      "victory_target": "",
      "unlocked_buildings": [],
      "carry_over": {"gold": true, "adventurers": true},
      "triggers": [
        {"id": "welcome", "condition": "tick_reached", "params": {"value": 2},
         "action": "show_message", "action_params": {"text_key": "tut_welcome"}}
      ]
    }
  ]
}
```

### Ustawienia poziomu

| Pole | Opis |
|------|------|
| `map` | Ścieżka pliku mapy (względna wobec folderu kampanii) |
| `title` | Tytuł poziomu |
| `intro` | Tekst wprowadzający |
| `outro` | Tekst po ukończeniu |
| `starting_gold` | Złoto początkowe (0 – 10⁷) |
| `victory` | Typ warunku zwycięstwa |
| `victory_value` | Wartość warunku zwycięstwa (np. liczba taktów przetrwania, docelowa ilość złota itp.) (0 – 10⁹) |
| `unlocked_buildings` | Biała lista dostępnych budynków (ogranicza opcje budowania gracza). Pusta lista pozwala na wszystkie budynki; `unlock_building` dopisuje do niepustej listy. |
| `victory_target` | Typ twierdzy dla `destroy_building` (np. `DRAGON_NEST`); w innych przypadkach ignorowany |
| `carry_over` | Co przechodzi z poprzedniego poziomu: `gold`, `adventurers`, `research`, `path` (droga zamku i jej specjalizacja) (każde true/false). To, co poziom wymienia w `carry_over`, jest brane z innego poziomu tej samej kampanii, gdy gracz przechodzi prosto dalej, i w tej chwili zapisywane; każda ponowna próba poziomu zaczyna się od tego zapisu. Poziom uruchomiony z mapy kampanii niczego nie przenosi, a to, czego poziom nie wymienia (także badania i ścieżka zamku), nie przetrwa zmiany mapy. |
| `triggers` | Zdarzenia skryptowe: `condition` + `params`, `action` + `action_params`, opcjonalnie `id`, `after` (czeka na ten wyzwalacz) i `once`. Warunki: `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Akcje: `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Wyzwalacz, który nie jest obiektem lub ma pole z niewłaściwym rodzajem wartości, jest pomijany i zgłaszany w konsoli. `chests_opened`, `enemy_killed_count` i `bounties_completed` liczą od początku poziomu. Powtarzający się wyzwalacz (`once: false`) działa w każdym tiku, w którym spełniony jest jego warunek, więc weryfikacja odrzuca taki, który przywołuje wrogów, płaci, wystawia zlecenie lub uruchamia zdarzenie; spotkanie z bossem zaczyna się raz i nigdy dopiero po jego własnej porażce. Fala `spawn_enemies` może mieć `march` (`castle` albo `road`): wtedy maszeruje na zamek lub na najbliższą faktorię, zamiast błąkać się tam, gdzie się pojawiła. `reveal` (`x`, `y`, `radius` od 1 do 40) pokazuje graczowi miejsce: teren w tym promieniu staje się zbadany. `ticks_after_step` liczy swoje `value` od ticku, w którym zadziałał wyzwalacz wskazany w `after`. Parametr `show_message` zapisany jako `i18n:<key>` jest tłumaczony, zanim trafi do tekstu, więc komunikat może nazwać panel lub budynek słowami samej gry. |
| `id` | Stała nazwa poziomu dla postępów i `requires` (litery, cyfry, `.`, `-`, `_`); gdy pominięta, `level<n>` według pozycji |
| `requires` | Poziomy, które trzeba najpierw ukończyć: `id` poziomu tej kampanii albo `<id kampanii>/<id poziomu>` |
| `ruleset` | Tylko `kingdom` i można je pominąć: każdy poziom toczy się według zasad królestwa. Poziom lub mapa, które podają `classic` albo nie podają niczego, są rozgrywane jako królestwo; nieznana nazwa jest odrzucana |
| `castle_level` | Poziom zamku, z którym zaczyna się poziom (1–3); gdy pominięty, stołp |
| `time_limit` | Liczba tików, jaką może trwać poziom; gdy miną bez wygranej, poziom jest przegrany. 0 lub pominięte: bez limitu |
| `advice` | Co radzi odprawa; jak inne teksty może być kluczem `i18n:` |
| `side_quests` | Do dwóch opcjonalnych znalezisk na poziomie, każde `{"kind", "x", "y"}` z kind spośród `supply_party`, `guarded_cache`, `lair_treasure`; `enemy` lub `lair` może wskazać, kto tam jest |
| `objectives` | Do 8 dodatkowych warunków zwycięstwa, każdy `{"victory", "value", "target", "required"}` z dowolnym zwycięstwem oprócz `free`. Poziom jest wygrany, gdy spełnione są zwycięstwo główne (jeśli nie `free`) i wszystkie wymagane; opcjonalne są liczone w wierszu celu i wymienione w wynikach |
| `defeats` | Do 4 dodatkowych sposobów przegranej, każdy `{"kind", "value"}`: `heroes_lost`, `buildings_lost` lub `caravans_lost` osiąga wartość od początku poziomu |
| `hero_bonds_disabled` | `true`: na tym poziomie bohaterowie nie zawierają nowych więzi i nie zapraszają towarzyszy (dotychczasowe więzi zostają); pominięte: więzi jak zwykle |

Sama kampania może mieć `id` (nazwę, pod którą zapisywane są jej postępy) oraz `"linear": false` (niezależne wyzwania: wygrana nie prowadzi do następnego poziomu). Może też wymienić `blocked_events`: nazwy zdarzeń losowych, których jej poziomy nigdy nie losują (na przykład `DRAGON_NEST`). Oraz `roster`: rodzaje wrogów (nazwy takie jak `GOBLIN`), które wędrują i najeżdżają na jej poziomach; bez niego wszystkie.

:::tip[Obsługa lokalizacji]
Teksty kampanii mogą używać znaczników `i18n:KEY`, które automatycznie wyświetlą odpowiednie tłumaczenie na podstawie języka gracza.
:::

---

## Kampania demo

Fabularną kampanię demo (`campaigns/demo_kingdom/`) otwiera się z menu głównego. Tak jak samouczek zapisuje ją `game/systems/demo_campaign.py`.

| Misja | Cel | Przegrywasz, gdy | Start |
|---|---|---|---|
| 1. Pierwsza korona | Znaleźć obóz goblinów na wschód od stołpu i doprowadzić do jego zniszczenia | Stołp upadnie | 1600 złota i krótka lista budynków, a do tego ruiny kuźni i targu |
| 2. Cienie na szlaku handlowym | Doprowadzić do trzech opłaconych kursów karawany i zniszczyć obóz rabusiów | Zamek upadnie | 2400 złota, zamek na poziomie 2, małe miasto i dwie brukowane drogi |
| 3. Noc Zgrzytokła | Pokonać Wodza Zgrzytokła | Zamek upadnie | 3000 złota, zamek na poziomie 2 i miasto z sześcioma budynkami |

Misja 1 zaczyna się obok ruin kuźni i targu: ekipa korony odbudowuje je bez kosztów, najpierw kuźnię, a to, co postawisz, także twoja pierwsza gildia, czeka za nimi na swoją kolej, chyba że oznaczysz to jako pierwsze. W misji 1 komunikaty prowadzą od pierwszej gildii do pierwszego bohatera, targu i poborcy podatków. Po około 48 sekundach korona na własny koszt wystawia zlecenie „Zbadaj” w pobliżu obozu; gdy bohater je wykona, pojawia się prośba o wystawienie zlecenia „Zabij” na obóz. W misji 2 korona zleca zbadanie obu miejsc pod faktorię, rabusie raz urządzają zasadzkę na drodze południowej (zapowiedzianą 20 sekund wcześniej), a pierwszy utracony budynek przynosi 400 złota pomocy. W misji 3 jeden najazd nadchodzi wschodnią drogą w tiku 1000, a drugi północną w tiku 2500, a Wódz Zgrzytokieł w tiku 4300, każdy zapowiedziany 100 tików wcześniej; zburzenie jego twierdzy to wyprawa warta łupu, ale zwycięstwo daje tylko pokonanie jego samego. W misjach 1 i 2 można postawić Gildię budowniczych do napraw; w misji 3 zamek, już na 2. poziomie, od razu może obrać drogę, a zburzona twierdza przestaje wysyłać własne najazdy. Misje 2 i 3 zachowują badania z poprzedniej misji, gdy przechodzisz prosto dalej; każda ponowna próba zaczyna się jak pierwsza, a misja wybrana na mapie zaczyna się bez nich.

Wyzwania (`campaigns/demo_challenges/`, `"linear": false`) są zapisywane w ten sam sposób. *Cienkie złoto* otwiera się po misji 2: 600 złota, zamek 2. poziomu, małe miasto z faktorią na południowej drodze i 15 minut (`time_limit`) na zburzenie obozu goblinów i obozu bandytów, który napada na drogę; bandyci dwa razy próbują drogi, zanim zaczną się napady samego obozu. *Utrzymaj drogę* otwiera się po misji 3: faktoria jest już otwarta, rabusie nadchodzą drogą południową co 500 tików, za każdym razem trochę silniejsi, a w 14 minut i 20 sekund trzeba doprowadzić do 10 opłaconych kursów karawany. Wolne królestwo (Wolne królestwo w wersji demo albo Tryb piaskownicy w pełnej grze) nie ma celu; w oknie startowym można poprosić, by Wódz Zgrzytokieł przyszedł raz, 20 minut po rozpoczęciu (`game/systems/free_kingdom.py`). W *Utrzymaj drogę* każdy najazd maszeruje na faktorię: faktoria, której nikt nie broni, zostaje zburzona, a jej karawana znika razem z nią, więc bezczynność oznacza przegraną.

**Wyzwania z bossami** wybiera się w menu głównym, na ich własnej pergaminowej mapie. Z każdym z trzech bossów — wodzem Zgrzytokłem, wydmowym skorpionem i popielnym tyranem — walczy się osobno. Budynki i badania opłacono już z 14000 zł, a bohaterowie to ci, których zwerbują twoje gildie: boss przybywa po dziesięciu minutach, odliczanie widać w wierszu celu, a minutę wcześniej ostrzega komunikat. Pokonanie bossa daje zwycięstwo. Utrzymanie placówki i zburzenie świątyni kultystów, która przysyła strażników tyrana, to cele dodatkowe: ich niewykonanie nigdy nie oznacza porażki. Na poziomie Trudny każdy boss używa wzmocnionych ataków przy tych samych progach zdrowia.

## Misja królestwa, krok po kroku

1. W Creator / Workshop wybierz **Nowy projekt**, potem **Misja królestwa** i nowy folder. Dostajesz grywalny poziom: miasto, obóz goblinów na wschodzie, zlecenia korony „Zbadaj”, „Zabij” i „Broń”, dwie zapowiedziane fale i wodza jako nazwanego bossa.
2. Otwórz go w edytorze kampanii. Formularz poziomu ma historię (wstęp), radę z odprawy, złoto na start i zwycięstwo; niżej początkowy poziom zamku, limit czasu i do dwóch opcjonalnych znalezisk z ich polami.
3. Namaluj mapę: przesuń miasto, leże i drogi. Miejsce musi być osiągalne z zamku, inaczej to, co na nim stoi, jest pomijane przy starcie poziomu. Budynek w pliku mapy może mieć `"ruin"` (od 1 do 99): zaczyna jako budowa z takim procentem wykonanej pracy, a ekipa korony kończy go bez kosztów.
4. Otwórz wyzwalacze, aby zmienić komunikaty, zlecenia korony (`post_bounty`), fale (`spawn_enemies`) i czas przybycia bossa (`spawn_boss`). Warunek `enemy_building_seen` czeka, aż leże będzie widoczne.
5. W `campaign.json` pole `roster` wymienia potwory wędrujące po mapie, a `blocked_events` zdarzenia losowe, które nigdy nie są losowane.
6. Zweryfikuj: kontrole wskazują po polu błędny poziom zamku, limit czasu, opcjonalne znalezisko, wpis obsady lub zdarzenie. Potem zagraj poziom z obszaru roboczego; wybrana tam trudność ustala wielkość najazdów, fal i złota na start.
7. Najpierw opublikuj prywatnie, a publicznie udostępnij, gdy gra się tak, jak chcesz.

<!-- gameplay-preparation:start -->

Bohaterowie porównują dostępne sklepy, ceny i rzeczywistą liczbę miejsc noclegowych. Po odwrocie regenerują się przed niebezpieczną pracą; szczegóły wyprawy pokazują przygotowanie i dostępny odpoczynek. Własne poziomy mogą oferować do trzech kompletnych planów zwycięstwa z zachowaniem wspólnych wymagań. Klasyczne poziomy z jednym warunkiem wygrywają po osiągnięciu celu w ostatnim dozwolonym ticku; alternatywne plany zachowują pierwszeństwo porażki.

```json
{
  "victory": "free",
  "objectives": [
    {
      "victory": "protect_building",
      "target": "trade-post"
    }
  ],
  "victory_plans": [
    {
      "id": "commerce",
      "title": "i18n:victory_kind_caravan_rounds",
      "objectives": [
        {
          "victory": "caravan_rounds",
          "value": 2
        }
      ]
    },
    {
      "id": "assault",
      "title": "i18n:victory_kind_destroy_building",
      "objectives": [
        {
          "victory": "destroy_building",
          "target": "GOBLIN_TENT"
        }
      ]
    }
  ]
}
```

```json
{"type": "TRADING_POST", "x": 100, "y": 80, "objective_id": "trade-post"}
```

Szczegóły wyprawy prowadzą do dostępnych sklepów z miksturami i odpoczynków oraz pokazują nauczone leczenie i tarcze sojuszników. Sklepy zapisują wizyty, średni czas podróży i ataki. Wyniki podają jeden główny plan zwycięstwa i jednoczesne osiągnięcia, z jednorazowym rozliczeniem podstawowym.

<!-- gameplay-preparation:end -->

## Starożytna latarnia

Na mapach ze starożytną latarnią wybierz odkryte miejsce, aby zobaczyć koszty, termin i opcje w szczegółach. Naprawa wymaga ekipy lub budowniczego na miejscu i zatrzymuje się w połowie na dodatkowe fundusze lub wycofanie. Ukończenie ostrzega o odkrytych wrogach w promieniu 20 pól. Skarb wymaga, by bohater dobrowolnie przyjął flagę eksploracji, dotarł i pracował; skarbiec i pracownik otrzymują po jednej wypłacie. Ignorowanie nie uruchamia terminu; wycofanie zwraca tylko niewykorzystane środki. Ruina nie rekrutuje ani nie wzmacnia flag. Opuszczenie poziomu porzuca przyjęte prace przy relikcie i zwraca niewydane środki, tak jak wycofanie; skutki reliktu zostają na jego mapie, a na kolejny poziom przechodzi tylko to, co przenosi kampania (złoto, bohaterowie, badania).

## Opcjonalne zaopatrzenie goblinów

Mapy i poziomy mogą zadeklarować funkcję `lair_expansion` i listę najwyżej czterech planów. Każdy plan wymaga `id` i `target`, wskazującego istniejący namiot goblinów przez unikatowe `objective_id`. Przewoźnik musi dotrzeć, a żywy pracownik budować na miejscu. Konwoje, eskorty, obrońcy i najazdy dzielą skończony budżet: najwyżej cztery cykle i 64 nowe jednostki na źródło. Utrata posterunku opóźnia i osłabia niewysłany najazd; zniszczenie bazy kończy produkcję, lecz pozostawia żywe jednostki i opcjonalne posterunki. Posterunki nie zwiększają obowiązkowych baz do zwycięstwa. Bez planów działa dawny harmonogram. Przewoźnicy niosą charakterystyczne skrzynie, mają własne animacje i dźwięki i pojawiają się tylko w przydzielonych konwojach. Po zwiadzie można wyznaczyć nagrodę za ruchomego przewoźnika. Jego śmierć anuluje ten ładunek i opóźnia produkcję; żywa eskorta pozostaje w walce. Ładunek i nagroda są rozliczane raz; anulowanie stosuje zwykłe zasady zwrotu. Posterunki mają własne rusztowania, gotowe wiaty zaopatrzenia i zgliszcza. Żywy robotnik buduje miejsce podatne na atak; przed ukończeniem nie powstają nowi obrońcy. Zniszczenie posterunku opóźnia niewysłane ataki i przenosi zbiórkę do głównej kryjówki. Jej zniszczenie zatrzymuje produkcję, lecz pozostawia żywe oddziały i osierocone posterunki. Źródło zachowuje najwyżej jedną dekoracyjną ruinę bez obrońców i nowych celów zwycięstwa.

Formularz Rozbudowa kryjówek służy mapom i kampaniom: do czterech namiotów goblinów, czasy ochrony, przygotowania, dostawy, budowy, zbiórki i oczekiwania, cykle, wspólny budżet, eskorta i osiem zakazanych prostokątów na źródło. Czas w sekundach gry, co 0,2. Zastosowanie zmienia szkic autora; anulowanie zachowuje wartości. Puste źródła mapy wyłączają rozbudowę. Wyraźne wyłączenie poziomu ma pierwszeństwo; inaczej jego pusta lista dziedziczy mapę. Duplikaty, brakujące źródła i strefy poza mapą są odrzucane przed zapisem.

Wspólny limit posterunków mapy wynosi od jednego do czterech. Konwój dla nowej budowy rezerwuje miejsce przed wyjściem; przy pełnym limicie inne źródła czekają bez tworzenia jednostek i gromadzenia najazdów. Żywy osierocony posterunek zajmuje miejsce do zniszczenia.

Warstwa wywiadu zaopatrzenia pokazuje tylko obserwowane punkty i miejsca. Produkcja, zdrowie, skarb i obrońcy kryjówki, etap/postęp posterunku i pozycje konwoju mają osobne czasy obserwacji. Poza widokiem zostaje ostatnia wartość; ukryta budowa lub rozbiórka nie zmienia znanego obrazu. Ponowny zwiad aktualizuje dane. Trasa pamięta do szesnastu punktów. Powiadomienia pozostają jednorazowe po wczytaniu; odprawa wyjaśnia cztery strategie przeciw skończonemu budżetowi.

Swobodna gra oferuje ograniczoną ekspansję namiotów goblinów, domyślnie włączoną. Gra mieszana lub z goblinami rezerwuje jeden z wybranych slotów kryjówek na namiot i wiąże do czterech istniejących namiotów, bez zwiększania liczby kryjówek. Inne rasy nie otrzymują dodatkowych źródeł. Kampanie używają ustawień autora.

Rusztowanie, magazyn i ruina mają odrębne sylwetki i ruchomą tkaninę, nieruchomą przy ograniczeniu ruchu. Kurier używa młotka tylko podczas rzeczywistej pracy. Dostrzeganie konwoju, budowy, ukończenia i ruiny ma własne ikony i dźwięki. Ukryte zmiany i wczytanie nie powtarzają powiadomień. Małe formularze i wywiad można przewijać, panel również klawiaturą.

Kurierzy czekają do 10 sekund, aż ruchome jednostki opuszczą teren nowej placówki, nigdy dłużej niż do terminu dostawy; potem i tak dostarczają, a kto tam jeszcze stoi, zostaje przeniesiony na najbliższe wolne pole. Kurierzy i eskorta zatrzymują się poza planowanym terenem.

Po odzyskaniu materiałów ze starożytnej wieży sygnałowej ekipy nie odbudują jej za darmo; odzysk i naprawa wykluczają się wzajemnie.

Poniżej domyślne warunki grobowca i stacji. Wybierz odkryte miejsce, aby zobaczyć rzeczywiste koszty autora, pozostały pierwotny termin i wyniki; gra trwa podczas wyborów.

Sekcja opcjonalna kroniki śledzi odkryte relikty, wybraną gałąź, postęp, przeszkody, pozostały pierwotny termin i rzeczywiste wyniki. Pokaż wskazuje pierwotne miejsce bez przyjmowania wyboru ani wydawania złota. Relikt, który pojawia się w zasięgu wzroku, to wiadomość, podobnie jak przyjęte prace, które stają w połowie, kończą się niepowodzeniem lub zostają ukończone; wycofanie, które wybierzesz, zapisuje się jako wiersz dziennika. Miejsce pokazuje swój stan: ruina, dopóki nie przyjmiesz pracy, rusztowania i ułożone materiały, gdy korona tam pracuje, to, co zostawia ukończony wybór (zapalona lub rozebrana latarnia, zapieczętowany lub otwarty grobowiec, odbudowana stacja), albo gruzy, gdy praca się nie powiodła. To, co wstrzymuje prace, jest podane dokładnie: brak bohatera, który by się ich podjął, powód odmowy bohaterów, potwory przy miejscu, inna praca ekipy najpierw (wraz z miejscem w kolejce) albo woda, urwiska lub budynki zamykające miejsce.

Liczba opcjonalnych reliktów: 0 wyłącza generowanie. Do dwóch różnych reliktów na dostępnym otwartym terenie poza bezpieczną strefą zamku; drogi i trasy pozostają wolne. Bez płatności ani prac przed przyjęciem wyboru. Miejsca leżą 21–80 pól od zamku i muszą przejść sprawdzenie zwykłej trasy robotników.

Reguły mapy i poziomy korzystają z edytora do dwóch pierwotnych miejsc, stałych opcji oraz ograniczonych kosztów, nagród, pracy i terminów. Anuluj zachowuje szkic; Zastosuj sprawdza źródła bez uruchamiania gry. Pusta lista poziomu dziedziczy mapę; `relics_disabled: true` wyłącza dziedziczenie. Wyczyszczenie reliktów osobnej mapy usuwa szablony przy zapisie.

**Zapieczętowany grobowiec**

- Wzmocnij pieczęć: Po dopłacie tłumi tylko 2 zaplanowanych najazdów z Cmentarz / Zamek nieumarłych. Strażnicy, zwykli wrogowie i inne źródła bez zmian. Pierwotne źródło musi przetrwać.
- Sfinansuj badania: Jedno dozwolone odblokowanie Arkaniczna więź albo 80 złota, gdy jest niedostępne lub już znane. Obowiązują zwykłe wymagania wieży magów i badań. Postój w połowie: dopłać lub wycofaj się.
- Otwórz grobowiec: Jeden skarb 240 złota po rzeczywistej eksploracji i pokonaniu 3 szkieletowych strażników. Finansowanie otwiera grobowiec; żywi strażnicy zostają po wycofaniu lub terminie.

**Opuszczona stacja**

- Odbuduj zaopatrzenie: Przywraca 6 wspólnych płatnych zakupów poziomu 1: leczenie, mikstury lub odczynniki po zwykłych cenach. Brak okresowego dochodu i ulepszeń. Odbudowa i ratunek wykluczają się.
- Eskortuj ocalałego: Ochotnicy muszą eskortować pierwotnego ocalałego do bezpiecznego zamku. Szansa dołączenia 75% jest ustalana przy finansowaniu: jeden zwiadowca tylko przy dozwolonej klasie i drodze oraz wolnym miejscu w ukończonej siedzibie po przybyciu. Skarbiec otrzymuje 120 złota niezależnie od dołączenia; brak oczekującego naboru. Ratunek wyklucza odbudowę.

## Wspólne rozszerzenia tej wersji

Demo i pełna gra mają wszystkie cztery; każde włącza się tylko tam, gdzie prosi o to mapa, poziom lub ustawienie, a stare zapisy, mapy i wtyczki nie włączają ich same.

- **Rozrost legowisk**: kurierzy zaopatrzenia, placówki i ograniczone ofensywy goblińskiego namiotu. W wolnej grze *Rozbudowa goblinów z ograniczonym zaopatrzeniem* (domyślnie włączony).
- **Więzi bohaterów**: relacje, zaproszenia, wspólne wędrówki i rozstania, lista i panel powodów. W wolnej grze *Więzi bohaterów* (domyślnie włączone).
- **Ruiny**: pradawna latarnia, zapieczętowany grobowiec i zaginiona stacja, każda z dwoma głównymi wyborami. W wolnej grze *Liczba opcjonalnych reliktów* (domyślnie 0).
- **Wyprawy**: rundy, trasy, lista przechodząca z mapy na mapę, ponowne próby i *Wyprawa pograniczna* z sześciu map i czterech tras; gdy czegoś brakuje, wyprawa mówi czego i nie oferuje tras na pół gotowych.

Nie w tej wersji: rozrost innych ras wrogów, więcej ruin, dłuższe wyprawy i losowe trasy oraz ceny i walki ruin ustalone prawdziwą grą.
