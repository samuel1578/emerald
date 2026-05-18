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
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-white/70">
              Cinematic journeys, hand-crafted by curators who&apos;ve walked the paths themselves. From hidden coves to
              cultural odysseys — travel as it should be.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#ED7D21]" />
                Akuafo Hall Annex B, Legon Campus
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#ED7D21]" />
                emeraldseagle.ltd@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#ED7D21]" />
                0508698826 / 0277117735
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {[Instagram, Youtube, Twitter, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-[#ED7D21] hover:text-[#ED7D21]"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs uppercase tracking-[0.3em] text-white/50">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/80 transition-colors hover:text-[#ED7D21]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Emeralds Eagle. Crafted with wanderlust.</p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/40">
            The world is a book — we turn the pages.
          </p>
        </div>
      </div>
    </footer>
  )
}
