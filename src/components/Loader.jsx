import { useState, useEffect } from 'react'

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingPhase, setLoadingPhase] = useState('initializing')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoadingPhase('complete')
          setTimeout(() => {
            setIsLoading(false)
            onComplete?.()
          }, 800)
          return 100
        }
        
        // Update loading phase based on progress
        if (prev < 30) setLoadingPhase('initializing')
        else if (prev < 60) setLoadingPhase('loading')
        else if (prev < 90) setLoadingPhase('optimizing')
        else setLoadingPhase('finalizing')
        
        return prev + 1.5
      })
    }, 25)

    return () => clearInterval(interval)
  }, [onComplete])

  if (!isLoading) return null

  const loadingMessages = {
    initializing: 'Initializing Portfolio...',
    loading: 'Loading Experience...',
    optimizing: 'Optimizing Performance...',
    finalizing: 'Almost Ready...',
    complete: 'Welcome!'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-dark via-secondary-accent to-primary-dark overflow-hidden">
      {/* Sophisticated animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-secondary-accent/20 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent-bright/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-primary-accent/15 rounded-full blur-lg animate-float animation-delay-3000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(233, 69, 96, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(233, 69, 96, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'float 30s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-8">
        {/* Profile image with sophisticated animation */}
        <div className="mb-8 relative inline-block">
          {/* Rotating rings */}
          <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 border-4 border-primary-accent/20 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-2 border-4 border-secondary-accent/20 rounded-full animate-spin animation-reverse" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-4 border-4 border-accent-bright/20 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
          </div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent rounded-full blur-2xl opacity-40 animate-pulse"></div>
          
          {/* Profile image */}
          <img 
            src="/sumit.jpeg" 
            alt="Sumit Kedar" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary-accent/50 shadow-2xl transform transition-transform duration-500 hover:scale-105"
            style={{ 
              boxShadow: '0 0 40px rgba(233, 69, 96, 0.3), 0 0 80px rgba(233, 69, 96, 0.1)' 
            }}
          />
        </div>

        {/* Name with sophisticated animation */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            SUMIT KEDAR
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full animate-pulse"></div>
        </div>

        {/* Dynamic loading message */}
        <p className="text-text-muted text-lg mb-8 font-medium animate-fadeIn">
          {loadingMessages[loadingPhase]}
        </p>

        {/* Sophisticated progress bar */}
        <div className="mb-6">
          <div className="relative h-3 bg-border-light/20 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent animate-shimmer"></div>
            
            {/* Progress fill */}
            <div 
              className="h-full bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute top-0 h-full w-2 bg-white/30 rounded-full blur-sm animate-pulse"
              style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
            ></div>
          </div>
        </div>

        {/* Progress percentage with style */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-3xl font-black text-primary-accent tabular-nums">
            {Math.round(progress)}%
          </span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-1 h-4 bg-primary-accent/40 rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  height: `${Math.random() * 16 + 8}px`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Loading indicators */}
        <div className="flex justify-center gap-3">
          {['React', 'Django', 'AI/ML'].map((tech, i) => (
            <div 
              key={tech}
              className="px-3 py-1 bg-card-bg border border-border-light rounded-full text-xs text-text-light opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary-accent/30 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary-accent/30 animate-pulse animation-delay-500"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary-accent/30 animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary-accent/30 animate-pulse animation-delay-1500"></div>
    </div>
  )
}

export default Loader
