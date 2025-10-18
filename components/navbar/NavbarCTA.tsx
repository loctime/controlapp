"use client"

import { motion } from "framer-motion"
import { memo } from "react"

export const NavbarCTA = memo(() => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-semibold"
      >
        Iniciar sesión
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/50 shine-effect"
      >
        Probar gratis
      </motion.a>
    </div>
  )
})

NavbarCTA.displayName = 'NavbarCTA'

