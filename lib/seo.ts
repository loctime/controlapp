import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://controlapp.vercel.app"

export const siteConfig = {
  name: "ControlApps",
  legalName: "ControlApps",
  url: baseUrl,
  locale: "es_AR",
  siteLanguage: "es",
  description:
    "Empresa de software a medida dedicada a resolver problemas operativos, automatizar tareas repetitivas y diseñar herramientas digitales adaptadas a cada negocio.",
  defaultOgImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aprobacionTrazabilidad-mgNXKcoyRUR7t5OH2ubUscUL12ndGr.png",
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function getSiteKeywords() {
  return [
    "software a medida",
    "desarrollo de software para empresas",
    "automatizacion de procesos",
    "optimizacion operativa",
    "aplicaciones internas",
    "flujos de trabajo",
    "soluciones digitales a medida",
  ]
}

export function createHomeMetadata(): Metadata {
  return {
    title: {
      absolute: "ControlApps | Software a medida para ordenar procesos y resolver operación real",
    },
    description: siteConfig.description,
    keywords: getSiteKeywords(),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: absoluteUrl("/"),
      title: "ControlApps | Software a medida para resolver problemas operativos",
      description: siteConfig.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          width: 1200,
          height: 630,
          alt: "ControlApps software a medida",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ControlApps | Software a medida para resolver problemas operativos",
      description: siteConfig.description,
      images: [absoluteUrl(siteConfig.defaultOgImage)],
    },
  }
}

export function createMethodologyMetadata(): Metadata {
  return {
    title: {
      absolute: "Metodología | ControlApps",
    },
    description:
      "Cómo trabaja ControlApps para transformar procesos repetitivos y operativos en software a medida útil, claro y escalable.",
    keywords: [...getSiteKeywords(), "metodologia de trabajo", "software a medida"],
    alternates: {
      canonical: "/metodologia",
    },
    openGraph: {
      type: "website",
      url: absoluteUrl("/metodologia"),
      title: "Metodología | ControlApps",
      description:
        "Cómo trabaja ControlApps para transformar procesos repetitivos y operativos en software a medida útil, claro y escalable.",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          width: 1200,
          height: 630,
          alt: "Metodología de ControlApps",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Metodología | ControlApps",
      description:
        "Cómo trabaja ControlApps para transformar procesos repetitivos y operativos en software a medida útil, claro y escalable.",
      images: [absoluteUrl(siteConfig.defaultOgImage)],
    },
  }
}

export function getJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.legalName,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/icon-512.jpg"),
        description: siteConfig.description,
        knowsAbout: getSiteKeywords(),
        areaServed: "Latam",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.name,
        url: absoluteUrl("/"),
        inLanguage: siteConfig.siteLanguage,
        description: siteConfig.description,
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    ],
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": absoluteUrl("/#service"),
        name: siteConfig.name,
        inLanguage: siteConfig.siteLanguage,
        url: absoluteUrl("/"),
        description: siteConfig.description,
        areaServed: "Latam",
        serviceType: [
          "Desarrollo de software a medida",
          "Automatización de procesos",
          "Aplicaciones internas",
        ],
        provider: {
          "@id": absoluteUrl("/#organization"),
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Empresas y equipos con necesidades operativas específicas",
        },
      },
    ],
  }
}
