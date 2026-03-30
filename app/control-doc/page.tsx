import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AppLandingTemplate } from "@/components/app-landing-template"
import { getPlatformAppBySlug } from "@/lib/platform-data"

const app = getPlatformAppBySlug("control-doc")

export const metadata: Metadata = app
  ? {
      title: app.seo.title,
      description: app.seo.description,
    }
  : {}

export default function ControlDocPage() {
  if (!app) {
    notFound()
  }

  return <AppLandingTemplate appSlug="control-doc" />
}
