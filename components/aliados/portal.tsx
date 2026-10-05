import Link from "next/link"
import { CopiarBoton } from "@/components/aliados/copiar-boton"
import { SalirBoton } from "@/components/aliados/salir-boton"
import type { FichaAliado } from "@/lib/catalogo/aliados"
import { linkPersonal, textoEstado, textoWhatsApp } from "@/lib/catalogo/compartir"
import { describirComision } from "@/lib/catalogo/privado"
import { textoPrecio } from "@/lib/catalogo"

type Props = {
  nombre: string
  codigo: string
  fichas: FichaAliado[]
  baseUrl: string
}

export function Portal({ nombre, codigo, fichas, baseUrl }: Props) {
  const general = linkPersonal(baseUrl, null, codigo)

  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 md:px-10 lg:py-20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(102,82,60)]">Portal de aliados</p>
            <h1 className="font-display mt-4 text-[clamp(2.2rem,9vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
              Hola, {nombre}.
            </h1>
          </div>
          <SalirBoton />
        </div>

        <div className="mt-8 rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">Tu link personal</p>
          <p className="mt-3 break-all text-base font-semibold">{general}</p>
          <p className="mt-2 text-sm font-medium text-[rgb(56,60,70)]">
            Tu código es <strong>{codigo}</strong>. Cuando alguien te consulte, pedile que lo mencione o que entre por tu link.
          </p>
          <div className="mt-4">
            <CopiarBoton texto={general} etiqueta="Copiar mi link" />
          </div>
        </div>

        <p className="mt-6 text-sm font-medium text-[rgb(56,60,70)]">
          Antes de ofrecer, leé las{" "}
          <Link href="/aliados/reglas" className="underline underline-offset-4">
            reglas del programa
          </Link>
          . Podés descargar el{" "}
          <a href="/folletos/folleto-general.pdf" className="underline underline-offset-4" download>
            folleto general
          </a>
          .
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl space-y-5 px-5 pb-20 sm:px-6 md:px-10">
        {fichas.map((f) => {
          const link = linkPersonal(baseUrl, f.slug, codigo)
          return (
            <article
              key={f.slug}
              className="rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6 shadow-[0_18px_40px_rgba(20,24,31,0.06)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-display text-[1.8rem] font-semibold leading-tight tracking-[-0.03em]">{f.nombre}</h2>
                <span className="rounded-full border border-[rgba(34,30,24,0.12)] bg-[rgba(243,239,232,0.88)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[rgb(102,82,60)]">
                  {f.estado === "a-pedido" ? "Se arma a pedido" : f.estado === "listo" ? "Listo para vender" : "Consultar estado"}
                </span>
              </div>
              <p className="mt-3 text-base font-medium leading-7 text-[rgb(56,60,70)]">{f.frase}</p>
              <p className="mt-3 text-sm font-semibold">
                {textoPrecio(f)} · Tu comisión: {describirComision(f.comision)}
              </p>

              <h3 className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">Cómo lo ofrezco</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-base font-medium leading-7 text-[rgb(56,60,70)]">
                {f.comoLoOfrezco.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>

              <div className="mt-5 flex flex-wrap gap-3">
                <CopiarBoton texto={textoWhatsApp(f, link)} etiqueta="Copiar texto para WhatsApp" />
                <CopiarBoton texto={textoEstado(f, link)} etiqueta="Copiar texto para estado" />
                <CopiarBoton texto={link} etiqueta="Copiar link" />
                <a
                  href={`/folletos/${f.slug}.pdf`}
                  download
                  className="inline-flex items-center rounded-full border border-[rgba(34,30,24,0.16)] px-4 py-2 text-sm font-semibold hover:bg-white"
                >
                  Descargar folleto
                </a>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
