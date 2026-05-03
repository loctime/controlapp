import { FileText, FolderOpen, Lock, ShoppingCart } from "lucide-react"
import type { PlatformApp } from "@/lib/platform-types"

export const controlMarket: PlatformApp = {
  id: "control-market",
  slug: "control-market",
  name: "ControlMarket",
  shortDescription:
    "Punto de venta PWA para kioscos y comercios. Escaneá códigos de barra, controlá stock, importá productos desde Excel y gestioná tu equipo con roles admin y vendedor.",
  category: "finance",
  status: "active",
  icon: ShoppingCart,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
  color: "from-rose-500 to-pink-500",
  href: "/control-market",
  features: [
    "Escaneá con la cámara del celular",
    "El stock baja solo con cada venta",
    "Importá productos desde Excel",
    "Vendedores con su propio acceso",
    "Datos de cada negocio por separado",
  ],
  cardBadges: ["Escáner de barras", "Multi-tenant"],
  platformCapabilities: {
    sharedAuth: true,
    sharedStorage: false,
    visibleInControlFile: false,
    requiresPermissions: true,
  },
  seo: {
    title: "ControlMarket | Punto de venta PWA para kioscos y comercios",
    description:
      "ControlMarket es una PWA de punto de venta para kioscos y comercios. Escaneá códigos de barra, controlá stock, importá productos desde Excel y gestioná tu equipo.",
    canonicalPath: "/control-market",
    socialImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/folder-nLglAqvepYvxs5bv0mqwmR1VEo3UFj.png",
    categoryLabel: "Punto de venta para kioscos y comercios",
    keywords: {
      primary: "punto de venta para kioscos y comercios",
      secondary: [
        "app de caja con escaner de barras",
        "control de stock para comercio",
        "software de ventas para pymes",
      ],
      problems: [
        "caja sin control de stock",
        "productos cargados uno por uno sin importacion",
        "vendedores que mezclan datos entre si",
      ],
      industries: ["kioscos", "comercio minorista", "tiendas"],
    },
  },
  landingContent: {
    heroLabel: "Punto de venta y stock para tu comercio, en el celular.",
    heroTitle: "ControlMarket",
    heroDescription:
      "ControlMarket es una PWA de punto de venta multi-tenant para kioscos y comercios. Escaneá códigos de barra, registrá ventas, controlá stock e importá productos desde Excel. Roles admin y vendedor con datos separados por empresa.",
    heroStats: {
      value: "Multi-tenant",
      label: "cada empresa con sus datos completamente aislados",
    },
    valueProposition:
      "Si hoy tu caja es un cuaderno o una app genérica sin control de stock, ControlMarket te da un punto de venta con escáner de barras, stock en tiempo real e importación masiva de productos.",
    audiences: [
      {
        title: "Kiosco que quiere digitalizar la caja",
        description:
          "Registrá ventas tocando productos o escaneando el código de barras. Sin hardware adicional — usás la cámara del celular.",
      },
      {
        title: "Comercio con vendedores en el mostrador",
        description:
          "Los vendedores registran ventas desde el celular. El dueño ve el resumen con filtros por fecha y vendedor.",
      },
      {
        title: "Negocio con catálogo de productos grande",
        description:
          "Importá todos los productos de una sola vez desde Excel o CSV. Sin cargar producto por producto.",
      },
    ],
    problems: [
      "La caja se registra en un cuaderno o en notas sin control de stock.",
      "Los productos se cargan uno por uno cuando el catálogo es grande.",
      "No hay forma de separar las ventas por vendedor sin mezclar datos.",
    ],
    benefits: [
      "Registrá ventas tocando productos o escaneando código de barras con la cámara.",
      "El stock se descuenta automáticamente con cada venta.",
      "Importá todo el catálogo desde Excel en un solo paso.",
      "Los vendedores ven solo sus ventas. El admin ve todas.",
      "Datos completamente aislados por organización — multi-tenant.",
      "PWA instalable en Android e iOS sin hardware adicional.",
    ],
    functionalities: [
      {
        title: "Punto de venta desde el celular",
        description:
          "Registrá ventas tocando productos o escaneando el código de barras. Interfaz grande y simple pensada para el mostrador. Múltiples métodos de pago.",
        icon: ShoppingCart,
      },
      {
        title: "Escáner de códigos de barra",
        description:
          "Usá la cámara del celular como escáner. Sin hardware adicional.",
        icon: FolderOpen,
      },
      {
        title: "Stock en tiempo real",
        description:
          "Se descuenta automáticamente con cada venta. Stock actual por producto visible desde el dashboard.",
        icon: FileText,
      },
      {
        title: "Importación masiva desde Excel / CSV",
        description:
          "Cargá todos los productos de una sola vez desde una planilla. Sin carga producto por producto.",
        icon: FolderOpen,
      },
      {
        title: "Historial de ventas por vendedor",
        description:
          "Los vendedores ven solo sus propias ventas. El admin ve todas con filtros por fecha y vendedor.",
        icon: Lock,
      },
      {
        title: "Roles admin y vendedor",
        description:
          "El admin gestiona productos, stock, precios y equipo. El vendedor solo registra ventas. Datos completamente aislados por organización.",
        icon: Lock,
      },
      {
        title: "Multi-tenant con registro independiente",
        description:
          "Cada empresa crea su propia cuenta. El admin registra su empresa e invita a su equipo. Los datos no se mezclan entre organizaciones.",
        icon: ShoppingCart,
      },
    ],
    useCases: [
      {
        title: "Kiosco que quiere digitalizar la caja y controlar el stock",
        description:
          "El dueño registra todos sus productos importando el catálogo desde Excel. Cada venta descuenta el stock automáticamente. No paga un sistema caro.",
      },
      {
        title: "Comercio con vendedores en el mostrador",
        description:
          "El dueño crea la cuenta e invita a sus vendedores. Cada vendedor registra ventas desde su celular. El dueño ve el resumen filtrado por vendedor y fecha.",
      },
    ],
    faq: [
      {
        question: "¿Funciona en el celular?",
        answer: "Sí, PWA instalable en Android e iOS desde el navegador, sin pasar por la App Store.",
      },
      {
        question: "¿Puedo tener varios vendedores?",
        answer:
          "Sí. El admin invita colaboradores con rol vendedor. Cada uno ve solo sus propias ventas.",
      },
      {
        question: "¿Los datos de mi comercio se mezclan con los de otros?",
        answer:
          "No. Cada organización tiene datos completamente aislados. Es multi-tenant por diseño.",
      },
      {
        question: "¿Necesita escáner externo?",
        answer: "No. Usa la cámara del celular como escáner de códigos de barra.",
      },
      {
        question: "¿Puedo importar mis productos desde Excel?",
        answer: "Sí. Importación masiva desde Excel o CSV en un solo paso.",
      },
    ],
    finalCta: {
      primaryLabel: "Explorar ControlMarket",
      primaryHref: "/control-market",
      secondaryLabel: "Ver el resto de los módulos",
      secondaryHref: "/#apps",
    },
    platformIntegration: {
      title: "ControlMarket es parte del ecosistema ControlApp",
      description:
        "Comparte la base de autenticación de ControlApp para que el admin gestione su equipo con la misma cuenta.",
      bullets: [
        "Misma cuenta de ControlApp para admin y vendedores.",
        "Roles diferenciados con acceso restringido por función.",
        "Multi-tenant: cada empresa opera de forma completamente independiente.",
      ],
    },
    relatedApps: [
      {
        slug: "control-ventas",
        anchor: "Ver módulo de caja diaria offline-first",
        reason: "ControlVentas complementa ControlMarket con flujo de caja offline.",
      },
      {
        slug: "control-gastos",
        anchor: "Ver control de gastos con comprobantes",
        reason: "ControlGastos conecta los egresos del comercio con comprobantes archivados.",
      },
    ],
  },
}
