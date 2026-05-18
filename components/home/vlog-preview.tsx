"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Eye } from "lucide-react"
import { vlogs } from "@/lib/data"

export function VlogPreview() {
  const [hero, ...rest] = vlogs
  return (
    <section className="relative bg-muted/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">From the vlog</p>
            <h2 className="font-raleway mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Watch the world, <span className="text-[#ED7D21]">slowly</span>.
            </h2>
          </div>
          <Link
            href="/vlog"
            className="hidden items-center gap-1.5 text-sm font-semibold underline underline-offset-8 hover:text-[#087767] md:inline-flex"
          >
            All episodes
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="relative aspect-video">
              <Image src={hero.image || "/placeholder.svg"} alt={hero.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 transition-opacity group-hover:from-black/90" />
              <button
                aria-label="Play"
                className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#011A51] shadow-2xl transition-transform group-hover:scale-110 md:h-24 md:w-24"
              >
                <Play className="ml-1 h-8 w-8 fill-current" />
              </button>
              <div className="absolute inset-x-6 bottom-6 text-white">
                <span className="rounded-full bg-[#ED7D21] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {hero.category}
                </span>
                <h3 className="font-display mt-4 max-w-xl text-balance text-3xl font-medium leading-tight md:text-4xl">
                  {hero.title}
                </h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-white/80">
                  <span>{hero.duration}</span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-3 w-3" /> {hero.views} views
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {rest.slice(0, 3).map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-foreground hover:text-background"
              >
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                  <Image src={v.image || "/placeholder.svg"} alt={v.title} fill className="object-cover" />
                  <span className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-display text-[10px] uppercase tracking-[0.25em] text-[#ED7D21]">
                    {v.category}
                  </span>
                  <h4 className="font-display mt-1 text-balance text-base font-medium leading-snug">{v.title}</h4>
                  <p className="mt-1 text-xs opacity-70">
                    {v.duration} · {v.views}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
