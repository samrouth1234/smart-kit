import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "kh"], // Supported languages
    fallbackLng: "en",           // Fallback language
    debug: true,                 // Debugging
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Ensure the path matches your translation file location
    },
    react: {
      useSuspense: false, // Disable suspense for easier debugging
    },
  });

export default i18n;