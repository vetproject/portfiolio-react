// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles/global.css';
import './i18n';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // ⬅️ Add this

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container">
      <div id='Home'>
        <Header />
      </div>

      <div id='Hero' data-aos="fade-up">
        <Hero />
      </div>

      <div id="AboutMe" data-aos="fade-up" >
        <About />
      </div>

      <div id="Skills" data-aos="fade-up" data-aos-delay="200">
        <Skills />
      </div>

      <div id="Experience" data-aos="fade-up" data-aos-delay="400">
        <Experience />
      </div>

      <div id="Projects" data-aos="fade-up" data-aos-delay="500">
        <Projects />
      </div>

      <div id="Contact" data-aos="fade-up" data-aos-delay="600">
        <Contact />
      </div>

      <div id="Footer">
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}
