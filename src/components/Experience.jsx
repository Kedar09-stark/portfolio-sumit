import { useState, useEffect, useRef } from 'react'

function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Markytics",
      desc: "Worked on React frontend and Django backend building scalable web applications and APIs.",
      icon: "💼",
      duration: "2023 - 2024",
      skills: ["React", "Django", "APIs", "Scalable Apps"]
    },
    {
      title: "Full Stack Developer",
      company: "DRDO (HEMRL)",
      desc: "Built an Online Photography Requisition System using JSP, Oracle Database and Apache Tomcat.",
      icon: "🏢",
      duration: "2022 - 2023",
      skills: ["JSP", "Oracle", "Apache Tomcat", "System Design"]
    }
  ]

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
    <section id="experience" className="py-20 bg-gradient-to-br from-accent-bright via-primary-dark to-accent-bright relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-accent/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-accent/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-text-light mb-12 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-accent to-secondary-accent opacity-30"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`group relative flex gap-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full opacity-30 animate-ping"></div>
                </div>

                {/* Experience card */}
                <div className="flex-1 bg-card-bg border border-border-light p-6 rounded-xl hover:bg-opacity-10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-light mb-2">{exp.title}</h3>
                      <p className="text-primary-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="text-4xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {exp.icon}
                    </div>
                  </div>

                  <p className="text-text-muted mb-4 leading-relaxed">{exp.desc}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted bg-secondary-accent/30 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills?.slice(0, 3).map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary-accent/30 rounded-full text-text-light border border-primary-accent/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience