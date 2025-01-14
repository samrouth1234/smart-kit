import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: {
//       name: "Welcome to React and react-i18next",
//     },
//   },
//   kh: {
//     translation: {
//       name: "សូមស្វាគមន៍មកកាន់ React និង react-i18next",
//     },
//   },
// };

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ['en', 'km'], // 'en' for English, 'km' for Khmer
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/en.json', // Path to your translation files
    },
  });

export default i18n;
