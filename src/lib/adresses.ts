/**
 * Autocomplétion d'adresses via la Base Adresse Nationale.
 *
 * https://api-adresse.data.gouv.fr — service public, gratuit, sans clé ni
 * quota déclaré, CORS ouvert. C'est la raison de ce choix plutôt que Google
 * Places : pas de facturation, pas de clé à protéger dans un site statique, et
 * aucune donnée du visiteur transmise à un acteur publicitaire — ce qui
 * permet au site de rester sans bandeau cookies.
 *
 * ⚠️ Non vérifié en conditions réelles depuis l'environnement de
 * développement, dont le proxy bloque les domaines externes. Le contrat
 * ci-dessous suit la documentation publique ; à contrôler une fois le site en
 * ligne. En cas d'échec de l'API, le champ reste une saisie libre et le
 * visiteur est invité à demander un devis : le simulateur ne bloque jamais.
 */

export const API_ADRESSE = 'https://api-adresse.data.gouv.fr/search/';

/** Centre de Saint-Étienne : biaise les résultats vers le secteur desservi. */
export const BIAIS_GEO = { lat: 45.4397, lon: 4.3872 };

export type Suggestion = {
  /** Libellé complet, ex. « 12 Rue de la Paix 42000 Saint-Étienne ». */
  label: string;
  ville: string;
  codePostal: string;
  lat: number;
  lon: number;
};

/**
 * URL de recherche sans la requête, biaisée vers Saint-Étienne.
 * L'appelant ajoute `&q=<texte encodé>` : le paramètre doit venir en dernier,
 * sinon le texte saisi se retrouve concaténé au paramètre précédent.
 */
export function urlRechercheBase(limite = 6): string {
  const params = new URLSearchParams({
    limit: String(limite),
    autocomplete: '1',
    lat: String(BIAIS_GEO.lat),
    lon: String(BIAIS_GEO.lon),
  });
  return `${API_ADRESSE}?${params}&q=`;
}

/**
 * Convertit la réponse GeoJSON en suggestions exploitables.
 * Tolérante : une réponse de forme inattendue donne une liste vide plutôt
 * qu'une exception, afin que le champ reste utilisable.
 */
export function lireReponse(json: unknown): Suggestion[] {
  const features = (json as { features?: unknown[] })?.features;
  if (!Array.isArray(features)) return [];

  return features.flatMap((f) => {
    const feature = f as {
      properties?: { label?: string; city?: string; postcode?: string };
      geometry?: { coordinates?: number[] };
    };
    const props = feature.properties;
    const coords = feature.geometry?.coordinates;
    if (!props?.label || !Array.isArray(coords) || coords.length < 2) return [];

    const [lon, lat] = coords;
    if (typeof lon !== 'number' || typeof lat !== 'number') return [];

    return [
      {
        label: props.label,
        ville: props.city ?? '',
        codePostal: props.postcode ?? '',
        lat,
        lon,
      },
    ];
  });
}
