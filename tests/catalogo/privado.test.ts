import { describe, expect, it } from "vitest"
import { fichasPublicadas } from "@/lib/catalogo"
import { fichasParaAliado } from "@/lib/catalogo/aliados"
import { GUIA } from "@/lib/catalogo/guia"
import { describirComision, parsePrivado } from "@/lib/catalogo/privado"
import { leerConfig } from "@/lib/aliados/config"

const valido = JSON.stringify({
  comisiones: { "control-doc": { unico: 20, recurrente: 10 } },
  estados: { "control-doc": "listo" },
  aliados: [{ codigo: "ana-4f7k", nombre: "Ana", pinHash: "scrypt$aa$bb" }],
})

describe("parsePrivado", () => {
  it("lee un JSON válido", () => {
    const p = parsePrivado(valido)
    expect(p.aliados[0].codigo).toBe("ana-4f7k")
    expect(p.comisiones["control-doc"].recurrente).toBe(10)
  })

  it("ausente o vacío devuelve datos vacíos", () => {
    for (const raw of [undefined, "", "   "]) {
      expect(parsePrivado(raw)).toEqual({ comisiones: {}, estados: {}, aliados: [] })
    }
  })

  it("JSON roto lanza un error que nombra la variable y no vuelca su contenido", () => {
    const secreto = "scrypt$muy-secreto"
    expect(() => parsePrivado(`{"aliados": "${secreto}`)).toThrowError(/ALIADOS_PRIVADO/)
    try {
      parsePrivado(`{"aliados": "${secreto}`)
    } catch (e) {
      expect(String((e as Error).message)).not.toContain(secreto)
    }
  })

  it("rechaza porcentajes fuera de rango y códigos inválidos", () => {
    const malo = (o: object) => JSON.stringify({ comisiones: {}, estados: {}, aliados: [], ...o })
    expect(() => parsePrivado(malo({ comisiones: { x: { unico: 150 } } }))).toThrowError(/ALIADOS_PRIVADO/)
    expect(() =>
      parsePrivado(malo({ aliados: [{ codigo: "A B", nombre: "X", pinHash: "scrypt$a$b" }] })),
    ).toThrowError(/ALIADOS_PRIVADO/)
  })
})

describe("describirComision", () => {
  it("describe pago único, recurrente y mixto", () => {
    expect(describirComision({ unico: 20 })).toBe("20% del pago único")
    expect(describirComision({ recurrente: 10 })).toBe("10% de cada mensualidad")
    expect(describirComision({ unico: 20, recurrente: 10 })).toBe("20% del pago único + 10% de cada mensualidad")
  })

  it("sin datos dice que se confirma, nunca vacío ni undefined", () => {
    expect(describirComision(null)).toBe("Comisión a confirmar")
    expect(describirComision({})).toBe("Comisión a confirmar")
  })
})

describe("fichasParaAliado", () => {
  it("devuelve todas las publicadas, con comisión solo si está cargada", () => {
    const fichas = fichasParaAliado(parsePrivado(valido))
    expect(fichas.map((f) => f.slug)).toEqual(fichasPublicadas().map((f) => f.slug))
    expect(fichas.find((f) => f.slug === "control-doc")?.comision).toEqual({ unico: 20, recurrente: 10 })
    const otra = fichas.find((f) => f.slug !== "control-doc")
    expect(otra?.comision).toBeNull()
  })

  it("toda ficha publicada tiene guía de 3 frases", () => {
    for (const f of fichasPublicadas()) expect(GUIA[f.slug]?.length).toBe(3)
  })
})

describe("la proyección pública no contiene campos privados", () => {
  it("las fichas públicas no tienen campos de comisión, estado ni guía", () => {
    const campos = new Set(fichasPublicadas().flatMap((f) => Object.keys(f)))
    for (const prohibido of ["comision", "comisiones", "estado", "estados", "pinHash", "comoLoOfrezco"]) {
      expect(campos.has(prohibido)).toBe(false)
    }
  })

  it("ningún valor de las fichas públicas contiene un hash de PIN", () => {
    expect(JSON.stringify(fichasPublicadas())).not.toContain("scrypt$")
  })
})

describe("leerConfig", () => {
  const secreto = "x".repeat(32)

  it("devuelve datos y secreto", () => {
    const c = leerConfig({ ALIADOS_PRIVADO: valido, ALIADOS_SESSION_SECRET: secreto })
    expect(c.secreto).toBe(secreto)
    expect(c.privado.aliados).toHaveLength(1)
  })

  it("lanza si falta el secreto o es corto", () => {
    expect(() => leerConfig({ ALIADOS_PRIVADO: valido })).toThrowError(/ALIADOS_SESSION_SECRET/)
    expect(() =>
      leerConfig({ ALIADOS_PRIVADO: valido, ALIADOS_SESSION_SECRET: "corto" }),
    ).toThrowError(/ALIADOS_SESSION_SECRET/)
  })
})
