"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function HypnoticVortex() {
  const [speed, setSpeed] = useState(1)
  const [isHypnotized, setIsHypnotized] = useState(false)
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl overflow-hidden">
      {/* Outer vortex rings */}
      {[...Array(5)].map((_, ringIndex) => (
        <motion.div
          key={ringIndex}
          className="absolute border-2 border-white/20 rounded-full"
          style={{
            width: 200 - ringIndex * 30,
            height: 200 - ringIndex * 30,
            left: 50 + ringIndex * 15,
            top: 50 + ringIndex * 15
          }}
          animate={{
            rotate: 360 * speed,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Inner spiral particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/60 rounded-full"
          animate={{
            x: Math.cos(i * 18 * Math.PI / 180) * (50 + i * 3),
            y: Math.sin(i * 18 * Math.PI / 180) * (50 + i * 3),
            rotate: 360 * speed,
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: i * 0.1
          }}
          style={{
            left: "50%",
            top: "50%",
            transformOrigin: "0 0"
          }}
        />
      ))}
      
      {/* Central pulsing core */}
      <motion.div
        className="absolute w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
          rotate: 360 * speed
        }}
        transition={{
          duration: 2 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      />
      
      {/* Hypnotic waves */}
      {isHypnotized && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50
          }}
          animate={{
            scale: [0, 2, 0],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5
          }}
        />
      ))}
      
      {/* Control panel */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setSpeed(Math.max(0.1, speed - 0.2))
          }}
          className="bg-white/20 text-white px-3 py-1 rounded text-sm hover:bg-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⏪ Slower
        </motion.button>
        
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setSpeed(Math.min(3, speed + 0.2))
          }}
          className="bg-white/20 text-white px-3 py-1 rounded text-sm hover:bg-white/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⏩ Faster
        </motion.button>
        
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsHypnotized(!isHypnotized)
          }}
          className={`px-3 py-1 rounded text-sm ${
            isHypnotized 
              ? "bg-red-500/50 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isHypnotized ? "😵 Stop Hypnosis" : "🌀 Hypnotize"}
        </motion.button>
      </div>
      
      {/* Speed indicator */}
      <div className="absolute top-4 right-4 text-white/80 text-sm">
        Speed: {speed.toFixed(1)}x
      </div>
    </div>
  )
}
