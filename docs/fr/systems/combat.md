---
title: "Système de combat"
---

Le combat est entièrement automatique. Les aventuriers et les ennemis s'affrontent dès qu'ils se trouvent à portée d'attaque l'un de l'autre.

---

## Déroulement du combat

1. **Détection** — Un aventurier repère un ennemi dans son champ de vision (vérifié toutes les 2 ticks)
2. **Approche** — Si l'ennemi est visible mais hors de portée d'attaque, l'aventurier le poursuit
3. **Attaque** — Une fois à portée d'attaque, les deux camps commencent à combattre
4. **Résolution** — Les dégâts sont résolus toutes les 5 ticks

---

## Calcul des dégâts

### Aventurier attaquant un ennemi

| Type | Formule de dégâts |
|------|-------------------|
| Mêlée | `ATK × 2` (multiplicateur de dégâts global) |
| À distance | `ATK` (dégâts de projectile, aucun multiplicateur appliqué) |

### Ennemi attaquant un aventurier

```
Dégâts = (ATK ennemi + aléatoire(0~2)) × 2
```

### Défense

```
Dégâts réels = max(1, Dégâts - DEF)
```

### Esquive

| Source | Taux d'esquive |
|--------|----------------|
| Esquive de base des aventuriers | 10 % + 1 % × AGI (≤ 70 %) |
| Esquive de base des ennemis | 5 % |
| Compétence « Évasion » du Rôdeur | +15 % |
| Voleur : Évasion | +10 % |
| Voleur : Danse de l'ombre | +18 % |
| Rôdeur : Brise-vent | +25 % |

---

## Système de projectiles

Chaque unité qui combat à distance tire un projectile qui lui est propre : on reconnaît un tir à ce qui vole. Les autres classes combattent au corps à corps même si elles atteignent 3 cases :

| Classe | Type de projectile |
|--------|--------------------|
| Rôdeur | Flèche (arrow) |
| Éclaireur | Javelot (javelin) |
| Garde des routes | Carreau d'arbalète (bolt) |
| Mage | Boule de feu (fireball) |
| Adepte | Éclat de lumière (light_shard) |
| Archer gobelin (ennemi) | Flèche grossière (goblin_arrow) |
| Cultiste sombre (ennemi) | Orbe sombre (dark_orb) |
| Dragon (ennemi) | Jet de flammes (dragon_flame) |

Les projectiles se déplacent vers la cible à chaque tick après avoir été tirés et infligent des dégâts à l'impact. Chacun est dessiné selon le cap qu'il suit : celui qui remonte la carte est vu de dos, celui qui la traverse est vu de côté.

---

## Tour à flèches

La Tour à flèches est un bâtiment défensif automatisé :

| Propriété | Valeur |
|-----------|--------|
| Portée d'attaque | 20 cases |
| Dégâts de base | 16 + 8 × (Lv − 1) |
| Progression par amélioration | Augmente avec le niveau |

Les Tours à flèches attaquent automatiquement l'ennemi le plus proche à portée.

---

## Récompenses d'expérience

| Source | XP |
|--------|-----|
| Par coup (progressif) | 1/5 de l'XP de mise à mort |
| Tuer un Slime | 10 XP |
| Tuer un Gobelin | 25 XP |
| Tuer un Squelette | 40 XP |
| Tuer un Zombie | 60 XP |
| Tuer un Dragon | 150 XP |

:::note[XP progressive]
Chaque fois qu'un aventurier frappe un ennemi -- que ce soit en mêlée ou par projectile -- il reçoit 1/5 de l'XP de mise à mort de cet ennemi. Cela garantit que les aventuriers gagnent de l'expérience même sans porter le coup fatal.
:::

---

## IA de combat

### Conditions de fuite des aventuriers

- PV < 30 % (PV_CRITIQUE)
- La probabilité de fuite est influencée par le trait de personnalité Sécurité

### Utilisation des potions

| Condition | Comportement |
|-----------|--------------|
| PV < 30 % | Utilisation urgente de potion |
| PV < 50 % | Utilisation de potion |

### Priorité de ciblage des ennemis

1. Aventuriers en combat (non-pacifistes)
2. Bâtisseurs (pacifistes)
3. Bâtiments menaçants comme les Tours à flèches
4. Château
5. Autres bâtiments

Le poison conserve sa durée restante, le prochain dégât et l'attribution de la mort dans les sauvegardes. Le poison du voleur est purifié par l'autel ou les bains sans retirer les boucliers. Après la résistance de base du boss, les contrôles répétés dans une fenêtre fixe de 10 secondes durent 100 %, 50 %, puis 25 % ; les suivants restent sans effet jusqu'à sa fin. Une réapplication plus courte ne raccourcit pas le contrôle existant et les tentatives ne retardent pas la réinitialisation. Les ennemis ordinaires n'ont pas cette immunité.

Les missions peuvent avoir huit étapes ordonnées avec objectifs obligatoires et facultatifs. Étapes accomplies et résultats facultatifs sont sauvegardés ; un échec facultatif ne bloque pas la victoire de base. Les ennemis et bastions nommés doivent réellement périr : retirer une cible vivante ne valide rien. La protection suit l’unité ou le bâtiment allié d’origine jusqu’à la fin, sans accepter de remplacement. Les créateurs peuvent utiliser renommée, vagues finies et listes de cibles ; les références absentes sont refusées avant la partie.
