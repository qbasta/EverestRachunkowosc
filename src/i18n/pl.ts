/** Opis osoby: tekst = akapit, tablica tekstów = lista punktowana. */
export interface TeamMember {
  key: string;
  role: string;
  name: string;
  description: (string | string[])[];
}

export const pl = {
  lang: 'pl',
  locale: 'pl_PL',
  meta: {
    title: 'Everest – Rachunkowość & NGO | Biuro rachunkowe Warszawa',
    description:
      'Everest Biuro Rachunkowe & NGO – obsługa rachunkowa, podatkowa i kadrowo-płacowa dla organizacji pozarządowych i firm. Warszawa.',
  },
  a11y: {
    skip: 'Przejdź do treści',
    home: 'Everest – strona główna',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    mainNav: 'Główna nawigacja',
    switchLang: 'English version',
    pause: 'Zatrzymaj animację',
    play: 'Wznów animację',
    expandSubmenu: 'Rozwiń podmenu',
  },
  nav: {
    about: 'O biurze',
    cooperation: 'Współpraca',
    team: 'Nasz zespół',
    offer: 'Oferta',
    services: 'Usługi',
    software: 'Oprogramowanie',
    faq: 'Najczęściej zadawane pytania (FAQ)',
    pricing: 'Wycena usług',
    contact: 'Skontaktuj się',
    langName: 'English',
  },
  hero: {
    title: 'Rzetelna księgowość dla NGO i biznesu',
    paragraphs: [
      'W Everest Biuro Rachunkowe & NGO łączymy wiedzę i doświadczenie w obszarze księgowości, podatków oraz kadr i płac',
      'Stawiamy na partnerską współpracę i indywidualne podejście do każdego klienta',
    ],
    primary: 'Skontaktuj się',
    secondary: 'Zobacz ofertę',
    chartLabel: 'Ilustracja: grzbiet górski będący jednocześnie wykresem wzrostu',
  },
  pageSoon: 'Treść tej podstrony jest w przygotowaniu.',
  teamPage: {
    metaTitle: 'Nasz zespół | Everest – Rachunkowość & NGO',
    metaDescription:
      'Poznaj zespół biura rachunkowego Everest: księgowość, kadry i płace oraz wsparcie informatyczne.',
    title: 'Nasz zespół',
  },
  faqPage: {
    metaTitle: 'Najczęściej zadawane pytania | Everest – Rachunkowość & NGO',
    metaDescription:
      'Odpowiedzi na najczęstsze pytania o obsługę księgową organizacji pozarządowych i firm, rozliczanie dotacji oraz zasady współpracy z biurem Everest.',
    title: 'Najczęściej zadawane pytania',
    // TODO(klient): zatwierdzić wstęp.
    intro:
      'Zebraliśmy odpowiedzi na pytania, które najczęściej słyszymy od klientów. Nie znalazłeś swojej? Napisz lub zadzwoń – chętnie pomożemy.',
    searchLabel: 'Szukaj w pytaniach i odpowiedziach',
    searchPlaceholder: 'Wpisz słowo kluczowe, np. dotacje',
    categoriesLabel: 'Kategorie',
    all: 'Wszystkie',
    expandAll: 'Rozwiń wszystkie',
    collapseAll: 'Zwiń wszystkie',
    resultsCount: 'Wyświetlone pytania: {n}',
    noResults:
      'Nie znaleźliśmy pytań pasujących do „{q}”. Spróbuj innego słowa albo skontaktuj się z nami.',
    clearSearch: 'Wyczyść wyszukiwanie',
    closing: {
      title: 'Nie znalazłeś odpowiedzi?',
      text: 'Napisz lub zadzwoń – odpowiemy na Twoje pytania.',
      cta: 'Skontaktuj się',
      ctaQuote: 'Poproś o wycenę',
    },
    categories: [
      { key: 'cooperation', label: 'Współpraca' },
      { key: 'grants', label: 'Dotacje i granty' },
      { key: 'scope', label: 'Zakres usług' },
      { key: 'pricing', label: 'Rozliczenia i wycena' },
    ],
    // `id` to stały fragment adresu (/faq#id) – nie zmieniać po publikacji.
    items: [
      {
        id: 'ksiegowosc-fundacji-i-stowarzyszen',
        category: 'scope',
        q: 'Czy prowadzą Państwo księgowość fundacji i stowarzyszeń?',
        a: [
          'Tak. Specjalizujemy się w obsłudze księgowej organizacji pozarządowych – obecnie stanowią one około 90% naszych klientów. Współpracujemy zarówno z mniejszymi, jak i większymi organizacjami, o różnej strukturze finansowania i zakresie działalności. Obsługujemy podmioty prowadzące działalność nieodpłatną, odpłatną oraz gospodarczą.',
        ],
      },
      {
        id: 'formy-ksiegowosci',
        category: 'scope',
        q: 'Jakie formy księgowości obsługuje Państwa biuro?',
        a: [
          'Biuro świadczy usługi księgowe w formie prowadzenia pełnych ksiąg rachunkowych zgodnie z ustawą o rachunkowości. Nie obsługujemy form uproszczonych – podatkowej księgi przychodów i rozchodów czy uproszczonej ewidencji przychodów i kosztów.',
        ],
      },
      {
        id: 'doswiadczenie-w-rozliczaniu-dotacji',
        category: 'grants',
        q: 'Czy mają Państwo doświadczenie w rozliczaniu dotacji i grantów?',
        a: [
          'Tak. Posiadamy doświadczenie w obsłudze księgowej dotacji i grantów pochodzących z różnych źródeł, w tym ze środków publicznych, funduszy Unii Europejskiej, EOG, programów współpracy międzynarodowej oraz źródeł prywatnych.',
          'Odpowiadamy za prawidłowe ujęcie księgowe otrzymanego finansowania, zgodnie z przepisami ustawy o rachunkowości, przepisami podatkowymi oraz przyjętą polityką rachunkowości organizacji.',
        ],
      },
      {
        id: 'wspolpraca-przy-rozliczaniu-dotacji',
        category: 'grants',
        q: 'Jak wygląda współpraca przy rozliczaniu dotacji?',
        a: [
          'Po podpisaniu umowy o dofinansowanie prosimy o przekazanie budżetu projektu. Na jego podstawie przygotowujemy odpowiednią strukturę kont księgowych, która umożliwia prawidłowe ewidencjonowanie i monitorowanie wydatków. Księgowanie dokumentów odbywa się na podstawie materiałów opisanych merytorycznie przez klienta. Opis powinien zawierać w szczególności zatwierdzenie wydatku przez uprawnioną osobę, wskazanie rodzaju działalności, której dotyczy wydatek, oraz określenie źródła jego finansowania.',
          'Warto pamiętać: odpowiadamy za księgową stronę rozliczenia dotacji. Za merytoryczne przypisanie wydatków do projektu oraz przygotowanie i rozliczenie projektu przed grantodawcą odpowiada organizacja.',
        ],
      },
      {
        id: 'zmiany-we-wczesniejszych-okresach',
        category: 'grants',
        q: 'Czy możliwe jest dokonywanie zmian we wcześniejszych okresach danego roku?',
        a: [
          'W trakcie realizacji projektu możliwe jest również wprowadzanie zmian w ewidencji księgowej, w tym dokonywanie przeksięgowań między pozycjami budżetowymi lub projektami, jeśli zachodzi taka potrzeba.',
          'Przed końcowym rozliczeniem finansowania lub zamknięciem roku obrotowego przekazujemy klientowi zestawienie zapisów księgowych dotyczących realizowanych grantów. Pozwala to zweryfikować zgodność ewidencji księgowej ze sprawozdaniami przekazanymi grantodawcom.',
        ],
      },
      {
        id: 'ubezpieczenie-oc',
        category: 'cooperation',
        q: 'Czy posiadają Państwo ubezpieczenie OC?',
        a: [
          'Tak. Posiadamy obowiązkowe ubezpieczenie odpowiedzialności cywilnej (OC), a także dodatkowe ubezpieczenia obejmujące prowadzenie rozliczeń VAT, obsługę kadrowo-płacową i rozliczenia ZUS, ochronę danych osobowych (RODO) oraz cyberbezpieczeństwo.',
        ],
      },
      {
        id: 'polityka-rachunkowosci',
        category: 'scope',
        q: 'Czy pomagają Państwo w przygotowaniu polityki rachunkowości organizacji?',
        a: [
          'Tak. Wspieramy organizacje w opracowaniu i dostosowaniu polityki (zasad) rachunkowości do ich indywidualnych potrzeb.',
          'Każdą politykę przygotowujemy indywidualnie, w konsultacji z Zarządem i z uwzględnieniem specyfiki działalności organizacji, jej źródeł finansowania oraz bieżących potrzeb.',
        ],
      },
      {
        id: 'doradztwo-podatkowe',
        category: 'scope',
        q: 'Czy świadczą Państwo usługi doradztwa podatkowego?',
        a: [
          'Obecnie nie świadczymy usług doradztwa podatkowego. W ramach naszej działalności zapewniamy natomiast bieżące wsparcie związane z obsługą księgową organizacji.',
        ],
      },
      {
        id: 'wspolpraca-z-bieglymi-rewidentami',
        category: 'cooperation',
        q: 'Czy współpracują Państwo z biegłymi rewidentami podczas audytów i badania sprawozdań finansowych?',
        a: [
          'Tak. Współpracujemy z biegłymi rewidentami przy audytach projektów oraz badaniu sprawozdań finansowych organizacji. Zakres i zasady współpracy ustalamy indywidualnie z klientem, dostosowując je do potrzeb organizacji i charakteru przeprowadzanego audytu.',
        ],
      },
      {
        id: 'umowy-z-pracownikami-i-kontrahentami',
        category: 'scope',
        q: 'Czy przygotowują Państwo umowy z pracownikami i kontrahentami oraz nadzorują proces ich zawierania?',
        a: [
          'Nie przygotowujemy umów z pracownikami ani kontrahentami, ponieważ ich opracowanie i nadzór nad procesem zawierania należą do obszaru obsługi prawnej i administracyjnej.',
          'W ramach obsługi księgowej udostępniamy natomiast wzory dokumentów niezbędnych do prawidłowego przeprowadzenia rozliczeń, m.in. oświadczenia podatkowe i składkowe, wzory rachunków oraz inne dokumenty związane z zawieraniem umów.',
        ],
      },
      {
        id: 'miesiace-bez-dokumentow',
        category: 'pricing',
        q: 'Jak wygląda rozliczenie z biurem w miesiącach, w których organizacja nie ma dokumentów księgowych?',
        a: [
          'Podstawowa opłata za obsługę księgową obejmuje ustalony w umowie limit dokumentów i obowiązuje również w miesiącach, w których organizacja nie przekazuje dokumentów do zaksięgowania. Z naszego doświadczenia wynika, że takie sytuacje zdarzają się jednak bardzo rzadko. Wynagrodzenie obejmuje nie tylko bieżące księgowanie dokumentów, ale również stałą gotowość do współpracy, wsparcie w sprawach księgowych oraz bieżące konsultacje – niezależnie od liczby dokumentów w danym miesiącu.',
        ],
      },
    ],
  },
  quotePage: {
    metaTitle: 'Wycena usług | Everest – Rachunkowość & NGO',
    metaDescription:
      'Wypełnij krótki formularz, a przygotujemy wstępną wycenę obsługi księgowej i kadrowo-płacowej dla Twojej organizacji lub firmy.',
    title: 'Wycena usług',
    intro:
      'Wypełnij krótki formularz, aby przekazać nam najważniejsze informacje o swojej organizacji. Jego uzupełnienie zajmie Ci tylko kilka minut. Na podstawie przekazanych danych przygotujemy wstępną wycenę usług i prześlemy Ci naszą ofertę w ciągu 2 dni roboczych.',
    consultation:
      'Dla zainteresowanych klientów oferujemy również bezpłatną konsultację, podczas której omówimy szczegółowo potrzeby Twojej organizacji i przedstawimy rozwiązania dopasowane do jej specyfiki. Oferujemy elastyczne formy spotkań – zapraszamy do naszego biura w centrum Warszawy lub na konsultację online.',
    consultationCta: 'Umów konsultację',
  },
  trust: {
    title: 'Zaufali nam już',
    label: 'Klienci, którzy nam zaufali',
  },
  about: {
    title: 'O naszym biurze',
    paragraphs: [
      'Everest Biuro Rachunkowe & NGO świadczy usługi księgowe, podatkowe oraz kadrowo-płacowe na rzecz jednostek działających w sferze zadań publicznych oraz przedsiębiorstw.',
      'Specjalizujemy się w obsłudze małych i średnich podmiotów na każdym etapie ich rozwoju. Wspieramy nowe organizacje już od momentu ich powstania, pomagając im przejść przez formalności związane z rozpoczęciem działalności. Towarzyszymy również podmiotom o ugruntowanej pozycji na rynku. Oferujemy stałą, kompleksową obsługę ich finansów. Dzięki temu nasi klienci mogą skupić się na realizacji założonych celów organizacji, mając pewność, że kwestie księgowe i kadrowo-płacowe są pod właściwą opieką.',
      'Posiadamy wieloletnie doświadczenie w prowadzeniu księgowości m.in. fundacji, stowarzyszeń i spółek. Ponadto stale podwyższamy nasze kwalifikacje, uczestnicząc w kursach i szkoleniach. Wierzymy, że dobry księgowy powinien mieć otwarty umysł oraz być gotowy do ciągłego rozwoju i doskonalenia swoich umiejętności.',
      'W relacji z naszymi klientami stawiamy na profesjonalizm, indywidualne podejście i relacje oparte na wzajemnym zaufaniu.',
    ],
    linkedin: 'Nasz profil na LinkedIn',
    map: 'Zobacz lokalizację w Google Maps',
    teamCta: 'Poznaj nasz zespół',
  },
  cooperation: {
    title: 'Co wyróżnia naszą współpracę?',
    items: [
      {
        key: 'punctuality',
        title: 'Terminowość i rzetelność',
        text: 'Podstawą naszej działalności jest dbanie o prawidłowe prowadzenie księgowości oraz terminową realizację rozliczeń podatkowych i składkowych.',
      },
      {
        key: 'regulations',
        title: 'Trzymamy rękę na pulsie',
        text: 'Na bieżąco monitorujemy i informujemy o zmianach w przepisach, tak aby nasi klienci byli na nie gotowi.',
      },
      {
        key: 'remote',
        title: 'Wygodna współpraca zdalna',
        text: 'Obsługujemy podmioty z całej Polski, a dzięki dedykowanym narzędziom zapewniamy wygodny dostęp do dokumentacji księgowej z dowolnego miejsca.',
      },
      {
        key: 'advice',
        title: 'Doradztwo i bieżące wsparcie',
        text: 'Nie tylko pomagamy rozwiązywać bieżące problemy klientów, ale również wspieramy w podejmowaniu decyzji, które rzutują na wieloletni rozwój i funkcjonowanie organizacji.',
      },
      {
        key: 'control',
        title: 'Pełna kontrola nad finansami',
        text: 'Co miesiąc wysyłamy klientom aktualne zestawienia finansowe oraz podsumowanie wydatków w poszczególnych projektach, co pozwala stale monitorować ich sytuację finansową.',
      },
      {
        key: 'flexibility',
        title: 'Elastyczność',
        text: 'Jesteśmy otwarci na różne rozwiązania i dostosujemy zasady współpracy do potrzeb oraz specyfiki podmiotu.',
      },
    ],
  },
  services: {
    title: 'Oferujemy następujące usługi',
    groups: [
      {
        title: 'Księgowość',
        items: [
          'Stała obsługa rachunkowa – księgowa',
          'Bieżące wyjaśnianie braków w dokumentach',
          'Przygotowanie, rozliczenie i wysyłka deklaracji podatkowych: VAT, CIT, PIT, PCC',
          'Wsparcie przy obsłudze KSeF, w tym wystawianiu faktur',
          'Przygotowanie polityki rachunkowości',
          'Doradztwo w zakresie bieżącej działalności, organizacji rachunkowości, obiegu dokumentów finansowych',
          'Wsparcie w kontaktach z urzędem skarbowym i czynne uczestnictwo w kontrolach',
          'Pomoc w wyjaśnianiu zaległości podatkowych i składkowych',
        ],
      },
      {
        title: 'Sprawozdawczość finansowa, projektowa oraz audyt',
        items: [
          'Przygotowanie rocznych sprawozdań finansowych',
          'Pomoc przy przygotowaniu sprawozdań merytorycznych, do GUS, NIW',
          'Przeprowadzanie analiz bieżącej sytuacji finansowej',
          'Ustalanie zgodności kont projektowych z raportami i dokumentami wewnętrznymi',
          'Wykonywanie przeksięgowań merytorycznych',
          'Współpraca z audytorem przy badaniu sprawozdań finansowych i konkretnych projektów',
          'Przygotowanie wymaganej dokumentacji do audytów',
        ],
      },
      {
        title: 'Kadry i płace',
        items: [
          'Obsługa kadrowo-płacowa w zakresie naliczania list płac, wystawiania rachunków do umów cywilnoprawnych',
          'Przygotowanie deklaracji zgłoszeniowych i rozliczeniowych do ZUS',
          'Obsługa PPK',
          'Prowadzenie akt osobowych',
          'Sporządzanie zestawień urlopowych',
          'Wystawianie dokumentów związanych z zatrudnieniem, m.in. świadectw pracy, zaświadczeń o zarobkach',
          'Przygotowanie deklaracji do PFRON',
          'Przygotowanie deklaracji PIT-4R, PIT-8AR, PIT-11, IFT-1R',
          'Wsparcie w kontaktach z ZUS, urzędem skarbowym oraz uczestnictwo w kontrolach',
        ],
      },
    ],
  },
  pricing: {
    title: 'Wycena usług',
    paragraphs: [
      'Każda organizacja i przedsiębiorstwo ma inne potrzeby i swoją specyfikę, więc do wyceny usług podchodzimy indywidualnie. Uwzględniamy między innymi miesięczną liczbę i rodzaj dokumentów księgowych, strukturę zatrudnienia (umowy o pracę, umowy cywilnoprawne), status podatkowy oraz charakter prowadzonej działalności. Bierzemy pod uwagę aktualny stan księgowości, w tym ewentualne zaległości w prowadzeniu ksiąg i rozliczeniach, wymagające uzupełnienia lub uporządkowania.',
      'Oprócz bieżącej obsługi księgowej i kadrowo-płacowej umowa może obejmować również usługi dodatkowe, takie jak sporządzanie sprawozdań finansowych za lata ubiegłe lub pomoc w opracowaniu polityki rachunkowości.',
    ],
    priceList: {
      title: 'Cennik usług',
      intro: 'Poniżej przedstawiamy orientacyjne ceny wybranych usług:',
      items: [
        { label: 'Obsługa księgowa', price: 'Od 400 zł netto / miesiąc' },
        { label: 'Obsługa umów cywilnoprawnych', price: 'Od 30 zł netto / umowę' },
        { label: 'Usługi dodatkowe w zakresie działalności', price: 'Od 150 zł netto / godzinę' },
        // TODO(klient): czy 110 zł jest kwotą netto?
        { label: 'Obsługa kadrowo-płacowa umów o pracę', price: 'Od 110 zł / osobę / miesiąc' },
      ],
    },
    closing:
      'Chcesz poznać koszt obsługi dopasowany do potrzeb Twojej organizacji lub firmy? Skorzystaj z naszego formularza wyceny lub umów się na bezpłatną konsultację!',
    cta: 'Poproś o wycenę',
    ctaConsult: 'Umów bezpłatną konsultację',
  },
  quoteForm: {
    stepLabel: 'Krok',
    stepOf: 'z',
    steps: [
      'Organizacja',
      'Dokumenty i zatrudnienie',
      'Status organizacji',
      'Dodatkowe informacje',
      'Podsumowanie',
    ],
    optionalHint:
      'Wszystkie pola poza zgodą są nieobowiązkowe, ale im więcej danych podasz, tym dokładniejsza będzie wycena.',
    next: 'Dalej',
    back: 'Wstecz',
    edit: 'Zmień',
    submit: 'Wyślij zapytanie o wycenę',
    summaryTitle: 'Sprawdź dane przed wysłaniem',
    empty: 'Nie podano',
    sending: 'Wysyłanie…',
    success: 'Dziękujemy! Zapytanie zostało wysłane. Wycenę prześlemy w ciągu 2 dni roboczych.',
    error: 'Nie udało się wysłać zapytania. Spróbuj ponownie lub zadzwoń do nas.',
    yes: 'Tak',
    no: 'Nie',
    org: {
      firstName: 'Imię',
      lastName: 'Nazwisko',
      orgName: 'Nazwa organizacji',
      nip: 'NIP',
      email: 'Adres e-mail do kontaktu',
      phone: 'Telefon (opcjonalnie)',
    },
    docs: {
      title: 'Orientacyjna liczba dokumentów księgowych miesięcznie',
      hint: 'Wpisz liczby. Listy płac wynikają z liczby zatrudnionych osób, więc nie musisz ich liczyć.',
      invoices: 'Faktury (liczba)',
      statements: 'Wyciągi bankowe (liczba stron w PDF)',
      receipts: 'Rachunki (liczba)',
      other: 'Inne dokumenty (liczba)',
    },
    staff: {
      title: 'Liczba zatrudnionych osób',
      employees: 'Pracownicy etatowi',
      civil: 'Osoby na umowach cywilnoprawnych',
      appointments: 'Powołania',
    },
    status: {
      vat: 'Czy organizacja jest podatnikiem VAT?',
      activities:
        'Jakie rodzaje działalności prowadzi organizacja? (zaznacz wszystkie, które dotyczą)',
      activityFree: 'Nieodpłatna statutowa',
      activityPaid: 'Odpłatna statutowa',
      activityBusiness: 'Gospodarcza',
      opp: 'Czy organizacja posiada status OPP (organizacji pożytku publicznego)?',
      current: 'Czy dotychczasowe rozliczenia księgowe są prowadzone na bieżąco?',
      currentYes: 'Tak, nie ma zaległości',
      currentNo: 'Nie, są zaległości',
      currentNa: 'Nie dotyczy – organizacja nie miała dotychczas prowadzonej księgowości',
    },
    more: {
      info: 'Inne istotne informacje o organizacji',
      extra:
        'Czy organizacja jest zainteresowana usługami dodatkowymi, np. przygotowaniem polityki rachunkowości? Opisz, czego potrzebujesz',
      // TODO(klient): klauzula do zatwierdzenia przez klienta / prawnika (dane administratora: nazwa, NIP, adres)
      consent:
        'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania wyceny. Administratorem danych jest [NAZWA FIRMY – do uzupełnienia].',
    },
    errors: {
      consent: 'Zgoda jest wymagana, aby wysłać zapytanie.',
      email: 'Podaj poprawny adres e-mail.',
      number: 'Podaj liczbę całkowitą, np. 0 lub 12.',
    },
  },
  faq: {
    title: 'Masz pytanie? Zajrzyj do sekcji FAQ',
    cta: 'Masz więcej pytań?',
    more: 'Pełna odpowiedź',
    prev: 'Poprzednie pytanie',
    next: 'Następne pytanie',
    slide: 'Pytanie {n} z {total}',
  },
  software: {
    title: 'Oprogramowanie',
    text: 'Korzystamy ze sprawdzonych programów księgowych i kadrowo-płacowych, które są na bieżąco aktualizowane w odpowiedzi na zmiany w przepisach. Wykorzystujemy również dedykowane narzędzie do zdalnego przekazywania dokumentów, do którego dostęp mają wyłącznie osoby upoważnione. Nad prawidłowym funkcjonowaniem naszego zaplecza informatycznego czuwa specjalista IT posiadający szerokie doświadczenie w obsłudze biur rachunkowych.',
  },
  team: {
    title: 'Nasz zespół',
    more: 'Czytaj więcej',
    less: 'Zwiń',
    linkedin: 'Profil na LinkedIn',
    members: [
      {
        key: 'dominik',
        role: 'Główny księgowy',
        name: 'Dominik Markiewicz',
        description: [
          'Od wielu lat współpracuje z organizacjami pozarządowymi oraz spółkami prawa handlowego w zakresie prowadzenia ksiąg rachunkowych. Doświadczenie zdobywał zarówno w pracy w wewnętrznych działach finansowych organizacji pozarządowych oraz na stanowisku księgowego w biurach rachunkowych.',
          'Ukończył studia na kierunku finanse i rachunkowość w Szkole Głównej Handlowej w Warszawie ze specjalizacją rachunkowość, podatki i finanse przedsiębiorstwa.',
          'Posiada certyfikaty w obrębie zawodu głównego księgowego wydane przez Stowarzyszenie Księgowych w Polsce. Ukończył wiele kursów o tematyce rachunkowości i rozliczeń w organizacjach pozarządowych.',
        ],
      },
      {
        key: 'julita',
        role: 'Specjalistka ds. kadr i płac',
        name: 'Julita Markiewicz',
        description: [
          'Od wielu lat współpracuje z jednostkami gospodarczymi w zakresie rozliczeń kadrowo-płacowych. Wspiera organizacje w wyjaśnianiu bieżących zmian podatkowych i składkowych oraz we wdrażaniu systemów informatycznych do rozliczeń płac.',
          'Doświadczenie zdobywała pracując w biurach rachunkowych na stanowisku specjalisty ds. kadr i płac. Absolwentka Szkoły Głównej Handlowej w Warszawie na kierunku Finanse i Rachunkowość.',
          'Posiada certyfikaty głównego specjalisty w zakresie kadr i płac wydane przez Stowarzyszenie Księgowych w Polsce.',
        ],
      },
      {
        key: 'marek',
        role: 'Informatyk, programista',
        name: 'Marek Kropiewnicki',
        description: [
          'Informatyk programista z kilkudziesięcioletnim doświadczeniem. Posiada wykształcenie ekonomiczne, ale od zawsze pracował w sferze IT. Od bardzo wielu lat prowadzi własną działalność gospodarczą. Zdobył doświadczenie w różnych dziedzinach IT jako:',
          [
            'Serwisant sprzętu komputerowego i oprogramowania',
            'Instalator i administrator lokalnych sieci komputerowych',
            'Instalator i administrator serwerów e-mail',
            'Projektant i programista oprogramowania finansowo-księgowego i kadrowo-płacowego',
            'Wdrożeniowiec oprogramowania kadrowo-płacowego własnego i innych producentów',
          ],
          'Od lat specjalizuje się w zarządzaniu infrastrukturą informatyczną biur rachunkowych. Zdobył certyfikat Google z ukończonego szkolenia „Umiejętności Jutra AI”. Wspomaga pracę biura przy wprowadzaniu danych do systemu finansowo-księgowego.',
        ],
      },
      {
        key: 'krzysztof',
        role: 'Specjalista ds. rozliczeń kadrowo-płacowych',
        name: 'Krzysztof Kuśmierowski',
        description: [
          'Prawo pracy, rachunkowość i podatki to jego sposób na życie i pasja od ponad 20 lat.',
          'Absolwent Uniwersytetu Łódzkiego na kierunkach Finanse i bankowość oraz Prawo podatkowe i rachunkowość, a także Podyplomowych Studiów Cen Transferowych i Zarządzania Podatkami w Szkole Głównej Handlowej. Ukończył liczne kursy z zakresu rachunkowości, podatków oraz kadr i płac organizowane przez Stowarzyszenie Księgowych w Polsce oraz Akademię Prawa Pracy i Rachunkowości CEDOZ w Warszawie.',
          'W swojej dotychczasowej pracy zawodowej zajmował się zarówno prowadzeniem ksiąg rachunkowych, jak również obsługą w zakresie kadr i płac podmiotów z kapitałem polskim i zagranicznym.',
          'Prywatnie miłośnik podróży i wielki fan siatkówki.',
        ],
      },
    ] as TeamMember[],
  },
  contact: {
    title: 'Skontaktuj się z nami',
    intro: 'Zadzwoń, napisz lub odwiedź nas w biurze. Chętnie odpowiemy na Twoje pytania.',
    hours: {
      title: 'Godziny pracy',
      rows: [
        { days: 'Poniedziałek – czwartek', time: '9:00 – 17:00' },
        { days: 'Piątek', time: '9:00 – 15:00' },
      ],
    },
    quote: {
      text: 'Chcesz poznać koszt obsługi? Wypełnij krótki formularz wyceny.',
      cta: 'Poproś o wycenę',
    },
    map: {
      label: 'Mapa z lokalizacją biura',
      show: 'Pokaż mapę',
      notice:
        'Po kliknięciu załaduje się mapa z serwisu Google Maps, który może zapisywać dane o Twoim urządzeniu.',
      open: 'Otwórz w Google Maps',
      iframeTitle: 'Mapa Google z lokalizacją biura Everest',
    },
  },
  footer: {
    phone: 'Telefon',
    address: 'Adres',
    email: 'E-mail',
    social: 'Media społecznościowe',
    rights: 'Wszystkie prawa zastrzeżone',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    google: 'Lokalizacja w Google Maps',
  },
  notFound: {
    title: 'Nie znaleziono strony',
    text: 'Ta strona nie istnieje lub została przeniesiona.',
    back: 'Wróć na stronę główną',
  },
};

export type Dict = typeof pl;
