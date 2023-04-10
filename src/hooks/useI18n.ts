import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import languages from "../assets/locale/index"

i18n.use(initReactI18next).init({
  resources: languages,
  fallbackLng: "pt_BR",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
