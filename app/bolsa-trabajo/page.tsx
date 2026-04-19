import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AppLandingTemplate } from "@/components/app-landing-template"
import { getPlatformAppBySlug } from "@/lib/platform-data"
import { createAppMetadata } from "@/lib/seo"

const app = getPlatformAppBySlug("bolsa-trabajo")

export const metadata: Metadata = app
  ? createAppMetadata(app)
  : {}

export default function BolsaTrabajoPage() {
  if (!app) {
    notFound()
  }

  return <AppLandingTemplate appSlug="bolsa-trabajo" />
}
