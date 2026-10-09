---
title: "Mode Campagne"
---

Le mode campagne propose des scénarios à plusieurs niveaux, chacun avec des conditions de victoire spécifiques et un contexte narratif.

---

## Campagnes intégrées

Le jeu inclut une **Campagne tutoriel** intégrée (5 niveaux) qui guide les nouveaux joueurs à travers les différentes mécaniques du jeu. Elle a son propre bouton, le premier du menu principal.

---

## Conditions de victoire

Chaque niveau de campagne peut avoir l'une des conditions de victoire suivantes :

| `victory` | Condition | Description |
|---|-----------|-------------|
| `free` | **Mode libre** | Aucune condition de victoire spécifique ; jouez librement |
| `destroy_enemy_buildings` | **Détruire toutes les forteresses** | Éliminer toutes les forteresses ennemies sur la carte |
| `survive_ticks` | **Survivre un temps donné** | Maintenir le Château en vie au-delà d'un nombre de ticks spécifié |
| `reach_gold` | **Accumuler de l'or** | Atteindre un montant cible d'or dans votre trésorerie |
| `destroy_building` | **Détruire une forteresse spécifique** | Détruire un type spécifique de forteresse ennemie |
| `defend` | **Défendre le Château** | Empêcher la destruction du Château dans un temps imparti |
| `collect_chests` | **Collecter tous les coffres** | Ouvrir tous les coffres au trésor sur la carte |
| `secure_trade` | **Sécuriser la route commerciale** | `victory_value` allers-retours de caravane sont payés et toutes les forteresses ennemies de la carte sont détruites |

---

## Structure d'une campagne

Les campagnes sont stockées en tant que dossiers dans le répertoire `campaigns/` :

```
campaigns/
└── tutorial/
    ├── campaign.json     # Métadonnées de la campagne et liste des niveaux
    ├── level1.json       # Carte du niveau 1
    ├── level2.json       # Carte du niveau 2
    └── ...
```

### Format de campaign.json

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

### Paramètres de niveau

