import { Image as ImageIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface VotingCardProps {
  label: string;
  variant: "a" | "b";
  percentage: number;
  isWinner?: boolean;
}

export function VotingCard({ label, variant, percentage, isWinner }: VotingCardProps) {
  return (
    <div
      className={cn(
        "animate-slide-up rounded-2xl bg-card p-4 shadow-card transition-all",
        isWinner && "ring-2 ring-success"
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-card-foreground">{label}</h3>
        <div className="flex items-center gap-2">
          {isWinner && (
            <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
              Winner
            </span>
          )}
          <span
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
              variant === "a"
                ? "bg-primary/10 text-primary"
                : "bg-accent text-accent-foreground"
            )}
          >
            {variant.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-muted">
        <div className="h-full w-full bg-gradient-to-br from-secondary to-muted" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">User Preference</span>
          <span
            className={cn(
              "font-semibold",
              isWinner ? "text-success" : "text-card-foreground"
            )}
          >
            {percentage}%
          </span>
        </div>
        <Progress
          value={percentage}
          className={cn("h-3", isWinner && "[&>div]:bg-success")}
        />
      </div>
    </div>
  );
}
