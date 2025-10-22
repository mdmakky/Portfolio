import React from 'react';

const Header = () => {
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

      <header className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
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

        {/* Hero Section - Streamlined */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 pt-24">
          <div className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
              
              {/* Profile Image - Shows first on mobile */}
              <div className="flex justify-center lg:justify-end fade-in order-1 lg:order-2" style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-blue-500/20 backdrop-blur-sm floating"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-purple-500/20 backdrop-blur-sm floating" style={{animationDelay: '1s'}}></div>
                  
                  {/* Main Image Container */}
                  <div className="relative z-10 p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl pulse-glow">
                    <img 
                      src="/photos/photo.jpg" 
                      alt="Md. Arafatuzzaman - Full-Stack Developer" 
                      className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl object-cover"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                      width="320"
                      height="320"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"><rect width="320" height="320" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial">Makky</text></svg>';
                      }}
                    />
                  </div>
                  
                  {/* Floating Code Icon */}
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl lg:text-2xl floating shadow-lg">
                    <i className="fas fa-code"></i>
                  </div>
                </div>
              </div>
              
              {/* Content - Shows second on mobile */}
              <div className="text-center lg:text-left fade-up order-2 lg:order-1 space-y-4 lg:space-y-6">
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm <span className="text-shimmer">Arafat</span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">
                  Full-Stack Developer & AI Enthusiast
                </h2>
                
                <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                  I craft seamless digital experiences by combining modern frontend technologies with robust backend architectures, 
                  while leveraging AI and Machine Learning to build intelligent solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-2 lg:pt-4 px-4 lg:px-0">
                  <a 
                    href="#contact" 
                    className="glass-button rounded-2xl px-6 py-3 lg:px-8 lg:py-4 text-white font-semibold hover:text-blue-300 transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>Get In Touch</span>
                  </a>
                  <a 
                    href="#about" 
                    className="glass-button rounded-2xl px-6 py-3 lg:px-8 lg:py-4 text-white font-semibold hover:text-blue-300 transition-all duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
                  >
                    <i className="fas fa-user"></i>
                    <span>About Me</span>
                  </a>
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
