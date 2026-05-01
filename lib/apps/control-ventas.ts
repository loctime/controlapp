import { FileText, FolderOpen, Shield, TrendingUp } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlVentas: PlatformApp = {
  id: "control-ventas",
  slug: "control-ventas",
  name: "ControlVentas",
  shortDescription: "Software de operacion comercial y caja diaria conectado al storage y permisos del ecosistema.",
  category: "finance",
  status: "active",
  icon: TrendingUp,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
  color: "from-cyan-500 to-blue-500",
  href: "/control-ventas",
  features: [
    "Caja diaria",
    "Operacion comercial",
    "Documentacion integrada",
    "Permisos por rol",
    "Integracion con ControlFile",
  ],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlVentas | Software de operacion comercial y caja diaria",
    description:
      "ControlVentas es el software comercial de ControlApp para caja diaria y documentacion asociada con autenticacion compartida y storage global.",
    canonicalPath: "/control-ventas",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
    categoryLabel: "Software comercial y caja diaria",
    keywords: {
      primary: "software de operacion comercial",
      secondary: [
        "caja diaria para negocios",
        "control comercial con adjuntos",
        "software de ventas interno",
      ],
      problems: [
        "caja diaria separada del archivo",
        "falta de trazabilidad comercial",
        "documentacion comercial dispersa",
      ],
      industries: ["retail", "comercio", "operaciones"],
    },
  },
  landingContent: {
    heroLabel: "Software comercial y caja diaria",
    heroTitle: "ControlVentas",
    heroDescription:
      "ControlVentas trabaja sobre la misma plataforma compartida de ControlApp para unificar identidad, permisos y documentacion comercial alrededor de la operacion diaria.",
    heroStats: {
      value: "Operacion conectada",
      label: "a archivos, permisos y otros modulos del ecosistema",
    },
    valueProposition:
      "Si buscas software de operacion comercial o caja diaria, ControlVentas integra procesos comerciales con adjuntos y acceso centralizado.",
    audiences: [
      {
        title: "Locales y puntos de venta",
        description: "Sirve para negocios que necesitan relacionar operacion diaria con documentacion y control interno.",
      },
      {
        title: "Administracion comercial",
        description: "Aporta una base comun para trabajar con permisos, adjuntos y trazabilidad.",
      },
      {
        title: "Equipos que crecen por modulos",
        description: "Ayuda a sumar funciones comerciales sin romper la coherencia del ecosistema.",
      },
    ],
    problems: [
      "Caja diaria gestionada fuera del sistema principal.",
      "Documentacion comercial sin orden ni acceso unificado.",
      "Friccion entre ventas, administracion y archivo.",
    ],
    benefits: [
      "Integra operacion comercial con otros modulos del ecosistema.",
      "Mantiene acceso por permisos sin credenciales separadas.",
      "Conecta tickets y adjuntos al storage global.",
      "Facilita trazabilidad por modulo comercial.",
      "Evita silos entre ventas, archivos y administracion.",
      "Permite sumar funciones sin rehacer la base tecnica.",
    ],
    functionalities: [
      {
        title: "Caja diaria",
        description: "Gestiona movimientos comerciales cotidianos dentro del ecosistema compartido.",
        icon: TrendingUp,
      },
      {
        title: "Documentacion integrada",
        description: "Adjuntos y comprobantes se ordenan en el storage global y quedan disponibles con contexto.",
        icon: FolderOpen,
      },
      {
        title: "Permisos por rol",
        description: "El acceso al modulo se resuelve por claims y roles dentro de la misma plataforma.",
        icon: Shield,
      },
      {
        title: "Escalabilidad comercial",
        description: "Permite crecer en procesos comerciales sin rehacer identidad o archivos.",
        icon: FileText,
      },
    ],
    useCases: [
      {
        title: "Locales y sucursales",
        description: "Controla cierres y movimientos diarios con documentacion asociada y acceso centralizado.",
      },
      {
        title: "Negocios con administracion interna",
        description: "Conecta caja diaria con procesos de soporte y archivo en una misma plataforma.",
      },
      {
        title: "Operacion comercial escalable",
        description: "Suma nuevos procesos sin multiplicar accesos ni sistemas aislados.",
      },
    ],
    faq: [
      {
        question: "ControlVentas sirve para caja diaria y operacion comercial?",
        answer:
          "Si. El modulo esta orientado a ordenar operacion comercial, caja diaria y documentacion relacionada dentro del mismo ecosistema.",
      },
      {
        question: "Los adjuntos comerciales quedan integrados con otros modulos?",
        answer:
          "Si. Los archivos pueden ordenarse en el storage global y consultarse desde ControlFile segun permisos.",
      },
      {
        question: "Que aporta frente a una herramienta comercial aislada?",
        answer:
          "Aporta identidad compartida, permisos comunes y continuidad con otras areas como gastos, archivos y documentacion.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlVentas",
      primaryHref: "/control-ventas",
      secondaryLabel: "Ver modulo de gastos conectado",
      secondaryHref: "/control-gastos",
    },
    platformIntegration: {
      title: "ControlVentas usa la misma capa comun del ecosistema",
      description:
        "Operacion comercial, archivos y permisos hablan el mismo idioma para evitar procesos aislados.",
      bullets: [
        "Comparte autenticacion con otros modulos activos.",
        "Puede publicar documentacion comercial en el storage global.",
        "Mantiene visibilidad controlada desde ControlFile segun permisos.",
      ],
    },
    relatedApps: [
      {
        slug: "control-gastos",
        anchor: "Ver software de gastos y comprobantes conectado a ventas",
        reason: "ControlGastos complementa ControlVentas con seguimiento financiero y respaldos.",
      },
      {
        slug: "control-file",
        anchor: "Ver storage compartido para tickets y archivos comerciales",
        reason: "ControlFile centraliza documentacion comercial y adjuntos operativos.",
      },
    ],
  },
}
