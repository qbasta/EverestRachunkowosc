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
  social: {
    facebook: '', // TODO: adres profilu od klienta
    linkedin: '', // TODO: adres profilu od klienta
    google: '', // TODO: link do wizytówki w Google
  },
} as const;
