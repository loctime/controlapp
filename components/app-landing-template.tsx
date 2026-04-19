import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, ChevronRight, FolderOpen } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { activePlatformApps, getPlatformAppBySlug } from "@/lib/platform-data"
import { getAppSchemas } from "@/lib/seo"

interface AppLandingTemplateProps {
  appSlug: string
}

interface ResolvedRelatedApp {
  slug: string
  anchor: string
  reason: string
  app: NonNullable<ReturnType<typeof getPlatformAppBySlug>>
}

export function AppLandingTemplate({ appSlug }: AppLandingTemplateProps) {
  const app = getPlatformAppBySlug(appSlug)

  if (!app) {
    return null
  }

  const { landingContent } = app
  const relatedApps = landingContent.relatedApps
    .map((related) => {
      const relatedApp = getPlatformAppBySlug(related.slug)
      return relatedApp ? { ...related, app: relatedApp } : null
    })
    .filter((related): related is ResolvedRelatedApp => related !== null)

  const additionalApps = activePlatformApps
    .filter((candidate) => candidate.slug !== app.slug && !landingContent.relatedApps.some((related) => related.slug === candidate.slug))
    .slice(0, 2)
  const primaryCtaHref = landingContent.finalCta.primaryHref === app.href ? "#funcionalidades" : landingContent.finalCta.primaryHref

  return (
    <>
      <StructuredData data={getAppSchemas(app)} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li>
                <Link href="/#apps" className="hover:text-blue-600 transition-colors">
                  Apps
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-gray-900 font-semibold">{app.name}</li>
            </ol>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-all hover:gap-3"
          >
            <ArrowLeft size={20} />
            Volver a la plataforma
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <app.icon size={16} />
                {landingContent.heroLabel}
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">{landingContent.heroTitle}</h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{landingContent.heroDescription}</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{landingContent.valueProposition}</p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href={primaryCtaHref}
                  className={`bg-gradient-to-r ${app.color} text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105`}
                >
                  {landingContent.finalCta.primaryLabel}
                </Link>
                <Link
                  href={landingContent.finalCta.secondaryHref}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  {landingContent.finalCta.secondaryLabel}
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {app.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl bg-white border border-blue-100 p-4 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70">
                <Image
                  src={app.image}
                  alt={`${app.name} como ${app.seo.categoryLabel.toLowerCase()} dentro de ControlApp`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {landingContent.heroStats ? (
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                    {landingContent.heroStats.value}
                  </div>
                  <div className="text-sm text-gray-600 max-w-[12rem]">{landingContent.heroStats.label}</div>
                </div>
              ) : null}
            </div>
          </div>

          <section id="funcionalidades" className="mb-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
              <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Que problemas resuelve {app.name}?</h2>
                <ul className="space-y-4">
                  {landingContent.problems.map((problem) => (
                    <li key={problem} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-gray-700 leading-relaxed">
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-5">Para que empresas sirve?</h2>
                <div className="space-y-4">
                  {landingContent.audiences.map((audience) => (
                    <div key={audience.title} className="rounded-2xl bg-white/10 border border-white/10 p-5">
                      <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                      <p className="text-blue-50/90 leading-relaxed">{audience.description}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          {landingContent.platformIntegration ? (
            <section className="mb-20 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-10 shadow-2xl">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                  <FolderOpen size={16} />
                  Integracion con la plataforma
                </div>
                <h2 className="text-4xl font-bold mb-4">{landingContent.platformIntegration.title}</h2>
                <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">{landingContent.platformIntegration.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {landingContent.platformIntegration.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                      <p className="text-blue-50 leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Funcionalidades clave</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              {app.name} se apoya en la plataforma compartida para concentrarse en el problema que debe resolver.
            </p>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {landingContent.functionalities.map((item) => (
                <article key={item.title} className="bg-white p-7 rounded-3xl shadow-lg border border-blue-100">
                  {item.icon ? (
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-5`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  ) : null}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className={`rounded-3xl bg-gradient-to-br ${app.color} p-12 text-white`}>
              <h2 className="text-4xl font-bold mb-8 text-center">Beneficios de usar {app.name} dentro de ControlApp</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {landingContent.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Casos de uso</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Ejemplos concretos de como este modulo puede integrarse con procesos reales de negocio.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {landingContent.useCases.map((useCase) => (
                <article key={useCase.title} className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Preguntas frecuentes sobre {app.name}</h2>
              <div className="space-y-4">
                {landingContent.faq.map((item) => (
                  <article key={item.question} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Apps relacionadas dentro de ControlApp</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Enlaces pensados para entender como este modulo se conecta con otros procesos del ecosistema.
            </p>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              {relatedApps.map((related) => (
                <article key={related.app.slug} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{related.app.name}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{related.reason}</p>
                  <Link href={related.app.href} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    {related.anchor}
                  </Link>
                </article>
              ))}
            </div>

            {additionalApps.length ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Otros modulos del ecosistema</h3>
                <div className="flex flex-wrap gap-3">
                  {additionalApps.map((otherApp) => (
                    <Link
                      key={otherApp.slug}
                      href={otherApp.href}
                      className="rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-blue-700 font-semibold hover:bg-blue-100 transition-colors"
                    >
                      Explorar {otherApp.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <section className="bg-gray-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Listo para sumar {app.name} a tu ecosistema</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {app.name} se apoya en la misma base compartida de ControlApp para que puedas crecer sin duplicar identidad, permisos ni storage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryCtaHref}
                className={`bg-gradient-to-r ${app.color} text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105`}
              >
                {landingContent.finalCta.primaryLabel}
              </Link>
              <Link
                href="/#apps"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Explorar mas software por modulo
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
