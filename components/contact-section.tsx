"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [selectedLocation, setSelectedLocation] = useState("florida")

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#A8D5BA]/10 to-[#F7C6D9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Get in <span className="text-[#A8D5BA]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Ready to take the first step? We're here to help you begin your journey to better mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input
                      placeholder="Your first name"
                      className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input
                      placeholder="Your last name"
                      className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                  />
                </div>

                {/* Location Toggle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant={selectedLocation === "florida" ? "default" : "outline"}
                      onClick={() => setSelectedLocation("florida")}
                      className={
                        selectedLocation === "florida"
                          ? "bg-[#A8D5BA] hover:bg-[#96c7a8] text-white"
                          : "border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#A8D5BA] hover:text-white"
                      }
                    >
                      Florida
                    </Button>
                    <Button
                      type="button"
                      variant={selectedLocation === "newyork" ? "default" : "outline"}
                      onClick={() => setSelectedLocation("newyork")}
                      className={
                        selectedLocation === "newyork"
                          ? "bg-[#A8D5BA] hover:bg-[#96c7a8] text-white"
                          : "border-[#A8D5BA] text-[#A8D5BA] hover:bg-[#A8D5BA] hover:text-white"
                      }
                    >
                      New York
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#FF6F91] hover:bg-[#e55a7a] text-white py-3 text-lg">
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">We'll get back to you within 24 hours</p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">Florida: (555) 123-4567</p>
                      <p className="text-gray-600">New York: (555) 987-6543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">hello@gosenretreat.com</p>
                      <p className="text-gray-600">support@gosenretreat.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Emergency only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Locations</h4>
                      <p className="text-gray-600 mb-2">
                        <strong>Florida Office:</strong>
                        <br />
                        123 Wellness Way, Suite 200
                        <br />
                        Miami, FL 33101
                      </p>
                      <p className="text-gray-600">
                        <strong>New York Office:</strong>
                        <br />
                        456 Healing Street, Floor 15
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contact */}
            <Card className="border-2 border-[#FF6F91] bg-[#FF6F91]/5">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#FF6F91] mb-2">Crisis Support</h4>
                <p className="text-gray-700 mb-3">If you're experiencing a mental health emergency, please contact:</p>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>National Suicide Prevention Lifeline:</strong> 988
                  </p>
                  <p>
                    <strong>Crisis Text Line:</strong> Text HOME to 741741
                  </p>
                  <p>
                    <strong>Emergency Services:</strong> 911
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
