import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { StorySection } from "@/components/story-section"
import { VisionSection } from "@/components/vision-section"
import { ServicesSection } from "@/components/services-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <StorySection />
      <VisionSection />
      <ServicesSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
