import { expect, test } from '@playwright/test';
import { collectErrors } from './helpers';

test.describe('Kontakt i „Zaufali nam”', () => {
  test('sekcja kontaktu: dane, godziny, link do wyceny, brak formularza', async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto('/');
    const contact = page.locator('#contact');
    await expect(contact.locator('a[href^="tel:"]')).toHaveText('+48 691 344 276');
    await expect(contact.locator('a[href^="mailto:"]')).toHaveText('dominik@biuroeverest.pl');
    await expect(contact.locator('address')).toContainText('Żurawia 47 lok. 110');
    await expect(contact).toContainText('9:00 – 17:00');
    await expect(contact).toContainText('9:00 – 15:00');
    await expect(contact.locator('form')).toHaveCount(0);
    await expect(contact.locator('a[href="/wycena/"]')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('mapa ładuje się dopiero po kliknięciu', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#contact iframe')).toHaveCount(0);
    await page.locator('#contact .map-load').click();
    const frame = page.locator('#contact iframe');
    await expect(frame).toHaveCount(1);
    await expect(frame).toHaveAttribute('src', /^https:\/\/www\.google\.com\/maps/);
  });

  test('„Zaufali nam”: 8 fundacji, każda raz dla czytników ekranu', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('#trust .group:not(.group-copy) > li:not([aria-hidden])'),
    ).toHaveCount(8);
    await expect(page.locator('#trust')).toContainText('Fundacja Instrat');
    // Fundacje z logo: nazwa jest w opisie obrazka (raz – powtórzenia w pętli mają pusty alt).
    for (const name of [
      'Fundacja Herosi',
      'Fundacja Impuls dla Młodych',
      'Fundacja Pomocy Dzieciom z Chorobą Nowotworową',
    ]) {
      const logo = page.locator(`#trust img[alt="${name}"]`);
      await expect(logo).toHaveCount(1);
      // Obrazek faktycznie się wczytał (nie jest uszkodzony).
      expect(await logo.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    }
  });

  test('przycisk pauzy przełącza stan animacji', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('#trust .trust-toggle');
    await button.click();
    await expect(page.locator('#trust')).toHaveAttribute('data-paused', 'true');
    await button.click();
    await expect(page.locator('#trust')).toHaveAttribute('data-paused', 'false');
  });
});

test.describe('Zespół', () => {
  test('cztery osoby w tym samym układzie: dwie ze zdjęciem, dwie z inicjałami', async ({
    page,
  }) => {
    await page.goto('/nasz-zespol/');
    await expect(page.locator('#team article')).toHaveCount(4);
    await expect(page.locator('#team article img')).toHaveCount(2);
    await expect(page.locator('#team .team-monogram')).toHaveCount(2);
    for (const name of [
      'Dominik Markiewicz',
      'Julita Markiewicz',
      'Marek Kropiewnicki',
      'Krzysztof Kuśmierowski',
    ]) {
      await expect(page.locator('#team h2', { hasText: name })).toBeVisible();
    }
    // Tytuł strony jest tylko raz (w nagłówku), bez powtórzenia w sekcji.
    await expect(page.getByRole('heading', { name: 'Nasz zespół' })).toHaveCount(1);
  });

  test('ramki osób (zdjęcie lub inicjały) mają tę samą szerokość i lewą krawędź', async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, 'Układ dwukolumnowy dotyczy szerszych ekranów.');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/nasz-zespol/');
    const boxes = await page
      .locator('#team .team-portrait')
      .evaluateAll((els) => els.map((el) => el.getBoundingClientRect()));
    expect(boxes).toHaveLength(4);
    for (const box of boxes) {
      expect(Math.abs(box.left - boxes[0].left)).toBeLessThan(1);
      expect(Math.abs(box.width - boxes[0].width)).toBeLessThan(1);
      expect(Math.abs(box.height - boxes[0].height)).toBeLessThan(1);
    }
  });

  test('biogramy są widoczne od razu; biogram Marka zawiera listę punktowaną', async ({ page }) => {
    await page.goto('/nasz-zespol/');
    const card = page.locator('#team article', { hasText: 'Marek Kropiewnicki' });
    await expect(card.locator('li')).toHaveCount(5);
    await expect(card.locator('li').first()).toBeVisible();
    await expect(card).toContainText('„Umiejętności Jutra AI”');
    await expect(page.locator('#team details')).toHaveCount(0);
  });

  test('wersja angielska ma te same cztery osoby', async ({ page }) => {
    await page.goto('/en/our-team/');
    await expect(page.locator('#team article')).toHaveCount(4);
    await expect(page.locator('#team h2', { hasText: 'Krzysztof Kuśmierowski' })).toBeVisible();
  });
});
