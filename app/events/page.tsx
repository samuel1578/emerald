"use client"

import { useEffect, useState, Suspense, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { campaigns, Campaign } from "@/lib/data"
import { CampaignModal } from "@/components/events/campaign-modal"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const diff = Math.max(0, target.getTime() - now.getTime())
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }

    // Set initial time on mount
    setTimeLeft(calculateTimeLeft())

    const t = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(t)
  }, [target])

  return timeLeft
}

function EventsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null)

  const featuredCampaign = campaigns.find((c) => c.featured && c.featuredOrder === 1) || campaigns[0]
  const targetDate = useRef(new Date(featuredCampaign.targetDate))
  const timeLeft = useCountdown(targetDate.current)

  useEffect(() => {
    const campaignId = searchParams.get("campaign")
    if (campaignId) {
      const campaign = campaigns.find((c) => c.id === campaignId)
      if (campaign && campaign.pricing.singleOccupancy > 0) {
        setSelectedCampaign(campaign)
      }
    }
  }, [searchParams])

  const handleClose = () => {
    setSelectedCampaign(null)
    router.replace("/events", { scroll: false })
  }

  const handleSelect = (campaign: Campaign) => {
    if (campaign.pricing.singleOccupancy > 0) {
      setSelectedCampaign(campaign)
      router.push(`/events?campaign=${campaign.id}`, { scroll: false })
    }
  }

  const cells = timeLeft
    ? [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ]
    : [
      { label: "Days", value: 0 },
      { label: "Hours", value: 0 },
      { label: "Minutes", value: 0 },
      { label: "Seconds", value: 0 },
    ]

  return (
    <>
      <Navbar transparentOnTop />
      <PageHeader
        eyebrow="Events"
        title={
          <>
            Cinematic gatherings. <span className="italic text-[#ED7D21]">Limited seats.</span>
          </>
        }
        subtitle="Festivals, retreats and one-off experiences hosted by Emeralds Eagle around the world."
        image="/hero/iceland.jpg"
      />

      {/* Featured countdown event */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#011A51] text-white">
            <Image
              src={featuredCampaign.teaserImage || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011A51] via-[#011A51]/80 to-transparent" />
            <div className="relative grid gap-10 p-10 md:grid-cols-2 md:p-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#ED7D21] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  Featured · {featuredCampaign.tag}
                </span>
                <h2 className="font-display mt-6 max-w-xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                  {featuredCampaign.title}
                </h2>
                <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/80">
                  {featuredCampaign.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleSelect(featuredCampaign)}
                    className="rounded-full bg-[#ED7D21] px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
                  >
                    Reserve seat
                  </button>
                  <button
                    onClick={() => handleSelect(featuredCampaign)}
                    className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
                  >
                    Full itinerary
                  </button>
                </div>
              </div>

              <div>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-white/60">Begins in</p>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {cells.map((c) => (
                    <div
                      key={c.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                    >
                      <div className="font-display text-3xl font-medium tracking-tight md:text-5xl">
                        {String(c.value).padStart(2, "0")}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/60">{c.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-white/60">Duration</p>
                    <p className="font-display mt-1">{featuredCampaign.duration}</p>
                  </div>
                  <div>
                    <p className="text-white/60">Guests</p>
                    <p className="font-display mt-1">{featuredCampaign.maxGuests} max</p>
                  </div>
                  <div>
                    <p className="text-white/60">From</p>
                    <p className="font-display mt-1">
                      {featuredCampaign.pricing.currency} {featuredCampaign.pricing.singleOccupancy.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12">
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">Explore all</p>
            <h2 className="font-display mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              Upcoming <span className="italic text-[#ED7D21]">Campaigns</span>.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign, i) => {
              const isComingSoon = campaign.pricing.singleOccupancy === 0
              return (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => !isComingSoon && handleSelect(campaign)}
                  className={cn(
                    "group relative overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500",
                    !isComingSoon && "cursor-pointer hover:shadow-2xl hover:shadow-[#087767]/10"
                  )}
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={campaign.teaserImage || "/placeholder.svg"}
                      alt={campaign.title}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700",
                        !isComingSoon && "group-hover:scale-110"
                      )}
                    />
                    {isComingSoon && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                        <span className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                        {campaign.destination}
                      </p>
                      <h3 className="font-display mt-2 text-2xl font-medium leading-tight">
                        {campaign.title}
                      </h3>
                      <p className="mt-2 text-xs font-medium text-white/60">
                        {campaign.dateRange}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCampaign && (
          <CampaignModal campaign={selectedCampaign} onClose={handleClose} />
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}

export default function EventsPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <EventsContent />
      </Suspense>
    </main>
  )
}
