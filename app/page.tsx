import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  MapPin,
  MessageCircle,
  PlayCircle,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { IconCard } from "@/components/icon-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPrimaryCourse } from "@/lib/courses";
import { faqs, journeySteps, whatsappHref, whyChoose } from "@/lib/site-data";

const highlights = [
  {
    title: "System-based modules",
    description: "Study anatomy and embryology in organized, exam-friendly sections.",
    icon: BookOpen,
  },
  {
    title: "Recorded lectures",
    description: "Replay core explanations whenever revision needs more time.",
    icon: PlayCircle,
  },
  {
    title: "Clinical focus",
    description: "Connect essential science to practical medical examples.",
    icon: Stethoscope,
  },
];

const instructorBio = [
  "I am Mahmoud Fadl, a fourth-year medical student at Nahda University with a strong passion for both medicine and medical education. My goal is to make Anatomy and Embryology easier to understand by presenting complex concepts in a clear, structured, and clinically relevant way.",
  "As a top-performing student, I have dedicated myself to helping fellow medical students build a solid foundation in anatomy through simplified explanations, visual learning techniques, and practical clinical correlations. I believe that understanding anatomy should be engaging, interactive, and directly connected to real-world medical practice.",
  "Through Medical Academy, I aim to provide high-quality educational content that supports students throughout their medical journey and helps them achieve academic excellence with confidence.",
];

export default function HomePage() {
  const course = getPrimaryCourse();

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 inline-flex rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-primary">
              Anatomy &amp; Embryology for medical students
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Medical Academy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {course.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/courses">
                  View Course
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-primary/10">
              <Image
                src="/images/instructor.jpg"
                alt="Mahmoud Fadl – Instructor at Medical Academy"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* ── About Instructor Section ── */}
      <MotionSection className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About"
            title="About the Instructor"
          />

          {/* Responsive card: image above on mobile, image right on desktop */}
          <div className="mt-12 flex flex-col gap-10 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10 lg:flex-row lg:items-center lg:gap-14">

            {/* ── Text side ── */}
            <div className="flex-1 order-2 lg:order-1">
              {/* Name & title */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Mahmoud Fadl
                </h2>
                <div className="mt-3 flex flex-col gap-1.5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Fourth-Year Medical Student
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Nahda University
                  </span>
                </div>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-4">
                {instructorBio.map((paragraph, index) => (
                  <p key={index} className="text-base leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Why choose bullets */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-sm leading-6 text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Image side ── */}
            <div className="order-1 lg:order-2 lg:w-72 xl:w-80 shrink-0">
              <div className="relative mx-auto w-56 sm:w-64 lg:w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                  <Image
                    src="/images/instructor.jpg"
                    alt="Mahmoud Fadl – Medical Academy instructor"
                    fill
                    sizes="(min-width: 1024px) 288px, 256px"
                    className="object-cover object-top"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute -bottom-3 -left-3 rounded-xl border border-border bg-background px-3 py-2 shadow-soft">
                  <p className="text-xs font-bold text-primary">Nahda University</p>
                  <p className="text-xs text-muted">4th Year · Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* ── Why Choose Section ── */}
      <MotionSection className="bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Why Choose"
            title="Built for medical students"
            description="The course keeps complex topics approachable with focused lectures, clear sequencing, and practical medical context."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── Student Journey Section ── */}
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="Student Journey"
            title="A clear path through the course"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {journeySteps.map((step, index) => (
              <Card key={step} className="shadow-none">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                    {index + 1}
                  </div>
                  <CardTitle className="text-base">{step}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── FAQ Section ── */}
      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading centered eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 grid gap-5">
            {faqs.map((item) => (
              <Card key={item.question}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                  <p className="text-sm leading-6 text-muted">{item.answer}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ── CTA Banner ── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-border bg-primary p-8 text-primary-foreground shadow-soft md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold">Start learning with Medical Academy</h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/85">
                Join the Anatomy &amp; Embryology course and study with a clear,
                beginner-friendly plan.
              </p>
            </div>
            <Button asChild variant="outline" className="bg-card text-primary">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
