"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Producto: ["Características", "Integraciones", "Precios", "Changelog", "Documentación"],
    Empresa: ["Sobre nosotros", "Blog", "Carreras", "Prensa", "Contacto"],
    Recursos: ["Centro de ayuda", "Comunidad", "Tutoriales", "API", "Estado del sistema"],
    Legal: ["Privacidad", "Términos", "Seguridad", "Cookies", "Licencias"],
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-600/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 animate-glow">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">ControlApp</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Suite completa de gestión empresarial para digitalizar tu negocio con las mejores herramientas
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-5 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="mb-12 glass-effect rounded-3xl p-8 md:p-10 border-2 border-white/10 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              📬 Suscríbete a nuestro newsletter
            </h3>
            <p className="text-gray-300 mb-6">Recibe las últimas actualizaciones y novedades directamente en tu correo</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:scale-105">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm font-medium">
            © 2025 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">ControlApp</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 font-medium">
              Privacidad
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 font-medium">
              Términos
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 font-medium">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
