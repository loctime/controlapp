import Image from "next/image"
import Link from "next/link"
import { HardHat, MessageCircle, Sparkles } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function SiteHeader() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent(
    "Hola Fernando! Vi la web de ControlApps y quiero hacerte una consulta."
  )}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-10 md:py-3.5 lg:px-12">
        {/* Logo */}
        <Link href="/" aria-label="ControlApps — Inicio" className="inline-flex min-w-0 items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 shadow-md transition-all group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/20 md:h-11 md:w-11">
            <Image
              src="/brand/isotype-dark.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-[65%] w-[65%] object-contain"
            />
          </span>
          <span className="min-w-0">
            <span className="font-display block text-[1.45rem] font-semibold leading-none tracking-[-0.03em] text-white md:text-[1.7rem]">
              ControlApps
            </span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-400 sm:block">
              Software & Automatización
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {siteContent.navigation.map((item) => {
            const isAgenda = item.href.includes("agenda")
            const isHabilitaciones = item.href.includes("habilitaciones")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isHabilitaciones
                    ? "flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                    : isAgenda
                    ? "flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isHabilitaciones && <HardHat className="size-3.5 text-emerald-400" />}
                {isAgenda && <Sparkles className="size-3 text-cyan-400 animate-pulse" />}
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Contact WhatsApp Button */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-600/15 px-4 py-2 text-xs font-semibold text-emerald-300 shadow-sm transition-all hover:bg-emerald-600/30 hover:border-emerald-400 hover:text-white md:px-5 md:py-2.5 md:text-sm"
          >
            <MessageCircle className="size-4 text-emerald-400" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">WhatsApp directo (+54 9 336 452-4758)</span>
          </a>
        </div>
      </div>

      {/* Mobile navigation row */}
      <div className="border-t border-white/5 md:hidden">
        <nav className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-5 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {siteContent.navigation.map((item) => {
            const isAgenda = item.href.includes("agenda")
            const isHabilitaciones = item.href.includes("habilitaciones")
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-[0.01em] transition-colors ${
                  isHabilitaciones
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1"
                    : isAgenda
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1"
                    : "border border-white/10 bg-slate-900/60 text-slate-300 hover:text-white"
                }`}
              >
                {isHabilitaciones && <HardHat className="size-3" />}
                {isAgenda && <Sparkles className="size-3" />}
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
