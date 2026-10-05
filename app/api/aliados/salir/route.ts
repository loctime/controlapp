import { NextResponse } from "next/server"
import { COOKIE_SESION } from "@/lib/aliados/auth"

export async function POST() {
  const respuesta = NextResponse.json({ ok: true })
  respuesta.cookies.set({ name: COOKIE_SESION, value: "", path: "/", maxAge: 0 })
  return respuesta
}
