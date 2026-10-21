"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const whatsappNumber = "5493364524758"
  const defaultMessage = encodeURIComponent(
    "Hola ControlApps! Vi la web y quiero hacerles una consulta."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Popover / Chat Card */}
      {isOpen && (
        <div className="relative w-[320px] rounded-3xl border border-emerald-500/30 bg-slate-950/95 p-5 text-slate-100 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              setHasInteracted(true)
            }}
            className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Cerrar ventana de WhatsApp"
          >
            <X className="size-4" />
          </button>

          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-md">
                <MessageCircle className="size-6" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">ControlApps Oficial</p>
              <p className="text-xs text-emerald-400">Atención comercial • En línea</p>
            </div>
          </div>

          <div className="my-4 space-y-2 text-xs text-slate-300">
            <p className="rounded-2xl rounded-tl-sm bg-slate-900/80 p-3 border border-white/5 leading-relaxed">
              Hola! Consultá por <strong>habilitaciones para Vaca Muerta</strong> (YPF, AESA, SACDE), <strong>ControlDoc</strong> o probá la <strong>Agenda gratis</strong>. Escribinos directo por acá.
            </p>
            <p className="font-mono text-[11px] text-slate-400 text-right">
              +54 9 336 452-4758
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:opacity-95 active:scale-[0.98]"
          >
            <MessageCircle className="size-4" />
            <span>Abrir chat de WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main trigger button */}
      <div className="relative flex items-center gap-2">
        {!isOpen && !hasInteracted && (
          <div className="hidden sm:flex items-center rounded-full border border-emerald-500/40 bg-slate-950/90 px-3.5 py-1.5 text-xs font-medium text-slate-200 shadow-xl backdrop-blur-md animate-pulse">
            <span className="mr-1.5 inline-block size-2 rounded-full bg-emerald-400 animate-ping" />
            Chatear por WhatsApp (+54 9 336 452-4758)
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen)
            setHasInteracted(true)
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-500/30 transition-transform hover:scale-105 active:scale-95"
          aria-label="Abrir contacto directo de WhatsApp con ControlApps"
        >
          {/* Outer glow ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-sm animate-pulse" />
          <MessageCircle className="relative size-7" />
          <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-slate-950 bg-emerald-300" />
        </button>
      </div>
    </aside>
  )
}
