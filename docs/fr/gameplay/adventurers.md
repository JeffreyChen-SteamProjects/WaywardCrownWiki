---
title: "Aventuriers"
---

Les aventuriers sont le cœur du jeu. Ils ont un libre arbitre et prennent des décisions basées sur leur personnalité, leurs besoins et leur état actuel.

---

## Aperçu des classes

| Classe | Stat principal | L'attaque évolue avec | Portée d'attaque | Bâtiment de recrutement | Traits |
|--------|---------------|----------------------|-----------------|------------------------|--------|
| **Guerrier** | STR | Force | 3 | Caserne | HP élevés, attaque élevée, combat au corps à corps |
| **Mage** | INT | Intelligence | 12 | Tour de mage | Attaques magiques à distance, HP faibles |
| **Rôdeur** | AGI | Agilité | 11 | Cabane du rôdeur | Attaques à l'arc à distance, grande curiosité |
| **Garde** | STR | Force | 3 | Poste de garde | Patrouille les bâtiments de la ville, ne quitte jamais la ville |
| **Bâtisseur** | AGI | — | 3 | Guilde des bâtisseurs | Répare les bâtiments ; ne combat que le monstre qui l'attaque |
| **Voleur** | AGI | Agilité | 3 | Guilde des voleurs | Cupide et insaisissable, HP faibles |

:::note[Portée d'attaque]
Le Rôdeur (flèches), le Mage (boules de feu), l'Éclaireur (javelots), le Garde des routes (carreaux d'arbalète) et l'Adepte (éclats de lumière) attaquent avec des projectiles, chacun avec le sien. Les autres classes qui combattent se battent au corps à corps : elles frappent jusqu'à 3 cases de distance et infligent des dégâts doublés.
:::

