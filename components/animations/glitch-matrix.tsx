"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function GlitchMatrix() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [matrixText, setMatrixText] = useState("")
  
  const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
  
  useEffect(() => {
    const interval = setInterval(() => {
      let newText = ""
      for (let i = 0; i < 20; i++) {
        newText += characters[Math.floor(Math.random() * characters.length)]
      }
      setMatrixText(newText)
    }, 100)
    
    return () => clearInterval(interval)
  }, [])
  
  const triggerGlitch = () => {
    setGlitchActive(true)
    setTimeout(() => setGlitchActive(false), 2000)
  }
  
  return (
    <div className="relative h-64 bg-black rounded-2xl overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 text-green-400 font-mono text-xs leading-tight opacity-80">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, 300],
              opacity: [1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3
            }}
            style={{
              left: `${i * 6.67}%`,
              top: -20
            }}
          >
            {matrixText}
          </motion.div>
        ))}
      </div>
      
      {/* Glitch effect overlay */}
      <motion.div
        className="absolute inset-0 bg-red-500/20"
        animate={{
          opacity: glitchActive ? [0, 1, 0, 1, 0] : 0,
          x: glitchActive ? [-5, 5, -3, 3, 0] : 0
        }}
        transition={{ duration: 0.1 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-blue-500/20"
        animate={{
          opacity: glitchActive ? [0, 1, 0, 1, 0] : 0,
          x: glitchActive ? [5, -5, 3, -3, 0] : 0
        }}
        transition={{ duration: 0.1, delay: 0.05 }}
      />
      
      {/* Central content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          onClick={triggerGlitch}
          className="bg-green-500/20 backdrop-blur-sm text-green-400 px-6 py-3 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-colors font-mono"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {glitchActive ? "GLITCHING..." : "TRIGGER GLITCH"}
        </motion.button>
      </div>
      
      {/* Digital noise */}
      {glitchActive && [...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: Math.random() * 300,
            y: Math.random() * 200
          }}
          transition={{
            duration: 0.1,
            delay: Math.random() * 0.5
          }}
        />
      ))}
    </div>
  )
}

