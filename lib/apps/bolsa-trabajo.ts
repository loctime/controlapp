import { Briefcase, FileText, FolderOpen, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const bolsaTrabajo: PlatformApp = {
  id: "bolsa-trabajo",
  slug: "bolsa-trabajo",
  name: "Bolsa de Trabajo",
  shortDescription: "Software para gestionar candidatos, CVs y perfiles sobre una base compartida de archivos y permisos.",
  category: "talent",
  status: "active",
  icon: Briefcase,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
  color: "from-indigo-500 to-blue-500",
  href: "/bolsa-trabajo",
  features: [
    "Perfiles y postulaciones",
    "CVs y adjuntos",
    "Permisos compartidos",
    "Visibilidad transversal",
    "Integracion con la plataforma",
  ],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "Bolsa de Trabajo | Software para gestionar candidatos y CVs",
    description:
      "Bolsa de Trabajo es el modulo de talento de ControlApp para gestionar candidatos, perfiles y CVs con autenticacion central y storage compartido.",
    canonicalPath: "/bolsa-trabajo",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
    categoryLabel: "Software para candidatos y CVs",
    keywords: {
      primary: "gestion de candidatos y CVs",
      secondary: [
        "bolsa de trabajo para empresas",
        "software de reclutamiento interno",
        "gestionar perfiles y postulaciones",
      ],
      problems: [
        "CVs dispersos",
        "archivos de candidatos en carpetas separadas",
        "falta de contexto entre RRHH y operaciones",
      ],
      industries: ["rrhh", "operaciones", "servicios"],
    },
  },
  landingContent: {
    heroLabel: "Software para candidatos y CVs",
    heroTitle: "Bolsa de Trabajo",
    heroDescription:
      "Bolsa de Trabajo extiende la plataforma hacia talento y seleccion. CVs, archivos adjuntos y accesos viven sobre la misma base compartida para que RRHH no tenga que trabajar con repositorios paralelos.",
    heroStats: {
      value: "Talento conectado",
      label: "a archivos, permisos y otros modulos del ecosistema",
    },
    valueProposition:
      "Si buscas una bolsa de trabajo o software para gestionar candidatos y CVs, este modulo ordena perfiles, postulaciones y adjuntos sobre una plataforma compartida.",
    audiences: [
      {
        title: "Equipos de RRHH",
        description: "Ayuda a centralizar CVs y perfiles con acceso gestionado y mejor contexto documental.",
      },
      {
        title: "Empresas con procesos internos de seleccion",
        description: "Sirve cuando distintas areas participan en evaluacion o seguimiento de candidatos.",
      },
      {
        title: "Organizaciones que ya usan varios modulos",
        description: "Permite sumar talento sin crear otro silo de archivos y usuarios.",
      },
    ],
    problems: [
      "CVs y adjuntos desperdigados en carpetas y correos.",
      "Falta de continuidad entre seleccion, archivo y otras areas.",
      "Dificultad para mantener permisos y contexto sobre documentacion de candidatos.",
    ],
    benefits: [
      "Conecta perfiles y CVs con el storage global.",
      "Comparte login y permisos con el resto del ecosistema.",
      "Evita repositorios paralelos de archivos de candidatos.",
      "Mantiene orden por modulo y colecciones.",
      "Facilita que RRHH use infraestructura ya resuelta.",
      "Prepara el terreno para nuevos modulos de talento.",
    ],
    functionalities: [
      {
        title: "Perfiles y postulaciones",
        description: "Organiza candidatos y postulaciones dentro de un flujo conectado a la plataforma.",
        icon: Briefcase,
      },
      {
        title: "CVs y adjuntos centralizados",
        description: "Los archivos asociados viven dentro del storage global y no en carpetas separadas.",
        icon: FolderOpen,
      },
      {
        title: "Permisos compartidos",
        description: "El acceso se habilita por claims y roles sin crear credenciales aisladas para RRHH.",
        icon: Shield,
      },
      {
        title: "Visibilidad transversal",
        description: "ControlFile puede mostrar documentacion por modulo y coleccion con contexto.",
        icon: FileText,
      },
    ],
    useCases: [
      {
        title: "Procesos de seleccion internos",
        description: "Centraliza perfiles, CVs y adjuntos sin salir del ecosistema operativo de la empresa.",
      },
      {
        title: "Base de talento organizada",
        description: "Ordena candidatos con estructura consistente y permisos por area o proceso.",
      },
      {
        title: "Trabajo entre RRHH y operaciones",
        description: "Comparte contexto documental sin copiar archivos entre sistemas desconectados.",
      },
    ],
    faq: [
      {
        question: "Bolsa de Trabajo sirve para gestionar candidatos y CVs?",
        answer:
          "Si. El modulo esta pensado para organizar perfiles, postulaciones y adjuntos dentro de la misma plataforma compartida.",
      },
      {
        question: "Los CVs quedan centralizados?",
        answer:
          "Si. Los CVs y archivos relacionados viven en el storage global y pueden verse con permisos adecuados.",
      },
      {
        question: "Que valor aporta frente a un repositorio manual?",
        answer:
          "Aporta orden, permisos consistentes y relacion con otros procesos del negocio sin crear un silo adicional para RRHH.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar Bolsa de Trabajo",
      primaryHref: "/bolsa-trabajo",
      secondaryLabel: "Ver storage para CVs y adjuntos",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "Bolsa de Trabajo aprovecha la base comun para talento y seleccion",
      description:
        "La plataforma aporta identidad, archivos y permisos para que RRHH se enfoque en perfiles y procesos, no en infraestructura paralela.",
      bullets: [
        "Comparte autenticacion y permisos con las demas apps.",
        "Publica CVs y adjuntos en el storage global visible desde ControlFile.",
        "Mantiene organizacion por modulo para evitar mezcla de contextos.",
      ],
    },
    relatedApps: [
      {
        slug: "horarios",
        anchor: "Ver software de horarios para equipos y turnos",
        reason: "Horarios Simple complementa procesos de personas con coordinacion operativa.",
      },
      {
        slug: "control-file",
        anchor: "Ver storage compartido para CVs y archivos de candidatos",
        reason: "ControlFile centraliza adjuntos y trazabilidad documental del modulo de talento.",
      },
    ],
  },
}
