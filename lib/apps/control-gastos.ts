import { FileText, FolderOpen, Lock, Receipt } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlGastos: PlatformApp = {
  id: "control-gastos",
  slug: "control-gastos",
  name: "ControlGastos",
  shortDescription: "Software de control de gastos y comprobantes con adjuntos conectados al storage global.",
  category: "finance",
  status: "active",
  icon: Receipt,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
  color: "from-amber-500 to-orange-500",
  href: "/control-gastos",
  features: [
    "Registro de gastos",
    "Comprobantes adjuntos",
    "Acceso compartido",
    "Orden por modulo y coleccion",
    "Integracion con ControlFile",
  ],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlGastos | Software de control de gastos empresarial",
    description:
      "ControlGastos es el software de control de gastos de ControlApp para registrar comprobantes y adjuntos con autenticacion compartida y storage global.",
    canonicalPath: "/control-gastos",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
    categoryLabel: "Software de control de gastos",
    keywords: {
      primary: "control de gastos empresarial",
      secondary: [
        "software de comprobantes",
        "gestion de gastos con adjuntos",
        "registro de gastos para empresas",
      ],
      problems: [
        "comprobantes fuera del sistema",
        "gastos distribuidos en carpetas separadas",
        "falta de trazabilidad financiera",
      ],
      industries: ["administracion", "finanzas", "operaciones"],
    },
  },
  landingContent: {
    heroLabel: "Software de control de gastos",
    heroTitle: "ControlGastos",
    heroDescription:
      "ControlGastos administra gastos y comprobantes sin salir del ecosistema de ControlApp. Los adjuntos se conectan con el storage global y respetan los mismos permisos del resto de la plataforma.",
    heroStats: {
      value: "Comprobantes conectados",
      label: "al mismo login, permisos y storage del negocio",
    },
    valueProposition:
      "Si buscas control de gastos empresarial con comprobantes integrados, ControlGastos ordena registros y adjuntos dentro de una plataforma compartida.",
    audiences: [
      {
        title: "Equipos administrativos",
        description: "Ayuda a ordenar gastos operativos y documentacion de soporte en un flujo mas consistente.",
      },
      {
        title: "Areas financieras",
        description: "Sirve para conectar gastos, comprobantes y contexto documental sin carpetas separadas.",
      },
      {
        title: "Empresas con multiples procesos internos",
        description: "Mantiene continuidad entre finanzas, archivos y otros modulos del negocio.",
      },
    ],
    problems: [
      "Comprobantes guardados fuera del sistema o en repositorios paralelos.",
      "Gastos sin trazabilidad documental clara por proceso o area.",
      "Friccion al pasar de la gestion financiera al archivo de soporte.",
    ],
    benefits: [
      "Conecta recibos y comprobantes con el storage global.",
      "Comparte identidad y permisos con otras apps.",
      "Evita adjuntos sueltos fuera del sistema principal.",
      "Mantiene trazabilidad por modulo y coleccion.",
      "Facilita escalar procesos financieros sin rehacer auth.",
      "Mejora orden y recuperacion de documentacion de gastos.",
    ],
    functionalities: [
      {
        title: "Registro de gastos",
        description: "Gestiona egresos y movimientos con una experiencia conectada al ecosistema administrativo.",
        icon: Receipt,
      },
      {
        title: "Comprobantes adjuntos",
        description: "Asocia comprobantes y respaldos al storage global para consulta posterior.",
        icon: FolderOpen,
      },
      {
        title: "Acceso unificado",
        description: "Los usuarios comparten login con el resto de las apps y acceden segun permisos.",
        icon: Lock,
      },
      {
        title: "Contexto financiero",
        description: "Los archivos quedan ordenados por origen y coleccion para no perder trazabilidad.",
        icon: FileText,
      },
    ],
    useCases: [
      {
        title: "Administracion interna",
        description: "Ordena gastos recurrentes y respaldos documentales con acceso centralizado.",
      },
      {
        title: "Seguimiento de comprobantes",
        description: "Evita que los recibos queden repartidos en carpetas externas o canales manuales.",
      },
      {
        title: "Trabajo entre areas",
        description: "Conecta finanzas, administracion y archivo en la misma plataforma operativa.",
      },
    ],
    faq: [
      {
        question: "ControlGastos funciona como software de control de gastos para empresas?",
        answer:
          "Si. Esta orientado a registrar gastos y comprobantes con una base comun de identidad, permisos y archivos.",
      },
      {
        question: "Donde se guardan los comprobantes?",
        answer:
          "Se guardan en el storage global del ecosistema y pueden consultarse desde ControlFile segun permisos.",
      },
      {
        question: "Que ventaja tiene frente a planillas y carpetas separadas?",
        answer:
          "Permite mantener gastos y respaldos dentro del mismo flujo operativo, con mejor trazabilidad y menos dispersion.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlGastos",
      primaryHref: "/control-gastos",
      secondaryLabel: "Ver storage para comprobantes",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "ControlGastos aprovecha la infraestructura comun del ecosistema",
      description:
        "El modulo se concentra en el dominio financiero mientras la plataforma resuelve autenticacion, permisos y archivos compartidos.",
      bullets: [
        "Comparte sesion con el resto del ecosistema.",
        "Guarda comprobantes dentro del storage global.",
        "Expone adjuntos en ControlFile con organizacion por modulo y coleccion.",
      ],
    },
    relatedApps: [
      {
        slug: "control-file",
        anchor: "Ver storage compartido para comprobantes y adjuntos",
        reason: "ControlFile centraliza los respaldos de ControlGastos y otros modulos.",
      },
      {
        slug: "control-ventas",
        anchor: "Ver modulo comercial conectado a caja y documentacion",
        reason: "ControlVentas complementa gastos con operacion comercial y caja diaria.",
      },
    ],
  },
}
