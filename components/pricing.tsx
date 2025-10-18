"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

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
    <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Planes para cada tamaño de empresa
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comienza gratis y escala según tus necesidades. Sin sorpresas, sin costos ocultos.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular ? "border-2 border-primary shadow-xl scale-105" : "border border-neutral-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                <span className="text-neutral-600">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? "bg-neutral-900 text-white hover:bg-neutral-800"
                    : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">¿Necesitas más información sobre nuestros planes?</p>
          <a href="#" className="text-primary font-medium hover:underline">
            Comparar todos los planes →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
