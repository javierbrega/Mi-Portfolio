import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// Importa los archivos de traducción
import headerEn from '../locales/en/header.json';
import heroEn from '../locales/en/hero.json';
import servicesEn from '../locales/en/services.json';
import worksEn from '../locales/en/works.json';
import resumeEn from '../locales/en/resume.json';
import skillsEn from '../locales/en/skills.json';
import studyEn from '../locales/en/study.json';
import footerEn from '../locales/en/footer.json';
import headerEs from '../locales/es/header.json';
import heroEs from '../locales/es/hero.json';
import servicesEs from '../locales/es/services.json';
import worksEs from '../locales/es/works.json';
import resumeEs from '../locales/es/resume.json';
import skillsEs from '../locales/es/skills.json';
import studyEs from '../locales/es/study.json';
import footerEs from '../locales/es/footer.json';

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
          resume: resumeEn,
          skills: skillsEn,
          study: studyEn,
          footer: footerEn
        }
      },
      es: {
        translation: {
          header: headerEs,
          hero: heroEs,
          services: servicesEs,
          works: worksEs,
          resume: resumeEs,
          skills: skillsEs,
          study: studyEs,
          footer: footerEs
        }
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false
    }
  });

// Guardar el idioma en localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;
