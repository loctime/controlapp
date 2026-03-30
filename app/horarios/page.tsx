"use client"

import { Calendar, Check, ArrowLeft, Clock, Users, Download, Share2, Image, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HorariosPage() {
  const features = [
    {
      icon: Calendar,
      title: "Horarios Semanales",
      description: "Crea y gestiona los horarios de tus empleados por semana con una interfaz intuitiva y fácil de usar."
    },
    {
      icon: BarChart3,
      title: "Vista Mensual",
      description: "Visualiza todos los horarios del mes en una sola vista para una mejor planificación y control."
    },
    {
      icon: Image,
      title: "Exportar a Imagen",
      description: "Exporta los horarios como imagen para compartirlos vía WhatsApp, email o imprimir fácilmente."
    },
    {
      icon: Share2,
      title: "Publicar en PWA",
      description: "Publica los horarios en tu PWA para que los empleados tengan acceso fácil desde sus dispositivos."
    },
    {
      icon: Users,
      title: "Multi-empleado",
      description: "Gestiona horarios para múltiples empleados con diferentes roles y turnos especiales."
    },
    {
      icon: Clock,
      title: "Turnos Flexible",
      description: "Soporta turnos parciales, francos y horarios especiales con notas y observaciones."
    }
  ]

  const benefits = [
    "Reduce conflictos de horarios en un 90%",
    "Mejora la organización del equipo",
    "Acceso rápido para empleados",
    "Historial completo de cambios",
    "Notificaciones automáticas",
    "Integración con otras apps de ControlApp"
  ]

  const useCases = [
    {
      title: "Restaurantes y Bares",
      description: "Gestiona turnos complejos de personal con múltiples francos y horarios variables según día."
    },
    {
      title: "Tiendas y Comercios",
      description: "Planifica horarios semanales y mensuales para garantizar cobertura en todos los turnos."
    },
    {
      title: "Salones y Peluquerías",
      description: "Administra citas y horarios de empleados con disponibilidad por servicio."
    },
    {
      title: "Empresas de Servicios",
      description: "Coordina equipos de trabajo con asignación de zonas y horarios optimizados."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-8 transition-all hover:gap-3"
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
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar size={16} />
              Gestión de Horarios
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Horarios Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sistema inteligente para gestionar horarios semanales y mensuales con exportación a imagen y publicación en PWA. 
              La solución completa para organizar a tu equipo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-700 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 hover:scale-105"
              >
                Probar gratis 30 días
              </Link>
              <Link
                href="#"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
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
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src="/horarios-app.jpg"
                alt="Horarios Simple"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-orange-600">90%</div>
              <div className="text-sm text-gray-600">Menos conflictos</div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Características principales
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Todo lo que necesitas para gestionar los horarios de tu equipo de forma profesional
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
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-3xl p-12 mb-20 text-white">
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
            Horarios Simple se adapta a las necesidades de diferentes industrias y tipos de negocio
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500"
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
            ¿Listo para organizar mejor tu equipo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a cientos de negocios que ya confían en Horarios Simple para gestionar sus horarios
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={20} />
              Comenzar prueba gratuita
            </Link>
            <Link
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Share2 size={20} />
              Ver documentación
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
