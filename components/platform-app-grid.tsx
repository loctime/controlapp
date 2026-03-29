"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { activePlatformApps, platformOverview } from "@/lib/platform-data"

export function PlatformAppGrid() {
  const { appsSection } = platformOverview

  return (
    <section id="apps" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-blue-100 rounded-full">
            {appsSection.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              {appsSection.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {appsSection.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {activePlatformApps.map((app, index) => (
            <motion.article
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass-effect rounded-3xl p-7 border-2 border-white/60 hover:border-blue-300/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="relative h-52 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100/50 to-cyan-100/50">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0`}
                >
                  <app.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{app.shortDescription}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-semibold uppercase tracking-wide text-gray-600">
                <div className="rounded-2xl bg-blue-50 border border-blue-100 px-3 py-3">
                  {app.platformCapabilities.sharedAuth ? "Auth central" : "Auth propia"}
                </div>
                <div className="rounded-2xl bg-blue-50 border border-blue-100 px-3 py-3">
                  {app.platformCapabilities.sharedStorage ? "Storage global" : "Storage aislado"}
                </div>
              </div>

              <Link
                href={app.href}
                className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all"
              >
                Ver detalle
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
