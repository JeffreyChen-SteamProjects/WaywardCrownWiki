---
title: "Éditeurs de cartes et de campagnes"
---

Wayward Crown inclut des éditeurs de cartes et de campagnes intégrés qui vous permettent de créer des niveaux et des scénarios personnalisés.

---

## Éditeur de cartes

Le bouton **Kit d'édition** du menu principal ouvre l'éditeur sur une nouvelle carte. Les cartes sauvegardées sont listées, jouées, modifiées, importées et exportées dans l'onglet Cartes du gestionnaire de cartes, qu'ouvre le bouton **Campagnes** du menu principal.

### Fonctionnalités

- **Peinture de terrain** — Sélectionnez un type de terrain et peignez-le sur la carte avec un pinceau (taille 1 – 20), ou remplissez une zone d'un seul coup
- **Bâtiments et unités** — Placez des bâtiments du joueur, des héros de la couronne, des forteresses ennemies, des monstres et des coffres au trésor, déplacez le Château, ou effacez. L'éditeur ne demande qu'un terrain libre : ce pour quoi un royaume aurait d'abord besoin d'un niveau de château, d'une voie du château ou de l'accord d'un niveau se place librement. La route est un terrain, pas un bâtiment
- **Génération aléatoire** — Générez une carte aléatoire comme point de départ
- **Annuler / Rétablir** — Jusqu'à 30 étapes (Ctrl+Z / Ctrl+Y)
- **Paramètres de la carte** — Taille (100 – 1000 cases de côté), nom, auteur et autres détails, or de départ et une condition de victoire
- **Sauvegarder/Charger** — Sauvegardez les cartes dans le répertoire `maps/` ; Fermer, Échap et Nouveau demandent avant d'abandonner des modifications non enregistrées (Enregistrer / Abandonner / Annuler), et abandonner une campagne jamais enregistrée supprime son dossier
- **Objets…** — Modifiez classes de héros, monstres, bâtiments, forteresses et boss dans un pack de contenu à vous, dans l'éditeur d'objets. Le bouton liste vos packs et **Nouveau pack de contenu…**, sans avoir besoin d'une carte enregistrée. Un pack est un plugin autonome ; l'enregistrer recharge le contenu, ce qu'il définit peut donc être placé aussitôt. Une carte ou une campagne n'exige un pack qu'une fois enregistrée avec quelque chose de ce pack dessus
- **Tester** — Lance la carte enregistrée, ou la campagne au niveau en cours d'édition, dans une partie à part, avec les packs de contenu qu'elle exige et rien d'autre de vos contenus
- **Panneaux** — Les pinceaux et les règles de la carte (ou la campagne) sont des panneaux à onglets à côté de la carte : faites-en glisser un de l'autre côté ou hors de la fenêtre, fermez-le, puis rappelez-le avec **Panneaux**. Terrains, bâtiments, forteresses et boss se choisissent par leur image, et l'éditeur et les fenêtres qu'il ouvre (l'éditeur d'objets, l'éditeur de déclencheurs, les détails de la carte) peuvent être agrandis au maximum

Une carte conserve les héros et les monstres que vous placez : ils s'y tiennent au début de la partie. D'autres héros sont recrutés et d'autres monstres apparaissent en cours de partie.

### Types de terrain

- Prairie, Forêt, Montagne, Eau, Désert, Route, Boue, Marécage, Neige, Collines, Terres arides, Pré fleuri

### Format de sauvegarde

Les cartes sont stockées au format JSON dans le répertoire `maps/` et incluent :

- Données de terrain (un tableau NumPy compressé)
- Données d'altitude
- Bâtiments, forteresses ennemies, coffres au trésor, ainsi que les héros et les monstres placés
- Position du Château
- Détails de la carte, or de départ et condition de victoire

---

## Éditeur de campagnes

