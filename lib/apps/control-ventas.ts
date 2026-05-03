import { FileText, FolderOpen, Shield, TrendingUp } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlVentas: PlatformApp = {
  id: "control-ventas",
  slug: "control-ventas",
  name: "ControlVentas",
  shortDescription:
    "PWA de flujo de caja móvil-first. Tres métodos de pago, pagos recurrentes, historial filtrable por período y tipo, offline-first con todos los datos guardados localmente.",
  category: "finance",
  status: "active",
  icon: TrendingUp,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
  color: "from-cyan-500 to-blue-500",
  href: "/control-ventas",
  features: [
    "Cobros y pagos en segundos",
    "3 métodos de pago (efectivo, tarjeta, transferencia)",
    "Pagos recurrentes automáticos",
    "Resumen financiero en tiempo real",
    "Historial filtrable por período y tipo",
    "Offline-first, instalable como app",
  ],
  cardBadges: ["Caja diaria · Offline-first", "3 métodos de pago"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: true,
    visibleInControlFile: true,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlVentas | Caja diaria offline-first con 3 métodos de pago",
    description:
      "ControlVentas es una PWA de caja diaria móvil-first. Registrá cobros y pagos con efectivo, tarjeta y transferencia, sin internet, desde el celular.",
    canonicalPath: "/control-ventas",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lecturaAutomatica-10Zh7xNgq7oJmQdMNGaIVDKaJYIHWE.png",
    categoryLabel: "Caja diaria y flujo de caja",
    keywords: {
      primary: "caja diaria offline para negocios",
      secondary: [
        "app de caja sin internet",
        "registro de cobros y pagos desde celular",
        "flujo de caja movil",
      ],
      problems: [
        "caja anotada en papel o WhatsApp",
        "sin saber cuánto entró por tarjeta vs efectivo",
        "historial de caja inaccesible cuando no hay WiFi",
      ],
      industries: ["kioscos", "comercios", "emprendedores"],
    },
  },
  landingContent: {
    heroLabel: "Registrá cobros y pagos desde el celular, con o sin internet.",
    heroTitle: "ControlVentas",
    heroDescription:
      "PWA de flujo de caja móvil-first. Tres métodos de pago, pagos recurrentes, historial filtrable por período y tipo, offline-first con todos los datos guardados localmente.",
    heroStats: {
      value: "Offline-first",
      label: "todos los datos guardados localmente, sin depender de internet",
    },
    valueProposition:
      "Si hoy anotás la caja en papel o en el celular de forma manual, ControlVentas reemplaza ese anotador con historial, filtros y desglose por método de pago.",
    audiences: [
      {
        title: "Pequeño negocio o kiosco",
        description:
          "Reemplazá el anotador de caja con algo digital que funcione sin WiFi. Efectivo, tarjeta y transferencia en botones grandes para el mostrador.",
      },
      {
        title: "Emprendedor que cobra por múltiples métodos",
        description:
          "Al final del día sabés cuánto entró por efectivo, cuánto por tarjeta y cuánto por transferencia sin tener que sumar a mano.",
      },
    ],
    problems: [
      "La caja se anota en papel o en notas del celular sin historial ni filtros.",
      "No hay forma rápida de saber cuánto entró por cada método de pago.",
      "Si no hay WiFi, el sistema de caja no funciona.",
    ],
    benefits: [
      "Cobros y pagos registrados en segundos con botones grandes para el mostrador.",
      "Tres métodos de pago: efectivo, tarjeta y transferencia.",
      "Pagos recurrentes que se generan solos con la frecuencia que configures.",
      "Balance en tiempo real actualizado con cada movimiento.",
      "Historial filtrable por día, semana, mes o año y por tipo de movimiento.",
      "Offline-first: funciona sin internet con datos guardados localmente.",
    ],
    functionalities: [
      {
        title: "Cobros y pagos en segundos",
        description:
          "Ingresos y egresos con tres métodos: efectivo, tarjeta y transferencia. Botones grandes para usar desde el mostrador.",
        icon: TrendingUp,
      },
      {
        title: "Pagos recurrentes automáticos",
        description:
          "Marcá cualquier pago como recurrente (semanal, mensual, anual). Se genera solo en el período siguiente.",
        icon: FileText,
      },
      {
        title: "Resumen financiero en tiempo real",
        description:
          "Ingresos totales, gastos totales y balance actualizado con cada registro.",
        icon: Shield,
      },
      {
        title: "Historial filtrable",
        description:
          "Por día, semana, mes o año. Por tipo: todas, solo ingresos, solo gastos. Detalle completo de cada movimiento.",
        icon: FolderOpen,
      },
      {
        title: "Offline-first, instalable",
        description:
          "Todos los datos se guardan localmente con localStorage. Funciona sin internet. Instalable como app en cualquier dispositivo.",
        icon: Shield,
      },
    ],
    useCases: [
      {
        title: "Pequeño negocio o kiosco sin WiFi estable",
        description:
          "Reemplazá el anotador de caja con algo digital que funcione sin internet. Cada cobro queda registrado con método de pago y hora.",
      },
      {
        title: "Emprendedor que cobra por varios métodos",
        description:
          "Al cierre del día ves cuánto entró por efectivo, tarjeta y transferencia por separado, con el balance total actualizado.",
      },
    ],
    faq: [
      {
        question: "¿Funciona sin internet?",
        answer:
          "Sí. Es offline-first. Todos los datos se guardan localmente con localStorage y no necesitás conexión para registrar ni consultar.",
      },
      {
        question: "¿Se puede ver el historial por semana o mes?",
        answer:
          "Sí. Filtrás por día, semana, mes o año, y también por tipo: todos los movimientos, solo ingresos o solo gastos.",
      },
      {
        question: "¿Funciona en el celular?",
        answer: "Sí, PWA instalable con diseño móvil-first. Se instala en Android e iOS desde el navegador.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlVentas",
      primaryHref: "/control-ventas",
      secondaryLabel: "Ver módulo de gastos conectado",
      secondaryHref: "/control-gastos",
    },
    platformIntegration: {
      title: "ControlVentas usa la misma capa común del ecosistema",
      description:
        "Operación comercial, archivos y permisos hablan el mismo idioma para evitar procesos aislados.",
      bullets: [
        "Comparte autenticación con otros módulos activos.",
        "Puede publicar documentación comercial en el storage global.",
        "Mantiene visibilidad controlada desde ControlFile según permisos.",
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
        reason: "ControlFile centraliza documentación comercial y adjuntos operativos.",
      },
    ],
  },
}
