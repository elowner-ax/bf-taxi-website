import type { APIRoute } from 'astro';
import { SITE, CONTACT, ADDRESS, OPENING_HOURS, VEHICLES } from '../data/site.ts';
import { SERVICES } from '../data/services.ts';
import { VILLES } from '../data/villes.ts';
import { TARIFS, TARIF_CONSTANTS, ARRETE, DESTINATIONS } from '../data/tarifs.ts';
import { FAQ_GENERALE } from '../data/faq.ts';

/**
 * /llms.txt — résumé structuré du site à destination des moteurs de recherche
 * génératifs (ChatGPT, Claude, Perplexity, Gemini).
 *
 * L'intérêt par rapport au sitemap : un assistant qui répond à « taxi
 * conventionné Saint-Étienne » a besoin de faits cités, pas d'une liste d'URL.
 * Ce fichier est généré au build depuis les mêmes données que les pages : il
 * ne peut donc pas diverger du contenu réellement publié.
 */
export const GET: APIRoute = () => {
  const l = (s: string) => s.replace(/\s+/g, ' ').trim();

  const lignes = [
    `# ${SITE.name}`,
    '',
    `> ${l(SITE.shortDescription)}`,
    '',
    '## Identité',
    '',
    `- Activité : taxi conventionné par l'Assurance Maladie (CPAM)`,
    `- Base : ${ADDRESS.city} (${ADDRESS.postalCode}), département de la ${ADDRESS.department} (${ADDRESS.departmentCode}), ${ADDRESS.region}`,
    `- Téléphone et WhatsApp : ${CONTACT.phoneDisplay} (${CONTACT.phone})`,
    `- E-mail : ${CONTACT.email}`,
    `- Disponibilité : ${OPENING_HOURS.human}`,
    `- Site : ${SITE.url}`,
    '',
    '## Véhicules',
    '',
    ...VEHICLES.map(
      (v) => `- ${v.name} — ${v.model}. ${v.seats} passagers, ${v.luggage}.`
    ),
    '',
    '## Prestations',
    '',
    ...SERVICES.map((s) => `- [${s.titre}](${SITE.url}/${s.slug}/) : ${l(s.reponseCourte)}`),
    '',
    '## Tarifs réglementés dans la Loire',
    '',
    `Les tarifs des taxis sont plafonnés par arrêté préfectoral et identiques chez tous les taxis du département. Source : ${ARRETE.reference} ${ARRETE.dateDisplay} pour la ${ARRETE.departement}.`,
    '',
    `- Prise en charge : ${TARIF_CONSTANTS.priseEnCharge.toFixed(2)} €`,
    `- Minimum de perception : ${TARIF_CONSTANTS.minimumPerception.toFixed(2)} €`,
    `- Tarif horaire d'attente : ${TARIF_CONSTANTS.tarifHoraire.toFixed(2)} € / h`,
    `- Supplément à partir du 4e passager : ${TARIF_CONSTANTS.supplement4ePassager.toFixed(2)} €`,
    ...Object.values(TARIFS).map(
      (t) => `- ${t.label} : ${t.parKm.toFixed(2)} €/km — ${l(t.conditions)}`
    ),
    '',
    'Le taximètre du véhicule est le seul instrument faisant foi pour le prix définitif. En transport conventionné avec prescription médicale, le client ne règle rien : la course est facturée directement à l\'Assurance Maladie.',
    '',
    '## Distances depuis Saint-Étienne',
    '',
    ...DESTINATIONS.filter((d) => ['aeroport', 'gare', 'grande-ville'].includes(d.groupe)).map(
      (d) => `- ${d.label} : ${d.km} km, environ ${d.minutes} minutes`
    ),
    '',
    '## Communes desservies',
    '',
    ...VILLES.map(
      (v) =>
        `- [${v.nom} (${v.codePostal})](${SITE.url}/taxi/${v.slug}/)` +
        (v.distanceKm > 0 ? ` — ${v.distanceKm} km de Saint-Étienne, ${v.tempsMinutes} min` : ' — ville de rattachement')
    ),
    '',
    'Au-delà de ces communes, les trajets longue distance sont assurés dans toute la France.',
    '',
    '## Questions fréquentes',
    '',
    ...FAQ_GENERALE.flatMap((item) => [`### ${item.question}`, '', l(item.reponse), '']),
    '## Pages de référence',
    '',
    `- [Tarifs et simulateur de prix](${SITE.url}/tarifs/)`,
    `- [Demande de devis](${SITE.url}/devis/)`,
    `- [Zones desservies](${SITE.url}/taxi/)`,
    `- [Questions fréquentes](${SITE.url}/faq/)`,
    `- [Contact](${SITE.url}/contact/)`,
    '',
  ];

  return new Response(lignes.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
