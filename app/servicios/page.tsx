import type { Metadata } from "next"
import { CatalogoPage } from "@/components/catalogo/catalogo-page"
import { absoluteUrl } from "@/lib/seo"

const descripcion =
  "Servicios de ControlApps: gestión de documentación, remitos, páginas web, redes, asistentes y sistemas a medida para tu negocio."

export const metadata: Metadata = {
  title: { absolute: "Servicios | ControlApps" },
  description: descripcion,
  alternates: { canonical: "/servicios" },
  openGraph: { type: "website", url: absoluteUrl("/servicios"), title: "Servicios | ControlApps", description: descripcion },
}

export default function ServiciosPage() {
  return <CatalogoPage />
}
