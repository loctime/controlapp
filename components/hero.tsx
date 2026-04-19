"use client"

import { motion } from "framer-motion"
import { ArrowRight, FolderOpen, Lock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import { platformOverview } from "@/lib/platform-data"

export const Hero = memo(() => {
  const highlights = [
    { icon: Lock, text: "Misma cuenta para todas las apps habilitadas" },
    { icon: Shield, text: "Permisos por modulo y acceso segun claims" },
    { icon: FolderOpen, text: "Storage global visible desde ControlFile" },
  ]

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-200/50 border border-blue-200"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              {platformOverview.heroBadge}
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                {platformOverview.heroTitle}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {platformOverview.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={platformOverview.heroPrimaryCta.href}
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-2xl shadow-blue-500/50 shine-effect"
                >
                  {platformOverview.heroPrimaryCta.label}
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={platformOverview.heroSecondaryCta.href}
                  className="group inline-flex items-center justify-center gap-3 glass-effect text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-lg"
                >
                  <FolderOpen size={22} className="group-hover:scale-110 transition-transform" />
                  {platformOverview.heroSecondaryCta.label}
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="rounded-2xl bg-white/70 border border-blue-100 shadow-lg p-4 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30 border-4 border-white/50 backdrop-blur-sm animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 z-10 pointer-events-none"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png"
                alt="Vista de la plataforma ControlApp con modulos conectados, autenticacion compartida y trazabilidad documental"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-effect p-5 rounded-2xl shadow-2xl shadow-blue-500/30 border-2 border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Auth compartida</p>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">1 cuenta</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-effect p-5 rounded-2xl shadow-2xl shadow-cyan-500/30 border-2 border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <FolderOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Storage global</p>
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">ControlFile</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"
