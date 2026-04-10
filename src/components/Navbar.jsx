function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-950 sticky top-0 z-50 shadow-lg border-b border-cyan-500/20 backdrop-blur-sm animate-slideInDown">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
        Sumit Kedar
      </h1>

      <ul className="flex gap-8 text-gray-300">
        {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar