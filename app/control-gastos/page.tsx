"use client"

import { Receipt, Check, ArrowLeft, Bell, Calendar, CreditCard, TrendingDown, FolderOpen, PieChart, Download, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ControlGastosPage() {
  const features = [
    {
      icon: Calendar,
      title: "Gastos Recurrentes",
      description: "Registra gastos fijos mensuales que se repiten automáticamente cada mes. Nunca más olvides un pago."
    },
    {
      icon: Bell,
      title: "Notificaciones Push",
      description: "Recibe alertas automáticas días antes del vencimiento de cada gasto programado."
    },
    {
      icon: FolderOpen,
      title: "Integración con ControlFile",
      description: "Adjunta comprobantes, facturas y documentos directamente desde tu gestor documental."
    },
    {
      icon: PieChart,
      title: "Análisis de Gastos",
      description: "Visualiza tus gastos con gráficos interactivos. Identifica dónde gastas más cada mes."
    },
    {
      icon: CreditCard,
      title: "Múltiples Categorías",
      description: "Organiza gastos por categorías personalizadas: servicios, subscripciones, seguros, etc."
    },
    {
      icon: TrendingDown,
      title: "Control de Presupuesto",
      description: "Define presupuestos mensuales por categoría y recibe alertas cuando te acerques al límite."
    }
  ]

  const benefits = [
    "Nunca más olvides pagar un servicio",
    "Visualiza gastos fijos vs variables",
    "Ahorra tiempo en organización",
    "Compara gastos mes a mes",
    "Adjunta comprobantes fácilmente",
    "Acceso desde cualquier dispositivo"
  ]

  const useCases = [
    {
      title: "Gestión Personal",
      description: "Controla tus gastos personales: alquiler, servicios, gimnasio, streaming y subscripciones."
    },
    {
      title: "Familia",
      description: "Administra los gastos del hogar compartidos entre varios miembros de la familia."
    },
    {
      title: "Freelancers",
      description: "Registra gastos del negocio y mantén tus finanzas personales separadas de las profesionales."
    },
    {
      title: "Pequeñas Empresas",
      description: "Gestiona gastos operativos fijos como alquiler, servicios, licencias de software y seguros."
    }
  ]

  const categories = [
    { name: "Vivienda", icon: "🏠", example: "Alquiler, expensas, servicios" },
    { name: "Servicios", icon: "💡", example: "Luz, agua, gas, internet" },
    { name: "Subscripciones", icon: "📺", example: "Netflix, Spotify, cloud" },
    { name: "Transporte", icon: "🚗", example: "Combustible, peajes, seguros" },
    { name: "Salud", icon: "💊", example: "Obra social, medicamentos" },
    { name: "Educación", icon: "📚", example: "Cuotas, cursos online" }
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Registra tus gastos fijos",
      description: "Ingresa cada gasto recurrente con su monto, fecha de vencimiento y frecuencia"
    },
    {
      step: "2",
      title: "Configura notificaciones",
      description: "Elige cuántos días antes del vencimiento quieres recibir recordatorios"
    },
    {
      step: "3",
      title: "Recibe alertas automáticas",
      description: "El sistema te notifica por push y email antes de cada vencimiento"
    },
    {
      step: "4",
      title: "Analiza tus gastos",
      description: "Visualiza reportes mensuales y anuales para optimizar tu presupuesto"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-8 transition-all hover:gap-3"
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
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Receipt size={16} />
              Gestión de Gastos
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ControlGastos
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Gestión inteligente de gastos fijos mensuales con notificaciones automáticas. 
              Nunca más olvides un pago y ten control total de tus finanzas personales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 hover:scale-105"
              >
                Comenzar gratis
              </Link>
              <Link
                href="#"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-50 transition-all duration-300 hover:scale-105"
              >
                Ver demo
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png"
                alt="ControlGastos"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <Bell className="w-8 h-8 text-amber-600" />
                <div>
                  <div className="text-2xl font-bold text-amber-600">0</div>
                  <div className="text-xs text-gray-600">Pagos olvidados</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Organiza por categorías
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Clasifica tus gastos para tener mejor visibilidad de tu presupuesto
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.example}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Simple y efectivo en 4 pasos
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 z-10"></div>
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
            Todo lo que necesitas para gestionar tus gastos mensuales
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
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-amber-600 to-orange-500 rounded-3xl p-12 mb-20 text-white">
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
            ControlGastos se adapta a diferentes necesidades de gestión financiera
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500"
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
            ¿Listo para tener control de tus gastos?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya gestionan sus finanzas con ControlGastos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-amber-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <Smartphone size={20} />
              Descargar app gratis
            </Link>
            <Link
              href="#"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={20} />
              Ver guía de inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

