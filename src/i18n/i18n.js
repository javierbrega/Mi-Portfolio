import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar los archivos de traducción
import headerEn from '../locales/en/header.json';
import heroEn from '../locales/en/hero.json';
import headerEs from '../locales/es/header.json';
import heroEs from '../locales/es/hero.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: headerEn,
          hero: heroEn
        }
      },
      es: {
        translation: {
          header: headerEs,
          hero: heroEs
        }
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
