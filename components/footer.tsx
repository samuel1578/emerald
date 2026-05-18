import Link from "next/link"
import { Instagram, Youtube, Twitter, Facebook, MapPin, Mail, Phone } from "lucide-react"
import { Logo } from "./logo"

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Tours", href: "/tours" },
      { label: "Destinations", href: "/destinations" },
      { label: "Events", href: "/events" },
      { label: "Vlog", href: "/vlog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Press", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#011A51] text-white dark:bg-[#020c25]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#087767]/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Logo variant="light" />
            </div>
            <p className="mt-4 max-w-sm text-pretty text-xs leading-relaxed text-white/60 md:mt-6 md:text-sm md:text-white/70">
              Cinematic journeys, hand-crafted by curators. Hidden coves to cultural odysseys — travel as it should be.
            </p>

            <div className="mt-6 space-y-2 text-xs text-white/60 md:mt-8 md:space-y-3 md:text-sm md:text-white/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#ED7D21] md:h-4 md:w-4" />
                Akuafo Hall Annex B, Legon Campus
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#ED7D21] md:h-4 md:w-4" />
                emeraldseagle.ltd@gmail.com
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#ED7D21] md:h-4 md:w-4" />
                0508698826 / 0277117735
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 md:mt-8">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-[#ED7D21] hover:text-[#ED7D21] md:h-10 md:w-10 md:border-white/15 md:text-white/80"
                  aria-label="social link"
                >
                  <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:contents">
            {columns.map((col) => (
              <div key={col.title} className={col.title === "Support" ? "col-span-2 md:col-span-1" : ""}>
                <h4 className="font-display text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs md:tracking-[0.3em] md:text-white/50">{col.title}</h4>
                <ul className={`mt-3 md:mt-5 ${col.title === "Support" ? "flex flex-wrap items-center gap-x-3 gap-y-2 md:block md:space-y-3" : "space-y-2 md:space-y-3"}`}>
                  {col.links.map((l, idx) => (
                    <li key={l.label} className="flex items-center">
                      <Link href={l.href} className="text-xs text-white/70 transition-colors hover:text-[#ED7D21] md:text-sm md:text-white/80">
                        {l.label}
                      </Link>
                      {col.title === "Support" && idx < col.links.length - 1 && (
                        <span className="ml-3 text-[8px] text-white/20 md:hidden">•</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 md:mt-16 md:flex-row md:items-center md:border-white/10 md:pt-8">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Emeralds Eagle. Crafted with wanderlust.</p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
            The world is a book — we turn the pages.
          </p>
        </div>
      </div>
    </footer>
  )
}
