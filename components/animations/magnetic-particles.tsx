"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MagneticParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, color: string}>>([])
  const [magneticField, setMagneticField] = useState(false)
  
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3"]
  
  useEffect(() => {
    // Create initial particles
    const initialParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 300,
      y: Math.random() * 200,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(initialParticles)
  }, [])
  
  useEffect(() => {
    if (!magneticField) return
    
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = distance > 0 ? 50 / (distance * distance) : 0
        
        return {
          ...particle,
          vx: particle.vx + (dx / distance) * force * 0.1,
          vy: particle.vy + (dy / distance) * force * 0.1,
          x: Math.max(0, Math.min(300, particle.x + particle.vx)),
          y: Math.max(0, Math.min(200, particle.y + particle.vy))
        }
      }))
    }, 16)
    
    return () => clearInterval(interval)
  }, [mousePos, magneticField])
  
  return (
    <div 
      className="relative h-64 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }}
    >
      {/* Magnetic field visualization */}
      {magneticField && [...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/20 rounded-full"
          style={{
            width: 60 + i * 20,
            height: 60 + i * 20,
            left: mousePos.x - 30 - i * 10,
            top: mousePos.y - 30 - i * 10
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2
          }}
        />
      ))}
      
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color
          }}
          animate={{
            scale: magneticField ? [1, 1.2, 1] : 1,
            boxShadow: magneticField ? [
              `0 0 10px ${particle.color}`,
              `0 0 20px ${particle.color}`,
              `0 0 10px ${particle.color}`
            ] : []
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
      
      {/* Connection lines between particles */}
      {magneticField && particles.map((particle, i) => 
        particles.slice(i + 1).map((otherParticle, j) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          )
          
          if (distance < 80) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={particle.x + 1.5}
                y1={particle.y + 1.5}
                x2={otherParticle.x + 1.5}
                y2={otherParticle.y + 1.5}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            )
          }
          return null
        })
      )}
      
      {/* Magnetic cursor */}
      <motion.div
        className="absolute w-6 h-6 border-2 border-white/50 rounded-full pointer-events-none"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
          scale: magneticField ? [1, 1.5, 1] : 1,
          rotate: magneticField ? 360 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Control panel */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setMagneticField(!magneticField)
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            magneticField 
              ? "bg-red-500 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {magneticField ? "🧲 Stop Magnet" : "🧲 Start Magnet"}
        </motion.button>
        
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            const newParticles = [...Array(5)].map((_, i) => ({
              id: Date.now() + i,
              x: Math.random() * 300,
              y: Math.random() * 200,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              color: colors[Math.floor(Math.random() * colors.length)]
            }))
            setParticles(prev => [...prev, ...newParticles])
          }}
          className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Add Particles
        </motion.button>
      </div>
      
      {/* Particle count */}
      <div className="absolute top-4 right-4 text-white/80 text-sm">
        {particles.length} particles
      </div>
    </div>
  )
}
