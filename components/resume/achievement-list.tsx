import { Card } from "@/components/ui/card";

type AchievementListProps = {
  items: string[];
};

export function AchievementList({ items }: AchievementListProps) {
  return (
    <Card className="space-y-4">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-text-primary">
        Selected achievements
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-7 text-text-secondary sm:text-base" key={item}>
            <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
