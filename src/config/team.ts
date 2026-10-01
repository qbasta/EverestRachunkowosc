import type { ImageMetadata } from 'astro';
import dominik from '../assets/team/dominik.jpg';
import julita from '../assets/team/julita.jpg';

export interface TeamProfile {
  /** Zdjęcie (opcjonalne – bez niego pokazujemy inicjały). */
  photo?: ImageMetadata;
  /** Adres profilu LinkedIn (opcjonalny). */
  linkedin?: string;
}

/**
 * Dane osób powiązane kluczem `key` z tekstami w `src/i18n/pl.ts` i `en.ts`.
 *
 * DODANIE NOWEJ OSOBY:
 * 1. dodaj zdjęcie do `src/assets/team/` i zaimportuj je powyżej,
 * 2. dodaj wpis tutaj (klucz = np. 'anna'),
 * 3. dodaj obiekt z tym samym `key` w `team.members` w plikach pl.ts i en.ts.
 */
export const teamProfiles: Record<string, TeamProfile> = {
  dominik: {
    photo: dominik,
    linkedin: 'https://www.linkedin.com/in/dominik-markiewicz-5a8579249/',
  },
  julita: {
    photo: julita,
    linkedin: 'https://www.linkedin.com/in/julita-markiewicz-8758b1230/',
  },
};
