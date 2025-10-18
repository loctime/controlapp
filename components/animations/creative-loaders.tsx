"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function CreativeLoaders() {
  const [activeLoader, setActiveLoader] = useState(0)
  
  const loaders = [
    {
      name: "Ondas de Sonido",
      component: (
        <div className="flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-12 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
              animate={{
                scaleY: [1, 0.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      )
    },
    
    {
      name: "Círculos Concéntricos",
      component: (
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-4 border-white/30 rounded-full"
              style={{
                width: 60 + i * 20,
                height: 60 + i * 20,
                left: -30 - i * 10,
                top: -30 - i * 10
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )
    },
    
    {
      name: "Partículas en Espiral",
      component: (
        <div className="relative">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              animate={{
                x: Math.cos(i * 45 * Math.PI / 180) * 40,
                y: Math.sin(i * 45 * Math.PI / 180) * 40,
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      )
    },
    
    {
      name: "Pulso de Energía",
      component: (
        <div className="relative">
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.3, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY
            }}
          />
          <motion.div
            className="absolute inset-0 w-16 h-16 border-2 border-white/50 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.3
            }}
          />
        </div>
      )
    },
    
    {
      name: "Carga de Batería",
      component: (
        <div className="relative w-20 h-12 border-2 border-white/50 rounded-sm">
          <motion.div
            className="absolute inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-sm"
            animate={{
              width: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY
            }}
          />
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-2 bg-white/50 rounded-r-sm" />
        </div>
      )
    }
  ]
  
  return (
    <div className="relative h-64 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl overflow-hidden flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLoader}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {loaders[activeLoader].component}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white text-sm font-medium">
            {loaders[activeLoader].name}
          </span>
          <span className="text-white/60 text-xs">
            {activeLoader + 1}/{loaders.length}
          </span>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation()
            setActiveLoader((activeLoader + 1) % loaders.length)
          }}
          className="w-full bg-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
        >
          Siguiente Loader
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
