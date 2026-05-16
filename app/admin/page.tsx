"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Compass,
  MapPin,
  Calendar,
  BookOpen,
  Video,
  MessageSquare,
  BarChart3,
  Settings,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Search,
  Bell,
  ChevronRight,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { tours } from "@/lib/data"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"

const nav = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Compass, label: "Tours" },
  { icon: MapPin, label: "Destinations" },
  { icon: Calendar, label: "Events" },
  { icon: BookOpen, label: "Bookings" },
  { icon: Video, label: "Vlogs" },
  { icon: MessageSquare, label: "Messages" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
]

const stats = [
  { label: "Total bookings", value: "2,847", change: "+12.4%", up: true, sub: "vs last month" },
  { label: "Revenue", value: "$842.5K", change: "+8.2%", up: true, sub: "vs last month" },
  { label: "Avg. tour rating", value: "4.92", change: "+0.06", up: true, sub: "based on 1,284 reviews" },
  { label: "Cancellations", value: "1.2%", change: "-0.4%", up: false, sub: "vs last month" },
]

const revenueData = [
  { m: "Jan", v: 42 },
  { m: "Feb", v: 51 },
  { m: "Mar", v: 68 },
  { m: "Apr", v: 74 },
  { m: "May", v: 88 },
  { m: "Jun", v: 96 },
  { m: "Jul", v: 121 },
  { m: "Aug", v: 134 },
  { m: "Sep", v: 118 },
  { m: "Oct", v: 142 },
  { m: "Nov", v: 158 },
  { m: "Dec", v: 172 },
]

const bookingsData = [
  { d: "Mon", v: 38 },
  { d: "Tue", v: 52 },
  { d: "Wed", v: 47 },
  { d: "Thu", v: 64 },
  { d: "Fri", v: 89 },
  { d: "Sat", v: 102 },
  { d: "Sun", v: 76 },
]

const inquiries = [
  { name: "Olivia Brennan", tour: "Santorini Sunsets", time: "12m ago", status: "New" },
  { name: "Yusuf Ahmed", tour: "Serengeti Safari", time: "1h ago", status: "Replied" },
  { name: "Léa Dubois", tour: "Marrakech & Sahara", time: "3h ago", status: "Booked" },
  { name: "Hiroshi Kato", tour: "Tokyo Neon", time: "5h ago", status: "New" },
  { name: "Priya Shah", tour: "Maldives Escape", time: "Yesterday", status: "Replied" },
]

