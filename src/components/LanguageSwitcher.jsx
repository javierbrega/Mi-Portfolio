import React from 'react';
import i18n from 'i18next';
import argentinaFlag from '/src/assets/Argentina_Flag.png';
import usFlag from '/src/assets/Usa_Flag.png';

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
      <p className="language-title">Language</p> {/* Título debajo de las banderas */}
    </div>
  );
};

export default LanguageSwitcher;
