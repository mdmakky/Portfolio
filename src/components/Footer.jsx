import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-header-gradient-start via-primary to-header-gradient-end py-12 text-white relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg preserveAspectRatio="none" width="100%" height="50" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="fill-current text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="w-11/12 max-w-screen-xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About column */}
          <div>
            <Link to="/" className="text-white text-3xl font-bold block mb-4">
              <span className="text-accent">MA</span>kky
            </Link>
            <p className="text-white/80 mb-6">
              A passionate web developer and AI enthusiast creating modern and functional applications to solve real-world problems.
            </p>
            <div className="flex items-center gap-3">
              <a href="mailto:mdamakky@gmail.com" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110" aria-label="Email">
                <i className="fas fa-envelope text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/md-amakky/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="https://github.com/mdmakky" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110" aria-label="GitHub">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="https://www.facebook.com/md.arafatuzzaman.makky" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i> About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i> Skills
                </a>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i> Projects
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <i className="fas fa-chevron-right text-xs"></i> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope-open-text mt-1 text-accent"></i>
                <span className="text-white/80">mdamakky@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-accent"></i>
                <span className="text-white/80">Jashore University of Science and Technology, Bangladesh</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-code-branch mt-1 text-accent"></i>
                <span className="text-white/80">Available for freelance projects</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/70 mb-4 md:mb-0">&copy; {currentYear} Md. Arafatuzzaman | All rights reserved</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-white/70 text-sm">Made with</span>
            <div className="flex items-center gap-3">
              <span className="text-white/80 flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-md">
                <i className="fab fa-html5"></i> HTML5
              </span>
              <span className="text-white/80 flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-md">
                <i className="fab fa-css3-alt"></i> CSS3
              </span>
              <span className="text-white/80 flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-md">
                <i className="fab fa-js"></i> JS
              </span>
              <span className="text-white/80 flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-md">
                <i className="fab fa-react"></i> React
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;