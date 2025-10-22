import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('frontend');

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

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: '⚛️',
      color: 'from-cyan-400 to-blue-500',
      description: 'Creating responsive and interactive user interfaces',
      skills: [
        { name: 'React.js', icon: '⚛️', description: 'Building dynamic user interfaces' },
        { name: 'JavaScript', icon: '🟨', description: 'Modern ES6+ development' },
        // { name: 'TypeScript', icon: '🔷', description: 'Type-safe development' },
        { name: 'HTML5/CSS3', icon: '🌐', description: 'Semantic markup and styling' },
        { name: 'TailwindCSS', icon: '🎨', description: 'Utility-first CSS framework' },
        { name: 'Responsive Design', icon: '📱', description: 'Mobile-first approach' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-green-400 to-emerald-500',
      description: 'Building robust server-side applications',
      skills: [
        { name: 'Django', icon: '🐍', description: 'Python web framework' },
        { name: 'Python', icon: '🐍', description: 'Server-side programming' },
        { name: 'REST APIs', icon: '🔗', description: 'RESTful web services' },
        { name: 'PostgreSQL', icon: '🐘', description: 'Relational database management' },
        // { name: 'MongoDB', icon: '🍃', description: 'NoSQL database solutions' },
        // { name: 'Redis', icon: '🔴', description: 'In-memory data caching' }
      ]
    },
    aiml: {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-purple-400 to-pink-500',
      description: 'Developing intelligent data-driven solutions',
      skills: [
        // { name: 'TensorFlow', icon: '🧠', description: 'Deep learning framework' },
        { name: 'PyTorch', icon: '🔥', description: 'Machine learning library' },
        { name: 'Scikit-learn', icon: '📊', description: 'Machine learning algorithms' },
        { name: 'Pandas', icon: '🐼', description: 'Data manipulation and analysis' },
        { name: 'NumPy', icon: '🔢', description: 'Numerical computing' },
        // { name: 'Data Analysis', icon: '📈', description: 'Statistical analysis and insights' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: 'from-orange-400 to-red-500',
      description: 'Essential development and productivity tools',
      skills: [
        { name: 'Git/GitHub', icon: '📚', description: 'Version control and collaboration' },
        { name: 'Docker', icon: '🐳', description: 'Containerization platform' },
        { name: 'VS Code', icon: '💻', description: 'Code editor and development' },
        { name: 'Linux', icon: '🐧', description: 'Unix-based operating systems' },
        // { name: 'Figma', icon: '🎨', description: 'UI/UX design and prototyping' },
        // { name: 'Postman', icon: '📮', description: 'API testing and development' }
      ]
    }
  };

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
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        
        @keyframes skill-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
        }
        
        .animate-in { animation: slide-up 0.8s ease-out forwards; }
        .animate-in-delay { animation: fade-in-scale 1s ease-out 0.3s forwards; }
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .bubble-float { animation: bubble-float 4s ease-in-out infinite; }
        .skill-glow { animation: skill-glow 3s ease-in-out infinite; }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .text-shimmer {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #3b82f6);
          background-size: 400% 400%;
          animation: shimmer 3s ease-in-out infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .category-tab {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .category-tab.active {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.02);
        }
        
        .category-tab:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }
        
        .skill-card {
          transition: all 0.3s ease;
        }
        
        .skill-card:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>

      <section 
        id="skills" 
        ref={sectionRef}
        className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-500/15 rounded-full blur-3xl floating" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Floating Tech Bubbles - Reduced */}
        <div className="absolute inset-0 overflow-hidden">
          {['⚛️', '🐍', '🤖', '🛠️'].map((emoji, i) => (
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

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 animate-in">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-white">
              My <span className="text-shimmer">Skills</span>
            </h2>
            <div className="w-32 sm:w-40 h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full mx-auto pulse-glow mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive technical expertise across modern development technologies, 
              from frontend interfaces to backend systems and AI-powered solutions.
            </p>
          </div>

          {/* Skills Content */}
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 opacity-0 animate-in" style={{animationDelay: '0.2s'}}>
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`category-tab glass-morphism rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 ${
                    activeCategory === key ? 'active' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.color} rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl`}>
                      {category.icon}
                    </div>
                    <div className="text-left hidden sm:block">
                      <h3 className="text-white font-semibold text-sm sm:text-base">{category.title}</h3>
                      <p className="text-white/60 text-xs sm:text-sm">{category.skills.length} technologies</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Category Skills */}
            <div className="opacity-0 animate-in-delay">
              <div className="glass-morphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift">
                {/* Category Header */}
                <div className="text-center mb-8 sm:mb-12">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 pulse-glow text-2xl sm:text-3xl`}>
                    {skillCategories[activeCategory].icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/70 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                    {skillCategories[activeCategory].description}
                  </p>
                  <div className={`w-24 sm:w-32 h-1 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full mx-auto`}></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="skill-card glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 skill-glow"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {/* Skill Header */}
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0`}>
                          {skill.icon}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-base sm:text-lg truncate">{skill.name}</h4>
                          <p className="text-white/60 text-xs sm:text-sm line-clamp-2">{skill.description}</p>
                        </div>
                      </div>

                      {/* Skill Indicator */}
                      <div className="flex items-center justify-center mt-3 sm:mt-4">
                        <div className={`w-full h-1 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full opacity-60`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Summary */}
                <div className="mt-8 sm:mt-12 text-center">
                  <div className="glass-morphism rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block">
                    <p className="text-sm sm:text-base text-white/80 mb-2">
                      <span className="font-semibold text-white">
                        {skillCategories[activeCategory].skills.length}
                      </span> technologies in {skillCategories[activeCategory].title}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full animate-pulse`}></div>
                      <span className="text-white/60 text-xs sm:text-sm">Continuously learning and improving</span>
                    </div>
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

export default Skills;
