export interface Experience {
  company: string;
  role?: string;
  period: string;
  location?: string;
  subtitle?: string;
  tasks: string[];
}

export interface Education {
  degree: string;
  year: string;
  institution?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  logo: 'opswat' | 'anthropic';
}

export interface Language {
  name: string;
  level: string;
}

export interface Interest {
  category: string;
  items: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    verticalSidebarTitle: string;
    email: string;
    phone: string;
    city: string;
  };
  profile: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: string[];
  languages: Language[];
  interests: Interest[];
}

export const cvData: CVData = {
  personalInfo: {
    name: "HAMZA JAWAB",
    title: "TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT INFORMATIQUE",
    verticalSidebarTitle: "HAMZA JAWAB : TECHNICIEN SPÉCIALISÉ EN DÉVELOPPEMENT INFORMATIQUE",
    email: "hamzajawab303@gmail.com",
    phone: "0664155867",
    city: "BERRECHID",
  },
  profile:
    "technicien spécialise en développement d’informatique. J’aimerais mettre en pratique mes compétences à travers la participation à la réalisation de vos projets. Je suis apte à relever tous les défis et à proposer des solutions adéquates",
  experiences: [
    {
      company: 'Binteg Partenaire Officiel "Odoo"',
      period: "Avril 2026 - Juillet 2026",
      tasks: ["Développeur full stack"],
    },
    {
      company: 'Groupe ONCF "Assistant"',
      period: "Décembre 2025 - Janvier 2025",
      subtitle: "Stagiaire pour la Coupe d'Afrique des Nations à la gare de Berrechid",
      tasks: [
        "Assistant et guide",
        "Travail de bureau",
        "Travail à la billetterie",
      ],
    },
    {
      company: "société SOTAMO SARL",
      period: "Avril 2025 - Novembre 2025",
      tasks: [
        "Chargé de Recouvrement Téléphonique",
        "Le service commercial",
        "j'ai travaillé avec un programme Sage 100",
        'Traitement des données de paiement " Releve payement "',
        "Créer des factures pour les clients",
        "Moniteur de données du véhicule",
        "Saisie de stock",
      ],
    },
    {
      company: "société boutzil equipement",
      period: "Aout 2024 - Novembre 2024",
      tasks: [
        'Les travaux dans le domaine les marche public dans "portail marocain des marchés publics"',
      ],
    },
    {
      company: 'Société KA PREFA SARL " stage pfe "',
      period: "Octobre 2023 - Janvier 2024",
      tasks: ["Le service informatique", "Le service commercial"],
    },
    {
      company: 'Société OULD BOUAZZA SARL " stage "',
      period: "Mai 2023 - Juin 2023",
      tasks: ["Le service informatique"],
    },
    {
      company: 'Société OULD BOUAZZA SARL " stage "',
      period: "Avril 2022 - Mai 2022",
      tasks: ["Le service commercial"],
    },
    {
      company: 'SOCIÉTÉ YOOZAK " STAGE A DISTANCE "',
      period: "Décembre 2022 - Janvier 2023",
      tasks: [
        'création site web " WORDPRESS "',
        "EN PHASE D'ÉTUDE",
        "Année de travail dans dropshipping (EBay, Etsy)",
        'expérience dans la conception de sites Web "Canva"',
        "Dans toutes les actualités que j'ai mentionnées, j'ai travaillé avec un programme (Sage 100 et SageX3)",
      ],
    },
  ],
  education: [
    {
      degree: "Baccalauréat Sciences de la vie et de la terre(SVT)",
      year: "2020",
    },
    {
      degree: 'Economie Université Hassan I, Settat 1 " L\'étude est en cours "',
      year: "2020",
    },
    {
      degree: 'Technicien spécialisé Développement informatique "TSDI"',
      year: "2023",
    },
    {
      degree:
        'formation en métier des centres d\'appels auprès du centre d\'appel "inova sourcing "',
      year: "2025",
    },
  ],
  certifications: [
    {
      title: "Introduction à la protection des infrastructures critiques (CIP)",
      issuer: "OPSWAT Academy",
      issueDate: "sept. 2026",
      expiryDate: "août 2027",
      credentialId: "V1vYS3KkzQ",
      logo: "opswat",
    },
    {
      title: "Claude Code en action",
      issuer: "Anthropic",
      issueDate: "sept. 2026",
      credentialId: "9t77f43g3eh6",
      logo: "anthropic",
    },
    {
      title: "Certificat de réussite : Introduction à Claude Cowork",
      issuer: "Anthropic",
      issueDate: "sept. 2026",
      credentialId: "jd4arquubafk",
      logo: "anthropic",
    },
    {
      title: "Certificat de réussite : Claude 101",
      issuer: "Anthropic",
      issueDate: "sept. 2026",
      credentialId: "8nzsxa7im6xj",
      logo: "anthropic",
    },
    {
      title: "Certificat de réussite : Plateforme Claude 101",
      issuer: "Anthropic",
      issueDate: "sept. 2026",
      credentialId: "b7zreoc6bjoc",
      logo: "anthropic",
    },
    {
      title: "Certificat de réussite : Claude Code 101",
      issuer: "Anthropic",
      issueDate: "sept. 2026",
      credentialId: "e75ibsaba5kn",
      logo: "anthropic",
    },
  ],
  skills: [
    'MAÎTRISE DES OUTILS MICROSOFT OFFICE " WORD, EXCEL, POWERPOINT, OUTLOOK,ACCESS "',
    'EXPÉRIENCE EN DÉVELOPPEMENT WEB AVEC " HTML, CSS, ET JAVASCRIPT, VB.NET "',
    "EXPÉRIENCE EN CRÉATION ET GESTION DE SITES WEB SOUS WORDPRESS",
    "EXPÉRIENCE EN INTÉGRATION DE FONCTIONNALITÉS ECOMMERCE AVEC WOOCOMMERCE",
    "GESTION EFFICACE DES COMPTES LINKEDIN, INSTAGRAM, FACEBOOK, ET X (ANCIENNEMENT TWITTER)",
  ],
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Anglais", level: "Très bien" },
    { name: "Français", level: "Bien" },
  ],
  interests: [
    { category: "SPORTS", items: "Football, Jeu électronique" },
    { category: "VOYAGES", items: "Partout au Maroc et dans le monde" },
  ],
};
