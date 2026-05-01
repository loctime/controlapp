import { FileText, FolderOpen, Lock, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlAudit: PlatformApp = {
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
}
