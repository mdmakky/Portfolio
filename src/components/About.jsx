import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Off-white background */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-blue-700">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mx-auto mb-6"></div>
        </div>

        {/* About content */}
        <div className="max-w-4xl mx-auto">
          {/* Main content - Redesigned "Who I Am" card */}
          <div className="relative mb-12">
            {/* Simple, elegant card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              {/* Content container with simple padding */}
              <div className="p-8">
                {/* Title with icon */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Who I Am</h3>
                  <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="text-center">
                  <p className="text-lg text-gray-900 leading-relaxed mb-6 max-w-3xl mx-auto">
                    I am <span className="font-bold text-blue-700">Md. Arafatuzzaman</span>, a Computer Science student at Jashore University of Science and Technology,
                    specializing in web development and data science. With expertise in HTML, CSS, and JavaScript,
                    I build responsive websites that enhance user experience and business functionality.
                  </p>
                  <p className="text-lg text-gray-900 leading-relaxed mb-10 max-w-3xl mx-auto">
                    Beyond web development, I'm diving deep into Artificial Intelligence and Machine Learning
                    to apply data-driven solutions to complex challenges.
                  </p>
                </div>

                {/* Info boxes with gradient borders */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 border-t border-gray-200 pt-8">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <i className="fas fa-graduation-cap text-blue-600"></i>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">Education</h4>
                    </div>
                    <p className="text-gray-800 font-medium">Jashore University of Science and Technology</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <i className="fas fa-map-marker-alt text-blue-600"></i>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">Location</h4>
                    </div>
                    <p className="text-gray-800 font-medium">Jashore, Bangladesh</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <i className="fas fa-laptop-code text-blue-600"></i>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">Focus</h4>
                    </div>
                    <p className="text-gray-800 font-medium">Web Development & Data Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional sections (e.g., What I know, Goals) */}
          {/* Update colors similarly */}
        </div>
      </div>
    </section>
  );
};

export default About;