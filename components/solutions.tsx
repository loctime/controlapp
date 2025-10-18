"use client"

import { motion } from "framer-motion"
import { FileText, Shield, FolderOpen, Receipt, Truck, Briefcase, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import { memo } from "react"

const apps = [
  {
    name: "ControlDoc",
    description: "Gestión documental multi-tenant con aprobación, versionado y control de vencimientos",
    icon: FileText,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    features: ["Aprobación de documentos", "OCR inteligente", "Control de vencimientos"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "ControlAudit",
    description: "Sistema de auditorías offline con formularios personalizados y reportes automatizados",
    icon: Shield,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
    features: ["Modo offline completo", "Formularios personalizados", "Reportes en PDF"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "ControlFile",
    description: "Almacenamiento en la nube profesional con integración Backblaze B2",
    icon: FolderOpen,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
    features: ["75% más económico", "Enlaces compartidos", "App móvil nativa"],
    color: "from-violet-500 to-blue-500",
  },
  {
    name: "ControlGastos",
    description: "Gestión inteligente de gastos fijos mensuales con notificaciones automáticas",
    icon: Receipt,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
    features: ["Gastos recurrentes", "Notificaciones push", "Integración con ControlFile"],
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "ControlD",
    description: "Control de remitos y pedidos con firmas digitales y seguimiento completo",
    icon: Truck,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file2-Hj2gQECrLMut1a2DcX0a4THgtzQinE.png",
    features: ["Firmas digitales", "Seguimiento en tiempo real", "Remitos en PDF"],
    color: "from-rose-500 to-cyan-500",
  },
  {
    name: "Bolsa de Trabajo",
    description: "Plataforma completa para gestión de CVs con generador y dashboard administrativo",
    icon: Briefcase,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
    features: ["Generador de CVs", "Dashboard admin", "Notificaciones por email"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Control Ventas",
    description: "Control de caja diario para pequeños negocios con cierre y análisis",
    icon: TrendingUp,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
    features: ["Cierre de caja", "Múltiples métodos de pago", "Historial completo"],
    color: "from-cyan-500 to-blue-500",
  },
]

export const Solutions = memo(() => {
  return (
    <section id="soluciones" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-200/30 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-blue-100 rounded-full"
          >
            ✨ Nuestras Soluciones
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Soluciones para cada necesidad
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suite completa de aplicaciones diseñadas para digitalizar y optimizar todos los procesos de tu empresa
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass-effect rounded-3xl p-7 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border-2 border-white/50 hover:border-blue-300/50 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Image */}
              <div className="relative h-52 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100/50 to-cyan-100/50 shadow-lg">
                <Image
                  src={app.image || "/placeholder.svg"}
                  alt={app.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-5 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <app.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 relative z-10">
                {app.features.map((feature, idx) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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

              {/* CTA */}
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-4 transition-all relative z-10"
              >
                Más información
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

Solutions.displayName = 'Solutions'
