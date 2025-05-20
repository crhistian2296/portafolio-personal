export type UiKeys = keyof typeof ui[typeof defaultLang];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
};

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

export const defaultLang = 'es';

export const showDefaultLang = false; // Or true, depending on preference for /es/ vs /

export const ui = {
  es: {
    'about.title': 'Sobre Mí (ES)', // Placeholder
    'about.description': 'Descripción sobre mí. (ES)', // Placeholder
    'about.skills': 'Habilidades (ES)', // Placeholder
    'about.downloadCv': 'Descargar CV (ES)', // Placeholder
    // Nav
    'nav.brand': 'Portafolio (ES)',
    'nav.home': 'Inicio (ES)',
    'nav.about': 'Sobre Mí (ES)',
    'nav.projects': 'Proyectos (ES)',
    'nav.contact': 'Contacto (ES)',
    // Language Names
    'lang.es': 'Español',
    'lang.en': 'Inglés',
    'lang.fr': 'Francés',
    // Footer
    'footer.rights': '© {year} Crhistian Garces. Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con Astro y Tailwind CSS.',
    'footer.using': 'Usando',
    'footer.nav.title': 'Navegación',
    'footer.nav.about': 'Sobre Mí',
    'footer.nav.projects': 'Proyectos',
    'footer.nav.contact': 'Contacto',
    'footer.title': 'Portafolio Personal ES',
    'footer.description': 'Desarrollador web apasionado por crear experiencias digitales excepcionales. (ES)',
    'footer.legal.title': 'Legal (ES)',
    'footer.legal.privacy': 'Política de Privacidad (ES)',
    'footer.legal.terms': 'Términos de Servicio (ES)',
    'social.github': 'GitHub (ES)',
    'social.linkedin': 'LinkedIn (ES)',
    'social.x': 'X (Twitter) (ES)',
    // Theme Toggle
    'theme.light': 'Cambiar a modo claro (ES)',
    'theme.dark': 'Cambiar a modo oscuro (ES)',
    // Projects Section
    'projects.title': 'Proyectos (ES)',
    'projects.description': 'Aquí hay algunos de los proyectos en los que he trabajado. (ES)', // Placeholder, please translate
    'projects.view_project': 'Ver Proyecto (ES)',
    'projects.view_code': 'Ver Código (ES)',
    'projects.list': [
      {
        id: 'meteoapp',
        title: 'MeteoApp (ES)',
        description: 'Aplicación meteorológica que muestra el clima actual y el pronóstico para los próximos días. Desarrollada con React y la API de OpenWeatherMap. (ES)',
        tags: ['React', 'API', 'Tailwind CSS'],
        image: '/images/projects/meteoapp.jpg',
        demoUrl: 'https://crhistian2296.github.io/MeteoApp/',
        codeUrl: 'https://github.com/crhistian2296/MeteoApp',
      },
      {
        id: 'journalapp',
        title: 'JournalApp (ES)',
        description: 'Aplicación de diario personal con autenticación y almacenamiento en la nube. Desarrollada con React, Firebase y Redux. (ES)',
        tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
        image: '/images/projects/journalapp.jpg',
        demoUrl: 'https://journal-app-six-rho.vercel.app/',
        codeUrl: 'https://github.com/crhistian2296/JournalApp',
      },
    ],
    // Contact Section
    'contact.title': 'Contacto (ES)',
    'contact.email': 'Correo Electrónico (ES)',
    'contact.phone': 'Teléfono (ES)',
    'contact.location': 'Ubicación (ES)',
    'contact.city': 'Ciudad, País (ES)',
    'contact.subtitle': 'Ponte en Contacto (ES)',
    'contact.description': 'Si tienes alguna pregunta o propuesta, no dudes en contactarme. (ES)',
    'contact.form.name': 'Nombre (ES)',
    'contact.form.email': 'Correo Electrónico (ES)',
    'contact.form.subject': 'Asunto (ES)',
    'contact.form.message': 'Mensaje (ES)',
    'contact.form.submit': 'Enviar Mensaje (ES)',
  },
  en: {
    'about.title': 'About Me (EN)', // Placeholder
    'about.description': 'Description about me. (EN)', // Placeholder
    'about.skills': 'Skills (EN)', // Placeholder
    'about.downloadCv': 'Download CV (EN)', // Placeholder
    // Nav
    'nav.brand': 'Portfolio (EN)',
    'nav.home': 'Home (EN)',
    'nav.about': 'About (EN)',
    'nav.projects': 'Projects (EN)',
    'nav.contact': 'Contact (EN)',
    // Projects Section
    'projects.title': 'Projects (EN)',
    'projects.description': 'Here are some of the projects I have worked on. (EN)', // Placeholder, please translate
    'projects.view_project': 'View Project (EN)',
    'projects.view_code': 'View Code (EN)',
    'projects.list': [
      {
        id: 'meteoapp',
        title: 'MeteoApp (EN)',
        description: 'Weather application that displays the current weather and forecast for the coming days. Developed with React and the OpenWeatherMap API. (EN)',
        tags: ['React', 'API', 'Tailwind CSS'],
        image: '/images/projects/meteoapp.jpg',
        demoUrl: 'https://crhistian2296.github.io/MeteoApp/',
        codeUrl: 'https://github.com/crhistian2296/MeteoApp',
      },
      {
        id: 'journalapp',
        title: 'JournalApp (EN)',
        description: 'Personal diary application with authentication and cloud storage. Developed with React, Firebase, and Redux. (EN)',
        tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
        image: '/images/projects/journalapp.jpg',
        demoUrl: 'https://journal-app-six-rho.vercel.app/',
        codeUrl: 'https://github.com/crhistian2296/JournalApp',
      },
    ],
    // Theme Toggle
    'theme.light': 'Switch to light mode (EN)',
    'theme.dark': 'Switch to dark mode (EN)',
    // Contact Section
    'contact.title': 'Contact (EN)',
    'contact.email': 'Email (EN)',
    'contact.phone': 'Phone (EN)',
    'contact.location': 'Location (EN)',
    'contact.city': 'City, Country (EN)',
    'contact.subtitle': 'Get in Touch (EN)',
    'contact.description': 'If you have any questions or proposals, feel free to contact me. (EN)',
    'contact.form.name': 'Name (EN)',
    'contact.form.email': 'Email (EN)',
    'contact.form.subject': 'Subject (EN)',
    'contact.form.message': 'Message (EN)',
    'contact.form.submit': 'Send Message (EN)',
  },
  fr: {
    'about.title': 'À Propos de Moi (FR)', // Placeholder
    'about.description': 'Description à propos de moi. (FR)', // Placeholder
    'about.skills': 'Compétences (FR)', // Placeholder
    'about.downloadCv': 'Télécharger CV (FR)', // Placeholder
    // Nav
    'nav.brand': 'Portfolio (FR)',
    'nav.home': 'Accueil (FR)',
    'nav.about': 'À Propos (FR)',
    'nav.projects': 'Projets (FR)',
    'nav.contact': 'Contact (FR)',
    // Projects Section
    'projects.title': 'Projets (FR)',
    'projects.description': 'Voici quelques-uns des projets sur lesquels j’ai travaillé. (FR)', // Placeholder, please translate
    'projects.view_project': 'Voir le Projet (FR)',
    'projects.view_code': 'Voir le Code (FR)',
    'projects.list': [
      {
        id: 'meteoapp',
        title: 'MeteoApp (FR)',
        description: 'Application météo qui affiche la météo actuelle et les prévisions pour les jours à venir. Développée avec React et l’API OpenWeatherMap. (FR)',
        tags: ['React', 'API', 'Tailwind CSS'],
        image: '/images/projects/meteoapp.jpg',
        demoUrl: 'https://crhistian2296.github.io/MeteoApp/',
        codeUrl: 'https://github.com/crhistian2296/MeteoApp',
      },
      {
        id: 'journalapp',
        title: 'JournalApp (FR)',
        description: 'Application de journal personnel avec authentification et stockage cloud. Développée avec React, Firebase et Redux. (FR)',
        tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
        image: '/images/projects/journalapp.jpg',
        demoUrl: 'https://journal-app-six-rho.vercel.app/',
        codeUrl: 'https://github.com/crhistian2296/JournalApp',
      },
    ],
    // Theme Toggle
    'theme.light': 'Passer en mode clair (FR)',
    'theme.dark': 'Passer en mode sombre (FR)',
    // Contact Section
    'contact.title': 'Contact (FR)',
    'contact.email': 'Email (FR)',
    'contact.phone': 'Téléphone (FR)',
    'contact.location': 'Localisation (FR)',
    'contact.city': 'Ville, Pays (FR)',
    'contact.subtitle': 'Contactez-moi (FR)',
    'contact.description': 'Si vous avez des questions ou des propositions, n\'hésitez pas à me contacter. (FR)',
    'contact.form.name': 'Nom (FR)',
    'contact.form.email': 'Email (FR)',
    'contact.form.subject': 'Sujet (FR)',
    'contact.form.message': 'Message (FR)',
    'contact.form.submit': 'Envoyer le Message (FR)',
  },
} as const;
