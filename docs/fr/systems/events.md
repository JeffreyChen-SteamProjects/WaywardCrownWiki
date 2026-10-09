---
title: "Événements aléatoires"
---

Le jeu déclenche des événements aléatoires à intervalles réguliers, ajoutant de l'imprévisibilité au gameplay. L'intensité des événements s'adapte dynamiquement en fonction de votre nombre d'aventuriers. Le tutoriel intégré ne tire jamais de tremblement de terre ni d'événement qui pose une nouvelle structure sur la carte.

---

## Règles de déclenchement

| Paramètre | Valeur |
|-----------|--------|
| Période de grâce initiale | 1500 ticks (~5 minutes) |
| Intervalle de vérification | Toutes les 300 ticks |
| Probabilité de déclenchement | 60 % |
| Temps de recharge | 600 ticks (~2 minutes) |

---

## Événements de menace

Ces événements exercent une pression sur le joueur pendant leur durée et nécessitent une réponse active.

| Événement | Durée | Poids | Effet |
|-----------|-------|-------|-------|
| **Invasion de monstres** | 250 | 2 | Les ennemis déferlent sur le château ! |
| **Peste** | 200 | 0 | Tous les aventuriers subissent des dégâts périodiques |
| **Lune de sang** | 350 | 2 | Les ennemis deviennent plus forts et plus agressifs |
| **Assaut des morts-vivants** | 300 | 2 | Squelettes et zombies apparaissent près du château |
| **Raid gobelin** | 250 | 2 | Les gobelins attaquent les boutiques et volent de l'or |
| **Réveil du nid de dragons** | 450 | 1 | Un nid de dragons apparaît et engendre des dragons. Détruisez-le ! |
| **Nuit maudite** | 300 | 2 | Ennemis plus rapides, mais 2x XP par kill |
| **Tremblement de terre** | Instantané | 1 | Les bâtiments et le château subissent de lourds dégâts et les routes sont détruites |
| **Traître** | Instantané | 1 | Un aventurier trahit la guilde et devient ennemi ! Le traître est marqué comme d'élite sur la carte. |
| **Guilde rebelle** | 400 | 2 | Une guilde hostile apparaît et génère des ennemis. Détruisez-la ! |
| **Inflation** | 350 | 1 | Prix des potions et équipements augmentés de 50 % |
| **Sceau de mana** | 250 | 1 | Les mages perdent toute leur puissance d'attaque |
| **Tempête de sable** | 300 | 2 | Vitesse et dégâts à distance réduits de moitié |
| **Brouillard épais** | 250 | 1 | Le brouillard de guerre recouvre la carte, vision réduite |
| **Infiltration d'espions** | 350 | 2 | Des vagues d'ennemis déguisés en aventuriers attaquent le château |
| **Pluie corrosive** | 300 | 2 | Les bâtiments perdent des PV à chaque tick (environ la moitié de leurs PV max sur toute la pluie), réparation divisée par deux |
| **Malédiction des âmes** | 300 | 1 | Les aventuriers tombés se relèvent en zombies ! |
| **Usure de l'équipement** | Instantané | 1 | Tous les aventuriers perdent 1 palier d'équipement |
| **Effacement de mémoire** | Instantané | 1 | Tous les aventuriers perdent 2 niveaux ! |
| **Désertion** | Instantané | 1 | Un cinquième des aventuriers (au moins un) abandonne la guilde ! |
| **Armes maudites** | 120 | 2 | Les aventuriers subissent 30 % de dégâts en s'attaquant |
| **Défi du champion** | Instantané | 2 | Un monstre champion rôde sur vos terres. Dangereux — et très lucratif |
| **Soulèvement des monstres** | 350 | 2 | Tout monstre qui apparaît est désormais vétéran ou pire |

---

## Événements bénéfiques

Ces événements accordent des avantages ou des bonus au joueur.

