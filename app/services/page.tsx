import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesSection } from "@/components/home/services-section"
import { Compass, Hotel, Plane, Users } from "lucide-react"
import Image from "next/image"

const alternating = [
  {
    icon: Compass,
    title: "Bespoke itinerary design",
    body: "A senior curator interviews you over a long call, then composes an itinerary that flexes around your mood, energy and tastes. Every detail — from arrival music to pillow firmness — is yours to shape.",
    image: "/hero/santorini.jpg",
  },
  {
    icon: Hotel,
    title: "Hand-picked accommodation",
    body: "Eight hundred boutique hotels, private villas and heritage riads — all vetted by our team. Direct rates, upgrades, and the kind of room you didn't know you could book.",
    image: "/hero/maldives.jpg",
  },
  {
    icon: Plane,
    title: "End-to-end logistics",
    body: "Visas, transfers, flights, dietary requirements, jet-lag protocols. We coordinate the dull so you can experience the extraordinary.",
    image: "/hero/tokyo.jpg",
  },
  {
    icon: Users,
    title: "Private groups & retreats",
    body: "Family reunions, corporate offsites, milestone birthdays. We design closed-door experiences for groups of 6 to 60, anywhere on earth.",
    image: "/hero/safari.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navbar transparentOnTop />
      <PageHeader
        eyebrow="Services"
        title={
          <>
            We design the journey. <span className="text-[#ED7D21]">You arrive.</span>
          </>
        }
        subtitle="Eight verticals, one philosophy: nothing left to chance, nothing too small to consider."
        image="/hero/morocco.jpg"
      />

      <ServicesSection />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-4 md:space-y-32 md:px-6">
          {alternating.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#087767]/10 text-[#087767]">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="font-raleway mt-6 text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {s.body}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#011A51] px-5 py-2.5 text-sm font-semibold text-white">
                    Talk to a curator
                  </button>
                  <button className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold">
                    Read case study
                  </button>
                </div>
              </div>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                <Image src={s.image || "/placeholder.svg"} alt={s.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
