import React from 'react';

const Education = () => {
  const educations = [
    {
      degree: 'Double Master',
      institution: 'Université de Montpellier & IAE Montpellier',
      period: '2024 - 2025 (En cours)',
      description: '1- M1 Intelligence Artificielle et Sciences des Données (Faculté des sciences)\n2- M1 Management Technologies et sciences (École Universitaire de management de Montpellier)'
    },
    {
      degree: 'Bachelor en Informatique',
      institution: 'Université de Montpellier, Faculté des sciences',
      period: '2021 - 2024',
      description: 'Spécialisation en développement web et applications mobiles. Réussite à l\'examen de certification PIX. Participation à la Coding Battle le shaker 2023 (parmi les 350 premiers).'
    },
    {
      degree: 'Licence 1 en Informatique',
      institution: 'Université de Abderahman Mira Bejaia, Algérie',
      period: '2020 - 2021',
      description: 'Major en Analyse et Algèbre'
    },

    {
      degree: 'Baccalauréat série Mathématiques',
      institution: 'Lycée HOURIA, Bejaia Algérie',
      period: '2019 - 2020',
      description: 'Mention Bien'
    }
  ];

  const certifications = [
    {
      name: 'Formation d\'initiation à la cybersécurité',
      issuer: 'NumSec Academy de l\'ANSSI',
      date: '2024'
    },
    {
      name: 'Certification Pix',
      issuer: 'Universite de Montpellier',
      date: '2022'
    },
    {
      name: 'Certificate of Compilation (Anglais)-B2',
      issuer: 'Cambridge Assessment English',
      date: '2019'
    },
    {
      name: 'Formation d\'Algorithme Informatique',
      issuer: 'Syken College Bejaia, Algérie',
      date: '2021'
    },
    {
      name: 'Formation agent de saisie',
      issuer: 'IFTGIE Tusna Bejaia, Algérie',
      date: '2021'
    },
    {
      name: 'Formation EXCEL avancé',
      issuer: 'IFTGIE Tusna Bejaia, Algérie',
      date: '2021'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="text-center mb-12">
        <h2 className="section-title">Formation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mon parcours académique et mes certifications professionnelles.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Éducation</h3>
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-gray-500 mt-1 md:mt-0">{edu.period}</p>
                </div>
                <p className="font-medium" style={{
                  background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {edu.institution}
                </p>
                <p className="text-gray-600 whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-lg font-bold text-gray-800">{cert.name}</h4>
                  <p className="text-gray-500 mt-1 md:mt-0">{cert.date}</p>
                </div>
                <p className="font-medium" style={{
                  background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>
                  {cert.issuer}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;