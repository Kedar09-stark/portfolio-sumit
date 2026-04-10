function Contact() {
  return (
    <section id="contact" className="px-10 py-20 bg-slate-950 text-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-slate-950 -z-10"></div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slideInUp">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <p className="text-lg text-gray-300 mb-12 animate-slideInUp animation-delay-200">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="space-y-4 mb-12">
          <div className="group animate-slideInUp animation-delay-400">
            <a 
              href="mailto:sumit.kedar@mitaoe.ac.in"
              className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <span className="text-2xl">✉️</span> sumit.kedar@mitaoe.ac.in
            </a>
          </div>

          <div className="group animate-slideInUp animation-delay-500">
            <a 
              href="tel:+917410148217"
              className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <span className="text-2xl">📞</span> +91 7410148217
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp animation-delay-600">
          <a
            href="https://www.linkedin.com/in/sumit-kedar-742629256"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>LinkedIn</span> →
          </a>

          <button className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 px-8 py-3 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transform hover:scale-105 transition-all duration-300">
            <span>Start a Project</span> 🚀
          </button>
        </div>
      </div>

    </section>
  )
}

export default Contact