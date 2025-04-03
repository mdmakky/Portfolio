import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="bg-section-bg-lightest">
      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage; 