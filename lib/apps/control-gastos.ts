import { FileText, FolderOpen, Lock, Receipt } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlGastos: PlatformApp = {
  id: "control-gastos",
  slug: "control-gastos",
  name: "ControlGastos",
  shortDescription:
    "PWA con dashboard visual, gastos recurrentes por frecuencia, historial con gráficos e integración con ControlFile para comprobantes. Modo oscuro incluido.",
  category: "finance",
  status: "active",
  icon: Receipt,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
  color: "from-amber-500 to-orange-500",
  href: "/control-gastos",
  features: [
    "Registrá gastos en segundos",
    "Adjuntá el comprobante",
    "Los recurrentes se crean solos",
    "Ves si tus gastos crecen",
    "Todo en el celular, modo oscuro",
  ],
  cardBadges: ["Gastos recurrentes", "Comprobantes en ControlFile"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    exposedInDrive: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlGastos | Control de gastos con comprobantes y dashboard visual",
    description:
      "ControlGastos registra tus gastos fijos, adjunta el comprobante en ControlFile y muestra si tus gastos crecen mes a mes. PWA instalable con modo oscuro.",
    canonicalPath: "/control-gastos",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
    categoryLabel: "Software de control de gastos",
    keywords: {
      primary: "control de gastos con comprobantes",
      secondary: [
        "gastos recurrentes automaticos",
        "dashboard de gastos con graficos",
        "software de gastos para pymes",
      ],
      problems: [
        "gastos fijos sin comprobante archivado",
        "sin saber si los gastos crecen mes a mes",
        "comprobantes sueltos en el celular o email",
      ],
      industries: ["administración", "emprendedores", "pymes"],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Demo — registrar gasto recurrente y adjuntar comprobante en ControlFile",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Dashboard — total del mes, pendientes y pagados",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Historial con gráfico de evolución por período y categoría",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Modo oscuro en celular",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "Registrá tus gastos fijos, adjuntá el comprobante y sabé siempre cuánto gastás.",
    heroTitle: "ControlGastos",
    heroDescription:
      "PWA instalable con dashboard visual, gastos recurrentes por frecuencia, historial con gráficos e integración con ControlFile para comprobantes. Modo oscuro incluido.",
    heroStats: {
      value: "Dashboard visual",
      label: "total del mes, pendientes y pagados de un vistazo",
    },
    valueProposition:
      "Si llevás los gastos en una planilla y guardás los comprobantes en el celular, ControlGastos los centraliza con dashboard, recurrentes automáticos y comprobantes archivados.",
    audiences: [
      {
        title: "Responsable de administración con gastos fijos",
        description:
          "Lleva alquiler, servicios y otros gastos mensuales con comprobantes archivados y accesibles desde ControlFile.",
      },
      {
        title: "Emprendedor que quiere ver si sus gastos crecen",
        description:
          "Dashboard con evolución mes a mes y comprobante adjunto a cada gasto para tener el respaldo donde corresponde.",
      },
    ],
    problems: [
      "Los gastos fijos se registran en Excel y los comprobantes quedan sueltos en el celular o el email.",
      "No hay forma de ver si los gastos crecen mes a mes sin armar una planilla.",
      "Los recurrentes hay que cargarlos manualmente todos los meses.",
    ],
    benefits: [
      "Dashboard con total del mes, pendientes y pagados en un solo vistazo.",
      "Gastos recurrentes que se generan solos — configurás la frecuencia una vez.",
      "Historial con gráficos para ver tendencias por categoría y período.",
      "Comprobante adjunto en ControlFile con organización automática.",
      "Link permanente para compartir el comprobante cuando hace falta.",
      "PWA instalable con modo oscuro para uso diario desde el celular.",
    ],
    functionalities: [
      {
        title: "Dashboard con resumen visual",
        description:
          "Total del mes, pendientes de pago y ya pagados. Indicadores de estado con colores semánticos: verde pagado, amarillo pendiente.",
        icon: Receipt,
      },
      {
        title: "Gastos recurrentes automáticos",
        description:
          "Marcá un gasto como recurrente con frecuencia semanal, mensual o anual. Se genera automáticamente en el período siguiente.",
        icon: FileText,
      },
      {
        title: "Historial con gráficos interactivos",
        description:
          "Evolución de gastos por período. Filtrá por categoría o estado. Gráficos Recharts con tendencias.",
        icon: FolderOpen,
      },
      {
        title: "Comprobantes adjuntos en ControlFile",
        description:
          "Adjuntá factura o comprobante al gasto. Se organiza automáticamente en ControlFile por usuario y tipo. Generá link permanente para compartirlo.",
        icon: FolderOpen,
      },
      {
        title: "PWA instalable con modo oscuro",
        description:
          "Instalable en celular y desktop. Modo oscuro automático. Diseño responsive para uso móvil.",
        icon: Lock,
      },
      {
        title: "Un login con el ecosistema",
        description:
          "Misma cuenta de ControlApps da acceso directo a ControlFile, sin popups ni relogin.",
        icon: Lock,
      },
    ],
    useCases: [
      {
        title: "Responsable de administración con gastos fijos mensuales",
        description:
          "Lleva alquiler, servicios y otros gastos recurrentes con comprobantes archivados en ControlFile y accesibles en cualquier momento.",
      },
      {
        title: "Emprendedor que quiere ver si sus gastos crecen mes a mes",
        description:
          "Dashboard con evolución por categoría y comprobante adjunto a cada gasto. Sin planillas ni comprobantes sueltos.",
      },
    ],
    faq: [
      {
        question: "¿Los recurrentes se crean solos?",
        answer:
          "Sí. Configurás la frecuencia (semanal, mensual, anual) una vez y el sistema genera el gasto automáticamente en el período siguiente.",
      },
      {
        question: "¿Puedo adjuntar facturas?",
        answer:
          "Sí. Se guardan en ControlFile con organización automática y podés generar un link permanente para compartirlos.",
      },
      {
        question: "¿Funciona en el celular?",
        answer: "Sí, PWA instalable en Android y desktop con modo oscuro incluido.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlGastos",
      primaryHref: "/control-gastos",
      secondaryLabel: "Ver storage para comprobantes",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "ControlGastos aprovecha la infraestructura común del ecosistema",
      description:
        "El módulo se concentra en el dominio financiero mientras la plataforma resuelve autenticación, permisos y archivos compartidos.",
      bullets: [
        "Comparte sesión con el resto del ecosistema.",
        "Guarda comprobantes en el almacenamiento compartido, accesible desde ControlFile.",
        "Expone adjuntos en ControlFile con organización por módulo y colección.",
      ],
    },
    relatedApps: [
      {
        slug: "control-file",
        anchor: "Ver storage compartido para comprobantes y adjuntos",
        reason: "ControlFile centraliza los respaldos de ControlGastos y otros módulos.",
      },
      {
        slug: "control-ventas",
        anchor: "Ver módulo comercial conectado a caja y documentación",
        reason: "ControlVentas complementa gastos con operación comercial y caja diaria.",
      },
    ],
  },
}
