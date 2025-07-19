import { useTranslation } from "react-i18next";
import "../styles/change_action/LanguageSwitcher.css"; // new CSS file

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "km" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="lang-toggle-btn" onClick={toggleLanguage} aria-label="Toggle Language">
      🌐 {i18n.language.toUpperCase()}
    </button>
  );
}
