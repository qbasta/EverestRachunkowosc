# Do ustalenia z klientem

Lista niejasności zebrana podczas planowania rozbudowy strony. Przy wdrażaniu kolejnych kroków oznaczamy je w kodzie komentarzem `TODO(klient)`. Po rozstrzygnięciu punkt przenosimy do sekcji „Ustalone”.

## Otwarte

| #   | Temat                | Co jest niejasne                                                                                                                                                    | Tymczasowo                                                                                                                      |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1   | FAQ nr 5             | Pytanie dotyczy zmian we wcześniejszych okresach roku, a odpowiedź zaczyna się od „W trakcie realizacji projektu możliwe jest **również**…” – brakuje chyba zdania. | Treść dokładnie jak w specyfikacji.                                                                                             |
| 2   | Cennik               | Czy „Od 110 zł osoba/miesiąc” (obsługa kadrowo-płacowa umów o pracę) jest kwotą netto? Pozostałe pozycje mają zapis „netto”.                                        | Zapis bez „netto”, do potwierdzenia.                                                                                            |
| 3   | Logo oprogramowania  | Brak logo: Płatnik, Fakturownia.pl, Legalis (plik SVG od klienta; Płatnik to znak ZUS – sprawdzić zasady użycia).                                                   | Placeholder (ikona obrazka z krzyżykiem + nazwa).                                                                               |
| 4   | Logo klientów        | Brak logo ośmiu fundacji w pasku „Zaufali nam” oraz zgód na publikację.                                                                                             | Placeholdery z nazwami fundacji.                                                                                                |
| 5   | Formularz wyceny     | „Powołania” w liczbie zatrudnionych – zakładamy członków zarządu itp. Pola obowiązkowe/opcjonalne – walidację dodamy na końcu po konsultacji.                       | Wszystkie pola opcjonalne.                                                                                                      |
| 6   | Polityka prywatności | Formularz zbiera dane osobowe i NIP – potrzebne dane administratora (nazwa, adres, NIP) i treść klauzuli RODO.                                                      | Brak, do uzupełnienia w części technicznej.                                                                                     |
| 7   | Hosting              | Wersja PHP i dane SMTP na home.pl (potrzebne do wysyłki formularza).                                                                                                | Endpoint `/api/quote.php` (kreator wyceny) jeszcze nie istnieje – wysyłka na stronie testowej kończy się komunikatem o błędzie. |
| 8   | EN                   | Terminologię księgową w wersji angielskiej (KSeF, PPK, kadry i płace itp.) powinien zweryfikować klient.                                                            | Tłumaczenie robocze.                                                                                                            |

## Ustalone

- Oficjalna nazwa: **Everest Biuro Rachunkowe & NGO**.
- Terminowość wyceny: odpowiedź „w ciągu 2 dni roboczych”.
- FAQ nr 8 (brak doradztwa podatkowego) zostaje bez zmian; „doradztwo” w ofercie dotyczy bieżącej działalności i organizacji rachunkowości.
- Współpraca: ikona + tytuł + pełny opis, zawsze widoczne; tło z warstwicami (bez zdjęcia).
- Oferta: trzy szerokie wiersze (księgowość; sprawozdawczość finansowa, projektowa oraz audyt; kadry i płace).
- Zespół: tylko Dominik i Julita mają zdjęcia; Marek i Krzysztof – karty tekstowe bez ramki na zdjęcie.
- Formularz wyceny: kreator w 4 krokach z podsumowaniem, na osobnej podstronie.
- FAQ na stronie głównej: ręczna karuzela z 4 najkrótszymi pytaniami + przycisk „Masz więcej pytań?”.
