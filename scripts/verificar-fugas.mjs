import { readFileSync, readdirSync, statSync } from "node:fs"
import path from "node:path"

const PROHIBIDOS = ["pinHash", "scrypt$", "ALIADOS_PRIVADO", "ALIADOS_SESSION_SECRET", "comoLoOfrezco", '"comisiones"']
const RAICES = [
  ".next/static",
  ".next/server/app/servicios",
  ".next/server/app/aliados/unirse",
  ".next/server/app/aliados/reglas",
  ".next/server/app/index.html",
]
const EXTENSIONES = new Set([".html", ".js", ".rsc", ".json", ".txt", ".map", ".segment"])

function archivos(ruta) {
  let st
  try {
    st = statSync(ruta)
  } catch {
    return []
  }
  if (st.isFile()) return [ruta]
  return readdirSync(ruta).flatMap((n) => archivos(path.join(ruta, n)))
}

let fugas = 0
let revisados = 0
for (const raiz of RAICES) {
  for (const archivo of archivos(raiz)) {
    if (!EXTENSIONES.has(path.extname(archivo))) continue
    const contenido = readFileSync(archivo, "utf8")
    revisados++
    for (const p of PROHIBIDOS) {
      if (contenido.includes(p)) {
        console.error(`FUGA: "${p}" en ${archivo}`)
        fugas++
      }
    }
  }
}

console.log(`Archivos revisados: ${revisados}`)
if (revisados === 0) {
  console.error("No se revisó ningún archivo: ¿corriste pnpm build antes?")
  process.exit(1)
}
if (fugas) process.exit(1)
console.log("Sin fugas.")
