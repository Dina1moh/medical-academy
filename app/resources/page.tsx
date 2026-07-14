import { GraduationCap, Library, MonitorPlay, NotebookText } from "lucide-react";
import type { Metadata } from "next";

import { IconCard } from "@/components/icon-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { getPrimaryCourse } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Reference books and learning tools for Anatomy and Embryology students.",
};

const resourceDetails = {
  "Gray's Anatomy": {
    description: "A core reference for detailed anatomical understanding.",
    icon: Library,
  },
  "Netter Atlas": {
    description: "Clear anatomical illustrations for visual study.",
    icon: NotebookText,
  },
  "Moore Anatomy": {
    description: "Clinically oriented anatomy with practical correlations.",
    icon: GraduationCap,
  },
  Kenhub: {
    description: "Interactive anatomy learning and revision support.",
    icon: MonitorPlay,
  },
};

export default function ResourcesPage() {
  const course = getPrimaryCourse();

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resources"
          title="Reference books and learning tools"
          description="A simple resource list for students who want trusted references alongside the course."
        />
        <MotionSection className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {course.referenceBooks.map((resource) => (
            <IconCard
              key={resource}
              title={resource}
              description={
                resourceDetails[resource as keyof typeof resourceDetails]
                  ?.description || "Recommended learning reference."
              }
              icon={
                resourceDetails[resource as keyof typeof resourceDetails]?.icon ||
                Library
              }
            />
          ))}
        </MotionSection>
      </div>
    </div>
  );
}
