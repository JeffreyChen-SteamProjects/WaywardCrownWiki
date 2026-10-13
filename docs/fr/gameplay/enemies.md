---
title: "Ennemis"
---

Les ennemis apparaissent naturellement dans les zones sauvages à travers la carte, menaçant vos aventuriers et votre château.

---

## Types d'ennemis

| Ennemi | HP | ATK | DEF | Vitesse | XP | Or | Portée d'attaque | Vision | Terrain d'apparition | Niveau de danger |
|--------|-----|-----|-----|---------|-----|------|-----------------|--------|---------------------|-----------------|
| **Slime** | 60 | 3 | 2 | 0.6 | 10 | 5 | 3 | 12 | Forêt | 1 |
| **Gobelin** | 110 | 6 | 4 | 1.0 | 25 | 12 | 3 | 20 | Montagne | 2 |
| **Squelette** | 160 | 9 | 6 | 0.9 | 40 | 20 | 3 | 22 | Montagne | 3 |
| **Zombie** | 260 | 12 | 10 | 0.6 | 60 | 30 | 3 | 16 | Forêt | 4 |
| **Dragon** | 550 | 20 | 18 | 1.4 | 150 | 80 | 16 | 32 | Montagne | 5 |
| **Loup sinistre** | 90 | 8 | 3 | 1.6 | 28 | 10 | 3 | 26 | Forêt | 2 |
| **Brute orque** | 320 | 15 | 12 | 0.8 | 70 | 35 | 3 | 18 | Montagne | 4 |
| **Archer gobelin** | 85 | 9 | 3 | 1.0 | 35 | 15 | 10 | 24 | Montagne | 3 |
| **Spectre des sables** | 140 | 10 | 5 | 1.0 | 38 | 22 | 3 | 13 | Désert | 3 |
| **Cultiste sombre** | 80 | 14 | 2 | 0.8 | 42 | 25 | 11 | 16 | Forêt | 3 |
| **Troll** | 620 | 22 | 12 | 0.7 | 160 | 90 | 3 | 12 | Montagne | 5 |
| **Araignée géante** | 75 | 7 | 3 | 1.3 | 24 | 9 | 3 | 11 | Forêt | 2 |
| **Rat géant** | 45 | 4 | 1 | 1.4 | 12 | 4 | 3 | 10 | Prairie | 1 |
| **Bandit** | 100 | 7 | 4 | 1.1 | 26 | 16 | 3 | 12 | Prairie | 2 |
| **Harpie** | 95 | 11 | 3 | 1.8 | 36 | 18 | 3 | 14 | Prairie | 3 |
| **Piquier** | 150 | 9 | 6 | 0.9 | 34 | 18 | 3 | 12 | Montagne | 3 |
| **Porte-bouclier** | 220 | 7 | 10 | 0.8 | 40 | 20 | 3 | 12 | Montagne | 4 |
| **Sapeur** | 90 | 5 | 3 | 1.0 | 36 | 22 | 3 | 12 | Forêt | 4 |
| **Bête de siège** | 520 | 16 | 9 | 0.5 | 110 | 55 | 3 | 12 | Montagne | 5 |
| **Chaman gobelin** | 100 | 4 | 2 | 0.8 | 26 | 15 | 3 | 12 | Forêt | 2 |
| **Saboteur bandit** | 140 | 5 | 3 | 1.0 | 32 | 20 | 3 | 16 | Forêt | 3 |
| **Scorpion venimeux** | 130 | 6 | 5 | 0.9 | 34 | 18 | 3 | 14 | Désert | 3 |
| **Gardien de grès** | 360 | 11 | 15 | 0.5 | 82 | 42 | 3 | 14 | Désert | 4 |
| **Transporteur gobelin** | 110 | 4 | 3 | 1.0 | 15 | 12 | 3 | 12 | — | 2 |
| **Nécromancien ennemi** | 180 | 7 | 4 | 0.7 | 55 | 30 | 3 | 16 | Montagne | 4 |
| **Chasseur spectral** | 125 | 14 | 3 | 1.5 | 50 | 26 | 3 | 18 | Montagne | 4 |
| **Cracheur de venin** | 150 | 6 | 4 | 0.65 | 48 | 28 | 8 | 16 | Marécage | 4 |
| **Lie-sorts** | 110 | 8 | 3 | 0.8 | 52 | 32 | 9 | 16 | Forêt | 4 |
| **Chauve-souris vampire** | 80 | 10 | 2 | 1.8 | 30 | 16 | 3 | 16 | Montagne | 3 |
| **Gelée fissile** | 240 | 10 | 5 | 0.6 | 58 | 28 | 3 | 12 | Marécage | 3 |

