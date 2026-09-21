/**
 * Coordonnées des points de départ et d'arrivée, indexées par slug.
 *
 * Elles servent à estimer une distance routière sans dépendre d'une API de
 * calcul d'itinéraire : le site reste 100 % statique, gratuit à héberger, et
 * le simulateur fonctionne hors ligne côté navigateur.
 *
 * Méthode : distance orthodromique (Haversine) × coefficient de sinuosité.
 * Calibré sur des trajets réels au départ de Saint-Étienne (Lyon-Saint-Exupéry
 * 1,36 · Saint-Chamond 1,33 · Paris 1,27), le coefficient est fixé dans le
 * haut de la fourchette : l'estimation doit rester une borne haute, un client
 * qui paie moins que prévu étant un client rassuré.
 */

export type Coord = { lat: number; lon: number };

export const COORDONNEES: Record<string, Coord> = {
  // Communes de départ
  'saint-etienne': { lat: 45.4397, lon: 4.3872 },
  'saint-chamond': { lat: 45.4758, lon: 4.5122 },
  firminy: { lat: 45.3878, lon: 4.2889 },
  'rive-de-gier': { lat: 45.5292, lon: 4.6161 },
  montbrison: { lat: 45.6089, lon: 4.0631 },
  'andrezieux-boutheon': { lat: 45.5236, lon: 4.2589 },
  roanne: { lat: 46.0367, lon: 4.0683 },
  'saint-priest-en-jarez': { lat: 45.4747, lon: 4.3789 },
  'le-chambon-feugerolles': { lat: 45.3928, lon: 4.3208 },
  'saint-just-saint-rambert': { lat: 45.495, lon: 4.2419 },
  'roche-la-moliere': { lat: 45.4319, lon: 4.3283 },
  sorbiers: { lat: 45.485, lon: 4.44 },
  villars: { lat: 45.4664, lon: 4.3617 },
  'la-ricamarie': { lat: 45.4111, lon: 4.3567 },
  unieux: { lat: 45.3775, lon: 4.26 },
  veauche: { lat: 45.5389, lon: 4.29 },

  // Aéroports
  'aeroport-lyon-saint-exupery': { lat: 45.7256, lon: 5.0811 },
  'aeroport-geneve': { lat: 46.2381, lon: 6.1089 },
  'aeroport-clermont-ferrand': { lat: 45.7861, lon: 3.1694 },
  'aeroport-saint-etienne-boutheon': { lat: 45.5406, lon: 4.2961 },

  // Gares
  'gare-chateaucreux': { lat: 45.4436, lon: 4.4011 },
  'gare-lyon-part-dieu': { lat: 45.7603, lon: 4.8597 },
  'gare-lyon-perrache': { lat: 45.7489, lon: 4.8264 },

  // Établissements de santé
  'chu-hopital-nord': { lat: 45.4747, lon: 4.3789 },
  'chu-bellevue': { lat: 45.4181, lon: 4.3833 },
  icloire: { lat: 45.4783, lon: 4.3811 },
  'clinique-mutualiste': { lat: 45.4472, lon: 4.3706 },
  'hopital-prive-loire': { lat: 45.4306, lon: 4.3958 },
  'hospices-civils-lyon': { lat: 45.7423, lon: 4.8781 },

  // Grandes villes
  'lyon-centre': { lat: 45.764, lon: 4.8357 },
  grenoble: { lat: 45.1885, lon: 5.7245 },
  'clermont-ferrand': { lat: 45.7772, lon: 3.087 },
  valence: { lat: 44.9333, lon: 4.8924 },
  paris: { lat: 48.8566, lon: 2.3522 },
  marseille: { lat: 43.2965, lon: 5.3698 },
  'geneve-ville': { lat: 46.2044, lon: 6.1432 },
  annonay: { lat: 45.2397, lon: 4.6706 },
  'le-puy-en-velay': { lat: 45.043, lon: 3.885 },
};

/** Coefficient de passage du vol d'oiseau à la distance routière. */
export const COEFF_ROUTE = 1.36;

const RAYON_TERRE_KM = 6371;
const rad = (deg: number) => (deg * Math.PI) / 180;

/** Distance orthodromique entre deux points, en kilomètres. */
export function haversine(a: Coord, b: Coord): number {
  const dLat = rad(b.lat - a.lat);
  const dLon = rad(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * RAYON_TERRE_KM * Math.asin(Math.sqrt(h));
}

/** Distance routière estimée entre deux points, arrondie comme le taximètre
 *  ne le fait pas : au kilomètre en ville, aux 5 km sur les longs trajets. */
export function distanceRoutiere(a: Coord, b: Coord): number {
  const km = haversine(a, b) * COEFF_ROUTE;
  return km < 50 ? Math.max(1, Math.round(km)) : Math.round(km / 5) * 5;
}

/**
 * Distance routière estimée entre deux slugs.
 * Renvoie `null` si l'un des points est inconnu, afin que l'appelant puisse
 * afficher un message plutôt qu'un chiffre faux.
 */
export function distanceEstimee(slugDepart: string, slugArrivee: string): number | null {
  const a = COORDONNEES[slugDepart];
  const b = COORDONNEES[slugArrivee];
  if (!a || !b) return null;
  return distanceRoutiere(a, b);
}
