import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function SiteFooter() {
  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent(
    "Hola Fernando! Vi la web de ControlApps y quiero hacerte una consulta."
  )}`

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand & info */}
          <div className="max-w-xl">
            <Link href="/" aria-label="ControlApps — Inicio" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-md">
                <Image
                  src="/brand/isotype-dark.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-[65%] w-[65%] object-contain"
                />
              </span>
              <span className="font-display text-[1.8rem] font-semibold leading-none tracking-[-0.03em] text-white">
                ControlApps
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm font-normal leading-6 text-slate-400">
              Desarrollamos software y automatizaciones inteligentes para ordenar la operación diaria. Desde recordatorios por WhatsApp con IA hasta plataformas de gestión documental e inspecciones técnicas.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-cyan-400">
              <span className="rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-1">ControlDoc</span>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3 py-1">ControlAudit</span>
              <span className="rounded-full border border-purple-500/20 bg-purple-950/30 px-3 py-1">Agenda IA Gratis</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">Soluciones & Accesos</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-slate-300">
              <a
                href="https://wa.me/5493407531127?text=Hola!%20Quiero%20probar%20la%20agenda%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Sparkles className="size-3.5" />
                <span>Agenda WhatsApp Gratis (+54 9 3407 53-1127)</span>
              </a>
              <Link href="/control-doc" className="hover:text-white transition-colors">
                ControlDoc (Gestión Documental)
              </Link>
              <Link href="/control-audit" className="hover:text-white transition-colors">
                ControlAudit (Higiene, Seguridad & Inspecciones)
              </Link>
              <a href="#clientes" className="hover:text-white transition-colors">
                Clientes (Maximia & VentaMat)
              </a>
              <Link href="/metodologia" className="hover:text-white transition-colors">
                Metodología de Desarrollo
              </Link>
            </div>
          </div>

          {/* Contacto Directo */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">Contacto Directo</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/40 hover:text-white transition-all"
              >
                <MessageCircle className="size-4 text-emerald-400" />
                <span>WhatsApp Fernando: {siteContent.contact.phone}</span>
                <ArrowUpRight className="size-3.5 ml-auto" />
              </a>

              <a href={`mailto:${siteContent.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                {siteContent.contact.email}
              </a>
              <span className="text-xs text-slate-400">{siteContent.contact.region}</span>
              <span className="text-xs text-slate-400">{siteContent.contact.availability}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>ControlApps • Software inteligente para operación real sin fricción.</p>
          <p>© {new Date().getFullYear()} ControlApps — Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