| Champ | Description |
|-------|-------------|
| `map` | Chemin du fichier de carte (relatif au dossier de la campagne) |
| `title` | Titre du niveau |
| `intro` | Texte d'introduction |
| `outro` | Texte de fin |
| `starting_gold` | Or de départ (0 – 10⁷) |
| `victory` | Type de condition de victoire |
| `victory_value` | Valeur de la condition de victoire (ex. nombre de ticks de survie, montant d'or cible, etc.) (0 – 10⁹) |
| `unlocked_buildings` | Liste blanche des bâtiments disponibles (restreint les options de construction du joueur). Une liste vide autorise tous les bâtiments ; `unlock_building` complète une liste non vide. |
| `victory_target` | Type de forteresse pour `destroy_building` (par ex. `DRAGON_NEST`) ; ignoré sinon |
| `carry_over` | Ce qui est conservé du niveau précédent : `gold`, `adventurers`, `research`, `path` (la voie du château et sa spécialité) (chacun true/false). Ce qu'un niveau indique dans `carry_over` est repris d'un autre niveau de la même campagne quand le joueur enchaîne, et noté à ce moment-là ; chaque nouvel essai du niveau repart de cette note. Un niveau lancé depuis la liste des missions ne reprend rien, et ce qu'un niveau n'indique pas (la recherche et la voie du château non plus) ne survit pas à la carte. |
| `triggers` | Événements scriptés : `condition` + `params`, `action` + `action_params`, et en option `id`, `after` (attendre ce déclencheur) et `once`. Conditions : `always`, `tick_reached`, `tick_after_fire`, `gold_at_least`, `adventurer_count_at_least`, `building_built`, `building_count_at_least`, `any_building_damaged`, `enemy_buildings_destroyed`, `enemy_building_seen`, `chests_opened`, `enemy_killed_count`, `bounties_completed`, `buildings_lost`, `caravan_rounds`, `caravans_lost`, `ticks_after_step`, `site_count_at_least`, `bounty_posted`, `taxes_collected`, `branch_chosen`, `spell_cast`, `hero_geared`. Actions : `show_message`, `unlock_building`, `spawn_boss`, `start_event`, `spawn_enemies`, `post_bounty`, `grant_gold`, `reveal`. Un déclencheur qui n'est pas un objet ou dont un champ a le mauvais type de valeur est ignoré et signalé dans la console. `chests_opened`, `enemy_killed_count` et `bounties_completed` comptent à partir du début du niveau. Un déclencheur répétitif (`once: false`) agit à chaque tick où sa condition tient : la validation refuse donc celui qui fait apparaître des ennemis, paie, pose une prime ou lance un événement ; une rencontre de boss démarre une fois et jamais seulement après sa propre défaite. Une vague `spawn_enemies` peut porter `march` (`castle` ou `road`) : elle marche alors sur le château ou sur le comptoir le plus proche au lieu d'errer là où elle apparaît. `reveal` (`x`, `y`, `radius` de 1 à 40) montre un lieu au joueur : le terrain dans ce rayon est exploré. `ticks_after_step` compte sa `value` à partir du tick où le déclencheur nommé dans `after` s'est déclenché. Un paramètre de `show_message` écrit `i18n:<key>` est traduit avant d'entrer dans le texte : un message peut ainsi nommer un panneau ou un bâtiment avec les mots du jeu. |
| `id` | Nom stable du niveau pour la progression et `requires` (lettres, chiffres, `.`, `-`, `_`) ; à défaut, `level<n>` selon sa position |
| `requires` | Niveaux à terminer d'abord : un `id` de niveau de cette campagne, ou `<id de campagne>/<id de niveau>` |
| `ruleset` | Uniquement `kingdom`, et il peut être omis : tous les niveaux se jouent selon les règles du royaume. Un niveau ou une carte qui indique `classic`, ou rien, se joue comme un royaume ; un nom inconnu est refusé |
| `castle_level` | Le niveau du château au début du niveau (1–3) ; un donjon s'il est omis |
| `time_limit` | Ticks dont dispose le niveau ; s'ils sont écoulés sans victoire, il est perdu. 0 ou omis : pas de limite |
| `advice` | Ce que conseille le briefing ; comme les autres textes, ce peut être une clé `i18n:` |
| `side_quests` | Jusqu'à deux découvertes facultatives sur le niveau, chacune `{"kind", "x", "y"}` avec un kind parmi `supply_party`, `guarded_cache`, `lair_treasure` ; `enemy` ou `lair` peut nommer qui s'y trouve |
| `objectives` | Jusqu'à 8 conditions de victoire supplémentaires, chacune `{"victory", "value", "target", "required"}` avec toute victoire sauf `free`. Le niveau est gagné quand sa victoire principale (sauf `free`) et toutes les requises sont remplies ; les facultatives sont comptées sur la ligne d'objectif et listées dans les résultats |
| `defeats` | Jusqu'à 4 autres façons de perdre, chacune `{"kind", "value"}` : `heroes_lost`, `buildings_lost` ou `caravans_lost` atteint la valeur depuis le début du niveau |

La campagne elle-même peut porter un `id` (le nom sous lequel sa progression est enregistrée) et `"linear": false` (défis indépendants : une victoire ne mène pas au niveau suivant). Elle peut aussi lister `blocked_events` : les noms des événements aléatoires que ses niveaux ne tirent jamais (par exemple `DRAGON_NEST`). Et un `roster` : les types d'ennemis (des noms comme `GOBLIN`) qui errent et envahissent dans ses niveaux ; sans lui, tous les types.

:::tip[Prise en charge de la localisation]
Le texte des campagnes peut utiliser des balises `i18n:KEY`, qui afficheront automatiquement la traduction correspondante en fonction de la langue du joueur.
:::

---

## La campagne de la démo

La campagne scénarisée de la démo (`campaigns/demo_kingdom/`) s'ouvre depuis le menu principal. Comme le tutoriel, elle est écrite par `game/systems/demo_campaign.py`.

| Mission | Objectif | Défaite si | Départ |
|---|---|---|---|
| 1. La première couronne | Trouver le camp gobelin à l'est du donjon et le faire détruire | Le donjon tombe | 1600 or et une courte liste de bâtiments, plus les ruines d'une forge et d'un marché |
| 2. Des ombres sur la route commerciale | Faire aboutir trois allers-retours de caravane et détruire le camp des pillards | Le château tombe | 2400 or, un château de niveau 2, une petite ville et deux routes pavées |
| 3. La nuit de Croc-Grinçant | Vaincre le Chef Croc-Grinçant | Le château tombe | 3000 or, un château de niveau 2 et une ville de six bâtiments |

La mission 1 commence près des ruines d'une forge et d'un marché : l'équipe de la couronne les relève sans frais, la forge d'abord, et tout ce que vous placez, votre première guilde aussi, attend son tour derrière elles sauf si vous le marquez prioritaire. Dans la mission 1, des messages mènent de la première guilde au premier héros, au marché et au percepteur. Au bout d'environ 48 secondes, la couronne pose à ses frais une prime « Explorer » près du camp ; une fois qu'un héros l'a accomplie, on vous demande de poser une prime « Tuer » sur le camp. Dans la mission 2, la couronne fait explorer les deux sites de comptoir, des pillards tendent une embuscade sur la route du sud une fois (annoncée 20 secondes à l'avance), et le premier bâtiment perdu apporte 400 or d'aide. Dans la mission 3, un raid arrive par la route de l'est au tick 1000 et un autre par la route du nord au tick 2500 et le Chef Croc-Grinçant au tick 4300, chacun annoncé 100 ticks à l'avance ; raser sa forteresse est une expédition qui vaut son butin, mais seule sa défaite donne la victoire. Les missions 1 et 2 proposent une Guilde des bâtisseurs pour les réparations ; dans la mission 3, le château, déjà au niveau 2, peut prendre sa voie tout de suite, et une forteresse rasée n'envoie plus ses propres raids. Les missions 2 et 3 gardent la recherche de la mission précédente quand vous enchaînez ; chaque nouvel essai repart comme le premier, et une mission choisie dans la liste commence sans elle.

