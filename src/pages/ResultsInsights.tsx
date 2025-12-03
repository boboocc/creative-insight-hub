import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HeatmapCard } from "@/components/results/HeatmapCard";
import { ScoreCard } from "@/components/results/ScoreCard";
import { AISummaryCard } from "@/components/results/AISummaryCard";

export default function ResultsInsights() {
  return (
    <DashboardLayout title="Results & Insights">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Attention Analysis Complete
          </h2>
          <p className="text-muted-foreground">
            AI has analyzed both creatives. Here's what we found.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <HeatmapCard label="Creative A" variant="a" />
              <HeatmapCard label="Creative B" variant="b" />
            </div>
            <AISummaryCard />
          </div>

          <div>
            <ScoreCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
