import { mkdirSync } from "node:fs"
import path from "node:path"
import { chromium } from "playwright-core"
import { fichasPorGrupo, fichasPublicadas } from "@/lib/catalogo"
import { htmlFolletoGeneral, htmlFolletoServicio } from "@/lib/catalogo/folletos"

const salida = path.resolve(process.cwd(), "public", "folletos")
mkdirSync(salida, { recursive: true })

async function main() {
  const fecha = new Date()
  // Usa el Chrome instalado en el sistema; no hace falta bajar un navegador aparte.
  const browser = await chromium.launch({ channel: "chrome" })
  const page = await browser.newPage()

  async function pdf(html: string, archivo: string) {
    await page.setContent(html, { waitUntil: "load" })
    await page.pdf({ path: path.join(salida, archivo), format: "A4", printBackground: true, preferCSSPageSize: true })
    console.log(`OK ${archivo}`)
  }

  await pdf(htmlFolletoGeneral(fichasPorGrupo(), fecha), "folleto-general.pdf")
  for (const f of fichasPublicadas()) await pdf(htmlFolletoServicio(f, fecha), `${f.slug}.pdf`)

  await browser.close()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
