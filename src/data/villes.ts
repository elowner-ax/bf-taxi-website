/**
 * Zones desservies — une page par commune, générée depuis ces données.
 *
 * Chaque entrée doit rester RÉDACTIONNELLEMENT UNIQUE : `intro`, `contexte` et
 * `specificite` ne sont jamais partagés entre deux communes, afin d'éviter le
 * contenu dupliqué qui ferait désindexer les pages locales.
 */

export type Ville = {
  slug: string;
  nom: string;
  /** Nom avec article, pour les tournures « à », « au », « aux ». */
  nomAvecPreposition: string;
  codePostal: string;
  population: string;
  /** Distance routière depuis Saint-Étienne centre, en km. */
  distanceKm: number;
  /** Temps de trajet moyen depuis Saint-Étienne, en minutes. */
  tempsMinutes: number;
  intro: string;
  contexte: string;
  specificite: string;
  etablissementsSante: string[];
  communesProches: string[];
  /** Destinations les plus demandées au départ de cette commune. */
  trajetsFrequents: { destination: string; km: number }[];
};

export const VILLES: Ville[] = [
  {
    slug: 'saint-etienne',
    nom: 'Saint-Étienne',
    nomAvecPreposition: 'à Saint-Étienne',
    codePostal: '42000',
    population: '172 000 habitants',
    distanceKm: 0,
    tempsMinutes: 0,
    intro:
      "Saint-Étienne est notre base quotidienne : de Bellevue à La Terrasse, de Carnot à Montreynaud, nous connaissons les accès, les sens uniques et les zones de dépose des principaux établissements de la ville.",
    contexte:
      "La configuration de Saint-Étienne — une vallée étirée du nord au sud, un hypercentre à circulation restreinte et une ligne de tramway qui structure l'axe principal — rend les temps de trajet très variables selon l'heure. Nous anticipons ces contraintes : un départ vers la gare de Châteaucreux depuis le quartier Monthieu ne se planifie pas comme un départ depuis Terrenoire.",
    specificite:
      "Pour les rendez-vous médicaux, nous déposons directement à l'entrée des services au CHU Nord, à Bellevue, à l'Institut de Cancérologie de la Loire et à la Clinique Mutualiste, et non sur le parking visiteurs. Pour les trains, nous surveillons l'horaire réel de votre départ à Châteaucreux afin d'ajuster l'heure de prise en charge.",
    etablissementsSante: [
      'CHU de Saint-Étienne — Hôpital Nord',
      'CHU de Saint-Étienne — Site Bellevue',
      'Institut de Cancérologie de la Loire (ICL)',
      'Clinique Mutualiste de Saint-Étienne',
      'Hôpital Privé de la Loire',
    ],
    communesProches: ['Saint-Priest-en-Jarez', 'Villars', 'Saint-Genest-Lerpt', 'La Talaudière', 'Sorbiers'],
    trajetsFrequents: [
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 85 },
      { destination: 'Gare de Lyon Part-Dieu', km: 65 },
      { destination: 'CHU Hôpital Nord', km: 7 },
    ],
  },
  {
    slug: 'saint-chamond',
    nom: 'Saint-Chamond',
    nomAvecPreposition: 'à Saint-Chamond',
    codePostal: '42400',
    population: '35 000 habitants',
    distanceKm: 14,
    tempsMinutes: 18,
    intro:
      "Deuxième ville du secteur stéphanois, Saint-Chamond est desservie plusieurs fois par jour, aussi bien pour les transports médicaux vers le CHU que pour les départs vers l'aéroport de Lyon par l'A47.",
    contexte:
      "Située dans la vallée du Gier, Saint-Chamond bénéficie d'un accès direct à l'A47, ce qui la place à moins de vingt minutes de Saint-Étienne et à une heure de l'aéroport Lyon-Saint-Exupéry. C'est aussi un point de départ fréquent vers les Hospices Civils de Lyon pour les patients suivis en CHU lyonnais.",
    specificite:
      "Les patients dialysés de Saint-Chamond représentent une part importante de nos courses conventionnées : nous organisons des tournées régulières, à horaires fixes, avec le même chauffeur d'une séance à l'autre.",
    etablissementsSante: [
      'Hôpital du Gier',
      'Centre hospitalier de Saint-Chamond',
      'Cabinets médicaux du centre-ville',
    ],
    communesProches: ['L’Horme', 'Izieux', 'Saint-Martin-en-Coailleux', 'La Grand-Croix', 'Lorette'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 16 },
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 72 },
      { destination: 'Hospices Civils de Lyon', km: 50 },
    ],
  },
  {
    slug: 'firminy',
    nom: 'Firminy',
    nomAvecPreposition: 'à Firminy',
    codePostal: '42700',
    population: '17 000 habitants',
    distanceKm: 18,
    tempsMinutes: 22,
    intro:
      "Firminy et l'Ondaine font partie de nos secteurs réguliers, avec des prises en charge à domicile pour les consultations stéphanoises et les hospitalisations programmées.",
    contexte:
      "La vallée de l'Ondaine est excentrée par rapport aux grands plateaux techniques : la plupart des examens et interventions se font à Saint-Étienne, ce qui génère des allers-retours fréquents. Nous assurons ces liaisons en transport conventionné dès lors que vous disposez d'une prescription médicale de transport.",
    specificite:
      "Firminy accueille le site Le Corbusier, classé au patrimoine mondial de l'UNESCO : nous prenons aussi en charge des visiteurs depuis la gare de Châteaucreux ou l'aéroport de Lyon, souvent en van pour les groupes.",
    etablissementsSante: ['Centre hospitalier Le Corbusier', 'Cabinets et laboratoires du centre-ville'],
    communesProches: ['Le Chambon-Feugerolles', 'Unieux', 'Fraisses', 'Roche-la-Molière'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 20 },
      { destination: 'Institut de Cancérologie de la Loire', km: 22 },
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 100 },
    ],
  },
  {
    slug: 'rive-de-gier',
    nom: 'Rive-de-Gier',
    nomAvecPreposition: 'à Rive-de-Gier',
    codePostal: '42800',
    population: '15 000 habitants',
    distanceKm: 27,
    tempsMinutes: 28,
    intro:
      "À mi-chemin entre Saint-Étienne et Lyon, Rive-de-Gier est un secteur où nous intervenons autant pour des transports médicaux que pour des transferts vers l'aéroport Lyon-Saint-Exupéry.",
    contexte:
      "La position de Rive-de-Gier sur l'axe A47 en fait une commune tournée vers les deux métropoles : certains patients sont suivis à Saint-Étienne, d'autres à Lyon. Nous desservons les deux, avec la même prise en charge conventionnée.",
    specificite:
      "Depuis Rive-de-Gier, l'aéroport Lyon-Saint-Exupéry est à environ cinquante minutes : c'est l'une des communes de la Loire les mieux placées pour un transfert aéroport au forfait, y compris pour les vols très matinaux.",
    etablissementsSante: ['Hôpital du Gier — site de Rive-de-Gier', 'Pôle santé de la vallée du Gier'],
    communesProches: ['Saint-Martin-la-Plaine', 'Châteauneuf', 'Tartaras', 'Genilac'],
    trajetsFrequents: [
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 60 },
      { destination: 'Hospices Civils de Lyon', km: 38 },
      { destination: 'CHU de Saint-Étienne', km: 29 },
    ],
  },
  {
    slug: 'montbrison',
    nom: 'Montbrison',
    nomAvecPreposition: 'à Montbrison',
    codePostal: '42600',
    population: '16 000 habitants',
    distanceKm: 38,
    tempsMinutes: 38,
    intro:
      "Sous-préfecture de la Loire au pied des monts du Forez, Montbrison est desservie sur réservation, en particulier pour les rendez-vous hospitaliers stéphanois et les liaisons vers la gare de Châteaucreux.",
    contexte:
      "La plaine du Forez est peu desservie en transports en commun aux horaires très matinaux ou en soirée. Pour un examen à jeun au CHU à 7h30 ou un retour d'hospitalisation tardif, le taxi conventionné reste souvent la seule option praticable.",
    specificite:
      "Nous demandons simplement une réservation la veille pour Montbrison et les communes du Forez, le temps de trajet à vide devant être intégré à notre planning de la journée.",
    etablissementsSante: ['Centre hospitalier du Forez — site de Montbrison', 'Maison de santé du Forez'],
    communesProches: ['Savigneux', 'Champdieu', 'Saint-Romain-le-Puy', 'Montverdun'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 40 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 38 },
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 95 },
    ],
  },
  {
    slug: 'andrezieux-boutheon',
    nom: 'Andrézieux-Bouthéon',
    nomAvecPreposition: 'à Andrézieux-Bouthéon',
    codePostal: '42160',
    population: '10 000 habitants',
    distanceKm: 15,
    tempsMinutes: 20,
    intro:
      "Andrézieux-Bouthéon accueille l'aéroport Saint-Étienne — Loire et une importante zone d'activités : nous y intervenons pour les vols charters, les déplacements professionnels et les transports médicaux.",
    contexte:
      "L'aéroport de Bouthéon concentre surtout des vols saisonniers et des charters vers le Maghreb et le sud de l'Europe. Les horaires de convocation, souvent très tôt le matin, tombent en dehors des créneaux de transport en commun : nous assurons les prises en charge dès 3h du matin sur réservation.",
    specificite:
      "Pour les familles partant en charter avec de nombreux bagages, le van Mercedes Classe V est le véhicule adapté : jusqu'à sept passagers et l'espace de coffre correspondant.",
    etablissementsSante: ['Centre médical d’Andrézieux', 'Laboratoires de la zone Bouthéon'],
    communesProches: ['Veauche', 'Saint-Just-Saint-Rambert', 'La Fouillouse', 'Bonson'],
    trajetsFrequents: [
      { destination: 'Aéroport Saint-Étienne — Bouthéon', km: 3 },
      { destination: 'CHU de Saint-Étienne', km: 17 },
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 90 },
    ],
  },
  {
    slug: 'roanne',
    nom: 'Roanne',
    nomAvecPreposition: 'à Roanne',
    codePostal: '42300',
    population: '35 000 habitants',
    distanceKm: 88,
    tempsMinutes: 70,
    intro:
      "Nous desservons Roanne et le Roannais sur réservation, principalement pour les transferts longue distance, les liaisons aéroport et les transports médicaux vers Saint-Étienne ou Lyon.",
    contexte:
      "Roanne est le second pôle urbain de la Loire, mais séparé de Saint-Étienne par près de quatre-vingt-dix kilomètres. Les patients roannais orientés vers un plateau technique stéphanois ou lyonnais ont besoin d'un transport organisé à l'avance : c'est typiquement une course conventionnée longue distance.",
    specificite:
      "Pour le Roannais, la réservation se fait au minimum vingt-quatre heures à l'avance. Les trajets vers les aéroports de Lyon et de Clermont-Ferrand sont proposés au forfait, communiqué avant le départ.",
    etablissementsSante: ['Centre hospitalier de Roanne', 'Clinique du Renaison', 'Institut de Cancérologie'],
    communesProches: ['Riorges', 'Mably', 'Le Coteau', 'Villerest'],
    trajetsFrequents: [
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 95 },
      { destination: 'CHU de Saint-Étienne', km: 90 },
      { destination: 'Clermont-Ferrand', km: 100 },
    ],
  },
  {
    slug: 'saint-priest-en-jarez',
    nom: 'Saint-Priest-en-Jarez',
    nomAvecPreposition: 'à Saint-Priest-en-Jarez',
    codePostal: '42270',
    population: '6 000 habitants',
    distanceKm: 6,
    tempsMinutes: 14,
    intro:
      "Commune du CHU Nord et de l'Institut de Cancérologie de la Loire, Saint-Priest-en-Jarez est la destination médicale la plus fréquente de notre activité conventionnée.",
    contexte:
      "Le pôle hospitalier de Saint-Priest-en-Jarez draine des patients de tout le département. Nous y déposons quotidiennement, en connaissant les entrées propres à chaque service : consultations externes, hôpital de jour, dialyse, imagerie.",
    specificite:
      "Pour l'Institut de Cancérologie de la Loire, nous adaptons le véhicule à l'état du patient après la séance : la Tesla Model 3, silencieuse et sans à-coups, est particulièrement indiquée pour les retours de chimiothérapie.",
    etablissementsSante: [
      'CHU de Saint-Étienne — Hôpital Nord',
      'Institut de Cancérologie de la Loire — Lucien Neuwirth',
    ],
    communesProches: ['Saint-Étienne', 'Villars', 'La Fouillouse', 'L’Étrat'],
    trajetsFrequents: [
      { destination: 'CHU Hôpital Nord', km: 1 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 8 },
      { destination: 'Institut de Cancérologie de la Loire', km: 1 },
    ],
  },
  {
    slug: 'le-chambon-feugerolles',
    nom: 'Le Chambon-Feugerolles',
    nomAvecPreposition: 'au Chambon-Feugerolles',
    codePostal: '42500',
    population: '12 000 habitants',
    distanceKm: 15,
    tempsMinutes: 20,
    intro:
      "Au cœur de la vallée de l'Ondaine, Le Chambon-Feugerolles fait partie de nos secteurs de proximité, desservi plusieurs fois par semaine en transport conventionné.",
    contexte:
      "Les habitants du Chambon-Feugerolles dépendent des plateaux techniques stéphanois pour la plupart des examens spécialisés. Le trajet, court mais sinueux, demande un chauffeur habitué à la vallée pour respecter les horaires de convocation.",
    specificite:
      "Nous prenons en charge à domicile, y compris dans les rues étroites des hauteurs, et accompagnons si nécessaire jusqu'à l'accueil du service.",
    etablissementsSante: ['Centre médical de l’Ondaine', 'Laboratoires d’analyses du centre'],
    communesProches: ['Firminy', 'La Ricamarie', 'Unieux', 'Roche-la-Molière'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 17 },
      { destination: 'Clinique Mutualiste', km: 15 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 17 },
    ],
  },
  {
    slug: 'saint-just-saint-rambert',
    nom: 'Saint-Just-Saint-Rambert',
    nomAvecPreposition: 'à Saint-Just-Saint-Rambert',
    codePostal: '42170',
    population: '15 000 habitants',
    distanceKm: 22,
    tempsMinutes: 25,
    intro:
      "Aux portes de la plaine du Forez, Saint-Just-Saint-Rambert est desservie pour les rendez-vous médicaux stéphanois, les départs en train et les transferts aéroport.",
    contexte:
      "La commune, étirée le long de la Loire, compte une population résidente âgée importante et plusieurs résidences seniors. Nos courses y sont majoritairement des transports conventionnés réguliers, avec prise en charge à l'entrée des résidences.",
    specificite:
      "Nous connaissons les contraintes d'accès des établissements pour personnes âgées de la commune : plages horaires de dépose, accompagnement jusqu'à l'accueil, transmission au personnel soignant si besoin.",
    etablissementsSante: ['Centre hospitalier du Forez — site de Saint-Just', 'EHPAD et résidences seniors'],
    communesProches: ['Andrézieux-Bouthéon', 'Bonson', 'Sury-le-Comtal', 'Chambles'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 24 },
      { destination: 'Aéroport Saint-Étienne — Bouthéon', km: 8 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 24 },
    ],
  },
  {
    slug: 'roche-la-moliere',
    nom: 'Roche-la-Molière',
    nomAvecPreposition: 'à Roche-la-Molière',
    codePostal: '42230',
    population: '9 000 habitants',
    distanceKm: 8,
    tempsMinutes: 15,
    intro:
      "Commune limitrophe de Saint-Étienne, Roche-la-Molière bénéficie de nos délais d'intervention les plus courts, y compris pour les demandes du jour.",
    contexte:
      "La proximité immédiate de Saint-Étienne permet des prises en charge rapides : le CHU, la Clinique Mutualiste et l'Hôpital Privé de la Loire sont tous à moins de vingt minutes. C'est un secteur où nous pouvons souvent absorber une demande de dernière minute.",
    specificite:
      "Pour les sorties d'hospitalisation non programmées, appelez-nous dès que la sortie est confirmée par le service : depuis Roche-la-Molière, nous sommes généralement sur place dans la demi-heure.",
    etablissementsSante: ['Cabinets médicaux et laboratoires de la commune'],
    communesProches: ['Saint-Genest-Lerpt', 'Le Chambon-Feugerolles', 'Saint-Étienne', 'Firminy'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 10 },
      { destination: 'Hôpital Privé de la Loire', km: 9 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 10 },
    ],
  },
  {
    slug: 'sorbiers',
    nom: 'Sorbiers',
    nomAvecPreposition: 'à Sorbiers',
    codePostal: '42290',
    population: '8 000 habitants',
    distanceKm: 9,
    tempsMinutes: 16,
    intro:
      "Sorbiers et le plateau nord stéphanois sont desservis quotidiennement, avec un accès rapide à l'A72 pour les départs vers Lyon et les aéroports.",
    contexte:
      "Positionnée au nord de Saint-Étienne, la commune est idéalement placée pour les trajets vers Lyon : l'échangeur de l'A72 est à quelques minutes, ce qui réduit sensiblement le temps de transfert vers l'aéroport Lyon-Saint-Exupéry par rapport au sud du bassin.",
    specificite:
      "Depuis Sorbiers, comptez environ une heure jusqu'à l'aéroport Lyon-Saint-Exupéry hors heures de pointe. Nous ajustons systématiquement l'heure de départ selon l'heure de votre vol et le trafic prévu sur l'A47 ou l'A72.",
    etablissementsSante: ['Cabinets de la commune', 'Pôle santé du plateau'],
    communesProches: ['La Talaudière', 'Saint-Jean-Bonnefonds', 'Saint-Christo-en-Jarez', 'Fontanès'],
    trajetsFrequents: [
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 78 },
      { destination: 'CHU Hôpital Nord', km: 10 },
      { destination: 'Gare de Lyon Part-Dieu', km: 58 },
    ],
  },
  {
    slug: 'villars',
    nom: 'Villars',
    nomAvecPreposition: 'à Villars',
    codePostal: '42390',
    population: '8 500 habitants',
    distanceKm: 6,
    tempsMinutes: 13,
    intro:
      "Villars, aux portes nord de Saint-Étienne, est à quelques minutes du CHU Nord : une zone de prise en charge rapide pour les rendez-vous médicaux du matin.",
    contexte:
      "La commune jouxte le pôle hospitalier de Saint-Priest-en-Jarez. Beaucoup de nos courses villardaires sont des transports conventionnés courts, mais répétés : dialyse trois fois par semaine, séances de rééducation, suivis post-opératoires.",
    specificite:
      "Sur ces trajets réguliers, nous mettons en place un horaire fixe récurrent : vous n'avez plus à rappeler avant chaque séance, le créneau est bloqué dans notre planning.",
    etablissementsSante: ['Proximité immédiate du CHU Hôpital Nord', 'Cabinets de la commune'],
    communesProches: ['Saint-Priest-en-Jarez', 'Saint-Étienne', 'La Fouillouse', 'Saint-Genest-Lerpt'],
    trajetsFrequents: [
      { destination: 'CHU Hôpital Nord', km: 3 },
      { destination: 'Institut de Cancérologie de la Loire', km: 3 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 8 },
    ],
  },
  {
    slug: 'la-ricamarie',
    nom: 'La Ricamarie',
    nomAvecPreposition: 'à La Ricamarie',
    codePostal: '42150',
    population: '8 000 habitants',
    distanceKm: 8,
    tempsMinutes: 15,
    intro:
      "La Ricamarie, à l'entrée de la vallée de l'Ondaine, fait partie de nos secteurs de proximité avec des interventions rapides vers les hôpitaux stéphanois.",
    contexte:
      "Commune dense et proche de Saint-Étienne, La Ricamarie génère surtout des courses conventionnées courtes : consultations, examens d'imagerie, séances de kinésithérapie ou de rééducation en centre.",
    specificite:
      "Nous assurons les prises en charge à domicile dans les rues en pente et les résidences collectives de la commune, avec accompagnement jusqu'au véhicule si vous vous déplacez difficilement.",
    etablissementsSante: ['Centre de santé de La Ricamarie', 'Cabinets paramédicaux'],
    communesProches: ['Le Chambon-Feugerolles', 'Saint-Étienne', 'Roche-la-Molière', 'Firminy'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 10 },
      { destination: 'Clinique Mutualiste', km: 8 },
      { destination: 'Hôpital Privé de la Loire', km: 9 },
    ],
  },
  {
    slug: 'unieux',
    nom: 'Unieux',
    nomAvecPreposition: 'à Unieux',
    codePostal: '42240',
    population: '8 500 habitants',
    distanceKm: 20,
    tempsMinutes: 24,
    intro:
      "Unieux, au sud de la vallée de l'Ondaine, est desservie sur réservation pour les transports médicaux comme pour les liaisons gare et aéroport.",
    contexte:
      "Entre Firminy et les gorges de la Loire, Unieux est l'une des communes les plus éloignées du bassin stéphanois tout en restant dans son aire urbaine. Les trajets vers le CHU dépassent vingt minutes : la réservation anticipée garantit le respect de l'heure de convocation.",
    specificite:
      "Depuis Unieux, nous conseillons de réserver la veille pour tout rendez-vous avant 9h, le temps d'approche depuis Saint-Étienne devant être intégré au trajet.",
    etablissementsSante: ['Proximité du Centre hospitalier Le Corbusier (Firminy)', 'Cabinets de la commune'],
    communesProches: ['Firminy', 'Fraisses', 'Çaloire', 'Saint-Paul-en-Cornillon'],
    trajetsFrequents: [
      { destination: 'CHU de Saint-Étienne', km: 22 },
      { destination: 'Centre hospitalier Le Corbusier', km: 3 },
      { destination: 'Gare de Saint-Étienne Châteaucreux', km: 22 },
    ],
  },
  {
    slug: 'veauche',
    nom: 'Veauche',
    nomAvecPreposition: 'à Veauche',
    codePostal: '42340',
    population: '9 000 habitants',
    distanceKm: 18,
    tempsMinutes: 22,
    intro:
      "Veauche, voisine de l'aéroport Saint-Étienne — Loire, est desservie pour les départs en vol charter, les rendez-vous médicaux et les transferts vers Lyon.",
    contexte:
      "La plaine du Forez autour de Veauche combine habitat résidentiel et zones d'activités. Nous y intervenons aussi bien pour des déplacements professionnels que pour des transports conventionnés vers les établissements stéphanois.",
    specificite:
      "L'aéroport de Bouthéon est à moins de dix minutes : pour un vol charter au départ de Saint-Étienne, une prise en charge à Veauche reste possible même avec une convocation très matinale.",
    etablissementsSante: ['Cabinets et laboratoires de Veauche', 'Proximité du Centre hospitalier du Forez'],
    communesProches: ['Andrézieux-Bouthéon', 'Saint-Galmier', 'La Fouillouse', 'Cuzieu'],
    trajetsFrequents: [
      { destination: 'Aéroport Saint-Étienne — Bouthéon', km: 5 },
      { destination: 'CHU de Saint-Étienne', km: 20 },
      { destination: 'Aéroport Lyon-Saint-Exupéry', km: 88 },
    ],
  },
];

export function getVille(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug);
}
