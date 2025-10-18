"use client"

import { motion } from "framer-motion"
import { FileText, Shield, FolderOpen, Receipt, Truck, Briefcase, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"

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
    color: "from-violet-500 to-purple-500",
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
    color: "from-rose-500 to-pink-500",
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

export function Solutions() {
  return (
    <section id="soluciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Soluciones para cada necesidad
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Suite completa de aplicaciones diseñadas para digitalizar y optimizar todos los procesos de tu empresa
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-primary/20"
            >
              {/* Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50">
                <Image
                  src={app.image || "/placeholder.svg"}
                  alt={app.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0`}
                >
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{app.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{app.description}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
              >
                Más información
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
