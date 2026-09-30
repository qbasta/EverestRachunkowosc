import type { ImageMetadata } from 'astro';

import mock01 from '../assets/clients/mock-01-fundacja-horyzont.svg';
import mock02 from '../assets/clients/mock-02-nowa-droga.svg';
import mock03 from '../assets/clients/mock-03-zielony-krag.svg';
import mock04 from '../assets/clients/mock-04-centrum-dialogu.svg';
import mock05 from '../assets/clients/mock-05-nordic-trade.svg';
import mock06 from '../assets/clients/mock-06-dom-kultury-brzoza.svg';
import mock07 from '../assets/clients/mock-07-ks-olimp.svg';
import mock08 from '../assets/clients/mock-08-budtech.svg';

export interface Client {
  name: string;
  logo: ImageMetadata;
}

/**
 * MAKIETY – fikcyjne nazwy i znaki, tylko do pokazania układu karuzeli.
 * Podmiana: wrzuć prawdziwe logo (SVG lub PNG) do `src/assets/clients/`,
 * zaimportuj je powyżej i zamień wpisy poniżej.
 * WAŻNE: logo klienta publikujemy wyłącznie za jego zgodą (najlepiej pisemną / mailową).
 */
export const clients: Client[] = [
  { name: 'Fundacja Horyzont', logo: mock01 },
  { name: 'Stowarzyszenie Nowa Droga', logo: mock02 },
  { name: 'Zielony Krąg', logo: mock03 },
  { name: 'Centrum Dialogu', logo: mock04 },
  { name: 'Nordic Trade Sp. z o.o.', logo: mock05 },
  { name: 'Dom Kultury Brzoza', logo: mock06 },
  { name: 'KS Olimp', logo: mock07 },
  { name: 'BudTech Sp. z o.o.', logo: mock08 },
];
