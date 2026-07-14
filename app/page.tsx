import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
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

export default function HomePage() {
  const course = getPrimaryCourse();

  return (
    <>
      <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 inline-flex rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-primary">
              Anatomy & Embryology for medical students
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
                src="/images/instructor-placeholder.svg"
                alt="Instructor photo placeholder"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </section>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="About"
            title="About the instructor"
            description="The instructor teaches Anatomy and Embryology with a simple, structured approach that helps students understand, revise, and retain important concepts."
          />
          <Card>
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </MotionSection>

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

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-border bg-primary p-8 text-primary-foreground shadow-soft md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold">Start learning with Medical Academy</h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/85">
                Join the Anatomy & Embryology course and study with a clear,
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
