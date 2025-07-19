import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../styles/change_action/LanguageSwitcher.css";
import en from "../assets/flags/en.png";
import ch from "../assets/flags/ch.png";
import km from "../assets/flags/kh.png";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "EN", flag: en },
    { code: "ch", label: "中文", flag: ch },
    { code: "km", label: "ខ្មែរ", flag: km },
  ];

  const currentLangIndex = languages.findIndex((lang) => lang.code === i18n.language);
  const currentLang = languages[currentLangIndex] || languages[0];

  const toggleLanguage = () => {
    const nextIndex = (currentLangIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];

    i18n.changeLanguage(nextLang.code);
    localStorage.setItem("i18nextLng", nextLang.code);
  };

  return (
    <button className="lang-toggle-btn" onClick={toggleLanguage} aria-label="Toggle Language">
      <img src={currentLang.flag} alt={currentLang.label} className="lang-flag" />
      {currentLang.label}
    </button>
  );
}
