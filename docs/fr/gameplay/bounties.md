---
title: "Système de primes"
---

Les primes sont votre principal moyen de diriger les actions des aventuriers. Placez des drapeaux de prime sur la carte et définissez une récompense pour attirer les aventuriers vers un emplacement spécifique.

---

## Types de primes

| Type | Récompense par défaut | Danger | Gloire | Effet |
|------|----------------------|--------|--------|--------|
| **Explorer** | 200g | 0,2 | 0,3 | Les aventuriers se rendent à l'emplacement cible, révélant le brouillard de guerre en chemin ; le drapeau doit être sur un terrain qu'ils peuvent atteindre à pied |
| **Tuer** | 200g | 0,8 | 0,9 | Éliminer une cible désignée (ennemi ou forteresse ennemie) |
| **Défendre** | 200g | 0,5 | 0,6 | Patrouiller autour du bâtiment cible jusqu'à expiration du délai |
| **Avertissement** | 50g de frais | — | — | Marque un endroit comme interdit : jamais pris ni payé ; les héros de niveau inférieur à 8 se tiennent à l'écart de tout ce qui se trouve à moins de 25 cases |

### Placer, augmenter et annuler

- Une prime Tuer doit être placée sur un ennemi ou une forteresse ennemie, et une prime Défendre sur l'un de vos bâtiments ou sur le Château
- La récompense d'une prime publiée peut être augmentée de +100g ou +500g
- L'annulation rembourse la récompense, sauf pour une prime Défendre dont la garde a commencé

---

## Comment les aventuriers choisissent les primes

Les aventuriers calculent l'attractivité en fonction de leur **personnalité** et des **attributs de la prime** :

```
Attractiveness = Reward × Greed
               + Fame × Glory
               - Danger × Safety
               + Exploration Bonus × Curiosity
               - Distance Penalty
               - Low HP Penalty
```

La récompense et la distance sont pondérées par le niveau de l'aventurier, et certaines primes sont refusées d'emblée (une récompense inférieure à niveau × 20 pièces d'or, un marqueur Avertissement, ou une prime située dans une zone d'avertissement pour les héros de niveau inférieur à 8). La formule complète se trouve sur la page [Aventuriers](adventurers.md).

:::tip[Conseils pratiques]
- Les **Rôdeurs** ont une grande curiosité et sont les mieux adaptés aux primes d'exploration
- Les **Guerriers** ont une grande gloire et sont les mieux adaptés aux primes d'élimination
- Les **Gardes** ne prennent jamais de primes : ils patrouillent autour de vos bâtiments et accourent vers celui qui est attaqué
- Augmenter la récompense peut persuader les aventuriers réticents d'accepter une prime
:::

---

## Mécaniques de la prime de défense

Les primes de défense exigent que les aventuriers **patrouillent en continu** près de la cible :

| Paramètre | Valeur |
|-----------|--------|
| Temps de patrouille requis | 60 ticks |
| Intervalle de recalcul du chemin | Tous les 12 ticks |

Après avoir accepté une prime de défense, l'aventurier patrouille autour de la cible. Une fois suffisamment de temps de patrouille accumulé, la prime est complétée : les héros à leur poste se partagent la récompense, et chacun gagne 25 XP si un ennemi est arrivé en vue pendant la garde.

---

## Mécaniques de la prime d'élimination

Les primes d'élimination désignent une **cible spécifique** :

- Peut être un ennemi particulier
- Peut être une forteresse ennemie

Une fois la cible éliminée, la prime est automatiquement complétée. Les aventuriers ayant accepté la prime priorisent le déplacement vers l'emplacement de la cible.

- La récompense est partagée à parts égales entre les héros qui tiennent la prime à moins de 20 cases de la cible, et chacun d'eux gagne 30 XP ; aucun trait ne l'augmente
- Contre une forteresse ennemie, les aventuriers se rassemblent d'abord à environ 22 cases, du côté du Château, puis attaquent ensemble dès que 2 à 5 d'entre eux (selon la taille de la forteresse) sont arrivés, ou 120 ticks après que le premier aventurier a pris la prime

---

## Conseils stratégiques

1. **Commencez tôt avec les primes d'exploration** — vous devez dissiper le brouillard de guerre pour localiser ennemis et ressources
2. **Placez des primes d'élimination près des forteresses ennemies** — guidez les aventuriers pour détruire les menaces
3. **Placez des primes de défense près des bâtiments importants** — d'autres aventuriers les prennent ; les Gardes y patrouillent déjà sans prime
4. **Ajustez les récompenses selon la personnalité des aventuriers** — vous n'avez pas besoin de surpayer chaque prime