**L'ost** : quatre ennemis combattent en ligne et en troupe de siège. Le coup d'un Piquier retient un instant le héros qu'il touche. Un Porte-bouclier lève de temps à autre un bouclier sur lui-même et les monstres à ses côtés. Un Sapeur pose une charge marquée au sol avant d'exploser (elle n'explose jamais s'il tombe avant) et frappe les bâtiments trois fois plus fort. Une Bête de siège est lente, difficile à abattre et frappe les bâtiments quatre fois plus fort.

Dragon, Archer gobelin, Cultiste sombre, Cracheur de venin, Lie-sorts — tirent leurs propres projectiles ; les autres espèces ordinaires frappent à 3 cases au plus.

Un ennemi joue son tour une fois tous les 4 ticks. Sa vitesse lui donne un pas tous les 3 ÷ vitesse tours, arrondi à l'inférieur (au moins 1), et chaque ennemi marche ensuite trois dixièmes plus vite : cette attente est divisée par 1,3, la fraction est reportée sur les pas suivants, et elle ne descend jamais sous un tour. Il y a donc un pas à chaque tour à partir d'une vitesse de 1,6, environ deux pas en 3 tours entre 1,1 et 1,4, environ trois en 7 entre 0,8 et 1,0, environ un tous les 3 tours pour le Troll et un tous les 4 ou 5 entre 0,5 et 0,6.

### Rangs

À mesure que votre guilde grandit (aventuriers plus Marchés), certains monstres apparaissent avec un rang qui multiplie leurs statistiques et leurs récompenses. Au plus un quart des monstres vivants ont un rang, sauf pendant un Soulèvement des monstres, où chaque apparition est au moins Vétéran.

| Rang | À partir d'une taille de guilde de | Chance | HP | ATK | DEF | XP | Or | Vision |
|------|-----------------------------------|--------|----|-----|-----|----|------|--------|
| **Vétéran** | 8 | 16% | ×1,5 | ×1,25 | ×1,2 | ×1,6 | ×1,8 | +2 |
| **Élite** | 22 | 8% | ×2,5 | ×1,6 | ×1,5 | ×2,5 | ×3 | +4 |
| **Champion** | 45 | 3% | ×4,5 | ×2,2 | ×2 | ×4 | ×6 | +6 |

---

## Comportement des ennemis

### Errance

- Les ennemis errent près de leur point d'apparition
- Ils ont une portée de vision et poursuivent activement les aventuriers qu'ils détectent
- À chaque tick, un quart des ennemis (par groupes en rotation) exécutent leur logique d'errance, si bien que chacun se met à jour au plus tous les 4 ticks

### Priorité de cible

Les ennemis attaquent les cibles dans l'ordre suivant :

1. **Aventuriers prêts au combat** (non-pacifistes)
2. **Bâtisseurs** (aventuriers pacifistes)
3. **Tours à flèches** (bâtiments menaçants)
4. **Château**
5. **Autres bâtiments**

### Chemin d'invasion

Lorsqu'un événement d'invasion se déclenche, les ennemis se dirigent droit vers le château du joueur par le chemin le plus court.

---

## Apparition des ennemis

