"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Electricity() {
  const [isActive, setIsActive] = useState(false)
  const [lightning, setLightning] = useState<Array<{id: number, path: Array<{x: number, y: number}>}>>([])
  
  const generateLightning = () => {
    const newLightning = {
      id: Date.now(),
      path: generateLightningPath()
    }
    setLightning(prev => [...prev, newLightning])
    
    setTimeout(() => {
      setLightning(prev => prev.filter(l => l.id !== newLightning.id))
    }, 1000)
  }
  
  const generateLightningPath = () => {
    const path = []
    const startX = Math.random() * 200 + 50
    const startY = 20
    const endX = Math.random() * 200 + 50
    const endY = 200
    
    let currentX = startX
    let currentY = startY
    
    while (currentY < endY) {
      path.push({ x: currentX, y: currentY })
      currentX += (Math.random() - 0.5) * 40
      currentY += Math.random() * 20 + 10
    }
    
    path.push({ x: endX, y: endY })
    return path
  }
  
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(generateLightning, 200)
      return () => clearInterval(interval)
    }
  }, [isActive])
  
  return (
    <div className="relative h-64 bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden">
      {/* Electric field background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        animate={{
          opacity: isActive ? [0.3, 0.8, 0.3] : 0.1
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Lightning bolts */}
      {lightning.map((bolt) => (
        <motion.div key={bolt.id} className="absolute">
          {bolt.path.slice(0, -1).map((point, i) => {
            const nextPoint = bolt.path[i + 1]
            if (!nextPoint) return null
            
            const length = Math.sqrt(
              Math.pow(nextPoint.x - point.x, 2) + 
              Math.pow(nextPoint.y - point.y, 2)
            )
            const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI
            
            return (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  width: length,
                  height: 2,
                  left: point.x,
                  top: point.y,
                  transformOrigin: "0 50%",
                  transform: `rotate(${angle}deg)`
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0]
                }}
                transition={{ duration: 0.1, delay: i * 0.02 }}
              />
            )
          })}
        </motion.div>
      ))}
      
      {/* Electric sparks */}
      {isActive && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * 300,
            y: Math.random() * 200,
            opacity: 0
          }}
          animate={{
            x: Math.random() * 300,
            y: Math.random() * 200,
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 0.3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 0.5
          }}
        />
      ))}
      
      {/* Electric field lines */}
      {isActive && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          style={{ top: 30 + i * 20 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1
          }}
        />
      ))}
      
      {/* Control button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            setIsActive(!isActive)
          }}
          className={`px-6 py-3 rounded-full font-bold transition-all ${
            isActive 
              ? "bg-cyan-500 text-black hover:bg-cyan-400" 
              : "bg-slate-700 text-cyan-400 hover:bg-slate-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isActive ? { 
            boxShadow: [
              "0 0 20px #06b6d4",
              "0 0 40px #06b6d4", 
              "0 0 20px #06b6d4"
            ]
          } : {}}
        >
          {isActive ? "⚡ STOP ELECTRICITY" : "⚡ START ELECTRICITY"}
        </motion.button>
      </div>
      
      {/* Energy level indicator */}
      <div className="absolute top-4 right-4 text-cyan-400 text-sm font-mono">
        {isActive ? "ENERGY: HIGH" : "ENERGY: LOW"}
      </div>
    </div>
  )
}
