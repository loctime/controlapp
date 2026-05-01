import { FileText, FolderOpen, Receipt, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlDoc: PlatformApp = {
  id: "control-doc",
  slug: "control-doc",
  name: "ControlDoc",
  shortDescription: "Software de gestion documental con aprobacion, versionado y control de vencimientos.",
  category: "operations",
  status: "active",
  icon: FileText,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
  color: "from-blue-500 to-cyan-500",
  href: "/control-doc",
  features: [
    "Aprobacion documental",
    "Versionado y control de cambios",
    "Vencimientos y seguimiento",
    "Archivos visibles desde ControlFile",
    "Permisos por modulo",
  ],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlDoc | Software de gestion documental para empresas",
    description:
      "ControlDoc es el software de gestion documental de ControlApp para aprobar, versionar y controlar vencimientos sobre una base compartida de identidad y archivos.",
    canonicalPath: "/control-doc",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    categoryLabel: "Software de gestion documental",
    keywords: {
      primary: "software de gestion documental",
      secondary: [
        "control documental para empresas",
        "versionado de documentos",
        "gestion de vencimientos documentales",
      ],
      problems: [
        "documentos sin aprobacion ni control de cambios",
        "vencimientos repartidos en planillas",
        "archivos de compliance dispersos",
      ],
      industries: ["compliance", "operaciones", "administracion"],
    },
  },
  landingContent: {
    heroLabel: "Software de gestion documental",
    heroTitle: "ControlDoc",
    heroDescription:
      "ControlDoc resuelve aprobacion, versionado y vencimientos documentales sobre la plataforma compartida de ControlApp para que la documentacion empresarial no quede aislada del resto de la operacion.",
    heroStats: {
      value: "Documentos conectados",
      label: "al mismo login, permisos y storage del ecosistema",
    },
    valueProposition:
      "Si buscas software de gestion documental para empresas, ControlDoc combina control editorial con storage compartido y trazabilidad transversal.",
    audiences: [
      {
        title: "Equipos de compliance",
        description: "Util para controlar certificados, procedimientos y documentos con versionado y seguimiento.",
      },
      {
        title: "Operaciones y calidad",
        description: "Ayuda a ordenar instructivos y documentacion operativa sin carpetas paralelas.",
      },
      {
        title: "Administracion documental",
        description: "Conviene cuando varias areas necesitan consultar la misma documentacion con permisos distintos.",
      },
    ],
    problems: [
      "Documentos aprobados sin historial confiable de cambios.",
      "Vencimientos que se controlan fuera del sistema principal.",
      "Falta de visibilidad entre equipos sobre la misma documentacion.",
    ],
    benefits: [
      "Versiona y aprueba documentos sobre una base comun.",
      "Relaciona vencimientos y estados con archivos centralizados.",
      "Evita silos documentales entre areas.",
      "Comparte identidad con el resto de las apps.",
      "Publica archivos en ControlFile segun permisos.",
      "Escala nuevos tipos documentales sin rehacer la infraestructura.",
    ],
    functionalities: [
      {
        title: "Aprobacion documental",
        description: "Gestiona flujos de revision y aprobacion con visibilidad sobre estados y responsables.",
        icon: Shield,
      },
      {
        title: "Versionado",
        description: "Mantiene historial de cambios para procedimientos, certificados y documentos vivos.",
        icon: FileText,
      },
      {
        title: "Control de vencimientos",
        description: "Permite seguir fechas clave dentro del mismo proceso documental.",
        icon: Receipt,
      },
      {
        title: "Storage integrado",
        description: "Los archivos viven en la capa compartida y quedan visibles desde ControlFile segun permisos.",
        icon: FolderOpen,
      },
    ],
    useCases: [
      {
        title: "Procedimientos y manuales",
        description: "Versiona y distribuye instructivos operativos sin perder trazabilidad ni control de acceso.",
      },
      {
        title: "Legajos y certificaciones",
        description: "Ordena certificados, habilitaciones y documentos sujetos a vencimiento.",
      },
      {
        title: "Documentacion multi-area",
        description: "Comparte documentacion entre operaciones, administracion y compliance sin duplicar repositorios.",
      },
    ],
    faq: [
      {
        question: "ControlDoc sirve como software de gestion documental empresarial?",
        answer:
          "Si. Esta pensado para empresas que necesitan aprobar, versionar y seguir vencimientos sobre una base comun de identidad y archivos.",
      },
      {
        question: "Los documentos quedan aislados del resto de la plataforma?",
        answer:
          "No. Los documentos se integran con ControlFile y respetan permisos por modulo para mantener visibilidad con contexto.",
      },
      {
        question: "Que problema resuelve frente a planillas y carpetas?",
        answer:
          "Resuelve desorden, falta de historial y dispersion documental al centralizar procesos y archivos en un mismo flujo.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlDoc",
      primaryHref: "/control-doc",
      secondaryLabel: "Ver como se integra con ControlFile",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "ControlDoc opera sobre la base comun de ControlApp",
      description:
        "La documentacion mantiene contexto de negocio porque comparte autenticacion, permisos y storage con los demas modulos del ecosistema.",
      bullets: [
        "Comparte sesion y acceso con el resto de las apps habilitadas.",
        "Publica documentos en el storage global administrado por ControlFile.",
        "Permite sumar nuevos procesos documentales sin rehacer la base tecnica.",
      ],
    },
    relatedApps: [
      {
        slug: "control-file",
        anchor: "Ver storage compartido para documentos y adjuntos",
        reason: "ControlFile ordena archivos y colecciones publicados por ControlDoc.",
      },
      {
        slug: "control-audit",
        anchor: "Ver software de auditorias con documentacion conectada",
        reason: "Las evidencias de auditoria pueden convivir con documentos controlados.",
      },
    ],
  },
}
