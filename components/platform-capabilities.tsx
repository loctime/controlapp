"use client"

import { motion } from "framer-motion"
import { platformOverview } from "@/lib/platform-data"

export function PlatformCapabilities() {
  const { capabilities } = platformOverview

  return (
    <section id="capacidades" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 -z-10" />
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-200 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-white/10 rounded-full">
            {capabilities.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
            {capabilities.title}
          </h2>
          <p className="text-xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
            {capabilities.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {capabilities.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-7 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-5">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-blue-100/85 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
