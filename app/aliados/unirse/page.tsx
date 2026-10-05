import type { Metadata } from "next"
import { UnirseForm } from "@/components/aliados/unirse-form"
import { siteContent } from "@/lib/site-content"

export const metadata: Metadata = {
  title: { absolute: "Quiero ser aliado | ControlApps" },
  description:
    "Sumate al programa de aliados de ControlApps, ofrecé nuestros servicios y ganá una comisión por cada cliente que traigas.",
  alternates: { canonical: "/aliados/unirse" },
}

export default function UnirsePage() {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 md:px-10 lg:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(102,82,60)]">Programa de aliados</p>
        <h1 className="font-display mt-4 text-[clamp(2.4rem,10vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          Ofrecé nuestros servicios y ganá una comisión.
        </h1>
        <p className="mt-6 text-base font-medium leading-7 text-[rgb(56,60,70)] sm:text-lg sm:leading-8">
          No hace falta saber de tecnología. Te damos fichas, folletos y textos listos para compartir, y cobrás una comisión por
          cada cliente que traigas. Cada alta la revisamos antes de aprobarla.
        </p>
        <UnirseForm email={siteContent.contact.email} />
      </section>
    </main>
  )
}
