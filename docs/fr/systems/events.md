---
title: "Événements aléatoires"
---

Le jeu déclenche des événements aléatoires à intervalles réguliers, ajoutant de l'imprévisibilité au gameplay. L'intensité des événements s'adapte dynamiquement en fonction de votre nombre d'aventuriers. Le tutoriel intégré ne tire jamais de tremblement de terre ni d'événement qui pose une nouvelle structure sur la carte.

Les cartes de prêt portent une lettre scellée ; une nouvelle invitation émet un seul signal discret, au volume des effets. L'onglet Événements du royaume du panneau des registres affiche les invitations et les prêts en cours sans mettre le jeu en pause. Les cartes de prêt indiquent le capital à verser immédiatement, le délai, les remboursements et la perte maximale ; refuser ou ignorer une invitation est gratuit. Les éditeurs de cartes et de campagnes enregistrent les groupes d'événements : les réglages du niveau priment sur ceux de la campagne, puis de la carte, et hériter des réglages diffère de désactiver tous les groupes. Chaque groupe ajoute ses propres événements aléatoires (voir Groupes d'événements plus bas) ; un niveau sans groupe n'a que les événements habituels. Les cartes de prêt s’adaptent à la largeur du panneau latéral et défilent verticalement pour garder toutes les conditions lisibles.

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

## Groupes d'événements

Une carte, une campagne ou un niveau peut activer n'importe lequel des cinq groupes d'événements dans l'éditeur. Chaque groupe ajoute les événements ci-dessous aux événements habituels, avec le même tirage et au même rythme, et une offre que tu refuses ou ignores ne coûte jamais rien. Survole un groupe dans l'éditeur pour voir ses événements.

## Groupe Économie et services

### Demande de prêt royal

Avec le groupe « Économie et services » activé, la cour royale d'un royaume voisin peut demander à emprunter dans ton trésor, mais seulement si tu as au moins 400 or. La somme est fixée à l'arrivée de la demande : la moitié de ton trésor, arrondie au multiple de 50 inférieur, entre 200 et 1 000 or. Tu as 30 secondes pour décider. Si tu prêtes, l'or part tout de suite et revient 120 secondes plus tard avec 10 % d'intérêts. Besoin de l'argent plus tôt ? Rappelle le prêt et tu récupères 90 % : au pire, tu perds un dixième. Si tu quittes le niveau avant l'échéance, tu récupères la somme sans intérêts. Refuser ou laisser passer la demande ne coûte rien, et un prêt en cours n'empêche pas les autres événements d'arriver. Sa carte dans Événements du royaume indique les sommes exactes et les secondes restantes.

### Commande étrangère

Avec le groupe « Économie et services » activé, un acheteur étranger peut passer commande par ton marché, à condition que tu aies un marché terminé et une caravane qui travaille sur une route commerciale reliée à ce marché. Tu as 30 secondes pour accepter. Accepter coûte 150 or d'avance. Tes caravanes remplissent ensuite la commande pendant leurs tournées habituelles : chaque voyage chargé qui part emporte une cargaison et utilise 50 de cet argent, et une cargaison ne compte qu'une fois entièrement déchargée. Fais livrer trois cargaisons en 180 secondes et tu touches 450 or. Si une caravane chargée d'une cargaison est détruite, si le marché tombe, si la route est perdue ou si le temps s'écoule, la commande échoue et tu récupères ce qui n'a pas été dépensé. Tu peux te retirer aux mêmes conditions à tout moment. Refuser est gratuit, et tes revenus de caravane et tes impôts habituels continuent comme avant. Sa carte dans Événements du royaume indique le marché, la route et combien de cargaisons sont parties et arrivées.

### Clinique itinérante

Avec le groupe « Économie et services » activé, une clinique itinérante peut proposer de s'installer près d'une de tes maisons de village quand tu as un héros blessé capable de s'y rendre. Tu as 30 secondes pour choisir. Finance-la pour 120 or et la couronne paie six soins ; ensuite, les héros paient eux-mêmes. Ou laisse-la ouvrir aux frais des patients, ce qui ne te coûte rien : chaque héros paie 20 or de sa propre bourse. Elle soigne deux héros à la fois. Les héros blessés y vont d'eux-mêmes quand rien d'autre ne les retient (un combat, un drapeau, une nuit à l'auberge), et chaque soin dure 5 secondes et rend jusqu'à 60 PV. Un héros touché ou qui part en plein soin récupère ce qu'il a payé. La clinique accueille des patients pendant 180 secondes, puis a jusqu'à 10 secondes pour terminer, et l'argent de la couronne qui reste revient. Refuser est gratuit. Sa carte dans Événements du royaume liste les patients, et Voir t'y emmène une fois l'endroit découvert.

