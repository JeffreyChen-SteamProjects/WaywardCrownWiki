---
title: "Tutoriel du créateur"
---

Chaque modèle commence dans **Créateur et Atelier Steam** (menu principal, gestionnaire de cartes ou gestionnaire de plugins) et suit le même chemin de **Nouveau projet** jusqu'à un élément privé du Workshop. Seule la dernière étape demande Steam.

## Les étapes communes

1. **Nouveau projet** : choisissez un modèle, un nom et un dossier. La fenêtre montre où ira le projet avant d'écrire quoi que ce soit.
2. **Modifier le projet** : un plugin s'ouvre dans l'éditeur de plugins ; une carte ou une campagne s'ouvre avec **Ouvrir l'éditeur de terrain / campagne**, dans un processus à part qui ne charge que ce que le projet requiert. Enregistrez avant l'étape suivante : vérifications, parties test et publication utilisent les fichiers enregistrés.
3. **Valider le contenu** : chaque problème dit où il se trouve ; un double-clic ouvre l'éditeur à cet endroit.
4. **Test de jeu** : une partie séparée avec seulement ce projet et ce qu'il requiert. Son rapport liste ce qui s'est chargé et, pendant qu'elle tourne, le temps de tick, la mémoire et l'atlas de sprites, notés de correct à trop lourd.
5. **Exporter…** : un ZIP ou un dossier avec le même ID de projet, à garder ou à partager.
6. **Publier sur le Workshop** : avec Steam lancé, choisissez **Privé** pour un premier test, puis **Vérifier et relire** et **Soumettre la publication**. La publication ne teste pas le chargement : trouvez l'élément dans **Parcourir l'atelier**, utilisez **Abonnez-vous** et suivez-le dans **Abonnements** jusqu'à ce qu'il soit disponible.

## Carte

Le modèle est une carte de 32×32 avec un château, un coffre de 100 or deux cases à l'est, 500 or de départ et une victoire en ramassant les coffres.

1. Peignez le terrain et placez bâtiments, places fortes et coffres dans l'éditeur de terrain, puis enregistrez.
2. **Valider le contenu** avertit d'une place forte, d'un coffre ou d'un boss que les héros ne peuvent pas atteindre depuis le château.
3. Version : augmentez **Version du projet** à chaque changement publié. Les sauvegardes faites avec l'ancienne version en gardent une copie conservée.

## Campagne

Le modèle compte deux niveaux, chacun avec sa propre carte au même château et au même coffre ; le fichier de campagne les ordonne et donne à chacun un titre, un texte d'histoire et de l'or de départ.

1. Ouvrez le panneau de campagne dans l'éditeur de terrain pour régler l'ordre des niveaux, les victoires, le texte d'histoire, ce qui est conservé et les déclencheurs.
2. **Test de jeu** peut commencer à n'importe quel niveau.
3. Dépendances : quand un niveau utilise les unités d'un plugin, ajoutez le projet de ce plugin dans **Dépendances** avec une plage de versions comme `>=1.0.0, <2.0.0`.

## Plugin

Le modèle contient une classe de héros, un ennemi, un bâtiment qui recrute la classe, une place forte qui envoie l'ennemi, une compétence, une recherche, un événement, un boss nommé, un habillage de case et un fichier de langue anglais, le tout dans l'espace de noms propre au projet.

