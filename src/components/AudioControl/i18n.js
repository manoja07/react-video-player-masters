// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello!',
          audioLanguage: 'Audio Language',
          english: 'English',
          french: 'French',
          // Add other English translations
        },
      },
      fr: {
        translation: {
          greeting: 'Bonjour!',
          audioLanguage: 'Langue audio',
          english: 'Anglais',
          french: 'Français',
          // Add other French translations
        },
      },
      // Add more languages as needed
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
