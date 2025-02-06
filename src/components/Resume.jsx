import { useTranslation } from 'react-i18next';
import { AnimatedElement } from "./AnimatedElement";
import "../styles/Resume.css";

function Resume() {
  const { t } = useTranslation();

  return (
    <section id="resume" className="resume section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">{t('resume.my')}</span> {t('resume.resume')}
        </h2>
      </AnimatedElement>
      <div className="resume-content">
        <AnimatedElement animation="slideIn" delay={0.2} className="resume-column">
          <h3>{t('resume.workExperience')}</h3>
          <div className="resume-scroll">
            <div className="resume-item">
              <h4>{t('resume.seniorWebDeveloper.title')}</h4>
              <p className="company">{t('resume.seniorWebDeveloper.company')}</p>
              <p className="date">{t('resume.seniorWebDeveloper.date')}</p>
              <ul>
                <li>{t('resume.seniorWebDeveloper.desc1')}</li>
                <li>{t('resume.seniorWebDeveloper.desc2')}</li>
                <li>{t('resume.seniorWebDeveloper.desc3')}</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>{t('resume.fullStackDeveloper.title')}</h4>
              <p className="company">{t('resume.fullStackDeveloper.company')}</p>
              <p className="date">{t('resume.fullStackDeveloper.date')}</p>
              <ul>
                <li>{t('resume.fullStackDeveloper.desc1')}</li>
                <li>{t('resume.fullStackDeveloper.desc2')}</li>
                <li>{t('resume.fullStackDeveloper.desc3')}</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>{t('resume.juniorWebDeveloper.title')}</h4>
              <p className="company">{t('resume.juniorWebDeveloper.company')}</p>
              <p className="date">{t('resume.juniorWebDeveloper.date')}</p>
              <ul>
                <li>{t('resume.juniorWebDeveloper.desc1')}</li>
                <li>{t('resume.juniorWebDeveloper.desc2')}</li>
                <li>{t('resume.juniorWebDeveloper.desc3')}</li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.4} className="resume-column">
          <h3>{t('resume.education')}</h3>
          <div className="resume-scroll">
            <div className="resume-item">
              <h4>{t('resume.masters.title')}</h4>
              <p className="company">{t('resume.masters.company')}</p>
              <p className="date">{t('resume.masters.date')}</p>
              <ul>
                <li>{t('resume.masters.desc1')}</li>
                <li>{t('resume.masters.desc2')}</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>{t('resume.bachelors.title')}</h4>
              <p className="company">{t('resume.bachelors.company')}</p>
              <p className="date">{t('resume.bachelors.date')}</p>
              <ul>
                <li>{t('resume.bachelors.desc1')}</li>
                <li>{t('resume.bachelors.desc2')}</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>{t('resume.bootcamp.title')}</h4>
              <p className="company">{t('resume.bootcamp.company')}</p>
              <p className="date">{t('resume.bootcamp.date')}</p>
              <ul>
                <li>{t('resume.bootcamp.desc1')}</li>
                <li>{t('resume.bootcamp.desc2')}</li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}

export default Resume;
