import React from "react"
import { AnimatedElement } from "./AnimatedElement"
import { Github, ExternalLink } from "lucide-react"
import "../styles/Works.css"
import redessociales from '../assets/redessociales.png';


const projects = [
  {
    title: "Worker",
    description: "Worker la red social para los trabajadores.",
    image: redessociales,
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "/placeholder-project2.jpg",
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "/placeholder-project3.jpg",
    github: "https://github.com/yourusername/project3",
    live: "https://project3.com",
  },
]

function Works() {
  return (
    <section id="works" className="works section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">My</span> Works
        </h2>
      </AnimatedElement>
      <div className="works-grid">
        {projects.map((project, index) => (
          <AnimatedElement key={index} animation="fadeIn" delay={index * 0.2}>
            <div className="work-item">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="work-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-button github-button"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="work-button live-button">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  )
}

export default Works

