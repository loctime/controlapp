import Link from "next/link"
import { siteContent } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(18,26,44,0.14)] bg-[linear-gradient(180deg,_rgb(246,242,235),_rgb(240,235,228))] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 md:px-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3 text-[rgb(15,23,42)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(109,80,47,0.28)] bg-white font-mono text-xs uppercase tracking-[0.2em] shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                CA
              </span>
              <span className="text-lg font-semibold tracking-[-0.04em]">ControlApps</span>
            </Link>
            <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-[rgb(28,41,64)]">
              {siteContent.company.shortDescription}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(84,60,36)]">
              Navegación
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-[rgb(18,30,54)]">
              {siteContent.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-[rgb(114,84,51)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[rgb(84,60,36)]">
              Contacto
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-[rgb(18,30,54)]">
              <a href={`mailto:${siteContent.contact.email}`} className="transition-colors hover:text-[rgb(114,84,51)]">
                {siteContent.contact.email}
              </a>
              <span>{siteContent.contact.region}</span>
              <span>{siteContent.contact.availability}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgba(18,26,44,0.12)] pt-5 text-sm font-medium text-[rgb(28,41,64)] md:flex-row md:items-center md:justify-between">
          <p>ControlApps desarrolla software a medida para resolver operación real.</p>
          <p>© {new Date().getFullYear()} ControlApps</p>
        </div>
      </div>
    </footer>
  )
}
