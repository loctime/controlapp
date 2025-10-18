"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Integration } from "@/components/integration"
import { Clients } from "@/components/clients"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.error("Service Worker registration failed:", error)
      })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Integration />
      <Clients />
      <Pricing />
      <Footer />
      <PWAInstallPrompt />
    </main>
  )
}
