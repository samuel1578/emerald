"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? (theme === "system" ? resolvedTheme === "dark" : theme === "dark") : true

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-11 w-[84px] items-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:bg-card",
        className,
      )}
    >
      <span
        className={cn(
          "absolute top-1 grid h-9 w-9 place-items-center rounded-full bg-[#087767] text-white shadow-md transition-all duration-500 ease-out",
          isDark ? "left-[42px]" : "left-1",
        )}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      <Sun className={cn("ml-3 h-4 w-4 transition-opacity", isDark ? "opacity-30" : "opacity-0")} />
      <Moon className={cn("ml-auto mr-3 h-4 w-4 transition-opacity", isDark ? "opacity-0" : "opacity-30")} />
    </button>
  )
}
