import { GRUPOS } from "./grupos"
import { SERVICIOS } from "./servicios"
import type { FichaPublica, Grupo } from "./types"

export { GRUPOS, SERVICIOS }
export type { FichaPublica, Grupo }

export function fichasPublicadas(): FichaPublica[] {
  return SERVICIOS.filter((s) => s.publicado)
}

export function fichaPorSlug(slug: string): FichaPublica | undefined {
  return fichasPublicadas().find((s) => s.slug === slug)
}

export function fichasPorGrupo(): { grupo: Grupo; fichas: FichaPublica[] }[] {
  const publicadas = fichasPublicadas()
  return GRUPOS.map((grupo) => ({ grupo, fichas: publicadas.filter((f) => f.grupo === grupo.id) })).filter(
    (g) => g.fichas.length > 0,
  )
}

export function textoPrecio(f: FichaPublica): string {
  return f.precioDesde ? `Desde ${f.precioDesde}` : "A cotizar"
}
