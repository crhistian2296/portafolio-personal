// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // No añade /es/ para el idioma por defecto (p.ej. /about en lugar de /es/about)
                                  // Cambia a true si prefieres que todas las rutas tengan prefijo de idioma.
    }
  },

  integrations: [react()]
});