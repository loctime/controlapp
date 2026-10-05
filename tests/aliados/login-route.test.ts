import { afterAll, beforeAll, describe, expect, it, vi } from "vitest"
import { hashPin } from "@/lib/aliados/auth"

const PIN = "k7m2p9qx"

let POST: (request: Request) => Promise<Response>

beforeAll(async () => {
  vi.stubEnv("ALIADOS_SESSION_SECRET", "s".repeat(40))
  vi.stubEnv(
    "ALIADOS_PRIVADO",
    JSON.stringify({
      comisiones: {},
      estados: {},
      aliados: [
        { codigo: "ana-4f7k", nombre: "Ana", pinHash: hashPin(PIN) },
        { codigo: "luis-9z2m", nombre: "Luis", pinHash: hashPin(PIN) },
      ],
    }),
  )
  ;({ POST } = await import("@/app/api/aliados/login/route"))
})

afterAll(() => {
  vi.unstubAllEnvs()
})

function intento(codigo: string, pin: string, ip: string): Promise<Response> {
  return POST(
    new Request("http://localhost/api/aliados/login", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
      body: JSON.stringify({ codigo, pin }),
    }),
  )
}

describe("login de aliados: límite de intentos", () => {
  it("un atacante que falla 5 veces con el código de otra persona no la deja afuera", async () => {
    for (let i = 0; i < 5; i++) {
      expect((await intento("ana-4f7k", "zzzzzzzz", "10.0.0.1")).status).toBe(401)
    }
    expect((await intento("ana-4f7k", "zzzzzzzz", "10.0.0.1")).status).toBe(429)

    const legitima = await intento("ana-4f7k", PIN, "10.0.0.2")
    expect(legitima.status).toBe(200)
  })

  it("el mismo origen sigue bloqueado aunque use el PIN correcto después de 5 fallos", async () => {
    for (let i = 0; i < 5; i++) await intento("luis-9z2m", "zzzzzzzz", "10.0.1.1")
    expect((await intento("luis-9z2m", PIN, "10.0.1.1")).status).toBe(429)
  })

  it("un mismo origen probando muchos códigos distintos termina bloqueado", async () => {
    let ultimo = 200
    for (let i = 0; i < 25; i++) {
      ultimo = (await intento(`inventado-${String(i).padStart(4, "0")}`, "zzzzzzzz", "10.0.2.1")).status
    }
    expect(ultimo).toBe(429)
  })
})
