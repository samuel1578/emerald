import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { ghanaAllRegions } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function GhanaHubPage() {
    return (
        <main>
            <Navbar transparentOnTop />
            <PageHeader
                eyebrow="Africa · Ghana"
                title={
                    <>
                        Ghana, <span className="italic text-[#ED7D21]">region by region</span>.
                    </>
                }
                subtitle="From the elephant plains of the North to the golden stools of Kumasi — explore Ghana through four distinct worlds."
                image="/hero/safari.jpg"
            />

            {/* Regions Grid */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="mb-12">
                        <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">Explore by Region</h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {ghanaAllRegions.map((region) => (
                            <Link
                                key={region.slug}
                                href={`/destinations/africa/ghana/${region.slug}`}
                                className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
                            >
                                <Image
                                    src={region.image || "/placeholder.svg"}
                                    alt={region.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                <div className="absolute inset-x-6 bottom-6 text-white">
                                    <p className="font-display text-[10px] uppercase tracking-[0.3em] text-white/70">
                                        {region.tagline}
                                    </p>
                                    <h3 className="font-display mt-2 text-3xl font-medium">{region.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Region Previews */}
            {ghanaAllRegions.map((region, idx) => (
                <section
                    key={region.slug}
                    className={cn(
                        "py-16 md:py-24",
                        idx % 2 === 0 ? "bg-background" : "bg-[#0a0a0a] text-white"
                    )}
                >
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <div className="mb-12 flex items-end justify-between">
                            <div>
                                <p className={cn(
                                    "font-display text-xs uppercase tracking-[0.32em]",
                                    idx % 2 === 0 ? "text-[#087767]" : "text-[#0FB89C]"
                                )}>
                                    {region.name}
                                </p>
                                <h2 className="font-display mt-3 text-3xl font-medium md:text-4xl">Featured Spots</h2>
                            </div>
                            <Link
                                href={`/destinations/africa/ghana/${region.slug}`}
                                className="flex items-center gap-1.5 text-sm font-semibold underline underline-offset-8 transition-colors hover:opacity-70"
                            >
                                View all <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {region.data.slice(0, 3).map((dest) => (
                                <div key={dest.id} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                                    <Image
                                        src={dest.image || "/placeholder.svg"}
                                        alt={dest.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute inset-x-5 bottom-5 text-white">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">{dest.region}</p>
                                        <h3 className="font-display mt-1 text-xl font-medium">{dest.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <Footer />
        </main>
    )
}
