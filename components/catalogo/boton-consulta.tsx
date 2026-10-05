"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { enlaceConsulta } from "@/lib/catalogo/contacto"
import { resolverRef } from "@/lib/catalogo/ref-cliente"

type Props = {
  servicio: string
  email: string
  etiqueta?: string
}

export function BotonConsulta({ servicio, email, etiqueta = "Consultar por WhatsApp" }: Props) {
  const [ref, setRef] = useState<string | null>(null)

  useEffect(() => {
    let storage: Storage | null = null
    try {
      storage = window.localStorage
    } catch {
      storage = null
    }
    setRef(resolverRef(window.location.search, storage))
  }, [])

  const href = enlaceConsulta({ numero: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, email, servicio, ref })

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[rgb(20,29,46)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[rgb(28,38,58)]"
    >
      {etiqueta}
      <ArrowUpRight className="size-4" />
    </a>
  )
}
