/**
 * Liens de navigation à destination du chauffeur.
 *
 * Les adresses saisies par le client passent par la Base Adresse Nationale :
 * on dispose donc de leurs coordonnées exactes. Plutôt que de recopier une
 * adresse dans son GPS, le chauffeur clique.
 *
 * Deux usages distincts :
 *  – rejoindre le client (Waze et Google Maps naviguent depuis la position
 *    actuelle du chauffeur : c'est le cas au moment de partir en course) ;
 *  – visualiser la course entière (Google Maps seul sait tracer un itinéraire
 *    entre deux points imposés ; Waze part toujours d'où l'on se trouve).
 */

export type Coordonnees = { lat: number; lon: number };

const coord = (p: Coordonnees) => `${p.lat.toFixed(6)},${p.lon.toFixed(6)}`;

/** Navigation vers un point depuis la position actuelle — Google Maps. */
export function lienMaps(destination: Coordonnees): string {
  const params = new URLSearchParams({
    api: '1',
    destination: coord(destination),
    travelmode: 'driving',
  });
  return `https://www.google.com/maps/dir/?${params}`;
}

/** Navigation vers un point depuis la position actuelle — Waze. */
export function lienWaze(destination: Coordonnees): string {
  const params = new URLSearchParams({
    ll: coord(destination),
    navigate: 'yes',
  });
  return `https://waze.com/ul?${params}`;
}

/** Itinéraire complet entre les deux extrémités de la course — Google Maps. */
export function lienItineraire(depart: Coordonnees, arrivee: Coordonnees): string {
  const params = new URLSearchParams({
    api: '1',
    origin: coord(depart),
    destination: coord(arrivee),
    travelmode: 'driving',
  });
  return `https://www.google.com/maps/dir/?${params}`;
}

/**
 * Bloc de liens ajouté au message de réservation.
 * Volontairement en texte brut : il doit rester lisible et cliquable aussi
 * bien dans WhatsApp que dans un client de messagerie.
 */
export function blocNavigation(depart: Coordonnees, arrivee: Coordonnees): string {
  return [
    '',
    '— Navigation —',
    `Aller chercher le client (Waze) : ${lienWaze(depart)}`,
    `Aller chercher le client (Maps) : ${lienMaps(depart)}`,
    `Itinéraire complet de la course : ${lienItineraire(depart, arrivee)}`,
  ].join('\n');
}
