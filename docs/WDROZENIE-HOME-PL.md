# Wdrożenie na home.pl

Dotyczy serwera **serwer2455008** (PHP 8.3, SSL aktywny). Serwer WWW zakładamy jako Apache (`.htaccess`); jeśli
`curl -I` z kroku 3 pokaże coś innego niż poniżej, trzeba to zgłosić przed przełączeniem strony.

## 1. Przed wdrożeniem

1. **Kopia starej strony**: pobrać cały katalog główny domeny przez FTP/SFTP albo menedżer plików do osobnego
   folderu. To jedyny sposób na szybki powrót.
2. `npm ci && npm run build` – gotowa strona jest w katalogu `dist/`.
3. Upewnić się, że w `dist/` jest plik `.htaccess` (zaczyna się od kropki – część programów FTP go ukrywa;
   włączyć „pokaż ukryte pliki”) oraz `.well-known/security.txt`.

## 2. Wgranie

Wgrać **zawartość** `dist/` (nie sam folder) do katalogu głównego domeny, razem z `.htaccess`. Stare pliki, których
nie ma w `dist/`, usunąć dopiero po sprawdzeniu, że nowa wersja działa.

## 3. Sprawdzenie

```bash
# 1) http → https, jednym skokiem, na adres bez www
curl -sI http://everest-rachunkowosc.pl/faq/      # 301, Location: https://everest-rachunkowosc.pl/faq/
curl -sI https://www.everest-rachunkowosc.pl/     # 301, Location: https://everest-rachunkowosc.pl/
curl -sI https://biuroeverest.pl/                 # 301, Location: https://everest-rachunkowosc.pl/

# 2) stary adres formularza
curl -sI https://everest-rachunkowosc.pl/signin   # 301, Location: https://everest-rachunkowosc.pl/#contact

# 3) strona i nagłówki
curl -sI https://everest-rachunkowosc.pl/ | grep -iE "^(HTTP|content-security|strict-transport|x-frame|x-content|referrer|permissions)"

# 4) błąd 404 i pliki ukryte
curl -sI https://everest-rachunkowosc.pl/nie-ma/        # 404 (strona 404.html)
curl -sI https://everest-rachunkowosc.pl/.htaccess      # 403 lub 404

# 5) pamięć podręczna plików z /_astro/
curl -sI https://everest-rachunkowosc.pl/_astro/<dowolny plik> | grep -i cache-control   # immutable
```

Następnie otworzyć stronę w przeglądarce (Chrome, Firefox, Safari), w konsoli (F12) nie powinno być błędów
„Refused to …” (to znaczy, że CSP coś blokuje). Przetestować: menu, FAQ, kreator wyceny, mapę (przycisk
„Załaduj mapę”).

Jeśli `curl` nie pokazuje nagłówków `Content-Security-Policy` itd., na serwerze brakuje modułu `mod_headers`
(zapytać wsparcie home.pl) – reszta strony będzie działać, ale bez tych zabezpieczeń.

## 4. HSTS – włączanie etapami

HSTS każe przeglądarce używać wyłącznie HTTPS. Po włączeniu przeglądarka pamięta regułę, więc pomyłka (np.
wygasły certyfikat) zablokuje dostęp do strony aż do końca okresu. Dlatego:

| Etap                         | `max-age`          | Kiedy                                                                     |
| ---------------------------- | ------------------ | ------------------------------------------------------------------------- |
| 1 (domyślnie w repozytorium) | `300` (5 min)      | od razu po wdrożeniu                                                      |
| 2                            | `604800` (tydzień) | po tygodniu bez problemów                                                 |
| 3                            | `31536000` (rok)   | po kolejnym miesiącu; `includeSubDomains` dopiero po sprawdzeniu subdomen |

Zmiana: linia `Strict-Transport-Security` w `public/.htaccess`, nowy build i wgranie samego `.htaccess`.
Włączenie **HTTP/3** w panelu home.pl jest opcjonalne i niezależne od tej strony.

## 5. Powrót do starej wersji

Przywrócić pliki z kopii z kroku 1. Jeśli HSTS był już włączony, nie ma to znaczenia dla starej strony, o ile jej
certyfikat SSL jest ważny (jest aktywny w panelu).

## Czego nie da się sprawdzić z zewnątrz

Powyższe polecenia to jedyny pewny test: nie mamy dostępu do konfiguracji serwera home.pl, więc zachowanie
`.htaccess` (moduły, dopuszczone dyrektywy) potwierdza dopiero pierwsze wdrożenie. Lokalnie i w CI sprawdzamy
tylko, że **strona działa z tymi nagłówkami** (`tests/e2e/csp.spec.ts`).
