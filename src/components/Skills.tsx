import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages de programmation',
      skills: ['C', 'C++', 'Java', 'Python', 'Pascal', 'Kotlin', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL']
    },
    {
      title: 'Frameworks & Bibliothèques',
      skills: ['React', 'Node.js', 'Flask', 'Angular', 'Vue.js', 'Spring Boot', 'Django', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn']
    },
    {
      title: 'Outils & Technologies',
      skills: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Big Data (HADOOP, Spark, Snowflake)', 'Power BI', 'Business Object', 'Cloud Computing (AWS, Azure, GCP)', 'JIRA']
    },
    {
      title: 'Bases de données',
      skills: ['MySQL', 'Oracle', 'SQL Server', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Méthodologies & Gestion de projet',
      skills: ['Agile (Scrum, Kanban)', 'Gestion de projet', 'Analyse des besoins', 'Reporting automatisé', 'Rédaction de documentations techniques']
    },
    {
      title: 'IA Générative & NLP',
      skills: ['LLM (Large Language Models)', 'Embeddings', 'RAG (Retrieval-Augmented Generation)', 'Modèles Transformers']
    }
  ];


  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">Mes compétences</h2>
        <p className="section-description">
          Voici les technologies et outils avec lesquels j'ai travaillé et que j'utilise régulièrement dans mes projets.
        </p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-container">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="skill-badge"
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