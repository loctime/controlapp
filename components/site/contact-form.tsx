"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type ContactFormProps = {
  email: string
}

export function ContactForm({ email }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") || "").trim()
    const company = String(formData.get("company") || "").trim()
    const emailAddress = String(formData.get("email") || "").trim()
    const challenge = String(formData.get("challenge") || "").trim()

    const subject = encodeURIComponent(`Consulta desde la web - ${company || name || "ControlApps"}`)
    const body = encodeURIComponent(
      [
        `Nombre: ${name || "-"}`,
        `Empresa: ${company || "-"}`,
        `Email: ${emailAddress || "-"}`,
        "",
        "Necesidad o problema:",
        challenge || "-",
      ].join("\n"),
    )

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  return (
    <div className="rounded-[2rem] border border-[rgba(18,26,44,0.18)] bg-[linear-gradient(180deg,_rgba(255,255,255,1),_rgba(250,247,242,1))] p-6 shadow-[0_34px_90px_rgba(15,23,42,0.18)] ring-1 ring-[rgba(255,255,255,0.5)] md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(114,84,51)]">
            Contacto
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[rgb(15,23,42)]">
            Contanos qué parte del trabajo hoy te está frenando.
          </h3>
        </div>
        <div className="hidden rounded-full border border-[rgba(18,26,44,0.14)] bg-[rgba(255,255,255,0.75)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[rgb(84,60,36)] md:block">
          Respuesta inicial
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(84,60,36)]" htmlFor="name">
              Nombre
            </label>
            <Input
              id="name"
              name="name"
              required
              className="h-12 rounded-2xl border-[rgba(18,26,44,0.22)] bg-white px-4 text-[15px] font-semibold text-[rgb(15,23,42)] shadow-[0_10px_20px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.7)] placeholder:text-[rgb(92,105,128)]"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(84,60,36)]" htmlFor="company">
              Empresa
            </label>
            <Input
              id="company"
              name="company"
              className="h-12 rounded-2xl border-[rgba(18,26,44,0.22)] bg-white px-4 text-[15px] font-semibold text-[rgb(15,23,42)] shadow-[0_10px_20px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.7)] placeholder:text-[rgb(92,105,128)]"
              placeholder="Nombre de la empresa"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(84,60,36)]" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 rounded-2xl border-[rgba(18,26,44,0.22)] bg-white px-4 text-[15px] font-semibold text-[rgb(15,23,42)] shadow-[0_10px_20px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.7)] placeholder:text-[rgb(92,105,128)]"
            placeholder="tu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgb(84,60,36)]" htmlFor="challenge">
            Problema o flujo a resolver
          </label>
          <Textarea
            id="challenge"
            name="challenge"
            required
            className="min-h-36 rounded-[1.5rem] border-[rgba(18,26,44,0.22)] bg-white px-4 py-3 text-[15px] font-semibold text-[rgb(15,23,42)] shadow-[0_10px_20px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.7)] placeholder:text-[rgb(92,105,128)]"
            placeholder="Ejemplo: hoy coordinamos pedidos, aprobaciones y seguimiento entre WhatsApp, planillas y llamadas."
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(18,26,44,0.08)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm font-medium leading-6 text-[rgb(28,41,64)]">
            El formulario prepara un correo con tu contexto para iniciar la conversación de forma directa.
          </p>
          <Button
            type="submit"
            className="h-12 rounded-full border border-[rgba(109,80,47,0.38)] bg-[rgb(22,35,62)] px-6 text-sm font-semibold tracking-[0.02em] text-white shadow-[0_20px_42px_rgba(15,23,42,0.2)] hover:bg-[rgb(31,48,83)]"
          >
            Iniciar conversación
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </form>

      {isSubmitted ? (
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-[rgba(48,112,78,0.18)] bg-[rgba(236,244,239,0.92)] px-4 py-3 text-sm text-[rgb(39,88,61)]">
          <CheckCircle2 className="size-4" />
          Se abrió tu cliente de correo con el mensaje preparado.
        </div>
      ) : null}
    </div>
  )
}
