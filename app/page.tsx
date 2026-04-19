import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PlatformAppGrid } from "@/components/platform-app-grid"
import { PlatformArchitecture } from "@/components/platform-architecture"
import { PlatformAudiences } from "@/components/platform-audiences"
import { PlatformCapabilities } from "@/components/platform-capabilities"
import { PlatformEntity } from "@/components/platform-entity"
import { PlatformFaq } from "@/components/platform-faq"
import { ServiceWorkerRegister } from "@/components/service-worker-register"
import { StructuredData } from "@/components/structured-data"
import { platformOverview } from "@/lib/platform-data"
import { createHomeMetadata, getHomeFaqSchema } from "@/lib/seo"

export const metadata: Metadata = createHomeMetadata()

export default function Home() {
  return (
    <>
      <StructuredData data={getHomeFaqSchema(platformOverview.faq.items)} />
      <ServiceWorkerRegister />
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
        <PlatformAudiences />
        <PlatformAppGrid />
        <PlatformEntity />
        <PlatformFaq />
        <Footer />
      </main>
    </>
  )
}
