---
title: "Équipement et boutiques"
---

Les aventuriers achètent automatiquement de l'équipement et des consommables dans les boutiques près du Château.

---

## Système d'équipement

Les aventuriers peuvent acheter des armes et des armures à la **Forge** :

| Équipement | Effet par niveau | Formule de prix | Niveau max. |
|------------|-----------------|----------------|------------|
| **Arme** | +3 ATK / niveau | 100g × niveau | 3 (nécessite une Forge du même niveau) |
| **Armure** | +2 DEF / niveau | 100g × niveau | 3 (nécessite une Forge du même niveau) |

:::note[Exigence de niveau de la Forge]
Une Forge Nv. 1 ne peut vendre que de l'équipement Nv. 1. Pour donner de meilleur équipement à vos aventuriers, vous devez améliorer la Forge.
:::

### Statistiques d'équipement cumulées

| Niveau | ATK de l'arme | DEF de l'armure | Prix de l'arme | Prix de l'armure |
|--------|-------------|---------------|---------------|-----------------|
| 1 | +3 | +2 | 100g | 100g |
| 2 | +6 | +4 | 200g | 200g |
| 3 | +9 | +6 | 300g | 300g |

---

## Consommables

### Potions

| Objet | Prix | Effet |
|-------|------|--------|
| **Potion de soin** | 100g | Restaure 40 HP |

- Les aventuriers peuvent transporter jusqu'à **3** potions
- Automatiquement réapprovisionnées dans les boutiques
- Utilisée lorsque les HP tombent en dessous de 50%

### Potion de vitesse

| Objet | Prix | Effet |
|-------|------|--------|
| **Potion de vitesse** | 200g | Augmente la vitesse de déplacement pendant 60 ticks |

Vendue uniquement lorsqu'un Marché atteint le Nv. 2 ; un aventurier en porte 2 au maximum.

### Protection contre la mort

| Objet | Prix | Effet |
|-------|------|--------|
| **Anneau anti-mort** | 500g | Bloque un coup fatal |

Vendu uniquement lorsqu'un Marché atteint le Nv. 3.

---

## Comportement d'achat

Les aventuriers font automatiquement leurs achats lorsqu'ils s'arrêtent à moins de 7 cases d'un **Marché** ou d'une **Forge**.

Au Marché, dans cet ordre :

