"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { ArrowUpRight, CheckCircle2, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type ContactFormProps = {
  email: string
  whatsappNumber?: string
}

export function ContactForm({ email, whatsappNumber = "5493364524758" }: ContactFormProps) {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [challenge, setChallenge] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSendWhatsApp() {
    const text = [
      "👋 Hola Fernando! Te contacto desde la web de ControlApps.",
      `*Nombre:* ${name || "-"}`,
      `*Empresa:* ${company || "-"}`,
      `*Email:* ${emailAddress || "-"}`,
      "",
      `*Consulta / Necesidad:*`,
      challenge || "Quisiera información sobre las soluciones de ControlApps.",
    ].join("\n")

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setIsSubmitted(true)
  }

  function handleSendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Consulta ControlApps - ${company || name || "Nuevo Contacto"}`)
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
    <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-white shadow-2xl backdrop-blur-2xl sm:p-8">
      {/* Glow border corner */}
      <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">Canal directo</span>
          <h3 className="font-display mt-2 text-2xl sm:text-3xl font-semibold leading-tight text-white">
            Escribile a Fernando o envianos tu necesidad
          </h3>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3 py-1 text-[11px] font-mono text-emerald-300">
          <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
          Online
        </span>
      </div>

      {isSubmitted ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
            <CheckCircle2 className="size-6" />
          </div>
          <h4 className="text-lg font-semibold text-white">¡Mensaje preparado!</h4>
          <p className="mt-2 text-sm text-slate-300">
            Gracias por escribirnos. Te responderemos a la brevedad por WhatsApp o correo.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-4 text-xs font-mono text-cyan-400 hover:underline"
          >
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <form onSubmit={handleSendEmail} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-slate-400" htmlFor="name">
                Tu nombre
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-11 rounded-xl border-white/10 bg-slate-900/80 px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400"
                placeholder="Ej. Juan Pérez"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-slate-400" htmlFor="company">
                Empresa
              </label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-11 rounded-xl border-white/10 bg-slate-900/80 px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400"
                placeholder="Nombre de empresa"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-slate-400" htmlFor="email">
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="h-11 rounded-xl border-white/10 bg-slate-900/80 px-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400"
              placeholder="tu@empresa.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-slate-400" htmlFor="challenge">
              ¿Qué proceso o sistema necesitás ordenar?
            </label>
            <Textarea
              id="challenge"
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              rows={3}
              className="rounded-xl border-white/10 bg-slate-900/80 p-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400"
              placeholder="Contanos brevemente qué circuito operativo querés resolver o qué te gustaría automatizar..."
            />
          </div>

          {/* Dual Action Buttons: Instant WhatsApp or Email */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:opacity-95 active:scale-[0.99]"
            >
              <MessageCircle className="size-4" />
              <span>Enviar directo por WhatsApp</span>
            </button>

            <Button
              type="submit"
              variant="outline"
              className="rounded-xl border-white/15 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white px-4 py-3 text-sm"
            >
              <Send className="size-4 mr-1.5 text-slate-400" />
              <span>Enviar por Mail</span>
            </Button>
          </div>

          <p className="text-center text-[11px] text-slate-400 pt-1">
            Respuesta inmediata. También podés escribirnos al WhatsApp directo: <strong className="text-emerald-400">+54 9 336 452-4758</strong>
          </p>
        </form>
      )}
    </div>
  )
}
