import type { Metadata } from "next"
import { cookies } from "next/headers"
import { LoginForm } from "@/components/aliados/login-form"
import { Portal } from "@/components/aliados/portal"
import { COOKIE_SESION, leerSesion } from "@/lib/aliados/auth"
import { leerConfig } from "@/lib/aliados/config"
import { fichasParaAliado } from "@/lib/catalogo/aliados"
import { siteConfig } from "@/lib/seo"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: { absolute: "Portal de aliados | ControlApps" },
  robots: { index: false, follow: false },
}

function Aviso({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
      <section className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-6 md:px-10">
        <h1 className="font-display text-[2.4rem] font-semibold tracking-[-0.04em]">{titulo}</h1>
        <p className="mt-4 text-base font-medium leading-7 text-[rgb(56,60,70)]">{texto}</p>
      </section>
    </main>
  )
}

export default async function AliadosPage() {
  let config
  try {
    config = leerConfig()
  } catch (error) {
    console.error("[aliados] configuración inválida:", error instanceof Error ? error.message : "error")
    return <Aviso titulo="Portal no disponible" texto="Estamos ajustando el portal. Probá de nuevo más tarde." />
  }

  const token = (await cookies()).get(COOKIE_SESION)?.value
  const codigo = leerSesion(token, config.secreto, Date.now())
  const aliado = codigo ? config.privado.aliados.find((a) => a.codigo === codigo) : undefined

  if (!aliado) {
    return (
      <main className="bg-[rgb(247,243,237)] text-[rgb(18,24,37)]">
        <section className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[rgb(102,82,60)]">Portal de aliados</p>
          <h1 className="font-display mt-4 text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.05em]">
            Entrá con tu código y tu PIN.
          </h1>
          <LoginForm />
        </section>
      </main>
    )
  }

  return (
    <Portal
      nombre={aliado.nombre}
      codigo={aliado.codigo}
      fichas={fichasParaAliado(config.privado)}
      baseUrl={siteConfig.url}
    />
  )
}
