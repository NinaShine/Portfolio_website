import React, { useState } from 'react';
import { FileText, Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

import image1 from '../images/image1.png'; 
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-name">
            Bonjour, je suis Nina SALHI
          </h1>
          <h2 className="about-title">22 ans</h2>
          <p className="about-description">
          Actuellement en double Master 1 en <strong>Intelligence Artificielle & Sciences des Données</strong> et <strong>Management des Sciences Numériques</strong>,
           je suis passionnée par l’analyse de données, le développement et l’optimisation des systèmes intelligents.  Je suis à la <strong>recherche d’une alternance</strong> pour <strong>septembre 2025</strong>  en tant que <strong>Data Analyst, Data Engineer ou Développeuse Fullstack</strong>. Curieuse, rigoureuse et autonome, je souhaite mettre mes compétences au service d’une entreprise innovante.
          </p>
          
          <div className="about-cta-container">
            <a 
              href="#contact" 
              className="cta-button primary-cta"
            >
              <Mail size={18} />
              Me contacter
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              className="cta-button secondary-cta"
            >
              <FileText size={18} />
              Télécharger CV
            </a>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/NinaShine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/nina-salhi-812b5426a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:salhinina.pro@gmail.com" 
              className="social-link"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="profile-image-container">
          <div className="image-background"></div>
          <div className="image-wrapper">
            <img 
              src={images[currentImageIndex]} 
              alt="Photo de profil" 
              className="profile-image"
            />
            <div className="image-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`image-indicator ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prevImage}
              className="image-nav-button prev-button"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="image-nav-button next-button"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;