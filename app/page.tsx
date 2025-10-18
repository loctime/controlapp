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
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-delayed"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        </div>
      </div>
      
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
