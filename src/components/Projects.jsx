import React, { useState, useEffect } from 'react';
import '../styles/components/Projects.css'; 
import { useTranslation } from "react-i18next";
import port1 from '../assets/projects/port1.png';
import lms from '../assets/projects/lms.png';
import pos from '../assets/projects/pos.png';
import pet from '../assets/projects/pet.png';
import easy from '../assets/projects/easy.png';
import buspad from '../assets/projects/buspad.png';
import card from '../assets/projects/card.png';
import ims from '../assets/projects/ims.png';
import AOS from 'aos';

const projectData = [
  {
    title: "My First Portfolio",
    description: "project.port1.description",
    image: port1,
    tags: ["PHP", "Bootstrap", "JavaScript"],
    category: "Portfolio"
  },
  {
    title: "LMS System",
    description: "project.lms.description",
    image: lms,
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
    category: "System"
  },
  {
    title: "Point of Sale System",
    description: "project.pos.description",
    image: pos,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Application"
  },
  {
    title: "Pet Store Website",
    description: "project.pet.description",
    image: pet,
    tags: ["HTML", "CSS", "SASS"],
    category: "Website"
  },
  {
    title: "Easy Travel",
    description: "project.easy.description",
    image: easy,
    tags: ["Laravel", "Bootstrap", "Vue.js", "MySQL"],
    category: "Website"
  },
  {
    title: "Buspad",
    description: "project.buspad.description",
    image: buspad,
    tags: ["Java", "Android Studio"],
    category: "Application"
  },
  {
    title: "Card Management System",
    description: "project.card.description",
    image: card,
    tags: ["PHP", "Bootstrap", "JavaScript"],
    category: "System"
  },
  {
    title: "Inventory Management System",
    description: "project.ims.description",
    image: ims,
    tags: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
    category: "System"
  }
];

const categories = [
  { key: "All", translationKey: "project.des.all" },
  { key: "System", translationKey: "project.des.system" },
  { key: "Application", translationKey: "project.des.application" },
  { key: "Website", translationKey: "project.des.website" },
  { key: "Portfolio", translationKey: "project.des.portfolio" }
];

export default function Projects() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectData
    : projectData.filter(project => project.category === activeCategory);

  return (
    <section className="projects-section">
      <h2 className="projects-title">{t("project.title")}</h2>
      <div className="projects-filter" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {t(cat.translationKey)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="project-card" data-aos="fade-up">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{t(`projects.${project.title.replace(/\s+/g, '').toLowerCase()}.title`, project.title)}</h3>
            <p className="project-desc">
              {t(project.description)}
            </p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
