import React from "react"
import { AnimatedElement } from "./AnimatedElement"
import "../styles/Resume.css"

function Resume() {
  return (
    <section id="resume" className="resume section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">My</span> Resume
        </h2>
      </AnimatedElement>
      <div className="resume-content">
        <AnimatedElement animation="slideIn" delay={0.2} className="resume-column">
          <h3>Work Experience</h3>
          <div className="resume-scroll">
            <div className="resume-item">
              <h4>Senior Web Developer</h4>
              <p className="company">Tech Innovations Inc.</p>
              <p className="date">2020 - Present</p>
              <ul>
                <li>Led development of multiple high-traffic web applications</li>
                <li>Implemented responsive design principles across all projects</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <p className="company">Digital Solutions Ltd.</p>
              <p className="date">2017 - 2020</p>
              <ul>
                <li>Developed and maintained client websites using React and Node.js</li>
                <li>Collaborated with design team to implement UI/UX improvements</li>
                <li>Optimized database queries, improving site performance by 40%</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Junior Web Developer</h4>
              <p className="company">WebCraft Studios</p>
              <p className="date">2015 - 2017</p>
              <ul>
                <li>Assisted in the development of responsive websites</li>
                <li>Implemented pixel-perfect designs from Figma mockups</li>
                <li>Learned and applied best practices in web development</li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="slideIn" delay={0.4} className="resume-column">
          <h3>Education</h3>
          <div className="resume-scroll">
            <div className="resume-item">
              <h4>Master of Science in Computer Science</h4>
              <p className="company">Tech University</p>
              <p className="date">2018 - 2020</p>
              <ul>
                <li>Specialized in Artificial Intelligence and Machine Learning</li>
                <li>Thesis: "Implementing AI in Web Applications for Enhanced User Experience"</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Science in Software Engineering</h4>
              <p className="company">State University</p>
              <p className="date">2014 - 2018</p>
              <ul>
                <li>Graduated with Honors (GPA: 3.8/4.0)</li>
                <li>Relevant coursework: Web Development, Database Systems, Software Architecture</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Web Development Bootcamp</h4>
              <p className="company">CodeCamp Academy</p>
              <p className="date">Summer 2014</p>
              <ul>
                <li>Intensive 12-week program covering full-stack web development</li>
                <li>Built and deployed multiple web applications</li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default Resume

