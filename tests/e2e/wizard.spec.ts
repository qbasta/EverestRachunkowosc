import { expect, test } from '@playwright/test';
import { collectErrors, horizontalOverflow } from './helpers';

const next = '[data-wz=next]';

test.describe('Kreator wyceny', () => {
  test('przejście przez 5 kroków, walidacja, podsumowanie, edycja i wysyłka', async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto('/wycena/');
    const count = page.locator('.wz-count');
    await expect(count).toContainText('1');
    await expect(page.locator('.wz-submit')).toBeHidden();

    // krok 1: błędny e-mail blokuje przejście
    await page.fill('#q-email', 'zle');
    await page.click(next);
    await expect(page.locator('#q-email-err')).not.toBeEmpty();
    await expect(count).toContainText('1');
    await page.fill('#q-firstName', 'Anna');
    await page.fill('#q-lastName', 'Kowalska');
    await page.fill('#q-orgName', 'Fundacja Test');
    await page.fill('#q-email', 'anna@example.org');
    await page.click(next);
    await expect(count).toContainText('2');

    // krok 2: liczba niecałkowita jest odrzucana
    await page.fill('#q-docInvoices', '1.5');
    await page.click(next);
    await expect(page.locator('#q-docInvoices-err')).not.toBeEmpty();
    await page.fill('#q-docInvoices', '40');
    await page.fill('#q-staffEmployees', '3');
    await page.click(next);

    // krok 3 i 4
    await expect(count).toContainText('3');
    await page.check('input[name=vat][value=yes]');
    await page.check('input[name="activities[]"][value=free]');
    await page.check('input[name=opp][value=no]');
    await page.click(next);
    await page.fill('#q-info', 'Linia 1\nLinia 2');
    await page.click(next);

    // krok 5: podsumowanie z wpisanymi danymi, przycisk wysyłki widoczny
    await expect(count).toContainText('5');
    await expect(page.locator('.wz-summary')).toContainText('Fundacja Test');
    await expect(page.locator('.wz-summary')).toContainText('40');
    await expect(page.locator('.wz-submit')).toBeVisible();

    // „Zmień” wraca do wybranego kroku
    await page.locator('.wz-summary-group').nth(1).locator('.tlink').click();
    await expect(count).toContainText('2');
    await page.click(next);
    await page.click(next);
    await page.click(next);

    // bez zgody nie wysyła
    await page.click('.wz-submit');
    await expect(page.locator('#q-consent-err')).not.toBeEmpty();
    await page.check('#q-consent');

    // błąd serwera → komunikat, formularz zostaje
    await page.route('**/api/quote.php', (route) => route.fulfill({ status: 500, body: 'err' }));
    await page.click('.wz-submit');
    await expect(page.locator('#q-status')).not.toBeEmpty();
    await expect(page.locator('#q-success')).toBeHidden();

    // sukces → panel potwierdzenia z fokusem
    await page.unroute('**/api/quote.php');
    await page.route('**/api/quote.php', (route) =>
      route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }),
    );
    await page.click('.wz-submit');
    await expect(page.locator('#q-success')).toBeVisible();
    await expect(page.locator('#q-success')).toBeFocused();
    expect(errors.filter((e) => !/api\/quote\.php|status of 500/.test(e))).toEqual([]);
  });

  test('Enter w polu przechodzi do następnego kroku', async ({ page }) => {
    await page.goto('/wycena/');
    await page.fill('#q-firstName', 'X');
    await page.press('#q-firstName', 'Enter');
    await expect(page.locator('.wz-count')).toContainText('2');
  });

  test('telefon: bez przewijania w poziomie', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/wycena/');
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
  });
});

test.describe('Kreator wyceny – bez JavaScriptu', () => {
  test.use({ javaScriptEnabled: false });

  test('wszystkie kroki widoczne naraz, jest przycisk wysyłki', async ({ page }) => {
    await page.goto('/wycena/');
    await expect(page.locator('.wz-step')).toHaveCount(4);
    for (const step of await page.locator('.wz-step').all()) await expect(step).toBeVisible();
    await expect(page.locator('.wz-submit')).toBeVisible();
  });
});
