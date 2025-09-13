"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Florida",
      rating: 5,
      text: "Gosen Retreat changed my life. The virtual sessions were so convenient, and my therapist truly understood my struggles with anxiety. I finally feel like I have the tools to manage my mental health.",
      service: "Virtual Counseling",
    },
    {
      name: "Michael R.",
      location: "New York",
      rating: 5,
      text: "The mindfulness coaching program helped me find peace during a very difficult time in my life. The techniques I learned have become part of my daily routine, and I feel more centered than ever.",
      service: "Mindfulness Coaching",
    },
    {
      name: "Jennifer L.",
      location: "Florida",
      rating: 5,
      text: "After years of struggling with trauma, I finally found the right support at Gosen Retreat. The trauma recovery program was gentle yet effective, and I'm grateful for the healing I've experienced.",
      service: "Trauma Recovery Support",
    },
    {
      name: "David & Lisa K.",
      location: "New York",
      rating: 5,
      text: "Our marriage was struggling, but the couples therapy sessions helped us reconnect and communicate better. We're stronger now than we've ever been, thanks to the guidance we received.",
      service: "Family & Group Sessions",
    },
    {
      name: "Amanda T.",
      location: "Florida",
      rating: 5,
      text: "I was hesitant about online therapy, but the platform is so user-friendly and secure. My therapist is amazing, and I love that I can have sessions from the comfort of my own home.",
      service: "Virtual Counseling",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#A8D5BA]/10 to-[#F7C6D9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            What Our <span className="text-[#A8D5BA]">Clients</span> Say
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Real stories from people who found healing and hope through our services
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed text-pretty">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A8D5BA] to-[#F7C6D9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                <p className="text-[#A8D5BA] font-medium mt-1">{testimonials[currentTestimonial].service}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#A8D5BA] hover:text-white bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#A8D5BA] hover:text-white bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? "bg-[#A8D5BA]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#A8D5BA] mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F7C6D9] mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#A8D5BA] mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
