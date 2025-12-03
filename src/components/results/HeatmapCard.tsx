import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeatmapCardProps {
  label: string;
  variant: "a" | "b";
}

export function HeatmapCard({ label, variant }: HeatmapCardProps) {
  return (
    <div className="animate-slide-up rounded-2xl bg-card p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-card-foreground">{label}</h3>
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

      <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
        <div className="h-full w-full bg-gradient-to-br from-secondary to-muted" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
        </div>
        
        {/* Heatmap overlay */}
        <div
          className={cn(
            "absolute inset-0",
            variant === "a" ? "heatmap-overlay-a" : "heatmap-overlay-b"
          )}
        />
        
        {/* Hotspots */}
        <div
          className={cn(
            "absolute h-16 w-24 rounded-lg",
            variant === "a" ? "left-6 top-6" : "left-8 top-4",
            "bg-gradient-radial from-warning/60 to-destructive/20 blur-sm animate-pulse-slow"
          )}
        />
        <div
          className={cn(
            "absolute h-12 w-20 rounded-lg",
            variant === "a" ? "bottom-8 right-6" : "bottom-6 right-8",
            "bg-gradient-radial from-warning/50 to-success/20 blur-sm animate-pulse-slow"
          )}
        />
      </div>
    </div>
  );
}
