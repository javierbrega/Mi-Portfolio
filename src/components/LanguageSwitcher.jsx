// eslint-disable-next-line no-unused-vars
import React from 'react';
import i18n from 'i18next';
import argentinaFlag from '../assets/Argentina_Flag.png';
import usFlag from '../assets/Usa_flag.png';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <div className="flags">
        <img
          src={argentinaFlag}
          alt="Español"
          onClick={() => changeLanguage('es')}
          className="flag-icon"
        />
        <img
          src={usFlag}
          alt="English"
          onClick={() => changeLanguage('en')}
          className="flag-icon"
        />
      </div>
      <p className="language-title">Language</p>
    </div>
  );
};

export default LanguageSwitcher;