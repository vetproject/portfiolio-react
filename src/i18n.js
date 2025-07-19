import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import km from './locales/km.json';
import ch from './locales/ch.json';

// ✅ Load saved language or default to 'km'
const savedLanguage = localStorage.getItem('i18nextLng') || 'km';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      km: { translation: km },
      ch: { translation: ch },
    },
    lng: savedLanguage,
    fallbackLng: 'km',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
