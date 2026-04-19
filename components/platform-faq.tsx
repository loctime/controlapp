import { platformOverview } from "@/lib/platform-data"

export function PlatformFaq() {
  const { faq } = platformOverview

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-blue-100 rounded-full">
            {faq.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">{faq.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{faq.description}</p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item) => (
            <article key={item.question} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
