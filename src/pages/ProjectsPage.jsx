import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Facebook-Cleaner',
      description: 'A JavaScript tool designed to help users clean up their Facebook accounts efficiently. Automate the process of removing posts, unfriending, and managing your Facebook data.',
      icon: 'fab fa-facebook',
      gradient: 'from-blue-600 to-blue-400',
      technologies: ['JavaScript', 'Browser Extension', 'DOM Manipulation'],
      github: 'https://github.com/mdmakky/Facebook-Cleaner',
      demo: 'https://github.com/mdmakky/Facebook-Cleaner#readme',
      featured: true
    },
    {
      id: 2,
      title: 'CatcherX',
      description: 'A Python-based automation tool for catching and managing data. Built with modern Python practices for efficient data handling and processing.',
      icon: 'fas fa-database',
      gradient: 'from-green-600 to-emerald-400',
      technologies: ['Python', 'Automation', 'Data Processing'],
      github: 'https://github.com/mdmakky/CatcherX',
      demo: 'https://github.com/mdmakky/CatcherX#readme',
      featured: true
    },
    {
      id: 3,
      title: 'Fakhim AI',
      description: '🔥 The Ultimate Savage Assistant - A hilariously sarcastic AI chatbot that roasts you while helping you. Built with Streamlit, Google Gemini, and maximum sass! 😈💅',
      icon: 'fas fa-robot',
      gradient: 'from-purple-600 to-pink-500',
      technologies: ['Python', 'Streamlit', 'Google Gemini AI', 'NLP'],
      github: 'https://github.com/mdmakky/Fakhim',
      demo: 'https://github.com/mdmakky/Fakhim#readme',
      featured: true
    },
    {
      id: 4,
      title: 'PetNest',
      description: 'A one-stop platform for buying and selling pets, connecting users with trusted veterinarians, and providing resources and community support for pet care. Full-featured pet adoption platform.',
      icon: 'fas fa-paw',
      gradient: 'from-orange-600 to-amber-400',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
      github: 'https://github.com/mdmakky/PetNest',
      demo: 'https://github.com/mdmakky/PetNest#readme',
      featured: true
    },
    {
      id: 5,
      title: 'Share-Reads WebAPP',
      description: 'A book sharing platform where users can share, discover, and exchange books with others. Built with EJS templating and modern web technologies for a seamless reading community experience.',
      icon: 'fas fa-book-reader',
      gradient: 'from-indigo-600 to-blue-400',
      technologies: ['EJS', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      github: 'https://github.com/mdmakky/Share-Reads-WebAPP',
      demo: 'https://github.com/mdmakky/Share-Reads-WebAPP#readme',
      featured: true
    },
    {
      id: 6,
      title: 'Mentora AI',
      description: 'An intelligent AI-powered PDF reader and exam assistant designed to simplify complex study materials, provide personalized summaries, and suggest relevant previous year questions.',
      icon: 'fas fa-graduation-cap',
      gradient: 'from-cyan-600 to-teal-400',
      technologies: ['Python', 'AI/ML', 'NLP', 'PDF Processing', 'Streamlit'],
      github: 'https://github.com/mdmakky/Mentora',
      demo: 'https://github.com/mdmakky/Mentora#readme'
    },
    {
      id: 7,
      title: 'Fabrica',
      description: 'An elegant eCommerce platform for dress shopping. Seamlessly browse, select, and purchase stylish outfits. Built with modern web technologies for a smooth user experience.',
      icon: 'fas fa-shopping-bag',
      gradient: 'from-pink-600 to-rose-400',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/mdmakky/Fabrica',
      demo: 'https://github.com/mdmakky/Fabrica#readme'
    },
    {
      id: 8,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React and TailwindCSS for optimal performance and user experience.',
      icon: 'fas fa-code',
      gradient: 'from-violet-600 to-purple-400',
      technologies: ['React', 'TailwindCSS', 'Vite', 'React Router'],
      github: 'https://github.com/mdmakky/Portfolio',
      demo: 'https://mdmakky.github.io/Portfolio/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 pt-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Here's a collection of my recent projects from GitHub. Each project demonstrates different skills and technologies
            that I've worked with. Feel free to explore the code and documentation.
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">⭐</span> Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.filter(p => p.featured).slice(0, 4).map(project => (
              <div 
                key={project.id} 
                className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] hover:bg-white/15"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  </div>
                  
                  {/* Icon */}
                  <i className={`${project.icon} text-8xl sm:text-9xl text-white opacity-90 group-hover:scale-110 transition-transform duration-500`}></i>
                  
                  {/* Floating particles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs sm:text-sm border border-blue-400/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-center font-semibold text-sm sm:text-base"
                    >
                      <i className="fab fa-github mr-2"></i> View Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center font-semibold text-sm sm:text-base shadow-lg"
                    >
                      <i className="fas fa-book-open mr-2"></i> Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center">
            <span className="mr-3">📂</span> All Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] hover:bg-white/15"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group`}>
                  {/* Animated background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  </div>
                  
                  {/* Icon */}
                  <i className={`${project.icon} text-6xl sm:text-7xl text-white opacity-90 group-hover:scale-110 transition-transform duration-500`}></i>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-5 rounded-bl-full"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-400/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-center text-xs sm:text-sm font-medium"
                    >
                      <i className="fab fa-github mr-1"></i> Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center text-xs sm:text-sm font-medium"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i> Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;