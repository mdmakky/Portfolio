import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .bubble-float { animation: bubble-float 4s ease-in-out infinite; }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }
        
        .text-shimmer {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6);
          background-size: 400% 400%;
          animation: shimmer 3s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-3px) scale(1.05);
        }
        
        .social-glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .social-glass:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .footer-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::before {
          width: 100%;
        }
      `}</style>

      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements - Reduced */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Floating Tech Bubbles - Minimal */}
        <div className="absolute inset-0 overflow-hidden">
          {['⚛️', '🐍', '🌐', '💻'].map((emoji, i) => (
            <div
              key={i}
              className="absolute text-xl opacity-10 bubble-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 py-16">
          {/* Main Footer Content */}
          <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* About Section - Simplified */}
              <div className="text-center md:text-left">
                <Link to="/" className="inline-block mb-6 group">
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-4xl font-bold group-hover:scale-105 transition-transform duration-300">
                      <span className="text-shimmer">MA</span>
                      <span className="text-white">kky</span>
                      <span className="text-xs text-blue-400 animate-pulse ml-1">®</span>
                    </span>
                  </div>
                </Link>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Full-stack developer and AI enthusiast crafting modern digital experiences 
                  that bridge technology and innovation.
                </p>
                
                {/* Social Links - Essential Only */}
                <div className="flex justify-center md:justify-start space-x-4">
                  {[
                    { icon: 'fab fa-github', href: 'https://github.com/mdmakky', label: 'GitHub' },
                    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/md-amakky/', label: 'LinkedIn' },
                    { icon: 'fas fa-envelope', href: 'mailto:arafat@example.com', label: 'Email' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="social-glass rounded-2xl p-3 text-white hover:text-blue-300"
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links - Essential Only */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center md:justify-start">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-link text-sm"></i>
                  </span>
                  Quick Links
                </h3>
                
                <ul className="space-y-3">
                  {[
                    { name: 'About Me', href: '#about', icon: 'fas fa-user' },
                    { name: 'Skills', href: '#skills', icon: 'fas fa-code' },
                    { name: 'Projects', href: '/projects', icon: 'fas fa-folder-open', isLink: true },
                    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
                  ].map((link, index) => (
                    <li key={index}>
                      {link.isLink ? (
                        <Link 
                          to={link.href} 
                          className="footer-link text-white/80 hover:text-white flex items-center justify-center md:justify-start space-x-3"
                        >
                          <i className={`${link.icon} text-blue-400`}></i>
                          <span>{link.name}</span>
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          className="footer-link text-white/80 hover:text-white flex items-center justify-center md:justify-start space-x-3"
                        >
                          <i className={`${link.icon} text-blue-400`}></i>
                          <span>{link.name}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Streamlined */}
          <div className="glass-morphism rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-white/70 mb-2">
                  &copy; {currentYear} <span className="text-white font-medium">Md. Arafatuzzaman</span> | All rights reserved
                </p>
                <p className="text-white/60 text-sm">
                  Crafted with ❤️ and modern web technologies
                </p>
              </div>
              
              {/* Scroll to Top Button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="social-glass rounded-full p-4 text-white hover:text-blue-300 pulse-glow"
                aria-label="Scroll to top"
              >
                <i className="fas fa-chevron-up text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
