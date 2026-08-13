import Link from "next/link"
import { ArrowRight, Check, ChevronRight } from "lucide-react"
import { ContactForm } from "@/components/site/contact-form"
import { siteContent } from "@/lib/site-content"
import type { PlatformApp } from "@/lib/platform-types"

interface AppLandingPageProps {
  app: PlatformApp
}

export function AppLandingPage({ app }: AppLandingPageProps) {
  const { landingContent: content } = app

  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="relative overflow-hidden border-b border-[rgba(34,30,24,0.1)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(165,142,112,0.12),_transparent_28%),linear-gradient(180deg,_rgba(250,247,242,0.96)_0%,_rgba(243,239,232,1)_100%)]" />
        <div className="mx-auto w-full max-w-5xl px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:px-10 md:pb-20 md:pt-16 lg:px-12 lg:pb-24 lg:pt-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(102,82,60)]">
              <li>
                <Link href="/" className="hover:text-[rgb(18,24,37)]">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3" />
              </li>
              <li className="text-[rgb(18,24,37)]">{app.name}</li>
            </ol>
          </nav>

          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[rgb(102,82,60)] sm:text-xs sm:tracking-[0.34em]">
            {content.heroLabel}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.6rem,10vw,5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[rgb(18,24,37)]">
            {content.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-[rgb(56,60,70)] sm:mt-8 sm:text-lg sm:leading-8">
            {content.heroDescription}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[rgb(56,60,70)]">{content.valueProposition}</p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(24,30,43,0.14)] bg-[rgb(20,29,46)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[rgb(28,38,58)] sm:w-auto"
            >
              {content.finalCta.primaryLabel}
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/metodologia"
              className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.62)] px-6 py-3.5 text-sm font-semibold text-[rgb(28,34,47)] transition-colors hover:bg-[rgba(255,255,255,0.82)] sm:w-auto"
            >
              Ver metodología
            </Link>
          </div>

          {app.features.length > 0 && (
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:mt-14">
              {app.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-[rgb(39,45,57)]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[rgb(120,95,68)]" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="border-b border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.48)]">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 md:py-20 lg:px-12">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,6vw,2.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[rgb(18,24,37)]">
              ¿Qué problemas resuelve {app.name}?
            </h2>
            <ul className="mt-6 space-y-4">
              {content.problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-sm leading-6 text-[rgb(56,60,70)]">
                  <ChevronRight className="mt-0.5 size-4 shrink-0 text-[rgb(120,95,68)]" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-[clamp(1.9rem,6vw,2.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[rgb(18,24,37)]">
              ¿Para quién es?
            </h2>
            <div className="mt-6 space-y-5">
              {content.audiences.map((audience) => (
                <div key={audience.title}>
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[rgb(18,24,37)]">{audience.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-[rgb(56,60,70)]">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
        <h2 className="font-display max-w-2xl text-[clamp(2rem,7vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[rgb(18,24,37)]">
          Funcionalidades
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {content.functionalities.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-5 shadow-[0_18px_40px_rgba(20,24,31,0.06)] sm:p-6"
              >
                {Icon && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgb(20,29,46)] text-[rgb(233,225,214)]">
                    <Icon className="size-5" />
                  </div>
                )}
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[rgb(18,24,37)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[rgb(56,60,70)]">{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.48)]">
        <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
          <h2 className="font-display max-w-2xl text-[clamp(2rem,7vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[rgb(18,24,37)]">
            Beneficios
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-[1.2rem] border border-[rgba(34,30,24,0.1)] bg-[rgba(255,255,255,0.6)] p-4 text-sm leading-6 text-[rgb(39,45,57)]">
                <Check className="mt-0.5 size-4 shrink-0 text-[rgb(120,95,68)]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {content.useCases.length > 0 && (
        <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
          <h2 className="font-display max-w-2xl text-[clamp(2rem,7vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[rgb(18,24,37)]">
            Casos de uso
          </h2>
          <div className="mt-8 space-y-4">
            {content.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[rgb(18,24,37)]">{useCase.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[rgb(56,60,70)]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {content.faq.length > 0 && (
        <section className="border-t border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.48)]">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-12">
            <h2 className="font-display max-w-2xl text-[clamp(2rem,7vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[rgb(18,24,37)]">
              Preguntas frecuentes
            </h2>
            <div className="mt-8 divide-y divide-[rgba(34,30,24,0.1)] border-y border-[rgba(34,30,24,0.12)]">
              {content.faq.map((item) => (
                <div key={item.question} className="py-6">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[rgb(18,24,37)]">{item.question}</h3>
                  <p className="mt-3 text-base leading-7 text-[rgb(56,60,70)]">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contacto" className="bg-[rgb(20,29,46)]">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-16 sm:px-6 md:gap-10 md:px-10 md:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-12">
          <div className="max-w-xl text-white">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(207,188,165,0.74)]">Siguiente paso</p>
            <h2 className="font-display mt-5 text-[clamp(2rem,7vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
              Hablemos de {app.name} para tu operación.
            </h2>
            <p className="mt-6 text-base leading-7 text-[rgba(243,245,249,0.9)] sm:text-lg sm:leading-8">
              Contanos tu caso y vemos si {app.name} encaja tal cual está o si conviene ajustarlo a tu proceso.
            </p>
          </div>
          <ContactForm email={siteContent.contact.email} />
        </div>
      </section>
    </main>
  )
}
