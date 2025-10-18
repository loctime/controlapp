"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Sparkles, Zap, Waves, Shapes, Loader, Square, Rocket, RotateCcw, Droplets, Bolt, Fish, Magnet, Dna } from "lucide-react"
import Link from "next/link"

// Importar componentes de animación
import { FloatingParticles } from "@/components/animations/floating-particles"
import { InteractiveWaves } from "@/components/animations/interactive-waves"
import { MorphingShapes } from "@/components/animations/morphing-shapes"
import { CreativeLoaders } from "@/components/animations/creative-loaders"
import { AnimatedGradients } from "@/components/animations/animated-gradients"
import { MagneticCards } from "@/components/animations/magnetic-cards"
import { GlitchMatrix } from "@/components/animations/glitch-matrix"
import { Fireworks } from "@/components/animations/fireworks"
import { HypnoticVortex } from "@/components/animations/hypnotic-vortex"
import { LiquidMorphing } from "@/components/animations/liquid-morphing"
import { Electricity } from "@/components/animations/electricity"
import { WaterWaves } from "@/components/animations/water-waves"
import { MagneticParticles } from "@/components/animations/magnetic-particles"
import { DNAHelix } from "@/components/animations/dna-helix"

const demos = [
  {
    id: "particles",
    title: "Partículas Flotantes",
    description: "Partículas que se mueven de forma orgánica con efectos de brillo",
    icon: Sparkles,
    component: FloatingParticles
  },
  {
    id: "waves",
    title: "Ondas Interactivas", 
    description: "Ondas que siguen tu cursor con partículas magnéticas",
    icon: Waves,
    component: InteractiveWaves
  },
  {
    id: "shapes",
    title: "Morphing Shapes",
    description: "Formas que se transforman con efectos de partículas",
    icon: Shapes,
    component: MorphingShapes
  },
  {
    id: "loaders",
    title: "Loaders Creativos",
    description: "5 animaciones de carga diferentes y súper cool",
    icon: Loader,
    component: CreativeLoaders
  },
  {
    id: "gradients",
    title: "Gradientes Animados",
    description: "Colores que cambian fluidamente con efectos de ondas",
    icon: Zap,
    component: AnimatedGradients
  },
  {
    id: "magnetic",
    title: "Tarjetas Magnéticas",
    description: "Tarjetas que reaccionan al hover con efectos de brillo",
    icon: Sparkles,
    component: MagneticCards
  },
  {
    id: "glitch",
    title: "Glitch Matrix",
    description: "Efecto Matrix con glitch digital y lluvia de código",
    icon: Square,
    component: GlitchMatrix
  },
  {
    id: "fireworks",
    title: "Fuegos Artificiales",
    description: "Explosiones de colores con partículas y humo",
    icon: Rocket,
    component: Fireworks
  },
  {
    id: "vortex",
    title: "Vórtice Hipnótico",
    description: "Espiral hipnótico con controles de velocidad",
    icon: RotateCcw,
    component: HypnoticVortex
  },
  {
    id: "liquid",
    title: "Liquid Morphing",
    description: "Formas líquidas que se transforman con efectos de ondas",
    icon: Droplets,
    component: LiquidMorphing
  },
  {
    id: "electricity",
    title: "Electricidad",
    description: "Rayos eléctricos con campo magnético y chispas",
    icon: Bolt,
    component: Electricity
  },
  {
    id: "water",
    title: "Ondas de Agua",
    description: "Simulación de agua con ondas, lluvia y burbujas",
    icon: Fish,
    component: WaterWaves
  },
  {
    id: "magnetic-particles",
    title: "Partículas Magnéticas",
    description: "Partículas que se atraen con campo magnético interactivo",
    icon: Magnet,
    component: MagneticParticles
  },
  {
    id: "dna",
    title: "Helix de ADN",
    description: "Doble hélice de ADN con enlaces de hidrógeno",
    icon: Dna,
    component: DNAHelix
  }
]

export default function DemosPage() {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-3 text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a ControlApp</span>
            </Link>
            
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              🎪 Laboratorio de Animaciones
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Grid de demos */}
      <div className="max-w-7xl mx-auto p-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div 
                className="cursor-pointer"
                onClick={() => setSelectedDemo(selectedDemo === demo.id ? null : demo.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <demo.icon className="w-6 h-6 text-purple-300" />
                  <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                </div>
                
                <p className="text-white/70 mb-4">{demo.description}</p>
              </div>
              
              <AnimatePresence>
                {selectedDemo === demo.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <demo.component />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
