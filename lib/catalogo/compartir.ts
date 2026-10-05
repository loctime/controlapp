import type { FichaPublica } from "./types"

export function linkPersonal(base: string, slug: string | null, codigo: string): string {
  const ruta = slug ? `/servicios/${slug}` : "/servicios"
  return `${base.replace(/\/$/, "")}${ruta}?ref=${codigo}`
}

export function textoWhatsApp(f: FichaPublica, link: string): string {
  return [
    `Hola! Te paso algo que te puede servir: *${f.nombre}*.`,
    f.frase,
    "",
    `Mirá de qué se trata acá: ${link}`,
  ].join("\n")
}

export function textoEstado(f: FichaPublica, link: string): string {
  return `${f.nombre}: ${f.frase} Más info: ${link}`
}
