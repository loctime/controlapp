"use client"

import { useState, useEffect } from "react"
import { Menu, X, FileText, Shield, FolderOpen, Receipt, Truck, Briefcase, TrendingUp, ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const solutions = [
  {
    name: "ControlDoc",
    description: "Gestión documental multi-tenant con aprobación, versionado y control de vencimientos",
    icon: FileText,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    features: ["Aprobación de documentos", "OCR inteligente", "Control de vencimientos"],
    color: "from-blue-500 to-cyan-500",
    href: "#"
  },
  {
    name: "ControlAudit",
    description: "Sistema de auditorías offline con formularios personalizados y reportes automatizados",
    icon: Shield,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
    features: ["Modo offline completo", "Formularios personalizados", "Reportes en PDF"],
    color: "from-emerald-500 to-teal-500",
    href: "#"
  },
  {
    name: "ControlFile",
    description: "Almacenamiento en la nube profesional con integración Backblaze B2",
    icon: FolderOpen,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
    features: ["75% más económico", "Enlaces compartidos", "App móvil nativa"],
    color: "from-violet-500 to-blue-500",
    href: "#"
  },
  {
    name: "ControlGastos",
    description: "Gestión inteligente de gastos fijos mensuales con notificaciones automáticas",
    icon: Receipt,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
    features: ["Gastos recurrentes", "Notificaciones push", "Integración con ControlFile"],
    color: "from-amber-500 to-orange-500",
    href: "#"
  },
  {
    name: "ControlD",
    description: "Control de remitos y pedidos con firmas digitales y seguimiento completo",
    icon: Truck,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file2-Hj2gQECrLMut1a2DcX0a4THgtzQinE.png",
    features: ["Firmas digitales", "Seguimiento en tiempo real", "Remitos en PDF"],
    color: "from-rose-500 to-cyan-500",
    href: "#"
  },
  {
    name: "Bolsa de Trabajo",
    description: "Plataforma completa para gestión de CVs con generador y dashboard administrativo",
    icon: Briefcase,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
    features: ["Generador de CVs", "Dashboard admin", "Notificaciones por email"],
    color: "from-indigo-500 to-blue-500",
    href: "#"
  },
  {
    name: "Control Ventas",
    description: "Control de caja diario para pequeños negocios con cierre y análisis",
    icon: TrendingUp,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
    features: ["Cierre de caja", "Múltiples métodos de pago", "Historial completo"],
    color: "from-cyan-500 to-blue-500",
    href: "#"
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Integración", href: "#integracion" },
    { name: "Clientes", href: "#clientes" },
    { name: "Precios", href: "#precios" },
    { name: "🎪 Demos", href: "/demos" },
  ]

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Soluciones con Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium relative group"
              >
                Soluciones para Empresas
                <ChevronDown size={16} className={`transition-transform duration-300 ${showMegaMenu ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>

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

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-xl hover:bg-blue-100 transition-all duration-300 text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-blue-200 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Soluciones en móvil */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 mb-3">
                  Nuestras Soluciones
                </div>
                {solutions.map((solution, index) => (
                  <motion.a
                    key={solution.name}
                    href={solution.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
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
                  transition={{ delay: (solutions.length + index) * 0.05 }}
                  className="block text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
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
    </nav>
    
    {/* Mega Menu - Fuera del navbar para ancho completo */}
    <AnimatePresence>
      {showMegaMenu && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-20 left-0 right-0 z-40 glass-effect shadow-2xl border-2 border-white/50 overflow-hidden"
        >
          <div className="flex w-full">
            {/* Lista de Soluciones */}
            <div className="w-2/5 p-8 border-r border-gray-200/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nuestras Soluciones</h3>
                <p className="text-base text-gray-600">Explora todas nuestras aplicaciones empresariales</p>
              </div>
              <div className="space-y-2">
                {solutions.map((solution) => (
                  <motion.button
                    key={solution.name}
                    onMouseEnter={() => setSelectedSolution(solution)}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 text-left ${
                      selectedSolution.name === solution.name
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 shadow-lg'
                        : 'hover:bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base text-gray-900">{solution.name}</div>
                      <div className="text-sm text-gray-600 line-clamp-2">{solution.description}</div>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Vista Detallada */}
            <div className="w-3/5 p-8 bg-gradient-to-br from-blue-50/50 to-cyan-50/30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSolution.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Imagen */}
                  <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 shadow-xl">
                    <Image
                      src={selectedSolution.image || "/placeholder.svg"}
                      alt={selectedSolution.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Título y descripción */}
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{selectedSolution.name}</h4>
                    <p className="text-base text-gray-600 leading-relaxed">{selectedSolution.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Características principales:</h5>
                    <ul className="space-y-3">
                      {selectedSolution.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 text-base text-gray-700"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="font-semibold">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={selectedSolution.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-3 text-blue-600 font-bold text-lg hover:gap-4 transition-all bg-blue-50 px-6 py-3 rounded-xl hover:bg-blue-100 shadow-lg"
                  >
                    Más información
                    <ArrowRight size={18} />
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