1. Boire une potion de soin sur place s'ils sont blessés
2. Acheter un Anneau anti-mort (Marché Nv. 3)
3. Réapprovisionner les potions transportées (jusqu'à 3)
4. Acheter des Potions de vitesse (Marché Nv. 2, jusqu'à 2)

À la Forge, ils achètent le palier d'arme **suivant** et le palier d'armure suivant qu'ils peuvent se permettre, un palier par visite, jusqu'au niveau de la Forge.

**Seules les boutiques vendent.** Le château, les guildes et les auberges ne vendent rien : un héros qui a besoin d'équipement ou de potions se rend à une Forge ou à un Marché (voir *L'or du royaume* ci-dessous).

:::note[Revenus fiscaux]
Chaque fois que les aventuriers dépensent de l'or (équipement, potions, études) ou en gagnent (éliminations, coffres), **20%** du montant est la taxe du trésor : 30% pendant une Hausse d'impôts, rien pendant un Marché noir. Elle attend dans la caisse du bâtiment où l'or a été dépensé jusqu'à ce qu'un percepteur la porte au château.
:::

---

## L'or du royaume

Chaque pièce est comptabilisée :

- **L'argent va à la boutique** : les héros n'achètent qu'au bâtiment lui-même (le château ne vend rien). Ce qu'ils paient est le chiffre d'affaires de ce bâtiment, et le trésor prélève sa part d'impôt : 20 %, 30 % pendant une hausse d'impôts, rien pendant un marché noir.
- **Caisses** : la part du trésor n'arrive pas toute seule. Elle attend dans la caisse du bâtiment où l'or a été dépensé (la part du butin d'un héros attend à sa guilde, et les recettes périodiques d'un marché dans sa propre caisse). Une caisse contient 600 or ; ce qui ne rentre pas est perdu, et un bâtiment qui tombe perd sa caisse.
- **Percepteur** : le château a un percepteur qui se rend à la caisse la plus pleine contenant au moins 40 or, transporte jusqu'à 400 et le rapporte au château, où il devient l'or du trésor. Il fuit les monstres et ne se bat jamais ; s'il est tué, ce qu'il portait reste sur place dans un coffre, et un nouveau percepteur quitte le château 300 ticks plus tard. Les panneaux des bâtiments, du château et du percepteur indiquent ce qui attend et ce qui est transporté. Un château de niveau 2 a deux percepteurs, un de niveau 3 en a trois ; chacun va à sa propre caisse. Un percepteur qui n'a rien à chercher se repose dans le château, hors de la carte, où rien ne peut l'atteindre. Il sort par l'avant du château quand une caisse vaut le déplacement, se tient un moment devant ce bâtiment pour vider la caisse, puis rentre une fois revenu ; après avoir fui un monstre, il reste à l'intérieur un moment. Le château garde son nombre de percepteurs en remplaçant chacun de ceux qu'il perd, et son panneau a une ligne pour eux qui dit où se trouve chacun. Un **Bureau des impôts** (280 or ; autant qu'on veut, chacun plus cher que le précédent) entretient un percepteur de plus, le sien : il y vit, sort par sa porte, y rapporte ce qu'il perçoit, qui devient aussitôt de l'or du trésor, et y est remplacé 60 secondes après sa perte. Quand plusieurs percepteurs se reposent, ceux qui logent à 40 cases ou moins d'une caisse y vont à tour de rôle, celui qui est rentré depuis le plus longtemps partant le premier (celui d'un bureau qui vient d'être pourvu n'est jamais sorti : le prochain trajet est pour lui) ; une caisse loin du château est laissée au bureau qui se trouve près d'elle. Le panneau du bureau indique ce que fait son percepteur.
- **Réglages des impôts** : le panneau d'un bâtiment peut retirer sa caisse des tournées des percepteurs (elle se remplit alors et le surplus est perdu) ou demander au prochain percepteur libre de la vider d'abord, si peu qu'elle contienne ; l'aperçu du royaume fixe le niveau qu'une caisse doit atteindre avant qu'un percepteur se déplace (20, 40 ou 150 or). Les percepteurs choisissent toujours leur chemin, laissent pour plus tard une caisse avec un monstre à côté et fuient le danger. L'info-bulle de l'or et l'aperçu partagent l'or du royaume entre ce qui peut être dépensé, ce qui attend dans les caisses, ce que portent les percepteurs et ce que contiennent les primes ouvertes ; l'aperçu signale aussi quand les héros veulent un équipement ou des potions qu'aucun bâtiment ne vend, et le panneau d'un bâtiment indique sa distance au château. L'aperçu règle aussi la prudence des porteurs de la couronne : percepteurs, caravanes et ouvriers de l'équipe fuient un monstre à 9, 6 ou 4 cases ; les prudents se perdent moins souvent et rapportent moins. L'infobulle de l'or ajoute ce que doivent les caravanes sur le retour et ce que portent les héros. Une politique fiscale règle les deux à la fois : Prudente (caisses pleines seulement, les porteurs fuient tôt), Régulière (les tournées habituelles) ou Avide (petites caisses aussi, les porteurs tiennent bon).
- **Comptoir et caravane** : un royaume peut construire autant de comptoirs qu'il en paie, chacun plus cher que le précédent, à au moins 45 cases du château, sur un terrain qu'on peut atteindre à pied depuis celui-ci. Sa caravane, un mulet de bât, marche jusqu'au château, décharge et revient ; un trajet qui a atteint le château verse 0,6 or par case entre le comptoir et le château dans la caisse du comptoir, si bien qu'un comptoir plus éloigné rapporte davantage et laisse la caravane dehors plus longtemps. Elle avance d'une case tous les 2 ticks, à chaque tick sur une route. Un monstre en vue l'envoie à l'extrémité la plus proche de la route jusqu'à ce qu'il soit parti, un monstre à côté d'elle la blesse, et vous êtes averti de l'endroit ; une caravane perdue est remplacée après 400 ticks. Il exige un château de niveau 2.
- **Les récompenses sont des transferts** : une prime paie exactement ce qu'elle contient. Les multiplicateurs d'or de la difficulté et des traits ne s'appliquent qu'au butin et aux coffres.
- **Acheté une fois, réapprovisionné jusqu'à une limite** : chaque palier d'équipement, l'anneau et chaque étude de la bibliothèque s'achètent une fois ; les potions sont réapprovisionnées jusqu'à 3 et les potions de vitesse jusqu'à 2.
- **Rations** : un héros au repos sans potion et sans or pour en acheter reçoit une potion de sa guilde, au plus une fois toutes les 600 ticks.
- **Les boutiques comme services** : un marché vend selon son propre niveau (potions de vitesse dès le niveau 2, l'anneau dès le niveau 3), une forge fabrique l'équipement jusqu'à son niveau, une bibliothèque enseigne une étude par niveau et une auberge loge autant de héros qu'elle a de chambres. Un héros ne se rend que dans une boutique qui a du nouveau pour lui et choisit la plus proche, en comptant celle qui a un monstre à moins de 8 cases comme 40 cases plus loin. Le panneau d'une boutique montre ce que les héros y ont dépensé, qui est en route et ses six derniers clients. Rien n'est payé avant que le héros soit au comptoir : une boutique détruite, complète ou améliorée en chemin ne laisse donc aucun échange à moitié fait.
- **Grand livre** : le jeu tient un total pour chaque flux (primes, construction, recherche, résurrection, vol ; impôts, commerce, remboursements, démolition, aubaines ; récompenses, butin, coffres, pillage ; équipement, provisions, étude, loisirs) avec les dernières écritures et le chiffre d'affaires de chaque bâtiment, sauvegardés avec la partie. Le trésor, les primes et les boutiques doivent chacun s'équilibrer.
- **Vue d'ensemble du royaume** : un onglet « Royaume » se trouve derrière le panneau Détails. Il montre le trésor, ses recettes et dépenses par nature, ce qui attend dans les caisses et sur les percepteurs, ce que les héros ont gagné et dépensé, les allers-retours et les pertes de caravanes, la clientèle de chaque boutique, les dernières écritures du grand livre et ce qui demande de l'attention (un château agrandissable, aucun percepteur en tournée, une caravane perdue, une boutique avec un monstre à proximité, une caisse pleine). Les noms y sont des liens qui sélectionnent le bâtiment ou le château et y déplacent la carte. Sous *Or retenu*, elle nomme où l'or dort, chaque ligne menant à l'endroit : la caisse la plus pleine que les percepteurs doivent laisser, les caisses qui contiennent chacune moins que ce pour quoi un percepteur se déplace, et la plus grosse récompense qu'aucun héros n'a prise depuis deux minutes.
- **Registres** : un onglet Registres (touche L) énumère chaque héros, guilde, chantier et revenu de chaque bâtiment du royaume, une ligne chacun, avec un champ de recherche. Les héros peuvent être réduits aux inactifs, à ceux sur une prime, aux blessés, à ceux qui pensent à partir et à ceux sans guilde ; les guildes à celles qui ont de la place, aux pleines et à celles avec des monstres à proximité ; les travaux, dans l'ordre où l'équipe de la couronne les prend, aux bâtiments en construction, en amélioration, endommagés et aux travaux arrêtés ; les revenus aux caisses contenant de l'or, aux caisses hors de la tournée des percepteurs et aux boutiques avec des monstres à proximité. Un clic sur une ligne la montre sur la carte et un double-clic ouvre ses détails. Les registres ne donnent aucun ordre et n'énumèrent rien de l'ennemi.
- **Calques de la carte** : le bouton Calques de la barre du haut (touche M) pose sur la carte ce que le royaume sait. Ravitaillement entoure chaque boutique, auberge, temple et bibliothèque de la portée à laquelle un monstre fait fuir les clients. Or en chemin écrit ce qui attend dans chaque caisse et trace le trajet de chaque percepteur et la route de chaque caravane. Travaux numérote les tâches de l'équipe dans l'ordre où elle les prend. Menaces connues entoure les repaires que le royaume a vus, avec une ligne vers le château depuis celui qui rassemble un raid. Portée des sorts montre où les sorts de la couronne peuvent être lancés et le réseau de flèches de la voie arcanique. Vert : tout va bien, ambre : à surveiller, rouge : des ennuis. Un repaire que personne n'a vu n'est sur aucun calque, et les calques activés sont mémorisés.
- **Briefing et chronique** : l'écran de mission donne un briefing avant le départ : l'histoire, ce qui fait gagner et perdre, ce qui peut être construit et le conseil du niveau. Un onglet Chronique conserve ce briefing et ce qui a été annoncé depuis, le plus récent d'abord : conseils du script, repaire aperçu, prime qu'aucun héros ne veut (avec la raison et la récompense qui suffirait), caravane en difficulté, percepteur ou bâtiment perdu, boss qui change de tactique ou qui tombe. Chaque entrée a son heure et un lien qui déplace la carte ; une répétition sur le même sujet est comptée sur son entrée au lieu d'être redite, et une chronique pleine (60 entrées) perd la plus ancienne des moins importantes. Les nouvelles entrées surgissent deux par deux sans mettre le jeu en pause. Un réglage empêche les conseils et les nouvelles mineures de surgir : pertes et boss apparaissent toujours, et tout reste consigné. La chronique peut être gardée sur un sujet (menaces, héros, or, ou couronne et conseils) ; le choix est mémorisé.
- **Résultats** : quand une partie se termine, gagnée ou perdue, un écran de résultats dit pourquoi et liste l'objectif et chaque ennemi nommé avec son issue, les héros recrutés, perdus et encore debout, les recettes et dépenses du trésor par nature, les pertes de caravanes et de percepteurs, les monstres tués, les repaires rasés, les primes, les bâtiments et le temps de jeu. Il retient jusqu'à trois héros : celui qui est monté le plus haut, celui qui a le plus tué, le meilleur de ceux qui sont tombés. Un niveau gagné est évalué par trois marques, chacune une phrase simple avec ses chiffres (objectif atteint ; pas plus d'un héros sur quatre perdu ; aucun bâtiment perdu) ; aucune ne concerne la vitesse. Ensuite : le niveau suivant, le même niveau à nouveau, le menu ou, après une défaite, un coup d'œil à la carte. Le récit peut être enregistré en fichier texte dans un dossier `recaps` à côté des réglages. Terminer l'histoire de la démo ajoute ce qui est ouvert maintenant et ce qui est prévu pour le jeu complet.
- **Découvertes facultatives** : un niveau peut cacher jusqu'à deux choses qui valent d'être trouvées ; aucune n'est nécessaire pour gagner. Un convoi de ravitaillement cerné par des monstres tient six minutes une fois trouvé ; un héros qui l'atteint, les assiégeants morts, rapporte 300 or de ravitaillement au trésor. Une cache a un gardien deux fois plus résistant que son espèce : la couronne pose une prime « Tuer » sur lui, et le coffre de 400 or est aux héros. Un trésor se trouve sous un repaire qui n'envoie pas de raids : le raser laisse un coffre de 500 or. Elles ne disent rien tant que leur emplacement n'est pas vu ; ensuite la chronique les signale, une liste « Facultatif » dans l'onglet Chronique les suit avec des liens, et l'écran de résultats dit comment elles ont fini. Les trois missions de la démo en portent une, une et deux.
- **Difficulté et rétablissement** : facile et difficile changent des nombres, jamais la santé des ennemis : chaque raid de repaire compte un pillard de moins ou deux de plus, une vague scénarisée fait 75 % ou 125 % de sa taille, et un niveau commence avec 125 % ou 85 % de son or ; l'écran de mission l'indique. Les niveaux de la démo nomment une distribution (slime, rat géant, gobelin, archer gobelin, loup sinistre, bandit, brute orque, troll) pour ce qui erre sur leurs cartes, et ne tirent jamais les événements aléatoires qui amènent leur propre troupe, puisque leurs raids sont annoncés. Un royaume sans guilde et sans or pour en bâtir une reçoit la différence de la couronne, au plus une fois toutes les cinq minutes, et un niveau peut être recommencé à tout moment depuis le menu Échap.
- **La vie de la cité, vue et entendue** : une petite icône s'élève au-dessus de l'endroit où un héros achète des potions ou des armes, paie un lit ou une leçon, où un percepteur vide une caisse ou remet les impôts, où une caravane est payée, où une recrue s'engage, où un niveau est gagné, où un bâtiment est amélioré ou réparé, où un coffre est ouvert ou quelque chose est découvert. Chacune a son propre son bref : plus faible à mesure qu'elle s'éloigne de la vue, trois au plus à la fois et jamais le même coup sur coup. Un repaire qui rassemble un raid porte sur la carte un anneau rouge qui pulse et un cor, et sur la mini-carte un cadre clignotant, jusqu'au départ du raid ; le cor, les tambours de guerre et un boss s'entendent de partout. Avec le volume des effets à zéro, les icônes disent encore tout. Les sons sont synthétisés par `tools/soundgen.py` et les icônes rendues par le générateur d'images ; rien n'est enregistré ni échantillonné.
- **L'or et les réponses, montrés là où ils tombent** : là où l'or change de mains (un achat, une caisse vidée, des impôts remis, une caravane payée), l'icône porte le montant, `+120`. Quand un héros se décide au sujet d'un drapeau de prime, une icône de drapeau s'élève au-dessus de lui : un drapeau doré avec une coche verte s'il l'accepte, un drapeau gris avec une croix rouge s'il l'a examiné et refusé (un héros qui a seulement choisi un meilleur drapeau, ou trouvé celui-ci déjà pris, ne montre rien).
- **Les héros répondent** : sélectionner un héros fait entendre une courte réponse dans la voix de sa classe et affiche ce qu'il dit en haut de son panneau. La réponse suit sa situation : gravement blessé ou en fuite vers la maison, au combat, en route vers une prime, au repos à l'intérieur, en train de réparer un mur, à court de provisions ou de sommeil, ou prêt, chaque classe ayant alors son propre salut. Une réponse arrive au plus toutes les 1,5 seconde, et la ligne reste là sans le son.
- **Chaque unité a une voix** : un monstre, un percepteur, une caravane et un villageois répondent à un clic par le son de leur espèce, comme un héros répond selon son humeur, et tout ce qui marche sur la carte s'entend quand il tombe. Un héros et les autres gens de la couronne (percepteurs, caravanes, les ouvriers de la couronne, les villageois d'une maison abattue) s'entendent où que soit la vue ; un monstre s'atténue avec la distance à la vue, la même espèce s'entend au plus une fois toutes les deux secondes, et au plus deux de ces sons se chevauchent. Aucun son d'unité ne dure moins d'une seconde.
- **Musique** : le menu et la partie ont chacun leurs morceaux, joués dans un ordre aléatoire : n'importe lequel peut ouvrir, et chaque morceau passe une fois avant qu'un seul ne se répète. Tant qu'un boss nommé est sur le terrain, sa propre musique joue, et celle de la partie revient quand il tombe ; un château tombé a aussi la sienne.
- **Visible sur la carte** : le chariot d'un convoi de ravitaillement bloqué, une roue tombée et sa cargaison à moitié déchargée, se tient sur son site dès que celui-ci est exploré et jusqu'à ce que le convoi soit rejoint ou perdu ; un boss porte un insigne de crâne cornu au-dessus de son nom et de sa barre de vie. Les deux sont identiques sur les deux chemins de rendu. Le Chef Croc-Grinçant a une apparence qui lui est propre : casque à cornes, bouclier rouge, hache à double tranchant et l'étendard de sa bande dans le dos.
