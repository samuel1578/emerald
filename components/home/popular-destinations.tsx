"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { destinations } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function PopularDestinations() {
  const [activeDot, setActiveDot] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Group destinations into chunks of 3 for mobile pagination
  const chunks = []
  for (let i = 0; i < destinations.length; i += 3) {
    chunks.push(destinations.slice(i, i + 3))
  }

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setContainerWidth(scrollRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const handleScroll = () => {
    if (scrollRef.current && containerWidth > 0) {
      const scrollLeft = scrollRef.current.scrollLeft
      const active = Math.round(scrollLeft / containerWidth)
      setActiveDot(active)
    }
  }

  return (
    <section className="relative bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">Popular destinations</p>
            <h2 className="font-raleway mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Places that <span className="text-[#ED7D21]">change you</span>.
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden items-center gap-1.5 text-sm font-semibold underline underline-offset-8 transition-colors hover:text-[#087767] md:inline-flex"
          >
            All destinations
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Desktop Grid (md and above) */}
        <div className="hidden md:grid auto-rows-[14rem] grid-cols-2 gap-4 md:auto-rows-[18rem] md:grid-cols-4 md:gap-5">
          {destinations.map((d, i) => {
            // bento-style sizing
            const span =
              i === 0
                ? "col-span-2 row-span-2"
                : i === 3
                  ? "col-span-2 md:col-span-2"
                  : i === 5
                    ? "md:row-span-2"
                    : ""
            return (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className={`group relative overflow-hidden rounded-3xl ${span}`}
              >
                <DestinationCard d={d} />
              </motion.div>
            )
          })}
        </div>

        {/* Mobile Swipe Container (below md) */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {chunks.map((chunk, chunkIdx) => (
              <div key={chunkIdx} className="min-w-full flex-shrink-0 snap-start pr-4 last:pr-0">
                <div className="flex flex-col gap-3">
                  {/* Large Card on Top */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                    <DestinationCard d={chunk[0]} />
                  </div>
                  {/* Two Half-Width Cards Below */}
                  <div className="flex gap-3">
                    {chunk.slice(1).map((d) => (
                      <div key={d.name} className="relative aspect-square flex-1 overflow-hidden rounded-[1.5rem]">
                        <DestinationCard d={d} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="mt-8 flex justify-center gap-2">
            {chunks.map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeDot === idx ? "w-6 bg-[#087767]" : "w-2 bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DestinationCard({ d }: { d: (typeof destinations)[0] }) {
  return (
    <>
      <Image
        src={d.image || "/placeholder.svg"}
        alt={d.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">{d.country}</p>
          <h3 className="font-display mt-1 text-2xl font-medium md:text-3xl">{d.name}</h3>
          <p className="mt-1 text-xs text-white/70">{d.tours} curated tours</p>
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#011A51] transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </>
  )
}
