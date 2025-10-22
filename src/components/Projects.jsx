import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: 'Facebook-Cleaner',
      description: 'A JavaScript tool to efficiently clean up Facebook accounts. Automate post removal and data management.',
      icon: 'fab fa-facebook',
      gradient: 'from-blue-600 to-blue-400',
      technologies: ['JavaScript', 'Browser Extension', 'Automation'],
      github: 'https://github.com/mdmakky/Facebook-Cleaner',
    },
    {
      id: 2,
      title: 'CatcherX',
      description: 'Python automation tool for data catching and management with modern best practices.',
      icon: 'fas fa-database',
      gradient: 'from-green-600 to-emerald-400',
      technologies: ['Python', 'Automation', 'Data Processing'],
      github: 'https://github.com/mdmakky/CatcherX',
    },
    {
      id: 3,
      title: 'Fakhim AI',
      description: '🔥 Ultimate Savage AI Assistant - Hilariously sarcastic chatbot built with Google Gemini.',
      icon: 'fas fa-robot',
      gradient: 'from-purple-600 to-pink-500',
      technologies: ['Python', 'Streamlit', 'AI', 'NLP'],
      github: 'https://github.com/mdmakky/Fakhim',
    },
    {
      id: 4,
      title: 'PetNest',
      description: 'Complete pet adoption platform connecting users with pets and veterinarians.',
      icon: 'fas fa-paw',
      gradient: 'from-orange-600 to-amber-400',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/mdmakky/PetNest',
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-in { animation: slide-up 0.8s ease-out forwards; }
        .animate-in-delay { animation: fade-in-scale 1s ease-out 0.3s forwards; }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>

      <section 
        id="projects" 
        ref={sectionRef}
        className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
              Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Check out some of my recent work. Each project showcases different skills and technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 opacity-0 animate-in-delay">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  </div>
                  <i className={`${project.icon} text-5xl sm:text-6xl text-white opacity-90 group-hover:scale-110 transition-transform duration-500`}></i>
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-400/30">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-center text-sm font-medium"
                  >
                    <i className="fab fa-github mr-2"></i> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center opacity-0 animate-in-delay" style={{animationDelay: '0.6s'}}>
            <Link 
              to="/projects"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span>View All Projects</span>
              <i className="fas fa-arrow-right ml-3"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
