import type { ImageMetadata } from 'astro';
import geremek from '../assets/clients/fundacja-geremka.webp';
import herosi from '../assets/clients/herosi.webp';
import impuls from '../assets/clients/impuls.svg';
import pomocDzieciom from '../assets/clients/fundacja-pomocy-dzieciom.webp';

export interface Client {
  name: string;
  /** Logo (SVG lub PNG z `src/assets/clients/`). Bez logo pokazujemy placeholder z nazwą. */
  logo?: ImageMetadata;
  /** Znak okrągły lub kwadratowy: wyświetlany wyżej, żeby napis w środku był czytelny. */
  tall?: boolean;
}

/**
 * Klienci w pasku „Zaufali nam już”.
 * TODO(klient): brakujące loga oraz zgoda na publikację od każdej organizacji (najlepiej pisemna / e-mailowa).
 * Podmiana: wrzuć plik do `src/assets/clients/` (SVG albo WebP/PNG z przezroczystym tłem, przycięty do znaku,
 * ok. 4× wysokości wyświetlania), zaimportuj go i dodaj `logo` do wpisu poniżej.
 * Dopóki nie ma logo, pokazujemy placeholder (ikona obrazka z krzyżykiem + nazwa).
 */
export const clients: Client[] = [
  { name: 'Fundacja Instrat' },
  { name: 'Fundacja Herosi', logo: herosi },
  { name: 'Fundacja Centrum im. Prof. B. Geremka', logo: geremek },
  { name: 'Fundacja Gotowi na Przyszłość' },
  { name: 'Polska Fundacja Dzieci i Młodzieży' },
  { name: 'Fundacja Impuls dla Młodych', logo: impuls },
  { name: 'Fundacja Instytut Reform' },
  { name: 'Fundacja Pomocy Dzieciom z Chorobą Nowotworową', logo: pomocDzieciom, tall: true },
];
