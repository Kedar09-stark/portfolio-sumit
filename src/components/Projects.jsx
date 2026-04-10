function Projects() {

  const projects = [
    {
      title: "AI Recruitment System",
      desc: "AI-powered hiring platform using React, Django, NLP and Gemini API.",
      icon: "🤖",
      gradient: "from-cyan-500"
    },
    {
      title: "Food Share Platform",
      desc: "Web platform connecting hotels with NGOs to reduce food waste.",
      icon: "🍽️",
      gradient: "from-purple-500"
    },
    {
      title: "Crop Yield Prediction",
      desc: "Machine learning system predicting crop yields using weather data.",
      icon: "🌾",
      gradient: "from-pink-500"
    }
  ]

  return (
    <section id="projects" className="px-10 py-20 bg-slate-950">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-slideInUp">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden animate-slideInUp hover:shadow-xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="text-4xl mb-3">{project.icon}</div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                  {project.desc}
                </p>

                <button className="text-cyan-400 font-semibold hover:text-purple-400 transition-colors duration-300 flex items-center gap-2">
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Projects