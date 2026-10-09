---
title: "Ennemis"
---

Les ennemis apparaissent naturellement dans les zones sauvages à travers la carte, menaçant vos aventuriers et votre château.

---

## Types d'ennemis

| Ennemi | HP | ATK | DEF | Vitesse | XP | Or | Portée d'attaque | Vision | Terrain d'apparition | Niveau de danger |
|--------|-----|-----|-----|---------|-----|------|-----------------|--------|---------------------|-----------------|
| **Slime** | 60 | 3 | 2 | 0,6 | 10 | 5 | 3 | 12 | Forêt | 1 |
| **Gobelin** | 110 | 6 | 4 | 1,0 | 25 | 12 | 3 | 20 | Montagne | 2 |
| **Squelette** | 160 | 9 | 6 | 0,9 | 40 | 20 | 3 | 22 | Montagne | 3 |
| **Zombie** | 260 | 12 | 10 | 0,6 | 60 | 30 | 3 | 16 | Forêt | 4 |
| **Dragon** | 550 | 20 | 18 | 1,4 | 150 | 80 | 16 | 32 | Montagne | 5 |
| **Loup sinistre** | 90 | 8 | 3 | 1,6 | 28 | 10 | 3 | 26 | Forêt | 2 |
| **Brute orque** | 320 | 15 | 12 | 0,8 | 70 | 35 | 3 | 18 | Montagne | 4 |
| **Archer gobelin** | 85 | 9 | 3 | 1,0 | 35 | 15 | 10 | 24 | Montagne | 3 |
| **Spectre des sables** | 140 | 10 | 5 | 1,0 | 38 | 22 | 3 | 13 | Désert | 3 |
| **Cultiste sombre** | 80 | 14 | 2 | 0,8 | 42 | 25 | 11 | 16 | Forêt | 3 |
| **Troll** | 620 | 22 | 12 | 0,7 | 160 | 90 | 3 | 12 | Montagne | 5 |
| **Araignée géante** | 75 | 7 | 3 | 1,3 | 24 | 9 | 3 | 11 | Forêt | 2 |
| **Rat géant** | 45 | 4 | 1 | 1,4 | 12 | 4 | 3 | 10 | Prairie | 1 |
| **Bandit** | 100 | 7 | 4 | 1,1 | 26 | 16 | 3 | 12 | Prairie | 2 |
| **Harpie** | 95 | 11 | 3 | 1,8 | 36 | 18 | 3 | 14 | Prairie | 3 |

Le Dragon, l'Archer gobelin et le Cultiste sombre tirent des projectiles (jets de flammes, flèches grossières et orbes sombres) ; les autres frappent à 3 cases au maximum.

Un ennemi fait un pas tous les 3 ÷ vitesse ticks, arrondi à l'inférieur (au moins 1) : à chaque tick à partir d'une vitesse de 1,6, tous les 2 ticks entre 1,1 et 1,4, tous les 3 entre 0,8 et 1,0, tous les 4 pour le Troll et tous les 5 à 0,6.

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

- **Forêt** — Slimes, Zombies, Loups sinistres, Cultistes sombres, Araignées géantes
- **Montagne** — Gobelins, Squelettes, Dragons, Brutes orques, Archers gobelins, Trolls
- **Prairie** — Rats géants, Bandits, Harpies
- **Désert** — Spectres des sables

:::note[Dragons]
Les Dragons et les Trolls sont les ennemis les plus dangereux (niveau de danger 5). Avec une portée d'attaque de 16, 550 HP et des jets de flammes pour projectiles, les Dragons sont mieux gérés avec des aventuriers à distance et des tours à flèches ; le Troll a plus de HP et d'attaque, mais doit s'approcher.
:::

---

## Mécaniques spéciales du dragon

- **Attaque à distance** : Portée d'attaque de 16, crache des jets de flammes
- **Haute mobilité** : Vitesse de 1,4, un pas tous les 2 ticks : aussi rapide que les Rats géants, les Araignées géantes et les Bandits ; seuls les Harpies et les Loups sinistres (un pas par tick) sont plus rapides
- **Vision étendue** : Portée de vision de 32 cases, capable de repérer les aventuriers à grande distance
- **Esquive** : Tous les ennemis ont un taux d'esquive de base de 5%

**Pressions** : trois menaces naissent de la façon dont le royaume est tenu, non d'un repaire. Chacune est annoncée une minute à l'avance dans la chronique et l'aperçu, envoie une meute de 3 (jamais plus de 6 de ses monstres en vie, quelle que soit votre force) et est annulée dès que sa cause est corrigée. *Insalubrité* : une ville de 16 bâtiments sans fontaine ni jardin attire des rats géants ; chaque fontaine ou jardin répond de 6 bâtiments. *Les morts sans repos* : 3 héros gisant morts sans temple se lèvent en squelettes là où le dernier est tombé ; un temple, ou leur résurrection, les garde en terre, et un royaume de la voie des Morts-vivants doté d'un Ossuaire les prend comme gardes. *La nature sauvage* : un bâtiment à plus de 60 cases du château sans tour à flèches ni poste de garde à moins de 12 attire des loups sinistres ; les comptoirs ne comptent pas, ni les camps d'un royaume Sauvage. Rien ne presse un royaume durant ses 5 premières minutes, ni dans un niveau qui n'autorise pas le bâtiment qui y répond. Les camps de guerre orcs s'en prennent à ce qui se construit : le chantier ou l'amélioration en cours les plus proches.
