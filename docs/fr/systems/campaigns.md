---
title: "Mode Campagne"
---

Le mode campagne propose des scénarios à plusieurs niveaux, chacun avec des conditions de victoire spécifiques et un contexte narratif.

---

## Campagnes intégrées

Le jeu inclut une **Campagne tutoriel** intégrée (5 niveaux) qui guide les nouveaux joueurs à travers les différentes mécaniques du jeu. Elle a son propre bouton, le premier du menu principal.

---

## Expéditions

Une expédition est un itinéraire de cartes dont vous choisissez chaque étape au fur et à mesure. Elle s'ouvre depuis le bouton **Expédition** du menu principal.

**L'expédition de la frontière** compte six cartes et quatre itinéraires, de quatre cartes chacun :

| Étape | Carte | Ce qu'elle demande |
|---|---|---|
| Départ | **Camp frontalier** | Bâtissez une ville et rasez le camp gobelin à l'est. Le vieux phare au sud-ouest est facultatif : réparez-le ou récupérez-en les matériaux. |
| Première | **Escorte sur la route commerciale** | Ouvrez un comptoir commercial au bout de la route du sud et faites payer deux allers-retours de caravane. Le camp de bandits peut rester debout. Donne 300 or à la carte suivante. |
| Première | **Relais perdu** | Achevez le chantier du relais : reconstruisez-le, ou ramenez son survivant chez lui. Donne 150 or à la carte suivante. |
| Deuxième | **Tombe scellée** | Achevez le chantier de la tombe : scellez-la, étudiez-la ou pillez-la. |
| Deuxième | **Frontière ennemie** | Coupez la ligne de ravitaillement gobeline (tuez un transporteur avant qu'il ne livre sa cargaison, ou rasez le camp qui les envoie) et rasez l'avant-poste gobelin. Le vieux phare est facultatif. |
| Arrivée | **Col de la Couronne** | Repoussez deux raids, puis rasez la forteresse gobeline. |

L'itinéraire est dessiné sur une carte de parchemin des marches. Chaque carte est un sceau, cerclé selon ce qu'elle est pour votre expédition : gagnée, l'endroit où vous êtes et les étapes ouvertes, le reste encore fermé. Choisissez l'étape suivante par son sceau ou dans la liste à côté de la carte ; un double clic ou Entrée part.

La forteresse du col envoie une troisième vague de renforts, sauf si votre partie a brisé la frontière ennemie. Un itinéraire qui passe par la tombe peut tout de même gagner ; il doit simplement affronter une vague de plus. Au relais et à la tombe, le chantier de la ruine est l'objectif : il n'est donc pas possible de le laisser de côté. Un chantier qui échoue ou dont vous vous retirez est proposé à nouveau, et seule la perte du lieu de la ruine fait perdre la carte.

**Entre deux cartes**, l'écran d'expédition montre l'itinéraire parcouru et les chemins qui s'ouvrent, chacun avec son briefing et ce qu'il change au bout de l'itinéraire :

- Choisissez le groupe : jusqu'à **six** héros continuent, les autres attendent à l'arrière. La réserve en accueille **douze** au plus ; renvoyez quelqu'un chez lui pour faire de la place. Les héros reviennent avec toute leur santé. Les morts restent morts.
- Le trésor de la carte suivante est son propre budget, plus la **moitié** de l'or laissé par la carte précédente (**1000** au plus), plus la récompense de la carte précédente. L'écran fait le calcul pour vous avant le départ.
- La recherche et la voie du château sont conservées pendant toute la partie. Les bâtiments restent derrière.

Une carte perdue se rejoue depuis le même départ : mêmes héros, même or, même carte. Une partie attend entre deux cartes jusqu'à ce que vous la repreniez depuis le menu principal. **Abandonner la partie** y renonce, et **Terminer** clôt une partie arrivée au bout. Chaque itinéraire que vous terminez est conservé dans votre palmarès, avec votre meilleur temps.

### La carte de la démo

Les cinq niveaux de la démo sont aussi dessinés sur une seule carte de parchemin, la **carte de l'expédition**. *La première couronne* vient d'abord ; elle ouvre à la fois *Des ombres sur la route commerciale*, *Or mince* et *Tenir la route*, à jouer dans l'ordre voulu. Deux des trois ouvrent *La nuit de Croc-Grinçant*, et la troisième reste ouverte jusqu'à la victoire finale : la laisser de côté n'est jamais un échec.

| Route | Sa récompense pour le niveau suivant |
|---|---|
| **Des ombres sur la route commerciale** | 300 pièces d'or au trésor |
| **Or mince** | Bâtiments 25 % moins chers, jusqu'à 400 pièces économisées |
| **Tenir la route** | Tous les héros commencent avec leurs potions pleines, et 200 pièces sont réparties en ravitaillement |

Une récompense sert au niveau suivant puis disparaît ; rejouer ce niveau la redonne. La compagnie, la moitié du trésor (1000 au plus), la recherche et la voie du château suivent comme dans L'expédition de la frontière.

Choisissez un sceau pour lire son niveau à droite : histoire et objectifs, durée approximative, trésor de départ et récompense. Un anneau en pointillés est un niveau pas encore ouvert (le panneau dit combien de routes il attend encore), un anneau doré un niveau où partir, un double anneau un niveau gagné pendant cette expédition. **Se mettre en route** le lance ; **S'entraîner** rejoue seul un niveau déjà gagné, sans toucher l'expédition. Les niveaux gagnés avant l'arrivée de la carte portent leur sceau. Glisser pour déplacer, molette pour zoomer, flèches pour passer d'un sceau à l'autre, Entrée pour partir et Début pour voir toute la carte.

### Créer une carte

Le `map_route.json` d'une campagne place ses niveaux sur une carte. On le crée dans l'onglet **Carte** de l'éditeur de campagne : chaque nœud est un niveau aux coordonnées `x`, `y` (de 0 à 1 depuis le coin supérieur gauche), avec les nœuds qu'il attend (`after`) et combien doivent être gagnés (`need`, tous s'il est omis) ; `minutes` est l'estimation du briefing et `reward` une récompense unique (`trade_subsidy`, `build_discount` ou `escort_supply`, avec un `amount`). `links` sont les traits d'encre, `end` le dernier nœud et `art` l'image : `demo_frontier`, ou un PNG ou JPG dans le dossier de la campagne (8192 pixels de côté et 16 millions au total au plus ; sinon un parchemin uni). **Vérifier l'itinéraire** dessine un aperçu. Le seul nœud sans `after` est le départ ; la carte doit pouvoir se jouer jusqu'au bout dans un certain ordre, et le Workshop exige que chaque nœud soit un niveau de la même campagne ou d'une campagne fournie avec le jeu.

### La carte des niveaux d'une campagne

Chaque campagne se choisit sur parchemin. Son `level_map.json` place ses niveaux ; on le crée dans l'onglet **Carte des niveaux** de l'éditeur de campagne. `places` donne à chaque niveau, par son `id` stable, des coordonnées `x`, `y` (de 0 à 1 depuis le coin supérieur gauche) ; `links` sont les traits d'encre entre deux niveaux ; `art` est l'image (une du jeu, ou un PNG ou JPG dans le dossier de la campagne, avec les mêmes limites qu'une carte d'expédition). Sans le fichier, ou quand il laisse un niveau de côté, les niveaux suivent une route sur un parchemin uni, reliés par leurs `requires`, ou l'un après l'autre dans une campagne jouée dans l'ordre. Qu'un niveau soit ouvert dépend toujours de ses `requires`. Un itinéraire d'expédition (`expedition.json`) place ses cartes de la même façon : un `art` et les `x` et `y` de chaque nœud ; un itinéraire sans eux est disposé selon ses étapes.

### Créer un itinéraire

Une campagne devient une expédition grâce à un fichier `expedition.json` placé à côté de son `campaign.json`. Construisez-le dans l'onglet **Itinéraire d’expédition** de l'éditeur de campagne : donnez à chaque nœud un niveau de la campagne et l'or qu'il accorde au nœud suivant (de 0 à 2000), listez les chemins qui en partent, puis choisissez le départ et l'arrivée. **Vérifier l’itinéraire** indique combien d'itinéraires cela donne. Les vérifications du Workshop exigent que chaque nœud renvoie à un niveau de la même campagne ou d'une campagne fournie avec le jeu. Un test de jeu peut jouer l'itinéraire depuis son départ.

```json
{
  "version": 1, "id": "frontier", "start": "camp", "end": "pass", "length": 4,
  "nodes": [{"id": "trade", "campaign": "expedition.frontier", "level": "trade", "grants": {"gold": 300}}, "..."],
  "edges": [["camp", "trade"], ["trade", "tomb"], "..."]
}
```

Un itinéraire doit mener du départ à l'arrivée, sans boucle ; chaque nœud doit se trouver sur au moins un itinéraire, et chaque itinéraire doit être aussi long que `length`. `requires` liste les capacités dont l'itinéraire a besoin en plus de `expeditions` (par exemple `relics` ou `lair_expansion`). Un itinéraire dont un niveau n'est pas installé, ou dont l'édition n'a pas une capacité qu'il exige, reste affiché sur l'écran d'expédition avec la raison, mais ne peut pas être lancé. Un niveau peut tenir compte de la partie en cours grâce aux conditions de déclencheur `expedition_won` et `expedition_lacks` (`{"node": "<id>"}`), et les objectifs `complete_relic` (le chantier d'une relique achevé) et `intercept_supply` (N transporteurs ennemis tués avant de livrer, ou tous les camps qui les envoient rasés) donnent un but à un nœud.

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
| `carry_over` | Ce qui est conservé du niveau précédent : `gold`, `adventurers`, `research`, `path` (la voie du château et sa spécialité) (chacun true/false). Ce qu'un niveau indique dans `carry_over` est repris d'un autre niveau de la même campagne quand le joueur enchaîne, et noté à ce moment-là ; chaque nouvel essai du niveau repart de cette note. Un niveau lancé depuis la carte de la campagne ne reprend rien, et ce qu'un niveau n'indique pas (la recherche et la voie du château non plus) ne survit pas à la carte. |
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
| `hero_bonds_disabled` | `true` : sur ce niveau, les héros ne nouent aucun nouveau lien et n'invitent aucun compagnon (leurs liens antérieurs restent) ; omis : liens comme d'habitude |

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

La mission 1 commence près des ruines d'une forge et d'un marché : l'équipe de la couronne les relève sans frais, la forge d'abord, et tout ce que vous placez, votre première guilde aussi, attend son tour derrière elles sauf si vous le marquez prioritaire. Dans la mission 1, des messages mènent de la première guilde au premier héros, au marché et au percepteur. Au bout d'environ 48 secondes, la couronne pose à ses frais une prime « Explorer » près du camp ; une fois qu'un héros l'a accomplie, on vous demande de poser une prime « Tuer » sur le camp. Dans la mission 2, la couronne fait explorer les deux sites de comptoir, des pillards tendent une embuscade sur la route du sud une fois (annoncée 20 secondes à l'avance), et le premier bâtiment perdu apporte 400 or d'aide. Dans la mission 3, un raid arrive par la route de l'est au tick 1000 et un autre par la route du nord au tick 2500 et le Chef Croc-Grinçant au tick 4300, chacun annoncé 100 ticks à l'avance ; raser sa forteresse est une expédition qui vaut son butin, mais seule sa défaite donne la victoire. Les missions 1 et 2 proposent une Guilde des bâtisseurs pour les réparations ; dans la mission 3, le château, déjà au niveau 2, peut prendre sa voie tout de suite, et une forteresse rasée n'envoie plus ses propres raids. Les missions 2 et 3 gardent la recherche de la mission précédente quand vous enchaînez ; chaque nouvel essai repart comme le premier, et une mission choisie sur la carte commence sans elle.

Les défis (`campaigns/demo_challenges/`, `"linear": false`) sont écrits de la même façon. *Or mince* s'ouvre après la mission 2 : 600 or, un château de niveau 2, une petite ville avec un comptoir sur la route du sud, et 15 minutes (`time_limit`) pour raser un camp gobelin et un camp de bandits qui attaque la route ; des bandits tentent la route deux fois avant que les raids du camp ne commencent. *Tenir la route* s'ouvre après la mission 3 : le comptoir est déjà ouvert, des pillards arrivent par la route du sud toutes les 500 ticks, un peu plus forts à chaque fois, et 9 allers-retours de caravane doivent aboutir en 14 minutes 20 secondes. Un royaume libre (le Royaume libre de la démo ou le Bac à sable du jeu complet) n'a pas d'objectif ; sa fenêtre de départ permet de demander que le Chef Croc-Grinçant vienne une fois, 20 minutes après le début (`game/systems/free_kingdom.py`). Dans *Tenir la route*, chaque raid marche sur le comptoir : un comptoir que personne ne défend est rasé et sa caravane disparaît avec lui ; ne rien faire, c'est perdre le défi.

Les **défis de boss** se choisissent depuis le menu principal, sur leur propre carte en parchemin. Chacun des trois boss nommés — le chef Croc-Grinçant, le scorpion des dunes et le tyran des cendres — se combat seul. Les bâtiments et les recherches sont déjà payés sur 14000 or, et les héros sont ceux que tes guildes engagent : le boss arrive au bout de dix minutes, le compte à rebours sur la ligne d'objectif, et un message te prévient une minute avant. Vaincre le boss fait gagner. Tenir l'avant-poste et raser le sanctuaire sectaire qui envoie les gardes du tyran sont des objectifs facultatifs : les manquer ne fait jamais perdre. En Difficile, chaque boss utilise ses attaques renforcées aux mêmes seuils de santé.

## Une mission de royaume, pas à pas

1. Dans Creator / Workshop, choisissez **Nouveau projet**, puis **Mission de royaume**, et un nouveau dossier. Vous obtenez un niveau jouable : une ville, un camp gobelin à l'est, les primes « Explorer », « Tuer » et « Défendre » de la couronne, deux vagues annoncées et le chef comme boss nommé.
2. Ouvrez-le dans l'éditeur de campagne. Le formulaire du niveau contient l'histoire (intro), le conseil du briefing, l'or de départ et la victoire ; en dessous, le niveau de château au départ, la limite de temps et jusqu'à deux découvertes facultatives avec leurs cases.
3. Peignez la carte : déplacez la ville, le repaire et les routes. Un emplacement doit être accessible depuis le château, sinon ce qui s'y trouve est omis au début du niveau. Un bâtiment du fichier de carte peut porter `"ruin"` (de 1 à 99) : il commence comme un chantier avec ce pourcentage de travail fait, et l'équipe de la couronne le termine sans frais.
4. Ouvrez les déclencheurs pour changer les messages, les primes de la couronne (`post_bounty`), les vagues (`spawn_enemies`) et le moment du boss (`spawn_boss`). La condition `enemy_building_seen` attend qu'un repaire soit en vue.
5. Dans `campaign.json`, `roster` nomme les monstres qui errent sur la carte et `blocked_events` les événements aléatoires jamais tirés.
6. Validez : les contrôles désignent par leur champ un niveau de château, une limite de temps, une découverte facultative, une entrée de distribution ou un événement erronés. Jouez ensuite le niveau depuis l'espace de travail ; la difficulté choisie y règle les raids, les vagues et l'or de départ.
7. Publiez-le d'abord en privé, puis rendez-le public quand il se joue comme vous l'entendez.

<!-- gameplay-preparation:start -->

Les héros comparent les boutiques accessibles, les prix et la capacité réelle des logements. Après une retraite, ils récupèrent avant de reprendre un travail dangereux ; les détails d’expédition montrent la préparation et les repos accessibles. Les niveaux personnalisés peuvent proposer jusqu’à trois plans de victoire complets, tout en conservant les conditions communes. Les niveaux classiques à condition unique gagnent si le but est atteint au dernier tick autorisé ; les plans alternatifs conservent la priorité de la défaite.

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

Les détails des expéditions indiquent les boutiques de potions et les repos accessibles, ainsi que les soins et boucliers alliés appris. Les boutiques comptent les visites, la durée moyenne du trajet et les attaques. Le bilan nomme un plan de victoire principal et les exploits simultanés, avec un seul règlement de base.

<!-- gameplay-preparation:end -->

## Phare ancien

Sur les cartes avec un phare ancien, sélectionnez le lieu découvert pour voir coûts, délai et choix dans les détails. Réparer exige une équipe ou un bâtisseur sur place ; à mi-chemin, choisissez un financement supplémentaire ou le retrait. La fin des travaux signale les ennemis découverts à 20 cases. Récupérer le trésor exige qu’un héros accepte le drapeau d’exploration, arrive et travaille ; le trésor royal et le travailleur sont payés une fois. Ignorer ne lance aucun délai ; le retrait rembourse seulement les fonds inutilisés. La ruine ne recrute pas et ne renforce pas les drapeaux. Quitter le niveau abandonne les travaux acceptés sur une relique et rend les fonds non dépensés, comme un retrait ; les effets d’une relique restent sur sa carte, et seul ce que la campagne conserve (or, héros, recherche) passe au niveau suivant.

## Logistique gobeline facultative

Cartes et niveaux peuvent déclarer la capacité `lair_expansion` et une liste homonyme de quatre plans au plus. Chaque plan exige `id` et `target`, qui désigne une tente gobeline existante par son `objective_id` unique. Le transporteur doit arriver et un travailleur vivant doit construire sur place. Convois, escortes, défenseurs et raids partagent un budget fini : quatre cycles et 64 nouvelles unités par source au plus. Perdre l’avant-poste retarde et affaiblit un raid non parti ; détruire la base arrête la production sans supprimer les survivants ni les avant-postes facultatifs. Ces postes n’ajoutent pas de bases obligatoires à la victoire. Sans plans, le calendrier existant reste actif. Les transporteurs portent des caisses distinctives, avec leurs propres animations et sons, et apparaissent uniquement dans les convois affectés. Après reconnaissance, une prime peut viser le transporteur mobile. Le tuer annule cette cargaison et retarde la production ; les escortes survivantes restent au combat. Cargaison et prime sont réglées une seule fois ; l’annulation suit les remboursements habituels. Les postes ont leurs propres échafaudages, auvents de ravitaillement terminés et débris. Un travailleur vivant construit le chantier attaquable ; il ne crée aucun nouveau défenseur avant sa fin. Le détruire retarde les attaques non parties et ramène leur rassemblement à la base. Détruire la base arrête la production mais garde survivants et postes isolés. Chaque source conserve au plus un débris décoratif, sans défenseurs ni objectifs de victoire ajoutés.

Le formulaire Expansion des repaires est commun aux cartes et campagnes : choisissez quatre tentes gobelines au plus, les durées de protection, préparation, livraison, construction, rassemblement et attente, les cycles, le budget partagé, les escortes et huit rectangles interdits par source. Les durées sont en secondes de jeu, par pas de 0,2. Appliquer met à jour le brouillon ; annuler garde les valeurs. Vider les sources de la carte désactive l’expansion. La désactivation explicite du niveau prime sur la carte ; sinon une liste vide hérite de ses réglages. Sources en double ou absentes et zones hors carte sont refusées avant enregistrement.

La limite commune des postes de la carte va de un à quatre. Un convoi finançant un nouveau chantier réserve sa place avant de partir ; à capacité pleine, les autres sources attendent sans produire d’unités ni accumuler de raids. Un poste isolé vivant garde sa place jusqu’à sa destruction.

La couche de renseignements sur le ravitaillement montre uniquement les points et sites observés. Production, santé, trésor et défenseurs de la base, stade/progrès du poste et positions du convoi gardent des heures séparées. Hors de vue, la dernière valeur reste ; construction ou démolition cachée ne change pas l’image connue. Une nouvelle reconnaissance actualise les données. La route retient seize points observés au plus. Les avis restent uniques après chargement et le briefing explique les quatre stratégies à budget fini.

Le jeu libre propose une expansion limitée des tentes gobelines, activée par défaut. Les parties mixtes ou gobelines réservent une des places de repaire choisies à une tente et relient au plus quatre tentes existantes, sans augmenter le total. Les autres races ne reçoivent aucune source ajoutée. Les campagnes utilisent les réglages de leur auteur.

Échafaudage, dépôt et ruine ont des silhouettes distinctes et une étoffe animée, fixe en mouvement réduit. Le messager martèle seulement pendant le travail réel. Découverte de convoi et observation de chantier, achèvement ou ruine ont leurs icônes et sons ; changements cachés et chargement ne répètent pas les avis. Les formulaires compacts et les renseignements défilent, aussi au clavier dans le panneau.

Les coursiers attendent jusqu’à 10 secondes que les unités mobiles quittent le terrain du nouvel avant-poste, jamais au-delà du délai de livraison ; ensuite ils livrent quand même et ceux qui s’y trouvent encore sont déplacés sur la case libre la plus proche. Les coursiers et leurs escortes s’arrêtent hors du terrain prévu.

Après la récupération des matériaux d’une ancienne balise, les équipes ne la restaurent pas gratuitement ; récupération et réparation restent incompatibles.

Voici les conditions par défaut de la tombe et du relais. Sélectionnez un site découvert pour ses coûts réels, le délai original restant et les résultats ; le jeu continue pendant les choix.

La section facultative de la chronique suit les reliques découvertes, la branche choisie, la progression, les blocages, le délai original restant et les résultats réels. Le lien Afficher situe le lieu original sans accepter de choix ni dépenser d’or. Une relique qui entre dans le champ de vision fait l’objet d’une nouvelle, tout comme les travaux acceptés qui s’arrêtent à mi-chemin, échouent ou se terminent ; un retrait que vous choisissez est noté d’une ligne dans le journal. Un lieu montre où il en est : une ruine tant qu’aucun travail n’est accepté, des échafaudages et des matériaux empilés pendant que la couronne y travaille, ce que laisse le choix achevé (un phare allumé ou démonté, un tombeau scellé ou ouvert, un relais reconstruit), ou des décombres si le travail a échoué. Ce qui retient le travail est dit précisément : aucun héros pour le prendre, la raison propre des héros qui le refusent, des monstres près du lieu, un autre chantier de l’équipe d’abord (avec la place du lieu dans l’ordre), ou l’eau, des falaises ou des bâtiments qui l’enferment.

Sites de reliques facultatifs: 0 désactive la génération. Placez au plus deux reliques différentes sur un terrain dégagé accessible hors de la zone sûre du château, sans couper les routes. Aucun paiement ni travail avant acceptation. Les sites sont à 21–80 cases du château et doivent permettre un trajet normal des ouvriers.

Les règles de carte et les niveaux partagent un éditeur pour deux sites originaux au plus, des choix fixes et des coûts, récompenses, travaux et délais bornés. Annuler garde le brouillon ; Appliquer valide les sources sans lancer le jeu. Une liste de niveau vide hérite de la carte ; `relics_disabled: true` désactive cet héritage. Vider les reliques d’une carte autonome retire ses modèles à la sauvegarde.

**Tombe scellée**

- Renforcer le sceau: Après financement supplémentaire, supprime seulement 2 raids prévus de Cimetière / Château mort-vivant. Gardes, apparitions ordinaires et autres sources restent normaux. La source d'origine doit survivre.
- Financer la recherche: Un déblocage admissible de Affinité arcanique, sinon 80 pièces si indisponible ou déjà connu. Conditions ordinaires de la tour des mages et de recherche. Arrêt à mi-parcours : financer davantage ou se retirer.
- Ouvrir la tombe: Un trésor de 240 pièces après une exploration réelle et la défaite de 3 gardes squelettes. Le financement ouvre la tombe ; les gardes survivants restent après retrait ou expiration.

**Relais perdu**

- Reconstruire le ravitaillement: Rétablit 6 achats payants partagés de niveau 1 : soins, potions ou réactifs aux prix ordinaires. Aucun revenu périodique ni amélioration. Reconstruction et secours s'excluent.
- Escorter le survivant: Des volontaires doivent escorter le survivant d'origine au château sûr. Chance d'adhésion 75%, fixée au financement : un rôdeur seulement si classe et voie sont autorisées et un pavillon achevé a une place à l'arrivée. Le trésor reçoit 120 pièces, avec ou sans adhésion ; aucun recrutement différé. Secours et reconstruction s’excluent.

## Extensions communes de cette version

La démo et le jeu complet ont les quatre ; chacune n'est active que là où une carte, un niveau ou un réglage la demande. Les anciennes sauvegardes, cartes et extensions ne l'activent pas d'elles-mêmes.

- **Expansion des repaires** : les coursiers de ravitaillement, avant-postes et offensives limitées d'une tente gobeline. `lair_expansion` d'une carte ou d'un niveau (désactivée par `lair_expansion_disabled`) ; en partie libre, *Expansion gobeline à ravitaillement limité* (activée par défaut).
- **Liens entre héros** : relations, invitations, voyages à plusieurs et séparations, la liste et le panneau des raisons. Actifs sauf si le niveau met `hero_bonds_disabled` ; en partie libre, *Liens entre héros* (activés par défaut).
- **Ruines** : la balise antique, la tombe scellée et le relais perdu, chacun avec deux choix principaux. `relics` d'une carte ou d'un niveau (désactivées par `relics_disabled`) ; en partie libre, *Sites de reliques facultatifs* (0 par défaut).
- **Expéditions** : manches, itinéraires, une liste transmise d'une carte à l'autre, nouvelles tentatives et l'*Expédition frontalière* à six cartes et quatre itinéraires. Un modèle indique les capacités qu'il `requires` ; s'il lui manque un niveau ou une capacité, il dit lequel, et aucun itinéraire à moitié fait n'est proposé.

Pas dans cette version : l'expansion d'autres races ennemies (seule la tente gobeline s'étend), d'autres modèles de ruines et bâtiments de ruine que la balise, des expéditions plus longues, d'autres modèles d'expédition et des itinéraires aléatoires, ainsi que les prix, durées et combats des chaînes de ruines fixés en jouant vraiment (ce sont encore des valeurs mesurées).
