// src/i18n/ui.ts
export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
};

export const defaultLang = 'es';

export const ui = {
  // ================================= ENGLISH =================================
  en: {
    // --- NAVIGATION ---
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',

    // --- FOOTER ---
    'footer.rights': 'All rights reserved.',
    'footer.name': 'CRHISTIAN ALEXANDER GARCÍA URBANO',

    // --- CONTACT (part of About Me page) ---
    'contact.title': 'Contact',
    'contact.phone': 'Phone',
    'control.phone.value': '641 450 887',
    'contact.email': 'Email',
    'contact.email.value': 'ca.garcia.urbano@gmail.com',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.value': 'Crhistian Alexander Garcia Urbano',
    'contact.linkedin.url':
      'https://www.linkedin.com/in/crhistian-alexander-garcia-urbano-51251a11b0/',
    'contact.github': 'Github',
    'contact.github.value': 'crhistian2296',
    'contact.github.url': 'https://github.com/crhistian2296',

    // --- PROFILE (part of About Me page) ---
    'profile.rol': 'Senior Frontend Developer',
    'profile.title': 'Personal Profile',
    'profile.description':
      'Frontend Developer with over 5 years of experience building scalable, maintainable, and high-impact user interfaces with React and TypeScript. Expert in defining modern frontend architectures, ensuring code quality through testing and refactoring, and collaborating with design teams using Figma and Storybook. Highly curious about technology, with an active interest in integrating AI into the software development lifecycle using tools like GitHub Copilot, Cursor, and Claude Code.',

    // --- EXPERIENCE ---
    'experience.title': 'Work Experience',
    'experience.metaDescription':
      'Discover my professional journey and work experience.',

    // KEIFI (NEW)
    'experience.keifi.location': 'Madrid, Spain',
    'experience.keifi.company': 'Keifi by Izertis',
    'experience.keifi.role': 'Senior Frontend Developer',
    'experience.keifi.period': 'June 2025 – Present',
    'experience.keifi.resp1':
      'Implementation of scalable, maintainable components with Next.js, Vue 3, JavaScript, and TypeScript.',
    'experience.keifi.resp2':
      'Collaboration in multidisciplinary teams using Git, GitHub, and Gitflow strategy.',
    'experience.keifi.resp3': 'Internationalization of applications with i18n.',
    'experience.keifi.resp4':
      'Code contribution following CI/CD pipelines, focusing on Clean Code and readability.',
    'experience.keifi.resp5':
      'Refactoring for improved codebase organization and maintainability.',
    'experience.keifi.resp6': 'Integration of REST APIs and microservices.',
    'experience.keifi.resp7':
      'Working with Storybook and Design Systems to build consistent interfaces.',
    'experience.keifi.resp8':
      'Security remediation (OWASP Top 10) using SonarQube and ESLint (SAST).',

    // BITBAN (UPDATED)
    'experience.bitban.location': 'Madrid, Spain',
    'experience.bitban.company': 'Bitban Technologies',
    'experience.bitban.role': 'Frontend Developer',
    'experience.bitban.period': 'January 2023 – May 2025',
    'experience.bitban.resp1':
      'Implementation of pixel-perfect UI/UX designs from Figma using CSS3 and Sass.',
    'experience.bitban.resp2':
      'Development of interfaces with React 18, Next.js, TSX, and Redux.',
    'experience.bitban.resp3':
      'Optimization of web performance, SEO, accessibility, and responsive design.',
    'experience.bitban.resp4':
      'Code testing and debugging with Vitest and React Testing Library.',
    'experience.bitban.resp5':
      'Automation of security checks (SAST, OWASP) in Jenkins CI/CD pipelines using SonarQube.',

    // INNOVATION STRATEGIES (UPDATED)
    'experience.innovation.location': 'Madrid, Spain',
    'experience.innovation.company': 'Innovation Strategies',
    'experience.innovation.role': 'Junior Developer',
    'experience.innovation.period': 'October 2021 – December 2022',
    'experience.innovation.resp1':
      'Development of SPAs using React 18 and Next.js.',
    'experience.innovation.resp2':
      'Creation of custom hooks to separate logic and view in components.',
    'experience.innovation.resp3':
      'Manipulation of WebSockets for real-time user communication.',
    'experience.innovation.resp4':
      'Use of Vite with Hot Module Replacement (HMR) for efficient development.',

    // UNIVALLE (UPDATED)
    'experience.univalle.location': 'Cali, Colombia',
    'experience.univalle.company':
      'Universidad del Valle, Management Department',
    'experience.univalle.role': 'Junior Web Programmer',
    'experience.univalle.period': 'February 2020 – September 2021',
    'experience.univalle.resp1':
      'Support in the development and maintenance of the institutional website with React 16 and Next.js.',
    'experience.univalle.resp2':
      'Interface improvement ensuring visual coherence and accessibility using Less.',
    'experience.univalle.resp3':
      'Project configuration and view optimization with Webpack.',

    'experience.responsibilities': 'Key Responsibilities',
    'experience.technologiesUsed': 'Technologies Used',

    // --- PROJECTS ---
    'projects.title': 'Personal Projects',
    'projects.metaDescription':
      'Explore a collection of my personal projects and contributions.',
    'projects.repository': 'Repository',
    'projects.liveDemo': 'Live Demo',
    'projects.technologiesUsed': 'Technologies Used',

    'projects.dynamicworkflow.title': 'DynamicWorkflow',
    'projects.dynamicworkflow.description':
      'A powerful workflow management platform designed to streamline business processes and boost productivity.\n\nFeaturing secure authentication with Clerk, seamless payment integration via Stripe, and a robust backend using Next.js, Prisma, and SQLite. Built with TypeScript and Zod for type-safety and Tailwind CSS for a modern, responsive UI.',
    'projects.dynamicworkflow.repoUrl':
      'https://github.com/crhistian2296/DynamicWorkflow',
    'projects.dynamicworkflow.liveUrl': 'https://dynamicworkflow.vercel.app/',

    'projects.meteoapp.title': 'MeteoApp',
    'projects.meteoapp.description':
      'Web application designed to provide weather information for any city in the world.\n\nIt uses a modern architecture and responsive design. State management is optimized to improve performance and user experience.',
    'projects.meteoapp.repoUrl': 'https://github.com/crhistian2296/MeteoApp/',
    'projects.meteoapp.liveUrl': 'https://crhistian2296.github.io/MeteoApp/',

    'projects.journalapp.title': 'JournalApp',
    'projects.journalapp.description':
      'Web platform for creating and organizing notes, focused on personal productivity.\n\nCloudinary integration allows efficient storage of multimedia files, while the minimalist design ensures fast navigation.',
    'projects.journalapp.repoUrl':
      'https://github.com/crhistian2296/JournalApp',
    'projects.journalapp.liveUrl': 'https://journal-app-six-rho.vercel.app/',

    // --- SKILLS ---
    'skills.title': 'Technical Skills',
    'skills.languages.title': 'Programming Languages',
    'skills.languages.list': [
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bash' },
    ],
    'skills.frameworks.title': 'Frameworks & Libraries',
    'skills.frameworks.list': [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'Redux' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'TanStack' },
      { name: 'Node.js' },
      { name: 'Bun' },
    ],
    'skills.ai.title': 'AI Development Tools',
    'skills.ai.list': [
      { name: 'GitHub Copilot' },
      { name: 'Cursor' },
      { name: 'Claude Code' },
      { name: 'Codex' },
    ],
    'skills.tools.title': 'Tools & Platforms',
    'skills.tools.list': [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Jira' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Figma' },
    ],
    'skills.methodologies.title': 'Methodologies & Practices',
    'skills.methodologies.list': [
      { name: 'Scrum' },
      { name: 'Kanban' },
      { name: 'Gitflow' },
      { name: 'TDD' },
      { name: 'Clean Code' },
      { name: 'CI/CD' },
    ],
    'skills.styling.title': 'Styling & UI/UX',
    'skills.styling.list': [
      { name: 'Tailwind CSS' },
      { name: 'Sass' },
      { name: 'Less' },
      { name: 'Material UI' },
      { name: 'Responsive Design' },
    ],
    'skills.testing.title': 'Testing',
    'skills.testing.list': [
      { name: 'Vitest' },
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Playwright' },
    ],

    // --- EDUCATION ---
    'education.title': 'Education',
    'education.univalle.degree': 'B.S. in Systems and Computer Engineering',
    'education.univalle.institution': 'Universidad del Valle, Cali, Colombia',
    'education.univalle.period': '2018 – 2021',
    'education.univalle.description':
      'Acquired a solid foundation in computer science and software development.',

    // --- LANGUAGES SPOKEN ---
    'languages.title': 'Languages',
    'languages.spanish.name': 'Spanish',
    'languages.spanish.level': 'Native',
    'languages.english.name': 'English',
    'languages.english.level': 'B2',
    'languages.french.name': 'French',
    'languages.french.level': 'Basic',

    // --- GENERAL UI TEXTS ---
    'general.readMore': 'Read More',
    'general.viewProject': 'View Project',
    'general.visitSite': 'Visit Site',
  },

  // ================================= SPANISH =================================
  es: {
    // --- NAVIGATION ---
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',

    // --- FOOTER ---
    'footer.rights': 'Todos los derechos reservados.',
    'footer.name': 'CRHISTIAN ALEXANDER GARCÍA URBANO',

    // --- CONTACT ---
    'contact.title': 'Contacto',
    'contact.phone': 'Teléfono',
    'contact.phone.value': '64/1 450 887',
    'contact.email': 'Correo',
    'contact.email.value': 'ca.garcia.urbano@gmail.com',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.value': 'Crhistian Alexander Garcia Urbano',
    'contact.linkedin.url':
      'https://www.linkedin.com/in/crhistian-alexander-garcia-urbano-5251a11b0/',
    'contact.github': 'Github',
    'contact.github.value': 'crhistian2296',
    'contact.github.url': 'https://github.com/crhistian2296',

    // --- PROFILE ---
    'profile.rol': 'Frontend Developer Senior',
    'profile.title': 'Perfil Profesional',
    'profile.description':
      'Desarrollador Frontend con más de 5 años de experiencia construyendo interfaces de usuario escalables, mantenibles y de alto impacto con React y TypeScript. Experto en la definición de arquitecturas frontend modernas, asegurando la calidad del código mediante testing y refactorización, y colaborando con equipos de diseño usando Figma y Storybook. Altamente curioso por la tecnología, con un interés activo en la aplicación de IA en el ciclo de vida del desarrollo utilizando herramientas como GitHub Copilot, Cursor y Claude Code.',

    // --- EXPERIENCE ---
    'experience.title': 'Experiencia Laboral',
    'experience.metaDescription':
      'Descubre mi trayectoria profesional y experiencia laboral.',

    // KEIFI (NEW)
    'experience.keifi.location': 'Madrid, España',
    'experience.keifi.company': 'Keifi by Izertis',
    'experience.keifi.role': 'Desarrollador Frontend Senior',
    'experience.keifi.period': 'Junio 2025 – Actualidad',
    'experience.keifi.resp1':
      'Implementación de componentes escalables y mantenibles con Next.js, Vue 3, JavaScript y TypeScript.',
    'experience.keifi.resp2':
      'Colaboración en equipos multidisciplinarios utilizando Git, GitHub y la estrategia Gitflow.',
    'experience.keifi.resp3': 'Internacionalización de aplicaciones con i18n.',
    'experience.keifi.resp4':
      'Contribución al código respetando el pipeline de CI/CD, con enfoque en Clean Code y legibilidad.',
    'experience.keifi.resp5':
      'Refactorización orientada a mejorar la organización y mantenibilidad del codebase.',
    'experience.keifi.resp6': 'Integración de APIs REST y microservicios.',
    'experience.keifi.resp7':
      'Trabajo con Storybook y Design Systems para construir interfaces consistentes.',
    'experience.keifi.resp8':
      'Identificación y remediación de vulnerabilidades (OWASP Top 10) usando SonarQube y ESLint.',

    // BITBAN (UPDATED)
    'experience.bitban.location': 'Madrid, España',
    'experience.bitban.company': 'Bitban Technologies',
    'experience.bitban.role': 'Desarrollador Frontend',
    'experience.bitban.period': 'Enero 2023 – Mayo 2025',
    'experience.bitban.resp1':
      'Implementación de diseños UI/UX desde Figma con un acabado "pixel-perfect" usando CSS3 y Sass.',
    'experience.bitban.resp2':
      'Desarrollo de interfaces y componentes con React 18, Next.js, TSX y Redux.',
    'experience.bitban.resp3':
      'Optimización del rendimiento web, SEO, accesibilidad y diseño responsivo multiplataforma.',
    'experience.bitban.resp4':
      'Testing y depuración de código con Vitest y React Testing Library para mantener estándares de calidad.',
    'experience.bitban.resp5':
      'Automatización de chequeos de seguridad (SAST, OWASP) en pipelines Jenkins (CI/CD).',
    'experience.bitban.resp6': 'Integración de APIs REST y microservicios.',
    'experience.bitban.resp7':
      'Trabajo con Storybook y Design Systems para construir interfaces consistentes.',
    'experience.bitban.resp8':
      'Identificación y remediación de vulnerabilidades (OWASP Top 10) usando SonarQube y ESLint.',

    // INNOVATION STRATEGIES (UPDATED)
    'experience.innovation.location': 'Madrid, España',
    'experience.innovation.company': 'Innovation Strategies',
    'experience.innovation.role': 'Desarrollador Junior',
    'experience.innovation.period': 'Octubre 2021 – Diciembre 2022',
    'experience.innovation.resp1':
      'Desarrollo e implementación de soluciones web SPA con React 18 y Next.js.',
    'experience.innovation.resp2':
      'Creación de custom hooks para separar la lógica de la vista en los componentes.',
    'experience.innovation.resp3':
      'Manipulación de WebSockets para comunicación en tiempo real con el usuario.',
    'experience.innovation.resp4':
      'Uso de Vite con Hot Module Replacement (HMR) para un desarrollo eficiente.',

    // UNIVALLE (UPDATED)
    'experience.univalle.location': 'Cali, Colombia',
    'experience.univalle.company':
      'Universidad del Valle, Departamento de Gestión',
    'experience.univalle.role': 'Programador Web Junior',
    'experience.univalle.period': 'Febrero 2020 – Septiembre 2021',
    'experience.univalle.resp1':
      'Soporte en el desarrollo y mantenimiento del sitio web institucional con React 16 y Next.js.',
    'experience.univalle.resp2':
      'Mejora de interfaces asegurando coherencia visual y accesibilidad utilizando Less.',
    'experience.univalle.resp3':
      'Configuración de proyectos y optimización de vistas con Webpack.',

    'experience.responsibilities': 'Responsabilidades Clave',
    'experience.technologiesUsed': 'Tecnologías Utilizadas',

    // --- PROJECTS ---
    'projects.title': 'Proyectos Personales',
    'projects.metaDescription':
      'Explora una colección de mis proyectos personales y contribuciones.',
    'projects.repository': 'Repositorio',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.technologiesUsed': 'Tecnologías Utilizadas',

    'projects.dynamicworkflow.title': 'DynamicWorkflow',
    'projects.dynamicworkflow.description':
      'Una potente plataforma de gestión de flujos de trabajo diseñada para optimizar los procesos empresariales y aumentar la productividad.\n\nCuenta con autenticación segura con Clerk, integración fluida de pagos mediante Stripe y un backend robusto utilizando Next.js, Prisma y SQLite. Desarrollada con TypeScript y Zod para garantizar la seguridad de tipos y Tailwind CSS para una interfaz moderna y responsiva.',
    'projects.dynamicworkflow.repoUrl':
      'https://github.com/crhistian2296/DynamicWorkflow',
    'projects.dynamicworkflow.liveUrl': 'https://dynamicworkflow.vercel.app/',

    'projects.meteoapp.title': 'MeteoApp',
    'projects.meteoapp.description':
      'Aplicación web diseñada para proporcionar información meteorológica de cualquier ciudad.\n\nUtiliza una arquitectura moderna y diseño responsivo, con gestión de estado optimizada.',
    'projects.meteoapp.repoUrl': 'https://github.com/crhistian2296/MeteoApp/',
    'projects.meteoapp.liveUrl': 'https://crhistian2296.github.io/MeteoApp/',

    'projects.journalapp.title': 'JournalApp',
    'projects.journalapp.description':
      'Plataforma web para la creación y organización de notas, enfocada en la productividad personal.\n\nIntegración con Cloudinary para gestión de archivos multimedia y diseño minimalista.',
    'projects.journalapp.repoUrl': 'https://github.com/crhistian2296/JournalApp',
    'projects.journalapp.liveUrl': 'https://journal-app-six-rho.vercel.app/',

    // --- SKILLS ---
    'skills.title': 'Habilidades Técnicas',
    'skills.languages.title': 'Lenguajes de Programación',
    'skills.languages.list': [
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bash' },
    ],
    'skills.frameworks.title': 'Frameworks y Librerías',
    'skills.frameworks.list': [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'Redux' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'TanStack' },
      { name: 'Node.js' },
      { name: 'Bun' },
    ],
    'skills.ai.title': 'Herramientas de IA',
    'skills.ai.list': [
      { name: 'GitHub Copilot' },
      { name: 'Cursor' },
      { name: 'Claude Code' },
      { name: 'Codex' },
    ],
    'skills.tools.title': 'Herramientas y Plataformas',
    'skills.tools.list': [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Jira' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Figma' },
    ],
    'skills.methodologies.title': 'Metodologías y Prácticas',
    'skills.methodologies.list': [
      { name: 'Scrum' },
      { name: 'Kanban' },
      { name: 'Gitflow' },
      { name: 'TDD' },
      { name: 'Clean Code' },
      { name: 'CI/CD' },
    ],
    'skills.styling.title': 'Estilos y UI/UX',
    'skills.styling.list': [
      { name: 'Tailwind CSS' },
      { name: 'Sass' },
      { name: 'Less' },
      { name: 'Material UI' },
      { name: 'Responsive Design' },
    ],
    'skills.testing.title': 'Testing',
    'skills.testing.list': [
      { name: 'Vitest' },
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Playwright' },
    ],

    // --- EDUCATION ---
    'education.title': 'Formación Académica',
    'education.univalle.degree': 'Ingeniería de Sistemas y Computación',
    'education.univalle.institution': 'Universidad del Valle, Cali, Colombia',
    'education.univalle.period': '2018 – 2021',
    'education.univalle.description':
      'Sólida formación en ciencias de la computación y desarrollo de software.',
    'education.madrid42.institution': '42 Madrid',
    'education.madrid42.degree':
      'Programa de formación en desarrollo de software',
    'education.madrid42.period': '2022',
    'education.madrid42.description':
      'Formación práctica e intensiva basada en proyectos y colaboración.',

    // --- LANGUAGES SPOKEN ---
    'languages.title': 'Idiomas',
    'languages.spanish.name': 'Español',
    'languages.spanish.level': 'Nativo',
    'languages.english.name': 'Inglés',
    'languages.english.level': 'B2',
    'languages.french.name': 'Francés',
    'languages.french.level': 'Básico',

    // --- GENERAL UI TEXTS ---
    'general.readMore': 'Leer más',
    'general.viewProject': 'Ver Proyecto',
    'general.visitSite': 'Visitar Sitio',
  },

  // ================================= FRENCH ==================================
  fr: {
    // --- NAVIGATION ---
    'nav.home': 'Accueil',
    'nav.about': 'À Propos de Moi',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',

    // --- FOOTER ---
    'footer.rights': 'Tous droits réservés.',
    'footer.name': 'CRHISTIAN ALEXANDER GARCÍA URBANO',

    // --- CONTACT ---
    'contact.title': 'Contact',
    'contact.phone': 'Téléphone',
    'contact.phone.value': '641 450 887',
    'contact.email': 'Email',
    'contact.email.value': 'ca.garcia.urbano@gmail.com',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.value': 'Crhistian Alexander Garcia Urbano',
    'contact.linkedin.url':
      'https://www.linkedin.com/in/crhistian-alexander-garcia-urbano-5251a11b0/',
    'contact.github': 'Github',
    'contact.github.value': 'crhistian2296',
    'contact.github.url': 'https://github.com/crhistian2296',

    // --- PROFILE ---
    'profile.rol': 'Développeur frontend senior',
    'profile.title': 'Profil Personnel',
    'profile.description':
      "Développeur Frontend avec plus de 5 ans d\'expérience dans la création d\'interfaces utilisateur évolutives, maintenables et à fort impact avec React et TypeScript. Expert dans la définition d\'architectures frontend modernes, garantissant la qualité du code via les tests et le refactoring, et collaborant avec les équipes de design via Figma et Storybook. Passionné par la technologie, avec un intérêt actif pour l\'intégration de l\'IA dans le cycle de développement logiciel à l\'aide d\'outils tels que GitHub Copilot, Cursor et Claude Code.",

    // --- EXPERIENCE ---
    'experience.title': 'Expérience Professionnelle',
    'experience.metaDescription':
      'Découvrez mon parcours professionnel et mon expérience.',

    // KEIFI (NEW)
    'experience.keifi.location': 'Madrid, Espagne',
    'experience.keifi.company': 'Keifi by Izertis',
    'experience.keifi.role': 'Développeur Frontend Senior',
    'experience.keifi.period': 'Juin 2025 – Présent',
    'experience.keifi.resp1':
      'Implémentation de composants évolutifs avec Next.js, Vue 3, JavaScript et TypeScript.',
    'experience.keifi.resp2':
      "Collaboration au sein d'équipes multidisciplinaires via Git, GitHub et la stratégie Gitflow.",
    'experience.keifi.resp3':
      'Internationalisation des applications avec i18n.',
    'experience.keifi.resp4':
      'Contribution au code respectant les pipelines CI/CD, avec un focus sur le Clean Code.',
    'experience.keifi.resp5':
      "Refactorisation pour améliorer l'organisation et la maintenabilité du code.",
    'experience.keifi.resp6': "Intégration d'API REST et de microservices.",
    'experience.keifi.resp7':
      'Utilisation de Storybook et Design Systems pour des interfaces cohérentes.',
    'experience.keifi.resp8':
      'Remédiation des vulnérabilités (OWASP Top 10) via SonarQube et ESLint.',

    // BITBAN (UPDATED)
    'experience.bitban.location': 'Madrid, Espagne',
    'experience.bitban.company': 'Bitban Technologies',
    'experience.bitban.role': 'Développeur Frontend',
    'experience.bitban.period': 'Janvier 2023 – Mai 2025',
    'experience.bitban.resp1':
      'Implémentation de designs UI/UX pixel-perfect depuis Figma avec CSS3 et Sass.',
    'experience.bitban.resp2':
      "Développement d'interfaces avec React 18, Next.js, TSX et Redux.",
    'experience.bitban.resp3':
      'Optimisation des performances web, SEO, accessibilité et design responsive.',
    'experience.bitban.resp4':
      'Tests et débogage avec Vitest et React Testing Library pour la qualité du code.',
    'experience.bitban.resp5':
      'Automatisation des contrôles de sécurité (SAST, OWASP) via Jenkins CI/CD.',

    // INNOVATION STRATEGIES (UPDATED)
    'experience.innovation.location': 'Madrid, Espagne',
    'experience.innovation.company': 'Innovation Strategies',
    'experience.innovation.role': 'Développeur Junior',
    'experience.innovation.period': 'Octobre 2021 – Décembre 2022',
    'experience.innovation.resp1':
      'Développement de solutions SPA avec React 18 et Next.js.',
    'experience.innovation.resp2':
      'Création de hooks personnalisés pour séparer la logique de la vue.',
    'experience.innovation.resp3':
      'Manipulation de WebSockets pour la communication en temps réel.',
    'experience.innovation.resp4':
      'Utilisation de Vite avec HMR pour un développement efficace.',

    // UNIVALLE (UPDATED)
    'experience.univalle.location': 'Cali, Colombie',
    'experience.univalle.company':
      'Universidad del Valle, Département de Gestion',
    'experience.univalle.role': 'Programmeur Web Junior',
    'experience.univalle.period': 'Février 2020 – Septembre 2021',
    'experience.univalle.resp1':
      'Support au développement du site institutionnel avec React 16 et Next.js.',
    'experience.univalle.resp2':
      "Amélioration des interfaces via Less pour la cohérence visuelle et l'accessibilité.",
    'experience.univalle.resp3':
      'Configuration de projets et optimisation des vues avec Webpack.',

    'experience.responsibilities': 'Responsabilités Clés',
    'experience.technologiesUsed': 'Technologies Utilisées',

    // --- PROJECTS ---
    'projects.title': 'Projets Personnels',
    'projects.metaDescription':
      'Explorez une collection de mes projets personnels.',
    'projects.repository': 'Dépôt',
    'projects.liveDemo': 'Démo en Direct',
    'projects.technologiesUsed': 'Technologies Utilisées',

    'projects.dynamicworkflow.title': 'DynamicWorkflow',
    'projects.dynamicworkflow.description':
      "Une plateforme puissante de gestion des flux de travail conçue pour optimiser les processus métier et booster la productivité.\n\nDotée d\'une authentification sécurisée avec Clerk, une intégration fluide des paiements via Stripe et un backend robuste utilisant Next.js, Prisma et SQLite. Développée avec TypeScript et Zod pour la sécurité du typage et Tailwind CSS pour une interface moderne et réactive.",
    'projects.dynamicworkflow.repoUrl':
      'https://github.com/crhistian2296/DynamicWorkflow',
    'projects.dynamicworkflow.liveUrl': 'https://dynamicworkflow.vercel.app/',

    'projects.meteoapp.title': 'MeteoApp',
    'projects.meteoapp.description':
      "Application web pour les informations météorologiques mondiales.\n\nArchitecture moderne et design réactif avec gestion d\'état optimisée.",
    'projects.meteoapp.repoUrl': 'https://github.com/crhistian2296/MeteoApp/',
    'projects.meteoapp.liveUrl': 'https://crhistian2296.github.io/MeteoApp/',

    'projects.journalapp.title': 'JournalApp',
    'projects.journalapp.description':
      'Plateforme de notes pour la productivité personnelle.\n\nIntégration Cloudinary et design minimaliste pour une navigation rapide.',
    'projects.journalapp.repoUrl':
      'https://github.com/crhistian2296/JournalApp',
    'projects.journalapp.liveUrl': 'https://journal-app-six-rho.vercel.app/',

    // --- SKILLS ---
    'skills.title': 'Compétences Techniques',
    'skills.languages.title': 'Langages de Programmation',
    'skills.languages.list': [
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bash' },
    ],
    'skills.frameworks.title': 'Frameworks & Bibliothèques',
    'skills.frameworks.list': [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'Redux' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'TanStack' },
      { name: 'Node.js' },
      { name: 'Bun' },
    ],
    'skills.ai.title': 'Outils de Développement IA',
    'skills.ai.list': [
      { name: 'GitHub Copilot' },
      { name: 'Cursor' },
      { name: 'Claude Code' },
      { name: 'Codex' },
    ],
    'skills.tools.title': 'Outils & Plateformes',
    'skills.tools.list': [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Jira' },
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Figma' },
    ],
    'skills.methodologies.title': 'Méthodologies & Pratiques',
    'skills.methodologies.list': [
      { name: 'Scrum' },
      { name: 'Kanban' },
      { name: 'Gitflow' },
      { name: 'TDD' },
      { name: 'Clean Code' },
      { name: 'CI/CD' },
    ],
    'skills.styling.title': 'Styling & UI/UX',
    'skills.styling.list': [
      { name: 'Tailwind CSS' },
      { name: 'Sass' },
      { name: 'Less' },
      { name: 'Material UI' },
      { name: 'Responsive Design' },
    ],
    'skills.testing.title': 'Tests',
    'skills.testing.list': [
      { name: 'Vitest' },
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Playwright' },
    ],

    // --- EDUCATION ---
    'education.title': 'Formation',
    'education.univalle.degree': 'B.S. en Systèmes et Informatique',
    'education.univallo.institution': 'Universidad del Valle, Cali, Colombie',
    'education.univalle.period': '2018 – 2021',
    'education.univalle.description':
      'Formation solide en informatique et développement logiciel.',

    // --- LANGUAGES SPOKEN ---
    'languages.title': 'Langues',
    'languages.spanish.name': 'Espagnol',
    'languages.spanish.level': 'Natif',
    'languages.english.name': 'Anglais',
    'languages.english.level': 'B2',
    'languages.french.name': 'French',
    'languages.french.level': 'Élémentaire',

    // --- GENERAL UI TEXTS ---
    'general.readMore': 'Lire Plus',
    'general.viewProject': 'Voir le Projet',
    'general.visitSite': 'Visiter le Site',
  },
} as const;

export type UIType = typeof ui;
export type DefaultLangKeys = keyof UIType[typeof defaultLang];
