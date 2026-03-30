"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { memo } from "react"
import type { NavigationAppGroup } from "./types"

interface MegaMenuProps {
  showMegaMenu: boolean
  groups: NavigationAppGroup[]
  onMouseLeave: () => void
  onMouseEnter: () => void
}

export const MegaMenu = memo(({ showMegaMenu, groups, onMouseLeave, onMouseEnter }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {showMegaMenu ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed top-20 left-0 right-0 z-40 glass-effect shadow-2xl border-2 border-white/50 overflow-hidden"
          data-mega-menu
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="max-w-6xl mx-auto p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Apps activas de la plataforma</h3>
              <p className="text-gray-600">
                Todos los modulos publicados comparten autenticacion, permisos y storage global.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {groups.map((group) => (
                <div key={group.title} className="rounded-3xl border border-blue-100 bg-white/70 p-5">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{group.title}</h4>
                    <p className="text-sm text-gray-600">{group.description}</p>
                  </div>

                  <div className="space-y-3">
                    {group.apps.map((app) => (
                      <Link
                        key={app.id}
                        href={app.href}
                        className="flex items-center gap-3 rounded-2xl p-3 hover:bg-blue-50 transition-colors"
                      >
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0">
                          <Image src={app.image} alt={app.name} fill className="object-cover" sizes="56px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900">{app.name}</div>
                          <div className="text-sm text-gray-600 line-clamp-2">{app.shortDescription}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
})

MegaMenu.displayName = "MegaMenu"
