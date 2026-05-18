"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Clock, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { tours } from "@/lib/data"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function FeaturedTours() {
  const featured = tours.slice(0, 6)
  const [currentPage, setCurrentPage] = useState(0)
  const [mobileActiveDot, setMobileActiveDot] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsDesktop(window.innerWidth >= 768)
      if (scrollRef.current) {
        setContainerWidth(scrollRef.current.offsetWidth)
      }
    }
    checkBreakpoint()
    window.addEventListener("resize", checkBreakpoint)
    return () => window.removeEventListener("resize", checkBreakpoint)
  }, [])

  const handleScroll = () => {
    if (!isDesktop && scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const active = Math.round(scrollLeft / (0.88 * containerWidth))
      setMobileActiveDot(active)
    }
  }

  const next = () => setCurrentPage((p) => Math.min(p + 1, 1))
  const prev = () => setCurrentPage((p) => Math.max(p - 1, 0))

  return (
    <section className="relative bg-muted/40 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">Featured tours</p>
            <h2 className="font-raleway mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Journeys our curators <span className="italic text-[#ED7D21]">are obsessed with</span>.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/tours"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background lg:inline-flex"
            >
              View all tours <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={prev}
                disabled={currentPage === 0}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all",
                  currentPage === 0 ? "opacity-30 grayscale" : "hover:bg-foreground hover:text-background"
                )}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                disabled={currentPage === 1}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all",
                  currentPage === 1 ? "opacity-30 grayscale" : "hover:bg-foreground hover:text-background"
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-8">
          {/* Desktop View */}
          <div className="hidden md:block overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              <div className="grid min-w-full grid-cols-3 gap-6">
                {featured.slice(0, 3).map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                  >
                    <TourCard tour={t} />
                  </motion.div>
                ))}
              </div>
              <div className="grid min-w-full grid-cols-3 gap-6">
                {featured.slice(3, 6).map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                  >
                    <TourCard tour={t} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {featured.map((t, i) => (
              <div key={t.id} className="w-[88vw] flex-shrink-0 snap-start">
                <TourCard tour={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: isDesktop ? 2 : 6 }).map((_, idx) => {
            const active = isDesktop ? currentPage === idx : mobileActiveDot === idx
            return (
              <div
                key={idx}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  active ? "w-6 bg-[#087767]" : "w-2 bg-border"
                )}
              />
            )
          })}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold"
          >
            View all tours <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function TourCard({ tour }: { tour: (typeof tours)[number] }) {
  return (
    <Link
      href="/tours"
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(1,26,81,0.4)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#011A51] backdrop-blur">
          {tour.category}
        </span>

        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <Star className="h-3 w-3 fill-[#ED7D21] text-[#ED7D21]" />
          {tour.rating}
        </span>

        <div className="absolute inset-x-4 bottom-4 text-white">
          <div className="mb-2 flex items-center gap-3 text-xs text-white/80">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {tour.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {tour.duration}
            </span>
          </div>
          <h3 className="font-display text-balance text-2xl font-medium leading-tight">{tour.title}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From</p>
          <p className="font-display text-2xl font-semibold tracking-tight">
            ${tour.price.toLocaleString()}
            <span className="ml-1 text-xs font-normal text-muted-foreground">/ person</span>
          </p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  )
}
