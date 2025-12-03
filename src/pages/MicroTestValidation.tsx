import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { VotingCard } from "@/components/validation/VotingCard";
import { PreferenceChart } from "@/components/validation/PreferenceChart";
import { OutcomeCallout } from "@/components/validation/OutcomeCallout";

export default function MicroTestValidation() {
  return (
    <DashboardLayout title="Micro-Test Validation">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            A/B Test Dashboard
          </h2>
          <p className="text-muted-foreground">
            Real user preferences validate our AI predictions
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <VotingCard
                label="Creative A"
                variant="a"
                percentage={37}
                isWinner={false}
              />
              <VotingCard
                label="Creative B"
                variant="b"
                percentage={63}
                isWinner={true}
              />
            </div>
            <PreferenceChart />
          </div>

          <div>
            <OutcomeCallout improvement={12} winner="B" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
