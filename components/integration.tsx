"use client"

import { motion } from "framer-motion"
import { Cloud, Lock, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Sincronización en la nube",
    description: "Todos tus datos sincronizados en tiempo real con Firebase y Backblaze B2",
  },
  {
    icon: Lock,
    title: "Seguridad empresarial",
    description: "Autenticación robusta, encriptación y control de acceso granular",
  },
  {
    icon: Zap,
    title: "Integración perfecta",
    description: "Todas las apps se comunican entre sí para un flujo de trabajo sin interrupciones",
  },
  {
    icon: Globe,
    title: "Acceso desde cualquier lugar",
    description: "PWA instalable en móviles y escritorio, funciona offline",
  },
]

const apps = [
  { color: "from-red-100 to-red-500" },
  { color: "from-blue-100 to-blue-500" },
  { color: "from-green-100 to-green-500" },
  { color: "from-yellow-100 to-yellow-500" },
  { color: "from-purple-100 to-purple-500" },
  { color: "from-orange-100 to-orange-500" },
]

export function Integration() {
  return (
    <section id="integracion" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Integración completa entre todas tus herramientas
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              ControlApp no es solo un conjunto de aplicaciones independientes. Es un ecosistema integrado donde cada
              herramienta se comunica con las demás para crear un flujo de trabajo perfecto.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-primary">
                <span className="text-2xl font-bold text-primary">CA</span>
              </div>

              {/* Orbiting apps */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  <div
                    className="absolute w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-neutral-200"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 60}deg) translateY(-120px) rotate(-${i * 60}deg)`,
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${apps[i]?.color || "from-primary to-primary-dark"}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
