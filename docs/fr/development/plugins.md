---
title: "Développement de plugins"
---

## Créer et tester

Ouvrez Creator / Workshop depuis le menu principal ou les gestionnaires de cartes et plugins. Créez une carte, une campagne de deux niveaux, un plugin ou le tutoriel de boss et son plugin associé ; modifiez, enregistrez, validez et testez hors ligne. Gérez projets locaux, abonnements, publications, recherche et tâches. Le modèle « Mission de royaume » crée une campagne kingdom d'un niveau avec un briefing, des primes, des vagues et un boss nommé. Importez un ZIP, un fichier de carte ou un dossier de projet avec « Importer du contenu » ou en le déposant sur l'espace de travail ; « Exporter… » écrit un ZIP ou un dossier, et « Ouvrir le dossier » montre les fichiers d'un projet. Les deux demandent un dossier (le dernier est proposé à nouveau), un nom déjà pris devient nom-2, nom-3…, et rien n'est écrit dans le contenu que Steam télécharge. Chaque projet apparaît avec son aperçu, son type, sa version, son auteur, si ce jeu peut le charger et le résultat de sa dernière validation ; chaque liste a une recherche et un filtre de type et dit pourquoi elle est vide, et les détails du projet sélectionné donnent sa licence, ses versions du jeu, ses dépendances et son dossier. « Nouveau projet » liste les modèles avec ce que chacun crée et montre où ira le projet avant toute écriture. La validation signale les places fortes, coffres et boss placés que les héros ne peuvent pas atteindre depuis le château (une erreur quand la victoire en dépend) et limite une carte à 64 places fortes, 256 coffres et 32 boss placés ; un double-clic sur un problème situé sur une case ouvre l'éditeur à cet endroit. L'éditeur de terrain et de campagne s'ouvre dans un processus à part qui ne charge que les dépendances du projet : le contenu installé par le joueur n'y apparaît pas et ne gêne pas ; il enregistre directement dans le projet. Validation, export, essai et publication attendent tant que le projet a des modifications non enregistrées dans un éditeur ouvert par l'espace de travail : ils utilisent les fichiers enregistrés. Dans l'éditeur d'extensions, les phases d'un boss sont un tableau (la santé à laquelle chacune commence, ses compétences), et le nombre, la limite et l'annonce d'une compétence ont leurs propres champs. L'éditeur d'extensions garde un brouillon du travail non enregistré peu après chaque modification, à côté des réglages et hors du projet ; rouvrir le projet après un plantage le propose à nouveau. Dans l'éditeur d'extensions, « Dupliquer » copie une définition sous un nouvel ID, une définition nommée par une autre ne peut être supprimée tant que cet usage existe, et « Copier un élément du jeu… » ajoute une copie complète d'un acteur du jeu sous son propre ID, qui remplace l'original là où il est utilisé sans toucher aux fichiers du jeu. Classes, ennemis, bâtiments, places fortes et recherches ont un formulaire de propriétés (plages et croissance des caractéristiques, or lâché, prix, classe recrutée par un bâtiment, qui une place forte envoie, ce à quoi s'applique une recherche) qui grise les valeurs reprises de la définition de base et signale aussitôt une valeur hors des bornes du jeu ou un ID inconnu ; les dépendances se modifient dans un tableau. L'onglet Ressources accepte les fichiers déposés, montre la zone visible de chaque image face aux limites de taille et de mémoire du jeu, la prévisualise en terrain ou en icône, garde une ligne de source et de crédit, liste et choisit les définitions qui l'utilisent, renomme un fichier avec tous ses usages, refuse de retirer un fichier encore utilisé et redirige les champs qui citent un fichier absent. Un essai s'ouvre sur la liste de ce qu'il a chargé (chaque extension dans l'ordre de chargement avec les définitions ajoutées ou remplacées, et les extensions ignorées avec la raison) ; l'espace de travail affiche la même liste et place une définition ignorée de l'extension testée dans sa liste de problèmes, où ouvrir un problème d'une table de définitions mène à cette définition dans l'éditeur d'extensions.

