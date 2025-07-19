import { useState } from 'react';
import '../styles/components/Hero.css'; // Import your CSS file
import hero from '../assets/images/developer.png'; // Import your hero image
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();
    return (
        <div className="header-intro">
            <div className="hero-section">
                <div className="hero-container">
                    <h1 className="hero-title">
                        {t('hero.title')} <br />
                        <span className="highlight">{t('hero.subtitle')}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t('hero.description')}
                    </p>
                    <div className="hero-buttons">
                        <a href="src/assets/Yourn-RIn-CV.pdf"
                            className="btn-primary"
                            download>
                            {t('hero.buttonText')}</a>
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src={hero} alt="Hero" />
            </div>
        </div>
    );
}
