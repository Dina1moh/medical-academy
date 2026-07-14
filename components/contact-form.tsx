"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  continueOnWhatsAppHref,
  submitRegistration,
} from "@/lib/registration";

const academicYears = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "5th Year",
  "Other",
];

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z
    .string()
    .min(8, "Phone number is required")
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  university: z.string().min(2, "University is required"),
  academicYear: z.string().min(1, "Academic year is required"),
  email: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: "Enter a valid email",
    }),
  message: z.string().optional(),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      university: "",
      academicYear: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: RegistrationFormValues) {
    setStatus("idle");
    setErrorMessage("");

    try {
      await submitRegistration({
        fullName: values.fullName,
        phone: values.phone,
        university: values.university,
        academicYear: values.academicYear,
        email: values.email || "",
        message: values.message || "",
      });
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Registration could not be submitted.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/10 p-6">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Registration completed successfully.
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Your details were submitted. Continue on WhatsApp if you want to send
          the instructor a manual follow-up message.
        </p>
        <Button asChild className="mt-6">
          <a href={continueOnWhatsAppHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Continue on WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          placeholder="Student name"
          {...register("fullName")}
        />
        {errors.fullName ? (
          <p className="text-sm text-red-600">{errors.fullName.message}</p>
        ) : null}
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="01096592805"
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="university">University</Label>
          <Input
            id="university"
            placeholder="University name"
            {...register("university")}
          />
          {errors.university ? (
            <p className="text-sm text-red-600">{errors.university.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="academicYear">Academic Year</Label>
          <select
            id="academicYear"
            className="flex h-11 w-full rounded-md border border-border bg-card px-3 py-2 text-base text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15 md:text-sm"
            {...register("academicYear")}
          >
            <option value="">Select academic year</option>
            {academicYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.academicYear ? (
            <p className="text-sm text-red-600">{errors.academicYear.message}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email optional</Label>
          <Input
            id="email"
            type="email"
            placeholder="student@example.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message optional</Label>
        <Textarea
          id="message"
          placeholder="Write any notes for the instructor."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      ) : null}
      <Button type="submit" className="w-full sm:w-fit" disabled={isSubmitting}>
        <Send className="h-4 w-4" aria-hidden="true" />
        {isSubmitting ? "Submitting..." : "Submit Registration"}
      </Button>
    </form>
  );
}
