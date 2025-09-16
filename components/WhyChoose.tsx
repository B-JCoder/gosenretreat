"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Brain, Users, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: <Leaf className="w-7 h-7 text-white" />,
    bg: "bg-[#A8D5BA]",
    title: "Holistic Healing",
    description: "Comprehensive support for your mind, body, and soul.",
  },
  {
    icon: <Brain className="w-7 h-7 text-white" />,
    bg: "bg-[#FF6F91]",
    title: "Personalized Approach",
    description: "Every session tailored to your unique needs & goals.",
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    bg: "bg-[#A855F7]",
    title: "Inclusive Community",
    description: "A safe, welcoming space for everyone.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-white" />,
    bg: "bg-[#F7C6D9]",
    title: "Proven Results",
    description: "Backed by science and delivered with compassion.",
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-slate-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-[#A8D5BA]">Gosen Retreat</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF6F91] mx-auto rounded-full"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
            >
              <div
                className={`${benefit.bg} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                {benefit.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-[#A8D5BA] via-[#CBA3E6] to-[#F7C6D9] rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                What to Expect in Your First Session
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-white/90 font-medium">
                <div className="flex items-center justify-center">🤝 Safe & Open Space</div>
                <div className="flex items-center justify-center">📋 Review of History & Goals</div>
                <div className="flex items-center justify-center">💬 Therapy & Medication Options</div>
                <div className="flex items-center justify-center">📝 Personalized Plan</div>
              </div>
              <Button
                size="lg"
                className="bg-white text-[#A855F7] hover:bg-gray-100 px-10 py-5 text-lg font-bold rounded-xl shadow-md"
              >
                Schedule Your Appointment Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
