import type { Metadata } from "next"
import { platformOverview, type FAQItem, type PlatformApp } from "@/lib/platform-data"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://controlapp.vercel.app"

export const siteConfig = {
  name: "ControlApp",
  legalName: "ControlApp",
  url: baseUrl,
  locale: "es_AR",
  siteLanguage: "es",
  description:
    "Plataforma multi-app para empresas que conecta gestion documental, auditorias, archivos, gastos, ventas, horarios y talento sobre una base compartida de identidad, permisos y storage.",
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
    "software empresarial modular",
    "plataforma multi-app",
    "gestion documental",
    "software de auditorias",
    "storage compartido para apps",
    "control de gastos empresarial",
    "gestion de horarios para equipos",
    "gestion de candidatos y CVs",
    ...platformOverview.searchIntents,
  ]
}

export function createHomeMetadata(): Metadata {
  return {
    title: {
      absolute: "ControlApp | Plataforma multi-app para gestion documental, auditorias, gastos y operaciones",
    },
    description: siteConfig.description,
    keywords: getSiteKeywords(),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: absoluteUrl("/"),
      title: "ControlApp | Plataforma multi-app para empresas",
      description: siteConfig.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          width: 1200,
          height: 630,
          alt: "ControlApp plataforma multi-app para empresas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ControlApp | Plataforma multi-app para empresas",
      description: siteConfig.description,
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
    "ControlApp",
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

export function createDemosMetadata(): Metadata {
  return {
    title: {
      absolute: "Demos internas | ControlApp",
    },
    description: "Laboratorio interno de animaciones y pruebas visuales de ControlApp.",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
    alternates: {
      canonical: "/demos",
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
        isPartOf: {
          "@type": "SoftwareApplication",
          name: siteConfig.name,
          url: absoluteUrl("/"),
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
            name: "Apps",
            item: absoluteUrl("/#apps"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: app.name,
            item: absoluteUrl(app.seo.canonicalPath),
          },
        ],
      },
      faqSchema,
    ].filter(Boolean),
  }
}

export function getHomeFaqSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
