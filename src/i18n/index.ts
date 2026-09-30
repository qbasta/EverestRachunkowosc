import { pl, type Dict } from './pl';
import { en } from './en';

export type Lang = 'pl' | 'en';

const dictionaries: Record<Lang, Dict> = { pl, en };

export const getDict = (lang: Lang): Dict => dictionaries[lang];

/** Ścieżka strony głównej w danym języku (PL bez prefiksu, EN pod /en/). */
export const homePath = (lang: Lang) => (lang === 'pl' ? '/' : '/en/');
export const otherLang = (lang: Lang): Lang => (lang === 'pl' ? 'en' : 'pl');
