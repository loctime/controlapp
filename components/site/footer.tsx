import Image from "next/image"
import Link from "next/link"
import { siteContent } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(34,30,24,0.12)] bg-[rgb(239,233,225)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xl">
            <Link href="/" aria-label="ControlApps — Inicio" className="inline-flex items-center gap-3 text-[rgb(18,24,37)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(132,109,84,0.3)] bg-[rgba(255,255,255,0.82)]">
                <Image
                  src="/brand/isotype-light.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-[60%] w-[60%] object-contain"
                />
              </span>
              <span className="font-display text-[1.9rem] font-semibold leading-none tracking-[-0.04em]">ControlApps</span>
            </Link>
            <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-[rgb(49,52,61)]">
              {siteContent.company.shortDescription}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(102,82,60)]">Navegación</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-[rgb(34,39,51)]">
              {siteContent.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-[rgb(120,95,68)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(102,82,60)]">Contacto</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-[rgb(34,39,51)]">
              <a href={`mailto:${siteContent.contact.email}`} className="transition-colors hover:text-[rgb(120,95,68)]">
                {siteContent.contact.email}
              </a>
              <span>{siteContent.contact.region}</span>
              <span>{siteContent.contact.availability}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(34,30,24,0.12)] pt-5 text-sm font-medium text-[rgb(49,52,61)] md:flex-row md:items-center md:justify-between">
          <p>ControlApps desarrolla software a medida para resolver operación real.</p>
          <p>© {new Date().getFullYear()} ControlApps</p>
        </div>
      </div>
    </footer>
  )
}
