import type { ImageMetadata } from 'astro';
import symfonia from '../assets/software/symfonia.png';
import enova from '../assets/software/enova365.svg';

export interface SoftwareBrand {
  /** Klucz łączący wpis z tekstami w i18n (`info.software.items[].key`). */
  key: string;
  /** Nazwa programu (alt logo oraz plakietka zastępcza, gdy nie ma pliku logo). */
  name: string;
  /** Logo z `src/assets/software/` (opcjonalne). */
  logo?: ImageMetadata;
}

/**
 * Logo pochodzą z materiałów producentów. Symfonia: obraz rastrowy ~1546 px szerokości
 * (oficjalny plik producenta ma taki sam rozmiar) – przy prawdziwym SVG od producenta wystarczy
 * podmienić plik i import.
 */
export const softwareBrands: SoftwareBrand[] = [
  { key: 'symfonia', name: 'Symfonia', logo: symfonia },
  { key: 'enova', name: 'enova365', logo: enova },
];
