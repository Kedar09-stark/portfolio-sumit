function About() {
  return (
    <section id="about" className="px-10 py-20 bg-slate-950">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 animate-slideInUp">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 animate-slideInUp shadow-lg">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I am a Computer Engineering student at MIT Academy of Engineering Pune, 
            passionate about building scalable and innovative solutions.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I have hands-on experience building full-stack applications using 
            <span className="text-cyan-400 font-semibold"> React, Django, Node.js</span> and 
            <span className="text-purple-400 font-semibold"> PostgreSQL</span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I enjoy solving real-world problems through technology and have worked on 
            <span className="text-purple-400 font-semibold"> AI-based recruitment systems</span>, 
            <span className="text-cyan-400 font-semibold"> machine learning projects</span>, and 
            <span className="text-pink-400 font-semibold"> cloud deployments using AWS</span>.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About