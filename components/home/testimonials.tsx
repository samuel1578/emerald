"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/lib/data"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

export function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const next = () => setI((p) => (p + 1) % testimonials.length)
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative bg-background py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">Travellers</p>
        <h2 className="font-display mt-3 text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Quietly, the kindest <span className="italic text-[#ED7D21]">words</span>.
        </h2>

        <div className="relative mt-10">
          <Quote
            aria-hidden
            className="absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 fill-[#087767]/10 text-transparent"
          />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <p className="font-display mx-auto max-w-3xl text-balance text-2xl font-light italic leading-snug md:text-4xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-10 flex flex-col items-center gap-2">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#087767] font-display text-lg font-medium text-white">
                  {t.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <p className="font-display text-base font-medium">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-foreground hover:text-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#ED7D21]" : "w-1.5 bg-border"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-foreground hover:text-background"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