1. Modifiez dans l'onglet **Objets**. La barre choisit un type ; chaque définition est listée sous le nom et avec l'image que le jeu lui donnerait, et celle qui est sélectionnée est prévisualisée (un marcheur marche). **Nouveau…** en ajoute une selon ce sur quoi elle est basée et son nom ; son image et son son se choisissent ou s'importent dans ses propres lignes ; le formulaire de propriétés grise les valeurs reprises de la définition de base et signale aussitôt une valeur hors des limites du jeu. **Avancé** affiche la ligne d'ajout par ID et le JSON de la définition. Le nom se donne dans chaque langue du plugin, dans les lignes en dessous (**Ajouter une langue** en donne une autre au plugin) ; une voie du château a des tableaux pour ses effets et ses spécialités, et des lignes pour ses autres textes.
2. Ressources : l'onglet **Ressources** accepte les images qu'on y dépose et compare chacune aux limites de taille et de mémoire. L'habillage de case du modèle utilise `preview.png` comme image d'exemple ; remplacez-la là.
3. Remplacements : **Copier un élément du jeu…** ajoute une copie complète d'un personnage du jeu sous votre propre ID, qui remplace l'original là où il est utilisé. Une définition avec un ID intégré (par exemple `SLIME` avec la base `SLIME`) modifie le slime du jeu tant que le plugin est actif ; **Profils de contenu** montre quel remplacement l'emporte.
4. Versions : **Version du projet** est la version propre du projet ; **Versions de jeu prises en charge** est la plage de versions du jeu qu'il accepte (`*` pour toutes ; une version de développement n'accepte que `*`).

## Tutoriel de boss (extension + campagne à deux niveaux)

Le modèle est un dossier avec un plugin et une campagne de deux niveaux qui le requiert ; le second niveau se gagne en battant le boss nommé du plugin.

1. Les **Dépendances** de la campagne nomment le projet et la version du plugin, donc une partie test emporte le plugin.
2. Publiez d'abord le plugin, puis la campagne : la fenêtre de publication propose l'élément du Workshop du plugin comme élément requis.
3. Augmentez la **Version du projet** du plugin à chaque changement ; gardez la plage de la campagne assez large pour l'accepter.

## Mission de royaume (un niveau : briefing, primes, vagues, un boss)

Le modèle est un niveau de royaume avec un briefing, une ville, un repaire, les drapeaux Explorer, Tuer et Défendre de la couronne, deux vagues annoncées, un boss nommé et une trouvaille facultative. Démontez-le niveau par niveau dans le panneau de campagne, puis suivez les étapes communes.

## Exemple Frostfang (un pack de contenu terminé et sa carte)

Le modèle est un exemple terminé à démonter : un pack de contenu avec une classe de héros (le Gardien du givre), un monstre (le Yéti de givre), la halle qui recrute la classe, la tanière d'où vient le monstre, deux compétences, une recherche et un boss nommé, chacun avec son image et son son, et une carte qui exige le pack et se gagne en battant le boss. La même fenêtre propose aussi un exemple terminé pour d'autres catégories du Workshop, chacun sous le nom **Exemple : <catégorie>** (dont une carte, une campagne, une histoire, une série de défis et des packs de recherches, d'événements et d'une langue) : il est copié comme projet à vous, pour y jouer, le démonter et le modifier.

1. Ouvrez la carte dans l'éditeur de terrain et appuyez sur **Objets…** pour voir comment chaque définition s'appuie sur un élément du jeu ; changez un nombre ou un nom, enregistrez, puis placez le résultat sur la carte.
2. Appuyez sur **Tester** pour jouer la carte avec le pack et rien d'autre de vos contenus.
3. Publiez d'abord le pack, puis la carte : la fenêtre de publication propose l'élément Workshop du pack comme élément requis.

## Ce qu'un modèle ne contient jamais

Un modèle ne contient aucun vrai ID d'élément du Workshop, aucun compte Steam et aucun chemin absolu : les ID de projet sont créés à neuf sur votre ordinateur et chaque fichier est nommé relativement au projet.

## Données facultatives de ruines

Les cartes et niveaux de campagne acceptent au plus deux entrées `relics` avec la capacité `relics`. Chaque entrée possède un `id` unique, un type `ancient_beacon`, `sealed_tomb` ou `lost_station` et un `target` correspondant à l’`objective_id` d’un bâtiment existant. Les options fixes permettent au plus deux décisions ; les scripts arbitraires et les branches cycliques sont refusés. La découverte seule ne coûte rien et ne lance aucun délai. Les sauvegardes conservent les choix acceptés, les coûts, les remboursements et les récompenses uniques.

