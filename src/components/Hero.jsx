import { useState, useEffect } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-dark via-secondary-accent to-primary-dark">
      {/* Modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-accent/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-bright/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* New Hero Layout - Side by Side */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`text-left space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-primary-accent font-semibold text-lg tracking-wide animate-pulse">
                WELCOME TO MY WORLD
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-text-light leading-tight">
                Hi, I'm <br />
                <span className="name-visible">
                  SUMIT KEDAR
                </span>
              </h1>
              <p className="text-xl text-text-muted max-w-lg">
                Full Stack Developer & AI Enthusiast
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed max-w-md">
                Passionate about building innovative solutions with modern technologies. 
                Specialized in React, Django, and Machine Learning applications.
              </p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {['React', 'Django', 'Python', 'AI/ML', 'Cloud'].map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-card-bg border border-border-light rounded-full text-text-light text-sm hover:bg-primary-accent hover:border-primary-accent transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/sumit-kedar-742629256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-accent/50"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="/sumit's resume (1) (1).pdf"
                  download
                  className="px-8 py-4 border-2 border-primary-accent text-primary-accent font-semibold rounded-lg hover:bg-primary-accent hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Profile container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src="/sumit.jpeg" 
                  alt="Sumit Kedar" 
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-primary-accent/50 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-accent rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                  8M
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce animation-delay-500">
                  10+
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fadeIn ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '1000ms'}}>
          <p className="text-text-muted text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 text-primary-accent mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero