import React from "react";
import { useTranslation } from "react-i18next";
import { AnimatedElement } from "./AnimatedElement";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <div className="footer-section">
            <h3>{t('footer.aboutMe')}</h3>
            <p>{t('footer.aboutDescription')}</p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.4}>
          <div className="footer-section">
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li>
                <a href="#services">{t('footer.services')}</a>
              </li>
              <li>
                <a href="#works">{t('footer.works')}</a>
              </li>
              <li>
                <a href="#skills">{t('footer.skills')}</a>
              </li>
              <li>
                <a href="#resume">{t('footer.resume')}</a>
              </li>
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.6}>
          <div className="footer-section">
            <h3>{t('footer.contactInfo')}</h3>
            <ul className="contact-info">
              <li>
                <Mail size={18} /> <a href="mailto:javier@example.com">{t('footer.email')}</a>
              </li>
              <li>
                <Phone size={18} /> {t('footer.phone')}
              </li>
              <li>
                <MapPin size={18} /> {t('footer.address')}
              </li>
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.8}>
          <div className="footer-section">
            <h3>{t('footer.followMe')}</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <AnimatedElement animation="fadeIn" delay={1}>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </AnimatedElement>
    </footer>
  );
}

export default Footer;
