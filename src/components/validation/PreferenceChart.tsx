import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Day 1", A: 45, B: 55 },
  { name: "Day 2", A: 38, B: 62 },
  { name: "Day 3", A: 42, B: 58 },
  { name: "Day 4", A: 35, B: 65 },
  { name: "Day 5", A: 37, B: 63 },
];

export function PreferenceChart() {
  return (
    <div className="animate-slide-up rounded-2xl bg-card p-6 shadow-card" style={{ animationDelay: "0.1s" }}>
      <h3 className="mb-4 text-lg font-semibold text-card-foreground">
        User Click Preference
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-md)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Bar dataKey="A" name="Creative A" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-a-${index}`} fill="hsl(var(--primary))" opacity={0.6} />
              ))}
            </Bar>
            <Bar dataKey="B" name="Creative B" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-b-${index}`} fill="hsl(var(--success))" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-primary/60" />
          <span className="text-sm text-muted-foreground">Creative A</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-success" />
          <span className="text-sm text-muted-foreground">Creative B</span>
        </div>
      </div>
    </div>
  );
}
