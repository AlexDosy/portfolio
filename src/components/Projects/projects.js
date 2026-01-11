import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A React-based website to showcase my skills and projects.',
      link: 'https://github.com/your-username/portfolio',
    },
    {
      title: 'Chatbot Application',
      description: 'An AI-based chatbot built using GPT-4 and Angular.',
      link: 'https://github.com/your-username/chatbot-app',
    },
    {
      title: 'Dynamic Dashboard',
      description: 'A dashboard with real-time data visualization using Highcharts.',
      link: 'https://github.com/your-username/dashboard',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
