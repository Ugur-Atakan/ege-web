import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    lng:'en',
    interpolation: {
      escapeValue: false // HTML gibi çevrilmeyi beklemeyen değerleri güvenle çevirmek için gerekli
    }
  })

export default i18n;