import { FileText, FolderOpen, Lock, Shield } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlFile: PlatformApp = {
  id: "control-file",
  slug: "control-file",
  name: "ControlFile",
  shortDescription:
    "El explorador de archivos de toda tu empresa. Interfaz tipo Windows, links con expiración y storage desde 5 GB gratis.",
  category: "storage",
  status: "active",
  icon: FolderOpen,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
  color: "from-violet-500 to-blue-500",
  href: "/control-file",
  features: [
    "Interfaz estilo Windows / OneDrive",
    "Links de compartido con expiración",
    "Planes desde 5 GB gratis",
    "Un login para todas las apps",
    "Acceso por roles y módulos",
    "Storage económico Backblaze B2",
  ],
  cardBadges: ["Links con expiración", "Storage desde 5 GB gratis"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlFile | Explorador de archivos empresarial con links compartidos",
    description:
      "ControlFile es el explorador de archivos del ecosistema ControlApp. Interfaz estilo Windows, links con expiración, storage desde 5 GB gratis y un solo login para todas tus apps.",
    canonicalPath: "/control-file",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
    categoryLabel: "Explorador de archivos empresarial",
    keywords: {
      primary: "explorador de archivos empresarial",
      secondary: [
        "almacenamiento centralizado de archivos",
        "links de compartido con vencimiento",
        "storage para empresas",
      ],
      problems: [
        "archivos repartidos entre sistemas y carpetas",
        "sin forma de compartir un archivo sin dar acceso completo",
        "storage caro sin control de uso",
      ],
      industries: ["empresas multi-área", "operaciones", "administración"],
    },
  },
  landingContent: {
    heroLabel: "El explorador de archivos de toda tu empresa, en un solo lugar.",
    heroTitle: "ControlFile",
    heroDescription:
      "Interfaz estilo Windows con carpetas, vista lista/cuadrícula y panel de detalles. Links de compartido con expiración. Storage por planes desde 5 GB gratis. Un login para todos tus archivos del ecosistema.",
    heroStats: {
      value: "1 explorador",
      label: "para archivos de ControlAudit, ControlDoc, ControlGastos y más",
    },
    valueProposition:
      "Si tus archivos están repartidos entre distintas apps y carpetas, ControlFile los centraliza en un explorador familiar con control de acceso y links de compartido sin login.",
    audiences: [
      {
        title: "Equipos con documentación transversal",
        description:
          "Ideal para empresas que comparten archivos entre operaciones, administración, auditoría y soporte, con control de quién accede a qué.",
      },
      {
        title: "Organizaciones con múltiples módulos",
        description:
          "Cuando varias apps del ecosistema generan archivos, ControlFile los organiza automáticamente por módulo en el mismo explorador.",
      },
      {
        title: "Áreas que necesitan compartir sin dar acceso completo",
        description:
          "Generá un link público con fecha de expiración para cualquier archivo. El destinatario accede sin login. Al expirar, el link deja de funcionar automáticamente.",
      },
    ],
    problems: [
      "Archivos guardados en carpetas, drives o sistemas diferentes según el área.",
      "Para compartir un archivo hay que dar acceso completo a la plataforma.",
      "Las evidencias de ControlAudit y los documentos de ControlDoc viven en silos separados.",
    ],
    benefits: [
      "Navegación por carpetas con breadcrumb y panel de detalles, igual que OneDrive.",
      "Links de compartido con expiración configurable — sin login para el destinatario.",
      "Storage por planes: Free 5 GB · Basic 50 GB · Pro 500 GB · Enterprise ilimitado.",
      "Un solo login de ControlApp da acceso a todos tus archivos del ecosistema.",
      "Acceso por roles: cada usuario ve solo lo que le corresponde según permisos.",
      "75% más barato que Amazon S3 con Backblaze B2 como backend.",
    ],
    functionalities: [
      {
        title: "Interfaz estilo Windows / OneDrive",
        description:
          "Navegación por carpetas con breadcrumb, vista lista o cuadrícula, panel de detalles lateral. Barra de acceso rápido con carpetas favoritas.",
        icon: FolderOpen,
      },
      {
        title: "Links de compartido con expiración",
        description:
          "Generá un link público para cualquier archivo con fecha de expiración configurable. El destinatario accede sin login. Al expirar, el link deja de funcionar automáticamente.",
        icon: Lock,
      },
      {
        title: "Planes y cuotas de storage",
        description:
          "Free 5 GB gratis · Basic 50 GB $5/mes · Pro 500 GB $25/mes · Enterprise ilimitado. Control de uso visible por usuario.",
        icon: Shield,
      },
      {
        title: "Un login para todas las apps",
        description:
          "La misma cuenta de ControlApp da acceso a ControlFile. Los archivos de cada app se organizan automáticamente por módulo: ControlAudit, ControlDoc, ControlGastos.",
        icon: Lock,
      },
      {
        title: "Acceso por roles y módulos",
        description:
          "Cada usuario ve los archivos según sus permisos. Un operario de ControlAudit accede a sus evidencias pero no a documentos de RRHH.",
        icon: Shield,
      },
      {
        title: "Storage económico con Backblaze B2",
        description:
          "75% más barato que Amazon S3. Precios accesibles sin sacrificar confiabilidad.",
        icon: FileText,
      },
    ],
    useCases: [
      {
        title: "Empresa con múltiples módulos activos",
        description:
          "ControlAudit guarda evidencias → aparecen bajo 'ControlAudit'. ControlDoc guarda documentos → aparecen bajo 'ControlDoc'. ControlGastos guarda comprobantes → aparecen bajo 'ControlGastos'. Todo en el mismo explorador, con los mismos permisos.",
      },
      {
        title: "Compartir un archivo con alguien externo",
        description:
          "El admin genera un link con expiración a 7 días para el PDF del informe. El proveedor lo descarga sin necesidad de crear cuenta. Al vencer el plazo, el link deja de funcionar.",
      },
      {
        title: "Control de storage por área",
        description:
          "El admin asigna cuotas por usuario o módulo. Cada área ve su uso en tiempo real. Los archivos no aprobados en ControlDoc no consumen cuota del módulo principal.",
      },
    ],
    faq: [
      {
        question: "¿Es solo para guardar archivos?",
        answer:
          "También para organizar, compartir con expiración y controlar accesos por rol y módulo.",
      },
      {
        question: "¿Puedo compartir con alguien que no usa ControlApp?",
        answer:
          "Sí. Los links públicos con expiración no requieren login. Al vencer la fecha, el link deja de funcionar automáticamente.",
      },
      {
        question: "¿Qué pasa con los archivos de ControlAudit o ControlDoc?",
        answer:
          "Se guardan automáticamente en ControlFile y los ves desde el explorador organizados por módulo.",
      },
      {
        question: "¿Hay app móvil?",
        answer: "Sí, versión Android disponible.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlFile",
      primaryHref: "/control-file",
      secondaryLabel: "Ver módulos conectados",
      secondaryHref: "/#apps",
    },
    platformIntegration: {
      title: "ControlFile es la capa común de archivos de la plataforma",
      description:
        "Las demás apps publican y consultan archivos sin resolver por separado permisos, acceso temporal o estructura documental.",
      bullets: [
        "ControlAudit guarda evidencias → aparecen en ControlFile bajo 'ControlAudit'.",
        "ControlDoc guarda documentos → aparecen bajo 'ControlDoc'.",
        "ControlGastos guarda comprobantes → aparecen bajo 'ControlGastos'.",
        "Todo en el mismo explorador, con los mismos permisos configurados.",
      ],
    },
    relatedApps: [
      {
        slug: "control-doc",
        anchor: "Ver software de gestión documental conectado al storage compartido",
        reason: "ControlDoc publica documentos y vencimientos sobre ControlFile.",
      },
      {
        slug: "control-audit",
        anchor: "Ver software de auditorías con evidencias centralizadas",
        reason: "ControlAudit usa el storage global para evidencias y reportes.",
      },
    ],
  },
}
