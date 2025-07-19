import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/components/Header.css';
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolledSection, setScrolledSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section, div[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.toLowerCase();
            setScrolledSection(id);
            setActiveLink(id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <div className={`header-container ${scrolledSection ? `bg-${scrolledSection}` : ''}`}>
      <header className="navbar">
        <div className="logo">
          <span>{t("header.first")}</span><span className="logo-k">{t("header.last")}</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a
            href="#Hero"
            className={activeLink === 'hero' ? 'active' : ''}
            onClick={() => handleLinkClick('hero')}
          >
            {t("header.home")}
          </a>
          <a
            href="#AboutMe"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleLinkClick('about')}
          >
            {t("header.about")}
          </a>

          <a
            href="#Skills"
            className={activeLink === 'skills' ? 'active' : ''}
            onClick={() => handleLinkClick('skills')}
          >
            {t("header.skills")}
          </a>
          <a
            href="#Experience"
            className={activeLink === 'experience' ? 'active' : ''}
            onClick={() => handleLinkClick('experience')}
          >
            {t("header.experience")}
          </a>
          <a
            href="#Projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleLinkClick('projects')}
          >
            {t("header.projects")}
          </a>
          <a
            href="#Contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            {t("header.contact")}
          </a>
          <div className='header-action'>
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>

        <div className='header-actions'>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
}
