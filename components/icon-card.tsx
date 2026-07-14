import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type IconCardProps = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export function IconCard({ title, description, icon: Icon }: IconCardProps) {
  return (
    <Card className="h-full transition-transform hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
    </Card>
  );
}
