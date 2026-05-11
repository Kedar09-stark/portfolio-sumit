import { useState, useEffect } from 'react'
import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import ThemeToggle from "./components/ThemeToggle"
import Loader from "./components/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <ThemeProvider>
        <Loader onComplete={() => setIsLoading(false)} />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="bg-bg-primary text-text-primary min-h-screen transition-colors duration-300">
        <ThemeToggle />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App