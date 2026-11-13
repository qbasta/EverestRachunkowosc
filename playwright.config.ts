import { defineConfig, devices } from '@playwright/test';

const port = 4321;

// Testy uruchamiają się na zbudowanej stronie (`npm run build` → `astro preview`) w trzech silnikach:
// Chromium (Chrome, Edge), Firefox i WebKit (Safari) + emulacja iPhone'a w WebKit.
export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Tylko lokalnie: własna ścieżka do Chromium, gdy nie da się pobrać przeglądarek Playwrighta.
        launchOptions: { executablePath: process.env.PW_CHROMIUM_PATH || undefined },
      },
    },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
  ],
  webServer: {
    command: `npm run preview -- --port ${port} --ignore-lock`,
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
