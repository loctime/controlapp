import type React from "react"
import { createDemosMetadata } from "@/lib/seo"

export const metadata = createDemosMetadata()

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
