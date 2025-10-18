"use client"

import { motion, AnimatePresence } from "framer-motion"
import { memo } from "react"
import { Solution, NavLink } from "./types"

interface NavbarMobileProps {
  isOpen: boolean
  solutionsEmpresas: Solution[]
  solutionsPersonas: Solution[]
  navLinks: NavLink[]
  onClose: () => void
}

export const NavbarMobile = memo(({
  isOpen,
  solutionsEmpresas,
  solutionsPersonas,
  navLinks,
  onClose
}: NavbarMobileProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect border-t border-blue-200 max-h-[80vh] overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Soluciones Empresariales en móvil */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 mb-3">
                Soluciones Empresariales
              </div>
              {solutionsEmpresas.map((solution, index) => (
                <motion.a
                  key={solution.name}
                  href={solution.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  onClick={onClose}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{solution.name}</div>
                    <div className="text-xs text-gray-600 line-clamp-1">{solution.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Soluciones para Personas en móvil */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 mb-3">
                Para Personas
              </div>
              {solutionsPersonas.map((solution, index) => (
                <motion.a
                  key={solution.name}
                  href={solution.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (solutionsEmpresas.length + index) * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  onClick={onClose}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{solution.name}</div>
                    <div className="text-xs text-gray-600 line-clamp-1">{solution.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Separador */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Otros links */}
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (solutionsEmpresas.length + solutionsPersonas.length + index) * 0.05 }}
                className="block text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                onClick={onClose}
              >
                {link.name}
              </motion.a>
            ))}
            
            <div className="pt-4 space-y-3">
              <a
                href="#"
                className="block text-center text-gray-700 hover:text-blue-600 transition-colors text-sm font-semibold py-2"
              >
                Iniciar sesión
              </a>
              <a
                href="#"
                className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/50"
              >
                Probar gratis
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

NavbarMobile.displayName = 'NavbarMobile'

