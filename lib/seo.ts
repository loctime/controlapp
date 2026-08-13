import type { Metadata } from "next"
import type { PlatformApp } from "@/lib/platform-types"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://www.controlapps.ar"

export const siteConfig = {
  name: "ControlApps",
  legalName: "ControlApps",
  url: baseUrl,
  locale: "es_AR",
  siteLanguage: "es",
  description:
    "Empresa de software a medida dedicada a resolver problemas operativos, automatizar tareas repetitivas y diseñar herramientas digitales adaptadas a cada negocio.",
  defaultOgImage: "/og-image.jpg",
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

export function createAppMetadata(app: PlatformApp): Metadata {
  const keywords = [
    app.seo.keywords.primary,
    ...app.seo.keywords.secondary,
    ...app.seo.keywords.problems,
    ...app.seo.keywords.industries,
    app.name,
    "ControlApps",
  ]

  return {
    title: {
      absolute: app.seo.title,
    },
    description: app.seo.description,
    keywords,
    alternates: {
      canonical: app.seo.canonicalPath,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(app.seo.canonicalPath),
      title: app.seo.title,
      description: app.seo.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteUrl(app.seo.socialImage),
          width: 1200,
          height: 630,
          alt: `${app.name} - ${app.seo.categoryLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: app.seo.title,
      description: app.seo.description,
      images: [absoluteUrl(app.seo.socialImage)],
    },
  }
}

export function getAppSchemas(app: PlatformApp) {
  const faqSchema = app.landingContent.faq.length
    ? {
        "@type": "FAQPage",
        mainEntity: app.landingContent.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: app.name,
        applicationCategory: app.seo.categoryLabel,
        operatingSystem: "Web",
        inLanguage: siteConfig.siteLanguage,
        description: app.seo.description,
        url: absoluteUrl(app.seo.canonicalPath),
        image: absoluteUrl(app.seo.socialImage),
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
        keywords: [app.seo.keywords.primary, ...app.seo.keywords.secondary].join(", "),
        audience: app.landingContent.audiences.map((audience) => ({
          "@type": "Audience",
          audienceType: audience.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: app.name,
            item: absoluteUrl(app.seo.canonicalPath),
          },
        ],
      },
      faqSchema,
    ].filter(Boolean),
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
        logo: absoluteUrl("/icon-512.png"),
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