Le lieu du prototype exige `type: BEACON`.

## Logistique gobeline facultative

Cartes et niveaux peuvent déclarer la capacité `lair_expansion` et une liste homonyme de quatre plans au plus. Chaque plan exige `id` et `target`, qui désigne une tente gobeline existante par son `objective_id` unique. Le transporteur doit arriver et un travailleur vivant doit construire sur place. Convois, escortes, défenseurs et raids partagent un budget fini : quatre cycles et 64 nouvelles unités par source au plus. Perdre l’avant-poste retarde et affaiblit un raid non parti ; détruire la base arrête la production sans supprimer les survivants ni les avant-postes facultatifs. Ces postes n’ajoutent pas de bases obligatoires à la victoire. Sans plans, le calendrier existant reste actif. Les transporteurs portent des caisses distinctives, avec leurs propres animations et sons, et apparaissent uniquement dans les convois affectés. Après reconnaissance, une prime peut viser le transporteur mobile. Le tuer annule cette cargaison et retarde la production ; les escortes survivantes restent au combat. Cargaison et prime sont réglées une seule fois ; l’annulation suit les remboursements habituels. Les postes ont leurs propres échafaudages, auvents de ravitaillement terminés et débris. Un travailleur vivant construit le chantier attaquable ; il ne crée aucun nouveau défenseur avant sa fin. Le détruire retarde les attaques non parties et ramène leur rassemblement à la base. Détruire la base arrête la production mais garde survivants et postes isolés. Chaque source conserve au plus un débris décoratif, sans défenseurs ni objectifs de victoire ajoutés.

Le formulaire Expansion des repaires est commun aux cartes et campagnes : choisissez quatre tentes gobelines au plus, les durées de protection, préparation, livraison, construction, rassemblement et attente, les cycles, le budget partagé, les escortes et huit rectangles interdits par source. Les durées sont en secondes de jeu, par pas de 0,2. Appliquer met à jour le brouillon ; annuler garde les valeurs. Vider les sources de la carte désactive l’expansion. La désactivation explicite du niveau prime sur la carte ; sinon une liste vide hérite de ses réglages. Sources en double ou absentes et zones hors carte sont refusées avant enregistrement.

La limite commune des postes de la carte va de un à quatre. Un convoi finançant un nouveau chantier réserve sa place avant de partir ; à capacité pleine, les autres sources attendent sans produire d’unités ni accumuler de raids. Un poste isolé vivant garde sa place jusqu’à sa destruction.

Pour les compétences annoncées des monstres et BOSS, cast_range optionnel (1–32 cases) sélectionne la cible ; radius reste la zone d’impact. Un lanceur mort annule son avertissement.

La couche de renseignements sur le ravitaillement montre uniquement les points et sites observés. Production, santé, trésor et défenseurs de la base, stade/progrès du poste et positions du convoi gardent des heures séparées. Hors de vue, la dernière valeur reste ; construction ou démolition cachée ne change pas l’image connue. Une nouvelle reconnaissance actualise les données. La route retient seize points observés au plus. Les avis restent uniques après chargement et le briefing explique les quatre stratégies à budget fini.

Le jeu libre propose une expansion limitée des tentes gobelines, désactivée par défaut. Les parties mixtes ou gobelines réservent une des places de repaire choisies à une tente et relient au plus quatre tentes existantes, sans augmenter le total. Les autres races ne reçoivent aucune source ajoutée. Les campagnes utilisent les réglages de leur auteur.

Échafaudage, dépôt et ruine ont des silhouettes distinctes et une étoffe animée, fixe en mouvement réduit. Le messager martèle seulement pendant le travail réel. Découverte de convoi et observation de chantier, achèvement ou ruine ont leurs icônes et sons ; changements cachés et chargement ne répètent pas les avis. Les formulaires compacts et les renseignements défilent, aussi au clavier dans le panneau.
