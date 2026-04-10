function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-5"></div>

      <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slideInUp">
        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Sumit Kedar</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideInUp animation-delay-200 max-w-2xl">
        Full Stack Developer • React • Django • AI Enthusiast
      </p>

      <div className="flex gap-6 animate-slideInUp animation-delay-400">
        <a
          href="https://www.linkedin.com/in/sumit-kedar-742629256"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
        >
          LinkedIn
        </a>

        <button className="border-2 border-cyan-400 px-8 py-3 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transform hover:scale-105 transition-all duration-300">
          Download Resume
        </button>
      </div>

      <div className="mt-16 animate-float">
        <svg className="w-8 h-8 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  )
}

export default Hero