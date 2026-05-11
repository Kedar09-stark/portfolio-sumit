import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    console.log('Navigating to:', targetId) // Debug log
    const element = document.getElementById(targetId)
    if (element) {
      console.log('Element found:', element) // Debug log
      // Calculate offset for fixed navbar
      const navbarHeight = 80
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    } else {
      console.log('Element not found:', targetId) // Debug log
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-bg-card/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/sumit.jpeg" 
                alt="Sumit Kedar" 
                className="w-10 h-10 rounded-full object-cover border-2 border-primary-accent/50 transition-all duration-300 hover:border-primary-accent hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-text-primary">Sumit Kedar</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={`text-text-secondary hover:text-primary-accent transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  scrolled ? 'text-text-secondary' : 'text-text-primary'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-text-primary hover:text-primary-accent transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar