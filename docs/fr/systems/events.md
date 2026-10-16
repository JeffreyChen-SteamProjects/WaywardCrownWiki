---
title: "Événements aléatoires"
---

Le jeu déclenche des événements aléatoires à intervalles réguliers, ajoutant de l'imprévisibilité au gameplay. L'intensité des événements s'adapte dynamiquement en fonction de votre nombre d'aventuriers. Le tutoriel intégré ne tire jamais de tremblement de terre ni d'événement qui pose une nouvelle structure sur la carte.

Les cartes de prêt portent une lettre scellée ; une nouvelle invitation émet un seul signal discret, au volume des effets. L'onglet Événements du royaume du panneau des registres affiche les invitations et les prêts en cours sans mettre le jeu en pause. Les cartes de prêt indiquent le capital à verser immédiatement, le délai, les remboursements et la perte maximale ; refuser ou ignorer une invitation est gratuit. Les éditeurs de cartes et de campagnes enregistrent les groupes d'événements : les réglages du niveau priment sur ceux de la campagne, puis de la carte, et hériter des réglages diffère de désactiver tous les groupes. Pour l'instant, seul le groupe « Économie et services » ajoute un événement aléatoire, la foire des moissons ; les autres groupes n'en ajoutent pas encore. Les cartes de prêt s’adaptent à la largeur du panneau latéral et défilent verticalement pour garder toutes les conditions lisibles.

Avec un prêt en cours, l’aperçu du niveau suivant distingue le trésor actuel, le capital rendu sans intérêts et l’or prévu à transférer. La règle du niveau de destination s’applique ; l’aperçu ne verse rien.

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

## Foire des moissons

Avec le groupe « Économie et services » activé, une foire des moissons peut s'installer près d'une de tes maisons de village. Tu es prévenu 20 secondes avant, et elle reste ouverte 120 secondes. Inutile d'envoyer qui que ce soit : les héros blessés, à court de potions ou qui ont envie d'une soirée de détente y vont d'eux-mêmes, tant que rien d'autre ne les retient (un combat, un drapeau, un groupe qu'ils attendent). Elle sert quatre héros à la fois. Chacun se repose 5 secondes et récupère 40 PV gratuitement, achète les potions qui lui manquent au prix habituel (la foire en apporte 24 pour tout son séjour) et paie une soirée de détente s'il en a envie. Un héros qui part avant ne paie rien. Pendant qu'elle est ouverte, tu peux la prolonger une fois de 60 secondes pour 150 or ; les potions ne sont pas réapprovisionnées. Sa carte dans Événements du royaume indique quand elle ouvre et ferme, qui est aux étals et combien de potions il reste, et Afficher t'y emmène une fois l'endroit découvert.

---

## Jour, nuit et météo

Une partie libre peut commencer avec le jour qui tourne, avec la météo, ou avec les deux ; chacun se coche à part, et aucun n'est un événement : il n'y a rien à quoi répondre.

- **Une journée** dure 12, 24 ou 48 minutes de jeu, au choix : aube, jour, crépuscule et nuit. La barre du haut indique le jour, son moment et le temps, et son infobulle dit ce qui vient ensuite et quand. La prévision est toujours ce qui arrive.
- **La pluie et l'orage** arrêtent quiconque marche hors des routes, héros ou monstre, un tour sur dix au plus. Sur les routes, on avance au sec.
- **La brume et la nuit** raccourcissent d'un quart au plus ce que voient héros et bâtiments. Près du château et des bâtiments du royaume, les fenêtres sont éclairées et la nuit ne retire rien ; un archer ne voit jamais moins loin qu'il ne tire.
- **Le vent** retire un dixième des dégâts des flèches, carreaux et javelots. Les sorts ne sont pas emportés.
- **Une tempête de sable ou un brouillard épais** prend la place de la météo là où il règle la même chose : les deux ne s'additionnent jamais.
- **Les monstres ont leurs heures.** Squelettes, zombies, spectres, cultistes, araignées et rats sont lents le jour ; gobelins, orques, bandits, harpies et fantassins de la légion, la nuit. Trolls, loups et le dragon n'en ont pas.
- **Vu pour la dernière fois.** Un monstre qui sort de la vue de votre royaume laisse un point d'interrogation qui s'estompe là où il a été vu pour la dernière fois. C'est une marque, pas le monstre : elle disparaît quand il est revu ou que l'endroit est regardé.

## Stratégies d'adaptation

:::tip[Événements de menace]
- Maintenez en permanence une défense composée de Gardes et de Tours à flèches
- Pendant les événements d'invasion, assurez-vous d'avoir suffisamment de puissance de combat autour du Château
- Envoyez des expéditions de primes pour détruire les Nids de dragons et les Guildes rebelles le plus rapidement possible
- Les deux sont indiqués sur la carte dès leur apparition : cliquez dessus pour voir leurs points de vie, et mettez-y une prime « Tuer » pour envoyer des héros les raser
:::

:::tip[Tirer parti des événements bénéfiques]
- Pendant l'XP doublée, faites combattre vos aventuriers autant que possible pour monter en niveau
- Pendant la Frénésie de construction, profitez-en pour vous étendre
- Pendant la Vague de recrutement, assurez-vous d'avoir suffisamment de bâtiments de recrutement en place
:::