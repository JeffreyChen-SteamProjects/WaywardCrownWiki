---
title: "Mapy i teren"
---

Mapa gry jest renderowana przy użyciu izometrycznej projekcji 2:1 i obsługuje wiele typów terenu.

---

## Specyfikacja mapy

| Właściwość | Wartość |
|------------|---------|
| Domyślny rozmiar | 1000 × 1000 pól |
| Regulowany zakres | 250 ~ 1000 pól |
| Rozmiar pola | 256 pikseli |
| Projekcja | Izometryczna 2:1 (romb) |

---

## Typy terenu

| Teren | Przejezdny | Koszt ruchu | Bazowa wysokość | Odradzanie wrogów |
|-------|------------|-------------|-----------------|---------------------|
| **Łąka** | Tak | 1 | 0 | Olbrzymi szczur, Bandyta, Harpia |
| **Las** | Tak | 2 | 0,5 | Szlam, Zombie, Wilkor, Olbrzymi pająk, Mroczny kultysta |
| **Góry** | Tak | 3 | 5,0 | Goblin, Szkielet, Smok, Ork siłacz, Goblin łucznik, Troll |
| **Woda** | Nie | — | -1,0 | — |
| **Miasto** | Tak | 1 | 0 | — |
| **Droga** | Tak | 1 | 0 | — |
| **Bagno** | Tak | 3 | -0,3 | — |
| **Pustynia** | Tak | 2 | 0,2 | Piaskowa zjawa |
| **Błoto** | Tak | 2 | -0,1 | — |
| **Śnieg** | Tak | 1 | 0,2 | Olbrzymi szczur, Bandyta, Harpia |
| **Wzgórza** | Tak | 1 | 1,6 | Olbrzymi szczur, Bandyta, Harpia |
| **Pustkowie** | Tak | 2 | 0,3 | Piaskowa zjawa |
| **Kwietna łąka** | Tak | 1 | 0 | Olbrzymi szczur, Bandyta, Harpia |

:::tip[Koszt ruchu]
Niższe wartości oznaczają szybsze poruszanie się. Droga i Miasto mają najniższy koszt ruchu (1), podczas gdy Góry i Bagno mają najwyższy (3). Dobre wykorzystanie dróg może znacznie poprawić efektywność podróżowania poszukiwaczy przygód.
:::

---

## Mgła wojny

Mapa posiada trzy warstwy widoczności:

| Stan | Jasność | Opis |
|------|---------|------|
| **Niezbadane** | 0 (całkowicie ciemne) | Nigdy nie widziane przez żadnego poszukiwacza przygód ani budynek |
| **Zbadane** | 115 (ciemnoszare) | Wcześniej widziane, ale obecnie poza zasięgiem wzroku |
| **Widoczne** | 255 (pełne oświetlenie) | Obecnie w zasięgu wzroku poszukiwacza przygód lub budynku |

**Co jest rysowane i gdzie.** To, co twoje, jest rysowane zawsze: budynki, bohaterowie, mieszkańcy, poborcy podatków, karawany i flagi nagród, także na terenie, którego nikt nie widzi. Leże albo starożytne ruiny są rysowane, gdy tylko zobaczono jakąkolwiek ich część, i tak zostają. Od tej chwili bohaterowie także wiedzą o leżu i mogą ruszyć na nie z własnej woli. Potwory są rysowane tylko wtedy, gdy widzi je bohater. Portale rozdarcia wymiarów są rysowane jako pierścienie fioletowego światła, gdy tylko zobaczono ich teren.

### Źródła widzenia

| Źródło | Zasięg widzenia |
|--------|-----------------|
| Zamek | 30 pól |
| Poszukiwacz przygód (bazowy) | 8 pól |
| Mag (dystansowy) | 12 pól |
| Łowca (dystansowy) | 11 pól |
| Budynek obronny (Wieża strzelnicza) | 16 pól |
| Zwykły budynek | 7 pól |
| Struktura twierdzy wrogów | 10 pól |

:::note[Widzenie poszukiwaczy dystansowych]
Magowie i Łowcy widzą dokładnie tak daleko, jak sięga ich atak (12 i 11 pól), dzięki czemu gracze widzą atakowane cele.
:::

---

## Generowanie mapy

Mapy trybu piaskownicy są losowo generowane przy użyciu algorytmu **Value Noise**:

1. Generowanie szumu terenu → określanie typów terenu
2. Generowanie szumu wysokości → określanie zmienności wysokości
3. Umieszczenie Zamku → utworzenie strefy Miasta w losowym miejscu środkowej połowy mapy
4. Rozrzucenie skrzyń ze skarbami → max(10, 250 × W × H ÷ 1000²) skrzyń rozmieszczonych na dzikich terenach
5. Generowanie twierdz wrogów → umieszczenie z dala od Zamku

---

## Skrzynie ze skarbami

| Właściwość | Wartość |
|------------|---------|
| Początkowa liczba | max(10, 250 × W × H ÷ 1000²) |
| Zakres złota | 20 ~ 55 szt. złota |
| Lokalizacja | Przejezdne obszary poza Miastami |

Poszukiwacze przygód automatycznie podnoszą skrzynie ze skarbami, gdy po nich przechodzą. Dzięki umiejętności badawczej „Zmysł skarbów” ilość złota jest zwiększona o +50%. Otwarta skrzynia zostaje na miejscu z odchylonym wiekiem przez dwie minuty czasu gry, a potem znika. Nie blokuje placu budowy, a postawiony na niej budynek ją usuwa.
