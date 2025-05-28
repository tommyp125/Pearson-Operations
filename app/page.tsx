import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <ContactForm />
    </div>
  )
}