import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Off-white background */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            My <span className="text-blue-700">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-800 max-w-2xl mx-auto">
            I've developed a diverse set of skills to create impactful digital experiences and solve complex problems with technology and data.
          </p>
        </div>

        {/* New Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Skills categories sidebar */}
          <div className="col-span-1">
            <div className="sticky top-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Skill Categories</h3>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mr-3">
                        <i className="fas fa-code text-primary"></i>
                      </div>
                      <h4 className="font-bold text-primary">Frontend Development</h4>
                    </div>
                    <p className="text-sm text-gray-800 ml-13">Creating responsive and interactive user interfaces</p>
                  </div>

                  <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mr-3">
                        <i className="fas fa-brain text-secondary"></i>
                      </div>
                      <h4 className="font-bold text-secondary">Machine Learning</h4>
                    </div>
                    <p className="text-sm text-gray-800 ml-13">Building models that learn from data to solve problems</p>
                  </div>

                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mr-3">
                        <i className="fas fa-tools text-accent"></i>
                      </div>
                      <h4 className="font-bold text-accent">Tools & Technologies</h4>
                    </div>
                    <p className="text-sm text-gray-800 ml-13">Leveraging modern tools to optimize development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills details */}
          <div className="col-span-3">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              {/* Frontend Development */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center mr-4 shadow-md shadow-primary/20">
                    <i className="fas fa-code text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Frontend Development</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fab fa-html5 text-primary mr-2"></i> HTML5/CSS3
                        </span>
                        <span className="text-primary font-bold">90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fab fa-js text-primary mr-2"></i> JavaScript
                        </span>
                        <span className="text-primary font-bold">85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fab fa-react text-primary mr-2"></i> React.js
                        </span>
                        <span className="text-primary font-bold">80%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fas fa-mobile-alt text-primary mr-2"></i> Responsive Design
                        </span>
                        <span className="text-primary font-bold">90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Machine Learning */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary to-secondary/60 flex items-center justify-center mr-4 shadow-md shadow-secondary/20">
                    <i className="fas fa-brain text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Machine Learning & Data Science</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fab fa-python text-secondary mr-2"></i> Python
                        </span>
                        <span className="text-secondary font-bold">85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fas fa-chart-bar text-secondary mr-2"></i> Data Analysis
                        </span>
                        <span className="text-secondary font-bold">80%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fas fa-robot text-secondary mr-2"></i> ML Algorithms
                        </span>
                        <span className="text-secondary font-bold">75%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fas fa-network-wired text-secondary mr-2"></i> Deep Learning
                        </span>
                        <span className="text-secondary font-bold">60%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-secondary-light rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-accent/60 flex items-center justify-center mr-4 shadow-md shadow-accent/20">
                    <i className="fas fa-tools text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tools & Technologies</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fab fa-git-alt text-accent mr-2"></i> Git/GitHub
                        </span>
                        <span className="text-accent font-bold">85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fas fa-database text-accent mr-2"></i> SQL/Databases
                        </span>
                        <span className="text-accent font-bold">70%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fab fa-css3-alt text-accent mr-2"></i> TailwindCSS
                        </span>
                        <span className="text-accent font-bold">90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 font-medium flex items-center">
                          <i className="fas fa-terminal text-accent mr-2"></i> Command Line
                        </span>
                        <span className="text-accent font-bold">80%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;