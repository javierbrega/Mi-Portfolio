import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Services.css";
import { AnimatedElement } from "./AnimatedElement";

function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="services section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">{t('services.my')}</span> <span className="title-white">{t('services.services')}</span>
        </h2>
      </AnimatedElement>
      <div className="services-grid">
        <div className="service-item">
          <h3>{t('services.webDevelopment.title')}</h3>
          <p>{t('services.webDevelopment.description')}</p>
        </div>
        <div className="service-item">
          <h3>{t('services.responsiveDesign.title')}</h3>
          <p>{t('services.responsiveDesign.description')}</p>
        </div>
        <div className="service-item">
          <h3>{t('services.uiUxDesign.title')}</h3>
          <p>{t('services.uiUxDesign.description')}</p>
        </div>
        <div className="service-item">
          <h3>{t('services.performanceOptimization.title')}</h3>
          <p>{t('services.performanceOptimization.description')}</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
