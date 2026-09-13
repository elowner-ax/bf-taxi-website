/**
 * Grille tarifaire réglementée des taxis de la Loire (42).
 *
 * Ce sont des tarifs MAXIMAUX : le taximètre seul fait foi à l'arrivée.
 *
 * ⚠️ SOURCE À CONFIRMER. Ces montants ont été transmis par l'exploitant mais
 * n'ont pas été relevés sur l'arrêté préfectoral lui-même. Avant toute
 * campagne publicitaire, les recouper avec la grille affichée dans le
 * véhicule : un prix faux affiché en ligne engage la responsabilité de
 * l'entreprise vis-à-vis de la DGCCRF.
 *
 * 🔁 À VÉRIFIER CHAQUE ANNÉE : un nouvel arrêté paraît généralement en début
 * d'année. Mettre à jour les montants ci-dessous et `ARRETE.date` suffit à
 * rafraîchir le simulateur, la page tarifs et les données structurées.
 */

export const ARRETE = {
  reference: 'arrêté préfectoral des tarifs de taxi',
  date: '2026-01-01',
  dateDisplay: 'en vigueur en 2026',
  departement: 'Loire (42)',
  url: 'https://www.loire.gouv.fr/Actions-de-l-Etat/Transports.-deplacements-et-securite-routiere/Taxis',
} as const;

export type TarifKey = 'A' | 'B' | 'C' | 'D';

export type Tarif = {
  key: TarifKey;
  /** Prix au kilomètre en euros. */
  parKm: number;
  label: string;
  /** Description réglementaire exacte du cas d'application. */
  conditions: string;
  /** Formulation courte pour le simulateur. */
  court: string;
};

export const TARIFS: Record<TarifKey, Tarif> = {
  A: {
    key: 'A',
    parKm: 1.10,
    label: 'Tarif A',
    conditions: 'Course aller-retour, du lundi au samedi de 7h à 19h',
    court: 'Aller-retour · jour',
  },
  B: {
    key: 'B',
    parKm: 1.65,
    label: 'Tarif B',
    conditions: 'Course aller-retour, de 19h à 7h, les dimanches et jours fériés',
    court: 'Aller-retour · nuit, dimanche et jours fériés',
  },
  C: {
    key: 'C',
    parKm: 2.20,
    label: 'Tarif C',
    conditions: 'Course aller simple avec retour à vide, du lundi au samedi de 7h à 19h',
    court: 'Aller simple · jour',
  },
  D: {
    key: 'D',
    parKm: 3.30,
    label: 'Tarif D',
    conditions: 'Course aller simple avec retour à vide, de 19h à 7h, les dimanches et jours fériés',
    court: 'Aller simple · nuit, dimanche et jours fériés',
  },
};

export const TARIF_CONSTANTS = {
  /** Montant facturé au départ, avant le premier kilomètre. */
  priseEnCharge: 3.2,
  /** Facturation à l'heure en cas d'attente ou de marche lente. */
  tarifHoraire: 28.34,
  /** Minimum de perception national, suppléments exclus. */
  minimumPerception: 8.0,
  /** Supplément applicable à partir du 4e passager adulte.
   *  TODO : relever la valeur exacte sur l'arrêté en vigueur. */
  supplement4ePassager: 1.83,
} as const;

/**
 * Distances routières usuelles depuis Saint-Étienne centre, en kilomètres.
 * Valeurs arrondies servant d'estimation : l'itinéraire réel dépend du point
 * de prise en charge exact et des conditions de circulation.
 */
export type Destination = {
  slug: string;
  label: string;
  km: number;
  /** Durée moyenne en minutes, hors heures de pointe. */
  minutes: number;
  groupe: 'aeroport' | 'gare' | 'sante' | 'ville' | 'grande-ville';
};

