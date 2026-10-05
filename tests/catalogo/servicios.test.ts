import { describe, expect, it } from "vitest"
import { SERVICIOS } from "@/lib/catalogo/servicios"
import { fichaPorSlug, fichasPorGrupo, fichasPublicadas, textoPrecio } from "@/lib/catalogo"
import type { FichaPublica } from "@/lib/catalogo/types"

const JERGA = ["API", "backend", "SaaS", "multi-tenant", "webhook", "deploy", "endpoint"]

function textos(f: FichaPublica): string[] {
  return [f.nombre, f.frase, ...f.paraVos, ...f.incluye, f.precioDesde ?? ""]
}

describe("fichas del catálogo", () => {
  it("los slugs son únicos y con formato válido", () => {
    const slugs = SERVICIOS.map((s) => s.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/)
  })

  it.each(SERVICIOS.map((s) => [s.slug, s] as const))("la ficha %s cumple las reglas de copia", (_slug, f) => {
    expect(f.frase.length).toBeGreaterThan(20)
    expect(f.frase.length).toBeLessThanOrEqual(160)
    expect(f.paraVos.length).toBeGreaterThanOrEqual(2)
    expect(f.paraVos.length).toBeLessThanOrEqual(4)
    expect(f.incluye.length).toBeGreaterThanOrEqual(2)
    for (const t of textos(f)) {
      expect(t).not.toMatch(/[¿¡]/)
      for (const palabra of JERGA) expect(t.toLowerCase()).not.toContain(palabra.toLowerCase())
    }
  })

  it("las fichas públicas son solo las publicadas", () => {
    expect(fichasPublicadas().every((f) => f.publicado)).toBe(true)
    expect(fichaPorSlug("control-doc")?.nombre).toBe("ControlDoc")
  })

  it("un slug inexistente o no publicado no se encuentra", () => {
    expect(fichaPorSlug("no-existe")).toBeUndefined()
    const noPublicada = SERVICIOS.find((s) => !s.publicado)
    if (noPublicada) expect(fichaPorSlug(noPublicada.slug)).toBeUndefined()
  })

  it("agrupa sin devolver grupos vacíos", () => {
    const grupos = fichasPorGrupo()
    expect(grupos.length).toBeGreaterThan(0)
    for (const g of grupos) expect(g.fichas.length).toBeGreaterThan(0)
  })
})

describe("textoPrecio", () => {
  const base: FichaPublica = {
    slug: "x", grupo: "medida", nombre: "X", frase: "Una frase de prueba bastante larga.",
    paraVos: ["a", "b"], incluye: ["c", "d"], precioDesde: null, tipoCobro: "unico", publicado: true,
  }

  it("sin precio muestra A cotizar", () => {
    expect(textoPrecio(base)).toBe("A cotizar")
    expect(textoPrecio({ ...base, precioDesde: "" })).toBe("A cotizar")
  })

  it("con precio muestra Desde", () => {
    expect(textoPrecio({ ...base, precioDesde: "$150.000" })).toBe("Desde $150.000")
  })
})
