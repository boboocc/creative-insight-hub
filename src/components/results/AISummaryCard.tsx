import { Sparkles, RefreshCw, Wand2, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  "Creative B's headline is 40% larger and positioned in the upper third, capturing attention within the first 0.5 seconds.",
  "CTA button in Creative B uses higher contrast (teal on dark) vs Creative A's muted gray, improving click likelihood by ~18%.",
  "Consider A/B testing Creative B with a shorter headline (max 6 words) to further boost engagement.",
];

export function AISummaryCard() {
  return (
    <div className="animate-slide-up rounded-2xl bg-card p-6 shadow-card" style={{ animationDelay: "0.2s" }}>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground">AI Summary</h3>
      </div>
      
      <ul className="mb-6 space-y-3">
        {insights.map((insight, index) => (
          <li
            key={index}
            className="flex gap-3 rounded-lg bg-secondary/50 p-3 text-sm text-secondary-foreground"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4" />
          Regenerate Headline
        </Button>
        <Button variant="outline" size="sm">
          <Wand2 className="h-4 w-4" />
          Generate CTA Variants
        </Button>
        <Button variant="gradient" size="sm">
          <FileDown className="h-4 w-4" />
          Export Mini Report
        </Button>
      </div>
    </div>
  );
}
