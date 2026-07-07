"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", complaints: 820, resolved: 650 },
  { month: "Feb", complaints: 930, resolved: 780 },
  { month: "Mar", complaints: 1100, resolved: 890 },
  { month: "Apr", complaints: 980, resolved: 820 },
  { month: "May", complaints: 1250, resolved: 1050 },
  { month: "Jun", complaints: 1420, resolved: 1100 },
];

const categoryData = [
  { name: "Roads", count: 3820 },
  { name: "Water", count: 2660 },
  { name: "Sanitation", count: 1910 },
  { name: "Electricity", count: 1580 },
  { name: "Healthcare", count: 1155 },
  { name: "Others", count: 1717 },
];

const wardData = [
  { ward: "W1", score: 72 },
  { ward: "W2", score: 85 },
  { ward: "W3", score: 61 },
  { ward: "W4", score: 90 },
  { ward: "W5", score: 55 },
  { ward: "W6", score: 78 },
  { ward: "W7", score: 83 },
  { ward: "W8", score: 69 },
];

const tt = {
  contentStyle: { fontSize: 12, borderRadius: 8, border: "1px solid #e4e4e7" },
};

export default function AnalyticsPage() {
  return (
    <DashboardLayout
      title="Analytics"
      subtitle="Deep dive into complaints data, resolution trends, and ward-level performance."
    >
      {/* Top row: trend chart + KPI cards */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5">
        {/* Monthly Trend */}
        <div className="col-span-full xl:col-span-8 bg-white rounded-2xl p-5 shadow-sm border border-zinc-200">
          <h3 className="text-sm font-semibold text-zinc-950 mb-4">
            Monthly Complaints vs Resolved
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart
              data={monthlyData}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="cG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6900" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#ff6900" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="rG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E8E3E" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#1E8E3E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11, fill: "#71717b" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#71717b" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip {...tt} />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 11 }}
              />
              <Area
                type="monotone"
                dataKey="complaints"
                name="Complaints"
                stroke="#ff6900"
                strokeWidth={2}
                fill="url(#cG)"
              />
              <Area
                type="monotone"
                dataKey="resolved"
                name="Resolved"
                stroke="#1E8E3E"
                strokeWidth={2}
                fill="url(#rG)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* KPI cards */}
        <div className="col-span-full xl:col-span-4 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
          {[
            {
              label: "Avg Resolution Time",
              value: "4.2 days",
              delta: "↓ 1.2d",
              color: "#ff6900",
            },
            {
              label: "Resolution Rate",
              value: "78%",
              delta: "↑ 6%",
              color: "#1E8E3E",
            },
            {
              label: "Escalation Rate",
              value: "8.4%",
              delta: "↓ 2.1%",
              color: "#1E88E5",
            },
          ].map((k) => (
            <div
              key={k.label}
              className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex flex-col justify-center"
            >
              <p className="text-xs text-[#71717b] uppercase tracking-wide">
                {k.label}
              </p>
              <p className="text-2xl font-bold mt-1" style={{ color: k.color }}>
                {k.value}
              </p>
              <p className="text-xs mt-1 text-[#1E8E3E]">
                {k.delta} vs last period
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: category + ward charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Category chart */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200">
          <h3 className="text-sm font-semibold text-zinc-950 mb-4">
            Complaints by Category
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={categoryData}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f4f4f5"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#71717b" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#71717b" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip {...tt} />
              <Bar
                dataKey="count"
                name="Complaints"
                fill="#ff6900"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Ward performance */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200">
          <h3 className="text-sm font-semibold text-zinc-950 mb-4">
            Ward Performance Score
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={wardData}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f4f4f5"
                vertical={false}
              />
              <XAxis
                dataKey="ward"
                tick={{ fontSize: 11, fill: "#71717b" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#71717b" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip {...tt} />
              <Bar
                dataKey="score"
                name="Score"
                fill="#1E8E3E"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