<!-- hero-classes:begin (written by tools/hero_docs.py from the game's data; do not edit) -->
Toutes les classes de héros du jeu, écrites à partir de ses données : les six que tout royaume recrute, puis celles que recrutent les bâtiments propres à une voie du château.

| Classe | Voie du château | Recrutée à | Santé | Attaque | Portée d'attaque | Compétences |
|---|---|---|---|---|---|---|
| **Guerrier** | — | Caserne | 70–150 | FOR | 3 | Frappe puissante, Mur de boucliers, Berserker, Seigneur de guerre, Cri de guerre |
| **Mage** | — | Tour de mage | 25–65 | INT | 12 | Trait de feu, Bouclier de mana, Éclair en chaîne, Archimage, Tornade de feu |
| **Rôdeur** | — | Cabane du rôdeur | 45–100 | AGI | 11 | Tir précis, Évasion, Tir multiple, Œil de l'aigle, Brise-vent |
| **Garde** | — | Poste de garde | 50–120 | FOR | 3 | Vigilance, Fortifier, Provocation, Bastion, Garde rapprochée |
| **Bâtisseur** | — | Guilde des bâtisseurs | 30–70 | — | 3 | Réparation rapide, Renforcer, Maîtrise artisanale, Architecte, Réparation d'urgence |
| **Voleur** | — | Guilde des voleurs | 35–80 | AGI | 3 | Coup dans le dos, Évasion, Coupe-bourse, Danse de l'ombre, S'éclipser |
| **Chevalier au bouclier** | Gardien | Bastion | 90–170 | FOR | 3 | Vigilance, Mur de boucliers, Provocation, Bastion, Bouclier du serment, Serment du remplaçant, À la rescousse |
| **Hospitalier** | Gardien | Sanctuaire | 50–100 | INT | 3 | Vigilance, Bouclier de mana, Fortifier, Bastion, Prière de guérison |
| **Éclaireur** | Contrées sauvages | Camp sauvage | 50–105 | AGI | 11 | Tir précis, Évasion, Tir multiple, Œil de l'aigle, Marque du chasseur |
| **Gardien des bêtes** | Contrées sauvages | Pavillon des bêtes | 65–135 | FOR | 3 | Frappe puissante, Évasion, Berserker, Œil de l'aigle, Frappe du faucon, Pistage, Compagnon animal, Couverture du compagnon, Soins aux herbes |
| **Chevalier des tombes** | Mort-vivant | Ossuaire | 95–175 | FOR | 3 | Frappe puissante, Mur de boucliers, Berserker, Seigneur de guerre, Armure d'os |
| **Nécromancien** | Mort-vivant | Crypte | 40–90 | INT | 3 | Trait de feu, Bouclier de mana, Éclair en chaîne, Archimage, Sceau de flétrissure, Garde d'os, Dette d'âme |
| **Prévôt** | Ordre | Prévôté | 80–155 | FOR | 3 | Vigilance, Mur de boucliers, Provocation, Seigneur de guerre, Bouclage, Ordre de rassemblement, Ronde d'alarme |
| **Garde des routes** | Ordre | Poste de péage | 55–115 | AGI | 10 | Tir précis, Évasion, Tir multiple, Œil de l'aigle, Garde du convoi |
| **Juré de guerre** | Bravoure | Halle de guerre | 85–165 | FOR | 3 | Frappe puissante, Évasion, Berserker, Seigneur de guerre, Coup fendant, À l'assaut des murs, Frénésie sanglante |
| **Porte-bannière** | Bravoure | Intendance | 70–140 | FOR | 3 | Frappe puissante, Mur de boucliers, Provocation, Seigneur de guerre, Rugissement inflexible |
| **Lame-sort** | Arcanes | Académie | 60–125 | INT | 3 | Trait de feu, Évasion, Éclair en chaîne, Archimage, Lumière déchirante, Pas de phase, Riposte runique |
| **Adepte** | Arcanes | Flèche | 40–88 | INT | 11 | Trait de feu, Bouclier de mana, Éclair en chaîne, Archimage, Garde runique |
| **Escorteur** | Commerce | Guilde marchande | 80–150 | FOR | 3 | Vigilance, Mur de boucliers, Provocation, Bastion, Garde des marchandises, Marche forcée, Service d'escorte |
| **Caravanier** | Commerce | Dépôt caravanier | 55–115 | AGI | 3 | Tir précis, Évasion, Tir multiple, Œil de l'aigle, Marque de route |
| **Inquisiteur** | Tyrannie | Tribunal | 65–130 | INT | 3 | Trait de feu, Bouclier de mana, Provocation, Archimage, Marque d'effroi, Serment de fer |
| **Exécuteur** | Tyrannie | Bureau des levées | 90–170 | FOR | 3 | Frappe puissante, Mur de boucliers, Berserker, Seigneur de guerre, Verdict des chaînes |
| **Alchimiste** | — | Guilde des alchimistes | 45–85 | INT | 8 | Aiguilles précises, Tablier de terrain, Mélange précis, Maître distillateur, Alchimie de terrain |
<!-- hero-classes:end -->

---

## Statistiques détaillées

### Guerrier

| Stat | Plage |
|------|-------|
| HP | 70 – 150 |
| STR | 8 – 22 |
| AGI | 3 – 12 |
| INT | 1 – 8 |
| LCK | 1 – 10 |

**Tendances de personnalité** : Gloire élevée (0,5–1,0), cupidité modérée (0,2–0,8), faible curiosité (0,0–0,2)

**Arbre de compétences** :

| Niveau | Compétence | Effet |
|--------|-----------|--------|
| 3 | Frappe puissante | Attaque ×1,15 |
| 6 | Mur de boucliers | Défense +5 |
| 10 | Berserker | Attaque ×1,3, HP ×0,9 |
| 15 | Seigneur de guerre | Attaque ×1,5, Défense +8 |

### Mage

| Stat | Plage |
|------|-------|
| HP | 25 – 65 |
| STR | 1 – 3 |
| AGI | 1 – 8 |
| INT | 12 – 28 |
| LCK | 3 – 14 |

**Tendances de personnalité** : Sécurité élevée (0,3–0,9), curiosité modérée (0,1–0,3)

**Arbre de compétences** :

| Niveau | Compétence | Effet |
|--------|-----------|--------|
| 3 | Trait de feu | Attaque +5 |
| 6 | Bouclier de mana | Défense +4 |
| 10 | Éclair en chaîne | Attaque ×1,4 |
| 15 | Archimage | Attaque ×1,6, Attaque +8 |

### Rôdeur

| Stat | Plage |
|------|-------|
| HP | 45 – 100 |
| STR | 4 – 14 |
| AGI | 8 – 20 |
| INT | 3 – 12 |
| LCK | 3 – 14 |

**Tendances de personnalité** : Curiosité très élevée (0,7–1,0), faible sécurité (0,0–0,4)

**Arbre de compétences** :

| Niveau | Compétence | Effet |
|--------|-----------|--------|
| 3 | Tir précis | Attaque +4 |
| 6 | Évasion | Taux d'esquive +15% |
| 10 | Tir multiple | Attaque ×1,35 |
| 15 | Œil de l'aigle | Attaque ×1,5, Taux critique +20% |

### Garde

| Stat | Plage |
|------|-------|
| HP | 50 – 120 |
| STR | 3 – 10 |
| AGI | 2 – 8 |
| INT | 1 – 5 |
| LCK | 1 – 6 |

**Tendances de personnalité** : Sécurité très élevée (0,5–1,0), aucune curiosité

**Comportement spécial** : Automatiquement assigné à patrouiller les bâtiments ; ne quittera pas son poste pour poursuivre des ennemis éloignés.

**Arbre de compétences** :

| Niveau | Compétence | Effet |
|--------|-----------|--------|
| 3 | Vigilance | Défense +3 |
| 6 | Fortifier | HP ×1,2 |
| 10 | Provocation | Défense +6, Attaque +3 |
| 15 | Bastion | HP ×1,4, Défense +10 |

### Bâtisseur

| Stat | Plage |
|------|-------|
| HP | 30 – 70 |
| STR | 1 – 6 |
| AGI | 4 – 14 |
| INT | 2 – 8 |
| LCK | 2 – 10 |

**Tendances de personnalité** : Sécurité très élevée (0,8–1,0), aucune curiosité, aucune gloire

**Comportement spécial** : Ne combat jamais de lui-même, seulement le monstre qui l'attaque. Se déplace automatiquement vers les bâtiments endommagés pour les réparer.

**Arbre de compétences** :

| Niveau | Compétence | Effet |
|--------|-----------|--------|
| 3 | Réparation rapide | Vitesse de réparation ×1,3 |
| 6 | Renforcer | Vitesse de réparation ×1,5 |
| 10 | Maîtrise artisanale | Vitesse de réparation ×2,0 |
| 15 | Architecte | Vitesse de réparation ×2,5, HP ×1,3 |

### Voleur

| Stat | Plage |
|------|-------|
| HP | 35 – 80 |
| STR | 4 – 12 |
| AGI | 12 – 30 |
| INT | 3 – 12 |
| LCK | 6 – 18 |

**Tendances de personnalité** : Cupidité très élevée (0,75–1,0), sécurité élevée (0,5–1,0), curiosité modérée (0,3–0,7), faible gloire (0,0–0,3)

**Comportement spécial** : Sa défense repose sur l'esquive (10 % + 1 % par point d'AGI) plutôt que sur les HP, et sa cupidité l'attire vers les primes les mieux payées.

