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
    <div className="rounded-[2rem] border border-[rgba(211,200,186,0.18)] bg-[linear-gradient(180deg,_rgba(22,31,47,0.98),_rgba(16,23,36,0.98))] p-6 text-white shadow-[0_28px_70px_rgba(8,12,20,0.3)] md:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(207,188,165,0.78)]">Contacto</p>
          <h3 className="font-display mt-3 text-[2.4rem] font-semibold leading-[0.95] tracking-[-0.04em] text-[rgb(249,247,242)]">
            Contanos qué parte del trabajo hoy te está frenando.
          </h3>
        </div>
        <div className="hidden rounded-full border border-[rgba(207,188,165,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[rgba(229,220,208,0.76)] md:block">
          Respuesta inicial
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgba(207,188,165,0.78)]" htmlFor="name">
              Nombre
            </label>
            <Input
              id="name"
              name="name"
              required
              className="h-12 rounded-2xl border-[rgba(207,188,165,0.18)] bg-[rgba(255,255,255,0.06)] px-4 text-[15px] font-semibold text-[rgb(248,246,241)] shadow-none placeholder:text-[rgba(229,220,208,0.48)]"
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgba(207,188,165,0.78)]" htmlFor="company">
              Empresa
            </label>
            <Input
              id="company"
              name="company"
              className="h-12 rounded-2xl border-[rgba(207,188,165,0.18)] bg-[rgba(255,255,255,0.06)] px-4 text-[15px] font-semibold text-[rgb(248,246,241)] shadow-none placeholder:text-[rgba(229,220,208,0.48)]"
              placeholder="Nombre de la empresa"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgba(207,188,165,0.78)]" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 rounded-2xl border-[rgba(207,188,165,0.18)] bg-[rgba(255,255,255,0.06)] px-4 text-[15px] font-semibold text-[rgb(248,246,241)] shadow-none placeholder:text-[rgba(229,220,208,0.48)]"
            placeholder="tu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-[0.24em] text-[rgba(207,188,165,0.78)]" htmlFor="challenge">
            Problema o flujo a resolver
          </label>
          <Textarea
            id="challenge"
            name="challenge"
            required
            className="min-h-36 rounded-[1.5rem] border-[rgba(207,188,165,0.18)] bg-[rgba(255,255,255,0.06)] px-4 py-3 text-[15px] font-semibold text-[rgb(248,246,241)] shadow-none placeholder:text-[rgba(229,220,208,0.48)]"
            placeholder="Ejemplo: hoy coordinamos pedidos, aprobaciones y seguimiento entre WhatsApp, planillas y llamadas."
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(207,188,165,0.12)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm font-medium leading-6 text-[rgba(233,228,221,0.8)]">
            El formulario prepara un correo con tu contexto para iniciar la conversación de forma directa.
          </p>
          <Button
            type="submit"
            className="h-12 rounded-full border border-[rgba(207,188,165,0.2)] bg-[rgb(241,235,226)] px-6 text-sm font-semibold tracking-[0.02em] text-[rgb(20,29,46)] shadow-none hover:bg-[rgb(246,242,236)]"
          >
            Iniciar conversación
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </form>

      {isSubmitted ? (
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-[rgba(112,149,124,0.26)] bg-[rgba(55,82,64,0.24)] px-4 py-3 text-sm text-[rgb(220,237,223)]">
          <CheckCircle2 className="size-4" />
          Se abrió tu cliente de correo con el mensaje preparado.
        </div>
      ) : null}
    </div>
  )
}
