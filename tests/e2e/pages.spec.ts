import { expect, test } from '@playwright/test';
import { collectErrors, horizontalOverflow } from './helpers';

const pages = [
  '/',
  '/en/',
  '/nasz-zespol/',
  '/en/our-team/',
  '/faq/',
  '/en/faq/',
  '/wycena/',
  '/en/quote/',
];

for (const path of pages) {
  test.describe(path, () => {
    test('ładuje się bez błędów w konsoli i bez przewijania w poziomie (desktop i telefon)', async ({
      page,
    }) => {
      const errors = collectErrors(page);
      for (const width of [1440, 390]) {
        await page.setViewportSize({ width, height: 900 });
        const response = await page.goto(path);
        // 304 = ta sama strona wczytana ponownie z pamięci podręcznej (przy zmianie szerokości okna).
        expect([200, 304]).toContain(response?.status());
        await expect(page).toHaveTitle(/Everest Biuro Rachunkowe & NGO/);
        await expect(page.locator('h1')).toBeVisible();
        expect(await horizontalOverflow(page), `szerokość ${width}`).toBeLessThanOrEqual(0);
      }
      expect(errors).toEqual([]);
    });
  });
}

test('menu: lista „Oferta” otwiera się z klawiatury i zamyka klawiszem Esc', async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, 'Menu rozwijane dotyczy desktopu.');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const toggle = page.locator('header button[aria-controls]').first();
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
