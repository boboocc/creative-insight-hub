import { TrendingUp, Target, Eye } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface MetricProps {
  label: string;
  valueA: number;
  valueB: number;
  icon: React.ElementType;
}

function Metric({ label, valueA, valueB, icon: Icon }: MetricProps) {
  const winner = valueA > valueB ? "a" : valueB > valueA ? "b" : "tie";
  
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Creative A</span>
            <span className={cn(
              "text-sm font-semibold",
              winner === "a" ? "text-success" : "text-card-foreground"
            )}>
              {valueA}%
            </span>
          </div>
          <Progress value={valueA} className="h-2" />
        </div>
        
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Creative B</span>
            <span className={cn(
              "text-sm font-semibold",
              winner === "b" ? "text-success" : "text-card-foreground"
            )}>
              {valueB}%
            </span>
          </div>
          <Progress value={valueB} className="h-2" />
        </div>
      </div>
    </div>
  );
}

export function ScoreCard() {
  return (
    <div className="animate-slide-up rounded-2xl bg-card p-6 shadow-card" style={{ animationDelay: "0.1s" }}>
      <h3 className="mb-6 text-lg font-semibold text-card-foreground">Attention Scores</h3>
      
      <div className="space-y-6">
        <Metric
          label="Headline Attention"
          valueA={85}
          valueB={72}
          icon={Eye}
        />
        
        <Metric
          label="CTA Attention"
          valueA={68}
          valueB={74}
          icon={Target}
        />
        
        <div className="rounded-xl bg-accent/50 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-card-foreground">
            <TrendingUp className="h-4 w-4 text-primary" />
            Overall Likely-to-Convert Score
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-success">83%</div>
              <div className="text-xs text-muted-foreground">Creative A</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-card-foreground">71%</div>
              <div className="text-xs text-muted-foreground">Creative B</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
