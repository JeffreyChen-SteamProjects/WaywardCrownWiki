---
title: "Cartes et terrain"
---

La carte du jeu est rendue en utilisant une projection isométrique 2:1 et prend en charge plusieurs types de terrain.

---

## Spécifications de la carte

| Propriété | Valeur |
|-----------|--------|
| Taille par défaut | 1000 x 1000 cases |
| Plage ajustable | 250 ~ 1000 cases |
| Taille des cases | 256 pixels |
| Projection | Isométrique 2:1 (losange) |

---

## Types de terrain

| Terrain | Praticable | Coût de déplacement | Altitude de base | Apparition d'ennemis |
|---------|------------|---------------------|-------------------|----------------------|
| **Prairie** | Oui | 1 | 0 | Rat géant, Bandit, Harpie |
| **Forêt** | Oui | 2 | 0,5 | Slime, Zombie, Loup sinistre, Araignée géante, Cultiste sombre |
| **Montagne** | Oui | 3 | 5,0 | Gobelin, Squelette, Dragon, Brute orque, Archer gobelin, Troll |
| **Eau** | Non | -- | -1,0 | -- |
| **Ville** | Oui | 1 | 0 | -- |
| **Route** | Oui | 1 | 0 | -- |
| **Marécage** | Oui | 3 | -0,3 | -- |
| **Désert** | Oui | 2 | 0,2 | Spectre des sables |
| **Boue** | Oui | 2 | -0,1 | -- |
| **Neige** | Oui | 1 | 0,2 | Rat géant, Bandit, Harpie |
| **Collines** | Oui | 1 | 1,6 | Rat géant, Bandit, Harpie |
| **Terres arides** | Oui | 2 | 0,3 | Spectre des sables |
| **Pré fleuri** | Oui | 1 | 0 | Rat géant, Bandit, Harpie |

:::tip[Coût de déplacement]
Plus le nombre est bas, plus le déplacement est rapide. La Route et la Ville ont le coût de déplacement le plus bas (1), tandis que la Montagne et le Marécage ont le plus élevé (3). Bien utiliser les routes peut considérablement améliorer l'efficacité des déplacements des aventuriers.
:::

---

## Brouillard de guerre

La carte comporte trois niveaux de visibilité :

| État | Luminosité | Description |
|------|------------|-------------|
| **Inexploré** | 0 (complètement sombre) | Jamais vu par aucun aventurier ou bâtiment |
| **Exploré** | 115 (gris foncé) | Déjà vu mais pas actuellement dans le champ de vision |
| **Visible** | 255 (pleinement éclairé) | Actuellement dans le champ de vision d'un aventurier ou d'un bâtiment |

**Ce qui est dessiné, et où.** Ce qui est à vous est toujours dessiné : bâtiments, héros, villageois, percepteurs, caravanes et drapeaux de prime, même sur un terrain que personne ne voit. Un repaire ou des ruines antiques sont dessinés dès qu’une partie en a été vue, et le restent. Dès lors, les héros connaissent eux aussi le repaire et peuvent s’y attaquer d’eux-mêmes. Les monstres ne sont dessinés que tant qu’un héros les voit. Les portails d’une faille dimensionnelle sont dessinés comme des anneaux de lumière violette dès que leur terrain a été vu.

### Sources de vision

| Source | Portée de vision |
|--------|------------------|
| Château | 30 cases |
| Aventurier (base) | 8 cases |
| Mage (à distance) | 12 cases |
| Rôdeur (à distance) | 11 cases |
| Bâtiment défensif (Tour à flèches) | 16 cases |
| Bâtiment ordinaire | 7 cases |
| Structure de forteresse ennemie | 10 cases |

:::note[Vision des aventuriers à distance]
Les Mages et les Rôdeurs voient exactement aussi loin qu'ils peuvent attaquer (12 et 11 cases), afin que les joueurs voient les cibles qu'ils attaquent.
:::

---

## Génération de carte

Les cartes du mode bac à sable sont générées aléatoirement à l'aide de l'algorithme **Value Noise** :

1. Génération du bruit de terrain -> détermination des types de terrain
2. Génération du bruit d'altitude -> détermination des variations d'élévation
3. Placement du Château -> établissement d'une zone de Ville à un endroit aléatoire de la moitié centrale de la carte
4. Dispersion des coffres au trésor -> max(10, 250 × W × H ÷ 1000²) coffres répartis dans la nature
5. Génération des forteresses ennemies -> placées loin du Château

---

## Coffres au trésor

| Propriété | Valeur |
|-----------|--------|
| Nombre initial | max(10, 250 × W × H ÷ 1000²) |
| Plage d'or | 20 ~ 55 po |
| Emplacement | Zones praticables en dehors des Villes |

Les aventuriers ramassent automatiquement les coffres au trésor lorsqu'ils marchent dessus. Avec la compétence de recherche « Sens du trésor », l'or est augmenté de +50 %. Un coffre ouvert reste en place, couvercle rabattu, pendant deux minutes de jeu, puis disparaît. Il ne gêne aucun chantier, et le bâtiment posé dessus le fait disparaître.
