import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AppLandingTemplate } from "@/components/app-landing-template"
import { getPlatformAppBySlug } from "@/lib/platform-data"
import { createAppMetadata } from "@/lib/seo"

const app = getPlatformAppBySlug("horarios")

export const metadata: Metadata = app
  ? createAppMetadata(app)
  : {}

export default function HorariosPage() {
  if (!app) {
    notFound()
  }

  return <AppLandingTemplate appSlug="horarios" />
}
