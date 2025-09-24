import { Button } from "@/components/ui/button"
import { Laptop, ShieldCheck, Clock } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/peaceful-forest-sunrise-with-soft-green-light-filt.jpg')`,
        }}
      >
        {/* Light Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-green-200/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto bg-white/7 backdrop-blur-md p-8 rounded-xl shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug drop-shadow-md">
          Compassionate Mental Health Care
        </h1>

        {/* Subheading */}
        <p className="mt-3 text-lg md:text-xl text-green-700 font-semibold drop-shadow-sm">
          Support for every stage of life
        </p>

        {/* Description */}
        <p className="mt-5 text-base md:text-lg text-gray-800 leading-relaxed bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl inline-block">
          Personalized therapy and medication management to help children,
          adolescents, and adults find clarity, stability, and healing all
          from the comfort of your home.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <span className="flex items-center gap-2 bg-white/70 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <Laptop className="w-4 h-4" /> Remote Sessions
          </span>
          <span className="flex items-center gap-2 bg-white/70 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <ShieldCheck className="w-4 h-4" /> HIPAA Compliant
          </span>
          <span className="flex items-center gap-2 bg-white/70 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            <Clock className="w-4 h-4" /> Flexible Scheduling
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
     <Button
  size="lg"
  className="bg-[#196A76] hover:bg-[#14565F] text-white px-8 py-4 text-lg rounded-full shadow-lg"
  asChild
>
  <a href="/booking">Book Consultation</a>
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-[#87D0C7] text-[#196A76] hover:bg-[#87D0C7] hover:text-white px-8 py-4 text-lg rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
  asChild
>
  <a href="#services">Explore Services</a>
</Button>

        </div>
      </div>
    </section>
  )
}
