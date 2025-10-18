"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface DemoCardProps {
  title: string
  description: string
  icon: LucideIcon
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
}

export function DemoCard({ title, description, icon: Icon, isExpanded, onToggle, children }: DemoCardProps) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-purple-300" />
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        
        <p className="text-white/70 mb-4">{description}</p>
        
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-white/20">
            {children}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

