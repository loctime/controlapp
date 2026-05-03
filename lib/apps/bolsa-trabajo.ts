import { Briefcase, FileText, FolderOpen, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const bolsaTrabajo: PlatformApp = {
  id: "bolsa-trabajo",
  slug: "bolsa-trabajo",
  name: "Bolsa de Trabajo",
  shortDescription:
    "Formulario de carga de CV, dashboard administrativo, fotos de perfil vía ControlFile y notificaciones automáticas por email.",
  category: "talent",
  status: "active",
  icon: Briefcase,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
  color: "from-indigo-500 to-blue-500",
  href: "/bolsa-trabajo",
  features: [
    "Recibí CVs sin que hagan cuenta",
    "Revisá perfiles desde el dashboard",
    "Te avisa cuando llega un CV",
    "Fotos de perfil integradas",
  ],
  cardBadges: ["CVs + Dashboard admin", "Notificaciones email"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "Bolsa de Trabajo | Recibí y gestioná CVs con dashboard y notificaciones",
    description:
      "Bolsa de Trabajo de ControlApp: formulario de carga de CV sin cuenta, dashboard administrativo con fotos de perfil y notificaciones automáticas por email.",
    canonicalPath: "/bolsa-trabajo",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-2Kclv2QWxtrOdw7z6E3eP3Kj8ZK39M.png",
    categoryLabel: "Gestión de candidatos y CVs",
    keywords: {
      primary: "gestion de candidatos y CVs",
      secondary: [
        "bolsa de trabajo para empresas",
        "dashboard de postulaciones",
        "formulario de CV con notificaciones",
      ],
      problems: [
        "CVs llegando por email sin panel centralizado",
        "sin forma de ver el estado de cada candidato",
        "fotos de perfil fuera del sistema",
      ],
      industries: ["rrhh", "operaciones", "servicios"],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Demo — candidato carga CV y admin recibe notificación en el dashboard",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Dashboard admin — candidatos con foto de perfil y estado",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Formulario público de carga de CV sin login",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Vista de perfil completo con CV adjunto",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "Recibí, revisá y gestioná CVs con fotos de perfil y notificaciones por email.",
    heroTitle: "Bolsa de Trabajo",
    heroDescription:
      "Módulo de gestión de candidatos de ControlApp. Formulario de carga de CV, dashboard administrativo, fotos de perfil vía ControlFile y notificaciones automáticas.",
    heroStats: {
      value: "Sin cuenta",
      label: "los candidatos cargan su CV sin necesidad de registrarse",
    },
    valueProposition:
      "Si recibís CVs por email y los revisás sin panel centralizado, Bolsa de Trabajo te da un formulario público para candidatos y un dashboard para gestionar todo desde ControlApp.",
    audiences: [
      {
        title: "Empresa que recibe CVs y quiere un panel centralizado",
        description:
          "Un panel para revisar todos los candidatos en lugar de recibir emails sueltos. Con foto de perfil, estado y datos completos.",
      },
      {
        title: "Área de RRHH que no quiere que los candidatos creen cuenta",
        description:
          "Los candidatos completan el formulario y adjuntan su CV sin necesidad de registrarse en ningún sistema.",
      },
    ],
    problems: [
      "CVs llegando por email sin panel para revisarlos de forma organizada.",
      "Fotos de perfil de candidatos fuera del sistema principal.",
      "Sin notificaciones automáticas cuando llega un nuevo CV.",
    ],
    benefits: [
      "Formulario público para candidatos sin necesidad de crear cuenta.",
      "Dashboard con foto de perfil, CV y estado de cada postulante.",
      "Notificación automática por email cuando se carga un CV nuevo.",
      "Fotos de perfil almacenadas en ControlFile con links de compartido.",
      "El admin accede con la misma cuenta del resto de ControlApp.",
      "Permisos que determinan quién puede ver y gestionar candidatos.",
    ],
    functionalities: [
      {
        title: "Formulario de carga de CV",
        description:
          "Los candidatos completan el formulario y adjuntan su CV. La foto de perfil se guarda en ControlFile y aparece en el dashboard del admin.",
        icon: Briefcase,
      },
      {
        title: "Dashboard administrativo",
        description:
          "Panel completo para revisar candidatos, ver estado de cada postulación y gestionar el proceso de selección.",
        icon: FolderOpen,
      },
      {
        title: "Notificaciones por email automáticas",
        description:
          "Cuando un candidato carga su CV o hay cambios de estado, se disparan notificaciones vía EmailJS.",
        icon: Shield,
      },
      {
        title: "Fotos de perfil en ControlFile",
        description:
          "Imágenes almacenadas con links de compartido. El componente las convierte automáticamente para mostrar en el avatar del dashboard.",
        icon: FileText,
      },
      {
        title: "Permisos compartidos con el ecosistema",
        description:
          "El admin accede con la misma cuenta del resto de ControlApp. Los permisos determinan quién puede ver y gestionar candidatos.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Empresa que recibe CVs y quiere un panel centralizado",
        description:
          "Los candidatos completan el formulario público y el área de RRHH los revisa desde el dashboard con foto de perfil, CV adjunto y notificación automática por email.",
      },
      {
        title: "RRHH que quiere que los candidatos suban su información sin cuenta",
        description:
          "El formulario es público y no requiere login del candidato. El admin ve todo desde el panel con los permisos habituales de ControlApp.",
      },
    ],
    faq: [
      {
        question: "¿Bolsa de Trabajo sirve para gestionar candidatos y CVs?",
        answer:
          "Sí. Tiene formulario público para candidatos, dashboard administrativo con foto de perfil y notificaciones automáticas por email.",
      },
      {
        question: "¿Los CVs quedan centralizados?",
        answer:
          "Sí. Los CVs y las fotos de perfil se guardan en ControlFile y se ven desde el dashboard con los permisos configurados.",
      },
      {
        question: "¿Los candidatos necesitan crear cuenta?",
        answer:
          "No. El formulario es público. Solo el admin necesita la cuenta de ControlApp para gestionar el panel.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar Bolsa de Trabajo",
      primaryHref: "/bolsa-trabajo",
      secondaryLabel: "Ver storage para CVs y adjuntos",
      secondaryHref: "/control-file",
    },
    platformIntegration: {
      title: "Bolsa de Trabajo aprovecha la base común para talento y selección",
      description:
        "La plataforma aporta identidad, archivos y permisos para que RRHH se enfoque en perfiles y procesos, no en infraestructura paralela.",
      bullets: [
        "Comparte autenticación y permisos con las demás apps.",
        "Publica CVs y fotos de perfil en el storage global de ControlFile.",
        "Mantiene organización por módulo para evitar mezcla de contextos.",
      ],
    },
    relatedApps: [
      {
        slug: "horarios",
        anchor: "Ver software de horarios para equipos y turnos",
        reason: "Horarios Simple complementa procesos de personas con coordinación operativa.",
      },
      {
        slug: "control-file",
        anchor: "Ver storage compartido para CVs y archivos de candidatos",
        reason: "ControlFile centraliza adjuntos y trazabilidad documental del módulo de talento.",
      },
    ],
  },
}
