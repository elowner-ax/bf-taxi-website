/**
 * Générateurs de données structurées JSON-LD (schema.org).
 *
 * Deux objectifs distincts :
 *  1. SEO classique — éligibilité aux résultats enrichis Google (FAQ, fil
 *     d'Ariane, entreprise locale).
 *  2. GEO (Generative Engine Optimization) — donner aux moteurs génératifs des
 *     faits explicites et attribuables plutôt qu'à déduire du texte brut.
 *
 * Règle : ne jamais déclarer une propriété dont la valeur n'est pas vérifiée.
 * Un `aggregateRating` inventé est une manipulation d'avis, sanctionnée par
 * Google et interdite par la réglementation sur les avis en ligne.
 */

import { SITE, CONTACT, ADDRESS, OPENING_HOURS } from '../data/site.ts';
import { TARIFS, TARIF_CONSTANTS, ARRETE } from '../data/tarifs.ts';
import { VILLES } from '../data/villes.ts';

const ID_ENTREPRISE = `${SITE.url}/#entreprise`;
const ID_SITE = `${SITE.url}/#site`;

/** Communes desservies, exposées en `areaServed`. */
function zonesDesservies() {
  const communes = VILLES.map((v) => ({
    '@type': 'City',
    name: v.nom,
    address: {
      '@type': 'PostalAddress',
      postalCode: v.codePostal,
      addressLocality: v.nom,
      addressCountry: 'FR',
    },
  }));

  return [
    {
      '@type': 'AdministrativeArea',
      name: 'Loire (42)',
      address: { '@type': 'PostalAddress', addressRegion: 'Loire', addressCountry: 'FR' },
    },
    ...communes,
  ];
}

/** Catalogue de prestations, repris depuis les pages de services. */
function catalogue(services: { slug: string; titre: string; reponseCourte: string }[]) {
  return {
    '@type': 'OfferCatalog',
    name: 'Prestations BF Taxi',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.titre,
        description: s.reponseCourte,
        url: `${SITE.url}/${s.slug}/`,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        description: `Tarifs réglementés par l'${ARRETE.reference} du département de la Loire`,
      },
    })),
  };
}

/**
 * Entité principale : le service de taxi.
 * `TaxiService` est le type schema.org dédié ; on l'accompagne de `LocalBusiness`
 * pour couvrir les consommateurs qui ne reconnaissent que ce type générique.
 */
export function schemaEntreprise(
  services: { slug: string; titre: string; reponseCourte: string }[] = []
) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TaxiService', 'LocalBusiness'],
    '@id': ID_ENTREPRISE,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.shortDescription,
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE.url}/og-image.png`,
    logo: `${SITE.url}/logo.png`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Carte bancaire, Espèces, Virement, Tiers payant CPAM',
    address: {
      '@type': 'PostalAddress',
      ...(ADDRESS.street ? { streetAddress: ADDRESS.street } : {}),
      addressLocality: ADDRESS.city,
      postalCode: ADDRESS.postalCode,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ADDRESS.latitude,
      longitude: ADDRESS.longitude,
    },
    /** Rayon d'intervention habituel autour de Saint-Étienne. */
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: ADDRESS.latitude,
        longitude: ADDRESS.longitude,
      },
      geoRadius: '60000',
    },
    areaServed: zonesDesservies(),
    openingHoursSpecification: OPENING_HOURS.schema,
    sameAs: [CONTACT.googleBusiness],
    knowsLanguage: ['fr-FR'],
    ...(services.length ? { hasOfferCatalog: catalogue(services) } : {}),
    // TODO après collecte d'avis réels : ajouter `aggregateRating` en reprenant
    // exactement la note et le nombre d'avis de la fiche Google Business.
    // Ne jamais renseigner ce champ avec des valeurs estimées.
  };
}

export function schemaSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ID_SITE,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': ID_ENTREPRISE },
  };
}

export type FilAriane = { nom: string; url: string }[];

export function schemaFilAriane(elements: FilAriane) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elements.map((el, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: el.nom,
      item: `${SITE.url}${el.url}`,
    })),
  };
}

export function schemaFaq(faq: { question: string; reponse: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.reponse },
    })),
  };
}

export function schemaService(service: {
  slug: string;
  titre: string;
  reponseCourte: string;
  categorie: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.titre,
    description: service.reponseCourte,
    url: `${SITE.url}/${service.slug}/`,
    serviceType: service.categorie === 'medical' ? 'Transport médical assis conventionné' : 'Transport de personnes',
    provider: { '@id': ID_ENTREPRISE },
    areaServed: zonesDesservies(),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: CONTACT.phone, contactType: 'reservations' },
      serviceUrl: `${SITE.url}/devis/`,
    },
  };
}

/** Grille tarifaire publiée, exposée de façon lisible par les moteurs. */
export function schemaTarifs() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: `Tarifs taxi réglementés — ${ARRETE.departement}`,
    description: `Tarifs maximaux fixés par l'${ARRETE.reference} du ${ARRETE.dateDisplay}. Prise en charge ${TARIF_CONSTANTS.priseEnCharge.toFixed(2)} €, minimum de perception ${TARIF_CONSTANTS.minimumPerception.toFixed(2)} €, tarif horaire d'attente ${TARIF_CONSTANTS.tarifHoraire.toFixed(2)} €. Tarif A ${TARIFS.A.parKm.toFixed(2)} €/km, tarif B ${TARIFS.B.parKm.toFixed(2)} €/km, tarif C ${TARIFS.C.parKm.toFixed(2)} €/km, tarif D ${TARIFS.D.parKm.toFixed(2)} €/km.`,
    priceCurrency: 'EUR',
    valueAddedTaxIncluded: true,
  };
}

/** Page locale : rattache explicitement le contenu à une commune. */
export function schemaVille(ville: { nom: string; slug: string; codePostal: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Taxi conventionné à ${ville.nom}`,
    provider: { '@id': ID_ENTREPRISE },
    url: `${SITE.url}/taxi/${ville.slug}/`,
    areaServed: {
      '@type': 'City',
      name: ville.nom,
      address: {
        '@type': 'PostalAddress',
        postalCode: ville.codePostal,
        addressLocality: ville.nom,
        addressCountry: 'FR',
      },
    },
  };
}
