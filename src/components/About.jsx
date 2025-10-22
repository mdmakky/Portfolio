import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

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
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
        }
        
        .animate-in { animation: slide-up 0.8s ease-out forwards; }
        .animate-in-delay { animation: fade-in-scale 1s ease-out 0.3s forwards; }
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .orbit { animation: orbit 20s linear infinite; }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .text-shimmer {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6);
          background-size: 300% 300%;
          animation: shimmer 4s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card-hover:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>

      <section 
        id="about" 
        ref={sectionRef}
        className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/15 rounded-full blur-3xl floating" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Enhanced Particle Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white">
              About <span className="text-shimmer">Me</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto pulse-glow"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {/* Hero Card */}
            <div 
              ref={cardRef}
              className="relative mb-12 sm:mb-16 opacity-0 animate-in-delay"
            >
              <div className="glass-morphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift">
                {/* Floating Icon with Orbiting Elements */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center pulse-glow floating">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {/* Orbiting tech icons - hidden on mobile for cleaner look */}
                    <div className="hidden sm:block absolute inset-0 orbit">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">⚛️</div>
                    </div>
                    <div className="hidden sm:block absolute inset-0 orbit" style={{animationDelay: '10s'}}>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">🐍</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-blue-300">
                    My Journey
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
                    <p>
                      Hi, I'm <span className="font-bold text-blue-400">Md. Arafatuzzaman</span>. 
                      I'm a Computer Science student at Jashore University of Science and Technology.
                    </p>
                    <p>
                      I enjoy building websites and apps using <span className="font-semibold text-green-400">React</span> and <span className="font-semibold text-blue-400">Django</span>.
                    </p>
                    <p>
                      I like to use technology to solve problems and make things easier for people.
                    </p>
                  </div>
                </div>
                </div>
                </div>

                {/* Enhanced Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {[
                {
                  icon: "🎓",
                  title: "Education",
                  content: "Computer Science",
                  subtitle: "Jashore University of Science and Technology",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: "0.1s"
                },
                {
                  icon: "📍",
                  title: "Location",
                  content: "Jashore, Bangladesh",
                  subtitle: "Remote Available",
                  gradient: "from-cyan-500 to-teal-500",
                  delay: "0.2s"
                },
                {
                  icon: "💻",
                  title: "Specialization",
                  content: "Full-Stack Development",
                  subtitle: "React & Django",
                  gradient: "from-green-500 to-emerald-500",
                  delay: "0.3s"
                },
                {
                  icon: "🚀",
                  title: "Passion",
                  content: "AI & Innovation",
                  subtitle: "Future-focused",
                  gradient: "from-purple-500 to-pink-500",
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="opacity-0 animate-in card-hover"
                  style={{animationDelay: item.delay}}
                >
                  <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full">
                    <div className="text-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl pulse-glow`}>
                        {item.icon}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-sm sm:text-base text-gray-300 font-medium mb-1">{item.content}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy & Goals Section */}
            <div className="opacity-0 animate-in" style={{animationDelay: '0.6s'}}>
              <div className="glass-morphism rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                  <span className="text-shimmer">My Philosophy</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Philosophy */}
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">💡</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3 sm:mb-4">Innovation First</h5>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      I believe in pushing the boundaries of what's possible with technology. 
                      Every project is an opportunity to learn, innovate, and create something that makes a difference.
                    </p>
                  </div>

                  {/* Goals */}
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <h5 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-3 sm:mb-4">Future Goals</h5>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      To become a leading full-stack developer who specializes in AI-powered applications, 
                      contributing to projects that shape the future of technology and society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
