---
title: "Edytor map i kampanii"
---

Wayward Crown zawiera wbudowane edytory map i kampanii, które pozwalają tworzyć niestandardowe poziomy i scenariusze.

---

## Edytor map

Przycisk **Zestaw edytorów** w menu głównym otwiera edytor z nową mapą. Zapisane mapy są wyświetlane, uruchamiane, edytowane, importowane i eksportowane na karcie **Mapy** menedżera map, który otwiera przycisk **Kampanie** w menu głównym.

### Funkcje

- **Malowanie terenu** — Wybierz typ terenu i namaluj go na mapie za pomocą pędzla (rozmiar 1 – 20) lub wypełnij obszar
- **Budynki i jednostki** — Umieszczaj budynki gracza, bohaterów korony, twierdze wrogów, potwory i skrzynie ze skarbami, przesuwaj Zamek lub usuwaj obiekty. Edytor wymaga tylko wolnego terenu: to, do czego królestwo najpierw potrzebowałoby poziomu zamku, drogi zamku albo zgody poziomu, stawia się swobodnie. Droga to jeden z terenów, a nie budynek
- **Losowanie** — Wygeneruj losową mapę jako punkt wyjścia
- **Cofnij / Ponów** — Do 30 kroków (Ctrl+Z / Ctrl+Y)
- **Ustawienia mapy** — Rozmiar (100 – 1000 kafelków na bok), nazwa, autor i inne szczegóły, początkowe złoto i warunek zwycięstwa
- **Zapisz/Wczytaj** — Zapisuj mapy do katalogu `maps/`; Zamknij, Esc i Nowy pytają przed porzuceniem niezapisanych zmian (Zapisz / Odrzuć / Anuluj), a odrzucenie nigdy niezapisanej kampanii usuwa jej folder
- **Obiekty…** — Edytuj w edytorze obiektów klasy bohaterów, potwory, budynki, twierdze i bossów we własnym pakiecie zawartości. Przycisk pokazuje listę twoich pakietów oraz **Nowy pakiet zawartości…** i nie wymaga zapisanej mapy. Pakiet to samodzielna wtyczka; zapisanie go wczytuje zawartość ponownie, więc to, co definiuje, można od razu stawiać. Mapa albo kampania zaczyna wymagać pakietu dopiero wtedy, gdy zostanie zapisana z czymś z tego pakietu
- **Test** — Uruchamia zapisaną mapę albo kampanię na edytowanym poziomie w osobnej grze, z pakietami zawartości, których wymaga, i niczym więcej z twoich rzeczy
- **Panele** — Pędzle i zasady mapy (albo kampania) to panele z kartami obok mapy: przeciągnij panel na drugą stronę albo poza okno, zamknij go i przywróć przyciskiem **Panele**. Tereny, budynki, twierdze i bossów wybiera się po obrazkach, a edytor i okna, które otwiera (edytor obiektów, edytor wyzwalaczy, szczegóły mapy), można zmaksymalizować

Mapa przechowuje bohaterów i potwory, które postawisz: stoją tam, gdy gra się zaczyna. W trakcie gry rekrutowani są kolejni bohaterowie i pojawiają się kolejne potwory.

### Typy terenu

- Łąka, Las, Góry, Woda, Pustynia, Droga, Błoto, Bagno, Śnieg, Wzgórza, Pustkowie, Kwietna łąka

### Format zapisu

Mapy są przechowywane w formacie JSON w katalogu `maps/` i zawierają:

- Dane terenu (skompresowana tablica NumPy)
- Dane wysokości
- Budynki, twierdze wrogów, skrzynie ze skarbami oraz postawieni bohaterowie i potwory
- Pozycję Zamku
- Szczegóły mapy, początkowe złoto i warunek zwycięstwa

---

## Edytor kampanii

Kampanie są tworzone, otwierane, importowane i eksportowane na karcie **Kampanie** menedżera map (przycisk **Kampanie** w menu głównym). Otwarcie kampanii uruchamia edytor map z panelem kampanii, dzięki czemu mapę każdego poziomu i jego ustawienia edytujesz w jednym miejscu.

