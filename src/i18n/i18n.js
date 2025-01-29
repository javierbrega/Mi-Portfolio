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
          },
          header: {
            services: "Services",
            works: "Works",
            resume: "Resume",
            skills: "Skills",
            testimonials: "Testimonials",
            contact: "Contact",
            resume_button: "Resume"
          },
          hero: {
            greeting: "Hi, I am Javier - Web Developer + UX Designer",
            description: "I design and code beautifully simple things and I love what I do. Just simple like that!",
            hireMe: "Hire me!"
          },
          resume: {
            my: "My",
            resume: "Resume",
            workExperience: "Work Experience",
            education: "Education",
            seniorWebDeveloper: {
              title: "Senior Web Developer",
              company: "Tech Innovations Inc.",
              date: "2020 - Present",
              desc1: "Led development of multiple high-traffic web applications",
              desc2: "Implemented responsive design principles across all projects",
              desc3: "Mentored junior developers and conducted code reviews"
            },
            fullStackDeveloper: {
              title: "Full Stack Developer",
              company: "Digital Solutions Ltd.",
              date: "2017 - 2020",
              desc1: "Developed and maintained client websites using React and Node.js",
              desc2: "Collaborated with design team to implement UI/UX improvements",
              desc3: "Optimized database queries, improving site performance by 40%"
            },
            juniorWebDeveloper: {
              title: "Junior Web Developer",
              company: "WebCraft Studios",
              date: "2015 - 2017",
              desc1: "Assisted in the development of responsive websites",
              desc2: "Implemented pixel-perfect designs from Figma mockups",
              desc3: "Learned and applied best practices in web development"
            },
            masters: {
              title: "Master of Science in Computer Science",
              company: "Tech University",
              date: "2018 - 2020",
              desc1: "Specialized in Artificial Intelligence and Machine Learning",
              desc2: "Thesis: 'Implementing AI in Web Applications for Enhanced User Experience'"
            },
            bachelors: {
              title: "Bachelor of Science in Software Engineering",
              company: "State University",
              date: "2014 - 2018",
              desc1: "Graduated with Honors (GPA: 3.8/4.0)",
              desc2: "Relevant coursework: Web Development, Database Systems, Software Architecture"
            },
            bootcamp: {
              title: "Web Development Bootcamp",
              company: "CodeCamp Academy",
              date: "Summer 2014",
              desc1: "Intensive 12-week program covering full-stack web development",
              desc2: "Built and deployed multiple web applications"
            }
          },
          services: {
            my: "My",
            services: "Services",
            webDevelopment: {
              title: "Web Development",
              description: "Custom website development using modern technologies and best practices."
            },
            responsiveDesign: {
              title: "Responsive Design",
              description: "Creating websites that look great on all devices, from mobile to desktop."
            },
            uiUxDesign: {
              title: "UI/UX Design",
              description: "Designing intuitive and visually appealing user interfaces and experiences."
            },
            performanceOptimization: {
              title: "Performance Optimization",
              description: "Improving website speed and performance for better user experience and SEO."
            }
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
            works: "Trabajos",
            skills: "Habilidades",
            resume: "Currículum",
            contactInfo: "Información de Contacto",
            followMe: "Sígueme",
            email: "javierbrega@gmail.com",
            phone: "+54 (260) 457-6114",
            address: "San Rafael, Mendoza, Argentina",
            copyright: "© 2025 Javier Brega. Todos los derechos reservados."
          },
          header: {
            services: "Servicios",
            works: "Trabajos",
            resume: "Currículum",
            skills: "Habilidades",
            testimonials: "Testimonios",
            contact: "Contacto",
            resume_button: "Currículum"
          },
          hero: {
            greeting: "Hola, soy Javier - Desarrollador Web + Diseñador UX",
            description: "Diseño y codifico cosas hermosamente simples y amo lo que hago. ¡Así de simple!",
            hireMe: "¡Contrátame!"
          },
          resume: {
            my: "Mi",
            resume: "Currículum",
            workExperience: "Experiencia Laboral",
            education: "Educación",
            seniorWebDeveloper: {
              title: "Desarrollador Web Senior",
              company: "Tech Innovations Inc.",
              date: "2020 - Presente",
              desc1: "Dirigí el desarrollo de múltiples aplicaciones web de alto tráfico",
              desc2: "Implementé principios de diseño responsivo en todos los proyectos",
              desc3: "Mentoré a desarrolladores junior y realicé revisiones de código"
            },
            fullStackDeveloper: {
              title: "Desarrollador Full Stack",
              company: "Digital Solutions Ltd.",
              date: "2017 - 2020",
              desc1: "Desarrollé y mantuve sitios web de clientes utilizando React y Node.js",
              desc2: "Colaboré con el equipo de diseño para implementar mejoras en la UI/UX",
              desc3: "Optimizé consultas de bases de datos, mejorando el rendimiento del sitio en un 40%"
            },
            juniorWebDeveloper: {
              title: "Desarrollador Web Junior",
              company: "WebCraft Studios",
              date: "2015 - 2017",
              desc1: "Asistí en el desarrollo de sitios web responsivos",
              desc2: "Implementé diseños perfectos de píxeles desde maquetas de Figma",
              desc3: "Aprendí y apliqué mejores prácticas en desarrollo web"
            },
            masters: {
              title: "Máster en Ciencias de la Computación",
              company: "Tech University",
              date: "2018 - 2020",
              desc1: "Especialización en Inteligencia Artificial y Aprendizaje Automático",
              desc2: "Tesis: 'Implementación de IA en Aplicaciones Web para una Experiencia de Usuario Mejorada'"
            },
            bachelors: {
              title: "Licenciatura en Ingeniería de Software",
              company: "State University",
              date: "2014 - 2018",
              desc1: "Graduado con honores (GPA: 3.8/4.0)",
              desc2: "Cursos relevantes: Desarrollo Web, Sistemas de Bases de Datos, Arquitectura de Software"
            },
            bootcamp: {
              title: "Bootcamp de Desarrollo Web",
              company: "CodeCamp Academy",
              date: "Verano 2014",
              desc1: "Programa intensivo de 12 semanas cubriendo desarrollo web full-stack",
              desc2: "Construí y desplegué múltiples aplicaciones web"
            }
          },
          services: {
            my: "Mis",
            services: "Servicios",
            webDevelopment: {
              title: "Desarrollo Web",
              description: "Desarrollo de sitios web personalizados utilizando tecnologías modernas y mejores prácticas."
            },
            responsiveDesign: {
              title: "Diseño Responsivo",
              description: "Creación de sitios web que se ven geniales en todos los dispositivos, desde móviles hasta computadoras de escritorio."
            },
            uiUxDesign: {
              title: "Diseño UI/UX",
              description: "Diseño de interfaces y experiencias de usuario intuitivas y visualmente atractivas."
            },
            performanceOptimization: {
              title: "Optimización de Rendimiento",
              description: "Mejora de la velocidad y el rendimiento del sitio web para una mejor experiencia de usuario y SEO."
            }
          }
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
