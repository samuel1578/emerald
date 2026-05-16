import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Testimonials } from "@/components/home/testimonials"
import Image from "next/image"

const values = [
  { title: "Slowness", body: "We&apos;d rather you stay one extra night than tick one more box." },
  { title: "Curation", body: "Every hotel, guide and meal has been tested by a human on our team." },
  { title: "Honesty", body: "If a destination isn&apos;t worth the airfare this season, we&apos;ll say so." },
  { title: "Craft", body: "We design itineraries like films — pacing, mood, contrast." },
]

const timeline = [
  { year: "2014", title: "Founded in Accra", body: "Two friends, one vision, and a stubborn belief that Ghanaian hospitality could redefine global travel." },
  { year: "2017", title: "First cinematic film", body: "Our documentary on Northern Ghana wins an indie travel award and our inbox explodes." },
  { year: "2020", title: "The slow pivot", body: "We close our group tours and rebuild around small, hand-crafted journeys that tell deeper stories." },
  { year: "2023", title: "Global footprint", body: "Curators in residence from Accra to the world, bringing Ghanaian warmth to every continent." },
  { year: "2026", title: "The Eagle Atlas", body: "Our 200-page annual print journal launches, celebrating travel through a Ghanaian lens." },
]

const team = [
  { name: "Samuel Ogyenim-Boateng", role: "Founder · Curator-in-Chief" },
  { name: "Idris Lawal", role: "Head of Africa" },
  { name: "Hana Sato", role: "Head of Asia" },
  { name: "Margaux Vidal", role: "Head of Europe" },
  { name: "Theo Brennan", role: "Director of Film" },
  { name: "Anya Volkova", role: "Director of Operations" },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar transparentOnTop />
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Travel is a <span className="italic text-[#ED7D21]">love letter</span> to the world.
          </>
        }
        subtitle="Experience the best of Ghana — from the streets of Accra to the shores of Cape Coast. A fully guided cultural journey built for the curious traveller."
        image="/hero/bali.jpg"
      />

      {/* Story */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 md:grid-cols-[1fr_1.2fr] md:px-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">Our story</p>
            <h2 className="font-display mt-3 max-w-md text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              A studio that happens to be a travel agency.
            </h2>
          </div>
          <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              Emeralds Eagle was born from a refusal — a refusal to accept that &ldquo;guided tour&rdquo; should mean
              air-conditioned buses, lukewarm buffets, and 6 a.m. wake-ups for a photo opportunity.
            </p>
            <p>
              Based in Accra, we&apos;re a team of twenty-eight, scattered across four continents. Half of us come from filmmaking and
              hospitality. The other half come from the places we send our travellers to. Together, we design journeys
              the way a director designs a film, infused with the natural warmth of Ghanaian soul.
            </p>
            <p>
              You can call us a travel agency if you&apos;d like. We&apos;ll keep calling ourselves a studio.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">What we believe</p>
          <h2 className="font-display mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            Four ideas that shape every itinerary.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-8">
                <span className="font-display text-5xl font-light text-[#087767]/40">0{i + 1}</span>
                <h3 className="font-display mt-4 text-2xl font-medium">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">The timeline</p>
          <h2 className="font-display mt-3 text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Twelve years of slow building.
          </h2>
          <ol className="mt-14 space-y-12 border-l border-border pl-8 md:pl-12">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] grid h-6 w-6 place-items-center rounded-full bg-[#ED7D21] text-[10px] font-bold text-white md:-left-[50px]">
                  ●
                </span>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-[#087767]">{t.year}</p>
                <h3 className="font-display mt-2 text-2xl font-medium md:text-3xl">{t.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-[#087767]">The team</p>
          <h2 className="font-display mt-3 max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
            Curators, filmmakers, fixers. <span className="italic text-[#ED7D21]">Twenty-eight of us.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((m, i) => (
              <div key={m.name} className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-card">
                <Image
                  src={`/hero/${["bali", "santorini", "safari", "tokyo", "morocco", "alps"][i % 6]}.jpg`}
                  alt=""
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <h3 className="font-display text-2xl font-medium">{m.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  )
}
