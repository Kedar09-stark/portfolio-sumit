import { useState, useEffect, useRef } from 'react'

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const handleProjectClick = () => {
    window.location.href = 'mailto:sumit.kedar@mitaoe.ac.in?subject=Project%20Inquiry&body=Hi%20Sumit,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.'
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary-accent via-primary-dark to-secondary-accent text-center relative overflow-hidden">
      {/* Modern background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-accent/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-text-light mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Let's Connect
        </h2>

        <p className={`text-lg text-text-muted mb-12 max-w-2xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className={`grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
          <a 
            href="mailto:sumit.kedar@mitaoe.ac.in"
            className="group bg-card-bg border border-border-light p-6 rounded-xl hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-accent/20 rounded-full flex items-center justify-center group-hover:bg-primary-accent transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-text-light font-semibold">Email</p>
                <p className="text-text-muted text-sm">sumit.kedar@mitaoe.ac.in</p>
              </div>
            </div>
          </a>

          <a 
            href="tel:+917410148217"
            className="group bg-card-bg border border-border-light p-6 rounded-xl hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary-accent/30 rounded-full flex items-center justify-center group-hover:bg-secondary-accent transition-colors duration-300">
                <svg className="w-6 h-6 text-text-light group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-text-light font-semibold">Phone</p>
                <p className="text-text-muted text-sm">+91 7410148217</p>
              </div>
            </div>
          </a>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '600ms'}}>
          <a
            href="https://www.linkedin.com/in/sumit-kedar-742629256"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-accent/50 flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>

          <button 
            onClick={handleProjectClick}
            className="px-8 py-4 border-2 border-primary-accent text-primary-accent font-semibold rounded-lg hover:bg-primary-accent hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start a Project
          </button>
        </div>

        {/* Social links */}
        <div className={`mt-12 flex justify-center gap-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '800ms'}}>
          {[
            { name: 'GitHub', url: 'https://github.com/Kedar09-stark', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card-bg border border-border-light rounded-full flex items-center justify-center hover:bg-primary-accent hover:border-primary-accent transition-all duration-300 hover:scale-110 group"
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <svg className="w-5 h-5 text-text-muted group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact