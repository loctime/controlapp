import { hashPin } from "@/lib/aliados/auth"
import { generarCodigo, generarPin } from "@/lib/aliados/codigo"

const nombre = process.argv.slice(2).join(" ").trim()
if (!nombre) {
  console.error('Uso: pnpm aliado:alta "Nombre Apellido"')
  process.exit(1)
}

const codigo = generarCodigo(nombre)
const pin = generarPin()

console.log("\nAlta de aliado — guardá el PIN ahora, no se vuelve a mostrar.\n")
console.log(`Nombre : ${nombre}`)
console.log(`Código : ${codigo}`)
console.log(`PIN    : ${pin}\n`)
console.log("Agregá esta entrada a la lista aliados de la variable ALIADOS_PRIVADO (Vercel y .env.local):\n")
console.log(JSON.stringify({ codigo, nombre, pinHash: hashPin(pin) }, null, 2))
console.log("\nDespués redesplegá para que tome el cambio y pasale al aliado su código y su PIN.\n")
