import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // Ensure keys are valid for the defaultLang type, then access them.
    // This provides type safety for keys while allowing fallback.
    const typedKey = key as keyof (typeof ui)[typeof defaultLang];
    return ui[lang][typedKey] || ui[defaultLang][typedKey];
  }
}
