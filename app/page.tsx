"use client"

import { useEffect, lazy, Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PlatformArchitecture } from "@/components/platform-architecture"
import { PlatformCapabilities } from "@/components/platform-capabilities"
import { PlatformAppGrid } from "@/components/platform-app-grid"

const Footer = lazy(() => import("@/components/footer").then((m) => ({ default: m.Footer })))

function SectionSkeleton() {
  return (
    <div className="w-full py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  )
}

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
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float will-change-transform"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-delayed will-change-transform"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float will-change-transform"></div>
        </div>
      </div>

      <Navbar />
      <Hero />
      <PlatformArchitecture />
      <PlatformCapabilities />
      <PlatformAppGrid />
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  )
}
