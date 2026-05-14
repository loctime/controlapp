import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ContactForm } from "@/components/site/contact-form"
import { siteContent } from "@/lib/site-content"

const heroCards = [
  {
    title: "Diagnóstico operativo",
    description: "Detectamos cuellos de botella, repeticiones y tareas dispersas antes de diseñar.",
  },
  {
    title: "Aplicaciones a medida",
    description: "Construimos herramientas específicas para la realidad de cada equipo y cada proceso.",
  },
  {
    title: "Automatización útil",
    description: "Menos carga manual, menos dependencia de planillas y más control de punta a punta.",
  },
]

export function HomePage() {
  return (
    <main className="bg-[rgb(250,248,244)] text-[rgb(15,23,42)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(210,196,168,0.38),_transparent_32%),radial-gradient(circle_at_82%_24%,_rgba(125,147,176,0.22),_transparent_26%),linear-gradient(180deg,_rgb(250,248,244)_0%,_rgb(244,240,233)_100%)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 pb-20 pt-16 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.34em] text-[rgb(94,109,136)]">
              ControlApps
            </p>
            <h1 className="mt-6 max-w-4xl text-[clamp(3rem,8vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-[rgb(15,23,42)]">
              Software a medida para ordenar procesos, automatizar trabajo repetitivo y destrabar operación real.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[rgb(82,94,118)] md:text-xl">
              Desarrollamos aplicaciones, tableros y flujos internos adaptados a cada negocio. No vendemos una plataforma genérica:
              construimos herramientas concretas para problemas concretos.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[rgb(22,35,62)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(15,23,42,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-[rgb(31,48,83)]"
              >
                Contanos tu necesidad
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/metodologia"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(18,26,44,0.12)] bg-white px-6 py-3.5 text-sm font-semibold text-[rgb(22,35,62)] transition-colors hover:border-[rgba(18,26,44,0.2)] hover:bg-[rgba(255,255,255,0.75)]"
              >
                Ver metodología
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {siteContent.heroStats.map((stat) => (
                <div key={stat.label} className="border-l border-[rgba(18,26,44,0.12)] pl-4">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(94,109,136)]">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[rgb(15,23,42)]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[rgba(18,26,44,0.12)] bg-[rgb(20,31,54)] p-5 shadow-[0_30px_90px_rgba(15,23,42,0.24)]">
              <div className="rounded-[1.6rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.02))] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[rgba(224,230,240,0.72)]">
                      Arquitectura operativa
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">De fricción a flujo</p>
                  </div>
                  <div className="rounded-full border border-[rgba(255,255,255,0.14)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[rgba(224,230,240,0.72)]">
                    Diagnóstico + build
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {heroCards.map((card, index) => (
                    <div
                      key={card.title}
                      className="grid gap-4 rounded-[1.4rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 md:grid-cols-[minmax(0,1fr)_auto]"
                    >
                      <div>
                        <p className="text-base font-semibold text-white">{card.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[rgba(224,230,240,0.78)]">{card.description}</p>
                      </div>
                      <div className="flex items-start justify-start md:justify-end">
                        <span className="rounded-full border border-[rgba(255,255,255,0.1)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(224,230,240,0.62)]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(9,14,25,0.3)] p-5">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {siteContent.heroSignals.map((signal) => (
                      <div key={signal.label}>
                        <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[rgba(224,230,240,0.56)]">
                          {signal.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[rgba(239,243,249,0.88)]">{signal.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(94,109,136)]">Qué es ControlApps</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[rgb(15,23,42)] md:text-5xl">
              Una entidad de software enfocada en resolver trabajo operativo que hoy molesta, se repite o no escala bien.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[rgb(82,94,118)]">
            <p>{siteContent.company.description}</p>
            <p>{siteContent.company.approach}</p>
          </div>
        </div>
      </section>

      <section id="problemas" className="border-y border-[rgba(210,217,228,0.76)] bg-white/80">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(94,109,136)]">Problemas que resolvemos</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[rgb(15,23,42)] md:text-5xl">
              Cuando la operación depende de parches, el problema ya no es humano: falta una herramienta mejor.
            </h2>
          </div>

          <div className="grid gap-4">
            {siteContent.painPoints.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-[1.7rem] border border-[rgba(18,26,44,0.08)] bg-[rgb(252,252,251)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] md:grid-cols-[52px_minmax(0,1fr)]"
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[rgb(241,234,221)] text-[rgb(109,80,47)]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[rgb(15,23,42)]">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[rgb(82,94,118)]">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="soluciones" className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="flex flex-col gap-5 lg:max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(94,109,136)]">Qué desarrollamos</p>
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-[rgb(15,23,42)] md:text-5xl">
            Diseñamos software alineado con la forma real en la que trabaja cada organización.
          </h2>
          <p className="text-lg leading-8 text-[rgb(82,94,118)]">
            Aplicaciones internas, automatizaciones, paneles de seguimiento, circuitos de aprobación, flujos de documentación,
            trazabilidad operativa y herramientas de control que reemplazan trabajo manual y decisiones improvisadas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {siteContent.services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-[1.9rem] border border-[rgba(18,26,44,0.08)] bg-white p-7 shadow-[0_18px_65px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-[rgb(20,31,54)] text-[rgb(232,219,195)]">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[rgb(15,23,42)]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[rgb(82,94,118)]">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[rgb(51,65,85)]">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[rgb(109,80,47)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section id="metodologia" className="bg-[rgb(20,31,54)] text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(224,230,240,0.68)]">Cómo trabajamos</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
                Entendemos la operación antes de tocar una línea de software.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(224,230,240,0.76)]">
                El objetivo no es sumar otra herramienta al problema. El objetivo es diseñar una herramienta que simplifique el
                trabajo, dé visibilidad y sostenga el crecimiento.
              </p>
            </div>

            <div className="grid gap-4">
              {siteContent.process.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="grid gap-4 rounded-[1.7rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 md:grid-cols-[auto_52px_minmax(0,1fr)] md:items-start"
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.28em] text-[rgba(224,230,240,0.54)]">
                      0{index + 1}
                    </div>
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[rgba(221,205,171,0.12)] text-[rgb(232,219,195)]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[rgba(224,230,240,0.76)]">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/metodologia"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.14)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgba(255,255,255,0.08)]"
            >
              Ver metodología completa
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {siteContent.differentiators.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-[1.8rem] border border-[rgba(18,26,44,0.08)] bg-[rgb(246,242,235)] p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] border border-[rgba(18,26,44,0.08)] bg-white text-[rgb(22,35,62)]">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-[rgb(15,23,42)]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[rgb(82,94,118)]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-[rgba(210,217,228,0.76)] bg-white/80">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(94,109,136)]">Cobertura</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[rgb(15,23,42)] md:text-5xl">
                Amplia cobertura funcional, siempre con foco en resolver fricción operativa.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteContent.coverageAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[rgba(18,26,44,0.08)] bg-white px-5 py-5 text-base font-medium text-[rgb(22,35,62)] shadow-[0_14px_40px_rgba(15,23,42,0.04)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(94,109,136)]">Preguntas frecuentes</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[rgb(15,23,42)] md:text-5xl">
              Lo importante es entender el problema y construir la herramienta correcta.
            </h2>
          </div>

          <div className="grid gap-4">
            {siteContent.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.7rem] border border-[rgba(18,26,44,0.08)] bg-white px-6 py-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[rgb(15,23,42)]">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-[rgb(82,94,118)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[rgb(20,31,54)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-12">
          <div className="max-w-xl text-white">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(224,230,240,0.68)]">Siguiente paso</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
              Si tu operación ya no debería depender de improvisación, empecemos por ahí.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[rgba(224,230,240,0.76)]">
              Podemos revisar el flujo actual, detectar dónde se pierde tiempo o control, y definir si conviene automatizar,
              centralizar información o construir una aplicación a medida.
            </p>

            <div className="mt-10 grid gap-4">
              {siteContent.contactHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[rgba(239,243,249,0.9)]">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[rgb(232,219,195)]" />
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
