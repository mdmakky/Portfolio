import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './input.css';

// Prevent dark mode from browser extensions
if (typeof document !== 'undefined') {
  // Set color scheme to light only
  document.documentElement.style.colorScheme = 'light';
  
  // Create a MutationObserver to prevent dark mode changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
        const html = document.documentElement;
        if (html.style.colorScheme !== 'light') {
          html.style.colorScheme = 'light';
        }
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['style', 'class']
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 