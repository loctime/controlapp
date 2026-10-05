"use client"

import { useRouter } from "next/navigation"

export function SalirBoton() {
  const router = useRouter()

  async function salir() {
    await fetch("/api/aliados/salir", { method: "POST" })
    router.refresh()
  }

  return (
    <button type="button" onClick={salir} className="text-sm font-semibold underline underline-offset-4">
      Salir
    </button>
  )
}
