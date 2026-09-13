# Photos à fournir

Les véhicules sont pour l'instant représentés par des silhouettes vectorielles
(`src/components/IllustrationVehicule.astro`). Elles tiennent la charte, mais
de vraies photos convertissent mieux : le client veut voir le véhicule dans
lequel il va monter.

## À photographier

| Fichier attendu | Sujet | Cadrage |
| --- | --- | --- |
| `tesla-model-3.jpg` | La Tesla blanche, trois-quarts avant | Extérieur, lumière du jour, fond neutre |
| `tesla-interieur.jpg` | Habitacle, sièges arrière | Portes ouvertes, sièges propres |
| `mercedes-classe-v.jpg` | Le van, trois-quarts avant | Porte coulissante ouverte de préférence |
| `mercedes-interieur.jpg` | Habitacle et volume de coffre | Montre l'espace aux jambes |
| `chauffeur.jpg` | Portrait du chauffeur devant un véhicule | Utile sur la page « À propos » |

## Format

- JPEG ou WebP, 1600 px de large au maximum, compressées sous 250 Ko.
- Format paysage 3:2 pour les extérieurs.
- Pas de plaque d'immatriculation lisible, ni de visage de tiers sans accord écrit.

## Une fois les photos déposées

Remplacer les appels à `<IllustrationVehicule />` par le composant `<Image />`
d'Astro (`astro:assets`), qui génère automatiquement les formats modernes et
les dimensions nécessaires pour éviter les décalages de mise en page.
