import type { LucideIcon } from "lucide-react"
import { Bot, Boxes, BriefcaseBusiness, Cable, ClipboardList, Eye, Layers3, ShieldCheck, Workflow } from "lucide-react"

type NavigationItem = {
  label: string
  href: string
}

type HeroStat = {
  value: string
  label: string
}

type HeroSignal = {
  label: string
  value: string
}

type ContentItem = {
  title: string
  description: string
  icon: LucideIcon
}

type ServiceItem = ContentItem & {
  items: string[]
}

type DetailedProcessItem = {
  title: string
  description: string
  outcome: string
}

type FaqItem = {
  question: string
  answer: string
}

export const siteContent = {
  company: {
    shortDescription:
      "Empresa de software a medida dedicada a resolver fricción operativa, automatizar tareas repetitivas y transformar procesos dispersos en sistemas claros.",
    description:
      "ControlApps es una empresa de software a medida enfocada en resolver problemas reales de operación. Analizamos cómo circula el trabajo, dónde aparecen repeticiones, demoras o errores, y convertimos esas fricciones en herramientas digitales útiles.",
    approach:
      "No partimos de un producto cerrado. Partimos del problema. Diseñamos aplicaciones, automatizaciones y flujos adaptados a cada contexto para que el equipo gane claridad, control y capacidad de crecer sin sumar complejidad.",
  },
  navigation: [
    { label: "Empresa", href: "/#empresa" },
    { label: "Problemas", href: "/#problemas" },
    { label: "Soluciones", href: "/#soluciones" },
    { label: "Metodología", href: "/metodologia" },
  ] satisfies NavigationItem[],
  heroStats: [
    { value: "A medida", label: "Soluciones" },
    { value: "Operación real", label: "Punto de partida" },
    { value: "Menos fricción", label: "Resultado esperado" },
  ] satisfies HeroStat[],
  heroSignals: [
    { label: "Entrada", value: "Procesos manuales, circuitos dispersos, controles débiles" },
    { label: "Diseño", value: "Aplicaciones internas, automatización y visibilidad operativa" },
    { label: "Salida", value: "Trabajo más claro, medible y sostenible" },
  ] satisfies HeroSignal[],
  painPoints: [
    {
      title: "Procesos sostenidos por planillas, mensajes y memoria operativa",
      description:
        "Cuando la información está repartida y el seguimiento depende de personas puntuales, el proceso pierde consistencia y escala mal.",
      icon: ClipboardList,
    },
    {
      title: "Tareas repetitivas que consumen tiempo y generan errores evitables",
      description:
        "Carga manual, estados que no se actualizan solos, controles duplicados y pasos innecesarios afectan productividad y precisión.",
      icon: Cable,
    },
    {
      title: "Herramientas genéricas que obligan a trabajar alrededor del sistema",
      description:
        "Si el equipo tiene que adaptarse al software en vez de que el software acompañe la operación, aparece fricción todos los días.",
      icon: Bot,
    },
    {
      title: "Falta de trazabilidad, control y visibilidad sobre lo que está pasando",
      description:
        "Sin una herramienta correcta, es difícil saber qué está pendiente, dónde se frenó un flujo o qué riesgo se está acumulando.",
      icon: ShieldCheck,
    },
  ] satisfies ContentItem[],
  services: [
    {
      title: "Aplicaciones internas a medida",
      description:
        "Herramientas específicas para tareas, áreas o circuitos que hoy no están bien resueltos por software estándar.",
      items: ["Gestión operativa", "Seguimiento de tareas", "Aprobaciones", "Tableros de control"],
      icon: Layers3,
    },
    {
      title: "Automatización de flujos repetitivos",
      description:
        "Procesos que dejan de depender de pasos manuales y empiezan a ejecutar reglas, avisos y cambios de estado con lógica definida.",
      items: ["Notificaciones", "Asignaciones", "Estados automáticos", "Validaciones"],
      icon: Workflow,
    },
    {
      title: "Centralización de información y trazabilidad",
      description:
        "Datos, archivos, responsables y eventos reunidos en un sistema claro para trabajar con contexto y control.",
      items: ["Documentación", "Historial", "Permisos", "Visibilidad transversal"],
      icon: Boxes,
    },
    {
      title: "Software para operación comercial y administrativa",
      description:
        "Soluciones para circuitos de ventas, gastos, documentación, coordinación interna y otras áreas clave del negocio.",
      items: ["Operación comercial", "Administración", "Backoffice", "Coordinación interna"],
      icon: BriefcaseBusiness,
    },
  ] satisfies ServiceItem[],
  process: [
    {
      title: "Levantamiento del proceso actual",
      description: "Entendemos cómo se trabaja hoy, qué herramientas intervienen y dónde se genera fricción.",
      icon: Eye,
    },
    {
      title: "Definición del flujo objetivo",
      description: "Ordenamos el circuito ideal, priorizamos lo crítico y bajamos el alcance a algo útil y ejecutable.",
      icon: ClipboardList,
    },
    {
      title: "Construcción del sistema",
      description: "Desarrollamos la solución a medida y la ajustamos sobre el uso real para que acompañe la operación.",
      icon: Workflow,
    },
    {
      title: "Evolución y mejora continua",
      description: "Una vez que el flujo está vivo, refinamos lo necesario para sostener crecimiento y control.",
      icon: ShieldCheck,
    },
  ] satisfies ContentItem[],
  processDetailed: [
    {
      title: "Relevamiento y lectura operativa",
      description:
        "Mapeamos actores, tareas, excepciones, puntos de bloqueo, canales de comunicación y fuentes de información. El objetivo es entender dónde aparece la fricción y qué parte del problema realmente vale digitalizar.",
      outcome: "Mapa del problema",
    },
    {
      title: "Diseño funcional del flujo",
      description:
        "Definimos el circuito objetivo, los estados, los responsables, la lógica de automatización y el criterio de visibilidad. El alcance se baja a una solución concreta que resuelva primero lo crítico.",
      outcome: "Flujo objetivo",
    },
    {
      title: "Desarrollo y ajuste sobre uso real",
      description:
        "Construimos la herramienta, validamos la interacción con usuarios reales y corregimos lo que haga falta para que el software se alinee al trabajo diario y no quede como un sistema paralelo.",
      outcome: "Sistema funcionando",
    },
    {
      title: "Consolidación y evolución",
      description:
        "Una vez resuelto el flujo principal, se extiende capacidad: nuevas automatizaciones, más trazabilidad, mejores reportes o nuevos módulos, siempre sobre una base ya útil para el negocio.",
      outcome: "Base escalable",
    },
  ] satisfies DetailedProcessItem[],
  differentiators: [
    {
      title: "Partimos del problema, no del catálogo",
      description: "Cada solución nace de la operación real y no de intentar encajar a la empresa dentro de una herramienta genérica.",
      icon: Eye,
    },
    {
      title: "Pensamos en uso diario, no en promesas abstractas",
      description: "La prioridad es que el software sirva en la práctica, reduzca carga operativa y mejore la toma de decisiones.",
      icon: Workflow,
    },
    {
      title: "Amplia cobertura funcional",
      description: "Podemos abordar distintos tipos de procesos siempre que el foco sea ordenar, automatizar y ganar control.",
      icon: Boxes,
    },
  ] satisfies ContentItem[],
  coverageAreas: [
    "Documentación y trazabilidad",
    "Circuitos de aprobación",
    "Operación comercial",
    "Backoffice y administración",
    "Seguimiento de tareas y estados",
    "Reportes y visibilidad operativa",
    "Coordinación interna y equipos",
    "Automatización de acciones repetitivas",
  ],
  faq: [
    {
      question: "¿Trabajan sobre una plataforma ya cerrada?",
      answer:
        "No. ControlApps desarrolla software a medida. Podemos reutilizar criterios, experiencia o componentes, pero cada solución se plantea según la necesidad concreta del cliente.",
    },
    {
      question: "¿Qué tipo de problemas tiene sentido resolver con ustedes?",
      answer:
        "Procesos repetitivos, tareas manuales, falta de trazabilidad, información dispersa, controles débiles y operaciones que hoy dependen demasiado de planillas, mensajes o memoria operativa.",
    },
    {
      question: "¿Solo hacen sistemas grandes?",
      answer:
        "No necesariamente. Muchas veces el mayor impacto viene de resolver bien un flujo específico y luego ampliar sobre esa base.",
    },
    {
      question: "¿Pueden intervenir en distintos sectores o tipos de empresa?",
      answer:
        "Sí. La lógica de trabajo está enfocada en procesos, fricción operativa y estructura de flujos, por eso puede aplicarse en distintos contextos.",
    },
  ] satisfies FaqItem[],
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@controldoc.app",
    region: "Operación remota con foco en equipos y empresas de Latam.",
    availability: "Primer contacto para diagnóstico y definición de alcance.",
  },
  contactHighlights: [
    "Diagnóstico inicial sobre el flujo o problema que hoy está desordenado.",
    "Conversación orientada a viabilidad, alcance y mejor forma de resolverlo.",
    "Punto de partida concreto para definir una solución a medida.",
  ],
}
