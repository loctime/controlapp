"use client"

import { Shield, Check, ArrowLeft, Wifi, FileCheck, BarChart3, Camera, MapPin, Download, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ControlAuditPage() {
  const features = [
    {
      icon: Wifi,
      title: "Modo Offline Completo",
      description: "Realiza auditorías sin conexión a internet y sincroniza automáticamente cuando vuelvas online."
    },
    {
      icon: FileCheck,
      title: "Formularios Personalizados",
      description: "Crea formularios de auditoría adaptados a tus necesidades con campos dinámicos y validaciones."
    },
    {
      icon: BarChart3,
      title: "Reportes Automatizados",
      description: "Genera reportes en PDF con gráficos, fotos y datos recopilados automáticamente."
    },
    {
      icon: Camera,
      title: "Captura de Evidencias",
      description: "Toma fotos, adjunta documentos y registra observaciones directamente en la auditoría."
    },
    {
      icon: MapPin,
      title: "Geolocalización",
      description: "Registra la ubicación exacta de cada auditoría con coordenadas GPS automáticas."
    },
    {
      icon: Shield,
      title: "Trazabilidad Completa",
      description: "Historial detallado de todas las auditorías con registro de cambios y aprobaciones."
    }
  ]

  const benefits = [
    "Realiza auditorías en lugares sin conexión",
    "Ahorra tiempo con formularios inteligentes",
    "Genera reportes profesionales en minutos",
    "Mejora la calidad de las auditorías",
    "Centraliza toda la información",
    "Cumple con estándares ISO"
  ]

  const useCases = [
    {
      title: "Auditorías de Seguridad",
      description: "Realiza inspecciones de seguridad e higiene en plantas industriales con checklists personalizados."
    },
    {
      title: "Control de Calidad",
      description: "Verifica estándares de calidad en procesos productivos con registro fotográfico y mediciones."
    },
    {
      title: "Auditorías Ambientales",
      description: "Inspecciona cumplimiento de normas ambientales con geolocalización y evidencias documentadas."
    },
    {
      title: "Auditorías de Retail",
      description: "Supervisa puntos de venta, exhibición de productos y cumplimiento de estándares de marca."
    }
  ]

  const workflow = [
    {
      step: "1",
      title: "Crea el Formulario",
      description: "Diseña tu checklist de auditoría con campos personalizados"
    },
    {
      step: "2",
      title: "Realiza la Inspección",
      description: "Completa el formulario offline con fotos y observaciones"
    },
    {
      step: "3",
      title: "Sincroniza Datos",
      description: "Los datos se suben automáticamente cuando hay conexión"
    },
    {
      step: "4",
      title: "Genera Reportes",
      description: "Obtén reportes profesionales en PDF listos para compartir"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-all hover:gap-3"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield size={16} />
              Sistema de Auditorías
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ControlAudit
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sistema de auditorías offline con formularios personalizados y reportes automatizados. 
              Realiza inspecciones profesionales en cualquier lugar, con o sin conexión a internet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/60 hover:scale-105"
              >
                Probar gratis 30 días
              </Link>
              <Link
                href="#"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
              >
                Agendar demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png"
                alt="ControlAudit"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-emerald-600">100%</div>
              <div className="text-sm text-gray-600">Funciona offline</div>
            </div>
          </motion.div>
        </div>

        {/* Workflow */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Proceso simple y eficiente en 4 pasos
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Características principales
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Todas las herramientas que necesitas para auditorías profesionales
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-3xl p-12 mb-20 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Beneficios clave
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Casos de uso
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            ControlAudit se adapta a diferentes tipos de auditorías e inspecciones
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para profesionalizar tus auditorías?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a equipos de auditoría que ya confían en ControlAudit para sus inspecciones
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <Smartphone size={20} />
              Descargar aplicación
            </Link>
            <Link
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={20} />
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

