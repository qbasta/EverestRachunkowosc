import type { ImageMetadata } from 'astro';
import symfonia from '../assets/software/symfonia.png';
import enova from '../assets/software/enova365.svg';
import fakturownia from '../assets/software/fakturownia.png';
import legalis from '../assets/software/legalis.png';

export interface SoftwareBrand {
  /** Nazwa produktu – podpis pod logo oraz opis alternatywny (wspólny dla PL i EN). */
  name: string;
  /** Logo z `src/assets/software/`. Gdy brak pliku, strona pokazuje placeholder z ikoną obrazka. */
  logo?: ImageMetadata;
}

/**
 * Logo pochodzą z materiałów producentów. Symfonia: obraz rastrowy ~1546 px szerokości
 * (oficjalny plik producenta ma taki sam rozmiar) – przy prawdziwym SVG wystarczy podmienić plik i import.
 * Fakturownia i Legalis: pliki PNG z białym tłem (kafel logo też jest biały).
 * Płatnik (znak ZUS): brak pliku – do tego czasu placeholder.
 */
export const softwareBrands: SoftwareBrand[] = [
  { name: 'Symfonia Finanse i Księgowość', logo: symfonia },
  { name: 'Enova365 Kadry i płace', logo: enova },
  { name: 'Program Płatnik' },
  { name: 'Fakturownia.pl', logo: fakturownia },
  { name: 'Legalis księgowość kadry biznes', logo: legalis },
];
