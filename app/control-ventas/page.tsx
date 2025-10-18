"use client"

import { TrendingUp, Check, ArrowLeft, DollarSign, CreditCard, Calendar, PieChart, Receipt, Lock, Download, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ControlVentasPage() {
  const features = [
    {
      icon: DollarSign,
      title: "Control de Caja Diario",
      description: "Registra ventas, gastos y movimientos de caja con facilidad. Cierre automático al final del día."
    },
    {
      icon: CreditCard,
      title: "Múltiples Métodos de Pago",
      description: "Acepta efectivo, tarjetas, transferencias y más. Registra cada transacción por separado."
    },
    {
      icon: Calendar,
      title: "Historial Completo",
      description: "Accede al historial de cierres de caja con búsqueda por fecha y filtros avanzados."
    },
    {
      icon: PieChart,
      title: "Reportes Visuales",
      description: "Gráficos y estadísticas de ventas por día, semana, mes. Identifica tendencias fácilmente."
    },
    {
      icon: Receipt,
      title: "Tickets y Comprobantes",
      description: "Genera tickets de venta y comprobantes fiscales según normativas locales."
    },
    {
      icon: Lock,
      title: "Seguridad de Datos",
      description: "Todos los movimientos quedan registrados con timestamp y usuario. Auditoría completa."
    }
  ]

  const benefits = [
    "Controla tu caja en menos de 5 minutos",
    "Evita faltantes y descuadres",
    "Reportes instantáneos de ventas",
    "Identifica productos más vendidos",
    "Seguimiento de gastos operativos",
    "Compatible con impresoras térmicas"
  ]

  const useCases = [
    {
      title: "Comercios Minoristas",
      description: "Perfecto para tiendas, almacenes y negocios que necesitan control diario de caja y ventas."
    },
    {
      title: "Cafeterías y Restaurantes",
      description: "Gestiona comandas, mesas y cierre de caja con métodos de pago mixtos."
    },
    {
      title: "Kioscos y Pequeños Locales",
      description: "Solución simple y efectiva para negocios que buscan digitalizar su control de ventas."
    },
    {
      title: "Emprendimientos",
      description: "Ideal para nuevos negocios que necesitan una herramienta profesional sin complejidad."
    }
  ]

  const stats = [
    { value: "5 min", label: "Tiempo de cierre de caja" },
    { value: "100%", label: "Trazabilidad" },
    { value: "0%", label: "Descuadres" },
    { value: "24/7", label: "Acceso a reportes" }
  ]

  const workflow = [
    {
      title: "Apertura de Caja",
      description: "Registra el monto inicial de efectivo al comenzar el día"
    },
    {
      title: "Registro de Ventas",
      description: "Ingresa cada venta con el método de pago utilizado"
    },
    {
      title: "Control de Gastos",
      description: "Registra extracciones y gastos operativos del día"
    },
    {
      title: "Cierre Automático",
      description: "El sistema calcula el balance y genera el reporte de cierre"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold mb-8 transition-all hover:gap-3"
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
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp size={16} />
              Control de Ventas
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Control Ventas
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sistema de control de caja diario para pequeños negocios. Cierre automático, múltiples métodos de pago 
              y análisis completo de ventas. Simplifica tu gestión financiera.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 hover:scale-105"
              >
                Probar gratis 30 días
              </Link>
              <Link
                href="#"
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png"
                alt="Control Ventas"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-cyan-600">5min</div>
              <div className="text-sm text-gray-600">Cierre de caja</div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Flujo de trabajo simple
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Proceso optimizado en 4 pasos para gestionar tu caja diaria
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300 z-10"></div>
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
            Todo lo que necesitas para controlar las ventas de tu negocio
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
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-500 rounded-3xl p-12 mb-20 text-white">
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
            Ideal para
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Control Ventas se adapta a diferentes tipos de negocios
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-cyan-500"
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
            ¿Listo para tener control total de tu caja?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Miles de negocios ya confían en Control Ventas para gestionar sus ventas diarias
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <DollarSign size={20} />
              Comenzar prueba gratuita
            </Link>
            <Link
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <BarChart size={20} />
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

