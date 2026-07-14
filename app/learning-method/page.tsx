import type { Metadata } from "next";

import { IconCard } from "@/components/icon-card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { learningMethods } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Learning Method",
  description:
    "Learn Anatomy and Embryology through recorded lectures, clinical correlations, Telegram support, practice exams, and a dedicated learning platform.",
};

export default function LearningMethodPage() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Learning Method"
          title="A practical way to study anatomy and embryology"
          description="The course combines recorded lessons, clinical context, communication channels, and practice tools to support steady progress."
        />
        <MotionSection className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningMethods.map((method) => (
            <IconCard key={method.title} {...method} />
          ))}
        </MotionSection>
      </div>
    </div>
  );
}
