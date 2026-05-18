import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { HeroSearch } from "@/components/home/hero-search"
import { Scrollytelling } from "@/components/home/scrollytelling"
import { FeaturedTours } from "@/components/home/featured-tours"
import { PopularDestinations } from "@/components/home/popular-destinations"
import { ServicesSection } from "@/components/home/services-section"
import { EventsShowcase } from "@/components/home/events-showcase"
import { VlogPreview } from "@/components/home/vlog-preview"
import { Testimonials } from "@/components/home/testimonials"
import { Newsletter } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar transparentOnTop />
      <Hero />
      <HeroSearch />
      <Scrollytelling />
      <EventsShowcase />
      <FeaturedTours />
      <PopularDestinations />
      <ServicesSection />
      <VlogPreview />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