export const DESTINATIONS: Destination[] = [
  // Aéroports
  { slug: 'aeroport-lyon-saint-exupery', label: 'Aéroport Lyon-Saint-Exupéry (LYS)', km: 85, minutes: 65, groupe: 'aeroport' },
  { slug: 'aeroport-geneve', label: 'Aéroport de Genève (GVA)', km: 230, minutes: 160, groupe: 'aeroport' },
  { slug: 'aeroport-clermont-ferrand', label: 'Aéroport Clermont-Ferrand Auvergne (CFE)', km: 150, minutes: 110, groupe: 'aeroport' },
  { slug: 'aeroport-saint-etienne-boutheon', label: 'Aéroport Saint-Étienne — Bouthéon (EBU)', km: 17, minutes: 22, groupe: 'aeroport' },
  // Gares
  { slug: 'gare-chateaucreux', label: 'Gare de Saint-Étienne Châteaucreux', km: 3, minutes: 10, groupe: 'gare' },
  { slug: 'gare-lyon-part-dieu', label: 'Gare de Lyon Part-Dieu', km: 65, minutes: 60, groupe: 'gare' },
  { slug: 'gare-lyon-perrache', label: 'Gare de Lyon Perrache', km: 62, minutes: 58, groupe: 'gare' },
  // Établissements de santé
  { slug: 'chu-hopital-nord', label: 'CHU de Saint-Étienne — Hôpital Nord', km: 7, minutes: 15, groupe: 'sante' },
  { slug: 'chu-bellevue', label: 'CHU de Saint-Étienne — Site Bellevue', km: 4, minutes: 12, groupe: 'sante' },
  { slug: 'icloire', label: 'Institut de Cancérologie de la Loire (ICL)', km: 8, minutes: 16, groupe: 'sante' },
  { slug: 'clinique-mutualiste', label: 'Clinique Mutualiste de Saint-Étienne', km: 5, minutes: 13, groupe: 'sante' },
  { slug: 'hopital-prive-loire', label: 'Hôpital Privé de la Loire', km: 6, minutes: 14, groupe: 'sante' },
  { slug: 'hospices-civils-lyon', label: 'Hospices Civils de Lyon (HCL)', km: 62, minutes: 60, groupe: 'sante' },
  // Villes de la Loire et alentours
  { slug: 'saint-chamond', label: 'Saint-Chamond', km: 14, minutes: 18, groupe: 'ville' },
  { slug: 'firminy', label: 'Firminy', km: 18, minutes: 22, groupe: 'ville' },
  { slug: 'rive-de-gier', label: 'Rive-de-Gier', km: 27, minutes: 28, groupe: 'ville' },
  { slug: 'montbrison', label: 'Montbrison', km: 38, minutes: 38, groupe: 'ville' },
  { slug: 'andrezieux-boutheon', label: 'Andrézieux-Bouthéon', km: 15, minutes: 20, groupe: 'ville' },
  { slug: 'roanne', label: 'Roanne', km: 88, minutes: 70, groupe: 'ville' },
  { slug: 'annonay', label: 'Annonay', km: 50, minutes: 50, groupe: 'ville' },
  { slug: 'le-puy-en-velay', label: 'Le Puy-en-Velay', km: 78, minutes: 75, groupe: 'ville' },
  // Grandes villes
  { slug: 'lyon-centre', label: 'Lyon centre', km: 63, minutes: 60, groupe: 'grande-ville' },
  { slug: 'grenoble', label: 'Grenoble', km: 150, minutes: 110, groupe: 'grande-ville' },
  { slug: 'clermont-ferrand', label: 'Clermont-Ferrand', km: 145, minutes: 105, groupe: 'grande-ville' },
  { slug: 'valence', label: 'Valence', km: 120, minutes: 90, groupe: 'grande-ville' },
  { slug: 'paris', label: 'Paris', km: 520, minutes: 300, groupe: 'grande-ville' },
  { slug: 'marseille', label: 'Marseille', km: 350, minutes: 210, groupe: 'grande-ville' },
  { slug: 'geneve-ville', label: 'Genève (ville)', km: 225, minutes: 155, groupe: 'grande-ville' },
];

export const GROUPES_DESTINATION: Record<Destination['groupe'], string> = {
  aeroport: 'Aéroports',
  gare: 'Gares',
  sante: 'Établissements de santé',
  ville: 'Loire et alentours',
  'grande-ville': 'Grandes villes',
};

