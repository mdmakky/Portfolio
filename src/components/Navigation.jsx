import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      const mobileNav = document.getElementById('mobile-nav');
      const hamburger = document.querySelector('.hamburger');
      
      if (mobileMenuOpen && mobileNav && !mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style jsx>{`
        .glass-nav {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .glass-nav.scrolled {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .nav-item:hover::after,
        .nav-item.active::after {
          width: 100%;
        }
        
        .glass-button {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <nav className={`glass-nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <span className="text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">MA</span>
                  <span className="text-white">kky</span>
                  <span className="absolute -top-1 -right-2 text-xs text-blue-400 animate-pulse">®</span>
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {isProjectsPage ? (
                <>
                  <Link to="/" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Home</Link>
                  <Link to="/#about" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">About</Link>
                  <Link to="/#skills" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Skills</Link>
                  <Link to="/projects" className="nav-item active text-white font-medium hover:text-blue-300 transition-colors duration-300">Projects</Link>
                  <Link to="/#contact" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Contact</Link>
                </>
              ) : (
                <>
                  <a href="#about" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">About</a>
                  <a href="#skills" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Skills</a>
                  <a href="#projects" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Projects</a>
                  <a href="#contact" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Contact</a>
                </>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="hamburger md:hidden glass-button rounded-lg p-3 text-white"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div 
        id="mobile-nav" 
        className={`fixed top-0 ${mobileMenuOpen ? 'left-0' : '-left-full'} w-80 h-full bg-slate-900/95 backdrop-blur-xl border-r border-white/20 transition-all duration-500 ease-in-out z-50 md:hidden`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="text-2xl font-bold text-white" onClick={toggleMobileMenu}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">MA</span>kky
            </Link>
            <button 
              className="glass-button rounded-lg p-2 text-white"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <nav className="space-y-4">
            {isProjectsPage ? (
              <>
                <Link to="/" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-home mr-2"></i> Home
                </Link>
                <Link to="/#about" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-user mr-2"></i> About
                </Link>
                <Link to="/#skills" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-code mr-2"></i> Skills
                </Link>
                <Link to="/projects" className="block glass-button rounded-xl p-4 text-white bg-white/20 hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-folder mr-2"></i> Projects
                </Link>
                <Link to="/#contact" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-envelope mr-2"></i> Contact
                </Link>
              </>
            ) : (
              <>
                <a href="#about" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-user mr-2"></i> About
                </a>
                <a href="#skills" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-code mr-2"></i> Skills
                </a>
                <a href="#projects" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-folder mr-2"></i> Projects
                </a>
                <a href="#contact" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>
                  <i className="fas fa-envelope mr-2"></i> Contact
                </a>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" 
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navigation;
