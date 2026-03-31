import { Card } from "@/components/ui/card";

type PhilosophyCardProps = {
  title: string;
  body: string;
};

export function PhilosophyCard({ title, body }: PhilosophyCardProps) {
  return (
    <Card className="h-full space-y-3" hoverable>
      <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary">
        {title}
      </h3>
      <p className="text-sm leading-7 text-text-secondary sm:text-base">{body}</p>
    </Card>
  );
}
