import { Calendar, FileText, FolderOpen, Lock } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const horariosSimple: PlatformApp = {
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
}
