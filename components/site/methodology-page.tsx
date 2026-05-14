import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function MethodologyPage() {
  return (
    <main className="bg-[rgb(250,248,244)] text-[rgb(15,23,42)]">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(28,41,64)] transition-colors hover:text-[rgb(104,76,45)]"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(114,84,51)]">Metodología</p>
          <h1 className="mt-5 text-[clamp(2.8rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-[rgb(15,23,42)]">
            Diseñamos software a partir del trabajo real, no desde un producto genérico.
          </h1>
          <p className="mt-8 text-lg font-medium leading-8 text-[rgb(28,41,64)]">
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
              className="rounded-[1.9rem] border border-[rgba(18,26,44,0.16)] bg-[linear-gradient(180deg,_rgb(255,255,255),_rgb(251,248,243))] p-8 shadow-[0_24px_58px_rgba(15,23,42,0.1)] ring-1 ring-[rgba(255,255,255,0.48)]"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-[rgb(84,60,36)]">Etapa 0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[rgb(15,23,42)]">{step.title}</h2>
                </div>
                <div className="rounded-full border border-[rgba(18,26,44,0.14)] bg-[rgba(255,255,255,0.82)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[rgb(84,60,36)]">
                  {step.outcome}
                </div>
              </div>
              <p className="mt-5 text-lg font-medium leading-8 text-[rgb(28,41,64)]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[rgba(221,205,171,0.18)] bg-[linear-gradient(180deg,_rgb(18,28,49),_rgb(12,20,36))] p-8 text-white shadow-[0_34px_88px_rgba(15,23,42,0.28)] md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.05em]">El objetivo final es simple: menos fricción y más control.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(243,245,249,0.94)]">
            Si el software no mejora la operación diaria, no está bien planteado. Por eso el resultado esperado no es solo una
            app funcionando, sino una forma más clara, estable y escalable de trabajar.
          </p>
          <a
            href="/#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(221,205,171,0.28)] bg-white px-6 py-3 text-sm font-semibold text-[rgb(22,35,62)] shadow-[0_16px_32px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-0.5"
          >
            Contanos tu proceso
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
