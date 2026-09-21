/**
 * Questions fréquentes transverses au site.
 *
 * Ces réponses jouent un double rôle : résultats enrichis Google via le schéma
 * FAQPage, et matière première pour les moteurs génératifs, qui reprennent
 * volontiers une réponse courte, factuelle et autonome. D'où la règle
 * rédactionnelle : chaque réponse doit se suffire à elle-même, sans dépendre
 * du contexte de la page, et citer un chiffre ou une source quand c'est
 * possible.
 */

import { TARIFS, TARIF_CONSTANTS } from './tarifs.ts';

/** Formate un montant pour l'insérer dans une phrase. */
const eur = (n: number) => n.toFixed(2).replace('.', ',');

export type ItemFaq = {
  question: string;
  reponse: string;
  categorie: 'conventionne' | 'reservation' | 'tarifs' | 'vehicules' | 'zones';
};

export const CATEGORIES_FAQ: Record<ItemFaq['categorie'], string> = {
  conventionne: 'Transport conventionné CPAM',
  reservation: 'Réservation et déroulement',
  tarifs: 'Tarifs et paiement',
  vehicules: 'Véhicules et bagages',
  zones: 'Zones desservies',
};

export const FAQ_GENERALE: ItemFaq[] = [
  {
    question: 'Faites-vous aussi les courses classiques, non médicales ?',
    reponse:
      "Oui, et c'est une grande part de notre activité : trajets en ville, sorties, restaurants, retours de soirée, rendez-vous, courses, gares et aéroports. Aucune prescription n'est nécessaire, vous réglez par carte ou en espèces. Le conventionnement CPAM s'ajoute à cela pour les trajets médicaux — il ne le remplace pas.",
    categorie: 'reservation',
  },
  {
    question: 'Qu’est-ce qu’un taxi conventionné CPAM ?',
    reponse:
      "Un taxi conventionné est un taxi agréé par l'Assurance Maladie pour transporter des patients vers leurs lieux de soins. Sur présentation d'une prescription médicale de transport et de votre carte Vitale, la course est facturée directement à votre caisse : vous n'avancez aucun frais. BF Taxi est conventionné et intervient à Saint-Étienne et dans toute la Loire.",
    categorie: 'conventionne',
  },
  {
    question: 'Ai-je besoin d’une prescription pour un transport conventionné ?',
    reponse:
      "Oui. La prise en charge par l'Assurance Maladie suppose une prescription médicale de transport, établie par votre médecin avant le trajet. Sans ce document, la course reste possible mais vous est facturée au tarif taxi normal. Pour une sortie d'hospitalisation, c'est le service hospitalier qui délivre la prescription : demandez-la avant de quitter l'établissement.",
    categorie: 'conventionne',
  },
  {
    question: 'Combien coûte une course de taxi à Saint-Étienne ?',
    reponse: `Les tarifs sont fixés par arrêté préfectoral, identiques pour tous les taxis de la Loire : ${eur(TARIF_CONSTANTS.priseEnCharge)} € de prise en charge, puis ${eur(TARIFS.A.parKm)} €/km en aller-retour de jour (tarif A) et ${eur(TARIFS.C.parKm)} €/km en aller simple de jour (tarif C), les tarifs de nuit, du dimanche et des jours fériés étant majorés. Le minimum de perception est de ${eur(TARIF_CONSTANTS.minimumPerception)} €. Notre simulateur en ligne calcule une estimation à partir de vos adresses réelles.`,
    categorie: 'tarifs',
  },
  {
    question: 'Combien de temps à l’avance faut-il réserver ?',
    reponse:
      "Pour Saint-Étienne et les communes limitrophes, nous pouvons souvent intervenir dans l'heure. Pour un rendez-vous médical, un train ou un vol, réservez la veille afin que le créneau soit garanti. Pour le Forez, le Roannais et les départs avant 6h du matin, comptez vingt-quatre heures d'anticipation.",
    categorie: 'reservation',
  },
  {
    question: 'Peut-on réserver par WhatsApp ?',
    reponse:
      "Oui. Envoyez-nous un message au 07 82 33 34 45 avec la date, l'heure, l'adresse de prise en charge et la destination : nous confirmons par retour. C'est le canal le plus pratique pour transmettre une photo de prescription ou une adresse exacte.",
    categorie: 'reservation',
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    reponse:
      "Carte bancaire, espèces et virement pour les clients professionnels. En transport conventionné avec prescription, vous ne réglez rien : nous facturons directement l'Assurance Maladie dans le cadre du tiers payant.",
    categorie: 'tarifs',
  },
  {
    question: 'Quelle est la différence entre un taxi et un VTC ?',
    reponse:
      "Un taxi dispose d'une autorisation de stationnement, d'un taximètre et de tarifs réglementés par la préfecture ; il peut être hélé dans la rue, prendre des courses immédiates et, s'il est conventionné, assurer des transports médicaux remboursés. Un VTC travaille uniquement sur réservation, à prix libre, et ne peut pas être conventionné par l'Assurance Maladie.",
    categorie: 'tarifs',
  },
  {
    question: 'Transportez-vous les animaux ?',
    reponse:
      "Les chiens guides et chiens d'assistance sont acceptés de droit, sans supplément ni conditions. Les autres animaux sont acceptés en cage ou en caisse de transport : signalez-le simplement lors de la réservation.",
    categorie: 'vehicules',
  },
  {
    question: 'Combien de personnes peut prendre le van ?',
    reponse: `Le van Mercedes Classe V transporte jusqu'à 7 passagers avec leurs bagages. À partir de la ${TARIF_CONSTANTS.passagersSansSupplement + 1}e personne transportée, un supplément réglementaire de ${eur(TARIF_CONSTANTS.supplementPassager)} € par passager s'applique ; au-delà de ${TARIF_CONSTANTS.bagagesSansSupplement} valises, ${eur(TARIF_CONSTANTS.supplementBagage)} € par bagage. Les deux sont fixés par l'arrêté préfectoral de la Loire.`,
    categorie: 'vehicules',
  },
  {
    question: 'Intervenez-vous la nuit et les jours fériés ?',
    reponse:
      'Oui, 24h/24 et 7j/7, jours fériés inclus. Les courses de nuit (19h-7h), du dimanche et des jours fériés relèvent des tarifs B et D, majorés par rapport aux tarifs de jour.',
    categorie: 'reservation',
  },
  {
    question: 'Quelles communes desservez-vous ?',
    reponse:
      "Saint-Étienne et l'ensemble de son bassin : Saint-Chamond, Firminy, Rive-de-Gier, Le Chambon-Feugerolles, Roche-la-Molière, La Ricamarie, Villars, Saint-Priest-en-Jarez, Sorbiers, Unieux, ainsi que le Forez (Montbrison, Andrézieux-Bouthéon, Saint-Just-Saint-Rambert, Veauche) et le Roannais. Pour la longue distance, nous desservons toute la France.",
    categorie: 'zones',
  },
  {
    question: 'Proposez-vous des sièges enfants ?',
    reponse:
      "Oui, réhausseurs et sièges bébé sont fournis gratuitement. Indiquez-nous l'âge et le nombre d'enfants à la réservation afin que le matériel adapté soit installé avant votre départ.",
    categorie: 'vehicules',
  },
  {
    question: 'Puis-je choisir mon taxi conventionné ?',
    reponse:
      "Oui. Le libre choix du transporteur est un droit du patient : ni l'établissement de soins, ni l'Assurance Maladie ne peuvent vous imposer une société de transport. Il vous suffit de nous contacter directement.",
    categorie: 'conventionne',
  },
  {
    question: 'Le transport est-il remboursé si je n’ai pas d’ALD ?',
    reponse:
      "Oui, sous conditions. Hors affection de longue durée, l'Assurance Maladie prend en charge 65 % du tarif conventionné d'un transport prescrit, le reste étant généralement couvert par votre complémentaire santé. En ALD, accident du travail ou maternité, la prise en charge atteint 100 %.",
    categorie: 'conventionne',
  },
  {
    question: 'Attendez-vous pendant mon rendez-vous médical ?',
    reponse: `Pour un rendez-vous court, nous pouvons rester sur place ; l'attente est alors comptée au tarif horaire de ${eur(TARIF_CONSTANTS.tarifHoraire)} € fixé par l'arrêté préfectoral. Pour une consultation ou une cure longue, nous repartons et revenons à votre appel, ce qui évite de facturer une attente inutile.`,
    categorie: 'reservation',
  },
  {
    question: 'Faites-vous les transferts vers l’aéroport de Lyon ?',
    reponse:
      "Oui, quotidiennement. Le trajet Saint-Étienne — aéroport Lyon-Saint-Exupéry représente environ 85 km, soit 1h05 de route hors heures de pointe. Nous suivons votre numéro de vol pour ajuster l'heure de prise en charge et assurons les départs très matinaux comme les retours de nuit.",
    categorie: 'zones',
  },
];

export function faqParCategorie(categorie: ItemFaq['categorie']): ItemFaq[] {
  return FAQ_GENERALE.filter((item) => item.categorie === categorie);
}
