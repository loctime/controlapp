import { textoPrecio } from "./index"
import type { FichaPublica, Grupo } from "./types"

export function formatearFecha(fecha: Date): string {
  const dd = String(fecha.getDate()).padStart(2, "0")
  const mm = String(fecha.getMonth() + 1).padStart(2, "0")
  return `${dd}/${mm}/${fecha.getFullYear()}`
}

export function escaparHtml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

const ESTILOS = `
  @page { size: A4; margin: 0 }
  * { box-sizing: border-box }
  body { margin: 0; font-family: 'Segoe UI', Arial, sans-serif; color: #121825; background: #f7f3ed }
  .pagina { width: 210mm; height: 297mm; padding: 16mm 16mm 12mm; page-break-after: always; position: relative; overflow: hidden }
  .pagina:last-child { page-break-after: auto }
  .marca { font-size: 12pt; letter-spacing: .2em; text-transform: uppercase; color: #66523c; font-weight: 700 }
  h1 { font-family: Georgia, serif; font-size: 30pt; line-height: 1; margin: 8mm 0 4mm; letter-spacing: -.02em }
  h2 { font-family: Georgia, serif; font-size: 17pt; margin: 8mm 0 2mm }
  h3 { font-size: 12.5pt; margin: 0 0 1mm }
  p, li { font-size: 10.5pt; line-height: 1.5; color: #383c46 }
  .tarjeta { background: #fff; border: 1px solid #ddd4c8; border-radius: 4mm; padding: 4mm 5mm; margin: 0 0 3mm }
  .precio { font-size: 9pt; letter-spacing: .12em; text-transform: uppercase; color: #66523c; font-weight: 700 }
  ul { margin: 1mm 0 0; padding-left: 5mm }
  .pie { position: absolute; left: 16mm; right: 16mm; bottom: 10mm; font-size: 9pt; color: #66523c; border-top: 1px solid #ddd4c8; padding-top: 3mm }
`

function envoltura(titulo: string, cuerpo: string): string {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${escaparHtml(titulo)}</title><style>${ESTILOS}</style></head><body>${cuerpo}</body></html>`
}

function pie(fecha: Date): string {
  return `<div class="pie">controlapps.ar/servicios &middot; Si te lo pasó una persona, decile su código cuando nos escribas. &middot; Actualizado ${formatearFecha(fecha)}</div>`
}

function lista(items: string[]): string {
  return `<ul>${items.map((i) => `<li>${escaparHtml(i)}</li>`).join("")}</ul>`
}

export function htmlFolletoServicio(f: FichaPublica, fecha: Date): string {
  const cuerpo = `<section class="pagina">
    <div class="marca">ControlApps</div>
    <h1>${escaparHtml(f.nombre)}</h1>
    <p style="font-size:13pt">${escaparHtml(f.frase)}</p>
    <p class="precio">${escaparHtml(textoPrecio(f))}</p>
    <h2>Es para vos si…</h2>${lista(f.paraVos)}
    <h2>Qué incluye</h2>${lista(f.incluye)}
    ${pie(fecha)}
  </section>`
  return envoltura(`${f.nombre} | ControlApps`, cuerpo)
}

function bloqueGrupo(grupo: Grupo, fichas: FichaPublica[]): string {
  return `<h2>${escaparHtml(grupo.titulo)}</h2>${fichas
    .map(
      (f) =>
        `<div class="tarjeta"><h3>${escaparHtml(f.nombre)}</h3><p>${escaparHtml(f.frase)}</p><div class="precio">${escaparHtml(
          textoPrecio(f),
        )}</div></div>`,
    )
    .join("")}`
}

export function htmlFolletoGeneral(grupos: { grupo: Grupo; fichas: FichaPublica[] }[], fecha: Date): string {
  const portada = `<section class="pagina">
    <div class="marca">ControlApps</div>
    <h1>Soluciones concretas para problemas del día a día.</h1>
    <p style="font-size:13pt">Contanos qué te frena y te decimos cuál de estas soluciones te sirve. Si ninguna encaja, la armamos a tu medida.</p>
    ${grupos
      .slice(0, 1)
      .map((g) => bloqueGrupo(g.grupo, g.fichas))
      .join("")}
    ${pie(fecha)}
  </section>`
  const resto = grupos.slice(1)
  const segunda = resto.length
    ? `<section class="pagina">${resto.map((g) => bloqueGrupo(g.grupo, g.fichas)).join("")}${pie(fecha)}</section>`
    : ""
  return envoltura("Servicios | ControlApps", portada + segunda)
}
