"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { useEffect, lazy, Suspense } from "react"

// Lazy load de componentes que no son críticos para la carga inicial
const Solutions = lazy(() => import("@/components/solutions").then(m => ({ default: m.Solutions })))
const Integration = lazy(() => import("@/components/integration").then(m => ({ default: m.Integration })))
const Clients = lazy(() => import("@/components/clients").then(m => ({ default: m.Clients })))
const Pricing = lazy(() => import("@/components/pricing").then(m => ({ default: m.Pricing })))
const Footer = lazy(() => import("@/components/footer").then(m => ({ default: m.Footer })))

// Componente de Loading optimizado
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
      {/* Animated background gradient - optimizado con will-change */}
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
      <Suspense fallback={<SectionSkeleton />}>
        <Solutions />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Integration />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  )
}
