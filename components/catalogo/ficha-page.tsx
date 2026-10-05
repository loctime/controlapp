import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { BotonConsulta } from "@/components/catalogo/boton-consulta"
import { textoPrecio } from "@/lib/catalogo"
import type { FichaPublica } from "@/lib/catalogo/types"

export function FichaPage({ ficha, email }: { ficha: FichaPublica; email: string }) {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 md:px-10 lg:py-20">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(44,48,58)] hover:text-[rgb(120,95,68)]"
        >
          <ArrowLeft className="size-4" />
          Todos los servicios
        </Link>
        <h1 className="font-display mt-8 text-[clamp(2.4rem,10vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {ficha.nombre}
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-[rgb(56,60,70)]">{ficha.frase}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">{textoPrecio(ficha)}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <BotonConsulta servicio={ficha.nombre} email={email} />
          {ficha.paginaDetalle ? (
            <Link href={ficha.paginaDetalle} className="text-sm font-semibold underline underline-offset-4">
              Ver más detalle
            </Link>
          ) : null}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-4xl gap-5 px-5 pb-20 sm:px-6 md:grid-cols-2 md:px-10">
        <div className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6">
          <h2 className="font-display text-[1.6rem] font-semibold tracking-[-0.03em]">Es para vos si…</h2>
          <ul className="mt-4 space-y-3">
            {ficha.paraVos.map((t) => (
              <li key={t} className="text-base font-medium leading-7 text-[rgb(56,60,70)]">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6">
          <h2 className="font-display text-[1.6rem] font-semibold tracking-[-0.03em]">Qué incluye</h2>
          <ul className="mt-4 space-y-3">
            {ficha.incluye.map((t) => (
              <li key={t} className="flex gap-3 text-base font-medium leading-7 text-[rgb(56,60,70)]">
                <Check className="mt-1 size-4 shrink-0 text-[rgb(102,82,60)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
