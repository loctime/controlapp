import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(34,30,24,0.12)] bg-[rgba(247,243,237,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-10 md:py-4 lg:px-12">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3 text-[rgb(18,24,37)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(132,109,84,0.4)] bg-[rgba(255,255,255,0.78)] font-mono text-[11px] uppercase tracking-[0.22em] md:h-11 md:w-11 md:text-xs md:tracking-[0.24em]">
            CA
          </span>
          <span className="min-w-0">
            <span className="font-display block text-[1.55rem] font-semibold leading-none tracking-[-0.04em] md:text-[1.85rem]">ControlApps</span>
            <span className="mt-1 hidden font-mono text-[11px] uppercase tracking-[0.26em] text-[rgb(102,82,60)] sm:block">
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
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[rgba(24,30,43,0.14)] bg-[rgb(20,29,46)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[rgb(28,38,58)] md:px-5 md:py-3"
        >
          <span className="sm:hidden">Hablar</span>
          <span className="hidden sm:inline">Hablemos</span>
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="border-t border-[rgba(34,30,24,0.08)] md:hidden">
        <nav className="mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-[rgba(34,30,24,0.1)] bg-[rgba(255,255,255,0.56)] px-4 py-2 text-xs font-semibold tracking-[0.01em] text-[rgb(38,43,55)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
