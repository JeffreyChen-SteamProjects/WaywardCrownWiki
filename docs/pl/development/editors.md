---
title: "Edytor map i kampanii"
---

Wayward Crown zawiera wbudowane edytory map i kampanii, które pozwalają tworzyć niestandardowe poziomy i scenariusze.

---

## Edytor map

Przycisk **Edytor map** w menu głównym otwiera edytor z nową mapą. Zapisane mapy są wyświetlane, uruchamiane, edytowane, importowane i eksportowane na karcie **Mapy** menedżera map, który otwiera przycisk **Kampanie** w menu głównym.

### Funkcje

- **Malowanie terenu** — Wybierz typ terenu i namaluj go na mapie za pomocą pędzla (rozmiar 1 – 20) lub wypełnij obszar
- **Rozmieszczanie budynków** — Umieszczaj budynki gracza, twierdze wrogów i skrzynie ze skarbami, przesuwaj Zamek lub usuwaj obiekty
- **Losowanie** — Wygeneruj losową mapę jako punkt wyjścia
- **Cofnij / Ponów** — Do 30 kroków (Ctrl+Z / Ctrl+Y)
- **Ustawienia mapy** — Rozmiar (100 – 1000 kafelków na bok), nazwa, autor i inne szczegóły, początkowe złoto i warunek zwycięstwa
- **Zapisz/Wczytaj** — Zapisuj mapy do katalogu `maps/`; Zamknij, Esc i Nowy pytają przed porzuceniem niezapisanych zmian (Zapisz / Odrzuć / Anuluj), a odrzucenie nigdy niezapisanej kampanii usuwa jej folder
- **Obiekty…** — Edytuj w edytorze obiektów klasy bohaterów, potwory, budynki, twierdze i bossów stworzonych dla mapy. Za pierwszym razem tworzy pakiet zawartości mapy (twoją wtyczkę, której mapa wymaga); zapisanie pakietu wczytuje zawartość ponownie, więc to, co definiuje, można od razu stawiać
- **Test** — Uruchamia zapisaną mapę albo kampanię na edytowanym poziomie w osobnej grze, z jej pakietem zawartości i niczym więcej z twoich rzeczy

Mapy nie zawierają jednostek: poszukiwacze przygód są rekrutowani, a wrogowie pojawiają się dopiero po uruchomieniu gry.

### Typy terenu

- Łąka, Las, Góry, Woda, Pustynia, Droga, Błoto, Bagno, Śnieg, Wzgórza, Pustkowie, Kwietna łąka

### Format zapisu

Mapy są przechowywane w formacie JSON w katalogu `maps/` i zawierają:

- Dane terenu (skompresowana tablica NumPy)
- Dane wysokości
- Budynki, twierdze wrogów i skrzynie ze skarbami
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

| Typ | Opis |
|-----|------|
| `free` | Tryb swobodny, brak warunku zwycięstwa |
| `destroy_enemy_buildings` | Zniszcz wszystkie twierdze wrogów |
| `survive_ticks` | Przetrwaj przez określony czas |
| `reach_gold` | Zgromadź określoną ilość złota |
| `destroy_building` | Zniszcz konkretny typ twierdzy |
| `defend` | Broń Zamku przez określony czas |
| `collect_chests` | Zbierz wszystkie skrzynie ze skarbami |

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
- Mapa albo kampania z pakietem zawartości wymaga tej wtyczki: udostępniaj pakiet razem z nią, a publikuj najpierw pakiet (okno publikacji zaproponuje wtedy element Warsztatu pakietu jako wymagany)
