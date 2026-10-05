import { describe, expect, it } from "vitest"
import { crearLimite } from "@/lib/aliados/limite"

describe("crearLimite", () => {
  it("bloquea al llegar al máximo de fallos dentro de la ventana", () => {
    const l = crearLimite(3, 1000)
    for (let i = 0; i < 2; i++) l.registrarFallo("ip", 0)
    expect(l.bloqueado("ip", 10)).toBe(false)
    l.registrarFallo("ip", 10)
    expect(l.bloqueado("ip", 20)).toBe(true)
  })

  it("se desbloquea cuando los fallos salen de la ventana", () => {
    const l = crearLimite(2, 1000)
    l.registrarFallo("ip", 0)
    l.registrarFallo("ip", 0)
    expect(l.bloqueado("ip", 999)).toBe(true)
    expect(l.bloqueado("ip", 1001)).toBe(false)
  })

  it("las claves son independientes y limpiar reinicia", () => {
    const l = crearLimite(1, 1000)
    l.registrarFallo("a", 0)
    expect(l.bloqueado("a", 1)).toBe(true)
    expect(l.bloqueado("b", 1)).toBe(false)
    l.limpiar("a")
    expect(l.bloqueado("a", 2)).toBe(false)
  })
})
