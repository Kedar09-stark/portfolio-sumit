import { useState, useEffect, useRef } from 'react'

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  const backendSkills = ["Python", "Django", "Node.js", "REST APIs"]
  const dbSkills = ["MongoDB", "PostgreSQL", "Firebase"]
  const otherSkills = ["AWS", "Machine Learning", "Git", "Figma"]

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

  const SkillTag = ({ skill, index, color }) => (
    <div 
      className={`px-4 py-2 rounded-full bg-gradient-to-r ${color} border border-opacity-40 text-white hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
      style={{
        animationDelay: `${index * 100}ms`,
        animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white opacity-60 animate-pulse"></span>
        {skill}
      </span>
    </div>
  )

  return (
    <section id="skills" className="modern-section bg-bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-cyan/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      <div ref={ref} className="modern-container p-12 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, index) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    index={index} 
                    color="from-purple-500/20 to-pink-500/20"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </span>
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, index) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    index={index + 5} 
                    color="from-cyan-500/20 to-blue-500/20"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Database */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{transitionDelay: '600ms'}}>
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-pink-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </span>
                Database & Storage
              </h3>
              <div className="flex flex-wrap gap-3">
                {dbSkills.map((skill, index) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    index={index + 9} 
                    color="from-pink-500/20 to-rose-500/20"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Other */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{transitionDelay: '800ms'}}>
            <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-indigo-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>
                Other & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {otherSkills.map((skill, index) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    index={index + 12} 
                    color="from-indigo-500/20 to-purple-500/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills