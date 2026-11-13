import { pl, type Dict } from './pl';
import { en } from './en';

export type Lang = 'pl' | 'en';
export type PageKey = 'home' | 'team' | 'faq' | 'quote';

const dictionaries: Record<Lang, Dict> = { pl, en };

export const getDict = (lang: Lang): Dict => dictionaries[lang];

/** Ścieżki podstron w każdym języku (PL bez prefiksu, EN pod /en/). */
const paths: Record<PageKey, Record<Lang, string>> = {
  home: { pl: '/', en: '/en/' },
  team: { pl: '/nasz-zespol/', en: '/en/our-team/' },
  faq: { pl: '/faq/', en: '/en/faq/' },
  quote: { pl: '/wycena/', en: '/en/quote/' },
};

export const pagePath = (page: PageKey, lang: Lang): string => paths[page][lang];
export const homePath = (lang: Lang): string => pagePath('home', lang);
export const otherLang = (lang: Lang): Lang => (lang === 'pl' ? 'en' : 'pl');
