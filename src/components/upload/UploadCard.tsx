import { useState } from "react";
import { Upload, Image as ImageIcon, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadCardProps {
  label: string;
  variant?: "a" | "b";
}

export function UploadCard({ label, variant = "a" }: UploadCardProps) {
  const [hasImage, setHasImage] = useState(false);

  return (
    <div className="animate-slide-up rounded-2xl bg-card p-6 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-card-foreground">{label}</h3>
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold",
            variant === "a"
              ? "bg-primary/10 text-primary"
              : "bg-accent text-accent-foreground"
          )}
        >
          {variant.toUpperCase()}
        </span>
      </div>

      <div
        className={cn(
          "relative mb-4 flex aspect-video cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all duration-200",
          hasImage
            ? "border-primary bg-primary/5"
            : "border-border bg-muted/50 hover:border-primary/50 hover:bg-muted"
        )}
        onClick={() => setHasImage(true)}
      >
        {hasImage ? (
          <>
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="h-full w-full bg-gradient-to-br from-muted to-secondary" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </div>
            
            {/* Draggable region boxes */}
            <div className="absolute left-4 top-4 flex cursor-move items-center gap-1.5 rounded-md bg-primary/90 px-2.5 py-1.5 text-xs font-medium text-primary-foreground shadow-lg backdrop-blur-sm">
              <Move className="h-3 w-3" />
              Headline
            </div>
            <div className="absolute bottom-4 right-4 flex cursor-move items-center gap-1.5 rounded-md bg-success/90 px-2.5 py-1.5 text-xs font-medium text-success-foreground shadow-lg backdrop-blur-sm">
              <Move className="h-3 w-3" />
              CTA
            </div>
          </>
        ) : (
          <>
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Upload className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="mb-1 text-sm font-medium text-card-foreground">
              Drop your creative here
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG up to 10MB
            </p>
          </>
        )}
      </div>

      <Button variant="outline" className="w-full">
        <Upload className="h-4 w-4" />
        Upload Ad Creative
      </Button>
    </div>
  );
}
