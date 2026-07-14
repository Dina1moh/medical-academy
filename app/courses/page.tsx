import {
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  Microscope,
  Network,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { IconCard } from "@/components/icon-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { getPrimaryCourse } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore the Anatomy & Embryology Course for 1st, 2nd, and 3rd year medical students.",
};

const moduleIcons = {
  "General Anatomy": BookOpen,
  Embryology: Sparkles,
  MSK: ShieldCheck,
  CVS: HeartPulse,
  Respiratory: Stethoscope,
  CNS: Brain,
  Neuroanatomy: Network,
  GIT: ClipboardCheck,
  Urogenital: Microscope,
  Reproductive: Users,
  Eye: Target,
  ENT: CheckCircle2,
};

export default function CoursesPage() {
  const course = getPrimaryCourse();

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Courses"
          title={course.title}
          description={course.description}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-primary/10">
              <Image
                src={course.image}
                alt={`${course.title} preview image placeholder`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-muted">Price</p>
                <p className="mt-1 text-xl font-bold text-foreground">
                  {course.price}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted">Status</p>
                <p className="mt-1 text-xl font-bold text-accent">
                  {course.status}
                </p>
              </div>
            </CardContent>
          </Card>
          <div>
            <YouTubeEmbed
              title={`${course.title} preview video`}
              src={course.previewVideoLink}
            />
            <Button asChild className="mt-6 w-full sm:w-fit">
              <Link href="/contact" aria-label={`Register for ${course.title}`}>
                Register now
              </Link>
            </Button>
          </div>
        </div>
        <MotionSection className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.modules.map((module) => (
            <IconCard
              key={module}
              title={module}
              description="Structured lessons, revision points, and exam-oriented learning."
              icon={moduleIcons[module as keyof typeof moduleIcons] || BookOpen}
            />
          ))}
        </MotionSection>
      </div>
    </div>
  );
}
