import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UploadCard } from "@/components/upload/UploadCard";
import { Button } from "@/components/ui/button";

export default function UploadCompare() {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Upload & Compare">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Compare Your Creatives
          </h2>
          <p className="text-muted-foreground">
            Upload two ad creatives and let AI analyze their attention patterns
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <UploadCard label="Creative A" variant="a" />
          <UploadCard label="Creative B" variant="b" />
        </div>

        <div className="flex justify-center">
          <Button
            variant="gradient"
            size="lg"
            className="min-w-64"
            onClick={() => navigate("/insights")}
          >
            <Zap className="h-5 w-5" />
            Generate Heatmap
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
