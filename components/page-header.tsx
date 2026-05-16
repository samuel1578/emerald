"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  image: string
}) {
  return (
    <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden bg-[#011A51] text-white">
      <Image src={image || "/placeholder.svg"} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#011A51]/50 via-[#011A51]/40 to-[#011A51]/95" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-6 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xs uppercase tracking-[0.32em] text-[#0FB89C]"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-title mt-4 max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
