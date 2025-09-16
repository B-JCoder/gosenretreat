import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import BookingForm from "@/components/BookingForm"

export default function GosenRetreatPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <BookingForm />
      <Footer />

      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-[#FF6F91] hover:bg-[#e55a7a] text-white shadow-lg" asChild>
          <a href="tel:954-366-8644">
            <span className="w-5 h-5 mr-2 inline-flex items-center justify-center">📞</span>
            Call Now
          </a>
        </Button>
      </div>
    </div>
  )
}