**Arbre de compétences** :

| Niveau | Compétence | Effet |
|--------|-----------|--------|
| 3 | Coup dans le dos | Taux critique +12% |
| 6 | Évasion | Taux d'esquive +10% |
| 10 | Coupe-bourse | Taux critique +20%, Attaque ×1,15 |
| 15 | Danse de l'ombre | Taux d'esquive +18%, Attaque ×1,35 |

---

## Système d'états

Les aventuriers transitent entre les états suivants :

```
IDLE
  ├─→ MOVING_TO_BOUNTY
  ├─→ EXPLORING
  ├─→ PATROLLING
  ├─→ REPAIRING — Builder only
  └─→ FIGHTING
        └─→ RETURNING
              └─→ LODGING
                    └─→ IDLE
```

---

## Système d'hébergement

- Les aventuriers vont se reposer et se soigner quand leurs PV sont bas, au lieu le plus proche qui a de la place : leur propre guilde (celle qui les a recrutés, ou celle où ils ont emménagé), une auberge ou un camp sauvage. Le château n'héberge qu'un héros sans guilde ; celui dont la guilde est pleine y attend un lit. Entre lieux presque aussi proches, leur guilde passe en premier (elle compte 8 cases plus près) ; celui qui fuit pour sa vie prend le plus proche
- Les aventuriers hébergés entrent dans l'état **LODGING** : ils disparaissent de la carte et deviennent invulnérables
- Chaque bâtiment peut héberger jusqu'à **3** occupants
- Si un bâtiment est détruit, tous les occupants à l'intérieur sont immédiatement libérés
- Les aventuriers quittent l'hébergement automatiquement une fois leurs HP entièrement restaurés

