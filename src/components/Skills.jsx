import React from "react";
import { useTranslation } from 'react-i18next';
import { AnimatedElement } from "./AnimatedElement";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90, color: "#E34F26" },
  { name: "CSS", level: 85, color: "#1572B6" },
  { name: "JavaScript", level: 80, color: "#F7DF1E" },
  { name: "React", level: 75, color: "#61DAFB" },
  { name: "Node.js", level: 70, color: "#339933" },
  { name: "Python", level: 65, color: "#3776AB" },
  { name: "UI/UX Design", level: 75, color: "#FF3366" },
  { name: "GraphQL", level: 60, color: "#E10098" },
];

function SkillBar({ skill, index }) {
  return (
    <AnimatedElement animation="fadeIn" delay={index * 0.1}>
      <motion.div
        className="skill-bar"
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay: index * 0.1 }}
      >
        <div className="skill-info">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
        <div className="skill-progress" style={{ backgroundColor: skill.color }}>
          <div className="fire-effect"></div>
        </div>
      </motion.div>
    </AnimatedElement>
  );
}

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills section">
      <AnimatedElement animation="fadeIn">
        <h2 className="section-title">
          <span className="title-highlight">{t('skills.my')}</span> {t('skills.skills')}
        </h2>
      </AnimatedElement>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
