"use client"

import { motion } from "framer-motion"
import { memo } from "react"

export const NavbarLogo = memo(() => {
  return (
    <motion.div 
      className="flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a href="#" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 animate-glow">
          <span className="text-white font-bold text-xl">C</span>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          ControlApp
        </span>
      </a>
    </motion.div>
  )
})

NavbarLogo.displayName = 'NavbarLogo'

