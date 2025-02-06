import { useTranslation } from "react-i18next";
import { AnimatedElement } from "./AnimatedElement";
import { SocialIcon } from "react-social-icons";
import { FaEnvelope, FaPhone, FaMapPin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <div className="footer-section">
            <h3>{t("footer.aboutMe")}</h3>
            <p>{t("footer.aboutDescription")}</p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.4}>
          <div className="footer-section">
            <h3>{t("footer.quickLinks")}</h3>
            <ul>
              <li>
                <a href="#services">{t("footer.services")}</a>
              </li>
              <li>
                <a href="#works">{t("footer.works")}</a>
              </li>
              <li>
                <a href="#skills">{t("footer.skills")}</a>
              </li>
              <li>
                <a href="#resume">{t("footer.resume")}</a>
              </li>
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.6}>
          <div className="footer-section">
            <h3>{t("footer.contactInfo")}</h3>
            <ul className="contact-info">
              <li>
                <FaEnvelope size={18} />{" "}
                <a href="mailto:javier@example.com">{t("footer.email")}</a>
              </li>
              <li>
                <FaPhone size={18} /> {t("footer.phone")}
              </li>
              <li>
                <FaMapPin size={18} /> {t("footer.address")}
              </li>
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.8}>
          <div className="footer-section">
            <h3>{t("footer.followMe")}</h3>
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
          </div>
        </AnimatedElement>
      </div>

      <AnimatedElement animation="fadeIn" delay={1}>
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
        </div>
      </AnimatedElement>
    </footer>
  );
}

export default Footer;
