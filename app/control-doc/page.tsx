import type { Metadata } from "next"
import { AppLandingPage } from "@/components/site/app-landing-page"
import { StructuredData } from "@/components/structured-data"
import { controlDoc } from "@/lib/apps/control-doc"
import { createAppMetadata, getAppSchemas } from "@/lib/seo"

export const metadata: Metadata = createAppMetadata(controlDoc)

export default function ControlDocPage() {
  return (
    <>
      <StructuredData data={getAppSchemas(controlDoc)} />
      <AppLandingPage app={controlDoc} />
    </>
  )
}
