import { FolderOpen, Lock, Shield } from "lucide-react"
import { bolsaTrabajo } from "@/lib/apps/bolsa-trabajo"
import { controlAudit } from "@/lib/apps/control-audit"
import { controlDoc } from "@/lib/apps/control-doc"
import { controlFile } from "@/lib/apps/control-file"
import { controlGastos } from "@/lib/apps/control-gastos"
import { controlMarket } from "@/lib/apps/control-market"
import { controlVentas } from "@/lib/apps/control-ventas"
import { horariosSimple } from "@/lib/apps/horarios"

export type { PlatformApp, PlatformAppStatus, PlatformAppCategory, PlatformCapability, AppLandingSectionItem, FAQItem, RelatedAppLink, KeywordProfile, AppLandingContent } from "@/lib/platform-types"

export const platformOverview = {
  eyebrow: "Plataforma centralizada",
  heroBadge: "Una cuenta. Todas tus apps operativas.",
  heroTitle: "ControlApps centraliza software de gestion por modulos sobre una sola plataforma",
  heroDescription:
    "ControlApps es una plataforma multi-app para empresas que necesitan gestion documental, auditorias, archivos, gastos, ventas, horarios y talento sobre una misma base de identidad, permisos y archivos.",
  heroPrimaryCta: {
    label: "Explorar software por modulo",
    href: "#apps",
  },
  heroSecondaryCta: {
    label: "Entender como funciona",
    href: "#arquitectura",
  },
  heroHighlights: [
    "Una cuenta para entrar a todas las apps habilitadas",
    "Permisos por modulo y acceso segun rol",
    "Almacenamiento centralizado para documentos, evidencias y comprobantes",
  ],
  searchIntents: [
    "software de gestion documental",
    "software de auditorias",
    "control de gastos empresarial",
    "gestion de horarios para equipos",
    "gestion de candidatos y CVs",
  ],
  architecture: {
    eyebrow: "Como funciona",
    title: "La plataforma comparte identidad, permisos y archivos entre modulos",
    description:
      "La experiencia esta pensada para empresas que quieren sumar software por proceso sin duplicar logins, repositorios ni reglas de acceso. Cada modulo resuelve un problema operativo puntual y se conecta con la misma base comun.",
    steps: [
      {
        title: "Login unico",
        description:
          "La autenticacion es compartida. Una misma cuenta sirve para entrar a las apps habilitadas sin crear credenciales separadas.",
      },
      {
        title: "Permisos por modulo",
        description:
          "Cada app valida claims y permisos antes de mostrar informacion. El acceso se controla por rol y por proceso.",
      },
      {
        title: "Almacenamiento centralizado",
        description:
          "Los archivos viven en una capa comun. Documentos, evidencias y comprobantes no quedan encerrados en silos por producto.",
      },
      {
        title: "Trazabilidad transversal",
        description:
          "ControlFile ordena archivos por app y coleccion para que cada area pueda encontrar contexto sin perder seguridad.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capacidades compartidas",
    title: "Lo que hereda cada nueva app del ecosistema ControlApps",
    description:
      "Cada modulo nuevo se monta sobre una arquitectura ya resuelta para identidad, permisos y archivos. Eso acelera el despliegue y mejora la consistencia operativa.",
    items: [
      {
        title: "Auth central",
        description: "Las apps comparten autenticacion y experiencia de acceso con una sola cuenta.",
        icon: Lock,
      },
      {
        title: "Permisos por app",
        description: "El acceso se habilita segun claims y roles, no con usuarios duplicados por sistema.",
        icon: Shield,
      },
      {
        title: "Almacenamiento centralizado",
        description: "Archivos, fotos y adjuntos viven en una capa comun lista para reutilizacion.",
        icon: FolderOpen,
      },
    ],
  },
  audiences: {
    eyebrow: "Para que empresas sirve",
    title: "Una plataforma pensada para equipos que necesitan varios procesos conectados",
    description:
      "ControlApps encaja mejor en organizaciones que ya operan con documentos, evidencias, comprobantes y flujos internos repartidos entre varias herramientas.",
    items: [
      {
        title: "Operaciones y compliance",
        description: "Empresas que necesitan auditar procesos, controlar documentos y mantener evidencias con acceso seguro.",
      },
      {
        title: "Administracion y finanzas",
        description: "Equipos que quieren conectar gastos, caja diaria y adjuntos dentro del mismo ecosistema operativo.",
      },
      {
        title: "RRHH y coordinacion de equipos",
        description: "Areas que necesitan gestionar candidatos, CVs y horarios sin depender de planillas o carpetas separadas.",
      },
    ],
  },
  appsSection: {
    eyebrow: "Apps activas",
    title: "Software empresarial por modulo, conectado sobre la misma plataforma",
    description:
      "Cada landing compite por su propia necesidad de busqueda, pero todas las apps comparten autenticacion, permisos y almacenamiento centralizado para evitar sistemas aislados.",
  },
  entity: {
    eyebrow: "Que es ControlApps",
    title: "ControlApps no es una app aislada: es una base comun para software operativo",
    description:
      "La propuesta del producto es reemplazar islas de software por un ecosistema coherente. Cada modulo aporta profundidad funcional en su dominio y la plataforma resuelve la capa comun de identidad, archivos y gobierno de acceso.",
    bullets: [
      "Una plataforma para operar documentos, auditorias, archivos, gastos, ventas, horarios y talento.",
      "Un modelo de crecimiento modular para sumar nuevos procesos sin rehacer la base tecnica.",
      "Una fuente consistente para que Google y motores de IA entiendan relacion entre marca, plataforma y productos.",
    ],
    trustSignals: [
      "Narrativa consistente entre home, metadata y landings de producto.",
      "Paginas dedicadas por modulo con definiciones, casos de uso y preguntas frecuentes.",
      "Enlazado interno para explicar como se conectan las apps entre si.",
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas claras para compradores y asistentes de IA",
    description:
      "Estas respuestas resumen los conceptos que mas conviene explicar de forma directa cuando alguien descubre ControlApps por primera vez.",
    items: [
      {
        question: "Que es ControlApps?",
        answer:
          "ControlApps es una plataforma multi-app para empresas que centraliza autenticacion, permisos y archivos para varios modulos operativos y administrativos.",
      },
      {
        question: "Que diferencia a ControlApps de usar herramientas separadas?",
        answer:
          "La diferencia principal es la base compartida. Los modulos no trabajan como islas: comparten identidad, storage y trazabilidad para reducir friccion operativa.",
      },
      {
        question: "Que tipo de modulos incluye hoy?",
        answer:
          "Hoy incluye modulos para gestion documental, auditorias, almacenamiento centralizado, gastos, ventas, caja diaria, punto de venta, horarios y gestion de candidatos.",
      },
      {
        question: "Como funciona ControlFile dentro de la plataforma?",
        answer:
          "ControlFile es el explorador de archivos transversal del ecosistema. Los documentos, evidencias y adjuntos que generan las demas apps quedan accesibles desde ControlFile segun permisos.",
      },
      {
        question: "¿Puedo usar solo una app sin contratar todo el paquete?",
        answer: "Sí, cada módulo se habilita de forma independiente.",
      },
      {
        question: "¿Las apps funcionan en el celular?",
        answer: "Sí, la mayoría son PWA instalables en Android e iOS desde el navegador.",
      },
    ],
  },
  footer: {
    description:
      "Plataforma multi-app para gestion documental, auditorias, archivos, finanzas, horarios y talento con identidad compartida y almacenamiento centralizado.",
  },
}

export const platformApps = [
  controlFile,
  controlDoc,
  controlAudit,
  horariosSimple,
  controlGastos,
  controlVentas,
  bolsaTrabajo,
  controlMarket,
]

export const navigationLinks = [
  { name: "Como funciona", href: "#arquitectura" },
  { name: "Empresas", href: "#empresas" },
  { name: "Apps", href: "#apps" },
  { name: "Demos", href: "/demos" },
  { name: "FAQ", href: "#faq" },
  { name: "Metodología", href: "/metodologia" },
]

export const activePlatformApps = platformApps.filter((app) => app.status === "active")

export function getPlatformAppBySlug(slug: string) {
  return platformApps.find((app) => app.slug === slug)
}
