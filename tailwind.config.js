/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Modern professional color palette
        'primary': '#1a56db', // Bold blue
        'primary-dark': '#0f3b8f',
        'primary-light': '#4d83fb',
        'secondary': '#0e9f6e', // Success green
        'accent': '#ff5a1f', // Vibrant orange for highlights
        'dark': '#111827', // Near black
        'light': '#f9fafb', // Light background
        'gray-light': '#f3f4f6',
        'gray-medium': '#9ca3af',
        'gray-dark': '#4b5563',
        
        // Original colors (renamed for compatibility)
        'header-gradient-start': '#1e3a5f', // Deeper blue
        'header-gradient-end': '#3182ce', // Slightly more saturated blue
        'accent-orange': '#ff5a1f',
        'accent-red': '#e05252',
        'accent-red-bright': '#ef4444',
        'text-primary': '#1f2937',
        'text-secondary': '#4b5563',
        'text-light': '#e5e7eb',
        'section-bg-light': '#f9fafb',
        'section-bg-lighter': '#f3f4f6',
        'section-bg-lightest': '#f1f5f9',
      },
      boxShadow: {
        'profile': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'content': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'content-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'contact': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'contact-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fadeIn': 'fadeIn 1s forwards',
        'scaleUp': 'scaleUp 0.6s ease-in-out forwards',
        'popUp': 'popUp 0.5s ease forwards',
        'fadeUp': 'fadeUp 1s ease-in-out',
        'slideUp': 'slideUp 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      transitionProperty: {
        'transform': 'transform',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transformOrigin: {
        '3d': 'perspective(500px)',
      },
      borderWidth: {
        '5': '5px',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  safelist: [
    'animate-fadeIn',
    'animate-scaleUp',
    'animate-popUp',
    'animate-fadeUp',
    'animate-slideUp',
    'animate-float',
    'animate-pulse-slow',
    'animate-bounce-slow',
    'opacity-0',
    'preserve-3d',
    'rotate-y-3',
    'rotate-x-2',
    'rotate-y-6',
    'rotate-x-3',
  ],
  plugins: [],
} 