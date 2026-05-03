import type { LucideIcon } from "lucide-react"

export type PlatformAppStatus = "active" | "comingSoon" | "hidden"
export type PlatformAppCategory = "operations" | "finance" | "talent" | "storage"

export interface PlatformCapability {
  sharedAuth: boolean
  sharedStorage: boolean
  visibleInControlFile: boolean
  requiresPermissions: boolean
}

export interface AppLandingSectionItem {
  title: string
  description: string
  icon?: LucideIcon
}

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedAppLink {
  slug: string
  anchor: string
  reason: string
}

export interface KeywordProfile {
  primary: string
  secondary: string[]
  problems: string[]
  industries: string[]
}

export interface AppLandingContent {
  heroLabel: string
  heroTitle: string
  heroDescription: string
  heroStats?: {
    value: string
    label: string
  }
  valueProposition: string
  audiences: AppLandingSectionItem[]
  problems: string[]
  benefits: string[]
  functionalities: AppLandingSectionItem[]
  useCases: AppLandingSectionItem[]
  faq: FAQItem[]
  finalCta: {
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
  platformIntegration?: {
    title: string
    description: string
    bullets: string[]
  }
  relatedApps: RelatedAppLink[]
}

export interface PlatformApp {
  id: string
  slug: string
  name: string
  shortDescription: string
  category: PlatformAppCategory
  status: PlatformAppStatus
  icon: LucideIcon
  image: string
  color: string
  href: string
  features: string[]
  cardBadges: [string, string]
  platformCapabilities: PlatformCapability
  landingContent: AppLandingContent
  seo: {
    title: string
    description: string
    canonicalPath: string
    socialImage: string
    keywords: KeywordProfile
    categoryLabel: string
  }
}
