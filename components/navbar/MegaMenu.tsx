"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Image from "next/image"
import { memo, useCallback } from "react"
import { Solution } from "./types"

interface MegaMenuProps {
  showMegaMenu: boolean
  activeMenu: 'empresas' | 'personas' | null
  solutions: Solution[]
  selectedSolution: Solution
  onSelectSolution: (solution: Solution) => void
  onMouseLeave: () => void
  onMouseEnter: () => void
}

export const MegaMenu = memo(({
  showMegaMenu,
  activeMenu,
  solutions,
  selectedSolution,
  onSelectSolution,
  onMouseLeave,
  onMouseEnter
}: MegaMenuProps) => {
  const handleSolutionHover = useCallback((solution: Solution) => {
    onSelectSolution(solution)
  }, [onSelectSolution])

  return (
    <AnimatePresence>
      {showMegaMenu && activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-20 left-0 right-0 z-40 glass-effect shadow-2xl border-2 border-white/50 overflow-hidden"
          data-mega-menu
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="flex w-full max-w-6xl mx-auto">
            {/* Lista de Soluciones */}
            <div className="w-2/5 p-6 border-r border-gray-200/50">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {activeMenu === 'empresas' ? 'Soluciones Empresariales' : 'Para Personas'}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeMenu === 'empresas' 
                    ? 'Explora todas nuestras aplicaciones empresariales' 
                    : 'Herramientas para gestión personal'
                  }
                </p>
              </div>
              <div className="space-y-1">
                {solutions.map((solution) => (
                  <motion.button
                    key={solution.name}
                    onMouseEnter={() => handleSolutionHover(solution)}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${
                      selectedSolution.name === solution.name
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 shadow-md'
                        : 'hover:bg-gray-50 hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <solution.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900">{solution.name}</div>
                      <div className="text-xs text-gray-600 line-clamp-1">{solution.description}</div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Vista Detallada */}
            <div className="w-3/5 p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSolution.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Imagen */}
                  <div className="relative h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg">
                    <Image
                      src={selectedSolution.image}
                      alt={selectedSolution.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Título y descripción */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedSolution.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedSolution.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-3">Características principales:</h5>
                    <ul className="space-y-2">
                      {selectedSolution.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={selectedSolution.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 shadow-md"
                  >
                    Más información
                    <ArrowRight size={14} />
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

MegaMenu.displayName = 'MegaMenu'

