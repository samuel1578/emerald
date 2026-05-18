"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Compass, Plane, Hotel, Users, Car, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const services = [
  {
    icon: Compass,
    title: "Tour Packages",
    desc: "Pre-composed itineraries across 40+ countries, hand-tested by our curators.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    desc: "Document concierge, embassy bookings, and white-glove application support.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    desc: "Direct rates with our portfolio of 800+ boutique hotels and private villas.",
  },
  {
    icon: Users,
    title: "Group Travel",
    desc: "Corporate retreats, milestone trips, and intimate family expeditions.",
  },
  {
    icon: Car,
    title: "Airport Pickup",
    desc: "Private chauffeur transfers with multilingual hosts in every city we operate.",
  },
  {
    icon: MessageCircle,
    title: "Travel Consultation",
    desc: "Free 30-minute calls with a destination specialist before you commit.",
  },
]

export function ServicesSection() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 2000)

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <section className="relative overflow-hidden bg-[#011A51] py-12 text-white md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#087767]/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#0FB89C]">Our services</p>
            <h2 className="font-raleway mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              End-to-end care, from <span className="italic text-[#ED7D21]">first idea</span> to last sunset.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#011A51] transition-transform hover:scale-105"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Swiper */}
        <div className="mt-10 md:hidden">
          <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent className="-ml-0">
              {services.map((s, i) => (
                <CarouselItem key={i} className="pl-0 basis-full">
                  <div className="group relative bg-[#011A51] p-8 rounded-3xl border border-white/10 h-full">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#087767]/20 text-[#0FB89C] ring-1 ring-[#087767]/40">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-medium">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ED7D21]">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="mt-10 hidden grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative bg-[#011A51] p-8 transition-colors hover:bg-[#06183d]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#087767]/20 text-[#0FB89C] ring-1 ring-[#087767]/40 transition-all group-hover:bg-[#ED7D21]/15 group-hover:text-[#ED7D21] group-hover:ring-[#ED7D21]/40">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display mt-6 text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ED7D21] opacity-0 transition-all duration-500 group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
