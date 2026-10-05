export function crearLimite(max: number, ventanaMs: number) {
  const fallos = new Map<string, number[]>()

  function vigentes(clave: string, ahora: number): number[] {
    const lista = (fallos.get(clave) ?? []).filter((t) => ahora - t < ventanaMs)
    if (lista.length) fallos.set(clave, lista)
    else fallos.delete(clave)
    return lista
  }

  return {
    bloqueado(clave: string, ahora: number): boolean {
      return vigentes(clave, ahora).length >= max
    },
    registrarFallo(clave: string, ahora: number): void {
      fallos.set(clave, [...vigentes(clave, ahora), ahora])
    },
    limpiar(clave: string): void {
      fallos.delete(clave)
    },
  }
}
