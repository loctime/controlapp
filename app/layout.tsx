import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, Manrope } from "next/font/google"
import { SiteFooter } from "@/components/site/footer"
import { SiteHeader } from "@/components/site/header"
import { StructuredData } from "@/components/structured-data"
import { getJsonLdGraph, siteConfig } from "@/lib/seo"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ControlApps | Software a medida para resolver operación real",
    template: "%s | ControlApps",
  },
  description: siteConfig.description,
  applicationName: "ControlApps",
  manifest: "/manifest.json",
  generator: "Next.js",
  category: "software services",
  keywords: [
    "software a medida",
    "automatizacion de procesos",
    "aplicaciones internas",
    "soluciones de software para empresas",
    "optimizacion operativa",
    "flujos de trabajo",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "ControlApps | Software a medida para resolver operación real",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "ControlApps software a medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ControlApps | Software a medida para resolver operación real",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.jpg", type: "image/jpeg", sizes: "192x192" },
      { url: "/icon-512.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [{ url: "/icon-192.jpg", sizes: "192x192" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ControlApps",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#16233E",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${manrope.variable} ${plexMono.variable} antialiased`}>
        <StructuredData data={getJsonLdGraph()} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