| Paramètre | Valeur |
|-----------|--------|
| Intervalle d'apparition | 35 secondes de temps de jeu, 1 seconde de moins par aventurier ou Marché, 5 secondes au minimum (divisé par deux dans les niveaux de campagne Défendre) |
| Nombre maximum | `(adventurers + Markets) × 2` (ajustable dans les paramètres de difficulté), réduit à mesure que les forteresses ennemies sont rasées, jusqu'à 25 % au minimum |
| Minimum de base | Au moins 6 ennemis |

Les ennemis apparaissent en fonction du **type de terrain** :

- **Forêt** — Slime, Zombie, Loup sinistre, Cultiste sombre, Araignée géante, Sapeur, Chaman gobelin, Saboteur bandit, Lie-sorts
- **Montagne** — Gobelin, Squelette, Dragon, Brute orque, Archer gobelin, Troll, Piquier, Porte-bouclier, Bête de siège, Nécromancien ennemi, Chasseur spectral, Chauve-souris vampire
- **Prairie** — Rat géant, Bandit, Harpie
- **Désert** — Spectre des sables, Scorpion venimeux, Gardien de grès
- **Marécage** — Cracheur de venin, Gelée fissile

:::note[Dragons]
Les Dragons et les Trolls sont les ennemis les plus dangereux (niveau de danger 5). Avec une portée d'attaque de 16, 550 HP et des jets de flammes pour projectiles, les Dragons sont mieux gérés avec des aventuriers à distance et des tours à flèches ; le Troll a plus de HP et d'attaque, mais doit s'approcher.
:::

---

## Mécaniques spéciales du dragon

- **Attaque à distance** : Portée d'attaque de 16, crache des jets de flammes
- **Haute mobilité** : Vitesse de 1,4, environ deux pas en 3 tours : aussi rapide que les Rats géants, les Araignées géantes et les Bandits ; seuls les Harpies et les Loups sinistres (un pas par tour) sont plus rapides
- **Vision étendue** : Portée de vision de 32 cases, capable de repérer les aventuriers à grande distance
- **Esquive** : Tous les ennemis ont un taux d'esquive de base de 5%

**Pressions** : trois menaces naissent de la façon dont le royaume est tenu, non d'un repaire. Chacune est annoncée une minute à l'avance dans la chronique et l'aperçu, envoie une meute de 3 (jamais plus de 6 de ses monstres en vie, quelle que soit votre force) et est annulée dès que sa cause est corrigée. *Insalubrité* : une ville de 16 bâtiments sans fontaine ni jardin attire des rats géants ; chaque fontaine ou jardin répond de 6 bâtiments. *Les morts sans repos* : 3 héros gisant morts sans temple se lèvent en squelettes là où le dernier est tombé ; un temple, ou leur résurrection, les garde en terre, et un royaume de la voie des Morts-vivants doté d'un Ossuaire les prend comme gardes. *La nature sauvage* : un bâtiment à plus de 60 cases du château sans tour à flèches ni poste de garde à moins de 12 attire des loups sinistres ; les comptoirs ne comptent pas, ni les camps d'un royaume Sauvage. Rien ne presse un royaume durant ses 5 premières minutes, ni dans un niveau qui n'autorise pas le bâtiment qui y répond. Les camps de guerre orcs s'en prennent à ce qui se construit : le chantier ou l'amélioration en cours les plus proches.

**Chaman gobelin** — Soigne de 18 PV jusqu’à quatre alliés blessés à 4 cases toutes les 20s, six fois au maximum durant sa vie. Éliminez le soutien ou épuisez ses remèdes.

**Saboteur bandit** — Vise d’abord les bâtiments proches et leur inflige 2,5× les dégâts normaux. Riposte à un héros qui l’intercepte ; son armure légère facilite l’interception.

**Scorpion venimeux** — Une piqûre réussie laisse 3 PV/s de poison pendant 5s, sans cumul. Antidotes et purification le retirent ; escortez les héros fragiles en terrain de scorpions.

