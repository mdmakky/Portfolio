import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Off-white background */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's <span className="text-blue-700">Connect</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4"></div>
          <p className="text-gray-800 max-w-xl mx-auto">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row rounded-3xl shadow-xl overflow-hidden">
          {/* Left side - contact info */}
          <div className="lg:w-2/5 bg-gradient-to-br from-primary to-secondary p-10 text-white relative overflow-hidden group">
            {/* Animated background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white/40 animate-pulse-slow"></div>
              <div className="absolute bottom-40 right-10 w-24 h-24 rounded-full border border-white/30 animate-bounce-slow"></div>
              <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-white/10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-white/20 animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-white/10 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
            </div>

            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3 relative">
                    <span className="absolute inset-0 rounded-lg bg-white/20 blur-lg transform scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
                    Contact Information
                  </span>
                </h3>
                <p className="mb-10 opacity-90 transform transition-all duration-500 hover:translate-x-1">Feel free to reach out any time. I'm open to opportunities and collaboration.</p>

                {/* Contact details */}
                <div className="space-y-8">
                  <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500">
                      <i className="fas fa-map-marker-alt text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="opacity-80">Jashore, Bangladesh</p>
                      <p className="opacity-80">Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500">
                      <i className="fas fa-share-alt text-lg"></i>
                    </div>
                    <div className="w-full">
                      <h4 className="text-lg font-medium mb-3">Social Profiles</h4>
                      <div className="grid grid-cols-2 gap-4 mt-1">
                        <a href="https://github.com/mdmakky" target="_blank" rel="noopener noreferrer"
                           className="social-icon-btn group/icon touch-manipulation">
                          <span className="social-icon-bg"></span>
                          <span className="social-icon-inner">
                            <i className="fab fa-github text-xl"></i>
                          </span>
                          <span className="social-icon-label">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/mdmakky" target="_blank" rel="noopener noreferrer"
                           className="social-icon-btn group/icon touch-manipulation">
                          <span className="social-icon-bg"></span>
                          <span className="social-icon-inner">
                            <i className="fab fa-linkedin-in text-xl"></i>
                          </span>
                          <span className="social-icon-label">LinkedIn</span>
                        </a>
                        <a href="https://www.facebook.com/md.arafatuzzaman.makky" target="_blank" rel="noopener noreferrer"
                           className="social-icon-btn group/icon touch-manipulation">
                          <span className="social-icon-bg"></span>
                          <span className="social-icon-inner">
                            <i className="fab fa-facebook-f text-xl"></i>
                          </span>
                          <span className="social-icon-label">Facebook</span>
                        </a>
                        <a href="#"
                           className="social-icon-btn group/icon touch-manipulation">
                          <span className="social-icon-bg"></span>
                          <span className="social-icon-inner">
                            <i className="fab fa-twitter text-xl"></i>
                          </span>
                          <span className="social-icon-label">Twitter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="relative mt-10 hidden md:block">
                <div className="absolute bottom-0 right-0 w-40 h-40 border border-white/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-5 right-5 w-20 h-20 border border-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Right side - contact form */}
          <div className="lg:w-3/5 bg-gray-50 p-10">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Send Me a Message</h3>
            <p className="text-gray-800 mb-6">I'll get back to you as soon as possible</p>

            <form className="space-y-4 flex flex-col md:h-[410px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="form-field relative">
                  <input
                    type="text"
                    id="name"
                    className="peer h-14 w-full rounded-md bg-gray-100 px-4 pt-4 outline-none transition-all focus:border-2 focus:border-primary/50 valid:border-2 valid:border-green-400/50"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs"
                  >
                    Full Name
                  </label>
                  <div className="absolute right-4 top-4 text-gray-500">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="absolute -bottom-1 left-2 right-2 h-1 scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 peer-focus:scale-x-100"></div>
                </div>

                {/* Email Field */}
                <div className="form-field relative">
                  <input
                    type="email"
                    id="email"
                    className="peer h-14 w-full rounded-md bg-gray-100 px-4 pt-4 outline-none transition-all focus:border-2 focus:border-primary/50 valid:border-2 valid:border-green-400/50"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs"
                  >
                    Email Address
                  </label>
                  <div className="absolute right-4 top-4 text-gray-500">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="absolute -bottom-1 left-2 right-2 h-1 scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 peer-focus:scale-x-100"></div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="form-field relative">
                <input
                  type="text"
                  id="subject"
                  className="peer h-14 w-full rounded-md bg-gray-100 px-4 pt-4 outline-none transition-all focus:border-2 focus:border-primary/50"
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                >
                  Subject
                </label>
                <div className="absolute right-4 top-4 text-gray-500">
                  <i className="fas fa-tag"></i>
                </div>
                <div className="absolute -bottom-1 left-2 right-2 h-1 scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 peer-focus:scale-x-100"></div>
              </div>

              {/* Message Field */}
              <div className="form-field relative">
                <textarea
                  id="message"
                  rows="4"
                  className="peer w-full h-[100px] md:h-[120px] rounded-md bg-gray-100 px-4 pt-6 outline-none transition-all resize-none focus:border-2 focus:border-primary/50 valid:border-2 valid:border-green-400/50"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs"
                >
                  Message
                </label>
                <div className="absolute right-4 top-4 text-gray-500">
                  <i className="fas fa-comment-alt"></i>
                </div>
                <div className="absolute -bottom-1 left-2 right-2 h-1 scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 peer-focus:scale-x-100"></div>
              </div>

              {/* Submit Button */}
              <div className="group mt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary-light to-secondary px-8 py-3 font-medium text-white transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-xl active:scale-[0.98]"
                >
                  <span className="absolute bottom-0 right-0 -mb-8 -mr-8 h-20 w-20 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:scale-150"></span>
                  <span className="absolute inset-0 h-full w-full scale-0 rounded-xl backdrop-blur-xl transition-all duration-500 ease-out group-hover:scale-100 group-hover:bg-white/10"></span>
                  <span className="relative flex items-center">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;