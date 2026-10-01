/**
 * Dane firmy i linki – jedno miejsce do edycji.
 * Puste linki w `social` są pomijane (nie renderujemy martwych ikon).
 */
export const site = {
  name: 'Everest',
  legalName: 'Everest Biuro Rachunkowe & NGO',
  url: 'https://everest-rachunkowosc.pl',
  phone: '+48 691 344 276',
  phoneHref: '+48691344276',
  email: 'dominik@biuroeverest.pl',
  address: {
    street: 'Żurawia 47 lok. 110',
    postalCode: '00-680',
    city: 'Warszawa',
    country: 'PL',
  },
  /** Współrzędne biura (z wizytówki Google) – dokładna pinezka w osadzonej mapie. */
  mapQuery: '52.2274419,21.011388',
  social: {
    facebook: '', // TODO: adres profilu od klienta (na razie brak – ikona się nie wyświetla)
    linkedin: 'https://www.linkedin.com/company/everest-biuro-rachunkowe-ngo/',
    google: 'https://maps.app.goo.gl/Hv5SJFFGStQskV867',
  },
} as const;
