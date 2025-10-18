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
    <section id="integracion" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-purple-600 font-semibold text-sm uppercase tracking-wider mb-6 px-4 py-2 bg-purple-100 rounded-full"
            >
              🔗 Integración Total
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Integración completa
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                entre tus herramientas
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              ControlApp no es solo un conjunto de aplicaciones independientes. Es un ecosistema integrado donde cada
              herramienta se comunica con las demás para crear un flujo de trabajo perfecto.
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex gap-5 p-5 glass-effect rounded-2xl border-2 border-white/50 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-100/50 to-pink-100/50 p-8 glass-effect border-4 border-white/50 shadow-2xl shadow-purple-500/20">
              {/* Center hub */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-effect rounded-3xl shadow-2xl flex items-center justify-center border-4 border-purple-300 animate-glow"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-3xl font-extrabold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">CA</span>
              </motion.div>

              {/* Orbiting apps */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  <motion.div
                    className="absolute w-20 h-20 glass-effect rounded-2xl shadow-2xl flex items-center justify-center border-2 border-white/50"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 60}deg) translateY(-140px) rotate(-${i * 60}deg)`,
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${apps[i]?.color || "from-purple-600 to-pink-600"} shadow-lg`}
                    />
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Connection lines effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
