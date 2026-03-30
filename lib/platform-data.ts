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

export interface AppLandingContent {
  heroLabel: string
  heroTitle: string
  heroDescription: string
  heroStats?: {
    value: string
    label: string
  }
  benefits: string[]
  functionalities: AppLandingSectionItem[]
  useCases: AppLandingSectionItem[]
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
  }
}

export const platformOverview = {
  eyebrow: "Plataforma centralizada",
  heroBadge: "Una cuenta, permisos por app y storage global",
  heroTitle: "Tu ecosistema de trabajo sobre una plataforma central",
  heroDescription:
    "ControlApp conecta multiples aplicaciones con autenticacion compartida, permisos granulares y un storage global administrado desde ControlFile. Cada modulo resuelve una operacion puntual sin romper la experiencia del usuario.",
  heroPrimaryCta: {
    label: "Explorar apps activas",
    href: "#apps",
  },
  heroSecondaryCta: {
    label: "Como funciona la plataforma",
    href: "#arquitectura",
  },
  heroHighlights: [
    "Una sola cuenta para ingresar a todas las apps habilitadas",
    "Permisos por aplicacion y acceso segun claims",
    "Storage global centralizado con visibilidad transversal en ControlFile",
  ],
  architecture: {
    eyebrow: "Como funciona",
    title: "La plataforma comparte identidad, permisos y archivos entre modulos",
    description:
      "La experiencia esta pensada como una plataforma multi-app: el usuario inicia sesion una vez, entra solo a los modulos que tiene habilitados y trabaja sobre un storage global comun. ControlFile ordena todos los archivos por app y coleccion para que la informacion no quede aislada.",
    steps: [
      {
        title: "Login unico",
        description:
          "La autenticacion es compartida. La misma cuenta sirve para entrar a todas las apps que el usuario tenga habilitadas.",
      },
      {
        title: "Permisos por modulo",
        description:
          "Cada app valida permisos y claims antes de dar acceso. No todas las cuentas ven las mismas herramientas.",
      },
      {
        title: "Storage global",
        description:
          "Los archivos viven sobre una capa central de storage para toda la plataforma y no dentro de silos por producto.",
      },
      {
        title: "Vista transversal en ControlFile",
        description:
          "ControlFile funciona como explorador unificado: organiza archivos por app y colecciones para navegar todo desde un mismo lugar.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capacidades compartidas",
    title: "Lo que hereda cada nueva app de la plataforma",
    description:
      "Agregar un nuevo modulo no deberia exigir reinventar autenticacion, archivos o visibilidad transversal. La plataforma ya define esas bases para que cada app se concentre en su dominio.",
    items: [
      {
        title: "Auth central",
        description:
          "Las apps comparten autenticacion y experiencia de acceso con una misma cuenta.",
        icon: Lock,
      },
      {
        title: "Permisos por app",
        description:
          "El acceso se habilita por modulo segun claims y permisos, no por cuentas separadas.",
        icon: Shield,
      },
      {
        title: "Storage global",
        description:
          "Los archivos viven en una capa comun y pueden reaprovecharse entre modulos.",
        icon: FolderOpen,
      },
      {
        title: "Trazabilidad transversal",
        description:
          "ControlFile concentra archivos por app y coleccion para mantener contexto y orden.",
        icon: FileText,
      },
    ],
  },
  appsSection: {
    eyebrow: "Apps activas",
    title: "Modulos activos construidos sobre la misma plataforma",
    description:
      "Estas apps ya forman parte del ecosistema activo de ControlApp. Todas heredan la base compartida de autenticacion, permisos y storage global.",
  },
  footer: {
    description:
      "Plataforma multi-app para operar documentos, auditorias, archivos, finanzas y flujos internos con una base compartida de identidad y storage.",
  },
}

export const platformApps: PlatformApp[] = [
  {
    id: "control-file",
    slug: "control-file",
    name: "ControlFile",
    shortDescription:
      "Infraestructura centralizada de gestión de archivos para todo el ecosistema Control*.",
    category: "storage",
    status: "active",
    icon: FolderOpen,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
    color: "from-violet-500 to-blue-500",
    href: "/control-file",
    features: [
      "Backend compartido para todo el ecosistema",
      "Centraliza seguridad, permisos y acceso",
      "Un archivo pertenece al sistema, no a una app",
      "IAM compartida con claims y identidades",
      "Acceso seguro mediante mecanismos temporales",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlFile | Infraestructura centralizada de almacenamiento",
      description:
        "ControlFile es la capa de almacenamiento central del ecosistema ControlApp. Unifica archivos de todas las apps con autenticación y permisos compartidos.",
    },
    landingContent: {
      heroLabel: "Infraestructura centralizada de almacenamiento",
      heroTitle: "ControlFile",
      heroDescription:
        "ControlFile es la capa de almacenamiento central del ecosistema ControlApp. Unifica los archivos de todas las apps en un entorno único, con autenticación y permisos compartidos, para que la información esté organizada por app y colección, sin silos ni duplicación.",
      heroStats: {
        value: "Centralización real",
        label: "un solo storage transversal para todo el ecosistema",
      },
      benefits: [
        "Centralización real: un solo storage transversal para todo el ecosistema",
        "Permisos consistentes: las mismas reglas y sesión para todas las apps",
        "Trazabilidad transversal: orden por app/colecciones y visibilidad de extremo a extremo",
        "Escalabilidad por diseño: nuevas apps heredan el storage común sin duplicar infraestructura",
        "Menos complejidad: cada app se enfoca en su dominio, no en archivos",
        "Un archivo no pertenece a una app; pertenece al sistema",
      ],
      functionalities: [
        {
          title: "Backend compartido",
          description:
            "ControlFile es la infraestructura centralizada que múltiples aplicaciones usan como capa de storage, no una app aislada.",
          icon: FolderOpen,
        },
        {
          title: "Seguridad centralizada",
          description:
            "Centraliza seguridad, permisos y acceso; las apps no gestionan directamente URLs presignadas, CORS ni acceso a storage.",
          icon: Shield,
        },
        {
          title: "IAM compartida",
          description:
            "ControlFile actúa como capa IAM compartida, creando identidades y claims para todo el ecosistema Control*.",
          icon: Lock,
        },
        {
          title: "Acceso controlado",
          description:
            "El acceso a archivos es seguro y controlado mediante mecanismos temporales/proxy, nunca público directo.",
          icon: FileText,
        },
      ],
      useCases: [
        {
          title: "Multi-app ecosystem",
          description:
            "ControlAudit, ControlDoc, ControlGastos y otras apps referencian archivos y solicitan acceso sin gestionar storage directamente.",
        },
        {
          title: "Gestión documental empresarial",
          description:
            "Centraliza legajos, documentos aprobados y vencimientos provenientes de ControlDoc con trazabilidad completa.",
        },
        {
          title: "Evidencias de auditoría",
          description:
            "Ordena fotos, formularios y reportes cargados desde ControlAudit con acceso seguro y controlado.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver ControlFile",
        primaryHref: "/control-file",
        secondaryLabel: "Explorar apps activas",
        secondaryHref: "/#apps",
      },
      platformIntegration: {
        title: "ControlFile se integra como backend común",
        description:
          "Las apps mantienen su lógica propia, pero delegan en la plataforma la gestión de archivos, autenticación y permisos. Menos silos de información, control unificado, trazabilidad transversal y un time-to-market más rápido para nuevas apps.",
        bullets: [
          "Las apps mantienen su lógica propia, pero delegan gestión de archivos",
          "Centraliza seguridad, permisos y acceso para todo el ecosistema",
          "Un archivo no pertenece a una app; pertenece al sistema",
          "Define cómo se accede a los archivos y protege el storage real",
        ],
      },
    },
  },
  {
    id: "control-doc",
    slug: "control-doc",
    name: "ControlDoc",
    shortDescription:
      "Gestion documental con aprobacion, versionado y control de vencimientos.",
    category: "operations",
    status: "active",
    icon: FileText,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documento-0W2O7GyQ89nJ0Kxpi6kB6aYM0TVYt1.png",
    color: "from-blue-500 to-cyan-500",
    href: "/control-doc",
    features: [
      "Aprobacion y versionado",
      "Control de vencimientos",
      "Archivos visibles desde ControlFile",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlDoc | Gestion documental integrada",
      description:
        "Gestion documental con aprobacion, versionado y vencimientos sobre la plataforma centralizada de ControlApp.",
    },
    landingContent: {
      heroLabel: "Gestion documental",
      heroTitle: "ControlDoc",
      heroDescription:
        "ControlDoc resuelve aprobacion, versionado y vencimientos documentales sobre la misma base compartida de autenticacion y storage. Los documentos no quedan aislados: se integran con el ecosistema y son visibles desde ControlFile segun permisos.",
      heroStats: {
        value: "Multi-app",
        label: "documentos conectados al resto de la plataforma",
      },
      benefits: [
        "Digitaliza procesos documentales sin crear silos",
        "Versiona y aprueba sobre una base central",
        "Conserva trazabilidad y control por permisos",
        "Expone archivos en ControlFile con estructura por contexto",
        "Reduce dispersion entre areas y modulos",
        "Escala con nuevos tipos documentales sin rehacer la base",
      ],
      functionalities: [
        {
          title: "Aprobacion documental",
          description:
            "Gestiona flujos de aprobacion y seguimiento sobre documentos compartidos con el resto del ecosistema.",
          icon: Shield,
        },
        {
          title: "Versionado",
          description:
            "Mantiene historial y control de cambios sin romper el acceso centralizado a archivos.",
          icon: FileText,
        },
        {
          title: "Control de vencimientos",
          description:
            "Permite seguir estados y vencimientos documentales sobre una misma estructura de trabajo.",
          icon: Receipt,
        },
        {
          title: "Storage integrado",
          description:
            "Los documentos viven en el storage global y quedan disponibles desde ControlFile segun permisos.",
          icon: FolderOpen,
        },
      ],
      useCases: [
        {
          title: "Legajos y compliance",
          description:
            "Controla documentos de empleados, vehiculos o proveedores con trazabilidad.",
        },
        {
          title: "Documentacion operativa",
          description:
            "Ordena procedimientos, instructivos y certificados en un sistema compartido.",
        },
        {
          title: "Gestion multi-area",
          description:
            "Evita que cada equipo administre archivos por separado y sin visibilidad cruzada.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver ControlDoc",
        primaryHref: "/control-doc",
        secondaryLabel: "Entender la plataforma",
        secondaryHref: "/#arquitectura",
      },
      platformIntegration: {
        title: "Integracion con la plataforma",
        description:
          "ControlDoc usa la identidad y el storage comunes de ControlApp para que la documentacion circule con contexto.",
        bullets: [
          "Comparte cuenta y sesion con el resto de las apps",
          "Publica documentos dentro del storage global administrado por ControlFile",
          "Respeta permisos por modulo para mostrar solo la informacion habilitada",
        ],
      },
    },
  },
  {
    id: "control-audit",
    slug: "control-audit",
    name: "ControlAudit",
    shortDescription:
      "Auditorias e inspecciones con formularios, evidencias y reportes conectados al ecosistema.",
    category: "operations",
    status: "active",
    icon: Shield,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
    color: "from-emerald-500 to-teal-500",
    href: "/control-audit",
    features: [
      "Formularios y evidencias",
      "Reportes conectados al storage global",
      "Permisos y acceso compartido",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlAudit | Auditorias integradas a la plataforma",
      description:
        "Auditorias, formularios y evidencias sobre la misma base de autenticacion y storage compartido de ControlApp.",
    },
    landingContent: {
      heroLabel: "Auditorias e inspecciones",
      heroTitle: "ControlAudit",
      heroDescription:
        "ControlAudit conecta formularios, evidencias y reportes con la base comun de ControlApp. La informacion de auditoria comparte login, permisos y storage global para que las evidencias no queden atrapadas en un modulo cerrado.",
      heroStats: {
        value: "Conectado",
        label: "a identidad, permisos y archivos de toda la plataforma",
      },
      benefits: [
        "Centraliza evidencias y reportes en el mismo ecosistema",
        "Evita cuentas separadas para equipos operativos",
        "Mantiene permisos por modulo y visibilidad controlada",
        "Hace trazable cada archivo desde ControlFile",
        "Facilita compartir resultados con otras areas",
        "Escala nuevas auditorias sobre una base ya resuelta",
      ],
      functionalities: [
        {
          title: "Formularios configurables",
          description:
            "Registra auditorias e inspecciones en un modulo conectado al ecosistema operativo.",
          icon: Shield,
        },
        {
          title: "Evidencias centralizadas",
          description:
            "Fotos, archivos y observaciones se guardan sobre el storage global compartido.",
          icon: FolderOpen,
        },
        {
          title: "Reportes reutilizables",
          description:
            "Los resultados pueden consultarse desde otras apps y desde ControlFile segun permisos.",
          icon: FileText,
        },
        {
          title: "Acceso por claims",
          description:
            "Los usuarios ven auditorias y documentos solo si tienen permisos sobre el modulo.",
          icon: Lock,
        },
      ],
      useCases: [
        {
          title: "Auditorias de seguridad",
          description:
            "Documenta inspecciones y deja las evidencias disponibles en un repositorio comun.",
        },
        {
          title: "Control de calidad",
          description:
            "Relaciona formularios, adjuntos y reportes sin sacar informacion del ecosistema.",
        },
        {
          title: "Supervision distribuida",
          description:
            "Permite que distintos equipos trabajen con el mismo login y con permisos acotados.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver ControlAudit",
        primaryHref: "/control-audit",
        secondaryLabel: "Ver apps activas",
        secondaryHref: "/#apps",
      },
      platformIntegration: {
        title: "Integracion con la plataforma",
        description:
          "ControlAudit aprovecha la base comun para que las evidencias y reportes vivan en el mismo ecosistema que el resto de la operacion.",
        bullets: [
          "Comparte autenticacion con todos los modulos habilitados",
          "Guarda evidencias dentro del storage global visible desde ControlFile",
          "Respeta permisos por app para limitar acceso a auditorias sensibles",
        ],
      },
    },
  },
  {
    id: "horarios-simple",
    slug: "horarios",
    name: "Horarios Simple",
    shortDescription:
      "Gestion de horarios semanales y mensuales conectada al ecosistema compartido de ControlApp.",
    category: "operations",
    status: "active",
    icon: Calendar,
    image: "/horarios-app.jpg",
    color: "from-orange-500 to-amber-500",
    href: "/horarios",
    features: [
      "Horarios semanales y vista mensual",
      "Exportacion a imagen para compartir",
      "Publicacion en PWA para empleados",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "Horarios Simple | Gestion de horarios integrada",
      description:
        "Gestion de horarios semanales y mensuales sobre la plataforma centralizada de ControlApp, con autenticacion compartida y publicacion para equipos.",
    },
    landingContent: {
      heroLabel: "Gestion de horarios",
      heroTitle: "Horarios Simple",
      heroDescription:
        "Horarios Simple organiza turnos semanales y mensuales sobre la misma base de autenticacion, permisos y storage de ControlApp. Permite publicar cronogramas para el equipo, compartirlos como imagen y mantener todo dentro del ecosistema operativo.",
      heroStats: {
        value: "90%",
        label: "menos conflictos de horarios en la operacion diaria",
      },
      benefits: [
        "Reduce conflictos y superposiciones de horarios",
        "Centraliza la planificacion del equipo en la misma plataforma",
        "Permite compartir cronogramas sin salir del ecosistema",
        "Mantiene permisos por modulo para equipos y supervisores",
        "Escala con nuevas areas o sucursales sin cuentas separadas",
        "Se integra con el resto de las apps activas de ControlApp",
      ],
      functionalities: [
        {
          title: "Horarios semanales",
          description:
            "Crea y ajusta cronogramas semanales con una operacion simple para supervisores y equipos.",
          icon: Calendar,
        },
        {
          title: "Vista mensual",
          description:
            "Visualiza el mes completo para detectar cobertura, huecos y cambios antes de publicarlos.",
          icon: FileText,
        },
        {
          title: "Exportacion a imagen",
          description:
            "Convierte horarios en imagen para compartirlos rapidamente por WhatsApp, email o imprimir.",
          icon: FolderOpen,
        },
        {
          title: "Publicacion en PWA",
          description:
            "Publica el horario para que los empleados lo consulten desde la app con acceso controlado.",
          icon: Lock,
        },
      ],
      useCases: [
        {
          title: "Restaurantes y bares",
          description:
            "Gestiona cambios de turnos, francos y cobertura en operaciones con horarios variables.",
        },
        {
          title: "Tiendas y comercios",
          description:
            "Planifica el equipo por semana y por mes para sostener la operacion en todos los turnos.",
        },
        {
          title: "Empresas de servicios",
          description:
            "Coordina equipos y disponibilidad sin depender de planillas separadas o mensajes sueltos.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver Horarios Simple",
        primaryHref: "/horarios",
        secondaryLabel: "Explorar apps activas",
        secondaryHref: "/#apps",
      },
      platformIntegration: {
        title: "Integracion con la plataforma",
        description:
          "Horarios Simple se apoya en la base comun de ControlApp para enfocarse en planificacion y comunicacion operativa, no en rehacer autenticacion o acceso.",
        bullets: [
          "Comparte login y permisos con los demas modulos del ecosistema",
          "Puede convivir con documentacion y archivos visibles desde ControlFile",
          "Se suma al catalogo activo sin duplicar navegacion ni estructura comercial",
        ],
      },
    },
  },
  {
    id: "control-gastos",
    slug: "control-gastos",
    name: "ControlGastos",
    shortDescription:
      "Gestion de gastos y comprobantes conectada al storage global de la plataforma.",
    category: "finance",
    status: "active",
    icon: Receipt,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file3-vmbmN61v5atqI637XpFupjQa80OunU.png",
    color: "from-amber-500 to-orange-500",
    href: "/control-gastos",
    features: [
      "Gastos recurrentes",
      "Comprobantes visibles en ControlFile",
      "SSO con el ecosistema",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlGastos | Gastos y comprobantes integrados",
      description:
        "Control de gastos conectado al storage global y a la autenticacion compartida de la plataforma ControlApp.",
    },
    landingContent: {
      heroLabel: "Gestion de gastos",
      heroTitle: "ControlGastos",
      heroDescription:
        "ControlGastos administra gastos y comprobantes sin salir del ecosistema de ControlApp. Comparte la misma cuenta, aprovecha el storage global y deja los adjuntos visibles desde ControlFile con permisos por modulo.",
      heroStats: {
        value: "SSO",
        label: "para pasar de finanzas a archivos sin cambiar de cuenta",
      },
      benefits: [
        "Conecta recibos y comprobantes al storage global",
        "Mantiene identidad compartida para equipos administrativos",
        "Evita adjuntos sueltos fuera de la plataforma",
        "Deja trazabilidad por app y por coleccion",
        "Permite escalar funciones financieras sin rehacer auth",
        "Ordena mejor la documentacion de gastos",
      ],
      functionalities: [
        {
          title: "Gastos recurrentes",
          description:
            "Gestiona pagos y obligaciones repetidas sin crear una experiencia aislada del resto del ecosistema.",
          icon: Receipt,
        },
        {
          title: "Comprobantes adjuntos",
          description:
            "Los comprobantes se guardan dentro del storage global y pueden consultarse desde ControlFile.",
          icon: FolderOpen,
        },
        {
          title: "Acceso unificado",
          description:
            "Los usuarios comparten login con el resto de las apps y entran solo si tienen permisos.",
          icon: Lock,
        },
        {
          title: "Contexto por modulo",
          description:
            "Los archivos financieros quedan ordenados por origen y coleccion para no perder trazabilidad.",
          icon: FileText,
        },
      ],
      useCases: [
        {
          title: "Administracion interna",
          description:
            "Ordena gastos operativos con adjuntos centralizados y accesos controlados.",
        },
        {
          title: "Seguimiento de comprobantes",
          description:
            "Evita que los recibos queden repartidos en carpetas externas o cuentas separadas.",
        },
        {
          title: "Trabajo entre areas",
          description:
            "Conecta finanzas con operaciones y archivos sobre una misma plataforma.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver ControlGastos",
        primaryHref: "/control-gastos",
        secondaryLabel: "Abrir ControlFile",
        secondaryHref: "/control-file",
      },
      platformIntegration: {
        title: "Integracion con la plataforma",
        description:
          "ControlGastos aprovecha la infraestructura comun para centrarse en el dominio financiero y no en resolver auth o archivos desde cero.",
        bullets: [
          "Comparte sesion con el resto del ecosistema",
          "Guarda comprobantes dentro del storage global",
          "Expone adjuntos en ControlFile con organizacion por modulo y coleccion",
        ],
      },
    },
  },
  {
    id: "control-ventas",
    slug: "control-ventas",
    name: "ControlVentas",
    shortDescription:
      "Operacion comercial y caja diaria sobre la misma base de identidad y archivos.",
    category: "finance",
    status: "active",
    icon: TrendingUp,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
    color: "from-cyan-500 to-blue-500",
    href: "/control-ventas",
    features: [
      "Caja diaria",
      "Documentacion comercial integrada",
      "Permisos y login compartidos",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "ControlVentas | Operacion comercial integrada",
      description:
        "Caja diaria y control comercial conectados al storage global y a la autenticacion compartida de ControlApp.",
    },
    landingContent: {
      heroLabel: "Operacion comercial",
      heroTitle: "ControlVentas",
      heroDescription:
        "ControlVentas trabaja sobre la misma plataforma compartida de ControlApp para unificar identidad, permisos y documentacion comercial. Eso permite mover archivos y evidencias entre modulos sin friccion y sin duplicar infraestructura.",
      heroStats: {
        value: "Centralizado",
        label: "en el mismo ecosistema de auth y storage",
      },
      benefits: [
        "Integra operacion comercial con el resto del ecosistema",
        "Mantiene acceso por permisos sin credenciales separadas",
        "Conecta tickets y adjuntos al storage global",
        "Facilita trazabilidad por modulo comercial",
        "Evita silos entre ventas, archivos y administracion",
        "Hace mas simple sumar nuevos modulos comerciales",
      ],
      functionalities: [
        {
          title: "Caja diaria",
          description:
            "Gestiona operaciones comerciales sobre un modulo conectado a la identidad compartida.",
          icon: TrendingUp,
        },
        {
          title: "Documentacion integrada",
          description:
            "Adjuntos y comprobantes pueden ordenarse en el storage global y consultarse desde ControlFile.",
          icon: FolderOpen,
        },
        {
          title: "Permisos por rol",
          description:
            "El acceso al modulo se resuelve con claims y permisos, no con cuentas separadas.",
          icon: Shield,
        },
        {
          title: "Escalabilidad comercial",
          description:
            "Permite crecer en funciones comerciales sin rehacer los cimientos de autenticacion o archivos.",
          icon: FileText,
        },
      ],
      useCases: [
        {
          title: "Locales y puntos de venta",
          description:
            "Controla cierres y movimientos diarios con acceso centralizado y documentacion asociada.",
        },
        {
          title: "Negocios con administracion interna",
          description:
            "Conecta caja diaria con procesos de soporte y archivo en la misma plataforma.",
        },
        {
          title: "Operacion comercial escalable",
          description:
            "Suma nuevos procesos sin romper el ecosistema ni multiplicar accesos.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver ControlVentas",
        primaryHref: "/control-ventas",
        secondaryLabel: "Explorar la plataforma",
        secondaryHref: "/#capacidades",
      },
      platformIntegration: {
        title: "Integracion con la plataforma",
        description:
          "ControlVentas se monta sobre la capa compartida de ControlApp para que operacion comercial, archivos y permisos hablen el mismo idioma.",
        bullets: [
          "Comparte autenticacion con los demas modulos activos",
          "Puede publicar documentacion comercial en el storage global",
          "Mantiene visibilidad controlada desde ControlFile segun permisos",
        ],
      },
    },
  },
  {
    id: "bolsa-trabajo",
    slug: "bolsa-trabajo",
    name: "Bolsa de Trabajo",
    shortDescription:
      "Gestion de candidatos y perfiles conectada al ecosistema compartido de ControlApp.",
    category: "talent",
    status: "active",
    icon: Briefcase,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
    color: "from-indigo-500 to-blue-500",
    href: "/bolsa-trabajo",
    features: [
      "CVs y perfiles",
      "Archivos centralizados",
      "Acceso sobre auth compartida",
    ],
    platformCapabilities: {
      sharedAuth: true,
      sharedStorage: true,
      visibleInControlFile: true,
      requiresPermissions: true,
    },
    seo: {
      title: "Bolsa de Trabajo | Talento integrado a la plataforma",
      description:
        "Gestion de candidatos y CVs conectada al storage global y a la autenticacion central de ControlApp.",
    },
    landingContent: {
      heroLabel: "Gestion de talento",
      heroTitle: "Bolsa de Trabajo",
      heroDescription:
        "Bolsa de Trabajo extiende la plataforma hacia talento y seleccion. CVs, archivos adjuntos y accesos viven sobre la misma base compartida para no duplicar cuentas ni repositorios de documentos.",
      heroStats: {
        value: "1 plataforma",
        label: "para talento, archivos y permisos",
      },
      benefits: [
        "Conecta perfiles y CVs con el storage global",
        "Comparte login y permisos con el resto del ecosistema",
        "Evita repositorios paralelos de archivos de candidatos",
        "Mantiene orden por modulo y colecciones",
        "Facilita que RRHH trabaje sobre infraestructura ya resuelta",
        "Prepara el terreno para nuevos modulos de talento",
      ],
      functionalities: [
        {
          title: "Perfiles y postulaciones",
          description:
            "Organiza candidatos y documentacion sobre una app conectada a la plataforma.",
          icon: Briefcase,
        },
        {
          title: "CVs y adjuntos centralizados",
          description:
            "Los archivos asociados quedan disponibles dentro del storage global.",
          icon: FolderOpen,
        },
        {
          title: "Permisos compartidos",
          description:
            "El acceso se habilita por claims y roles sin credenciales separadas para RRHH.",
          icon: Shield,
        },
        {
          title: "Visibilidad transversal",
          description:
            "ControlFile puede mostrar la documentacion por modulo y coleccion con contexto.",
          icon: FileText,
        },
      ],
      useCases: [
        {
          title: "Procesos de seleccion internos",
          description:
            "Centraliza CVs y archivos sin salir del ecosistema operativo de la empresa.",
        },
        {
          title: "Base de talento organizada",
          description:
            "Ordena candidatos y adjuntos con estructura consistente y permisos por area.",
        },
        {
          title: "Trabajo entre RRHH y otras areas",
          description:
            "Comparte contexto documental sin copiar archivos entre sistemas desconectados.",
        },
      ],
      finalCta: {
        primaryLabel: "Ver Bolsa de Trabajo",
        primaryHref: "/bolsa-trabajo",
        secondaryLabel: "Ver ControlFile",
        secondaryHref: "/control-file",
      },
      platformIntegration: {
        title: "Integracion con la plataforma",
        description:
          "Bolsa de Trabajo aprovecha la base comun para sumar un nuevo dominio sin rehacer identidad, archivos ni permisos.",
        bullets: [
          "Comparte autenticacion y permisos con el resto de las apps",
          "Publica CVs y adjuntos en el storage global visible desde ControlFile",
          "Mantiene organizacion por modulo para evitar mezcla de contextos",
        ],
      },
    },
  },
]

export const navigationLinks = [
  { name: "Como funciona", href: "#arquitectura" },
  { name: "Capacidades", href: "#capacidades" },
  { name: "Apps", href: "#apps" },
  { name: "Demos", href: "/demos" },
]

export const activePlatformApps = platformApps.filter((app) => app.status === "active")

export function getPlatformAppBySlug(slug: string) {
  return platformApps.find((app) => app.slug === slug)
}
