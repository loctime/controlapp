import "server-only"
import { z } from "zod"
import type { ComisionServicio, EstadoServicio } from "./types"

export interface Aliado {
  codigo: string
  nombre: string
  pinHash: string
}

export interface DatosPrivados {
  comisiones: Record<string, ComisionServicio>
  estados: Record<string, EstadoServicio>
  aliados: Aliado[]
}

const porcentaje = z.number().min(0).max(100)

const esquema = z.object({
  comisiones: z.record(z.string(), z.object({ unico: porcentaje.optional(), recurrente: porcentaje.optional() })),
  estados: z.record(z.string(), z.enum(["listo", "a-pedido"])),
  aliados: z.array(
    z.object({
      codigo: z.string().regex(/^[a-z0-9-]{3,40}$/),
      nombre: z.string().min(1),
      pinHash: z.string().startsWith("scrypt$"),
    }),
  ),
})

export function parsePrivado(raw: string | undefined): DatosPrivados {
  if (!raw || !raw.trim()) return { comisiones: {}, estados: {}, aliados: [] }
  let json: unknown
  try {
    json = JSON.parse(raw)
  } catch {
    throw new Error("ALIADOS_PRIVADO no es un JSON válido")
  }
  const resultado = esquema.safeParse(json)
  if (!resultado.success) {
    const campos = resultado.error.issues.map((i) => i.path.join(".") || "(raíz)").join(", ")
    throw new Error(`ALIADOS_PRIVADO tiene campos inválidos: ${campos}`)
  }
  return resultado.data
}

export function describirComision(c: ComisionServicio | null): string {
  const partes: string[] = []
  if (c?.unico != null) partes.push(`${c.unico}% del pago único`)
  if (c?.recurrente != null) partes.push(`${c.recurrente}% de cada mensualidad`)
  return partes.length ? partes.join(" + ") : "Comisión a confirmar"
}
