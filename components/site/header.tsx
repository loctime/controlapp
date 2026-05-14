import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(18,26,44,0.12)] bg-[rgba(252,250,246,0.94)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-12">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3 text-[rgb(15,23,42)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(109,80,47,0.35)] bg-white font-mono text-xs uppercase tracking-[0.24em] shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
            CA
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-semibold tracking-[-0.045em]">ControlApps</span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.26em] text-[rgb(94,109,136)]">
              Software a medida
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.01em] text-[rgb(51,65,85)] transition-colors hover:text-[rgb(15,23,42)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(109,80,47,0.3)] bg-[rgb(22,35,62)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-0.5 hover:bg-[rgb(31,48,83)]"
        >
          Hablemos
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  )
}
