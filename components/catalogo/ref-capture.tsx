"use client"

import { useEffect } from "react"
import { resolverRef } from "@/lib/catalogo/ref-cliente"

export function RefCapture() {
  useEffect(() => {
    try {
      resolverRef(window.location.search, window.localStorage)
    } catch {
      resolverRef(window.location.search, null)
    }
  }, [])
  return null
}
