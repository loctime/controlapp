"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function LiquidMorphing() {
  const [morphing, setMorphing] = useState(false)
  const [liquidShape, setLiquidShape] = useState(0)
  
  const shapes = [
    { borderRadius: "50% 20% 50% 20%" },
    { borderRadius: "20% 50% 20% 50%" },
    { borderRadius: "30% 70% 30% 70%" },
    { borderRadius: "70% 30% 70% 30%" },
    { borderRadius: "40% 60% 40% 60%" }
  ]
  
  const startMorphing = () => {
    setMorphing(true)
    setTimeout(() => {
      setLiquidShape((liquidShape + 1) % shapes.length)
      setMorphing(false)
    }, 1000)
  }
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Liquid blob */}
      <motion.div
        className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 relative"
        animate={{
          borderRadius: shapes[liquidShape].borderRadius,
          scale: morphing ? [1, 1.2, 1] : 1,
          rotate: morphing ? [0, 180, 360] : 0
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        onClick={(e) => {
          e.stopPropagation()
          startMorphing()
        }}
        style={{ cursor: "pointer" }}
      >
        {/* Liquid surface ripples */}
        {morphing && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-white/40 rounded-full"
            style={{
              width: 20 + i * 10,
              height: 20 + i * 10,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 3, 0],
              opacity: [1, 0, 0]
            }}
            transition={{
              duration: 1,
              delay: i * 0.1
            }}
          />
        ))}
      </motion.div>
      
      {/* Floating droplets */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-300/60 rounded-full"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [0.5, 1, 0.5],
            opacity: [0.6, 1, 0.6]
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
      
      {/* Liquid trails */}
      {morphing && [...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-20 bg-gradient-to-t from-cyan-400 to-transparent rounded-full"
          initial={{
            x: 80 + i * 20,
            y: 100,
            rotate: Math.random() * 30 - 15
          }}
          animate={{
            y: [100, 50, 0],
            opacity: [1, 0.5, 0],
            scale: [1, 0.5, 0]
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2
          }}
        />
      ))}
      
      {/* Control text */}
      <div className="absolute bottom-4 left-4 text-white/80 text-sm">
        Click para morphing líquido 💧
      </div>
      
      <div className="absolute top-4 right-4 text-white/60 text-xs">
        Forma {liquidShape + 1}/5
      </div>
    </div>
  )
}
