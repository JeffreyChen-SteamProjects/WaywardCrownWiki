---
title: "Tryb kampanii"
---

Tryb kampanii oferuje wielopoziomowe scenariusze, każdy z określonymi warunkami zwycięstwa i tłem fabularnym.

---

## Wbudowane kampanie

Gra zawiera wbudowaną **Kampanię samouczka** (5 poziomów), która prowadzi nowych graczy przez różne mechaniki gry. Ma własny przycisk, pierwszy w menu głównym.

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
| `carry_over` | Co przechodzi z poprzedniego poziomu: `gold`, `adventurers`, `research`, `path` (droga zamku i jej specjalizacja) (każde true/false). To, co poziom wymienia w `carry_over`, jest brane z innego poziomu tej samej kampanii, gdy gracz przechodzi prosto dalej, i w tej chwili zapisywane; każda ponowna próba poziomu zaczyna się od tego zapisu. Poziom uruchomiony z listy misji niczego nie przenosi, a to, czego poziom nie wymienia (także badania i ścieżka zamku), nie przetrwa zmiany mapy. |
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

Misja 1 zaczyna się obok ruin kuźni i targu: ekipa korony odbudowuje je bez kosztów, najpierw kuźnię, a to, co postawisz, także twoja pierwsza gildia, czeka za nimi na swoją kolej, chyba że oznaczysz to jako pierwsze. W misji 1 komunikaty prowadzą od pierwszej gildii do pierwszego bohatera, targu i poborcy podatków. Po około 48 sekundach korona na własny koszt wystawia zlecenie „Zbadaj” w pobliżu obozu; gdy bohater je wykona, pojawia się prośba o wystawienie zlecenia „Zabij” na obóz. W misji 2 korona zleca zbadanie obu miejsc pod faktorię, rabusie raz urządzają zasadzkę na drodze południowej (zapowiedzianą 20 sekund wcześniej), a pierwszy utracony budynek przynosi 400 złota pomocy. W misji 3 jeden najazd nadchodzi wschodnią drogą w tiku 1000, a drugi północną w tiku 2500, a Wódz Zgrzytokieł w tiku 4300, każdy zapowiedziany 100 tików wcześniej; zburzenie jego twierdzy to wyprawa warta łupu, ale zwycięstwo daje tylko pokonanie jego samego. W misjach 1 i 2 można postawić Gildię budowniczych do napraw; w misji 3 zamek, już na 2. poziomie, od razu może obrać drogę, a zburzona twierdza przestaje wysyłać własne najazdy. Misje 2 i 3 zachowują badania z poprzedniej misji, gdy przechodzisz prosto dalej; każda ponowna próba zaczyna się jak pierwsza, a misja wybrana z listy zaczyna się bez nich.

Wyzwania (`campaigns/demo_challenges/`, `"linear": false`) są zapisywane w ten sam sposób. *Cienkie złoto* otwiera się po misji 2: 600 złota, zamek 2. poziomu, małe miasto z faktorią na południowej drodze i 15 minut (`time_limit`) na zburzenie obozu goblinów i obozu bandytów, który napada na drogę; bandyci dwa razy próbują drogi, zanim zaczną się napady samego obozu. *Utrzymaj drogę* otwiera się po misji 3: faktoria jest już otwarta, rabusie nadchodzą drogą południową co 500 tików, za każdym razem trochę silniejsi, a w 14 minut i 20 sekund trzeba doprowadzić do 10 opłaconych kursów karawany. Wolne królestwo (Wolne królestwo w wersji demo albo Tryb piaskownicy w pełnej grze) nie ma celu; w oknie startowym można poprosić, by Wódz Zgrzytokieł przyszedł raz, 20 minut po rozpoczęciu (`game/systems/free_kingdom.py`). W *Utrzymaj drogę* każdy najazd maszeruje na faktorię: faktoria, której nikt nie broni, zostaje zburzona, a jej karawana znika razem z nią, więc bezczynność oznacza przegraną.

## Misja królestwa, krok po kroku

1. W Creator / Workshop wybierz **Nowy projekt**, potem **Misja królestwa** i nowy folder. Dostajesz grywalny poziom: miasto, obóz goblinów na wschodzie, zlecenia korony „Zbadaj”, „Zabij” i „Broń”, dwie zapowiedziane fale i wodza jako nazwanego bossa.
2. Otwórz go w edytorze kampanii. Formularz poziomu ma historię (wstęp), radę z odprawy, złoto na start i zwycięstwo; niżej początkowy poziom zamku, limit czasu i do dwóch opcjonalnych znalezisk z ich polami.
3. Namaluj mapę: przesuń miasto, leże i drogi. Miejsce musi być osiągalne z zamku, inaczej to, co na nim stoi, jest pomijane przy starcie poziomu. Budynek w pliku mapy może mieć `"ruin"` (od 1 do 99): zaczyna jako budowa z takim procentem wykonanej pracy, a ekipa korony kończy go bez kosztów.
4. Otwórz wyzwalacze, aby zmienić komunikaty, zlecenia korony (`post_bounty`), fale (`spawn_enemies`) i czas przybycia bossa (`spawn_boss`). Warunek `enemy_building_seen` czeka, aż leże będzie widoczne.
5. W `campaign.json` pole `roster` wymienia potwory wędrujące po mapie, a `blocked_events` zdarzenia losowe, które nigdy nie są losowane.
6. Zweryfikuj: kontrole wskazują po polu błędny poziom zamku, limit czasu, opcjonalne znalezisko, wpis obsady lub zdarzenie. Potem zagraj poziom z obszaru roboczego; wybrana tam trudność ustala wielkość najazdów, fal i złota na start.
7. Najpierw opublikuj prywatnie, a publicznie udostępnij, gdy gra się tak, jak chcesz.
