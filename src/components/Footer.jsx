import React from "react"
import { AnimatedElement } from "./AnimatedElement"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <div className="footer-section">
            <h3>About Me</h3>
            <p>
              I'm Javier, a passionate web developer and UX designer. I create beautiful, functional websites that help
              businesses grow and succeed online.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.4}>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.6}>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <Mail size={18} /> <a href="mailto:javier@example.com">javierbrega@gmail.com</a>
              </li>
              <li>
                <Phone size={18} /> +54 (260) 457-6114
              </li>
              <li>
                <MapPin size={18} /> San Rafael, Mendoza, Argentina
              </li>
            </ul>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.8}>
          <div className="footer-section">
            <h3>Follow Me</h3>
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
          <p>&copy; 2025 Javier Brega. All rights reserved.</p>
        </div>
      </AnimatedElement>
    </footer>
  )
}

export default Footer

