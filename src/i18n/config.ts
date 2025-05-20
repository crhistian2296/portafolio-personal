import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18nConfig = {
  supportedLngs: ['es', 'en', 'fr'],
  fallbackLng: 'es',
  defaultNS: 'common',
  fallbackNS: 'common',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};

export const i18nPlugins = [Backend, LanguageDetector];
