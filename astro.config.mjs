// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/data/site.ts';

/**
 * Sortie 100 % statique : déployable sur GitHub Pages tel quel.
 *
 * Évolution vers une web app (espace client, notifications, back-office) :
 * installer un adaptateur (`npx astro add vercel` / `cloudflare` / `node`),
 * passer `output` à `'server'` et basculer en rendu à la demande uniquement
 * les routes concernées via `export const prerender = false`. Les pages
 * marketing de ce dépôt restent statiques et gardent leurs performances.
 */
export default defineConfig({
  site: SITE.url,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/merci/'),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === `${SITE.url}/`) item.priority = 1.0;
        else if (/\/(tarifs|devis|taxi-conventionne-cpam)\//.test(item.url)) item.priority = 0.9;
        else if (/\/(mentions-legales|politique-de-confidentialite)\//.test(item.url)) item.priority = 0.2;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
});
