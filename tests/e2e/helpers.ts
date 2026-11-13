import type { Page } from '@playwright/test';

/** Zbiera błędy z konsoli i nieobsłużone wyjątki – test sprawdza na końcu, że lista jest pusta. */
export function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(String(e)));
  return errors;
}

/** Szerokość dokumentu ponad szerokość okna = przewijanie w poziomie (błąd layoutu). */
export const horizontalOverflow = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