Importer un dossier/ZIP ou créer une copie modifiable génère de nouveaux ID et réécrit les références de son espace de noms. Auteur, source et licence sont conservés, sans lien de mise à jour hérité. Les originaux Steam sont en lecture seule. Chemins relatifs, budgets, tableaux et cycles sont vérifiés. Une licence vide ne permet pas la redistribution. Publier une copie montre dans la vérification sa provenance (projet, version, auteur et page de l'original) et les conditions de l'auteur d'origine ; elle n'est envoyée qu'une fois que vous confirmez garder cette attribution et respecter ces conditions ou, si l'original ne donne aucune licence, avoir l'autorisation de son auteur. Une licence non indiquée se lit toujours comme une absence d'autorisation de partager. Une copie nomme son original dans ses détails et signale quand l'original abonné a évolué, et les infobulles de Créer une copie modifiable locale, Exporter… et Désabonnement disent ce que fait chacun.

La publication exige Steam : préparez page et aperçu, examinez l'instantané immuable des fichiers et empreintes, puis confirmez l'envoi. Les tâches continuent après fermeture ; la préparation peut être annulée. Un envoi ou résultat inconnu exige un contrôle ou une resynchronisation avant nouvel essai. Les liens distinguent compte, app et projet. Aperçu inférieur à 1 MiB ; tests sur Steam simulé. Publiez d'abord les plugins requis et confirmez leurs ID dans la même app lors de la revue de la carte/campagne. L’assistant conserve les textes par langue et les métadonnées JSON, recadre l’aperçu principal en carré et réordonne/supprime jusqu’à huit captures supplémentaires. Une publication existante peut modifier seulement la page et les dépendances sans renvoyer le contenu ; les images font partie de l’instantané vérifié. L'assistant peut créer l'aperçu principal à partir du projet lui-même (le terrain d'une carte avec château, places fortes et coffres, les premiers niveaux d'une campagne, les images propres d'une extension, chacun avec le titre), montre l'aperçu tel qu'il sera envoyé avec sa taille, dessine une légende facultative en bas de chaque capture et signale les images citées par un brouillon qui ont disparu. Ses trois étapes (page, dépendances et versions, vérification) se parcourent avec Retour et Suivant (Alt+Gauche, Alt+Droite) ; un problème mène à son étape et encadre le champ jusqu'à sa modification, et la vérification compte les fichiers ajoutés, modifiés et retirés depuis la dernière publication. Une tâche échouée indique le type de problème (autorisation, accord du Workshop, place, Steam occupé, délai, Steam hors ligne, vérifications, résultat inconnu, interruption), la marche à suivre et un code comme WS-PERM-R15 qui ne cite ni compte, ni élément, ni fichier. Sélectionner l'un de vos éléments dans Mes publications affiche sa visibilité, sa version, ses dates de création et de mise à jour, sa taille, le projet local lié et la liste de ce qu'une mise à jour depuis ce projet changerait : champs de la page, fichiers et éléments requis. Sélectionner un élément dans le navigateur affiche sa description (ou le fait que Steam n'en a fourni aucune) et deux parties distinctes : ce que dit Steam (type, éléments requis, branches du jeu autorisées par l'auteur, version enregistrée par sa publication, date de mise à jour, taille, votes) et, une fois que Steam l'a installé, ce que dit son propre manifeste (projet et version, si cette version du jeu peut exécuter les versions demandées, projets requis, ce qu'il peut modifier). Rien de ce que Steam ne fournit pas n'est inventé. Un élément abonné n'est utilisé qu'une fois installé par Steam et vérifié : son manifeste est lisible par ce jeu et chaque projet requis est installé dans une version acceptée, sans cycle (si deux éléments fournissent le même projet, votre propre plugin l'emporte, sinon l'élément le plus ancien). Un élément que Steam met à jour reste utilisé dans sa version installée. L'onglet Abonnements indique où en est chaque élément abonné (en attente de Steam, en téléchargement avec ses octets, en attente de vérification, disponible, il manque ce qu'il requiert, ou en échec et pourquoi), et le navigateur dit la même chose de l'élément sélectionné ; un téléchargement que Steam n'a pas pu terminer, disque plein par exemple, n'est redemandé que lorsque vous cliquez sur Relancer le téléchargement. Avant de charger une sauvegarde, le jeu vérifie le contenu avec lequel elle a été faite : si un projet utilisé a été mis à jour, désactivé, désabonné ou est inutilisable, ou si un autre contenu est activé, il les nomme un par un et, après confirmation, charge la sauvegarde depuis sa copie conservée, ou dit pourquoi elle ne peut pas se charger (aucune copie utilisable, une mise à jour du jeu, un autre compte ou une autre app Steam, Steam non lancé) et comment y remédier ; le fichier de sauvegarde et la partie en cours restent tels quels. « Contenu conservé… » dans l'onglet Abonnements liste ces copies avec les sauvegardes qui en dépendent, les vérifie et supprime celles qui ne servent pas ; une copie dont dépend une sauvegarde ne part qu'après une confirmation qui nomme les sauvegardes, et celle de la partie en cours jamais. Les détails des articles et des projets indiquent aussi la version de ce jeu (non définie dans une version de développement, où le contenu qui demande une version précise du jeu ne se charge pas) et sa branche Steam, et Ouvrir la page de l'élément dans l'onglet Abonnements montre un article inutilisable ; si Steam bascule le jeu sur une autre branche en cours de partie, un avis le signale et rien ne redémarre tout seul. Les tags d'une page sont son type plus n'importe lesquels parmi Story, Challenge, Bosses, Classes, Enemies, Buildings, Research, Events, Languages, Art ; l'étape de la page liste les langues dont vous avez écrit la page (toute autre langue Steam affiche la page par défaut), et pour un élément déjà publié, « Importer la page depuis Steam… » compare la page sur Steam à votre brouillon champ par champ et ne reprend que les champs cochés. Sans Steam, les éléments abonnés ne sont pas chargés et les copies conservées ne sont pas utilisées, car les deux appartiennent à un compte et une app Steam (la démo et le jeu complet sont des apps distinctes, chacune avec ses éléments, brouillons et profils de contenu) ; une sauvegarde qui en a besoin le dit, et créer, vérifier, tester, exporter et importer vos propres projets fonctionne hors ligne. Pendant une partie test, le jeu mesure le temps de tick, la mémoire et l'atlas de sprites, et l'espace de travail les ajoute au rapport de test notés correct, à surveiller ou trop lourd, avec ce qui aide ; si un envoi échoue à cause du contenu ou du quota, l'explication cite les limites de Steam, et un envoi terminé rappelle de s'abonner et de vérifier le chargement, la publication ne le testant pas. Un envoi n'est abandonné qu'après cinq minutes sans progrès, et les tâches terminées ou annulées quittent la liste une semaine plus tard ; les sessions de test qu'aucun jeu en cours n'utilise sont supprimées quand d'autres commencent, Entrée sur un projet local ouvre son éditeur, et ces fenêtres tiennent sur un écran de 1280 × 720 dans toutes les langues.

## Définitions et dépendances

Les plugins versionnés ajoutent des classes, ennemis, bâtiments et bastions indépendants à partir de modèles intégrés, ainsi que compétences, recherches, événements, boss nommés, ressources et langues. Les nouveaux ID utilisent `namespace:name` ; un ID intégré remplace la définition existante. Les fichiers du cœur restent en lecture seule. Les habillages remplacent les images des acteurs ou du terrain sans modifier les valeurs de jeu. Un bâtiment du joueur peut porter un effet : une compétence d'attaque, de soin, de bouclier ou d'état qu'il lance à intervalles fixes sur les ennemis ou les héros à portée dès un niveau donné. Un pack dont les capacités se limitent à assets et languages ne peut contenir que des skins et des langues, et une image ou un son que le jeu ne peut pas utiliser laisse celui d'origine en place.

Le manifeste commun décrit ID du projet, auteur, version, compatibilité, ressources et dépendances. Le chargement est déterministe ; dépendances manquantes, incompatibles ou cycliques le bloquent. Les anciens projets conservent format et ordre. Les profils montrent les remplacements et s'appliquent à la prochaine partie. Les profils de contenu listent les plugins choisis dans l'ordre de chargement, chacun avec sa provenance et la version installée, celle du jeu en cours et celle choisie pour la suite ; Monter et Descendre ne changent l'ordre que là où les dépendances le permettent, et l'ordre s'applique au prochain chargement dans le même compte et la même app Steam. Avant tout changement, le profil liste ce que l'application activerait ou désactiverait, avec les cartes, campagnes, plugins et sauvegardes qui utilisent un plugin désactivé ; un double-clic sur un problème trouve son plugin, une carte ou une campagne peut suggérer les plugins qu'elle requiert, et un article abonné non proposé, comme la copie d'un de vos plugins, dit pourquoi.

## Exemples

```json
{"manifest_version":1,"format_version":1,"kind":"Plugin",
 "project_id":"sample:content","namespace":"sample","version":"1.0.0",
 "author":"Author","game_version":"*","entry_points":["plugin.json"],
 "assets":["preview.png"],"preview":"preview.png","languages":["en"],
 "capabilities":["dynamic_types","behavior_templates","bosses","assets"],
 "dependencies":[],"license":"","source":{}}
```

`content-manifest.json` / `<map-stem>.manifest.json`

```json
{"id":"sample","name":"Example","version":"1.0.0",
 "content":{"enemies":"content/enemies.json","skills":"content/skills.json",
 "bosses":"content/bosses.json","languages":["lang/en.json"]}}
```

`plugin.json`

```json
[{"id":"sample:slime","base":"SLIME","stats":{"hp":90}}]
```

```json
[{"id":"sample:strike","template":"attack","cooldown":60,"radius":5,"power":10}]
```

```json
[{"id":"sample:chief","enemy":"sample:slime","name":"Chief",
 "phases":[{"hp":1,"skills":[]},{"hp":0.5,"skills":["sample:strike"]}],"reward":100}]
```

```json
{"bosses":[{"definition":"sample:chief","encounter":"bridge_chief","x":21,"y":16}],
 "victory":"defeat_boss","victory_target":"bridge_chief"}
```

```json
{"project_id":"sample:content","version":">=1.0.0,<2.0.0","optional":false}
```

## Ressources et limites

| JSON | Ressources et limites |
|---|---|
| skills | attack, heal, shield, status, summon |
| adventurer_classes.skills | l'arbre de compétences d'une classe (compétences passives) : une liste de `{"id", "level", "effect", "requires": [ids]}`, autant qu'on veut et plusieurs par niveau, ou l'ancienne table `{"<niveau>": {"id", "effect"}}`, lue comme une chaîne ; les id sont uniques dans la classe, `requires` nomme des compétences de la même classe, sans boucle |
| adventurer_classes.active_skill, tree_skills | les compétences actives propres à la classe, nœuds du même arbre : `active_skill` est l'ID de la première (une racine), `tree_skills` jusqu'à 12 ID de celles qui poussent de l'arbre. Chacune est une compétence de `skills` (jamais summon), apprise à son `level` dès que le héros a toutes celles que nomme son `requires` (jusqu'à 8 ID de compétences de la classe, passives ou actives ; aucune pour la première), et chacune attend son propre `cooldown`. Sans `active_skill`, la classe garde la première compétence de sa classe de base |
| buildings.effect | une compétence attack, heal, shield ou status (jamais summon), lancée toutes les 10–3600 ticks dès le niveau 1–3 du bâtiment ; les états ne se cumulent pas |
| research | stat_modifier |
| castle_branches | une voie du château : `id`, `playable`, `buildings` (ID de bâtiments, du jeu ou du plugin), `effects` et `level3` (nombres par nom d'effet, les noms qu'emploient les voies du jeu), `specialities` (aucune, ou deux et plus `{"id", "effects"}`). Une définition portant l'ID d'une voie intégrée la remplace entièrement ; un ID `namespace:name` ajoute une voie, listée après celles du jeu et proposée partout où il y a des voies. Ses textes sont les clés de langue `branch_<id>`, `branch_<id>_desc`, `branch_<id>_price`, `branch_<id>_level3`, `branch_<id>_heroes` et `speciality_<id>_<speciality>`. Un royaume dont la voie n'est plus chargée joue comme s'il n'en avait pris aucune, et sa sauvegarde garde le choix |
| events | gold, enemy_wave, stat_buff |
| bosses | 1–8 phases; optional `stats` of its own (`hp`, `attack`, `defense`); a `name` starting `i18n:` is a translation key |
| skins | tiles, adventurer_classes, enemies, buildings, enemy_buildings; apparence seule |
| assets by kind | adventurer_classes, enemies: animation_sheet / sprite, sound; buildings: sprite, icon; enemy_buildings: sprite; skills: skill_effect; skins tiles: sprite (dessiné opaque); skins de personnages : comme leur cible; le reste, et layout hors des personnages, n'est pas utilisé et est signalé |
| plugin art and sounds | 256 Mio d'images décodées (largeur × hauteur × 4) pour tous les packs actifs, un fichier compté une fois, au-delà l'image d'origine reste ; 64 Mio de sons de plugins en mémoire |
| capabilities: assets, languages only | skins et langues uniquement ; les autres définitions sont refusées |
| assets.animation_sheet | PNG: 24 columns × 5 rows |
| assets.sprite / icon / skill_effect | PNG; 8192 px/side, 16 million pixels |
| assets.sound | WAV; mono/stereo, ≤30 seconds |
| layout.anchor | [0–1, 0–1] |
| effect_frames | 1–64 |
| preview | <1 MiB |
| portable project | ≤2048 files; ≤64 MiB total; ≤16 MiB/file |
| map | ≤2048 tiles/side |
| campaign | ≤127 cartes de niveau |
| spawn_enemies.action_params.count | 1–32 |
| spawn_enemies.action_params.march | castle / road |
| reveal.action_params.radius | 1–40 |
| post_bounty.action_params.reward | 1–99999 |
| post_bounty.action_params.deadline | 0–6000 ticks |
| adventurer_classes.profile.explore_range | 10–400 |
| adventurer_classes.profile.retreat_hp | 0.15–0.5 |
| adventurer_classes.profile: explore / hunt / steal / flags.* / errands.* | 0–3 |

```json
{"id":"sample:grass","kind":"tiles","target":"GRASS",
 "assets":{"sprite":"assets/grass.png"}}
```

[PLUGINS.md](https://github.com/JeffreyChen-SteamProjects/WaywardCrown/blob/main/PLUGINS.md)

## Compatibilité avec la version du jeu

`game_version` impose une contrainte sur la version publiée du jeu exécuté. `"*"` est accepté, y compris pour les anciens projets. Une plage précise est acceptée uniquement si la compilation déclare une version sémantique connue qui la respecte ; sinon, la validation, le chargement et la publication sont refusés. Dans ce dépôt, `game.build_info.GAME_VERSION` est actuellement inconnue : utilisez `"*"` jusqu’à ce que la compilation de distribution fournisse une version approuvée. La `version` du projet et les noms de branches Steam ne définissent pas la version du jeu.
