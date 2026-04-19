import { platformOverview } from "@/lib/platform-data"

export function PlatformAudiences() {
  const { audiences } = platformOverview

  return (
    <section id="empresas" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-blue-100 rounded-full">
            {audiences.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{audiences.title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{audiences.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
