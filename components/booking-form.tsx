"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    serviceType: "",
    isNewPatient: true,
    concerns: "",
    emergencyContact: "",
    insuranceProvider: "",
    agreedToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl flex items-center gap-2 text-white">
          <span className="text-2xl">📅</span>
          Book Your Appointment
        </CardTitle>
        <CardDescription className="text-white/90">
          Schedule your remote psychiatric consultation - all sessions are conducted online
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-lg text-[#FF6F91]">👤</span>
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <span className="text-sm">✉️</span>
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <span className="text-sm">📞</span>
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                />
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-lg text-[#FF6F91]">🕒</span>
              Appointment Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                    <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Type of Service *</Label>
              <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="initial-consultation">Initial Psychiatric Consultation</SelectItem>
                  <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                  <SelectItem value="therapy-session">Therapy Session</SelectItem>
                  <SelectItem value="medication-management">Medication Management</SelectItem>
                  <SelectItem value="crisis-intervention">Crisis Intervention</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-lg text-[#FF6F91]">💬</span>
              Additional Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="concerns">Primary Concerns or Symptoms</Label>
              <Textarea
                id="concerns"
                value={formData.concerns}
                onChange={(e) => handleInputChange("concerns", e.target.value)}
                placeholder="Please describe your main concerns or symptoms..."
                className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA] min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="insuranceProvider">Insurance Provider (Optional)</Label>
              <Input
                id="insuranceProvider"
                value={formData.insuranceProvider}
                onChange={(e) => handleInputChange("insuranceProvider", e.target.value)}
                placeholder="e.g., Blue Cross Blue Shield, Aetna, etc."
                className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                placeholder="Name and phone number"
                className="border-gray-300 focus:border-[#A8D5BA] focus:ring-[#A8D5BA]"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                I agree to the terms and conditions, privacy policy, and consent to remote psychiatric services. I
                understand that this is a remote-only practice and all sessions will be conducted via secure video
                conferencing.
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-3 text-lg"
              disabled={!formData.agreedToTerms}
            >
              Schedule Appointment
            </Button>
            <p className="text-sm text-gray-500 text-center mt-2">
              You will receive a confirmation email within 24 hours
            </p>
          </div>

          {/* Crisis Information */}
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2">Crisis Support</h4>
            <p className="text-red-900 text-sm mb-2">
              If you're experiencing a mental health emergency, please contact:
            </p>
            <div className="text-sm text-red-800 space-y-1">
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
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
