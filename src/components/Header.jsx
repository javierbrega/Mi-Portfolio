/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Header.css";
import { Download } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher"; 

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${isVisible ? "visible" : "hidden"}`}>
      <div className="header-left">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
              fill="#FF8700"
            />
            <path
              d="M15 25 L10 20 L15 15"  // Path for "<"
              stroke="#000000"
              strokeWidth="2"
            />
            <path
              d="M25 25 L30 20 L25 15"  // Path for ">"
              stroke="#000000"
              strokeWidth="2"
            />
            <path
              d="M19 21 L21 19"  // Path for "/"
              stroke="#000000"
              strokeWidth="2"
            />
          </svg>
        </div>
      
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#services">{t('header.services')}</a>
          </li>
          <li>
            <a href="#works">{t('header.works')}</a>
          </li>
          <li>
            <a href="#resume">{t('header.resume')}</a>
          </li>
          <li>
            <a href="#skills">{t('header.skills')}</a>
          </li>
          <li>
            <a href="#testimonials">{t('header.testimonials')}</a>
          </li>
          <li>
            <a href="#contact">{t('header.contact')}</a>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <a href="https://drive.google.com/uc?export=download&id=1K6DijFVoE9FSNew65g6NjBaB0x-57Kwc" target="_blank" rel="noopener noreferrer" className="resume-link">
          <button className="resume-button">
            {t('header.resume_button')} <Download size={16} className="ml-2" />
          </button>
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;