---

## Système de niveaux

| Élément | Description |
|---------|-------------|
| Niveau maximum | 20 |
| XP de base | 40 XP (pour atteindre le Nv. 2) |
| Formule XP | `40 × 1.6^(level-1)` |
| XP d'élimination | Varie selon le type d'ennemi (10 – 160 XP) |
| XP de combat | Chaque coup accorde 1/5 des XP d'élimination |
| Victoire partagée | L'or et l'XP d'une victoire sont partagés sans rien ajouter : le héros qui a porté le dernier coup garde 60 % quand d'autres y ont part, et le reste va à parts égales à 3 héros au plus qui combattent à moins de 6 cases ou qui, à moins de 10 cases, ont pris soin d'un autre héros dans les 30 dernières secondes |
| XP de prime | Exploration 15 XP, Défense 25 XP, Élimination 30 XP |

Lors d'une montée de niveau, les statistiques principales et secondaires augmentent ainsi que les HP.

**Arbre de compétences** : les compétences d'une classe forment un arbre, pas un nombre fixe d'emplacements : chaque compétence a le niveau auquel elle s'apprend et peut en exiger d'autres d'abord, et un arbre est aussi grand que sa classe a de compétences. Un héros apprend toute compétence que son niveau et ce qu'il a déjà appris permettent. Son panneau montre l'arbre : en gras ce qu'il possède, en gris ce qui reste à venir avec le niveau où cela arrive, chacune sous la compétence qu'elle exige. Une compétence marquée (active) est lancée par le héros lui-même ; les autres changent ses chiffres pour de bon.

---

## Système de personnalité

Chaque aventurier possède quatre valeurs de personnalité (0,0 – 1,0) qui influencent l'acceptation des primes :

| Trait | Effet |
|-------|--------|
| **Cupidité (gold)** | Des valeurs élevées signifient que l'aventurier accorde plus d'importance à la récompense |
| **Sécurité (safety)** | Des valeurs élevées signifient que l'aventurier évite le danger |
| **Gloire (glory)** | Des valeurs élevées signifient que l'aventurier préfère les missions de combat |
| **Curiosité (curiosity)** | Des valeurs élevées signifient que l'aventurier préfère l'exploration |

Les détails d'un héros donnent chaque valeur en un mot : **faible** sous 0,35, **modérée** jusqu'à 0,7, **forte** à partir de 0,7.

**Formule d'attraction des primes** :

```
level_scale = max(1, level × 0.6)
attraction  = reward / 100 / level_scale × greed + fame × glory - danger × safety
            + 0.3 × curiosity (Explore only) + renown bonus
            - distance × 0.02 / level_scale - danger × 2 (when HP < 40%)
```

- Un marqueur **Avertissement** n'est jamais pris
- Une récompense inférieure à **niveau × 20** pièces d'or est refusée d'emblée
- Les Gardes ne prennent jamais de primes : ils patrouillent la ville à la place
- Les héros de niveau inférieur à 8 refusent les primes situées dans une zone d'avertissement
- Un aventurier prend la prime au score le plus élevé, si ce score dépasse 0,1

---

## La vie propre des héros

Un héros désœuvré compare tout ce qui s'offre à lui et choisit le mieux : une prime, une course en ville ou l'exploration.

