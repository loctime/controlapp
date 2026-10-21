"use client"

import { useState } from "react"
import {
  ArrowRight,
  Bot,
  Check,
  CheckCheck,
  Clock,
  FileCheck2,
  FileText,
  HardHat,
  Mic,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react"

/* =========================================================================
   TYPES & PRESETS
========================================================================= */

interface HabilitacionPreset {
  id: string
  label: string
  userText: string
  fileChip: string
  badge: string
  badgeColor: string
  detailTitle: string
  items: string[]
  saving: string
}

interface AgendaPreset {
  id: string
  label: string
  prompt: string
  category: string
  icon: string
  timeStr: string
}

const HABILITACIONES_PRESETS: HabilitacionPreset[] = [
  {
    id: "art",
    label: "📄 Nómina ART + No Repetición",
    userText:
      "Fernando, te mando la ART con cláusula de no repetición a favor de YPF para los 6 choferes que suben a Añelo mañana.",
    fileChip: "Nomina_ART_YPF_Octubre2026.pdf • 1.4 MB",
    badge: "APROBADO EN YPF / AESA",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    detailTitle: "Ingreso autorizado a yacimiento:",
    items: [
      "6 choferes habilitados en el sistema sin observaciones",
      "Cláusula de no repetición cruzada y validada",
      "Pase verde directo en garita de control",
    ],
    saving: "Ahorraste 4 horas de carga manual frente a la PC",
  },
  {
    id: "f931",
    label: "🧾 F.931 AFIP + Ticket Pago",
    userText:
      "Buenas! Adjunto el F.931 de AFIP y el ticket de pago bancario de este mes para la auditoría de contratistas de SACDE.",
    fileChip: "F931_AFIP_Ticket_Pago_Oct2026.pdf • 820 KB",
    badge: "HOMOLOGADO EN SACDE",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    detailTitle: "Auditoría laboral completada:",
    items: [
      "Cargas sociales y ticket bancario conciliados",
      "Libre deuda y constancia de cumplimiento vigente",
      "Sin retenciones ni bloqueos en certificados de obra",
    ],
    saving: "Aprobación express en el mismo día",
  },
  {
    id: "medicos",
    label: "🩺 Aptos Médicos + Manejo 4x4",
    userText:
      "Fernando, acá van los certificados de aptitud física periódica y las credenciales de manejo defensivo para las camionetas.",
    fileChip: "Aptitud_Medica_ManejoDefensivo.pdf • 2.1 MB",
    badge: "CAMIONETAS CON PASE VERDE",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    detailTitle: "Personal y flota autorizados:",
    items: [
      "Exámenes periódicos en regla (Res. SRT 37/2010)",
      "Curso de manejo defensivo en yacimiento acreditado",
      "Flota 4x4 habilitada para circular en zona de pozos",
    ],
    saving: "Cero demoras ni rechazos en el control vehicular",
  },
]

const AGENDA_PRESETS: AgendaPreset[] = [
  {
    id: "auto",
    label: "🚗 Service del auto",
    prompt: "Recordame el viernes a las 18:30 llevar el auto al service",
    category: "Vehículos & Transporte",
    icon: "🚗",
    timeStr: "Viernes 18:30 hs",
  },
  {
    id: "pagos",
    label: "💳 Pagar seguro / luz",
    prompt: "Recordame mañana a las 10:00 pagar el seguro y la luz",
    category: "Finanzas & Impuestos",
    icon: "💳",
    timeStr: "Mañana 10:00 hs",
  },
  {
    id: "medico",
    label: "🩺 Turno médico",
    prompt: "Avisame el lunes 14:15 turno con el traumatólogo",
    category: "Salud & Turnos",
    icon: "🩺",
    timeStr: "Lunes 14:15 hs",
  },
]

/* =========================================================================
   COMPONENT: AgendaSimulator (Interactive 360 Dual Switcher)
========================================================================= */

export function AgendaSimulator() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isRotating, setIsRotating] = useState(false)

  // Habilitaciones State
  const [selectedHabilitacion, setSelectedHabilitacion] = useState<HabilitacionPreset>(
    HABILITACIONES_PRESETS[0]
  )
  const [isProcessingHab, setIsProcessingHab] = useState(false)

  // Agenda State
  const [selectedAgenda, setSelectedAgenda] = useState<AgendaPreset>(AGENDA_PRESETS[0])
  const [isProcessingAgenda, setIsProcessingAgenda] = useState(false)

  function handleSelectHabilitacion(preset: HabilitacionPreset) {
    if (preset.id === selectedHabilitacion.id) return
    setIsProcessingHab(true)
    setTimeout(() => {
      setSelectedHabilitacion(preset)
      setIsProcessingHab(false)
    }, 320)
  }

  function handleSelectAgenda(preset: AgendaPreset) {
    if (preset.id === selectedAgenda.id) return
    setIsProcessingAgenda(true)
    setTimeout(() => {
      setSelectedAgenda(preset)
      setIsProcessingAgenda(false)
    }, 320)
  }

  function trigger360Flip() {
    setIsRotating(true)
    setIsFlipped((prev) => !prev)
    setTimeout(() => {
      setIsRotating(false)
    }, 700)
  }

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Top Futuristic Switcher & 360 Trigger */}
      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        {/* Mode Selector Tabs */}
        <div className="inline-flex rounded-2xl bg-slate-900/90 p-1 border border-white/10 shadow-lg backdrop-blur-xl">
          <button
            type="button"
            onClick={() => {
              if (isFlipped) trigger360Flip()
            }}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              !isFlipped
                ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <HardHat className="size-3.5" />
            <span>Habilitaciones Vaca Muerta</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (!isFlipped) trigger360Flip()
            }}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
              isFlipped
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Bot className="size-3.5" />
            <span>Agenda IA 24/7</span>
          </button>
        </div>

        {/* 360 Rotate Trigger Button */}
        <button
          type="button"
          onClick={trigger360Flip}
          title="Girar 360° para ver la otra solución"
          className="group flex items-center gap-1.5 rounded-2xl border border-cyan-500/40 bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-cyan-300 shadow-lg backdrop-blur-xl transition-all hover:border-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-100 active:scale-95"
        >
          <RotateCw
            className={`size-3.5 transition-transform duration-700 ${
              isRotating ? "rotate-[360deg]" : "group-hover:rotate-180"
            }`}
          />
          <span className="hidden sm:inline font-mono">Girar 360°</span>
        </button>
      </div>

      {/* 3D Perspective Flip Container */}
      <div
        className="relative w-full"
        style={{
          perspective: "1400px",
        }}
      >
        {/* Dynamic Glow aura behind the active card */}
        <div
          className={`absolute -inset-1 rounded-3xl blur-xl opacity-75 transition-all duration-700 pointer-events-none ${
            !isFlipped
              ? "bg-gradient-to-r from-emerald-500/35 via-teal-500/25 to-amber-500/25 animate-pulse"
              : "bg-gradient-to-r from-cyan-500/35 via-blue-600/25 to-purple-600/25 animate-pulse"
          }`}
        />

        {/* 3D Flipper element */}
        <div
          className="relative w-full transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* =========================================================================
              SIDE A: Habilitaciones Vaca Muerta por WhatsApp (Front Face)
          ========================================================================= */}
          <div
            className={`w-full rounded-3xl border border-white/10 bg-slate-950/95 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl flex flex-col justify-between min-h-[570px] ${
              isFlipped ? "pointer-events-none" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20">
                    <Truck className="size-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-emerald-400 animate-ping" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm sm:text-base">
                      Habilitaciones Vaca Muerta
                    </h3>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-500/30">
                      WhatsApp Express
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="size-3 text-emerald-400" />
                    YPF • AESA • SACDE • TECHINT
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400/90 bg-emerald-950/60 border border-emerald-700/40 px-2.5 py-1 rounded-full">
                  Pase Verde
                </span>
              </div>
            </div>

            {/* Chat Simulation Area */}
            <div className="mt-4 space-y-3 min-h-[220px]">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[90%] rounded-2xl rounded-tr-sm bg-emerald-700/25 border border-emerald-500/35 p-3.5 text-white shadow-md">
                  <div className="flex items-center gap-1.5 mb-1 text-[11px] text-emerald-300 font-mono">
                    <FileText className="size-3 text-emerald-400" />
                    <span>Contratista en base / yacimiento</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    &ldquo;{selectedHabilitacion.userText}&rdquo;
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/70 border border-emerald-600/30 px-2 py-1 text-[11px] text-emerald-200 font-mono">
                    <FileCheck2 className="size-3 text-emerald-400" />
                    <span>{selectedHabilitacion.fileChip}</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-end gap-1 text-[10px] text-emerald-300/70">
                    <span>10:42</span>
                    <CheckCheck className="size-3 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Assistant Response */}
              <div className="flex justify-start">
                <div className="max-w-[95%] rounded-2xl rounded-tl-sm bg-slate-900/90 border border-emerald-500/30 p-3.5 text-slate-100 shadow-xl">
                  {isProcessingHab ? (
                    <div className="flex items-center gap-2 py-3 px-2 text-emerald-400 text-xs font-mono">
                      <Zap className="size-4 animate-spin text-emerald-400" />
                      <span>Validando nómina y subiendo al portal de la operadora...</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                            <Check className="size-3" />
                          </span>
                          <span>Habilitación cargada en sistema</span>
                        </div>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider ${selectedHabilitacion.badgeColor}`}
                        >
                          {selectedHabilitacion.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5 rounded-xl bg-slate-950/70 p-2.5 border border-white/5 text-xs">
                        <p className="font-semibold text-white text-[11px]">
                          {selectedHabilitacion.detailTitle}
                        </p>
                        <ul className="space-y-1 text-slate-300">
                          {selectedHabilitacion.items.map((it, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-400 text-[10px] mt-0.5">✔</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-emerald-300/90 font-mono flex items-center gap-1">
                          <Zap className="size-3 text-emerald-400" />
                          {selectedHabilitacion.saving}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500">
                          10:43 • Listo para ingresar
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Presets Selector Pills */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Probá el flujo con este tipo de trámite:
              </p>
              <div className="flex flex-wrap gap-2">
                {HABILITACIONES_PRESETS.map((preset) => {
                  const active = preset.id === selectedHabilitacion.id
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectHabilitacion(preset)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        active
                          ? "bg-emerald-500/25 text-emerald-200 border border-emerald-400/60 shadow-sm shadow-emerald-500/30"
                          : "bg-slate-900 text-slate-300 border border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {preset.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* CTA Button directly to Fernando WhatsApp */}
            <div className="mt-5">
              <a
                href="https://wa.me/5493364524758?text=Hola%20Fernando,%20vi%20la%20web%20de%20ControlApps%20y%20quiero%20consultar%20por%20la%20carga%20de%20habilitaciones%20para%20Vaca%20Muerta"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:opacity-95 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.99]"
              >
                <span>Mandar Documentos por WhatsApp (+54 9 336 452-4758)</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-2 text-center text-[11px] text-slate-400">
                Atención directa por Fernando Vidal • Respuesta inmediata para contratistas.
              </p>
            </div>
          </div>

          {/* =========================================================================
              SIDE B: ControlApps Agenda IA 24/7 (Back Face, rotated 180deg)
          ========================================================================= */}
          <div
            className={`w-full rounded-3xl border border-white/10 bg-slate-950/95 p-4 sm:p-6 shadow-2xl backdrop-blur-2xl flex flex-col justify-between min-h-[570px] absolute inset-0 ${
              !isFlipped ? "pointer-events-none" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-400 text-white shadow-lg shadow-cyan-500/20">
                    <Bot className="size-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-cyan-400 animate-ping" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm sm:text-base">
                      ControlApps Agenda
                    </h3>
                    <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-300 border border-cyan-500/30">
                      Bot IA 24/7
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Sparkles className="size-3 text-cyan-400" />
                    Voz & Texto con Groq Whisper
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400/90 bg-cyan-950/60 border border-cyan-700/40 px-2.5 py-1 rounded-full">
                  100% Gratis
                </span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="mt-4 space-y-3 min-h-[220px]">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-cyan-600/25 border border-cyan-500/30 p-3.5 text-white shadow-md">
                  <div className="flex items-center gap-2 mb-1 text-[11px] text-cyan-300 font-mono">
                    <Mic className="size-3 text-cyan-400" />
                    <span>Audio / Texto recibido</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    &ldquo;{selectedAgenda.prompt}&rdquo;
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-cyan-300/70">
                    <span>10:42</span>
                    <CheckCheck className="size-3 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex justify-start">
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-900/90 border border-cyan-500/25 p-3.5 text-slate-100 shadow-xl">
                  {isProcessingAgenda ? (
                    <div className="flex items-center gap-2 py-3 px-2 text-cyan-400 text-xs font-mono">
                      <Zap className="size-4 animate-spin text-cyan-400" />
                      <span>Interpretando fecha y clasificador de IA...</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-300 mb-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                          <Check className="size-3" />
                        </span>
                        <span>Anotado en tu Agenda de ControlApps</span>
                      </div>

                      <div className="space-y-1.5 rounded-xl bg-slate-950/60 p-2.5 border border-white/5 text-xs">
                        <div className="flex items-start gap-2">
                          <Clock className="size-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <div>
                            <span className="text-slate-400">Cuándo: </span>
                            <strong className="text-white">{selectedAgenda.timeStr}</strong>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xs">{selectedAgenda.icon}</span>
                          <div>
                            <span className="text-slate-400">Categoría: </span>
                            <span className="text-cyan-300 font-medium">
                              {selectedAgenda.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                        🔔 Te llegará la alerta puntual con el resumen de ControlApps directamente a tu WhatsApp.
                      </p>
                      <div className="mt-1.5 text-right text-[10px] text-slate-500 font-mono">
                        10:42 • 0.3s respuesta
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Preset Selector Pills */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Probá con estos ejemplos:
              </p>
              <div className="flex flex-wrap gap-2">
                {AGENDA_PRESETS.map((preset) => {
                  const active = preset.id === selectedAgenda.id
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectAgenda(preset)}
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

            {/* Live CTA Button */}
            <div className="mt-5">
              <a
                href="https://wa.me/5493407531127?text=Hola!%20Quiero%20probar%20la%20agenda%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:opacity-95 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.99]"
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
      </div>
    </div>
  )
}
