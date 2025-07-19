import React from 'react';
import '../styles/components/Footer.css'; // Import your CSS file
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      
      <hr className="footer-divider" />

      <p className="footer-copy">
        © 2024 <span className="highlight">YOUERN Rin</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
