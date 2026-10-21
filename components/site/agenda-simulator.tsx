"use client"

import { useState } from "react"
import { ArrowRight, Bot, Check, CheckCheck, Clock, Mic, Sparkles, Zap } from "lucide-react"

interface DemoMessage {
  prompt: string
  label: string
  category: string
  icon: string
  timeStr: string
}

const DEMO_PRESETS: DemoMessage[] = [
  {
    label: "🚗 Service del auto",
    prompt: "Recordame el viernes a las 18:30 llevar el auto al service",
    category: "Vehículos & Transporte",
    icon: "🚗",
    timeStr: "Viernes 18:30 hs",
  },
  {
    label: "💳 Pagar seguro / luz",
    prompt: "Recordame mañana a las 10:00 pagar el seguro y la luz",
    category: "Finanzas & Impuestos",
    icon: "💳",
    timeStr: "Mañana 10:00 hs",
  },
  {
    label: "🩺 Turno médico",
    prompt: "Avisame el lunes 14:15 turno con el traumatólogo",
    category: "Salud & Turnos",
    icon: "🩺",
    timeStr: "Lunes 14:15 hs",
  },
]

export function AgendaSimulator() {
  const [selectedPreset, setSelectedPreset] = useState<DemoMessage>(DEMO_PRESETS[0])
  const [isProcessing, setIsProcessing] = useState(false)

  function handleSelect(preset: DemoMessage) {
    if (preset.prompt === selectedPreset.prompt) return
    setIsProcessing(true)
    setTimeout(() => {
      setSelectedPreset(preset)
      setIsProcessing(false)
    }, 350)
  }

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Glow background effects */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-600/30 blur-xl opacity-70 animate-pulse" />

      {/* Main glass card */}
      <div className="relative rounded-3xl border border-white/10 bg-slate-950/90 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl">
        {/* Terminal / Chat Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-lg shadow-emerald-500/20">
                <Bot className="size-6" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-emerald-400 animate-ping" />
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-semibold text-white text-sm sm:text-base">ControlApps Agenda</h3>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/30">
                  Bot IA 24/7
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Sparkles className="size-3 text-cyan-400" />
                Voz & Texto con Groq Whisper
              </p>
            </div>
          </div>

          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400/90 bg-emerald-950/60 border border-emerald-700/40 px-2.5 py-1 rounded-full">
              100% Gratis
            </span>
          </div>
        </div>

        {/* Chat area */}
        <div className="mt-4 space-y-3 min-h-[220px]">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-600/25 border border-emerald-500/30 p-3.5 text-white shadow-md">
              <div className="flex items-center gap-2 mb-1 text-[11px] text-emerald-300 font-mono">
                <Mic className="size-3 text-emerald-400" />
                <span>Audio / Texto recibido</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                &ldquo;{selectedPreset.prompt}&rdquo;
              </p>
              <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-emerald-300/70">
                <span>10:42</span>
                <CheckCheck className="size-3 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Bot response */}
          <div className="flex justify-start">
            <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-900/90 border border-cyan-500/20 p-3.5 text-slate-100 shadow-xl">
              {isProcessing ? (
                <div className="flex items-center gap-2 py-3 px-2 text-cyan-400 text-xs font-mono">
                  <Zap className="size-4 animate-spin text-cyan-400" />
                  <span>Interpretando fecha y clasificador de IA...</span>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <Check className="size-3" />
                    </span>
                    ¡Anotado en tu Agenda de ControlApps!
                  </div>

                  <div className="space-y-1.5 rounded-xl bg-slate-950/60 p-2.5 border border-white/5 text-xs">
                    <div className="flex items-start gap-2">
                      <Clock className="size-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-slate-400">Cuándo: </span>
                        <strong className="text-white">{selectedPreset.timeStr}</strong>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs">{selectedPreset.icon}</span>
                      <div>
                        <span className="text-slate-400">Categoría: </span>
                        <span className="text-cyan-300 font-medium">{selectedPreset.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                    🔔 Te llegará la alerta puntual con el logo y el resumen de ControlApps directamente a tu WhatsApp.
                  </p>
                  <div className="mt-1.5 text-right text-[10px] text-slate-500 font-mono">
                    10:42 • 0.3s respuesta
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Preset selector pills */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
            Probá con estos ejemplos:
          </p>
          <div className="flex flex-wrap gap-2">
            {DEMO_PRESETS.map((preset) => {
              const active = preset.prompt === selectedPreset.prompt
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => handleSelect(preset)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm shadow-cyan-500/30"
                      : "bg-slate-900 text-slate-300 border border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {preset.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Live CTA button directly to the bot */}
        <div className="mt-5">
          <a
            href="https://wa.me/5493407531127?text=Hola!%20Quiero%20probar%20la%20agenda%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:opacity-95 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.99]"
          >
            <span>Probar la Agenda con tu WhatsApp (Gratis)</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-2 text-center text-[11px] text-slate-400">
            Sin suscripción, sin tarjeta y sin instalar nada.
          </p>
        </div>
      </div>
    </div>
  )
}
