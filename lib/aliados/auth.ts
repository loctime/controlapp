import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto"

export const COOKIE_SESION = "aliado_sesion"
export const SESION_TTL_MS = 7 * 24 * 60 * 60 * 1000

const LARGO_HASH = 32

export function hashPin(pin: string): string {
  const sal = randomBytes(16)
  const hash = scryptSync(pin, sal, LARGO_HASH)
  return `scrypt$${sal.toString("hex")}$${hash.toString("hex")}`
}

export function verifyPin(pin: string, almacenado: string): boolean {
  const [algoritmo, salHex, hashHex] = almacenado.split("$")
  if (algoritmo !== "scrypt" || !salHex || !hashHex) return false
  const sal = Buffer.from(salHex, "hex")
  const esperado = Buffer.from(hashHex, "hex")
  if (sal.length < 8 || esperado.length < 16) return false
  const real = scryptSync(pin, sal, esperado.length)
  return timingSafeEqual(real, esperado)
}

export const HASH_FALSO = hashPin(randomBytes(12).toString("hex"))

function firma(secreto: string, carga: string): string {
  return createHmac("sha256", secreto).update(carga).digest("hex")
}

export function firmarSesion(codigo: string, secreto: string, ahora: number, ttlMs = SESION_TTL_MS): string {
  const carga = `${codigo}.${ahora + ttlMs}`
  return `${carga}.${firma(secreto, carga)}`
}

export function leerSesion(token: string | undefined, secreto: string, ahora: number): string | null {
  if (!token) return null
  const partes = token.split(".")
  if (partes.length !== 3) return null
  const [codigo, expiraTexto, recibida] = partes
  const expira = Number(expiraTexto)
  if (!Number.isFinite(expira) || expira <= ahora) return null
  const esperada = Buffer.from(firma(secreto, `${codigo}.${expiraTexto}`))
  const real = Buffer.from(recibida)
  if (esperada.length !== real.length || !timingSafeEqual(esperada, real)) return null
  return codigo
}
