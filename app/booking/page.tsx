import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingForm from "@/components/BookingForm"
import { Button } from "@/components/ui/button"


export const metadata: Metadata = {
  title: "Book Appointment - Gosen Retreat | Online Psychiatric Services",
  description:
    "Schedule your remote psychiatric consultation with Gosen Retreat. Professional online mental health services. Call 954-366-8644 to book your appointment today.",
  keywords:
    "book appointment, online psychiatrist appointment, remote mental health booking, psychiatric consultation booking, teletherapy appointment, mental health scheduling",
  openGraph: {
    title: "Book Appointment - Gosen Retreat",
    description: "Schedule your remote psychiatric consultation with professional online mental health services.",
    url: "https://gosenretreat.com/booking",
  },
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Book Appointment",
      description: "Schedule your remote psychiatric consultation",
      url: "https://gosenretreat.com/booking",
      mainEntity: {
        "@type": "MedicalBusiness",
        name: "Gosen Retreat",
        telephone: "954-366-8644",
        email: "Robertcarine@hotmail.com",
      },
    }),
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
              Schedule Your Remote Consultation
            </h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Take the first step towards better mental health with our professional online psychiatric services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-300">
                <span className="text-lg">💻</span>
                <span className="text-green-300">100% Remote Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <span className="text-lg">🔒</span>
                <span className="text-green-300">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-green-300">
                <span className="text-lg">👥</span>
                <span className="text-green-300">Licensed Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="order-2 lg:order-1">
             <BookingForm />
            </div>

            {/* Information Sidebar */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-gradient-to-br from-green-700 to-green-600 p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Remote Care?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">Access care from the comfort of your home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">No travel time or transportation barriers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">Flexible scheduling to fit your lifestyle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white">Same quality care as in-person visits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FF6F91] text-xl">📞</span>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:954-366-8644" className="text-[#FF6F91] hover:underline">
                        954-366-8644
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FF6F91] text-xl">✉️</span>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:Robertcarine@hotmail.com" className="text-[#FF6F91] hover:underline">
                        Robertcarine@hotmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FF6F91] text-xl">🕒</span>
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Immediate Help?</h3>
                <p className="text-blue-900 mb-4">
                  If you're experiencing a mental health emergency, please contact emergency services or call the crisis
                  hotline.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Crisis Resources</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed Call Button */}
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
