import { expect, test } from '@playwright/test';
import { collectErrors, horizontalOverflow } from './helpers';

const items = (page: import('@playwright/test').Page) => page.locator('details.faq-item');
const shown = (page: import('@playwright/test').Page) =>
  page.locator('details.faq-item:not([hidden])');

test.describe('FAQ – strona główna (karuzela)', () => {
  test('cztery karty, linki do pytań i przycisk „Masz więcej pytań?”', async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto('/');
    await expect(page.locator('.faq-card')).toHaveCount(4);
    const hrefs = await page
      .locator('.faq-card a')
      .evaluateAll((as) => as.map((a) => a.getAttribute('href')));
    for (const href of hrefs) expect(href).toMatch(/^\/faq#[a-z0-9-]+$/);
    await expect(page.locator('#faq .btn')).toHaveText('Masz więcej pytań?');
    expect(errors).toEqual([]);
  });

  test('strzałki przewijają karuzelę i blokują się na końcach', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Strzałki sprawdzamy na desktopie; na telefonie przewija się palcem.');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const track = page.locator('[data-faq-track]');
    const scrollLeft = () => track.evaluate((el) => el.scrollLeft);
    await expect(page.locator('[data-faq-controls]')).toBeVisible();
    await expect(page.locator('[data-faq-prev]')).toHaveAttribute('aria-disabled', 'true');
    await page.locator('[data-faq-next]').click();
    await expect.poll(scrollLeft).toBeGreaterThan(100);
    await page.locator('[data-faq-next]').click();
    await expect(page.locator('[data-faq-next]')).toHaveAttribute('aria-disabled', 'true');
    const atEnd = await scrollLeft();
    await page.locator('[data-faq-prev]').click();
    await expect.poll(scrollLeft).toBeLessThan(atEnd);
  });

  test('wersja angielska ma przycisk „More questions?”', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('#faq .btn')).toHaveText('More questions?');
  });

  test('telefon: brak przewijania strony w poziomie', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});

test.describe('FAQ – podstrona', () => {
  test('lista, wyszukiwarka (bez względu na ogonki), kategorie, „Rozwiń wszystkie”', async ({
    page,
  }) => {
    const errors = collectErrors(page);
    await page.goto('/faq');
    await expect(items(page)).toHaveCount(11);
    await expect(page.locator('[data-faq-count]')).toHaveText('Wyświetlone pytania: 11');

    // „ksiegowosc” i „księgowość” dają ten sam wynik
    await page.fill('#faq-search', 'ksiegowosc');
    const ascii = await shown(page).count();
    await page.fill('#faq-search', 'księgowość');
    await expect(shown(page)).toHaveCount(ascii);
    expect(ascii).toBeGreaterThanOrEqual(2);

    await page.fill('#faq-search', 'OC ubezpieczenie'); // wszystkie słowa muszą pasować
    await expect(shown(page)).toHaveCount(1);

    await page.fill('#faq-search', 'zzzzqq');
    await expect(page.locator('[data-faq-empty]')).toContainText('zzzzqq');
    await expect(page.locator('[data-faq-toggle-all]')).toBeHidden();

    // wpisany kod HTML jest tylko tekstem
    await page.fill('#faq-search', '<img src=x onerror="window.__x=1">');
    await expect(page.locator('[data-faq-empty] img')).toHaveCount(0);
    expect(await page.evaluate(() => (window as unknown as { __x?: number }).__x)).toBeUndefined();

    await page.locator('[data-faq-clear]').click();
    await expect(shown(page)).toHaveCount(11);
    await expect(page.locator('#faq-search')).toBeFocused();

    for (const [key, n] of [
      ['scope', 5],
      ['grants', 3],
      ['cooperation', 2],
      ['pricing', 1],
    ] as const) {
      await page.locator(`[data-faq-cat="${key}"]`).click();
      await expect(shown(page)).toHaveCount(n);
      await expect(page.locator(`[data-faq-cat="${key}"]`)).toHaveAttribute('aria-pressed', 'true');
    }
    await page.locator('[data-faq-cat="all"]').click();

    await page.locator('[data-faq-toggle-all]').click();
    await expect(page.locator('details.faq-item[open]')).toHaveCount(11);
    await expect(page.locator('[data-faq-toggle-all]')).toHaveText('Zwiń wszystkie');
    await page.locator('[data-faq-toggle-all]').click();
    await expect(page.locator('details.faq-item[open]')).toHaveCount(0);
    expect(errors).toEqual([]);
  });

  test('kliknięcie otwiera pytanie i zapisuje jego adres; klawiatura działa', async ({ page }) => {
    await page.goto('/faq');
    await page.locator('#ubezpieczenie-oc summary').click();
    await expect(page.locator('#ubezpieczenie-oc')).toHaveJSProperty('open', true);
    expect(await page.evaluate(() => location.hash)).toBe('#ubezpieczenie-oc');
    await page.locator('#ubezpieczenie-oc summary').click();
    expect(await page.evaluate(() => location.hash)).toBe('');

    await page.locator('#formy-ksiegowosci summary').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#formy-ksiegowosci')).toHaveJSProperty('open', true);
    await page.keyboard.press('Space');
    await expect(page.locator('#formy-ksiegowosci')).toHaveJSProperty('open', false);
  });

  test('link do pytania otwiera je, przewija i ustawia fokus', async ({ page }) => {
    await page.goto('/faq#ubezpieczenie-oc');
    await expect(page.locator('details.faq-item[open]')).toHaveCount(1);
    await expect(page.locator('#ubezpieczenie-oc')).toHaveJSProperty('open', true);
    await expect(page.locator('#ubezpieczenie-oc summary')).toBeFocused();
    await expect(page.locator('#ubezpieczenie-oc')).toBeInViewport();

    // zmiana #fragmentu przy włączonym filtrze czyści filtr i otwiera wskazane pytanie
    await page.locator('[data-faq-cat="pricing"]').click();
    await page.evaluate(() => (location.hash = '#doradztwo-podatkowe'));
    await expect(shown(page)).toHaveCount(11);
    await expect(page.locator('#doradztwo-podatkowe')).toHaveJSProperty('open', true);
  });

  test('nieznany #fragment nic nie otwiera', async ({ page }) => {
    await page.goto('/faq#nie-ma-takiego');
    await expect(page.locator('details.faq-item[open]')).toHaveCount(0);
  });

  test('wersja angielska: lista i wyszukiwarka', async ({ page }) => {
    await page.goto('/en/faq');
    await expect(items(page)).toHaveCount(11);
    await page.fill('#faq-search', 'grant');
    expect(await shown(page).count()).toBeGreaterThanOrEqual(3);
  });

  test('telefon: bez przewijania w poziomie, także po rozwinięciu wszystkiego', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/faq');
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
    await page.locator('[data-faq-toggle-all]').click();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});

test.describe('FAQ – bez JavaScriptu', () => {
  test.use({ javaScriptEnabled: false });

  test('pytania są widoczne i otwierają się natywnie, narzędzia ukryte', async ({ page }) => {
    await page.goto('/faq');
    await expect(page.locator('[data-faq-tools]')).toBeHidden();
    await expect(items(page)).toHaveCount(11);
    await page.locator('#formy-ksiegowosci summary').click();
    await expect(page.locator('#formy-ksiegowosci')).toHaveJSProperty('open', true);
  });
});
