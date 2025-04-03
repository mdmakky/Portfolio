import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Add event listener to close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      const mobileNav = document.getElementById('mobile-nav');
      const hamburger = document.querySelector('.hamburger');

      if (mobileMenuOpen && mobileNav && !mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Add overflow hidden to body when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-gradient-to-r from-header-gradient-start via-primary to-header-gradient-end text-white py-6 relative overflow-hidden">
      {/* Particles effect */}
      <div className="particles absolute inset-0 z-0">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <div className="w-11/12 max-w-screen-xl mx-auto relative z-10">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-3xl font-bold hover:text-accent transition-colors duration-300 flex items-center">
              <span className="text-accent">MA</span><span className="relative">kky<span className="absolute -top-1 -right-2 text-xs text-accent animate-pulse-slow">®</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-item text-white text-lg font-medium hover:text-accent transition-colors duration-300">About</a>
            <a href="#skills" className="nav-item text-white text-lg font-medium hover:text-accent transition-colors duration-300">Skills</a>
            <Link to="/projects" className="nav-item text-white text-lg font-medium hover:text-accent transition-colors duration-300">Projects</Link>
            <a href="#contact" className="nav-item text-white text-lg font-medium hover:text-accent transition-colors duration-300">Contact</a>
            <a href="https://github.com/mdmakky" target="_blank" rel="noopener noreferrer" className="ml-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 hover:scale-110">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="hamburger md:hidden cursor-pointer text-2xl" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav id="mobile-nav" className={`fixed top-0 ${mobileMenuOpen ? 'left-0' : '-left-full'} w-3/4 h-full bg-dark bg-opacity-95 flex flex-col items-center justify-start transition-all duration-500 ease-in-out z-50 md:hidden`}>
          <div className="close-btn absolute top-6 right-6 text-2xl text-white cursor-pointer" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="flex items-center justify-center w-full py-8 border-b border-white/10">
            <Link to="/" className="text-white text-3xl font-bold" onClick={toggleMobileMenu}>
              <span className="text-accent">MA</span>kky
            </Link>
          </div>
          <ul className="list-none pt-10 text-center w-full px-6 space-y-4">
            <li><a href="#about" className="text-white text-xl py-3 block hover:bg-white/10 rounded-lg transition duration-300" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#skills" className="text-white text-xl py-3 block hover:bg-white/10 rounded-lg transition duration-300" onClick={toggleMobileMenu}>Skills</a></li>
            <li><Link to="/projects" className="text-white text-xl py-3 block hover:bg-white/10 rounded-lg transition duration-300" onClick={toggleMobileMenu}>Projects</Link></li>
            <li><a href="#contact" className="text-white text-xl py-3 block hover:bg-white/10 rounded-lg transition duration-300" onClick={toggleMobileMenu}>Contact</a></li>
            <li className="pt-6">
              <a href="https://github.com/mdmakky" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300" onClick={toggleMobileMenu}>
                <i className="fab fa-github text-xl"></i> GitHub
              </a>
            </li>
          </ul>
        </nav>

        {/* Overlay when mobile menu is open */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}></div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-16 gap-10">
          <div className="md:w-1/2 text-left order-2 md:order-1 animate-fadeUp" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Arafat</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">
              Web Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-white/80 mb-8">
              I craft responsive websites with modern technologies and work on AI-driven data science projects that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary bg-white text-primary hover:bg-white/90 hover:scale-105 header-glow"><i className="fas fa-envelope mr-2"></i> Contact Me</a>
              <a href="#about" className="btn btn-outline border-white text-white hover:bg-white/20 hover:border-white"><i className="fas fa-user mr-2"></i> About Me</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/20 backdrop-blur-sm animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-sm animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="relative z-10 rounded-full p-2 bg-gradient-to-r from-primary via-accent/50 to-secondary animate-fadeIn" style={{animationDelay: '0.4s'}}>
                <img src="/photos/photo.jpg" alt="Md. Arafatuzzaman" className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-white object-cover shadow-2xl" onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300?text=Makky';
                }}/>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl animate-bounce-slow">
                <i className="fas fa-code"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="py-6 px-8 bg-white/10 backdrop-blur-sm rounded-xl my-8 animate-fadeUp" style={{animationDelay: '0.8s'}}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <p className="text-white/90 font-medium">Tech Stack:</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <span className="text-white/80 hover:text-white transition-colors duration-300 flex items-center text-sm">
                <i className="fab fa-html5 text-xl mr-2"></i> HTML5
              </span>
              <span className="text-white/80 hover:text-white transition-colors duration-300 flex items-center text-sm">
                <i className="fab fa-css3-alt text-xl mr-2"></i> CSS3
              </span>
              <span className="text-white/80 hover:text-white transition-colors duration-300 flex items-center text-sm">
                <i className="fab fa-js text-xl mr-2"></i> JavaScript
              </span>
              <span className="text-white/80 hover:text-white transition-colors duration-300 flex items-center text-sm">
                <i className="fab fa-react text-xl mr-2"></i> React
              </span>
              <span className="text-white/80 hover:text-white transition-colors duration-300 flex items-center text-sm">
                <i className="fab fa-python text-xl mr-2"></i> Python
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg preserveAspectRatio="none" width="100%" height="50" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="fill-current text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;