import type { ImageMetadata } from 'astro';
import symfonia from '../assets/software/symfonia.png';
import enova from '../assets/software/enova365.svg';
import fakturownia from '../assets/software/fakturownia.png';
import legalis from '../assets/software/legalis.png';

export interface SoftwareBrand {
  /** Nazwa produktu – podpis pod logo oraz opis alternatywny (wspólny dla PL i EN). */
  name: string;
  /** Logo z `src/assets/software/`. Gdy brak pliku, kafel pokazuje nazwę programu. */
  logo?: ImageMetadata;
  /** Krótka nazwa do kafla bez logo (np. „Płatnik”). */
  short?: string;
  /** Do czego służy program – klucz etykiety z `software.categories` w słownikach. */
  category: 'accounting' | 'payroll' | 'zus' | 'invoicing' | 'law';
}

/**
 * Logo pochodzą z materiałów producentów. Symfonia: obraz rastrowy ~1546 px szerokości
 * (oficjalny plik producenta ma taki sam rozmiar) – przy prawdziwym SVG wystarczy podmienić plik i import.
 * Fakturownia i Legalis: pliki PNG z białym tłem (kafel logo też jest biały).
 * Płatnik (znak ZUS): brak pliku – do tego czasu kafel z nazwą.
 */
export const softwareBrands: SoftwareBrand[] = [
  { name: 'Symfonia Finanse i Księgowość', logo: symfonia, category: 'accounting' },
  { name: 'Enova365 Kadry i płace', logo: enova, category: 'payroll' },
  { name: 'Program Płatnik', short: 'Płatnik', category: 'zus' },
  { name: 'Fakturownia.pl', logo: fakturownia, category: 'invoicing' },
  { name: 'Legalis księgowość kadry biznes', logo: legalis, category: 'law' },
];
