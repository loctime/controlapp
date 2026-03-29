import type { PlatformApp } from "@/lib/platform-data"

export interface NavLink {
  name: string
  href: string
}

export interface NavigationAppGroup {
  title: string
  description: string
  apps: PlatformApp[]
}

