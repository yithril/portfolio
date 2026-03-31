import { Badge } from "@/components/ui/badge";

type TagListProps = {
  tags: string[];
  tone?: "tech" | "creative" | "warm";
};

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="tech">
          {tag}
        </Badge>
      ))}
    </div>
  );
}
