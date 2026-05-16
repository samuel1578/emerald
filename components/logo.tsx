import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  href = "/",
  variant = "default",
}: {
  className?: string
  href?: string
  variant?: "default" | "light"
}) {
  return (
    <Link
      href={href}
      className={cn("group relative flex items-center transition-transform duration-300 hover:scale-[1.02]", className)}
      aria-label="Emeralds Eagle home"
    >
      <div className="relative h-10 w-auto min-w-[160px] sm:h-12 md:h-14 md:min-w-[210px]">
        <Image
          src="/logo.png"
          alt="Emeralds Eagle Ltd."
          fill
          className={cn(
            "object-contain object-left transition-all duration-500",
            // Adaptive visibility system:
            // 1. Over dark imagery (transparent navbar state), we invert to white
            variant === "light" && "brightness-0 invert drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]",

            // 2. In Dark Mode (solid navbar state), we also want a light logo
            "dark:brightness-0 dark:invert",

            // 3. In Light Mode (solid navbar state), we keep the original brand colors
            // If variant is default and not dark mode, it stays as is.
          )}
          priority
        />
      </div>
    </Link>
  )
}
