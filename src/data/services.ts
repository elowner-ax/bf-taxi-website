import { TARIFS, TARIF_CONSTANTS } from './tarifs.ts';

/** Formate un montant pour l'insérer dans une phrase. */
const eur = (n: number) => n.toFixed(2).replace('.', ',');

/**
 * Pages de services — chaque entrée génère une page à plat (`/slug/`).
 *
 * Règle éditoriale : `intro`, `sections` et `faq` sont propres à chaque service.
 * Les pages se renvoient entre elles via `servicesLies`, ce qui constitue le
 * maillage interne du site. Ajouter un service ici crée automatiquement sa
 * page, son entrée de sitemap et ses données structurées.
 */

export type Service = {
  slug: string;
  /** Titre H1 de la page. */
  titre: string;
  /** Libellé court pour les menus et les cartes. */
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  categorie: 'quotidien' | 'medical' | 'transfert' | 'confort';
  icon: string;
  /** Phrase d'accroche affichée sous le H1. */
  accroche: string;
  /** Réponse directe et factuelle, reprise en tête de page et en données
   *  structurées : c'est elle que citent les moteurs génératifs. */
  reponseCourte: string;
  intro: string[];
  points: { titre: string; texte: string }[];
  sections: { titre: string; paragraphes: string[]; liste?: string[] }[];
  faq: { question: string; reponse: string }[];
  vehicule?: 'tesla-model-3' | 'mercedes-classe-v' | 'les-deux';
  servicesLies: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'taxi-en-ville',
    titre: 'Taxi en ville à Saint-Étienne',
    navLabel: 'Courses en ville',
    metaTitle: 'Taxi en ville Saint-Étienne — Courses, sorties, soirées, 24h/24 | BF Taxi',
    metaDescription:
      'Taxi pour vos trajets du quotidien à Saint-Étienne et dans la Loire : courses en ville, sorties, retours de soirée, rendez-vous. Sans prescription, souvent dans l’heure. 07 82 33 34 45.',
    categorie: 'quotidien',
    icon: 'car',
    accroche: 'Le taxi tout simplement : en ville, en soirée, pour un rendez-vous ou une sortie.',
    reponseCourte:
      "BF Taxi assure toutes les courses classiques à Saint-Étienne et dans la Loire : trajets en ville, sorties, restaurants, retours de soirée, rendez-vous, courses. Aucune prescription n'est nécessaire, réservation par téléphone ou WhatsApp, prise en charge souvent dans l'heure, règlement par carte ou en espèces.",
    intro: [
      "Parce que nous sommes conventionnés par l'Assurance Maladie, certains pensent que nous ne faisons que du transport médical. C'est faux : la course ordinaire — celle qui vous emmène dîner, à un rendez-vous, à la gare ou chez un ami — est une grande part de notre journée.",
      "Pas de prescription, pas de dossier : vous appelez, nous venons. Et pour une course dans l'heure à Saint-Étienne ou dans les communes voisines, c'est souvent possible.",
    ],
    points: [
      {
        titre: 'Souvent dans l’heure',
        texte: 'À Saint-Étienne et dans les communes limitrophes, nous pouvons fréquemment intervenir sans réservation la veille.',
      },
      {
        titre: 'Tarif au compteur, sans surprise',
        texte: 'Grille préfectorale, la même pour tous les taxis de la Loire. Notre simulateur vous donne un prix plafond avant de monter.',
      },
      {
        titre: 'Soirées et retours de nuit',
        texte: 'Restaurant, concert, fête de famille : nous venons vous chercher à l’heure dite, même tard, même le dimanche.',
      },
      {
        titre: 'Carte ou espèces',
        texte: 'Paiement à bord par carte bancaire ou en espèces. Note remise sur demande, obligatoire au-delà de 25 €.',
      },
    ],
    sections: [
      {
        titre: 'Les trajets que nous faisons tous les jours',
        paragraphes: [
          "Un aller au centre-ville pour des courses, un retour de Châteaucreux les bras chargés, une soirée à Saint-Chamond dont on ne veut pas prendre le volant, un rendez-vous chez le notaire, un enfant à conduire à l'entraînement quand la voiture est au garage. Rien de médical, rien d'exceptionnel : du quotidien.",
          "Ces courses se réservent par téléphone ou WhatsApp, cinq minutes ou trois jours à l'avance. Nous vous confirmons l'heure de prise en charge et nous vous prévenons à notre arrivée.",
        ],
        liste: [
          'Courses en ville et dans l’agglomération',
          'Sorties, restaurants, spectacles, retours de soirée',
          'Rendez-vous professionnels, administratifs ou personnels',
          'Gares et haltes ferroviaires du bassin stéphanois',
          'Trajets réguliers : travail, école, activités',
        ],
      },
      {
        titre: 'Combien ça coûte ?',
        paragraphes: [
          "Le prix est celui du compteur, fixé par l'arrêté préfectoral de la Loire — identique chez tous les taxis du département. Une course courte en centre-ville se situe le plus souvent entre le minimum de 8 € et une quinzaine d'euros. Le simulateur en ligne vous donne une estimation à partir de vos adresses réelles, calculée pour être un plafond : au compteur, vous paierez au pire ce montant, le plus souvent un peu moins.",
        ],
      },
      {
        titre: 'Le soir, la nuit, le dimanche',
        paragraphes: [
          "De 19h à 7h, les dimanches et les jours fériés, le tarif de nuit s'applique — c'est la règle, pas un supplément de notre part. Pour un retour de soirée, dites-nous l'heure à laquelle vous voulez être pris en charge : nous serons devant la porte. Si la soirée s'éternise, un message suffit pour décaler.",
        ],
      },
    ],
    faq: [
      {
        question: 'Faut-il une prescription ou un motif particulier ?',
        reponse:
          "Non. Une course classique se réserve comme n'importe quel taxi : vous nous donnez l'adresse, l'heure et la destination. Le conventionnement CPAM ne concerne que les trajets médicaux prescrits ; il s'ajoute à notre activité, il ne la remplace pas.",
      },
      {
        question: 'Prenez-vous les petites courses en ville ?',
        reponse:
          "Oui. Le minimum de perception fixé par la préfecture est de 8 €, suppléments inclus : une course de quelques rues coûte ce montant. Nous les prenons volontiers, et sans réservation préalable quand nous sommes disponibles.",
      },
      {
        question: 'Peut-on réserver un retour de soirée à l’avance ?',
        reponse:
          "C'est même conseillé : le vendredi et le samedi soir, la demande est forte. Indiquez-nous l'heure de prise en charge souhaitée ; nous serons là. Le tarif de nuit s'applique de 19h à 7h, comme pour tous les taxis.",
      },
      {
        question: 'Puis-je payer par carte ?',
        reponse:
          "Oui, carte bancaire et espèces sont acceptées à bord. Pour les entreprises, nous établissons une facture mensuelle sur demande.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-gare-chateaucreux', 'taxi-aeroport-lyon-saint-exupery', 'taxi-mise-a-disposition', 'taxi-conventionne-cpam'],
  },
  {
    slug: 'taxi-conventionne-cpam',
    titre: 'Taxi conventionné CPAM à Saint-Étienne',
    navLabel: 'Taxi conventionné CPAM',
    metaTitle: 'Taxi conventionné CPAM Saint-Étienne (42) — Transport médical assis | BF Taxi',
    metaDescription:
      'Taxi conventionné Assurance Maladie à Saint-Étienne et dans la Loire. Transport médical assis sans avance de frais avec prescription. Réservation 24h/24 au 07 82 33 34 45.',
    categorie: 'medical',
    icon: 'shield',
    accroche: 'Conventionné Assurance Maladie — transport médical assis dans toute la Loire, sans avance de frais.',
    reponseCourte:
      "BF Taxi est un taxi conventionné par l'Assurance Maladie à Saint-Étienne (42). Avec une prescription médicale de transport établie par votre médecin, votre trajet vers un rendez-vous de soins est pris en charge par la CPAM et vous n'avancez pas les frais. Réservation 24h/24 au 07 82 33 34 45.",
    intro: [
      "Un taxi conventionné est un taxi agréé par l'Assurance Maladie pour transporter les patients vers leurs lieux de soins. Cet agrément vous donne droit à la prise en charge de votre trajet dès lors qu'il a été prescrit par un professionnel de santé.",
      "Concrètement, vous ne payez rien au moment de la course : nous facturons directement la CPAM grâce au dispositif du tiers payant. Vous nous remettez simplement votre prescription médicale de transport et votre carte Vitale.",
    ],
    points: [
      {
        titre: 'Aucune avance de frais',
        texte: "Nous facturons directement l'Assurance Maladie. Vous n'avez ni chèque à faire, ni dossier de remboursement à monter.",
      },
      {
        titre: 'Tous les établissements',
        texte: 'CHU de Saint-Étienne, Institut de Cancérologie de la Loire, Clinique Mutualiste, Hôpital Privé de la Loire, Hospices Civils de Lyon, centres de dialyse et de rééducation.',
      },
      {
        titre: 'Trajets réguliers planifiés',
        texte: 'Dialyse, rééducation, séances de radiothérapie : nous bloquons vos créneaux à horaires fixes, avec le même chauffeur.',
      },
      {
        titre: 'Accompagnement de bout en bout',
        texte: "Prise en charge à votre domicile et accompagnement jusqu'à l'accueil du service, pas seulement jusqu'au parking.",
      },
    ],
    sections: [
      {
        titre: 'Qui a droit au transport en taxi conventionné ?',
        paragraphes: [
          "La prise en charge d'un transport en taxi conventionné suppose une prescription médicale de transport, souvent appelée « bon de transport », établie par votre médecin. C'est lui qui évalue si votre état de santé justifie ce mode de transport et qui choisit, selon votre autonomie, entre le transport assis professionnalisé (taxi conventionné ou VSL) et l'ambulance.",
          "Certaines situations ouvrent droit à une prise en charge intégrale, notamment les affections de longue durée (ALD), les accidents du travail et les maladies professionnelles, la maternité ou encore les hospitalisations. Dans les autres cas, l'Assurance Maladie prend en charge une partie du trajet et votre complémentaire santé intervient généralement sur le reste.",
          "Pour les trajets longue distance ou les transports répétés, une demande d'accord préalable auprès de votre caisse peut être nécessaire. Votre médecin prescripteur ou votre caisse vous l'indiquera : nous vous aidons à identifier le cas dans lequel vous vous trouvez lors de la réservation.",
        ],
        liste: [
          'Consultation, examen ou hospitalisation prescrite',
          'Séances de dialyse, de chimiothérapie ou de radiothérapie',
          'Affection de longue durée (ALD) reconnue',
          'Accident du travail ou maladie professionnelle',
          'Entrée et sortie d’hospitalisation',
          'Rééducation et soins de suite',
        ],
      },
      {
        titre: 'Comment se passe une course conventionnée avec BF Taxi ?',
        paragraphes: [
          "Vous nous appelez ou nous envoyez un message WhatsApp en nous indiquant la date, l'heure de convocation, l'adresse de prise en charge et l'établissement de destination. Nous calons ensemble l'heure de départ en tenant compte du trafic et de la marge nécessaire à l'accueil.",
          "Le jour J, nous nous présentons à votre domicile à l'heure convenue. Vous nous remettez votre prescription médicale de transport, votre carte Vitale et, si vous en avez une, votre carte de mutuelle. Nous nous chargeons de la facturation auprès de votre caisse.",
          "Au retour, si l'heure de fin de consultation est incertaine — c'est fréquent en hôpital de jour — vous nous appelez dès que vous sortez. Nous revenons vous chercher dans les meilleurs délais.",
        ],
      },
      {
        titre: 'Documents à préparer',
        paragraphes: [
          "Trois documents suffisent pour que la prise en charge soit automatique. Si l'un d'eux manque le jour du transport, la course reste possible, mais elle vous sera facturée : vous devrez ensuite demander le remboursement à votre caisse.",
        ],
        liste: [
          'La prescription médicale de transport, remplie et signée par votre médecin',
          'Votre carte Vitale à jour',
          'Votre attestation de mutuelle ou carte de complémentaire santé',
        ],
      },
    ],
    faq: [
      {
        question: 'Dois-je avancer les frais pour un taxi conventionné ?',
        reponse:
          "Non. Avec une prescription médicale de transport valide et votre carte Vitale, nous facturons directement l'Assurance Maladie : vous ne réglez rien au moment de la course. Seul le ticket modérateur peut rester à votre charge si vous n'êtes pas en prise en charge à 100 %, et il est généralement couvert par votre mutuelle.",
      },
      {
        question: 'Quelle différence entre un taxi conventionné et un VSL ?',
        reponse:
          "Les deux assurent du transport assis professionnalisé et sont conventionnés par l'Assurance Maladie. Le VSL est un véhicule sanitaire léger dédié, avec un équipage formé au transport sanitaire, qui peut prendre plusieurs patients ensemble. Le taxi conventionné transporte en règle générale un patient à la fois dans un véhicule de tourisme, souvent avec plus de confort et de souplesse horaire. Votre médecin peut prescrire l'un ou l'autre.",
      },
      {
        question: 'Puis-je choisir mon taxi conventionné ?',
        reponse:
          "Oui. Le libre choix du transporteur est un droit du patient : ni l'établissement de soins, ni votre caisse ne peuvent vous imposer une société. Il vous suffit de nous contacter directement et de nous indiquer votre rendez-vous.",
      },
      {
        question: 'Un accompagnant peut-il monter dans le véhicule ?',
        reponse:
          "Oui, un accompagnant peut voyager avec vous sans supplément si le véhicule le permet. Pour les patients mineurs ou les personnes dont l'état nécessite une présence, la présence d'un accompagnant est même prévue par la réglementation.",
      },
      {
        question: 'Prenez-vous les transports vers Lyon ou hors département ?',
        reponse:
          "Oui, nous assurons les transports conventionnés toutes distances, notamment vers les Hospices Civils de Lyon, le Centre Léon Bérard, Clermont-Ferrand ou Grenoble. Au-delà de 150 km, une demande d'accord préalable auprès de votre caisse est en principe nécessaire : anticipez avec votre médecin prescripteur.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['transport-dialyse', 'transport-chimiotherapie', 'taxi-hospitalisation', 'taxi-pmr'],
  },
  {
    slug: 'transport-dialyse',
    titre: 'Transport en taxi pour dialyse à Saint-Étienne',
    navLabel: 'Dialyse',
    metaTitle: 'Taxi dialyse Saint-Étienne — Transport conventionné 3x/semaine | BF Taxi',
    metaDescription:
      'Transport conventionné pour vos séances de dialyse à Saint-Étienne et dans la Loire. Horaires fixes, même chauffeur, sans avance de frais. 07 82 33 34 45.',
    categorie: 'medical',
    icon: 'heart',
    accroche: 'Des créneaux fixes, le même chauffeur, séance après séance.',
    reponseCourte:
      "BF Taxi assure le transport conventionné des patients dialysés à Saint-Étienne et dans la Loire, généralement trois fois par semaine. Les créneaux sont bloqués à l'avance à horaires fixes, la prise en charge CPAM est intégrale dans le cadre de l'ALD et vous n'avancez aucun frais.",
    intro: [
      "La dialyse impose un rythme : trois séances par semaine, souvent aux mêmes horaires, pendant des années. Le transport ne doit pas être une source d'inquiétude supplémentaire.",
      "Nous organisons vos trajets sous forme de tournée récurrente : une fois le planning établi avec vous, vos créneaux sont bloqués dans notre agenda. Vous n'avez plus à rappeler avant chaque séance.",
    ],
    points: [
      {
        titre: 'Horaires verrouillés',
        texte: 'Vos créneaux aller et retour sont réservés pour toute la durée de votre traitement, y compris les jours fériés.',
      },
      {
        titre: 'Le même chauffeur',
        texte: 'Vous retrouvez le même visage à chaque séance : un repère qui compte quand le traitement s’inscrit dans la durée.',
      },
      {
        titre: 'Retour adapté à la fatigue',
        texte: 'Après la séance, conduite souple, habitacle silencieux et chauffage ou climatisation réglés avant votre montée à bord.',
      },
      {
        titre: 'Pris en charge à 100 % en ALD',
        texte: "L'insuffisance rénale chronique terminale relève d'une affection de longue durée : le transport prescrit est pris en charge intégralement.",
      },
    ],
    sections: [
      {
        titre: 'Un transport pensé pour le rythme de la dialyse',
        paragraphes: [
          "Les séances d'hémodialyse durent en moyenne quatre heures et se répètent trois fois par semaine. Nous calons l'heure d'arrivée sur celle de votre branchement, avec une marge suffisante pour le pesage et l'installation, sans attente inutile en salle.",
          "Au retour, la fatigue et les variations de tension sont fréquentes. Notre berline électrique offre un roulage sans à-coups et un habitacle silencieux, que nous préchauffons ou pré-climatisons avant de venir vous chercher.",
          "Si votre séance se prolonge ou se termine plus tôt, un simple appel suffit : nous adaptons le retour dans la mesure des courses déjà engagées.",
        ],
      },
      {
        titre: 'Centres de dialyse desservis',
        paragraphes: [
          "Nous desservons l'ensemble des structures de dialyse du bassin stéphanois et de la Loire, en centre lourd comme en unité d'autodialyse ou de dialyse médicalisée.",
        ],
        liste: [
          'CHU de Saint-Étienne — Hôpital Nord',
          'Unités d’autodialyse du bassin stéphanois',
          'Centres de dialyse de la vallée du Gier et de l’Ondaine',
          'Structures de dialyse du Forez et du Roannais',
          'Centres lyonnais pour les patients suivis hors département',
        ],
      },
      {
        titre: 'Vacances et déplacements : la dialyse de vacances',
        paragraphes: [
          "Un séjour hors du département suppose une place en dialyse de vacances dans un centre de la région d'accueil, et un transport organisé sur place. Si votre départ ou votre retour nécessite un trajet longue distance, nous pouvons l'assurer : prévenez-nous une à deux semaines à l'avance, le temps de caler le planning et, si besoin, la demande d'accord préalable auprès de votre caisse.",
        ],
      },
    ],
    faq: [
      {
        question: 'Le transport pour dialyse est-il remboursé intégralement ?',
        reponse:
          "L'insuffisance rénale chronique terminale est une affection de longue durée exonérante : le transport prescrit en lien avec cette ALD est en principe pris en charge à 100 % par l'Assurance Maladie, sans avance de frais de votre part.",
      },
      {
        question: 'Faut-il une nouvelle prescription avant chaque séance ?',
        reponse:
          "Non. Pour les traitements itératifs comme la dialyse, votre néphrologue établit une prescription couvrant une série de transports sur une période donnée. Nous vous prévenons lorsqu'elle arrive à échéance afin que vous puissiez la faire renouveler sans interruption.",
      },
      {
        question: 'Et si ma séance se termine plus tard que prévu ?',
        reponse:
          "Appelez-nous dès que vous connaissez l'heure réelle de fin. Nous réorganisons le retour selon nos courses en cours ; sur les créneaux de fin de journée, l'attente est généralement de quelques minutes seulement.",
      },
    ],
    vehicule: 'tesla-model-3',
    servicesLies: ['taxi-conventionne-cpam', 'transport-chimiotherapie', 'taxi-pmr', 'taxi-hospitalisation'],
  },
  {
    slug: 'transport-chimiotherapie',
    titre: 'Transport en taxi pour chimiothérapie et radiothérapie',
    navLabel: 'Oncologie',
    metaTitle: 'Taxi chimiothérapie Saint-Étienne — Transport conventionné ICL | BF Taxi',
    metaDescription:
      "Transport conventionné vers l'Institut de Cancérologie de la Loire et les services d'oncologie de Saint-Étienne. Retour en berline électrique silencieuse. 07 82 33 34 45.",
    categorie: 'medical',
    icon: 'leaf',
    accroche: "Vers l'Institut de Cancérologie de la Loire et les services d'oncologie du département.",
    reponseCourte:
      "BF Taxi transporte les patients en cours de traitement oncologique vers l'Institut de Cancérologie de la Loire (Lucien Neuwirth), le CHU de Saint-Étienne et les centres lyonnais. Le transport est pris en charge à 100 % dans le cadre de l'ALD cancer, sans avance de frais.",
    intro: [
      "Les protocoles de chimiothérapie et de radiothérapie s'étalent sur plusieurs semaines, parfois plusieurs mois, avec des séances rapprochées. Le trajet fait partie du traitement : il doit être prévisible et le moins éprouvant possible.",
      "Nous assurons ces transports en conventionné, avec une attention particulière portée au retour, moment où la fatigue et les nausées sont les plus fortes.",
    ],
    points: [
      {
        titre: 'Retour en véhicule électrique',
        texte: 'Pas de vibrations moteur, pas d’odeur de carburant, accélérations progressives : des conditions plus supportables après une perfusion.',
      },
      {
        titre: 'Protocole complet planifié',
        texte: 'Nous enregistrons l’ensemble de vos séances dès la remise de votre calendrier de cures.',
      },
      {
        titre: 'Dépose à l’entrée du service',
        texte: "Hôpital de jour, radiothérapie, consultations : nous déposons au plus près de l'entrée concernée.",
      },
      {
        titre: 'Attente ou retour différé',
        texte: 'Pour les séances courtes, nous pouvons attendre sur place ; pour les cures longues, nous revenons à votre appel.',
      },
    ],
    sections: [
      {
        titre: 'Des trajets adaptés aux effets du traitement',
        paragraphes: [
          "La sensibilité aux odeurs, la nausée et l'épuisement sont des effets fréquents des traitements anticancéreux. Nous adaptons chaque détail : véhicule non parfumé, ventilation réglée à l'avance, conduite souple, silence si vous le souhaitez, eau à disposition.",
          "Sur les protocoles longs, nous connaissons vite votre rythme : le jour de cure, le jour de la baisse d'énergie, le jour où vous préférez qu'on ne parle pas. Cette régularité est précisément l'intérêt d'un transporteur unique plutôt que d'un véhicule différent à chaque séance.",
        ],
      },
      {
        titre: 'Établissements desservis en oncologie',
        paragraphes: [
          "Nous intervenons dans tout le département et au-delà lorsque votre suivi se fait hors Loire.",
        ],
        liste: [
          'Institut de Cancérologie de la Loire — Lucien Neuwirth (Saint-Priest-en-Jarez)',
          'CHU de Saint-Étienne — Hôpital Nord',
          'Clinique Mutualiste de Saint-Étienne',
          'Hôpital Privé de la Loire',
          'Centre Léon Bérard et Hospices Civils de Lyon',
        ],
      },
      {
        titre: 'Prise en charge du transport en ALD cancer',
        paragraphes: [
          "Le cancer relève des affections de longue durée : les transports prescrits en lien direct avec le traitement sont pris en charge à 100 % par l'Assurance Maladie sur la base du tarif conventionné. Votre oncologue établit la prescription, en général pour l'ensemble du protocole, ce qui vous évite d'avoir à la renouveler avant chaque séance.",
        ],
      },
    ],
    faq: [
      {
        question: "Pouvez-vous m'attendre pendant la séance ?",
        reponse:
          "Pour une séance courte — une radiothérapie dure souvent moins de trente minutes — nous restons sur place. Pour une cure de plusieurs heures en hôpital de jour, nous repartons et revenons à votre appel, afin de ne pas facturer une attente inutile à l'Assurance Maladie.",
      },
      {
        question: 'Un proche peut-il m’accompagner pendant le trajet ?',
        reponse:
          'Oui, sans supplément. Beaucoup de patients préfèrent être accompagnés le jour de la cure : la place est prévue, dans la berline comme dans le van.',
      },
      {
        question: 'Puis-je demander un véhicule sans odeur ni parfum ?',
        reponse:
          "C'est notre standard sur les transports oncologiques : aucun désodorisant n'est utilisé dans nos véhicules. Signalez-nous simplement votre sensibilité lors de la réservation.",
      },
    ],
    vehicule: 'tesla-model-3',
    servicesLies: ['taxi-conventionne-cpam', 'transport-dialyse', 'taxi-hospitalisation', 'taxi-pmr'],
  },
  {
    slug: 'taxi-hospitalisation',
    titre: 'Taxi pour consultation, hospitalisation et sortie d’hôpital',
    navLabel: 'Hospitalisation',
    metaTitle: 'Taxi hospitalisation Saint-Étienne — Entrée, sortie, consultation | BF Taxi',
    metaDescription:
      "Taxi conventionné pour vos entrées et sorties d'hospitalisation, consultations et examens à Saint-Étienne. Prise en charge à domicile 24h/24. 07 82 33 34 45.",
    categorie: 'medical',
    icon: 'building',
    accroche: 'Entrée programmée, sortie de dernière minute, examen à jeun : nous nous adaptons.',
    reponseCourte:
      "BF Taxi assure le transport conventionné pour les entrées et sorties d'hospitalisation, les consultations et les examens dans les établissements de Saint-Étienne et de la Loire. Les sorties d'hospitalisation sont prises en charge sans réservation préalable, sur simple appel dès que le service vous libère.",
    intro: [
      "Une hospitalisation se planifie ; une sortie, beaucoup moins. Entre l'heure annoncée la veille et le moment où le service vous laisse effectivement partir, il s'écoule souvent plusieurs heures.",
      "Nous fonctionnons dans les deux modes : rendez-vous calé à la minute pour une entrée ou un examen à jeun, et prise en charge à l'appel pour une sortie dont l'heure reste incertaine.",
    ],
    points: [
      {
        titre: 'Sortie sur simple appel',
        texte: 'Appelez-nous quand le service vous libère : nous venons vous chercher sans réservation préalable, 24h/24.',
      },
      {
        titre: 'Examens à jeun',
        texte: 'Pour une convocation à 7h ou une coloscopie, nous prenons en charge très tôt, y compris avant l’ouverture des transports en commun.',
      },
      {
        titre: 'Retour accompagné',
        texte: "Après une anesthésie ambulatoire, vous ne pouvez pas conduire ni rentrer seul : nous vous raccompagnons jusqu'à votre domicile.",
      },
      {
        titre: 'Bagages et matériel',
        texte: 'Valise de séjour, déambulateur, attelle, matériel médical de sortie : le van accueille sans difficulté ce qui ne rentre pas dans une berline.',
      },
    ],
    sections: [
      {
        titre: 'Entrée à l’hôpital : anticiper la convocation',
        paragraphes: [
          "Les convocations pour une intervention programmée sont souvent fixées très tôt, avec obligation d'être à jeun. Nous calons l'heure de départ sur l'heure de convocation en intégrant le trajet réel, le stationnement et le temps nécessaire pour rejoindre le service depuis l'entrée principale — un détail qui fait facilement dix minutes au CHU Nord.",
          "Si vous entrez pour un séjour de plusieurs jours, précisez-le lors de la réservation : nous prévoyons la place pour vos affaires et vous déposons au plus près du service d'admission.",
        ],
      },
      {
        titre: 'Sortie d’hospitalisation : nous appeler au bon moment',
        paragraphes: [
          "Pour une sortie, l'idéal est de nous prévenir deux fois : un appel la veille pour nous annoncer la date, puis un second le jour même dès que le service confirme votre sortie effective. Le premier nous permet de réserver de la souplesse dans le planning, le second de partir immédiatement.",
          "Pensez à demander votre prescription médicale de transport au service avant de quitter l'établissement : sans elle, la course ne peut pas être facturée à l'Assurance Maladie et vous devrez la régler puis en demander le remboursement.",
        ],
      },
      {
        titre: 'Chirurgie ambulatoire et anesthésie',
        paragraphes: [
          "Après une anesthésie générale ou une sédation, la conduite est proscrite pendant vingt-quatre heures et les établissements refusent généralement de vous laisser repartir seul. Le transport en taxi conventionné répond à cette exigence : nous vous prenons en charge à la sortie du service et vous raccompagnons jusqu'à votre porte, pas seulement jusqu'au trottoir.",
        ],
      },
    ],
    faq: [
      {
        question: 'Puis-je réserver un taxi pour une sortie dont l’heure n’est pas connue ?',
        reponse:
          "Oui. Prévenez-nous la veille de la date de sortie, puis rappelez-nous le jour même dès que le service vous libère. Nous intervenons sans créneau fixé à l'avance, y compris le week-end.",
      },
      {
        question: 'Qui délivre la prescription de transport pour une sortie ?',
        reponse:
          "Le service hospitalier qui vous a pris en charge. Demandez-la avant de quitter l'établissement, en même temps que votre compte rendu et vos ordonnances : elle est nécessaire à la prise en charge par l'Assurance Maladie.",
      },
      {
        question: 'Intervenez-vous la nuit et les jours fériés ?',
        reponse:
          "Oui, nous sommes joignables 24h/24, 7j/7, jours fériés inclus. Les courses de nuit, du dimanche et des jours fériés relèvent des tarifs B ou D de l'arrêté préfectoral ; en transport conventionné, cette majoration est intégrée à la facturation CPAM et ne change rien pour vous.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-conventionne-cpam', 'taxi-pmr', 'transport-dialyse', 'transport-chimiotherapie'],
  },
  {
    slug: 'taxi-pmr',
    titre: 'Taxi pour personne âgée ou à mobilité réduite',
    navLabel: 'Mobilité réduite',
    metaTitle: 'Taxi personne âgée et mobilité réduite Saint-Étienne (42) | BF Taxi',
    metaDescription:
      "Transport de personnes âgées et à mobilité réduite à Saint-Étienne. Accompagnement de porte à porte, van à accès facilité, chauffeur formé. 07 82 33 34 45.",
    categorie: 'medical',
    icon: 'hands',
    accroche: 'Un accompagnement de porte à porte, à votre rythme.',
    reponseCourte:
      "BF Taxi transporte les personnes âgées et à mobilité réduite à Saint-Étienne et dans la Loire, avec accompagnement de porte à porte. Le van Mercedes Classe V, à portes coulissantes et seuil bas, facilite la montée à bord. Les trajets médicaux prescrits sont pris en charge par la CPAM.",
    intro: [
      "Perdre en mobilité ne devrait pas signifier renoncer à ses rendez-vous, à ses courses ou à ses visites. Notre rôle ne s'arrête pas à la conduite : il commence à votre porte et se termine à celle de votre destination.",
      "Nous prenons le temps qu'il faut pour l'installation, sans précipitation et sans regarder le compteur tourner.",
    ],
    points: [
      {
        titre: 'Porte à porte, réellement',
        texte: 'Nous venons sonner, nous vous accompagnons jusqu’au véhicule et jusqu’à l’accueil de votre destination.',
      },
      {
        titre: 'Accès facilité',
        texte: 'Portes coulissantes larges et hauteur de seuil réduite sur le van : la montée se fait sans avoir à se baisser.',
      },
      {
        titre: 'Aides à la marche transportées',
        texte: 'Déambulateur, canne, fauteuil roulant pliant : tout est chargé et déchargé par nos soins.',
      },
      {
        titre: 'Patience et repères',
        texte: 'Même chauffeur sur les trajets réguliers, rythme adapté, et le temps nécessaire pour s’installer.',
      },
    ],
    sections: [
      {
        titre: 'Au-delà du médical : garder son autonomie',
        paragraphes: [
          "Tous les déplacements ne sont pas des rendez-vous de santé. Courses hebdomadaires, visite à un proche en EHPAD, passage à la banque, cérémonie familiale : ces trajets comptent autant, et nous les assurons de la même façon, en course classique cette fois.",
          "Pour les familles éloignées, c'est aussi une solution de tranquillité : le règlement peut être organisé avec un proche, et nous confirmons par message que le trajet s'est bien déroulé.",
        ],
      },
      {
        titre: 'Ce que nous ne pouvons pas assurer',
        paragraphes: [
          "Par transparence : nous ne sommes pas une entreprise d'ambulance. Nous assurons le transport assis professionnalisé, c'est-à-dire le transport de personnes capables de s'installer dans un véhicule de tourisme, avec notre aide si nécessaire.",
          "Le transport allongé, le transport en fauteuil roulant sans transfert possible sur un siège, ou tout transport nécessitant une surveillance médicale relèvent de l'ambulance ou d'un véhicule TPMR homologué. Si votre situation le nécessite, nous vous le dirons franchement et vous orienterons vers le bon interlocuteur.",
        ],
      },
      {
        titre: 'Résidences, EHPAD et établissements',
        paragraphes: [
          "Nous intervenons régulièrement auprès des résidences seniors et des EHPAD du bassin stéphanois. Les contraintes de ces établissements — plages horaires de dépose, accueil à prévenir, transmission au personnel — nous sont familières. Les responsables d'établissement peuvent nous contacter directement pour organiser des transports récurrents.",
        ],
      },
    ],
    faq: [
      {
        question: 'Montez-vous jusqu’à l’appartement ?',
        reponse:
          "Oui. Nous sonnons à votre porte et vous accompagnons jusqu'au véhicule, y compris s'il y a des escaliers à descendre lentement. Signalez-nous simplement l'étage et l'absence d'ascenseur lors de la réservation, afin que nous prévoyions le temps nécessaire.",
      },
      {
        question: 'Transportez-vous les fauteuils roulants ?',
        reponse:
          "Nous transportons les fauteuils roulants pliants, chargés dans le coffre, à condition que la personne puisse être installée sur un siège du véhicule. Le transport en fauteuil roulant électrique non transférable nécessite un véhicule TPMR spécialement aménagé, que nous ne proposons pas.",
      },
      {
        question: 'Peut-on organiser des trajets réguliers pour un proche ?',
        reponse:
          "Oui, c'est même le cas le plus fréquent. Nous mettons en place un planning récurrent et pouvons convenir d'un règlement centralisé avec la famille plutôt qu'à chaque course.",
      },
    ],
    vehicule: 'mercedes-classe-v',
    servicesLies: ['taxi-conventionne-cpam', 'taxi-hospitalisation', 'transport-dialyse', 'taxi-groupe'],
  },
  {
    slug: 'taxi-aeroport-lyon-saint-exupery',
    titre: 'Taxi Saint-Étienne ↔ Aéroport Lyon-Saint-Exupéry',
    navLabel: 'Aéroport Lyon-Saint-Exupéry',
    metaTitle: 'Taxi Saint-Étienne Aéroport Lyon-Saint-Exupéry — Forfait, 24h/24 | BF Taxi',
    metaDescription:
      'Transfert taxi entre Saint-Étienne et l’aéroport Lyon-Saint-Exupéry : environ 1h05, prix annoncé avant le départ, van 7 places disponible. Réservation 07 82 33 34 45.',
    categorie: 'transfert',
    icon: 'plane',
    accroche: 'Environ 1h05 de porte à porte, prix connu avant de monter.',
    reponseCourte:
      "Le trajet entre Saint-Étienne et l'aéroport Lyon-Saint-Exupéry représente environ 85 km, soit 1h05 de route hors heures de pointe. BF Taxi assure ce transfert 24h/24 sur réservation, avec un prix annoncé à l'avance et un van Mercedes 7 places pour les familles et les groupes.",
    intro: [
      "L'aéroport Lyon-Saint-Exupéry est le point de départ international naturel des Stéphanois. Encore faut-il y arriver à l'heure, souvent très tôt ou très tard, avec des bagages.",
      "Nous assurons ce transfert quotidiennement. Le prix vous est communiqué avant le départ, vous savez donc exactement à quoi vous attendre.",
    ],
    points: [
      {
        titre: 'Prix annoncé à l’avance',
        texte: 'Vous connaissez le montant au moment de la réservation : pas de surprise au compteur à l’arrivée.',
      },
      {
        titre: 'Suivi de votre vol',
        texte: 'Au retour, nous vérifions l’heure d’atterrissage réelle : un vol retardé ne vous coûte pas d’attente inutile.',
      },
      {
        titre: 'Accueil en salle d’arrivée',
        texte: 'Sur demande, nous vous attendons à la sortie des bagages avec une pancarte à votre nom.',
      },
      {
        titre: 'Van pour les groupes',
        texte: 'Jusqu’à 7 passagers avec leurs valises dans le Mercedes Classe V : moins cher et plus simple que deux berlines.',
      },
    ],
    sections: [
      {
        titre: 'Combien de temps faut-il prévoir ?',
        paragraphes: [
          "Comptez 1h05 de trajet dans des conditions normales, par l'A47 puis la rocade est lyonnaise, ou par l'A72 selon votre point de départ. Aux heures de pointe, l'approche de Lyon peut ajouter vingt à trente minutes : nous en tenons compte systématiquement dans le calcul de l'heure de départ.",
          "Pour un vol international, prévoyez une arrivée à l'aéroport trois heures avant le décollage ; deux heures suffisent généralement pour un vol intérieur ou européen. Nous partons donc de Saint-Étienne environ quatre heures avant un long-courrier — indiquez-nous simplement votre numéro de vol et nous calculons l'heure de prise en charge.",
        ],
      },
      {
        titre: 'Taxi, Ouibus ou Rhônexpress : que choisir ?',
        paragraphes: [
          "Les navettes et la liaison train + Rhônexpress restent économiques pour un voyageur seul aux heures ouvrées. Le taxi devient plus pertinent dans trois cas : un vol très matinal ou tardif hors des horaires de navette, un groupe de trois personnes ou plus, et un déplacement avec des bagages volumineux ou du matériel.",
          "À partir de trois passagers, le van revient souvent moins cher que trois billets combinés train + Rhônexpress, avec un porte-à-porte direct et sans correspondance.",
        ],
      },
      {
        titre: 'Vols matinaux et retours de nuit',
        paragraphes: [
          "Les premiers départs de Saint-Exupéry décollent vers 6h : cela signifie une prise en charge à Saint-Étienne vers 3h du matin. Nous assurons ces courses toute l'année, y compris les dimanches et jours fériés. Réservez la veille au plus tard pour que le créneau soit garanti.",
        ],
      },
    ],
    faq: [
      {
        question: 'Combien coûte un taxi de Saint-Étienne à l’aéroport de Lyon ?',
        reponse: `Le trajet fait environ 85 km. Au tarif C de l'arrêté préfectoral de la Loire (aller simple de jour, ${eur(TARIFS.C.parKm)} €/km), l'estimation se situe autour de ${Math.round(85 * TARIFS.C.parKm + TARIF_CONSTANTS.priseEnCharge)} € prise en charge comprise. Les tarifs de nuit, du dimanche et des jours fériés relèvent du tarif D et sont plus élevés. Utilisez notre simulateur pour obtenir une estimation à partir de votre adresse exacte, ou demandez-nous un forfait ferme.`,
      },
      {
        question: 'Que se passe-t-il si mon vol a du retard ?',
        reponse:
          "Nous suivons votre numéro de vol et ajustons l'heure de prise en charge en conséquence, sans facturer l'attente due au retard de la compagnie. Envoyez-nous simplement votre numéro de vol lors de la réservation.",
      },
      {
        question: 'Combien de valises entrent dans le véhicule ?',
        reponse:
          "La Tesla Model 3 accepte deux grandes valises et deux bagages cabine. Le van Mercedes Classe V emporte sept à huit valises en plus des bagages à main, ce qui en fait le choix évident pour une famille ou un groupe.",
      },
      {
        question: 'Prenez-vous en charge le départ depuis d’autres communes de la Loire ?',
        reponse:
          "Oui : Saint-Chamond, Rive-de-Gier, Firminy, Montbrison, Andrézieux-Bouthéon, Roanne et l'ensemble du département. Rive-de-Gier et Saint-Chamond sont les mieux placées, à environ cinquante minutes de l'aéroport.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-aeroport-geneve', 'taxi-gare-chateaucreux', 'taxi-longue-distance', 'taxi-groupe'],
  },
  {
    slug: 'taxi-aeroport-geneve',
    titre: 'Taxi Saint-Étienne ↔ Aéroport de Genève et Clermont-Ferrand',
    navLabel: 'Genève & Clermont',
    metaTitle: 'Taxi Saint-Étienne Aéroport Genève et Clermont-Ferrand — Forfait | BF Taxi',
    metaDescription:
      'Transfert longue distance vers les aéroports de Genève (2h40) et Clermont-Ferrand Auvergne (1h50) depuis Saint-Étienne. Forfait ferme, van 7 places. 07 82 33 34 45.',
    categorie: 'transfert',
    icon: 'globe',
    accroche: 'Genève, Clermont-Ferrand, Saint-Étienne Bouthéon : les aéroports de la région au forfait.',
    reponseCourte:
      "BF Taxi assure les transferts depuis Saint-Étienne vers l'aéroport de Genève (environ 230 km, 2h40) et l'aéroport Clermont-Ferrand Auvergne (environ 150 km, 1h50), ainsi que vers l'aéroport Saint-Étienne — Bouthéon (17 km). Ces trajets longue distance sont proposés au forfait, communiqué avant le départ.",
    intro: [
      "Tous les vols ne partent pas de Lyon. Les liaisons vers la Suisse, l'Europe du Nord ou certaines destinations low cost passent par Genève ou Clermont-Ferrand, et les charters saisonniers décollent de Bouthéon, à vingt minutes de Saint-Étienne.",
      "Sur ces distances, nous travaillons au forfait : un montant ferme, arrêté avant le départ, quelle que soit la circulation.",
    ],
    points: [
      {
        titre: 'Forfait ferme',
        texte: 'Sur les longues distances, le prix est fixé à la réservation et n’évolue pas, même en cas d’embouteillage.',
      },
      {
        titre: 'Passage de frontière',
        texte: 'Genève est desservi côté français comme côté suisse selon votre terminal de départ.',
      },
      {
        titre: 'Départs de nuit',
        texte: 'Un vol à 6h à Genève implique un départ vers 2h30 de Saint-Étienne : nous assurons ces horaires.',
      },
      {
        titre: 'Confort longue route',
        texte: 'Sièges chauffants, climatisation multizone, recharge USB-C et espace pour se reposer.',
      },
    ],
    sections: [
      {
        titre: 'Aéroport de Genève : 2h40 de Saint-Étienne',
        paragraphes: [
          "L'aéroport de Genève se rejoint par l'A46 puis l'A40, soit environ 230 km. Comptez deux heures quarante hors trafic, un peu plus les vendredis soir et en période de vacances scolaires, l'axe étant très fréquenté vers les stations de ski.",
          "Genève dispose d'un secteur français et d'un secteur suisse. Précisez votre compagnie et votre terminal lors de la réservation : la dépose n'est pas au même endroit, et cela vous évite un transfert interne à pied avec vos bagages.",
        ],
      },
      {
        titre: 'Aéroport Clermont-Ferrand Auvergne : 1h50',
        paragraphes: [
          "Clermont-Ferrand Auvergne est à environ 150 km par la RN88 puis l'A72, soit une heure cinquante. C'est la porte d'entrée habituelle pour les liaisons vers Paris, Amsterdam et plusieurs destinations européennes en correspondance.",
        ],
      },
      {
        titre: 'Aéroport Saint-Étienne — Bouthéon : la solution de proximité',
        paragraphes: [
          "À dix-sept kilomètres du centre de Saint-Étienne, l'aéroport de Bouthéon concentre des vols charters et saisonniers. Les convocations y sont souvent fixées au milieu de la nuit pour des départs à l'aube : nous assurons les prises en charge dès 3h du matin sur réservation, y compris en van pour les familles nombreuses avec bagages.",
        ],
      },
    ],
    faq: [
      {
        question: 'Le forfait inclut-il les péages et le carburant ?',
        reponse:
          "Oui. Le forfait longue distance que nous communiquons avant le départ est un prix tout compris : péages, carburant et retour à vide du véhicule y sont intégrés. Aucun supplément n'est ajouté à l'arrivée.",
      },
      {
        question: 'Puis-je payer en plusieurs fois ou par virement ?',
        reponse:
          'Le règlement se fait par carte bancaire, espèces ou virement pour les clients professionnels. Pour les entreprises, nous établissons une facture mensuelle sur demande.',
      },
      {
        question: 'Quelle est la différence de prix entre le jour et la nuit ?',
        reponse:
          "L'arrêté préfectoral de la Loire distingue les courses de jour (tarifs A et C) des courses de nuit, du dimanche et des jours fériés (tarifs B et D), dont le prix au kilomètre est environ 50 % plus élevé. Sur un forfait longue distance, cette différence est intégrée au montant annoncé.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-aeroport-lyon-saint-exupery', 'taxi-longue-distance', 'taxi-groupe', 'taxi-gare-chateaucreux'],
  },
  {
    slug: 'taxi-gare-chateaucreux',
    titre: 'Taxi gare de Saint-Étienne Châteaucreux',
    navLabel: 'Gares',
    metaTitle: 'Taxi gare Châteaucreux Saint-Étienne — Prise en charge immédiate | BF Taxi',
    metaDescription:
      'Taxi au départ et à l’arrivée de la gare de Saint-Étienne Châteaucreux, ainsi que vers Lyon Part-Dieu et Perrache. Accueil sur le quai, 24h/24. 07 82 33 34 45.',
    categorie: 'transfert',
    icon: 'train',
    accroche: 'Réservé à l’avance, votre taxi vous attend quand le train arrive.',
    reponseCourte:
      "BF Taxi dessert la gare de Saint-Étienne Châteaucreux 24h/24, à l'arrivée comme au départ, ainsi que les gares de Lyon Part-Dieu et Perrache. Le chauffeur suit l'horaire réel de votre train et vous attend à l'arrivée, sans supplément en cas de retard SNCF.",
    intro: [
      "Châteaucreux concentre l'essentiel du trafic ferroviaire stéphanois, avec des TGV directs vers Paris et des liaisons cadencées vers Lyon. Aux heures creuses — un TGV de 22h50, un premier départ à 5h40 — la station de taxis n'est pas toujours garnie.",
      "Réserver garantit qu'un véhicule sera là, à l'heure, même en pleine nuit.",
    ],
    points: [
      {
        titre: 'Suivi du train en temps réel',
        texte: 'Nous contrôlons l’horaire réel d’arrivée : un train retardé ne vous fait pas perdre votre taxi.',
      },
      {
        titre: 'Accueil avec pancarte',
        texte: 'Sur demande, nous vous attendons sur le quai ou dans le hall avec une pancarte à votre nom.',
      },
      {
        titre: 'Départs très matinaux',
        texte: 'Premier TGV pour Paris : nous prenons en charge dès 4h30 du matin sur réservation la veille.',
      },
      {
        titre: 'Gares lyonnaises aussi',
        texte: 'Part-Dieu et Perrache sont à environ une heure : une alternative utile quand il n’y a plus de TER.',
      },
    ],
    sections: [
      {
        titre: 'Arrivée à Châteaucreux : comment nous retrouver',
        paragraphes: [
          "À la réservation, communiquez-nous votre numéro de train et son heure d'arrivée. Nous vous attendons devant la sortie principale, côté parvis, ou en accueil personnalisé dans le hall si vous le préférez.",
          "Si votre train a du retard, nous ajustons : c'est précisément l'intérêt de réserver plutôt que de compter sur la station.",
        ],
      },
      {
        titre: 'Vers les gares de Lyon',
        paragraphes: [
          "Lyon Part-Dieu est à environ 65 km et Perrache à 62 km, soit une heure de trajet dans de bonnes conditions. Ces transferts sont surtout demandés quand les TER ne circulent plus, en cas de mouvement social, ou pour un départ en TGV très matinal depuis Lyon.",
          "Pour un train à prendre à Part-Dieu, nous conseillons de partir de Saint-Étienne au moins deux heures avant, l'accès à la gare aux heures de pointe étant peu prévisible.",
        ],
      },
      {
        titre: 'Déplacements professionnels',
        paragraphes: [
          "Pour les entreprises stéphanoises qui reçoivent des collaborateurs ou des clients en TGV, nous organisons les accueils en gare avec facturation mensuelle. Les déplacements en Tesla Model 3 conviennent aux trajets d'affaires : habitacle silencieux permettant de téléphoner, Wi-Fi et recharge à bord.",
        ],
      },
    ],
    faq: [
      {
        question: 'Combien coûte un taxi de la gare de Châteaucreux au centre-ville ?',
        reponse:
          "Le centre-ville est à environ 3 km de Châteaucreux. Sur une distance aussi courte, c'est le minimum de perception de 8 € qui s'applique le plus souvent, les tarifs étant fixés par l'arrêté préfectoral de la Loire.",
      },
      {
        question: 'Faut-il réserver ou puis-je prendre un taxi à la station ?',
        reponse:
          "Une station de taxis existe devant la gare, mais son approvisionnement varie selon l'heure. Aux heures creuses, tôt le matin, tard le soir ou lors de l'arrivée simultanée de plusieurs trains, la réservation est la seule garantie.",
      },
      {
        question: 'Desservez-vous la gare de Carnot et celle de Bellevue ?',
        reponse:
          "Oui, ainsi que l'ensemble des haltes ferroviaires du bassin stéphanois : Carnot, Bellevue, Le Clapier, La Terrasse et les gares de la vallée du Gier et de l'Ondaine.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-aeroport-lyon-saint-exupery', 'taxi-longue-distance', 'taxi-mise-a-disposition', 'taxi-groupe'],
  },
  {
    slug: 'taxi-longue-distance',
    titre: 'Taxi longue distance depuis Saint-Étienne',
    navLabel: 'Longue distance',
    metaTitle: 'Taxi longue distance Saint-Étienne — Toute la France au forfait | BF Taxi',
    metaDescription:
      'Taxi toutes distances au départ de Saint-Étienne : Lyon, Paris, Marseille, Grenoble, Clermont-Ferrand. Forfait ferme tout compris, véhicule électrique ou van. 07 82 33 34 45.',
    categorie: 'transfert',
    icon: 'route',
    accroche: 'Un forfait ferme, un seul chauffeur, de porte à porte.',
    reponseCourte:
      "BF Taxi assure les trajets longue distance au départ de Saint-Étienne vers toute la France : Lyon (65 km), Grenoble (150 km), Clermont-Ferrand (145 km), Marseille (350 km) ou Paris (520 km). Le prix est fixé au forfait avant le départ, péages et carburant inclus.",
    intro: [
      "Train complet, grève, horaire impossible, matériel encombrant, mobilité réduite ou simple envie de ne pas avoir à changer trois fois : les raisons de faire une longue distance en taxi ne manquent pas.",
      "Sur ces trajets, nous travaillons au forfait : un prix ferme arrêté avant le départ, tout compris.",
    ],
    points: [
      {
        titre: 'Forfait tout compris',
        texte: 'Péages, carburant et retour à vide inclus dans le montant annoncé à la réservation.',
      },
      {
        titre: 'Porte à porte sans correspondance',
        texte: 'Vous partez de chez vous et vous arrivez à destination, sans gare ni changement.',
      },
      {
        titre: 'Confort sur la durée',
        texte: 'Sièges chauffants, climatisation, recharge, pauses à la demande : la route se fait à votre rythme.',
      },
      {
        titre: 'Transport conventionné possible',
        texte: 'Pour un transfert médical hors département, la prise en charge CPAM s’applique sous réserve d’accord préalable.',
      },
    ],
    sections: [
      {
        titre: 'Destinations les plus demandées',
        paragraphes: [
          "Lyon et son agglomération représentent l'essentiel de nos longues distances, suivies par Clermont-Ferrand, Grenoble et Valence. Les trajets vers Paris, Marseille ou la Côte d'Azur sont plus ponctuels, souvent liés à un transfert médical, un déménagement ou un impératif professionnel.",
        ],
        liste: [
          'Lyon et agglomération — 65 km, environ 1h',
          'Clermont-Ferrand — 145 km, environ 1h45',
          'Grenoble — 150 km, environ 1h50',
          'Valence — 120 km, environ 1h30',
          'Genève — 225 km, environ 2h35',
          'Marseille — 350 km, environ 3h30',
          'Paris — 520 km, environ 5h',
        ],
      },
      {
        titre: 'Comment est calculé le prix d’un long trajet ?',
        paragraphes: [
          "La réglementation prévoit qu'une course aller simple soit facturée au tarif C ou D, qui intègre le retour à vide du véhicule : le chauffeur doit en effet revenir, et ce trajet retour n'est pas facturé séparément. C'est ce qui explique que le prix au kilomètre d'un aller simple soit le double de celui d'un aller-retour.",
          "En pratique, sur les longues distances, nous convenons d'un forfait qui vous est communiqué avant le départ. Si vous prévoyez un retour avec nous le même jour ou le lendemain, le tarif aller-retour s'applique et le coût au kilomètre est nettement plus favorable : pensez à nous le signaler.",
        ],
      },
      {
        titre: 'Transferts médicaux hors département',
        paragraphes: [
          "Certains patients stéphanois sont suivis à Lyon, à Clermont-Ferrand ou dans un centre spécialisé plus lointain. Ces transports sont pris en charge par l'Assurance Maladie s'ils sont prescrits, avec une demande d'accord préalable généralement obligatoire au-delà de 150 km. Anticipez cette démarche avec votre médecin : l'accord met quelques jours à être délivré.",
        ],
      },
    ],
    faq: [
      {
        question: 'Le retour à vide du chauffeur est-il facturé ?',
        reponse:
          "Il est déjà inclus. Sur un aller simple, la réglementation applique le tarif C ou D, dont le prix au kilomètre intègre le trajet retour du véhicule. Vous ne payez donc pas deux fois : le forfait annoncé est bien le montant total.",
      },
      {
        question: 'Un aller-retour dans la journée coûte-t-il moins cher ?',
        reponse:
          "Oui, nettement. Un aller-retour relève des tarifs A ou B, environ deux fois moins élevés au kilomètre que les tarifs aller simple. Si vous revenez avec nous, même quelques heures plus tard, indiquez-le dès la réservation.",
      },
      {
        question: 'Peut-on faire des pauses sur un trajet de plusieurs heures ?',
        reponse:
          "Bien sûr, et elles sont recommandées. Les arrêts courts sur aire d'autoroute sont intégrés au forfait ; seule une immobilisation prolongée à votre demande relèverait du tarif horaire d'attente.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-aeroport-lyon-saint-exupery', 'taxi-aeroport-geneve', 'taxi-mise-a-disposition', 'taxi-groupe'],
  },
  {
    slug: 'taxi-groupe',
    titre: 'Taxi van 7 places à Saint-Étienne — Groupes et familles',
    navLabel: 'Van 7 places',
    metaTitle: 'Taxi van 7 places Saint-Étienne — Mercedes Classe V groupes | BF Taxi',
    metaDescription:
      'Van taxi Mercedes Classe V jusqu’à 7 passagers à Saint-Étienne : familles, groupes, séminaires, mariages, transferts aéroport avec bagages. 07 82 33 34 45.',
    categorie: 'confort',
    icon: 'users',
    accroche: 'Jusqu’à 7 passagers et leurs bagages, dans un seul véhicule.',
    reponseCourte:
      "BF Taxi dispose d'un van Mercedes Classe V permettant de transporter jusqu'à 7 passagers avec leurs bagages depuis Saint-Étienne. Il est utilisé pour les transferts aéroport en famille, les groupes, les séminaires et les événements. À partir de 3 personnes, il revient souvent moins cher que plusieurs véhicules ou billets individuels.",
    intro: [
      "Dès qu'on dépasse quatre personnes, tout se complique : deux véhicules à réserver, deux prix à payer, deux arrivées à coordonner. Le van résout le problème.",
      "Le Mercedes Classe V emporte sept passagers et leurs valises dans un seul trajet, avec un vrai espace aux jambes et des portes coulissantes larges.",
    ],
    points: [
      {
        titre: 'Un seul véhicule, un seul prix',
        texte: 'Sept passagers voyagent ensemble : à partir de trois personnes, c’est généralement plus économique que le train ou deux berlines.',
      },
      {
        titre: 'Volume de bagages réel',
        texte: 'Sept à huit valises en soute, en plus des bagages cabine : dimensionné pour un départ en vacances.',
      },
      {
        titre: 'Montée à bord facilitée',
        texte: 'Portes coulissantes larges et seuil bas : appréciable avec des enfants, des personnes âgées ou du matériel.',
      },
      {
        titre: 'Sièges enfants sur demande',
        texte: 'Réhausseurs et sièges bébé fournis gratuitement si vous nous les signalez à la réservation.',
      },
    ],
    sections: [
      {
        titre: 'Départ en vacances en famille',
        paragraphes: [
          "Un départ à cinq ou six avec valises, poussette et sacs à dos ne rentre pas dans une berline. Le van règle la question en un seul trajet, sans avoir à coordonner deux véhicules ni à limiter les bagages.",
          "Pour un vol au départ de Lyon-Saint-Exupéry, comptez environ 1h05 depuis Saint-Étienne. Nous chargeons les bagages, installons les sièges enfants et vous déposons directement au terminal correspondant à votre compagnie.",
        ],
      },
      {
        titre: 'Entreprises, séminaires et événements',
        paragraphes: [
          "Accueil d'une délégation en gare de Châteaucreux, navette entre un hôtel et un lieu de séminaire, transfert d'une équipe vers un salon professionnel : le van permet de déplacer un groupe sans le disperser.",
          "Pour les entreprises, nous mettons en place une facturation mensuelle avec un récapitulatif détaillé des courses, plutôt qu'un règlement à chaque trajet.",
        ],
      },
      {
        titre: 'Mariages et occasions familiales',
        paragraphes: [
          "Transport des mariés, navettes pour les invités entre le lieu de cérémonie et la salle de réception, retours de fin de soirée : le van assure ces rotations. Pour un événement, nous réservons le véhicule sur une plage horaire donnée en mise à disposition, plutôt qu'à la course.",
        ],
      },
    ],
    faq: [
      {
        question: 'Combien de passagers peut prendre le van ?',
        reponse: `Jusqu'à 7 passagers en plus du chauffeur. À partir de la ${TARIF_CONSTANTS.passagersSansSupplement + 1}e personne transportée, un supplément réglementaire de ${eur(TARIF_CONSTANTS.supplementPassager)} € par passager s'applique, conformément à l'arrêté préfectoral de la Loire — quatre personnes voyagent donc sans supplément.`,
      },
      {
        question: 'Le van coûte-t-il plus cher que la berline ?',
        reponse:
          "Le tarif au kilomètre est identique : il est fixé par l'arrêté préfectoral, indépendamment du véhicule. Seul le supplément à partir du 4e passager s'ajoute. À plusieurs, le van est donc l'option la plus économique.",
      },
      {
        question: 'Fournissez-vous des sièges enfants ?',
        reponse:
          "Oui, réhausseurs et sièges bébé sont fournis gratuitement. Indiquez-nous l'âge et le nombre d'enfants à la réservation afin que nous installions le matériel adapté avant votre départ.",
      },
      {
        question: 'Peut-on transporter des vélos ou du matériel volumineux ?',
        reponse:
          "Selon le volume, c'est souvent possible en rabattant une rangée de sièges, ce qui réduit d'autant le nombre de places. Décrivez-nous le matériel à la réservation : nous vous dirons franchement si cela entre ou non.",
      },
    ],
    vehicule: 'mercedes-classe-v',
    servicesLies: ['taxi-aeroport-lyon-saint-exupery', 'taxi-mise-a-disposition', 'taxi-longue-distance', 'taxi-pmr'],
  },
  {
    slug: 'taxi-mise-a-disposition',
    titre: 'Mise à disposition avec chauffeur à l’heure ou à la journée',
    navLabel: 'Mise à disposition',
    metaTitle: 'Taxi mise à disposition Saint-Étienne — Chauffeur à l’heure | BF Taxi',
    metaDescription:
      'Chauffeur à disposition à l’heure ou à la journée à Saint-Étienne : tournées professionnelles, événements, journées médicales. Tarif horaire réglementé. 07 82 33 34 45.',
    categorie: 'confort',
    icon: 'clock',
    accroche: 'Un véhicule et un chauffeur réservés pour vous, le temps qu’il faut.',
    reponseCourte: `BF Taxi propose la mise à disposition d'un véhicule avec chauffeur à l'heure ou à la journée à Saint-Étienne et dans la Loire. Le tarif horaire réglementé dans la Loire est de ${eur(TARIF_CONSTANTS.tarifHoraire)} €. Cette formule convient aux tournées professionnelles, aux événements et aux journées à rendez-vous multiples.`,
    intro: [
      "Certaines journées ne se découpent pas en courses : une tournée commerciale avec six rendez-vous, un mariage avec des rotations, une visite de site sur plusieurs communes.",
      "Dans ces cas, plutôt que de réserver et payer chaque trajet séparément, nous bloquons le véhicule et le chauffeur sur la plage horaire que vous nous indiquez.",
    ],
    points: [
      {
        titre: 'Le véhicule reste avec vous',
        texte: 'Pas de nouvelle réservation entre deux rendez-vous : le chauffeur vous attend et repart avec vous.',
      },
      {
        titre: 'Tarif horaire réglementé',
        texte: `${eur(TARIF_CONSTANTS.tarifHoraire)} € de l’heure dans la Loire, selon l’arrêté préfectoral en vigueur.`,
      },
      {
        titre: 'Itinéraire modifiable',
        texte: 'Un rendez-vous ajouté, un autre annulé : le programme s’ajuste en cours de journée.',
      },
      {
        titre: 'Facturation entreprise',
        texte: 'Facture mensuelle récapitulative pour les professionnels, sur simple demande.',
      },
    ],
    sections: [
      {
        titre: 'Pour qui ?',
        paragraphes: [
          "Les commerciaux et techniciens itinérants qui enchaînent les rendez-vous sur la journée, les entreprises qui accueillent des clients ou des candidats, les organisateurs d'événements qui ont besoin de rotations, et les familles qui accompagnent un proche sur une journée d'examens médicaux multiples.",
        ],
        liste: [
          'Tournées commerciales sur plusieurs communes',
          'Accueil de clients ou de délégations',
          'Mariages, cérémonies et soirées d’entreprise',
          'Journées d’examens ou de rendez-vous médicaux enchaînés',
          'Visites immobilières ou de sites industriels',
        ],
      },
      {
        titre: 'Comment ça se facture ?',
        paragraphes: [
          `La mise à disposition s'appuie sur le tarif horaire fixé par l'arrêté préfectoral de la Loire, soit ${eur(TARIF_CONSTANTS.tarifHoraire)} € de l'heure. Lorsque le véhicule roule, c'est la distance parcourue qui est comptée au tarif kilométrique ; lorsqu'il attend, c'est le tarif horaire qui s'applique. Le taximètre effectue ce basculement automatiquement.`,
          "Pour une journée complète ou un événement, nous pouvons convenir d'un forfait global à l'avance, ce qui vous donne un budget ferme et vous évite d'avoir à surveiller le détail.",
        ],
      },
    ],
    faq: [
      {
        question: 'Quelle est la durée minimale d’une mise à disposition ?',
        reponse:
          "Nous partons généralement sur deux heures minimum, ce qui correspond au seuil à partir duquel la formule devient plus intéressante que des courses séparées. En dessous, une course classique reste plus avantageuse pour vous.",
      },
      {
        question: 'Puis-je modifier le programme en cours de journée ?',
        reponse:
          "Oui, c'est tout l'intérêt de la formule. Le véhicule et le chauffeur vous sont réservés : ajouter une étape ou en supprimer une ne pose aucun problème tant que l'on reste dans la plage horaire convenue.",
      },
      {
        question: 'Le van est-il disponible en mise à disposition ?',
        reponse:
          "Oui, les deux véhicules sont proposés dans cette formule. Le van est le plus demandé pour les événements et les groupes, la berline pour les déplacements professionnels individuels.",
      },
    ],
    vehicule: 'les-deux',
    servicesLies: ['taxi-groupe', 'taxi-longue-distance', 'taxi-gare-chateaucreux', 'taxi-aeroport-lyon-saint-exupery'],
  },
];

export const CATEGORIES: Record<Service['categorie'], { label: string; description: string }> = {
  quotidien: {
    label: 'Courses du quotidien',
    description: 'En ville, en soirée, pour un rendez-vous ou une sortie : le taxi tout simplement.',
  },
  medical: {
    label: 'Transport médical conventionné',
    description: "Trajets de soins pris en charge par l'Assurance Maladie, sur prescription médicale.",
  },
  transfert: {
    label: 'Transferts et longue distance',
    description: 'Aéroports, gares et trajets toutes distances, au forfait annoncé à l’avance.',
  },
  confort: {
    label: 'Groupes et mise à disposition',
    description: 'Van 7 places et chauffeur à disposition pour vos événements et déplacements professionnels.',
  },
};

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function servicesParCategorie(categorie: Service['categorie']): Service[] {
  return SERVICES.filter((s) => s.categorie === categorie);
}

/** Résout `servicesLies` en objets, en ignorant silencieusement un slug obsolète. */
export function servicesLies(service: Service): Service[] {
  return service.servicesLies
    .map(getService)
    .filter((s): s is Service => Boolean(s) && s!.slug !== service.slug);
}

// Garde-fou : un slug de maillage interne cassé ferait une carte vide en page.
// L'erreur est levée au build, jamais en production.
for (const service of SERVICES) {
  for (const lie of service.servicesLies) {
    if (!SERVICES.some((s) => s.slug === lie)) {
      throw new Error(
        `services.ts — le service « ${service.slug} » référence « ${lie} », qui n'existe pas.`
      );
    }
  }
}
