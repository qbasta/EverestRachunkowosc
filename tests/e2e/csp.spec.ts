import { expect, test } from '@playwright/test';

// Strona jest serwowana z nagłówkami z public/.htaccess (scripts/serve.mjs). Test pilnuje, że CSP
// niczego na stronie nie blokuje – w żadnej przeglądarce – i że nagłówki faktycznie są ustawione.
const pages = [
  '/',
  '/en/',
  '/nasz-zespol/',
  '/en/our-team/',
  '/faq/',
  '/en/faq/',
  '/wycena/',
  '/en/quote/',
  '/nie-ma-takiej-strony/',
];

test('nagłówki bezpieczeństwa są ustawione', async ({ request }) => {
  const res = await request.get('/');
  const h = res.headers();
  expect(h['content-security-policy']).toContain("script-src 'self'");
  expect(h['content-security-policy']).toContain("object-src 'none'");
  expect(h['x-content-type-options']).toBe('nosniff');
  expect(h['x-frame-options']).toBe('DENY');
  expect(h['referrer-policy']).toBe('strict-origin-when-cross-origin');
  expect(h['permissions-policy']).toContain('camera=()');
});

for (const path of pages) {
  test(`CSP nic nie blokuje: ${path}`, async ({ page }) => {
    const violations: string[] = [];
    await page.exposeFunction('reportViolation', (v: string) => violations.push(v));
    await page.addInitScript(() => {
      document.addEventListener('securitypolicyviolation', (e) => {
        (window as unknown as { reportViolation: (v: string) => void }).reportViolation(
          `${e.violatedDirective} ← ${e.blockedURI}`,
        );
      });
    });
    await page.goto(path);
    await expect(page.locator('h1')).toBeVisible();
    // Przewiń do końca, żeby załadowały się wszystkie obrazy i skrypty sekcji.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForLoadState('load');
    expect(violations).toEqual([]);
  });
}

test('mapa Google ładuje się po zgodzie i CSP jej nie blokuje', async ({ page }) => {
  const violations: string[] = [];
  await page.exposeFunction('reportViolation', (v: string) => violations.push(v));
  await page.addInitScript(() => {
    document.addEventListener('securitypolicyviolation', (e) => {
      (window as unknown as { reportViolation: (v: string) => void }).reportViolation(
        `${e.violatedDirective} ← ${e.blockedURI}`,
      );
    });
  });
  // Bez internetu w środowisku testowym wystarczy, że przeglądarka nie zablokuje samego żądania przez CSP.
  await page.route('https://www.google.com/**', (route) =>
    route.fulfill({ contentType: 'text/html', body: '<p>mapa</p>' }),
  );
  await page.goto('/');
  await page.locator('.map-load').click();
  await expect(page.locator('#contact iframe')).toBeVisible();
  expect(violations).toEqual([]);
});
