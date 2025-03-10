import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Stagiaire en Few Shot Learning',
      company: 'LIRMM - Laboratoire d\'informatique, de robotique et de microélectronique de Montpellier',
      period: 'Février 2024 - Mars 2024 (6 semaines)',
      description: [
        'Fine-tuning de modèles récents (GPT, CamemBERT...) sur divers jeux de données pour le français (DACCORD, RTE3-FR, SICK-FR)',
        'Évaluation des performances et analyse de l\'amélioration de ces modèles',
        'Travail sur des techniques d\'apprentissage avec peu d\'exemples (few-shot learning)'
      ]
    },
    {
      title: 'Stagiaire en Support Technique et Analyste de Données',
      company: 'EURL PROFESSIONNEL SUBAQUATIQUE, Bejaia, Algérie',
      period: 'Juin 2023 - Juillet 2023 (1 mois)',
      description: [
        'Gestion complète des besoins informatiques des employés',
        'Installation de logiciels et analyse des données pour optimiser les performances de l\'entreprise',
        'Support technique et maintenance des systèmes informatiques'
      ]
    },
    {
      title: 'Chef de Projet - TER M1',
      company: 'Université de Montpellier',
      period: 'Janvier 2025 - Présent',
      description: [
        'Projet "Risky Business: A Game of Risk and Reward for Robot Negotiation"',
        'Conception d\'un système interactif permettant à des robots de perfectionner leurs compétences en négociation',
        'Combinaison de prise de risque, maximisation des récompenses et apprentissage basé sur les interactions passées'
      ]
    },
    {
      title: 'Chef de Projet - TER L3',
      company: 'Université de Montpellier',
      period: 'Janvier 2024 - Juin 2024',
      description: [
        'Développement d\'une application de gestion de stock avec Flutter/Node.js',
        'Supervision du développement d\'une application accessible sur différentes plateformes',
        'Gestion d\'équipe et coordination du projet'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Expérience professionnelle</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mon parcours professionnel dans le développement web, l'intelligence artificielle et les technologies numériques.
        </p>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </div>
              <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {exp.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;