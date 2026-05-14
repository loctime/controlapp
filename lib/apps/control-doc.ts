import { FileText, FolderOpen, Receipt, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlDoc: PlatformApp = {
  id: "control-doc",
  slug: "control-doc",
  name: "ControlDoc",
  shortDescription:
    "Plataforma SaaS para la gestión integral de documentación y contratistas. Auditoría asistida por OCR, trazabilidad total y semáforo de cumplimiento en tiempo real.",
  category: "operations",
  status: "active",
  icon: FileText,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
  color: "from-blue-500 to-cyan-500",
  href: "/control-doc",
  features: [
    "Centralizá empleados, flota y subcontratistas",
    "Auditoría con OCR para eliminar errores de carga",
    "Flujo de aprobación con historial y versiones",
    "Conversión automática de adjuntos a PDF",
    "Tableros de control para toma de decisiones",
  ],
  cardBadges: ["SaaS de Gestión", "Cumplimiento Legal"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    exposedInDrive: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlDoc | Gestión Documental y Control de Contratistas con OCR",
    description:
      "Modernizá el control de cumplimiento de tu empresa. ControlDoc ofrece una plataforma intuitiva para auditar documentación de personal y flota con trazabilidad absoluta.",
    canonicalPath: "/control-doc",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    categoryLabel: "Software de gestión documental y compliance",
    keywords: {
      primary: "gestion documental de contratistas",
      secondary: [
        "auditoria de documentos rrhh",
        "compliance de flota vehicular",
        "trazabilidad documental saas",
        "software de gestion de contratistas",
      ],
      problems: [
        "incumplimiento legal por documentos vencidos",
        "errores humanos en carga de fechas",
        "falta de transparencia en aprobaciones",
      ],
      industries: ["logistica", "energia", "recursos humanos", "seguridad e higiene"],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Panel de control centralizado — image_da769a.png",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Gestión visual — image_da767c.png",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Visor de auditoría con detección inteligente de fechas",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Historial de versiones y responsables por documento",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Configuración de sub-empresas para consultoras y BPO",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "Gestión documental profesional, sin la fricción de los sistemas tradicionales.",
    heroTitle: "ControlDoc",
    heroDescription:
      "El centro de control definitivo para el cumplimiento operativo de tu empresa. Gestioná documentación de empleados, vehículos y subcontratistas en un entorno diseñado para la eficiencia y la auditoría real.",
    heroStats: {
      value: "Gestión 360°",
      label: "Control total sobre cada legajo y vencimiento operativo",
    },
    valueProposition:
      "ControlDoc no es solo una alerta; es el sistema donde tu equipo trabaja. Reemplazamos las planillas vulnerables por un ecosistema digital con OCR, trazabilidad de versiones y una interfaz intuitiva que no requiere capacitación eterna.",
    audiences: [
      {
        title: "Operaciones y Logística",
        description:
          "Mantené tu flota habilitada. El sistema vincula seguros, VTV y licencias a cada unidad, alertando al equipo antes de que el riesgo operativo sea una realidad.",
      },
      {
        title: "Recursos Humanos y Seguridad e Higiene",
        description:
          "Auditá contratos, carnets y capacitaciones. Asegurá que cada empleado cuente con la documentación vigente bajo estándares de cumplimiento profesional.",
      },
      {
        title: "Empresas BPO y Consultoras",
        description:
          "Gestioná múltiples clientes desde una vista global. Ofreceles dashboards dedicados con aislamiento de datos, manteniendo la jerarquía de tu gestión principal.",
      },
    ],
    problems: [
      "Software de gestión anticuado, lento y difícil de usar para el equipo operativo.",
      "Riesgos legales y multas por documentos que vencen sin un responsable claro.",
      "Pérdida de tiempo en carga manual de datos y corrección de errores de tipeo.",
    ],
    benefits: [
      "Interfaz moderna y rápida: diseñada para que el equipo trabaje con fluidez.",
      "OCR de alto rendimiento: lectura automática de fechas para minimizar la carga manual.",
      "Trazabilidad auditora: registro detallado de quién aprobó o rechazó cada documento.",
      "Estandarización automática: conversión de fotos y textos a PDF sin intervención del usuario.",
      "Aislamiento de datos: sistema de sub-empresas para manejar clientes o unidades de negocio.",
      "Integración nativa: compartí storage y sesión con el resto de tus herramientas operativas.",
    ],
    functionalities: [
      {
        title: "Tablero de Control Visual",
        description:
          "Semáforo de cumplimiento en tiempo real. Clasificación inmediata de documentos vencidos, próximos a vencer y pendientes de auditoría.",
        icon: Shield,
      },
      {
        title: "Auditoría Asistida (OCR)",
        description:
          "El sistema escanea los adjuntos y propone las fechas de vencimiento. El operador solo verifica, reduciendo el error humano y acelerando el proceso.",
        icon: FileText,
      },
      {
        title: "Flujo de Trabajo y Versiones",
        description:
          "Cada documento tiene un ciclo de vida: Pendiente, Aprobado o Rechazado con comentario. Mantené el historial de versiones para cumplir con cualquier auditoría externa.",
        icon: Receipt,
      },
      {
        title: "Normalización de Archivos",
        description:
          "Subí una foto o un Word; ControlDoc entrega un PDF estandarizado. Ideal para mantener un repositorio documental profesional y uniforme.",
        icon: FileText,
      },
      {
        title: "Jerarquías y Sub-empresas",
        description:
          "Configurá estructuras complejas. Definí documentos requeridos que apliquen a toda la organización o solo a subcontratistas específicos.",
        icon: FolderOpen,
      },
      {
        title: "Notificaciones de Compliance",
        description:
          "Alertas proactivas vía email para los responsables de área. Asegurá que el equipo actúe antes de que un documento cambie a estado crítico.",
        icon: Receipt,
      },
    ],
    useCases: [
      {
        title: "Control de Contratistas",
        description:
          "Asegurá que tus proveedores cumplan con toda la normativa antes de ingresar a planta, centralizando la recepción y auditoría de sus seguros y aportes.",
      },
      {
        title: "Gestión de Flota Vehicular",
        description:
          "Centralizá la documentación técnica y legal de tus unidades. Vinculá choferes a vehículos y mantené el control de vencimientos de cada componente.",
      },
      {
        title: "Auditoría de Legajos de RRHH",
        description:
          "Digitalizá y controlá la vigencia de toda la documentación del personal, desde exámenes médicos hasta recibos de sueldo y certificaciones técnicas.",
      },
    ],
    faq: [
      {
        question: "¿Cómo se diferencia de un sistema tradicional?",
        answer:
          "ControlDoc prioriza la experiencia de usuario y la velocidad. Mientras otros sistemas son pesados y complejos, nosotros ofrecemos una plataforma SaaS moderna, intuitiva y con herramientas de automatización como el OCR de fechas.",
      },
      {
        question: "¿Es seguro para manejar datos de múltiples clientes?",
        answer:
          "Absolutamente. Contamos con un sistema de aislamiento de datos que permite a consultoras gestionar la documentación de sus clientes sin riesgo de cruce de información.",
      },
      {
        question: "¿Qué pasa si un documento es rechazado?",
        answer:
          "El auditor deja un comentario obligatorio explicando el motivo. El usuario recibe la notificación, puede subir una nueva versión y todo el historial queda registrado para consulta futura.",
      },
    ],
    finalCta: {
      primaryLabel: "Comenzar con ControlDoc",
      primaryHref: "/control-doc",
      secondaryLabel: "Conocer el ecosistema ControlApps",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "Potencia tu gestión con el ecosistema ControlApps",
      description:
        "ControlDoc no es una herramienta aislada. Se integra de forma nativa con el resto de la suite para ofrecer una experiencia operativa unificada.",
      bullets: [
        "Gestión de acceso unificada: un solo usuario para todo tu control operativo.",
        "Repositorio compartido: accedé a los documentos aprobados directamente desde ControlFile.",
        "Escalabilidad inmediata: sumá módulos de auditoría o storage sin configuraciones complejas.",
      ],
    },
    relatedApps: [
      {
        slug: "control-file",
        anchor: "Explorar almacenamiento inteligente",
        reason: "Vinculá tu gestión documental con un storage organizado y accesible.",
      },
      {
        slug: "control-audit",
        anchor: "Software de inspecciones y auditorías",
        reason: "Conectá los hallazgos de tus auditorías de campo con la documentación de soporte.",
      },
    ],
  },
}