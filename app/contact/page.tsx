import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo, whatsappHref } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Register for the Medical Academy Anatomy & Embryology Course and contact the instructor.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Register for the course"
          description="Submit your registration details. The instructor will manually review submissions and reply through the available contact channels."
        />
        <MotionSection className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>Student registration form</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm text-muted">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="break-all hover:text-primary"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>{contactInfo.location}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-5 text-sm leading-6 text-muted">
                  Use WhatsApp for manual follow-up after registration. No
                  message is sent automatically.
                </p>
                <Button asChild>
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    Open WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Send className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-5 text-sm leading-6 text-muted">
                  Placeholder Telegram section for student support, updates, and
                  learning announcements.
                </p>
                <Button variant="outline" disabled>
                  Open Telegram
                </Button>
              </CardContent>
            </Card>
          </div>
        </MotionSection>
      </div>
    </div>
  );
}