- **Courses** : acheter un meilleur équipement à la forge, refaire le plein de potions au marché, étudier à la bibliothèque, passer une soirée à l'auberge (15 or ; une fontaine ou un jardin est gratuit), ou rentrer s'il est blessé ou fatigué. Chacune exige le bâtiment, l'or et un vrai besoin, et le héros se rend à ce bâtiment pour la faire. Tant qu'un monstre est en vue ou qu'un repaire connu tient debout, un héros valide ne prend pas de soirée libre : il s'attaque au plus proche qu'il ose affronter (un repaire à tout niveau, le niveau 1 compris, si son goût de la gloire l'emporte sur sa prudence), ou explore. Là où un monstre a été vu récemment, on chasse encore trois minutes, jusqu'à ce que la couronne voie l'endroit vide ; un héros qui ne marche pas sur un repaire connu chasse autour, hors de sa propre portée du mur.
- **Engagement** : un héros termine le trajet qu'il a commencé. Seule une exploration est abandonnée, après 150 ticks, pour quelque chose de nettement mieux. Le danger passe toujours d'abord : un héros gravement blessé rejoint le lieu de repos le plus proche.
- **Forteresses** : à tout niveau, le niveau 1 compris, les héros audacieux marchent d'eux-mêmes sur les forteresses ennemies connues quand ils osent en affronter une seuls ; tout héros peut les piller, le voleur plus que tout autre.
- **Soutien** : un héros dont la classe prend soin des autres (soigne, protège, encourage ou les couvre) et qui n'a pas de travail à lui marche avec un groupe : le héros le plus proche dans un rayon de 30 cases en route vers le travail d'une prime ou une marche, ou en plein combat, et dont il ose affronter le travail avec ce groupe. Il le suit quand il se déplace et le quitte quand le groupe meurt, s'arrête ou rentre, quand il est lui-même blessé ou au bout de 2 minutes.
- **Mémoire** : un héros garde quelques-unes des choses qui lui sont arrivées, chacune quelques minutes. Celui dont la guilde a été attaquée accorde 30 % de valeur en plus aux primes de défense ; celui qu'un autre héros a aidé alors qu'il était gravement blessé, ou qui a été payé pour une prime aux côtés d'un autre, accorde plus de valeur à une prime que tient ce héros ; celui qui est rentré gravement blessé, ou a vu tomber un tel héros, veut de meilleures chances à moins de 12 cases du lieu. Le panneau du héros indique ce dont il se souvient.
- **Une guilde perdue** : un héros dont la guilde est détruite ou démolie n'est pas perdu. Il s'installe de lui-même dans le bâtiment le plus proche qui recrute sa classe et a de la place, y compris une guilde reconstruite. D'ici là le château l'abrite : 3 héros par niveau du château pendant 5 minutes, les autres pendant 100 secondes. Un héros dont le temps est écoulé quitte le royaume avec ce qu'il porte ; le journal et la chronique l'annoncent avant, et son panneau compte les secondes.
- **Ce que montre un héros** : un héros tressaille quand il est touché, lève une main quand sa compétence se déclenche, jubile quand il gagne un niveau et s'affaisse là où il tombe avant que la poussière ne l'emporte. Avec « réduire les animations » (Paramètres), il ne fait rien de tout cela.
- **Penchants des classes** : chaque classe a ses habitudes. Les guerriers se battent jusqu'à être gravement blessés et aiment attaquer les forteresses ; les mages restent près de la ville, se replient tôt et aiment étudier ; les rôdeurs voyagent loin et préfèrent les primes d'exploration ; les voleurs visent la prime la mieux payée et pillent les forteresses ; les gardes et les bâtisseurs restent en ville. La prudence et la curiosité propres à chaque héros nuancent cela, et son panneau indique ses penchants. Le rayon d'action est lui aussi propre à chaque héros : plus il est audacieux et curieux, plus il s'éloigne du château, si bien que deux héros d'une même classe ne restent pas sur le même terrain. Un héros va d'abord vers les terres inconnues de son rayon ; quand il n'en reste plus, il pousse un peu plus loin et traverse jusqu'à l'autre bout de son rayon au lieu de tourner autour de la ville.
- **Riposter** : quand un monstre a attaqué un héros dans les deux dernières secondes environ (une morsure, un coup, une flèche ou une compétence ; un coup esquivé compte aussi), le héros riposte : il s'en prend d'abord à ce monstre-là, avant tout le reste (son trajet, un vol, une course), où qu'il se trouve ; s'il tire depuis hors de sa vue, le héros marche jusqu'à lui, et le combat une fois à portée. Toutes les classes le font, le Bâtisseur compris, qui sinon ne se bat jamais et ne combat que le monstre qui l'a frappé. La riposte dure tant que ce monstre vit et qu'on peut encore le trouver : en vue du héros, ou encore visible sur la carte pour avoir frappé un héros. Elle prend fin quand le monstre tombe ou est perdu de vue, ou quand le héros perd courage et décide de fuir ; le héros abandonne alors la poursuite et décide à nouveau. Un héros qui rentre chez lui ou va se reposer ne riposte pas. Le monstre qui a frappé un héros reste visible sur la carte pendant 10 secondes, où qu'il soit, pour qu'on voie tout de suite l'agresseur.
- **Fuir un combat** : sous la moitié de ses HP, un héros au combat se demande s'il doit fuir à 50 %, 40 %, 30 %, 20 % et 10 % de ses HP, une fois à chaque palier, et plus il est bas, plus il a de chances de fuir. Sa facilité à fuir dépend de la prudence de sa classe et de son propre goût pour la sécurité ; les classes qui se battent jusqu'à la mort (Chevalier des tombes, Juré de guerre, Exécuteur, Chevalier au bouclier) fuient dix fois moins volontiers que la plus prudente. Chances d'avoir fui quand un combat a ramené le héros à 10 % : environ 92 % pour un Mage, 68 % pour un Rôdeur, 55 % pour un Guerrier et 19 % pour un Juré de guerre. Un héros à qui le monstre qu'il a frappé rend les coups décide de la même façon. Une fois qu'aucun monstre ne rôde plus, un héros sous le seuil de retraite de sa classe va se soigner.
- **Lire un héros** : le panneau d'un héros indique ce qu'il fait et pourquoi, où il va, ce dont il a besoin et sa position sur chaque prime ouverte : en route, occupé, ou la raison de son refus avec la prime qui le ferait changer d'avis. Le panneau d'une prime classe les héros selon ces raisons, les plus faciles à convaincre en premier. Le panneau se termine par le parcours du héros, ses huit derniers faits avec l'heure de jeu de chacun : l'équipement acheté et ce qu'il a étudié, les primes qu'il a prises et ce qui l'a décidé (la paie, d'autres déjà dessus ou ses souvenirs), ce qu'il a touché et aux côtés de qui, qui est venu à son aide quand il était gravement blessé, et quand il est rentré.