### Foire des moissons

Avec le groupe « Économie et services » activé, une foire des moissons peut s'installer près d'une de tes maisons de village. Tu es prévenu 20 secondes avant, et elle reste ouverte 120 secondes. Inutile d'envoyer qui que ce soit : les héros blessés, à court de potions ou qui ont envie d'une soirée de détente y vont d'eux-mêmes, tant que rien d'autre ne les retient (un combat, un drapeau, un groupe qu'ils attendent). Elle sert quatre héros à la fois. Chacun se repose 5 secondes et récupère 40 PV gratuitement, achète les potions qui lui manquent au prix habituel (la foire en apporte 24 pour tout son séjour) et paie une soirée de détente s'il en a envie. Un héros qui part avant ne paie rien. Pendant qu'elle est ouverte, tu peux la prolonger une fois de 60 secondes pour 150 or ; les potions ne sont pas réapprovisionnées. Sa carte dans Événements du royaume indique quand elle ouvre et ferme, qui est aux étals et combien de potions il reste, et Afficher t'y emmène une fois l'endroit découvert.

## Groupe Histoires d'aventuriers

### Guilde rivale en visite

Avec le groupe « Histoires d'aventuriers » activé, une petite guilde étrangère peut demander à camper au bord de la carte, à plus de 60 cases de ton château, pour s'attaquer à un coffre exploré ou à un repaire hostile qui n'est pas un objectif de mission et sur lequel tu n'as posé aucune prime. Tu as 30 secondes pour répondre. Trois héros de niveau 1 arrivent, un guerrier, un rôdeur et un mage, avec un budget de 600 or qui couvre déjà leurs frais ; ils ne recrutent jamais personne d'autre et restent 240 secondes. Autoriser l'entrée indépendante est gratuit, et ils gardent ce qu'ils prennent. Coopérer coûte 150 or, versés à leur guilde et jamais remboursés : le butin de cette cible est alors partagé selon le travail, un point par PV retiré à la cible ou à ses gardes et par pièce prise, et la part de tes héros va dans ton trésor. Refuser les tient dehors ; si tu ne réponds pas, ils entrent de façon indépendante. Quand leur temps est écoulé, que leur camp tombe ou qu'ils deviennent hostiles, ils repartent vers la frontière. Sa carte dans Événements du royaume indique les parts.

### Un vieil ami

Avec le groupe « Histoires d'aventuriers » activé, un de tes héros peut demander à faire venir un vieil ami de la même classe pour s'attaquer à un repaire hostile exploré qui n'est pas un objectif de mission et n'a pas de prime. Tu as 30 secondes pour répondre. Financer réserve 200 or pour l'affaire. L'ami entre par la frontière et marche jusqu'à l'endroit où se trouvait ton héros ; une fois qu'ils se retrouvent, une prime « Tuer » de 200 or, que seuls ces deux-là peuvent prendre, est posée sur le repaire. Ils ont 180 secondes à partir de ton paiement et décident eux-mêmes d'y aller ou non. Quand le repaire tombe, chacun est payé sur les 200 or pour les dégâts infligés aux murs et aux gardes et pour les soins qui ont vraiment aidé l'autre ; si les deux ont gagné une part, ton trésor reçoit 100 or. Ensuite, pendant 30 secondes, tu peux inviter l'ami à rejoindre une guilde de sa classe si elle a de la place ; sinon, il rentre chez lui. L'argent non versé revient quand il repart ou rejoint la guilde. Refuser ne coûte rien. La carte se trouve dans Événements du royaume.

### Visite d’apprentis

Avec le groupe « Histoires d'aventuriers » activé, un héros de niveau 4 ou plus peut se voir demander de prendre deux apprentis, s'il reste deux lits libres au château ou dans une auberge et que deux coffres explorés se trouvent à 24 cases ou moins du mentor. Tu as 30 secondes pour répondre. Paie 100 or pour le logement, remboursés si aucun apprenti n'atteint jamais son lit, et deux apprentis de niveau 1 de la classe du mentor arrivent par la frontière. Pendant les 180 secondes de l'essai, ils choisissent eux-mêmes leur travail : chacun de ces coffres donne 15 XP et son contenu à celui qui l'ouvre. Rester à côté du mentor n'apprend rien, et le mentor continue comme d'habitude. À la fin de l'essai, tu as 30 secondes pour « Admettre les apprentis éligibles » : ceux qui ont ouvert un coffre, veulent toujours rester et trouvent une place dans une guilde de leur classe. Tous les autres rentrent chez eux, plus tôt si le mentor meurt ou si le logement est perdu. Refuser ou ignorer ne coûte rien. La carte dans Événements du royaume indique les tâches et l'XP de chaque apprenti.

### Visite au pays

Avec le groupe « Histoires d'aventuriers » activé, un héros qui a un foyer dans ton royaume peut demander à rendre visite à sa famille, à condition qu'au moins quatre héros aient un foyer et que pas plus d'un quart soient absents en même temps. Tu as 30 secondes pour répondre. « Autoriser la visite » lui laisse 20 secondes de préavis, puis jusqu'à 180 secondes pour rejoindre la frontière ; les combats, les drapeaux et les soins passent d'abord, et il ne part pas sous 80 % de santé. S'il n'arrive pas à sortir, la visite est annulée sans frais. Il s'absente 120 secondes, garde son équipement et son or mais ne gagne rien et ne prend pas de niveau, puis revient par le même passage ou par un autre passage sûr. Tu peux « Offrir 150 or pour rester » une seule fois ; l'or ne va dans sa bourse que s'il accepte, et s'il refuse, rien n'est prélevé et tu peux encore autoriser ou refuser la visite. Refuser, ou ne pas répondre, le garde à la maison gratuitement. La carte dans Événements du royaume le suit pendant son absence.

### Tournoi des aventuriers

Avec le groupe « Histoires d'aventuriers » activé, deux à quatre de tes héros (libres, à 75 % de santé ou plus, et attirés par le prix) peuvent proposer d'organiser un tournoi dans une clairière explorée près d'une maison de village. Tu as 30 secondes pour répondre. Le financer coûte 300 or : 100 pour le lieu, qui ne reviennent pas, et 200 réservés aux prix. Dans les 30 secondes qui suivent ton paiement, ils s'inscrivent par paires, deux combats au plus, et s'y rendent ; le tournoi entier dispose de 120 secondes. Chaque combat dure 30 secondes. Ses coups ne peuvent faire descendre personne sous 1 PV et ne donnent pas d'XP de combat : amener l'adversaire à 1 PV fait gagner, sinon c'est celui à qui il reste le plus de santé qui l'emporte, et une égalité donne un match nul. Chaque vainqueur reçoit 100 or dans sa propre bourse à la clôture, et l'argent des prix que personne n'a gagné te revient. Si personne ne s'est inscrit à la fin de ces 30 secondes, les 200 te reviennent tout de suite ; avant cela, un monstre près de la clairière ne fait que retarder les inscriptions. Une vraie attaque venue de l'extérieur y met fin aussitôt. Refuser ne coûte rien. La carte dans Événements du royaume liste les combats et l'argent.

### La commande du barde

Avec le groupe « Histoires d'aventuriers » activé, un barde peut proposer de chanter un exploit accompli par jusqu'à trois héros nommés sur la carte : détruire une structure hostile que tu as explorée, à laquelle l'un d'eux doit infliger des dégâts ; une caravane sur une route commerciale active qui part après ton accord et décharge entièrement ; ou un drapeau de sauvetage pour lequel l'un d'eux fait un nouveau travail d'escorte et se trouve là au moment du paiement. Tu as 30 secondes pour répondre. Financer la commande coûte 150 or, dépensés tout de suite et jamais remboursés, et ouvre une fenêtre de 180 secondes. Personne ne reçoit d'ordres : les héros choisissent leur travail, et une prime de siège coûte en plus. Si l'exploit est accompli et que tous les héros nommés sont en vie, ta renommée augmente de 10, une seule fois, et la chanson entre dans ta chronique avec leurs noms. Si l'un d'eux meurt, si la cible est perdue ou si le temps s'écoule, pas de renommée. Retirer la commande y met fin plus tôt, toujours sans remboursement. Refuser ne coûte rien. La carte se trouve dans Événements du royaume.

## Groupe Affaires frontalières

### Migration de monstres

Avec le groupe « Affaires frontalières » activé, une harde de huit loups sinistres peut traverser un coin de ta carte, en entrant par un bord et en sortant par le bord voisin, bien loin de ton château, de tes villes et de tes bâtiments. C'est un changement naturel : rien à accepter ni à refuser. Tu es prévenu 30 secondes avant ; ensuite, la harde a 180 secondes pour traverser. Les loups ne sont pas hostiles : ils laissent ton château tranquille, tes tours ne tirent pas sur eux et tes héros les laissent passer. Pour les chasser, pose une prime « Tuer » sur un loup visible. Seuls les héros qui la prennent peuvent frapper les premiers, et chaque loup laisse au plus 20 or. Un loup touché appelle sa harde dans un rayon de 12 cases. Si quelque chose bloque le chemin, la harde attend 20 secondes et cherche un autre itinéraire, deux fois au plus. Quand le temps est écoulé, les loups repartent par où ils sont venus ; une harde encore encerclée environ 390 secondes après l'avertissement reste dans la nature, en simples loups sinistres. Les primes non payées sont remboursées une fois qu'ils sont partis. Sa carte dans Événements du royaume indique l'itinéraire et les loups que tu vois.

### Querelle de repaires

Avec le groupe « Affaires frontalières » activé, deux repaires rivaux de types différents peuvent se disputer le terrain qui les sépare, en dehors des 60 cases autour de ton château. C'est un changement naturel : rien à accepter. Tu es prévenu 30 secondes avant ; ensuite, chaque repaire envoie six de ses monstres vers un point marqué. Ce ne sont pas des monstres en plus : les six de chaque repaire sont pris sur son prochain raid, et personne ne remplace les morts. Le combat dure jusqu'à 180 secondes. Il s'arrête plus tôt si un camp n'a plus de combattants, si un repaire tombe ou si le chemin est bloqué. Les survivants ont ensuite jusqu'à 120 secondes pour rentrer chez eux et reprendre leur garde. Les monstres qui s'entretuent ne te rapportent rien, et attendre ne donne aucune récompense. Tu peux toujours poser des primes ordinaires pour attaquer un repaire ou garder tes routes. Sa carte dans Événements du royaume compte les combattants visibles de chaque côté, et ses boutons montrent les deux repaires, le lieu de l'affrontement et les combattants une fois que tu les as vus.

### Captifs évadés

Avec le groupe « Affaires frontalières » activé, deux captifs évadés peuvent atteindre le bord de ta carte et demander asile, avec quatre poursuivants à leurs trousses. Tu as 30 secondes pour répondre. Les accueillir coûte 200 or : deux drapeaux de sauvetage de 100 or, un sur chaque captif. Les héros prennent les drapeaux d'eux-mêmes et escortent les captifs jusqu'à ton auberge ou ton château, qui doit avoir deux lits libres, en 150 secondes. Chaque captif qui arrive sain et sauf obtient un lit et, comme tout drapeau, rapporte 5 de renommée si l'escorte a eu un vrai travail à faire. Un captif qui fuit le danger sans escorte ne compte pas. À la fin du temps d'escorte, les captifs secourus qui le veulent peuvent prendre une place libre dans tes guildes : tu as 30 secondes pour les inviter ou les laisser partir. Tous les autres repartent vers la frontière. L'argent des drapeaux non utilisé revient, moins les frais d'annulation habituels. Refuser ou attendre ne coûte rien et n'envoie aucun poursuivant. Sa carte dans Événements du royaume suit chaque captif.

### Déserteur ennemi

Avec le groupe « Affaires frontalières » activé, un pillard d'une guilde rivale qui t'est hostile peut demander asile. Tu as 30 secondes pour répondre. L'accorder réserve 100 or, dépensés seulement si le déserteur atteint un lit libre dans ton auberge ou ton château pendant que jusqu'à deux de ses anciens compagnons de guilde le poursuivent. La protection dure 120 secondes. Dire oui te donne aussi un rapport sur l'emplacement du camp de sa guilde. Ce rapport devient périmé après 120 secondes ou dès que le camp disparaît, et il ne lève pas le brouillard. À la fin de la protection, un déserteur satisfait qui trouve une place libre dans une de tes guildes peut être invité à la rejoindre, avec son équipement. Tu as 30 secondes pour l'inviter ou le laisser partir. Sinon, il s'en va vers sa sortie, et l'or non dépensé revient. Refuser ne coûte rien et n'entraîne aucune vengeance. Sa carte dans Événements du royaume indique l'or réservé et dépensé, ainsi que le rapport.

### Des bêtes font leur nid

Avec le groupe « Affaires frontalières » activé, une meute de loups peut essayer de s'installer sur un terrain sauvage dégagé, juste au-delà des 60 cases autour de ton château. C'est un changement naturel : rien à accepter. Tu es prévenu 30 secondes avant ; ensuite, deux loups arrivent. Au moins 30 secondes plus tard, si l'un d'eux est toujours sur place, trois autres arrivent et commencent à creuser une tanière. Creuser demande 40 secondes de travail d'un loup qui reste tranquille à côté, donc les combats le retardent. Tue la meute et c'est fini : jamais plus de cinq loups et d'une tanière, et les morts ne sont pas remplacés. Chaque loup laisse au plus 20 or et une tanière achevée en contient 20, soit 120 or en tout. Si tu les laisses faire, la tanière est achevée mais n'envoie jamais d'autres loups ; tu peux l'attaquer comme n'importe quel repaire. Tout se termine 280 secondes après l'avertissement, et une tanière à moitié creusée disparaît. Si l'emplacement est pris, la meute se déplace, deux fois au plus. Sa carte dans Événements du royaume indique l'étape, l'avancement du creusement et le temps restant.

### Émissaire du duel

Avec le groupe « Affaires frontalières » activé, un héros en bonne santé d'une guilde rivale qui t'est hostile peut venir sous trêve défier l'un des tiens, à un endroit près d'une de tes maisons de village. Tu as 30 secondes pour répondre. Financer le duel coûte 100 or, réservés comme prix. Ensuite, un de tes héros libres peut s'inscrire dans les 30 secondes. Ce n'est pas toi qui choisis : chaque héros met en balance le prix et la gloire face au niveau et à l'équipement de l'émissaire. Il y a un seul combat de 30 secondes au plus, et personne ne meurt. Les dégâts s'arrêtent à 1 PV, et celui qui y fait descendre l'autre gagne. Sinon, c'est le combattant en meilleure santé qui gagne quand le temps est écoulé. Le vainqueur emporte les 100 or, quel que soit son camp. Si personne ne s'inscrit, si le combat se termine par un match nul ou si une attaque extérieure l'interrompt, l'or revient. Le duel ne donne aucune expérience de combat. Ensuite, l'émissaire rentre chez lui. Refuser ne coûte rien et ne déclenche aucune guerre. Sa carte dans Événements du royaume indique le challenger, le combat et l'argent.

## Groupe Exploration et environnement

### Crue de la rivière

Avec le groupe « Exploration et environnement » activé, une rivière peut monter sur une portion de sa rive. C'est un changement naturel : tu es prévenu 30 secondes avant, et la rive (jusqu'à 12 cases) est hachurée d'ambre sur la carte. L'eau ne tombe jamais sur personne. Ceux qui s'y trouvent, héros ou monstres, s'en éloignent d'abord, et l'eau attend que la rive soit vide. Elle reste jusqu'à 120 secondes après l'avertissement, puis redescend d'elle-même ; si la rive ne se vide jamais, la rivière ne monte pas. Personne ne peut marcher sur les cases inondées, mais les crues ne viennent que là où il existe un détour, loin de ton château et de tes bâtiments. Avant la fin de l'avertissement, tu peux payer 150 or une seule fois pour garder 4 de ces cases au sec (les routes d'abord, puis les cases les plus proches du château), sans remboursement même si l'eau ne monte jamais. Si tu l'ignores, l'eau vient et repart, tout simplement. Sa carte dans Événements du royaume affiche le compte à rebours et passe en revue les cases de la rive et les cases protégées que tu as vues.

### Floraison des herbes

Avec le groupe « Exploration et environnement » activé, des herbes sauvages peuvent fleurir près de tes maisons de village. C'est un changement naturel : tu es prévenu 20 secondes avant, et la floraison dure 120 secondes. Il faut un villageois libre et un héros qui a de la place pour des herbes. Jusqu'à 12 plants poussent, entre 8 et 16 cases d'une maison de village et loin du château, chacun formant une botte de 2 herbes (24 au plus). Les héros ne peuvent pas les cueillir sur place. Les villageois inoccupés y vont d'eux-mêmes, cueillent pendant 5 secondes et rapportent la botte chez eux, où les héros de passage prennent les herbes. Si un monstre approche, un villageois lâche sa botte là où il se trouve, et elle y reste. Il n'y a rien à payer ni à choisir : tiens les monstres loin de leurs chemins avec tes défenses habituelles. Quand le temps est écoulé, les plants non cueillis se fanent, mais les herbes cueillies restent. Sa carte dans Événements du royaume liste les zones que tu as vues et ce qui a été rapporté, et « Voir la prochaine zone connue » les passe en revue une à une.

### Source curative

Avec le groupe « Exploration et environnement » activé, une source curative peut jaillir dans la nature quand un de tes héros est blessé. C'est un changement naturel : tu es prévenu 20 secondes avant, puis elle coule pendant 150 secondes et offre 6 utilisations. Elle apparaît entre 16 et 24 cases d'un héros blessé, et tu ne sais pas où tant qu'aucun héros ne s'en est approché à 8 cases ou moins ; tu l'entends alors, et la carte indique l'endroit. Inutile d'envoyer qui que ce soit : les héros blessés y vont d'eux-mêmes, un à la fois. Chacun s'y repose 5 secondes et récupère jusqu'à 60 PV, gratuitement. Un héros touché, qui se bat ou qui a un monstre tout près part plus tôt sans utiliser de tour ; les héros en pleine santé n'y vont pas. L'ignorer ne coûte rien. Elle se tarit quand le temps ou les utilisations sont épuisés. Sa carte dans Événements du royaume affiche le compte à rebours, nomme qui s'y repose, et « Montrer la source découverte » t'y emmène une fois qu'elle est trouvée.

### Coups souterrains

Avec le groupe « Exploration et environnement » activé, tes gens peuvent entendre frapper sous un terrain dégagé exploré, entre 16 et 24 cases d'un de tes héros. Tu as 30 secondes ; refuser ou laisser passer est gratuit. Enquête pour 100 or et un drapeau d'exploration est posé là-bas : le héros qui le prend travaille 5 secondes sur place sans monstre à 6 cases ou moins, et touche les 100 or. Si personne n'a fini en 120 secondes, les 100 or reviennent. Ensuite, la carte dit ce qu'il y a dessous, et tu choisis avant la fin de ces 120 secondes. Un survivant pris au piège : finance un drapeau de sauvetage de 100 or, et les héros ont 120 secondes pour le ramener au château, pour 5 de renommée. Un ancien passage : explore-le gratuitement ; après 5 secondes de travail d'un héros, trois cases deviennent une route. Une chambre gardée : paie 200 or, bats ses quatre squelettes (sans butin), travailles-y 5 secondes, et le trésor reçoit 300 or. Ou scelle le site gratuitement. « Abandonner le travail inachevé » rend l'or encore réservé. Sa carte dans Événements du royaume suit chaque étape.

### Lettre à la dérive

Avec le groupe « Exploration et environnement » activé, une lettre peut s'échouer sur une rive explorée près de ton château pour demander de l'aide. Tu as 30 secondes pour répondre, et tout doit être terminé dans les 180 secondes qui suivent son arrivée ; accepter tard n'ajoute pas de temps. La refuser ou l'ignorer est gratuit. Accepter coûte 150 or : 50 pour la recherche, 100 réservés pour deux drapeaux de sauvetage de 50 or. Ensuite, un héros doit arriver à 3 cases ou moins de la rive, en général grâce à un drapeau d'exploration que tu y poses (il coûte en plus). Deux survivants apparaissent, avec deux loups sinistres à 6 cases, et chacun reçoit un drapeau de sauvetage. Les héros qui ramènent un survivant au château sont payés, et chaque retour sain et sauf rapporte 5 de renommée. Parfois, les survivants sont blessés et ont d'abord besoin d'une herbe chacun, qu'un escorteur leur donne ou va chercher à proximité. Si aucun héros n'atteint la rive à temps, les 100 or reviennent ; « Abandonner le sauvetage » rend aussi ce qui n'a pas été dépensé. Sa carte dans Événements du royaume indique l'indice, le temps restant et qui est en sécurité.

## Groupe Histoires de guildes

### La dernière expédition d’un vétéran

Avec le groupe « Histoires de guildes » activé, un héros de niveau 6 ou plus qui a déjà aidé à abattre un ennemi ou un repaire dangereux pendant que le groupe était actif peut demander une dernière expédition contre un repaire qu'il peut atteindre. Tu as 30 secondes pour décider. Le financer coûte 250 or et pose un drapeau sur ce repaire ; d'autres héros peuvent se joindre à lui et attendre le vétéran avant de partir. Ils ont 180 secondes. Si le repaire tombe à temps et que le vétéran survit en l'ayant frappé, les membres survivants se partagent les 250 or selon la part du repaire que chacun a abattue, et le reste revient. Quoi qu'il arrive, un vétéran qui accepte prend sa retraite une fois rentré sain et sauf à sa guilde (ou là où il se trouve, si le niveau se termine avant) ; si tu te retires avant leur départ, tu récupères ton argent, mais il prend quand même sa retraite. Un vétéran qui gagne puis prend sa retraite donne à la prochaine recrue de sa guilde une leçon de 20 secondes qui vaut 30 XP. Celui qui meurt reste dans les mémoires, sans leçon. Refuser, reporter ou ignorer ne coûte rien, et le héros reste. Sa carte dans Événements du royaume suit chaque étape.

### Blason familial perdu

Avec le groupe « Histoires de guildes » activé, un héros peut te demander de retrouver le blason perdu de sa famille, à un endroit de la nature qu'il peut atteindre. Tu as 30 secondes pour financer une enquête pour 100 or : un drapeau est posé là-bas, et le héros qui travaille sur place pendant 5 secondes reçoit ces 100 or. Avant la fin du délai de 120 secondes, tu peux financer la récupération pour 150 or. Quatre squelettes gardiens apparaissent et 50 or partent aussitôt en provisions ; une fois les gardiens morts, 5 secondes de travail de plus mettent au jour le blason et paient 100 or à celui qui a travaillé. Ensuite, dans les 120 secondes, un héros libre le porte au château, où son propriétaire doit le retrouver. Le propriétaire gagne un haut fait pour son histoire, et pendant 120 secondes, ses griefs s'apaisent un peu plus vite. Si le porteur meurt, le blason tombe là où il est tombé. Si le propriétaire meurt, tu peux poursuivre en hommage, sans récompense, ou te retirer. Te retirer ou laisser filer le temps rend l'argent non dépensé ; refuser ou reporter est gratuit. Sa carte dans Événements du royaume indique chaque étape.

### Désaccord sur les idéaux de guilde

Avec le groupe « Histoires de guildes » activé, une guilde peut se diviser sur la conduite à tenir : jusqu'à trois héros prudents veulent défendre, jusqu'à trois plus audacieux veulent attaquer un repaire. Tu as 30 secondes pour soutenir un camp avec 150 or. Soutenir la défense pose un drapeau de défense à la guilde (ou au château) pour l'équipe prudente. Soutenir l'expédition pose un drapeau d'attaque sur le repaire pour l'équipe audacieuse. Seule cette équipe peut prendre le drapeau, et il ne rapporte pas d'or. L'argent sert plutôt à acheter des potions : jusqu'à six, à 25 or chacune, que les membres de l'équipe à court viennent chercher à la guilde. L'équipe a 120 secondes, et une expédition se termine plus tôt quand le repaire tombe. Un vrai combat ou de vrais soins rapportent 2 de renommée par héros et par ennemi, jusqu'à 10 de renommée en tout. Se contenter de monter la garde ne rapporte rien. L'argent inutilisé revient. Rester neutre, refuser ou ignorer ne coûte rien, et l'autre camp reste loyal. Sa carte dans Événements du royaume nomme les deux équipes et la cible.

### Maître de passage

Avec le groupe « Histoires de guildes » activé, un maître retraité peut proposer de venir quand un de tes héros a encore une compétence de classe à apprendre. Le maître s'installe près d'une maison de village ou juste devant le château. Tu as 30 secondes pour choisir : financer trois leçons pour 150 or, ou laisser les héros payer eux-mêmes, ce qui ne te coûte rien. Le maître arrive à pied par la frontière, et les leçons durent jusqu'à 180 secondes après ton choix. Les héros de la classe du maître et de niveau inférieur au sien viennent s'ils le veulent, deux à la fois, une leçon chacun par visite. Une leçon dure 20 secondes et donne 25 XP fixes, que les bonus d'XP n'augmentent pas. Elle coûte 50 or pris dans la bourse du héros, sauf si ton financement la couvre. Un héros blessé en pleine leçon récupère la part inutilisée de ses frais et peut revenir pour finir. Aucune compétence n'est enseignée : elles s'obtiennent toujours gratuitement à leur niveau habituel. Ensuite, les leçons en cours ont encore 20 secondes, le maître s'en va et le financement inutilisé revient. Refuser est gratuit.

---

## Jour, nuit et météo

Une partie libre peut commencer avec le jour qui tourne, avec la météo, ou avec les deux ; chacun se coche à part, et aucun n'est un événement : il n'y a rien à quoi répondre.

- **Une journée** dure 8, 12 ou 16 minutes de jeu, au choix : aube, jour, crépuscule et nuit. La barre du haut indique le jour, son moment et le temps, et son infobulle dit ce qui vient ensuite et quand. La prévision est toujours ce qui arrive.
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