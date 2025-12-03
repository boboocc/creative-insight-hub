import { Sparkles, RefreshCw, Wand2, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [ 
  "Product Focus & Attention: Ad A presents the jacket as the clear hero item and captures product-focused attention more effectively than Ad B, where the viewer’s attention spreads across the full outfit rather than the jacket itself.",
  "CTA Visibility: Both ads have weak, low-contrast CTAs that fail to attract attention, and increasing CTA color contrast would significantly improve actionability.",
  "Text Legibility: Ad A delivers clearer, more readable copy due to its clean sky background, whereas Ad B’s text overlaps with the pants and creates unnecessary visual noise.",
  "Brand Visibility: Ad B offers stronger brand visibility with a centrally placed, easily noticeable logo, while Ad A’s lower logo placement makes the brand less likely to be seen quickly.",
  "Message–Visual Fit: Ad A aligns better with the “light” and “warm” message through its bright sky, upward pose, and airy mood, whereas Ad B’s more static and formal presentation weakens the intended emotional tone.",
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
