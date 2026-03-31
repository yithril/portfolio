import { cn } from "@/lib/utils";

type ProjectThumbnailProps = {
  label: string;
  accent?: "tech" | "creative";
};

export function ProjectThumbnail({ label, accent = "tech" }: ProjectThumbnailProps) {
  return (
    <div
      className={cn(
        "flex aspect-[16/10] items-end rounded-[20px] border p-4",
        accent === "tech"
          ? "border-accent-tech-border bg-[linear-gradient(135deg,rgba(28,114,147,0.28),rgba(18,25,51,0.92))]"
          : "border-accent-creative-border bg-[linear-gradient(135deg,rgba(156,227,125,0.2),rgba(18,25,51,0.92))]",
      )}
    >
      <span className="text-sm font-medium text-text-primary">{label}</span>
    </div>
  );
}
