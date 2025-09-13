"use client"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/peaceful-forest-sunrise-with-soft-green-light-filt.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-[#A8D5BA]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            Exceptional Care for a <span className="text-green-700">Healthier Mind</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Gosen Retreat helps you find peace and clarity through personalized mental wellness programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button
  size="lg"
  className="bg-[#FF6F91] hover:bg-[#e55a7a] text-white px-8 py-4 text-lg"
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Book a Free Consultation
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 text-lg bg-transparent"
  onClick={() => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Explore Services
</Button>

          </div>
        </div>
      </div>
    </section>
  )
}
