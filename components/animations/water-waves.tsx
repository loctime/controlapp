"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function WaterWaves() {
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([])
  const [isRaining, setIsRaining] = useState(false)
  
  const createRipple = (x: number, y: number) => {
    const newRipple = {
      id: Date.now(),
      x,
      y
    }
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 2000)
  }
  
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    createRipple(
      e.clientX - rect.left,
      e.clientY - rect.top
    )
  }
  
  return (
    <div 
      className="relative h-64 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-2xl overflow-hidden cursor-crosshair"
      onClick={handleClick}
    >
      {/* Water surface */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-blue-500/50" />
      
      {/* Animated water waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-2 bg-white/20"
          style={{ top: 50 + i * 30 }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Ripples from clicks */}
      {ripples.map((ripple) => (
        <div key={ripple.id} className="absolute" style={{ left: ripple.x, top: ripple.y }}>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-white/40 rounded-full"
              style={{
                width: 20 + i * 20,
                height: 20 + i * 20,
                left: -10 - i * 10,
                top: -10 - i * 10
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 3, 0],
                opacity: [1, 0.5, 0]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Rain drops */}
      {isRaining && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-4 bg-white/60 rounded-full"
          initial={{
            x: Math.random() * 300,
            y: -10,
            opacity: 0
          }}
          animate={{
            y: [0, 250],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2
          }}
        />
      ))}
      
      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [0.5, 1, 0.5],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5
          }}
          style={{
            left: Math.random() * 100 + "%",
            bottom: Math.random() * 50 + "%"
          }}
        />
      ))}
      
      {/* Control buttons */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsRaining(!isRaining)
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            isRaining 
              ? "bg-blue-500 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRaining ? "🌧️ Stop Rain" : "🌧️ Start Rain"}
        </motion.button>
        
        <div className="flex-1 text-white/80 text-sm flex items-center">
          💧 Click para crear ondas
        </div>
      </div>
      
      {/* Water level indicator */}
      <div className="absolute top-4 right-4 text-white/80 text-sm">
        💧 {ripples.length} ondas activas
      </div>
    </div>
  )
}
