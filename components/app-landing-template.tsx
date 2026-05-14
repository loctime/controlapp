import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { StructuredData } from "@/components/structured-data"
import { AppMediaGallery } from "@/components/app-media-gallery"
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
  if (!app) return null

  const { landingContent } = app
  const relatedApps = landingContent.relatedApps
    .map((related) => {
      const relatedApp = getPlatformAppBySlug(related.slug)
      return relatedApp ? { ...related, app: relatedApp } : null
    })
    .filter((related): related is ResolvedRelatedApp => related !== null)

  const additionalApps = activePlatformApps
    .filter((candidate) => candidate.slug !== app.slug && !landingContent.relatedApps.some((r) => r.slug === candidate.slug))
    .slice(0, 2)

  const primaryCtaHref = landingContent.finalCta.primaryHref === app.href ? "#funcionalidades" : landingContent.finalCta.primaryHref

  return (
    <>
      <StructuredData data={getAppSchemas(app)} />

      {/* Hero */}
      <section className="bg-white pt-28 pb-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><Link href="/#apps" className="hover:text-blue-600 transition-colors">Apps</Link></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li className="text-slate-700 font-medium">{app.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold mb-6 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-full">
                <app.icon size={14} />
                {landingContent.heroLabel}
              </div>

              <h1 className="text-5xl font-bold text-slate-900 mb-5 leading-tight tracking-tight">
                {landingContent.heroTitle}
              </h1>

              <p className="text-lg text-slate-600 mb-4 leading-relaxed">{landingContent.heroDescription}</p>
              <p className="text-base text-slate-500 mb-10 leading-relaxed">{landingContent.valueProposition}</p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  href={primaryCtaHref}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  {landingContent.finalCta.primaryLabel}
                </Link>
                <Link
                  href={landingContent.finalCta.secondaryHref}
                  className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {landingContent.finalCta.secondaryLabel}
                </Link>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={app.image}
                  alt={`${app.name} como ${app.seo.categoryLabel.toLowerCase()} dentro de ControlApp`}
                  fill
                  className="object-cover"
                />
              </div>
              {landingContent.heroStats && (
                <div className="absolute -bottom-5 -right-4 bg-white border border-slate-200 px-5 py-4 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600">{landingContent.heroStats.value}</div>
                  <div className="text-xs text-slate-500 max-w-[10rem] leading-snug">{landingContent.heroStats.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problemas y audiencias */}
      <section id="funcionalidades" className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Qué problemas resuelve {app.name}?</h2>
              <ul className="space-y-3">
                {landingContent.problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Para qué empresas?</h2>
              <div className="space-y-4">
                {landingContent.audiences.map((audience) => (
                  <div key={audience.title}>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{audience.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{audience.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integración ecosistema */}
      {landingContent.platformIntegration && (
        <section className="bg-white py-20 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
                Integración con la plataforma
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{landingContent.platformIntegration.title}</h2>
              <p className="text-slate-500 mb-8 max-w-2xl leading-relaxed">{landingContent.platformIntegration.description}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {landingContent.platformIntegration.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Funcionalidades */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Funcionalidades clave</h2>
            <p className="text-slate-500 max-w-xl">
              {app.name} se apoya en la plataforma compartida para concentrarse en el problema que debe resolver.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {landingContent.functionalities.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                {item.icon && (
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-4.5 h-4.5 text-blue-600" />
                  </div>
                )}
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      {landingContent.mediaGallery && (
        <section className="bg-white py-20 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AppMediaGallery items={landingContent.mediaGallery.items} appColor="from-blue-600 to-blue-600" />
          </div>
        </section>
      )}

      {/* Beneficios */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">¿Por qué elegir {app.name}?</h2>
            <p className="text-slate-500 max-w-xl">Diseñado para que el equipo trabaje con fluidez desde el primer día.</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {landingContent.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Casos de uso</h2>
            <p className="text-slate-500 max-w-xl">
              Cómo este módulo encaja en procesos reales de negocio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {landingContent.useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="bg-white border border-slate-200 rounded-xl p-6 border-l-2 border-l-blue-600"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {landingContent.faq.map((item) => (
              <article key={item.question} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.question}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Apps relacionadas */}
      {(relatedApps.length > 0 || additionalApps.length > 0) && (
        <section className="bg-white py-20 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Apps relacionadas en ControlApp</h2>
              <p className="text-slate-500 max-w-xl">
                Cómo este módulo se conecta con otros procesos del ecosistema.
              </p>
            </div>

            {relatedApps.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-5 mb-6">
                {relatedApps.map((related) => (
                  <article key={related.app.slug} className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{related.app.name}</h3>
                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">{related.reason}</p>
                    <Link href={related.app.href} className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      {related.anchor} →
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {additionalApps.length > 0 && (
              <div className="border border-dashed border-slate-300 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Otros módulos del ecosistema</h3>
                <div className="flex flex-wrap gap-2">
                  {additionalApps.map((otherApp) => (
                    <Link
                      key={otherApp.slug}
                      href={otherApp.href}
                      className="border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      Explorar {otherApp.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Listo para sumar {app.name} a tu ecosistema</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {app.name} se apoya en la misma base compartida de ControlApp para que puedas crecer sin duplicar identidad, permisos ni storage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={primaryCtaHref}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              {landingContent.finalCta.primaryLabel}
            </Link>
            <Link
              href="/#apps"
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-lg text-sm font-semibold hover:border-slate-500 hover:text-white transition-colors"
            >
              Explorar más software por módulo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
