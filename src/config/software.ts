import type { ImageMetadata } from 'astro';
import symfonia from '../assets/software/symfonia.png';
import enova from '../assets/software/enova365.svg';

export interface SoftwareBrand {
  /** Nazwa produktu – podpis pod logo oraz opis alternatywny (wspólny dla PL i EN). */
  name: string;
  /** Logo z `src/assets/software/`. Gdy brak pliku, strona pokazuje placeholder z ikoną obrazka. */
  logo?: ImageMetadata;
}

/**
 * Logo pochodzą z materiałów producentów. Symfonia: obraz rastrowy ~1546 px szerokości
 * (oficjalny plik producenta ma taki sam rozmiar) – przy prawdziwym SVG wystarczy podmienić plik i import.
 * Płatnik (znak ZUS), Fakturownia i Legalis: brak plików – dostarcza klient (SVG), do tego czasu placeholder.
 */
export const softwareBrands: SoftwareBrand[] = [
  { name: 'Symfonia Finanse i Księgowość', logo: symfonia },
  { name: 'Enova365 Kadry i płace', logo: enova },
  { name: 'Program Płatnik' },
  { name: 'Fakturownia.pl' },
  { name: 'Legalis księgowość kadry biznes' },
];
