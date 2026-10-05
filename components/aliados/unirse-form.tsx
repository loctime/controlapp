"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function UnirseForm({ email }: { email: string }) {
  const [enviado, setEnviado] = useState(false)

  function enviar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const datos = new FormData(event.currentTarget)
    const campo = (k: string) => String(datos.get(k) || "").trim() || "-"
    const asunto = encodeURIComponent(`Solicitud de aliado - ${campo("nombre")}`)
    const cuerpo = encodeURIComponent(
      [
        `Nombre: ${campo("nombre")}`,
        `Contacto (WhatsApp o mail): ${campo("contacto")}`,
        "",
        "Cómo pienso ofrecerlo:",
        campo("como"),
        "",
        "Acepto las reglas del programa de aliados.",
      ].join("\n"),
    )
    window.location.href = `mailto:${email}?subject=${asunto}&body=${cuerpo}`
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="mt-8 flex gap-3 rounded-[1.6rem] border border-[rgba(34,30,24,0.12)] bg-[rgba(255,255,255,0.68)] p-6">
        <CheckCircle2 className="mt-1 size-5 shrink-0 text-[rgb(102,82,60)]" />
        <p className="text-base font-medium leading-7">
          Se abrió tu correo con la solicitud lista. Enviala y te respondemos cuando la revisemos. Si no se abrió, escribinos a{" "}
          <strong>{email}</strong>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={enviar} className="mt-8 max-w-xl space-y-4">
      <div className="space-y-2">
        <label htmlFor="nombre" className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">
          Nombre
        </label>
        <Input id="nombre" name="nombre" required className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <label htmlFor="contacto" className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">
          WhatsApp o mail
        </label>
        <Input id="contacto" name="contacto" required className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <label htmlFor="como" className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(102,82,60)]">
          Cómo pensás ofrecerlo
        </label>
        <Textarea
          id="como"
          name="como"
          rows={4}
          className="rounded-2xl"
          placeholder="Por ejemplo: conozco dueños de comercios y empresas de mi ciudad."
        />
      </div>
      <label className="flex items-start gap-3 text-sm font-medium leading-6">
        <input type="checkbox" name="reglas" required className="mt-1" />
        <span>
          Leí y acepto las{" "}
          <Link href="/aliados/reglas" className="underline underline-offset-4" target="_blank">
            reglas del programa
          </Link>
          .
        </span>
      </label>
      <Button type="submit" className="h-12 rounded-full px-6">
        Enviar solicitud
      </Button>
    </form>
  )
}
