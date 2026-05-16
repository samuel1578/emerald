"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/vlog", label: "Vlog" },
  { href: "/about", label: "About" },
]

export function Navbar({ transparentOnTop = true }: { transparentOnTop?: boolean }) {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const isDark = theme === "dark"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight
      document.documentElement.style.setProperty("--header-height", `${height}px`)
    }
  }, [scrolled])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isSolid = !transparentOnTop || scrolled

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isSolid ? "py-4" : "py-6",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-6 transition-all duration-500 md:px-10",
          isSolid
            ? "mt-2 rounded-full border border-border/60 bg-background/80 px-6 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] backdrop-blur-xl md:mt-3"
            : "py-4",
        )}
      >
        <Logo variant={isSolid ? "default" : transparentOnTop ? "light" : "default"} />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-base font-medium transition-colors",
                  isSolid
                    ? active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      isSolid ? "bg-muted" : "bg-white/15 backdrop-blur",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="/tours"
            className="hidden items-center gap-2 rounded-full bg-[#ED7D21] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_24px_-12px_rgba(237,125,33,0.8)] transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Book a tour
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full border lg:hidden",
              isSolid
                ? "border-border bg-card text-foreground"
                : "border-white/20 bg-white/10 text-white backdrop-blur",
            )}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "fixed inset-0 z-[60] lg:hidden",
              isDark ? "bg-[#011A51]" : "bg-background",
            )}
          >
            <div className="flex h-full flex-col px-6 py-8">
              <div className="flex items-center justify-between">
                <div className="origin-left scale-150">
                  <Logo variant={isDark ? "light" : "default"} />
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-full border",
                    isDark ? "border-white/20 text-white" : "border-border text-foreground",
                  )}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between border-b px-0 py-4 font-display text-4xl font-medium transition-colors",
                        isDark ? "border-white/10" : "border-border",
                        pathname === link.href
                          ? isDark
                            ? "text-white"
                            : "text-foreground"
                          : isDark
                            ? "text-white/60 hover:text-white"
                            : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.label}
                      <ArrowUpRight
                        className={cn(
                          "h-5 w-5",
                          isDark ? "text-white/30" : "text-muted-foreground",
                        )}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div
                className={cn(
                  "mt-auto flex items-center justify-between border-t pt-6",
                  isDark ? "border-white/10" : "border-border",
                )}
              >
                <ThemeToggle />
                <Link
                  href="/tours"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#ED7D21] px-4 py-2 text-sm font-semibold text-white"
                >
                  Book a tour <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