export default function AdminPage() {
  const [active, setActive] = useState("Dashboard")

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-card lg:block">
          <div className="flex h-full flex-col p-5">
            <Logo />
            <nav className="mt-10 flex flex-col gap-1">
              {nav.map((n) => (
                <button
                  key={n.label}
                  onClick={() => setActive(n.label)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === n.label
                      ? "bg-[#011A51] text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <n.icon className="h-4 w-4" />
                  {n.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto rounded-2xl border border-border bg-gradient-to-br from-[#087767] to-[#0FB89C] p-5 text-white">
              <p className="font-display text-lg font-medium leading-tight">Need a hand?</p>
              <p className="mt-1 text-xs opacity-80">Chat with the platform team — we&apos;ll respond in minutes.</p>
              <button className="mt-4 w-full rounded-lg bg-white py-2 text-xs font-semibold text-[#011A51]">
                Open chat
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-4 py-4 backdrop-blur md:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Studio</p>
              <h1 className="font-display text-2xl font-medium tracking-tight">{active}</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search bookings, tours, guests…"
                  className="w-72 rounded-full border border-border bg-card py-2 pl-9 pr-4 text-sm focus:border-[#087767] focus:outline-none"
                />
              </div>
              <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ED7D21]" />
              </button>
              <ThemeToggle />
              <div className="hidden h-10 w-10 rounded-full bg-gradient-to-br from-[#011A51] to-[#087767] sm:block" />
            </div>
          </header>

          <main className="space-y-6 p-4 md:p-8">
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="font-display text-3xl font-medium tracking-tight">{s.value}</p>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                        s.up ? "bg-[#087767]/10 text-[#087767]" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                    >
                      {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                      {s.change}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Revenue</p>
                    <p className="font-display mt-1 text-xl font-medium">2026 — $1.24M</p>
                  </div>
                  <div className="flex gap-1 text-xs">
                    {["1M", "3M", "6M", "1Y"].map((p, i) => (
                      <button
                        key={p}
                        className={`rounded-full px-3 py-1 ${
                          i === 3 ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 h-64">
                  <ResponsiveContainer>
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#087767" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#087767" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="m" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: 12,
                          fontSize: 12,
                        }}
                      />
                      <Area type="monotone" dataKey="v" stroke="#087767" strokeWidth={2.5} fill="url(#rev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Weekly bookings</p>
                <p className="font-display mt-1 text-xl font-medium">468 booked</p>
                <div className="mt-6 h-64">
                  <ResponsiveContainer>
                    <BarChart data={bookingsData}>
                      <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="d" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} tickLine={false} axisLine={false} />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{
                          background: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: 12,
                          fontSize: 12,
                        }}
                      />
                      <Bar dataKey="v" fill="#ED7D21" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent tours + inquiries */}
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-medium">Recent tours</p>
                  <Link href="/tours" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground">
                    View all <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[560px] text-sm">
                    <thead>
                      <tr className="text-left text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        <th className="pb-3 font-medium">Tour</th>
                        <th className="pb-3 font-medium">Location</th>
                        <th className="pb-3 font-medium">Category</th>
                        <th className="pb-3 text-right font-medium">Price</th>
                        <th className="pb-3 text-right font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {tours.slice(0, 5).map((t) => (
                        <tr key={t.id} className="text-sm">
                          <td className="py-3">
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                                <Image src={t.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                              </div>
                              <span className="font-medium">{t.title}</span>
                            </div>
                          </td>
                          <td className="py-3 text-muted-foreground">{t.location}</td>
                          <td className="py-3">
                            <span className="rounded-full bg-muted px-2 py-1 text-[11px] font-semibold">
                              {t.category}
                            </span>
                          </td>
                          <td className="py-3 text-right font-semibold">${t.price.toLocaleString()}</td>
                          <td className="py-3 text-right">
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#087767]/10 px-2 py-1 text-[11px] font-semibold text-[#087767]">
                              ● Live
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-medium">Recent inquiries</p>
                  <span className="rounded-full bg-[#ED7D21] px-2 py-0.5 text-[10px] font-bold text-white">
                    3 new
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {inquiries.map((i) => (
                    <li
                      key={i.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border p-3 hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#011A51] text-xs font-bold text-white">
                          {i.name.split(" ").map((s) => s[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{i.name}</p>
                          <p className="text-xs text-muted-foreground">{i.tour}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                            i.status === "New"
                              ? "bg-[#ED7D21]/15 text-[#ED7D21]"
                              : i.status === "Booked"
                                ? "bg-[#087767]/15 text-[#087767]"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {i.status}
                        </span>
                        <p className="mt-1 text-[10px] text-muted-foreground">{i.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Activity + tiny analytics */}
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-[#011A51] to-[#06183d] p-6 text-white lg:col-span-2">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">Top performer</p>
                    <p className="font-display mt-2 text-3xl font-medium tracking-tight">Santorini Sunsets</p>
                    <p className="mt-1 text-sm text-white/70">128 bookings · $370K revenue this quarter</p>
                  </div>
                  <Link
                    href="/tours"
                    className="inline-flex items-center gap-1 rounded-full bg-[#ED7D21] px-4 py-2 text-xs font-semibold"
                  >
                    Open <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="mt-6 h-32">
                  <ResponsiveContainer>
                    <LineChart data={revenueData}>
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke="#ED7D21"
                        strokeWidth={2.5}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display text-lg font-medium">Recent activity</p>
                <ul className="mt-4 space-y-4 text-sm">
                  {[
                    { who: "Selene", what: "approved 3 itineraries", when: "2m" },
                    { who: "Idris", what: "added a new safari", when: "20m" },
                    { who: "Hana", what: "replied to 4 inquiries", when: "1h" },
                    { who: "Margaux", what: "published a vlog", when: "3h" },
                  ].map((a) => (
                    <li key={a.who} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087767]" />
                      <p className="flex-1">
                        <span className="font-semibold">{a.who}</span>{" "}
                        <span className="text-muted-foreground">{a.what}</span>
                      </p>
                      <span className="text-xs text-muted-foreground">{a.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
