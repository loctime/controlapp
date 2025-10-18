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
    <section id="clientes" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-block text-purple-300 font-semibold text-sm uppercase tracking-wider mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm"
          >
            ⭐ Clientes Satisfechos
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Empresas que confían
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              en ControlApp
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desde startups hasta grandes corporaciones, miles de empresas optimizan sus procesos con nuestra suite
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center glass-effect rounded-3xl p-8 border-2 border-white/10 hover:border-purple-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <motion.div 
                className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.15 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-10 lg:p-14 border-2 border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-8 left-8 text-9xl font-serif text-purple-500/20 leading-none">"</div>
            
            <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed mb-6 font-medium">
                  "ControlApp transformó completamente nuestra operación. Pasamos de gestionar documentos en papel a
                  tener todo digitalizado y accesible desde cualquier lugar. El ROI fue inmediato."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-xl text-white">María González</p>
                    <p className="text-gray-300">CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
