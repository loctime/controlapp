import type { LucideIcon } from "lucide-react"
import {
  Briefcase,
  Calendar,
  FileText,
  FolderOpen,
  Lock,
  Receipt,
  Shield,
  TrendingUp,
} from "lucide-react"

export type PlatformAppStatus = "active" | "comingSoon" | "hidden"
export type PlatformAppCategory = "operations" | "finance" | "talent" | "storage"

export interface PlatformCapability {
  sharedAuth: boolean
  sharedStorage: boolean
  visibleInControlFile: boolean
  requiresPermissions: boolean
}

export interface AppLandingSectionItem {
  title: string
  description: string
  icon?: LucideIcon
}

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedAppLink {
  slug: string
  anchor: string
  reason: string
}

export interface KeywordProfile {
  primary: string
  secondary: string[]
  problems: string[]
  industries: string[]
}

export interface AppLandingContent {
  heroLabel: string
  heroTitle: string
  heroDescription: string
  heroStats?: {
    value: string
    label: string
  }
  valueProposition: string
  audiences: AppLandingSectionItem[]
  problems: string[]
  benefits: string[]
  functionalities: AppLandingSectionItem[]
  useCases: AppLandingSectionItem[]
  faq: FAQItem[]
  finalCta: {
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
  platformIntegration?: {
    title: string
    description: string
    bullets: string[]
  }
  relatedApps: RelatedAppLink[]
}

export interface PlatformApp {
  id: string
  slug: string
  name: string
  shortDescription: string
  category: PlatformAppCategory
  status: PlatformAppStatus
  icon: LucideIcon
  image: string
  color: string
  href: string
  features: string[]
  platformCapabilities: PlatformCapability
  landingContent: AppLandingContent
  seo: {
    title: string
    description: string
    canonicalPath: string
    socialImage: string
    keywords: KeywordProfile
    categoryLabel: string
  }
}

export const platformOverview = {
  eyebrow: "Plataforma centralizada",
  heroBadge: "Software empresarial con autenticacion compartida y storage global",
  heroTitle: "ControlApp centraliza software de gestion por modulos sobre una sola plataforma",
  heroDescription:
    "ControlApp es una plataforma multi-app para empresas que necesitan gestion documental, auditorias, archivos, gastos, ventas, horarios y talento sobre una misma base de identidad, permisos y archivos.",
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
    "Storage global para documentos, evidencias y comprobantes",
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
        title: "Storage global",
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
    title: "Lo que hereda cada nueva app del ecosistema ControlApp",
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
        title: "Storage global",
        description: "Archivos, fotos y adjuntos viven en una capa comun lista para reutilizacion.",
        icon: FolderOpen,
      },
      {
        title: "Trazabilidad",
        description: "ControlFile mantiene orden y visibilidad por app, coleccion y contexto operativo.",
        icon: FileText,
      },
    ],
  },
  audiences: {
    eyebrow: "Para que empresas sirve",
    title: "Una plataforma pensada para equipos que necesitan varios procesos conectados",
    description:
      "ControlApp encaja mejor en organizaciones que ya operan con documentos, evidencias, comprobantes y flujos internos repartidos entre varias herramientas.",
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
      "Cada landing compite por su propia necesidad de busqueda, pero todas las apps comparten autenticacion, permisos y storage global para evitar sistemas aislados.",
  },
  entity: {
    eyebrow: "Que es ControlApp",
    title: "ControlApp no es una app aislada: es una base comun para software operativo",
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
    title: "Respuestas claras para Google, compradores y asistentes de IA",
    description:
      "Estas respuestas resumen los conceptos que mas conviene explicar de forma directa cuando alguien descubre ControlApp por primera vez.",
    items: [
      {
        question: "Que es ControlApp?",
        answer:
          "ControlApp es una plataforma multi-app para empresas que centraliza autenticacion, permisos y archivos para varios modulos operativos y administrativos.",
      },
      {
        question: "Que diferencia a ControlApp de usar herramientas separadas?",
        answer:
          "La diferencia principal es la base compartida. Los modulos no trabajan como islas: comparten identidad, storage y trazabilidad para reducir friccion operativa.",
      },
      {
        question: "Que tipo de modulos incluye hoy?",
        answer:
          "Hoy incluye modulos para gestion documental, auditorias, almacenamiento centralizado, gastos, ventas, horarios y gestion de candidatos.",
      },
      {
        question: "Por que esto ayuda al SEO para IA?",
        answer:
          "Porque cada modulo tiene una pagina propia con definiciones, beneficios, casos de uso y FAQs, lo que hace mas facil que un asistente de IA cite y resuma correctamente la informacion.",
      },
    ],
  },
  footer: {
    description:
      "Plataforma multi-app para gestion documental, auditorias, archivos, finanzas, horarios y talento con identidad compartida y storage global.",
  },
}

