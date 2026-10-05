import { NextResponse } from "next/server"
import { COOKIE_SESION, HASH_FALSO, SESION_TTL_MS, firmarSesion, verifyPin } from "@/lib/aliados/auth"
import { leerConfig } from "@/lib/aliados/config"
import { crearLimite } from "@/lib/aliados/limite"

const VENTANA_MS = 15 * 60 * 1000
const porIp = crearLimite(20, VENTANA_MS)
const porCodigo = crearLimite(5, VENTANA_MS)

export async function POST(request: Request) {
  const ahora = Date.now()
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "desconocida"

  let cuerpo: { codigo?: unknown; pin?: unknown }
  try {
    cuerpo = (await request.json()) as { codigo?: unknown; pin?: unknown }
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 })
  }
  if (typeof cuerpo.codigo !== "string" || typeof cuerpo.pin !== "string") {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 })
  }

  const codigo = cuerpo.codigo.trim().toLowerCase()
  const pin = cuerpo.pin.trim().toLowerCase()

  if (porIp.bloqueado(ip, ahora) || porCodigo.bloqueado(codigo, ahora)) {
    return NextResponse.json({ error: "Demasiados intentos. Probá de nuevo en unos minutos." }, { status: 429 })
  }

  let config
  try {
    config = leerConfig()
  } catch (error) {
    console.error("[aliados] configuración inválida:", error instanceof Error ? error.message : "error")
    return NextResponse.json({ error: "El portal no está disponible por ahora." }, { status: 500 })
  }

  const aliado = config.privado.aliados.find((a) => a.codigo === codigo)
  const pinValido = verifyPin(pin, aliado?.pinHash ?? HASH_FALSO)

  if (!aliado || !pinValido) {
    porIp.registrarFallo(ip, ahora)
    porCodigo.registrarFallo(codigo, ahora)
    return NextResponse.json({ error: "Código o PIN incorrectos." }, { status: 401 })
  }

  porCodigo.limpiar(codigo)
  const respuesta = NextResponse.json({ ok: true })
  respuesta.cookies.set({
    name: COOKIE_SESION,
    value: firmarSesion(aliado.codigo, config.secreto, ahora),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESION_TTL_MS / 1000),
  })
  return respuesta
}