/**
 * Estime le prix d'une course selon la grille préfectorale.
 * Le résultat est indicatif : seul le taximètre fait foi.
 */
export function estimerCourse(options: {
  km: number;
  tarif: TarifKey;
  passagers?: number;
  /** Minutes d'attente sur place facturées au tarif horaire. */
  attenteMinutes?: number;
}): { total: number; detail: { label: string; montant: number }[] } {
  const { km, tarif, passagers = 1, attenteMinutes = 0 } = options;
  const grille = TARIFS[tarif];

  const distance = Math.max(0, km) * grille.parKm;
  const detail: { label: string; montant: number }[] = [
    { label: 'Prise en charge', montant: TARIF_CONSTANTS.priseEnCharge },
    { label: `${km} km au ${grille.label} (${grille.parKm.toFixed(2)} €/km)`, montant: distance },
  ];

  let total = TARIF_CONSTANTS.priseEnCharge + distance;

  if (attenteMinutes > 0) {
    const attente = (attenteMinutes / 60) * TARIF_CONSTANTS.tarifHoraire;
    detail.push({ label: `${attenteMinutes} min d'attente`, montant: attente });
    total += attente;
  }

  // Le minimum de perception s'applique avant les suppléments.
  if (total < TARIF_CONSTANTS.minimumPerception) {
    detail.push({
      label: 'Minimum de perception appliqué',
      montant: TARIF_CONSTANTS.minimumPerception - total,
    });
    total = TARIF_CONSTANTS.minimumPerception;
  }

  if (passagers >= 4) {
    const sup = TARIF_CONSTANTS.supplement4ePassager * (passagers - 3);
    detail.push({ label: `Supplément passagers (à partir du 4e)`, montant: sup });
    total += sup;
  }

  return { total: Math.round(total * 100) / 100, detail };
}

/** Formate un montant en euros, format français. */
export function euros(montant: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(montant);
}

/**
 * Détermine si une prise en charge relève des tarifs de nuit (B ou D).
 *
 * L'arrêté distingue le jour — du lundi au samedi, de 7h à 19h — de la nuit,
 * des dimanches et des jours fériés. Le client n'a donc pas à choisir : il
 * suffit de connaître l'heure de prise en charge.
 */
export function estTarifNuit(date: Date): boolean {
  const heure = date.getHours();
  if (heure < 7 || heure >= 19) return true;
  if (date.getDay() === 0) return true; // dimanche
  return estJourFerie(date);
}

/** Dimanche de Pâques, par l'algorithme de Meeus/Jones/Butcher. */
function paques(annee: number): Date {
  const a = annee % 19;
  const b = Math.floor(annee / 100);
  const c = annee % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mois = Math.floor((h + l - 7 * m + 114) / 31);
  const jour = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(annee, mois - 1, jour);
}

/** Les onze jours fériés légaux en France métropolitaine. */
export function estJourFerie(date: Date): boolean {
  const annee = date.getFullYear();
  const jour = (d: Date) => `${d.getMonth() + 1}-${d.getDate()}`;

  const p = paques(annee);
  const decale = (n: number) => {
    const d = new Date(p);
    d.setDate(d.getDate() + n);
    return jour(d);
  };

  const feries = new Set([
    '1-1', // Jour de l'an
    '5-1', // Fête du travail
    '5-8', // Victoire 1945
    '7-14', // Fête nationale
    '8-15', // Assomption
    '11-1', // Toussaint
    '11-11', // Armistice 1918
    '12-25', // Noël
    decale(1), // Lundi de Pâques
    decale(39), // Ascension
    decale(50), // Lundi de Pentecôte
  ]);

  return feries.has(jour(date));
}

/** Tarif applicable selon le moment et le type de course. */
export function tarifApplicable(date: Date, allerRetour: boolean): TarifKey {
  const nuit = estTarifNuit(date);
  if (allerRetour) return nuit ? 'B' : 'A';
  return nuit ? 'D' : 'C';
}
