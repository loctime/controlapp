"use client"

import { Briefcase, Check, ArrowLeft, FileUser, LayoutDashboard, Mail, Search, Star, TrendingUp, Download, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BolsaTrabajoPage() {
  const features = [
    {
      icon: FileUser,
      title: "Generador de CVs",
      description: "Herramienta intuitiva para que candidatos creen CVs profesionales con plantillas modernas."
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard Administrativo",
      description: "Panel completo para gestionar vacantes, candidatos y procesos de selección en un solo lugar."
    },
    {
      icon: Mail,
      title: "Notificaciones por Email",
      description: "Alertas automáticas a candidatos y reclutadores sobre actualizaciones y nuevas oportunidades."
    },
    {
      icon: Search,
      title: "Búsqueda Avanzada",
      description: "Filtra candidatos por habilidades, experiencia, ubicación y otros criterios relevantes."
    },
    {
      icon: Star,
      title: "Sistema de Puntuación",
      description: "Califica y rankea candidatos automáticamente según los requisitos de cada puesto."
    },
    {
      icon: TrendingUp,
      title: "Reportes y Analytics",
      description: "Analiza métricas de reclutamiento y optimiza tus procesos de selección con datos reales."
    }
  ]

  const benefits = [
    "Reduce tiempo de contratación en un 50%",
    "Centraliza todos los CVs en un solo lugar",
    "Mejora la experiencia del candidato",
    "Automatiza comunicaciones repetitivas",
    "Colabora con tu equipo en tiempo real",
    "Cumple con normativas de protección de datos"
  ]

  const useCases = [
    {
      title: "Departamentos de RRHH",
      description: "Gestiona múltiples procesos de selección simultáneamente con seguimiento detallado de cada candidato."
    },
    {
      title: "Agencias de Reclutamiento",
      description: "Administra candidatos de múltiples clientes con portales personalizados y reportes profesionales."
    },
    {
      title: "Empresas en Crecimiento",
      description: "Escala tus procesos de contratación manteniendo calidad y organización en cada etapa."
    },
    {
      title: "Portales de Empleo",
      description: "Ofrece a tus usuarios una plataforma completa para crear CVs y postularse a ofertas laborales."
    }
  ]

  const forCandidates = [
    {
      icon: FileUser,
      title: "Crea tu CV en minutos",
      description: "Usa nuestras plantillas profesionales y genera un CV impactante"
    },
    {
      icon: Search,
      title: "Encuentra ofertas relevantes",
      description: "Postúlate a trabajos que coincidan con tu perfil y experiencia"
    },
    {
      icon: Mail,
      title: "Recibe notificaciones",
      description: "Mantente informado sobre el estado de tus postulaciones"
    }
  ]

  const forCompanies = [
    {
      icon: LayoutDashboard,
      title: "Gestiona vacantes fácilmente",
      description: "Publica ofertas y administra todo el proceso desde un panel centralizado"
    },
    {
      icon: Users,
      title: "Revisa candidatos calificados",
      description: "Accede a CVs pre-filtrados según tus requisitos específicos"
    },
    {
      icon: TrendingUp,
      title: "Optimiza tu proceso",
      description: "Analiza métricas y mejora continuamente tu estrategia de reclutamiento"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold mb-8 transition-all hover:gap-3"
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
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Briefcase size={16} />
              Plataforma de Empleo
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bolsa de Trabajo
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Plataforma completa para gestión de CVs con generador profesional y dashboard administrativo. 
              Conecta talento con oportunidades de forma eficiente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-105"
              >
                Crear mi CV gratis
              </Link>
              <Link
                href="#"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
              >
                Ver demo para empresas
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png"
                alt="Bolsa de Trabajo"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-indigo-600">50%</div>
              <div className="text-sm text-gray-600">Menos tiempo de contratación</div>
            </div>
          </motion.div>
        </div>

        {/* Para Candidatos y Empresas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Para Candidatos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Para Candidatos</h2>
            <div className="space-y-6">
              {forCandidates.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              href="#"
              className="mt-8 block text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-600 transition-all"
            >
              Crear mi CV ahora
            </Link>
          </motion.div>

          {/* Para Empresas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-600 to-blue-500 p-8 rounded-2xl shadow-lg text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Para Empresas</h2>
            <div className="space-y-6">
              {forCompanies.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-indigo-100">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              href="#"
              className="mt-8 block text-center bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all"
            >
              Solicitar demo
            </Link>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Características principales
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Todo lo que necesitas para gestionar eficientemente tus procesos de reclutamiento
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
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-3xl p-12 mb-20 text-white">
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
            La solución perfecta para diferentes tipos de organizaciones
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500"
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
            ¿Listo para optimizar tu proceso de reclutamiento?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a empresas que ya están transformando su forma de contratar talento
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <Users size={20} />
              Empezar ahora
            </Link>
            <Link
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={20} />
              Descargar guía
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

