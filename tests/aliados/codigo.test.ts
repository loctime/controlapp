import { describe, expect, it } from "vitest"
import { generarCodigo, generarPin, slugNombre } from "@/lib/aliados/codigo"

describe("slugNombre", () => {
  it("saca tildes, símbolos y limita el largo", () => {
    expect(slugNombre("María José Pérez")).toBe("maria-jose-perez")
    expect(slugNombre("  Ñandú!!  ")).toBe("nandu")
    expect(slugNombre("a".repeat(100)).length).toBeLessThanOrEqual(20)
  })

  it("un nombre sin letras o números usa un valor por defecto", () => {
    expect(slugNombre("!!!")).toBe("aliado")
    expect(slugNombre("")).toBe("aliado")
  })
})

describe("generarCodigo y generarPin", () => {
  it("el código cumple el formato y no se repite", () => {
    const codigos = new Set(Array.from({ length: 200 }, () => generarCodigo("Ana Pérez")))
    expect(codigos.size).toBeGreaterThan(190)
    for (const c of codigos) expect(c).toMatch(/^[a-z0-9-]{3,40}$/)
  })

  it("el PIN tiene 8 caracteres de un alfabeto sin ambiguos", () => {
    for (let i = 0; i < 100; i++) {
      const pin = generarPin()
      expect(pin).toMatch(/^[abcdefghjkmnpqrstuvwxyz23456789]{8}$/)
    }
  })
})
