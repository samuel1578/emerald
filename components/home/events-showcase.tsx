"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { campaigns } from "@/lib/data"
import { Calendar, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function EventsShowcase() {
  const router = useRouter()
  const featuredCampaigns = campaigns.filter((c) => c.featured && c.status !== "past")

  return (
    <section className="relative bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">Upcoming events</p>
            <h2 className="font-raleway mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Moments worth <span className="text-[#ED7D21]">flying for</span>.
            </h2>
          </div>
          <Link
            href="/events"
            className="hidden items-center gap-1.5 text-sm font-semibold underline underline-offset-8 hover:text-[#087767] md:inline-flex"
          >
            All events <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCampaigns.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              onClick={() => router.push(`/events?campaign=${c.id}`)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={c.teaserImage || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-black">
                    View Details <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <span className="absolute left-5 top-5 rounded-full bg-[#ED7D21] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-[#087767]" /> {c.dateRange}
                </div>
                <h3 className="font-display mt-4 text-balance text-2xl font-medium leading-tight">{c.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
