"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <section className="relative bg-background pb-12 pt-8 md:pb-16 md:pt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-[#011A51] p-10 text-white md:p-16"
        >
          <Image
            src="/hero/maldives.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011A51] via-[#011A51]/85 to-[#011A51]/30" />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.32em] text-[#0FB89C]">The dispatch</p>
              <h2 className="font-raleway mt-3 max-w-xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                Hidden routes, in your inbox. <span className="italic text-[#ED7D21]">Once a month.</span>
              </h2>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-white/70">
                One long-form essay, three quietly extraordinary places, and an early-access link to a new tour. Never
                noisy. Never spammy.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setDone(true)
              }}
              className="flex flex-col gap-3"
            >
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/60" htmlFor="newsletter-email">
                Your email
              </label>
              <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-2 backdrop-blur sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.world"
                  className="flex-1 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#ED7D21] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  {done ? "Subscribed" : "Subscribe"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-white/50">No spam. Unsubscribe anytime. Read past dispatches in the vlog.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