## Aventuriers et factions

Les rebelles, traîtres et espions humains utilisent les mêmes classes, compétences apprises, équipements et potions que les aventuriers recrutés. Ils combattent et soutiennent selon les relations entre factions, dépensent les fonds et provisions limités de leur propre guilde et récupèrent dans un camp encore debout. Un traître conserve son nom et son histoire ; la faction d’un espion non démasqué reste inconnue. Les héros étrangers ne partagent ni les recherches ni les places de recrutement de la Couronne. Le pinceau de héros de l’éditeur permet de placer des aventuriers royaux, alliés, neutres ou hostiles.

**Ours brun · Faucon de chasse** — Appelle un chien. Dès le niveau 8, choisit un faucon agile contre les tireurs, un ours robuste contre les armures lourdes ou groupes de trois, sinon un chien. Limite commune de 12 invocations sur la carte. Suit le maître sur terrain praticable, sans entretien ni butin, et reste lors du changement de mission.

### Compagnons durables

Une contribution réelle à un combat commun dangereux crée une camaraderie réciproque. Des soins efficaces, un bouclier ayant absorbé des dégâts ou des dégâts subis pour un héros en péril peuvent laisser une dette de sauvetage chez le bénéficiaire ; une coopération complémentaire répétée peut former un partenariat réciproque. Chaque héros conserve au plus trois compagnons importants, dans les sauvegardes et les niveaux qui reprennent les héros. Les liens faibles s’estompent sans interaction ; la mort ou un départ définitif efface les liens concernés. Le seul partage du butin, rester à proximité, une aide inefficace ou annuler une bannière ne renforce aucun lien. Le travail commun accompli figure dans l’histoire du héros ; les relations ne donnent aucun bonus permanent d’attaque ou d’armure.

