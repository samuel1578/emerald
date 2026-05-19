import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { PopularDestinations } from "@/components/home/popular-destinations"
import Image from "next/image"
import Link from "next/link"
import { destinations, ghanaAllRegions } from "@/lib/data"

const regions = [
  { name: "Europe", count: 32, image: "/hero/santorini.jpg", href: "#" },
  { name: "Asia", count: 41, image: "/hero/tokyo.jpg", href: "#" },
  { name: "Africa", count: 18, image: "/hero/safari.jpg", href: "/destinations/africa/ghana" },
  { name: "Oceania", count: 12, image: "/hero/bali.jpg", href: "#" },
  { name: "Americas", count: 22, image: "/hero/alps.jpg", href: "#" },
  { name: "Arctic", count: 6, image: "/hero/iceland.jpg", href: "#" },
]

export default function DestinationsPage() {
  return (
    <main>
      <Navbar transparentOnTop />
      <PageHeader
        eyebrow="Destinations"
        title={
          <>
            A planet, <span className="italic text-[#ED7D21]">edited</span>.
          </>
        }
        subtitle="Forty-three countries, hundreds of cities, a single editorial standard. Browse by region or dive into a destination."
        image="/hero/alps.jpg"
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display max-w-xl text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              By region
            </h2>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Six continents, one philosophy: travel slowly, look closely, return changed.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {regions.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <Image
                  src={r.image || "/placeholder.svg"}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-white/70">
                    {r.count} destinations
                  </p>
                  <h3 className="font-display mt-2 text-4xl font-medium md:text-5xl">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-[#ED7D21] mb-2">
            Africa · Ghana
          </p>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-4xl font-medium text-white tracking-tight md:text-5xl">
              Four regions. One country.
            </h2>
            <Link href="/destinations/africa/ghana"
              className="text-sm text-white/50 hover:text-[#ED7D21] transition-colors 
              font-display tracking-widest uppercase hidden md:block">
              Explore Ghana →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ghanaAllRegions.map((region) => (
              <Link key={region.slug} href={`/destinations/africa/ghana/${region.slug}`}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={region.image || "/placeholder.svg"}
                    alt={region.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                      {region.count} destinations
                    </p>
                    <h4 className="font-display text-sm font-medium leading-tight">
                      {region.name}
                    </h4>
                    <p className="text-[10px] text-white/50 mt-1 leading-tight">
                      {region.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PopularDestinations />

      {/* Tall narrative band */}
      <section className="bg-[#087767] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-white/70">Field notes</p>
            <h2 className="font-display mt-3 text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Where the map runs out, the journey begins.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 text-pretty text-lg leading-relaxed text-white/90">
            <p>
              Our destination editors live where they write. From a fisherman&apos;s cottage in the Lofoten Islands to a
              riad above the souk in Fez, each curator earns the privilege of recommending a place.
            </p>
            <p>
              That&apos;s why our destinations don&apos;t read like a list. They read like postcards from a friend who
              already lives there.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
