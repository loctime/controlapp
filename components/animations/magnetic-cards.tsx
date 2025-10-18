"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function MagneticCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const cards = [
    { title: "Card 1", color: "from-cyan-500 to-blue-600", hue: 200 },
    { title: "Card 2", color: "from-purple-500 to-pink-600", hue: 280 },
    { title: "Card 3", color: "from-green-500 to-teal-600", hue: 160 },
    { title: "Card 4", color: "from-orange-500 to-red-600", hue: 20 }
  ]
  
  return (
    <div className="grid grid-cols-2 gap-4 h-64">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={`bg-gradient-to-br ${card.color} rounded-xl p-4 cursor-pointer relative overflow-hidden`}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 50
          }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHoveredCard(i)}
          onHoverEnd={() => setHoveredCard(null)}
          style={{
            background: `linear-gradient(45deg, hsl(${card.hue}, 70%, 60%), hsl(${card.hue + 20}, 70%, 50%))`
          }}
        >
          {/* Efecto de brillo al hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: hoveredCard === i ? "100%" : "-100%" }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.div
            className="text-white font-bold relative z-10"
            animate={{
              scale: hoveredCard === i ? 1.1 : 1,
              color: hoveredCard === i ? "#ffffff" : "#e0e0e0"
            }}
          >
            {card.title}
          </motion.div>
          
          {/* Partículas que aparecen al hover */}
          {hoveredCard === i && [...Array(6)].map((_, particleIndex) => (
            <motion.div
              key={particleIndex}
              className="absolute w-1 h-1 bg-white/80 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                x: Math.cos(particleIndex * 60 * Math.PI / 180) * 30,
                y: Math.sin(particleIndex * 60 * Math.PI / 180) * 30,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: particleIndex * 0.1
              }}
              style={{
                left: "50%",
                top: "50%"
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}

