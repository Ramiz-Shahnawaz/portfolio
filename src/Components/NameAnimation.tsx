import React from 'react'

interface NameAnimationProps {
    name: String;
    zoom?: Boolean;
}

const NameAnimation: React.FC<NameAnimationProps> = ({ name, zoom = false }) => {
  return (
   <h1 className={`heading inline-block text-white text-6xl md:text-9xl font-bold animate-fadeIn animate-duration-1000 animate-fill-forwards ${zoom ? 'animate-zoomIn animate-duration-600 animate-fill-forwards' : ''}`}>
    {name.split(' ').map((word, wordIndex) => (
      <span key={`word-${wordIndex}`} className="inline-block">
        {word.split('').map((letter, letterIndex) => (
          <span 
            key={`${wordIndex}-${letterIndex}`} 
            className="inline-block opacity-0 scale-0 animate-letterPop"
            style={{ 
              animationDelay: `${(wordIndex * word.length + letterIndex) * 0.3}s`, 
              animationDuration: '0.5s', 
              animationFillMode: 'forwards'
            }}
          >
            {letter}
          </span>
        ))}
        {wordIndex < name.split(' ').length - 1 && (
          <span className="inline-block">&nbsp;</span>
        )}
      </span>
    ))}
   </h1>
  )
}

export default NameAnimation