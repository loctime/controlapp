import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { fichasPorGrupo, textoPrecio } from "@/lib/catalogo"

export function CatalogoPage() {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:px-10 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(102,82,60)]">Servicios</p>
        <h1 className="font-display mt-5 text-[clamp(2.6rem,11vw,5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          Soluciones concretas para problemas del día a día.
        </h1>
        <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-[rgb(56,60,70)] sm:text-lg sm:leading-8">
          Contanos qué te frena y te decimos cuál de estas soluciones te sirve. Si ninguna encaja, la armamos a tu medida.
        </p>
      </section>

      {fichasPorGrupo().map(({ grupo, fichas }) => (
        <section key={grupo.id} className="mx-auto w-full max-w-5xl px-5 pb-14 sm:px-6 md:px-10">
          <h2 className="font-display text-[2rem] font-semibold leading-none tracking-[-0.04em] md:text-[2.5rem]">
            {grupo.titulo}
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-[rgb(56,60,70)]">{grupo.descripcion}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {fichas.map((f) => (
              <Link
                key={f.slug}
                href={`/servicios/${f.slug}`}
                className="group rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6 shadow-[0_18px_40px_rgba(20,24,31,0.06)] transition-colors hover:bg-white"
              >
                <h3 className="font-display text-[1.6rem] font-semibold leading-tight tracking-[-0.03em]">{f.nombre}</h3>
                <p className="mt-3 text-base font-medium leading-7 text-[rgb(56,60,70)]">{f.frase}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[rgb(102,82,60)]">
                    {textoPrecio(f)}
                  </span>
                  <ArrowRight className="size-4 text-[rgb(102,82,60)] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-6 md:px-10">
        <div className="rounded-[1.8rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6 md:p-8">
          <h2 className="font-display text-[1.8rem] font-semibold leading-tight tracking-[-0.03em]">
            Querés ofrecer estos servicios y ganar una comisión?
          </h2>
          <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-[rgb(56,60,70)]">
            Cualquiera puede sumarse. Te damos material listo para compartir y cobrás una comisión por cada cliente que traigas.
          </p>
          <Link
            href="/aliados/unirse"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(20,29,46)] underline underline-offset-4"
          >
            Quiero ser aliado <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
