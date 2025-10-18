"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function DNAHelix() {
  const [isSpinning, setIsSpinning] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [showBonds, setShowBonds] = useState(true)
  
  const helixPoints = 20
  const radius = 40
  const height = 120
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl overflow-hidden flex items-center justify-center">
      {/* DNA Helix */}
      <div className="relative">
        {/* Left strand */}
        {[...Array(helixPoints)].map((_, i) => {
          const angle = (i / helixPoints) * Math.PI * 4
          const x = Math.cos(angle) * radius
          const y = (i / helixPoints) * height - height / 2
          const z = Math.sin(angle) * radius
          
          return (
            <motion.div
              key={`left-${i}`}
              className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{
                left: 50 + x,
                top: 50 + y
              }}
              animate={isSpinning ? {
                rotateY: 360 * speed,
                scale: [1, 1.2, 1]
              } : {}}
              transition={{
                duration: 3 / speed,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.1
              }}
            />
          )
        })}
        
        {/* Right strand */}
        {[...Array(helixPoints)].map((_, i) => {
          const angle = (i / helixPoints) * Math.PI * 4 + Math.PI
          const x = Math.cos(angle) * radius
          const y = (i / helixPoints) * height - height / 2
          const z = Math.sin(angle) * radius
          
          return (
            <motion.div
              key={`right-${i}`}
              className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
              style={{
                left: 50 + x,
                top: 50 + y
              }}
              animate={isSpinning ? {
                rotateY: 360 * speed,
                scale: [1, 1.2, 1]
              } : {}}
              transition={{
                duration: 3 / speed,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: i * 0.1
              }}
            />
          )
        })}
        
        {/* Hydrogen bonds */}
        {showBonds && [...Array(helixPoints)].map((_, i) => {
          const leftAngle = (i / helixPoints) * Math.PI * 4
          const rightAngle = (i / helixPoints) * Math.PI * 4 + Math.PI
          const leftX = Math.cos(leftAngle) * radius
          const rightX = Math.cos(rightAngle) * radius
          const y = (i / helixPoints) * height - height / 2
          
          return (
            <motion.div
              key={`bond-${i}`}
              className="absolute w-px bg-white/60"
              style={{
                left: 50 + (leftX + rightX) / 2,
                top: 50 + y,
                height: Math.abs(rightX - leftX),
                transformOrigin: "0 0",
                transform: `rotate(${Math.atan2(rightX - leftX, 0) * 180 / Math.PI}deg)`
              }}
              animate={isSpinning ? {
                opacity: [0.3, 1, 0.3]
              } : {}}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1
              }}
            />
          )
        })}
      </div>
      
      {/* Floating molecules */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0.5, 1, 0.5],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%"
          }}
        />
      ))}
      
      {/* Control panel */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsSpinning(!isSpinning)
          }}
          className={`px-3 py-1 rounded text-sm ${
            isSpinning 
              ? "bg-red-500/50 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSpinning ? "⏸️ Pause" : "▶️ Spin"}
        </motion.button>
        
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
            setShowBonds(!showBonds)
          }}
          className={`px-3 py-1 rounded text-sm ${
            showBonds 
              ? "bg-blue-500/50 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showBonds ? "🔗 Hide Bonds" : "🔗 Show Bonds"}
        </motion.button>
      </div>
      
      {/* Speed indicator */}
      <div className="absolute top-4 right-4 text-white/80 text-sm">
        Speed: {speed.toFixed(1)}x
      </div>
    </div>
  )
}
