import { FileText, FolderOpen, Lock, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlAudit: PlatformApp = {
  id: "control-audit",
  slug: "control-audit",
  name: "ControlAudit",
  shortDescription:
    "PWA para inspectores de campo. Formularios offline, fotos adjuntas, reportes automáticos y dashboard HSE con índices técnicos reales.",
  category: "operations",
  status: "active",
  icon: Shield,
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
  color: "from-emerald-500 to-teal-500",
  href: "/control-audit",
  features: [
    "Diseñá formularios",
    "Completá desde el celular",
    "Adjuntá fotos en campo",
    "Generá reportes al cerrar",
    "Dashboard HSE automático",
    "Controlá quién ve qué",
  ],
  cardBadges: ["Offline completo", "PWA instalable"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    exposedInDrive: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlAudit | Auditorías e inspecciones de campo offline",
    description:
      "ControlAudit es una PWA para inspecciones de campo sin internet. Formularios personalizados, fotos adjuntas, reportes automáticos y dashboard de seguridad con índices HSE reales.",
    canonicalPath: "/control-audit",
    socialImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
    categoryLabel: "Software de auditorías e inspecciones",
    keywords: {
      primary: "software de auditorias e inspecciones",
      secondary: [
        "app de inspecciones offline",
        "formularios de auditoria sin internet",
        "dashboard HSE indices tecnicos",
      ],
      problems: [
        "inspecciones en papel o Excel",
        "evidencias sin conectividad",
        "indices de seguridad calculados manualmente",
      ],
      industries: ["higiene y seguridad", "calidad", "operaciones de campo"],
    },
  },
  landingContent: {
    mediaGallery: {
      items: [
        {
          caption: "Demo completo — de formulario en campo a reporte generado",
          web:    { type: "video", src: "" },
          mobile: { type: "video", src: "" },
        },
        {
          caption: "Constructor de formularios — secciones, preguntas y campos de foto",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Inspector completando auditoría sin internet",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Reporte HTML generado automáticamente al cerrar",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Dashboard HSE con índices IF / IG / IA por sucursal",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
        {
          caption: "Matriz de capacitaciones — cumplimiento por empleado y período",
          web:    { type: "image", src: "" },
          mobile: { type: "image", src: "" },
        },
      ],
    },
    heroLabel: "Auditorías e inspecciones de campo, con o sin internet.",
    heroTitle: "ControlAudit",
    heroDescription:
      "ControlAudit es una PWA que tus inspectores instalan en el celular y usan sin conexión. Formularios personalizados, fotos adjuntas, reportes automáticos y dashboard de seguridad con índices técnicos reales.",
    heroStats: {
      value: "Offline completo",
      label: "con sincronización automática al recuperar conexión",
    },
    valueProposition:
      "Si tus inspectores trabajan en campo sin WiFi, ControlAudit les da formularios digitales, captura de evidencias y reportes automáticos que no dependen de la señal. Todo dentro de ControlApp — archivos, permisos y usuarios ya están resueltos.",
    audiences: [
      {
        title: "Empresas con obligaciones de Higiene y Seguridad",
        description:
          "Cumplimiento con índices IF/IG/IA/II calculados automáticamente sobre datos reales de empleados y accidentes.",
      },
      {
        title: "Operaciones con inspectores en campo",
        description:
          "Inspectores que trabajan en zonas sin conectividad y necesitan completar formularios con fotos sin depender del WiFi.",
      },
      {
        title: "RRHH con capacitaciones por empleado",
        description:
          "Gestión de planes anuales, registro de sesiones con asistencia y matriz de cumplimiento por sucursal.",
      },
    ],
    problems: [
      "Inspecciones en papel o WhatsApp sin trazabilidad ni evidencias organizadas.",
      "Fotos de hallazgos guardadas en el celular del inspector, fuera del sistema.",
      "Índices de seguridad calculados manualmente en Excel con datos desactualizados.",
    ],
    benefits: [
      "Formularios completables desde el celular sin señal, con autoguardado.",
      "Evidencias fotográficas adjuntas a cada ítem de la auditoría.",
      "Reporte HTML imprimible generado automáticamente al cerrar.",
      "Índices HSE calculados sobre datos reales, no en planillas.",
      "Dashboard de seguridad filtrable por sucursal y período.",
      "Galería pública de formularios: copiá uno como base sin afectar el original.",
    ],
    functionalities: [
      {
        title: "Formularios offline completos",
        description:
          "Diseñá plantillas con secciones, preguntas de texto, opciones y campos de foto. El inspector los completa desde el celular aunque no haya señal. El autoguardado protege el trabajo ante cualquier cierre accidental.",
        icon: Shield,
      },
      {
        title: "Galería pública de formularios",
        description:
          "Accedé a formularios compartidos por otros administradores, con rating y filtros por popularidad o cantidad de preguntas. Copiá uno como base y editalo — sin afectar el original.",
        icon: FolderOpen,
      },
      {
        title: "Reportes automáticos al cerrar",
        description:
          "Al terminar una auditoría se genera un reporte HTML imprimible con todas las respuestas, observaciones y evidencias. Listo para imprimir o compartir.",
        icon: FileText,
      },
      {
        title: "Gestión de empleados por sucursal",
        description:
          "Nómina completa con filtros por cargo, tipo y estado. Búsqueda por nombre o DNI. El estado activo/inactivo se actualiza automáticamente cuando hay accidentes con reposo.",
        icon: Lock,
      },
      {
        title: "Capacitaciones y planes anuales",
        description:
          "Matriz de cumplimiento año × sucursal × empleado. Creá el plan, registrá sesiones con asistencia, seguí el cumplimiento. Tipos de capacitación con vigencia en meses.",
        icon: Shield,
      },
      {
        title: "Accidentes e incidentes laborales",
        description:
          "Registrá accidentes con múltiples empleados, días de reposo e imágenes. Al cerrar el caso, calcula días perdidos automáticamente y reactiva al empleado.",
        icon: FileText,
      },
      {
        title: "Dashboard de seguridad HSE",
        description:
          "Índices técnicos reales: IF (frecuencia), IG (gravedad), IA (accidentabilidad), II (incidencia), calculados sobre datos reales de empleados y accidentes. Filtrable por sucursal y período, con gráficos.",
        icon: Shield,
      },
      {
        title: "Agenda de auditorías",
        description:
          "Calendario de auditorías programadas por empresa y sucursal. Asignale formulario, fecha y seguí el estado desde el tablero operativo.",
        icon: FolderOpen,
      },
    ],
    useCases: [
      {
        title: "Inspector en campo sin WiFi",
        description:
          "Abre ControlAudit instalado en el celular sin internet. Selecciona empresa → sucursal → formulario. Completa ítems, adjunta fotos de hallazgos. Al volver a la oficina, el sistema sincroniza automáticamente y el reporte queda disponible para el supervisor con evidencias incluidas.",
      },
      {
        title: "Responsable de RRHH gestionando capacitaciones",
        description:
          "Crea el plan anual para cada sucursal. Registra cada sesión con lista de asistencia. La matriz muestra de un vistazo quién completó cada ítem. Al vencer la vigencia, el sistema lo señala en la matriz.",
      },
      {
        title: "Empresa con múltiples sucursales",
        description:
          "Admin central configura formularios en la galería compartida. Cada sucursal los usa con sus propios operarios. Dashboard muestra índices IF/IG/IA por sucursal o total. Accidentes con reposo marcan automáticamente al empleado como inactivo.",
      },
    ],
    faq: [
      {
        question: "¿Funciona sin internet?",
        answer:
          "Sí. Es una PWA instalable con offline completo. Los formularios se completan sin señal y se sincronizan automáticamente al recuperar conexión.",
      },
      {
        question: "¿Se instala en el celular?",
        answer: "Sí, en Android e iOS como app nativa desde el navegador, sin pasar por la App Store.",
      },
      {
        question: "¿Los formularios son fijos?",
        answer:
          "No. Los diseñás vos con secciones, preguntas y campos de foto. También podés copiar uno de la galería pública y editarlo.",
      },
      {
        question: "¿Los índices HSE son automáticos?",
        answer:
          "Sí. IF, IG, IA e II se calculan automáticamente sobre los datos reales de empleados y accidentes registrados en el sistema.",
      },
      {
        question: "¿Qué diferencia tiene de una app de formularios genérica?",
        answer:
          "Tiene módulos de empleados, capacitaciones, accidentes y dashboard de seguridad integrados. No es solo formularios — es gestión HSE completa.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlAudit",
      primaryHref: "/control-audit",
      secondaryLabel: "Ver demo",
      secondaryHref: "/demos",
    },
    platformIntegration: {
      title: "ControlAudit comparte la base de identidad y archivos de la plataforma",
      description:
        "Las evidencias y reportes se conectan con la misma capa común que usan otros módulos de ControlApp.",
      bullets: [
        "Comparte autenticación con el resto de las apps activas.",
        "Guarda evidencias en el almacenamiento compartido, accesible desde ControlFile.",
        "Mantiene acceso seguro mediante permisos por módulo y rol.",
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
        anchor: "Ver gestión documental para procesos de compliance",
        reason: "ControlDoc complementa auditorías con documentación controlada y vencimientos.",
      },
    ],
  },
}
