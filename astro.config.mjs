// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Añadido para permitir el acceso desde ngrok
    server: {
      allowedHosts: ['f3a1-2a0c-5a81-9201-8800-65ee-6944-2d68-ee86.ngrok-free.app']
    }
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