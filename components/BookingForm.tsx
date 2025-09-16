"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = [
    "9:00 AM - 10:00 AM",
    "9:30 AM - 10:30 AM",
    "10:00 AM - 11:00 AM",
    "10:30 AM - 11:30 AM",
    "11:00 AM - 12:00 PM",
    "11:30 AM - 12:30 PM",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-xl rounded-2xl border-none bg-gradient-to-br from-[#A8D5BA]/10 to-[#F7C6D9]/10">
        <CardContent className="space-y-8 p-8">
          
          {/* STEP 1: Date & Time */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] bg-clip-text text-transparent">
                Select a day and time for your virtual session
              </h2>

              {/* Calendar */}
              <div className="flex justify-center">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  styles={{
                    caption: { color: "white" },
                    day: { borderRadius: "9999px" },
                    day_selected: {
                      backgroundColor: "#A8D5BA",
                      color: "white",
                    },
                  }}
                />
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {times.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`rounded-xl py-3 font-medium transition ${
                      selectedTime === time
                        ? "bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white shadow-lg"
                        : "hover:border-[#A8D5BA] hover:text-[#A8D5BA]"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>

              <div className="flex justify-end">
                <Button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Client Information */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] bg-clip-text text-transparent">
                Client Information
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name *</Label>
                  <Input placeholder="First name" />
                </div>
                <div>
                  <Label>Last Name *</Label>
                  <Input placeholder="Last name" />
                </div>
              </div>

              <div>
                <Label>Chosen name & pronouns (optional)</Label>
                <Input placeholder="Optional" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email *</Label>
                  <Input type="email" placeholder="example@example.com" />
                </div>
                <div>
                  <Label>Phone *</Label>
                  <Input placeholder="(xxx) xxx-xxxx" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Date of Birth *</Label>
                  <Input placeholder="mm/dd/yyyy" />
                </div>
                <div>
                  <Label>Sex listed on insurance *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Residential Address *</Label>
                <Input placeholder="Street address" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Input placeholder="City" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fl">Florida</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Zip code" />
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="rounded-xl"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white rounded-xl px-6 py-3"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Insurance */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] bg-clip-text text-transparent">
                Insurance Information
              </h2>
              
              <div>
                <Label>Insurance Name *</Label>
                <Input placeholder="Carrier name" />
              </div>
              <div>
                <Label>Member ID *</Label>
                <Input placeholder="1234567891" />
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="rounded-xl"
                >
                  Back
                </Button>
                <Button className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white rounded-xl px-6 py-3">
                  Submit
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
