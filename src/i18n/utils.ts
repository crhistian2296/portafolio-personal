// src/i18n/utils.ts
import { ui, defaultLang, languages, type DefaultLangKeys } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: DefaultLangKeys) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (ui[lang] as any)[key] || (ui[defaultLang] as any)[key];
  }
}

export function getPathWithLang(lang: keyof typeof ui, path: string) {
  const basePath = lang === defaultLang ? '' : `/${lang}`;
  // Asegurarse de que el path no comience con / si ya lo tiene basePath, o si es la raíz
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${basePath}/${cleanPath === '' && basePath !== '' ? '' : cleanPath}`;
}