Les défis (`campaigns/demo_challenges/`, `"linear": false`) sont écrits de la même façon. *Or mince* s'ouvre après la mission 2 : 600 or, un château de niveau 2, une petite ville avec un comptoir sur la route du sud, et 15 minutes (`time_limit`) pour raser un camp gobelin et un camp de bandits qui attaque la route ; des bandits tentent la route deux fois avant que les raids du camp ne commencent. *Tenir la route* s'ouvre après la mission 3 : le comptoir est déjà ouvert, des pillards arrivent par la route du sud toutes les 500 ticks, un peu plus forts à chaque fois, et 10 allers-retours de caravane doivent aboutir en 14 minutes 20 secondes. Un royaume libre (le Royaume libre de la démo ou le Bac à sable du jeu complet) n'a pas d'objectif ; sa fenêtre de départ permet de demander que le Chef Croc-Grinçant vienne une fois, 20 minutes après le début (`game/systems/free_kingdom.py`). Dans *Tenir la route*, chaque raid marche sur le comptoir : un comptoir que personne ne défend est rasé et sa caravane disparaît avec lui ; ne rien faire, c'est perdre le défi.

## Une mission de royaume, pas à pas

1. Dans Creator / Workshop, choisissez **Nouveau projet**, puis **Mission de royaume**, et un nouveau dossier. Vous obtenez un niveau jouable : une ville, un camp gobelin à l'est, les primes « Explorer », « Tuer » et « Défendre » de la couronne, deux vagues annoncées et le chef comme boss nommé.
2. Ouvrez-le dans l'éditeur de campagne. Le formulaire du niveau contient l'histoire (intro), le conseil du briefing, l'or de départ et la victoire ; en dessous, le niveau de château au départ, la limite de temps et jusqu'à deux découvertes facultatives avec leurs cases.
3. Peignez la carte : déplacez la ville, le repaire et les routes. Un emplacement doit être accessible depuis le château, sinon ce qui s'y trouve est omis au début du niveau. Un bâtiment du fichier de carte peut porter `"ruin"` (de 1 à 99) : il commence comme un chantier avec ce pourcentage de travail fait, et l'équipe de la couronne le termine sans frais.
4. Ouvrez les déclencheurs pour changer les messages, les primes de la couronne (`post_bounty`), les vagues (`spawn_enemies`) et le moment du boss (`spawn_boss`). La condition `enemy_building_seen` attend qu'un repaire soit en vue.
5. Dans `campaign.json`, `roster` nomme les monstres qui errent sur la carte et `blocked_events` les événements aléatoires jamais tirés.
6. Validez : les contrôles désignent par leur champ un niveau de château, une limite de temps, une découverte facultative, une entrée de distribution ou un événement erronés. Jouez ensuite le niveau depuis l'espace de travail ; la difficulté choisie y règle les raids, les vagues et l'or de départ.
7. Publiez-le d'abord en privé, puis rendez-le public quand il se joue comme vous l'entendez.
