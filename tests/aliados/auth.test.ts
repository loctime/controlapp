import { describe, expect, it } from "vitest"
import { HASH_FALSO, firmarSesion, hashPin, leerSesion, verifyPin } from "@/lib/aliados/auth"

const SECRETO = "s".repeat(40)

describe("PIN", () => {
  it("verifica el PIN correcto y rechaza el incorrecto", () => {
    const h = hashPin("k7m2p9qx")
    expect(h.startsWith("scrypt$")).toBe(true)
    expect(verifyPin("k7m2p9qx", h)).toBe(true)
    expect(verifyPin("k7m2p9qy", h)).toBe(false)
  })

  it("dos hashes del mismo PIN son distintos (sal)", () => {
    expect(hashPin("k7m2p9qx")).not.toBe(hashPin("k7m2p9qx"))
  })

  it("un hash almacenado con formato inválido da false y no lanza", () => {
    for (const malo of ["", "basura", "scrypt$", "scrypt$zz$yy", "bcrypt$aa$bb"]) {
      expect(verifyPin("k7m2p9qx", malo)).toBe(false)
    }
  })

  it("HASH_FALSO es un hash válido que no coincide con nada razonable", () => {
    expect(HASH_FALSO.startsWith("scrypt$")).toBe(true)
    expect(verifyPin("k7m2p9qx", HASH_FALSO)).toBe(false)
  })
})

describe("sesión firmada", () => {
  const ahora = 1_700_000_000_000

  it("ida y vuelta", () => {
    const t = firmarSesion("ana-4f7k", SECRETO, ahora)
    expect(leerSesion(t, SECRETO, ahora + 1000)).toBe("ana-4f7k")
  })

  it("vencida devuelve null", () => {
    const t = firmarSesion("ana-4f7k", SECRETO, ahora, 1000)
    expect(leerSesion(t, SECRETO, ahora + 1001)).toBeNull()
  })

  it("manipulada devuelve null", () => {
    const t = firmarSesion("ana-4f7k", SECRETO, ahora)
    const [, exp, firma] = t.split(".")
    expect(leerSesion(`otro-aliado.${exp}.${firma}`, SECRETO, ahora)).toBeNull()
    expect(leerSesion(`ana-4f7k.${Number(exp) + 999999}.${firma}`, SECRETO, ahora)).toBeNull()
    expect(leerSesion(`${t}x`, SECRETO, ahora)).toBeNull()
  })

  it("con otro secreto no valida", () => {
    const t = firmarSesion("ana-4f7k", SECRETO, ahora)
    expect(leerSesion(t, "z".repeat(40), ahora)).toBeNull()
  })

  it("entradas basura devuelven null", () => {
    for (const t of [undefined, "", "a", "a.b", "a.b.c.d", "ana-4f7k.abc.firma"]) {
      expect(leerSesion(t, SECRETO, ahora)).toBeNull()
    }
  })
})
