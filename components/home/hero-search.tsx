"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Search, Users, Check, ChevronsUpDown } from "lucide-react"
import { DateRange } from "react-day-picker"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { tours } from "@/lib/data"

const locations = Array.from(new Set(tours.map((t) => t.location))).sort()

export function HeroSearch() {
    const router = useRouter()
    const [date, setDate] = React.useState<DateRange | undefined>()
    const [location, setLocation] = React.useState("")
    const [openLocation, setOpenLocation] = React.useState(false)
    const [guests, setGuests] = React.useState(1)

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (location) params.set("location", location)
        if (date?.from) params.set("start", format(date.from, "yyyy-MM-dd"))
        if (date?.to) params.set("end", format(date.to, "yyyy-MM-dd"))
        if (guests > 1) params.set("guests", guests.toString())

        router.push(`/tours?${params.toString()}`)
    }

    return (
        <section className="relative z-20 mx-auto -mt-12 w-full max-w-7xl px-4 md:-mt-16 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="rounded-2xl border border-white/10 bg-[#011A51]/80 p-2 shadow-2xl backdrop-blur-xl md:rounded-full md:p-3"
            >
                <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_1.2fr_auto_1fr_auto] md:items-center">
                    {/* Destination */}
                    <div className="relative">
                        <Popover open={openLocation} onOpenChange={setOpenLocation}>
                            <PopoverTrigger asChild>
                                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/5 md:rounded-full">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#087767]/20 text-[#0FB89C]">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Location</span>
                                        <span className="truncate text-sm font-medium text-white">
                                            {location || "Where to next?"}
                                        </span>
                                    </div>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[280px] p-0 border-white/10 bg-[#011A51] text-white" align="start">
                                <Command className="bg-transparent">
                                    <CommandInput placeholder="Search destinations..." className="text-white" />
                                    <CommandList>
                                        <CommandEmpty>No destination found.</CommandEmpty>
                                        <CommandGroup>
                                            {locations.map((loc) => (
                                                <CommandItem
                                                    key={loc}
                                                    value={loc}
                                                    onSelect={(currentValue) => {
                                                        setLocation(currentValue === location ? "" : currentValue)
                                                        setOpenLocation(false)
                                                    }}
                                                    className="text-white hover:bg-white/10"
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            location === loc ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {loc}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="hidden h-10 w-px bg-white/10 md:block" />

                    {/* Date Picker */}
                    <div className="relative">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/5 md:rounded-full">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ED7D21]/20 text-[#ED7D21]">
                                        <CalendarIcon className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Dates</span>
                                        <span className="truncate text-sm font-medium text-white">
                                            {date?.from ? (
                                                date.to ? (
                                                    <>
                                                        {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                                                    </>
                                                ) : (
                                                    format(date.from, "LLL dd")
                                                )
                                            ) : (
                                                "Select dates"
                                            )}
                                        </span>
                                    </div>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 border-white/10 bg-[#011A51]" align="center">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                    className="bg-transparent text-white"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="hidden h-10 w-px bg-white/10 md:block" />

                    {/* Guests */}
                    <div className="relative">
                        <Popover>
                            <PopoverTrigger asChild>
                                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-white/5 md:rounded-full">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Travelers</span>
                                        <span className="truncate text-sm font-medium text-white">
                                            {guests} {guests === 1 ? "Traveler" : "Travelers"}
                                        </span>
                                    </div>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-60 border-white/10 bg-[#011A51] p-4 text-white" align="end">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">Travelers</span>
                                        <span className="text-xs text-white/50">Number of guests</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setGuests(Math.max(1, guests - 1))}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                                        >
                                            -
                                        </button>
                                        <span className="w-4 text-center text-sm font-medium">{guests}</span>
                                        <button
                                            onClick={() => setGuests(guests + 1)}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Search Button */}
                    <div className="px-2 pb-2 md:p-0">
                        <Button
                            onClick={handleSearch}
                            className="h-12 w-full rounded-xl bg-[#ED7D21] text-white shadow-[0_10px_20px_-5px_rgba(237,125,33,0.5)] transition-transform hover:scale-[1.02] active:scale-[0.98] md:h-14 md:w-14 md:rounded-full"
                            size="icon"
                        >
                            <Search className="h-5 w-5 md:h-6 md:w-6" />
                            <span className="ml-2 font-semibold md:hidden">Search Tours</span>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
