import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json"; // import your default language file
import am from "./locales/am/translation.json"; // import other language files as needed

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            am: {
                translation: am
            }
        },
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false // not needed for React
        }
    });
