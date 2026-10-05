import "server-only"
import { parsePrivado, type DatosPrivados } from "@/lib/catalogo/privado"

export function leerConfig(env: NodeJS.ProcessEnv = process.env): { privado: DatosPrivados; secreto: string } {
  const secreto = env.ALIADOS_SESSION_SECRET
  if (!secreto || secreto.length < 32) {
    throw new Error("ALIADOS_SESSION_SECRET falta o tiene menos de 32 caracteres")
  }
  return { privado: parsePrivado(env.ALIADOS_PRIVADO), secreto }
}
