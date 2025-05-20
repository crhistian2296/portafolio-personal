export interface AstroI18nextConfig {
  defaultLocale?: string;
  locales?: string[];
  i18next?: {
    defaultNS?: string;
    interpolation?: {
      escapeValue?: boolean;
    };
    backend?: {
      loadPath?: string;
    };
  };
  i18nextPlugins?: Array<{
    module?: string;
    options?: Record<string, any>;
  } | string>;
}
