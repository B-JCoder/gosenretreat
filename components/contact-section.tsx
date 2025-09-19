"use client"


import { Card, CardContent } from "@/components/ui/card"

import BookingForm from "@/components/BookingForm"
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Get in <span className="text-[#A8D5BA]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF6F91] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Ready to take the first step? We're here to help you begin your journey to better mental health through our
            remote-only services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
      <BookingForm />

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:954-366-8644" className="text-[#FF6F91] hover:underline text-lg font-medium">
                        954-366-8644
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available for remote consultations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#F7C6D9] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:Robertcarine@hotmail.com" className="text-[#FF6F91] hover:underline">
                        Robertcarine@hotmail.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Secure communication for appointments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A8D5BA] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday: By appointment</p>
                      <p className="text-gray-600">Sunday: Emergency only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#A8D5BA]/10 to-[#7BC8A4]/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#7BC8A4] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">💻</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Remote-Only Practice</h4>
                      <p className="text-gray-900 font-medium mb-2">
                        All services are provided remotely via secure video conferencing
                      </p>
                      <p className="text-sm text-gray-700">
                        • HIPAA-compliant platform
                        <br />• No travel required
                        <br />• Accessible from anywhere
                        <br />• Same quality care as in-person visits
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
                <p className="text-gray-900 mb-3">If you're experiencing a mental health emergency, please contact:</p>
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