Les campagnes sont créées, ouvertes, importées et exportées dans l'onglet Campagnes du gestionnaire de cartes (le bouton **Campagnes** du menu principal). Ouvrir une campagne lance l'éditeur de cartes avec un panneau de campagne, pour modifier au même endroit la carte de chaque niveau et ses paramètres.

### Fonctionnalités

- **Ordre des niveaux** — Montez ou descendez les niveaux avec les boutons fléchés
- **Conditions de victoire** — Définissez les conditions de victoire pour chaque niveau, y compris le type de forteresse pour `destroy_building`
- **Texte narratif** — Définissez le texte d'introduction et de fin
- **Ressources de départ** — Définissez l'or initial pour chaque niveau
- **Report** — Conservez l'or, les aventuriers et les recherches du niveau précédent
- **Restrictions de bâtiments** — Limitez les types de bâtiments disponibles pour le joueur
- **Déclencheurs** — Messages scriptés et déblocages de bâtiments pour un niveau (niveaux de campagne uniquement)
- **Champs de royaume** — Le niveau de château au départ, la limite de temps, le conseil du briefing et jusqu'à deux découvertes facultatives
- **Objectifs supplémentaires et défaites** — D'autres conditions de victoire, requises ou facultatives, et d'autres façons de perdre (héros tombés, bâtiments ou caravanes perdus), dans deux tableaux avec Ajouter et Retirer
- **Origine de la cible** — Sous une cible de victoire : si le boss est placé sur la carte ou lancé par un déclencheur, et si le type de place forte vient du jeu ou d'une extension et combien se dressent sur la carte ; la cible d'un objectif supplémentaire dit la même chose dans son infobulle

### Options de conditions de victoire

Les éditeurs les listent par leur nom, dans votre langue ; le type du tableau est ce qu'enregistre le fichier d'une carte ou d'une campagne.

| Type | Description |
|------|-------------|
| `free` | Mode libre, aucune condition de victoire |
| `destroy_enemy_buildings` | Détruire tous les avant-postes ennemis |
| `survive_ticks` | Survivre pendant une durée spécifiée |
| `reach_gold` | Accumuler une quantité d'or spécifiée |
| `destroy_building` | Détruire un type spécifique d'avant-poste |
| `defend` | Défendre le Château pendant une durée spécifiée |
| `collect_chests` | Collecter tous les coffres au trésor |
| `defeat_boss` | Vaincre un boss nommé, placé sur la carte ou lancé par un déclencheur |
| `secure_trade` | Faire aboutir un nombre d'allers-retours de caravane et détruire tous les avant-postes ennemis |

### Structure de sauvegarde

```
campaigns/my_campaign/
├── campaign.json         # Campaign metadata
├── level1.json           # Level 1 map
├── level2.json           # Level 2 map
└── level3.json           # Level 3 map
```

---

## Partage de contenu personnalisé

- Les dossiers de cartes et de campagnes peuvent être partagés par simple copie, ou avec l'export et l'import du gestionnaire de cartes
- Placez les cartes reçues dans `maps/` pour les charger depuis le menu principal
- Placez les campagnes reçues dans `campaigns/` pour les voir dans le menu principal
- Quand le jeu tourne avec Steam, **Publier sur le Workshop** du gestionnaire de cartes met l'une de vos cartes ou campagnes sur le Workshop Steam, et celles auxquelles vous êtes abonné apparaissent dans ses listes marquées [Workshop]. Steam les tient à jour : elles ne peuvent être ni modifiées, ni renommées, ni supprimées ; **Dupliquer** crée votre propre carte
- Un pack de contenu s'installe seul : publiez-le ou partagez son ZIP à part, et quiconque l'installe retrouve ses classes, monstres, bâtiments et forteresses dans ses propres parties, sans aucune carte. Une carte ou une campagne qui place quelque chose d'un pack exige ce plugin : publiez d'abord le pack (la fenêtre de publication propose alors l'élément Workshop du pack comme élément requis)
