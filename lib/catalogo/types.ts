export type GrupoId = "ordenar" | "encontrar" | "medida"
export type TipoCobro = "unico" | "recurrente" | "mixto"
export type EstadoServicio = "listo" | "a-pedido"

export interface FichaPublica {
  slug: string
  grupo: GrupoId
  nombre: string
  frase: string
  paraVos: string[]
  incluye: string[]
  precioDesde: string | null
  tipoCobro: TipoCobro
  publicado: boolean
  paginaDetalle?: string
}

export interface Grupo {
  id: GrupoId
  titulo: string
  descripcion: string
}

export interface ComisionServicio {
  unico?: number
  recurrente?: number
}
