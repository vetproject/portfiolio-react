import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../styles/components/Experience.css";

export default function Experience() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const experiences = [
    {
      date: "04 Dec 2024 - Present",
      title: "VIREAK BUN THAM EXPRESS",
      description: t("experience.des.vireak"),
    },
    {
      date: "01 Aug 2024",
      title: "Dai-ichi Life Insurance (Cambodia) Plc.",
      description: t("experience.des.dia"),
    },
    {
      date: "2023–2024",
      title: "PASSERELLES NUMÉRIQUES CAMBODIA",
      description: t("experience.des.asociation"),
    },
    {
      date: "2022",
      title: "BANTEAY CHHMAR HIGH SCHOOL",
      description: t("experience.des.bas"),
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2>{t("experience.title") || "My Experience"}</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index} data-aos="fade-up" >
            <div className="experience-date">{exp.date}</div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
