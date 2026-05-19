import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { ghanaAllRegions } from "@/lib/data"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
    return ghanaAllRegions.map((r) => ({ region: r.slug }))
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
    const { region } = await params
    const regionData = ghanaAllRegions.find((r) => r.slug === region)

    if (!regionData) {
        notFound()
    }

    // Split title to style the last word
    const titleParts = regionData.name.split(" ")
    const lastWord = titleParts.pop()
    const firstPart = titleParts.join(" ")

    return (
        <main>
            <Navbar transparentOnTop />
            <PageHeader
                eyebrow={`Africa · Ghana · ${regionData.name}`}
                title={
                    <>
                        {firstPart} <span className="italic text-[#ED7D21]">{lastWord}</span>
                    </>
                }
                subtitle={regionData.tagline}
                image={regionData.image || "/hero/safari.jpg"}
            />

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="mb-12">
                        <Link
                            href="/destinations/africa/ghana"
                            className="font-display text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-[#ED7D21]"
                        >
                            ← All Ghana Regions
                        </Link>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {regionData.data.map((dest) => (
                            <div key={dest.id} className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={dest.image || "/placeholder.svg"}
                                        alt={dest.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                        {dest.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-white/20 text-[10px] text-white backdrop-blur-md border-none">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <p className="font-display text-[10px] uppercase tracking-[0.2em] text-[#087767]">{dest.region}</p>
                                    <h3 className="font-display mt-2 text-2xl font-medium">{dest.name}</h3>
                                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                        {dest.description}
                                    </p>
                                    <div className="mt-auto pt-6">
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ED7D21]">
                                            Explore destination
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
