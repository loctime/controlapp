"use client"

import { useEffect, useRef, useState } from "react"
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
  Pause,
  Play,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react"

/* =========================================================================
   TYPES & PRESETS (Sin referencias personales, 100% marca ControlApps)
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
      "Hola equipo, te mando la ART con cláusula de no repetición a favor de YPF para los 6 choferes que suben a Añelo mañana.",
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
      "Buen día ControlApps, acá van los certificados de aptitud física periódica y las credenciales de manejo defensivo para las camionetas.",
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
   COMPONENT: AgendaSimulator (Interactive 3D Pop-Out Simulator)
========================================================================= */

export function AgendaSimulator() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0) // 0 to 100%

  // 3D Parallax Tilt state (tracked via mouse movement)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, isHovered: false })
  const containerRef = useRef<HTMLDivElement>(null)

  // Current indices for cycling cases
  const [habIndex, setHabIndex] = useState(0)
  const [agendaIndex, setAgendaIndex] = useState(0)

  const selectedHabilitacion = HABILITACIONES_PRESETS[habIndex]
  const selectedAgenda = AGENDA_PRESETS[agendaIndex]

  const [isProcessingHab, setIsProcessingHab] = useState(false)
  const [isProcessingAgenda, setIsProcessingAgenda] = useState(false)

  // Temporizador automático de 10 segundos para rotación 3D
  useEffect(() => {
    if (!isAutoPlaying) return

    const intervalTime = 100 // cada 100ms
    const step = 100 / (10000 / intervalTime) // 1% cada 100ms = 100% en 10s

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          trigger360Flip()
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isAutoPlaying, isFlipped, habIndex, agendaIndex])

  function trigger360Flip() {
    setIsRotating(true)
    setIsFlipped((prev) => {
      const nextFlipped = !prev
      if (nextFlipped) {
        setAgendaIndex((i) => (i + 1) % AGENDA_PRESETS.length)
      } else {
        setHabIndex((i) => (i + 1) % HABILITACIONES_PRESETS.length)
      }
      return nextFlipped
    })
    setProgress(0)
    setTimeout(() => {
      setIsRotating(false)
    }, 900)
  }

  function handleSelectHabilitacion(index: number) {
    if (index === habIndex) return
    setIsProcessingHab(true)
    setTimeout(() => {
      setHabIndex(index)
      setIsProcessingHab(false)
    }, 280)
  }

  function handleSelectAgenda(index: number) {
    if (index === agendaIndex) return
    setIsProcessingAgenda(true)
    setTimeout(() => {
      setAgendaIndex(index)
      setIsProcessingAgenda(false)
    }, 280)
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({
      rx: -y * 14,
      ry: x * 14,
      isHovered: true,
    })
  }

  function handleMouseEnter() {
    setIsAutoPlaying(false)
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0, isHovered: false })
    setIsAutoPlaying(true)
  }

  // Calculate dynamic 3D transform that pops forward out of the screen
  const currentBaseY = isFlipped ? 180 : 0
  const transformStyle = isRotating
    ? `rotateY(${currentBaseY}deg) translateZ(120px) scale(1.06) rotateX(4deg)`
    : tilt.isHovered
    ? `rotateY(${currentBaseY + tilt.ry}deg) rotateX(${tilt.rx}deg) translateZ(45px)`
    : `rotateY(${currentBaseY}deg) translateZ(25px)`

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-full sm:max-w-lg select-none px-0.5"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Controls & Automatic 10s Timer Banner */}
      <div className="mb-3 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Mode Selector Tabs (Responsive labels for narrow screens) */}
          <div className="inline-flex rounded-2xl bg-slate-900/90 p-1 border border-white/10 shadow-lg backdrop-blur-xl">
            <button
              type="button"
              onClick={() => {
                if (isFlipped) trigger360Flip()
              }}
              className={`flex items-center gap-1 sm:gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold transition-all ${
                !isFlipped
                  ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <HardHat className="size-3.5 shrink-0" />
              <span className="sm:hidden">Habilitaciones</span>
              <span className="hidden sm:inline">Habilitaciones Vaca Muerta</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (!isFlipped) trigger360Flip()
              }}
              className={`flex items-center gap-1 sm:gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold transition-all ${
                isFlipped
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bot className="size-3.5 shrink-0" />
              <span className="sm:hidden">Agenda IA</span>
              <span className="hidden sm:inline">Agenda IA 24/7</span>
            </button>
          </div>

          {/* 3D Action & Play/Pause Button */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              title={isAutoPlaying ? "Pausar rotación automática" : "Reanudar rotación automática"}
              className="flex items-center justify-center size-7 sm:size-8 rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 hover:text-white hover:border-white/20 transition-all shrink-0"
            >
              {isAutoPlaying ? (
                <Pause className="size-3 sm:size-3.5 text-cyan-400" />
              ) : (
                <Play className="size-3 sm:size-3.5 text-emerald-400" />
              )}
            </button>

            <button
              type="button"
              onClick={trigger360Flip}
              title="Girar en 3D para proyectar la otra solución"
              className="group flex items-center gap-1 sm:gap-1.5 rounded-xl border border-cyan-500/40 bg-slate-900/90 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-cyan-300 shadow-lg backdrop-blur-xl transition-all hover:border-cyan-400 hover:bg-cyan-950/50 hover:text-cyan-100 active:scale-95 shrink-0"
            >
              <RotateCw
                className={`size-3 sm:size-3.5 transition-transform duration-700 ${
                  isRotating ? "rotate-[360deg]" : "group-hover:rotate-180"
                }`}
              />
              <span className="font-mono">3D</span>
            </button>
          </div>
        </div>

        {/* 10-Second Progress Indicator Bar */}
        <div className="flex items-center gap-2 px-0.5">
          <div className="flex-1 h-1.5 rounded-full bg-slate-900/80 border border-white/10 overflow-hidden relative">
            <div
              className={`h-full transition-all duration-100 ease-linear rounded-full ${
                !isFlipped
                  ? "bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <span className="inline-block size-1.5 rounded-full bg-cyan-400 animate-ping" />
            {isAutoPlaying ? "Giro 3D en 10s" : "Pausado (hover)"}
          </span>
        </div>
      </div>

      {/* 3D Perspective Stage Container ("Sale de la pantalla") */}
      <div
        className="relative w-full"
        style={{
          perspective: "1100px",
          perspectiveOrigin: "center center",
        }}
      >
        {/* Holographic 3D Floating Floor Shadow underneath */}
        <div
          className="pointer-events-none absolute -bottom-7 left-1/2 h-14 w-[85%] -translate-x-1/2 rounded-full transition-all duration-700 -z-10"
          style={{
            transform: "rotateX(75deg) translateZ(-50px)",
            background: !isFlipped
              ? "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.45) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 75%)"
              : "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.45) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 75%)",
            filter: isRotating ? "blur(22px) scale(1.25)" : "blur(14px) scale(1)",
          }}
        />

        {/* Dynamic Glow aura behind the active card */}
        <div
          className={`absolute -inset-2 rounded-3xl blur-2xl transition-all duration-700 pointer-events-none ${
            isRotating ? "opacity-95 scale-105" : "opacity-70 scale-100"
          } ${
            !isFlipped
              ? "bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-cyan-500/30"
              : "bg-gradient-to-r from-cyan-500/40 via-blue-600/30 to-purple-600/30"
          }`}
        />

        {/* Floating Top Holographic Pill Badge */}
        <div
          className="pointer-events-none absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 hidden sm:block"
          style={{ transform: "translateZ(85px)" }}
        >
          <span className="flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-slate-950/95 px-3 py-0.5 text-[9px] font-mono tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md uppercase">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
            ✦ Holograma 3D Interactivo ✦
          </span>
        </div>

        {/* 3D Flipper element with forward pop-out translation */}
        <div
          className="relative w-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: transformStyle,
            transitionTimingFunction: "cubic-bezier(0.25, 1.4, 0.45, 1)",
          }}
        >
          {/* =========================================================================
              CARA A: Habilitaciones Vaca Muerta por WhatsApp (Front Face)
          ========================================================================= */}
          <div
            className={`w-full rounded-3xl border border-white/10 bg-slate-950/95 p-4 sm:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col justify-between min-h-[510px] sm:min-h-[560px] ${
              isFlipped ? "pointer-events-none" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Hologram Corner HUD Brackets for 3D Pop effect */}
            <div
              className="pointer-events-none absolute inset-2.5 z-20 transition-all"
              style={{ transform: "translateZ(80px)" }}
            >
              <div className="absolute top-0 left-0 size-3 border-t-2 border-l-2 border-emerald-400/70 rounded-tl-sm" />
              <div className="absolute top-0 right-0 size-3 border-t-2 border-r-2 border-emerald-400/70 rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-emerald-400/70 rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-emerald-400/70 rounded-br-sm" />
            </div>

            {/* Header (Layered at translateZ: 30px) */}
            <div
              className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 transition-transform"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20">
                    <Truck className="size-5 sm:size-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 sm:size-3 rounded-full border-2 border-slate-950 bg-emerald-400 animate-ping" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 sm:size-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-semibold text-white text-xs sm:text-base truncate">
                      Habilitaciones Vaca Muerta
                    </h3>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-300 border border-emerald-500/30 shrink-0">
                      WhatsApp Express
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                    <ShieldCheck className="size-3 text-emerald-400 shrink-0" />
                    <span className="truncate">YPF • AESA • SACDE • TECHINT</span>
                  </p>
                </div>
              </div>

              <div
                className="hidden xs:flex flex-col items-end shrink-0"
                style={{ transform: "translateZ(75px)" }}
              >
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                  Pase Verde
                </span>
              </div>
            </div>

            {/* Chat Simulation Area */}
            <div className="mt-3 sm:mt-4 space-y-3 min-h-[190px] sm:min-h-[220px]">
              {/* User message (Layered at translateZ: 45px) */}
              <div
                className="flex justify-end transition-transform"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className="max-w-[95%] sm:max-w-[88%] rounded-2xl rounded-tr-sm bg-emerald-700/25 border border-emerald-500/35 p-3 sm:p-3.5 text-white shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] sm:text-[11px] text-emerald-300 font-mono">
                    <FileText className="size-3 text-emerald-400 shrink-0" />
                    <span>Contratista en base / yacimiento</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    &ldquo;{selectedHabilitacion.userText}&rdquo;
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 px-2 py-1 text-[10px] sm:text-[11px] text-emerald-200 font-mono max-w-full overflow-hidden">
                    <FileCheck2 className="size-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{selectedHabilitacion.fileChip}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-emerald-300/70">
                    <span>10:42</span>
                    <CheckCheck className="size-3 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Assistant Response (Layered at translateZ: 60px) */}
              <div
                className="flex justify-start transition-transform"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="max-w-[98%] sm:max-w-[92%] rounded-2xl rounded-tl-sm bg-slate-900/95 border border-emerald-500/35 p-3 sm:p-3.5 text-slate-100 shadow-2xl backdrop-blur-md">
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
                          className={`rounded-full border px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider shrink-0 ${selectedHabilitacion.badgeColor}`}
                        >
                          {selectedHabilitacion.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5 rounded-xl bg-slate-950/70 p-2 sm:p-2.5 border border-white/5 text-[11px] sm:text-xs">
                        <p className="font-semibold text-white text-[10px] sm:text-[11px]">
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

                      <div className="mt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                        <span className="text-emerald-300/90 font-mono flex items-center gap-1 truncate mr-2">
                          <Zap className="size-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{selectedHabilitacion.saving}</span>
                        </span>
                        <span className="font-mono text-[9px] sm:text-[10px] text-slate-500 shrink-0">
                          10:43 • Listo
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Presets Selector Pills (Layered at translateZ: 35px) */}
            <div
              className="mt-3 pt-2.5 border-t border-white/10 transition-transform"
              style={{ transform: "translateZ(35px)" }}
            >
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Probá el flujo con este tipo de trámite:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {HABILITACIONES_PRESETS.map((preset, idx) => {
                  const active = idx === habIndex
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectHabilitacion(idx)}
                      className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all ${
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

            {/* CTA Button directly to WhatsApp (Layered at translateZ: 75px) */}
            <div
              className="mt-4 transition-transform"
              style={{ transform: "translateZ(75px)" }}
            >
              <a
                href="https://wa.me/5493364524758?text=Hola%20ControlApps,%20vi%20la%20web%20y%20quiero%20consultar%20por%20la%20carga%20de%20habilitaciones%20para%20Vaca%20Muerta"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-950 transition-all hover:opacity-95 hover:shadow-[0_15px_30px_rgba(16,185,129,0.35)] active:scale-[0.99] text-center"
              >
                <span className="sm:hidden">Mandar por WhatsApp (+54 9 336 452-4758)</span>
                <span className="hidden sm:inline">Mandar Documentos por WhatsApp (+54 9 336 452-4758)</span>
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-1.5 text-center text-[10px] sm:text-[11px] text-slate-400">
                Atención comercial ControlApps • Respuesta inmediata para contratistas.
              </p>
            </div>
          </div>

          {/* =========================================================================
              CARA B: ControlApps Agenda IA 24/7 (Back Face, rotated 180deg)
          ========================================================================= */}
          <div
            className={`w-full rounded-3xl border border-white/10 bg-slate-950/95 p-4 sm:p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col justify-between min-h-[510px] sm:min-h-[560px] absolute inset-0 ${
              !isFlipped ? "pointer-events-none" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Hologram Corner HUD Brackets for 3D Pop effect */}
            <div
              className="pointer-events-none absolute inset-2.5 z-20 transition-all"
              style={{ transform: "translateZ(80px)" }}
            >
              <div className="absolute top-0 left-0 size-3 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-sm" />
              <div className="absolute top-0 right-0 size-3 border-t-2 border-r-2 border-cyan-400/70 rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-cyan-400/70 rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-cyan-400/70 rounded-br-sm" />
            </div>

            {/* Header (Layered at translateZ: 30px) */}
            <div
              className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4 transition-transform"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="relative shrink-0">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-400 text-white shadow-lg shadow-cyan-500/20">
                    <Bot className="size-5 sm:size-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 sm:size-3 rounded-full border-2 border-slate-950 bg-cyan-400 animate-ping" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 sm:size-3 rounded-full border-2 border-slate-950 bg-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-semibold text-white text-xs sm:text-base truncate">
                      ControlApps Agenda
                    </h3>
                    <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-cyan-300 border border-cyan-500/30 shrink-0">
                      Bot IA 24/7
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                    <Sparkles className="size-3 text-cyan-400 shrink-0" />
                    <span className="truncate">Voz & Texto con Groq Whisper</span>
                  </p>
                </div>
              </div>

              <div
                className="hidden xs:flex flex-col items-end shrink-0"
                style={{ transform: "translateZ(75px)" }}
              >
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/50 px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                  100% Gratis
                </span>
              </div>
            </div>

            {/* Chat Area */}
            <div className="mt-3 sm:mt-4 space-y-3 min-h-[190px] sm:min-h-[220px]">
              {/* User message (Layered at translateZ: 45px) */}
              <div
                className="flex justify-end transition-transform"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className="max-w-[95%] sm:max-w-[88%] rounded-2xl rounded-tr-sm bg-cyan-600/25 border border-cyan-500/35 p-3 sm:p-3.5 text-white shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] sm:text-[11px] text-cyan-300 font-mono">
                    <Mic className="size-3 text-cyan-400 shrink-0" />
                    <span>Audio / Texto recibido</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    &ldquo;{selectedAgenda.prompt}&rdquo;
                  </p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-cyan-300/70">
                    <span>10:42</span>
                    <CheckCheck className="size-3 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Bot response (Layered at translateZ: 60px) */}
              <div
                className="flex justify-start transition-transform"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="max-w-[98%] sm:max-w-[92%] rounded-2xl rounded-tl-sm bg-slate-900/95 border border-cyan-500/35 p-3 sm:p-3.5 text-slate-100 shadow-2xl backdrop-blur-md">
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

                      <div className="space-y-1.5 rounded-xl bg-slate-950/70 p-2 sm:p-2.5 border border-white/5 text-[11px] sm:text-xs">
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

                      <p className="mt-2 text-[10px] sm:text-[11px] text-slate-400 leading-snug">
                        🔔 Te llegará la alerta puntual con el resumen de ControlApps directamente a tu WhatsApp.
                      </p>
                      <div className="mt-1 text-right text-[9px] sm:text-[10px] text-slate-500 font-mono">
                        10:42 • 0.3s respuesta
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Preset Selector Pills (Layered at translateZ: 35px) */}
            <div
              className="mt-3 pt-2.5 border-t border-white/10 transition-transform"
              style={{ transform: "translateZ(35px)" }}
            >
              <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Probá con estos ejemplos:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {AGENDA_PRESETS.map((preset, idx) => {
                  const active = idx === agendaIndex
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectAgenda(idx)}
                      className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all ${
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

            {/* Live CTA Button (Layered at translateZ: 75px) */}
            <div
              className="mt-4 transition-transform"
              style={{ transform: "translateZ(75px)" }}
            >
              <a
                href="https://wa.me/5493407531127?text=Hola!%20Quiero%20probar%20la%20agenda%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-950 transition-all hover:opacity-95 hover:shadow-[0_15px_30px_rgba(6,182,212,0.35)] active:scale-[0.99] text-center"
              >
                <span>Probar la Agenda con tu WhatsApp (Gratis)</span>
                <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-1.5 text-center text-[10px] sm:text-[11px] text-slate-400">
                Sin suscripción, sin tarjeta y sin instalar nada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
