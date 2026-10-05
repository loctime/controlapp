import { describe, expect, it } from "vitest"
import { enlaceConsulta, mensajeConsulta, normalizarRef } from "@/lib/catalogo/contacto"
import { linkPersonal, textoEstado, textoWhatsApp } from "@/lib/catalogo/compartir"
import { REF_STORAGE_KEY, resolverRef } from "@/lib/catalogo/ref-cliente"
import type { FichaPublica } from "@/lib/catalogo/types"

const ficha: FichaPublica = {
  slug: "control-doc", grupo: "ordenar", nombre: "ControlDoc", frase: "Todos tus documentos en un solo lugar.",
  paraVos: ["a", "b"], incluye: ["c", "d"], precioDesde: null, tipoCobro: "recurrente", publicado: true,
}

describe("normalizarRef", () => {
  it("acepta un código válido y lo pasa a minúsculas", () => {
    expect(normalizarRef(" Ana-4F7K ")).toBe("ana-4f7k")
  })

  it.each([
    ["vacío", ""],
    ["null", null],
    ["undefined", undefined],
    ["muy corto", "ab"],
    ["muy largo", "a".repeat(500)],
    ["script", "<script>alert(1)</script>"],
    ["salto de línea", "ana%0Ahola"],
    ["salto de línea real", "ana\nhola"],
    ["espacios internos", "ana perez"],
  ])("rechaza %s", (_nombre, valor) => {
    expect(normalizarRef(valor as string | null | undefined)).toBeNull()
  })
})

describe("enlaceConsulta", () => {
  it("usa WhatsApp cuando hay número y deja solo dígitos", () => {
    const url = enlaceConsulta({ numero: "+54 9 294 123-4567", email: "a@b.com", servicio: "ControlDoc", ref: "ana-4f7k" })
    expect(url.startsWith("https://wa.me/5492941234567?text=")).toBe(true)
    expect(decodeURIComponent(url.split("text=")[1])).toBe("Hola, me interesa ControlDoc. Me recomendó el código ana-4f7k.")
  })

  it("cae a mailto si no hay número configurado", () => {
    const url = enlaceConsulta({ numero: undefined, email: "a@b.com", servicio: "ControlDoc", ref: null })
    expect(url.startsWith("mailto:a@b.com?")).toBe(true)
    expect(url).toContain(encodeURIComponent("Hola, me interesa ControlDoc."))
  })

  it("un número sin dígitos cuenta como no configurado", () => {
    expect(enlaceConsulta({ numero: "  ", email: "a@b.com", servicio: "X" }).startsWith("mailto:")).toBe(true)
  })

  it("nunca inserta un ref inválido en el mensaje", () => {
    const url = enlaceConsulta({ numero: "5491", email: "a@b.com", servicio: "X", ref: "ana\nhola<script>" })
    expect(decodeURIComponent(url)).not.toContain("script")
    expect(decodeURIComponent(url)).not.toContain("recomendó")
  })

  it("mensajeConsulta sin ref no menciona recomendación", () => {
    expect(mensajeConsulta("X", null)).toBe("Hola, me interesa X.")
  })
})

describe("resolverRef", () => {
  function storageFalso(inicial: Record<string, string> = {}) {
    const datos = { ...inicial }
    return {
      datos,
      getItem: (k: string) => datos[k] ?? null,
      setItem: (k: string, v: string) => {
        datos[k] = v
      },
    }
  }

  it("toma el ref de la URL y lo guarda", () => {
    const s = storageFalso()
    expect(resolverRef("?ref=Ana-4f7k", s)).toBe("ana-4f7k")
    expect(s.datos[REF_STORAGE_KEY]).toBe("ana-4f7k")
  })

  it("sin ref en la URL usa el guardado", () => {
    expect(resolverRef("", storageFalso({ [REF_STORAGE_KEY]: "ana-4f7k" }))).toBe("ana-4f7k")
  })

  it("un ref inválido en la URL no pisa el guardado", () => {
    const s = storageFalso({ [REF_STORAGE_KEY]: "ana-4f7k" })
    expect(resolverRef("?ref=%3Cscript%3E", s)).toBe("ana-4f7k")
    expect(s.datos[REF_STORAGE_KEY]).toBe("ana-4f7k")
  })

  it("funciona sin storage disponible", () => {
    expect(resolverRef("?ref=ana-4f7k", null)).toBe("ana-4f7k")
    expect(resolverRef("", null)).toBeNull()
  })
})

describe("textos para compartir", () => {
  it("arma el link personal con y sin servicio", () => {
    expect(linkPersonal("https://www.controlapps.ar/", "control-doc", "ana-4f7k")).toBe(
      "https://www.controlapps.ar/servicios/control-doc?ref=ana-4f7k",
    )
    expect(linkPersonal("https://www.controlapps.ar", null, "ana-4f7k")).toBe(
      "https://www.controlapps.ar/servicios?ref=ana-4f7k",
    )
  })

  it("los textos incluyen nombre, frase y link, sin signos de apertura", () => {
    const link = "https://www.controlapps.ar/servicios/control-doc?ref=ana-4f7k"
    for (const t of [textoWhatsApp(ficha, link), textoEstado(ficha, link)]) {
      expect(t).toContain("ControlDoc")
      expect(t).toContain(ficha.frase)
      expect(t).toContain(link)
      expect(t).not.toMatch(/[¿¡]/)
    }
  })
})
