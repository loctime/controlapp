import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { FichaPage } from "@/components/catalogo/ficha-page"
import { fichaPorSlug, fichasPublicadas } from "@/lib/catalogo"
import { absoluteUrl } from "@/lib/seo"
import { siteContent } from "@/lib/site-content"

export const dynamicParams = false

export function generateStaticParams() {
  return fichasPublicadas().map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const ficha = fichaPorSlug(slug)
  if (!ficha) return {}
  const titulo = `${ficha.nombre} | ControlApps`
  return {
    title: { absolute: titulo },
    description: ficha.frase,
    alternates: { canonical: `/servicios/${ficha.slug}` },
    openGraph: { type: "website", url: absoluteUrl(`/servicios/${ficha.slug}`), title: titulo, description: ficha.frase },
  }
}

export default async function FichaServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ficha = fichaPorSlug(slug)
  if (!ficha) notFound()
  return <FichaPage ficha={ficha} email={siteContent.contact.email} />
}
