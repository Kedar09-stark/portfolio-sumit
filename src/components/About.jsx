import { useState, useEffect, useRef } from 'react'

function About() {
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

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary-accent via-primary-dark to-secondary-accent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-text-light mb-12 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          About Me
        </h2>

        <div className={`bg-card-bg border border-border-light rounded-2xl p-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-text-light text-lg leading-relaxed">
                I am a Computer Engineering student at MIT Academy of Engineering Pune, 
                passionate about building scalable and innovative solutions.
              </p>

              <p className="text-text-muted text-lg leading-relaxed">
                I have hands-on experience building full-stack applications using 
                <span className="text-primary-accent font-semibold"> React</span>, 
                <span className="text-primary-accent font-semibold"> Django</span>, 
                <span className="text-primary-accent font-semibold"> Node.js</span> and 
                <span className="text-primary-accent font-semibold"> PostgreSQL</span>.
              </p>

              <p className="text-text-muted text-lg leading-relaxed">
                I enjoy solving real-world problems through technology and have worked on 
                AI-based recruitment systems, machine learning projects, and cloud deployments.
              </p>
            </div>

            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full blur-xl opacity-50"></div>
                <img 
                  src="/sumit.jpeg" 
                  alt="Sumit Kedar" 
                  className="relative w-64 h-64 rounded-full object-cover border-4 border-primary-accent/50 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About