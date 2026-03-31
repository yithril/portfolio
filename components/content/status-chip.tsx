import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "@/lib/site-data";

type StatusChipProps = {
  status: ProjectStatus;
};

const statusVariants = {
  Live: "creative",
  Prototype: "tech",
  "In Progress": "warm",
  Completed: "neutral",
  Hackathon: "warm",
} as const;

const statusTextClasses = {
  Live: "text-text-primary",
  Prototype: "text-text-primary",
  "In Progress": "text-text-primary",
  Completed: "text-text-primary",
  Hackathon: "text-text-primary",
};

export function StatusChip({ status }: StatusChipProps) {
  return (
    <Badge className={statusTextClasses[status]} variant={statusVariants[status]}>
      {status}
    </Badge>
  );
}
