import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce website with product search, filtering, cart, and checkout.',
      image: '/photos/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
      github: 'https://github.com/mdmakky/ecommerce-project',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag and drop functionality, task categories, and progress tracking.',
      image: '/photos/project2.jpg',
      technologies: ['React', 'Redux', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com/mdmakky/task-manager',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather and forecasts based on user location or search.',
      image: '/photos/project3.jpg',
      technologies: ['JavaScript', 'OpenWeather API', 'HTML', 'CSS'],
      github: 'https://github.com/mdmakky/weather-app',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and contact information.',
      image: '/photos/project4.jpg',
      technologies: ['React', 'TailwindCSS', 'Vite'],
      github: 'https://github.com/mdmakky/portfolio',
      demo: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A blog platform with user authentication, post creation, commenting, and social sharing.',
      image: '/photos/project5.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/mdmakky/blog-platform',
      demo: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'A real-time chat application with user authentication, private messaging, and group chats.',
      image: '/photos/project6.jpg',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
      github: 'https://github.com/mdmakky/chat-app',
      demo: '#'
    }
  ];

  return (
    <div className="bg-section-bg-lightest py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Link to="/" className="inline-flex items-center text-primary mb-8 hover:underline">
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here's a collection of my recent projects. Each project demonstrates different skills and technologies
            that I've worked with. Feel free to explore the live demos or check out the code on GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x340?text=${project.title.replace(/ /g, '+')}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-text-primary hover:text-primary transition-colors"
                  >
                    <i className="fab fa-github mr-2"></i> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-text-primary hover:text-primary transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;