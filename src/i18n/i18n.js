// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          footer: {
            aboutMe: "About Me",
            aboutDescription: "I'm Javier, a passionate web developer and UX designer. I create beautiful, functional websites that help businesses grow and succeed online.",
            quickLinks: "Quick Links",
            services: "Services",
            works: "Works",
            skills: "Skills",
            resume: "Resume",
            contactInfo: "Contact Info",
            followMe: "Follow Me",
            email: "javierbrega@gmail.com",
            phone: "+54 (260) 457-6114",
            address: "San Rafael, Mendoza, Argentina",
            copyright: "© 2025 Javier Brega. All rights reserved."
          }
        }
      },
      es: {
        translation: {
          footer: {
            aboutMe: "Sobre Mí",
            aboutDescription: "Soy Javier, un desarrollador web y diseñador UX apasionado. Creo sitios web hermosos y funcionales que ayudan a las empresas a crecer y tener éxito en línea.",
            quickLinks: "Enlaces Rápidos",
            services: "Servicios",
            works: "Proyectos",
            skills: "Habilidades",
            resume: "Currículum",
            contactInfo: "Información de Contacto",
            followMe: "Sígueme",
            email: "javierbrega@gmail.com",
            phone: "+54 (260) 457-6114",
            address: "San Rafael, Mendoza, Argentina",
            copyright: "© 2025 Javier Brega. Todos los derechos reservados."
          }
        }
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
