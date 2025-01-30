import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa los archivos de traducción
import headerEn from '../locales/en/header.json';
import heroEn from '../locales/en/hero.json';
import servicesEn from '../locales/en/services.json';
import worksEn from '../locales/en/works.json';
import resumeEn from '../locales/en/resume.json';
import headerEs from '../locales/es/header.json';
import heroEs from '../locales/es/hero.json';
import servicesEs from '../locales/es/services.json';
import worksEs from '../locales/es/works.json';
import resumeEs from '../locales/es/resume.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: headerEn,
          hero: heroEn,
          services: servicesEn,
          works: worksEn,
          resume: resumeEn
        }
      },
      es: {
        translation: {
          header: headerEs,
          hero: heroEs,
          services: servicesEs,
          works: worksEs,
          resume: resumeEs
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
