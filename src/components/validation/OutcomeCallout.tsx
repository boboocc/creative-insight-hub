import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OutcomeCalloutProps {
  improvement: number;
  winner: "A" | "B";
}

export function OutcomeCallout({ improvement, winner }: OutcomeCalloutProps) {
  return (
    <div
      className="animate-slide-up rounded-2xl bg-gradient-to-br from-success/10 via-success/5 to-transparent p-6 ring-1 ring-success/20"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/20">
          <TrendingUp className="h-5 w-5 text-success" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Test Results
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Based on 1,247 user interactions over 5 days
          </p>
        </div>
      </div>

      <div className="mb-6 rounded-xl bg-card p-4">
        <p className="text-center text-lg">
          <span className="font-semibold text-success">Version {winner}</span>
          <span className="text-card-foreground"> outperforms </span>
          <span className="font-medium text-card-foreground">
            {winner === "B" ? "A" : "B"}
          </span>
          <span className="text-card-foreground"> by </span>
          <span className="text-2xl font-bold text-success">
            +{improvement}%
          </span>
          <span className="text-card-foreground"> predicted conversion</span>
        </p>
      </div>

      <Button variant="gradient" size="lg" className="w-full">
        Generate Shareable Test Link
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
