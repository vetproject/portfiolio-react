import { useTranslation } from "react-i18next";
import "../styles/components/About.css"; // Import your CSS file
import { FaBriefcase, FaCheckCircle, FaHeadphones } from "react-icons/fa";
import avta from "../assets/images/avata.png"; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function About() {
  const { t } = useTranslation();
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease-in-out',
      });
    }, []);
  return (
    <section className="about-section" id="about">
      <div className="about-intro">
        <h2 className="about-title">{t("about.title")}</h2>
      </div>

      <div className="about-content" data-aos="fade-up">
        {/* Left: Profile */}
        <div className="about-image" data-aos="zoom-in-up">
          <img src={avta} alt="Profile" />
        </div>

        {/* Right: Info + Text */}
        <div className="about-info" data-aos="zoom-in-up" datad-aos-delay="600"> 
          <div className="cards">
            <div className="card">
              <FaBriefcase className="card-icon" />
              <h3>{t("about.experience")}</h3>
              <p>{t("about.exdes")}</p>
            </div>
            <div className="card">
              <FaCheckCircle className="card-icon" />
              <h3>{t("about.projects")}</h3>
              <p>{t("about.prdes")}</p>
            </div>
            <div className="card">
              <FaHeadphones className="card-icon" />
              <h3>{t("about.support")}</h3>
              <p>{t("about.codes")}</p>
            </div>
          </div>

          <p className="description" >
           {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