### Invitations entre compagnons

Un héros volontaire pour une prime contre une forteresse peut inviter jusqu’à trois compagnons proches et disponibles. Chacun décide selon sa santé actuelle, ses provisions, le danger, le trajet et sa part prévue de la prime, et peut choisir un autre travail. Les invitations en attente réservent un nombre limité de places tout en laissant de la place aux autres volontaires. Elles expirent et imposent un délai entre invitations, sans relancer le rassemblement ni interrompre repos, secours, combat ou autres tâches. Accepter ou refuser ne change pas le lien. La sauvegarde conserve les invitations actuelles ; la carte suivante efface invitations et délais, mais conserve les identités.

### Compagnons de route

Les héros gardent leurs itinéraires et leurs décisions de retraite. Pendant une marche sûre contre une forteresse, ils peuvent attendre une fois un compagnon proche en retard, pendant huit secondes au maximum. Les soutiens préfèrent les compagnons accessibles sans danger ; ils cessent de suivre si le travail change ou devient dangereux, sans dépasser leur portée habituelle. Une perte laisse une prudence locale brève et limitée et une trace historique, sans augmenter le mécontentement. La sauvegarde garde le délai initial ; la carte suivante efface l’attente.

### Comprendre les compagnons

Les détails du héros montrent jusqu’à trois compagnons, l’origine du lien et leur présence au même travail, ailleurs dans le royaume ou en réserve. La prime montre les réponses, les raisons de refus et le temps initial restant. Les noms des compagnons vivants permettent de les localiser. Secours, coopération et pertes importants rejoignent la chronique et les récits de fin ; les nouvelles répétées sont regroupées, et mort et départ définitif sont distincts.

<!-- BEGIN COMBAT PAIRINGS -->
### Associations de combat

Chaque épreuve indépendante commence avec huit héros de niveau 8. Le capital total de 7000 or comprend bâtiments, améliorations nécessaires, recherches, une potion par héros, réactifs ou ravitaillement limités et 200 or par héros. Le reste demeure au trésor. Les héros décident de leurs déplacements et compétences ; guidez-les par les bâtiments et primes. Chaque ennemi est vétéran ou plus fort et marche sur le château depuis le lointain, sans être vu ; une épreuve dure jusqu'à 20 minutes.

Les deux variantes ont gagné avec les graines 17 et 73. Les temps concernent la rencontre initiale, pas toute une campagne. Les gardes vivants restent après la chute du camp.

#### Endurance des boucliers

Boucliers et soins demandent des attaquants contre les armures.

| # | Héros | Bâtiments | Recherche | Capital | Temps (s) | Vivants | Dégâts/s | Soins / absorption des boucliers |
|---|---|---|---|---|---|---|---|---|
| 1 | Chevalier au bouclier ×2, Hospitalier ×2, Rôdeur ×2, Mage ×2 | Bastion, Sanctuaire, Tour de mage | Tissage protecteur, Discipline curative | 7000 | 143.6–319 | 8 | 12.9–26.28 | 0 / 3, 222 / 140 |
| 2 | Guerrier ×2, Mage ×2, Rôdeur ×4 | Caserne, Tour de mage, Cabane du rôdeur | Tactiques de combat, Affinité arcanique | 7000 | 124.6–198.6 | 8 | 19.5–28.37 | 0 / 0, 0 / 0 |

#### Contrôle par poison

Le poison exige des réactifs payés ; purification et dispersion le réduisent.

| # | Héros | Bâtiments | Recherche | Capital | Temps (s) | Vivants | Dégâts/s | Soins / absorption des boucliers |
|---|---|---|---|---|---|---|---|---|
| 1 | Alchimiste ×2, Chevalier au bouclier ×2, Hospitalier ×2, Rôdeur ×2 | Guilde des alchimistes, Bastion, Sanctuaire, Autel de purification | Réactifs caustiques, Tissage protecteur, Portée purifiante | 7000 | 118.6–140.6 | 8 | 19.76–21.5 | 201 / 0, 30 / 0 |
| 2 | Mage ×3, Rôdeur ×3, Guerrier ×2 | Tour de mage, Cabane du rôdeur, Autel de purification | Affinité arcanique, Yeux perçants, Portée purifiante | 7000 | 91.6–106.6 | 8 | 25.98–27.67 | 0 / 0, 0 / 0 |

