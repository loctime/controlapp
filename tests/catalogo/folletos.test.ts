import { describe, expect, it } from "vitest"
import { fichasPorGrupo, fichasPublicadas } from "@/lib/catalogo"
import { escaparHtml, formatearFecha, htmlFolletoGeneral, htmlFolletoServicio } from "@/lib/catalogo/folletos"
import type { FichaPublica } from "@/lib/catalogo/types"

const fecha = new Date(2026, 9, 5)

describe("formatearFecha", () => {
  it("usa DD/MM/AAAA con ceros", () => {
    expect(formatearFecha(new Date(2026, 0, 3))).toBe("03/01/2026")
    expect(formatearFecha(fecha)).toBe("05/10/2026")
  })
})

describe("escaparHtml", () => {
  it("escapa los caracteres peligrosos", () => {
    expect(escaparHtml(`<b>"a" & 'b'</b>`)).toBe("&lt;b&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/b&gt;")
  })
})

describe("folletos", () => {
  const malicioso: FichaPublica = {
    slug: "x", grupo: "medida", nombre: "<script>alert(1)</script>", frase: "Una frase de prueba bastante larga.",
    paraVos: ["a", "b"], incluye: ["c", "d"], precioDesde: null, tipoCobro: "unico", publicado: true,
  }

  it("el folleto de un servicio muestra nombre, frase y precio, con fecha DD/MM/AAAA", () => {
    const ficha = fichasPublicadas()[0]
    const html = htmlFolletoServicio(ficha, fecha)
    expect(html).toContain(escaparHtml(ficha.nombre))
    expect(html).toContain(escaparHtml(ficha.frase))
    expect(html).toContain("05/10/2026")
  })

  it("sin precio imprime A cotizar", () => {
    expect(htmlFolletoServicio({ ...malicioso, nombre: "X" }, fecha)).toContain("A cotizar")
  })

  it("escapa el contenido de las fichas", () => {
    expect(htmlFolletoServicio(malicioso, fecha)).not.toContain("<script>")
  })

  it("el folleto general incluye todas las fichas publicadas", () => {
    const html = htmlFolletoGeneral(fichasPorGrupo(), fecha)
    for (const f of fichasPublicadas()) expect(html).toContain(escaparHtml(f.nombre))
  })

  it("ningún folleto contiene datos privados ni signos de apertura", () => {
    const todos = [htmlFolletoGeneral(fichasPorGrupo(), fecha), ...fichasPublicadas().map((f) => htmlFolletoServicio(f, fecha))]
    for (const html of todos) {
      for (const prohibido of ["comision", "pinHash", "scrypt$", "comoLoOfrezco", "a-pedido"]) {
        expect(html.toLowerCase()).not.toContain(prohibido.toLowerCase())
      }
      expect(html).not.toMatch(/[¿¡]/)
    }
  })
})
