import { useState, useEffect, useRef } from 'react'

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  const projects = [
    {
      title: "Attend AI - AI-Based Attendance System",
      desc: "AI-based attendance management system that automates student attendance using facial recognition technology with real-time web interface.",
      icon: "👤",
      gradient: "from-primary-blue",
      github: "https://github.com/Kedar09-stark/Attend-AI",
      tech: ["Django", "OpenCV", "TensorFlow", "ReactJS", "PostgreSQL", "Python", "REST API"],
      features: ["Facial Recognition", "Real-time Attendance", "Webcam Integration", "Search/Filter", "Report Export", "Student Tracking"],
      duration: "Apr 2026",
      teamSize: "1"
    },
    {
      title: "HR: TALENT ACQUISITION - AI Recruitment System",
      desc: "AI-driven recruitment platform that automates hiring using AI and NLP with intelligent resume parsing and candidate-job matching.",
      icon: "🤖",
      gradient: "from-primary-purple",
      github: "https://github.com/Kedar09-stark/Talent-HR",
      tech: ["JWT", "Python", "Django", "React.js", "NLP", "ML", "PostgreSQL", "Google Gemini API", "Firebase"],
      features: ["AI Resume Parsing", "Skill Extraction", "Candidate Matching", "Analytics Dashboard", "OTP Authentication", "AWS Integration"],
      duration: "Sep 2025 - Oct 2025",
      teamSize: "1"
    },
    {
      title: "Mealshare - Food Redistribution Platform",
      desc: "Platform connecting excess food from hotels to hunger relief efforts through mobile application with real-time notifications.",
      icon: "�️",
      gradient: "from-primary-emerald",
      github: "https://github.com/Kedar09-stark/Mealshare",
      tech: ["Django", "ReactJS", "PostgreSQL", "Web Development", "Frontend Development"],
      features: ["Food Donation System", "Location-based Matching", "Real-time Notifications", "User Accounts", "Agent Management", "Confidential Data"],
      duration: "Feb 2024 - Jun 2024",
      teamSize: "1"
    },
    {
      title: "Crop Yield Prediction Using Machine Learning",
      desc: "ML model predicting crop yields based on weather parameters, soil properties, and historical data with farmer-friendly interface.",
      icon: "🌾",
      gradient: "from-accent-gold",
      github: "https://github.com/Kedar09-stark/MahaBhoomi-crop_predictor",
      tech: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Flask/Django", "React.js", "MySQL", "Matplotlib", "Seaborn", "Plotly"],
      features: ["Weather Analysis", "Soil Property Analysis", "ML Predictions", "Data Visualization", "Farmer Dashboard", "Resource Optimization"],
      duration: "2024",
      teamSize: "4"
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
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-dark via-secondary-accent to-primary-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl"></div>

      <div ref={ref} className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-text-light mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            My Projects
          </h2>
          <p className={`text-text-muted text-lg max-w-2xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            Building innovative solutions with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`group bg-card-bg border border-border-light rounded-2xl p-8 hover:bg-opacity-10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{project.icon}</div>
                <div className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-accent/20 rounded-full flex items-center justify-center text-primary-accent hover:bg-primary-accent hover:text-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-2xl font-bold text-text-light mb-3 group-hover:text-primary-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-text-muted mb-6 leading-relaxed">
                {project.desc}
              </p>

              {/* Project Info */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-secondary-accent/30 text-text-light rounded-full text-sm">
                  📅 {project.duration}
                </span>
                <span className="px-3 py-1 bg-primary-accent/30 text-text-light rounded-full text-sm">
                  👥 {project.teamSize}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-border-light text-text-muted rounded-full text-sm hover:bg-primary-accent hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-accent font-semibold hover:text-text-light transition-colors duration-300"
              >
                View Project
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '600ms'}}>
          <a 
            href="https://github.com/Kedar09-stark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects