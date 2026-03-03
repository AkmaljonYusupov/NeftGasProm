import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import en from "../locales/en.json"
import ru from "../locales/ru.json"
import uz from "../locales/uz.json"

const resources = { uz: { translation: uz }, ru: { translation: ru }, en: { translation: en } };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });

export default i18n;