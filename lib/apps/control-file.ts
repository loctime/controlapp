import { FileText, FolderOpen, Lock, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlFile: PlatformApp = {
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
}
