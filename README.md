# Everest Rachunkowość & NGO – strona internetowa

Nowa wersja strony https://everest-rachunkowosc.pl – statyczna strona w **Astro 7** z **Tailwind CSS 4** i krojami **Source Serif 4** (nagłówki) oraz **Public Sans** (tekst), dwujęzyczna (PL domyślnie, EN pod `/en/`).

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
  config/team.ts      zdjęcia i linki LinkedIn osób z zespołu
  config/software.ts  logo programów (Sage Symfonia, enova365) – obecnie plakietki z nazwą
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

**Podział stron:** strona główna = hero, oferta, dodatkowe informacje, współpraca, zajawka „O nas”, kontakt (z mapą), karuzela klientów.
Podstrona `/o-nas` (EN: `/en/about`) = o biurze (logo, akapity, LinkedIn, Google Maps) i zespół.

### Jak dodać nową osobę do zespołu

1. Dodaj zdjęcie do `src/assets/team/` (opcjonalnie – bez zdjęcia pokażą się inicjały).
2. W `src/config/team.ts` dodaj wpis z kluczem (np. `anna`), zdjęciem i linkiem LinkedIn.
3. W `src/i18n/pl.ts` i `en.ts` dodaj w `team.members` obiekt z tym samym `key`, rolą, imieniem i opisem (`description` to lista akapitów).

Siatka zespołu dopasowuje się sama (2, 3, 4 kolumny). Na stronie głównej w zajawce pokazują się tylko dwie pierwsze osoby.

### Mapa w sekcji kontakt

Mapa Google ładuje się dopiero po kliknięciu „Pokaż mapę” (do tego czasu nie są wysyłane żadne dane do Google, więc nie potrzeba banera cookies). Adres mapy ustawia `mapQuery` w `src/config/site.ts`. Przy wdrożeniu CSP trzeba dopuścić `frame-src https://www.google.com`. Jeśli klient woli mapę widoczną od razu, trzeba dodać zgodę cookies.

### Favicona

Oryginalny znak firmy: `public/favicon.svg` (w ciemnym motywie przeglądarki biały) oraz `favicon.ico`, `favicon-48.png`, `favicon-192.png`, `apple-touch-icon.png`. Google wymaga kwadratowej ikony o boku będącym wielokrotnością 48 px. Po zmianie odśwież stronę z pominięciem pamięci podręcznej (Ctrl+F5), bo przeglądarki agresywnie cache'ują favicony.

### Podmiana treści i zdjęć przed wdrożeniem

- Teksty: `src/i18n/pl.ts` i `src/i18n/en.ts` (oba pliki mają identyczną strukturę – TypeScript pilnuje zgodności kluczy).
- Zdjęcia: nadpisz `src/assets/team/dominik.jpg` i `julita.jpg` (najlepiej kwadrat lub pion 4:5, min. 1000 px).
- Hero – układ terenu: zatwierdzony profil jest w środku, a po bokach ręcznie ustawione, coraz niższe pasma (`LEFT_OUT`, `RIGHT_OUT`) oraz jaśniejsza warstwa „dalsze wzgórza” (`FAR`, generowana deterministycznie). Skrypt na dole pliku ustawia viewBox tak, że szczyt zawsze leży na ok. 60,8% szerokości, a skala nie przekracza 1900/1440. Warstwice są wycentrowane na szczycie i mają limit szerokości 2200 px.
- Ikony są skalowane jednostkami względnymi (`size-8` = 50% kafelka 4 rem), więc rosną razem z ekranem. Nie używaj już `size={30}` w pikselach.
- Hero na szerokich ekranach: teren ciągnie się w lewo jako niższe „podgórza” (geometria w `Hero.astro`), a skrypt dopasowuje viewBox do szerokości okna – skala wykresu nie rośnie powyżej ~1,32, więc kompozycja jest taka sama jak na ekranie 1900 px.
- Favikony: do adresów w `layouts/Base.astro` dopisany jest znacznik wersji (`?v=2`). Przy zmianie ikon podbij numer – przeglądarki (zwłaszcza Firefox) potrafią trzymać starą ikonę bardzo długo.
- Przełącznik języka pokazuje nazwę języka docelowego („English” / „Polski”) z ikoną globusa; zamiast flag, bo flaga oznacza kraj, nie język (np. angielski to nie tylko Wielka Brytania), a Windows nie wyświetla emoji flag.
- Wygląd „warstwice”: jasna paleta (tokeny w `src/styles/global.css`), warstwice generowane w `src/lib/contours.ts` (komponent `Contours.astro` dla tła sekcji, hero ma własną, animowaną wersję). Pomarańcz (`--color-signal`) jest tylko na fladze i pinezce mapy – nie używaj go w innych miejscach.
- Animacja hero (jedyna na stronie): warstwice → góra wyrasta → linia nad nią → flaga. Czasy w `<style>` w `Hero.astro`. Przy „ogranicz ruch” hero od razu pokazuje stan końcowy.
- Hero „wykres”: na szczycie stoi chorągiewka (nawiązanie do nazwy firmy). Układ wykresu dobiera się automatycznie: skrypt na dole `Hero.astro` mierzy, czy linie przecinałyby tekst, i w razie potrzeby wygasza lub ukrywa linię-echo albo przenosi wykres pod tekst. Stałe (`ECHO_FADE_*`, `TOP_FADE`) muszą zgadzać się z maską w `<defs>` i z CSS `.ridge-svg`.
- Czcionki: dwie linie `--font-display` (nagłówki) i `--font-sans` (tekst) w `src/styles/global.css` oraz importy w `src/layouts/Base.astro`. Rozmiar bazowy jest płynny (ok. 15 px na telefonie, 16 px od tabletu), a nagłówki mają klasy `text-h1`/`text-h2`/`text-h3` z `clamp()`.
- Logo programów: `src/assets/software/` (enova365 – wektor SVG; Symfonia – PNG ok. 1546 px, bo producent publikuje je tylko jako obraz rastrowy; przy prawdziwym SVG od producenta wystarczy podmienić plik).
- Logo klientów: wrzuć pliki do `src/assets/clients/`, zaimportuj w `src/config/clients.ts` i zamień wpisy-makiety. **Logo klienta publikujemy tylko za jego zgodą.**
- Linki social: uzupełnij `src/config/site.ts` (puste linki nie są renderowane).
- Nowa osoba w zespole: zdjęcie do `src/assets/team/`, wpis w `src/config/team.ts` (zdjęcie, LinkedIn) oraz obiekt z tym samym `key` w `team.members` w `pl.ts` i `en.ts` (opis jako lista akapitów). Siatka zespołu rozszerza się automatycznie (2–4 kolumny).
- Mapa w sekcji Kontakt: współrzędne w `src/config/site.ts` (`mapQuery`). Mapa Google ładuje się dopiero po kliknięciu „Pokaż mapę” – przed kliknięciem strona nie łączy się z Google. W polityce prywatności trzeba to opisać.
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
