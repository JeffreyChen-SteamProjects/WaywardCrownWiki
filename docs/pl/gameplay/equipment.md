---
title: "Wyposażenie i sklepy"
---

Poszukiwacze przygód automatycznie kupują wyposażenie i materiały eksploatacyjne w sklepach w pobliżu Zamku.

---

## System wyposażenia

Poszukiwacze przygód mogą kupować broń i zbroje w **Kuźni**:

| Wyposażenie | Efekt na poziom | Formuła ceny | Maks. poziom |
|-------------|----------------|-------------|-------------|
| **Broń** | +3 ATK / poziom | 100g × poziom | 3 (wymaga Kuźni tego samego poziomu) |
| **Zbroja** | +2 DEF / poziom | 100g × poziom | 3 (wymaga Kuźni tego samego poziomu) |

:::note[Wymaganie poziomu Kuźni]
Kuźnia Lv.1 może sprzedawać tylko wyposażenie Lv.1. Aby dać swoim poszukiwaczom przygód lepszy sprzęt, musisz ulepszyć Kuźnię.
:::

### Skumulowane statystyki wyposażenia

| Poziom | ATK Broni | DEF Zbroi | Cena Broni | Cena Zbroi |
|--------|----------|----------|-----------|-----------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Materiały eksploatacyjne

### Mikstury

| Przedmiot | Cena | Efekt |
|-----------|------|-------|
| **Mikstura lecznicza** | 100g | Przywraca 40 HP |

- Poszukiwacze przygód mogą nosić do **3** mikstur
- Automatycznie uzupełniane w sklepach
- Używane, gdy HP spadnie poniżej 50%

### Mikstura szybkości

| Przedmiot | Cena | Efekt |
|-----------|------|-------|
| **Mikstura szybkości** | 200g | Zwiększa szybkość ruchu na 60 ticków |

Sprzedawana dopiero, gdy Targ osiągnie Lv.2; poszukiwacz przygód nosi najwyżej 2.

### Ochrona przed śmiercią

| Przedmiot | Cena | Efekt |
|-----------|------|-------|
| **Pierścień ochrony przed śmiercią** | 500g | Blokuje jedno śmiertelne trafienie |

Sprzedawany dopiero, gdy Targ osiągnie Lv.3.

---

## Zachowanie zakupowe

Poszukiwacze przygód automatycznie robią zakupy, gdy zatrzymają się w promieniu 7 kafelków od **Targu** lub **Kuźni**.

Na Targu, w tej kolejności:

1. Wypijają na miejscu miksturę leczniczą, jeśli są ranni
2. Kupują Pierścień ochrony przed śmiercią (Targ Lv.3)
3. Uzupełniają noszone mikstury (do 3)
4. Kupują Mikstury szybkości (Targ Lv.2, do 2)

W Kuźni kupują **następny** poziom broni i następny poziom zbroi, na który ich stać, po jednym poziomie na wizytę, do poziomu Kuźni.

**Sprzedają tylko sklepy.** Zamek, gildie i karczmy niczego nie sprzedają: bohater, który potrzebuje ekwipunku lub mikstur, idzie do Kuźni albo na Targ (zob. *Złoto królestwa* poniżej).

:::note[Dochód podatkowy]
Za każdym razem, gdy poszukiwacze przygód wydają złoto (wyposażenie, mikstury, nauka) lub je zdobywają (zabójstwa, skrzynie), **20%** kwoty to podatek dla skarbca: 30% podczas wydarzenia Podwyżka podatków, nic podczas wydarzenia Czarny rynek. Czeka on w kasie budynku, w którym wydano złoto, aż poborca podatków zaniesie go do zamku.
:::

---

## Złoto królestwa

Każda moneta jest rozliczana:

