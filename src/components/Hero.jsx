"use client"

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Dribbble, Bookmark } from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";
import { useTranslation } from 'react-i18next';
import "../styles/Hero.css";

function Hero() {
  const { t } = useTranslation();

  // Wrap any ethereum-related code in a try-catch block
  React.useEffect(() => {
    try {
      // Your ethereum-related code here, if any
    } catch (error) {
      console.error("Ethereum object not available:", error);
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <AnimatedElement animation="slideIn" className="hero-image-container">
          <motion.div className="hero-image" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Perfil-4BnyeLt3G8d7lkY5IJz44yxZgZBIlZ.png"
              alt="Javier Profile"
              className="profile-image"
            />
          </motion.div>
        </AnimatedElement>

        <div className="hero-text">
          <AnimatedElement delay={0.2}>
            <h1>{t('hero.greeting')}</h1>
          </AnimatedElement>

          <AnimatedElement delay={0.4}>
            <p>{t('hero.description')}</p>
          </AnimatedElement>

          <AnimatedElement delay={0.6} className="hero-actions">
            <motion.button className="hire-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {t('hero.hireMe')} <span className="arrow">→</span>
            </motion.button>

            <div className="social-links">
              {[Facebook, Instagram, Dribbble, Bookmark].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={Icon.name}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "var(--color-orange)",
                    color: "var(--color-black)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

export default Hero;
