"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CopiarBoton({ texto, etiqueta = "Copiar" }: { texto: string; etiqueta?: string }) {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      window.prompt("Copiá el texto:", texto)
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,30,24,0.16)] px-4 py-2 text-sm font-semibold hover:bg-white"
    >
      {copiado ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copiado ? "Copiado" : etiqueta}
    </button>
  )
}
