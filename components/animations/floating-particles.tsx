"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export function FloatingParticles() {
  const [isPlaying, setIsPlaying] = useState(true)
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
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
      
      {/* Partículas flotantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white/60 rounded-full"
          animate={isPlaying ? {
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 200 - 100],
            scale: [1, 0.5, 1],
            opacity: [0.6, 1, 0.6]
          } : {}}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%"
          }}
        />
      ))}
      
      {/* Efecto de brillo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ["-100%", "100%"]
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
