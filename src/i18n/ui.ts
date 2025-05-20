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
    'contact.phone.value': '641 450 887',
    'contact.email': 'Email',
    'contact.email.value': 'ca.garcia.urbano@gmail.com',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.value': 'Crhistian Alexander Garcia Urbano',
    'contact.linkedin.url': 'https://www.linkedin.com/in/crhistian-alexander-garcia-urbano-5251a11b0/',
    'contact.github': 'Github',
    'contact.github.value': 'crhistian2296',
    'contact.github.url': 'https://github.com/crhistian2296',

    // --- PROFILE (part of About Me page) ---
    'profile.title': 'Personal Profile',
    'profile.description': 'Systems and computing engineer specializing in frontend development with over three years of experience creating interactive and responsive web applications. My career includes roles at Bitban Technologies, Innovation Strategies, and Universidad del Valle, where I have contributed to the development of innovative solutions using technologies such as React, Next.js, TypeScript, and Node.js. Passionate about technology and continuous learning, I seek to apply my skills to build high-impact digital products that enhance user experience.',

    // --- EXPERIENCE ---
    'experience.title': 'Work Experience',
    'experience.metaDescription': 'Discover my professional journey and work experience.',

    'experience.bitban.company': 'Bitban Technologies',
    'experience.bitban.role': 'Frontend Developer',
    'experience.bitban.period': 'February 2023 - Present',
    'experience.bitban.resp1': 'Implementation of UI/UX designs from Figma, ensuring "pixel perfect" visual fidelity using CSS3 and Sass.',
    'experience.bitban.resp2': 'Development of interactive interfaces and components using React 18, hooks, PHP, Next.js, TSX, and Redux.',
    'experience.bitban.resp3': 'Collaboration in multidisciplinary teams to integrate new functionalities, using Git, GitHub, and the Gitflow strategy.',
    'experience.bitban.resp4': 'Code contribution adhering to the established CI/CD workflow.',
    'experience.bitban.resp5': 'Optimization of web application performance and SEO, focusing on fast loading times, accessibility, and responsive cross-platform design.',
    'experience.bitban.resp6': 'Code review, debugging, and testing with Vitest and React Testing Library to maintain high quality standards.',
    'experience.bitban.resp7': 'Implementation of best practices to improve usability and user experience.',
    'experience.bitban.resp8': 'Active participation in project planning and review meetings under agile methodologies such as Scrum and Kanban.',

    'experience.innovation.company': 'Innovation Strategies',
    'experience.innovation.role': 'Junior Developer',
    'experience.innovation.period': 'October 2021 - December 2021',
    'experience.innovation.resp1': 'Development and implementation of web solutions, mainly SPAs, using React 18 and Next.js.',
    'experience.innovation.resp2': 'Participation in code review and continuous improvement of developed products.',
    'experience.innovation.resp3': 'Collaboration in projects managed with agile methodologies.',

    'experience.univalle.company': 'Universidad del Valle, Department of Management',
    'experience.univalle.role': 'Junior Web Programmer',
    'experience.univalle.period': 'February 2018 - September 2019',
    'experience.univalle.resp1': 'Support in the development and maintenance of the institutional website using React 16 and Next.js.',
    'experience.univalle.resp2': 'Improvement and updating of existing interfaces to ensure visual consistency and accessibility.',
    'experience.univalle.resp3': 'Participation in the creation of new functionalities to optimize user interaction.',

    'experience.responsibilities': 'Key Responsibilities',
    'experience.technologiesUsed': 'Technologies Used',

    // --- PROJECTS ---
    'projects.title': 'Personal Projects',
    'projects.metaDescription': 'Explore a collection of my personal projects and contributions.',
    'projects.repository': 'Repository',
    'projects.liveDemo': 'Live Demo',
    'projects.technologiesUsed': 'Technologies Used',

    'projects.meteoapp.title': 'MeteoApp',
    'projects.meteoapp.description': "Web application designed to provide weather information for any city in the world.\n\nIt uses a modern architecture and responsive design. State management is optimized to improve performance and user experience.\n\nThis project stands out for its ability to handle asynchronous requests and present complex data clearly and accessibly.",
    'projects.meteoapp.repoUrl': 'https://github.com/crhistian2296/MeteoApp/',
    'projects.meteoapp.liveUrl': 'https://crhistian2296.github.io/MeteoApp/',

    'projects.journalapp.title': 'JournalApp',
    'projects.journalapp.description': "Web platform for creating and organizing notes, focused on personal productivity. It allows users to record ideas and thoughts, attach images or videos, and organize content using tags or categories.\n\nCloudinary integration allows efficient storage and management of multimedia files, while the minimalist design ensures simple and fast navigation.",
    'projects.journalapp.repoUrl': 'https://github.com/crhistian2296/JournalApp',
    'projects.journalapp.liveUrl': 'https://journal-app-six-rho.vercel.app/',

    // --- SKILLS (part of About Me page) ---
    'skills.title': 'Technical Skills',
    'skills.languages.title': 'Programming Languages',
    'skills.languages.list': [{ name: 'JavaScript (ES6+)' }, { name: 'TypeScript' }, { name: 'PHP' }, { name: 'Python' }, { name: 'HTML5' }, { name: 'CSS3' }, {name: 'Bash'} ],
    'skills.frameworks.title': 'Frameworks & Libraries',
    'skills.frameworks.list': [{ name: 'React' }, { name: 'Next.js' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Vue.js' }, { name: 'Redux (Toolkit)' }, { name: 'Zustand' }, { name: 'TanStack Query' }],
    'skills.tools.title': 'Tools & Platforms',
    'skills.tools.list': [{ name: 'Git' }, { name: 'GitHub' }, { name: 'GitLab' }, { name: 'Docker' }, { name: 'Firebase' }, { name: 'Figma' }, { name: 'Jira' }],
    'skills.methodologies.title': 'Methodologies & Practices',
    'skills.methodologies.list': [{ name: 'Scrum' }, { name: 'Kanban' }, { name: 'Gitflow' }, { name: 'CI/CD' }, { name: 'TDD' }, { name: 'Clean Code' }, { name: 'Design Patterns' }, { name: 'Responsive Design' }, { name: 'Mobile First' } ],
    'skills.styling.title': 'Styling & UI/UX Design',
    'skills.styling.list': [{ name: 'Sass' }, { name: 'Material UI' }, { name: 'Bootstrap' }, { name: 'Styled Components' }, { name: 'Tailwind CSS' }],
    'skills.testing.title': 'Testing',
    'skills.testing.list': [{ name: 'Jest' }, { name: 'Vitest' }, { name: 'React Testing Library' }, { name: 'Cypress' }, { name: 'Enzyme' }],

    // --- EDUCATION (part of About Me page) ---
    'education.title': 'Education',
    'education.univalle.degree': 'Systems and Computing Engineering',
    'education.univalle.institution': 'Universidad del Valle, Cali, Colombia',
    'education.univalle.period': 'January 2016 - December 2021',
    'education.univalle.description': 'I studied Systems and Computing Engineering at Universidad del Valle, where I acquired a solid foundation in computer science and software development.',
    'education.madrid42.degree': 'Software Development (Piscine & Common Core)',
    'education.madrid42.institution': '42 Madrid | Telefónica Foundation',
    'education.madrid42.period': 'July 2022 – Currently (Level 7)',
    'education.madrid42.description': 'I am currently pursuing a degree in Software Engineering at 42 Madrid | Telefónica Foundation, where I am learning about software development, data structures, and algorithms.',

    // --- LANGUAGES SPOKEN (part of About Me page) ---
    'languages.title': 'Languages',
    'languages.spanish.name': 'Spanish',
    'languages.spanish.level': 'Native',
    'languages.english.name': 'English',
    'languages.english.level': 'Upper Intermediate (B2)',
    'languages.french.name': 'French',
    'languages.french.level': 'Basic (A2)',

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

    // --- CONTACT (part of About Me page) ---
    'contact.title': 'Contacto',
    'contact.phone': 'Teléfono',
    'contact.phone.value': '641 450 887',
    'contact.email': 'Correo',
    'contact.email.value': 'ca.garcia.urbano@gmail.com',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.value': 'Crhistian Alexander Garcia Urbano',
    'contact.linkedin.url': 'https://www.linkedin.com/in/crhistian-alexander-garcia-urbano-5251a11b0/',
    'contact.github': 'Github',
    'contact.github.value': 'crhistian2296',
    'contact.github.url': 'https://github.com/crhistian2296',

    // --- PROFILE (part of About Me page) ---
    'profile.title': 'Perfil Personal',
    'profile.description': 'Ingeniero de sistemas y computación con especialización en desarrollo frontend y más de tres años de experiencia en la creación de aplicaciones web interactivas y responsivas. Mi trayectoria incluye roles en Bitban Technologies, Innovation Strategies y la Universidad del Valle, donde he contribuido al desarrollo de soluciones innovadoras utilizando tecnologías como React, Next.js, TypeScript y Node.js. Apasionado por la tecnología y el aprendizaje continuo, busco aplicar mis habilidades para construir productos digitales de alto impacto que mejoren la experiencia del usuario.',

    // --- EXPERIENCE ---
    'experience.title': 'Experiencia Laboral',
    'experience.metaDescription': 'Descubre mi trayectoria profesional y experiencia laboral.',

    'experience.bitban.company': 'Bitban Technologies',
    'experience.bitban.role': 'Desarrollador Frontend',
    'experience.bitban.period': 'Febrero 2023 - Actualidad',
    'experience.bitban.resp1': 'Implementación de diseños UI/UX desde Figma, asegurando una fidelidad visual “pixel perfect” mediante CSS3 y Sass.',
    'experience.bitban.resp2': 'Desarrollo de interfaces y componentes interactivos utilizando React 18, hooks, PHP, Next.js, TSX y Redux.',
    'experience.bitban.resp3': 'Colaboración en equipos multidisciplinarios para la integración de nuevas funcionalidades, utilizando Git, GitHub y la estrategia Gitflow.',
    'experience.bitban.resp4': 'Contribución al código respetando el flujo de CI/CD establecido.',
    'experience.bitban.resp5': 'Optimización del rendimiento de aplicaciones web y SEO, enfocándose en tiempos de carga rápidos, accesibilidad y diseño responsivo multiplataforma.',
    'experience.bitban.resp6': 'Revisión, depuración y testing de código con Vitest y React Testing Library para mantener altos estándares de calidad.',
    'experience.bitban.resp7': 'Implementación de buenas prácticas para mejorar la usabilidad y la experiencia del usuario.',
    'experience.bitban.resp8': 'Participación activa en reuniones de planificación y revisión de proyectos bajo metodologías ágiles como Scrum y Kanban.',

    'experience.innovation.company': 'Innovation Strategies',
    'experience.innovation.role': 'Desarrollador junior',
    'experience.innovation.period': 'Octubre 2021 - Diciembre 2021',
    'experience.innovation.resp1': 'Desarrollo e implementación de soluciones web, principalmente SPAs, utilizando React 18 y Next.js.',
    'experience.innovation.resp2': 'Participación en la revisión de código y en la mejora continua de los productos desarrollados.',
    'experience.innovation.resp3': 'Colaboración en proyectos gestionados con metodologías ágiles.',

    'experience.univalle.company': 'Universidad del Valle, Departamento de Gestión',
    'experience.univalle.role': 'Programador Web Junior',
    'experience.univalle.period': 'Febrero 2018 - Septiembre 2019',
    'experience.univalle.resp1': 'Soporte en el desarrollo y mantenimiento de la página web institucional utilizando React 16 y Next.js.',
    'experience.univalle.resp2': 'Mejora y actualización de interfaces existentes para garantizar la coherencia visual y la accesibilidad.',
    'experience.univalle.resp3': 'Participación en la creación de nuevas funcionalidades para optimizar la interacción del usuario.',

    'experience.responsibilities': 'Responsabilidades Clave',
    'experience.technologiesUsed': 'Tecnologías Utilizadas',

    // --- PROJECTS ---
    'projects.title': 'Proyectos Personales',
    'projects.metaDescription': 'Explora una colección de mis proyectos personales y contribuciones.',
    'projects.repository': 'Repositorio',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.technologiesUsed': 'Tecnologías Utilizadas',

    'projects.meteoapp.title': 'MeteoApp',
    'projects.meteoapp.description': "Aplicación web diseñada para proporcionar información meteorológica del clima de cualquier ciudad del globo.\n\nUtiliza una arquitectura moderna y un diseño responsivo. La gestión del estado está optimizada para mejorar el rendimiento y la experiencia de usuario.\n\nEste proyecto destaca por su capacidad para manejar peticiones asíncronas y presentar datos complejos de manera clara y accesible.",
    'projects.meteoapp.repoUrl': 'https://github.com/crhistian2296/MeteoApp/',
    'projects.meteoapp.liveUrl': 'https://crhistian2296.github.io/MeteoApp/',

    'projects.journalapp.title': 'JournalApp',
    'projects.journalapp.description': "Plataforma web para la creación y organización de notas, enfocada en la productividad personal. Permite a los usuarios registrar ideas y pensamientos, adjuntar imágenes o videos y organizar el contenido mediante etiquetas o categorías.\n\nLa integración con cloudinary permite almacenar y gestionar archivos multimedia de manera eficiente, mientras que el diseño minimalista asegura una navegación sencilla y rápida.",
    'projects.journalapp.repoUrl': 'https://github.com/crhistian2296/JournalApp',
    'projects.journalapp.liveUrl': 'https://journal-app-six-rho.vercel.app/',

    // --- SKILLS (part of About Me page) ---
    'skills.title': 'Habilidades Técnicas',
    'skills.languages.title': 'Lenguajes de Programación',
    'skills.languages.list': [{ name: 'JavaScript (ES6+)' }, { name: 'TypeScript' }, { name: 'PHP' }, { name: 'Python' }, { name: 'HTML5' }, { name: 'CSS3' }, {name: 'Bash'} ],
    'skills.frameworks.title': 'Frameworks y Librerías',
    'skills.frameworks.list': [{ name: 'React' }, { name: 'Next.js' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Vue.js' }, { name: 'Redux (Toolkit)' }, { name: 'Zustand' }, { name: 'TanStack Query' }],
    'skills.tools.title': 'Herramientas y Plataformas',
    'skills.tools.list': [{ name: 'Git' }, { name: 'GitHub' }, { name: 'GitLab' }, { name: 'Docker' }, { name: 'Firebase' }, { name: 'Figma' }, { name: 'Jira' }],
    'skills.methodologies.title': 'Metodologías y Prácticas',
    'skills.methodologies.list': [{ name: 'Scrum' }, { name: 'Kanban' }, { name: 'Gitflow' }, { name: 'CI/CD' }, { name: 'TDD' }, { name: 'Clean Code' }, { name: 'Patrones de Diseño' }, { name: 'Responsive Design' }, { name: 'Mobile First' } ],
    'skills.styling.title': 'Estilos y Diseño UI/UX',
    'skills.styling.list': [{ name: 'Sass' }, { name: 'Material UI' }, { name: 'Bootstrap' }, { name: 'Styled Components' }, { name: 'Tailwind CSS' }],
    'skills.testing.title': 'Testing',
    'skills.testing.list': [{ name: 'Jest' }, { name: 'Vitest' }, { name: 'React Testing Library' }, { name: 'Cypress' }, { name: 'Enzyme' }],

    // --- EDUCATION (part of About Me page) ---
    'education.title': 'Formación Académica',
    'education.univalle.degree': 'Ingeniería de Sistemas y Computación',
    'education.univalle.institution': 'Universidad del Valle, Cali, Colombia',
    'education.univalle.period': 'Enero 2016 - Diciembre 2021',
    'education.univalle.description': 'Estudié Ingeniería de Sistemas y Computación en la Universidad del Valle, donde adquirí una sólida formación en ciencias de la computación y desarrollo de software.',
    'education.madrid42.degree': 'Desarrollo de Software (Piscine & Common Core)',
    'education.madrid42.institution': '42 Madrid | Fundación Telefónica',
    'education.madrid42.period': 'Julio 2022 – Actualmente (Nivel 7)',
    'education.madrid42.description': 'Actualmente estoy cursando un grado en Ingeniería de Software en 42 Madrid | Telefónica, donde estoy aprendiendo sobre desarrollo de software, estructuras de datos y algoritmos.',

    // --- LANGUAGES SPOKEN (part of About Me page) ---
    'languages.title': 'Idiomas',
    'languages.spanish.name': 'Español',
    'languages.spanish.level': 'Nativo',
    'languages.english.name': 'Inglés',
    'languages.english.level': 'Intermedio Avanzado (B2)',
    'languages.french.name': 'Francés',
    'languages.french.level': 'Básico (A2)',

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

    // --- CONTACT (part of About Me page) ---
    'contact.title': 'Contact',
    'contact.phone': 'Téléphone',
    'contact.phone.value': '641 450 887',
    'contact.email': 'Email',
    'contact.email.value': 'ca.garcia.urbano@gmail.com',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.value': 'Crhistian Alexander Garcia Urbano',
    'contact.linkedin.url': 'https://www.linkedin.com/in/crhistian-alexander-garcia-urbano-5251a11b0/',
    'contact.github': 'Github',
    'contact.github.value': 'crhistian2296',
    'contact.github.url': 'https://github.com/crhistian2296',

    // --- PROFILE (part of About Me page) ---
    'profile.title': 'Profil Personnel',
    'profile.description': "Ingénieur en systèmes et informatique spécialisé dans le développement frontend avec plus de trois ans d'expérience dans la création d'applications web interactives et réactives. Ma carrière comprend des postes chez Bitban Technologies, Innovation Strategies et l'Universidad del Valle, où j'ai contribué au développement de solutions innovantes utilisant des technologies telles que React, Next.js, TypeScript et Node.js. Passionné par la technologie et l'apprentissage continu, je cherche à appliquer mes compétences pour construire des produits numériques à fort impact qui améliorent l'expérience utilisateur.",

    // --- EXPERIENCE ---
    'experience.title': 'Expérience Professionnelle',
    'experience.metaDescription': 'Découvrez mon parcours professionnel et mon expérience de travail.',

    'experience.bitban.company': 'Bitban Technologies',
    'experience.bitban.role': 'Développeur Frontend',
    'experience.bitban.period': 'Février 2023 - Actuel',
    'experience.bitban.resp1': 'Implémentation de designs UI/UX de Figma, garantissant une fidélité visuelle "pixel perfect" avec CSS3 et Sass.',
    'experience.bitban.resp2': "Développement d'interfaces et de composants interactifs avec React 18, hooks, PHP, Next.js, TSX et Redux.",
    'experience.bitban.resp3': "Collaboration au sein d'équipes multidisciplinaires pour intégrer de nouvelles fonctionnalités, en utilisant Git, GitHub et la stratégie Gitflow.",
    'experience.bitban.resp4': 'Contribution de code en respectant le flux CI/CD établi.',
    'experience.bitban.resp5': "Optimisation des performances des applications web et du SEO, en se concentrant sur des temps de chargement rapides, l'accessibilité et un design réactif multiplateforme.",
    'experience.bitban.resp6': 'Revue de code, débogage et tests avec Vitest et React Testing Library pour maintenir des standards de qualité élevés.',
    'experience.bitban.resp7': "Mise en œuvre de bonnes pratiques pour améliorer l'utilisabilité et l'expérience utilisateur.",
    'experience.bitban.resp8': 'Participation active aux réunions de planification et de revue de projets sous des méthodologies agiles telles que Scrum et Kanban.',

    'experience.innovation.company': 'Innovation Strategies',
    'experience.innovation.role': 'Développeur Junior',
    'experience.innovation.period': 'Octobre 2021 - Décembre 2021',
    'experience.innovation.resp1': "Développement et implémentation de solutions web, principalement des SPA, en utilisant React 18 et Next.js.",
    'experience.innovation.resp2': "Participation à la revue de code et à l'amélioration continue des produits développés.",
    'experience.innovation.resp3': 'Collaboration à des projets gérés avec des méthodologies agiles.',

    'experience.univalle.company': 'Universidad del Valle, Département de Gestion',
    'experience.univalle.role': 'Programmeur Web Junior',
    'experience.univalle.period': 'Février 2018 - Septembre 2019',
    'experience.univalle.resp1': "Soutien au développement et à la maintenance du site web institutionnel en utilisant React 16 et Next.js.",
    'experience.univalle.resp2': "Amélioration et mise à jour des interfaces existantes pour assurer la cohérence visuelle et l'accessibilité.",
    'experience.univalle.resp3': "Participation à la création de nouvelles fonctionnalités pour optimiser l'interaction utilisateur.",

    'experience.responsibilities': 'Responsabilités Clés',
    'experience.technologiesUsed': 'Technologies Utilisées',

    // --- PROJECTS ---
    'projects.title': 'Projets Personnels',
    'projects.metaDescription': 'Explorez une collection de mes projets personnels et contributions.',
    'projects.repository': 'Dépôt',
    'projects.liveDemo': 'Démo en Direct',
    'projects.technologiesUsed': 'Technologies Utilisées',

    'projects.meteoapp.title': 'MeteoApp',
    'projects.meteoapp.description': "Application web conçue pour fournir des informations météorologiques pour n'importe quelle ville du monde.\n\nElle utilise une architecture moderne et un design réactif. La gestion de l'état est optimisée pour améliorer les performances et l'expérience utilisateur.\n\nCe projet se distingue par sa capacité à traiter les requêtes asynchrones et à présenter des données complexes de manière claire et accessible.",
    'projects.meteoapp.repoUrl': 'https://github.com/crhistian2296/MeteoApp/',
    'projects.meteoapp.liveUrl': 'https://crhistian2296.github.io/MeteoApp/',

    'projects.journalapp.title': 'JournalApp',
    'projects.journalapp.description': "Plateforme web pour la création et l'organisation de notes, axée sur la productivité personnelle. Elle permet aux utilisateurs d'enregistrer des idées et des pensées, de joindre des images ou des vidéos, et d'organiser le contenu à l'aide d'étiquettes ou de catégories.\n\nL'intégration avec Cloudinary permet de stocker et de gérer efficacement les fichiers multimédias, tandis que le design minimaliste assure une navigation simple et rapide.",
    'projects.journalapp.repoUrl': 'https://github.com/crhistian2296/JournalApp',
    'projects.journalapp.liveUrl': 'https://journal-app-six-rho.vercel.app/',

    // --- SKILLS (part of About Me page) ---
    'skills.title': 'Compétences Techniques',
    'skills.languages.title': 'Langages de Programmation',
    'skills.languages.list': [{ name: 'JavaScript (ES6+)' }, { name: 'TypeScript' }, { name: 'PHP' }, { name: 'Python' }, { name: 'HTML5' }, { name: 'CSS3' }, { name: 'Bash' }],
    'skills.frameworks.title': 'Frameworks et Bibliothèques',
    'skills.frameworks.list': [{ name: 'React' }, { name: 'Next.js' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'Vue.js' }, { name: 'Redux (Toolkit)' }, { name: 'Zustand' }, { name: 'TanStack Query' }],
    'skills.tools.title': 'Outils et Plateformes',
    'skills.tools.list': [{ name: 'Git' }, { name: 'GitHub' }, { name: 'GitLab' }, { name: 'Docker' }, { name: 'Firebase' }, { name: 'Figma' }, { name: 'Jira' }],
    'skills.methodologies.title': 'Méthodologies et Pratiques',
    'skills.methodologies.list': [{ name: 'Scrum' }, { name: 'Kanban' }, { name: 'Gitflow' }, { name: 'CI/CD' }, { name: 'TDD' }, { name: 'Code Propre' }, { name: 'Patrons de Conception' }, { name: 'Design Réactif' }, { name: 'Mobile First' }],
    'skills.styling.title': 'Styling et Conception UI/UX',
    'skills.styling.list': [{ name: 'Sass' }, { name: 'Material UI' }, { name: 'Bootstrap' }, { name: 'Styled Components' }, { name: 'Tailwind CSS' }],
    'skills.testing.title': 'Tests',
    'skills.testing.list': [{ name: 'Jest' }, { name: 'Vitest' }, { name: 'React Testing Library' }, { name: 'Cypress' }, { name: 'Enzyme' }],

    // --- EDUCATION (part of About Me page) ---
    'education.title': 'Formation',
    'education.univalle.degree': 'Ingénierie des Systèmes et Informatique',
    'education.univalle.institution': 'Universidad del Valle, Cali, Colombie',
    'education.univalle.period': 'Janvier 2016 - Décembre 2021',
    'education.univalle.description': "J'ai étudié l'Ingénierie des Systèmes et Informatique à l'Universidad del Valle, où j'ai acquis une base solide en informatique et en développement logiciel.",
    'education.madrid42.degree': 'Développement Logiciel (Piscine & Tronc Commun)',
    'education.madrid42.institution': '42 Madrid | Fondation Telefónica',
    'education.madrid42.period': 'Juillet 2022 – Actuellement (Niveau 7)',
    'education.madrid42.description': "Je poursuis actuellement des études en Développement Logiciel à 42 Madrid | Fondation Telefónica, où j'apprends le développement logiciel, les structures de données et les algorithmes.",

    // --- LANGUAGES SPOKEN (part of About Me page) ---
    'languages.title': 'Langues Parlées',
    'languages.spanish.name': 'Espagnol',
    'languages.spanish.level': 'Natif',
    'languages.english.name': 'Anglais',
    'languages.english.level': 'Intermédiaire Supérieur (B2)',
    'languages.french.name': 'Français',
    'languages.french.level': 'Essentiel (A2)',

    // --- GENERAL UI TEXTS ---
    'general.readMore': 'Lire Plus',
    'general.viewProject': 'Voir le Projet',
    'general.visitSite': 'Visiter le Site',
  },
} as const;

export type UIType = typeof ui;
export type DefaultLangKeys = keyof UIType[typeof defaultLang];
