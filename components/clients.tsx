"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "10,000+", label: "Empresas activas" },
  { value: "500K+", label: "Documentos procesados" },
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "24/7", label: "Soporte técnico" },
]

export function Clients() {
  return (
    <section id="clientes" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Empresas que confían en ControlApp</h2>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Desde startups hasta grandes corporaciones, miles de empresas optimizan sus procesos con nuestra suite
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
              <div>
                <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed mb-4">
                  "ControlApp transformó completamente nuestra operación. Pasamos de gestionar documentos en papel a
                  tener todo digitalizado y accesible desde cualquier lugar. El ROI fue inmediato."
                </p>
                <div>
                  <p className="font-semibold text-white">María González</p>
                  <p className="text-sm text-neutral-400">CEO, TechCorp Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
