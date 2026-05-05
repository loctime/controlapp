import { FileText, FolderOpen, Receipt, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlDoc: PlatformApp = {
  id: "control-doc",
  slug: "control-doc",
  name: "ControlDoc",
  shortDescription:
    "Semáforo visual de vencimientos, OCR automático de fechas y flujo de aprobación con versiones y trazabilidad completa.",
  category: "operations",
  status: "active",
  icon: FileText,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
  color: "from-blue-500 to-cyan-500",
  href: "/control-doc",
  features: [
    "Detectá vencimientos antes de que pasen",
    "El OCR lee la fecha solo",
    "Aprobá con historial y versiones",
    "Convertí imágenes a PDF",
    "Notificaciones automáticas",
  ],
  cardBadges: ["OCR de fechas", "Semáforo de vencimientos"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    exposedInDrive: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlDoc | Gestión documental con OCR y semáforo de vencimientos",
    description:
      "ControlDoc gestiona documentación de empleados, vehículos y empresa con semáforo visual de vencimientos, OCR automático y flujo de aprobación con trazabilidad completa.",
    canonicalPath: "/control-doc",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    categoryLabel: "Software de gestión documental",
    keywords: {
      primary: "software de gestion documental",
      secondary: [
        "control de vencimientos de documentos",
        "OCR para documentos empresariales",
        "flujo de aprobacion documental",
      ],
      problems: [
        "documentos vencidos sin saberlo",
        "fechas de vencimiento cargadas a mano",
        "aprobaciones sin historial ni trazabilidad",
      ],
      industries: ["compliance", "transporte", "recursos humanos"],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Demo — subir documento, OCR detecta la fecha, aprobación en un click",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Semáforo de vencimientos — verde, amarillo y rojo de un vistazo",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Visor de PDF con OCR detectando la fecha de vencimiento",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Flujo de aprobación — pendiente, aprobado y rechazado con comentario",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Dashboard por entidad — empleados, vehículos y empresa",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "Nunca más se te vence un documento sin saberlo.",
    heroTitle: "ControlDoc",
    heroDescription:
      "ControlDoc gestiona documentación de empleados, vehículos y empresa con semáforo visual de vencimientos, OCR automático para detectar fechas y flujo de aprobación con versiones y trazabilidad completa.",
    heroStats: {
      value: "Semáforo visual",
      label: "verde, amarillo y rojo por cada documento según su estado",
    },
    valueProposition:
      "Si gestionás documentos con fechas de vencimiento y necesitás saber en todo momento qué está al día y qué no, ControlDoc es el panel centralizado que reemplaza el Excel de vencimientos.",
    audiences: [
      {
        title: "Empresas de transporte con flota",
        description:
          "Cada vehículo necesita seguro, VTV y libreta del conductor. El semáforo avisa cuando algo está por vencer, sin recordatorios manuales.",
      },
      {
        title: "RRHH con empleados en relación de dependencia",
        description:
          "Contratos, carnets de salud y certificados por empleado. Si alguien sube un documento desactualizado, el admin lo rechaza con comentario.",
      },
      {
        title: "Consultoras que gestionan documentación de clientes",
        description:
          "Cada cliente tiene su propio dashboard. La empresa principal ve todo desde su vista global. Un documento requerido puede aplicar a uno o varios clientes.",
      },
    ],
    problems: [
      "Documentos que vencen sin aviso porque el control está en un Excel desactualizado.",
      "Fechas de vencimiento cargadas a mano con errores de tipeo.",
      "Aprobaciones sin historial — no se sabe quién aprobó ni cuándo.",
    ],
    benefits: [
      "Semáforo verde/amarillo/rojo visible de un vistazo para toda la documentación.",
      "OCR lee la fecha de vencimiento del PDF automáticamente — sin tipear.",
      "Cada aprobación incrementa el número de versión con responsable y fecha.",
      "Imágenes y Word se convierten a PDF automáticamente durante la aprobación.",
      "Notificaciones por email cuando un documento está por vencer.",
      "Sistema de subempresas para gestionar documentación de múltiples clientes.",
    ],
    functionalities: [
      {
        title: "Semáforo visual de vencimientos",
        description:
          "Verde, amarillo y rojo por cada documento. El sistema clasifica vencidos, próximos a vencer, rechazados y pendientes. De un vistazo sabés qué necesita atención.",
        icon: Shield,
      },
      {
        title: "OCR automático de fechas",
        description:
          "Subís un PDF o imagen y el sistema lee el texto con OCR y propone la fecha de vencimiento detectada. La seleccionás con un click desde el visor. Sin tipear fechas.",
        icon: FileText,
      },
      {
        title: "Flujo de aprobación con versiones",
        description:
          "Pendiente → Aprobado / Rechazado. Cada aprobación incrementa el número de versión. El admin puede comentar al rechazar. Trazabilidad completa: quién aprobó y cuándo.",
        icon: Receipt,
      },
      {
        title: "Conversión automática a PDF",
        description:
          "Si el usuario sube una imagen JPG/PNG o un Word, se convierte automáticamente a PDF durante la aprobación. Sin pedirle nada al usuario.",
        icon: FileText,
      },
      {
        title: "Entidades flexibles",
        description:
          "Empresa, empleados, vehículos y personalizados. Un documento requerido puede aplicar a una o varias entidades. Toda la documentación en el mismo sistema.",
        icon: FolderOpen,
      },
      {
        title: "Gestión de clientes y subempresas",
        description:
          "Una empresa principal puede gestionar múltiples clientes con documentación separada. Selector de empresa activa. Un documento requerido puede aplicar a la empresa principal, todos los clientes, o clientes específicos.",
        icon: Shield,
      },
      {
        title: "Personalización visual por empresa",
        description:
          "Colores corporativos configurables. El sistema recalcula contraste automáticamente. Cada empresa tiene su propia paleta visual.",
        icon: FolderOpen,
      },
      {
        title: "Notificaciones automáticas de vencimientos",
        description:
          "Cuando un documento está por vencer, se envía notificación por email. Sin revisar el dashboard todos los días.",
        icon: Receipt,
      },
    ],
    useCases: [
      {
        title: "Empresa de transporte con flota",
        description:
          "Cada vehículo necesita seguro, VTV, libreta del conductor. Semáforo en rojo cuando la VTV vence. Sin Excel, sin recordatorios manuales.",
      },
      {
        title: "Empresa con empleados en relación de dependencia",
        description:
          "Contratos, carnets de salud, certificados de capacitación por empleado. Si el empleado sube uno desactualizado, el admin lo rechaza con comentario y queda el historial.",
      },
      {
        title: "Consultora que gestiona documentación de sus clientes",
        description:
          "Cada cliente tiene su propio dashboard. La empresa principal ve todo desde su vista global. Un documento requerido aplica a uno o varios clientes con aislamiento de datos.",
      },
    ],
    faq: [
      {
        question: "¿Qué tipos de archivo acepta?",
        answer:
          "PDF, JPG, PNG, DOC, DOCX. Las imágenes y Word se convierten automáticamente a PDF durante la aprobación.",
      },
      {
        question: "¿El OCR funciona en todos los PDFs?",
        answer:
          "En PDFs con texto legible sí. En documentos escaneados depende de la calidad de la imagen.",
      },
      {
        question: "¿Se puede usar para empleados Y vehículos?",
        answer:
          "Sí. Los documentos requeridos se configuran por tipo de entidad: empresa, empleado, vehículo o personalizado.",
      },
      {
        question: "¿Qué pasa cuando vence un documento?",
        answer:
          "Aparece en rojo en el semáforo y se envían notificaciones automáticas por email.",
      },
      {
        question: "¿Puede gestionar documentación de clientes?",
        answer:
          "Sí. Tiene sistema de subempresas con aislamiento de datos y vista global para la empresa principal.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlDoc",
      primaryHref: "/control-doc",
      secondaryLabel: "Ver cómo se integra con ControlFile",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "ControlDoc opera sobre la base común de ControlApps",
      description:
        "La documentación mantiene contexto de negocio porque comparte autenticación, permisos y storage con los demás módulos del ecosistema.",
      bullets: [
        "Comparte sesión y acceso con el resto de las apps habilitadas.",
        "Publica documentos en el almacenamiento compartido, accesible desde ControlFile.",
        "Permite sumar nuevos procesos documentales sin rehacer la base técnica.",
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
        anchor: "Ver software de auditorías con documentación conectada",
        reason: "Las evidencias de auditoría pueden convivir con documentos controlados.",
      },
    ],
  },
}
