import { FileText, Shield, Briefcase, TrendingUp, Receipt } from "lucide-react"
import { Solution } from "./types"

export const solutionsEmpresas: Solution[] = [
  {
    name: "ControlDoc",
    description: "Gestión documental multi-tenant con aprobación, versionado y control de vencimientos",
    icon: FileText,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    features: ["Aprobación de documentos", "OCR inteligente", "Control de vencimientos"],
    color: "from-blue-500 to-cyan-500",
    href: "/control-doc"
  },
  {
    name: "ControlAudit",
    description: "Sistema de auditorías offline con formularios personalizados y reportes automatizados",
    icon: Shield,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
    features: ["Modo offline completo", "Formularios personalizados", "Reportes en PDF"],
    color: "from-emerald-500 to-teal-500",
    href: "/control-audit"
  },
  {
    name: "Bolsa de Trabajo",
    description: "Plataforma completa para gestión de CVs con generador y dashboard administrativo",
    icon: Briefcase,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
    features: ["Generador de CVs", "Dashboard admin", "Notificaciones por email"],
    color: "from-indigo-500 to-blue-500",
    href: "/bolsa-trabajo"
  },
  {
    name: "Control Ventas",
    description: "Control de caja diario para pequeños negocios con cierre y análisis",
    icon: TrendingUp,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
    features: ["Cierre de caja", "Múltiples métodos de pago", "Historial completo"],
    color: "from-cyan-500 to-blue-500",
    href: "/control-ventas"
  },
]

export const solutionsPersonas: Solution[] = [
  {
    name: "ControlGastos",
    description: "Gestión inteligente de gastos fijos mensuales con notificaciones automáticas",
    icon: Receipt,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
    features: ["Gastos recurrentes", "Notificaciones push", "Integración con ControlFile"],
    color: "from-amber-500 to-orange-500",
    href: "/control-gastos"
  },
]

