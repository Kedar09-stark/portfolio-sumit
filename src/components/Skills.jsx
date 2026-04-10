function Skills() {

  const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
  const backendSkills = ["Python", "Django", "Node.js", "REST APIs"]
  const dbSkills = ["MongoDB", "PostgreSQL", "Firebase"]
  const otherSkills = ["AWS", "Machine Learning", "Git", "Figma"]

  const SkillTag = ({ skill }) => (
    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer inline-block animate-slideInUp">
      {skill}
    </span>
  )

  return (
    <section id="skills" className="px-10 py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-slideInUp">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        {/* Frontend */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Frontend Development</h3>
          <div className="flex flex-wrap gap-3">
            {frontendSkills.map((skill, index) => (
              <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                <SkillTag skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Backend Development</h3>
          <div className="flex flex-wrap gap-3">
            {backendSkills.map((skill, index) => (
              <div key={index} style={{ animationDelay: `${(index + 5) * 50}ms` }}>
                <SkillTag skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-pink-400 mb-4">Database & Storage</h3>
          <div className="flex flex-wrap gap-3">
            {dbSkills.map((skill, index) => (
              <div key={index} style={{ animationDelay: `${(index + 9) * 50}ms` }}>
                <SkillTag skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">Other & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <div key={index} style={{ animationDelay: `${(index + 12) * 50}ms` }}>
                <SkillTag skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills