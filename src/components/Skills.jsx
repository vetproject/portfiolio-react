import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";
import AOS from 'aos';
import {
  DiMsqlServer,
  DiMysql

} from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaVuejs,
  FaLaravel,
  FaJava,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaAndroid
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiVercel,
  SiIntellijidea
} from "react-icons/si";
import "../styles/components/Skills.css";

export default function Skill() {
  const { t } = useTranslation();

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const techStack = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F0DB4F" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Node", icon: <FaNodeJs color="#3C873A" /> },
    { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
    { name: "VueJs", icon: <FaVuejs color="#42b883" /> },
    { name: "PHP", icon: <SiPhp color="#777BB4" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "SQL", icon: <AiOutlineConsoleSql color="#4479A1" /> },
    { name: "MySQL", icon: <DiMysql color="#4479A1" /> },
    { name: "SQL Server", icon: <DiMsqlServer color="#4479A1" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#563D7C" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill color="#38B2AC" /> },
    { name: "GitHub", icon: <FaGithub color="#272525ff" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Vercel", icon: <SiVercel color="#1f1d1dff" /> },
    { name: "TypeScript", icon: <SiTypescript color="#007ACC" /> },
    { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
    { name: "Android", icon: <FaAndroid color="#3DDC84" /> },
    { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea color="#000000" /> }


  ];

  return (
    <section className="skill">
      <h2>{t("skills.title")}</h2>
      <p data-aos="fade-up">{t("skills.description")}</p>

      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div className="tech-item" key={index} data-aos="fade-up">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