- **Pieniądze trafiają do sklepu**: bohaterowie kupują tylko w samym budynku (zamek niczego nie sprzedaje). To, co płacą, jest utargiem tego budynku, a skarbiec bierze swój udział w podatku: 20%, 30% podczas podwyżki podatków i nic podczas czarnego rynku.
- **Kasy**: udział skarbca nie przychodzi sam. Czeka w kasie budynku, w którym wydano złoto (udział z łupów bohatera czeka w jego gildii, a okresowy dochód targu w jego własnej kasie). Kasa mieści 600 złota; co się nie zmieści, przepada, a budynek, który upadnie, traci kasę.
- **Poborca podatków**: zamek ma poborcę, który idzie do najpełniejszej kasy z co najmniej 40 złota, niesie do 400 i dostarcza do zamku, gdzie staje się złotem skarbca. Ucieka przed potworami i nigdy nie walczy; jeśli zginie, to, co niósł, zostaje na miejscu jako skrzynia, a 300 tików później zamek opuszcza nowy poborca. Panele budynków, zamku i poborcy pokazują, ile czeka i ile jest niesione. Zamek na poziomie 2 utrzymuje dwóch poborców, a na poziomie 3 trzech; każdy idzie do innej kasy. Poborca, który nie ma czego odebrać, odpoczywa w zamku, poza mapą, gdzie nic go nie dosięgnie. Wychodzi od frontu zamku, gdy jakaś kasa jest warta drogi, staje na chwilę przed frontem tego budynku, by opróżnić kasę, i po powrocie wchodzi z powrotem do środka; po ucieczce przed potworem zostaje w zamku przez jakiś czas. Zamek utrzymuje swoją liczbę poborców, zastępując każdego straconego, a jego panel ma dla nich wiersz, który mówi, gdzie jest każdy z nich. **Urząd Podatkowy** (280 złota; dowolnie wiele, każdy droższy od poprzedniego) utrzymuje jeszcze jednego, własnego poborcę: mieszka tam, wychodzi jego drzwiami, przynosi tam to, co zbierze (od razu trafia do skarbca), i jest tam zastępowany 60 sekund po stracie. Gdy odpoczywa więcej niż jeden poborca, ci, którzy mieszkają nie dalej niż 40 pól od kasy, chodzą po nią na zmianę, a pierwszy rusza ten, kto najdłużej był w domu (poborca świeżo obsadzonego urzędu jeszcze nigdy nie wychodził, więc następna droga należy do niego); kasę daleko od zamku zostawia się urzędowi, który stoi blisko niej. Panel urzędu mówi, co robi jego poborca.
- **Ustawienia podatków**: panel budynku pozwala wyłączyć jego kasę z obchodów poborców (wtedy się zapełnia, a nadmiar przepada) albo poprosić następnego wolnego poborcę, by opróżnił ją najpierw, choćby było w niej niewiele; przegląd królestwa ustala, jak pełna musi być kasa, zanim poborca po nią pójdzie (20, 40 lub 150 złota). Poborcy nadal sami wybierają drogę, zostawiają na później kasę z potworem obok i uciekają przed niebezpieczeństwem. Podpowiedź przy złocie i przegląd dzielą złoto królestwa na to, które można wydać, to w kasach, to niesione przez poborców i to w otwartych zleceniach; przegląd mówi też, gdy bohaterowie chcą sprzętu lub mikstur, których żaden budynek nie sprzedaje, a panel budynku podaje jego odległość od zamku. Przegląd ustala też, jak ostrożni są tragarze korony: poborcy, karawany i robotnicy ekipy uciekają przed potworem z 9, 6 lub 4 pól; ostrożni giną rzadziej i przynoszą mniej. Podpowiedź przy złocie podaje dodatkowo, ile należy się od wracających karawan i ile mają przy sobie bohaterowie. Polityka podatkowa ustawia jedno i drugie naraz: Bezpieczna (tylko pełne kasy, tragarze uciekają wcześnie), Stała (zwykłe obchody) albo Chciwa (także małe kasy, tragarze trzymają nerwy na wodzy).
- **Faktoria i karawana**: królestwo może zbudować tyle faktorii, za ile zapłaci, każdą droższą od poprzedniej, co najmniej 45 pól od zamku, na terenie, do którego da się z niego dojść. Jej karawana, juczny muł, idzie do zamku, rozładowuje się i wraca; kurs, który dotarł do zamku, daje do kasy faktorii 0,6 złota za każde pole między faktorią a zamkiem, więc dalsza faktoria płaci więcej i dłużej trzyma karawanę w trasie. Pokonuje pole co 2 tiki, a po drodze co tik. Potwór w zasięgu wzroku odsyła ją na bliższy koniec trasy, aż odejdzie, potwór obok ją rani, a gra podaje gdzie; utraconą karawanę zastępuje nowa po 400 tikach. Wymaga zamku na poziomie 2.
- **Nagrody to przelewy**: zlecenie płaci dokładnie tyle, ile w nim leży. Mnożniki złota z poziomu trudności i cech dotyczą tylko łupów i skrzyń.
- **Kupowane raz, uzupełniane do limitu**: każdy poziom ekwipunku, pierścień i każdą naukę w bibliotece kupuje się raz; mikstury uzupełnia się do 3, a mikstury szybkości do 2.
- **Przydziały**: odpoczywający bohater bez mikstury i bez złota na nią dostaje jedną od gildii, najwyżej raz na 600 tików.
- **Sklepy jako usługi**: targ sprzedaje według własnego poziomu (mikstury szybkości od poziomu 2, pierścień od poziomu 3), kuźnia wykuwa ekwipunek do swojego poziomu, biblioteka uczy jednej nauki na poziom, a karczma gości tylu bohaterów, ile ma pokoi. Bohater idzie tylko do sklepu, który ma dla niego coś nowego, i wybiera najbliższy, licząc sklep z potworem w promieniu 8 pól jako o 40 pól dalszy. Panel sklepu pokazuje, ile bohaterowie tam wydali, kto jest w drodze i sześciu ostatnich klientów. Nic nie jest płacone, zanim bohater stanie przy ladzie, więc sklep, który po drodze padnie, zapełni się albo zostanie ulepszony, nie zostawia żadnej transakcji w połowie.
- **Księga**: gra prowadzi sumę każdego przepływu (zlecenia, budowa, badania, wskrzeszenie, kradzież; podatki, handel, zwroty, rozbiórka, niespodziewane zyski; nagrody, łupy, skrzynie, grabież; ekwipunek, zapasy, nauka, rozrywka) wraz z ostatnimi wpisami i utargiem każdego budynku, zapisywaną razem z grą. Skarbiec, zlecenia i sklepy muszą się zgadzać każde z osobna.
- **Przegląd królestwa**: za panelem Szczegóły jest karta „Królestwo”. Pokazuje skarbiec, jego dochody i wydatki według rodzaju, to, co czeka w kasach i u poborców, ile bohaterowie zarobili i wydali, kursy i straty karawan, obroty każdego sklepu, ostatnie wpisy księgi oraz to, co wymaga uwagi (zamek gotowy do rozbudowy, brak poborcy w terenie, utracona karawana, sklep z potworem w pobliżu, pełna kasa). Nazwy są odnośnikami, które zaznaczają budynek lub zamek i przesuwają tam mapę. Pod *Wstrzymane złoto* wymienia, gdzie złoto leży bezczynnie, każda pozycja z odnośnikiem do miejsca: najpełniejsza kasa, którą poborcy mają omijać, kasy, z których każda trzyma mniej, niż poborca uzna za warte drogi, oraz największa nagroda, której żaden bohater nie podjął od dwóch minut.
- **Rejestry**: zakładka Rejestry (klawisz L) wymienia każdego bohatera, gildię, pracę i dochód każdego budynku królestwa, po wierszu na każdy, z polem wyszukiwania. Bohaterów można zawęzić do bezczynnych, tych ze zleceniem, rannych, myślących o odejściu i tych bez gildii; gildie do tych z wolnym miejscem, pełnych i tych z potworami w pobliżu; prace, w kolejności, w jakiej bierze je ekipa korony, do budynków w budowie, w rozbudowie, uszkodzonych i do wstrzymanych prac; dochody do kas ze złotem, kas poza obchodem poborców i sklepów z potworami w pobliżu. Kliknięcie wiersza pokazuje go na mapie, a dwukrotne kliknięcie otwiera szczegóły. Rejestry nie wydają rozkazów i nie wymieniają niczego, co należy do wroga.
- **Warstwy mapy**: przycisk Warstwy na górnym pasku (klawisz M) nakłada na mapę to, co królestwo wie. Zaopatrzenie otacza każdy sklep, karczmę, świątynię i bibliotekę zasięgiem, w którym potwór odstrasza klientów. Złoto w drodze wypisuje, co czeka w każdej kasie, i rysuje drogę każdego poborcy i szlak każdej karawany. Prace numeruje zadania ekipy w kolejności, w jakiej je bierze. Znane zagrożenia otacza legowiska, które królestwo widziało, z linią do zamku od tego, które zbiera najazd. Zasięg zaklęć pokazuje, gdzie można rzucać zaklęcia korony, oraz sieć iglic ścieżki tajemnej. Zielony oznacza, że jest dobrze, bursztynowy, że warto spojrzeć, czerwony to kłopoty. Legowiska, którego nikt nie widział, nie ma na żadnej warstwie, a włączone warstwy są zapamiętywane.
- **Odprawa i kronika**: ekran misji daje odprawę przed startem: historię, co daje wygraną i przegraną, co można budować i radę poziomu. Zakładka Kronika przechowuje tę odprawę i to, co ogłoszono później, od najnowszego: rady skryptu, dostrzeżone leże, zlecenie, którego nie przyjmie żaden bohater (z powodem i nagrodą, która by wystarczyła), karawanę w tarapatach, straconego poborcę lub budynek, bossa, który zmienia taktykę lub pada. Każdy wpis ma swój czas i odnośnik przesuwający mapę; powtórka o tym samym jest liczona na swoim wpisie zamiast być ogłaszana ponownie, a pełna kronika (60 wpisów) traci najstarszy z najmniej ważnych. Nowe wpisy wyskakują po dwa, nie wstrzymując gry. Ustawienie wyłącza wyskakiwanie rad i drobnych wieści: straty i bossowie nadal się pojawiają, a wszystko nadal jest zapisywane. Kronikę można zawęzić do jednego tematu (zagrożenia, bohaterowie, złoto albo korona i rady); wybór zostaje zapamiętany.
- **Wyniki**: gdy gra się kończy, wygrana lub przegrana, ekran wyników mówi dlaczego i wylicza cel oraz każdego nazwanego wroga z jego losem, bohaterów zwerbowanych, straconych i wciąż stojących, przychody i wydatki skarbca według rodzaju, straty karawan i poborców, zabite potwory, zburzone leża, zlecenia, budynki i czas gry. Zapamiętuje do trzech bohaterów: tego, który zaszedł najwyżej, tego, który zabił najwięcej, i najlepszego z poległych. Wygrany poziom jest oceniany trzema znakami, każdy to proste stwierdzenie z liczbami (cel osiągnięty; stracono nie więcej niż co czwartego bohatera; nie stracono żadnego budynku); żaden nie dotyczy szybkości. Stamtąd: następny poziom, ten sam poziom jeszcze raz, menu albo, po porażce, spojrzenie na mapę. Podsumowanie można zapisać jako plik tekstowy w folderze `recaps` obok ustawień. Ukończenie fabuły dema dodaje to, co jest teraz otwarte, i to, co planowane w pełnej grze.
- **Opcjonalne znaleziska**: poziom może kryć do dwóch rzeczy wartych znalezienia; żadna nie jest potrzebna do wygranej. Tabor z zaopatrzeniem otoczony przez potwory wytrzymuje sześć minut od znalezienia; bohater, który do niego dotrze, gdy oblegający nie żyją, przynosi do skarbca zaopatrzenie warte 300 złota. Skrytka ma strażnika dwa razy wytrzymalszego niż jego rodzaj: korona wystawia na niego zlecenie „Zabij”, a skrzynia z 400 złota należy do bohaterów. Skarb leży pod leżem, które nie wysyła najazdów: jego zburzenie zostawia skrzynię z 500 złota. Nie dają o sobie znać, dopóki ich miejsce nie zostanie zobaczone; potem zgłasza je kronika, lista „Opcjonalne” w zakładce Kronika śledzi je z odnośnikami, a ekran wyników mówi, jak się skończyły. Trzy misje dema mają jedno, jedno i dwa.
- **Trudność i odbudowa**: łatwy i trudny zmieniają liczby, nigdy zdrowie wrogów: każdy najazd z leża ma o jednego najeźdźcę mniej lub o dwóch więcej, fala ze skryptu ma 75% lub 125% swojej wielkości, a poziom zaczyna się ze 125% lub 85% swojego złota; ekran misji to podaje. Poziomy dema podają obsadę (szlam, olbrzymi szczur, goblin, goblin łucznik, złowrogi wilk, bandyta, ork osiłek, troll) tego, co wędruje po ich mapach, i nigdy nie losują zdarzeń, które przyprowadzają własne siły, bo ich najazdy są zapowiadane. Królestwo bez gildii i bez złota na nową dostaje różnicę od korony, najwyżej raz na pięć minut, a poziom można w każdej chwili zacząć od nowa z menu Esc.
- **Życie miasta, widziane i słyszane**: mała ikona unosi się nad miejscem, w którym bohater kupuje mikstury lub oręż, płaci za łóżko lub lekcję, poborca podatków opróżnia kasę lub oddaje podatki, karawana dostaje zapłatę, rekrut się zaciąga, zdobyty zostaje poziom, budynek zostaje ulepszony lub naprawiony, otwarta zostaje skrzynia lub coś zostaje odkryte. Każda ma własny krótki dźwięk: tym cichszy, im dalej od widoku, najwyżej trzy naraz i nigdy ten sam raz za razem. Leże zbierające najazd ma na mapie pulsujący czerwony pierścień i róg, a na minimapie migającą ramkę, dopóki najazd nie wyruszy; róg, bębny wojenne i bossa słychać zewsząd. Przy głośności dźwięków równej zero ikony nadal mówią wszystko. Dźwięki syntetyzuje `tools/soundgen.py`, a ikony renderuje generator grafiki; nic nie jest nagrane ani samplowane.
- **Bohaterowie odpowiadają**: wybranie bohatera odtwarza krótką odpowiedź głosem jego klasy i wypisuje jego słowa u góry panelu. Odpowiedź zależy od jego położenia: ciężko ranny lub uciekający do domu, w walce, w drodze do zlecenia, odpoczywający pod dachem, naprawiający mur, bez zapasów lub snu albo gotowy, a wtedy każda klasa ma własne powitanie. Odpowiedź pada najwyżej raz na 1,5 sekundy, a wiersz jest widoczny także bez dźwięku.
- **Każda jednostka ma głos**: potwór, poborca podatków, karawana i wieśniak odpowiadają na kliknięcie dźwiękiem swojego gatunku, tak jak bohater odpowiada zależnie od nastroju, a wszystko, co chodzi po mapie, słychać, gdy pada. Bohatera i pozostałych ludzi korony (poborców podatków, karawany, robotników korony, mieszkańców zburzonego domu) słychać niezależnie od położenia widoku; potwór cichnie wraz z odległością od widoku, ten sam gatunek słychać najwyżej raz na dwie sekundy, a nakładają się najwyżej dwa takie dźwięki. Żaden dźwięk jednostki nie trwa krócej niż sekundę.
- **Muzyka**: menu i gra mają własne utwory, odtwarzane w losowej kolejności: każdy może być pierwszy, a każdy utwór gra raz, zanim którykolwiek się powtórzy. Dopóki nazwany boss jest w polu, gra jego własna muzyka, a muzyka gry wraca, gdy padnie; upadły zamek też ma swoją.
- **Widoczne na mapie**: wóz uwięzionego taboru z zaopatrzeniem, z odpadniętym kołem i na wpół rozładowanym ładunkiem, stoi na swoim miejscu od chwili jego zbadania, aż tabor zostanie osiągnięty lub stracony; boss nosi nad imieniem i paskiem zdrowia odznakę rogatej czaszki. Oba wyglądają tak samo na obu ścieżkach rysowania. Wódz Zgrzytokieł ma własny wygląd: rogaty hełm, czerwoną tarczę, dwusieczny topór i sztandar swojej bandy na plecach.
