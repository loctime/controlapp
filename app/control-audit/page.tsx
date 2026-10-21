import type { Metadata } from "next"
import { AppLandingPage } from "@/components/site/app-landing-page"
import { StructuredData } from "@/components/structured-data"
import { controlAudit } from "@/lib/apps/control-audit"
import { createAppMetadata, getAppSchemas } from "@/lib/seo"

export const metadata: Metadata = createAppMetadata(controlAudit)

export default function ControlAuditPage() {
  return (
    <>
      <StructuredData data={getAppSchemas(controlAudit)} />
      <AppLandingPage app={controlAudit} />
    </>
  )
}
