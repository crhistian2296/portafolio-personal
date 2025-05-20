/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'es',
  locales: ['es', 'en', 'fr'],
  i18next: {
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  },
  i18nextPlugins: [
    { 
      module: 'i18next-browser-languagedetector',
      options: { order: ['navigator'] }
    },
    'i18next-http-backend'
  ],
};