#### Tours à distance

Les tours couvrent un lieu fixe ; chasseurs et sapeurs menacent un arrière exposé.

| # | Héros | Bâtiments | Recherche | Capital | Temps (s) | Vivants | Dégâts/s | Soins / absorption des boucliers |
|---|---|---|---|---|---|---|---|---|
| 1 | Garde ×2, Rôdeur ×4, Garde des routes ×2 | Poste de garde, Cabane du rôdeur, Poste de péage, Tour à flèches, Tour à flèches, Tour de givre, Fanal | Treillis de givre, Lentilles de balise, Yeux perçants | 7000 | 35.6–104.6 | 8 | 12.88–35.51 | 0 / 0, 0 / 0 |
| 2 | Guerrier ×3, Mage ×2, Rôdeur ×3 | Caserne, Tour de mage, Tour à flèches, Tour de givre | Tactiques de combat, Treillis de givre | 7000 | 57.6–83.6 | 7 | 14.63–22.29 | 0 / 0, 0 / 0 |

#### Expédition animale

Les compagnons dépendent de gardiens vivants ; les fronts robustes ralentissent leur frappe.

| # | Héros | Bâtiments | Recherche | Capital | Temps (s) | Vivants | Dégâts/s | Soins / absorption des boucliers |
|---|---|---|---|---|---|---|---|---|
| 1 | Gardien des bêtes ×3, Éclaireur ×3, Rôdeur ×2 | Pavillon des bêtes, Camp sauvage, Cabane du rôdeur | Dressage de meute, Garde bestiale, Vol juste | 7000 | 33.4–226.6 | 8 | 15.63–51.77 | 0 / 0, 0 / 0 |
| 2 | Guerrier ×2, Rôdeur ×3, Mage ×3 | Caserne, Cabane du rôdeur, Tour de mage | Yeux perçants, Tactiques de combat | 7000 | 74.6–142.6 | 8 | 18.79–24.92 | 0 / 0, 0 / 0 |

#### Assaut au contact

L’assaut au contact craint les zones de poison et les tirs croisés.

| # | Héros | Bâtiments | Recherche | Capital | Temps (s) | Vivants | Dégâts/s | Soins / absorption des boucliers |
|---|---|---|---|---|---|---|---|---|
| 1 | Juré de guerre ×4, Porte-bannière ×2, Rôdeur ×2 | Halle de guerre, Intendance, Cabane du rôdeur | Serment de sang, Garde de la bannière | 7000 | 60.6–63.6 | 7 | 20.28–25.3 | 0 / 0, 0 / 0 |
| 2 | Guerrier ×4, Mage ×2, Rôdeur ×2 | Caserne, Tour de mage, Cabane du rôdeur | Tactiques de combat, Peau de fer | 7000 | 43.6–108.6 | 8 | 18.49–24.38 | 0 / 0, 0 / 0 |

#### Percée de siège

Le ravitaillement de siège est limité. Protégez sa route et rasez le camp avant le remplacement des gardes.

| # | Héros | Bâtiments | Recherche | Capital | Temps (s) | Vivants | Dégâts/s | Soins / absorption des boucliers |
|---|---|---|---|---|---|---|---|---|
| 1 | Porte-bannière ×2, Juré de guerre ×2, Rôdeur ×4 | Intendance, Halle de guerre, Cabane du rôdeur | Ravitaillement de siège, Serment de sang | 7000 | 51.6–102 | 8 | 42.12–81.96 | 0 / 0, 0 / 0 |
| 2 | Rôdeur ×4, Guerrier ×2, Mage ×2 | Cabane du rôdeur, Caserne, Tour de mage | Yeux perçants, Tactiques de combat | 7000 | 58.6–171 | 8 | 27.89–71.19 | 0 / 0, 0 / 0 |

<!-- END COMBAT PAIRINGS -->