| Événement | Durée | Poids | Effet |
|-----------|-------|-------|-------|
| **Pluie de trésors** | 150 | 1 | Des coffres supplémentaires apparaissent sur la carte |
| **Hausse d'impôts** | 350 | 1 | Le taux d'imposition passe à 30 % |
| **Frénésie de construction** | 300 | 1 | Coûts de construction divisés par deux, réparation doublée |
| **Bénédiction du temple** | 300 | 1 | Tous les aventuriers se soignent lentement partout |
| **XP doublée** | 350 | 1 | Tous les gains d'XP sont doublés |
| **Vague de recrutement** | 300 | 1 | Recrutement doublé, capacité des bâtiments +1 |
| **Descente du dieu de la guerre** | 300 | 1 | Tous les aventuriers gagnent +50 % ATQ |
| **Mur de fer** | 300 | 1 | Les bâtiments et le château subissent la moitié des dégâts |
| **Ordre de marche** | 250 | 1 | Tous les aventuriers se déplacent plus vite |
| **Étoiles porte-bonheur** | 300 | 1 | Or et XP des ennemis doublés |
| **Marché noir** | 300 | 1 | Pas d'impôts, mais équipements -30 % |
| **Renforts alliés** | 350 | 1 | Des alliés temporaires de haut niveau rejoignent la lutte |
| **Bénédiction de la forge** | 300 | 1 | Équipement de tous les aventuriers +1 palier |
| **Barrière sacrée** | 300 | 0 | Les ennemis sont repoussés loin du château |
| **Sagesse partagée** | 300 | 1 | 30 % de l'XP gagnée est partagée avec tous |
| **Distorsion temporelle** | 300 | 1 | Tous les minuteurs tournent à 2x — y compris les spawns ennemis ! |

---

## Événements instantanés

Prennent effet immédiatement, sans durée.

| Événement | Poids | Effet |
|-----------|-------|-------|
| **Mutation d'élite** | 1 | Un ennemi aléatoire mute en puissante élite ! Il est marqué comme d'élite sur la carte. |
| **Aventurier égaré** | 1 | Un aventurier de haut niveau arrive depuis les terres sauvages |
| **Roue de la fortune** | 1 | Un événement aléatoire se déclenche ! |
| **Éveil du héros** | 1 | Un aventurier aléatoire s'éveille en héros de façon permanente ! |
| **Carte au trésor** | 1 | Révèle une zone cachée et génère des coffres précieux |
| **Destins entrelacés** | 1 | Deux aventuriers aléatoires échangent toutes leurs stats |
| **Arsenal divin** | 1 | Plusieurs aventuriers reçoivent de l'équipement de palier maximum |
| **Âge d'or** | 1 | Recevez de l'or en fonction du nombre de bâtiments |
| **Dispersion** | 1 | Tous les aventuriers sont téléportés à des endroits aléatoires |
| **Fortification** | 1 | Tous les bâtiments entièrement soignés, PV max +20 % |
| **Fontaine de vie** | 1 | Tous les aventuriers entièrement soignés, PV max +10 % |
| **Roulette des stats** | 1 | Les stats de chaque aventurier sont mélangées |
| **Brassage des niveaux** | 1 | Les niveaux des aventuriers sont redistribués aléatoirement |
| **Clone** | 1 | Un aventurier aléatoire est dupliqué ! |
| **Accueil des héros** | 1 | Les bardes chantent votre guilde — un afflux de renommée |

---

## Événements de structure

Font apparaître des structures persistantes sur la carte.

| Événement | Durée | Effet |
|-----------|-------|-------|
| **Réveil du nid de dragons** | 450 | Un nid de dragons apparaît et engendre des dragons. Détruisez-le ! |
| **Guilde rebelle** | 400 | Une guilde hostile apparaît et génère des ennemis. Détruisez-la ! |
| **Ruines antiques** | 450 | Des ruines apparaissent. Le premier arrivé remporte les récompenses ! |
| **Faille dimensionnelle** | 300 | Des portails apparaissent et téléportent aléatoirement les aventuriers |

---

## Stratégies d'adaptation

:::tip[Événements de menace]
- Maintenez en permanence une défense composée de Gardes et de Tours à flèches
- Pendant les événements d'invasion, assurez-vous d'avoir suffisamment de puissance de combat autour du Château
- Envoyez des expéditions de primes pour détruire les Nids de dragons et les Guildes rebelles le plus rapidement possible
:::

:::tip[Tirer parti des événements bénéfiques]
- Pendant l'XP doublée, faites combattre vos aventuriers autant que possible pour monter en niveau
- Pendant la Frénésie de construction, profitez-en pour vous étendre
- Pendant la Vague de recrutement, assurez-vous d'avoir suffisamment de bâtiments de recrutement en place
:::