export const platformApps: PlatformApp[] = [
  {
    id: "control-file",
    slug: "control-file",
    name: "ControlFile",
    shortDescription: "Software de almacenamiento centralizado para documentos, evidencias y adjuntos de todo el ecosistema.",
    category: "storage",
    status: "active",
    icon: FolderOpen,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
    color: "from-violet-500 to-blue-500",
    href: "/control-file",
    features: [
      "Storage global para todas las apps",
      "Permisos y seguridad centralizados",
      "Explorador transversal por app y coleccion",
      "Acceso controlado a archivos",
      "Base comun para nuevos modulos",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlFile | Storage compartido y gestion centralizada de archivos",
      description:
        "ControlFile es el software de almacenamiento centralizado de ControlApp para empresas que necesitan ordenar documentos, evidencias y adjuntos de multiples modulos.",
      canonicalPath: "/control-file",
      socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
      categoryLabel: "Storage compartido y gestion de archivos",
      keywords: {
        primary: "storage compartido para apps",
        secondary: [
          "gestion centralizada de archivos",
          "software de almacenamiento empresarial",
          "repositorio documental transversal",
        ],
        problems: [
          "archivos repartidos entre sistemas",
          "falta de trazabilidad documental",
          "adjuntos aislados por modulo",
        ],
        industries: ["empresas multi-area", "operaciones", "compliance"],
      },
    },
    landingContent: {
      heroLabel: "Storage compartido para el ecosistema",
      heroTitle: "ControlFile",
      heroDescription:
        "ControlFile es el modulo de almacenamiento centralizado de ControlApp. Organiza archivos por app y coleccion para que documentos, evidencias y comprobantes no queden aislados en sistemas separados.",
      heroStats: {
        value: "1 storage",
        label: "para documentos, evidencias y adjuntos del ecosistema",
      },
      valueProposition:
        "Si buscas centralizar archivos entre aplicaciones o equipos, ControlFile funciona como la base comun que evita silos y mantiene acceso seguro.",
      audiences: [
        {
          title: "Equipos con documentacion transversal",
          description: "Ideal para empresas que comparten archivos entre operaciones, administracion, auditoria y soporte.",
        },
        {
          title: "Organizaciones con multiples modulos",
          description: "Sirve cuando varios productos necesitan leer o publicar adjuntos sin duplicar repositorios.",
        },
        {
          title: "Areas con foco en trazabilidad",
          description: "Ayuda a mantener orden, visibilidad y permisos sobre documentos sensibles.",
        },
      ],
      problems: [
        "Archivos guardados en carpetas o sistemas diferentes segun el area.",
        "Evidencias y comprobantes sin una estructura comun para encontrarlos.",
        "Modulos que necesitan compartir adjuntos sin abrir acceso publico directo.",
      ],
      benefits: [
        "Centraliza archivos de toda la plataforma en un solo storage transversal.",
        "Aplica reglas de acceso y seguridad de forma consistente.",
        "Mantiene trazabilidad por app y coleccion.",
        "Reduce complejidad tecnica para nuevos modulos.",
        "Permite que cada app use archivos sin reinventar infraestructura.",
        "Evita duplicacion y perdida de contexto documental.",
      ],
      functionalities: [
        {
          title: "Repositorio comun",
          description: "Unifica documentos, fotos y adjuntos provenientes de distintos modulos del ecosistema.",
          icon: FolderOpen,
        },
        {
          title: "Seguridad centralizada",
          description: "Controla acceso, permisos y mecanismos temporales sin exponer archivos de forma publica.",
          icon: Shield,
        },
        {
          title: "IAM compartida",
          description: "Usa la misma base de identidad y claims para resolver autorizacion por modulo.",
          icon: Lock,
        },
        {
          title: "Explorador transversal",
          description: "Muestra archivos por origen y coleccion para mantener trazabilidad operativa.",
          icon: FileText,
        },
      ],
      useCases: [
        {
          title: "Gestion documental empresarial",
          description: "Centraliza contratos, certificados, procedimientos y legajos dentro de un repositorio comun.",
        },
        {
          title: "Evidencias de auditoria",
          description: "Guarda fotos, formularios y reportes de inspeccion sin crear silos por modulo.",
        },
        {
          title: "Adjuntos administrativos",
          description: "Conecta comprobantes y archivos de soporte con gastos, ventas y otros procesos internos.",
        },
      ],
      faq: [
        {
          question: "Que hace ControlFile dentro de ControlApp?",
          answer:
            "ControlFile actua como storage compartido y explorador transversal para documentos, evidencias y adjuntos generados por las distintas apps.",
        },
        {
          question: "ControlFile es solo un gestor de archivos?",
          answer:
            "No. Ademas de ordenar archivos, define acceso seguro, trazabilidad y una capa comun para que otros modulos trabajen sobre el mismo repositorio.",
        },
        {
          question: "Para que empresas conviene?",
          answer:
            "Conviene a empresas que ya tienen varios procesos digitales y necesitan evitar archivos aislados entre sistemas o equipos.",
        },
      ],
      finalCta: {
        primaryLabel: "Explorar ControlFile",
        primaryHref: "/control-file",
        secondaryLabel: "Ver modulos conectados",
        secondaryHref: "/#apps",
      },
      platformIntegration: {
        title: "ControlFile es la capa comun de archivos de la plataforma",
        description:
          "Las demas apps pueden publicar y consultar archivos sin resolver por separado permisos, acceso temporal o estructura documental.",
        bullets: [
          "Unifica archivos de ControlDoc, ControlAudit, ControlGastos y otros modulos.",
          "Aplica permisos por modulo usando la misma identidad compartida.",
          "Protege el storage real detras de mecanismos de acceso controlado.",
        ],
      },
      relatedApps: [
        {
          slug: "control-doc",
          anchor: "Ver software de gestion documental conectado al storage compartido",
          reason: "ControlDoc publica documentos y vencimientos sobre ControlFile.",
        },
        {
          slug: "control-audit",
          anchor: "Ver software de auditorias con evidencias centralizadas",
          reason: "ControlAudit usa el storage global para evidencias y reportes.",
        },
      ],
    },
  },
  {
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
  },
  {
    id: "control-audit",
    slug: "control-audit",
    name: "ControlAudit",
    shortDescription: "Software de auditorias e inspecciones con formularios, evidencias y reportes conectados.",
    category: "operations",
    status: "active",
    icon: Shield,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
    color: "from-emerald-500 to-teal-500",
    href: "/control-audit",
    features: [
      "Formularios de auditoria",
      "Evidencias centralizadas",
      "Reportes reutilizables",
      "Permisos por claims",
      "Integracion con ControlFile",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlAudit | Software de auditorias e inspecciones",
      description:
        "ControlAudit es el software de auditorias de ControlApp para formularios, evidencias y reportes con autenticacion compartida y storage global.",
      canonicalPath: "/control-audit",
      socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
      categoryLabel: "Software de auditorias e inspecciones",
      keywords: {
        primary: "software de auditorias",
        secondary: [
          "software de inspecciones",
          "gestion de evidencias de auditoria",
          "formularios de auditoria digital",
        ],
        problems: [
          "evidencias desperdigadas",
          "formularios fuera de sistema",
          "auditorias sin trazabilidad documental",
        ],
        industries: ["seguridad", "calidad", "operaciones"],
      },
    },
    landingContent: {
      heroLabel: "Software de auditorias e inspecciones",
      heroTitle: "ControlAudit",
      heroDescription:
        "ControlAudit centraliza auditorias, inspecciones y evidencias sobre la misma plataforma compartida de ControlApp para que formularios, reportes y archivos mantengan contexto operativo.",
      heroStats: {
        value: "Auditorias conectadas",
        label: "a identidad, permisos y archivos del ecosistema",
      },
      valueProposition:
        "Si buscas software de auditorias con formularios y evidencias digitalizadas, ControlAudit combina captura operativa con storage centralizado y acceso por rol.",
      audiences: [
        {
          title: "Equipos de seguridad y calidad",
          description: "Aporta estructura para inspecciones, hallazgos y reportes con evidencia asociada.",
        },
        {
          title: "Operaciones distribuidas",
          description: "Sirve cuando distintas sedes o responsables deben auditar sobre la misma base.",
        },
        {
          title: "Areas que necesitan trazabilidad",
          description: "Permite relacionar formularios, adjuntos y reportes sin sacar informacion del ecosistema.",
        },
      ],
      problems: [
        "Auditorias en planillas o formularios desconectados de los archivos.",
        "Fotos y evidencias guardadas fuera del sistema principal.",
        "Dificultad para compartir resultados entre equipos con permisos distintos.",
      ],
      benefits: [
        "Centraliza formularios, evidencias y reportes en una sola experiencia.",
        "Mantiene permisos por modulo para proteger auditorias sensibles.",
        "Hace visibles archivos y adjuntos en el storage global.",
        "Comparte autenticacion con los demas modulos.",
        "Evita reprocesos al reutilizar reportes y evidencia.",
        "Escala nuevas auditorias sobre una base ya resuelta.",
      ],
      functionalities: [
        {
          title: "Formularios configurables",
          description: "Registra auditorias e inspecciones con estructura digital reutilizable.",
          icon: Shield,
        },
        {
          title: "Evidencias centralizadas",
          description: "Fotos, observaciones y archivos se almacenan en la capa comun de archivos.",
          icon: FolderOpen,
        },
        {
          title: "Reportes operativos",
          description: "Los resultados quedan listos para consulta y seguimiento dentro del ecosistema.",
          icon: FileText,
        },
        {
          title: "Acceso por rol",
          description: "Cada usuario ve auditorias y adjuntos segun permisos sobre el modulo.",
          icon: Lock,
        },
      ],
      useCases: [
        {
          title: "Auditorias de seguridad",
          description: "Documenta inspecciones de campo y relaciona hallazgos con evidencia fotografica y reportes.",
        },
        {
          title: "Control de calidad",
          description: "Conecta formularios, adjuntos y reportes de calidad sin salir del ecosistema.",
        },
        {
          title: "Supervision de sucursales",
          description: "Permite estandarizar controles en operaciones distribuidas con permisos acotados.",
        },
      ],
      faq: [
        {
          question: "ControlAudit sirve para auditorias e inspecciones?",
          answer:
            "Si. El modulo esta pensado para capturar formularios, evidencias y reportes dentro de una experiencia conectada al resto de la plataforma.",
        },
        {
          question: "Donde quedan las evidencias?",
          answer:
            "Las evidencias se almacenan en la capa compartida de ControlFile para mantener trazabilidad y acceso controlado.",
        },
        {
          question: "Que lo diferencia de una app de formularios generica?",
          answer:
            "La diferencia es que comparte identidad, permisos y archivos con otros modulos del negocio, por lo que no queda como una herramienta aislada.",
        },
      ],
      finalCta: {
        primaryLabel: "Explorar ControlAudit",
        primaryHref: "/control-audit",
        secondaryLabel: "Ver storage para evidencias",
        secondaryHref: "/control-file",
      },
      platformIntegration: {
        title: "ControlAudit comparte la base de identidad y archivos de la plataforma",
        description:
          "Las evidencias y reportes se conectan con la misma capa comun que usan otros modulos de ControlApp.",
        bullets: [
          "Comparte autenticacion con el resto de las apps activas.",
          "Guarda evidencias dentro del storage global visible desde ControlFile.",
          "Mantiene acceso seguro mediante permisos por modulo y rol.",
        ],
      },
      relatedApps: [
        {
          slug: "control-file",
          anchor: "Ver storage compartido para evidencias y reportes",
          reason: "Las evidencias de ControlAudit se ordenan y protegen desde ControlFile.",
        },
        {
          slug: "control-doc",
          anchor: "Ver gestion documental para procesos de compliance",
          reason: "ControlDoc complementa auditorias con documentacion controlada y vencimientos.",
        },
      ],
    },
  },
  {
    id: "horarios-simple",
    slug: "horarios",
    name: "Horarios Simple",
    shortDescription: "Software de gestion de horarios para equipos, turnos semanales y vista mensual.",
    category: "operations",
    status: "active",
    icon: Calendar,
    image: "/horarios-app.jpg",
    color: "from-orange-500 to-amber-500",
    href: "/horarios",
    features: [
      "Horarios semanales",
      "Vista mensual",
      "Exportacion a imagen",
      "Publicacion para empleados",
      "Integracion con la plataforma",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "Horarios Simple | Software de gestion de horarios para equipos",
      description:
        "Horarios Simple es el software de gestion de horarios de ControlApp para planificar turnos semanales y mensuales con autenticacion compartida y publicacion controlada.",
      canonicalPath: "/horarios",
      socialImage: "/horarios-app.jpg",
      categoryLabel: "Software de gestion de horarios",
      keywords: {
        primary: "gestion de horarios para equipos",
        secondary: [
          "software de turnos semanales",
          "planificacion de horarios laborales",
          "cronogramas para empleados",
        ],
        problems: [
          "conflictos de horarios",
          "cronogramas compartidos por mensajes",
          "falta de visibilidad mensual",
        ],
        industries: ["retail", "gastronomia", "servicios"],
      },
    },
    landingContent: {
      heroLabel: "Software de gestion de horarios",
      heroTitle: "Horarios Simple",
      heroDescription:
        "Horarios Simple organiza turnos semanales y mensuales para equipos que necesitan publicar cronogramas con menos friccion y dentro del mismo ecosistema operativo de ControlApp.",
      heroStats: {
        value: "Menos conflictos",
        label: "al planificar turnos y compartir cronogramas del equipo",
      },
      valueProposition:
        "Si buscas gestion de horarios para equipos, Horarios Simple ayuda a planificar, publicar y compartir turnos sin depender de planillas sueltas.",
      audiences: [
        {
          title: "Equipos con turnos variables",
          description: "Sirve para negocios que trabajan con cambios semanales, coberturas y francos rotativos.",
        },
        {
          title: "Supervisores y coordinadores",
          description: "Facilita la planificacion y comunicacion de horarios desde una interfaz simple.",
        },
        {
          title: "Empresas con comunicacion operativa intensa",
          description: "Permite compartir cronogramas sin sacar la gestion del ecosistema principal.",
        },
      ],
      problems: [
        "Horarios que se actualizan en planillas o chats sin version clara.",
        "Dificultad para detectar huecos y superposiciones de turnos.",
        "Cronogramas que no llegan a tiempo a todo el equipo.",
      ],
      benefits: [
        "Reduce conflictos y superposiciones de turnos.",
        "Ordena la planificacion semanal y mensual en un solo lugar.",
        "Permite exportar y compartir cronogramas con rapidez.",
        "Comparte login y permisos con otros modulos.",
        "Mantiene contexto operativo dentro del ecosistema.",
        "Escala por area o sucursal sin rehacer la base.",
      ],
      functionalities: [
        {
          title: "Horarios semanales",
          description: "Arma y ajusta cronogramas semanales para equipos con dinamica operativa cambiante.",
          icon: Calendar,
        },
        {
          title: "Vista mensual",
          description: "Permite anticipar cobertura, huecos y cambios antes de publicar horarios.",
          icon: FileText,
        },
        {
          title: "Exportacion a imagen",
          description: "Convierte horarios en imagen para compartirlos por canales operativos habituales.",
          icon: FolderOpen,
        },
        {
          title: "Publicacion controlada",
          description: "Publica el horario para que cada empleado consulte su cronograma con acceso gestionado.",
          icon: Lock,
        },
      ],
      useCases: [
        {
          title: "Restaurantes y bares",
          description: "Gestiona cambios de turnos, francos y coberturas en operaciones de alta rotacion.",
        },
        {
          title: "Tiendas y comercios",
          description: "Planifica equipos por semana y por mes sin depender de archivos desordenados.",
        },
        {
          title: "Empresas de servicios",
          description: "Coordina disponibilidad de personas y equipos para sostener la operacion diaria.",
        },
      ],
      faq: [
        {
          question: "Horarios Simple sirve para publicar horarios a empleados?",
          answer:
            "Si. El modulo permite planificar cronogramas y publicarlos para consulta del equipo con acceso controlado.",
        },
        {
          question: "Que tipo de empresas pueden usarlo?",
          answer:
            "Es especialmente util para operaciones con turnos variables como retail, gastronomia o servicios.",
        },
        {
          question: "Como se integra con ControlApp?",
          answer:
            "Comparte autenticacion, permisos y puede convivir con documentacion y archivos del resto del ecosistema.",
        },
      ],
      finalCta: {
        primaryLabel: "Explorar Horarios Simple",
        primaryHref: "/horarios",
        secondaryLabel: "Ver el resto de los modulos",
        secondaryHref: "/#apps",
      },
      platformIntegration: {
        title: "Horarios Simple se apoya en la base comun de ControlApp",
        description:
          "El modulo se concentra en planificacion y comunicacion operativa mientras la plataforma resuelve identidad, permisos y crecimiento modular.",
        bullets: [
          "Comparte login con otros modulos del ecosistema.",
          "Puede convivir con archivos y documentacion visibles desde ControlFile.",
          "Se suma al catalogo sin duplicar navegacion ni estructura comercial.",
        ],
      },
      relatedApps: [
        {
          slug: "bolsa-trabajo",
          anchor: "Ver modulo de candidatos y CVs para equipos operativos",
          reason: "Bolsa de Trabajo complementa la coordinacion de personas con seleccion y perfiles.",
        },
        {
          slug: "control-file",
          anchor: "Ver storage compartido para archivos y publicaciones internas",
          reason: "ControlFile puede concentrar archivos y soportes vinculados a la operacion.",
        },
      ],
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

export const navigationLinks = [
  { name: "Como funciona", href: "#arquitectura" },
  { name: "Empresas", href: "#empresas" },
  { name: "Apps", href: "#apps" },
  { name: "FAQ", href: "#faq" },
  { name: "Demos", href: "/demos" },
]

export const activePlatformApps = platformApps.filter((app) => app.status === "active")

export function getPlatformAppBySlug(slug: string) {
  return platformApps.find((app) => app.slug === slug)
}
