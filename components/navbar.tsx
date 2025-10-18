"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NavbarLogo } from "./navbar/NavbarLogo"
import { NavbarCTA } from "./navbar/NavbarCTA"
import { NavbarMobile } from "./navbar/NavbarMobile"
import { MegaMenu } from "./navbar/MegaMenu"
import { solutionsEmpresas, solutionsPersonas } from "./navbar/solutions-data"
import { NavLink } from "./navbar/types"

const navLinks: NavLink[] = [
  { name: "Integración", href: "#integracion" },
  { name: "Clientes", href: "#clientes" },
  { name: "Precios", href: "#precios" },
  { name: "🎪 Demos", href: "/demos" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState<'empresas' | 'personas' | null>(null)
  const [selectedSolution, setSelectedSolution] = useState(solutionsEmpresas[0])
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar mega menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMegaMenu) {
        const target = event.target as HTMLElement
        if (!target.closest('[data-mega-menu]') && !target.closest('button')) {
          setShowMegaMenu(false)
          setActiveMenu(null)
        }
      }
    }

    if (showMegaMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMegaMenu])

  const handleMegaMenuClick = useCallback((menuType: 'empresas' | 'personas') => {
    if (activeMenu === menuType) {
      setShowMegaMenu(false)
      setActiveMenu(null)
    } else {
      setActiveMenu(menuType)
      setShowMegaMenu(true)
      setSelectedSolution(menuType === 'empresas' ? solutionsEmpresas[0] : solutionsPersonas[0])
    }
  }, [activeMenu])

  const handleMegaMenuHover = useCallback((menuType: 'empresas' | 'personas') => {
    if (showMegaMenu && activeMenu !== menuType) {
      if (megaMenuTimeout) {
        clearTimeout(megaMenuTimeout)
        setMegaMenuTimeout(null)
      }
      setActiveMenu(menuType)
      setSelectedSolution(menuType === 'empresas' ? solutionsEmpresas[0] : solutionsPersonas[0])
    }
  }, [showMegaMenu, activeMenu, megaMenuTimeout])

  const handleMegaMenuLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setShowMegaMenu(false)
      setActiveMenu(null)
    }, 300)
    setMegaMenuTimeout(timeout)
  }, [])

  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
  }, [megaMenuTimeout])

  const handleSelectSolution = useCallback((solution: typeof solutionsEmpresas[0]) => {
    setSelectedSolution(solution)
  }, [])

  const handleMobileClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-effect shadow-lg shadow-blue-500/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Contenedor de Mega Menús */}
            <div 
              className="flex items-center gap-8"
              onMouseLeave={handleMegaMenuLeave}
            >
              {/* Soluciones para Empresas */}
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => handleMegaMenuClick('empresas')}
                  onMouseEnter={() => handleMegaMenuHover('empresas')}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium relative group"
                >
                  Para Empresas
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === 'empresas' ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </div>

              {/* Soluciones para Personas */}
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => handleMegaMenuClick('personas')}
                  onMouseEnter={() => handleMegaMenuHover('personas')}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium relative group"
                >
                  Para Personas
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === 'personas' ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </div>
            </div>

            {/* Otros links */}
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <NavbarCTA />

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-xl hover:bg-blue-100 transition-all duration-300 text-blue-600"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <NavbarMobile
        isOpen={isOpen}
        solutionsEmpresas={solutionsEmpresas}
        solutionsPersonas={solutionsPersonas}
        navLinks={navLinks}
        onClose={handleMobileClose}
      />
    </nav>
    
    {/* Zona de puente invisible */}
    <AnimatePresence>
      {showMegaMenu && activeMenu && (
        <div 
          className="fixed top-16 left-0 right-0 h-4 z-30"
          onMouseEnter={handleMegaMenuEnter}
        />
      )}
    </AnimatePresence>

    {/* Mega Menu */}
    <MegaMenu
      showMegaMenu={showMegaMenu}
      activeMenu={activeMenu}
      solutions={activeMenu === 'empresas' ? solutionsEmpresas : solutionsPersonas}
      selectedSolution={selectedSolution}
      onSelectSolution={handleSelectSolution}
      onMouseLeave={handleMegaMenuLeave}
      onMouseEnter={handleMegaMenuEnter}
    />
    </>
  )
}
