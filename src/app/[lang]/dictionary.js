
const dictionaries = {
  en: () => import('../../i18n/locales/en.json').then(module => module.default),
  tr: () => import('../../i18n/locales/tr.json').then(module => module.default)
}

/**
 * Home page route
 * @type {function} 
 * @returns {JSON locale} 
*/

export const getDictionary = (locale) => dictionaries[locale]()