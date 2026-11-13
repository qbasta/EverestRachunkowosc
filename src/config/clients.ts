import type { ImageMetadata } from 'astro';

export interface Client {
  name: string;
  /** Logo (SVG lub PNG z `src/assets/clients/`). Bez logo pokazujemy placeholder z nazwą. */
  logo?: ImageMetadata;
}

/**
 * Klienci w pasku „Zaufali nam już”.
 * TODO(klient): logo oraz zgoda na publikację od każdej organizacji (najlepiej pisemna / e-mailowa).
 * Podmiana: wrzuć plik do `src/assets/clients/`, zaimportuj go i dodaj `logo` do wpisu poniżej.
 * Dopóki nie ma logo, pokazujemy placeholder (ikona obrazka z krzyżykiem + nazwa).
 */
export const clients: Client[] = [
  { name: 'Fundacja Instrat' },
  { name: 'Fundacja Herosi' },
  { name: 'Fundacja Centrum im. Prof. B. Geremka' },
  { name: 'Fundacja Gotowi na Przyszłość' },
  { name: 'Polska Fundacja Dzieci i Młodzieży' },
  { name: 'Fundacja Impuls dla Młodych' },
  { name: 'Fundacja Instytut Reform' },
  { name: 'Fundacja Pomocy Dzieciom z Chorobą Nowotworową' },
];
