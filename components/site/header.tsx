import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(34,30,24,0.12)] bg-[rgba(247,243,237,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-12">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3 text-[rgb(18,24,37)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(132,109,84,0.4)] bg-[rgba(255,255,255,0.78)] font-mono text-xs uppercase tracking-[0.24em]">
            CA
          </span>
          <span className="min-w-0">
            <span className="font-display block text-[1.85rem] font-semibold leading-none tracking-[-0.04em]">ControlApps</span>
            <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.26em] text-[rgb(102,82,60)]">
              Software a medida
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.01em] text-[rgb(38,43,55)] transition-colors hover:text-[rgb(120,95,68)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(24,30,43,0.14)] bg-[rgb(20,29,46)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgb(28,38,58)]"
        >
          Hablemos
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </header>
  )
}
