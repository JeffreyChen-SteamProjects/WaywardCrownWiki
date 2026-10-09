---
title: "Éditeurs de cartes et de campagnes"
---

Wayward Crown inclut des éditeurs de cartes et de campagnes intégrés qui vous permettent de créer des niveaux et des scénarios personnalisés.

---

## Éditeur de cartes

Le bouton **Éditeur de cartes** du menu principal ouvre l'éditeur sur une nouvelle carte. Les cartes sauvegardées sont listées, jouées, modifiées, importées et exportées dans l'onglet Cartes du gestionnaire de cartes, qu'ouvre le bouton **Campagnes** du menu principal.

### Fonctionnalités

- **Peinture de terrain** — Sélectionnez un type de terrain et peignez-le sur la carte avec un pinceau (taille 1 – 20), ou remplissez une zone d'un seul coup
- **Placement de bâtiments** — Placez des bâtiments du joueur, des forteresses ennemies et des coffres au trésor, déplacez le Château, ou effacez
- **Génération aléatoire** — Générez une carte aléatoire comme point de départ
- **Annuler / Rétablir** — Jusqu'à 30 étapes (Ctrl+Z / Ctrl+Y)
- **Paramètres de la carte** — Taille (100 – 1000 cases de côté), nom, auteur et autres détails, or de départ et une condition de victoire
- **Sauvegarder/Charger** — Sauvegardez les cartes dans le répertoire `maps/` ; Fermer, Échap et Nouveau demandent avant d'abandonner des modifications non enregistrées (Enregistrer / Abandonner / Annuler), et abandonner une campagne jamais enregistrée supprime son dossier

Les cartes ne contiennent aucune unité : les aventuriers sont recrutés et les ennemis apparaissent une fois la partie lancée.

### Types de terrain

- Prairie, Forêt, Montagne, Eau, Désert, Route, Boue, Marécage, Neige, Collines, Terres arides, Pré fleuri

### Format de sauvegarde

Les cartes sont stockées au format JSON dans le répertoire `maps/` et incluent :

- Données de terrain (un tableau NumPy compressé)
- Données d'altitude
- Bâtiments, forteresses ennemies et coffres au trésor
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

| Type | Description |
|------|-------------|
| `free` | Mode libre, aucune condition de victoire |
| `destroy_enemy_buildings` | Détruire tous les avant-postes ennemis |
| `survive_ticks` | Survivre pendant une durée spécifiée |
| `reach_gold` | Accumuler une quantité d'or spécifiée |
| `destroy_building` | Détruire un type spécifique d'avant-poste |
| `defend` | Défendre le Château pendant une durée spécifiée |
| `collect_chests` | Collecter tous les coffres au trésor |

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
