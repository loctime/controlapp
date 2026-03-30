"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { memo } from "react"
import type { PlatformApp } from "@/lib/platform-data"
import type { NavLink } from "./types"

interface NavbarMobileProps {
  isOpen: boolean
  apps: PlatformApp[]
  navLinks: NavLink[]
  onClose: () => void
}

export const NavbarMobile = memo(({ isOpen, apps, navLinks, onClose }: NavbarMobileProps) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect border-t border-blue-200 max-h-[80vh] overflow-y-auto"
        >
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-4 mb-3">
                Apps activas
              </div>
              {apps.map((app, index) => (
                <motion.a
                  key={app.name}
                  href={app.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200"
                  onClick={onClose}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center flex-shrink-0`}>
                    <app.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{app.name}</div>
                    <div className="text-xs text-gray-600 line-clamp-1">{app.shortDescription}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (apps.length + index) * 0.05 }}
                className="block text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
                onClick={onClose}
              >
                {link.name}
              </motion.a>
            ))}

            <div className="pt-4 space-y-3">
              <Link
                href="/control-file"
                className="block text-center text-gray-700 hover:text-blue-600 transition-colors text-sm font-semibold py-2"
                onClick={onClose}
              >
                Ver ControlFile
              </Link>
              <Link
                href="/#apps"
                className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/50"
                onClick={onClose}
              >
                Explorar apps
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
})

NavbarMobile.displayName = "NavbarMobile"
