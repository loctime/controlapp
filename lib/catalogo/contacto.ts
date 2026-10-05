const REF_VALIDO = /^[a-z0-9-]{3,40}$/

export function normalizarRef(raw: string | null | undefined): string | null {
  if (!raw) return null
  const valor = raw.trim().toLowerCase()
  return REF_VALIDO.test(valor) ? valor : null
}

export function mensajeConsulta(servicio: string, ref: string | null): string {
  const base = `Hola, me interesa ${servicio}.`
  return ref ? `${base} Me recomendó el código ${ref}.` : base
}

export function enlaceConsulta(o: {
  numero?: string
  email: string
  servicio: string
  ref?: string | null
}): string {
  const mensaje = mensajeConsulta(o.servicio, normalizarRef(o.ref))
  const numero = o.numero?.replace(/\D/g, "")
  if (numero) return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
  return `mailto:${o.email}?subject=${encodeURIComponent(`Consulta: ${o.servicio}`)}&body=${encodeURIComponent(mensaje)}`
}
