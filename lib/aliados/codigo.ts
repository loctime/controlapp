import { randomInt } from "node:crypto"

const ALFABETO = "abcdefghjkmnpqrstuvwxyz23456789"

function aleatorio(largo: number): string {
  return Array.from({ length: largo }, () => ALFABETO[randomInt(ALFABETO.length)]).join("")
}

export function slugNombre(nombre: string): string {
  const base = nombre
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 20)
    .replace(/-+$/g, "")
  return base || "aliado"
}

export function generarCodigo(nombre: string): string {
  return `${slugNombre(nombre)}-${aleatorio(4)}`
}

export function generarPin(): string {
  return aleatorio(8)
}
