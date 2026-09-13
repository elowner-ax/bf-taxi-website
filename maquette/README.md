# Maquettes

## Maquette finale (page « Maquette finale » du canvas)

Direction A (éditorial encre) affinée, retenue après comparaison des trois
propositions initiales, avec deux emprunts assumés : le bloc d’estimation en
grille vient de la direction B, et un accent chaud est réservé aux boutons
d’appel — le bleu encre manquait de point d’accroche vers le numéro.

| Fichier | Écran |
| --- | --- |
| `Main.dc.html` | Page d’accueil, bureau (1280 px) |
| `Mobile.dc.html` | Page d’accueil, mobile (390 px) |
| `PageService.dc.html` | Page « Taxi conventionné CPAM », gabarit des 11 pages de services |

Deux réglages de couleur sont exposés au-dessus de chaque cadre : `encre`
(structure) et `chaud` (appels).

### Palette

| Rôle | Valeur | Note |
| --- | --- | --- |
| Encre | `#1c3d5a` | Structure, titres accentués, bandeaux. 11,3:1 sur blanc. |
| Chaud | `#a8580f` | Réservé aux appels et aux liens d’action. 5,2:1 sur blanc. |
| Texte | `#16181c` · `#55564f` · `#6f6a5e` | Principal, secondaire, légendes. |
| Fonds | `#ffffff` · `#faf9f6` | Blanc et ivoire alternés. |
| Filets | `#e4e0d8` · `#d9d5cb` | Aucune ombre portée. |

Typographie : **Newsreader** (titres, sérif éditoriale) et **Instrument Sans**
(texte courant), toutes deux servies depuis le dépôt du site, pas depuis Google.

## Directions écartées (page « Directions écartées »)

`DirectionB.dc.html` (grille suisse) et `DirectionC.dc.html` (sable
chaleureux), conservées pour mémoire.

## Régénérer le canvas

Le fichier assemblé `maquette-bf-taxi.html` (2,5 Mo) n’est pas versionné : il
se reconstruit depuis les sources ci-dessus via l’outil de composition du
canvas. Seuls les `.dc.html` et `canvas.json` font foi.

## Report vers le site

Les jetons de la maquette finale sont à reporter dans `src/styles/global.css`,
qui pilote l’habillage des 35 pages. La structure, le contenu et le simulateur
de tarif ne changent pas.
