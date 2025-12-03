import { ArrowRight, Sparkles, Target, BarChart3, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description: "Advanced attention heatmaps predict where users will look first",
  },
  {
    icon: Target,
    title: "Conversion Scoring",
    description: "Get likelihood-to-convert scores for headlines and CTAs",
  },
  {
    icon: BarChart3,
    title: "A/B Validation",
    description: "Validate predictions with real micro-tests from actual users",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl py-12">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <Zap className="h-4 w-4" />
            AI-Powered Creative Intelligence
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Predict Creative Performance
            <br />
            <span className="text-primary">Before You Spend</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Upload your ad creatives, get instant attention heatmaps, 
            and discover which version will convert better—all powered by AI.
          </p>
          
          <Button
            variant="gradient"
            size="lg"
            className="min-w-48"
            onClick={() => navigate("/compare")}
          >
            Start Comparing
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-slide-up rounded-2xl bg-card p-6 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
