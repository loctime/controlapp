import "server-only"
import { fichasPublicadas } from "./index"
import { GUIA } from "./guia"
import type { DatosPrivados } from "./privado"
import type { ComisionServicio, EstadoServicio, FichaPublica } from "./types"

export interface FichaAliado extends FichaPublica {
  estado: EstadoServicio | null
  comision: ComisionServicio | null
  comoLoOfrezco: string[]
}

export function fichasParaAliado(privado: DatosPrivados): FichaAliado[] {
  return fichasPublicadas().map((f) => ({
    ...f,
    estado: privado.estados[f.slug] ?? null,
    comision: privado.comisiones[f.slug] ?? null,
    comoLoOfrezco: GUIA[f.slug] ?? [],
  }))
}
