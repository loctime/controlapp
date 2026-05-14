import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function MethodologyPage() {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(44,48,58)] transition-colors hover:text-[rgb(120,95,68)]"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(102,82,60)]">Metodología</p>
          <h1 className="font-display mt-5 text-[clamp(3.2rem,7vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[rgb(18,24,37)]">
            Diseñamos software a partir del trabajo real, no desde un producto genérico.
          </h1>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-[rgb(56,60,70)]">
            Cada proyecto parte de una pregunta simple: qué parte de la operación hoy consume tiempo, genera errores o depende
            demasiado de memoria, mensajes y controles manuales.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-20 md:px-10">
        <div className="grid gap-5">
          {siteContent.processDetailed.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.9rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-8 shadow-[0_18px_40px_rgba(20,24,31,0.06)]"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-[rgb(102,82,60)]">Etapa 0{index + 1}</p>
                  <h2 className="font-display mt-3 text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-[rgb(18,24,37)]">
                    {step.title}
                  </h2>
                </div>
                <div className="rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgba(243,239,232,0.88)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[rgb(102,82,60)]">
                  {step.outcome}
                </div>
              </div>
              <p className="mt-5 text-lg font-medium leading-8 text-[rgb(56,60,70)]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[rgba(211,200,186,0.18)] bg-[linear-gradient(180deg,_rgb(22,31,47),_rgb(16,23,36))] p-8 text-white shadow-[0_28px_70px_rgba(8,12,20,0.28)] md:p-10">
          <h2 className="font-display text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.04em]">
            El objetivo final es simple: menos fricción y más control.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(243,245,249,0.94)]">
            Si el software no mejora la operación diaria, no está bien planteado. Por eso el resultado esperado no es solo una
            app funcionando, sino una forma más clara, estable y escalable de trabajar.
          </p>
          <a
            href="/#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(207,188,165,0.2)] bg-[rgb(241,235,226)] px-6 py-3 text-sm font-semibold text-[rgb(20,29,46)] transition-colors hover:bg-[rgb(246,242,236)]"
          >
            Contanos tu proceso
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
