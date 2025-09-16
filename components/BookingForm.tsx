"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form"  // ✅ sirf ye chahiye
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";



// ✅ Step schemas
const Step1Schema = z.object({
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
});

const Step2Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  chosenName: z.string().optional(),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Phone number required"),
  dob: z.string().min(1, "Date of birth is required"),
  sex: z.string().min(1, "Required"),
  address: z.string().min(1, "Required"),
  city: z.string().min(1, "Required"),
  state: z.string().min(1, "Required"),
  zip: z.string().min(1, "Required"),
});

const Step3Schema = z.object({
  insuranceName: z.string().min(1, "Required"),
  memberId: z.string().min(1, "Required"),
});

// ✅ Combined schema
const FormSchema = Step1Schema.merge(Step2Schema).merge(Step3Schema);

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
      trigger,
    setValue,
    watch,
    formState: { errors, isValid },
  } = methods;
  


  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);

    // Send to email with formsubmit.co
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/Robertcarine@hotmail.com";

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const times = [
    "9:00 AM - 10:00 AM",
    "9:30 AM - 10:30 AM",
    "10:00 AM - 11:00 AM",
    "10:30 AM - 11:30 AM",
    "11:00 AM - 12:00 PM",
    "11:30 AM - 12:30 PM",
  ];

  // ✅ Watch selected date/time
  const selectedDate = watch("date");
  const selectedTime = watch("time");

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-6">
        <Card className="shadow-xl rounded-2xl border-none bg-gradient-to-br from-[#A8D5BA]/10 to-[#F7C6D9]/10">
          <CardContent className="space-y-8 p-8">
            {/* Progress bar */}
            <div className="flex justify-between mb-6">
              {["Step 1", "Step 2", "Step 3"].map((label, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 mx-1 rounded-full ${
                    step > i ? "bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* STEP 1 */}
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
                    onSelect={(date) => setValue("date", date)}
                  />
                </div>
                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date.message as string}</p>
                )}

                {/* Time Slots */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {times.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      onClick={() => setValue("time", time)}
                      className={`rounded-xl py-3 font-medium transition ${
                        selectedTime === time
                          ? "bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white shadow-lg"
                          : "bg-white text-gray-600 hover:border-[#A8D5BA]"
                      }`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time.message as string}</p>
                )}

                <div className="flex justify-end">
                  <Button
                    type="button"
                    disabled={!selectedDate || !selectedTime}
                    onClick={async () => {
    const valid = await trigger(["date", "time"])
    if (valid) setStep(2)
  }}
                    className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] bg-clip-text text-transparent">
                  Client Information
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>First Name *</Label>
                    <Input {...register("firstName")} placeholder="First name" />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName.message as string}</p>
                    )}
                  </div>
                  <div>
                    <Label>Last Name *</Label>
                    <Input {...register("lastName")} placeholder="Last name" />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName.message as string}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Chosen name & pronouns (optional)</Label>
                  <Input {...register("chosenName")} placeholder="Optional" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Email *</Label>
                    <Input {...register("email")} type="email" placeholder="example@example.com" />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message as string}</p>
                    )}
                  </div>
                  <div>
                    <Label>Phone *</Label>
                    <Input {...register("phone")} placeholder="(xxx) xxx-xxxx" />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone.message as string}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Date of Birth *</Label>
                    <Input {...register("dob")} placeholder="mm/dd/yyyy" />
                    {errors.dob && (
                      <p className="text-red-500 text-sm">{errors.dob.message as string}</p>
                    )}
                  </div>
                  <div>
                    <Label>Sex listed on insurance *</Label>
                    <Select onValueChange={(v) => setValue("sex", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.sex && (
                      <p className="text-red-500 text-sm">{errors.sex.message as string}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Residential Address *</Label>
                  <Input {...register("address")} placeholder="Street address" />
                  {errors.address && (
                    <p className="text-red-500 text-sm">{errors.address.message as string}</p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Input {...register("city")} placeholder="City" />
                  <Select onValueChange={(v) => setValue("state", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input {...register("zip")} placeholder="Zip code" />
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="rounded-xl"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={async () => {
    const valid = await trigger(["firstName", "lastName", "email", "phone", "dob", "sex", "address", "city", "state", "zip"])
    if (valid) setStep(3) // only go next if valid
  }}
                    disabled={
                      !!errors.firstName ||
                      !!errors.lastName ||
                      !!errors.email ||
                      !!errors.phone ||
                      !!errors.dob ||
                      !!errors.sex ||
                      !!errors.address
                    }
                    className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white rounded-xl px-6 py-3"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] bg-clip-text text-transparent">
                  Insurance Information
                </h2>

                <div>
                  <Label>Insurance Name *</Label>
                  <Input {...register("insuranceName")} placeholder="Carrier name" />
                  {errors.insuranceName && (
                    <p className="text-red-500 text-sm">
                      {errors.insuranceName.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Member ID *</Label>
                  <Input {...register("memberId")} placeholder="1234567891" />
                  {errors.memberId && (
                    <p className="text-red-500 text-sm">{errors.memberId.message as string}</p>
                  )}
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="rounded-xl"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!!errors.insuranceName || !!errors.memberId}
                    className="bg-gradient-to-r from-[#A8D5BA] to-[#F7C6D9] text-white rounded-xl px-6 py-3"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
