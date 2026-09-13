# bftaxi.fr

Site de **BF Taxi**, taxi conventionné CPAM à Saint-Étienne et dans la Loire.

Site statique construit avec [Astro](https://astro.build), hébergé sur GitHub
Pages. Aucune base de données, aucun service tiers, aucun cookie : le site se
sert d'un simple dossier de fichiers et fonctionne hors ligne côté navigateur
pour le simulateur de tarif.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ localement
npm run check    # contrôle des types et du balisage
```

## Ce qu'il faut compléter avant la mise en ligne

Ces valeurs ne peuvent pas être devinées : elles doivent être reprises des
documents de l'entreprise. Les emplacements sont marqués `TODO` ou
`[à compléter]` dans le code.

| Où | Quoi |
| --- | --- |
| `src/data/site.ts` | Dénomination légale exacte, adresse du siège, e-mail professionnel, année de création |
| `src/pages/mentions-legales.astro` | SIRET, RCS, TVA, numéro d'autorisation de stationnement (ADS), directeur de publication, assureur et n° de police, médiateur de la consommation |
| `src/lib/schema.ts` | `aggregateRating` — **uniquement** en reprenant la note et le nombre d'avis réels de la fiche Google Business. Ne jamais y mettre de valeurs estimées : c'est une manipulation d'avis, sanctionnée par Google et interdite par la loi |
| `public/images/` | Photos des véhicules (voir le README du dossier) |

## Structure

```
src/
├── data/          Toutes les données éditoriales et tarifaires
│   ├── site.ts      Coordonnées, NAP, véhicules — source unique
│   ├── tarifs.ts    Grille préfectorale + fonction d'estimation
│   ├── geo.ts       Coordonnées des points, calcul de distance
│   ├── services.ts  11 pages de services
│   ├── villes.ts    16 pages de communes
│   └── faq.ts       Questions fréquentes
├── lib/
│   ├── schema.ts    Générateurs JSON-LD
│   └── leads.ts     Transmission des demandes de devis
├── components/    Composants d'interface
├── layouts/       Layout unique, head SEO complet
├── pages/         Routes ; les pages de services et de communes sont générées
└── styles/        global.css — la charte tient dans ce seul fichier
```

**Modifier le contenu se fait presque toujours dans `src/data/`.** Ajouter un
service ou une commune y suffit : la page, son entrée de sitemap, ses données
structurées et ses liens internes sont générés automatiquement.

## Charte

Un seul fichier la porte : `src/styles/global.css`.

| Rôle | Valeur |
| --- | --- |
| Encre (structure) | `#1c3d5a` — 11,3:1 sur blanc |
| Chaud (appels uniquement) | `#a8580f` — 5,2:1 sur blanc |
| Fonds | `#ffffff` et `#faf9f6` |
| Filets | `#e4e0d8`, `#d9d5cb` — aucune ombre portée |
| Titres | Newsreader (sérif) |
| Texte | Instrument Sans |

Les polices sont servies depuis le dépôt (`@fontsource-variable`), pas depuis
Google : meilleure performance, et aucune requête vers un tiers — c'est ce qui
permet au site de se passer de bandeau cookies.

La règle qui tient tout l'ensemble : **le chaud est réservé aux appels à
l'action.** L'utiliser ailleurs le rendrait invisible là où il compte.

## Tarifs

`src/data/tarifs.ts` contient la grille de l'arrêté préfectoral en vigueur dans
la Loire. Un nouvel arrêté paraît généralement en début d'année : mettre à jour
les montants et `ARRETE.date` suffit à rafraîchir le simulateur, la page des
tarifs, les exemples chiffrés et les données structurées, qui lisent tous ce
même fichier.

## Formulaire de devis

Le site étant statique, il n'a pas de serveur pour recevoir un POST. Trois
canaux sont prévus, du plus au moins automatisé (voir `src/lib/leads.ts`) :

1. Si la variable `PUBLIC_FORM_ENDPOINT` est définie au build, le formulaire
   envoie un POST JSON à cette URL — un service tiers (Formspree, Web3Forms,
   Make) ou votre propre API le jour venu.
2. Sinon, il ouvre WhatsApp avec la demande déjà rédigée.
3. Un lien e-mail reste disponible en repli permanent.

Pour activer le canal 1 sur GitHub Pages : `Settings → Secrets and variables →
Actions → New repository secret`, nommé `PUBLIC_FORM_ENDPOINT`.

## Référencement

- **Pages** : 11 services et 16 communes, chacune avec un contenu rédactionnel
  propre. Le contenu dupliqué entre pages locales est la première cause de
  désindexation de ce type de site : ne jamais recopier un paragraphe d'une
  commune à l'autre.
- **Données structurées** : `TaxiService`, `Service`, `FAQPage` et
  `BreadcrumbList` sur chaque page concernée.
- **`/llms.txt`** : résumé factuel généré au build, destiné aux moteurs de
  recherche génératifs. Il est produit depuis les mêmes données que les pages,
  donc il ne peut pas diverger du site.
- **Cohérence NAP** : nom, adresse et téléphone ne sont écrits qu'une fois,
  dans `src/data/site.ts`. Ils doivent correspondre **exactement** à la fiche
  Google Business, espaces et ponctuation compris.

## Déploiement

`.github/workflows/deploy.yml` construit et publie sur GitHub Pages à chaque
push sur `main`. Côté dépôt : `Settings → Pages → Source : GitHub Actions`, et
domaine personnalisé `bftaxi.fr`. Les enregistrements DNS à créer sont listés
en commentaire du workflow.

## Évolution vers une application

Le choix d'Astro en sortie statique n'est pas un cul-de-sac. Pour ajouter un
espace client, des notifications ou un back-office :

```bash
npx astro add vercel   # ou cloudflare, ou node
```

Puis passer `output` à `'server'` dans `astro.config.mjs` et marquer les seules
routes concernées avec `export const prerender = false`. Les pages marketing
restent prégénérées et gardent leurs performances actuelles.
