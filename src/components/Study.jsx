import React from "react";
import { useTranslation } from 'react-i18next';
import { AnimatedElement } from "./AnimatedElement";
import "../styles/Study.css";

function Study() {
  const { t } = useTranslation();

  return (
    <section id="study" className="study section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">{t('study.certifications')}</span> <span className="title-white">{t('study.andStudies')}</span>
        </h2>
      </AnimatedElement>
      <div className="study-grid">
        <AnimatedElement animation="slideIn" delay={0.2}>
          <div className="study-item">
            <h3>{t('study.fullStackWebDevelopment.title')}</h3>
            <p>{t('study.fullStackWebDevelopment.institution')}</p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.3}>
          <div className="study-item">
            <h3>{t('study.reactCertification.title')}</h3>
            <p>{t('study.reactCertification.institution')}</p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.4}>
          <div className="study-item">
            <h3>{t('study.advancedJavaScript.title')}</h3>
            <p>{t('study.advancedJavaScript.institution')}</p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.5}>
          <div className="study-item">
            <h3>{t('study.uiUxDesignFundamentals.title')}</h3>
            <p>{t('study.uiUxDesignFundamentals.institution')}</p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default Study;
