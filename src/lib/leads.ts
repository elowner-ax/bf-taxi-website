/**
 * Transmission des demandes de devis.
 *
 * Le site est statique : il n'a pas de serveur pour recevoir un POST. Trois
 * canaux sont donc prévus, du plus au moins automatisé, et l'on bascule de
 * l'un à l'autre par simple configuration — sans toucher au formulaire.
 *
 *   1. `PUBLIC_FORM_ENDPOINT` défini → POST JSON vers cette URL.
 *      Convient à un service tiers (Formspree, Web3Forms, Make…) comme à votre
 *      propre API le jour où le site passera en rendu serveur.
 *   2. Sinon → ouverture de WhatsApp avec la demande pré-rédigée.
 *   3. Lien de repli permanent → client e-mail, même message.
 *
 * Aucune donnée n'est stockée dans le navigateur ni envoyée ailleurs que vers
 * le canal choisi : c'est ce qui permet au site de se passer de bandeau
 * cookies.
 */

export type DemandeDevis = {
  prestation: string;
  depart: string;
  arrivee: string;
  date: string;
  heure: string;
  retour: string;
  passagers: string;
  vehicule: string;
  conventionne: string;
  nom: string;
  telephone: string;
  email: string;
  message: string;
};

export const CHAMPS_OBLIGATOIRES: (keyof DemandeDevis)[] = [
  'prestation',
  'depart',
  'arrivee',
  'nom',
  'telephone',
];

/** Met la demande en texte lisible, pour WhatsApp comme pour l'e-mail. */
export function formaterDemande(d: Partial<DemandeDevis>): string {
  const lignes = [
    'Nouvelle demande de devis — bftaxi.fr',
    '',
    `Prestation : ${d.prestation || 'non précisée'}`,
    `Départ : ${d.depart || '—'}`,
    `Destination : ${d.arrivee || '—'}`,
    d.date ? `Date : ${d.date}${d.heure ? ` à ${d.heure}` : ''}` : null,
    d.retour && d.retour !== 'non' ? `Retour : ${d.retour}` : null,
    d.passagers ? `Passagers : ${d.passagers}` : null,
    d.vehicule && d.vehicule !== 'indifferent' ? `Véhicule souhaité : ${d.vehicule}` : null,
    d.conventionne === 'oui' ? 'Transport conventionné CPAM : oui (prescription disponible)' : null,
    '',
    `Nom : ${d.nom || '—'}`,
    `Téléphone : ${d.telephone || '—'}`,
    d.email ? `E-mail : ${d.email}` : null,
    d.message ? `\nPrécisions :\n${d.message}` : null,
  ];

  return lignes.filter((l) => l !== null).join('\n');
}
