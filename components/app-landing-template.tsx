"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check, FolderOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getPlatformAppBySlug } from "@/lib/platform-data"

interface AppLandingTemplateProps {
  appSlug: string
}

export function AppLandingTemplate({ appSlug }: AppLandingTemplateProps) {
  const app = getPlatformAppBySlug(appSlug)

  if (!app) {
    return null
  }

  const { landingContent } = app

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-all hover:gap-3"
        >
          <ArrowLeft size={20} />
          Volver a la plataforma
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <app.icon size={16} />
              {landingContent.heroLabel}
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {landingContent.heroTitle}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {landingContent.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href={landingContent.finalCta.primaryHref}
                className={`bg-gradient-to-r ${app.color} text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105`}
              >
                {landingContent.finalCta.primaryLabel}
              </Link>
              <Link
                href={landingContent.finalCta.secondaryHref}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                {landingContent.finalCta.secondaryLabel}
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {app.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl bg-white border border-blue-100 p-4 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70">
              <Image src={app.image} alt={app.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {landingContent.heroStats ? (
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
                <div className={`text-3xl font-bold bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  {landingContent.heroStats.value}
                </div>
                <div className="text-sm text-gray-600 max-w-[12rem]">{landingContent.heroStats.label}</div>
              </div>
            ) : null}
          </motion.div>
        </div>

        {landingContent.platformIntegration ? (
          <div className="mb-20 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-10 shadow-2xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <FolderOpen size={16} />
                Integracion con la plataforma
              </div>
              <h2 className="text-4xl font-bold mb-4">{landingContent.platformIntegration.title}</h2>
              <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
                {landingContent.platformIntegration.description}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {landingContent.platformIntegration.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <p className="text-blue-50 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Funcionalidades clave</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Cada app se apoya en la plataforma compartida para enfocarse en su dominio.
          </p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {landingContent.functionalities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-7 rounded-3xl shadow-lg border border-blue-100"
              >
                {item.icon ? (
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-5`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className={`rounded-3xl bg-gradient-to-br ${app.color} p-12 text-white`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Beneficios de operar sobre la plataforma</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {landingContent.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Casos de uso</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Ejemplos concretos de como este modulo vive dentro del ecosistema de ControlApp.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {landingContent.useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Listo para sumar este modulo a tu ecosistema</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {app.name} se apoya en la misma base compartida de ControlApp para que puedas crecer sin duplicar identidad, permisos ni storage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={landingContent.finalCta.primaryHref}
              className={`bg-gradient-to-r ${app.color} text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105`}
            >
              {landingContent.finalCta.primaryLabel}
            </Link>
            <Link
              href={landingContent.finalCta.secondaryHref}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {landingContent.finalCta.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
