import React from "react"
import { AnimatedElement } from "./AnimatedElement"
import "../styles/Study.css"

function Study() {
  return (
    <section id="study" className="study section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">Certifications</span> <span className="title-white">and Studies</span>
        </h2>
      </AnimatedElement>
      <div className="study-grid">
        <AnimatedElement animation="slideIn" delay={0.2}>
          <div className="study-item">
            <h3>Full Stack Web Development</h3>
            <p>Udacity Nanodegree | 2020</p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.3}>
          <div className="study-item">
            <h3>React Certification</h3>
            <p>FreeCodeCamp | 2019</p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.4}>
          <div className="study-item">
            <h3>Advanced JavaScript</h3>
            <p>Coursera | 2018</p>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.5}>
          <div className="study-item">
            <h3>UI/UX Design Fundamentals</h3>
            <p>Google / Coursera | 2021</p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default Study

