# Maquettes — directions visuelles

Trois propositions de page d'accueil pour BF Taxi, à comparer avant d'habiller
le site. Le contenu est identique dans les trois : seul le style change.

| Fichier | Direction | Parti pris |
| --- | --- | --- |
| `Main.dc.html` | **A · Éditorial encre** | Sérif Newsreader, bleu encre, angles droits, filets fins, aucune ombre. Le plus sobre. |
| `DirectionB.dc.html` | **B · Grille suisse** | Sans-serif Schibsted, grille apparente, jaune taxi sur noir franc. Le plus lisible. |
| `DirectionC.dc.html` | **C · Sable chaleureux** | Sérif Instrument, fond sable, vert sauge, formes arrondies. Le plus accueillant. |

`canvas.json` positionne les trois maquettes côte à côte et porte les notes de
comparaison.

## Régénérer le canvas

Le fichier assemblé `maquette-bf-taxi.html` (2,5 Mo) n'est pas versionné : il se
reconstruit à partir des sources ci-dessus via l'outil de composition du canvas.
Seuls les `.dc.html` et `canvas.json` font foi.

## Une fois la direction choisie

Les jetons de la direction retenue (police, palette, rayons, ombres) sont
reportés dans `src/styles/global.css`, qui pilote l'habillage de tout le site.
La structure des pages, le contenu et le simulateur de tarif ne changent pas.
