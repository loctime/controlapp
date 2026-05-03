"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, ChevronLeft, ChevronRight, Monitor, Play, Smartphone } from "lucide-react"
import type { MediaGalleryItem, MediaSide } from "@/lib/platform-types"

interface AppMediaGalleryProps {
  items: MediaGalleryItem[]
  appColor: string
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)
  return match ? match[1] : null
}

function MediaContent({ side, label }: { side: MediaSide; label: string }) {
  if (!side.src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-400 bg-slate-50">
        {side.type === "video" ? (
          <Play className="w-8 h-8" strokeWidth={1.5} />
        ) : (
          <Camera className="w-8 h-8" strokeWidth={1.5} />
        )}
        <span className="text-xs font-medium text-center px-4">{label}</span>
      </div>
    )
  }

  if (side.type === "video") {
    const youtubeId = getYouTubeId(side.src)
    if (youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )
    }
    return <video src={side.src} controls className="w-full h-full object-cover" />
  }

  return (
    <Image
      src={side.src}
      alt={label}
      fill
      className="object-cover object-top"
    />
  )
}

function BrowserFrame({ side, caption }: { side: MediaSide; caption: string }) {
  return (
    <div className="flex-[3] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white min-w-0">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex-shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 truncate">
          app.controlapp.com
        </div>
      </div>
      {/* Content */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
        <MediaContent side={side} label={`Vista web — ${caption}`} />
      </div>
    </div>
  )
}

function PhoneFrame({ side, caption }: { side: MediaSide; caption: string }) {
  return (
    <div className="flex-[1.4] flex flex-col items-center min-w-0">
      <div className="relative w-full max-w-[200px] mx-auto">
        {/* Phone shell */}
        <div className="rounded-[2.2rem] overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl">
          {/* Notch */}
          <div className="bg-slate-800 flex justify-center pb-1 pt-2">
            <div className="w-16 h-4 bg-slate-900 rounded-full" />
          </div>
          {/* Screen */}
          <div className="relative bg-slate-50 overflow-hidden" style={{ aspectRatio: "9/19" }}>
            <MediaContent side={side} label={`Vista móvil — ${caption}`} />
          </div>
          {/* Home indicator */}
          <div className="bg-slate-800 flex justify-center py-2">
            <div className="w-20 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Thumbnail({
  item,
  index,
  isActive,
  onClick,
}: {
  item: MediaGalleryItem
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 w-24 flex flex-col gap-1.5 group transition-all ${
        isActive ? "opacity-100" : "opacity-50 hover:opacity-75"
      }`}
    >
      <div
        className={`relative w-full aspect-video rounded-lg overflow-hidden border-2 transition-all ${
          isActive ? "border-blue-500 shadow-md shadow-blue-200" : "border-slate-200"
        }`}
      >
        {item.web.src ? (
          <Image src={item.web.src} alt={item.caption} fill className="object-cover object-top" />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            {item.web.type === "video" ? (
              <Play className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
            ) : (
              <span className="text-xs font-bold text-slate-400">{index + 1}</span>
            )}
          </div>
        )}
      </div>
      <p className="text-[10px] text-slate-500 leading-tight text-left line-clamp-2 group-hover:text-slate-700 transition-colors">
        {item.caption}
      </p>
    </button>
  )
}

export function AppMediaGallery({ items, appColor }: AppMediaGalleryProps) {
  const [selected, setSelected] = useState(0)

  if (!items.length) return null

  const current = items[selected]

  const prev = () => setSelected((i) => (i - 1 + items.length) % items.length)
  const next = () => setSelected((i) => (i + 1) % items.length)

  return (
    <section className="mb-20">
      {/* Header */}
      <div className="text-center mb-8">
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-gradient-to-r ${appColor} text-white mb-4`}
        >
          En acción
        </span>
        <h2 className="text-4xl font-bold text-gray-900">Miralo antes de probarlo</h2>
      </div>

      {/* Split screen */}
      <div className="rounded-3xl bg-slate-900 p-6 lg:p-8 shadow-2xl mb-4">
        {/* Device labels */}
        <div className="flex items-center justify-between mb-5 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            <span className="font-medium">Web</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Móvil</span>
            <Smartphone className="w-4 h-4" />
          </div>
        </div>

        {/* Frames */}
        <div className="flex gap-4 lg:gap-6 items-center">
          <BrowserFrame side={current.web} caption={current.caption} />
          <PhoneFrame side={current.mobile} caption={current.caption} />
        </div>

        {/* Caption + nav */}
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <p className="text-sm text-slate-300 text-center flex-1 px-4 leading-relaxed">
            {current.caption}
          </p>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide">
        {items.map((item, i) => (
          <Thumbnail
            key={i}
            item={item}
            index={i}
            isActive={i === selected}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
    </section>
  )
}
