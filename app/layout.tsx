import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { StructuredData } from "@/components/structured-data"
import { getJsonLdGraph, siteConfig } from "@/lib/seo"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ControlApp | Plataforma multi-app para empresas",
    template: "%s | ControlApp",
  },
  description: siteConfig.description,
  applicationName: "ControlApp",
  manifest: "/manifest.json",
  generator: "Next.js",
  category: "business software",
  keywords: [
    "software empresarial",
    "plataforma multi-app",
    "gestion documental",
    "software de auditorias",
    "control de gastos",
    "gestion de horarios",
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
    title: "ControlApp | Plataforma multi-app para empresas",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.defaultOgImage,
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
    title: "ControlApp",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <StructuredData data={getJsonLdGraph()} />
        {children}
      </body>
    </html>
  )
}
