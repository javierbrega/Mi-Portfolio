import React from "react"
import "../styles/Services.css"
import { AnimatedElement } from "./AnimatedElement"

function Services() {
  return (
    <section id="services" className="services section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">My</span> <span className="title-white">Services</span>
        </h2>
      </AnimatedElement>
      <div className="services-grid">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Custom website development using modern technologies and best practices.</p>
        </div>
        <div className="service-item">
          <h3>Responsive Design</h3>
          <p>Creating websites that look great on all devices, from mobile to desktop.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Designing intuitive and visually appealing user interfaces and experiences.</p>
        </div>
        <div className="service-item">
          <h3>Performance Optimization</h3>
          <p>Improving website speed and performance for better user experience and SEO.</p>
        </div>
      </div>
    </section>
  )
}

export default Services

