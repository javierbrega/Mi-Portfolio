
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useTranslation } from 'react-i18next';
import { AnimatedElement } from "./AnimatedElement";
import { Github, ExternalLink } from "lucide-react";
import "../styles/Works.css";
import redessociales from '../assets/redessociales.png';
import P_portfolio from '../assets/P_portfolio.png';

// Lista de proyectos
const projects = [
  {
    title: "works.project1.title",
    description: "works.project1.description",
    image: redessociales,
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com",
  },
  {
    title: "works.project2.title",
    description: "works.project2.description",
    image: P_portfolio,
    github: "https://github.com/javierbrega/Mi-Portfolio.git",
    live: "https://project2.com",
  },
  {
    title: "works.project3.title",
    description: "works.project3.description",
    image: "/placeholder-project3.jpg",
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com",
  },
];

function Works() {
  const { t } = useTranslation();

  return (
    <section id="works" className="works section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">{t('works.my')}</span> {t('works.works')}
        </h2>
      </AnimatedElement>
      <div className="works-grid">
        {projects.map((project, index) => (
          <AnimatedElement key={index} animation="fadeIn" delay={index * 0.2}>
            <div className="work-item">
              <img src={project.image || "/placeholder.svg"} alt={t(project.title)} />
              <div className="work-content">
                <h3>{t(project.title)}</h3>
                <p>{t(project.description)}</p>
                <div className="work-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-button github-button"
                  >
                    <Github size={18} />
                    {t('works.github')}
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-button live-button"
                  >
                    <ExternalLink size={18} />
                    {t('works.liveDemo')}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
}

export default Works;