import { LucideIcon } from "lucide-react"

export interface Solution {
  name: string
  description: string
  icon: LucideIcon
  image: string
  features: string[]
  color: string
  href: string
}

export interface NavLink {
  name: string
  href: string
}

