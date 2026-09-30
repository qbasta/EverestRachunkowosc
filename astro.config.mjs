// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Strona jest budowana statycznie (SSG) – na hostingu nie działa żaden framework,
// więc nie ma po stronie serwera nic, co trzeba łatać.
export default defineConfig({
  site: 'https://everest-rachunkowosc.pl',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Zewnętrzne pliki CSS zamiast <style> w HTML – ułatwia restrykcyjne CSP.
    inlineStylesheets: 'never',
  },
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // Stary adres formularza kontaktowego. Prawdziwe 301 ustawimy w .htaccess przy wdrożeniu.
  redirects: {
    '/signin': '/#contact',
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pl', locales: { pl: 'pl-PL', en: 'en-GB' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
