"use client"

import { useState, useMemo, memo } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

// Reducido de 15 a 8 partículas para mejor performance
const PARTICLE_COUNT = 8

export const FloatingParticles = memo(() => {
  const [isPlaying, setIsPlaying] = useState(true)
  
  // Memoizar posiciones iniciales para evitar recalcular en cada render
  const particles = useMemo(() => 
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      moveX: Math.random() * 300 - 150,
      moveY: Math.random() * 200 - 100,
      duration: 3 + Math.random() * 2,
      delay: i * 0.15
    }))
  , [])
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsPlaying(!isPlaying)
          }}
          className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {isPlaying ? "Pausar" : "Reproducir"}
        </motion.button>
      </div>
      
      {/* Partículas flotantes optimizadas */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 bg-white/60 rounded-full will-change-transform"
          animate={isPlaying ? {
            x: [0, particle.moveX],
            y: [0, particle.moveY],
            scale: [1, 0.5, 1],
            opacity: [0.6, 1, 0.6]
          } : {}}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`
          }}
        />
      ))}
      
      {/* Efecto de brillo optimizado */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent will-change-transform"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  )
})

FloatingParticles.displayName = 'FloatingParticles'
