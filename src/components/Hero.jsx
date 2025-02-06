"use client";

import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { AnimatedElement } from "./AnimatedElement";
import { useTranslation } from "react-i18next";
import "../styles/Hero.css";

function Hero() {
  const { t } = useTranslation();

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
          <motion.div
            className="hero-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Perfil-4BnyeLt3G8d7lkY5IJz44yxZgZBIlZ.png"
              alt="Javier Profile"
              className="profile-image"
            />
          </motion.div>
        </AnimatedElement>

        <div className="hero-text">
          <AnimatedElement delay={0.2}>
            <h1>{t("hero.greeting")}</h1>
          </AnimatedElement>

          <AnimatedElement delay={0.4}>
            <p>{t("hero.description")}</p>
          </AnimatedElement>

          <AnimatedElement delay={0.6} className="hero-actions">
            <motion.button
              className="hire-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.hireMe")} <span className="arrow">→</span>
            </motion.button>

            <div className="social-links">
              {[
              { url: "https://x.com/JavierBrega", network: "x" },
              { url: "https://www.instagram.com/javierbrega", network: "instagram" },
              { url: "https://www.linkedin.com/in/javier-brega", network: "linkedin" },
              { url: "https://wa.me/+5492604576114", network: "whatsapp" },
              { url: "https://open.spotify.com/user/javierbrega", network: "spotify" },
              { url: "https://github.com/javierbrega", network: "github" },
              ].map((social, index) => (
                <SocialIcon
                key={index}
                url={social.url}
                network={social.network}
                bgColor="#ff8700"  
                style={{ height: 30, width: 30 }}
                target="_blank"
                rel="noopener noreferrer"
                />
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

export default Hero;
