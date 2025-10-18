"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function MorphingShapes() {
  const [shape, setShape] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const shapes = [
    { borderRadius: "50%", rotate: 0, color: "from-yellow-400 to-orange-500" },
    { borderRadius: "20%", rotate: 45, color: "from-pink-400 to-red-500" },
    { borderRadius: "0%", rotate: 90, color: "from-blue-400 to-purple-500" },
    { borderRadius: "30%", rotate: 180, color: "from-green-400 to-teal-500" },
    { borderRadius: "50% 0% 50% 0%", rotate: 270, color: "from-indigo-400 to-pink-500" }
  ]
  
  const handleShapeChange = () => {
    setIsAnimating(true)
    setShape((shape + 1) % shapes.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl overflow-hidden flex items-center justify-center">
      <motion.div
        className={`w-32 h-32 bg-gradient-to-br ${shapes[shape].color} cursor-pointer`}
        animate={{
          borderRadius: shapes[shape].borderRadius,
          rotate: shapes[shape].rotate,
          scale: isAnimating ? [1, 1.3, 1] : 1,
          x: isAnimating ? [0, 10, -10, 0] : 0
        }}
        transition={{ 
          duration: 1, 
          ease: "easeInOut",
          scale: { duration: 0.6 },
          x: { duration: 0.8 }
        }}
        onClick={(e) => {
          e.stopPropagation()
          handleShapeChange()
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      
      {/* Efectos de partículas al cambiar */}
      {isAnimating && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-white/80 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            x: Math.cos(i * 60 * Math.PI / 180) * 100,
            y: Math.sin(i * 60 * Math.PI / 180) * 100,
            scale: [0, 1, 0],
            opacity: [1, 1, 0]
          }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}
      
      <div className="absolute bottom-4 left-4 text-white/80 text-sm">
        Click para transformar 🔄
      </div>
      
      <div className="absolute top-4 right-4 text-white/60 text-xs">
        Forma {shape + 1}/5
      </div>
    </div>
  )
}
