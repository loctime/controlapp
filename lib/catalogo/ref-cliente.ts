import { normalizarRef } from "./contacto"

export const REF_STORAGE_KEY = "aliado_ref"

type StorageMinimo = Pick<Storage, "getItem" | "setItem">

export function resolverRef(search: string, storage: StorageMinimo | null): string | null {
  const desdeUrl = normalizarRef(new URLSearchParams(search).get("ref"))
  if (desdeUrl) {
    try {
      storage?.setItem(REF_STORAGE_KEY, desdeUrl)
    } catch {
      // storage bloqueado: seguimos solo con el ref de la URL
    }
    return desdeUrl
  }
  try {
    return normalizarRef(storage?.getItem(REF_STORAGE_KEY))
  } catch {
    return null
  }
}
