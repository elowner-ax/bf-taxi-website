/**
 * Source de vérité unique du site : coordonnées, NAP (Name / Address / Phone),
 * horaires et véhicules. Toute donnée affichée plus d'une fois vit ici afin de
 * garantir la cohérence NAP exigée par le référencement local.
 *
 * ⚠️ À COMPLÉTER AVANT MISE EN LIGNE : les champs marqués TODO doivent être
 * repris à l'identique depuis la fiche Google Business Profile et le Kbis.
 */

export const SITE = {
  /** Raison sociale commerciale affichée partout. */
  name: 'BF Taxi',
  /** Dénomination légale — TODO : reprendre l'intitulé exact du Kbis. */
  legalName: 'BF Taxi', // TODO : reprendre l'intitulé exact du Kbis.
  url: 'https://bftaxi.fr',
  locale: 'fr_FR',
  lang: 'fr',
  tagline: 'Taxi à Saint-Étienne et dans toute la Loire — toutes courses, conventionné CPAM',
  /** BF = Baroutile Family. Le sigle n'est pas parlant seul : il est toujours
   *  développé la première fois qu'il apparaît sur une page. */
  slogan: 'Baroutile Family Taxi — une entreprise familiale à votre service',
  sloganCourt: 'Une entreprise familiale à votre service',
  /** Baseline courte réutilisée en meta description et en partage social. */
  shortDescription:
    "Taxi à Saint-Étienne pour tous vos trajets : ville, gares, aéroports, longue distance — et transport médical conventionné CPAM. Tesla Model 3 et van Mercedes Classe V 7 places, 7j/7.",
  founded: '2019', // TODO : année réelle de création.
} as const;

export const CONTACT = {
  /** Format international, utilisé pour tel: et les données structurées. */
  phone: '+33782333445',
  /** Format d'affichage français. */
  phoneDisplay: '07 82 33 34 45',
  /** wa.me attend le numéro sans "+" ni séparateur. */
  whatsapp: '33782333445',
  email: 'contact@bftaxi.fr', // TODO : confirmer l'adresse e-mail professionnelle.
  /** Lien court vers la fiche Google Business Profile (avis + itinéraire). */
  googleBusiness: 'https://share.google/tkLzjoax13qQULyay',
} as const;

export const ADDRESS = {
  /** TODO : adresse exacte de la fiche Google Business Profile. */
  street: '',
  city: 'Saint-Étienne',
  postalCode: '42000',
  region: 'Auvergne-Rhône-Alpes',
  department: 'Loire',
  departmentCode: '42',
  country: 'FR',
  /** Coordonnées du centre de Saint-Étienne — TODO : ajuster sur l'adresse réelle. */
  latitude: 45.4397,
  longitude: 4.3872,
} as const;

/** Ouvert 24h/24, 7j/7 : exprimé au format attendu par schema.org. */
export const OPENING_HOURS = {
  human: '24h/24 — 7j/7, jours fériés inclus',
  humanShort: '24h/24, 7j/7',
  schema: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
} as const;

export type Vehicle = {
  slug: string;
  name: string;
  model: string;
  seats: number;
  luggage: string;
  highlights: string[];
  description: string;
  bestFor: string[];
};

export const VEHICLES: Vehicle[] = [
  {
    slug: 'tesla-model-3',
    name: 'Tesla Model 3',
    model: 'Berline blanche',
    seats: 4,
    luggage: '2 valises + 2 bagages cabine',
    highlights: [
      '100 % électrique, zéro émission',
      'Habitacle silencieux et climatisé',
      'Wi-Fi et recharge USB-C à bord',
      'Sièges chauffants à l’avant comme à l’arrière',
    ],
    description:
      "Notre berline Tesla Model 3 blanche assure les trajets quotidiens, les transports médicaux assis et les déplacements professionnels. Le silence de la motorisation électrique et la douceur de conduite en font un véhicule particulièrement apprécié des patients fatigués et des voyageurs d'affaires.",
    bestFor: ['Transport médical assis', 'Déplacement professionnel', 'Transfert gare', 'Trajet du quotidien'],
  },
  {
    slug: 'mercedes-classe-v',
    name: 'Mercedes Classe V',
    model: 'Van à portes coulissantes',
    seats: 7,
    luggage: '7 à 8 valises + bagages cabine',
    highlights: [
      'Grand volume de coffre, idéal aéroport',
      'Accès facilité par portes coulissantes',
      'Sièges individuels et grand espace aux jambes',
      'Climatisation multizone',
    ],
    description:
      "Le van Mercedes Classe V accueille familles, groupes et équipes avec leurs bagages. Ses portes coulissantes et sa hauteur de seuil réduite facilitent la montée à bord des personnes âgées ou à mobilité réduite.",
    bestFor: ['Transfert aéroport en groupe', 'Famille avec bagages', 'Séminaire et déplacement pro', 'Mariage et événement'],
  },
];

/**
 * Capacités retenues pour orienter vers le bon véhicule.
 * Un client qui part en vacances à quatre avec quatre valises ne rentre pas
 * dans la berline : mieux vaut le lui dire au moment de la réservation que
 * de le découvrir sur le trottoir.
 */
export const CAPACITES = {
  berline: { passagers: 4, bagages: 2 },
  van: { passagers: 7, bagages: 8 },
} as const;

/** Véhicule adapté à un nombre de passagers et de bagages. */
export function vehiculeConseille(passagers: number, bagages: number): 'berline' | 'van' {
  const { berline } = CAPACITES;
  return passagers > berline.passagers || bagages > berline.bagages ? 'van' : 'berline';
}

/** Arguments de réassurance affichés sur la page d'accueil. */
export const TRUST_POINTS = [
  {
    title: 'Toutes les courses',
    text: 'En ville, en soirée, pour un rendez-vous ou une gare : le taxi tout simplement, sans prescription ni longue réservation.',
    icon: 'car',
  },
  {
    title: 'Disponible 24h/24',
    text: 'Réservation la veille ou prise en charge en urgence, 7j/7, week-ends et jours fériés inclus.',
    icon: 'clock',
  },
  {
    title: 'Toutes distances',
    text: "Saint-Étienne, la Loire et toute la France. Aéroports de Lyon, Genève et Clermont-Ferrand au forfait.",
    icon: 'route',
  },
  {
    title: 'Conventionné CPAM',
    text: "Pour vos trajets médicaux : pris en charge par l'Assurance Maladie, sans avance de frais avec votre prescription.",
    icon: 'shield',
  },
] as const;
