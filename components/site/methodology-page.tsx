import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function MethodologyPage() {
  return (
    <main className="bg-[rgb(250,248,244)] text-[rgb(15,23,42)]">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 md:px-10 lg:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(82,94,118)] transition-colors hover:text-[rgb(22,35,62)]"
        >
          <ArrowLeft className="size-4" />
          Volver al inicio
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(114,84,51)]">Metodología</p>
          <h1 className="mt-5 text-[clamp(2.8rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-[rgb(15,23,42)]">
            Diseñamos software a partir del trabajo real, no desde un producto genérico.
          </h1>
          <p className="mt-8 text-lg leading-8 text-[rgb(59,72,95)]">
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
              className="rounded-[1.9rem] border border-[rgba(18,26,44,0.12)] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-[rgb(94,109,136)]">Etapa 0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[rgb(15,23,42)]">{step.title}</h2>
                </div>
                <div className="rounded-full border border-[rgba(18,26,44,0.1)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[rgb(94,109,136)]">
                  {step.outcome}
                </div>
              </div>
              <p className="mt-5 text-lg leading-8 text-[rgb(59,72,95)]">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[rgba(221,205,171,0.12)] bg-[rgb(20,31,54)] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.05em]">El objetivo final es simple: menos fricción y más control.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[rgba(236,240,246,0.86)]">
            Si el software no mejora la operación diaria, no está bien planteado. Por eso el resultado esperado no es solo una
            app funcionando, sino una forma más clara, estable y escalable de trabajar.
          </p>
          <a
            href="/#contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(221,205,171,0.22)] bg-white px-6 py-3 text-sm font-semibold text-[rgb(22,35,62)] transition-transform hover:-translate-y-0.5"
          >
            Contanos tu proceso
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
