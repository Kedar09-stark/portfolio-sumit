function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Markytics",
      desc: "Worked on React frontend and Django backend building scalable web applications and APIs.",
      icon: "💼"
    },
    {
      title: "Full Stack Developer",
      company: "DRDO (HEMRL)",
      desc: "Built an Online Photography Requisition System using JSP, Oracle Database and Apache Tomcat.",
      icon: "🏢"
    }
  ]

  return (
    <section id="experience" className="px-10 py-20 bg-slate-900">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-slideInUp">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-6 rounded-lg border-l-4 border-cyan-500 hover:border-purple-500 transition-all duration-300 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">{exp.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Experience