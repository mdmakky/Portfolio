import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Enhanced validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Using JSON submission instead of FormData for better compatibility
      const response = await fetch('https://formspree.io/f/xovwgvga', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Contact Form Submission',
          message: formData.message.trim()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Formspree error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus(null);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .animate-in { animation: slide-up 0.8s ease-out forwards; }
        .animate-in-delay { animation: fade-in-scale 1s ease-out 0.3s forwards; }
        .floating { animation: float 4s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .shake { animation: shake 0.5s ease-in-out; }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
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
        
        .glass-input {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          outline: none;
          transition: all 0.3s ease;
        }
        
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(99, 102, 241, 0.6);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15), 0 10px 25px rgba(99, 102, 241, 0.1);
        }
        
        .glass-input.error {
          border-color: rgba(239, 68, 68, 0.6);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
        }
        
        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .glass-button {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.6), rgba(139, 92, 246, 0.6));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .glass-button:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);
        }
        
        .glass-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .glass-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .glass-button:hover:not(:disabled)::before {
          left: 100%;
        }
        
        .social-glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .social-glass:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .success-message {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          backdrop-filter: blur(20px);
          animation: slide-up 0.5s ease-out;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          backdrop-filter: blur(20px);
          animation: slide-up 0.5s ease-out;
        }

        .feedback-message {
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
          font-weight: 500;
        }

        .loading-dots {
          display: inline-block;
        }

        .loading-dots::after {
          content: '';
          animation: loading-dots 1.5s infinite;
        }

        @keyframes loading-dots {
          0%, 20% { content: ''; }
          40% { content: '.'; }
          60% { content: '..'; }
          80%, 100% { content: '...'; }
        }
      `}</style>

      <section 
        id="contact" 
        ref={sectionRef}
        className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
              Let's <span className="text-shimmer">Connect</span>
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto pulse-glow mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              
              {/* Contact Info Side */}
              <div className="opacity-0 animate-in" style={{animationDelay: '0.2s'}}>
                <div className="glass-morphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift h-full">
                  {/* Contact Header */}
                  <div className="text-center mb-8 sm:mb-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center pulse-glow mx-auto mb-4 sm:mb-6">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Get In Touch</h3>
                    <p className="text-sm sm:text-base text-white/70">Let's discuss your next project</p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Location</h4>
                        <p className="text-sm sm:text-base text-gray-300">Jashore, Bangladesh</p>
                        <p className="text-xs sm:text-sm text-gray-400">Available for remote work worldwide</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Email</h4>
                        <p className="text-sm sm:text-base text-gray-300 break-all">makky.cse@example.com</p>
                        <p className="text-xs sm:text-sm text-gray-400">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Availability</h4>
                        <p className="text-sm sm:text-base text-gray-300">Saturday - Thursday, 10 AM - 8 PM</p>
                        <p className="text-xs sm:text-sm text-gray-400">GMT+6 Timezone</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">Connect With Me</h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/mdmakky' },
                        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/md-amakky' },
                        { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/md.arafatuzzaman.makky' },
                        { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:makky.cse@example.com' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target={social.url.startsWith('http') ? '_blank' : '_self'}
                          rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="social-glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center text-white group"
                        >
                          <i className={`${social.icon} text-xl sm:text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300`}></i>
                          <span className="text-xs sm:text-sm font-medium">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Side */}
              <div ref={formRef} className="opacity-0 animate-in-delay">
                <div className="glass-morphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift h-full">
                  <div className="mb-6 sm:mb-8">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center pulse-glow mx-auto mb-4 sm:mb-6">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                        Send Me a <span className="text-shimmer">Message</span>
                      </h3>
                      <p className="text-sm sm:text-base text-white/70">Share your thoughts or questions below</p>
                    </div>
                  </div>

                  {/* Enhanced Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="success-message feedback-message">
                      <div className="flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-300 font-bold text-lg">✅ Message Sent Successfully!</span>
                      </div>
                      <p className="text-green-200 text-sm mb-2">Your message has been delivered to my inbox.</p>
                      <p className="text-green-200 text-sm">I'll get back to you within 24 hours. Thank you for reaching out!</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="error-message feedback-message">
                      <div className="flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-300 font-bold text-lg">❌ Failed to Send Message</span>
                      </div>
                      <p className="text-red-200 text-sm mb-2">Please check your input and try again.</p>
                      <p className="text-red-200 text-sm">Or contact me directly at arafat@example.com</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="relative group">
                        <label className="block text-white/90 text-xs sm:text-sm font-medium mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`glass-input w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder-white/60 ${
                            submitStatus === 'error' && !formData.name.trim() ? 'error shake' : ''
                          }`}
                          placeholder="Your name..."
                          required
                        />
                      </div>

                      <div className="relative group">
                        <label className="block text-white/90 text-xs sm:text-sm font-medium mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`glass-input w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder-white/60 ${
                            submitStatus === 'error' && !formData.email.trim() ? 'error shake' : ''
                          }`}
                          placeholder="your.email@domain.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative group">
                      <label className="block text-white/90 text-xs sm:text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="glass-input w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder-white/60"
                        placeholder="What's this about?"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <label className="block text-white/90 text-xs sm:text-sm font-medium mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        className={`glass-input w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder-white/60 resize-none ${
                          submitStatus === 'error' && !formData.message.trim() ? 'error shake' : ''
                        }`}
                        placeholder="Tell me about your project, goals, and how I can help..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="glass-button w-full py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl text-white font-semibold text-base sm:text-lg group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 sm:h-6 sm:w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="loading-dots">Sending Message</span>
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
