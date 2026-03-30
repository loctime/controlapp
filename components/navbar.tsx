"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { NavbarLogo } from "./navbar/NavbarLogo"
import { NavbarCTA } from "./navbar/NavbarCTA"
import { NavbarMobile } from "./navbar/NavbarMobile"
import { MegaMenu } from "./navbar/MegaMenu"
import { activePlatformApps, navigationLinks } from "@/lib/platform-data"
import type { NavLink, NavigationAppGroup } from "./navbar/types"

const navLinks: NavLink[] = navigationLinks

const groupedApps: NavigationAppGroup[] = [
  {
    title: "Operacion y documentos",
    description: "Modulos para procesos, auditoria y gestion documental.",
    apps: activePlatformApps.filter((app) => app.category === "operations" || app.category === "storage"),
  },
  {
    title: "Finanzas",
    description: "Apps conectadas a comprobantes, caja y documentacion financiera.",
    apps: activePlatformApps.filter((app) => app.category === "finance"),
  },
  {
    title: "Talento",
    description: "Modulos para perfiles, CVs y procesos internos de seleccion.",
    apps: activePlatformApps.filter((app) => app.category === "talent"),
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMegaMenu) {
        const target = event.target as HTMLElement
        if (!target.closest("[data-mega-menu]") && !target.closest("[data-apps-trigger]")) {
          setShowMegaMenu(false)
        }
      }
    }

    if (showMegaMenu) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showMegaMenu])

  const handleMegaMenuClick = useCallback(() => {
    setShowMegaMenu((current) => !current)
  }, [])

  const handleMegaMenuHover = useCallback(() => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
    setShowMegaMenu(true)
  }, [megaMenuTimeout])

  const handleMegaMenuLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setShowMegaMenu(false)
    }, 300)
    setMegaMenuTimeout(timeout)
  }, [])

  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout)
      setMegaMenuTimeout(null)
    }
  }, [megaMenuTimeout])

  const handleMobileClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-effect shadow-lg shadow-blue-500/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavbarLogo />

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-8" onMouseLeave={handleMegaMenuLeave}>
                <div className="relative">
                  <motion.button
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleMegaMenuClick}
                    onMouseEnter={handleMegaMenuHover}
                    data-apps-trigger
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium relative group"
                  >
                    Apps
                    <ChevronDown size={16} className={`transition-transform duration-300 ${showMegaMenu ? "rotate-180" : ""}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                </div>
              </div>

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

            <NavbarCTA />

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-xl hover:bg-blue-100 transition-all duration-300 text-blue-600"
              aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <NavbarMobile isOpen={isOpen} apps={activePlatformApps} navLinks={navLinks} onClose={handleMobileClose} />
      </nav>

      <AnimatePresence>
        {showMegaMenu ? (
          <div className="fixed top-16 left-0 right-0 h-4 z-30" onMouseEnter={handleMegaMenuEnter} />
        ) : null}
      </AnimatePresence>

      <MegaMenu
        showMegaMenu={showMegaMenu}
        groups={groupedApps.filter((group) => group.apps.length > 0)}
        onMouseLeave={handleMegaMenuLeave}
        onMouseEnter={handleMegaMenuEnter}
      />
    </>
  )
}
