import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Risky Business: Robot Negotiation',
      description: 'Système interactif permettant à des robots de perfectionner leurs compétences en négociation en combinant prise de risque et apprentissage.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'Machine Learning', 'IA', 'Robotique'],
      liveUrl: 'https://project-example.com',
      githubUrl: 'https://github.com/nina-salhi/project'
    },
    {
      title: 'Application de Gestion de Stock',
      description: 'Application multi-plateforme de gestion de stock accessible sur mobile, serveur et cloud.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Flutter', 'Node.js', 'Cloud'],
      liveUrl: 'https://project-example.com',
      githubUrl: 'https://github.com/nina-salhi/project'
    },
    {
      title: 'Plateforme Interactive pour Étudiants',
      description: 'Plateforme permettant aux étudiants de répondre en temps réel aux questions des professeurs pendant les cours.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Flask', 'Python', 'JavaScript', 'WebSockets'],
      liveUrl: 'https://project-example.com',
      githubUrl: 'https://github.com/nina-salhi/project'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Mes projets</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets récents. Chaque projet représente un défi unique 
          que j'ai relevé en utilisant différentes technologies.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;