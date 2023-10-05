
const dictionaries = {
  en: () => import('../../dictionaries/en.json').then(module => module.default),
  tr: () => import('../../dictionaries/tr.json').then(module => module.default)
}

/**
 * Home page route
 * @type {function} 
 * @returns {JSON locale} 
*/

export const getDictionary = (locale) => dictionaries[locale]()