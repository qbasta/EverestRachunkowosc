# Everest Rachunkowość & NGO – strona internetowa

Nowa wersja strony https://everest-rachunkowosc.pl – statyczna strona w **Astro 7** z **Tailwind CSS 4** i fontem **Bricolage Grotesque**, dwujęzyczna (PL domyślnie, EN pod `/en/`).

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
  config/clients.ts   lista klientów w karuzeli „Zaufali nam już” (obecnie MAKIETY)
  i18n/pl.ts, en.ts   WSZYSTKIE teksty strony (podmiana treści = edycja tych plików)
  i18n/index.ts       ścieżki podstron w obu językach (/o-nas, /en/about)
  components/         sekcje strony (Hero, Services, Info, AboutTeaser, Trust, Contact, ...)
  layouts/Base.astro  <head>, SEO, hreflang, dane strukturalne JSON-LD
  pages/              index (PL), en/index, o-nas, en/about, 404
  styles/global.css   design tokens (kolory, font) i wspólne klasy
  assets/brand/       oryginalne logo (jasne, ciemne, sam znak)
  assets/team/        zdjęcia zespołu (optymalizowane automatycznie)
  assets/clients/     logo klientów (teraz makiety mock-*.svg)
```

**Podział stron:** strona główna = hero, oferta, dodatkowe informacje, zajawka „O nas”, kontakt, karuzela klientów.
Podstrona `/o-nas` (EN: `/en/about`) = o biurze, zespół, współpraca.

### Podmiana treści i zdjęć przed wdrożeniem

- Teksty: `src/i18n/pl.ts` i `src/i18n/en.ts` (oba pliki mają identyczną strukturę – TypeScript pilnuje zgodności kluczy).
- Zdjęcia: nadpisz `src/assets/team/dominik.jpg` i `julita.jpg` (najlepiej kwadrat lub pion 4:5, min. 1000 px).
- Logo klientów: wrzuć pliki do `src/assets/clients/`, zaimportuj w `src/config/clients.ts` i zamień wpisy-makiety. **Logo klienta publikujemy tylko za jego zgodą.**
- Linki social: uzupełnij `src/config/site.ts` (puste linki nie są renderowane).
- Ikony: biblioteka Lucide (`@lucide/astro`), importy pojedynczych ikon, np. `@lucide/astro/icons/calculator`.

## Bezpieczeństwo – zasady

- **Nigdy nie commituj sekretów** (hasła SMTP, klucze Turnstile). Trzymaj je w `.env` (ignorowany przez git) lub bezpośrednio na serwerze. W `PUBLIC_*` trafiają wyłącznie wartości jawne.
- Repozytorium jest obecnie publiczne – rozważ ustawienie na prywatne (kod należy do klienta).
- CI (`.github/workflows/ci.yml`) uruchamia format, build i `npm audit`. Dependabot zgłasza aktualizacje co tydzień.

## Co jest gotowe, a co jeszcze nie

Gotowe (etap 1): szkielet, design tokens, PL/EN, podział na stronę główną i `/o-nas`, oryginalne logo, ikony, hero z animowanym wykresem (geometria z logo), karuzela klientów (makiety, z przyciskiem pauzy i obsługą „ogranicz ruch”), formularz (UI + walidacja po stronie przeglądarki + zgoda + honeypot), SEO (meta, hreflang, JSON-LD, sitemap, robots), CI.

Do zrobienia (kolejne etapy):

1. **Endpoint formularza** (`/api/contact.php`, PHP + SMTP): walidacja serwerowa, honeypot, minimalny czas wypełnienia, limit zapytań, sprawdzanie `Origin`, ochrona przed header injection, Turnstile/ALTCHA.
2. **Nagłówki bezpieczeństwa** (`.htaccess`): CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors` + prawdziwe przekierowania 301 (`/signin`, `biuroeverest.pl` → domena główna).
3. **Polityka prywatności** i klauzula RODO (dane administratora od klienta).
4. Prawdziwe logo klientów (za ich zgodą), linki social, finalne treści i zdjęcia, obraz OG do udostępniania.
5. Testy: Lighthouse, axe (dostępność), testy na realnych urządzeniach.