---

## Règles des primes

La récompense est placée dans la prime dès son affichage :

- **Échéance** : une prime peut être affichée avec une échéance de 1, 3 ou 5 minutes. Passé ce délai, la récompense non versée retourne au trésor.
- **Remboursements** : annuler rend la récompense, sauf pour une prime de défense dont la garde a commencé. Une prime dont la cible a disparu sans personne à payer rend aussi sa récompense. Un drapeau se retire depuis son menu de clic droit sur la carte ou, une fois sélectionné, avec le bouton de son propre panneau ; les deux indiquent ce qui est rendu. Si des héros sont déjà en route vers une prime annulée, un dixième de ce qui revient leur est versé pour la marche, à parts égales.
- **Qui est payé** : une prime d'exploration paie le héros qui l'atteint ; une prime de chasse est partagée à parts égales entre les preneurs proches de la mise à mort ; une prime de défense entre les preneurs à leur poste. Un héros mort n'est jamais payé. Un héros proche du travail qui a soigné, protégé ou couvert un autre dans les 30 dernières secondes reçoit une part à leurs côtés.
- **La renommée se mérite** : l'or est toujours versé, mais la renommée et l'expérience ne viennent que pour un terrain inexploré au moment de l'affichage, une mise à mort, ou une garde pendant laquelle un ennemi est arrivé en vue.
- **Compagnie** : les héros laissent une prime d'exploration que quelqu'un tient déjà, comptent une récompense partagée pour leur part, et trouvent une forteresse moins redoutable une fois que d'autres se sont engagés.
- **Expéditions** : une prime de chasse sur une forteresse rassemble d'abord le groupe à un point de ralliement côté château. Il part quand assez de héros sont arrivés ou après 120 ticks ; un volontaire resté seul ne continue que s'il ose affronter la forteresse seul, et renonce sinon à la prime ; il accepte un héros de plus que son effectif de rassemblement et pas davantage ; un héros à court de potions en achète d'abord s'il le peut ; et un groupe entièrement tombé ou rentré se rassemble de nouveau. Le panneau de la prime indique qui est rassemblé, combien de temps on attend les autres, et les chances estimées.
- **Danger** : les primes de chasse, les primes d'exploration près d'une forteresse repérée et une marche non payée sur une forteresse sont pesées face à la préparation de chaque héros (attaque, santé, potions, armure, les héros déjà sur la prime, et la distance entre le travail et une auberge ou le château). Les héros braves acceptent de pires chances que les prudents, et aucune prime ne rend un travail dangereux plus sûr. Un héros qui hésite dit ce qui le ferait changer d'avis (des potions qu'il peut acheter ou ne peut pas obtenir, une auberge plus proche du travail, un autre héros sur la prime) et part dès qu'il l'a. Un héros sur une prime combat tout ce qui l'atteint, mais revient à la prime avant de poursuivre autre chose, et renonce à un travail dangereux quand ses chances s'effondrent.
- **Secours** : une prime de secours se pose sur un percepteur ou une caravane et le suit. Les héros qui la prennent le rejoignent et restent à ses côtés ; escorté, il cesse de fuir les monstres et poursuit sa tâche pendant qu'ils combattent. Une fois escorté 20 ticks sur la route et arrivé au château (une caravane : ou à son comptoir) sans monstre à moins de 8 cases, la prime est partagée à parts égales entre les preneurs à ses côtés ; attendre près d'un porteur qui n'est pas parti ne compte pas. Elle ne rapporte renommée et expérience que si le porteur était blessé ou si un monstre est venu en vue, et elle est remboursée si le porteur est perdu. Un double-clic sur un percepteur ou une caravane en pose une.
- **Panneau d'affichage** : indique ce que le trésor paie maintenant et, quand vous pointez la carte, ce que la prime viserait. Quand un clic pourrait désigner plusieurs choses (des monstres serrés pour une prime de mise à mort, des porteurs pour une prime de sauvetage, plusieurs héros blessés sous le pointeur pour un sort visant un héros), une liste apparaît et la prime ou le sort va à celui qui est choisi.
- **Primes accordées** : une carte ou une campagne peut afficher une prime avec l'action de déclencheur `post_bounty` ; elle ne coûte rien au trésor et ne lui rend rien.
