import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ControlApp | Plataforma centralizada multi-app",
  description:
    "Plataforma centralizada con autenticacion compartida, permisos por app y storage global visible desde ControlFile.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ControlApp",
  },
  generator: "v0.app",
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
      <head>
        <link rel="icon" type="image/png" href="/icon-192.jpg" />
        <link rel="apple-touch-icon" href="/icon-192.jpg" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
