"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { vlogs } from "@/lib/data"
import { Play, Eye, ArrowUpRight } from "lucide-react"

const categories = ["All", "City Guide", "Luxury", "Cinematic", "Culture", "Adventure"]

export default function VlogPage() {
  const [cat, setCat] = useState("All")
  const list = cat === "All" ? vlogs : vlogs.filter((v) => v.category === cat)
  const [featured, ...rest] = list.length ? list : vlogs

  return (
    <main>
      <Navbar transparentOnTop />

      {/* Featured hero vlog */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#011A51] text-white">
        <Image src={featured.image || "/placeholder.svg"} alt={featured.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011A51]/30 via-[#011A51]/40 to-[#011A51]" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 pt-32 md:px-6">
          <span className="font-display text-xs uppercase tracking-[0.32em] text-[#0FB89C]">Travel vlog · Featured</span>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
            {featured.title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-white/80 md:text-lg">
            Stories told with our camera, our editors, and a stubborn belief that the slow shot is usually the right
            shot.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full bg-[#ED7D21] px-6 py-3.5 text-sm font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#011A51]">
                <Play className="ml-0.5 h-3 w-3 fill-current" />
              </span>
              Play episode
            </button>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/70">
              <Eye className="h-4 w-4" /> {featured.views} views · {featured.duration}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">All episodes</p>
              <h2 className="font-display mt-3 text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                The library
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    cat === c ? "border-[#011A51] bg-[#011A51] text-white" : "border-border hover:border-[#011A51]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((v, i) => (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src={v.image || "/placeholder.svg"}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-[#011A51]">
                      <Play className="ml-1 h-6 w-6 fill-current" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                    {v.duration}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.25em] text-[#ED7D21]">{v.category}</p>
                    <h3 className="font-display mt-1 text-balance text-xl font-medium leading-snug">{v.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      <Eye className="mr-1 inline h-3 w-3" /> {v.views} views
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-foreground" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
