import React, { useState } from 'react';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-20 pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Bonjour, je suis Nina SALHI
          </h1>
          <h2 className="text-2xl text-primary mb-6">Développeuse Full Stack & IA</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Étudiante en double Master Intelligence Artificielle et Management des Technologies, 
            je suis passionnée par la création d'applications web modernes et l'intelligence artificielle. 
            Je combine créativité et expertise technique pour développer des solutions innovantes.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors font-medium flex items-center gap-2 hover-lift"
            >
              <Mail size={18} />
              Me contacter
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all font-medium flex items-center gap-2 hover-lift"
            >
              <FileText size={18} />
              Télécharger CV
            </a>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/nina-salhi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors hover-lift"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/nina-salhi-812b5426a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors hover-lift"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:nina.salhi08@gmail.com" 
              className="text-primary hover:text-secondary transition-colors hover-lift"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-soft">
              <img 
                src={images[currentImageIndex]} 
                alt="Photo de profil" 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-primary hover:bg-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-primary hover:bg-white transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;