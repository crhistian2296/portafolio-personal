// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-sitio.com',
  integrations: [
    tailwind(), // Tailwind primero, generalmente
  ]
});