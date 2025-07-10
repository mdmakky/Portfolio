import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .bubble-float { animation: bubble-float 4s ease-in-out infinite; }
        .fade-up { animation: fade-up 0.8s ease-out forwards; }
        .fade-in { animation: fade-in 1s ease-out forwards; }
        
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
        
        .text-shimmer {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6);
          background-size: 400% 400%;
          animation: shimmer 3s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
        
        .nav-item:hover::after {
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

      <header className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl floating" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Floating Tech Bubbles - Reduced */}
        <div className="absolute inset-0 overflow-hidden">
          {['⚛️', '🐍', '🌐', '💻','🖥️','🖱️','⌨️'].map((emoji, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-20 bubble-float"
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

        {/* Navigation */}
        <nav className={`glass-nav fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <span className="text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    <span className="text-shimmer">MA</span>
                    <span className="text-white">kky</span>
                    <span className="absolute -top-1 -right-2 text-xs text-blue-400 animate-pulse">®</span>
                  </span>
                </div>
              </Link>
              
              {/* Desktop Navigation - Simplified */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">About</a>
                <a href="#skills" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Skills</a>
                <Link to="/projects" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Projects</Link>
                <a href="#contact" className="nav-item text-white font-medium hover:text-blue-300 transition-colors duration-300">Contact</a>
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

        {/* Mobile Navigation - Simplified */}
        <div 
          id="mobile-nav" 
          className={`fixed top-0 ${mobileMenuOpen ? 'left-0' : '-left-full'} w-80 h-full bg-slate-900/95 backdrop-blur-xl border-r border-white/20 transition-all duration-500 ease-in-out z-50 md:hidden`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="text-2xl font-bold text-white" onClick={toggleMobileMenu}>
                <span className="text-shimmer">MA</span>kky
              </Link>
              <button 
                className="glass-button rounded-lg p-2 text-white"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <nav className="space-y-4">
              <a href="#about" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>About</a>
              <a href="#skills" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>Skills</a>
              <Link to="/projects" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>Projects</Link>
              <a href="#contact" className="block glass-button rounded-xl p-4 text-white hover:text-blue-300 transition-colors duration-300" onClick={toggleMobileMenu}>Contact</a>
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

        {/* Hero Section - Streamlined */}
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              
              {/* Content - Focused */}
              <div className="text-center lg:text-left fade-up">
                <div className="mb-6">
                  {/* <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 font-medium text-sm border border-blue-500/30"> */}
                    {/* 👋 Welcome to my portfolio */}
                  {/* </span> */}
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  Hi, I'm <span className="text-shimmer">Arafat</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">
                  Full-Stack Developer & AI Enthusiast
                </h2>
                
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  I craft seamless digital experiences by combining modern frontend technologies with robust backend architectures, 
                  while leveraging AI and Machine Learning to build intelligent solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#contact" 
                    className="glass-button rounded-2xl px-8 py-4 text-white font-semibold hover:text-blue-300 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>Get In Touch</span>
                  </a>
                  <a 
                    href="#about" 
                    className="glass-button rounded-2xl px-8 py-4 text-white font-semibold hover:text-blue-300 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <i className="fas fa-user"></i>
                    <span>About Me</span>
                  </a>
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-end fade-in" style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm floating"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-purple-500/20 backdrop-blur-sm floating" style={{animationDelay: '1s'}}></div>
                  
                  {/* Main Image Container */}
                  <div className="relative z-10 p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl pulse-glow">
                    <img 
                      src="/photos/photo.jpg" 
                      alt="Md. Arafatuzzaman" 
                      className="w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/320x320/6366f1/ffffff?text=Makky';
                      }}
                    />
                  </div>
                  
                  {/* Floating Code Icon */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl floating">
                    <i className="fas fa-code"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
