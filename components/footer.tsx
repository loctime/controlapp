"use client"

import Link from "next/link"
import { activePlatformApps, navigationLinks, platformOverview } from "@/lib/platform-data"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 animate-glow">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                ControlApp
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">{platformOverview.footer.description}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/#arquitectura" className="text-blue-200 hover:text-white transition-colors">
                Como funciona
              </Link>
              <Link href="/#capacidades" className="text-blue-200 hover:text-white transition-colors">
                Capacidades
              </Link>
              <Link href="/control-file" className="text-blue-200 hover:text-white transition-colors">
                ControlFile
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Navegacion
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Apps activas
            </h3>
            <ul className="space-y-3">
              {activePlatformApps.map((app) => (
                <li key={app.id}>
                  <Link href={app.href} className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium">
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 glass-effect rounded-3xl p-8 md:p-10 border-2 border-white/10 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Disenada para sumar nuevos modulos sin rehacer la base
            </h3>
            <p className="text-gray-300 mb-6">
              La landing ahora puede crecer con nuevas apps activas desde un registro central, sin duplicar navegacion, cards ni paginas individuales.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#apps"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/50"
              >
                Ver apps activas
              </Link>
              <Link
                href="/#arquitectura"
                className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/15 transition-all duration-300"
              >
                Ver arquitectura
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm font-medium">
            © 2026 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">ControlApp</span>. Plataforma centralizada multi-app.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/#apps" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
              Apps
            </Link>
            <Link href="/#capacidades" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
              Capacidad compartida
            </Link>
            <Link href="/demos" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">
              Demos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
