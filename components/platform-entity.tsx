import { platformOverview } from "@/lib/platform-data"

export function PlatformEntity() {
  const { entity } = platformOverview

  return (
    <section id="empresa" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div>
            <span className="inline-block text-blue-200 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-white/10 rounded-full">
              {entity.eyebrow}
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">{entity.title}</h2>
            <p className="text-lg text-blue-100/90 leading-relaxed mb-8">{entity.description}</p>

            <div className="grid gap-4">
              {entity.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-blue-50 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-5">Senales de confianza visibles</h3>
            <ul className="space-y-4">
              {entity.trustSignals.map((signal) => (
                <li key={signal} className="rounded-2xl bg-black/10 p-4 text-blue-50 leading-relaxed">
                  {signal}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
