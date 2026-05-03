import { Shield, Lock, Server, Mail, Cloud, Code, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SeguridadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Seguridad en ControlApp
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tomamos la seguridad de tu información como una prioridad. Te explicamos cómo protegemos tu cuenta y tus datos en todos nuestros productos.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Cifrado de comunicaciones */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cifrado de comunicaciones</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Toda la comunicación entre tu navegador y nuestras plataformas está cifrada con <strong>HTTPS y TLS 1.2</strong>. 
                Esto significa que ningún tercero puede interceptar o leer los datos que enviás o recibís.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Las conexiones HTTP simples son rechazadas automáticamente y redirigidas a HTTPS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Utilizamos <strong>SSL en modo Full Strict</strong>, garantizando conexión cifrada de extremo a extremo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>HSTS activado por 1 año</strong> — los navegadores recuerdan conectarse siempre de forma segura.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Infraestructura Cloudflare */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Cloud className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Infraestructura protegida por Cloudflare</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Toda la plataforma está protegida por <strong>Cloudflare</strong>, uno de los proveedores de seguridad web más grandes del mundo. 
                Todos los subdominios de controldoc.app tienen el proxy activo, ocultando las IPs reales de nuestros servidores.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Protección contra ataques DDoS</strong> — tráfico filtrado antes de llegar a nuestros servidores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Firewall de aplicaciones web (WAF)</strong> — filtra solicitudes maliciosas en tiempo real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Rate limiting</strong> — máximo 50 requests cada 10 segundos por IP.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Proxy activo</strong> — las IPs reales permanecen ocultas detrás de la red de Cloudflare.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Almacenamiento seguro */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Almacenamiento seguro de archivos</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Los archivos subidos a nuestras plataformas se almacenan en <strong>Backblaze B2</strong>, 
                un proveedor de almacenamiento en la nube de nivel empresarial.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Bucket privado</strong> — ningún archivo es accesible públicamente por URL directa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>URLs firmadas con expiración</strong> — acceso temporal autorizado que expira automáticamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Cifrado en reposo</strong> — todos los archivos almacenados cifrados en servidores de Backblaze.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Correo electrónico seguro */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Correo electrónico seguro</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Nuestros correos electrónicos están configurados con los tres estándares de autenticación:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>SPF</strong> — verifica que los correos realmente provienen de nuestra plataforma.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>DKIM</strong> — firma digital que garantiza que el correo no fue alterado en tránsito.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>DMARC</strong> — política activa que instruye rechazar correos falsificados.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Alojamiento */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Alojamiento en proveedores confiables</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                La plataforma Control utiliza infraestructura de proveedores líderes a nivel mundial:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Vercel</strong> — plataforma de despliegue con alta disponibilidad y certificados SSL automáticos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Render</strong> — servidores backend con entornos aislados y actualizaciones de seguridad continuas.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Código fuente privado */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Código fuente privado</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                El código fuente de los productos principales de Control está alojado en <strong>repositorios privados de GitHub</strong>:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>El código no es accesible públicamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Solo el equipo de desarrollo autorizado tiene acceso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Despliegues controlados y auditados mediante historial de commits.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Buenas prácticas */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Buenas prácticas que recomendamos</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Usá una contraseña única y segura para tu cuenta.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>No compartás tus credenciales con terceros.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Si notás actividad inusual en tu cuenta, contactanos de inmediato.</span>
              </li>
            </ul>
          </section>

          {/* Contacto */}
          <section className="text-center bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Tenés preguntas sobre seguridad?</h2>
            <p className="text-gray-600 mb-6">
              Escribinos a <strong>hola@controldoc.app</strong>
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Volver al inicio
            </Link>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Última actualización: mayo 2026</p>
        </div>
      </div>
    </div>
  )
}
