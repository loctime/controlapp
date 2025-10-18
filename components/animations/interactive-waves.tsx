"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function InteractiveWaves() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  return (
    <div 
      className="relative h-64 bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl overflow-hidden cursor-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }}
    >
      {/* Cursor personalizado */}
      <motion.div
        className="absolute w-8 h-8 bg-white/30 rounded-full pointer-events-none z-10"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Ondas que siguen el cursor */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-white/40 rounded-full"
          animate={{
            x: mousePos.x - 50 - i * 30,
            y: mousePos.y - 50 - i * 30,
            width: 100 + i * 40,
            height: 100 + i * 40,
            opacity: [0.8, 0, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3
          }}
        />
      ))}
      
      {/* Partículas que se alejan del cursor */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white/60 rounded-full"
          animate={{
            x: mousePos.x + (Math.cos(i * 45 * Math.PI / 180) * 50),
            y: mousePos.y + (Math.sin(i * 45 * Math.PI / 180) * 50),
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1
          }}
        />
      ))}
      
      <div className="absolute bottom-4 left-4 text-white/80 text-sm">
        Mueve el cursor para ver la magia ✨
      </div>
    </div>
  )
}