**Gardien de grès** — Lent et lourdement blindé. À mi-vie, obtient une seule fois un bouclier personnel de 80 PV pour 10s. Privilégiez l’usure à distance ou le poison.

**Nécromancien ennemi** — Invoque deux squelettes ordinaires toutes les 30s en voyant un héros hostile : quatre par vie, au plus 32 invoqués vivants dans le monde. Un cercle osseux vert marque le sort. Tuez vite le fragile invocateur ; les squelettes restent et ne peuvent invoquer.

**Chasseur spectral** — Chasseur de mêlée rapide et fragile, visant d’abord les héros visibles à distance, de soin ou de commandement. Interceptez-le avec la première ligne ou ralentissez-le. Les gardes gardent leur rayon ; le spectre suit les chemins terrestres et ne traverse pas l’eau.

**Renforts tactiques des raids**: Forteresse gobeline → Chaman gobelin; Camp de bandits → Saboteur bandit; Tombeau des sables → Scorpion venimeux, Gardien de grès; Château mort-vivant → Nécromancien ennemi, Chasseur spectral.

Les raids de campagne respectent sa liste d’ennemis ; les royaumes libres utilisent toutes les troupes du repaire.

**Cracheur de venin** — Prévient 3s avant d’empoisonner un rayon de 2 cases depuis 8 cases au plus : 4 PV/s pour 5s, toutes les 18s. Tuez le fragile cracheur avant l’impact, quittez l’avertissement ou préparez antidotes et purification.

**Lie-sorts** — Marque un rayon de 2 depuis 9 cases au plus, prévient 2s, puis inflige 25% de dégâts subis supplémentaires pour 4s, toutes les 20s. Sans cumul, purifiable. Visez le lie-sorts ou soutenez la première ligne.

**Chauve-souris vampire** — Rapide et fragile. Se soigne selon les PV réellement perdus en mêlée : au plus 4 PV par coup et 60 par vie, sans dépasser le maximum. Les boucliers empêchent le soin. Ses ailes suivent les chemins terrestres ; tirs concentrés et ralentissement sont efficaces.

**Gelée fissile** — À sa mort se divise une fois en deux gelées ordinaires au plus, chacune avec 35% des PV maximaux et moitié de l’attaque et de la défense de la mère, rang compris. Sans nouvelle division ni or ou XP de mort. Au plus 64 enfants vivants dans le monde. Utilisez les dégâts de zone et prévoyez une seconde ligne.

Éliminer une vague nommée exige aussi ses squelettes invoqués et ses petites gelées ; tuer seulement la source ne suffit pas.

**Piquier** — Un coup de lance réussi ralentit sa cible 3s. Protégez les héros fragiles derrière le front ; la purification retire le ralentissement.

**Porte-bouclier** — Bouclier de 40 PV pour 8s dans un rayon de 2, au plus quatre alliés par sort et six sorts par vie, toutes les 24s. Le rang ne le multiplie pas. Les boucliers plus forts restent. Visez le porteur ou utilisez le poison.

**Sapeur** — Fragile soutien explosif : cible à 3 cases au plus, avertissement 3s, puis 40 dégâts dans un rayon de 2, toutes les 18s. Sa mort annule le tir. Les coups aux bâtiments utilisent l’attaque déjà ajustée au rang puis ×3 une fois.

**Bête de siège** — Lent et lourd, frappe les bâtiments à ×4 de sa demi-attaque déjà ajustée au rang. Interceptez au front et concentrez les tirs ; sa défense rend la mêlée sans soutien coûteuse.

Gnashfang appelle un lancier et un porteur de bouclier à la fois, quatre par vie. Ils suivent son centre de garde et survivent à sa mort. Le coup prévient 2,4s, vise à 4 cases et touche un rayon de 2 ; les deux derniers archers sont un appel limité distinct.
