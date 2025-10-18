"use client"

import { motion } from "framer-motion"

export function AnimatedGradients() {
  return (
    <div className="relative h-64 bg-gradient-to-br from-pink-900 to-rose-900 rounded-2xl overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
            "linear-gradient(45deg, #96ceb4, #feca57, #ff9ff3)",
            "linear-gradient(45deg, #a8edea, #fed6e3, #d299c2)",
            "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h3
          className="text-white text-2xl font-bold text-center"
          animate={{ 
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 40px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          Gradientes Animados
        </motion.h3>
      </div>
      
      {/* Efecto de partículas flotantes sobre el gradiente */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%"
          }}
        />
      ))}
      
      {/* Efecto de ondas */}
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

