"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function Fireworks() {
  const [fireworks, setFireworks] = useState<Array<{id: number, x: number, y: number, color: string}>>([])
  const [isLaunching, setIsLaunching] = useState(false)
  
  const colors = [
    "from-red-500 to-pink-500",
    "from-blue-500 to-cyan-500", 
    "from-yellow-500 to-orange-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-indigo-500 to-blue-500"
  ]
  
  const launchFirework = () => {
    if (isLaunching) return
    
    setIsLaunching(true)
    const newFirework = {
      id: Date.now(),
      x: Math.random() * 280 + 10,
      y: Math.random() * 200 + 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    }
    
    setFireworks(prev => [...prev, newFirework])
    
    setTimeout(() => {
      setFireworks(prev => prev.filter(f => f.id !== newFirework.id))
      setIsLaunching(false)
    }, 3000)
  }
  
  return (
    <div className="relative h-64 bg-gradient-to-b from-slate-900 to-black rounded-2xl overflow-hidden">
      {/* Stars background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%"
          }}
        />
      ))}
      
      {/* Fireworks */}
      {fireworks.map((firework) => (
        <div key={firework.id} className="absolute" style={{ left: firework.x, top: firework.y }}>
          {/* Main explosion */}
          <motion.div
            className={`w-4 h-4 bg-gradient-to-r ${firework.color} rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 2, 0] }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Particle explosion */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${firework.color} rounded-full`}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos(i * 30 * Math.PI / 180) * 60,
                y: Math.sin(i * 30 * Math.PI / 180) * 60
              }}
              transition={{
                duration: 1.5,
                delay: 0.2
              }}
            />
          ))}
          
          {/* Secondary particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`secondary-${i}`}
              className={`absolute w-1 h-1 bg-gradient-to-r ${firework.color} rounded-full`}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos(i * 45 * Math.PI / 180) * 40,
                y: Math.sin(i * 45 * Math.PI / 180) * 40
              }}
              transition={{
                duration: 2,
                delay: 0.4
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Launch button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            launchFirework()
          }}
          disabled={isLaunching}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isLaunching ? { scale: [1, 1.1, 1] } : {}}
        >
          {isLaunching ? "🚀 LAUNCHING..." : "🎆 LAUNCH FIREWORK"}
        </motion.button>
      </div>
      
      {/* Smoke trails */}
      {fireworks.map((firework) => (
        <motion.div
          key={`smoke-${firework.id}`}
          className="absolute w-2 h-20 bg-white/20 rounded-full"
          style={{ left: firework.x + 2, top: firework.y + 4 }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scaleY: [0, 1, 0],
            y: [-20, 0, 20]
          }}
          transition={{ duration: 2 }}
        />
      ))}
    </div>
  )
}
