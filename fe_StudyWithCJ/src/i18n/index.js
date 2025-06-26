import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import vi from '../locales/vi.json'
import en from '../locales/en.json'

i18n
    .use(LanguageDetector) // tự phát hiện ngôn ngữ trình duyệt
    .use(initReactI18next)
    .init({
        resources: {
            vi: { translation: vi },
            en: { translation: en }
        },
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
