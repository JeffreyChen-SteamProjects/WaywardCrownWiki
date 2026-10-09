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

1. Modifiez dans l'onglet **Objets**. La barre choisit un type ; chaque définition est listée sous le nom et avec l'image que le jeu lui donnerait, et celle qui est sélectionnée est prévisualisée (un marcheur marche). **Nouveau…** en ajoute une selon ce sur quoi elle est basée et son nom ; son image et son son se choisissent ou s'importent dans ses propres lignes ; le formulaire de propriétés grise les valeurs reprises de la définition de base et signale aussitôt une valeur hors des limites du jeu. **Avancé** affiche la ligne d'ajout par ID et le JSON de la définition.
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

## Ce qu'un modèle ne contient jamais

Un modèle ne contient aucun vrai ID d'élément du Workshop, aucun compte Steam et aucun chemin absolu : les ID de projet sont créés à neuf sur votre ordinateur et chaque fichier est nommé relativement au projet.
