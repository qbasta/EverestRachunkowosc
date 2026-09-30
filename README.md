# Everest Rachunkowość & NGO – strona internetowa

Nowa wersja strony https://everest-rachunkowosc.pl – statyczna strona w **Astro 7** z **Tailwind CSS 4**, dwujęzyczna (PL domyślnie, EN pod `/en/`).

## Szybki start (VS Code)

Wymagania: **Node.js ≥ 22.12**.

```bash
npm install
npm run dev        # http://localhost:4321
```

Po otwarciu folderu VS Code zaproponuje zalecane rozszerzenia (Astro, Tailwind, Prettier).

| Polecenie            | Co robi                                           |
| -------------------- | ------------------------------------------------- |
| `npm run dev`        | serwer deweloperski                               |
| `npm run build`      | kontrola typów (`astro check`) + build do `dist/` |
| `npm run preview`    | podgląd zbudowanej strony                         |
| `npm run format`     | formatowanie Prettierem                           |
| `npm run audit:prod` | `npm audit` dla zależności produkcyjnych          |

## Struktura

```
src/
  config/site.ts      dane firmy (telefon, e-mail, adres, linki social)
  i18n/pl.ts, en.ts   WSZYSTKIE teksty strony (podmiana treści = edycja tych plików)
  components/         sekcje strony (Hero, About, Services, Team, Contact, ...)
  layouts/Base.astro  <head>, SEO, hreflang, dane strukturalne JSON-LD
  pages/              index.astro (PL), en/index.astro (EN), 404.astro
  styles/global.css   design tokens (kolory, fonty) i wspólne klasy
  assets/team/        zdjęcia zespołu (optymalizowane automatycznie)
```

### Podmiana treści i zdjęć przed wdrożeniem

- Teksty: `src/i18n/pl.ts` i `src/i18n/en.ts` (oba pliki mają identyczną strukturę – TypeScript pilnuje zgodności kluczy).
- Zdjęcia: nadpisz `src/assets/team/dominik.jpg` i `julita.jpg` (najlepiej kwadrat lub pion 4:5, min. 1000 px).
- Logo: obecnie tymczasowe (`src/components/Logo.astro`). Wrzuć oryginalne SVG i podmień komponent.
- Linki social: uzupełnij `src/config/site.ts` (puste linki nie są renderowane).

## Bezpieczeństwo – zasady

- **Nigdy nie commituj sekretów** (hasła SMTP, klucze Turnstile). Trzymaj je w `.env` (ignorowany przez git) lub bezpośrednio na serwerze. W `PUBLIC_*` trafiają wyłącznie wartości jawne.
- Repozytorium jest obecnie publiczne – rozważ ustawienie na prywatne (kod należy do klienta).
- CI (`.github/workflows/ci.yml`) uruchamia format, build i `npm audit`. Dependabot zgłasza aktualizacje co tydzień.

## Co jest gotowe, a co jeszcze nie

Gotowe (etap 1): szkielet, design tokens, PL/EN, wszystkie sekcje, hero z animowanym wykresem, formularz (UI + walidacja po stronie przeglądarki + zgoda + honeypot), SEO (meta, hreflang, JSON-LD, sitemap, robots), CI.

Do zrobienia (kolejne etapy):

1. **Endpoint formularza** (`/api/contact.php`, PHP + SMTP): walidacja serwerowa, honeypot, minimalny czas wypełnienia, limit zapytań, sprawdzanie `Origin`, ochrona przed header injection, Turnstile/ALTCHA.
2. **Nagłówki bezpieczeństwa** (`.htaccess`): CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors` + prawdziwe przekierowania 301 (`/signin`, `biuroeverest.pl` → domena główna).
3. **Polityka prywatności** i klauzula RODO (dane administratora od klienta).
4. Oryginalne logo, linki social, finalne treści i zdjęcia, obraz OG do udostępniania.
5. Testy: Lighthouse, axe (dostępność), testy na realnych urządzeniach.
