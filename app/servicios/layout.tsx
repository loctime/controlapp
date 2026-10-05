import type { ReactNode } from "react"
import { RefCapture } from "@/components/catalogo/ref-capture"

export default function ServiciosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <RefCapture />
      {children}
    </>
  )
}
