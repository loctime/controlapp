import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ContactForm } from "@/components/site/contact-form"
import { siteContent } from "@/lib/site-content"

const heroCards = [
  {
    title: "Diagnóstico operativo",
    description: "Leemos cuellos de botella, repeticiones y puntos ciegos antes de definir la solución.",
  },
  {
    title: "Diseño funcional",
    description: "Ordenamos el flujo objetivo con criterios claros de uso, control y trazabilidad.",
  },
  {
    title: "Construcción sobria",
    description: "Implementamos sistemas que sostienen el trabajo diario sin ruido adicional.",
  },
]

export function HomePage() {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="relative overflow-hidden border-b border-[rgba(34,30,24,0.1)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(165,142,112,0.12),_transparent_28%),linear-gradient(180deg,_rgba(250,247,242,0.96)_0%,_rgba(243,239,232,1)_100%)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:gap-12 md:px-10 md:pb-20 md:pt-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[rgb(102,82,60)] sm:text-xs sm:tracking-[0.34em]">ControlApps</p>
            <h1 className="font-display mt-5 max-w-4xl text-[clamp(3.1rem,14vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[rgb(18,24,37)] sm:mt-6 sm:leading-[0.86]">
              Software a medida para ordenar operación real con más criterio y menos fricción.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-[rgb(56,60,70)] sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
              Diseñamos aplicaciones internas, automatizaciones y sistemas de seguimiento para equipos que necesitan una forma
              más clara de trabajar, decidir y escalar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(24,30,43,0.14)] bg-[rgb(20,29,46)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[rgb(28,38,58)] sm:w-auto"
              >
                Contanos tu necesidad
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/metodologia"
                className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.62)] px-6 py-3.5 text-sm font-semibold text-[rgb(28,34,47)] transition-colors hover:bg-[rgba(255,255,255,0.82)] sm:w-auto"
              >
                Ver metodología
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3">
              {siteContent.heroStats.map((stat) => (
                <div key={stat.label} className="border-l border-[rgba(34,30,24,0.14)] pl-4 sm:pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[rgb(102,82,60)] sm:text-[11px] sm:tracking-[0.28em]">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-[rgb(18,24,37)] sm:mt-3 sm:text-2xl">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.8rem] border border-[rgba(214,203,191,0.2)] bg-[linear-gradient(180deg,_rgb(22,31,47),_rgb(16,23,36))] p-4 text-white shadow-[0_28px_70px_rgba(8,12,20,0.24)] sm:p-5 md:rounded-[2rem]">
              <div className="rounded-[1.5rem] border border-[rgba(214,203,191,0.14)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02))] p-5 sm:rounded-[1.7rem] sm:p-6">
                <div className="flex flex-col gap-4 border-b border-[rgba(214,203,191,0.12)] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[rgba(218,204,188,0.74)] sm:text-[11px] sm:tracking-[0.3em]">
                      Arquitectura operativa
                    </p>
                    <p className="font-display mt-3 text-[2rem] font-semibold leading-[0.94] tracking-[-0.04em] text-[rgb(248,246,241)] sm:text-[2.25rem] md:text-[2.5rem] md:leading-none">
                      Menos parche.
                      <br />
                      Más sistema.
                    </p>
                  </div>
                  <div className="w-fit rounded-full border border-[rgba(214,203,191,0.16)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(229,220,208,0.74)] sm:text-[11px] sm:tracking-[0.24em]">
                    Diagnóstico + build
                  </div>
                </div>

                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {heroCards.map((card, index) => (
                    <div
                      key={card.title}
                      className="grid gap-3 rounded-[1.3rem] border border-[rgba(214,203,191,0.1)] bg-[rgba(255,255,255,0.035)] p-4 sm:p-5 md:grid-cols-[32px_minmax(0,1fr)]"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(218,204,188,0.7)] sm:text-[11px] sm:tracking-[0.24em]">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-base font-semibold text-[rgb(248,246,241)]">{card.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[rgba(229,224,216,0.82)] sm:max-w-[30ch] md:max-w-none">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 border-t border-[rgba(214,203,191,0.12)] pt-5 sm:mt-6 sm:grid-cols-3">
                  {siteContent.heroSignals.map((signal) => (
                    <div key={signal.label}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgba(218,204,188,0.66)] sm:text-[11px] sm:tracking-[0.26em]">
                        {signal.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[rgba(240,236,231,0.88)]">{signal.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-18 md:px-10 md:py-20 lg:px-12">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(102,82,60)]">Qué es ControlApps</p>
            <h2 className="font-display mt-5 text-[clamp(2.5rem,10vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[rgb(18,24,37)]">
              Una firma de software enfocada en resolver trabajo operativo que hoy se sostiene con esfuerzo excesivo.
            </h2>
          </div>
          <div className="space-y-5 text-base font-medium leading-7 text-[rgb(56,60,70)] sm:text-lg sm:leading-8 lg:border-l lg:border-[rgba(34,30,24,0.12)] lg:pl-10">
            <p>{siteContent.company.description}</p>
            <p>{siteContent.company.approach}</p>
          </div>
        </div>
      </section>

      <section id="problemas" className="border-y border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.48)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-6 md:gap-12 md:px-10 md:py-20 lg:grid-cols-[0.84fr_1.16fr] lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(102,82,60)]">Problemas que resolvemos</p>
            <h2 className="font-display mt-5 text-[clamp(2.45rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[rgb(18,24,37)]">
              Cuando la operación vive de excepciones, el sistema dejó de acompañar al negocio.
            </h2>
          </div>

          <div className="divide-y divide-[rgba(34,30,24,0.12)] border-y border-[rgba(34,30,24,0.12)]">
            {siteContent.painPoints.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="grid gap-4 py-5 sm:py-6 md:grid-cols-[56px_minmax(0,1fr)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.6)] text-[rgb(120,95,68)]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[rgb(18,24,37)]">{item.title}</h3>
                    <p className="mt-2 text-base font-medium leading-7 text-[rgb(56,60,70)]">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="soluciones" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
        <div className="flex flex-col gap-5 lg:max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(102,82,60)]">Qué desarrollamos</p>
          <h2 className="font-display text-[clamp(2.45rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[rgb(18,24,37)]">
            Sistemas hechos para la lógica real de cada organización.
          </h2>
          <p className="text-base font-medium leading-7 text-[rgb(56,60,70)] sm:text-lg sm:leading-8">
            Aplicaciones internas, automatizaciones, paneles de seguimiento, circuitos de aprobación y herramientas de control
            que reemplazan trabajo manual y decisiones improvisadas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {siteContent.services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-5 shadow-[0_18px_40px_rgba(20,24,31,0.06)] sm:p-6 md:rounded-[1.9rem] md:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgb(20,29,46)] text-[rgb(233,225,214)]">
                    <Icon className="size-6" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(102,82,60)] sm:text-[11px] sm:tracking-[0.24em]">Sistema específico</div>
                </div>
                <h3 className="font-display mt-5 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-[rgb(18,24,37)] sm:mt-6 sm:text-[2.2rem] md:text-[2.35rem]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-7 text-[rgb(56,60,70)]">{service.description}</p>
                <ul className="mt-5 grid gap-3 border-t border-[rgba(34,30,24,0.1)] pt-5 text-sm leading-6 text-[rgb(39,45,57)] md:mt-6 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[rgb(120,95,68)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section id="metodologia" className="bg-[linear-gradient(180deg,_rgb(22,31,47),_rgb(16,23,36))] text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(207,188,165,0.74)]">Cómo trabajamos</p>
              <h2 className="font-display mt-5 text-[clamp(2.45rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
                Entendemos la operación antes de tocar una línea de software.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[rgba(239,242,247,0.86)] sm:text-lg sm:leading-8">
                El objetivo no es sumar otra herramienta al problema. El objetivo es diseñar una herramienta que simplifique el
                trabajo, dé visibilidad y sostenga el crecimiento.
              </p>
            </div>

            <div className="space-y-4">
              {siteContent.process.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="grid gap-4 rounded-[1.5rem] border border-[rgba(214,203,191,0.12)] bg-[rgba(255,255,255,0.04)] p-5 sm:rounded-[1.7rem] sm:p-6 md:grid-cols-[36px_52px_minmax(0,1fr)]"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[rgba(207,188,165,0.74)] sm:text-xs sm:tracking-[0.28em]">
                      0{index + 1}
                    </div>
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(214,203,191,0.14)] bg-[rgba(255,255,255,0.05)] text-[rgb(233,225,214)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[rgba(236,240,246,0.8)]">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/metodologia"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(207,188,165,0.2)] bg-[rgb(241,235,226)] px-5 py-3 text-sm font-semibold text-[rgb(20,29,46)] transition-colors hover:bg-[rgb(246,242,236)] sm:w-auto"
            >
              Ver metodología completa
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {siteContent.differentiators.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.58)] p-5 sm:p-6 md:rounded-[1.8rem] md:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.78)] text-[rgb(20,29,46)]">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display mt-5 text-[1.95rem] font-semibold leading-none tracking-[-0.04em] text-[rgb(18,24,37)] sm:mt-6 sm:text-[2.1rem] md:text-[2.2rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-7 text-[rgb(56,60,70)]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.46)]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(102,82,60)]">Cobertura</p>
              <h2 className="font-display mt-5 text-[clamp(2.45rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[rgb(18,24,37)]">
                Amplia cobertura funcional, siempre con foco en resolver fricción operativa.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {siteContent.coverageAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.72)] px-5 py-5 text-base font-semibold text-[rgb(28,34,47)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(102,82,60)]">Preguntas frecuentes</p>
            <h2 className="font-display mt-5 text-[clamp(2.45rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[rgb(18,24,37)]">
              Lo importante es entender el problema y construir la herramienta correcta.
            </h2>
          </div>

          <div className="divide-y divide-[rgba(34,30,24,0.1)] border-y border-[rgba(34,30,24,0.12)]">
            {siteContent.faq.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[rgb(18,24,37)]">{item.question}</h3>
                <p className="mt-3 text-base font-medium leading-7 text-[rgb(56,60,70)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[rgb(20,29,46)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-6 md:gap-10 md:px-10 md:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-12">
          <div className="max-w-xl text-white">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(207,188,165,0.74)]">Siguiente paso</p>
            <h2 className="font-display mt-5 text-[clamp(2.45rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              Si tu operación ya no debería depender de improvisación, empecemos por ahí.
            </h2>
            <p className="mt-6 text-base leading-7 text-[rgba(243,245,249,0.9)] sm:text-lg sm:leading-8">
              Podemos revisar el flujo actual, detectar dónde se pierde tiempo o control, y definir si conviene automatizar,
              centralizar información o construir una aplicación a medida.
            </p>

            <div className="mt-10 grid gap-4">
              {siteContent.contactHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[rgba(239,243,249,0.9)]">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[rgb(233,225,214)]" />
                  <span className="text-base leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm email={siteContent.contact.email} />
        </div>
      </section>
    </main>
  )
}
