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
    await expect(contact.locator('a[href="/wycena"]')).toBeVisible();
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
    await expect(page.locator('#trust')).toContainText(
      'Fundacja Pomocy Dzieciom z Chorobą Nowotworową',
    );
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
  test('cztery osoby: dwie ze zdjęciem, dwie jako karty tekstowe', async ({ page }) => {
    await page.goto('/nasz-zespol');
    await expect(page.locator('#team article')).toHaveCount(4);
    await expect(page.locator('#team article img')).toHaveCount(2);
    for (const name of [
      'Dominik Markiewicz',
      'Julita Markiewicz',
      'Marek Kropiewnicki',
      'Krzysztof Kuśmierowski',
    ]) {
      await expect(page.locator('#team h3', { hasText: name })).toBeVisible();
    }
  });

  test('biogram Marka zawiera listę punktowaną po rozwinięciu', async ({ page }) => {
    await page.goto('/nasz-zespol');
    const card = page.locator('#team article', { hasText: 'Marek Kropiewnicki' });
    await expect(card.locator('li')).toHaveCount(5);
    await expect(card.locator('li').first()).toBeHidden();
    await card.locator('summary').click();
    await expect(card.locator('li').first()).toBeVisible();
    await expect(card).toContainText('„Umiejętności Jutra AI”');
  });

  test('wersja angielska ma te same cztery osoby', async ({ page }) => {
    await page.goto('/en/our-team');
    await expect(page.locator('#team article')).toHaveCount(4);
    await expect(page.locator('#team h3', { hasText: 'Krzysztof Kuśmierowski' })).toBeVisible();
  });
});
