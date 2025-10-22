import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const location = useLocation();
  
  // Handle smooth scrolling to sections
  useEffect(() => {
    // If there's a hash in the URL (e.g., #about)
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top when changing routes without a hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-section-bg-lightest text-text-primary font-sans">
      <Navigation />
      {isHomePage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 