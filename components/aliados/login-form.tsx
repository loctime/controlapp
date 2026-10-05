"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  async function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEnviando(true)
    setError(null)
    const datos = new FormData(event.currentTarget)
    try {
      const respuesta = await fetch("/api/aliados/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: datos.get("codigo"), pin: datos.get("pin") }),
      })
      if (respuesta.ok) {
        router.refresh()
        return
      }
      const cuerpo = (await respuesta.json().catch(() => null)) as { error?: string } | null
      setError(cuerpo?.error ?? "No pudimos iniciar sesión.")
    } catch {
      setError("No pudimos conectarnos. Probá de nuevo.")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form onSubmit={enviar} className="mt-8 max-w-sm space-y-4">
      <div className="space-y-2">
        <label htmlFor="codigo" className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">
          Tu código
        </label>
        <Input id="codigo" name="codigo" required autoComplete="username" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <label htmlFor="pin" className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">
          Tu PIN
        </label>
        <Input id="pin" name="pin" type="password" required autoComplete="current-password" className="h-12 rounded-2xl" />
      </div>
      {error ? (
        <p role="alert" className="text-sm font-semibold text-[rgb(150,40,40)]">
          {error}
        </p>
      ) : null}
      <Button type="submit" disabled={enviando} className="h-12 rounded-full px-6">
        {enviando ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  )
}
