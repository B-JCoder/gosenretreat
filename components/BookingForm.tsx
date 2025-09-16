"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = [
    "9:00 AM - 10:00 AM PDT",
    "9:30 AM - 10:30 AM PDT",
    "10:00 AM - 11:00 AM PDT",
    "10:30 AM - 11:30 AM PDT",
    "11:00 AM - 12:00 PM PDT",
    "11:30 AM - 12:30 PM PDT",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="space-y-6">
          
          {/* STEP 1: Date & Time */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a day and time for your virtual session</h2>
              
              {/* Calendar (simplified for demo) */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {Array.from({ length: 30 }, (_, i) => (
                  <Button
                    key={i}
                    variant={selectedDate === `${i + 1}` ? "default" : "outline"}
                    onClick={() => setSelectedDate(`${i + 1}`)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                {times.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>

              <div className="flex justify-end mt-4">
                <Button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Client Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Client Information</h2>
              
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

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button onClick={() => setStep(3)}>Next</Button>
              </div>
            </div>
          )}

          {/* STEP 3: Insurance */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Insurance Information</h2>
              
              <div>
                <Label>Insurance Name *</Label>
                <Input placeholder="Carrier name" />
              </div>
              <div>
                <Label>Member ID *</Label>
                <Input placeholder="1234567891" />
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                <Button className="bg-green-600 hover:bg-green-700">Submit</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
