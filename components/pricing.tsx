"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mes",
    description: "Perfecto para pequeñas empresas",
    features: [
      "Hasta 3 aplicaciones",
      "5 usuarios incluidos",
      "50 GB de almacenamiento",
      "Soporte por email",
      "Actualizaciones automáticas",
    ],
    cta: "Comenzar prueba",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/mes",
    description: "Para empresas en crecimiento",
    features: [
      "Todas las aplicaciones",
      "20 usuarios incluidos",
      "500 GB de almacenamiento",
      "Soporte prioritario 24/7",
      "Integraciones avanzadas",
      "API de desarrollador",
      "Reportes personalizados",
    ],
    cta: "Comenzar prueba",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para grandes organizaciones",
    features: [
      "Todas las aplicaciones",
      "Usuarios ilimitados",
      "Almacenamiento ilimitado",
      "Soporte dedicado",
      "Onboarding personalizado",
      "SLA garantizado",
      "Infraestructura dedicada",
      "Cumplimiento normativo",
    ],
    cta: "Contactar ventas",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-cyan-50/50 -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl -z-10 animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto">
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
            className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-blue-100 rounded-full"
          >
            💎 Precios Transparentes
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Planes para cada tamaño
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              de empresa
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comienza gratis y escala según tus necesidades. Sin sorpresas, sin costos ocultos.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular 
                  ? "glass-effect border-4 border-blue-300 shadow-2xl shadow-blue-500/40 scale-105 z-10" 
                  : "glass-effect border-2 border-white/50 hover:border-blue-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/50"
                >
                  ⭐ Más popular
                </motion.div>
              )}

              <div className="mb-8 mt-2">
                <h3 className={`text-3xl font-extrabold mb-3 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" 
                    : "text-gray-900"
                }`}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-extrabold ${
                  plan.popular 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" 
                    : "text-gray-900"
                }`}>
                  {plan.price}
                </span>
                <span className="text-gray-600 text-lg ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular 
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500" 
                        : "bg-gradient-to-br from-green-400 to-emerald-600"
                    }`}>
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block text-center py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-blue-500/50 shine-effect"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto border-2 border-white/50 shadow-xl">
            <p className="text-gray-700 text-lg mb-4 font-medium">¿Necesitas más información sobre nuestros planes?</p>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all"
            >
              Comparar todos los planes
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
