import type { Metadata } from "next"
import { HomePage } from "@/components/site/home-page"
import { StructuredData } from "@/components/structured-data"
import { createHomeMetadata, getOrganizationSchema } from "@/lib/seo"

export const metadata: Metadata = createHomeMetadata()

export default function Page() {
  return (
    <>
      <StructuredData data={getOrganizationSchema()} />
      <HomePage />
    </>
  )
}
