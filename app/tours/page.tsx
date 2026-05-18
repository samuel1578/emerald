"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { TourCard } from "@/components/home/featured-tours"
import { tours } from "@/lib/data"
import { motion } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"

const categories = ["All", "Cultural", "Adventure", "Luxury", "Wellness", "Family"] as const
const destinations = ["All", ...Array.from(new Set(tours.map((t) => t.location)))]

function ToursContent() {
  const searchParams = useSearchParams()
  const [cat, setCat] = useState<(typeof categories)[number]>("All")
  const [dest, setDest] = useState("All")
  const [price, setPrice] = useState(7000)
  const [q, setQ] = useState("")

  // Sync with URL params on mount
  useEffect(() => {
    const locationParam = searchParams.get("location")
    if (locationParam && destinations.includes(locationParam)) {
      setDest(locationParam)
    }

    const categoryParam = searchParams.get("category")
    if (categoryParam && (categories as readonly string[]).includes(categoryParam)) {
      setCat(categoryParam as any)
    }

    const queryParam = searchParams.get("q")
    if (queryParam) {
      setQ(queryParam)
    }
  }, [searchParams])

  const filtered = useMemo(
    () =>
      tours.filter(
        (t) =>
          (cat === "All" || t.category === cat) &&
          (dest === "All" || t.location === dest) &&
          t.price <= price &&
          (q === "" || t.title.toLowerCase().includes(q.toLowerCase()) || t.location.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, dest, price, q],
  )

  return (
    <main>
      <Navbar transparentOnTop />
      <PageHeader
        eyebrow="The tours"
        title={
          <>
            Compose your <span className="italic text-[#ED7D21]">next chapter</span>.
          </>
        }
        subtitle="Filter by mood, destination, or budget. Every tour is privately guided, hand-vetted, and ready to be shaped around you."
        image="/hero/santorini.jpg"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            {/* Sidebar filters */}
            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <SlidersHorizontal className="h-4 w-4 text-[#087767]" /> Filters
                </div>

                <div className="relative mt-5">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search tours"
                    className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-sm focus:border-[#087767] focus:outline-none"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Category
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCat(c)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${cat === c
                            ? "border-[#087767] bg-[#087767] text-white"
                            : "border-border hover:border-[#087767]"
                          }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Destination
                  </p>
                  <select
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                    className="mt-3 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm focus:border-[#087767] focus:outline-none"
                  >
                    {destinations.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Max price
                    </p>
                    <span className="font-display text-sm font-semibold">${price.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={7000}
                    step={100}
                    value={price}
                    onChange={(e) => setPrice(Number.parseInt(e.target.value))}
                    className="mt-3 w-full accent-[#ED7D21]"
                  />
                </div>

                <button
                  onClick={() => {
                    setCat("All")
                    setDest("All")
                    setPrice(7000)
                    setQ("")
                  }}
                  className="mt-6 w-full rounded-xl border border-border py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background"
                >
                  Reset filters
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div>
              <div className="mb-6 flex items-end justify-between">
                <p className="text-sm text-muted-foreground">
                  <span className="font-display text-2xl font-medium text-foreground">{filtered.length}</span> tours
                  match your taste
                </p>
                <select className="rounded-xl border border-border bg-card px-3 py-2 text-sm focus:outline-none">
                  <option>Recommended</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                  <option>Rating</option>
                </select>
              </div>

              <motion.div layout className="grid gap-6 md:grid-cols-2">
                {filtered.map((t, i) => (
                  <motion.div
                    layout
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <TourCard tour={t} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                {[1, 2, 3, 4].map((p) => (
                  <button
                    key={p}
                    className={`h-10 w-10 rounded-full text-sm font-semibold ${p === 1 ? "bg-[#011A51] text-white" : "border border-border hover:bg-muted"
                      }`}
                  >
                    {p}
                  </button>
                ))}
                <span className="px-2 text-muted-foreground">…</span>
                <button className="h-10 w-10 rounded-full border border-border text-sm font-semibold hover:bg-muted">
                  12
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function ToursPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToursContent />
    </Suspense>
  )
}
