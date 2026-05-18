"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const chapters = [
  {
    n: "01",
    title: "Discover hidden destinations",
    body: "We seek out the places guidebooks haven't found — the quiet ones, the slow ones, the soulful ones.",
    image: "/hero/iceland.jpg",
  },
  {
    n: "02",
    title: "Experience luxury, redefined",
    body: "Private villas, hand-picked chefs, and itineraries that flex around your mood — not the other way around.",
    image: "/hero/maldives.jpg",
  },
  {
    n: "03",
    title: "Explore culture & adventure",
    body: "Walk with elders, dine with farmers, and trek with mountaineers. Real people, real stories, real depth.",
    image: "/hero/morocco.jpg",
  },
  {
    n: "04",
    title: "Create unforgettable memories",
    body: "We measure success in goosebumps, not photographs. Though the photographs tend to be rather good too.",
    image: "/hero/safari.jpg",
  },
]

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mobileActiveDot, setMobileActiveDot] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const mobileScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (mobileScrollRef.current) {
        setContainerWidth(mobileScrollRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const handleScroll = () => {
    if (mobileScrollRef.current && containerWidth) {
      const scrollLeft = mobileScrollRef.current.scrollLeft
      const activeIndex = Math.round(scrollLeft / (0.88 * containerWidth))
      setMobileActiveDot(activeIndex)
    }
  }

  // Use a single scroll listener for the entire section to ensure consistency and performance
  // "start start" means the animation starts when the top of the container hits the top of the viewport
  // "end end" means it ends when the bottom of the container hits the bottom of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <section className="relative bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">The journey</p>
            <h2 className="font-raleway mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Four chapters. <span className="text-[#ED7D21]">One unforgettable</span> story.
            </h2>
          </div>
          <p className="hidden max-w-xs text-pretty text-sm text-muted-foreground md:block">
            Scroll to step through the way we craft every Emeralds Eagle expedition — from discovery to memory.
          </p>
        </div>

        <div ref={containerRef} className="relative grid gap-0 lg:grid-cols-2">
          {/* sticky image */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 h-[calc(100vh-140px)] overflow-hidden rounded-3xl">
              {chapters.map((c, i) => (
                <StickyImage key={c.n} src={c.image} index={i} total={chapters.length} scrollYProgress={scrollYProgress} />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <span className="font-display text-xs uppercase tracking-[0.3em] text-white/70">Emeralds Eagle</span>
                <span className="font-display text-xs uppercase tracking-[0.3em] text-white/70">Journey</span>
              </div>
            </div>
          </div>

          {/* chapters (Desktop) */}
          <div className="hidden flex-col gap-16 lg:flex lg:gap-[28vh] lg:pl-16">
            {chapters.map((c, i) => (
              <Chapter key={c.n} {...c} index={i} />
            ))}
          </div>

          {/* mobile swipe carousel */}
          <div
            ref={mobileScrollRef}
            onScroll={handleScroll}
            className="flex flex-row gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {chapters.map((c) => (
              <div key={c.n} className="w-[88vw] flex-shrink-0 snap-start">
                {/* The chapter image */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.04 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image src={c.image || "/placeholder.svg"} alt={c.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>
                </motion.div>

                {/* The number + divider row */}
                <div className="mt-6 mb-4 flex items-center gap-4">
                  <span className="font-display text-5xl font-light text-[#087767]/80">{c.n}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* The chapter title */}
                <h3 className="font-display text-balance text-3xl font-medium leading-tight tracking-tight">
                  {c.title}
                </h3>

                {/* The chapter body */}
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2 lg:hidden">
          {chapters.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-300 rounded-full ${mobileActiveDot === i ? "w-6 h-2 bg-[#087767]" : "w-2 h-2 bg-border"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StickyImage({
  src,
  index,
  total,
  scrollYProgress,
}: {
  src: string
  index: number
  total: number
  scrollYProgress: any
}) {
  // Calculate the segment of overall scroll where this image is active
  const start = index / total
  const end = (index + 1) / total

  // Fix: Ensure the input range is strictly increasing and stays within valid bounds.
  // The error "Offsets must be monotonically non-decreasing" often happens when 
  // Framer Motion attempts to use the Web Animations API with invalid or non-monotonic offsets.
  // We use a small buffer to ensure strict monotonicity and avoid identical values at the boundaries.
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.05),
      Math.max(0.001, start),
      Math.min(0.999, end),
      Math.min(1, end + 0.05),
    ],
    index === 0 ? [1, 1, 1, 0] : index === total - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0],
  )

  const scale = useTransform(scrollYProgress, [start, end], [1.05, 1])

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Image src={src || "/placeholder.svg"} alt="" fill className="object-cover" priority={index === 0} />
    </motion.div>
  )
}

function Chapter({
  n,
  title,
  body,
  image,
  index,
}: {
  n: string
  title: string
  body: string
  image: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* mobile image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl lg:hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <div className="mb-6 flex items-center gap-4">
        <span className="font-display text-5xl font-light text-[#087767]/80 md:text-6xl">{n}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h3 className="font-display text-balance text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h3>
      <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground md:text-lg">{body}</p>
    </motion.div>
  )
}
