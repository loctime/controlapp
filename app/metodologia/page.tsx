import type { Metadata } from "next"
import { MethodologyPage } from "@/components/site/methodology-page"
import { createMethodologyMetadata } from "@/lib/seo"

export const metadata: Metadata = createMethodologyMetadata()

export default function MetodologiaPage() {
  return <MethodologyPage />
}
