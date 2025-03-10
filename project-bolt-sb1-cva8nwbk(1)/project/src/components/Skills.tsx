import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages de programmation',
      skills: ['C', 'C++', 'Java', 'Python', 'Pascal', 'Kotlin', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Bibliothèques',
      skills: ['React', 'Node.js', 'Flask', 'Machine Learning', 'Deep Learning']
    },
    {
      title: 'Outils & Technologies',
      skills: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Big Data (HADOOP)']
    },
    {
      title: 'Bases de données',
      skills: ['MySQL', 'Oracle']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Mes compétences</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Voici les technologies et outils avec lesquels j'ai travaillé et que j'utilise régulièrement dans mes projets.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;