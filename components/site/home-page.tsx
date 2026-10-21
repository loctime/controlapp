import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calendar,
  CheckCircle2,
  FileCheck,
  FolderOpen,
  HardHat,
  MessageCircle,
  Mic,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react"
import { AgendaSimulator } from "@/components/site/agenda-simulator"
import { ContactForm } from "@/components/site/contact-form"
import { controlAudit } from "@/lib/apps/control-audit"
import { controlDoc } from "@/lib/apps/control-doc"
import { siteContent } from "@/lib/site-content"

export function HomePage() {
  const whatsappComercialUrl = `https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent(
    "Hola ControlApps! Vi la web y quiero consultar por la carga de habilitaciones y soluciones para empresas."
  )}`

  const agendaBotUrl = `https://wa.me/5493407531127?text=${encodeURIComponent(
    "Hola! Quiero probar la agenda gratis."
  )}`

  return (
    <main className="bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-clip min-w-0 w-full">
      {/* =========================================================================
          HERO SECTION (Futuristic Dark Theme + 360 Interactive Simulator)
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-white/10 pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Glow ambient background elements */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-600/10 via-emerald-600/10 to-transparent blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 items-center">
          {/* Hero Left Column */}
          <div className="min-w-0 w-full">
            {/* Announcement Pill */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-mono text-emerald-300 backdrop-blur-md shadow-sm shadow-emerald-500/10">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="truncate max-w-[270px] xs:max-w-[340px] sm:max-w-none">
                Vaca Muerta & Soluciones • Habilitaciones WhatsApp & Agenda IA
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display mt-4 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] sm:leading-[1.02] tracking-tight text-white break-words">
              Habilitaciones y software inteligente para la{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                operación real
              </span>{" "}
              sin fricción.
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-300">
              Carga ágil de habilitaciones por WhatsApp para contratistas en <strong>Vaca Muerta</strong> (YPF, AESA, SACDE, Techint), gestión documental integral (<strong>ControlDoc</strong>) e higiene y seguridad (<strong>ControlAudit</strong>). Además, probá gratis nuestra <strong>Agenda con IA</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappComercialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:opacity-95 active:scale-[0.98] sm:w-auto text-center"
              >
                <HardHat className="size-4 shrink-0" />
                <span>Cargar Habilitaciones Vaca Muerta</span>
                <ArrowRight className="size-4 shrink-0" />
              </a>

              <a
                href={agendaBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:border-cyan-500/40 hover:text-white sm:w-auto text-center"
              >
                <Sparkles className="size-4 text-cyan-400 shrink-0" />
                <span>Probar Agenda IA Gratis</span>
              </a>
            </div>

            {/* Contact quick note */}
            <p className="mt-3 text-[11px] sm:text-xs text-slate-400">
              WhatsApp comercial directo: <strong className="text-emerald-400">+54 9 336 452-4758</strong> • Carga y aprobación ágil para yacimiento
            </p>

            {/* Stats row */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-4 sm:pt-6">
              <div className="min-w-0">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-400 truncate">Vaca Muerta</p>
                <p className="mt-1 text-sm sm:text-xl md:text-2xl font-bold text-white truncate">Habilitaciones</p>
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">YPF • AESA • SACDE</p>
              </div>
              <div className="border-l border-white/10 pl-2 sm:pl-4 min-w-0">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-cyan-400 truncate">ControlDoc</p>
                <p className="mt-1 text-sm sm:text-xl md:text-2xl font-bold text-white truncate">Gestión Doc</p>
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">Empresarial</p>
              </div>
              <div className="border-l border-white/10 pl-2 sm:pl-4 min-w-0">
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-teal-400 truncate">Agenda IA</p>
                <p className="mt-1 text-sm sm:text-xl md:text-2xl font-bold text-white truncate">100% Gratis</p>
                <p className="text-[10px] sm:text-xs text-slate-400 truncate">WhatsApp 24/7</p>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Interactive WhatsApp AI Simulator */}
          <div className="relative min-w-0 w-full lg:pl-4">
            <AgendaSimulator />
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENTES QUE CONFÍAN EN CONTROLSAPPS (Maximia y VentaMat)
      ========================================================================= */}
      <section id="clientes" className="relative overflow-hidden border-b border-white/10 bg-slate-900/40 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Validación Real</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Empresas que confían en nuestras soluciones
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300">
              Sistemas en producción activa respaldando operaciones de alta exigencia, seguridad industrial y logística.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Card Maximia */}
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/5">
              <div className="flex items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="flex h-14 w-28 sm:h-16 sm:w-36 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-inner">
                    <Image
                      src="/logos/maximia.png"
                      alt="Logo de Maximia"
                      width={140}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">Maximia SA</h3>
                    <p className="text-xs text-red-400 font-mono truncate">maximia.com.ar</p>
                  </div>
                </div>
                <a
                  href="https://maximia.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2 text-slate-400 hover:border-white/30 hover:text-white shrink-0"
                  aria-label="Sitio web de Maximia"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="mt-5 space-y-3">
                <span className="inline-block rounded-full bg-red-950/40 border border-red-800/40 px-3 py-1 text-xs font-mono text-red-300">
                  Seguridad & Salud Ocupacional (ISO 45001) • Flota & Minería
                </span>
                <p className="text-sm leading-relaxed text-slate-300">
                  Líder en servicios y operaciones industriales de transporte, logística para proyectos de energía y minería.
                </p>
                <div className="rounded-2xl bg-slate-900/60 p-4 border border-white/5 text-xs text-slate-300">
                  <strong className="text-white block mb-1">Impacto ControlApps:</strong>
                  Automatización de alertas de siniestralidad, control de vencimientos de nómina y procedimientos de seguridad industrial con trazabilidad garantizada.
                </div>
              </div>
            </div>

            {/* Card VentaMat */}
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="flex items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="flex h-14 w-28 sm:h-16 sm:w-36 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-inner">
                    <Image
                      src="/logos/ventamat.png"
                      alt="Logo de VentaMat"
                      width={140}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">VentaMat</h3>
                    <p className="text-xs text-cyan-400 font-mono truncate">ventamat.com</p>
                  </div>
                </div>
                <a
                  href="https://ventamat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-2 text-slate-400 hover:border-white/30 hover:text-white shrink-0"
                  aria-label="Sitio web de VentaMat"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="mt-5 space-y-3">
                <span className="inline-block rounded-full bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 text-xs font-mono text-cyan-300">
                  Distribución Mayorista • Logística & Materiales
                </span>
                <p className="text-sm leading-relaxed text-slate-300">
                  Cadena de comercialización y distribución masiva de materiales con complejas rutas y dotaciones comerciales.
                </p>
                <div className="rounded-2xl bg-slate-900/60 p-4 border border-white/5 text-xs text-slate-300">
                  <strong className="text-white block mb-1">Impacto ControlApps:</strong>
                  Sistematización de nóminas y rutas de distribución, erradicando hojas dispersas y agilizando la coordinación entre depósitos y entregas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HABILITACIONES VACA MUERTA POR WHATSAPP (SOLUCIÓN OPERATIVA DIRECTA)
      ========================================================================= */}
      <section id="habilitaciones" className="relative border-b border-white/10 py-16 sm:py-24 overflow-hidden bg-slate-900/20">
        <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[350px] w-[350px] rounded-full bg-amber-500/5 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
                Solución Especializada • Vaca Muerta
              </span>
              <h2 className="font-display mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Carga de Habilitaciones Documentales por WhatsApp.
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
                Para contratistas de transporte, obras civiles, servicios y logística en la cuenca neuquina. No pierdas horas frente a la computadora ni hagas rebotar a tus camionetas en la garita: mandás las fotos o PDFs por chat y nosotros gestionamos la subida y aprobación en los portales de las operadoras.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 px-4 py-2.5 text-xs font-mono text-emerald-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>YPF • AESA • SACDE • TECHINT • VISTA</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 mb-5 border border-emerald-500/20">
                  <FileCheck className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Nóminas de ART & No Repetición</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Carga de certificados de cobertura vigentes, nómina de empleados y la cláusula obligatoria de no repetición a favor de la operadora y comitentes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 shrink-0" />
                <span>Pase verde para ingresar a Añelo</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 mb-5 border border-cyan-500/20">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white">F.931 AFIP & Auditoría Laboral</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Homologación mensual de cargas sociales, acuses de recibo y tickets de pago bancario para cumplir las auditorías y evitar retenciones en tus certificados de obra.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-cyan-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 shrink-0" />
                <span>Cobro de certificados sin trabas</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 mb-5 border border-amber-500/20">
                  <Truck className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Aptos Médicos & Manejo 4x4</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Carga de exámenes periódicos de ley (Res. SRT 37/2010), credenciales de manejo defensivo y legajos de camionetas para circular habilitados en zona de pozos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 shrink-0" />
                <span>Flota y choferes autorizados</span>
              </div>
            </div>
          </div>

          {/* Banner Direct CTA to WhatsApp Comercial */}
          <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/70 via-slate-950 to-teal-950/70 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-xl min-w-0">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Atención Directa & Rápida
              </span>
              <h3 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-white">
                ¿Tenés que subir personal o camionetas a yacimiento esta semana?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Contactate con nosotros por WhatsApp. Te decimos exactamente qué documentación hace falta y nos encargamos de que tu equipo entre sin demoras.
              </p>
            </div>

            <a
              href={whatsappComercialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] text-center shrink-0"
            >
              <MessageCircle className="size-5 shrink-0" />
              <span>Enviar Documentos por WhatsApp</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AGENDA DE WHATSAPP CON IA (EL GRAN HOOK / PUBLICIDAD)
      ========================================================================= */}
      <section id="agenda" className="relative border-b border-white/10 py-16 sm:py-24 overflow-hidden">
        <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              Acceso Abierto & Gratuito
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Agenda de WhatsApp con Inteligencia Artificial.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              Diseñamos este bot como nuestra carta de presentación: una herramienta de altísimo valor que cualquiera puede usar sin pagar un solo peso. Le hablás por texto o audio, y la IA se encarga de recordártelo a tiempo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 mb-4 border border-emerald-500/20">
                <Mic className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Notas de voz & texto</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Mandale audios como a un amigo. El modelo Groq Whisper transcribe en milisegundos y extrae fechas y horas reales.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 mb-4 border border-cyan-500/20">
                <Zap className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Clasificación inteligente</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                El LLM detecta automáticamente la categoría: 🚗 auto, 🩺 médico, 💳 impuestos, 💼 trabajo o 🛒 compras.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-400 mb-4 border border-teal-500/20">
                <Calendar className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Avisos puntuales</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Scheduler autónomo cada 10s. En el minuto exacto, te manda el mensaje a tu chat con el logo y el recordatorio formateado.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400 mb-4 border border-purple-500/20">
                <Bot className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Gratis & Sin app</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                No tenés que registrarte ni bajar aplicaciones que ocupan espacio. Solo guardás el número en WhatsApp y listo.
              </p>
            </div>
          </div>

          {/* Big Banner CTA */}
          <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/60 via-slate-950 to-teal-950/60 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="max-w-xl min-w-0">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Probá el bot en 10 segundos
              </span>
              <h3 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-white">
                Guardá el contacto o abrilo directamente en WhatsApp
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Número del bot: <strong className="text-emerald-400 font-mono text-base">+54 9 3407 53-1127</strong>
              </p>
            </div>

            <a
              href={agendaBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] text-center shrink-0"
            >
              <MessageCircle className="size-5 shrink-0" />
              <span>Chatear con la Agenda Gratis</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NUESTROS PRODUCTOS ESTRELLA (ControlDoc + ControlAudit)
      ========================================================================= */}
      <section id="productos" className="relative overflow-hidden border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 lg:max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Sistemas Corporativos</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Nuestras soluciones para transformar la operación de tu empresa.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              Desarrollamos herramientas específicas que reemplazan carpetas desordenadas, planillas obsoletas y memoria operativa por sistemas sólidos con trazabilidad.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Producto 1: ControlDoc */}
            <article className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    <FolderOpen className="size-7" />
                  </div>
                  <span className="rounded-full bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-300">
                    Gestión Documental
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl sm:text-3xl font-bold text-white">
                  ControlDoc
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {controlDoc.shortDescription}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-cyan-400 mt-1 shrink-0" />
                    <span>Legajos unificados de personal, contratistas, maquinaria y flota.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-cyan-400 mt-1 shrink-0" />
                    <span>Control automático de vencimientos (seguros, ART, licencias, certificaciones).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-cyan-400 mt-1 shrink-0" />
                    <span>Homologación documental y aprobaciones sin intermediación manual.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/control-doc"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 px-5 py-3.5 text-sm font-semibold text-cyan-300 transition-all hover:bg-cyan-500 hover:text-slate-950 group-hover:border-cyan-400"
                >
                  <span>Conocer ControlDoc en profundidad</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>

            {/* Producto 2: ControlAudit */}
            <article className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="size-7" />
                  </div>
                  <span className="rounded-full bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                    Higiene, Seguridad & HSE
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl sm:text-3xl font-bold text-white">
                  ControlAudit
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {controlAudit.shortDescription}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 mt-1 shrink-0" />
                    <span>PWA para inspectores en campo: completá auditorías 100% offline sin señal.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 mt-1 shrink-0" />
                    <span>Adjuntá fotos de evidencias y observaciones desde la cámara del celular.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-400 mt-1 shrink-0" />
                    <span>Generación instantánea de reportes PDF y dashboard con índices de siniestralidad.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/control-audit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-5 py-3.5 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-slate-950 group-hover:border-emerald-400"
                >
                  <span>Conocer ControlAudit en profundidad</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROBLEMAS QUE RESOLVEMOS
      ========================================================================= */}
      <section id="problemas" className="relative overflow-hidden border-b border-white/10 py-16 sm:py-20 bg-slate-900/30">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Diagnóstico Operativo</span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Cuando la operación vive de excepciones, el sistema dejó de acompañar al negocio.
              </h2>
              <p className="mt-4 text-base text-slate-300">
                La mayoría de las empresas pierden horas críticas en tareas manuales que un buen sistema automatiza por completo.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteContent.painPoints.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACTO DIRECTO (WhatsApp + Formulario Comercial)
      ========================================================================= */}
      <section id="contacto" className="relative overflow-hidden py-16 sm:py-24">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute -top-40 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12 items-start">
          {/* Contact Left Column */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
              Hablemos hoy mismo
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Si tu operación no debería depender de improvisación, empecemos acá.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              Podemos revisar el flujo actual de tu empresa, detectar cuellos de botella y ver cuál es la mejor forma de resolverlo: automatización, centralización o desarrollo a medida.
            </p>

            {/* Direct WhatsApp Callout Box */}
            <div className="mt-8 rounded-3xl border border-emerald-500/40 bg-emerald-950/30 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Contacto Directo por WhatsApp</h3>
                  <p className="text-xs text-emerald-400">Atención personalizada y respuesta rápida</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300">
                Contactate directamente a nuestro WhatsApp y coordinemos una llamada o demo sin compromiso:
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappComercialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-md hover:bg-emerald-400 transition-all active:scale-[0.98] text-center"
                >
                  <MessageCircle className="size-4 shrink-0" />
                  <span>Chatear al +54 9 336 452-4758</span>
                </a>
              </div>
            </div>

            {/* Quick check highlights */}
            <div className="mt-8 space-y-3">
              {siteContent.contactHighlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="size-4 text-cyan-400 mt-1 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Right Column: Form Component */}
          <div>
            <ContactForm email={siteContent.contact.email} whatsappNumber={siteContent.contact.whatsapp} />
          </div>
        </div>
      </section>
    </main>
  )
}
