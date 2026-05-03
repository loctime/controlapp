import { Calendar, FileText, FolderOpen, Lock } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const horariosSimple: PlatformApp = {
  id: "horarios-simple",
  slug: "horarios",
  name: "Horarios Simple",
  shortDescription:
    "Armá los turnos de la semana, publicálos para que los empleados los vean sin login, gestioná el stock, hacé pedidos a proveedores y generá remitos con firma digital.",
  category: "operations",
  status: "active",
  icon: Calendar,
  image: "/horarios-app.jpg",
  color: "from-orange-500 to-amber-500",
  href: "/horarios",
  features: [
    "Armá los turnos",
    "Publicá sin que hagan login",
    "Controlá el stock",
    "Pedí a proveedores",
    "Firmá remitos en el celular",
    "Gestioná tareas por empleado",
  ],
  cardBadges: ["Horarios + Stock + Remitos", "Firma digital"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    exposedInDrive: true,
    requiresPermissions: true,
  },
  seo: {
    title: "Horarios Simple | Horarios, stock, pedidos y remitos con firma digital",
    description:
      "Horarios Simple es una PWA para gestión operativa: turnos semanales, publicación para empleados sin login, stock, pedidos a proveedores y remitos con firma digital.",
    canonicalPath: "/horarios",
    socialImage: "/horarios-app.jpg",
    categoryLabel: "Gestión operativa con horarios y stock",
    keywords: {
      primary: "gestion de horarios y stock para negocios",
      secondary: [
        "software de turnos para empleados",
        "pedidos a proveedores con remito digital",
        "firma digital de remitos",
      ],
      problems: [
        "horarios compartidos por WhatsApp",
        "stock controlado en Excel",
        "remitos en papel sin trazabilidad",
      ],
      industries: ["gastronomía", "retail", "distribución"],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Demo — armar turnos, publicar y completar un pedido con remito firmado",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Grilla semanal de turnos con separadores por área",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Link público del horario — vista del empleado sin login",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Panel de stock con movimientos entrada/salida",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Remito con firma digital de fábrica y sucursal",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "Horarios, stock, pedidos y remitos para tu operación diaria.",
    heroTitle: "Horarios Simple",
    heroDescription:
      "Armá los turnos de la semana, publicálos para que los empleados los vean sin login, gestioná el stock, hacé pedidos a proveedores y generá remitos con firma digital. Todo en una PWA instalable.",
    heroStats: {
      value: "PWA instalable",
      label: "para gestión operativa completa desde el celular",
    },
    valueProposition:
      "Si hoy gestionás horarios por WhatsApp, el stock en Excel y los pedidos a mano, Horarios Simple centraliza todo en una sola app instalable en el celular.",
    audiences: [
      {
        title: "Restaurantes y cadenas gastronómicas",
        description:
          "Armá turnos con francos y medios turnos, publicálos para los empleados y gestioná pedidos de insumos con remito digital.",
      },
      {
        title: "Negocios con fábrica y puntos de venta",
        description:
          "La fábrica recibe pedidos de cada sucursal, los procesa y genera el remito. La sucursal confirma cantidades y registra devoluciones.",
      },
      {
        title: "Equipos con múltiples empleados y áreas",
        description:
          "Separadores visuales por área, roles diferenciados (admin, manager, fábrica, sucursal) y tareas asignadas por empleado.",
      },
    ],
    problems: [
      "Horarios enviados por WhatsApp que nadie recuerda dónde están.",
      "Stock controlado en Excel que se desactualiza entre turnos.",
      "Pedidos a proveedores sin trazabilidad de cantidades enviadas vs recibidas.",
    ],
    benefits: [
      "Los empleados ven su horario desde el celular sin crear cuenta.",
      "Stock mínimo calculado automáticamente para saber qué pedir.",
      "Remitos con firma digital de fábrica y sucursal.",
      "Estados del pedido visibles para ambas partes en tiempo real.",
      "Chat de stock en lenguaje natural sin necesidad de IA.",
      "Exportación de horarios como imagen, PDF o Excel.",
    ],
    functionalities: [
      {
        title: "Horarios — turnos, francos y exportación",
        description:
          "Turnos semanales y mensuales configurables, incluyendo turnos cortados en dos franjas. Franco, medio franco y medios turnos como estados de día. Cálculo automático de horas extra. Separadores visuales por área. Publicación de semana: empleados ven el horario en /horario/{empresa} sin login. Exportación como imagen, PDF semanal/mensual y Excel.",
        icon: Calendar,
      },
      {
        title: "Stock y pedidos — entrada, salida y proveedores",
        description:
          "Stock actual con movimientos de entrada y salida. Stock mínimo que calcula automáticamente la cantidad a pedir. Pedidos a proveedores con productos, unidades o packs. Importación masiva de productos. Links públicos de pedidos compartibles con proveedores. Chat de stock en lenguaje natural: 'ingresé 10 cajas' o '¿cuántas botellas quedan?' — sin IA, IA opcional con Ollama.",
        icon: FolderOpen,
      },
      {
        title: "Remitos y recepciones — firma digital y estados",
        description:
          "Generación de remitos desde pedidos aprobados. Firma digital de remitos por fábrica y sucursal. Recepción con cantidades recibidas, devoluciones y observaciones. Estados del pedido: creado → processing → enviado → recibido → completado. Panel de fábrica separado para procesar pedidos y emitir remitos.",
        icon: FileText,
      },
      {
        title: "Tareas — calendario semanal por empleado",
        description:
          "Calendario semanal con turnos mañana/tarde. Tareas diarias, semanales y específicas por fecha. Creación rápida desde la celda del calendario. Asignación a empleados con estado activo/inactivo.",
        icon: Lock,
      },
    ],
    useCases: [
      {
        title: "Restaurante o cadena gastronómica",
        description:
          "El encargado arma los turnos, los publica, y los empleados los ven desde el celular sin login. También gestiona el stock de ingredientes, hace el pedido al proveedor y el remito se firma digitalmente cuando llega la mercadería.",
      },
      {
        title: "Negocio con fábrica y puntos de venta",
        description:
          "La fábrica recibe pedidos de cada sucursal, los procesa y genera el remito. La sucursal confirma cantidades y registra devoluciones. Todo con estados visibles para ambas partes.",
      },
    ],
    faq: [
      {
        question: "¿Es solo para horarios?",
        answer:
          "No. Tiene stock, pedidos, remitos con firma digital, chat de stock en lenguaje natural y tareas asignables por empleado.",
      },
      {
        question: "¿Los empleados necesitan login para ver el horario?",
        answer:
          "No. El link público /horario/{empresa} es compartible. Los empleados ven su horario sin crear cuenta.",
      },
      {
        question: "¿El chat de stock necesita IA?",
        answer:
          "No. Funciona sin IA y entiende frases como 'ingresé 10 cajas' o '¿cuántas botellas quedan?'. IA opcional con Ollama si lo querés conectar.",
      },
      {
        question: "¿Funciona en el celular?",
        answer: "Sí, PWA instalable en Android y desktop desde el navegador, sin pasar por la App Store.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar Horarios Simple",
      primaryHref: "/horarios",
      secondaryLabel: "Ver el resto de los módulos",
      secondaryHref: "/#apps",
    },
    platformIntegration: {
      title: "Horarios Simple se apoya en la base común de ControlApp",
      description:
        "El módulo se concentra en planificación y operación diaria mientras la plataforma resuelve identidad, permisos y crecimiento modular.",
      bullets: [
        "Comparte login con otros módulos del ecosistema.",
        "Puede convivir con archivos y documentación visibles desde ControlFile.",
        "Roles diferenciados: Admin, Manager, Fábrica, Sucursal e Invitado.",
      ],
    },
    relatedApps: [
      {
        slug: "bolsa-trabajo",
        anchor: "Ver módulo de candidatos y CVs para equipos operativos",
        reason: "Bolsa de Trabajo complementa la coordinación de personas con selección y perfiles.",
      },
      {
        slug: "control-file",
        anchor: "Ver storage compartido para archivos y publicaciones internas",
        reason: "ControlFile puede concentrar archivos y soportes vinculados a la operación.",
      },
    ],
  },
}
