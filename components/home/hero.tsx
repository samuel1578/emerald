"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, Play, Star } from "lucide-react"

const slides = [
  { src: "/hero/santorini.jpg", label: "Aegean Coast", place: "Santorini, Greece" },
  { src: "/hero/bali.jpg", label: "Tropical Reverie", place: "Bali, Indonesia" },
  { src: "/hero/safari.jpg", label: "Wild Frontier", place: "Serengeti, Tanzania" },
  { src: "/hero/iceland.jpg", label: "Aurora Land", place: "Reykjavík, Iceland" },
]

export function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-[#011A51] text-white">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[i].src || "/placeholder.svg"}
            alt={slides[i].place}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[#011A51]/40 via-[#011A51]/30 to-[#011A51]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#011A51]/70 via-transparent to-transparent" />

      <div
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 pb-24 md:px-6 md:pb-32"
        style={{ paddingTop: "var(--header-height, 80px)" }}
      >
        <div className="flex flex-1 flex-col justify-end md:justify-center md:pt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="hero-title max-w-4xl"
          >
            The world,{" "}
            <span className="italic text-[#ED7D21]">
              <span className="font-serif">unscripted.</span>
            </span>
            <br />
            Travel, <span className="text-[#0FB89C]">composed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg"
          >
            Emeralds Eagle designs cinematic, hand-crafted journeys for travellers who&apos;d rather feel a place than
            tick a box. Hidden temples, alpine ridges, dune symphonies — composed for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/tours"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ED7D21] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_-15px_rgba(237,125,33,0.7)] transition-transform hover:scale-[1.03]"
            >
              Explore tours
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/vlog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#011A51]">
                <Play className="ml-0.5 h-3 w-3 fill-current" />
              </span>
              Watch the film
            </Link>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-8"
        >
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Now playing</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={slides[i].place}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="font-display mt-1 text-xl md:text-2xl"
                >
                  {slides[i].place}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className="relative h-1 w-12 overflow-hidden rounded-full bg-white/20"
                >
                  {idx === i && (
                    <motion.span
                      key={i}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.5, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-[#ED7D21]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#ED7D21] text-[#ED7D21]" />
                ))}
              </div>
              <span>
                <span className="font-semibold text-white">4.96</span> · 2,400+ travellers
              </span>
            </div>

            <div className="hidden h-10 w-px bg-white/15 md:block" />

            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Featured in</p>
              <p className="font-display mt-1 text-sm tracking-wide text-white/90">
                Condé Nast · Monocle · National Geographic
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-white/20">
          <motion.div
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-6 w-px bg-[#ED7D21]"
          />
        </div>
      </div>
    </section>
  )
}