### Funkcje

- **Kolejność poziomów** — Przesuwaj poziomy w górę i w dół przyciskami strzałek
- **Warunki zwycięstwa** — Ustaw warunki zwycięstwa dla każdego poziomu, w tym typ twierdzy dla `destroy_building`
- **Teksty fabularne** — Ustaw tekst wstępny i tekst ukończenia
- **Zasoby początkowe** — Ustaw początkowe złoto dla każdego poziomu
- **Przeniesienie** — Zachowaj złoto, poszukiwaczy przygód i badania z poprzedniego poziomu
- **Ograniczenia budynków** — Ogranicz typy budynków dostępnych dla gracza
- **Wyzwalacze** — Skryptowe komunikaty i odblokowania budynków dla poziomu (tylko poziomy kampanii)
- **Pola królestwa** — Początkowy poziom zamku na danym poziomie, limit czasu, rada z odprawy i do dwóch opcjonalnych znalezisk
- **Dodatkowe cele i porażki** — Więcej warunków zwycięstwa, wymaganych lub opcjonalnych, i więcej sposobów przegranej (polegli bohaterowie, utracone budynki lub karawany), w dwóch tabelach z Dodaj i Usuń
- **Pochodzenie celu** — Pod celem zwycięstwa: czy boss jest umieszczony na mapie, czy uruchamiany przez wyzwalacz, oraz czy typ twierdzy pochodzi z gry, czy z wtyczki i ile ich stoi na mapie; cel dodatkowego celu mówi to samo w podpowiedzi

### Opcje warunków zwycięstwa

Edytory pokazują je z nazwy, w twoim języku; typ w tabeli to wartość zapisywana w pliku mapy lub kampanii.

| Typ | Opis |
|-----|------|
| `free` | Tryb swobodny, brak warunku zwycięstwa |
| `destroy_enemy_buildings` | Zniszcz wszystkie twierdze wrogów |
| `survive_ticks` | Przetrwaj przez określony czas |
| `reach_gold` | Zgromadź określoną ilość złota |
| `destroy_building` | Zniszcz konkretny typ twierdzy |
| `defend` | Broń Zamku przez określony czas |
| `collect_chests` | Zbierz wszystkie skrzynie ze skarbami |
| `defeat_boss` | Pokonaj nazwanego bossa, ustawionego na mapie lub uruchomionego wyzwalaczem |
| `secure_trade` | Doprowadź do określonej liczby opłaconych kursów karawany i zniszcz wszystkie twierdze wrogów |

### Struktura zapisu

```
campaigns/my_campaign/
├── campaign.json         # Metadane kampanii
├── level1.json           # Mapa poziomu 1
├── level2.json           # Mapa poziomu 2
└── level3.json           # Mapa poziomu 3
```

---

## Udostępnianie niestandardowych treści

- Foldery z mapami i kampaniami można udostępniać poprzez zwykłe kopiowanie lub eksportem i importem w menedżerze map
- Umieść otrzymane mapy w katalogu `maps/`, aby wczytać je z menu głównego
- Umieść otrzymane kampanie w katalogu `campaigns/`, aby pojawiły się w menu głównym
- Gdy gra działa przez Steam, przycisk **Opublikuj w Warsztacie** w menedżerze map umieszcza Twoją mapę lub kampanię w Warsztacie Steam, a subskrybowane pojawiają się na jego listach z oznaczeniem [Warsztat]. Steam dba o ich aktualizacje, więc nie można ich edytować, zmieniać nazwy ani usuwać; **Duplikuj** tworzy własną mapę
- Pakiet zawartości instaluje się samodzielnie: opublikuj go albo udostępnij jego ZIP osobno, a kto go zainstaluje, znajdzie jego klasy, potwory, budynki i twierdze we własnych grach, bez żadnej mapy. Mapa albo kampania, która umieszcza coś z pakietu, wymaga tej wtyczki: publikuj najpierw pakiet (okno publikacji zaproponuje wtedy element Warsztatu pakietu jako wymagany)
