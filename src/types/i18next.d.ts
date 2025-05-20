declare module 'i18next' {
  export interface TFunction {
    (key: string, options?: Record<string, unknown>): string;
  }
  
  export interface i18n {
    t: TFunction;
  }

  const t: TFunction;
  const i18n: i18n;
  
  export default i18n;
  export { t };
}
